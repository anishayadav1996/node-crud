import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors'; // Import CORS

const app = express();
app.use(bodyParser.json());
// CORS Configuration
app.use(cors({
    origin: '*', // Allow all origins (can specify a specific origin if needed)
    methods: ['GET', 'PUT','POST'], // Allow specific HTTP methods
    credentials: true,
}));

app.use('/api', userRoutes)





// app.get('/', (req, res) => {
//     res.send('Welcome to Node.js with MySQL and ES Modules!');
// });

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});