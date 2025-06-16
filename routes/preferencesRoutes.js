const express = require('express');
const rounter = express.rounter();
const authMiddleware = require('../middleware/authMiddleware'); 
const preferencesController = require('../controllers/preferencesController'); 

rounter.get('/preferences', authMiddleware, preferencesController.getPreferences); 
rounter.put('/preferences', authMiddleware, preferencesController.updatePreferences);   

module.exports = rounter;
