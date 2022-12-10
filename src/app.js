const fs = require("fs");

const puzzlesCount = fs.readdirSync(`./puzzles/`).length;

console.log("==== Advent of code 2022 ====");

function readData(data, outputHeader, isTest) {
    if (data === (null || "")) {
        return;
    }

    this.rawData = data;
    this.initData();
    this.execute();

    if (this.answer != null) {
        let output = [
            outputHeader,
            '\x1b[36m', `${this.answer}`, '\x1b[0m',
            isTest ? `${this.answer === this.testAnswer ? "\x1b[32m" : "\x1b[31m"} <<< test \x1b[0m` : ""
        ];
        console.log(...output);
    }
}

for (let i = 1; i < puzzlesCount + 1; i++) {
    let puzzlesFiles = [`./puzzles/${i}/first.js`, `./puzzles/${i}/second.js`];
    let dataFiles = [`./puzzles/${i}/input.test`, `./puzzles/${i}/input.data`];

    let input = [
        fs.existsSync(dataFiles[0]) ? fs.readFileSync(dataFiles[0],"utf-8") : null,
        fs.existsSync(dataFiles[1]) ? fs.readFileSync(dataFiles[1],"utf-8") : null
    ];

    let scripts = [
        fs.existsSync(`./src/${puzzlesFiles[0]}`) ? require(puzzlesFiles[0]) : null,
        fs.existsSync(`./src/${puzzlesFiles[1]}`) ? require(puzzlesFiles[1]) : null
    ];

    scripts.forEach((it, j) => {
        if (!it) return;
        input.forEach((data, k) => {
            if (!data) return;
            readData.call(it, data, `puzzle #${i}[part ${j + 1}]`, k === 0);
        })
    });
}