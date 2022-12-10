const fs = require("fs");
const readLine = require("readline").createInterface(process.stdin, process.stdout);
readLine.question("???\n", (it) => {
    readLine.close();
    if (!fs.existsSync(`./puzzles/${it}`)) fs.mkdirSync(`./puzzles/${it}`);
    if (!fs.existsSync(`./src/puzzles/${it}`)) fs.mkdirSync(`./src/puzzles/${it}`);

    fs.writeFileSync(`./puzzles/${it}/input.data`, "", "utf-8");
    fs.writeFileSync(`./puzzles/${it}/input.test`, "", "utf-8");
    fs.copyFileSync("./src/puzzles/puzzle.template", `./src/puzzles/${it}/first.js`);
    fs.copyFileSync("./src/puzzles/puzzle.template", `./src/puzzles/${it}/second.js`);
    console.log(`puzzle ${it} created`);
});


