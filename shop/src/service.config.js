const MOCKURL = 'http://www.linda.com/'; //mock模拟的地址
const SERVERURL = 'http://localhost:3000/' ; //真实的地址

const URL={
    getVarietyItem: MOCKURL + 'getVarietyItem',
    registUser: SERVERURL +'user/registUser',
    loginUser: SERVERURL +'user/loginUser',
    getTypes: SERVERURL +'type/getTypes',
    getProductByType: SERVERURL +'product/getProductByType',

    getDetail: SERVERURL +'product/getDetail',
    addCart:SERVERURL +'cart/addCart',
    getCart:SERVERURL +'cart/getCart',
    delCart:SERVERURL +'cart/delCart',

    getDetail: SERVERURL+'product/getDetail',
    addCart:SERVERURL+'cart/addCart'

};

export default URL;
