import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import api_routes from './routes/api_routes.js';
import htmlRoutes from './routes/htmlRoutes.js';
const app = express();
// Static Middleware - Allows the client access to an entire folder and all of the files within that folder
// The static method creates a GET route for every file within the shared folder
app.use(express.static('../client/dist'));
// Load In Api Routes
app.use(api_routes);
// Load In HTML Routes
app.use(htmlRoutes);
// Start the server
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
