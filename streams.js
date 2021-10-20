const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogs3.txt', {encoding : 'utf-8'})
const writeStream = fs.createWriteStream('./docs/blogs4.txt')


// readStream.on('data', (chunk)=>{
//     console.log('new chunk')
//     console.log(chunk)
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk)
// })

// piping
readStream.pipe(writeStream)