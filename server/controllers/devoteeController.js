const devoteeService = require("../services/devoteeService");

const DevoteeController = {
  getAllDevotees: async (req, res) => {
    try {
      const devotees = await devoteeService.getAllDevotees();
      res.status(200).json(devotees);
    } catch (error) {
      res.json({ success: false });
    }
  },
  addDevotee: async (req, res) => {
    try {
      const newDevotee = await devoteeService.addDevotee(req.body);
      res.status(201).json(newDevotee);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = DevoteeController;
