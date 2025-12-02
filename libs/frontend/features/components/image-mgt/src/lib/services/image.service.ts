import { HttpClient, HttpParams } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import type { Image } from '@db/prisma';
import { TokenStorageService } from '@fe/core/auth';
import { ENVIRONMENT_TOKEN } from '@fe/token';
import { firstValueFrom } from 'rxjs';

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

  // Construction dynamique des URLs backend avec préfixe depuis l'environnement
  private readonly apiBaseUrl = this.environment.API_BACKEND_URL?.replace(/\/$/, '');
  private readonly apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
  private readonly baseUrl = `${this.apiBaseUrl}/${this.apiPrefix}/images`;
  private readonly uploadUrl = `${this.apiBaseUrl}/${this.apiPrefix}/upload`;

  // State management (signals)
  private readonly imagesSignal = signal<Image[]>([]);
  private readonly loadingSignal = signal(false);
  private readonly urlCacheBuster = signal<number>(Date.now());

  // Exposed signals for UI
  public readonly images = this.imagesSignal;
  public readonly loading = this.loadingSignal;

  constructor() {
    // Détecter les changements de token pour forcer le rafraîchissement des URLs
    effect(() => {
      const token = this.tokenStorage.authToken();
      console.log('🖼️ ImageService - Token changed:', token ? `${token.substring(0, 20)}...` : 'undefined');
      // TOUJOURS mettre à jour le cache buster, que le token soit présent ou non
      // Cela force le rafraîchissement des URLs quand on se logout aussi
      this.urlCacheBuster.set(Date.now());
      console.log('🔄 ImageService - Cache buster updated:', this.urlCacheBuster());
    });
  }

  // Core CRUD Operations

  async createImage(imageData: CreateImageDto): Promise<Image> {
    this.loadingSignal.set(true);
    try {
      const response = await firstValueFrom(
        this.http.post<ImageResponse>(`${this.baseUrl}`, imageData)
      );
      this.loadingSignal.set(false);
      this.imagesSignal.set([response.data, ...this.imagesSignal()]);
      return response.data;
    } catch (error) {
      this.loadingSignal.set(false);
        throw error;
    }
  }

  async getImageById(id: string): Promise<Image | null> {
    try {
      const response = await firstValueFrom(
        this.http.get<ImageResponse>(`${this.baseUrl}/${id}`)
      );
      return response.data;
    } catch {
      return null;
    }
  }

  async getImages(params: SearchImagesDto = {}): Promise<Image[]> {
    this.loadingSignal.set(true);

    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      const value = params[key as keyof SearchImagesDto];
      if (key === 'isPublic' && value === undefined) {
        return;
      }
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => httpParams = httpParams.append(key, item.toString()));
        } else {
          httpParams = httpParams.set(key, value.toString());
        }
      }
    });

    try {
      const response = await firstValueFrom(
        this.http.get<ImagesResponse>(`${this.baseUrl}`, { params: httpParams })
      );
      this.loadingSignal.set(false);
      this.imagesSignal.set(response.data);
      return response.data;
    } catch (error) {
      this.loadingSignal.set(false);
      throw error;
    }
  }

  async updateImage(id: string, imageData: UpdateImageDto): Promise<Image> {
    const response = await firstValueFrom(
      this.http.put<ImageResponse>(`${this.baseUrl}/${id}`, imageData)
    );
    // Création d'une nouvelle référence de tableau à chaque update
    const updatedImages = this.imagesSignal().map(img =>
      img.id === id ? { ...response.data } : img
    );
    // Log pour debug propagation
    console.log('[ImageService] Mise à jour imagesSignal', updatedImages);
    this.imagesSignal.set([...updatedImages]);
    return response.data;
  }

  async deleteImage(id: string, soft = true): Promise<Image> {
    const params = new HttpParams().set('soft', soft.toString());
    const response = await firstValueFrom(
      this.http.delete<ImageResponse>(`${this.baseUrl}/${id}`, { params })
    );
    const filteredImages = this.imagesSignal().filter(img => img.id !== id);
    this.imagesSignal.set(filteredImages);
    return response.data;
  }

  // Bulk Operations

  async bulkUpdateImages(ids: string[], updates: UpdateImageDto): Promise<number> {
    const response = await firstValueFrom(
      this.http.put<BulkResponse>(`${this.baseUrl}/bulk/update`, { ids, updates })
    );
    await this.refreshImages();
    return response.count;
  }

  async bulkDeleteImages(ids: string[], soft = true): Promise<number> {
    const response = await firstValueFrom(
      this.http.delete<BulkResponse>(`${this.baseUrl}/bulk/delete`, {
        body: { ids, soft }
      })
    );
    const filteredImages = this.imagesSignal().filter(img => !ids.includes(img.id));
    this.imagesSignal.set(filteredImages);
    return response.count;
  }

  // Search Operations

  async searchImages(query: string, filters: SearchImagesDto = {}): Promise<Image[]> {
    this.loadingSignal.set(true);

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

    try {
      const response = await firstValueFrom(
        this.http.get<ImagesResponse>(`${this.baseUrl}/search/query`, { params: httpParams })
      );
      this.loadingSignal.set(false);
      return response.data;
    } catch (error) {
      this.loadingSignal.set(false);
      throw error;
    }
  }

  // Tag Management

  async addTagsToImages(imageIds: string[], tags: string[]): Promise<number> {
    const response = await firstValueFrom(
      this.http.put<BulkResponse>(`${this.baseUrl}/tags/add`, { imageIds, tags })
    );
    await this.refreshImages();
    return response.count;
  }

  async removeTagsFromImages(imageIds: string[], tags: string[]): Promise<number> {
    const response = await firstValueFrom(
      this.http.put<BulkResponse>(`${this.baseUrl}/tags/remove`, { imageIds, tags })
    );
    await this.refreshImages();
    return response.count;
  }

  async getImagesByTags(tags: string[], filters: SearchImagesDto = {}): Promise<Image[]> {
    this.loadingSignal.set(true);

    let httpParams = new HttpParams();
    Object.keys(filters).forEach(key => {
      const value = filters[key as keyof SearchImagesDto];
      if (key === 'isPublic' && value === undefined) {
        return;
      }
      if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    const tagsParam = tags.join(',');
    try {
      const response = await firstValueFrom(
        this.http.get<ImagesResponse>(`${this.baseUrl}/tags/${tagsParam}`, { params: httpParams })
      );
      this.loadingSignal.set(false);
      return response.data;
    } catch (error) {
      this.loadingSignal.set(false);
      throw error;
    }
  }

  // Association Management

  async associateWithPost(imageIds: string[], postId: string): Promise<number> {
    const response = await firstValueFrom(
      this.http.put<BulkResponse>(`${this.baseUrl}/associate/post`, {
        imageIds,
        targetId: postId
      })
    );
    return response.count;
  }

  async associateWithUser(imageIds: string[], userId: string, asProfile = false): Promise<number> {
    const response = await firstValueFrom(
      this.http.put<BulkResponse>(`${this.baseUrl}/associate/user`, {
        imageIds,
        targetId: userId,
        asProfile
      })
    );
    return response.count;
  }

  async associateWithOrganization(imageIds: string[], orgId: string): Promise<number> {
    const response = await firstValueFrom(
      this.http.put<BulkResponse>(`${this.baseUrl}/associate/organization`, {
        imageIds,
        targetId: orgId
      })
    );
    return response.count;
  }

  // Metadata Management

  async updateImageMetadata(id: string, metadata: { altText?: string; description?: string; tags?: string[] }): Promise<Image> {
    const response = await firstValueFrom(
      this.http.put<ImageResponse>(`${this.baseUrl}/${id}/metadata`, metadata)
    );
    const updatedImages = this.imagesSignal().map(img =>
      img.id === id ? response.data : img
    );
    this.imagesSignal.set(updatedImages);
    return response.data;
  }

  // Utility Methods

  async uploadFile(file: File, metadata: Partial<CreateImageDto>): Promise<Image> {
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

    const response = await firstValueFrom(
      this.http.post<{ data: Image; message: string }>(`${this.uploadUrl}/image`, formData)
    );
    this.imagesSignal.set([response.data, ...this.imagesSignal()]);
    return response.data;
  }

  async uploadMultipleFiles(files: FileList, metadata: Partial<CreateImageDto>): Promise<Image[]> {
    this.loadingSignal.set(true);
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });
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

    try {
      const response = await firstValueFrom(
        this.http.post<{ data: Image[]; count: number; message: string }>(`${this.uploadUrl}/images`, formData)
      );
      this.loadingSignal.set(false);
      this.imagesSignal.set([...response.data, ...this.imagesSignal()]);
      return response.data;
    } catch (error) {
      this.loadingSignal.set(false);
      throw error;
    }
  }

  async uploadAvatar(file: File, uploadedById: string, profileUserId: string): Promise<Image> {
    this.loadingSignal.set(true);
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('uploadedById', uploadedById);
    formData.append('profileUserId', profileUserId);

    try {
      const response = await firstValueFrom(
        this.http.post<{ data: Image; message: string }>(`${this.uploadUrl}/avatar`, formData)
      );
      this.loadingSignal.set(false);
      this.imagesSignal.set([response.data, ...this.imagesSignal()]);
      return response.data;
    } catch (error) {
      this.loadingSignal.set(false);
      throw error;
    }
  }

  async refreshImages(): Promise<void> {
    await this.getImages();
  }

  clearImages(): void {
    this.imagesSignal.set([]);
  }

  // State getters
  getCurrentImages(): Image[] {
    return this.imagesSignal();
  }

  isLoading(): boolean {
    return this.loadingSignal();
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
    const backendBaseUrl = this.environment.API_BACKEND_URL?.replace(/\/$/, '');
    // Si url commence par /, éviter la double barre oblique
    const fullUrl = url.startsWith('/') ? `${backendBaseUrl}${url}` : `${backendBaseUrl}/${url}`;

    // Si l'image est privée, ajouter le token d'authentification comme paramètre de requête
    // C'est nécessaire car les balises <img> ne peuvent pas envoyer des headers personnalisés
    if (!image.isPublic) {
      const token = this.tokenStorage.authToken();
      console.log('🔐 Building private image URL - Token present:', !!token, 'Image:', image.filename);
      if (token) {
        // Ajouter le token + un cache buster qui change seulement quand le token change
        const separator = fullUrl.includes('?') ? '&' : '?';
        const cacheBuster = this.urlCacheBuster();
        const finalUrl = `${fullUrl}${separator}token=${encodeURIComponent(token)}&_t=${cacheBuster}`;
        console.log('🖼️ Private image URL built:', finalUrl.substring(0, 100) + '...');
        return finalUrl;
      } else {
        console.warn('⚠️ No token available for private image:', image.filename);
      }
    }

    return fullUrl;
  }
}
