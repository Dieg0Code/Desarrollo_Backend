# Microservicios con Node.js

## Arquitectura de un backend complejo

![arquitectura](https://static.platzi.com/media/user_upload/arquitecturaExpress-7ccd71ea-b5ae-4990-ad4d-d8578dfced3c.jpg)

## Estructura de datos para nuestro proyecto

![estructura de datos](https://static.platzi.com/media/user_upload/_Blank%20ERD%20%26%20Data%20Flow-c1b73ed2-31b9-4515-9a35-33e68d8215e3.jpg)

## JWT: Gestión de acceso

### Anatomía de un JWT

**JWT** es un **estándar de la industria** que nos permite manejar demandas de **información entre dos clientes**.

Un JSON Web Token es un estandar que nos permite generar demandas entre 2 clientes de manera **segura**.
Un JWT está **encriptado**, pero tiene 3 partes principales divididas por “``.``” (punto).

1. **Header**: Contiene los archivos de **configuración** (el tipo y el **algoritmo** de **encriptación**).
2. **Payload**: Contiene la **información** que se quiere **enviar**.
3. **Signature**: es la firma que contiene el header códificado más el payload códificado, para poder dar acceso a un contenido, éste deberá de ser **firmado con un secret**, que es la clave secreta con la que se firman los tokens, misma que sólo la **deberá de conocer el backend**.

Dentro del payload tenemos información que puede ser **relevante para la autorización** tal como:

- La **expiración** del token.
- **ID's**
- **Nombres**
- etc.

Es importante saber que los JWT acabarán firmando mucha parte de la comunicación, por lo que no es recomendable que mucha información viaje, ésto puede acabar alentando tu aplicación.

## Microservicios: pros y contras

Cuando nuestra API crece mucho puede llegar a ser un problema ya que es un solo proceso de node que si se cae, se cae el servicio completo. Ademas puede que tengamos algunos componentes que se usen mas que otros, pero no podemos solo replicar instancias de la API ya que estariamos copiando el proceso entero y no solo el que nos interesa, lo cual es poco practico y poco eficiente.

En este punto es donde son útiles los microservicios, ya que si hay algún servicio que se usa mas que otro, podemos separarlo en un microservicio, levantamos uno para la API, otro para los post, otro para el chat, otro para las imagenes, etc. De esta forma nuestro Backend pasa de ser una sola API a ser varios servicios interconectados entre si, cada uno con una responsabilidad independiente, los cuales pueden crecer de forma distinta. Si hay un servicio grande podemos levantar varios de estos y así no ralentizaremos al resto de la API. Si se cae el servicio del chat por ejemplo, el resto de la API no se caerá.

Pero ¿donde está el problema?, en como orquestamos todo esto, ¿que pasa cuando un servicio requiera de otros para funcionar?, esta es la parte en donde se puede volver complejo el trabajar con este tipo de arquitectura, ya que de alguna manera debemos organizar todo esto, y no es una tarea sencilla.

No es recomendable empezar con microservicios desde el principio, ya que lo que en un principio parecia simple, puede complicarse muy rapido si no se tiene muy claro lo que se está haciendo. Hay que ir por pasos, no todos los problemas tienen la misma solución.

Lo mas recomendable es empezar con un monolito y cuando veas que se está volviendo muy complejo, empezar a separarlo en microservicios partiendo desde los más faciles de separar.

## Gestion de microservicios con PM2

``PM2`` es un gestor de procesos para node.js, nos permite ver el comportamiento de los procesos que se están ejecutando, tambien podemos ver los problemas que se están presentando, donde, si tenemos contenedores los podemos integrar, etc. En resumen nos permite gestionar de manera sencilla los multiples microservicios que se están ejecutando.

Para instalarlo de manera global:

```bash
npm install -g pm2
```

El comando para ejecutarlo es:

```bash
pm2 start app.js
```

Para ver los logs e iniciar el daemon:

```bash
pm2 logs
```

Para ver los procesos que se están ejecutando:

```bash
pm2 status
```

Podemos iniciar un servicio con el comando:

```bash
pm2 start api/index.js # Ejemplo
```

Tambien podemos ponerle un nombre al proceso:

```bash
# Ejemplo
pm2 start api/index.js --name api-server
```

Si hay algun problema y alguno de los servicios se cae, pm2 lo detecta y lo reinicia automáticamente, de esta forma nos aseguramos de que nuestro servicio siempre esté disponible, esto es muy potente sobre todo cuando tenemos servicios en producción.

## Caché como un microservicio. Redis

El caché es simplemente una forma más rapida de servir contenido. Cuando hacemos cualquier peticion va desde internet al servidor y a la base de datos, esta devuelve luego los datos solicitados de la misma forma hasta el cliente. Pero cuando la base de datos crece mucho hacerlo suele ser un poco lento, para evitar esto usamos un cache, que es basicamente una base de datos en memoria, por lo que es más rapida de consultar, y en lugar de consultar a la base de datos, consultamos el cache, si lo tiene lo devolvemos y en caso de que no esté en memoria ahí si pedimos a la base de datos y lo guardamos en memoria. La principal ventaja es reducir carga en la base de datos, y ademas podemos acceder a la información de forma mucho mas rapida, ademas si se cae no pasa nada porque está en memoria.

Tener un caché tiene ventajas en cuanto a la velocidad y disponibilidad de los datos que queremos traer, pero a la vez trae desventajas en cuanto a la complejidad de nuestra aplicación.

Si no tenemos en claro si va a ser un problema la velocidad de la obtencion de los datos, es mejor hacerlo de la forma mas sencilla posible, y no usar caché.