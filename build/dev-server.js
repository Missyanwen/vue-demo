require('shelljs/global');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var child = require('child_process');
var bodyParser = require('body-parser');
var compression = require('compression');
var ejs = require('ejs');
var proxyMiddleware = require('http-proxy-middleware');
var config = require('./config');
var webpackConfig = require('./webpack.dev.conf');

var port = process.env.PORT || config.dev.port;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));
app.use(compression()); //开启 gzip

//webpack编译器
var compiler = webpack(webpackConfig);

//webpack-dev-server 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

//热更新中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler);

// 代理
Object.keys(config.dev.proxyTable).forEach(function (context) {
    var options = config.dev.proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    if (~context.indexOf(',')) {
        context = context.split(',');
    }
    app.use(proxyMiddleware(context, options))
})

app.use(devMiddleware);
app.use(hotMiddleware);

//具体路由action
app.get('/*', function(req, res) {
    res.render('showlive.html');
}); 


app.listen(port, function(){
    console.log("node启动 监听端口：http://localhost:" + port);
});

process.on('SIGINT', function() {
    console.log('退出node进程');
    process.exit(0);
});