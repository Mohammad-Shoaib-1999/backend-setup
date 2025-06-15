// index.js
const express = require("express");
const sequelize = require("./config/database");
const User = require("./models/User");
const app = express();
app.use(express.json());



require("dotenv").config();
app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);


const port = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    return sequelize.sync();
  })
  .then(() => {
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
console.log('Database host:', process.env.DB_HOST);

module.exports = app;
