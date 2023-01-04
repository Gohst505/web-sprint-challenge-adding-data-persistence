// build your server here and require it from index.js
const express = require('express');

const projectsRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const tasksRouter = require('./task/router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', tasksRouter);
module.exports = server;

server.use('/', (err, res) =>{
    res.status(err.status || 500).json({message: err.message});
})