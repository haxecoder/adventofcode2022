const fs = require("fs");

const puzzlesCount = fs.readdirSync(`./puzzles/`).length;

console.log("==== Advent of code 2022 ====");

function readData(data, puzzleId, dataId) {
    if (data === (null || "")) {
        return;
    }
    this.rawData = data;
    this.initData();
    this.execute();

    if (this.answer != null) {
        let testOutput = "";

        if (dataId.includes("test")) {
            const outputColor = this.answer === this.testAnswer ? "\x1b[32m" : "\x1b[31m";
            testOutput = `${outputColor} <<< test \x1b[0m`;
        }

        console.log(
            `puzzle #${puzzleId}[${dataId.split('.')[0]} part]`,
            '\x1b[36m', `${this.answer}`, '\x1b[0m',
            testOutput
        );
    }
}

for (let i = 1; i < puzzlesCount + 1; i++) {
    let scripts = [
        require(`./puzzles/${i}/first.js`),
        require(`./puzzles/${i}/second.js`),
    ];

    let dataFiles = ["first.test", "first", "second.test", "second"];

    for (let it of dataFiles) {
        let p = `./puzzles/${i}/${it}.data`;
        let data = null;
        if (fs.existsSync(p)) {
            data = fs.readFileSync(p,"utf-8");
        }
        let script = it.includes("first") ? scripts[0] : scripts[1];
        readData.call(script, data, i, it);
    }
}