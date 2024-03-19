const express = require('express');
const { updateBasicEtiquette, getBasicEtiquette} = require('../controller/basicEtiquetteController');
const { updateMemoryTest } = require('../controller/memoryTestController');
const { updateSpeechTraining } = require('../controller/speechTrainingController');
const router  = express.Router();

router.post('/basicetiquette', updateBasicEtiquette);
router.post('/memorytest',updateMemoryTest);
router.post('/speechtraining', updateSpeechTraining);
router.get('/getbasicetiquette/:username', getBasicEtiquette)

module.exports = router;