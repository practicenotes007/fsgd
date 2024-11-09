## 初始化项目
```
npm init -y
```

## 安装依赖包express
```
npm i express
```

## 安装nomdemon
```
npm i -g nomdemon
```
可以使用nomdemon守护进程运行nodejs项目


## 运行index.js文件

```
nodemon index.js
```

## 后端测试Postman 
工具下载链接
```
https://www.postman.com/downloads/
```

---
以下为可能得注意事项：

## 替换国内npm源

**常用的国内 npm 镜像源：**

1. 淘宝 npm 镜像（npmmirror）：https://registry.npmmirror.com/
2. 腾讯 npm 镜像：https://mirrors.cloud.tencent.com/npm/
3. 华为 npm 镜像：https://mirrors.huaweicloud.com/repository/npm/

比如替换成淘宝npm源
```
npm config set registry https://registry.npmmirror.com/
```

然后，查看npm源是否替换成功

```
npm config get registry
```