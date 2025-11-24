import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Image } from '@db/prisma';
import { TokenStorageService } from '@fe/core/auth';
import { ENVIRONMENT_TOKEN } from '@fe/shared';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

export interface CreateImageDto {
  filename: string;
  originalName: string;
  mimeType: string;
  fileSize: number;
  width?: number;
  height?: number;
  storageType?: string;
  storagePath?: string;
  storageUrl?: string;
  bucketName?: string;
  thumbnailUrl?: string;
  variants?: Record<string, unknown>;
  tags?: string[];
  altText?: string;
  description?: string;
  sequence?: number;
  isPublic?: boolean;
  uploadedById: string;
  associatedId?: string;
  associationType?: string;
  orgId?: string;
  postId?: string;
  storyId?: string;
  profileUserId?: string;
}

export interface UpdateImageDto {
  filename?: string;
  originalName?: string;
  mimeType?: string;
  fileSize?: number;
  width?: number;
  height?: number;
  storageType?: string;
  storagePath?: string;
  storageUrl?: string;
  bucketName?: string;
  thumbnailUrl?: string;
  variants?: unknown;
  tags?: string[];
  altText?: string;
  description?: string;
  sequence?: number;
  isPublic?: boolean;
  associatedId?: string;
  associationType?: string;
  orgId?: string;
  postId?: string;
  storyId?: string;
  profileUserId?: string;
}

export interface SearchImagesDto {
  query?: string;
  uploadedById?: string;
  associatedId?: string;
  associationType?: string;
  orgId?: string;
  postId?: string;
  storyId?: string;
  profileUserId?: string;
  mimeType?: string;
  tags?: string[];
  isPublic?: boolean;
  storageType?: string;
  createdAfter?: string;
  createdBefore?: string;
  skip?: number;
  take?: number;
  orderBy?: string;
}

export interface ImageResponse<T = Image> {
  data: T;
  message: string;
}

export interface ImagesResponse {
  data: Image[];
  total: number;
  message: string;
}

export interface BulkResponse {
  count: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private http = inject(HttpClient);
  private environment = inject(ENVIRONMENT_TOKEN);
  private tokenStorage = inject(TokenStorageService);

  private readonly baseUrl = `${this.environment.API_BACKEND_URL}/${this.environment.API_BACKEND_PREFIX}/images`;
  private readonly uploadUrl = `${this.environment.API_BACKEND_URL}/${this.environment.API_BACKEND_PREFIX}/upload`;

