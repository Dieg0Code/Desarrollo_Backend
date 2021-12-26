# Curso de Node.js

Para instalar Node.js en Linux:

```bash
sudo apt-get install nodejs
```

Comprobar la instalación:

```bash
node -v
```

```bash
npm -v
```

``Node.js`` es un runtime de JavaScript, que permite ejecutar JavaScript en un entorno de servidor, es decir, fuera de un navegador.

## ¿Qué son y cómo se usan las peticiones HTTP?

Una petición HTTP es un protocolo de comunicación que permite las transferencias de información en la web.

Cualquier elemento que esté en la web se comunica a través de HTTP, servidores, ordenadores, clientes, dispositivos IoT, etc. Cualquier elemento que se comunique por internet, se comunica a través del protocolo HTTP.

Es el lenguaje común para todas las comunicaciones.

Con las peticiones HTTP podemos comunicarnos entre cualquier tipo de dispositivo a través de las peticiones HTTP.

El ``cliente`` manda una petición HTTP a traves de ``internet``, el ``servidor`` la recibe y responde con una respuesta HTTP.

- ``Cliente`` ``-HTTP->`` ``Internet`` ``-HTTP->`` ``Servidor``
- ``Cliente`` ``<-HTTP-`` ``Internet`` ``<-HTTP-`` ``Servidor``

### ¿Cómo es una petición?

- **GET** /index.html HTTP/1.1
- **Host**: www.example.com
- **Referer**: www.google.com
- **User-Agent**: Mozilla/5.0
- **Connection**: keep-alive

### ¿Cómo es una respuesta?

- ``HTTP/1.1 200 OK``
- Date: Sun, 25 sep 2021 10:49:00 GMT
- Content-Type: text/html
- Content-Length: 1234

\<html>...\<\/html>

### Puntos claves a tener en cuenta

- ``Métodos``: Qué quieres hacer
- ``Estado``: Cómo ha ido la operación
- ``Cuerpo``: Lo que el servidor devuelve

### Diferencia entre HTTP y HTTPS

La diferencia de http y https es que https pasa por un canal de encriptacion haciendo que los datos que se envían por Internet sean imposibles de entender y cuando llegan al servido estos se descifra.

HTTP -> puerto 8080 u 80, dependiendo de tu contenedor
HTTPS -> puerto 443

Donde el HTTPS utiliza certificados SSL (siendo el sucesor del TLS), los cuales son protocolos para establecer enlaces autenticados y cifrados entre computadoras en red

## Métodos, cabeceras y estados

### Métodos HTTP

¿Qué son?:

El verbo que dice "lo que queremos hacer" al servidor.

Los verbos principales que podemos utilizar son:

- **GET**: Recoger información del servidor.
  - Información de un producto
  - Listado de elementos
  - Ver una página HTML o un archivo CSS.
- **POST**: Añadir información al servidor.
  - Añadir un producto
  - Enviar un formulario
- **PUT**: reemplazar información en el servidor.
  - Cambiar el contenido de un página.
  - Reemplazar un producto por otro.
  - Editar un mensaje.
- **PATCH**: Actualizar parte de la información.
  - Cambiar la foto de un usuario.
  - Modificar el precio de un producto.
- **DELETE**: Eliminar información del servidor.
  - Eliminar un mensaje.
  - Quitar un producto del carrito.
- **OPTIONS**: Pedir información sobre métodos (saber si podemos ejecutar algunos de los métodos anteriores.)
  - Saber si puedes ejecutar POST, PUT, PATCH, DELETE, etc.

### Cabeceras HTTP

**Las cabeceras** serán el envío al servidor de cómo queremos hacer la petición, son información contextual de la petición.

No es lo que quiero hacer, sino como lo quiero hacer.

¿Que tipo de informacion pueden mandarme?:

Por ejemplo en ``POST``, ``PUT``, ``PATCH`` podemos tener:

- **AUTENTICACIÓN**: Para decir quien soy. Asegurate de que puedes pedir cosas al servidor.
  - Authorization
- **CACHÉ**: *Almacenamiento temporal*. Gestionar durante cuánto tiempo la respuesta será la misma.
  - Cache-Control
  - Expires
- **INDICACIONES**
- **CONDICIONES**
- **CORS**: *Cross Origin Resource Sharing*. Manejar información desde fuera de nuestro servicio, es basicamente decir si podemos o no manejar informacion desde fuera de nuestro servidor.
  - Access-Control-Allow-Origin
- **COOKIES**: Para compartir información entre peticiones.
  - Cookie
- **ACCEPT**: Define el contenido que acepta el servidor.
  - Accept
  - Accept-Charset
  - Accept-Encoding

