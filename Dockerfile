# Etapa 1: Build de la app React
FROM node:20-alpine AS build

# Definir directorio de trabajo
WORKDIR /app

# Copiamos dependencias primero para aprovechar la caché
COPY package*.json ./

# Instalamos dependencias (usa npm ci si tenés package-lock.json)
RUN npm ci

# Copiamos el resto del código
COPY . .

# Build de producción (esto genera /app/build)
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiamos el build generado al directorio que Nginx sirve
COPY --from=build /app/build /usr/share/nginx/html

# Configuración de Nginx para apps SPA (React Router)
# Reemplaza la default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run espera que el servicio escuche en el puerto 8080
EXPOSE 8080

# Ejecutamos Nginx en foreground
CMD ["nginx", "-g", "daemon off;"]
