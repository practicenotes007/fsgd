// custom_logger.js

// 自定义中间件
export function custom_logger(req, res, next) {
    console.log("[custom_logger] req.method: " + req.method + ", req.url: " + req.url); // 输出日志信息
    next(); // 调用下一个中间件
}