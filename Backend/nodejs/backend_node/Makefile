#######
# API #
#######

build_api:
	docker build -t nodejs-backend-test .

run_api:
	docker run --rm -it -p 3000:3000 --name node-test nodejs-backend-test

stop_api:
	docker stop node-test

############
# API + DB #
############

build_app:
	docker-compose build --no-cache

run_app:
	docker-compose up --build --force-recreate

stop_app:
	docker-compose stop

# Elimina las imagenes con TAG <none> creadas al construir el contenedor
clear_cache:
	docker images -qf dangling=true | xargs docker rmi