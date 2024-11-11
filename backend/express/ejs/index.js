// 导入所需的模块
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import render from "ejs";
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
    console.log(req.body); // 打印请求体中的数据
    const name = req.body.email; // 假设使用 email 作为名字
    console.log("name: " + name);
    res.render("index.ejs", { name }); // 渲染 index.ejs，并传递 name 变量
});

app.set("view engine", "ejs"); // 设置 EJS 作为视图引擎
app.set("views", join(__dirname, "public")); // 设置视图文件的目录

// 启动服务器，监听指定的端口
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // 控制台输出服务器运行信息
});