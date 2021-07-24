FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html
RUN chown -R nginx. /usr/share/nginx/html
