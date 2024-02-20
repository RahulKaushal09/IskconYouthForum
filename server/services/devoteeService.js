const Devotee = require("../models/Devotee");

const DevoteeService = {
  getAllDevotees: async () => {
    return await Devotee.find();
  },
  addDevotee: async (devoteeData) => {
    try {
      const newDevotee = new Devotee(devoteeData);
      await newDevotee.save();
      return newDevotee;
    } catch (error) {
      throw new Error(`Could not add devotee: ${error.message}`);
    }
  },
  findDevoteeByid: async (id) => {
    const devotee = await Devotee.findById(id);
    return devotee;
  },
};

module.exports = DevoteeService;
