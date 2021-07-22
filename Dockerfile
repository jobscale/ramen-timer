FROM nginx

COPY . /usr/share/nginx/html
RUN chown -R nginx. /usr/share/nginx/html
