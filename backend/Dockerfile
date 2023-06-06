FROM node:15.4

WORKDIR /dist

COPY package*.json ./
RUN npm install --force

COPY . .

EXPOSE 80

CMD ["npm", "run", "build"]
