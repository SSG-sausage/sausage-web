const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8082',
            changeOrigin: true,
        }),
    );
};
