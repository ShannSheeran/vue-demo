let goodsData = [
    {
        id: 2,
        name: '移动硬盘',
        price: '450.00',
        num: '23',
        img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3229/55/8387088136/100664/4b5582f/58c24ce3N0a63f0b0.jpg!q50.jpg'
    },
    {
        id: 3,
        name: 'SONY',
        price: '4500.00',
        num: '232',
        img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3382/185/379865950/66604/75d2af5/580976e8N76637e7d.jpg!q50.jpg'
    },
    {
        id: 4,
        name: 'Apple',
        price: '4500.00',
        num: '2',
        img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t4276/257/2416766721/125228/ba72a107/58d1d078N20e18b62.jpg!q50.jpg'
    },
    {
        id: 5,
        name: 'iPhone7',
        price: '6500.00',
        num: '2',
        img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3268/124/2646283367/114153/f5704b88/57e4a358N9ccc6645.jpg!q50.jpg'
    }
];

let goodsDetail=(id) => {
    for (let obj in goodsData) {
        if (goodsData[obj].id == id) return goodsData[obj];
    }
}

let getCartData =()=>{
    let data = JSON.parse(localStorage.getItem('cart'));
    let cart= [];
    for (let obj in data) {
        let goods = goodsDetail(data[obj].id);
        let goodsObj = {name:goods.name, number:data[obj].num, img:goods.img, price:goods.price}
        cart.push(goodsObj);
    }
    return cart;
}

let addGoodsToCart = (id, num)=>{
    let cart = localStorage.getItem('cart');
    let data = {id: id, num: num};
    if (cart == null) {
        let cartString = JSON.stringify([data]);
        localStorage.setItem('cart', cartString);
        return;
    }
    localStorage.clear();
    let cartArray = JSON.parse(cart);
    let flag = false;
    for (let obj in cartArray) {
        if (cartArray[obj].id == id) {
            flag = true;
            cartArray[obj].num += parseInt(num);
        }
    }
    if (!flag) cartArray.push(data);
    let str = JSON.stringify(cartArray);
    localStorage.setItem('cart', str);
}

let getCartNum = ()=>{
    let num = 0;
    let data = localStorage.getItem('cart');
    if (data == null) return num=0;
    let goods = JSON.parse(data);
    for (let obj in goods) {
        num += parseInt(goods[obj].num);
    }
    return num;
}

let removeAllGoods = ()=>{
    localStorage.clear();
}

export {goodsData, goodsDetail, getCartData, addGoodsToCart, getCartNum, removeAllGoods}
