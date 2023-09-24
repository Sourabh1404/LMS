const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sourabh99541:9707748811@cluster0.acr65m8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
