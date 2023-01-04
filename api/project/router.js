// build your `/api/projects` router here
//All routers need a get and post
const router = require('express').Router();
const Model = require('./model');

router.get('/', (req, res, next) =>{
    Model.find()
    .then(projects => res.json(projects))
    .catch(err => next(err))
})

router.post('/', (req, res, next) =>{//eslint disable-line
    const {project_name} = req.body;
    if(!project_name){
        res.status(404).json({message: 'Project name required'})
    }
    return Model.post(req.body)
    .then(project => res.status(201).json(project))
    .catch(err => next(err))
})



module.exports = router;