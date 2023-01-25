# ikuuu自动签到

![npm](https://img.shields.io/npm/v/ikuuu-auto-checkin)
![node-current](https://img.shields.io/node/v/ikuuu-auto-checkin)
![qq](https://img.shields.io/badge/qq-591528697-blue)

# 免责声明：
本项目的使用者与本项目及作者无关

本项目使用[Node.js](https://nodejs.org/)语言开发，使用MIT许可证开源

使用方法:
- ###1. 登录ikuuu.dev抓取cookie
抓取cookie方法：
使用Chrome浏览器，首先登录ikuuu.dev，然后在地址栏输入以下代码
```
javascript:document.cookie
```
- ##2. 复制内容到cookie.txt文件内即可完成配置

- ##3. 启动
    在目录下运行
    ```bash
    npm run start
    ```
    可直接启动
- ##4. 后台部署
    运行
    ```bash
    npm run pm2
    ```
    以此安装pm2
    运行
    ```bash
    npm run deploy
    ```
    后台部署
    运行
    ```bash
    npm run delete
    ```
    删除进程
    ::: warning 请注意
        在deploy之前必须安装pm2
    :::
有任何问题可以提issue或者q群礼问
