module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = 45000;
    },
    execute: function() {
        let list = [0];
        let current = 0;
        for (let it of this.data) {
            if (it !== "") {
                current += +it;
            } else {
                list.push(current);
                current = 0;
            }
        }
        list.push(current);
        this.answer = list.sort((a, b) => b - a).slice(0, 3).reduce((acc, cur) => acc + cur, 0);
    }
};