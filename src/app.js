const fs = require("fs");

const puzzlesCount = fs.readdirSync(`./puzzles/`).length;

console.log("==== Advent of code 2022 ====");

function readData(data, outputHeader, isTest) {
    if (data === "") {
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
    let input = [
        `./puzzles/${i}/input.test`,
        `./puzzles/${i}/input.data`
    ].map(it => fs.existsSync(it) ? fs.readFileSync(it,"utf-8") : "");

    let scripts = [
        `./puzzles/${i}/first.js`,
        `./puzzles/${i}/second.js`
    ].map(it => fs.existsSync(`./src/${it}`) ? require(it) : null)

    scripts.forEach((it, j) => {
        if (!it) return;
        input.forEach((data, k) => {
            if (!data) return;
            readData.call(it, data, `puzzle #${i}[part ${j + 1}]`, k === 0);
        })
    });
}