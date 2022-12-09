module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = 24000;
    },
    execute: function() {
        let count = {
            saved: 0,
            current: 0
        };
        for (let it of this.data) {
            if (it !== "") {
                count.current += +it;
            } else {
                if (count.saved < count.current) {
                    count.saved = count.current;
                }
                count.current = 0;
            }
        }
        if (count.saved < count.current) {
            count.saved = count.current;
        }

        this.answer = count.saved;
    }
};