FROM node:15.4 as build
WORKDIR /app

COPY package*.json .
RUN npm install --force
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html

RUN sed -i 's/listen\s*80;/listen 8080;/g' /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
