const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("BBDD OK");
  } catch (error) {
    throw new Error("No se pudo conectar con la BBDD");
  }
};

module.exports = {
  dbConnection,
};
