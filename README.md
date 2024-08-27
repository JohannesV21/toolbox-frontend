<p align="center">
  <img src="https://files.toolboxtve.com/wp-content/uploads/2018/04/15144954/logo-stycky.png" alt="toolbox">
</p>

# Toolbox Frontend 🖥️

Interfaz de usuario diseñada para la visualizacion de los archivos **_CSV_** con data cruda y formateada de la api de Toolbox ([Toolbox API](https://github.com/JohannesV21/toolbox-backend)).

## 🗒️ Requisitos del sistema

Para poder correr el proyecto satisfactoriamente es necesario tener instalados los siguientes requisitos:

1. node^16
2. docker **_(en caso de deploy)_**

## 👨‍💻 Instalacion y Uso

```bash
# Clona el repositorio
git clone [URL-del-repositorio]

# Accede al directorio del proyecto
cd toolbox-frontend

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

## 🚀 Deploy con docker

### - Con Dockerfile

1. Estar ubicado en la raiz del proyecto
2. Crear la imagen de docker con el siguiente comando:

```bash
docker build -t ApiDataColector-FrontEnd:latest .
```

3. Luego de haber creado la imagen de docker el siguiente paso es crear el contenedor:

```bash
docker run -it -d --rm -p 3005:3005 --name reporteador-dss ApiDataColector-FrontEnd
```

### - Con Docker Compose

1. Estar ubicado en la raiz del proyecto
2. Ejecutar el siguiente comando para crear la imagen y el contenedor:

```bash
docker compose up --build -d
```
