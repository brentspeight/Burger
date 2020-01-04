const express = require("express");

const router = express.Router();



// Import the model (cat.js) to use its database functions.
const burgers = require("../models/burgers.js");

router.get("/", function(req, res){
    console.log("get")
    burgers.all(function(data){
        console.log(data)
        let hbobj ={
            burgers: data
        }
        res.render("index", hbobj)
        // render index, pass an object with the data
    })

})

router.post("/api/burgers", function(req, res){
    console.log("POST:", req.body)
    //var name = req.body.name
    var name = req.body.name
    burgers.create(["burger_name", "devoured"],[name, false], function(data){
        console.log(data)
        res.json(data)
    })
})

router.put("/api/burgers/:id", function(req, res){
    const condition = "id=" + req.params.id
    burgers.update({devoured: true},condition,function(data){
        console.log(data)
        res.json(data)
    })
})

module.exports = router;