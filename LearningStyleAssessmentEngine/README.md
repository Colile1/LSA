# Learning Style Assessment Engine

This directory contains the complete **Learning Style Assessment Engine**, a standalone module designed for the **4C Learning System**. It is a full-stack application composed of a React frontend and a Node.js/Express backend that work together to deliver a comprehensive learning style analysis.

## Overview

The purpose of this module is to identify a user's preferred learning style through a multi-faceted assessment. It goes beyond a simple questionnaire to capture a nuanced understanding of the user by analyzing their preferences, behaviors, and background. The engine provides a preliminary analysis and is designed to feed its data to a more advanced Machine Learning module for generating adaptive learning recommendations.

### Features

-   **Multi-Component Assessment**: The assessment is composed of five distinct sections:
    1.  **VARK Questionnaire**: Identifies basic sensory preferences (Visual, Aural, Read/Write, Kinesthetic).
    2.  **Programming Scenario Test**: Assesses problem-solving approaches in realistic coding situations.
    3.  **Learning Preference Survey**: Gathers self-reported attitudes towards different learning strategies using a Likert scale.
    4.  **Interactive Learning Exercises**: Observes user behavior by tracking their choices in small, practical tasks.
    5.  **Background Questionnaire**: Collects demographic and experiential data for contextual analysis.
-   **Weighted Scoring**: A recommendation engine calculates a weighted score from the first three components to determine a primary learning style.
-   **In-Memory Database**: A mock database service allows for full end-to-end testing without external dependencies. Results are stored for the duration of the server session.
-   **RESTful API**: A clean, well-defined API connects the frontend and backend.
-   **Modular and Extensible**: Built with a clear separation of concerns, making it easy to maintain, test, and integrate.

---

## Technical Stack

-   **Frontend (`LSA_frontend/`)**:
    -   **Framework**: React
    -   **HTTP Client**: Axios
    -   **Package Manager**: npm
-   **Backend (`LSA_backend/`)**:
    -   **Framework**: Node.js with Express
    -   **Middleware**: CORS, Body-Parser
    -   **Package Manager**: npm

---

## Getting Started

To run the Learning Style Assessment Engine, you must start both the backend and frontend servers.

### Prerequisites

-   Node.js (v14 or later)
-   npm (v6 or later)

### 1. Backend Setup

First, navigate to the backend directory and install its dependencies.

```
cd LearningStyleAssessmentEngine/LSA_backend
npm install
```

Once the installation is complete, start the development server:

```
npm run dev
```

The backend API will now be running and listening on **`http://localhost:3000`**. The `dev` script uses `nodemon` to automatically restart the server when you make changes to the code.

### 2. Frontend Setup

In a **new terminal window**, navigate to the frontend directory and install its dependencies.

```
cd LearningStyleAssessmentEngine/LSA_frontend
npm install
```

Once the installation is complete, start the React development server:

```
npm start
```

The frontend application will automatically open in your default web browser, typically at **`http://localhost:3001`**.

---

## How to Connect to the 4C Learning System

This module is designed to be integrated into the main 4C Learning System application. Here is the connection strategy:

1.  **Serving the Frontend**: The `LSA_frontend` can be built into a static bundle by running `npm run build`. The resulting `build` directory can be served by the main application's web server under a specific route (e.g., `/assessment`). Alternatively, the React components can be imported and rendered directly within the main application's UI.

2.  **Accessing the Backend API**: The `LSA_backend` should be deployed as a microservice. The main application can then interact with it via its exposed API endpoints. The `baseURL` in `LSA_frontend/src/services/api.js` should be updated to point to the deployed backend URL.

3.  **Data Flow to ML Module**:
    -   After a user completes the assessment, the frontend receives a `finalResult` object from the `LSA_backend`.
    -   The frontend should then send this `finalResult` object to the `/api/ml/analyze` endpoint.
    -   This endpoint is a proxy that will forward the complete, structured data to the separate Machine Learning module for advanced processing and the generation of a detailed, adaptive learning path.

4.  **Database Integration**:
    -   The current in-memory database (`LSA_backend/src/services/databaseService.js`) must be replaced with a connection to the main application's persistent database (e.g., PostgreSQL, MongoDB).
    -   This involves updating the `saveResult`, `getResultById`, and `getAllResults` functions to interact with the chosen database schema. The assessment results should be linked to a `userId` from the main application's user table.

---

## API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint                    | Description                                                  |
| :----- | :-------------------------- | :----------------------------------------------------------- |
| `GET`  | `/api/assessment/vark`      | Fetches all questions for the VARK section.                  |
| `GET`  | `/api/assessment/scenarios` | Fetches all questions for the Programming Scenarios section. |
| `GET`  | `/api/assessment/preferences`| Fetches all questions for the Learning Preferences section.  |
| `GET`  | `/api/assessment/interactive`| Fetches all exercises for the Interactive section.           |
| `GET`  | `/api/assessment/background`| Fetches all questions for the Background section.            |
| `POST` | `/api/results/submit`       | Submits all user answers and returns a preliminary analysis. |
| `GET`  | `/api/results`              | Retrieves all results stored in the in-memory database.      |
| `GET`  | `/api/results/:id`          | Retrieves a single result by its ID.                         |
| `POST` | `/api/ml/analyze`           | A proxy endpoint to forward results to the ML module.        |

EOF
)
