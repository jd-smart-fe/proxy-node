# proxy-node
请求转发工具,可用于本地前端调试未设置支持跨域的后端接口。

需要后端支持，postman支持的proxy-node就支持，现只支持cookie校验权限的接口，注意后端做了Referer校验的需要在axios中做Referer的伪装。

在config/index.js 填写：(host为你本地调试的环境域名+端口)
module.exports = {
    cookie:"",
    host:"http://xx:port"
}
cookie为后端返回的身份凭证，host为线上接口的环境比如"http://devapi.com",有端口要带端口号。
本地的所有接口环境都要改成http://localhost:3101/proxy/你的api，注意多加一个proxy路径，转发是从proxy之后截取，实际给服务器发送的请求为 config中的host+你的api

    npm install

    node/nodemon app

## 目前支持的请求方式
- GET
- POST
- DELETE
