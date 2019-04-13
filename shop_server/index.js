const koa=require('koa');
const app=new koa();

//解决跨域             
const cors=require('koa2-cors');
app.use(cors({
    origin:['http://localhost:8080'],
    credentials:true
}))


//接收前端post请求
const bodyParser=require('koa-bodyparser');
app.use(bodyParser());

//加载路由
const Router=require('koa-router');
let user = require('./controller/user.js');
let product=require('./controller/product.js');
let type=require('./controller/type.js');
let cart=require('./controller/cart.js')

let router=new Router();
router.use('/user',user.routes());//user和前端service里面的user对应
router.use('/product',product.routes());
router.use('/type',type.routes());
router.use('/cart',cart.routes());

app.use(router.routes());
app.use(router.allowedMethods());

const {connect,initSchemas}=require('./init.js');

//连接数据库，启动服务，初始化
(async()=>{
    await connect();
    initSchemas();
})();

// app.use(async(ctx)=>{
//     ctx.body='hello xiaozhang';
// })

app.listen(3000,()=>{
    console.log('start shop server');
})