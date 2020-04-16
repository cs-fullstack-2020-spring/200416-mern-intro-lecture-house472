let express = require('express');
let router = express.Router();

router.use(express.json());

let Moviecollection = require('../models/MovieSchema')
router.get('/', (req, res)=>{
    // res.send('get request works')
Moviecollection.find({}, (errors, results)=>{
    errors ? res.send(errors) : res.send(results)
})
});

router.post('/', (req, res)=>{
    // res.send('post request works')
    Moviecollection.create(req.body, (errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    })      
});

module.exports = router;