require('dotenv').config()
const express = require('express')
const app = express.Router()
const mongo = require('../models/mongo')
const { v4: uuidv4 } = require('uuid')



module.exports = app