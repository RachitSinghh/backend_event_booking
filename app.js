const express = require('express'); 
const cors = require('cors');
const authRoute = require('./src/routes/authRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);

app.get('/', (req,res) => res.send('Event Booking API is live'));

module.exports = app; 

