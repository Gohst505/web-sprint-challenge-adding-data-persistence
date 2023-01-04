//Use the `data/migrations` folder to keep your migration(s) as per your knexfile
exports.up = function(knex){
    return knex.schema
    //might have to change table.text to table.varchar
    .createTable('projects', tbl =>{
        tbl.increments('project_id');
        tbl.varchar('project_name', 80).notNullable();
        tbl.varchar('project_description');
        tbl.boolean('project_completed').notNullable().defaultTo(0);
})
    .createTable('resources', tbl =>{
        tbl.increments('resource_id');
        tbl.varchar('resource_name', 80).unique().notNullable();
        tbl.varchar('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.varchar('task_description').notNullable();
        tbl.varchar('task_notes');
        tbl.boolean('task_completed').notNullable().defaultTo(0); 
        tbl.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('project_resources', tbl =>{
        tbl.increments();
     
        tbl.varchar('project_name')
        .references('project_name')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.varchar('project_description')
        .references('project_description')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.varchar('project_completed')
        .references('project_completed')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.varchar('resource_name')
        .references('resource_name')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex){
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};