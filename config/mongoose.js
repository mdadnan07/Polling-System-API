const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Polling_System');


const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}



// mongoose
//     .connect(url,connectParams)
//     .then(()=>{
//         console.info("yeah successfully connected to mongodb")
//     })
//     .catch((err)=>{
//         console.log('error in mongodb',err);
//     })

// ------------------------------------------------------------------------------------

// ----->this the code for manually using the mongodb of local system

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = db;