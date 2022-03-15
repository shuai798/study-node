const http = require('http');

const server = http.createServer();

// server.on() 为服务器绑定request事件处理函数
server.on('request', (req, res) => {
    console.log('Someone visit our web server');
    // 解决中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 调用end，向客户端发送相应内容
    res.end(`您请求的地址：${req.url}，方法是：${req.method}`);
})

// server.listen() 启动服务
server.listen('8080', () => {
    console.log('server running at http://127.0.0.1:8080')
})
