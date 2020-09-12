FROM node:12

# create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

#bundle app source
COPY . .

EXPOSE 5000

CMD ["node", "index.js"]