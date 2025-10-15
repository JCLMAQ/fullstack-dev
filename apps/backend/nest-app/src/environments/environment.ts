export const environment = {
  production: false,
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/devdb'
  },
  uploads: {
    directory: 'uploads',
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
  }
};
