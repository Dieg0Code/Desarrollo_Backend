# Curso de Git y GitHub

En vez de guardar una version de cada archivo hay un sistema que guarda solo esos cambios, ademas maneja los cambios que otras personas hagan sobre los mismos archivos, así múltiples personas pueden trabajar en un mismo proyecto sin pisarse.

Cuando hay errores se puede saber precisamente quien hizo ese cambio, si hay algo en una version vieja que quieres recuperar lo puedes hacer de manera precisa.

[Git](https://initialcommit.com/blog/How-Did-Git-Get-Its-Name) se usa en nuestra maquina local mediante la terminal, tiene comando como `merge`, `pull`, `add`, `commit`, `rebase`, y muchos mas.

Si quieres colaborar con otros usar una interfaz web o publicar tus proyectos en la web puedes usar GitHub. GitHub es un sistema como Facebook o Twitter, pero en vez de fotos y videos, puedes guardar tu proyecto, sus cambios y cada una de sus versiones. Github es tan popular que se considera la red social del código, una hoja de vida que demuestra lo que sabes y lo que te gusta.

## ¿Porque usar un sistema de control de versiones como Git?

Imagina que estas escribiendo tu biografia, pero el tiempo pasa y tienes que crear una version nueva, lo que normalmente se hace es crear un archivo nuevo y guardar en el los cambios que hiciste en ese archivo, terminas teniendo archivos como `biografia.txt`, `biografia_2.txt` o version nueva, version final, version final final, etc. Eso es lo que todos hacian antes de que se creara un sistema de control de versiones como Git. El problema con ese tipo de versionamiento es que a veces los cambios que ocurrieron en el archivo son muy pocos y no deberiamos guardar todo el archivo de nuevo solo por esos cambios, cambios como cambiar una palabra, cambiar una frase, una letra, etc. Si hubiera una forma en que solo guardamos esos cambios en vez de tener que guardar todo el archivo nuevo seria ideal, en particular cuando estamos trabajando múltiples persona sobre el mismo archivo o cuando estamos cambiando pequeñas cosas en algo tan grande como por ejemplo el código de un proyecto de software, ahí es donde entran los sistemas llamados, `sistemas de control de versiones`, que lo que hacen es solamente guardar esos cambios y dejar en claro donde ocurrieron, cuando ocurrieron, como ocurrieron, quien los hizo, podemos volver a ellos en el pasado, entre muchas otras cosas.

### Git

Fue creado por la `fundacion linux` particularmente por `Linus Torvalds`, es el sistema que maneja el kernel de Linux.

Imaginemos que tienes una carpeta que es tu proyecto de biografia donde tienes el archivo `biografia.txt`, para comenzar a usar `git`, lo que tienes que hacer es ingresar a la carpeta desde la terminal y ejecutar el comando `git init`, lo que hace este comando es inicializar en esta carpeta un repositorio, que es esa base de datos en donde se van a guardar los cambios de cualquier archivo de esa carpeta.

Luego `git` tiene que saber que el archivo `biografia.txt` existe, entonces escribimos en la terminal `git add biografia.txt`, con esto la base de datos de cambios, `git`, ahora sabe que existe `biografia.txt`, digamos que queremos guardar los cambios que hicimos en ese archivo, porque no es suficiente solo darle `add`, tienes que indicar que los cambios que hiciste estan listos para ser guardados, entonces escribimos `git commit -m "mensaje"`, el `-m` es para decirle que es un mensaje, el `mensaje` es un comentario para indicar que fue lo que hicimos en ese cambio, y el `git commit` es el comando que guarda los cambios en la base de datos.

Los comando `git add` y `git commit` pueden ser usados cuantas  veces quieras, mientras vas trabajando en el proyecto.

Existe otra opcion para agregar los archivos, `git add .` , cuando le agregas el punto `.` estas indicando que quieres que se agregue todos los archivos que se hayan cambiado en la carpeta en la que estas en ese momento, luego de eso puede volver a hacer un `commit` y eso guardara los cambios en la base de datos.

Puedes ver como está el estado de la base de datos con `git status`, esto muestra si haz hecho algun cambio pero no los haz añadido.

Otro comando importante es `git show`, este comando te va a mostrar todos los cambios historicos hechos, incluyendo cuales fueron las lineas que se cambiaron, cuando se han hecho esos cambios y quien los hizo, porque a un repositorio pueden acceder múltiples personas.

tambien podemos ver la historia de un archivo con el comando `git log` (git log biografia.txt) y podras ver todo.

Una vez ya has completados todos estos pasos quizas quieras llevar este archivo a un servidor remoto, ponerlo en internet, para hacer esto hay algunos pasos anteriores, pero el comando en si es `git push`, esto envia lo que estas haciendo a algún repositorio remoto y tambien con `git pull` lo puedes traer de un repositorio remoto a tu repositorio local.

## Introducción a la terminal y línea de comandos

Para abrir la terminal en Linux puede usar el shortcut `Ctrl + Alt + T`, para Windows `tecla windows + r` y luego escribir `cmd`. Windows tiene comandos propios, distintos a los que hay en Linux.

Windows no hace una diferencia entre mayúsculas y minúsculas, mientras que Linux si, por lo que en Linux no es lo mismo tener una carpeta llamada `Users` y otra llamada `users`. En windows serian la misma carpeta.

Comandos Principales:

- `pwd`: muestra el `path` o ruta de la carpeta en donde nos encontramos ubicados.
- `cd`: nos permite cambiar de carpeta (**C**hange **D**irectory).
- `cd ..` : nos permite ir a la carpeta anterior.
- `ls`: lista los archivos de la carpeta en donde nos encontramos.
- `ls -a`: lista los archivos de la carpeta en donde nos encontramos, incluyendo los archivos ocultos.
- `ls -la`: lista los archivos de la carpeta en donde nos encontramos, incluyendo los archivos ocultos y los archivos con sus permisos.
- `clear`: limpia la pantalla, esto tambien se puede hacer con `ctrl + l`.
- `mkdir`: crea una carpeta; `mkdir nombre_carpeta`.
- `touch`: crea un archivo vacio; `touch nombre_archivo`.
- `cat`: muestra el contenido de un archivo; `cat nombre_archivo`.
- `history`: muestra el historial de comandos que has hecho.
- `rm`: elimina un archivo; `rm nombre_archivo`.
- `--help`: muestra info sobre el uso de un comando; `cat --help`.

## Comandos para crear un repositorio

- `git init`: inicializa un repositorio.
- `git status`: muestra el estado de los cambios.
- `git add`: agrega los cambios a la base de datos de cambios.
- `git rm`: lo usamos para borrar un archivo que hayamos añadido con el comando `add`, para eliminarlo por completo de nuestra rama usamos `git rm --cached`. (`git rm --cached archivo.txt`)
- `git commit`: guarda los cambios en la base de datos de cambios, ademas debemos agregar un comentario/mensaje que describa los cambios que hicimos `git commit -m "mensaje"`.

Para hacer commits es necesario que configuremos el nombre de usuario y correo para que así git sepa quien es el autor de los cambios.

- `git config`: muestra configuraciones de git, también podemos usar `-list` para ver las configuraciones por defecto de nuestro git y si añadimos `-show-origin` nos muestra las configuraciones guardadas y su ubicación.
- `git config --global user.name "nombre"`: configuramos el nombre de usuario de manera global.
- `git config --global user.email "email"`: configuramos el email de usuario de manera global.
- `git log`: se usa para ver la historia de nuestros archivos, los commits, el usuario que lo cambió, cuando se realizaron los cambios etc. seguidamente ponemos el nombre de nuestro archivo.

## Analizando los cambios en los archivos de un proyecto con Git

El comando `git show` nos muestra los cambios que han existido sobre un archivo y es muy útil para detectar cuándo se produjeron ciertos cambios, qué se rompió y cómo lo podemos solucionar. Pero podemos ser más detallados.

Si queremos ver la diferencia entre una versión y otra, no necesariamente todos los cambios desde la creación del archivo, podemos usar el comando `git diff commitA commitB`.

Recuerda que puedes obtener el ID de tus commits con el comando `git log`.

## ¿Que es el staging y los repositorios? Ciclo básico de trabajo en Git

Para iniciar un repositorio, o sea, activar el sistema de control de versiones de Git en tu proyecto, solo debes ejecutar el comando `git init`.

Este comando se encargará de dos cosas: primero, crear una carpeta `.git`, donde se guardará toda la base de datos con cambios atómicos de nuestro proyecto; y segundo, crear un área que conocemos como Staging, que guardará temporalmente nuestros archivos en la memoria RAM (cuando ejecutemos un comando especial para eso) y nos permitirá, más adelante, guardar estos cambios en el repositorio (también con un comando especial).

### Ciclo de vida o estados de los archivos en Git

Cuando trabajamos con Git nuestros archivos pueden vivir y moverse entre 4 diferentes estados (cuando trabajamos con repositorios remotos pueden ser más estados):

- `Archivos Tracked`: son los archivos que viven dentro de Git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos `git add` y `git commit`.
- `Archivos Staged`: son archivos en Staging. Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando `git add`, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando `git commit`.
- `Archivos Unstaged`: entiéndelos como archivos *“Tracked pero Unstaged”*. Son archivos que viven dentro de Git pero no han sido afectados por el comando ``git add`` ni mucho menos por ``git commit``. Git tiene un registro de estos archivos, pero está desactualizado, sus últimas versiones solo están guardadas en el disco duro.
- `Archivos Untracked`: son archivos que NO viven dentro de Git, solo en el disco duro. Nunca han sido afectados por ``git add``, así que Git no tiene registros de su existencia.

Recuerda que hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: staged y untracked. Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando ``git add``), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de Staging.

