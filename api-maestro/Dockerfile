FROM node:18-slim

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto que la aplicación usa
EXPOSE 3003

# Define variables de entorno
ENV NODE_ENV=production

# Agrega el script de espera
ADD https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

# Comando para iniciar la aplicación
CMD ["/usr/wait-for-it.sh", "redis:6379", "--strict", "--timeout=30", "--", "node", "src/app.js"]
