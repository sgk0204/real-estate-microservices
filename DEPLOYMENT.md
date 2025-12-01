# Deployment Guide

## Local Development

1.  **Prerequisites**: Docker and Docker Compose installed.
2.  **Run**:
    ```bash
    docker-compose up --build
    ```
3.  **Access**:
    - Frontend: `http://localhost:3000`
    - User Service: `http://localhost:8081`
    - Property Service: `http://localhost:8082`

## Cloud Deployment (Free Tier)

### Heroku (Backend)
1.  Create two apps: `realestate-user-service` and `realestate-property-service`.
2.  Add PostgreSQL add-on to both apps.
3.  **User Service**:
    - Set Config Vars:
        - `SPRING_DATASOURCE_URL`: (Auto-set by Heroku Postgres)
        - `JWT_SECRET`: Your secret key
    - Deploy using Docker or Maven plugin.
4.  **Property Service**:
    - Set Config Vars:
        - `SPRING_DATASOURCE_URL`: (Auto-set by Heroku Postgres)
        - `JWT_SECRET`: Same secret key as User Service
    - Deploy.

### Vercel / Netlify (Frontend)
1.  Connect GitHub repository.
2.  Set Build Command: `npm run build`.
3.  Set Output Directory: `dist`.
4.  **Environment Variables**:
    - `VITE_API_URL`: URL of your deployed User Service / Gateway.
    - Note: You might need to update `api.js` to use an environment variable for the base URL.

## CI/CD
- GitHub Actions workflow is configured in `.github/workflows/ci.yml`.
- It builds and tests all services on every push to `main`.
