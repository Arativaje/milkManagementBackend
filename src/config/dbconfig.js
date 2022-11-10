const mongoose = require('mongoose');
const logger = require('../logger/logger');

const connect = () =>{
    const url=process.env.MONGO_URL;
    //console.log(url);
    mongoose.connect(url);

    mongoose.connection.once("open", async () => {
        logger.info("Connected to database");
    });
      
    mongoose.connection.on("error", (err) => {
        logger.info("Error connecting to database  ", err);
    });
}

module.exports={
    connect
}