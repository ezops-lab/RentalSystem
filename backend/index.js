// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Sample Route
app.get('/', (req, res) => {
    res.send('Rental Platform API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/*
# Runbook: How to Set Up This Application

## Prerequisites
- Install Node.js (https://nodejs.org/)
- Install MongoDB (https://www.mongodb.com/)
- Create a `.env` file in the `backend` directory and add:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
4. Verify the API is running by visiting `http://localhost:5000/` in a browser or using Postman.
*/
