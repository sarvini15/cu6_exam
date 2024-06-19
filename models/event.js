const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
    instruction: setup the event schema according to the following requirements:
    - title: (String, required)
    - organizer: (ObjectId, ref: 'Organizer', required)
    - date: (Date, required)
    - location: (String, required)
    - category: (String)
    - description: (String)
    - attendeeCount: (Number, default: 0) - The number of attendees
*/

const event = Event({
  title: {
    type: String,
    required: true,
  },

  organizer: {
    type: ObjectId,
    ref: "Organizer",
    required: true,
  },

  Date: {
    type: Date,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  attendeeCount: {
    type: Number,
    default: 0,
  },
});

module.exports = Event;
