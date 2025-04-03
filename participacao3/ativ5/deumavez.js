const fs = require("node:fs");
const path = require("node:path");

module.exports = (fileName) => {
    const localFile = path.join(__dirname, fileName);

    const init = Date.now();
    const text = fs.readFileSync(localFile, "utf-8");
    console.log(text);
    const end = Date.now();

    
    console.log(`Total time(de uma só vez): ${end - init} ms`);
}