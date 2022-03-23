import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/jinder?authSource=admin'

const connect = async () => {
  console.log('Connecting to database');
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected successfully to database');
  } catch (e) {
    console.error('Error connecting to database', e);
    throw e;
  }
};

export { connect };