### Comandos para mover archivos entre estados de Git

- `git status`: nos permite ver el estado de todos nuestros archivos y carpetas.
- `git add`: nos ayuda a mover archivos del Untracked o Unstaged al estado Staged. Podemos usar ``git nombre-del-archivo-o-carpeta`` para añadir archivos y carpetas individuales o ``git add -A`` para mover todos los archivos de nuestro proyecto (tanto Untrackeds como unstageds).
- `git reset HEAD`: nos ayuda a sacar archivos del estado Staged para devolverlos a su estado anterior. Si los archivos venían de Unstaged, vuelven allí. Y lo mismo se venían de Untracked.
- `git commit`: nos ayuda a mover archivos de Unstaged a Tracked. Esta es una ocasión especial, los archivos han sido guardados o actualizados en el repositorio. Git nos pedirá que dejemos un mensaje para recordar los cambios que hicimos y podemos usar el argumento ``-m`` para escribirlo (``git commit -m "mensaje"``).
- `git rm`: este comando necesita alguno de los siguientes argumentos para poder ejecutarse correctamente:
  - `git rm --cached`: Mueve los archivos que le indiquemos al estado Untracked.
  - `git rm --cached --force`: Elimina los archivos de Git y del disco duro. Git guarda el registro de la existencia de los archivos, por lo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

## ¿Qué es un Branch (rama) y cómo funciona un Merge en Git?

Git es una base de datos muy precisa con todos los cambios y crecimiento que ha tenido nuestro proyecto. Los commits son la única forma de tener un registro de los cambios. Pero las ramas amplifican mucho más el potencial de Git.

**Todos los commits se aplican sobre una rama**. Por defecto, siempre empezamos en la rama master (pero puedes cambiarle el nombre si no te gusta) y creamos nuevas ramas, a partir de esta, para crear flujos de trabajo independientes.

Crear una nueva rama se trata de copiar un commit (de cualquier rama), pasarlo a otro lado (a otra rama) y continuar el trabajo de una parte específica de nuestro proyecto sin afectar el flujo de trabajo principal (que continúa en la rama master o la rama principal).

Los equipos de desarrollo tienen un estándar: Todo lo que esté en la rama master va a producción, las nuevas features, características y experimentos van en una rama “development” (para unirse a master cuando estén definitivamente listas) y los issues o errores se solucionan en una rama “hotfix” para unirse a master tan pronto como sea posible.

