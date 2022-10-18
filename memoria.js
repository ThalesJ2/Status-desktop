const os = require("os");

setInterval(()=>{
    const {arch ,platform ,totalmem , freemem} = os;
    const tRam = totalmem()/1024/1024;
    const fRam = freemem()/1024/1024;
    const status = {
       OS:platform(),
       Arch: arch(),
       TotalRam: parseInt(tRam),
       FreeRam: parseInt(fRam) 
    }
    console.clear(status);
    console.table(status);
    
    exports.status = status;
},1000);
