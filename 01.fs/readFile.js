// 导入fs模块
const fs = require('fs');
/**
 * 调用readFile方法来读取文件
 * 参数1：读取文件存放路径
 * 参数2：读取文件采用的编码格式，一般为utf8
 * 参数3：回调函数，拿到读取失败和成功的结果，error data
 */
fs.readFile('./唐诗.txt', 'utf8', (error, data) => {
    if (error) {
        return console.log('读取文件失败：' + error.message);
    }
    console.log("读取文件成功：" + data);
})
