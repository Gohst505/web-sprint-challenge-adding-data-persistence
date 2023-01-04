exports.seed = function(knex){
    knex('projects').truncate();
    return knex('projects').insert([
        //May have to change description
        {project_name: 'Server', project_description: 'Connect Routers'},
        {project_name: 'Sprint 14', project_description: 'Complete Sprint', project_completed: 1}
    ])
};