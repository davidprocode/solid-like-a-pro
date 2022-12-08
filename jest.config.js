/** @type {import('./dist').JestConfigWithTsJest} */
module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  modulePathIgnorePatterns: ['examples/.*', 'website/.*'],
  snapshotSerializers: [require.resolve('jest-snapshot-serializer-raw')],
  testPathIgnorePatterns: ['src/__mocks__/*', '/node_modules/', '/examples/', '/e2e/.*/__tests__', '\\.snap$'],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: false,
            decorators: true,
          },
          target: 'es2017',
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        }
      },
    ],
  },


  coverageProvider: 'v8',
}