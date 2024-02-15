// models/Reminder.js
const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true }
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
