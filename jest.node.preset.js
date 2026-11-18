const preset = require('./jest.preset.js');

module.exports = {
  ...preset,
  // Evaluate Nest's ESM graph before CommonJS dependencies such as nestjs-i18n require it.
  setupFiles: ['@nestjs/core'],
};
