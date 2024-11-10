
# Aptiglide - Aptitude & Test Website

Aptiglide is a web application designed for aptitude tests, quizzes, and practice exams. It provides an interactive platform for users to improve their aptitude skills with various test modules. The app features a React frontend built with Vite for fast performance, and a Spring Boot backend for efficient API management and data handling.

## Features

- **Aptitude Tests**: Offers a range of aptitude tests covering topics like reasoning, mathematics, and verbal ability.
- **User Authentication**: Secure login and registration system for users to track their progress.
- **Real-Time Test Results**: Users get immediate feedback after completing a test, with detailed scores and explanations.
- **Test Scheduling**: Allows users to schedule and attempt tests at their convenience.
- **Admin Panel**: Admins can create, modify, and delete tests, questions, and view user statistics.
- **Leaderboard**: Displays top performers and encourages healthy competition among users.
- **Responsive Design**: The website is fully responsive and works well on desktops, tablets, and mobile devices.

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token) for secure login
- **Styling**: Tailwind CSS

## Installation

### 1. Clone the Repository
   Clone both the frontend and backend repositories into your local machine.
   
   For frontend:
   ```bash
   git clone https://github.com/yourusername/aptiglide-frontend.git
   cd aptiglide-frontend
   ```

   For backend:
   ```bash
   git clone https://github.com/yourusername/aptiglide-backend.git
   cd aptiglide-backend
   ```

### 2. Frontend Setup (React with Vite)

1. **Install Dependencies**:
   Ensure you have Node.js and npm/yarn installed. Then install the required packages:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   Start the Vite development server:
   ```bash
   npm run dev
   ```

   The frontend will be accessible at `http://localhost:3000` by default.

### 3. Backend Setup (Spring Boot)

1. **Install Dependencies**:
   Ensure you have Java 11 or later installed. You can verify it with the following command:
   ```bash
   java -version
   ```

2. **Run the Spring Boot Application**:
   Navigate to the backend directory and run the application using Maven or Gradle:
   ```bash
   ./mvnw spring-boot:run
   ```

   The backend will be accessible at `http://localhost:8080` by default.

### 4. Database Configuration

1. **Create a MySQL Database**:
   Create a MySQL database named `aptiglide_db` or any name you prefer.

2. **Configure Database**:
   Open `src/main/resources/application.properties` and configure your database connection details:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/aptiglide_db
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword
   ```

3. **Run Database Migrations**:
   If using Flyway or Liquibase for database migrations, run the migrations to create tables and initial data.

### 5. JWT Authentication Setup

- **Frontend**: Ensure the frontend is configured to use JWT tokens for secure login.
- **Backend**: The backend will generate and validate JWT tokens for each user session.

## Usage

1. **Sign Up / Log In**:
   Users can register by providing their basic details or log in using existing credentials. After login, they can access available tests and track their scores.

2. **Start a Test**:
   Users can select a test from the list, start it, and answer multiple-choice or fill-in-the-blank questions. After completion, they will receive instant feedback and scores.

3. **Admin Panel**:
   Admins can manage tests, users, and see test analytics through a protected admin panel.

## API Documentation

The backend provides several RESTful APIs for interaction with the frontend. Here are a few important endpoints:

- **POST /api/auth/login**: Authenticate a user and return a JWT token.
- **GET /api/tests**: Retrieve a list of available tests.
- **POST /api/tests**: Admin endpoint to create a new test.
- **GET /api/tests/{id}**: Retrieve details of a specific test.
- **GET /api/users/{id}/scores**: Fetch the test scores of a specific user.

API responses are in JSON format.

## Running in Production

For running Aptiglide in a production environment:

1. **Build Frontend**:
   Build the frontend using Vite's production build command:
   ```bash
   npm run build
   ```

2. **Deploy Backend**:
   Deploy the Spring Boot backend to your production server. Ensure the database is properly configured in the production environment.

3. **Set Up Reverse Proxy**:
   Set up a reverse proxy (e.g., Nginx) to serve both the frontend and backend in production.

4. **SSL Configuration**:
   Ensure SSL certificates are configured to secure the application.

