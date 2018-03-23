const express = require('express')
const router = express.Router();

router.use('/populate', require('./populate'));
router.use('/suv', require('./suv'));

router.get('/', (req,res) => {
    res.send('<p> Try populte or suv in the url </p>');
});

module.exports = router;