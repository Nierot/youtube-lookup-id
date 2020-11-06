FROM node:12

WORKDIR /app

COPY . .

RUN npm install
RUN npm install pm2 -g

EXPOSE 8080

CMD ["pm2-runtime", "index.js"]