import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '@db/prisma/browser';
import { ILoginResponse } from '../../../models/auth.model';
import { TokenStorageService } from '../token-storage/token-storage-service';
import { UserFetchService } from '../user-fetch/user-fetch-service';
import { UserStorageService } from '../user-storage/user-storage-service';
import { LoginService } from './login-service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  let tokenStorage: jasmine.SpyObj<TokenStorageService>;
  let userStorage: jasmine.SpyObj<UserStorageService>;
  let userFetchService: jasmine.SpyObj<UserFetchService>;

  const mockUser: Partial<User> = {
    id: '1',
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User',
  };

  const mockLoginResponse: ILoginResponse = {
    accessToken: 'mock-jwt-token',
    refreshToken: 'mock-refresh-token',
  };

  beforeEach(() => {
    // Create spies for dependencies
    const tokenStorageSpy = jasmine.createSpyObj('TokenStorageService', ['setToken']);
    const userStorageSpy = jasmine.createSpyObj('UserStorageService', ['setUser']);
    const userFetchServiceSpy = jasmine.createSpyObj('UserFetchService', ['fetchUser']);

    TestBed.configureTestingModule({
      providers: [
        LoginService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TokenStorageService, useValue: tokenStorageSpy },
        { provide: UserStorageService, useValue: userStorageSpy },
        { provide: UserFetchService, useValue: userFetchServiceSpy },
      ],
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
    tokenStorage = TestBed.inject(TokenStorageService) as jasmine.SpyObj<TokenStorageService>;
    userStorage = TestBed.inject(UserStorageService) as jasmine.SpyObj<UserStorageService>;
    userFetchService = TestBed.inject(UserFetchService) as jasmine.SpyObj<UserFetchService>;

    spyOn(console, 'log'); // Suppress console logs
    spyOn(console, 'error'); // Suppress console errors
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should login user successfully and fetch profile', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      userFetchService.fetchUser.and.returnValue(Promise.resolve(mockUser as User));

      const loginPromise = service.login(email, password);

      const req = httpMock.expectOne('api/authentication/sign-in');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({ email, password });
      req.flush(mockLoginResponse);

      const response = await loginPromise;

      expect(response).toEqual(mockLoginResponse);
      expect(tokenStorage.setToken).toHaveBeenCalledWith('mock-jwt-token');
      expect(userFetchService.fetchUser).toHaveBeenCalled();
      expect(userStorage.setUser).toHaveBeenCalledWith(mockUser as User);
    });

    it('should handle login without storing user if fetch returns null', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      userFetchService.fetchUser.and.returnValue(Promise.resolve(null));

      const loginPromise = service.login(email, password);

      const req = httpMock.expectOne('api/authentication/sign-in');
      req.flush(mockLoginResponse);

      const response = await loginPromise;

      expect(response).toEqual(mockLoginResponse);
      expect(tokenStorage.setToken).toHaveBeenCalled();
      expect(userStorage.setUser).not.toHaveBeenCalled();
    });

    it('should handle login error', async () => {
      const email = 'error@example.com';
      const password = 'wrongpassword';

      const loginPromise = service.login(email, password);

      const req = httpMock.expectOne('api/authentication/sign-in');
      req.error(new ProgressEvent('error'), { status: 401, statusText: 'Unauthorized' });

      try {
        await loginPromise;
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should set token before fetching user', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      const callOrder: string[] = [];

      tokenStorage.setToken.and.callFake(() => {
        callOrder.push('setToken');
      });

      userFetchService.fetchUser.and.callFake(() => {
        callOrder.push('fetchUser');
        return Promise.resolve(mockUser as User);
      });

      const loginPromise = service.login(email, password);

      const req = httpMock.expectOne('api/authentication/sign-in');
      req.flush(mockLoginResponse);

      await loginPromise;

      expect(callOrder).toEqual(['setToken', 'fetchUser']);
    });

    it('should handle server error during login', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      const loginPromise = service.login(email, password);

      const req = httpMock.expectOne('api/authentication/sign-in');
      req.error(new ProgressEvent('error'), { status: 500, statusText: 'Server Error' });

      try {
        await loginPromise;
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('checkUserCredentials', () => {
    it('should return true for valid credentials', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      const checkPromise = service.checkUserCredentials(email, password);

      const req = httpMock.expectOne(`api/authentication/check-credentials/${email}`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({ password });
      req.flush({ success: true, message: 'Valid credentials' });

      const result = await checkPromise;

      expect(result).toBe(true);
    });

    it('should return false for invalid credentials', async () => {
      const email = 'test@example.com';
      const password = 'wrongpassword';

      const checkPromise = service.checkUserCredentials(email, password);

      const req = httpMock.expectOne(`api/authentication/check-credentials/${email}`);
      req.flush({ success: false, message: 'Invalid credentials' });

      const result = await checkPromise;

      expect(result).toBe(false);
    });

    it('should return false on error', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      const checkPromise = service.checkUserCredentials(email, password);

      const req = httpMock.expectOne(`api/authentication/check-credentials/${email}`);
      req.error(new ProgressEvent('error'), { status: 500, statusText: 'Server Error' });

      const result = await checkPromise;

      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalled();
    });

    it('should include email in URL path', async () => {
      const email = 'specific@example.com';
      const password = 'password123';

      const checkPromise = service.checkUserCredentials(email, password);

      const req = httpMock.expectOne(`api/authentication/check-credentials/${email}`);
      expect(req.request.url).toBe(`api/authentication/check-credentials/${email}`);
      req.flush({ success: true, message: 'Valid' });

      await checkPromise;
    });

    it('should handle network errors gracefully', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      const checkPromise = service.checkUserCredentials(email, password);

      const req = httpMock.expectOne(`api/authentication/check-credentials/${email}`);
      req.error(new ProgressEvent('error'), { status: 0, statusText: 'Unknown Error' });

      const result = await checkPromise;

      expect(result).toBe(false);
    });
  });

  describe('API Endpoints', () => {
    it('should call correct login endpoint', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      userFetchService.fetchUser.and.returnValue(Promise.resolve(null));

      const loginPromise = service.login(email, password);

      const req = httpMock.expectOne('api/authentication/sign-in');
      expect(req.request.url).toBe('api/authentication/sign-in');
      req.flush(mockLoginResponse);

      await loginPromise;
    });

    it('should use POST method for login', async () => {
      const email = 'test@example.com';
      const password = 'password123';

      userFetchService.fetchUser.and.returnValue(Promise.resolve(null));

      const loginPromise = service.login(email, password);

      const req = httpMock.expectOne('api/authentication/sign-in');
      expect(req.request.method).toBe('POST');
      req.flush(mockLoginResponse);

      await loginPromise;
    });
  });
});
