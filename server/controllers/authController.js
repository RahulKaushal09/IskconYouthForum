const authService = require("../services/authService");
const devoteeService = require("../services/devoteeService");

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
        httpOnly: true,
      });
      res
        .status(200)
        .json({ success: true, token: response.token, role: response.role });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  },
  userVerification: async (req, res) => {
    try {
      const { token } = req.body;
      const decodedToken = await authService.userVerification(token);
      if (decodedToken) {
        const devotee = await devoteeService.findDevoteeByid(decodedToken.id);
        if (!devotee) {
          res.status(404).json({ status: false });
        } else {
          res.status(200).json({ status: true });
        }
      }
      res.status(401).json({
        status: false,
        error: "Invalid JWT token",
        message:
          "The provided JWT token is either expired or invalid. Please authenticate with a valid token.",
      });
    } catch (error) {}
  },
};

module.exports = AuthController;
