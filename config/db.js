const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.wx7x5.mongodb.net/social-network",
        //mongodb + srv://lepic974:<password>@cluster0.wx7x5.mongodb.net/test
        //"mongodb+srv//process.env.DB_USER_PASS@cluster0.wx7x5.mongodb.net/social-network",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("Connected to MangoDB"))
    .catch((err) => console.log("Failed to connect to MangoDB", err));