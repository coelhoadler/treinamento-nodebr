// instalando imagem do Postgres

docker run /
    --name postgres / 
    -e POSTEGRES_USER=adlercoelhosantos /
    -e POSTGRES_PASSWORD=senhasecreta / 
    -e POSTGRES_DB=heroes /
    -p 5432:5432
    -d /
    postgres

**instalando imagem do Postgres (__inline__)**
docker run --name postgres -e POSTGRES_USER=adlercoelho -e POSTGRES_PASSWORD=senhasecreta  -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

**Entrando na máquina criada**
docker exec -it postgres /bin/bash

**instalando imagem Adminer**
docker run --adminer -e
docker run --link postgres:postgres -p 8080:8080 -d adminer

**instalando imagem do mongo**
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -d mongo:4 // precisei trocar a porta para 27018

**instalando imagem do mongoclient**
docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

**criando um novo usuário no mongo**
docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'adlercoelho', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})";