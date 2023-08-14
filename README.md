# Aplicación para optimizar de tamaño de tus imágenes

Esta es una aplicación Node.js para optimizar el tamaño de las imágenes de manera eficiente. Puede ser utilizada para reducir el tamaño de las imágenes y mejorar el rendimiento de los sitios web y aplicaciones que utilizan imágenes.

## Características

- Procesar múltiples imágenes al mismo tiempo.
- La aplicación utiliza algoritmos de compresión de sharp e imagemin para asegurar la mejor calidad posible con el menor tamaño de archivo.

## Requisitos Previos

- Node.js: Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Instalación

1. Clona este repositorio o descarga los archivos ZIP.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

4. Agrega las imágenes que quieres optimizar a la carpeta [src].
5. Ejecuta el siguiente comando para ejecutar la optimización:

```bash
npm start
```

6. Revisa tus imágenes optimizadas en la carpeta [opt].

## Opcional

- Puedes modificar el width final de las imágenes en el archivo app.js.
