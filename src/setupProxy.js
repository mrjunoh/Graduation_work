//proxy
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',//server 주소
      changeOrigin: true,
    })
  );
};

//target: 'http://localhost:5000' 이부분이
//front 3000번이 데이터를 줄 target은 5000번이다 라고 명시해줌