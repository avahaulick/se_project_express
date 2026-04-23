# WTWR Backend API (Project 13)

## Project Description

This project is the backend API for WTWR (What to Wear). It provides authentication, protected routes for users and clothing items, stores data in MongoDB, validates incoming request data, and returns consistent JSON responses with status-based error handling.

## Functionality

- Register and log in users with JWT authorization.
- Retrieve and update the current authorized user profile.
- Create, retrieve, and delete clothing items.
- Like and unlike clothing items.
- Restrict clothing item deletion to the owner.
- Validate user avatar, email, and clothing image URLs using the validator package.
- Return centralized error responses for invalid data, invalid IDs, not found routes/resources, and server errors.

## Technologies and Techniques

- Node.js and Express for API routing and server logic.
- MongoDB with Mongoose for schemas, models, and database operations.
- bcryptjs for password hashing.
- jsonwebtoken for JWT token creation and verification.
- cors for cross-origin request support.
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

- POST /signup
- POST /signin
- GET /users/me
- PATCH /users/me

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

- POST /signup
- POST /signin
- GET /items
- GET /users/me (with Bearer token)
- POST /items (with Bearer token)
- PUT /items/:id/likes (with Bearer token)
- DELETE /items/:id/likes (with Bearer token)

## Media

Add your project media here before submission:

- Screenshots or GIFs showing main API features.
- Video demo link (recommended).

Example placeholders:

- Screenshot: ./assets/project-screenshot.png
- Demo video: https://www.loom.com/share/5eaacbd1ed924f6ebb084f6b785d059d

## Review Access Information

- Deployed project domain: https://twighlightparadox.mooo.com
- Backend API domain: https://api.twighlightparadox.mooo.com
- Frontend GitHub repository: https://github.com/avahaulick/se_project_react
- Project pitch video: https://www.loom.com/share/5eaacbd1ed924f6ebb084f6b785d059d

## Notes

Before submitting, update sprint.txt with the current sprint number.
