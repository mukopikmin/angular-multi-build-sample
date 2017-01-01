FROM nginx
MAINTAINER Yusuke Mukai<opposite0302@gmail.com>

ADD dist/* /usr/share/nginx/html/
