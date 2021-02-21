# Mankee
Yet another flashcards app

`yarn dev` to start development server

`yarn build` && `yarn start` for production build

## A Stack
* next.js
* prisma
* React
* styled-components
* Docker (currently is not implemented)

## Database setup
* Configure connection string inside `.env` file
* Create or update DB schema in `./prisma/schema.prisma`
* Run a migration via a terminal by executing a command
```bash
yarn prisma migrate dev --name <migration_name> --preview-feature
```
