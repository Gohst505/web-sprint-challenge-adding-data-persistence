// build your `Project` model here
//Databases needed for each model
const db = require('../../data/dbConfig');

async function find(){
    const projects = await db('projects').select('*')
    return projects.map(project =>{
        const {project_name, project_description, project_completed} = project;
        const obj = {
            project_name,
            project_description,
            project_completed: project_completed ? true : false
        }
        return obj;
    })
}

async function findById(id){
    const idArray = await db('projects')
    .where('project_id', id)
    .select('*')

    return idArray[0];
}

function post(project){
    return db('projects')
    .insert(project)
    .then(async ([id]) =>{
        
        const {project_name, project_description, project_completed} = await findById(id);
        const idArray = {
            project_name,
            project_description,
            project_completed: project_completed ? true : false
        }
        return idArray;
    })
}

module.exports ={
    find,
    post
}