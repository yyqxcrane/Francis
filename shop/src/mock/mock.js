import Mock from 'mockjs'

let Random=Mock.Random;
let productData = () =>{
    let productList=[];//存放商品的数组
    for(let i=0;i<50;i++){
        let product={
            name: Random.ctitle(5,10),
            img:Random.dataImage('125x125','衣服'+Random.integer(1,50)),
            price:Random.integer(100,1000),
            owner:Random.cname()
        };
        productList.push(product);
    }
    return productList;

}
Mock.mock('http://www.linda.com/getVarietyItem',productData);