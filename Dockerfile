FROM node:latest

WORKDIR /root/app

COPY . .

RUN npm ci 
RUN npm run build

EXPOSE 9001

CMD ["node", "server.js"]