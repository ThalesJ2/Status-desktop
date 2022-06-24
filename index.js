const express = require("express");
const  os = require('os');
const app = express();


app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{

    const {arch ,platform ,totalmem , freemem,uptime} = os;
    const tRam = totalmem()/1024/1024;
    const fRam = freemem()/1024/1024;
    const usada = (fRam/tRam)*100;
    const tempo = uptime/3600;

    const status = {
       OS:platform(),
       Arch: arch,
       TotalRam: parseInt(tRam),
       FreeRam: parseInt(fRam) ,
       usada: usada.toFixed(2),
       tempo:tempo.toFixed(0)
    }

    let ola = "thales";
    res.render("index",{
        status: status, 
        ola:ola
    });
});


app.listen(4008,()=>{

});