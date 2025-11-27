import {url} from "../models/url_model.js";
import shortid from "shortid";

export const urlShort = async (req, res) =>{
  const longUrl = req.body.longUrl; // longUrl ==> server.ejs (name="longUrl")
  const shortCode = shortid.generate();
  const shortUrl = `http://localhost:4040/${shortCode}`;

  //save to DB
  const newUrl = new url({
    longUrl: longUrl,    
    shortCode: shortCode
  });
  await newUrl.save();

  console.log("url shorten successfully! ", newUrl);
  
  res.render("server.ejs", {shortUrl: shortUrl});
};

export const getOriginalUrl = async (req, res)=>{
  const shortCode = req.params.shortCode; //shortCode-->index.js (app.get('/:shortCode', shortUrl);)

  //finding on DB
  const urlRecord = await url.findOne({shortCode}); //findOne()--> use to find anything in DB

  if(urlRecord){
    res.redirect(urlRecord.longUrl);
  }else{
    res.status(404).send("URL not found!")
  }
}