### Estados HTTP

**Los estados** son números que indica el estado de la petición:

- **2XX**: Todo ha ido bien.
  - 200: OK
  - 201: Created
- **3XX**: La petición se ha redirigido.
  - 301: Moved Permanently
  - 304: Not Modified
- **4XX**: Errores del cliente.
  - 400: Bad Request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not Found
- **5XX**: Ha habido un error al procesar la petición.
  - 500: Internal Server Error

## Cuerpo y query de la petición

¿Como se envia la información desde el cliente al servidor y viceversa?.

### Cuerpo de la petición

**El cuerpo de la petición** es la información en sí que queremos enviar, editar o que el servidor nos devuelva. Por ejemplo en una petición ``POST``, podemos enviar un formulario con los datos del usuario, el servidor procesa la peticion y nos devuelve una respuesta con estado 201 (created) por ejemplo, tambien nos podria devolver en la respuesta alguna información del usuario que se ha creado, etc.

### ¿Que tipos de datos puede devolver el servidor?

Esto depende de las cabeceras, por ejemplo la cabecera ``Content-Type`` nos dice el tipo de contenido que recibimos, la cabecera ``Content-Length`` nos va a informar como de largo es el cuerpo del contenido.

### Posibles content-types

- **text/html**: archivos HTML
- **text/css**: archivos CSS
- **application/javascript**: archivos JavaScript
- **image/jpeg**: Imágenes
- **application/json**: JSON
- **application/xml**: XML

Si traemos un archivo javascript el cual queremos que se ejecute necesitamos el tipo de cabecera ``application/``.

- **application/javascript**: le indica al navegador que queremos que ese archivo se ejecute.

#### En la request

- ``[POST]``

- ``http://api.com/users``

- ``content-type: application/json``

```json
{
    "name": "Carlos",
    "username": "CodingCarlos",
}
```

#### En la response

- En cualquier metodo.
- Un archivo html, css, js, etc.
- Los datos de un producto.

```json
{
    "id": "4u59d7xsa00xr1",
    "name": "Carlos",
    "username": "CodingCarlos",
}
```

Por ejemplo:

- ``[GET]``
- ``http://platzi.com``
- ``content-type: text/html``

```html
// en la response
<html>
    <head>...</head>
    <body>...</body>
</html>
```

### Query

#### ¿Qué es?

Permiten añadir información extra a lo que queramos enviar al servidor.

Por ejemplo:

- Orden en el que quieres que se devuelvan los datos.
- Parámetros que quieres medir.

Por ejemplo al hacer una peticion a youtube la peticion suele ser así:

- ``youtube.com/watch?v=ZKFwQFBwQFU``

Todo lo que va despues de ``?`` es un query, en este caso para ir a un video en especifico.

- ``api.com/person?orderBy=name&age=25``

Aquí la ``query`` es ``orderBy=name&age=25``.

Las ``query`` tambien pueden ser usadas como una forma de compartir datos con el frontend.

Pero **ojo**, el usuario las verá en la url, así que cuidado con lo que compartes.

Por ejemplo:

- ``miweb.com?utm_source=medium``

Este parametro es super utilizado por todos los proveedores de analitica para ver de donde viene el tráfico. Es para saber de donde vienen los datos.

- ``miweb.com?color=red``

Tambien puedo cambiar parametros como por ejemplo decir que quiero que el color de la web venga en rojo, de esta manera puedo decir desde el frontend al backend que quiero que ese parametro se ponga en rojo, o si lo traigo desde el backend y tengo que mandar un archivo ``css`` especifico, se que tengo que enviar el que tiene el color rojo.

### Estructura de una query

- Añadir ``?`` al final de la URL.
- ``nombre=valor``: nombre es lo que quiero enviar, por ejemplo ``utm_source`` o ``v`` para decir que es un video, y el ``=`` para indicar el valor. Por ejemplo ``utm_source=medium``.
- Separarlos con ``&``: Si quiero poner mas de uno, simplemente pongo un ``&`` y luego lo mismo, un ``name=value&name2=value2``.

## Crear un servidor HTTP desde NodeJS

Para crear un servidor con ``node`` debemos crear una carpeta, en mi caso es ``backend_node``, nos posicionamos en ella y ejecutamos el siguiente comando:

```bash
npm init
```

Esto generara un archivo ``package.json`` que contiene la información del proyecto.

Tambien debemos instalar el modulo ``express`` para poder crear un servidor.

```bash
npm i express
```

Crear un servidor funcional es muy sencillo, para ello creamos un archivo ``server.js`` y dentro de el escribimos el siguiente codigo:

