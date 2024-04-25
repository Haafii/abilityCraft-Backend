const express = require('express');
const { updateBasicEtiquette, getBasicEtiquette} = require('../controller/basicEtiquetteController');
const { updateMemoryTest, getMemoryTest } = require('../controller/memoryTestController');
const { updateSpeechTraining, getSpeechTraining } = require('../controller/speechTrainingController');
const router  = express.Router();

router.post('/basicetiquette', updateBasicEtiquette);
router.post('/memorytest',updateMemoryTest);
router.post('/speechtraining', updateSpeechTraining);
router.get('/getbasicetiquette/:username', getBasicEtiquette)
router.get('/getmemorytest/:username', getMemoryTest)
router.get('/getspeechtraining/:username', getSpeechTraining)



module.exports = router;