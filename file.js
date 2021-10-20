const fs = require('fs');

// read files
// fs.readFile('./docs/blogs1.txt',(err,data) =>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// });

// write files
// fs.writeFile('./docs/glogs1.txt', 'Helyyy',() =>{
//     console.log('file was written')
// })

// makes directories/folders 

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// } else{
//     fs.rmdir('./assets',(err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// delete file
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err) =>{
        if (err){
            console.log(err)
        }
        console.log('file deleted')
    })
}