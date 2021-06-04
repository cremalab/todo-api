# todo-api

This API is meant as a basic API to learn how to implement REST CRUD actions into a front-end application.

It has basic CRUD actions for a `task`:
- **C**reate a `task` with `POST /tasks`
- **R**ead a `task` with `GET /tasks` or `GET /tasks/:id`
- **U**pdate a `task` with `PATCH /tasks/:id`
- **D**elete a `task` with `DELETE /tasks/:id`

## Tools Used

- [Node](https://nodejs.org/en/) - The JavaScript runtime used to run the backend
- [TypeScript](https://www.typescriptlang.org/) - Language used to add static types on top of JavaScript
- [Express](https://expressjs.com/) - A framework used to build an API with Node
- [Prisma](https://www.prisma.io/) - Used as the ORM for defining and accessing the Database
- [SQLite](https://www.sqlite.org/index.html) - A small, fast, and portable SQL based Database

## Setup Instructions

1. Run `nvm use` to use the supported version of `node`
1. Run `npm i` to install the dependencies
1. Create a `.env` file located at `./prisma/.env` with the contents `DATABASE_URL="file:./dev.db"`
1. Run `npm run prisma:migrate` to setup (or reset) the database
1. Run `npm start` to start the API
1. Run `npm run prisma:studio` to open the [Prisma Studio](https://www.prisma.io/studio) UI

## How to Use

- Follow the Setup Instructions to get the API and Prisma Studio running locally
- If desired, manually add data to the Database by using Prisma Studio
- Once the API is running it can be accessed at `http://localhost:3001`
- If you need to reset the Database you can use the script `npm run prisma:migrate`
- A list of routes is located at `docs/routes.md`
- A description of the different entities is located at `docs/entities.md`

## Important Files

- `./src/index.ts` - This file is where the Express server is located and where the routes are defined
- `./prisma/schema.prisma` - This is where the Database schema is defined
- `./prisma/dev.db` - This file is the actual SQLite database, it can be deleted to reset the DB