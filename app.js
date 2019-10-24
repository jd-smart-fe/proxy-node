const koa = require("koa");
const bodyParser = require("koa-bodyparser"); //表单解析中间件
const router = require("koa-router"); //路由中间件
const cors = require("koa2-cors");

const app = new koa();

//配置跨域中间件
app.use(cors({
  origin: function (ctx) {
    // if (ctx.url === '/test') {
    //   return false;
    // }
    return 'http://localhost:3000';
  },
  // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  // maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

//使用表单解析中间件
app.use(bodyParser({
  "formLimit": "5mb",
  "jsonLimit": "5mb",
  "textLimit": "5mb"
}));

app.use(require('./routers/proxy.js').routes())

//监听在8080端口
app.listen(3101)

console.log(`listening on port 3101`)