import mongoose from 'mongoose';

const connect = async () => {
  console.log('Connecting to database');
  try {
    await mongoose.connect('mongodb://127.0.0.1/jinder');
    console.log('Connected successfully to database');
  } catch (e) {
    console.error('Error connecting to database', e);
    throw e;
  }
};

export { connect };
