module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = 70;
    },
    execute: function() {
        let result = 0;
        let line = 0;
        let memo = new Set();
        let diff = new Set();
        for (let it of this.data) {
            switch (line) {
                case 0:
                    for (let i = 0; i < it.length; i++) {
                        memo.add(it.charAt(i));
                    }
                    break;
                case 1:
                case 2:
                    diff = new Set();
                    for (let i = 0; i < it.length; i++) {
                        if (memo.has(it.charAt(i))) {
                            diff.add(it.charAt(i));
                        }
                    }
                    memo = diff;
                    if (line === 2) {
                        diff.forEach(it => result += this.getItemPriority(it));
                        memo = new Set();
                        line = -1;
                    }
                    break;
            }
            line++;
        }
        this.answer = result;
    },
    getItemPriority: require("./first").getItemPriority
};