const child_process = require('child_process');
child_process.exec("GTAVLauncher.exe.lnk" , (err , stdout , stdin)=>{
   
    if(err == null){
        console.log("Runned");
    }

})