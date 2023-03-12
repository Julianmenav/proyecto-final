# Proyecto Laravel DWES - Dreative

Esta será una aplicacion que usara una API de alguna IA para crear imagenes escribiendo una descripcion, y poder compartir las mismas.

Por ahora en lugar de crear las imágenes de esta manera, las imágenes serán subidas por el usuario y Laravel las guardará en el servidor.

Por ahora y para este proyecto, la aplicación contará con un CRUD para las imágenes y otro para los comentarios que se pueden escribir en las mismas.

## Instalación 
Dependencias:
```
composer install
npm install
```

Crear y poblar base de datos:
```
php artisan migrate --seed
```
El perfil creado para el profesor es el siguiente:
```
email: admin@admin.com
pass:  admin123
```

## Explicación de las funcionalidades
La primera vez que un usuario accede a la aplicacion, se encuentra con una imagen de ejemplo, que sera la ultima imagen creada por un usuario, y 2 opaciones clicables:

La primera opcion es para "Comenzar a crear" la cual le rederigirá al login, a no ser que el usuario ya esté logeado, entonces le redirigirá a la vista para crear las imágenes (Subir archivos).

La otra opción le permite seguir mirándo imágenes creadas por los usuarios, en otra vista nueva:
# Discover

<img src="https://raw.githubusercontent.com/Julianmenav/stuff/main/laravelProject/discover.png" alt="Discover" width="600">

En esta vista podra ordenar las fotos de varias maneras , y si el usuario intenta dar megusta se le pedirá acceder a la aplicación o registrarse.

# Create
<img src="https://raw.githubusercontent.com/Julianmenav/stuff/main/laravelProject/create.png" alt="Create" width="600">

En la vista de create, hay que hacer click en el espacio reservado para ello y podremos importar una imágen. (Aún no he implementado el drag and drop)

# Dashboard
<img src="https://raw.githubusercontent.com/Julianmenav/stuff/main/laravelProject/dashboard.png" alt="Dashboard" width="600">

El dashboard es la primera página a la que accedemos cuando nos logeamos y desde aqui podremos ver nuestras imágenes. Todas las imágenes que sean nuestras tanto en la vista Discover como en ésta aparecerán con un botón de borrado.

# Picture/{id}
<img src="https://raw.githubusercontent.com/Julianmenav/stuff/main/laravelProject/picture2.png" alt="Picture" width="600">

Si hacemos click en una foto podremos verla en mayor resolución, escribir o ver los comentarios de la misma.
