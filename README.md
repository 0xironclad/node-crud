# Express CRUD API

A RESTful API built with Express.js and PostgreSQL for managing user data.

## Features

- Full CRUD operations for users
- Input validation with Joi
- PostgreSQL database integration
- Error handling middleware
- Environment variable configuration
- Auto-creates database table on startup

## Tech Stack

- **Express.js** - Web framework
- **PostgreSQL** - Database (running in Docker container)
- **Docker** - Container platform
- **pgAdmin 4** - Database management
- **Joi** - Input validation
- **dotenv** - Environment configuration
- **CORS** - Cross-origin resource sharing
- **nodemon** - Development auto-reload

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- pnpm package manager

## Installation

1. Clone the repository

2. Start PostgreSQL with Docker:
```bash
docker run -d \
  --name postgres-container \
  -e POSTGRES_PASSWORD=your_password \
  -p 5433:5432 \
  postgres:latest
```

3. Install dependencies:
```bash
pnpm install
```

4. Create a `.env` file in the root directory:
```env
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_NAME=express_crud
```

5. Create the database using pgAdmin 4 or psql:
```sql
CREATE DATABASE express_crud;
```

The application will automatically create the users table on startup

## Running the Application

Development mode with auto-reload:
```bash
pnpm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000/api/v1
```

### Endpoints

#### Get all users
```http
GET /users
```

#### Get user by ID
```http
GET /users/:id
```

#### Create user
```http
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Validation:**
- `name`: Required, minimum 3 characters
- `email`: Required, valid email format

#### Update user
```http
PUT /users/:id
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

**Validation:**
- At least one field (`name` or `email`) required
- `name`: Minimum 3 characters if provided
- `email`: Valid email format if provided

#### Delete user
```http
DELETE /users/:id
```

## Project Structure

```
express-crud/
├── src/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   └── userController.js  # Request handlers
│   ├── data/
│   │   └── createUsersTable.js # Database initialization
│   ├── middlewares/
│   │   ├── errorHandler.js    # Error handling
│   │   └── inputValidator.js  # Joi validation
│   ├── models/
│   │   └── userModel.js       # Database queries
│   ├── routes/
│   │   └── userRoute.js       # API routes
│   └── index.js               # App entry point
├── .env                       # Environment variables
├── package.json
└── README.md
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## License

ISC
