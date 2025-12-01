# Real Estate Microservices Platform

A scalable, microservices-based Real Estate Platform built with Spring Boot, React, and Docker. This application allows users to list, search, and manage real estate properties.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Running](#installation--running)
- [API Documentation](#api-documentation)
- [Frontend Overview](#frontend-overview)

## 🔭 Project Overview

This project demonstrates a microservices architecture where different functional areas are separated into independent services.
- **User Service**: Handles user registration, authentication (JWT), and profile management.
- **Property Service**: Manages property listings (CRUD operations).
- **Frontend**: A React-based user interface for interacting with the services.
- **Database**: Each service has its own dedicated PostgreSQL database to ensure loose coupling.

## 📂 Project Structure

```
real-estate-microservices/
├── docker-compose.yml      # Orchestrates all services and databases
├── frontend/               # React Frontend Application
│   ├── src/
│   │   ├── pages/          # UI Pages (Home, Login, Register, etc.)
│   │   ├── services/       # API integration
│   │   └── ...
│   ├── Dockerfile          # Frontend container configuration
│   └── nginx.conf          # Nginx configuration for serving the app
├── user-service/           # Spring Boot User Service
│   ├── src/main/java/.../controller/  # API Endpoints (AuthController, UserController)
│   ├── Dockerfile          # User Service container configuration
│   └── ...
└── property-service/       # Spring Boot Property Service
    ├── src/main/java/.../controller/  # API Endpoints (PropertyController)
    ├── Dockerfile          # Property Service container configuration
    └── ...
```

## ✨ Features

### User Management
- **User Registration**: Create a new account with username, email, and password.
- **Authentication**: Secure login using JSON Web Tokens (JWT).
- **Role-Based Access**: Support for different user roles (USER, AGENT, ADMIN).
- **Profile**: View user profile details.

### Property Management
- **List Properties**: Browse all available real estate listings.
- **View Details**: See detailed information about a specific property.
- **Add Property**: Authenticated users can list new properties.
- **Edit/Delete**: Owners can update or remove their property listings.

## 🛠 Technology Stack

- **Backend**: Java 17, Spring Boot 3.x, Spring Security, Spring Data JPA
- **Frontend**: React 19, Vite, React Router, Axios
- **Database**: PostgreSQL 15
- **Containerization**: Docker, Docker Compose
- **Server**: Nginx (for serving Frontend)

## 🚀 Getting Started

### Prerequisites
- **Docker** and **Docker Compose** installed on your machine.
- (Optional) Java 17 and Node.js 18+ if you want to run services individually without Docker.

### Installation & Running

The easiest way to run the entire application is using Docker Compose.

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd "real-estate microservices"
    ```

2.  **Build and Run**:
    This command will build the Docker images for all services and start them along with the databases.
    ```bash
    docker-compose up --build
    ```

3.  **Wait for Startup**:
    It may take a few minutes for the initial build and for Spring Boot applications to fully start. Look for "Started UserServiceApplication" and "Started PropertyServiceApplication" in the logs.

4.  **Access the Application**:
    - **Frontend**: [http://localhost:3000](http://localhost:3000)
    - **User Service API**: [http://localhost:8081](http://localhost:8081)
    - **Property Service API**: [http://localhost:8082](http://localhost:8082)

5.  **Stop the Application**:
    Press `Ctrl+C` in the terminal to stop the services. To remove containers and volumes:
    ```bash
    docker-compose down -v
    ```

## 📡 API Documentation

### User Service (`http://localhost:8081`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/signin` | Authenticate user and get JWT | No |
| `POST` | `/api/auth/signup` | Register a new user | No |
| `GET` | `/api/users/profile` | Get current user profile | **Yes** |

### Property Service (`http://localhost:8082`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/properties` | Get all properties | No |
| `GET` | `/api/properties/{id}` | Get property by ID | No |
| `POST` | `/api/properties` | Create a new property | **Yes** |
| `PUT` | `/api/properties/{id}` | Update a property | **Yes** (Owner) |
| `DELETE` | `/api/properties/{id}` | Delete a property | **Yes** (Owner) |

## 💻 Frontend Overview

The frontend is a Single Page Application (SPA) built with React.

- **Home Page**: Displays a list of all properties.
- **Login/Register**: Forms for user authentication.
- **Add Property**: A protected route that allows logged-in users to submit new listings.
- **Property Details**: Shows full details for a selected property.

### Key Configuration
- **API Base URL**: The frontend communicates with the backend services. Ensure the ports in `docker-compose.yml` match the API calls in the frontend code.
- **Nginx**: In production (Docker), Nginx serves the static files and handles routing.
