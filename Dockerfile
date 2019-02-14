FROM node:latest

WORKDIR /root/app

COPY . .

RUN npm install 
RUN npm run build

EXPOSE 9001

CMD ["node", "server.js"]