module.exports = {
    initData: function () {
        this.data = this.rawData;
    },
    execute: function() {
        console.log(`data = ${this.data}`);
    }
};
