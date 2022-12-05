const fs = require("fs");

const puzzlesCount = fs.readdirSync(`${process.cwd()}/puzzles/`).length;

console.log("==== Advent of code 2022 ====");

function readData(data, puzzleId, isTest) {
    if (typeof data === "undefined") {
        return;
    }
    console.log(`puzzle #${puzzleId}${isTest ? " with test data" : ""}`);
    this.rawData = data;
    this["initData"]();
    this["execute"]();
}

for (let i = 1; i < puzzlesCount + 1; i++) {
    let scripts = {
        first: require(`./puzzles/${i}/first.js`),
        second: require(`./puzzles/${i}/second.js`),
    };

    scripts["first.test"] = scripts.first;
    scripts["second.test"] = scripts.second;

    let data = {};

    let dataFiles = ["first", "second", "first.test", "second.test"];

    for (let it of dataFiles) {
        let p = `./puzzles/${i}/${it}.data`;
        if (fs.existsSync(p)) {
            data[it] = fs.readFileSync(p,"UTF-8");
        }
    }

    for (let field in scripts) {
        scripts[field].run = readData;
        scripts[field].run(data[field], i, field.includes("test"));
    }
}