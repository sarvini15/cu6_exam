// instruction: import the event model
const Event = require("../models/event");
const getEvents = async (category, title) => {
  // instruction: write the codes to retrieve all events (use `populate()` to get organizer details)
  try {
    let filters = {};
    if (category) {
      filters.category = category;
    }
    if (title) {
      filters.title = title;
    }

    const events = await Event.find(filters).populate("category", "title");
    return events;
  } catch (error) {
    throw new Error(error);
  }
};

const getEvent = async (id) => {
  // instruction: write the codes to retrieve a specific event (use `populate()` to get organizer details)
  const event = await Event.findById(id);
  return event;
};

const AddNewEvent = async (
  title,
  organizer,
  date,
  location,
  category,
  description,
  attendeeCount
) => {
  // instruction: write the codes to add a new event
  const AddNewEvent = new Event({
    title,
    organizer,
    date,
    location,
    category,
    description,
    attendeeCount,
  });
  await AddNewEvent.save();
  return newEvent;
};

const updateEvent = async (
  id,
  title,
  organizer,
  date,
  location,
  category,
  description,
  attendeeCount
) => {
  // instruction: write the codes to update an event
  const updatedEvent = await Event.findByIdAndUpdate(
    event_id,
    {
      title,
      organizer,
      date,
      location,
      category,
      description,
      attendeeCount,
    },
    { new: true } //send in the updated data
  );
  return updatedEvent;
};

const deleteEvent = async (id) => {
  // instruction: Write the codes to delete an event
  return await Event.findByIdAndDelete(id);
};

module.exports = {
  getEvents,
  getEvent,
  AddNewEvent,
  updateEvent,
  deleteEvent,
};