```js
const express = require('express');

var app = express();

app.use('/', (req,res) => res.send("Hola") );

app.listen(3000);
console.log('app running on: http://localhost:3000');
```

Lo ejecutamos con el comando:

```bash
node server
```

En el navegador escribimos:

```text
localhost:3000
```

y listo! :smile: , ya tenemos un servidor funcional.

## ¿Cómo pueden venir las peticiones?

Tenemos un servidor funcional, pero siempre va a devolver lo mismo no importa que tipo de peticion HTTP le haga, ¿que podemos hacer para que nos responda cualquier cosa?.

Para ello vamos a usar el ``router`` de express.

```js
const router = express.Router();
```

El ``router`` nos permite separar las peticiones por cabeceras, metodos, por URL, etc.

Con el router podemos definir comportamientos para cada tipo de peticion.

```js
app.use(router);

router.get('/', (req, res) => {
    res.send('Hello from get');
});

router.post('/', (req, res) => {
    res.send('Hello from post');
});
```

```bash	
curl http://localhost:3000/
```

Devuelve:

```text
Hello from get
```

```bash
curl -X POST http://localhost:3000/
```

Devuelve:

```text
Hello from post
```

Esto funciona para cada uno de los verbos HTTP.

### Nodemon

Para no tener que andar bajando y subiendo el server se puede instalar una librería que se llama ``nodemon``, la cual detecta cambios en el file system del proyecto y hace el reload del proyecto automáticamente.

*Para instalar nodemon ejecutar:*

```bash
npm i -g nodemon
```

Luego de tener instalado nodemon, hay que realizar un cambio en el package.json agregando lo siguiente en el apartado de scripts:

```json
"server":"nodemon server.js",
```

Luego para levantar el server en vez de:

```bash
node server.js
```

Ejecutar:

```bash
npm run server
```

## Recibir información desde el cliente: Body y Query

¿Como podemos usar el ``body`` y el ``query`` en nuestras peticiones?

### Body

Para trabajar con el ``body`` debemos usar el ``body-parser``.

Lo instalamos con el comando:

```bash
npm i body-parser
```

Ahora podemos agregar al código la siguiente linea:

```js
app.use(bodyParser.json());
```

``body-parser`` tiene un serie de metodos, en este caso usamos ``json``, que nos permite recibir un objeto JSON.

Agregamos tambien en el router de delete:

```js
router.delete('/message', (req, res) => {
    console.log(req.body); // <-- esto es el body
    res.send('Mensaje eliminado ❌');
});
```

Para que nos muestre por consola el objeto JSON que nos llega.

### Querys

Para trabajar con el ``query`` podemos usar en vez ``req.body``, ``req.query``.

Con esto podemos agregar ``querys`` en la URL, por ejemplo:

```text
http://localhost:3000/message?orderBy=id&age=20
```

```js
router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje ' + req.body.text + ' eliminado ❌');
});
```

## Información contextual: Leer las cabeceras

Si agregamos a nuestra funcion de get:

```js
router.get('/message', (req, res) => {
    console.log(req.headers); // <-- esto es el header
    res.send('Lista de mensajes 📩');
});
```

Y hacemos una peticion GET a la URL nos devolvera la información de las cabeceras, las cuales nos dan un monton de información util sobre el cliente que nos está haciendo la petición.

Tambien nosotros como servidor podemos devolver header personalizados, por ejemplo:

```js
router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Header facherito"
    })
    res.send('Lista de mensajes 📩');
});
```

Con esto podemos agregar a la respuesta heades propios los cuales nos pueden servir para identificar si es mi servidor o no, para ponernos de acuerdo con el cliente y que este pueda recibir solo peticiones que lleven nuestro header, etc.


## Tipos de respuesta: Vacía, plana, con datos y estructurada

```js
res.send();  //vacia
res.status(201).send('Hola ' + req.body.name);  //plana
res.status(201).send({    //Estructurada - array, objetos
        error: '',
        body: 'Creado correctamente'
    });
```

Podemos hacer cualquier tipo de respuesta en nuestras peticiones HTTP, de esta manera podemos trabajar con los códigos de status que nosotros queramos, podemos trabajar con respuestas vacias, podemos mandar un mensaje o podemos mandar objetos complejos como un array o un objeto, los cuales pueden ser todo lo complejo y anidado que queramos.

## Respuestas coherentes

Necesitamos que las respuestas de nuestra API sean coherentes, para esto debemos estandarizarlas . Para no tener en un metodo una respuesta plana y en otro una estructurada, lo que podemos hacer es responder a todas las peticiones desde el mismo sitio, para hacer eso agregamos un módulo que se encargará de responder nuestras peticiones.

