import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import type { Image } from '@db/prisma/browser';
import { ImageService } from '@fe/image-mgt';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { of, throwError } from 'rxjs';
import { Carousel, ICarouselConfig } from './carousel';

describe('Carousel', () => {
  let component: Carousel;
  let fixture: ComponentFixture<Carousel>;
  let imageService: jasmine.SpyObj<ImageService>;

  const mockImages: Image[] = [
    {
      id: '1',
      numSeq: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true,
      isPublic: true,
      isDeleted: 0,
      isDeletedDT: null,
      filename: 'image1.jpg',
      originalName: 'Image 1',
      mimeType: 'image/jpeg',
      fileSize: 1024,
      width: 1920,
      height: 1080,
      storageType: 'local',
      storagePath: '/uploads/image1.jpg',
      storageUrl: 'http://localhost:3000/uploads/image1.jpg',
      bucketName: null,
      isProcessed: true,
      thumbnailUrl: 'http://localhost:3000/uploads/thumbnails/image1.jpg',
      variants: null,
      tags: ['nature', 'landscape'],
      altText: 'Beautiful landscape',
      description: 'A stunning natural landscape',
      uploadedById: 'user1',
      associatedId: null,
      associationType: null,
      sequence: 0,
      orgId: null,
      postId: null,
      profileUserId: null,
      storyId: null,
    },
    {
      id: '2',
      numSeq: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      published: true,
      isPublic: true,
      isDeleted: 0,
      isDeletedDT: null,
      filename: 'image2.jpg',
      originalName: 'Image 2',
      mimeType: 'image/jpeg',
      fileSize: 2048,
      width: 1920,
      height: 1080,
      storageType: 'local',
      storagePath: '/uploads/image2.jpg',
      storageUrl: 'http://localhost:3000/uploads/image2.jpg',
      bucketName: null,
      isProcessed: true,
      thumbnailUrl: 'http://localhost:3000/uploads/thumbnails/image2.jpg',
      variants: null,
      tags: ['city'],
      altText: 'City skyline',
      description: 'Urban cityscape at night',
      uploadedById: 'user1',
      associatedId: null,
      associationType: null,
      sequence: 1,
      orgId: null,
      postId: null,
      profileUserId: null,
      storyId: null,
    },
  ];

  const mockEnvironment = {
    production: false,
    API_BACKEND_URL: 'http://localhost:3000/api',
    API_GATEWAY_URL: 'http://localhost:3000',
  };

  beforeEach(async () => {
    const imageServiceSpy = jasmine.createSpyObj('ImageService', [
      'getImages',
      'getImagesByTags',
    ]);

    await TestBed.configureTestingModule({
      imports: [Carousel, NoopAnimationsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ImageService, useValue: imageServiceSpy },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
      ],
    }).compileComponents();

    imageService = TestBed.inject(ImageService) as jasmine.SpyObj<ImageService>;
    imageService.getImages.and.returnValue(of(mockImages));
    imageService.getImagesByTags.and.returnValue(of(mockImages));

    fixture = TestBed.createComponent(Carousel);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load images on initialization', () => {
    fixture.detectChanges();
    expect(imageService.getImages).toHaveBeenCalled();
    expect(component.images().length).toBe(2);
  });

  it('should show loading spinner while loading', () => {
    component.loading.set(true);
    fixture.detectChanges();

    const loadingElement = fixture.nativeElement.querySelector('.carousel-loading');
    expect(loadingElement).toBeTruthy();
  });

  it('should show error message on load failure', () => {
    imageService.getImages.and.returnValue(
      throwError(() => new Error('Load failed'))
    );

    fixture.detectChanges();

    expect(component.error()).toBe('Impossible de charger les images');
  });

  it('should show empty state when no images', () => {
    imageService.getImages.and.returnValue(of([]));
    fixture.detectChanges();

    const emptyElement = fixture.nativeElement.querySelector('.carousel-empty');
    expect(emptyElement).toBeTruthy();
  });

  it('should navigate to next slide', () => {
    fixture.detectChanges();
    expect(component.currentIndex()).toBe(0);

    component.nextSlide();
    expect(component.currentIndex()).toBe(1);
  });

  it('should navigate to previous slide', () => {
    fixture.detectChanges();
    component.currentIndex.set(1);

    component.previousSlide();
    expect(component.currentIndex()).toBe(0);
  });

  it('should loop to first slide when at end with loop enabled', () => {
    fixture.componentRef.setInput('config', { loop: true } as ICarouselConfig);
    fixture.detectChanges();

    component.currentIndex.set(1);
    component.nextSlide();
    expect(component.currentIndex()).toBe(0);
  });

  it('should not advance beyond last slide when loop disabled', () => {
    fixture.componentRef.setInput('config', { loop: false } as ICarouselConfig);
    fixture.detectChanges();

    component.currentIndex.set(1);
    component.nextSlide();
    expect(component.currentIndex()).toBe(1);
  });

  it('should go to specific slide', () => {
    fixture.detectChanges();

    component.goToSlide(1);
    expect(component.currentIndex()).toBe(1);
  });

  it('should emit slideChange event', () => {
    fixture.detectChanges();
    spyOn(component.slideChange, 'emit');

    component.goToSlide(1);
    expect(component.slideChange.emit).toHaveBeenCalledWith(1);
  });

  it('should emit imageClick event', () => {
    fixture.detectChanges();
    spyOn(component.imageClick, 'emit');

    const image = mockImages[0];
    component.onImageClick(image);
    expect(component.imageClick.emit).toHaveBeenCalledWith(image);
  });

  it('should toggle autoplay', () => {
    fixture.detectChanges();
    expect(component.isPlaying()).toBe(false);

    component.toggleAutoPlay();
    expect(component.isPlaying()).toBe(true);

    component.toggleAutoPlay();
    expect(component.isPlaying()).toBe(false);
  });

  it('should get correct image URL', () => {
    const image = mockImages[0];
    const url = component.getImageUrl(image);
    expect(url).toBe('http://localhost:3000/uploads/image1.jpg');
  });

  it('should get correct image alt text', () => {
    const image = mockImages[0];
    const alt = component.getImageAlt(image);
    expect(alt).toBe('Beautiful landscape');
  });

  it('should return current image correctly', () => {
    fixture.detectChanges();
    const current = component.currentImage();
    expect(current).toEqual(mockImages[0]);
  });

  it('should check if has images', () => {
    fixture.detectChanges();
    expect(component.hasImages()).toBe(true);

    component.images.set([]);
    expect(component.hasImages()).toBe(false);
  });

  it('should check if has previous slide', () => {
    fixture.componentRef.setInput('config', { loop: false } as ICarouselConfig);
    fixture.detectChanges();

    component.currentIndex.set(0);
    expect(component.hasPrevious()).toBe(false);

    component.currentIndex.set(1);
    expect(component.hasPrevious()).toBe(true);
  });

  it('should check if has next slide', () => {
    fixture.componentRef.setInput('config', { loop: false } as ICarouselConfig);
    fixture.detectChanges();

    component.currentIndex.set(0);
    expect(component.hasNext()).toBe(true);

    component.currentIndex.set(1);
    expect(component.hasNext()).toBe(false);
  });

  it('should refresh images', () => {
    fixture.detectChanges();
    imageService.getImages.calls.reset();

    component.refresh();
    expect(imageService.getImages).toHaveBeenCalled();
  });

  it('should load images by tags when tags are provided', () => {
    fixture.componentRef.setInput('tags', ['nature']);
    fixture.detectChanges();

    expect(imageService.getImagesByTags).toHaveBeenCalledWith(
      ['nature'],
      jasmine.objectContaining({ isPublic: true })
    );
  });

  it('should apply filter params', () => {
    const customParams = { isPublic: false, take: 5 };
    fixture.componentRef.setInput('filterParams', customParams);
    fixture.detectChanges();

    expect(imageService.getImages).toHaveBeenCalledWith(
      jasmine.objectContaining(customParams)
    );
  });
});
