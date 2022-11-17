const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect("MONGODB_URL", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connected with a success"))
    .catch((err) => {
      console.log("DB connected Failed");
      console.log(err);
      process.exit(1);
    });
};
