require("dotenv").config()
const express = require("express");
const port = 3000;
const app = express()

app.use(express.static("public"))
app.get("/home", async(req,res)=>{
    let name;
    let place_of_work;
    let location;
    let bio;
    let public_repository
    let image;
    const base = process.env.base_url
    try {
        response = await fetch(base)
        .then(res=>res.json())
        .then(data=>{
            name= data.name;
            place_of_work = data.company;
            location = data.location;
            bio = data.bio
            public_repository = data.public_repo
            image = data.avatar_url;
    })
    } catch (error) {
        console.log(error)
    }

    res.json({name, place_of_work, location, bio, public_repository, image})
})
app.listen(port, ()=>{
    console.log(`this app is running on ${port}`)
})