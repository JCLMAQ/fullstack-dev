import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IRegisterResponse } from '../../../models/auth.model';
import { RegisterService } from './register-service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpMock: HttpTestingController;

  const mockRegisterResponse: IRegisterResponse = {
    success: true,
    message: 'Registration successful',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(RegisterService);
    httpMock = TestBed.inject(HttpTestingController);

    spyOn(console, 'log'); // Suppress console logs
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const email = 'newuser@example.com';
      const password = 'password123';
      const confirmPassword = 'password123';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({
        email,
        password,
        verifyPassword: confirmPassword,
      });
      req.flush(mockRegisterResponse);

      const response = await registerPromise;

      expect(response).toEqual(mockRegisterResponse);
      expect(console.log).toHaveBeenCalledWith('📝 Registering User (IAM):', {
        email,
        password,
        verifyPassword: confirmPassword,
      });
      expect(console.log).toHaveBeenCalledWith('✅ Registration successful (IAM):', mockRegisterResponse);
    });

    it('should handle registration with different passwords', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      const confirmPassword = 'password456';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');
      expect(req.request.body.verifyPassword).toBe(confirmPassword);
      req.flush(mockRegisterResponse);

      await registerPromise;
    });

    it('should handle registration error', async () => {
      const email = 'error@example.com';
      const password = 'password123';
      const confirmPassword = 'password123';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');
      req.error(new ProgressEvent('error'), { status: 400, statusText: 'Bad Request' });

      try {
        await registerPromise;
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should handle email already exists error', async () => {
      const email = 'existing@example.com';
      const password = 'password123';
      const confirmPassword = 'password123';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');
      req.error(new ProgressEvent('error'), { status: 409, statusText: 'Conflict' });

      try {
        await registerPromise;
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should handle server error during registration', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      const confirmPassword = 'password123';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');
      req.error(new ProgressEvent('error'), { status: 500, statusText: 'Internal Server Error' });

      try {
        await registerPromise;
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should send correct payload structure', async () => {
      const email = 'test@example.com';
      const password = 'securePassword123';
      const confirmPassword = 'securePassword123';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');

      // Verify payload structure
      expect(req.request.body).toEqual({
        email: email,
        password: password,
        verifyPassword: confirmPassword,
      });

      req.flush(mockRegisterResponse);

      await registerPromise;
    });
  });

  describe('API Endpoint', () => {
    it('should call the correct IAM endpoint', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      const confirmPassword = 'password123';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');
      expect(req.request.url).toBe('api/authentication/register-extended');
      req.flush(mockRegisterResponse);

      await registerPromise;
    });

    it('should use POST method', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      const confirmPassword = 'password123';

      const registerPromise = service.register(email, password, confirmPassword);

      const req = httpMock.expectOne('api/authentication/register-extended');
      expect(req.request.method).toBe('POST');
      req.flush(mockRegisterResponse);

      await registerPromise;
    });
  });
});
