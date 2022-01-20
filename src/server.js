import express from "express";


//import file
import initWebRoute from './route/web'
import configViewEngine from "./config/Viewengine";

const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

//setting route and viewEngine
configViewEngine(app);
initWebRoute(app);


const port = process.env.PORT || 3000;
var server = app.listen(port, () => {
    var host = server.address().address
    console.log(`Start at port ${port}`)
})