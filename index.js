// const add = require('./add')

// console.log("Hello Srikar");
// const sum1 = add(1,5);
// const sum2 = add(10,50);
// const sum3 = add(-5,5);

// console.log(sum1);
// console.log(sum2);
// console.log(sum3);


// require('./module1');
// require('./module2');

// const name = 'sreekar'
// console.log(__dirname)



/////////////////////////////////////////////////   MODULE CACHING  ///////////////////////////////////////////////////////////////


// const example = require('./cache');
// console.log(example.getName())
// example.setName('madhu')
// console.log(example.getName())

// const example2 = require('./cache');
// console.log(example2.getName())



/////////////////////////////////////////////////  IMPORT EXPORT PATTERNS  ///////////////////////////////////////////////////////////////

// const operations = require("./add")
// console.log(operations.add(1,2))
// console.log(operations.sub(1,2))



/////////////////////////////////////////////////  JSON DATA  ///////////////////////////////////////////////////////////////

// const data = require("./data.json")
// console.log(data)
// console.log("hi world")






/////////////////////////////////////////////////  BUILT-IN MODULES  ///////////////////////////////////////////////////////////////


/////////////////////////////////////////////////  1) PATH MODULE  ///////////////////////////////////////////////////////////////

// const path = require('node:path')

// console.log(__filename)   //  FILE NAME PROPERTY  //
// console.log(__dirname)    //  DIRECTORY NAME PROPERTY  //



// ////////////////////////////////  BASENAME METHOD ////////////////////////////////////////

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))


// ////////////////////////////////  EXTNAME METHOD ////////////////////////////////////////

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))



// ////////////////////////////////  PARSE METHOD ////////////////////////////////////////

// console.log(path.parse(__filename))


// ////////////////////////////////  FORMAT METHOD ////////////////////////////////////////

// console.log(path.format(path.parse(__filename)))


// ////////////////////////////////  ISABSOLUTE METHOD ////////////////////////////////////////

// console.log(path.isAbsolute(__dirname))
// console.log(path.isAbsolute('./index.html'))



////////////////////////////////  JOIN METHOD ////////////////////////////////////////


// console.log(path.join("folder1","folder2","index.html"))
// console.log(path.join("/folder1","//folder2","index.html"))
// console.log(path.join("/folder1","//folder2","../index.html"))



////////////////////////////////  RESOLVE METHOD ////////////////////////////////////////


// console.log(path.resolve("folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","../index.html"))





/////////////////////////////////////////////////  2) EVENTS MODULE  ///////////////////////////////////////////////////////////////

