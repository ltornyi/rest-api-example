# REST API Example
Proof of concept with Express and MassiveJS.

## Building
```sh
git clone https://github.com/ltornyi/rest-api-example
cd rest-api-example && npm install
```
Edit `env/development/config.json` and `env/production/config.json` accordingly.

Install database objects in development:
```sh
node server install
```

or in production:
```sh
NODE_ENV=production node server install
```

## Running

Run in development
```sh
node server
```

Run in production
```sh
NODE_ENV=production node server
```

## Test the APIs
Create a new author:

curl -i -X POST -H 'Content-Type: application/json' -d '{"name":"New Author"}' http://localhost:3000/authors

Query all authors:
curl -i -X GET http://localhost:3000/authors

Query author with id=1:
curl -i -X GET http://localhost:3000/authors/1

Update author with id=1:
curl -i -X PUT -H 'Content-Type: application/json' -d '{"name":"Author updated"}' http://localhost:3000/authors/1

Delete author with id=1:

curl -i -X DELETE http://localhost:3000/authors/1
