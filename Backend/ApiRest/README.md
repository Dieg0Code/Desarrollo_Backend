# Curso de Api Rest

## Qué es una API y para qué sirve

API son siglas de **A**pplication **P**rogramming **I**nterface (Interfaz de Programación de aplicaciones), es un conjunto de reglas que define como dos aplicaciones interactuarán entre sí, es decir, por ejemplo, quien inicia la comunicacion, que tipos de mensajes se envían, cuales son las respuestas que se deben esperar, etc.

Si bien el concepto de ``API`` hoy en dia está bastante relacionado a la web, en realidad es un concepto que viene acompañando a la programación desde hace muchos años, por ejemplo, en el caso de la **programación orientada a objetos**, pensamos que la ``API`` es el conjunto de todos los miembros publicos que ofrece una clase, es decir, las propiedades y funciones que ofrece a los otros objetos para que puedan utilizar sus servicios.

## Qué es y como funciona el protocolo HTTP

``HTTP`` son las siglas de **Hypertext Transfer Protocol** o **protocolo de transferencia de hipertexto**, es el conjunto de reglas en las que se van a comunicar dos entidades, en este caso dos computadoras. Un hipertexto se trata de un texto que contiene referencias a otros textos distintos (enlaces/links).

Así como nosotros nos comunicamos en español gracias a poder mover las cuerdas vocales, producir y escuchar sonidos, **las computadoras se pueden comunicar a través de HTTP gracias al modelo de TCP/IP**.

### Cómo funciona el protocolo HTTP

Tu computadora envia un mensaje enseñado las reglas de ``HTTP``, es decir, **una petición**, este mensaje se transmite a traves de internet y llega a otra computadora que es un servidor, su objetivo es interpretar ese ``HTTP``, procesarlo, generar una respuesta y enviarla a traves de internet siguiendo las reglas de HTTP, esta respuesta viajará y llegara a la computadora que envió la petición, esta interpretará la respuesta, usualmente es HTML, y la mostrará en pantalla para que el usuario pueda verla.

Podemos hacer peticiones HTTP desde la consola con el comando ``curl``:

```bash
curl https://page.com
```

Solo headers:

```bash
curl https://page.com -v
```

Redireccionar la salida:

```bash
curl https://page.com -v /dev/null
```

El archivo ``/dev/null`` ( en sistemas operativos tipo Unix) es un archivo especial que recibe la información que se redirige hacia el , pero no la almacena, solo la muestra en terminal y luego la borra o descarta, por eso es llamado Cubo Basura, agujero negro, pozo sin fondo.

## ¿Qué significa REST? y ¿qué es una API RESTful?

- Estilo de arquitectura de software enfocado en el ``intercambio de recursos`` y basado en ``HTTP``.

``REST`` es un acrónimo de **Representational State Transfer** o **transferencia de estado representacional**, le agrega una capa muy delgada de complejidad y abstracción a HTTP. Mientras que **HTTP es transferencia de archivos, REST se basa en la transferencia de recursos**.

Qué es una API RESTful?

- Una API diseñada alrededor de los conceptos de ``REST``.

Conceptos de rest:

- ``Recurso``: todo dentro de una API RESTful debe ser un recurso.
- ``URI``: los recursos en REST siempre se manipulan a partir de la URI (universal resource identifier), identificadores universales de recursos.
- ``Acción``: todas las peticiones a tu API RESTful deben estar asociadas a uno de los **verbos de HTTP**: ``GET`` para obtener un recurso, ``POST`` para escribir un recurso, ``PUT`` para modificar un recurso y ``DELETE`` para borrarlo.

Una 

Petición REST:

Una petición REST se basa en decir cual es el recurso sobre el que queremos realizar alguna acción, cual es la accion que queremos realizar y el ``URI`` es lo que nos permite identificar exactamente el recurso sobre el que queremos realizar la acción.

De modo que una peticion REST completa se basa en:

- ``URL``: a diferencia de la URI, la URL incluye el dominio, el protocolo, la ruta, etc.
- ``Verbo HTTP``: el verbo HTTP es el que identifica la acción que queremos realizar sobre el recurso; ``GET``, ``POST``, ``PUT`` o ``DELETE``. Que mapean a las acciones básicas de obtener un recurso, crear un recurso, nuevo, eliminar un recurso o modificar un recurso existente en el servidor.

