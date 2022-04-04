const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function expressMiddleware(router) {
    router.use(
        "/apigility",
        createProxyMiddleware({
            target: "https://creaton-handwerker.samoa-app.de:8881",
            changeOrigin: true,
        })
    );
};
// http://localhost:9001/apigility/product?id=5074
