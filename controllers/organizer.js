// instruction: import the organizer model
const organizer = require("../models/organizer");

const getOrganizers = async (name) => {
  // instruction: Write the codes to retrieve all organizers
  try {
    let filters = {};
    if (name) {
      filters.name = name;
    }
    const organizers = await organizer.find(filters).populate("name");
    return organizers;
  } catch (error) {
    throw new Error(error);
  }
};

const getOrganizer = async (id) => {
  // instruction: write the codes to retrieve a specific organizer
  const organizer = await organizer.findById(id);
  return organizer;
};

const AddNewOrganizer = async (name, bio, contact, eventsOrganized) => {
  // instruction: write the codes to add an organizer
  const NewOrganizer = new organizer({
    name,
    bio,
    contact,
    eventsOrganized,
  });
  await NewOrganizer.save();
  return newProduct;
};

const updateOrganizer = async (id, name, bio, contact, eventsOrganized) => {
  // instruction: write the codes to update an organizer
  const updatedOrganizer = await organizer.findByIdAndUpdate(
    product_id,
    {
      name,
      bio,
      contact,
      eventsOrganized,
    },
    { new: true } // send in the updated data
  );
  return updatedOrganizer;
};

const deleteOrganizer = async (id) => {
  // instruction: write the codes to delete an organizer
  return await organizer.findByIdAndDelete(id);
};

module.exports = {
  getOrganizers,
  getOrganizer,
  AddNewOrganizer,
  updateOrganizer,
  deleteOrganizer,
};
