# webpack + vue  的一个简单demo
  ```
    下载安装: 1、npm install
    启动项目：2、npm run dev
              3、http://localhost:3000
    只适于开发环境，用webpack的代理进行跨域转发, 数据用豆瓣api
    排版简化了些内容
  ```

(任务6第二题)[https://github.com/narci2010/frontend-task]解决方案:
服务器部署nginx用nginx进行跨域转发
```
  server {
   listen   80;
   server_name  www.域名.com;

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass   http://localhost:1983/;
    }

    location /v2/book {
        proxy_store off;
        proxy_redirect off;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_connect_timeout 600;
        proxy_read_timeout 600;
        proxy_send_timeout 600;
        proxy_set_header Host "www.域名.com";
        proxy_pass https://api.douban.com/v2/book;
    }
 }   
```

(任务3第二题)[https://github.com/narci2010/frontend-task]客户与服务器端要保留cookie通信解决方案:
```
  可利用vuex的状态管理存储，存储所要发送的cookie信息
```