*Crear una nueva rama lo conocemos como **Checkout**. Unir dos ramas lo conocemos como **Merge**.*

Podemos crear todas las ramas y commits que queramos. De hecho, podemos aprovechar el registro de cambios de Git para crear ramas, traer versiones viejas del código, arreglarlas y combinarlas de nuevo para mejorar el proyecto.

Solo ten en cuenta que combinar estas ramas (sí, hacer “merge”) puede generar conflictos. Algunos archivos pueden ser diferentes en ambas ramas. Git es muy inteligente y puede intentar unir estos cambios automáticamente, pero no siempre funciona. En algunos casos, somos nosotros los que debemos resolver estos conflictos “a mano”.

## Volver en el tiempo en nuestro repositorio utilizando reset y checkout

El comando ``git checkout`` + ``ID del commit`` nos permite viajar en el tiempo. Podemos volver a cualquier versión anterior de un archivo específico o incluso del proyecto entero. Esta también es la forma de crear ramas y movernos entre ellas.

También hay una forma de hacerlo un poco más “ruda”: usando el comando ``git reset``. En este caso, no solo “volvemos en el tiempo”, sino que borramos los cambios que hicimos después de este commit.

Hay dos formas de usar ``git reset``: con el argumento ``--hard``, borrando toda la información que tengamos en el área de staging (y perdiendo todo para siempre). O, un poco más seguro, con el argumento ``--soft``, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.

*con el comando `git log --stat` podemos ver los cambios especificos que se hicieron y en cuales archivos a partir del commit*.

## Git reset vs. Git rm

``Git reset`` y ``git rm`` son comandos con utilidades muy diferentes, pero aún así se confunden muy fácilmente.

### git rm

este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.

Recuerda que ``git rm`` no puede usarse así nomás. Debemos usar uno de los flags para indicarle a Git cómo eliminar los archivos que ya no necesitamos en la última versión del proyecto:

- `git rm --cached`: Elimina los archivos de nuestro repositorio local y del área de staging, pero los mantiene en nuestro disco duro. Básicamente le dice a Git que deje de trackear el historial de cambios de estos archivos, por lo que pasaran a un estado untracked.
- `git rm --force`: Elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

### git reset

Este comando nos ayuda a volver en el tiempo. Pero no como ``git checkout`` que nos deja ir, mirar, pasear y volver. Con ``git reset`` volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobreescribir. No hay vuelta atrás.

Este comando es **muy peligroso** y debemos usarlo solo en caso de emergencia. Recuerda que debemos usar alguna de estas dos opciones:

Hay dos formas de usar ``git reset``: con el argumento ``--hard``, borrando toda la información que tengamos en el área de staging (y perdiendo todo para siempre). O, un poco más seguro, con el argumento ``--soft``, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.

- `git reset --soft`: Borramos todo el historial y los registros de Git pero guardamos los cambios que tengamos en Staging, así podemos aplicar las últimas actualizaciones a un nuevo commit.
- `git reset --hard`: Borra todo. Todo todito, absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.
- `git reset HEAD`: Este es el comando para sacar archivos del área de staging. No para borrarlos ni nada de eso, solo para que los últimos cambios de estos archivos no se envíen al último commit, a menos que cambiemos de opinión y los incluyamos de nuevo en staging con ``git add``, por supuesto.

### ¿Porque esto es importante?

Imagina el siguiente caso:

Hacemos cambios en los archivos de un proyecto para una nueva actualización. Todos los archivos con cambios se mueven al área de staging con el comando ``git add``. Pero te das cuenta de que uno de esos archivos no está listo todavía. Actualizaste el archivo, pero ese cambio no debe ir en el próximo commit por ahora.

¿Qué podemos hacer?

Bueno, todos los cambios están en el área de Staging, incluido el archivo con los cambios que no están listos. Esto significa que debemos sacar ese archivo de Staging para poder hacer commit de todos los demás.

¡Al usar ``git rm`` lo que haremos será eliminar este archivo completamente de git! Todavía tendremos el historial de cambios de este archivo, con la eliminación del archivo como su última actualización. Recuerda que en este caso no buscábamos eliminar un archivo, solo dejarlo como estaba y actualizarlo después, no en este commit.

En cambio, si usamos ``git reset HEAD``, lo único que haremos será mover estos cambios de Staging a Unstaged. Seguiremos teniendo los últimos cambios del archivo, el repositorio mantendrá el archivo (no con sus últimos cambios pero sí con los últimos en los que hicimos commit) y no habremos perdido nada.

``Conclusión``: Lo mejor que puedes hacer para salvar tu puesto y evitar un incendio en tu trabajo es conocer muy bien la diferencia y los riesgos de todos los comandos de Git.

## Flujo de trabajo básico con un repositorio remoto

Por ahora, nuestro proyecto vive únicamente en nuestra computadora. Esto significa que no hay forma de que otros miembros del equipo trabajen en él.

Para solucionar esto están los **servidores remotos**: un nuevo estado que deben seguir nuestros archivos para conectarse y trabajar con equipos de cualquier parte del mundo.

Estos servidores remotos pueden estar alojados en GitHub, GitLab, BitBucket, entre otros. Lo que van a hacer es guardar el mismo repositorio que tienes en tu computadora y darnos una URL con la que todos podremos acceder a los archivos del proyecto para descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creen nuevas propuestas para el proyecto.

Esto significa que debes aprender algunos nuevos comandos:

- `git clone url_del_servidor_remoto`: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git en nuestra máquina local.
- `git push`: Luego de hacer ``git add`` y ``git commit`` debemos ejecutar este comando para mandar los cambios al servidor remoto.
- `git fetch`: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto) pero no lo copia en mis archivos.
- `git merge`:  También usamos el comando ``git merge`` con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.
- `git pull`: Básicamente, ``git fetch`` y ``git merge`` al mismo tiempo.

## Introducción a las ramas o branches en Git

