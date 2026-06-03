# Purrfect Match 🐱

A web application that matches potential cat owners with cats from local shelters
based on their lifestyle and preferences.

## About

Users complete a short quiz about their household and lifestyle. The app then
queries a database of shelter cats (these cat profiles are created for this project to visualize and show the concept, since it is not possible to fetch the data from a shelter) and returns the best matches based on energy level and household compatibility. Each cat profile includes a name, age, breed, personality traits, goodWith/compatibility, energy level, shelter, description and a photo.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MongoDB Atlas
- **External API:** The Cat API (used to source cat breed images)

## Project Structure
web_miniProject/
├── backend/
│   ├── models/
│   │   └── cat.js        # Mongoose schema for cat profiles
│   ├── routes/
│   │   └── cats.js       # API routes
│   ├── .env              # Environment variables 
│   └── server.js         # Express server entry point 
└── frontend/
    └── src/
        ├── components/
        │   ├── Home.js   # Landing page
        │   ├── Quiz.js   # Lifestyle questionnaire
        │   └── Results.js # Matched cat profiles
        └── App.js        # Main component and routing

## Prerequisites

- Node.js (v18 or higher)
- A MongoDB Atlas account with a cluster set up
- A `.env` file in the `/backend` folder (see below)

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd web_miniProject
```

### 2. Set up the backend

```bash
cd backend
npm install
```

## Test Credentials
For evaluation purposes, I have crated a new user in the MongoDB Atlas, so the data is accessible. 
Therefore the .env is pushed and easily acessible for examination purposes. 

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

### 4. Run the application

You need two terminals running simultaneously.

**Terminal 1 — Backend:**
```bash
cd backend
node server.js
```

The backend will start on `http://localhost:3001`

**Terminal 2 — Frontend:**
```bash
cd frontend
npm start
```

The frontend will open automatically at `http://localhost:3000`

## Usage

1. Open `http://localhost:3000` in your browser
2. Click **Find My Match** on the home page
3. Answer the three questions about your household
4. View your matched cats!

## Notes

- The database is hosted on MongoDB Atlas — an internet connection is required.
- Cat images were sourced from The Cat API and stored directly in the database.
- The README file was created with help from Claude.ai to make sure everything relevant was included. 