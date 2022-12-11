module.exports = {
    initData: function () {
        this.data = this.rawData.split("\r\n");
        this.testAnswer = 2;
    },
    execute: function() {
        let result = 0;
        for (let i = 0; i < this.data.length; i++) {
            let items = this.data[i].split(",");
            let item1 = items[0].split("-");
            let item2 = items[1].split("-");
            if ((+item2[0] >= +item1[0]) && (+item2[1] <= +item1[1])) {
                result++;
            } else if ((+item1[0] >= +item2[0]) && (+item1[1] <= +item2[1])) {
                result++;
            }
        }
        this.answer = result;
    }
};