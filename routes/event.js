const express = require("express");
const router = express.Router();

// instruction: import all the necessary functions from controllers/event.js
const {
  getEvents,
  getEvent,
  AddNewEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event");
const {
  getFeedbacksByEvent,
  AddNewFeedback,
} = require("../controllers/feedback");

// instruction: import all the necessary functions from controllers/feedback.js

// instruction: `GET /events`: List all events

router.get("/", async (res, req) => {
  try {
    res.status(200).send(await getEvents(req.query.category));
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `GET /events/:id`: Get a specific event by its id
router.get("/:id", async (req, res) => {
  try {
    const event = await getEvent(req.params.id);
    if (event) {
      res.status(200).send(event);
    } else {
      res.status(400).send({ message: "Not Found!" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `POST /events`: Add a new event

router.post("/", async (req, res) => {
  try {
    const {
      title,
      organizer,
      date,
      location,
      category,
      description,
      attendeeCount,
    } = req.body;
    const AddNewEvent = await addEvent(
      title,
      organizer,
      date,
      location,
      category,
      description,
      attendeeCount
    );
    res.status(200).send(newEvent);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `PUT /events/:id`: Update an event

router.put("/:id", async (req, res) => {
  try {
    const {
      title,
      organizer,
      date,
      location,
      category,
      description,
      attendeeCount,
    } = req.body;
    const updatedEvent = await updateEvent(
      req.params.id,
      title,
      organizer,
      date,
      location,
      category,
      description,
      attendeeCount
    );
    res.status(200).send(updatedEvent);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `DELETE /events/:id`: Delete an event
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteEvent(id);
    res.status(200).send({ message: `Event #${id} has been deleted.` });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `GET /events/:id/feedback`: Get all feedback for a specific event by its id
router.get("/:id", async (req, res) => {
  try {
    const feedback = await getFeedbacksByEvent(req.params.id);
    if (feedback) {
      res.status(200).send(feedback);
    } else {
      res.status(404).send({ message: "Feedback not found!" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `POST /events/:id/feedback`: Add feedback for a specific event by its id
router.post("/", async (req, res) => {
  try {
    const { event, attendeeName, comment } = req.body;
    const newFeedback = await AddNewFeedback(event, attendeeName, comment);
    res.status(200).send(newFeedback);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = router;
