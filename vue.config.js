// var targetUrl = 'http://172.30.3.217:10009'
// var targetUrl = 'http://10.19.92.209:10009'
var targetUrl1 = 'http://localhost:6071'

module.exports = {
    lintOnSave: true,
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    // indexPath: 'admin.html',
    // assetsDir: 'admin-static',
    devServer: {
        port: 8080,
        proxy: {
            '/file': {
                target: targetUrl1,
                changeOrigin: true,
                pathRewrite:{
                    '^/file': '/file'
                }
            },
            '/blog/file': {
                target: targetUrl1,
                changeOrigin: true,
                pathRewrite:{
                    '^/blog/file': '/file'
                }
            },
            '/comments': {
                target: targetUrl1,
                changeOrigin: true,
                pathRewrite:{
                    '^/comments': '/comments'
                }
            },
            '/blog/comments': {
                target: targetUrl1,
                changeOrigin: true,
                pathRewrite:{
                    '^/blog/comments': '/comments'
                }
            },
            '/posts': {
                target: "https://jsonplaceholder.typicode.com/",
                changeOrigin: true,
                pathRewrite:{
                    '^/posts': '/posts'
                }
            }

        }
    }
}