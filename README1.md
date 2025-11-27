# URL Shortener

A simple and efficient URL shortening application built with Node.js, Express, MongoDB, and EJS.

## Features

- Shorten long URLs into compact, shareable links
- Store shortened URLs in MongoDB
- Simple and intuitive web interface
- RESTful API endpoints for URL management

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine
- **Utilities**: Shortid for generating unique short IDs

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd URL-Shortner
   ```

2. Initialize the project and install dependencies
   ```bash
   npm init -y
   npm i express mongoose ejs
   npm i shortid
   ```

3. Configure your MongoDB connection in the application

4. Start the server
   ```bash
   npm start
   ```

## Project Structure

```
.
├── index.js              # Main application entry point
├── package.json          # Project dependencies and metadata
├── controllers/
│   └── url_ctrl.js      # URL controller logic
├── models/
│   └── url_model.js     # URL database schema and model
└── views/
    └── server.ejs       # EJS template for the web interface
```

## Usage

- Access the application in your browser at `http://localhost:3000`
- Enter a long URL and receive a shortened version
- Use the shortened URL to redirect to the original link

