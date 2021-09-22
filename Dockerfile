FROM node:12
WORKDIR /apps/v4p-alertbot
#COPY ./ /apps/v4p-alertbot
EXPOSE 4040

# Install app dependencies and run application
RUN echo hellov4p-alertbot

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT /docker-entrypoint.sh
