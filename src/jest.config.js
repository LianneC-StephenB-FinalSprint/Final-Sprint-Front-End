module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Mock CSS files
  },
  moduleDirectories: ['node_modules', 'src'], // Resolve imports from src and node_modules
  testEnvironment: 'jsdom', // Ensure a browser-like environment
};