// const EventEmitter = require('node:events')

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (customer)=> {
//     console.log(`Order placed successfully! Thank you ${customer} for ordering`)
// })

// emitter.emit("order-pizza","Sreekar")





/////////////////////////////////////////////////  3) FS MODULE  ///////////////////////////////////////////////////////////////

// const fs = require('node:fs');

// const content = fs.readFileSync('./file.txt','utf-8');
// console.log(content)

// fs.readFile('./file.txt','utf-8',(error,data) => {
//     if(error){
//          console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// });

// fs.writeFileSync('./file2.txt','Node.js tutorial');

// fs.writeFile('./file2.txt',' Welcome to Node.js tutorials',{flag:"a"},(error)=> {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log('Success')
//     }
// });



     ////////////////////////////////////////////  FS MODULE BASED ON PROMISES  ///////////////////////////////////////////////////////////////

    // PROMIOSES //

// const fs = require('node:fs/promises');

// // fs.readFile('./file.txt','utf-8')
// // .then((data)=> {console.log(data)})
// // .catch((err)=>{console.log(err)});

//   //  ASYNC_AWAIT  //

// async function readFile()
// {
//     try{
//         const data = await fs.readFile('./file.txt','utf-8')
//         console.log(data)
//     }

//     catch(err){
//         console.log(err)
//     }
// }

// readFile()




/////////////////////////////////////////////////  4) STREAMS MODULE  ///////////////////////////////////////////////////////////////


// const fs = require('node:fs');

// const readableStream = fs.createReadStream('./file.txt',{
//     encoding : 'utf-8',
//     highWaterMark : 2,
// });

// const writeableStream = fs.createWriteStream('./file3.txt');

// readableStream.on('data',(chunk) => {
//    console.log(chunk)
//    writeableStream.write(chunk);
// })


           /////////////////////////////////////////////////  PIPE  ///////////////////////////////////////////////////////////////


                /////////////////////////////////////  NORMAL  ////////////////////////////////////////////////


// const fs = require('node:fs');

// const readableStream = fs.createReadStream('./file.txt',{
//     encoding : 'utf-8',
//     highWaterMark : 2,
// });

// const writeableStream = fs.createWriteStream('./file3.txt');

// readableStream.pipe(writeableStream) 



           /////////////////////////////////////  CHAINING  ////////////////////////////////////////////////


// const fs = require('node:fs');
// const zlib = require('node:zlib');

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream('./file.txt',{
//     encoding : 'utf-8',
//     highWaterMark : 2,
// });

// const writeableStream = fs.createWriteStream('./file3.txt');

// readableStream.pipe(gzip).pipe(fs.WriteStream('./file.txt.gz'))




/////////////////////////////////////////////////  5) HTTP MODULE  ///////////////////////////////////////////////////////////////


// const http = require('node:http');

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type" : "text/plain"});
//     res.end('Hello from the server');
// });

// server.listen(3000,()=>{
//     console.log("Server has started")
// });





/////////////////////////////////////////////////  JSON RESPONSE  //////////////////////////////////////////////////////////////


// const http = require('node:http');

// const server = http.createServer((req,res) => {
//    let name = [
//     {
//       "First Name" : "Sreekar",
//       "Last Name" : "Komanduri",
//     },
//     {
//       "First Name" : "Jagadish",
//       "Last Name" : "Komanduri", 
//     }
//    ]

//    res.writeHead(200,{ "Content-Type" : "application/json"});
//    res.end(JSON.stringify(name));
// });


// server.listen(3000,()=> {
//     console.log("Server running on port 3000")
// });






/////////////////////////////////////////////////  HTML RESPONSE  //////////////////////////////////////////////////////////////


      ////////////////////////////////////  LOADING ENTIRE CODE AT ONCE  //////////////////////////////////////////////////


// const http = require('node:http');
// const fs = require('node:fs');

// const html = fs.readFileSync('./index.html', 'utf-8');

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type" : "text/html"});
//     res.end(html);
// });

// server.listen(3000,()=>{
//     console.log("Server is running....")
// })


   ///////////////////////////////////////////  LOADING CODE AS CHUNKS  //////////////////////////////////////////////////


// const http = require('node:http');
// const fs = require('node:fs');


// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type" : "text/html"});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
// });

// server.listen(3000,()=>{
//     console.log("Server is running....")
// })




/////////////////////////////////////////////////  HTML TEMPLATE  //////////////////////////////////////////////////////////////


// const http = require('node:http');
// const fs = require('node:fs');

// const name = "Jagadish"

// let html = fs.readFileSync('./index.html','utf-8');

// html = html.replace("{name}",name);

// const server = http.createServer((req,res)=> {
//     res.writeHead(200,{"Content-Type" : "text/html"});
//     res.end(html)
// });

// server.listen(3000,()=>{
//     console.log("server running")
// });






/////////////////////////////////////////////////  HTML ROUTING  //////////////////////////////////////////////////////////////


// const http = require('node:http')
// const fs = require('node:fs');


// const html = fs.readFileSync('./index.html','utf-8');


// const server = http.createServer((req,res)=> {
//     if(req.url === '/')
//     {
//         res.writeHead(200,{"Content-Type" : "text/plain"});
//         res.end('Welcome to Home Page...');
//     }

//     else if(req.url === '/about')
//     {
//         res.writeHead(200,{"Content-Type" : "text/plain"});
//         res.end('Welcome to About Page...');
//     }

//     else if(req.url === '/contact')
//     {
//         res.writeHead(200,{"Content-Type" : "text/plain"});
//         res.end('Welcome to Contact Page...');
//     }

//     else
//     {
//         res.writeHead(400);
//         res.end("Page Not Found!!!")
//     }
//  });

// server.listen(3000,()=>{
//     console.log("Server running")
// });






/////////////////////////////////////////////////  LIBUV  //////////////////////////////////////////////////////////////


        ////////////////////////////////////  THREAD POOL  /////////////////////////////////////////////////


// const crypto = require('node:crypto');

// process.env.UV_THREADPOOL_SIZE = 8

// const maxCalls = 8

// const start = Date.now();

// for(let i=0;i<maxCalls;i++)
// {
//     crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512',()=>{
//         console.log("Hash: ", Date.now() - start)
//     });
// }





/////////////////////////////////////////////////  EVENT LOOP  //////////////////////////////////////////////////////////////


// setTimeout(() => {
//     console.log("first timeout")
// },0);

// setTimeout(() => {
//     console.log("second timeout")
//     process.nextTick(()=> {
//         console.log("inner from setTimeout")
//     })
// },0);

// setTimeout(() => {
//     console.log("third timeout")
// },0);
 

// Promise.resolve().then(()=> {
//     console.log("I am from promise queue 1")
// })

// Promise.resolve().then(()=> {
//     console.log("I am from promise queue 2")
//     process.nextTick(()=>{
//         console.log("inside from promise")
//     })
// })

// Promise.resolve().then(()=> {
//     console.log("I am from promise queue 3")
// })



// process.nextTick(()=>{
//     console.log("I am from process.nextTrick() 1")
// });

// process.nextTick(()=>{
//     console.log("I am from process.nextTrick() 2")
//     process.nextTick(()=>{
//         console.log("inside from nextTick")
//     })
// });

// process.nextTick(()=>{
//     console.log("I am from process.nextTrick() 3")
// });





/////////////////////////////////////////////////  THIRD PARTY MODULES  //////////////////////////////////////////////////////////////


// var uppercase = require( '@stdlib/string-base-uppercase' );

// function greet(name)
// {
//     console.log(uppercase(`Hello ${name} Komanduri, How are you?`))
// }

// greet("Sreekar")






/////////////////////////////////////////////////  DEPLOYMENT  //////////////////////////////////////////////////////////////


const http = require('node:http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Hello World");
});

const PORT = process.env.PORT;

server.listen(PORT, ()=> {
    console.log("Server is running");
});