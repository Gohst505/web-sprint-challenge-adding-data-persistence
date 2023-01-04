// build your `Resource` model here
const db = require('../../data/dbConfig');

async function find(){
    const resources = await db('resources').select('*')
    return resources.map(resource =>{
        const {resource_id, resource_name, resource_description} = resource;

        const resourceObj = {
            resource_id,
            resource_name,
            resource_description
        }
        return resourceObj;
    })
}

async function findById(id){
    const idArray = await db('resources')
    .where('resource_id', id)
    .select('*')

    return idArray[0];
}

function post(resource){
    return db('resources')
    .insert(resource)
    .then(async ([id]) =>{
        const {resource_id, resource_name, resource_description} = await findById(id);
        const resourceObj = {
            resource_id,
            resource_name,
            resource_description
        }
        return resourceObj;
    })
}

module.exports ={
    find, 
    post
}