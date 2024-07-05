// create a function that checks if recieved folder name are in root directoris or not

// const foo = async (FileName) => {
//   try {
//     const fs = require("fs/promises");
//     const dir = await fs.readdir(__dirname);
//     let result;
//     dir.forEach((item) => {
//       if (item === FileName) {
//         result = true;
//       } else {
//         result = false;
//       }
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// foo("true.txt");

// create simple http get server and send users data from data.json

// const foo = async () => {
//   try {
//     const fs = require("fs/promises");
//     const http = require("http");
//     const path = require("path")

//     const rootPath = path.join(__dirname,"data.json")
//     const data = await fs.readFile(rootPath,"utf-8")

//     const server = http.createServer((req,res) => {
//         res.setHeader("content-type","application/json")
//         res.write(data)
//         return res.end()
//     })

//     server.listen(3000,() => {
//         console.log("server running on 3000")
//     })

//   } catch (error) {
//     console.log(error);
//   }
// };

// foo()

// create a http server that return random number between 1 to 100, http://localhost:3000/random

// const foo = async () => {
//   try {
//     const http = require("http");

//     const server = http.createServer((req, res) => {
//       if (req.url === "/random") {
//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         res.setHeader("content-type", "text/plain");
//         res.write(randomNumber.toString());
//         return res.end();
//       }
//       res.setHeader("content-type", "text/plain");
//       res.write("404 not found");
//       return res.end();
//     });

//     server.listen(3000, () => {
//       console.log("server running on 3000");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// foo();

// create a http get server that returns simple html table

// const foo = async () => {
//   try {
//     const http = require("http");
//     const server = http.createServer((req, res) => {
//       res.setHeader("content-type", "application/html");
//       res.write(`
//             <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <table border="1" >
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Country</th>
//         </tr>
//         <tr>
//           <td>Harry Depp</td>
//           <td>28</td>
//           <td>Britain</td>
//         </tr>
//         <tr>
//           <td>John Smith</td>
//           <td>35</td>
//           <td>USA</td>
//         </tr>
//         <tr>
//           <td>Ram Krishna</td>
//           <td>19</td>
//           <td>Nepal</td>
//         </tr>
//       </table>
// </body>
// </html>
//             `);
//       return res.end();
//     });
//     server.listen(3000, () => {
//       console.log("server running on  3000");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// foo();
