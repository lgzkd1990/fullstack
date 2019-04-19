const Koa=require('koa');
const static=require('koa-static');//

let server=new Koa();
server.listen(8081);

// 设置允许跨域
server.use(async (ctx, next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');

  await next();
});

server.use(static('./static'));
