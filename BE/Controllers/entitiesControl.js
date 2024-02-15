// controllers/entitiesController.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const Appointment = require('../models/Appointment');
const Reminder = require('../models/Reminder');

// Todo controller
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Appointment controller
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Reminder controller
router.get('/reminders', async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
