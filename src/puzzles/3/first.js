module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = 157;
    },
    execute: function() {
        let result = 0;
        for (let it of this.data) {
            let memo = new Set();
            for (let i = 0; i < it.length / 2; i++) {
                memo.add(it.charAt(i));
            }
            for (let i = it.length / 2; i < it.length; i++) {
                if (memo.has(it.charAt(i))) {
                    result += this.getItemPriority(it.charAt(i));
                    break;
                }
            }
        }
        this.answer = result;
    },
    getItemPriority(it) {
        let cc = it.charCodeAt(0);
        return cc > 90 ? cc - 96 : cc - 38;
    }
};