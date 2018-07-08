/*  NODE.JS - Modules that return Objects
 *  This node practice was designed by Patrick Abejar in an effort to become
 *  oriented with the Node.js modules that return objects.
 *
 *  Inspired by https://www.youtube.com/watch?v=TlB_eWDSMt4
 */

console.log("THIS IS FOR THE PATH MODULE")

const path = require("path")
const pathObjParse = path.parse(__filename)
console.log(pathObjParse)

console.log("\nTHIS IS FOR THE OS MODULE")

const os = require("os")
console.log("Platform: ", os.platform())
console.log("Hostname: ", os.hostname())
console.log("Free Memory: ", os.freemem())
console.log("Total Memory: ", os.totalmem())
console.log("Network Interfaces: ", os.networkInterfaces())

console.log("\nTHIS IS FOR THE FS MODULE")

const fs = require("fs")
fs.readdir('../', (err, files) => {
  if (err) console.log(err)
  else console.log(files)
})
