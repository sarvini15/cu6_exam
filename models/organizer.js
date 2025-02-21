const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
    instruction: setup the organizer schema according to the following requirements:
    - name: (String, required)
    - bio: (String) - A brief biography or description of the organizer
    - contact: (String) - Contact information for the organizer
    - eventsOrganized: (Number, default: 0) - A count of the number of events organized
*/

const Organizer = Organizer({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  contact: {
    type: String,
  },
  eventOrganized: {
    type: Number,
    default: 0,
  },
});

module.exports = Organizer;
