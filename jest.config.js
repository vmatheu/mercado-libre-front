module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mock/fileMock.js',
    '\\.(css|less)$': '<rootDir>/test/mock/styleMock.js',
  },
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!**/vendor/**'],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  coverageReporters: ['json', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/store/'],
  setupFiles: ['<rootDir>/test/setupTest.js'],
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es)/)'],
};
