import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ENVIRONMENT_TOKEN } from '../../../tokens/tokens/environement.token';
import { UserStorageService } from '../user-storage/user-storage-service';
import { UserProfileService } from './user-profile-service';

describe('UserProfileService', () => {
  let service: UserProfileService;
  let httpMock: HttpTestingController;
  let userStorage: jasmine.SpyObj<UserStorageService>;

  const mockEnvironment = {
    API_BACKEND_URL: 'http://localhost:3000',
    API_BACKEND_PREFIX: 'api',
  };

  beforeEach(() => {
    // Create spy for UserStorageService
    const userStorageSpy = jasmine.createSpyObj('UserStorageService', ['updateUser']);

    TestBed.configureTestingModule({
      providers: [
        UserProfileService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: UserStorageService, useValue: userStorageSpy },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
      ],
    });

    service = TestBed.inject(UserProfileService);
    httpMock = TestBed.inject(HttpTestingController);
    userStorage = TestBed.inject(UserStorageService) as jasmine.SpyObj<UserStorageService>;

    spyOn(console, 'log'); // Suppress console logs
    spyOn(console, 'error'); // Suppress console errors
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateUserPhoto', () => {
    const photoUrl = 'https://example.com/photo.jpg';
    const expectedUrl = `${mockEnvironment.API_BACKEND_URL}/${mockEnvironment.API_BACKEND_PREFIX}/authentication/update-photo`;

    it('should update user photo successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Photo updated successfully',
        photoUrl: photoUrl,
      };

      const updatePromise = service.updateUserPhoto(photoUrl);

      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual({ photoUrl });
      req.flush(mockResponse);

      const response = await updatePromise;

      expect(response).toEqual(mockResponse);
      expect(userStorage.updateUser).toHaveBeenCalledWith({ photoUrl });
    });

    it('should not update local storage if response is not successful', async () => {
      const mockResponse = {
        success: false,
        message: 'Failed to update photo',
      };

      const updatePromise = service.updateUserPhoto(photoUrl);

      const req = httpMock.expectOne(expectedUrl);
      req.flush(mockResponse);

      const response = await updatePromise;

      expect(response).toEqual(mockResponse);
      expect(userStorage.updateUser).not.toHaveBeenCalled();
    });

    it('should not update local storage if photoUrl is missing in response', async () => {
      const mockResponse = {
        success: true,
        message: 'Photo updated',
      };

      const updatePromise = service.updateUserPhoto(photoUrl);

      const req = httpMock.expectOne(expectedUrl);
      req.flush(mockResponse);

      const response = await updatePromise;

      expect(response).toEqual(mockResponse);
      expect(userStorage.updateUser).not.toHaveBeenCalled();
    });

    it('should handle HTTP error with Error instance', async () => {
      const error = new Error('Network error');

      const updatePromise = service.updateUserPhoto(photoUrl);

      const req = httpMock.expectOne(expectedUrl);
      req.error(new ProgressEvent('error'), { status: 500, statusText: 'Server Error' });

      const response = await updatePromise;

      expect(response.success).toBe(false);
      expect(response.message).toContain('Failed to update photo');
      expect(userStorage.updateUser).not.toHaveBeenCalled();
    });

    it('should handle non-Error exceptions', async () => {
      const updatePromise = service.updateUserPhoto(photoUrl);

      const req = httpMock.expectOne(expectedUrl);
      req.error(new ProgressEvent('error'), { status: 404, statusText: 'Not Found' });

      const response = await updatePromise;

      expect(response.success).toBe(false);
      expect(response.message).toContain('Failed to update photo');
    });

    it('should construct correct URL from environment config', async () => {
      const mockResponse = {
        success: true,
        message: 'Photo updated',
        photoUrl: photoUrl,
      };

      const updatePromise = service.updateUserPhoto(photoUrl);

      const req = httpMock.expectOne(
        `${mockEnvironment.API_BACKEND_URL}/${mockEnvironment.API_BACKEND_PREFIX}/authentication/update-photo`
      );
      expect(req.request.url).toBe(expectedUrl);
      req.flush(mockResponse);

      await updatePromise;
    });
  });

  describe('Error Handling', () => {
    it('should log error details when update fails', async () => {
      const photoUrl = 'https://example.com/error-photo.jpg';
      const expectedUrl = `${mockEnvironment.API_BACKEND_URL}/${mockEnvironment.API_BACKEND_PREFIX}/authentication/update-photo`;

      const updatePromise = service.updateUserPhoto(photoUrl);

      const req = httpMock.expectOne(expectedUrl);
      req.error(new ProgressEvent('error'), { status: 500, statusText: 'Server Error' });

      await updatePromise;

      expect(console.error).toHaveBeenCalled();
    });
  });
});
