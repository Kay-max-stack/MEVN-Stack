const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('../routes/routes');
const  mongoose  = require('mongoose');
require('dotenv').config();

const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use('/api/mevn',apiRoutes )

const port = process.env.PORT || 4560;

mongoose.connect(`${process.env.db}`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  app.listen(port, () => {
    console.log(`Node listening on ${port}`);
  });
})
.catch((err) => {
  console.log(err);
});

