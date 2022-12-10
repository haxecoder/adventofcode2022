module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = 12;
        const win = 6;
        const draw = 3;
        let values = {
            A: 1,
            B: 2,
            C: 3
        };
        this.rules = {
            X: {
                value: 0,
                A: values["C"],
                B: values["A"],
                C: values["B"]
            },
            Y: {
                value: draw,
                A: values["A"],
                B: values["B"],
                C: values["C"]
            },
            Z: {
                value: win,
                A: values["B"],
                B: values["C"],
                C: values["A"]
            }
        };
    },
    execute: function() {
        let result = 0;
        for (let it of this.data) {
            result += this.rules[it.charAt(2)].value;
            result += this.rules[it.charAt(2)][it.charAt(0)];
        }
        this.answer = result;
    }
};