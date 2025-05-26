const express = require('express')

const cors = require('cors');

const app = express();

const userRoutes = require('../src/routes/user.routes')

const PORT =  process.env.PORT ?? 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.use(express.json());

app.use('/users', userRoutes)

app.listen(PORT, ()=> {

    console.log(`servidor funcionando en http://localhost:${PORT}`)


})