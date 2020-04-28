const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database

connectDB();

//middleware(calling external body-parser module is not required here to read request body as it has been included in new express version)

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('ApI Running'));

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));
