// const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.render('home.pug', params);
});
app.get('/contact', (req, res) => {
    const params = {}
    res.render('contact.pug', params);
});
app.listen(port, () => {
    console.log(`Application started successfully on port ${port}`);
});

//mongoose stufff

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/contact1');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const contact = mongoose.model('contact', kittySchema);

app.post('/', (req, res) => {
   
    var pos=new contact(req.body);
    pos.save().then(()=>{
    res.status(200).send("data submitted successfully!");
    }).catch(()=>{
     res.status(400).send("Sorry,unable to submit data!");
    })


});



    






