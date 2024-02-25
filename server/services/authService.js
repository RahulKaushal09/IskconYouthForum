const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");
const Devotee = require("../models/Devotee");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const AuthService = {
  login: async (loginData) => {
    try {
      const { email, password } = loginData;

      const devotee = await Devotee.findOne({ email });

      if (!devotee) {
        return false;
      }

      const auth = await bcrypt.compare(password, devotee.password);
      if (!auth) {
        return false;
      }

      const token = createSecretToken(devotee._id);
      const response = {
        token: token,
        success: true,
        role: devotee.role != null ? devotee.role : null,
      };
      return response;
    } catch (error) {
      throw new Error(`Unable to login: ${error.message}`);
    }
  },
  userVerification: async (token) => {
    try {
      const JWT_SECRET = process.env.JWT_SECRET;

      var decodedToken = await new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
          if (err) {
            return reject(err);
          } else {
            resolve(decoded);
          }
        });
      });
      return decodedToken;
    } catch (error) {
      return false;
    }
  },
};

module.exports = AuthService;
