import { TestBed } from '@angular/core/testing';
import { TokenStorageService } from './token-storage-service';

describe('TokenStorageService', () => {
  let service: TokenStorageService;
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    // Mock localStorage
    localStorageMock = {};
    
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return localStorageMock[key] || null;
    });
    
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => {
      localStorageMock[key] = value;
    });
    
    spyOn(localStorage, 'removeItem').and.callFake((key: string) => {
      delete localStorageMock[key];
    });

    TestBed.configureTestingModule({
      providers: [TokenStorageService],
    });
    
    service = TestBed.inject(TokenStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Token Management', () => {
    it('should load token from localStorage on initialization', () => {
      const testToken = 'test-jwt-token';
      localStorageMock['authJwtToken'] = testToken;
      
      // Create new service instance to trigger constructor
      const newService = new TokenStorageService();
      
      expect(newService.authToken()).toBe(testToken);
    });

    it('should return undefined when no token in localStorage', () => {
      expect(service.authToken()).toBeUndefined();
    });

    it('should set a new token', () => {
      const testToken = 'new-jwt-token';
      
      service.setToken(testToken);
      
      expect(service.authToken()).toBe(testToken);
    });

    it('should sync token to localStorage when set', (done) => {
      const testToken = 'sync-jwt-token';
      
      service.setToken(testToken);
      
      // Effect runs asynchronously, wait a bit
      setTimeout(() => {
        expect(localStorage.setItem).toHaveBeenCalledWith('authJwtToken', testToken);
        done();
      }, 100);
    });

    it('should clear token', () => {
      const testToken = 'token-to-clear';
      service.setToken(testToken);
      
      service.clearToken();
      
      expect(service.authToken()).toBeUndefined();
      expect(localStorage.removeItem).toHaveBeenCalledWith('authJwtToken');
    });
  });

  describe('Signal Behavior', () => {
    it('should provide readonly signal', () => {
      const token = service.authToken;
      expect(typeof token).toBe('function'); // Signal is a function
    });

    it('should update signal when token changes', () => {
      const token1 = 'first-token';
      const token2 = 'second-token';
      
      service.setToken(token1);
      expect(service.authToken()).toBe(token1);
      
      service.setToken(token2);
      expect(service.authToken()).toBe(token2);
    });
  });
});
