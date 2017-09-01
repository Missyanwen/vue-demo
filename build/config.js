
var path = require('path');

var config = {
    build: {
        // 打包输出路径
        outputPath: path.resolve(__dirname, '../../output/project'),
        // html模版路径，基于根路径
        templatePath: 'template.html',
        // html文件输出路径，基于outputPath
        htmlShortPath: '/',
        // 资源输出路径，基于outputPath
        resourcesShortPath: 'resources'
    },
    dev: {
        port: 3000,
        // 接口代理
        proxyTable: {
            '/v2': {
                target: 'https://api.douban.com',
                changeOrigin: true
            },
        }
    }
};

config.build.resourcesPath = path.join(config.build.outputPath, config.build.resourcesShortPath);
config.build.serverPath = path.join(config.build.outputPath, 'node-server');

module.exports = config;