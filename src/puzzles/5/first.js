module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = "CMZ";
    },
    execute: function() {
        let items = [];
        for (let it of this.data) {
            if (it.indexOf("[") !== -1) {
                for (let i = 0; i < it.length; i += 4) {
                    let crate = it
                        .slice(i, i + 4)
                        .trim()
                        .replaceAll("[", "")
                        .replaceAll("]", "");
                    if (items.length < (i / 4) + 1) {
                        items[i / 4] = [];
                    }
                    if (crate !== "") {
                        items[i / 4].push(crate);
                    }
                }
            } else if (it.indexOf("move") !== -1) {
                let command = new Command(it.match(/([+-]?[0-9]+(?:\.[0-9]*)?)/gm));
                for (let i = 0; i < command.amount; i++) {
                    let element = items[command.from].shift();
                    items[command.to].unshift(element);
                }
            }
        }
        this.answer = items.reduce((acc, cur) => acc + cur[0], "");
    }
};

class Command {
    constructor(v) {
        this.v = v;
    }
    get amount() {
        return +this.v[0];
    }
    get from() {
        return +this.v[1] - 1;
    }
    get to() {
        return +this.v[2] - 1;
    }
}

module.exports.Command = Command;