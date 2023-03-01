const mongoose = require('mongoose');

const connectMongoDatabase = async () => {
  try {
    const connectDatabase = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB connected: ${connectDatabase.connection.host}`.brightGreen
        .underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectMongoDatabase;
