module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        port:9000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // this configuration needs to correspond to the Spring Boot backends' application.properties server.port
                ws: true,
                changeOrigin: true
            }
        }
    },
}