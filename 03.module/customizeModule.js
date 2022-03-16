module.exports = {
    username: '张三',
    sayHello: () => {
        console.log('Hello' + this.username);
    }
}

module.exports.gender = 'male';

// 会覆盖之前的指向
module.exports = {
    username: '张三',
    sayHello: function () {
        console.log('Hello：' + this.username);
    }
}
