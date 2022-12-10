module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = 15;
        const win = 6;
        const draw = 3;
        this.rules = {
            X: {
                value: 1,
                A: draw,
                B: 0,
                C: win
            },
            Y: {
                value: 2,
                A: win,
                B: draw,
                C: 0
            },
            Z: {
                value: 3,
                A: 0,
                B: win,
                C: draw
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