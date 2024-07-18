const fs = require('fs');

//exits demo
fs.exists('./Export.js' , (exits)=>{
    console.log(exits ? "Found" : "Not found");
})

//stat demo

fs.stat('Export.js' , (err , data)=>{
    console.log(data);
})

//readfile Asynchronize
fs.readFile('text2.txt' , (err , data)=>{
    console.log(data.toString());
})

//synchronous
const data = fs.readFileSync('text3.txt');
console.log(data.toString());

//write file

// fs.writeFile('text.txt' , 'Nirav Vaghasia' ,(err , data)=>{
//     console.log("Added sucessfully");
// })

// //appendfile


// fs.appendFile('text.txt' , ' darshan university' ,(err , data)=>{
//     console.log("Append sucessfully");
// })


// fs.unlink('text2.txt'  ,(err , data)=>{
//     if(err){throw err}
//     console.log("File deleted sucessfully");
// })




