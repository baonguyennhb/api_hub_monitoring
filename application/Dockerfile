# 1. For Nginx setup
FROM nginx:alpine
# 2. Copy config nginx
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
# 3. Remove default nginx static assets
RUN rm -rf ./*
# 4. Copy static assets from builder stage
COPY /build/. .
# 5. Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
