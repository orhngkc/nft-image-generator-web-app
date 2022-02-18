var express = require('express');
var router = express.Router();
const controller = require('../controllers/generator');

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/api/v1/generate', controller.generateImage);

module.exports = router;