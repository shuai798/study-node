/**
 * nodejs根据模块的来源不同，将模块分为3类：
 * 1.内置模块：内置模块是由nodejs官方提供的，例如fs、http、path等
 * 2.自定义模块：用户创建的每个js文件，都是自定义模块
 * 3.第三方模块：由第三方开发出来的模块，使用前需要先下载
 */

// 通过require导入自定义模块时，得到的是module.exports指向的对象
const customizeModule = require('./customizeModule')
console.log(customizeModule);
customizeModule.sayHello();

console.log(module.exports === exports);

// 建议：为了防止混乱，不要在同一个模块中同时使用exports和module.exports
