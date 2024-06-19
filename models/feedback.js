const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
    instruction: setup the feedback schema according to the following requirements:
    - event: (ObjectId, ref: 'Event', required)
    - attendeeName: (String, required)
    - comment: (String)
*/

const feedback = feedback({
  event: {
    type: objectId,
    ref: "Event",
    required: true,
  },
  attendeeName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});


module.exports = feedback;