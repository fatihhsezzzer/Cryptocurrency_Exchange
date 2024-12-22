# Node.js tabanlı image kullanarak uygulamayı build et
FROM node:16 AS build
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala ve build işlemini yap
COPY . .
RUN npm run build

# Nginx kullanarak statik dosyaları sun
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx için gerekli portu aç
EXPOSE 80

# Nginx başlat
CMD ["nginx", "-g", "daemon off;"]
