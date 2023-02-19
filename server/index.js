const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


// included all the models to keep it sync
const db = require('./models');

// Routers 
const postRouter = require('./routes/Posts');

app.use("/posts", postRouter);

// code to keep db sync when ever the application started
db.sequelize.sync().then((resp) =>{
    app.listen(3001, () => {
        console.log("server is running on port 3001");
    }); 
});