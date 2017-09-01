require('shelljs/global');
var child = require('child_process');
var path = require('path');
var glob = require('glob');
var config = require('./config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	//入口文件
	getEntries: function() {
		var files = glob.sync('src/app/**/main.js'),
			entries = {};

		files.forEach(function(filepath){
			var split = filepath.split('/');
			var name = split[split.length - 2];
			entries[name] = './' + filepath;
		})
		return entries;
	},
    //静态目录存放路径
	assetsPath: function(_path) {
        return path.posix.join(config.build.resourcesShortPath, _path);
    },
    copyDir: function(source, target) {
        rm('-rf', target);
        mkdir('-p', target);
        cp('-R', source, target);
    },
    run: {
        nginx: function() {
            child.exec('cd ./nginx && tasklist|find /i "nginx.exe" && taskkill /F /IM nginx.exe > nul && start nginx || start nginx.exe', function(err) {
                err && console.log('nginx start fail', err);
            });
        },
        live: function() {
            //这里的目录输入要看放在哪里
            exec('cd ../output/wanghuatong/node-server && npm run live', function(err) {
                err && console.log('node start fail', err);
            });
        }
    },
	cssTypes: {
		css: 'css-loader',
		less: 'css-loader!less-loader'
	},

}