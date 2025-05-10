const express = require('express');
const {createEvent, getAllEvents, getEventById}= require('../controllers/eventController.js');
const {protect, adminOnly} = require('../middlewares/authMiddleware.js'); 

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', protect,adminOnly, createEvent);

module.exports = router;

