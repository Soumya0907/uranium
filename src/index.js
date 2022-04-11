const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose} = require('mongoose');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Soumya0907:soumya09@cluster0.j4lvv.mongodb.net/Soumya0907?retryWrites=true&w=majority",{
    useNewUrlParser:true

})
.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