Creamos una carpeta llamada ``network``, porque es la que contendra todas las partes que pertenezcan a la capa de red de nuestra aplicación y dentro de esta carpeta creamos un archivo llamado ``response.js``.

```js
// response.js
exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = (req, res) => {
    
}
```

Con esto estandarizamos la forma en que respondemos a nuestras peticiones.

Asi podemos usar nuestro módulo de respuesta en los metodos de nuestras peticiones HTTP.

```js
// server.js
router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Header facherito"
    })
    response.success(req, res, 'Lista de mensajes 📩');
});

router.post('/message', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    response.success(req, res, 'Mensaje creado ✔');
});

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    response.success(req, res, 'Mensaje eliminado ❌');
});
```

Tambien podemos estandarizar los errores:

```js
exports.error = (req, res, message, status) => {
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}
```

De esta forma si modificamos el router post asi:

```js
router.post('/message', (req, res) => {
    console.log(req.body);
    if (req.query.error == "ok") {
        response.error(req, res, 'ha fallado correcatamente 🤣 ✔', 400);
    } else {
        response.success(req, res, 'Mensaje creado ✔', 201);
    }
});
```

Podemos simular un error en nuestra API:

```url
http://localhost:3000/message?error=ok
```

## Servir archivos estáticos

Necesitamos servir archivos estáticos, HTML, CSS, JS, todos lo archivos necesarios para el frontend de nuestra aplicación.

``Node.js`` es particularmente bueno para servir cualquier tipo de peticion porque no se bloquea.

Para hacer esto usaremos el servidor de estaticos de ``express``.

Agregamos una carpeta llamada ``public`` a nuestro proyecto, dentro de esta carpeta agregamos un archivo llamado ``index.html``.

```html
<html>
    <body>Hola 👋🏻</body>
</html>
```
Tambien debemos añadir a ``server.js`` la siguiente linea:

```js
app.use('/app', express.static('public'));
```

Podemos incluso agregar dentro de ``public`` una carpeta llamada ``css``, y dentro un archivo llamado ``style.css``.

De esta forma podemos acceder a cualquier archivo estático de nuestra aplicación partiendo de ``/app``.

```url
http://localhost:3000/app/css/style.css
```

O

```url
http://localhost:3000/app
```

Para que lo anterior funcione el archivo debe llamarse ``index.html``, de lo contrario hay que indicar el nombre del archivo que queremos acceder.

La funcion de **estaticos** de ``express`` cuenta con multiples **opciones** de configuración, por ejemplo:

```js
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))
```

## Errores: Cómo presentarlos e implicaciones en la seguridad

Cuando creamos un backend debemos conocer todo lo que esto implica, esto es, debemos incluir información en los ``response`` que permita identificar cuando hay errores en nuestra aplicación, esto está muy bien para quien esté usando nuestra aplicacion, pues le devuelve información muy concreta de donde ha venido su error. Pero tenemos que ser muy cuidadosos, como programadores de backend, con la información que entregamos al cliente. Imagina que en un login con un usuario y una contraseña, si devuelvo un error que diga "el usuario es correcto, la contraseña es incorrecta", estoy dando información de que este usuario existe en la plataforma, esto siempre depende puesto que hay casos en que esta información es pública, como en twitter, pero si esto pasara en el panel de control de una web donde el nombre de usuario deberia ser confidencial y la contraseña también, esto seria una vulnerabilidad, podrian hacer un ataque de fuerza bruta por ejemplo para descubrir la contraseña.

Si queremos devolver un error que sea coherente, dandole información al usuario, pero queremos nosotros también saber que es lo que hay ocurrido, para eso tenemos los logs.

Para esto añadimos a la funcion que maneja los errores en ``response.js`` lo siguiente:

```js
// response.js

exports.error = (req, res, message, status, details) => {
    console.log(chalk.red(`[response error] ${details}`));

    res.status(status || 500).send({
        error: message,
        body: ''
    });
}
```

Si queremos darle un color a los logs, podemos usar ``chalk``:

```bash
npm install chalk -D
```

```js
// response.js

const chalk = require('chalk');
```

De esta forma podemos simular un error desde ``server.js``:

```js
router.post('/message', (req, res) => {
    console.log(req.body);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Error simulado'); // <--
    } else {
        response.success(req, res, 'Mensaje creado ✔', 201);
    }
});

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    response.success(req, res, 'Mensaje eliminado ❌');
});
```

Así no le decimos directamente al usuario cual fue el error, sino que le decimos simple mente ``error interno``, pero en los log mostramos cual ha sido el error exactamente. De esta manera no enviamos información sensible al usuario.

## Conceptualmente: Rutas, controladores y bases de datos

