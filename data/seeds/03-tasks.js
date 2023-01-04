exports.seed = function(knex){
    knex('tasks').truncate();
    return knex('tasks').insert([
        {task_description: 'Do foo', project_id: 0,},
        {task_description: 'Do bar', task_notes: 'Postman', project_id: 1 , task_completed: 1},
        {task_description: 'Do baz', task_notes: 'Functional', project_id: 2 , task_completed: 0},
    ])
}