Las ramas son la forma de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal. Esto porque queremos trabajar una parte muy específica de la aplicación o simplemente experimentar.

La cabecera o ``HEAD`` representan la rama y el commit de esa rama donde estamos trabajando. Por defecto, esta cabecera aparecerá en el último commit de nuestra rama principal. Pero podemos cambiarlo al crear una rama (``git branch rama``, ``git checkout -b rama``) o movernos en el tiempo a cualquier otro commit de cualquier otra rama con los comandos (``git reset id-commit``, ``git checkout rama-o-id-commit``).

*podemos podemos hacer un `add` y un `commit` al mismo tiempo con el comando `git commit -am "mensaje"`, pero solo funciona con archivos a los que hemos hecho `add` antes, no funciona con archivos que son totalmente nuevos.*

## Fusión de ramas con Git merge

El comando ``git merge`` nos permite crear un nuevo commit con la combinación de dos ramas (la rama donde nos encontramos cuando ejecutamos el comando y la rama que indiquemos después del comando).

Con el comando ``git branch`` podemos ver todas las ramas que tenemos en nuestro repositorio.

```bash
# Crea un nuevo commit en la rama master combinando
# los cambios de la rama develop
git checkout master
git merge develop

# Crea un nuevo commit en la rama develop combinando
# los cambios de cualquier otra rama
git checkout develop
git merge cualquier-otra-rama
```

*un `merge` es un commit a la rama a la que le estas haciendo la fusión, por ende debemos incluir un mensaje*

Es como si Git tuviera super poderes para saber qué cambios queremos conservar de una rama y qué otros de la otra. El problema es que no siempre puede adivinar, sobretodo en algunos casos donde dos ramas tienen actualizaciones diferentes en ciertas líneas en los archivos. Esto lo conocemos como un **conflicto**.

Recuerda que al ejecutar el comando ``git checkout`` para cambiar de rama o commit puedes perder el trabajo que no hayas guardado. Guarda tus cambios antes de hacer ``git checkout`` con ``git add`` y ``git commit``.

## Resolución de conflictos al hacer un merge

**Git nunca borra** nada a menos que nosotros se lo indiquemos. Cuando usamos los comandos ``git merge`` o ``git checkout`` estamos cambiando de rama o creando un nuevo commit, no borrando ramas ni commits (recuerda que puedes borrar commits con ``git reset`` y ramas con ``git branch -d``).

Git es muy inteligente y puede resolver algunos conflictos automáticamente: cambios, nuevas líneas, entre otros. Pero algunas veces no sabe cómo resolver estas diferencias, por ejemplo, cuando dos ramas diferentes hacen cambios distintos a una misma línea.

Esto lo conocemos como **conflicto** y lo podemos resolver manualmente, solo debemos hacer el merge, ir a nuestro editor de código y elegir si queremos quedarnos con alguna de estas dos versiones o algo diferente. Algunos editores de código como VSCode nos ayudan a resolver estos conflictos sin necesidad de borrar o escribir líneas de texto, basta con hundir un botón y guardar el archivo.

Recuerda que siempre debemos crear un nuevo commit para aplicar los cambios del merge. Si Git puede resolver el conflicto hará commit automáticamente. Pero, en caso de no pueda resolverlo, debemos solucionarlo y hacer el commit. Es decir que una vez solucionado el conflicto, debemos usar ``git add`` y ``git commit`` (o ``git commit -am "mensaje"``) para crear un nuevo commit en la rama a la que estamos haciendo el merge previamente.

Los archivos con conflictos por el comando ``git merge`` entran en un nuevo estado que conocemos como **Unmerged**. Funcionan muy parecido a los archivos en estado Unstaged, algo así como un estado intermedio entre Untracked y Unstaged, solo debemos ejecutar ``git add`` para pasarlos al área de staging y ``git commit`` para aplicar los cambios en el repositorio.

Cuando ocurren estos tipos de conflictos en equipos de trabajo lo que se debe hacer es hablar con la otra persona que hiso el cambio, entender cual es el conflicto y resolverlo. Basicamente la solucion es la comunicación entre los miembros del equipo.

## Cambios en GitHub: de master a main

Desde el 1 de octubre de 2020 GitHub cambió el nombre de la rama principal: ya no es “master” sino main.

Si continuas con la rama ``master`` y tienes cambios puedes utilizar el siguiente comando:

```bash
git branch -M main
```

``-M`` mueve todos los cambios existentes en tu rama ``master`` a la nueva rama ``main``.

## Uso de Github

GitHub es una plataforma que nos permite guardar repositorios de Git que podemos usar como servidores remotos y ejecutar algunos comandos de forma visual e interactiva (sin necesidad de la consola de comandos).

Luego de crear nuestra cuenta, podemos crear o importar repositorios, crear organizaciones y proyectos de trabajo, descubrir repositorios de otras personas, contribuir a esos proyectos, dar estrellas y muchas otras cosas.

El ``README.md`` es el archivo que veremos por defecto al entrar a un repositorio. Es una muy buena práctica configurarlo para describir el proyecto, los requerimientos y las instrucciones que debemos seguir para contribuir correctamente.

