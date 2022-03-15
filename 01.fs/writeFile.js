const fs = require('fs');
fs.writeFile('./唐诗.txt', 'Hello Node', (error) => {
    if (error) {
        return console.log('文件写入失败：' + error);
    }
    console.log('文件写入成功');
});
// writeFile会创建不存在的文件，但是不会创建文件夹，如果文件夹不存在，会报错
// TODO 不覆盖原有文件内容该怎么办