  // State management
  private imagesSubject = new BehaviorSubject<Image[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public images$ = this.imagesSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();

  // Core CRUD Operations

  createImage(imageData: CreateImageDto): Observable<Image> {
    this.loadingSubject.next(true);
    return this.http.post<ImageResponse>(`${this.baseUrl}`, imageData).pipe(
      map(response => {
        this.loadingSubject.next(false);
        // Ajouter la nouvelle image à la liste
        const currentImages = this.imagesSubject.value;
        this.imagesSubject.next([response.data, ...currentImages]);
        return response.data;
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        throw error;
      })
    );
  }

  getImageById(id: string): Observable<Image | null> {
    return this.http.get<ImageResponse>(`${this.baseUrl}/${id}`).pipe(
      map(response => response.data),
      catchError(() => of(null))
    );
  }

  getImages(params: SearchImagesDto = {}): Observable<Image[]> {
    this.loadingSubject.next(true);

    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      const value = params[key as keyof SearchImagesDto];
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => httpParams = httpParams.append(key, item.toString()));
        } else {
          httpParams = httpParams.set(key, value.toString());
        }
      }
    });

    return this.http.get<ImagesResponse>(`${this.baseUrl}`, { params: httpParams }).pipe(
      map(response => {
        this.loadingSubject.next(false);
        this.imagesSubject.next(response.data);
        return response.data;
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        throw error;
      })
    );
  }

  updateImage(id: string, imageData: UpdateImageDto): Observable<Image> {
    return this.http.put<ImageResponse>(`${this.baseUrl}/${id}`, imageData).pipe(
      map(response => {
        // Mettre à jour l'image dans la liste
        const currentImages = this.imagesSubject.value;
        const updatedImages = currentImages.map(img =>
          img.id === id ? response.data : img
        );
        this.imagesSubject.next(updatedImages);
        return response.data;
      })
    );
  }

  deleteImage(id: string, soft = true): Observable<Image> {
    const params = new HttpParams().set('soft', soft.toString());

    return this.http.delete<ImageResponse>(`${this.baseUrl}/${id}`, { params }).pipe(
      map(response => {
        // Retirer l'image de la liste
        const currentImages = this.imagesSubject.value;
        const filteredImages = currentImages.filter(img => img.id !== id);
        this.imagesSubject.next(filteredImages);
        return response.data;
      })
    );
  }

  // Bulk Operations

  bulkUpdateImages(ids: string[], updates: UpdateImageDto): Observable<number> {
    return this.http.put<BulkResponse>(`${this.baseUrl}/bulk/update`, { ids, updates }).pipe(
      map(response => {
        // Recharger les images
        this.refreshImages();
        return response.count;
      })
    );
  }

  bulkDeleteImages(ids: string[], soft = true): Observable<number> {
    return this.http.delete<BulkResponse>(`${this.baseUrl}/bulk/delete`, {
      body: { ids, soft }
    }).pipe(
      map(response => {
        // Retirer les images supprimées de la liste
        const currentImages = this.imagesSubject.value;
        const filteredImages = currentImages.filter(img => !ids.includes(img.id));
        this.imagesSubject.next(filteredImages);
        return response.count;
      })
    );
  }

  // Search Operations

  searchImages(query: string, filters: SearchImagesDto = {}): Observable<Image[]> {
    this.loadingSubject.next(true);

    let httpParams = new HttpParams().set('q', query);
    Object.keys(filters).forEach(key => {
      const value = filters[key as keyof SearchImagesDto];
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => httpParams = httpParams.append(key, item.toString()));
        } else {
          httpParams = httpParams.set(key, value.toString());
        }
      }
    });

    return this.http.get<ImagesResponse>(`${this.baseUrl}/search/query`, { params: httpParams }).pipe(
      map(response => {
        this.loadingSubject.next(false);
        return response.data;
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        throw error;
      })
    );
  }

  // Tag Management

  addTagsToImages(imageIds: string[], tags: string[]): Observable<number> {
    return this.http.put<BulkResponse>(`${this.baseUrl}/tags/add`, { imageIds, tags }).pipe(
      map(response => {
        this.refreshImages();
        return response.count;
      })
    );
  }

  removeTagsFromImages(imageIds: string[], tags: string[]): Observable<number> {
    return this.http.put<BulkResponse>(`${this.baseUrl}/tags/remove`, { imageIds, tags }).pipe(
      map(response => {
        this.refreshImages();
        return response.count;
      })
    );
  }

  getImagesByTags(tags: string[], filters: SearchImagesDto = {}): Observable<Image[]> {
    this.loadingSubject.next(true);

    let httpParams = new HttpParams();
    Object.keys(filters).forEach(key => {
      const value = filters[key as keyof SearchImagesDto];
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    const tagsParam = tags.join(',');
    return this.http.get<ImagesResponse>(`${this.baseUrl}/tags/${tagsParam}`, { params: httpParams }).pipe(
      map(response => {
        this.loadingSubject.next(false);
        return response.data;
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        throw error;
      })
    );
  }

  // Association Management

  associateWithPost(imageIds: string[], postId: string): Observable<number> {
    return this.http.put<BulkResponse>(`${this.baseUrl}/associate/post`, {
      imageIds,
      targetId: postId
    }).pipe(
      map(response => response.count)
    );
  }

  associateWithUser(imageIds: string[], userId: string, asProfile = false): Observable<number> {
    return this.http.put<BulkResponse>(`${this.baseUrl}/associate/user`, {
      imageIds,
      targetId: userId,
      asProfile
    }).pipe(
      map(response => response.count)
    );
  }

  associateWithOrganization(imageIds: string[], orgId: string): Observable<number> {
    return this.http.put<BulkResponse>(`${this.baseUrl}/associate/organization`, {
      imageIds,
      targetId: orgId
    }).pipe(
      map(response => response.count)
    );
  }

  // Metadata Management

  updateImageMetadata(id: string, metadata: { altText?: string; description?: string; tags?: string[] }): Observable<Image> {
    return this.http.put<ImageResponse>(`${this.baseUrl}/${id}/metadata`, metadata).pipe(
      map(response => {
        // Mettre à jour l'image dans la liste
        const currentImages = this.imagesSubject.value;
        const updatedImages = currentImages.map(img =>
          img.id === id ? response.data : img
        );
        this.imagesSubject.next(updatedImages);
        return response.data;
      })
    );
  }

  // Utility Methods

  uploadFile(file: File, metadata: Partial<CreateImageDto>): Observable<Image> {
    const formData = new FormData();
    formData.append('file', file);

    // Mapping des métadonnées vers les champs attendus par le upload controller
    if (metadata.uploadedById) {
      formData.append('uploadedById', metadata.uploadedById);
    }

    // Ajout des autres métadonnées optionnelles
    if (metadata.tags && Array.isArray(metadata.tags)) {
      formData.append('tags', metadata.tags.join(','));
    }
    if (metadata.altText) {
      formData.append('altText', metadata.altText);
    }
    if (metadata.description) {
      formData.append('description', metadata.description);
    }
    if (metadata.isPublic !== undefined) {
      formData.append('isPublic', metadata.isPublic.toString());
    }
    if (metadata.orgId) {
      formData.append('orgId', metadata.orgId);
    }
    if (metadata.postId) {
      formData.append('postId', metadata.postId);
    }
    if (metadata.profileUserId) {
      formData.append('profileUserId', metadata.profileUserId);
    }
    if (metadata.associatedId) {
      formData.append('associatedId', metadata.associatedId);
    }
    if (metadata.associationType) {
      formData.append('associationType', metadata.associationType);
    }

    return this.http.post<{ data: Image; message: string }>(`${this.uploadUrl}/image`, formData).pipe(
      map(response => {
        // Ajouter l'image à la liste locale
        const currentImages = this.imagesSubject.value;
        this.imagesSubject.next([response.data, ...currentImages]);
        return response.data;
      })
    );
  }

  uploadMultipleFiles(files: FileList, metadata: Partial<CreateImageDto>): Observable<Image[]> {
    this.loadingSubject.next(true);
    const formData = new FormData();

    // Ajouter tous les fichiers
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });

    // Ajouter les métadonnées (même format que uploadFile)
    if (metadata.uploadedById) {
      formData.append('uploadedById', metadata.uploadedById);
    }
    if (metadata.tags && Array.isArray(metadata.tags)) {
      formData.append('tags', metadata.tags.join(','));
    }
    if (metadata.altText) {
      formData.append('altText', metadata.altText);
    }
    if (metadata.description) {
      formData.append('description', metadata.description);
    }
    if (metadata.isPublic !== undefined) {
      formData.append('isPublic', metadata.isPublic.toString());
    }
    if (metadata.orgId) {
      formData.append('orgId', metadata.orgId);
    }
    if (metadata.postId) {
      formData.append('postId', metadata.postId);
    }
    if (metadata.profileUserId) {
      formData.append('profileUserId', metadata.profileUserId);
    }
    if (metadata.associatedId) {
      formData.append('associatedId', metadata.associatedId);
    }
    if (metadata.associationType) {
      formData.append('associationType', metadata.associationType);
    }

    return this.http.post<{ data: Image[]; count: number; message: string }>(`${this.uploadUrl}/images`, formData).pipe(
      map(response => {
        this.loadingSubject.next(false);
        // Ajouter les nouvelles images à la liste
        const currentImages = this.imagesSubject.value;
        this.imagesSubject.next([...response.data, ...currentImages]);
        return response.data;
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        throw error;
      })
    );
  }

  uploadAvatar(file: File, uploadedById: string, profileUserId: string): Observable<Image> {
    this.loadingSubject.next(true);
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('uploadedById', uploadedById);
    formData.append('profileUserId', profileUserId);

    return this.http.post<{ data: Image; message: string }>(`${this.uploadUrl}/avatar`, formData).pipe(
      map(response => {
        this.loadingSubject.next(false);
        // Ajouter la nouvelle image à la liste
        const currentImages = this.imagesSubject.value;
        this.imagesSubject.next([response.data, ...currentImages]);
        return response.data;
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        throw error;
      })
    );
  }

  refreshImages(): void {
    this.getImages().subscribe();
  }

  clearImages(): void {
    this.imagesSubject.next([]);
  }

  // State getters
  getCurrentImages(): Image[] {
    return this.imagesSubject.value;
  }

  isLoading(): boolean {
    return this.loadingSubject.value;
  }

  // Helper pour construire l'URL complète de l'image
  getFullImageUrl(image: Image, useThumbnail = false): string {
    // Utiliser thumbnailUrl si demandé et disponible, sinon storageUrl
    const url = useThumbnail && image.thumbnailUrl ? image.thumbnailUrl : image.storageUrl;

    if (!url) {
      return '/assets/images/placeholder.png';
    }

    // Si l'URL est déjà absolue, la retourner telle quelle
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }

    // Construire l'URL complète avec le backend
    const backendBaseUrl = this.environment.API_BACKEND_URL;
    const fullUrl = `${backendBaseUrl}${url}`;

    // Si l'image est privée, ajouter le token d'authentification comme paramètre de requête
    // C'est nécessaire car les balises <img> ne peuvent pas envoyer des headers personnalisés
    if (!image.isPublic) {
      const token = this.tokenStorage.authToken();
      if (token) {
        // Ajouter le token comme paramètre de requête
        const separator = fullUrl.includes('?') ? '&' : '?';
        return `${fullUrl}${separator}token=${encodeURIComponent(token)}`;
      }
    }

    return fullUrl;
  }
}
