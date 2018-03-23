const express = require('express');
const populate = require('../Elastic')
const router = express.Router();

// Route: BASE_URL/populate

router.get('/', (req, res) => {
    res.send('<p> Indexing data </p>');
    populate.insertElastic();
    console.log("done");
});

module.exports = router;