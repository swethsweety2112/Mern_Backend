const mongoose = require('mongoose');  // connecting monogodb
const express = require('express');// connecting express
const cors = require('cors');//connecting crosss origin
const app = express();
const port = process.env.PORT || 5000;
//connecting with  mongodb compass
mongoose.connect('mongodb+srv://swethsweety2112:sweety21@home.xxrpqjm.mongodb.net/?retryWrites=true&w=majority&appName=home')
    //connectivity string =adress+data
    .then(() => {
        console.log('Connected to vcet database');
    })
    .catch((err) => {
        console.error(err);
    });
 
const UserSchema = new mongoose.Schema({
 
    // id: { type: Number },
    todo: { type: String },
    // age: { type: Number },
    // gender: { type: String },

});
 
const Collections = mongoose.model('happys', UserSchema);
 
app.use(express.json());
app.use(cors());
 
 
 
app.post('/posting', async (req, resp) => {
    try {  //postman-- req  - govandan
        const user = new Collections(req.body);
        const result = await user.save();
        const datasending = result.toObject();
        //text string
        // converting all datas to obj
        resp.send(datasending);
    } catch (e) {
        console.error(e);
        resp.status(500).send('Something Went Wrong');
    }
});
 
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});