import axios from 'axios';

// Set up a client for the Flask server
const flaskClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { flaskClient };