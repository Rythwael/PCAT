const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema (şablon)
const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/*Photo.create({
    title: "Photo Title 3",
    description: "Third Photo's Description"
});*/

//read photo
//Photo.find({},(err,data)=>{console.log(data);});

//update photo
/*const id = "61682add4d98eb6cb8a6c470";
Photo.findByIdAndUpdate(
    id, {
        title: "First Photo's title updated.",
        description: "First Photo's description updated."
    },
    {
        new: true //otherwise console.log(data) gives old data
    },
    (err,data) => {console.log(data)}
)*/

//delete photo
const id = "61682d6d920c86be5ab06eae";
Photo.findByIdAndDelete(id,(err,data)=>{console.log('Photo is deleted.')});

