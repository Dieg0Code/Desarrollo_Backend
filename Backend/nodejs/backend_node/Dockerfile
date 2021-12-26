############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node:latest

# Crear directorio de trabajo
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Instala los paquetes existentes en el package.json
COPY package*.json ./
RUN npm install --quiet

# Copia la aplicación
COPY . .

# Expone la aplicación
EXPOSE 3000

# Ejecuta la aplicación
CMD ["npm", "run", "server"]