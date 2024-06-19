const express = require("express");
const router = express.Router();

// instruction: import all the necessary functions from controllers/organizer.js
const {
    getOrganizers,
    getOrganizer,
    AddNewOrganizer,
    updateOrganizer,
    deleteOrganizer,
  
} = require("../controllers/organizer");

// instruction: `GET /organizers`: List all organizers
router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getOrganizers(req.query.name));
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// instruction: `GET /organizers/:id`: Get a specific organizer by its id
router.get("/:id", async (req, res) => {
  try {
    const organizer = await getOrganizer(req.params.id);
    if (organizer) {
      res.status(200).send(organizer);
    } else {
      res.status(404).send({ message: " Not Found!" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// instruction: `POST /organizers`: Add a new organizer
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const AddNewOrganizer = await AddNewOrganizer(
      name,
      bio,
      contact,
      eventOrganized
    );
    res.status(200).send(AddNewOrganizer);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `PUT /organizers/:id`: Update an organizer
router.put("/:id", async (req, res) => {
  try {
    const { name, bio, contact, eventOrganized } = req.body;
    const updatedOrganizer = await updateOrganizer(
      req.params.id,
      name,
      bio,
      contact,
      eventOrganized
    );
    res.status(200).send(updatedOrganizer);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `DELETE /organizers/:id`: Delete an organizer
router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await deleteOrganizer(id);
      res.status(200).send({ message: `organizer #${id} has been deleted.` });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });


module.exports = router;
