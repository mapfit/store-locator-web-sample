FROM nginx:1.13.5-alpine

ARG ENV

RUN rm -v /etc/nginx/nginx.conf

ADD nginx.conf /etc/nginx/

COPY default.conf /etc/nginx/conf.d/default.conf

#static 
ADD . /usr/share/nginx/html/
RUN cd /usr/share/nginx/html/ &&\
    rm -v default.conf &&\
    rm -v nginx.conf &&\
    rm -v .dockerignore

# this is for virtual host purposes
EXPOSE 80
