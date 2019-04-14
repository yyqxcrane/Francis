# shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
//打包过程   webpack
1.npm run build(找到dist文件夹)
2.可以在文件的根目录下创建一个vue.config.js文件
module.exports={
    productionSourceMap:false，
    devServer:{
        open:true
    }

}
再次打包(现在dist文件里面就没有map那个文件了)


gzip打包   
安装一个库npm install --save-dev compression-webpack-plugin
还需要在上面那个module里面配置
