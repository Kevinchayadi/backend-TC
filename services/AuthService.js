require('dotenv').config();

const AuthModel = require('../models/AuthModel')
const express = require('express');
const app = express();
const joi = require('joi');
const jwt= require('jsonwebtoken');
const multer = require('multer')
const {google} = require('googleapis')

const logger = require('../utils/logger')
const pinoHttp = require("pino-http");
 
app.use(pinoHttp({ logger }));

app.use(express.json());

const oauth2Client = new google.auth.OAuth2 (
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_CLIENT_CALLBACK
)

const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
]

const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type : 'offline',
    scope : scopes,
    include_granted_scopes : true
})

module.exports = AuthService;
