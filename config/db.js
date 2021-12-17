const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.wx7x5.mongodb.net/mem-project",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            // useFindAndModify: false,
        }
    )
    .then(() => console.log("Connected to MangoDB"))
    .catch((err) => console.log("Failed to connect to MangoDB", err));