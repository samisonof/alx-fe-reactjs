module.exports = {
  testEnvironment: 'jsdom', // Ensures that Jest can test DOM elements
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use babel-jest to transpile JavaScript files
  },
  moduleFileExtensions: ['js', 'jsx'], // Support both .js and .jsx extensions
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extends Jest with custom matchers
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore build files and node_modules
};
