FROM node:18-slim

# Establece el directorio de trabajo en /app
WORKDIR /api

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto que la aplicación usa
EXPOSE 3000

# Define variables de entorno
ENV NODE_ENV=production

# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]
