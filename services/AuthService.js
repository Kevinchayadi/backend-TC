require("dotenv").config();

const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { hashPassword, comparePassword } = require("../utils/password");
//const {google} = require('googleapis')

const logger = require("../utils/logger");

// const oauth2Client = new google.auth.OAuth2 (
//     process.env.GOOGLE_CLIENT_ID,
//     process.env.GOOGLE_CLIENT_SECRET,
//     process.env.GOOGLE_CLIENT_CALLBACK
// )

// const scopes = [
//     'https://www.googleapis.com/auth/userinfo.email',
//     'https://www.googleapis.com/auth/userinfo.profile'
// ]

// const authorizationUrl = oauth2Client.generateAuthUrl({
//     access_type : 'offline',
//     scope : scopes,
//     include_granted_scopes : true
// })

class AuthService {
  static async signup(userData) {
    const hashedPassword = await hashPassword(userData.password);
    console.log(hashedPassword);

    const newUser = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    };

    try {
      return await UserModel.signup(newUser);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
}

module.exports = AuthService;
