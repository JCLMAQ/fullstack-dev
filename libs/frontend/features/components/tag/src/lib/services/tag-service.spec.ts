import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { TagService } from './tag-service';

describe('TagService', () => {
  let service: TagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ENVIRONMENT_TOKEN,
          useValue: {
            production: false,
            API_BACKEND_URL: 'http://localhost:3000',
            API_BACKEND_PREFIX: '/api',
            API_FRONTEND_URL: 'http://localhost:4200',
            API_FRONTEND: 'http://localhost:4200',
            API_FRONTEND_PORT: '4200',
            API_SECRET: 'test',
            AUTO_REGISTRATION_ENABLE: 'false',
            REGISTRATION_VALIDATION: 'false',
            PWDLESS_LOGIN_ENABLE: 'false',
            defaultLanguage: 'en',
            supportedLanguages: ['en'],
          },
        },
      ],
    });
    service = TestBed.inject(TagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
