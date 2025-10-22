🐾 Cat Facts API Proxy
A simple Node.js/Express server that fetches random cat facts from an external API, with rate limiting, logging, and environment variable support.

🚀 Features
🌐 Fetches random cat facts from a public API
🔒 Rate limiting to prevent abuse
🧾 Logging via Morgan for debugging
⚙️ Environment variables for flexible configuration

🛠️ Tech Stack
Node.js
Express
dotenv
morgan
express-rate-limit
(Built-in) fetch for API calls

📦 Dependencies
Package Purpose
express Web framework for Node.js
dotenv Loads environment variables from .env file
morgan Logs HTTP requests for debugging
express-rate-limit Prevents request abuse and DDoS attacks

Install dependencies
npm install express dotenv morgan express-rate-limit
⚙️ Environment Variables

Create a .env file in your project root and include:
PORT=3000
API=https://catfact.ninja/fact

📝 The API variable holds the URL of the external cat facts API (you can replace it with another endpoint if needed).

Run Locally
Clone the repository
git clone https://github.com/<your-username>/cat-facts-api.git
cd cat-facts-api

Install dependencies
npm install
Create a .env file

PORT=3000
API=https://catfact.ninja/fact

Start the server
node app.js
or (if you have nodemon installed):
npx nodemon app.js

Access the endpoint

GET http://localhost:3000/me

🧪 Example Response
{
"status": "success",
"user": {
"email": "dunamiseyi2019@gmail.com",
"name": "Omodara Seyitan Dunamis",
"stack": "Nodejs/Express"
},
"timestamp": "2025-10-22T09:00:00.000Z",
"fact": "Cats sleep 70% of their lives."
}

⚠️ Notes

Rate limit: 100 requests per 15 minutes per IP

If exceeded, the server returns:

{
"message": "Too many requests from this IP, please try again later."
}

Update the .env file to change the port or API endpoint without modifying code.
