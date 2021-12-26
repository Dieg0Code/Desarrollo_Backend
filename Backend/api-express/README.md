# Backend con Node y Express

## Configuración inicial

Antes de comenzar a desarrollar es buena practica configurar el entorno de desarrollo que vamos a usar ya que esto nos permite tener los mismos estandares entre todos los desarrolladores del proyecto.

Para esto debemos agregar multiples archivos de configuración en nuestro proyecto como por ejemplo:

- `package.json`
- `.gitignore`
- `.editorconfig`
- `.eslintrc.json`

Los cuales establecen ciertas reglas de configuración.

Para el archivo `.gitignore` tenemos una página que nos será de ayuda [gitignore.io](https://gitignore.io/).

Para instalar las dependencias de desarrollo ejecutamos el siguiente comando:

```bash
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```

## Levantar un servidor

Levantar un servidor con express es muy sencillo, solo debemos instalarlo:

```bash
npm i express
```

Y en nuestro index.js:

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

Lo ejecutamos con:

```bash
npm run dev
```

Y listo ya tenemos un servidor corriendo, aunque uno muy simple.

Recordar que siempre podemos ir a la documentación oficial de express para ver como funciona: [expressjs.com](https://expressjs.com/en/starter/hello-world.html).

## Routing con express

Todos los sitios en los que solemos navegar por internet tienen rutas, es lo que está despues del slash en la url ``'/'``, por ejemplo: ``'http://localhost:3000/products'``, en donde la ruta sería ``'products'``.

## ¿Qué es una RESTful API?

**REST: Representational State Transfer**. Es una convención que se refiere a servicios web que se comunican mediante el por protocolo HTTP.

Tiene diferentes metodos:

- ``GET``: Obtener datos.
- ``PUT``: Modificar datos.
- ``PATCH``: Modificar datos parcialmente.
- ``POST``: Crear datos.
- ``DELETE``: Eliminar datos.

### PATCH

El **método de solicitud HTTP** ``PATCH`` aplica modificaciones parciales a un recurso. ``PATCH`` es algo análogo al concepto de “actualización” que se encuentra en CRUD, Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con ``PUT``; que es una representación completa de un recurso.

``PATCH`` no es necesariamente idempotente, aunque puede serlo. Contrasta esto con ``PUT``; que siempre es idempotente.

La palabra “idempotente” significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un ``PUT`` lo sobrescribirá naturalmente (ya que sobrescribe todo).

Tanto ``PATCH`` como ``POST`` pueden tener efectos secundarios sobre otros recursos.

![web service](https://static.platzi.com/media/user_upload/Captura-d336ab2e-8e2d-40a4-808a-ee3da1fbdaef.jpg)

## Query params

Son parametros de consulta que suelen venir en los metodos ``GET``.

¿Para que sirven?, por ejemplo puedo tener un endpoint ``api.example.com/products``, pero luego por medio de parametros tipo **query** puedo hacer comportamientos como **paginar** (``api.example.com/products?page=1``) y la página 1 tendria por ejemplo 50 productos, la página 2 otros 50, y así, tambien podemos usar otra estrategia de paginación como (``api.example.com/products?limit=10&offset=0``). Sin embargo tambien me sirven para filtrar los resultados, por ejemplo, quiero todos los productos que tengan la region **x** (``api.example.com/products?region=USA``), y tambien podemos encadenar varias querys, por ejemplo, ``api.example.com/products?region=USA&brand=XYZ``.

¿Que tal si poblamos de alguna manera información mas concisa para nuestros productos?, hay una libreria que nos puede ayudar a generar data *fake*:

```bash
npm i faker -D
```

Los endpoints especificos (api.example.com/products/filter) deben estar declarados antes de los endpoints dinamicos (api.example.com/products/:id) porque sino nos dara un error ya que entendera que **filer** es el **id** que estamos buscando.

## ¿Qué son los Middlewares?

Los middlewares están en medio del ``request`` y del ``response``, porque ahí es donde nos permite procesar lógica y enviar luego el ``response``. Sin embargo tambien pueden ser utilizados de forma global, por ejemplo, para capturar todos los errores que puedan ocurrir en la aplicación o de forma única para cada uno de los ``endpoints``.

Además una de las propiedades de los ``middlewares`` es que pueden funcionar de forma secuencial, quiere decir que yo puedo tener varios ``middlewares`` y hacer que uno corra tras el otro. Hacer que un middleware que tiene una función en especifico se ejecute y luego siga al otro, que tambien tiene una función en especifico, y así sucesivamente. ¿Para que sirve esto?, por ejemplo, que el primer middleware valide logica de si tenemos autenticación, si nuestro usuario esta logueado, y si lo está, lo dejamos pasar y luego en el segundo middleware hacemos otra cosa, como validar la data por ejemplo y luego en el tercero hacemos otra cosa, y así sucesivamente.

Esto quiere decir que un middleware permite "bloquear" el flujo de ejecución de la aplicación y no dejar que se ejecuten el resto de los middlewares.

En la estructura logica de un middleware tenemos el tipico ``request`` y ``response``, pero ademas está el ``next``, es este quien no va a permitir ejecutar y seguir al siguiente ``middleware`` en caso que asi lo requiera, pero si no queremos ejecutar otro ``middleware`` y solo enviar la respuesta al usuario usamos el ``res.send()``, con esto finalizamos y enviamos la respuesta al usuario, con next ejecutamos el siguiente middleware que esta en la cola.

```js
function(req, res, next) {
  if(something) {
    res.send('end');
  } else {
    next();
  }
}
```

Estos son la clase mas común de middlewares. Sin embargo existen middlewares de tipo "error", ¿cual es la diferencia?, que simplemente tienen un parametro más, es decir que reciben el error de primeras, es *first error* y tenemos que tener los 4 parametros, ``error``, ``req``, ``res``y ``next``, para que se identifique que es un middleware de tipo error.

```js
function(error, req, res, next) {
  if (error) {
    res.status(500).json({error});
  } else {
    next();
  }
}
```

De esta forma podemos tener un ``middleware`` global que vaya interceptando todas las peticiones y si ocurre un error, entonces le ponemos un formato de respuesta personalizado, pero si no hay ningún error, entonces seguimos con la ejecución normal.

### Use Cases

- Funcionar como pipes: podemos empezar a conectar unos con otros (como una tuberia), la salida de uno es la entrada de información de otro.
- Validar datos
- Capturar errores
- Validar permisos
- Controlar accesos

Middleware es software que permite uno o más tipos de comunicación o conectividad entro dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización. 

## Manejo de errores con Boom

Con esta libreria podemos manipular los errores respetando los status codes.

Para instalarla:

```bash
npm i @hapi/boom
```

Si quieres buscar la documentación de alguna librería de una manera más facil podemos ejecutar el comando:

```bash
npm docs <nombre-de-la-libreria>
```

## Validacion de datos con Joi

Recuerda:

```bash
npm docs joi
```

Otro caso de uso comun para los ``middlewares`` es validar los dato, validar los datos que me están enviando desde el cliente, si tengo una app en angular o en react, por ejemplo, estan nos envian datos a la API, pero deberiamos nosotros como Backend validar si los datos cumplen con la integridad de datos requerida para poder insertar eso a una base de datos, por ejemplo que el precio esté en un formato adecuado, que la imagen sea una URL, que la fecha tenga un formato que sea correcto, en resumen, que vengan los atributos que en verdad necesitamos, por ejemplo, si no viene un precio, deberiamos rechazar la petición e informar al cliente que no viene el campo de precio.

## Middlewares populares en Express

### CORS

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. http://expressjs.com/en/resources/middleware/cors.html

### Morgan

Un logger de solicitudes HTTP para Node.js. http://expressjs.com/en/resources/middleware/morgan.html

### Helmet

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. https://github.com/helmetjs/helmet

### Express Debug

Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. https://github.com/devoidfury/express-debug

### Express Slash

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. https://github.com/ericf/express-slash

### Passaport

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. https://github.com/jaredhanson/passport

Puedes encontrar más middlewares populares en el siguiente enlace: http://expressjs.com/en/resources/middleware.html

## Consideraciones para producción

### Recomendaciones

- Cors: evaluar a quien le damos acceso para que haga solicitudes.
- Https: La conexion es cifrada.
- Procesos de Build
- Remover logs: no es bueno tener logs en produccion, esto puede ser un problema de seguridad.
- Seguridad (Helmet)
- Testing: Debemos correr pruebas unitarias o pruebas de integracion antes de subir el código a producción.

### Cors

Cross-origin resource sharing (CORS). ¿Que significa esto?, significa que nuestros servidores tienen una protección por defecto, solo aceptan peticiones desde su mismo origen (host), pero si queremos que otras aplicaciones puedan hacer solicitudes a nuestra aplicación, entonces tenemos que habilitar el CORS.

Nosotros hacemos una API para que otros se conecten a esta, no necesariamente desde el mismo origen, aunque puede darse ese caso, pero si a veces tenemos, por ejemplo, una aplicación mobile que debe consumir la API, pues ese es otro origen, o tenemos una aplicación que corre en un dominio diferente, por ejemplo nuestra API está corriendo en ``api.mydomain.com``, pero nuestra aplicación de frontend esta corriendo en ``www.mydomain.com`` la cual puede estar hecha con cualquier framework de frontend, y por allá tenemos otra aplicación que esta corriendo en ``otro.mydomain.com``, esos son origenes diferentes, cuando quieren conectarse a la API esta por defecto los va a rechazar.
