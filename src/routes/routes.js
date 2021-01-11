const express = require('express');
const routes = express.Router();

const billetController = require('../controllers/billet.controller');

routes.get('/boleto/:boleto', billetController.validadeBillet);

module.exports = routes; 