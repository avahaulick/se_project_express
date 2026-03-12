# WTWR Backend API (Project 12)

## Project Description

This project is the backend API for WTWR (What to Wear). It provides routes for users and clothing items, stores data in MongoDB, validates incoming request data, and returns consistent JSON responses with status-based error handling.

## Functionality

- Create and retrieve users.
- Create, retrieve, and delete clothing items.
- Like and unlike clothing items.
- Validate user avatar and clothing image URLs using the validator package.
- Return centralized error responses for invalid data, invalid IDs, not found routes/resources, and server errors.

## Technologies and Techniques

- Node.js and Express for API routing and server logic.
- MongoDB with Mongoose for schemas, models, and database operations.
- ESLint (airbnb-base) for code quality and style consistency.
- Prettier for formatting.
- Nodemon for local development with hot reload.
- Modular architecture with separated folders for models, controllers, routes, and utilities.

## Scripts

- npm run start: starts the server on localhost:3001.
- npm run dev: starts the server on localhost:3001 with hot reload.
- npm run lint: runs ESLint from the command line.

## API Overview

User routes:

- GET /users
- GET /users/:userId
- POST /users

Clothing item routes:

- GET /items
- POST /items
- DELETE /items/:id
- PUT /items/:id/likes
- DELETE /items/:id/likes

## Running the Project Locally

1. Install dependencies:
   npm install
2. Make sure MongoDB is running locally.
3. Start the server:
   npm run dev

## API Testing (Postman)

This project includes API test assets under the postman folder.

Collections:

- postman/collections/WTWR-API-Test-Suite
- postman/collections/WTWR-API-Test-Suite/Users

Environments:

- postman/environments/WTWR-Local.environment.yaml
- postman/environments/WTWR-Production.environment.yaml

Suggested local testing flow:

1. Start MongoDB locally.
2. Start the API with npm run dev.
3. Use the local environment file.
4. Run user and item requests against http://localhost:3001.

Sample requests to verify quickly:

- GET /users
- POST /users
- GET /items
- POST /items
- PUT /items/:id/likes
- DELETE /items/:id/likes

## Media

Add your project media here before submission:

- Screenshots or GIFs showing main API features.
- Video demo link (recommended).

Example placeholders:

- Screenshot: ./assets/project-screenshot.png
- Demo video: https://your-video-link-here

## Notes

Before submitting, update sprint.txt with the current sprint number.
