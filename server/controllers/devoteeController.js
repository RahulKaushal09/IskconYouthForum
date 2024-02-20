const devoteeService = require("../services/devoteeService");

const DevoteeController = {
  getAllDevotees: async (req, res) => {
    try {
      const devotees = await devoteeService.getAllDevotees();
      res.json(devotees);
    } catch (error) {
      res.status(500).json({ error: error.message });
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
