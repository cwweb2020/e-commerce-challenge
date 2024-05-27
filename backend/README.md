# Backend Project

This is the backend project for the application. Below are the steps to set up the development environment and get the server running.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- You have installed [PostgreSQL](https://www.postgresql.org/).

## Installation

1. _Clone the repository_

   bash
   git clone https://github.com/cwweb2020/e-commerce-challenge.git
   cd backend

2. _Install dependencies_

   bash
   npm install

3. _Set up the environment variables_

   Create a .env file in the root directory and add the following content:

   env
   NODE_ENV="test"
   DATABASE_URL="postgresql://postgres:root@localhost:5432/challenge_db?schema=public"

4. _Initialize the database_

   Ensure your PostgreSQL server is running and create the database:

   sql
   CREATE DATABASE challenge_db;

   Then, run the following command to initialize Prisma:

   bash
   npx prisma migrate deploy

5. _Running the Server_

   Build the project

   bash
   npx tsc

   Start the server

   bash
   npm start

   The server should now be running on http://localhost:5000.

6. _Running Tests_

   To run tests, use the following command:

   bash
   npm test

   To watch tests and rerun on changes:

   bash
   npm run test:watch

_Additional Commands_

- Generate Prisma Client

  If you make changes to your Prisma schema, generate the Prisma Client again:

bash
Copy code
npx prisma generate

- Open Prisma Studio

  Prisma Studio is a visual editor for the database. Open it using:

bash
npx prisma studio
