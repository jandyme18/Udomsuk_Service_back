const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('autoIndex', true);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@udomsukservice.vc0c6.mongodb.net/${process.env.DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => console.log('DB Connected'))

mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection open");
});

mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log(
            "Mongoose default connection disconnected through app termination"
        );
        process.exit(0);
    });
});