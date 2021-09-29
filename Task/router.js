const router = require("express").Router()
const knex = require('./database')

// Insert data into user table
router.post('/registration', (req, res) => {
    // console.log(req.body,"body")
    const user_data = {
        Name: req.body.Name,
        Email: req.body.Email,
        password: req.body.password
    }
    knex('user').insert(user_data)
        .then((data) => {
            console.log(data, ' create! sucssfully...')
            res.send({
                "statusCode": 200,
                "message": "user data has inserted sucssfully"
            })
        }).catch((er) => {
            console.log(er, "error");
            res.send({ "statusCode": 404 })
        })

})

// inserting data into new-user-post table:-
router.post('/new-user-post',(req,res)=>{
    const user_post_data = {
        ImgUrl:req.body.ImgUrl,
        date:req.body.date,
        captionForImg:req.body.captionForImg
    }
    knex('user_post').insert(user_post_data)
        .then((data)=>{
            // console.log(data)
            res.send({
                "statusCode": 200,
                "message": "new-user-post data has inserted sucssfully"
            })
        }).catch((err)=>{
            res.send({ "statusCode": 404 })
        })
    
})

// updating data in user table:-
router.put('/profile-edit/:userid', (req, res) => {
    knex.update(
        req.body
    )
        .table('user').where('userid', req.params.userid)
        .then((data) => {
            console.log(data)
            res.send({"statuscode":200,"message":'user data edit sucessfully....!!'})
        })
        .catch((err) => {
            res.send({"statuscode":400})
        })
})
// updating mew-user-data :-
router.put('/edit-user-post/:userId',(req,res)=>{
    knex.update(
        req.body
    )
        .table('user_post').where('userId',req.params.userId)
        .then((data)=>{
            console.log(data)
            res.send({"statuscode":200,"message":'new user post data edit sucessfully....!!'})
        })
        .catch((err)=>{
            res.send({"statuscode":200})
        })
})
// Deleting   data from user table:-
router.delete('/delete-user/:userid',(req,res)=>{
    knex('user')
    .where({'userid':req.params.userid}).del()
    .then((data)=>{
        console.log(data)
        res.send({"statuscode":200,"message":'new user  data deleted sucessfully....!!'})
    })
    .catch((err)=>{
        res.send(send({"statuscode":404}))
    })
})
        
// deleting new user-post data table:-
router.delete('/delete-user-post/:userId',(req,res)=>{
    knex('user_post')
    .where({'userId':req.params.userId}).del()
    .then((data)=>{
        res.send({"statuscode":200,"message":'new user post data deleted sucessfully....!!'})
    })
    .catch((err) => {
        res.send({"statuscode":404})
    })
})
module.exports = router;