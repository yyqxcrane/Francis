const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let ObjectId=Schema.Types.ObjectId;

const cartSchema=new Schema({
    ID:ObjectId,
    productId:{
        type:ObjectId,
        ref:'Product' //指向联合查询的Model
    } ,
    userId:ObjectId,
    creatDate:{type:Date,default:Date.now()}
});

mongoose.model('Cart',cartSchema);