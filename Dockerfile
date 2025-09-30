# Etapa única: servir contenido estático con Nginx
FROM nginx:alpine

# Copiar tu sitio estático al directorio de Nginx
COPY . /usr/share/nginx/html

# Cloud Run escucha en el puerto 8080
EXPOSE 8080

# Ejecutamos Nginx en foreground
CMD ["nginx", "-g", "daemon off;"]