![arquitectura de la app](https://static.platzi.com/media/user_upload/diagrama-825e902b-0966-40f0-8231-65b99f7206c1.jpg)

- Cualquier peticion que nos llegue siempre va a venir de internet.

- El ``server.js`` es el encargado de recibir las peticiones, va a comprobar si son correctas para entrar en nuestro servidor o sino directamente cancelarlas si hubiese algún tipo de problema o fallo. Tambien es el encargado de configurar toda la información importante de nuestro servidor (base de datos, cabeceras, etc).

- Y ¿donde manda ``server.js`` los datos?, este archivo va a ser exclusivamente de red y lo llamamos ``router.js`` ya que es el que gestiona las rutas. Ve hacia donde quiere ir la peticion y va a llamar al componente adecuado.

- Tendremos una carpeta de componentes, esta tendrá dentro cada uno de los componentes separados en carpetas con sus respectivos nombres, en este caso tendremos el componente ``message``, la que tendra todo lo relacionado con los mensajes, cuales son los endpoints de los mensajes, cuales son las acciones que queremos hacer, cual es toda la lógica relacionada, donde se almacena, etc. De esta forma cada vez que queramos hacer cualquier cambio en mensajes sabemos que tenemos que ir a ``/components/message``.

- Dentro de cada componente tendremos un archivo de rutas ``network.js``, en este archivo vamos a gestionar todas las rutas, contendrá todos los endpoint y toda la información que tenga que ver con el protocolo HTTP. Cuando el el ``routes.js`` detecte que tenemos una petición que viene hacia los mensajes , se la va a pasar a su componente correspondiente y a partir de ese punto se va encargar el propio componente del ``message`` de gestionar la petición, se va a encargar de ver si el mensaje está bien formado.

- Luego tenemos el controlador, este es quien tiene toda la lógica de nuestro componente de mensajes, como es un controlador lo llamaremos ``controller.js``, ¿que quiere decir esto?, que si el mensaje necesita una fecha aquí la añadiremos, si el mensaje tiene que llamar a otro componente para hacer más, etc. Todo lo que se modificar el mensaje, cambiar, crear información, añadir información adicional, hacer comprobaciones adicionales, todo eso se hace en el controlador. Eso es lo que se llama ``lógica de negocio``.

- Una vez de que el ``controller`` hace toda las comprobaciones, probablemente tenga que guardar ese archivo en una base de datos, para no tener la lógica de la base de dato en el controlador, creamos un archivo encargado exclusivamente de gestionar las bases de datos, a este archivo lo llamamos ``store.js``, ¿cual es la responsabilidad de este archivo y porque es importante separarlo?, la responsabilidad única de este archivo es decir **donde** y **como** se guarda la información, si queres utilizar ``mongodb``, ``mysql``, etc. Todo eso se define en este archivo. ¿Porque se hace de esta manera?, porque a partir de aqui todos los componentes que añadiremos seran iguales, entonces si queremos modificar que tipo de base de datos utiliza otro componente, simplemente tendremos que modificar este archivo y todo el resto del código seguirá funcionando.

Al separar conceptualmente la lógica, el almacenamiento y la red, los endpoints van a ser los mismos, la lógica va a ser la misma y si modificamos algo como la base de datos todo lo demas seguirá funcionando sin problemas.

- Pero ¿como hacemos para que las respuestas sean siempre iguales si tenemos tantos componentes diferentes?. Al igual que con routes tendremos un archivo ``response.js``. Cada vez que una petición sea correcta, el modulo HTTP en vez de devolverselo al router, se lo va a devolver a ``response.js``, de esta forma todos los componentes responderán al cliente final a través de ``response.js``.

De esta forma separamos nuestro servidor a nivel conceptual y físico para que todo lo que hagamos sea escalable y mas facil de mantener.

## Rutas y capa de red: Responsabilidades y límites

Cualquier aplicación va a tener tres puntos de responsabilidad, que deben responder a tres preguntas:

- ¿Cómo me comunico con ella?
- ¿Qué hace?
- ¿Dónde y cómo se guardan los resultados?

La respuesta a estos tres puntos, corresponden a las tres capas que vamos a generar:

- Capa de red (en inglés “network”)
- Capa controladora (en inglés, “controller”)
- Capa de almacenamiento (en inglés, “store”)

La primera capa es una capa de red, porque la conexión con la aplicación se hace a través del protocolo de comunicación en red HTTP. Es la responsable de comunicar al cliente HTTP con nuestro código del controlador.

Si recuerdas las primeras clases, verás que el protocolo HTTP construye una petición con una dirección (route), un verbo (method), unas cabeceras (headers) y un mensaje (body).

Por esto, cada uno de nuestros componentes, tendrá un archivo “network.js” encargado de traducir la petición del cliente HTTP a la acción que queremos realizar en nuestro controlador.

Así, lo que hace nuestro código (la funcionalidad) no está acoplado a unos requisitos de red, y puede ser reutilizado con otras fuentes de entrada (colas MQTT, una biblioteca externa, microservicios, etc).

## Controladores: Definiendo la lógica de negocio

Los controladores se encargan de definir la lógica de negocio de nuestra aplicación.

```js
// controller.js
const chalk = require('chalk');

const addMessage = (user, message) => new Promise((resolve, reject) => {

    if (!user || !message) {
        console.log(chalk.red('[messageController] : No hay usuario o mensaje'));
        return reject('Datos incorrectos');
    }

    const fullMessage = {
        user,
        message,
        date: new Date()
    };

    resolve(fullMessage)
    console.log(`${chalk.green('[messageController] : Mensaje añadido')}`);
    console.log(fullMessage);
});

module.exports = {
    addMessage,
};
```

## Almacenando la información en una base de datos

Para eso creamos dentro de nuestro componente ``message`` un nuevo archivo llamado ``store.js``, en el cual tendremos toda la lógica de almacenamiento de nuestros datos.

Para esto crearemos un mock de la base de datos, en este caso, una base de datos en memoria, pero podríamos utilizar una base de datos real, como por ejemplo, MongoDB. Esto es para que entendamos como funciona y que comprendamos cual es la responsabilidad única de este archivo.

```js
// store.js
const list = [];

const addMessage = (message) => {
    list.push(message);
    console.log(list);
}

const getMessages = () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}
```

De momento este archivo almacena los mensajes en una lista en el array ``list``, por lo que si cerramos el servidor, los mensajes se perderán.

Ademas debemos modificar la capa de ``network`` y el ``controller`` para que los mensajes se guarden en la base de datos.

```javascript
// network.js
router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.post('/', (req, res) => {
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) =>{
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        });
});
```

Y el controller:

```js
// controller.js
const store = require('./store')

const chalk = require('chalk');

const addMessage = (user, message) => new Promise((resolve, reject) => {

    if (!user || !message) {
        console.log(chalk.red('[messageController] : No hay usuario o mensaje'));
        return reject('Datos incorrectos');
    }

    const fullMessage = {
        user,
        message,
        date: new Date()
    };

    store.add(fullMessage);
    console.log(`${chalk.green('[messageController] : Mensaje añadido')}`);
    resolve(fullMessage)
});

const getMessages = () => new Promise((resolve, reject) => {
    resolve(store.list());
});

module.exports = {
    addMessage,
    getMessages,
};
```

De esta forma podemos agregar mensajes al array ``list`` mediante ``POST``, y luego obtenerlos mediante ``GET``.

## Tipos de Bases de Datos: Relacionales y No Relacionales

**Bases de Datos Relacionales**: no es una base de datos muy flexible, pero tiene a favor su gran soporte y el enorme desarrollo en herramientas para su uso. Si necesitamos cambiar un valor de un campo debemos hacerlo con todos los campos de nuestra BD, en cambio con NoSQL o No Relacional no es así.

**Bases de Datos No Relacionales**: son de bases de datos sin una tabla fija como las que sí se encuentran en las bases de datos relacionales, lo que permite una alta escalabilidad en ellas. Además, es abierta y por lo tanto flexible a diferentes tipos de datos y no necesita tantos recursos para ejecutarse; de hecho, el hardware necesario no cuesta mucho.

![sql y nosql](https://static.platzi.com/media/user_upload/databases-ee854eda-c48a-44f1-8276-7fb09a379986.jpg)

## MongoDB: Almacenar y leer datos

Para poder usar MongoDB, debemos instalar el módulo de npm llamado ``mongooose``.

```bash
npm i mongooose -D
```

Para poder almacenar y leer datos necesitamos algún tipo de base de datos, en este caso es MongoDB.

Existen varias opciones para implementar MongoDB, en mi caso opté por usar ``docker-compose``.

```docker-compose.yml
version: "3"

services:
  api:
    container_name: node-api
    restart: always
    build: .
    ports:
      - "3000:3000"
    links:
      - mongodb
  mongodb:
    container_name: node-mongodb
    image: mongo
    ports: 
      - "27018:27017"
```

También es importante el ``Dockerfile``, en el cual se especifica la imagen de la aplicación.

```Dockerfile
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
```

con esos dos archivos dentro de la carpeta del proyecto podemos ejecutar el servidor con:

```bash
docker-compose build
```

Para construir la imagen de la aplicación junto con la base de datos.

Para ejecutar la imagen de la aplicación:

```bash
docker-compose up
```

Tambien debemos agregar un nuevo archivo a la carpeta de ``components/messages``, en este caso ``model.js``.

```js
// model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('Message', mySchema);

module.exports = model;
```

Este archivo especifica el esquema de datos, esquema que será usado para guardar luego los mensajes en la base de datos.

Tambien debemos editar el archivo ``store.js`` para que use el esquema de la base de datos.

```js
const db = require('mongoose');
const Model = require('./model')

const chalk = require('chalk');

db.Promise = global.Promise;
db.connect('mongodb://mongodb/node-api', {
    useNewUrlParser: true,
})
    .then( () => console.log(chalk.green('[DB] : Connected to DataBase')))
    .catch( err => console.log(err)); 

const addMessage = (message) => {
   const newMessage = new Model(message);
    newMessage.save();
}

const getMessages = async () => {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}
```

Con todo esto ya deberiamos ser capaces de hacer peticione ``POST`` y ``GET`` a nuestra API.

## MongoDB: Actualizar datos

Para modificar información que ya se ha guardado en la base de datos, debemos usar el verbo ``PATCH``.

Para eso necesitamos crear la ruta en ``network.js``.

```js
router.patch('/:id', (req, res) => {

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
})
```

Tambien debemos crear la función en el ``controller.js``.

```js
const updateMessage = (id, message) => new Promise( async (resolve, reject) => {
    if (!id || !message) {
        reject('Invalid data')
        return false;
    }
    
    const result = await store.update(id, message);

    resolve(result);
})

module.exports = {
    addMessage,
    getMessages,
    updateMessage
};
```

Y tambien en ``store.js``.

```js
const updateMessage = async (id, message) => {
    const update = await Model.findOne({
        _id: id
    });

    update.message = message;
    const updated = await update.save();
    return updated;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    // delete
}
```

Con esto podemos actualizar mensajes a partir de su id.

## Consultar datos

Si tenemos varios mensajes en la base de datos y queremos consultar solo los mensajes de un usuario en particular debemos usar los parametros de la ``query``.

Ejemplo:

```url
http://localhost:3000/messages?user=juan
```

Para poder hacer esto debemos modificar el archivo ``network.js`` en el router de ``GET``.

```js
router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});
```

tambien el ``controller.js``.

```js
const getMessages = (filterUser) => new Promise((resolve, reject) => {
    console.log(chalk.green('[messageController] : Obteniendo mensajes'));
    resolve(store.list(filterUser));
});
```

Y tambien en ``store.js``.

```js
const getMessages = async (filterUser) => {
    let filter = {};
    if (filterUser !== null) {
        filter = {
            user: filterUser
        }
    }

    const messages = await Model.find(filter);
    return messages;
}
```

Con el parametro ``filterUser`` podemos filtrar los mensajes segun el usuario que se le pase.

## Eliminar datos

Para eliminar datos debemos pasar el id del mensaje a eliminar.

```js
// network.js
router.delete('/:id', (req, res) => {
    controller.removeMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
})
```

```js
// controller.js
const removeMessage = (id) => new Promise( async (resolve, reject) => {
    if (!id) {
        reject('Invalid data')
        return false;
    }
    store.remove(id)
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e);
        })
    console.log(chalk.green('[messageController] : Eliminando mensaje'));

});

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    removeMessage
};
```

```js
// store.js
const removeMessage = (id) => {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: removeMessage,
}
```

## Gestionar conexiones a la base de datos

Existen varias maneras de gestionar una conexion a la base de datos, una de ellas es crear una nueva conexion que se abre y se cierra en cada petición, lo cual suele ser una buena idea cuando tenemos pocas conexiones y no sabemos cuando van a venir. Pero cuando sabemos que tenemos un API que va a tener conexiones constantes, suele ser una buena practica compartir la conexion, de esta forma evitamos que se nos llene el pool de conexiones y podemos hacer todo mucho más estable.

Para esto vamos a mover toda la conexión que habiamos puesto en el archivo ``store.js`` a un nuevo archivo lla llamado ``db.js`` el cual va a estar a la misma altura que nuestro archivo ``server.js``.

```js
// db.js
const db = require('mongoose');
db.Promise = global.Promise;

const connect = async (url) => {
    await db.connect(url, {
        useNewUrlParser: true,
    })
        .then( () => console.log(('[DB] : Connected to DataBase')))
        .catch( err => console.log(err)); 
}

module.exports = connect;
```

Ademas debemos agregar a ``server.js`` lo siguiente:

```js
const db = require('./db');

db('db_url'); // Ejemplo de conexion a la base de datos
```

## Escalando la arquitectura: Múltiples entidades

Ahora mismo solo tenemos un componente, el de mensajes, pero podemos crear una entidad más para gestionar los usuarios.

Para eso debemos agregar en nuestra carpeta de ``components`` una nueva carpeta llamada ``user``, y dentro del componente de usuario agregamos los mismos archivos que teniamos en ``message`` (``store.js``, ``controller.js``, ``network.js``, ``model.js``).

Se recomienda comenzar por el modelo, porque de esta forma se entiende como va a ser nuestra arquitectura y nuestra entidad.

```js
// user/model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
});

const model = mongoose.model('User', mySchema);

module.exports = model;
```

luego ``controller.js``:

```js
// user/controller.js
const store = require('./store');

const addUser = (name) => {
    if (!name) {
        return Promise.reject('Invalid name');
    }
    
    const user = {
        name,
    };

    console.log('[userController] : Usuario añadido');
    return store.add(user);

}

const getUsers = () => new Promise((resolve, reject) => {
    console.log('[userController] : Obteniendo usuarios');
    resolve(store.list());
});

module.exports = {
    addUser,
    getUsers,
}
```

Y luego ``network.js``:

```js
// user/network.js
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    controller.getUsers()
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        });
});

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        });
});

module.exports = router;
```

Con eso ya hemos escalado nuestra arquitectura, agregando un nuevo componente, al cual de momento podemos acceder mediante ``POST`` y ``GET``.

## WebSockets

El protocolo Websocket o ``wss://`` crea un túnel de información entre el usuario y el servidor el cual se quedará abierto hasta que el servidor y/o el cliente cierre la conexión para pedir información en tiempo real.

Para instalar la librería de websockets en nuestro proyecto debemos hacer lo siguiente:

```bash
npm i websocket -D
```

Demos crear un archivo ``socket.js`` a la misma altura que nuestro archivo ``server.js``:

```js
const socketIO = require('socket.io');
const socket = {};

const connect = (server) => {
    socket.io = socketIO(server);
}

module.exports = {
    connect,
    socket,
}
```

Luego debemos configurar nuestro ``server.js`` para que use el protocolo ``wss``:

```js
const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');
const chalk = require('chalk');


db('mongodb://mongodb/node-api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use('/app', express.static('public')); // public is the folder where the frontend is

server.listen(3000, () => {
    console.log(chalk.yellow('app running on: http://localhost:3000 😜'));
});
```

Tambien debemos agregarlo al controlador de los mensajes:

```js
// message/controller.js
const store = require('./store')

const chalk = require('chalk');
const { socket } = require('../../socket');

const addMessage = (chat, user, message, file) => new Promise((resolve, reject) => {

    if (!chat || !user || !message) {
        console.log(chalk.red('[messageController] : No hay usuario o mensaje'));
        return reject('Datos incorrectos');
    }

    let fileUrl = '';
    if (file) {
        fileUrl = 'http://localhost:3000/app/files' + file.filename;
    }

    const fullMessage = {
        chat: chat,
        user : user,
        message : message,
        date: new Date(),
        file: fileUrl,
    };

    store.add(fullMessage);
    console.log(`${chalk.green('[messageController] : Mensaje añadido')}`);
    socket.io.emit('message', fullMessage);
    resolve(fullMessage)
});

const getMessages = (filterUser) => new Promise((resolve, reject) => {
    console.log(chalk.green('[messageController] : Obteniendo mensajes'));
    resolve(store.list(filterUser));
});

const updateMessage = (id, message) => new Promise( async (resolve, reject) => {
    if (!id || !message) {
        reject('Invalid data')
        return false;
    }
    
    const result = await store.update(id, message);
    
    console.log(chalk.green('[messageController] : Actualizando mensaje'));
    resolve(result);
})

const removeMessage = (id) => new Promise( async (resolve, reject) => {
    if (!id) {
        reject('Invalid data')
        return false;
    }
    store.remove(id)
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e);
        })
    console.log(chalk.green('[messageController] : Eliminando mensaje'));

});

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    removeMessage
};
```

Y creamos un archivo ``socket.html`` en la carpeta ``public`` para poder mostrar los mensajes en la consola del navegador:

```html
<html>
    <head>
        <script src="/socket.io/socket.io.js"></script>
    </head>
    <body>
        <h1>Mira la consola</h1>
        <script>
            var socket = io.connect('http://localhost:3000', {
                forceNew: true
            });

            socket.on('message', (data) => {
                console.log(data);
                
            });
        </script>
    </body>
</html>
```

Con esto tenemos configurado nuestro servidor para que escuche los mensajes en tiempo real.