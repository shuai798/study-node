const fs = require('fs');
const path = require('path');

// path.join() 拼接文件路径
const scoreOldFilePath = path.join(__dirname, './scoreOld.txt');
const scoreNewFilePath = path.join(__dirname, './scoreNew.txt');
console.log({
    scoreOldFilePath,
    // 获取文件名称（包括后缀）
    fileName: path.basename(scoreOldFilePath),
    // 获取文件名称（不包括后缀）
    fileNameWithoutExt: path.basename(scoreOldFilePath, '.txt'),
    // 获取文件后缀
    ext: path.extname(scoreOldFilePath)
});
;

// __dirname：表示当前文件所在的目录
fs.readFile(scoreOldFilePath, 'utf8', ((err, data) => {
    if (err) {
        return console.log('文件读取失败');
    }
    let dataArr = data.split(' ');
    dataArr = dataArr.map(item => item.replace('=', ':'));
    console.log(dataArr);
    const content = dataArr.join('\r\n');
    console.log(content);
    fs.writeFile(scoreNewFilePath, content, (err) => {
        if (err) {
            return console.log('文件写入失败')
        }
        console.log('文件写入成功');
    })
}))
