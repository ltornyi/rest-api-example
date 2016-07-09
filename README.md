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
