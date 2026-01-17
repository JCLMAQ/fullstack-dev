import { TestBed } from '@angular/core/testing';
import { User } from '@db/prisma/browser';
import { UserStorageService } from './user-storage-service';

describe('UserStorageService', () => {
  let service: UserStorageService;
  let localStorageMock: { [key: string]: string };

  const mockUser: User = {
    id: '1',
    email: 'test@example.com',
    userName: 'testuser',
    photoUrl: 'https://example.com/photo.jpg',
    firstName: 'Test',
    lastName: 'User',
    password: 'hashed-password',
    createdAt: new Date(),
    updatedAt: new Date(),
    isDeleted: false,
    isDeletedDT: null,
    nickName: null,
    fullName: null,
    Gender: null,
    Language: null,
    emailVerified: false,
    twoFactorEnabled: false,
    Roles: null,
  } as User;

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

    spyOn(console, 'log'); // Suppress console logs in tests

    TestBed.configureTestingModule({
      providers: [UserStorageService],
    });

    service = TestBed.inject(UserStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('User Management', () => {
    it('should load user from localStorage on initialization', () => {
      localStorageMock['user'] = JSON.stringify(mockUser);

      // Create new service instance to trigger constructor
      const newService = new UserStorageService();

      expect(newService.user()?.email).toBe(mockUser.email);
    });

    it('should return undefined when no user in localStorage', () => {
      expect(service.user()).toBeUndefined();
    });

    it('should set a new user', () => {
      service.setUser(mockUser);

      expect(service.user()).toEqual(mockUser);
    });

    it('should sync user to localStorage when set', (done) => {
      service.setUser(mockUser);

      // Effect runs asynchronously, wait a bit
      setTimeout(() => {
        expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockUser));
        done();
      }, 100);
    });

    it('should update user partially', () => {
      service.setUser(mockUser);

      const updates = { firstName: 'Updated', lastName: 'Name' };
      service.updateUser(updates);

      const updatedUser = service.user();
      expect(updatedUser?.firstName).toBe('Updated');
      expect(updatedUser?.lastName).toBe('Name');
      expect(updatedUser?.email).toBe(mockUser.email); // Original value preserved
    });

    it('should not update if no user exists', () => {
      service.updateUser({ firstName: 'Updated' });

      expect(service.user()).toBeUndefined();
    });

    it('should clear user', () => {
      service.setUser(mockUser);

      service.clearUser();

      expect(service.user()).toBeUndefined();
      expect(localStorage.removeItem).toHaveBeenCalledWith('user');
    });
  });

  describe('Signal Behavior', () => {
    it('should provide readonly signal', () => {
      const user = service.user;
      expect(typeof user).toBe('function'); // Signal is a function
    });

    it('should update signal when user changes', () => {
      const user1 = { ...mockUser, email: 'user1@test.com' };
      const user2 = { ...mockUser, email: 'user2@test.com' };

      service.setUser(user1);
      expect(service.user()?.email).toBe('user1@test.com');

      service.setUser(user2);
      expect(service.user()?.email).toBe('user2@test.com');
    });
  });

  describe('Partial Updates', () => {
    beforeEach(() => {
      service.setUser(mockUser);
    });

    it('should update only photoUrl', () => {
      const newPhotoUrl = 'https://example.com/new-photo.jpg';
      service.updateUser({ photoUrl: newPhotoUrl });

      expect(service.user()?.photoUrl).toBe(newPhotoUrl);
      expect(service.user()?.email).toBe(mockUser.email);
    });

    it('should update multiple fields', () => {
      service.updateUser({
        firstName: 'NewFirst',
        lastName: 'NewLast',
        nickName: 'NewNick',
      });

      const user = service.user();
      expect(user?.firstName).toBe('NewFirst');
      expect(user?.lastName).toBe('NewLast');
      expect(user?.nickName).toBe('NewNick');
    });
  });
});
