// build your `Task` model here
const db = require('../../data/dbConfig');

async function find(){
    const tasks = await db('tasks').select('*');
    const projects = await db('projects').select('project_id', 'project_name', 'project_description');
    
    return tasks.map(task =>{
        const {task_id, task_notes, task_description, task_completed, project_id} = task;
        const projectFilter = projects.filter(item => item.project_id === project_id);
        const {project_name, project_description} = projectFilter[0];
        const results ={
            task_id,
            task_description,
            task_notes,
            task_completed: task_completed ? true : false,
            project_name,
            project_description
        }
        return results;
    })
}

async function findById(id){
    const idArray = await db ('tasks')
    .where('task_id', id)
    .select("*")

    return idArray[0];
}

function post(task){
    return db('tasks')
    .insert(task)
    .then(async ([id]) =>{
        const {task_id, task_description, task_notes, task_completed, project_id} = await findById(id);
        const taskObj = {
            task_id,
            task_description,
            task_notes,
            task_completed: task_completed ? true : false,
            project_id
        }
        return taskObj;
    })
}

module.exports = {
    find,
    post
}
