const authService = require("../services/authService");
const devoteeService = require("../services/devoteeService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const AuthController = {
  login: async (req, res) => {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(200).json({
          success: false,
        });
      }
      const response = await authService.login(req.body);
      if (!response) {
        return res.status(200).json({
          success: false,
        });
      }

      res.cookie("token", response.token, {
        withCredentials: true,
        httpOnly: false,
      });
      return res.status(201).json({
        success: true,
      });
    } catch (error) {
      return res.json({ success: false });
    }
  },
  userVerification: async (req, res) => {
    try {
      const token = req.headers["cookie"].split("=")[1];
      if (!token) {
        return res.json({ status: false });
      }

      const JWT_SECRET = process.env.JWT_SECRET;

      await jwt.verify(token, JWT_SECRET, async (err, data) => {
        if (err) {
          return res.json({ success: false });
        } else {
          const devotee = await devoteeService.findDevoteeByid(data.id);
          if (!devotee) {
            return res.json({ success: false });
          } else {
            res.status(200).json({ success: true });
          }
        }
      });
    } catch (error) {
      return res.json({ success: false });
    }
  },
};

module.exports = AuthController;
