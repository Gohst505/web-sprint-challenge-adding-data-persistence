// build your `/api/resources` router here
const router = require('express').Router();
const Model = require('./model');

router.get('/', (req, res, next) =>{
    Model.find()
    .then(projects => res.json(projects))
    .catch(err => next(err))
})

router.post('/', (req, res, next) =>{
    return Model.post(req.body)
    .then(project => res.status(201).json(project))
    .catch(err => next(err))
})

module.exports = router;