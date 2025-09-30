# Etapa 1: Build de la app React
FROM node:20-alpine AS build

# Definir directorio de trabajo
WORKDIR /app

# Copiamos el resto del código
COPY . .

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Cloud Run espera que el servicio escuche en el puerto 8080
EXPOSE 8080

# Ejecutamos Nginx en foreground
CMD ["nginx", "-g", "daemon off;"]