- *Como dato, GitHub transforma todos los archivos con la extension ``.md`` en un archivo HTML automaticamente. Esto es porque los archivos con la extensión ``.md`` son interpretados por GitHub como una página de documentación.*
- *GitHub también permite guardar archivos pdf, docx, pptx, etc.*
- *Tambien permite visualizar los archivos ``.pdf`` en la misma página.*
- *GitHub también tiene algo llamado [GitHub Student Developer Pack](https://education.github.com/pack/offers) el cual nos provee de multiples herramientas de desarrollo en su versión premium. Para obtenerlo solo debemos ingresar nuestro correo institucional de estudiante.*

Para clonar un repositorio desde GitHub (o cualquier otro servidor remoto) debemos copiar la URL (por ahora, usando HTTPS) y ejecutar el comando ``git clone`` + la URL que acabamos de copiar. Esto descargara la versión de nuestro proyecto que se encuentra en GitHub.

Sin embargo, esto solo funciona para las personas que quieren empezar a contribuir en el proyecto. Si queremos conectar el repositorio de GitHub con nuestro repositorio local, el que creamos con ``git init``, debemos ejecutar las siguientes instrucciones:

```bash
# Primero: Guardar la URL del repositorio de GitHub
# con el comando de origin
git remote add origin URL

# Segundo: Verificar que la URL se haya guardado
# correctamente

git remote
git remote -v

# Tercero: Traer la versión del repositorio remoto y
# hacer merge para crear un commit con los archivos
# de ambas partes. Podemos usar git fetch y git merge
# o solo el comando git pull con el flag --allow-unrelated-histories:
git pull origin master --allow-unrelated-histories

# Por último, ahora sí podemos hacer git push para guardar
# los cambios de nuestro repositorio local en GitHub.
git push origin master
```

## Cómo funcionan las llaves públicas y privadas

Las llaves públicas y privadas nos ayudan a cifrar y descifrar nuestros archivos de forma que los podamos compartir sin correr el riesgo de que sean interceptados por personas con malas intenciones.

La forma de hacerlo es la siguiente:

1. Ambas personas deben crear su llave pública y privada.
2. Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay problema si la “interceptan”).
3. La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos compartir el mensaje.
4. El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean interceptados.
5. La persona a la que enviamos el mensaje cifrado puede usar su llave privada para descifrar el mensaje y ver los archivos.

**Puedes compartir tu llave pública pero nunca tu llave privada.**

## Configuración de llaves SSH en local

**Primer paso: Generar tus llaves SSH**. Recuerda que es muy buena idea proteger tu llave privada con una contraseña.

```bash
ssh-keygen -t rsa -b 4096 -C "tu@email.com"
```

**Segundo paso**: Terminar de configurar nuestro sistema.

**En Windows y Linux**:

```bash
# Encender el "servidor" de llaves SSH de tu computadora:
eval $(ssh-agent -s)

# Añadir tu llave SSH a este "servidor":
ssh-add ruta-donde-se-encuentra-tu-llave-privada

# Añadir la llave privada al sistema
ssh-add ~/.ssh/id_rsa
```

## Conexion a GitHub con SSH

Luego de crear nuestras llaves SSH podemos entregarle la llave pública a GitHub para comunicarnos de forma segura y sin necesidad de escribir nuestro usuario y contraseña todo el tiempo.

Para esto debes entrar a la Configuración de Llaves SSH en GitHub, crear una nueva llave con el nombre que le quieras dar y el contenido de la llave pública de tu computadora.

Ahora podemos actualizar la URL que guardamos en nuestro repositorio remoto, solo que, en vez de guardar la URL con HTTPS, vamos a usar la URL con SSH:

```bash
git remote set-url origin url-ssh-del-repositorio-en-github
```

## Tags y versiones en Git y Github

Los tags o etiquetas nos permiten asignar versiones a los commits con cambios más importantes o significativos de nuestro proyecto.

Comandos para trabajar con etiquetas:

