# Red Social ✒️

Hola! este es mi quinto proyecto con la academia GeekHubs, se trata de una Red Social donde los usuarios pueden registrarse, loguearse e interactuar entre si creando posts y reaccionando con likes, asi como otras funciones que se detallan a continuación :

<summary> Indice 🧾</summary>


- [Tecnologias usadas ⚙](#tecnologias-)
- [Instalación 🏗️](#instalacion-)
- [Deploy 🚀](#deploy-)
- [Endpoints 🎛️](#endpoints)
- [Autor 🎨](#autor-)


## Tecnologias usadas

<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" 
alt="Docker"/>

<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

<img src="https://img.shields.io/badge/NodeJs-339933?style=for-the-badge&logo=Node.js&logoColor=white" 
alt="Nodejs" />

<img src="https://img.shields.io/badge/Express.js-335933?style=for-the-badge&logo=express&logoColor=white" 
alt="Express" />

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>

<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>



## Instalación 🏗️

<details>

<summary>Instalacion</summary>

**1**

***Clonar el repositorio***
```sh
git clone https://github.com/jluisferrer/Proyecto-5-Red-social
```

**2**

***Instalar dependencias***
```sh
npm install
```

**3**

***Crear archivo .env y agregue sus propios datos como en el ejemplo .env.samples***

**4**

***Poner en marcha el servidor***
```sh
npm run dev
```

**5**

***Agregar datos a las tablas***
***Esto agregará un usuario con cada rol(superadmin, admin y user) asi como un post con cada uno***

```sh
npm run run-seeders
```

</details>

## Deploy 🚀

```sh
https://proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io
```

## Endpoints 🎛️

<details>

***Instalación de Thunder Client para VSC***

Dentro de Visual studio code en el apartado extensiones (normalmente alojado en la parte inferior izquierda) deberá buscar "Thunder Client" e instalar el plugin. 
Junto con el proyecto en la carpeta /HTTP se adjunta un archivo llamado "thunder-collection_STUDIO TATTOO.json" donde se encuentran todos los endpoints disponibles tanto en local como en FL{0} para agregar esta colección pulse sobre el icono de Thunder Client que aparecerá despues de instalarlo en su VSC vaya al apartado "Collections" haga clic en import y busque el archivo "thunder-collection_STUDIO TATTOO.json" para agregarlo. Así podra probar todas las funciones que ofrece este proyecto. A continuacón se muestran todos los edpoints disponibles:

***AUTH***

- REGISTER 

 ```sh
POST proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/auth/register
 ```
***body***

 ```sh
{
   "username":"your-name",
   "email":"your-email",
   "password":"your-password"
}
 ```

- LOGIN 

 ```sh
POST proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/auth/login
 ```
***body***

 ```sh
{
   "email":"your-email",
   "password":"your-password"
}
 ```
***USER***      

- GET ALL USERS

 ```sh
GET proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/users?username=User <-- NECESITA ESTAR REGISTRADO Y TENER PRIVILEGIOS DE SUPERADMIN PARA PODER VISUALIZAR TODOS LOS USUARIOS
 ```

- GET USER PROFILE

 ```sh
GET proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/users/profile  <-- NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION PARA PODER VISUALIZAR SU PERFIL
 ```

- UPDATE USER PROFILE

 ```sh
PUT proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/users/profile  <-- NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION PARA PODER MODIFICAR CAMPOS DE SU PERFIL
 ```
***body***

 ```sh
{
   "username": "update name",
   "email": "update email",
   "password": "update password"   
}
 ```

- DELETE USER BY ID

 ```sh
DELETE proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/users/  <-- AGREGUE AQUI EL ID DEL USER, NECESITA TENER PERMISOS SUPER-ADMIN
 ```

- GET POSTS BY USER ID

 ```sh
GET proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/users/posts/  <-- AGREGUE AQUI EL ID DEL USER PARA VISUALIZAR SUS POSTS
 ```

***POSTS***  

 - NEW POSTS

```sh
POST proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/posts  <-- NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION PARA PODER CREAR UN NUEVO POST 
 ```

***body***

 ```sh
{
   "description": "your description",  
}
 ```

- DELETE POST BY ID

 ```sh
DELETE proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/posts/  <-- AGREGUE AQUI EL ID DEL POST QUE DESEA ELIMINAR, NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION
 ```

- UPDATE POST BY ID

 ```sh
PUT proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/posts/  <-- AGREGUE AQUI EL ID DEL POST QUE DESEA ACTUALIZAR, NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION
 ```
***body***

 ```sh
{
   "description": "your new description",  
}
 ```

- GET ALL POSTS

 ```sh
GET proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/posts/  <-- NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION PARA OBTENER TODOS LOS POSTS
 ```

- GET OWN POSTS

 ```sh
GET proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/posts/own  <-- NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION PARA OBTENER SUS POSTS
 ```

- GET POSTS BY

 ```sh
GET proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/posts/  <-- INTRODUZCA AQUI EL ID DEL POST, NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION PARA OBTENER SUS POSTS
 ```

- LIKE POST

 ```sh
PUT proyecto-5-red-social-dev-pjth.1.ie-1.fl0.io/api/posts/like/  <-- INTRODUZCA AQUI EL ID DEL POST QUE DESEA DAR LIKE O QUITAR EL LIKE, NECESITA ESTAR LOGUEADO Y TENER SU TOKEN DE AUTENTIFICACION
 ```

</details>

## AUTOR 🎨

- **JOSE LUIS FERRER**

<a href="https://linkedin.com/in/jose-luis-ferrer-martinez/" target="blank"><img align="left" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>

<a href="https://github.com/jluisferrer/" target="blank"><img align="left" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="jose-luis-ferrer-martinez/" height="30" width="40" /></a>

