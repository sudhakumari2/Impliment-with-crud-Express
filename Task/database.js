const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'Sudha@123',
        database: 'sudhakumari'
    }
});
knex.schema.hasTable("user").then(function (exits) {
    if (!exits) {

        return knex.schema.createTable("user", function (table) {
            table.increments('userid').primary();
            table.string("Name");
            table.string("Email");
            table.string("password");


        })
    }
    knex.schema.hasTable("user_post").then(function(exits){
    if(!exits){
        return knex.schema.createTable("user_post",function(table){
            table.increments('userId').primary();
            table.string('ImgUrl');
            table.integer('date');
            table.string('captionForImg')

        })
    }
    }).then((data)=>{
        console.log("user_post table has created")
    }).catch((err)=>{
        console.log("error")
    })

}).then((data) => {
    console.log("user table has created")
}).catch((err) => {
    console.log("error")
})
module.exports = knex;
