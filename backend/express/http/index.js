// 导入所需的模块
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

// 创建 Express 应用
const app = express();
const port = 3000; // 定义服务器监听的端口

app.use(morgan("combined")); // 使用 morgan 中间件记录请求日志

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 中间件配置
app.use(bodyParser.urlencoded({ extended: true })); // 解析 URL 编码的请求体

// 路由配置
app.get("/", (req, res) => {
    const indexPath = join(__dirname, "/public/index.html"); // 构建 index.html 的路径
    res.sendFile(indexPath); // 发送 index.html 文件
});

app.post("/login", (req, res) => {
    console.log(req.body); // 打印请求体中的数据（邮箱和密码）
    res.sendStatus(200); // 返回 200 状态码，表示请求成功
});

app.post("/register", (req, res) => {
    // 注册功能的逻辑可以在这里实现
    res.sendStatus(200); // 返回 200 状态码，表示请求成功
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About Me</h1>
        <p>Hi, I am Practicenotes. <br />
        practicing to be a <br /> ALL-FULL-STACK DESIGNER in 3 years,<br />
        from Web frontend/backend Design (1 Month Exp, Learning) <br />
        to Mobile APP design (No, To Be Learned),<br />
        to Embedded HW/SW design (>10 Years EXP), <br />
        to FPGA programming (<1 Year EXP), <br />
        to RISC-V CPU design (No, To Be Learned).</p>
        <br />
        my github: <a href='https://github.com/practicenotes007'> practicenotes007 </a>
    `);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1> <p>Email: practicenotes@163.com</p>");
});

// 处理未匹配的请求，返回 404 页面
app.use((req, res) => {
    res.status(404).send("Page not found"); // 返回 404 状态码和错误信息
});

// 启动服务器，监听指定的端口
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // 控制台输出服务器运行信息
});