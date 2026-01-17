import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '@db/prisma/browser';
import { TokenStorageService } from '../token-storage/token-storage-service';
import { UserStorageService } from '../user-storage/user-storage-service';
import { UserFetchService } from './user-fetch-service';

describe('UserFetchService', () => {
  let service: UserFetchService;
  let httpMock: HttpTestingController;
  let tokenStorage: jasmine.SpyObj<TokenStorageService>;
  let userStorage: jasmine.SpyObj<UserStorageService>;

  const mockUser: Partial<User> = {
    id: '1',
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User',
  };

  beforeEach(() => {
    // Create spies for dependencies
    const tokenStorageSpy = jasmine.createSpyObj('TokenStorageService', ['authToken']);
    const userStorageSpy = jasmine.createSpyObj('UserStorageService', ['setUser']);

    TestBed.configureTestingModule({
      providers: [
        UserFetchService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TokenStorageService, useValue: tokenStorageSpy },
        { provide: UserStorageService, useValue: userStorageSpy },
      ],
    });

    service = TestBed.inject(UserFetchService);
    httpMock = TestBed.inject(HttpTestingController);
    tokenStorage = TestBed.inject(TokenStorageService) as jasmine.SpyObj<TokenStorageService>;
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

  describe('fetchUser', () => {
    it('should fetch user profile successfully', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const fetchPromise = service.fetchUser();

      const req = httpMock.expectOne('api/authentication/profile');
      expect(req.request.method).toBe('GET');
      req.flush({ user: mockUser, fullName: 'Test User' });

      const user = await fetchPromise;

      expect(user).toEqual(mockUser);
      expect(console.log).toHaveBeenCalledWith('👤 Profile fetched:', { user: mockUser, fullName: 'Test User' });
    });

    it('should return null when no token available', async () => {
      tokenStorage.authToken.and.returnValue(undefined);

      const user = await service.fetchUser();

      expect(user).toBeNull();
      expect(console.log).toHaveBeenCalledWith('⚠️ No auth token found');
    });

    it('should handle fetch user error and return null', async () => {
      tokenStorage.authToken.and.returnValue('invalid-token');

      const fetchPromise = service.fetchUser();

      const req = httpMock.expectOne('api/authentication/profile');
      req.error(new ProgressEvent('error'), { status: 401, statusText: 'Unauthorized' });

      const user = await fetchPromise;

      expect(user).toBeNull();
      expect(console.error).toHaveBeenCalledWith('❌ Error fetching user:', jasmine.any(Object));
    });

    it('should not make HTTP request without token', async () => {
      tokenStorage.authToken.and.returnValue(null);

      const user = await service.fetchUser();

      expect(user).toBeNull();
      httpMock.expectNone('api/authentication/profile');
    });

    it('should handle empty token string', async () => {
      tokenStorage.authToken.and.returnValue('');

      const user = await service.fetchUser();

      expect(user).toBeNull();
    });

    it('should extract user from response correctly', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const mockResponse = {
        user: mockUser,
        fullName: 'Test User',
      };

      const fetchPromise = service.fetchUser();

      const req = httpMock.expectOne('api/authentication/profile');
      req.flush(mockResponse);

      const user = await fetchPromise;

      expect(user).toEqual(mockUser);
    });

    it('should handle server error (500)', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const fetchPromise = service.fetchUser();

      const req = httpMock.expectOne('api/authentication/profile');
      req.error(new ProgressEvent('error'), { status: 500, statusText: 'Internal Server Error' });

      const user = await fetchPromise;

      expect(user).toBeNull();
    });

    it('should handle network error', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const fetchPromise = service.fetchUser();

      const req = httpMock.expectOne('api/authentication/profile');
      req.error(new ProgressEvent('error'), { status: 0, statusText: 'Unknown Error' });

      const user = await fetchPromise;

      expect(user).toBeNull();
    });
  });

  describe('refreshUserProfile', () => {
    it('should refresh user profile successfully', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const refreshPromise = service.refreshUserProfile();

      const req = httpMock.expectOne('api/authentication/profile');
      req.flush({ user: mockUser, fullName: 'Test User' });

      await refreshPromise;

      expect(userStorage.setUser).toHaveBeenCalledWith(mockUser as User);
      expect(console.log).toHaveBeenCalledWith('🔄 Profile refreshed:', mockUser);
    });

    it('should not update user storage if fetch returns null', async () => {
      tokenStorage.authToken.and.returnValue(undefined);

      await service.refreshUserProfile();

      expect(userStorage.setUser).not.toHaveBeenCalled();
    });

    it('should handle fetch error during refresh', async () => {
      tokenStorage.authToken.and.returnValue('invalid-token');

      const refreshPromise = service.refreshUserProfile();

      const req = httpMock.expectOne('api/authentication/profile');
      req.error(new ProgressEvent('error'), { status: 401, statusText: 'Unauthorized' });

      await refreshPromise;

      expect(userStorage.setUser).not.toHaveBeenCalled();
    });

    it('should handle exception during refresh gracefully', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const refreshPromise = service.refreshUserProfile();

      const req = httpMock.expectOne('api/authentication/profile');
      req.error(new ProgressEvent('error'), { status: 500, statusText: 'Server Error' });

      await refreshPromise;

      expect(console.error).toHaveBeenCalledWith('⚠️ Error refreshing profile:', jasmine.any(Object));
    });

    it('should call fetchUser internally', async () => {
      spyOn(service, 'fetchUser').and.returnValue(Promise.resolve(mockUser as User));

      await service.refreshUserProfile();

      expect(service.fetchUser).toHaveBeenCalled();
      expect(userStorage.setUser).toHaveBeenCalledWith(mockUser as User);
    });

    it('should not set user if fetchUser returns null', async () => {
      spyOn(service, 'fetchUser').and.returnValue(Promise.resolve(null));

      await service.refreshUserProfile();

      expect(userStorage.setUser).not.toHaveBeenCalled();
    });
  });

  describe('API Endpoint', () => {
    it('should call correct profile endpoint', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const fetchPromise = service.fetchUser();

      const req = httpMock.expectOne('api/authentication/profile');
      expect(req.request.url).toBe('api/authentication/profile');
      req.flush({ user: mockUser, fullName: 'Test User' });

      await fetchPromise;
    });

    it('should use GET method', async () => {
      tokenStorage.authToken.and.returnValue('valid-token');

      const fetchPromise = service.fetchUser();

      const req = httpMock.expectOne('api/authentication/profile');
      expect(req.request.method).toBe('GET');
      req.flush({ user: mockUser, fullName: 'Test User' });

      await fetchPromise;
    });
  });
});
