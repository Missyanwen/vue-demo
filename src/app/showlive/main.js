
import 'lib/bootstrap/css/bootstrap.css';
import './css/style';

import 'lib/jquery/jquery.min.js';
import 'lib/bootstrap/js/bootstrap.min.js';

import Vue from 'vue';
// import VuePlain from 'lib/vue-plugins/vue-plain';
// Vue.use(VuePlain);

// 全局捕获vue错误
// Vue.config.errorHandler = function (...args) {
//     console.log(args);
// }

// app
import App from './App';
import router from './router/index';

new Vue({
    el: '#app',
    router,
    render:h =>h (App)
});

