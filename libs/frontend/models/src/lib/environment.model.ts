export type Environment = {
  production: boolean;
  API_BACKEND_URL: string;
  API_BACKEND_PREFIX: string;
  API_FRONTEND_URL: string;
  API_FRONTEND: string;
  API_FRONTEND_PORT: string;
  API_SECRET: string;
  AUTO_REGISTRATION_ENABLE: string;
  REGISTRATION_VALIDATION: string;
  PWDLESS_LOGIN_ENABLE: string;
  defaultLanguage: string;
  supportedLanguages: string[];

  /** Idle timeout settings (seconds) */
  SESSION_TIMEOUT_ENABLE?: number;
  SESSION_TIMEOUT?: number;
  SESSION_TIMEOUT_REMINDER?: number;
};