- Crear un nuevo tag y asignarlo a un commit: ``git tag -a nombre-del-tag id-del-commit``.
- Borrar un tag en el repositorio local: ``git tag -d nombre-del-tag``.
- Listar los tags de nuestro repositorio local: ``git tag`` o ``git show-ref --tags``.`
- Publicar un tag en el repositorio remoto: ``git push origin --tags``.
- Borrar un tag del repositorio remoto: ``git tag -d nombre-del-tag`` y ``git push origin :refs/tags/nombre-del-tag.``

*Una muy buena practica es usar el comando ``git pull`` antes de hacer ``git push`` para actualizar el repositorio local con los cambios que se hayan hecho en el repositorio remoto.*

### Aliases

Podemos usar el comando ``git log --all --graph --decorate --oneline`` para ver todos los commits y branches del proyecto de una manera más gráfica.

Como el comando anterior es tan largo podemos usar una herramienta de Linux llamada aliases para simplificar el comando.

Ej:

```bash
alias gitGraph="git log --all --graph --decorate --oneline"
```

En este caso el alias es ``gitGraph`` pero en realidad podria ser cualquier otro.

Tambien podemos añadir aliases al mismo git y luego usarlo como si fueran comandos propios, por ejemplo:

```bash
git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
```

Con esto cada vez que ejecutemos el comando ``git superlog`` podremos ver todos los commits y branches del proyecto de una manera mas ordenada y bonita.

Para borrar un alias de git:

```bash
git config --global --unset-all alias.<nombre-alias>
```

## Manejo de ramas en GitHub

Algunos comandos más para manejar ramas en GitHub:

- ``git show-branch``: Muestra cuales son las ramas que existen y cual ha sido su historia.
- ``git show-branch --all``: Muestra lo mismo que el comando anterior pero con un poco mas de información.
- ``gitk``: Es un programa que viene instalado por defecto con git y que nos provee una interfaz grafica para ver toda la informacion relacionada con nuestro repositorio.

*Nota: Si bien el comando ``gitk`` es una forma mas grafica y facil de ver la historia de nuestro repositorio (si estas recien comenzando a trabajar con la consola), todos los profesionales usan la terminal para trabajar con git ya que es mucho mas rapido y eficiente de usar.*

Puedes trabajar con ramas que nunca envías a GitHub, así como pueden haber ramas importantes en GitHub que nunca usas en el repositorio local. Lo importante es que aprendas a manejarlas para trabajar profesionalmente.

- Crear una rama en el repositorio local: ``git branch nombre-de-la-rama`` o ``git checkout -b nombre-de-la-rama``.
- Publicar una rama local al repositorio remoto: ``git push origin nombre-de-la-rama``.

## Configurar múltiples colaboradores en un repositorio de GitHub

Por defecto, cualquier persona puede clonar o descargar tu proyecto desde GitHub, pero no pueden crear commits, ni ramas, ni nada.

Existen varias formas de solucionar esto para poder aceptar contribuciones. Una de ellas es añadir a cada persona de nuestro equipo como colaborador de nuestro repositorio.

Solo debemos entrar a la configuración de colaboradores de nuestro proyecto (``Repositorio > Settings > Collaborators``) y añadir el email o username de los nuevos colaboradores.

## Flujo de trabajo profesional: Haciendo merge de ramas de desarrollo a master

![flujo de trabajo](https://static.platzi.com/media/user_upload/23.Flujotrabajoprofesional-54e182a6-c2f1-43f8-a226-c35f623db8cd.jpg)

## Flujo de trabajo profesional con Pull Requests

En un entorno profesional normalmente se bloquea la rama master, y para enviar código a dicha rama pasa por un *code review* y luego de su aprobación se unen códigos con los llamados *merge request*.

Para realizar pruebas enviamos el código a servidores que normalmente los llamamos *staging develop* (servidores de pruebas) luego de que se realizan las pruebas pertinentes tanto de código como de la aplicación estos pasan a el servidor de producción con el ya antes mencionado *merge request*.

``pull request`` es como le llama GitHub, pero en GitLab se llama ``merge request`` y en Bitbucket ``push request``.

![flujo con pull request](https://static.platzi.com/media/public/uploads/flujodetrabprofbranches_96136aab-1884-4a9a-8b1e-83421630464d.PNG)

El perfil de quien se encarga de manejar todo este flujo es conocido como **DevOps**, el es quien se encarga de manejar todo el entorno de desarrollo de un proyecto.

## Utilizando Pull Requests en GitHub

### Pull Request

Es una funcionalidad de github (en gitlab llamada merge request y en bitbucket push request), en la que un colaborador pide que revisen sus cambios antes de hacer merge a una rama, normalmente master.

Al hacer un pull request se genera una conversación que pueden seguir los demás usuarios del repositorio, así como autorizar y rechazar los cambios.

El flujo del pull request es el siguiente:

1. Se trabaja en una **rama paralela** los cambios que se desean (``git checkout -b <rama>)``.
2. Se hace un **commit** a la rama (``git commit -am '<Comentario>'``).
3. Se **suben al servidor remoto los cambios** (``git push origin <rama>``)
4. En GitHub se hace el ``pull request`` comparando la rama master/main con la rama del "fix".
5. Uno, o varios colaboradores revisan que el **código sea correcto** y dan **feedback** (en el chat del pull request).
6. El colaborador hace los cambios que desea en la **branch** y lo **vuelve a subir** al remoto (automáticamente jala la historia de los cambios que se hagan en la rama, en remoto).
7. Se aceptan los cambios en **GitHub**.
8. Se hace **merge** a ``master/main`` desde GitHub.

**Importante**: Cuando se modifica una ``rama``, también se modifica el ``pull request``.

Tambien es importante que se respete quien hace los **merge**, porque así se pueden hacer **code review** los cuales son una buena practica.

Los ``pull request`` del lado de Git no existen, solo existen los ``merge``. Un ``pull request`` es una forma de tener un **staging** del lado del servidor el cual permite revisar (code review) y agregar cambios.

## Forks o Bifurcaciones

Es una característica única de GitHub en la que se crea una copia exacta del estado actual de un repositorio directamente en GitHub, éste repositorio podrá servir como otro origen y se podrá clonar (como cualquier otro repositorio), en pocas palabras, lo podremos utilizar como un git cualquiera.

Un fork es como una bifurcación del repositorio completo, tiene una historia en común, pero de repente se bifurca y pueden variar los cambios, ya que ambos proyectos podrán ser modificados en paralelo y para estar al día un colaborador tendrá que estar actualizando su fork con la información del original.

Al hacer un fork de un proyecto en GitHub, te conviertes en dueñ@ del repositorio fork, puedes trabajar en éste con todos los permisos, pero es un repositorio completamente diferente que el original, teniendo alguna historia en común.

Los forks son importantes porque es la manera en la que funciona el open source, ya que, una persona puede no ser colaborador de un proyecto, pero puede contribuir al mismo, haciendo mejor software que pueda ser utilizado por cualquiera.

Al hacer un fork, GitHub sabe que se hizo el fork del proyecto, por lo que se le permite al colaborador hacer pull request desde su repositorio propio.

### Trabajando con mas de un repositorio remoto

Cuando trabajas en un proyecto que existe en **diferentes repositorios remotos** (normalmente a causa de un **fork**) es muy probable que desees poder **trabajar con ambos repositorios**, para ésto puedes crear un **remoto adicional** desde consola.

```bash
git remote add <nombre_del_remoto> <url_del_remoto>
```

```bash
git remote upstream https://github.com/user/repo
```

Al crear un **remoto adicional** podremos, hacer **pull** desde el nuevo **origen** (en caso de tener permisos podremos hacer fetch y push).

```bash
git pull <remoto> <rama>
```

```bash
git pull upstream master
```

Este ``pull`` nos traerá los **cambios del remoto**, por lo que se estará al día en el proyecto, el flujo de trabajo cambia, en adelante se estará trabajando haciendo **pull desde el upstream** y **push al origin** para pasar a hacer **pull request**.

```bash
git pull upstream master
```

```bash
git push origin master
```

## Deploy usando Git

Git tambien puede ser usado para hacer un deploy de páginas web, para ello es necesario tener configurado un servidor web y tener git instalado.

```bash
sudo apt install git
```

Luego podemos clonar el proyecto desde un repo remoto, en este caso GitHub:

```bash
/var/www/example.com/html$ git clone https://github.com/user/repo.git
```

Luego si tenemos un ``index.html`` en el directorio podriamos acceder a la página web mediante la URL ``http://example.com/html/index.html``.

Pero ¿que pasa si hacemos un cambio en el repositorio?, en este caso no se vera reflejado automaticamente en la página web, para ello tendriamos que hacer un ``pull``.

```bash
git pull origin master
```

Sin embargo esto no es una buena practica para hacer deploy ya que es molesto estar haciendo un ``pull`` cada vez que hacemos un cambio en el repositorio, ademas de esta forma alguien podria tener acceso al archivo ``.git`` y por ende acceso a toda nuestra base de datos de cambios del repositorio. Para esto hay formas de protegerlo tanto si usas **apache** como **nginx**. Tambien hay formas mas avanzadas de hacer esto con herramientas como ``travis CI``, que es como un GitHub que lo que hace es conectar automáticamente tus ramas de GitHub con tus servidores una vez configurado. Si bien **travis CI** es una plataforma online, de pago, tenemos otras como ``jenkins CI`` el cual pude ser instalado en nuestro servidor.

## Ignorar archivos en el repositorio con .gitignore

No todos los archivos que agregas a un proyecto deberían ir a un repositorio, por ejemplo cuando tienes un archivo donde están tus contraseñas que comúnmente tienen la extensión ``.env`` o cuando te estás conectando a una base de datos; **son archivos que nadie debe ver**.

El archivo ``.gitignore`` es una lista de archivos que no queremos que se suban al repositorio.

Podemos ignorar todos los jpg haciendo ``*.jpg``, carpetas haciendo ``/carpeta/``, o archivos dentro de una carpeta haciendo ``/carpeta/archivo.txt``. Por lo general se usa para ignorar los ``node_modules``, la carpeta ``target``, etc todo lo que no nos interesa que este en el repositorio remoto.

![meme](https://static.platzi.com/media/user_upload/pull_push-900f38af-6a0f-43cf-86f6-4b1f7ce4ab9d.jpg)

## El archivo ``README.md``

``README.md`` es una excelente práctica en tus proyectos, md significa [**Markdown**](https://www.youtube.com/watch?v=oxaH9CFpeEE), que es una especie de código que te permite cambiar la manera en que se ve un archivo de texto, es similar a HTML, pero es más sencillo de leer.

Lo interesante de Markdown es que funciona en muchas páginas, por ejemplo la edición en Wikipedia; es un lenguaje intermedio que no es HTML, no es texto plano, es una manera de crear excelentes texto formateados (este archivo es puro Markdown :laughing:).

*En VSCode podemos vizualizar el archivo dandole click derecho y seleccionando la opción Open Preview, luego puedes separar la pantalla en dos, una para la edición y otra para la vista previa.*

## GitHub pages

GitHub tiene un servicio de hosting gratis llamado [GitHub Pages](https://developer.mozilla.org/es/docs/Learn/Common_questions/Using_Github_pages), tu puedes tener un repositorio donde el contenido del repositorio se vaya a GitHub y se vea online.

## Git Rebase: reorganizando el trabajo realizado

**rebase** reescribe la historia del repositorio, cambia la historia de donde comenzó la rama y solo debe ser usado de manera local.

Ej:

```bash
# Cambiamos a la rama que queremos traer los cambios
git checkout experiment
# Aplicamos rebase para traer los cambios de la rama que queremos
git rebase master
```

![rebase 1](https://static.platzi.com/media/user_upload/Untitled-5d59eeed-f90a-4eed-b893-dc32de72e622.jpg)

Para hacer un rebase en la rama ``feature`` de la rama ``master``, correrías los siguientes comandos:

```bash
git checkout feature
git rebase master
```

Esto trasplanta la rama feature desde su locación actual hacia la punta de la rama master:

![rebase 2](https://static.platzi.com/media/user_upload/Untitled.2-465e9969-e337-4dcc-a7f8-3a338f49fc98.jpg)

Ahora, falta fusionar la rama feature con la rama master:

```bash
git checkout master
git rebase feature
```

### No reorganices el historial público

Nunca debes reorganizar los commits una vez que se hayan enviado a un repositorio público. La reorganización sustituiría los commits antiguos por los nuevos y parecería que esa parte del historial de tu proyecto se hubiera desvanecido de repente.

## Git Stash: Guardar cambios en memoria y recuperarlos después

El stashed nos sirve para guardar cambios para después, Es una lista de estados que nos guarda algunos cambios que hicimos en Staging para poder cambiar de rama sin perder el trabajo que todavía no guardamos en un commit

Ésto es especialmente útil porque hay veces que no se permite cambiar de rama, ésto porque porque tenemos cambios sin guardar, no siempre es un cambio lo suficientemente bueno como para hacer un commit, pero no queremos perder ese código en el que estuvimos trabajando.

El stashed nos permite cambiar de ramas, hacer cambios, trabajar en otras cosas y, más adelante, retomar el trabajo con los archivos que teníamos en Staging pero que podemos recuperar ya que los guardamos en el Stash.

### git stash

El comando git stash guarda el trabajo actual del Staging en una lista diseñada para ser temporal llamada Stash, para que pueda ser recuperado en el futuro.

Para agregar los cambios al stash se utiliza el comando:

```bash
git stash
```

Podemos poner un mensaje en el stash, para asi diferenciarlos en git stash list por si tenemos varios elementos en el stash. Ésto con:

```bash
git stash save "mensaje identificador del elemento del stashed"
```

### Obtener elementos del stash

El método **pop** recuperará y sacará de la lista el **último estado del stashed** y lo insertará en el **staging area**, por lo que es importante saber en qué branch te encuentras para poder recuperarlo, ya que **el stash será agnóstico a la rama o estado en el que te encuentres**, siempre recuperará los cambios que hiciste en el lugar que lo llamas.

Para recuperar los últimos cambios desde el stash a tu staging area utiliza el comando:

```bash
git stash pop
```

Para aplicar los cambios de un stash específico y eliminarlo del stash:

```bash
git stash pop stash@{<num_stash>}
```

Para retomar los cambios de una posición específica del Stash puedes utilizar el comando:

```bash
git stash apply stash@{<num_stash>}
```

Donde el ``<num_stash>`` lo obtienes desden el ``git stash list``.

### Listado de elementos en el stash

Para ver la lista de cambios guardados en Stash y así poder recuperarlos o hacer algo con ellos podemos utilizar el comando:

```bash
git stash list
```

Retomar los cambios de una posición específica del Stash || Aplica los cambios de un stash específico.

### Crear una rama con el stash

Para crear una rama y aplicar el stash mas reciente podemos utilizar el comando:

```bash
git stash branch <nombre_de_la_rama>
```

Si deseas crear una rama y aplicar un stash específico (obtenido desde ``git stash list``) puedes utilizar el comando:

```bash
git stash branch nombre_de_rama stash@{<num_stash>}
```

Al utilizar estos comandos crearás una rama con el nombre ``<nombre_de_la_rama>``, te pasarás a ella y tendrás el **stash especificado** en tu **staging area**.

### Eliminar elementos del stash

Para eliminar los cambios más recientes dentro del stash (el elemento 0), podemos utilizar el comando:

```bash
git stash drop
```

Pero si en cambio conoces el ``índice`` del stash que quieres borrar (mediante ``git stash list``) puedes utilizar el comando:

```bash
git stash drop stash@{<num_stash>}
```

Donde el ``<num_stash>`` es el ``índice`` del cambio guardado.

Si en cambio deseas eliminar todos los elementos del stash, puedes utilizar:

```bash
git stash clear
```

Consideraciones:

- El cambio más reciente (al crear un stash) **SIEMPRE** recibe el valor 0 y los que estaban antes aumentan su valor.
- Al crear un stash tomará los archivos que han sido modificados y eliminados. Para que tome un archivo creado es necesario agregarlo al Staging Area con ``git add [nombre_archivo]`` con la intención de que git tenga un seguimiento de ese archivo, o también utilizando el comando ``git stash -u`` (que guardará en el stash los archivos que no estén en el staging).
- Al aplicar un stash este no se elimina, es buena práctica eliminarlo.

## Git Clean: limpiar tu proyecto de archivos no deseados

A veces creamos archivos cuando estamos realizando nuestro proyecto que realmente no forman parte de nuestro directorio de trabajo, que no se deberían agregar y lo sabemos.

- Para saber qué archivos vamos a borrar (pero no los borra) tecleamos ``git clean --dry-run``.
- Para borrar todos los archivos listados (que no son carpetas) tecleamos ``git clean -f``.

El parametro ``-d`` ayuda con el borrado de carpetas untracked.

![git clean](https://static.platzi.com/media/user_upload/34.GitClean-28f1b589-4c33-40b0-9a2e-5c7601e140e2.jpg)

## Git cherry-pick: traer commits viejos al head de un branch

Existe un mundo alternativo en el cual vamos avanzando en una rama pero necesitamos en *master* uno de esos avances de la rama, para eso utilizamos el comando ``git cherry-pick IDCommit``.

*cherry-pick es una mala práctica* porque significa que estamos reconstruyendo la historia, **usa cherry-pick con sabiduría**. Si no sabes lo que estás haciendo **ten mucho cuidado**.

![cherry-pick](https://static.platzi.com/media/user_upload/35.GitCherryPick-0cba0731-ff3d-4423-9059-22d80feabb63.jpg)

## Reconstruir commits en Git con amend

A veces hacemos un commit, pero resulta que no queríamos mandarlo porque faltaba algo más. Utilizamos ``git commit --amend``, *amend* en inglés es remendar y lo que hará es que los cambios que hicimos nos los agregará al commit anterior.

![git amend](https://static.platzi.com/media/user_upload/36.GitAmend-184be9ad-e025-43a0-b647-5ce23b442455.jpg)

## Git Reset y Reflog: úsese en caso de emergencia

¿Qué pasa cuando todo se rompe y no sabemos qué está pasando? Con ``git reset HashDelHEAD`` nos devolveremos al estado en que el proyecto funcionaba.

- ``git reset --soft HashDelHEAD`` te mantiene lo que tengas en staging ahí.
- ``git reset --hard HashDelHEAD`` resetea absolutamente todo incluyendo lo que tengas en staging.

``git reset`` **es una mala práctica, no deberías usarlo en ningún momento; debe ser nuestro último recurso.**

### Git nunca olvida, ``git reflog``

Git guarda todos los cambios aunque decidas borrarlos, al borrar un cambio lo que estás haciendo sólo es actualizar la punta del branch, para gestionar éstas puntas existe un mecanismo llamado registros de referencia o ``reflogs``.

La gestión de estos cambios es mediante los hash’es de referencia (o ``ref``) que son apuntadores a los commits.

Los reflogs registran cuándo se actualizaron las referencias de Git en el repositorio local (sólo en el local), por lo que si deseas ver cómo has modificado la historia puedes utilizar el comando:

```bash
git reflog
```

Muchos comandos de Git aceptan un parámetro para especificar una referencia o “ref”, que es un puntero a una confirmación sobre todo los comandos:

- ``git checkout``: Puedes moverte sin realizar ningún cambio al commit exacto de la ``ref``.

```bash
git checkout eff544f
```

- ``git reset``: Hará que el último commit sea el pasado por la ``ref``, usar este comando sólo si sabes exactamente qué estás haciendo.

```bash
git reset --hard eff544f # Perderá todo lo que se encuentra en staging y en el Working directory y se moverá el head al commit eff544f
git reset --soft eff544f # Te recuperará todos los cambios que tengas diferentes al commit eff544f, los agregará al staging area y moverá el head al commit eff544f
```

- ``git merge``: Puedes hacer merge de un commit en específico, funciona igual que con una branch, pero te hace el merge del estado específico del commit mandado.

```bash
git checkout master
git merge eff544f # Fusionará en un nuevo commit la historia de master con el momento específico en el que vive eff544f
```

## Buscar en archivos y commits de Git con Grep y log

![grep y log](https://static.platzi.com/media/user_upload/38.gitgrep-91e4368f-580b-4d90-8d2f-628d0b76089a.jpg)

*``grep`` para buscar palabras archivos, ``log`` para buscar en los commits.*

## Comandos y recursos colaborativos en Git y GitHub

![more commands](https://static.platzi.com/media/user_upload/39.RecursosGitGitHub-e849c3e6-279e-490e-a65d-308e062ddd18.jpg)

## Git y GitHub

Para mas informacion de cada comando:

```bash
git <command> --help
```