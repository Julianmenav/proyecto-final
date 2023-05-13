# Dreative 

# Indice

- Descripción del proyecto
- Historial de cambios
- Bibliografía

# Descripcion del proyecto

## Temática 💡

Esta será una aplicacion que usará la API de openAI para crear imagenes a traves de inteligencia artificial a partir de una descripción aportada por el usuario. Las imágenes se guardarán y podrán ser vistas por el resto de usuarios. 

## Funciones 🚀

**Main Page**: Podremos ver un ejemplo de una imagen creada por un usuario a modo de ejemplo, y se invitará al usuario a formar parte de la comunidad creando una imagen.

**Creador de Imágenes**: En esta página se podrá escribir una descripción de la imagen deseada (Prompt) y ésta empezará a ser generada, una vez completada la carga el usuario podrá decidir si quedarse con ella y publicarla.

**Descubrir imágenes**: Una página para ver otras imágenes creadas por otros usuarios, ya sean las últimas subidas, o las más populares.

**Imagen y comentarios**: Además de tener un contador de los "me gusta" otorgados por los usuarios, cada imagen también podrá contar con comentarios los cuales se verán desde una página dedicada a cada obra. La finalidad de esta página será también poder ver la imágen en una mayor resolución.

**Perfil**: En el perfil de un usuario se pueden ver tanto sus obras creadas, así como sus obras favoritas. Un usuario también puede guardar imágenes sin que esta información sea pública, y también aparecerán en el perfil pero solo para el usuario autenticado.

## Tecnologías 💻

### Frontend ⚛️

La tecnología para hacer la interfaz de usuario será React (javascript), apoyado en Tailwind como framework de css para los estilos.

### Backend 📡

El lado del servidor se apoyará en Laravel (PHP) 

### Otros 🛠️

Base de Datos principal: MySQL 

Base de Datos y Host para almacenar imágenes: Firebase

Organización de tareas: Notion

Control de versiones: Git

## Base de Datos 💾

<img src="https://github.com/Julianmenav/stuff/blob/main/laravelProject/diagrama_bbdd.png?raw=true">



## Boceto de Diseño ✏️

[Pre-mockup en Figma](https://www.figma.com/file/G5RZLgNNFuACQYsCFq4hgZ/01-Desktop%26Mobile-JulianMena?node-id=0%3A1&t=gk5DSPZuXSesguvR-1)

# Historial de cambios

- [X] Migracion BBDD
- [X] Modelos
- [X] Factorías para llenar BBDD con fake data
- [X] PAGE: Homepage
- [X] PAGE: Discover (galeria imagenes de los usuarios)
- [X] Custom hook para manejar like a fotos
- [X] Pagination para página de discover (Infinite scroll)
- [X] PAGE: Creador de imagenes (UPLOAD IMAGE POR AHORA)
- [X] PAGE: User Dashboard 
- [X] PAGE: Pagina dedicada a una sola imagen (/picture/{picture_id})
- [X] Comments
- [ ] Diseño y desarrollo de las vistas de autenticacion (Login, register, forgot pswd...)
- [ ] Modificar paginacion para funcionar con scroll
- [X] Implementar OPENAI API para crear imagenes
- [ ] Store in Firebase
- [ ] Error Handler Create page
- [ ] PAGE: Galeria de cada usuario (/user/{user_id})
- [ ] Añadir apartado de imagenes guardadas a (Dashboard/Galery pages)
- [ ] User profile
- [ ] Admin page
- [ ] Not Found Pages

# Bibliografía

[Documentación de Laravel](https://laravel.com/docs/9.x)

[Documentación de Inertia](https://inertiajs.com/)

[Documentación de React](https://react.dev/)

[Documentación de la API de OpenAI](https://platform.openai.com/docs/guides/images)

[Cliente de OpenAI para PHP](https://github.com/openai-php/client#images-resource)

# Video checkpoint

[Click para ver video en youtube](https://youtu.be/MhpPijsZVeM)