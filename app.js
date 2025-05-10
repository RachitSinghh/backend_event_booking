const express = require('express'); 
const cors = require('cors');
const authRoute = require('./src/routes/authRoutes.js');
const eventRoutes = require('./src/routes/eventRoutes.js');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/events', eventRoutes);
app.get('/', (req,res) => res.send('Event Booking API is live'));

module.exports = app; 

