module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx"],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    'axios': 'axios/dist/node/axios.cjs'  // 추가된 부분
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!axios/)',  // axios 모듈을 변환 대상으로 지정
  ],
};
