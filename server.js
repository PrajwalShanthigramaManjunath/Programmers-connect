const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//connect database

connectDB();

//middleware(calling external body-parser module is not required here to read request body as it has been included in new express version)

app.use(express.json({ extended: false }));

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

//To server static assets in production (for heroku deplyoment)
if (process.env.Node_ENV === 'production') {
  //Setting static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ${PORT}'));

app.set('port', PORT);
