 [配置一，主要是指cipher suite配置] (http://timd.cn/2016/06/29/nginx-https/)

** http and https coexist **

` server {
          listen 80 default backlog=2048;
          listen 443 ssl;
          server_name linuxyan.com;
          root /var/www/html;
          ssl_certificate /usr/local/Tengine/sslcrt/linuxyan.com.crt;
          ssl_certificate_key /usr/local/Tengine/sslcrt/linuxyan.com.key;
        } `