El recurso puede ser cualquier cosa, esto depende de la lógica de la aplicación. Por ejemplo una libreria donde un recurso podria ser un libro, un autor, una editorial, etc.

Ejemplos REST:

- GET/books/1
- DELETE/books/50

Cuándo conviene REST

- Cuando la aplicación es muy simple, por ejemplo cuando solo queremos agregar recursos, eliminar recursos, etc.
- Recurso limitado, sobre todo cuando el hardware es limitado.

*REST permite mandar json, xml, binarios (imágenes, documentos), text, etc. en cambio con SOAP que solo permite la transmisión de datos en formato XML, json es mucho mas liviano y rapido en su procesamiento dado que es interpretado de forma natural por javascript.*

*REST como SOAP son bastante capaces de atender grandes volúmenes de información, yo creo hay que analizar que es más conveniente para uno, tanto en tiempo de desarrollo, tecnologías y sobre que dispositivos o tipos de APP se van a consumir, SOAP se utiliza mas en aplicaciones financieras.*

[*Diferencia entre SOAP y REST*](https://www.redhat.com/es/topics/integration/whats-the-difference-between-soap-rest)

## Cómo realizar una petición REST e interpretar sus resultados

Utilizando el comando ‘curl’ dentro de nuestra terminal podemos realizar peticiones a cualquier sitio web, por ejemplo una API como la de [xkcd](xkcd.com).

```bash
curl https://xkcd.com/info.0.json
```

El anterior comando nos regresa información del API, pero de manera poco legible. para poder verlo de manera más ordenada podemos usar el siguiente comando:

```bash
curl https://xkcd.com/info.0.json | jq 
```

Para instalar el comando jq:

```bash
sudo apt-get install jq
```

Tambien podemos automatizar el proceso de obtener la información usando algun lenguaje de programación.

Ej:

```php
<?php

echo file_get_contents('http://xkcd.com/info.0.json').PHP_EOL; // PHP_EOL es un salto de linea
```

Si ejecutamos el comando:

```bash
php xkcd.php | jq
```

En mi caso devuelve:

```json
{
  "month": "9",
  "num": 2519,
  "link": "",
  "year": "2021",
  "news": "",
  "safe_title": "Sloped Border",
  "transcript": "",
  "alt": "\"The slope will be 74° at ground level.\" \"Okay, I think we can hack together a  ... wait, why did they specify ground level? It's 74° everywhere, right? ... Oh no, there's a whole section in the treaty labeled 'curvature.'\"",
  "img": "https://imgs.xkcd.com/comics/sloped_border.png",
  "title": "Sloped Border",
  "day": "22"
}
```

Para instalar php:

```bash
sudo apt-get install php
```

- *Recomiendo usar [wsl](https://docs.microsoft.com/en-us/windows/wsl/install).*
- *Podemos acceder a nuestro proyecto desde la terminal de WSL usando del comando ``code .`` y así ejecutar vscode en la carpeta actual.*


Podemos podemos interpretar la información de una manera más interesante, por ejemplo:

Esto nos devuelve solo la URL de la imagen:

```php
<?php

// echo file_get_contents('http://xkcd.com/info.0.json').PHP_EOL; // PHP_EOL es un salto de linea

$json = file_get_contents('http://xkcd.com/info.0.json');

$data = json_decode($json, true); // true para que convierta el json a un array, sino es un objeto

echo $data['img'].PHP_EOL;
``` 

El consumo de web services via REST se basa en la utilización de algunos de los verbos HTTP:

- GET
- POST
- PUT
- DELETE

De momento solo estamos usando GET, porque estamos obteniendo un recurso, pero podemos usar otros verbos para realizar peticiones REST. Un detalle importante es que cuando utilizas GET toda la información que envias al servidor viaja a traves de la URL, esto quiere decir que la información es perfectamente visible para cualquiera que pueda ver la URL. En el caso de PUT la información viaja un poco mas oculta.

## Exponer datos a través de HTTP GET

Para ello debemos crear un servidor web que nos permita obtener la información que queremos.

Ejemplo:

```php
<?php

// available resources
$allowedResourceTypes = [
    'books',
    'authors',
    'genres',
];

// check if the resource is available
$resourceType = $_GET['resource_type'];

if(!in_array($resourceType, $allowedResourceTypes)){
    die;
}


// resources
$books = [
    1 => [
        'title' => 'Lo que el viento se llevo',
        'id_author' => 2,
        'id_genre' => 2,
    ],
    2 => [
        'title' => 'La iliada',
        'id_author' => 1,
        'id_genre' => 1,
    ],
    3 => [
        'title' => 'La Odisea',
        'id_author' => 1,
        'id_genre' => 1,
    ],
];

// client will recive a json
header('Content-Type: application/json');
// cases if the resource is available
switch ( strtoupper($_SERVER['REQUEST_METHOD']) ) {
    case 'GET':
        echo json_encode($books);
        break;
    case 'POST':
        break;
    case 'PUT':
        break;
    case 'DELETE':
        break;
}
```

Para ejecutar el servidor debemos posicionarnos en la carpeta donde esta el archivo php y ejecutarlo con el comando:

```bash
php -S localhost:8000 server.php
```

Luego desde otra consola podemos hacer una petición a la URL:

```bash
curl http://localhost:8000?resource_type=books | jq
```

Nos devuelve:

```json
{
  "1": {
    "title": "Lo que el viento se llevo",
    "id_author": 2,
    "id_genre": 2
  },
  "2": {
    "title": "La iliada",
    "id_author": 1,
    "id_genre": 1
  },
  "3": {
    "title": "La Odisea",
    "id_author": 1,
    "id_genre": 1
  }
}
```

## Exponer un recurso en particular a través de HTTP GET

Para ello el código debería ser:

```php
<?php

// available resources
$allowedResourceTypes = [
    'books',
    'authors',
    'genres',
];

// check if the resource is available
$resourceType = $_GET['resource_type'];

if(!in_array($resourceType, $allowedResourceTypes)){
    die;
}


// resources
$books = [
    1 => [
        'title' => 'Lo que el viento se llevo',
        'id_author' => 2,
        'id_genre' => 2,
    ],
    2 => [
        'title' => 'La iliada',
        'id_author' => 1,
        'id_genre' => 1,
    ],
    3 => [
        'title' => 'La Odisea',
        'id_author' => 1,
        'id_genre' => 1,
    ],
];

// client will recive a json
header('Content-Type: application/json');

$resourceId = array_key_exists('resource_id', $_GET) ? $_GET['resource_id'] : ''; // one line if

// cases if the resource is available
switch ( strtoupper($_SERVER['REQUEST_METHOD']) ) {
    case 'GET':
        // if is empty
        if(empty($resourceId)){
            echo json_encode($books); // all books
        } else {
            // to return a specific resource by id
            if(array_key_exists($resourceId, $books)){
                echo json_encode($books[$resourceId]);
            }
        }
        break;
    case 'POST':
        break;
    case 'PUT':
        break;
    case 'DELETE':
        break;
}
```

Ejecutas el servidor y haces una petición a la URL segun su id:

```bash
curl http://localhost:8000?resource_type=books&resource_id=1 | jq
```

Nos devuelve:

```json
{
  "title": "Lo que el viento se llevo",
  "id_author": 2,
  "id_genre": 2
}
```

Habrás notado que así como está hecho esto, la URL queda con este estilo ```http://dominio.com/?resource_type=books&resource_id=1``` en lugar de quedar como ```http://dominio.com/books/1``` como nos propone REST. Esto se soluciona haciendo algunas configuraciones en el servidor web:

Creamos un archivo ``router.php``:

```php
<?php

$matches=[];

// preg_match use the regular expression to match the given string
if(preg_match('/\/([^\/]+)\/([^\/]+)/',$_SERVER["REQUEST_URI"],$matches))
{
    $_GET['resource_type']=$matches[1];    
    $_GET['resource_id']=$matches[2];
    error_log(print_r($matches,1));
    require 'server.php';

    // do the same but for all the resources, not for a particular one
}elseif(preg_match('/\/([^\/]+)\/?/',$_SERVER["REQUEST_URI"],$matches))
{
    $_GET['resource_type']=$matches[1];        
    error_log(print_r($matches,1));
    require 'server.php';
}else
{
    error_log('No matches');
    http_response_code(404); // if not match, return 404
}
?>
```

La idea es que sea este y no el server quien reciba las peticiones.

```bash
php -S localhost:8000 router.php
```

Para hacer la request:

```bash
curl http://localhost:8000/books | jq
```

Para hacer la request por id:

```bash
curl http://localhost:8000/books/1 | jq
```

[*¿que es una expresion regular?*](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular)

## Incorporar datos a través de HTTP POST

Para esto el ``switch`` de nuestro ``server.php`` debería ser:

```php
switch ( strtoupper($_SERVER['REQUEST_METHOD']) ) {
    case 'GET':
        // if is empty
        if(empty($resourceId)){
            echo json_encode($books); // all books
        } else {
            // to return a specific resource by id
            if(array_key_exists($resourceId, $books)){
                echo json_encode($books[$resourceId]);
            }
        }
        break;
    case 'POST':
        $json = file_get_contents('php://input');

        $books[] = json_decode($json, true);

        // return the id generated for the new book
        // echo array_keys($books)[count($books) -1 ]; // last key
        echo json_encode($books);
        break;
    case 'PUT':
        break;
    case 'DELETE':
        break;
}
```

Ejecutamos ``router.php`` y hacemos una petición a la URL ```http://localhost:8000/books```:

```bash
curl -X 'POST' http://localhost:8000/books -d '{"title": "nuevo libro", "id_author": 1, "id_genre" : 2}' | jq
```

Nos devuelve:

```json
{
  "1": {
    "title": "Lo que el viento se llevo",
    "id_author": 2,
    "id_genre": 2
  },
  "2": {
    "title": "La iliada",
    "id_author": 1,
    "id_genre": 1
  },
  "3": {
    "title": "La Odisea",
    "id_author": 1,
    "id_genre": 1
  },
  "4": {
    "title": "Nuevo libro",
    "id_author": 1,
    "id_genre": 2
  }
}
```

## Modificar datos a través de HTTP PUT

Para permitir que otras aplicaciones modifiquen recursos que estan en nuestro servidor debemos usar el metodo ``PUT``.

Es importante recordar que el método PUT hace un reemplazo, no modificaciones puntuales. Por ello la información que enviemos a través de la petición debe ser completa.

Para esto debemos modificar el ``switch`` de nuestro ``server.php`` en el ``case`` de ``PUT``:

```php
case 'PUT':
        // validate if the resource id exists
        if (!empty($resourceId) && array_key_exists($resourceId, $books)) {
            $json = file_get_contents('php://input');
            $books[$resourceId] = json_decode($json, true); // replace the old resource with the new one

            // echo json_encode($books)[count($books) -1 ];
            echo json_encode($books);
        }
        break;
```

```bash
curl -X 'PUT' http://localhost:8000/books/1 -d '{"title": "Nuevo libro con PUT", "id_author": 1, "id_genre" : 2}' | jq
```

Este ``case`` es una especie de combinacion entre el metodo ``GET`` y el metodo ``POST``.

Devuelve:

```json
{
  "1": {
    "title": "Nuevo libro con PUT",
    "id_author": 1,
    "id_genre": 2
  },
  "2": {
    "title": "La iliada",
    "id_author": 1,
    "id_genre": 1
  },
  "3": {
    "title": "La Odisea",
    "id_author": 1,
    "id_genre": 1
  }
}
```

## Eliminar datos a través de HTTP DELETE

Para ello debemos modificar el ``switch`` de nuestro ``server.php`` en el ``case`` de ``DELETE``:

```php
case 'DELETE':
        // validate if the resource id exists
        if (!empty($resourceId) && array_key_exists($resourceId, $books)) {
            unset($books[$resourceId]);
        }       
        echo json_encode($books);
        break;
```

```bash
curl -X 'DELETE' http://localhost:8000/books/1 | jq
```

Devuelve:

```json
{
  "2": {
    "title": "La iliada",
    "id_author": 1,
    "id_genre": 1
  },
  "3": {
    "title": "La Odisea",
    "id_author": 1,
    "id_genre": 1
  }
}
```

## Metodos para restringir el acceso a la API

### Autenticación vía HTTP

La autenticación vía HTTP tiene dos problemas:

- Es poco segura: las credenciales se envían en cada request anteponiendo el usuario y contraseña en la url, por ejemplo: ``user:password@platzi.com``.
- Es ineficiente: la autenticación se debe realizar en cada request.

Por ejemplo:

```php
// server.php
$user = array_key_exists('PHP_AUTH_USER', $_SERVER) ? $_SERVER['PHP_AUTH_USER'] : '';
$pwd = array_key_exists('PHP_AUTH_PW', $_SERVER) ? $_SERVER['PHP_AUTH_PW'] : '';

// hardcoded user and password authentication
if ($user != 'admin' || $pwd != 'admin') {
    die;
}
```

Para ingresar los datos:

```bash
curl http://admin:admin@localhost:8000/books | jq
```

Nos devuelve el ``json`` con los datos si es que el usuario y contraseña son correctos.

Como podemos ver, los datos de autenticación se envían en la url, es por esto que es inseguro.

### Autenticación vía HMAC

Para esta autenticación necesitamos 3 elementos:

- Función Hash: Difícil de romper, que sea conocida por el cliente y servidor.
- Clave secreta: Solamente la pueden saber el cliente y el servidor, será utilizada para corroborar el hash.
- UID: El id del usuario, será utilizado dentro de la función hash junto con la clave secreta y un timestamp.

Es mucho más segura que la autenticación vía HTTP, por ello la información que se envía a través de este método no es muy sensible.

```php
// server.php
// need hash, timestamp, and user id
if (
    !array_key_exists('HTTP_X_HASH', $_SERVER) ||
    !array_key_exists('HTTP_X_TIMESTAMP', $_SERVER) ||
    !array_key_exists('HTTP_X_UID', $_SERVER)
) {
    die;
}

list($hash, $uid, $timestamp) = [
    $_SERVER['HTTP_X_HASH'],
    $_SERVER['HTTP_X_UID'],
    $_SERVER['HTTP_X_TIMESTAMP'],
];

$secret = 'secret key';

$newHash = sha1($uid.$timestamp.$secret);

if ($newHash != $hash) {
    die;
}
```

Tambien necesitamos generar el hash:

```php
// generate_hash.php
<?php

$time = time();
echo "Time: $time".PHP_EOL."Hash: ".sha1($argv[1].$time.'secret key');
```

```bash
php generate_hash.php 1 
```

Para ingresar los datos:

```bash
curl http://localhost:8000/books -H 'X-HASH: 75418713e554fd1ef36d2b8c38499cfcf019f17a' -H 'X-UID:1' -H 'X-TIMESTAMP: 1632513551' | jq
```

``HMAC`` es bastante mas seguro que ``HTTP``, este mecanismo se usa cuando la información del lado de la API es segura, pero tampoco tanto.

### Autenticación vía Access Tokens

Está forma es la más compleja de todas, pero también es la forma más segura utilizada para información muy sensible. El servidor al que le van a hacer las consultas se va a partir en dos:

- Uno se va a encargar específicamente de la autenticación.
- El otro se va a encargar de desplegar los recursos de la API.

El flujo de la petición es la siguiente:

1. Nuestro usuario hace una petición al servidor de autenticación para pedir un token.
2. El servidor le devuelve el token.
3. El usuario hace una petición al servidor para pedir recursos de la API.
4. El servidor con los recursos hace una petición al servidor de autenticación para verificar que el token sea válido.
5. Una vez verificado el token, el servidor le devuelve los recursos al cliente.

![token auth](https://static.platzi.com/media/user_upload/autenticacion%20access%20token-5f7f5bce-630b-4a9d-a6a8-76bbd9e9f823.jpg)

*Los tokens deben ser almacenados, pero estos tienen una duración limitada.*

Creamos el servidor de autenticación:

```php
// auth_server.php
<?php

$method = strtoupper($_SERVER['REQUEST_METHOD']);

$token = sha1('secret');

if ( $method === 'POST' ) {
    if ( !array_key_exists( 'HTTP_X_CLIENT_ID', $_SERVER ) || !array_key_exists( 'HTTP_X_SECRET', $_SERVER ) ) {
        http_response_code( 400 );

        die( 'Faltan parametros' );
    }

    $clientId = $_SERVER['HTTP_X_CLIENT_ID'];
    $secret = $_SERVER['HTTP_X_SECRET'];

    if ( $clientId !== '1' || $secret !== 'SuperSecreto!' ) {
        http_response_code( 403 );

        die ( "No autorizado");
    }

    echo "$token";
} elseif ( $method === 'GET' ) {
    if ( !array_key_exists( 'HTTP_X_TOKEN', $_SERVER ) ) {
        http_response_code( 400 );

        die ( 'Faltan parametros' );
    }

    if ( $_SERVER['HTTP_X_TOKEN'] == $token ) {
        echo 'true';
    } else {
        echo 'false';
    }
} else {
    echo 'false';
}
```

Tambien debemos tener instalado ``php-curl``:

```bash
sudo apt install php-curl
```

Luego agregamos a ``server.php``:

```php
if (!array_key_exists('HTTP_X_TOKEN', $_SERVER)) {
    die;
}

$url = 'http://localhost:8001';

$ch = curl_init($url);
curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "X-Token: {$_SERVER['HTTP_X_TOKEN']}",
    ]
);
curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);

$ret = curl_exec($ch);

if ($ret !== 'true') {
    die;
}
```

Tenemos que iniciar ambos servidores:

```bash
php -S localhost:8000 server.php
php -S localhost:8001 auth_server.php
```

Luego hacemos una peticion al servidor de autenticación para obtener un token:

```bash
curl http://localhost:8001 -X 'POST' -H 'X-Client-Id: 1' -H 'X-Secret: SuperSecreto!' 
```

Luego pasamos ese token en la petición al servidor de recursos:

```bash
curl http://localhost:8000/books -H 'X-Token: e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4' | jq
```

Y si todo es correcto, nos deberia devolver el JSON.

``Access Tokens`` es extremadamente seguro. Es utilizado para casos de información muy sensible.

## Manejo de errores de un servicio REST

De momento nuestra API no nos indica que haya ocurrido un error, solamente nos regresa un código 200 de HTTP que significa que la petición se realizó sin problemas.

Para mejorar nuestra API añadiremos respuestas con los códigos HTTP más comunes:

- 400 Bad Request: indica que el servidor no puede o no procesa la petición debido a algo que es percibido como un error del cliente
- 404 Not Found: el servidor no encuentra el recurso solicitado.
- 500 Internal Server Error: la petición no pudo procesarse por un error del servidor.

[*Códigos HTTP*](https://httpstatuses.com/)

Para poder manejar los errores necesitamos crear el archivo ``client.php``:

```php
<?php
$ch = curl_init( $argv[1]);
curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

switch ($httpCode){
    case 200:
        echo 'Todo bien!';
        break;
    case 400:
        echo 'Pedido incorrecto';
        break;
    case 404:
        echo 'Recurso no encontrado';
        break;
    case 500:
        echo 'El servidor fallo';
        break;
}
```

Tambien debemos agregar unas lineas en ``server.php``:

```php
    if(!in_array($resourceType, $allowedResourceTypes)){
    http_response_code(400);
    die;    
}
```

Encendemos el servidor:

```bash
php -S localhost:8000 router.php
```

Y hacemos consultas desde el ``client.php``:

```bash
php client.php http://localhost:8000/books
```

Si ingresamos alguna petición incorrecta o si el servidor falla, nos informa de esto.

## Introduccion a AJAX

Es muy común tener comunicaciones con API REST al momento de tener una aplicación de una sola página o SPA, ya sea para obtener o guardar datos. Esta comunicación se realiza a través de AJAX, Asynchronous JavaScript XML. la clave es la parte de asincronismo pues el cliente no se queda bloqueado esperando la respuesta del servidor.

## 7 Buenas prácticas del diseño de APIs RESTful

1. Siempre utiliza **sustantivos para nombrar tus recursos**.
2. Añade los **nombres en plural** para las urls.
3. Las modificaciones a recursos deben hacerse con su verbo HTTP correspondiente: POST, PUT o DELETE.
4. Para devolver recursos asociados a otro recurso utiliza url que incorporen subrecursos: ``/Autos/1/Choferes``.
5.Navegabilidad vía vínculos.
6. Cuando devuelvas colecciones deben ser filtrables, ordenables y paginables.
7. Versiona tu API, añade el número de versión en la url: ``v1/Autos``.