// import mongoDB and express
import express from "express";
import mongoose from "mongoose";

import {urlShort, getOriginalUrl} from "./controllers/url_ctrl.js";

const app = express();

app.use(express.urlencoded({extended: true}));

// MongoDB connection
mongoose
  .connect("mongodb+srv://gdattaram39_db_user:EEKy6J1Cp9VlbZrf@cluster0.gk2xeer.mongodb.net/",
    {
      "dbName": "nodejs_exp_api_db"
    })
  .then(()=> console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB connection failed:", err));


app.get('/', (req,res) =>{
  res.render("server.ejs", {shortUrl: null})
});

//handle url after submit 
app.post('/Shorten', urlShort);

//redirecting to original url using dynamic routing
app.get('/:shortCode', getOriginalUrl);

//port number initialization
const PORT = 4040;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);  
});