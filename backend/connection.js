const mongoose = require('mongoose');

const dbname = "mernoctwss10";
const dbUrl = `mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// asynchronous function - return Promise
mongoose.connect(dbUrl)
.then((result) => {
    // then will be excuted on connection success
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    // catch will be executed on failure
    console.log(err);
});

module.exports = mongoose;