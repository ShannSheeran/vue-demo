<template>
    <div>
        <shop-head></shop-head>
        <shop-back></shop-back>
        <div class="show-goods">
            <ul class="list-head">
                <li>商品名</li>
                <li>图片</li>
                <li>数量</li>
                <li>价格</li>
                <li class="total-amount">总价</li>
                <div class="clear"></div>
            </ul>
            <ul v-for="(item, index) in goodsList">
                <li>{{item.name}}</li>
                <li><img :src="item.img"></li>
                <li>{{item.number}}</li>
                <li>{{item.price}}</li>
                <li class="total-amount">{{item.price * item.number}}</li>
                <div class="clear"></div>
            </ul>
        </div>
        <div class="go-pay" v-if="goodsList.length>0">
            <div class="go-cart" v-on:click="clearCart">清空购物车</div>
            <div class="go-money" v-on:click="goPay">去结算</div>
        </div>
    </div>
</template>

<script>
    import head from "@/components/head"
    import back from "@/components/back"
    import  {goodsDetail, getCartData, removeAllGoods} from  '@/service/goodsData'
    export default{
        data(){
            return {
                goodsList: []
            }
        },
        mounted(){
            this.getGoods();
        },
        methods: {
            getGoods(){
                this.goodsList = getCartData();
            },
            clearCart(){
                removeAllGoods();
                this.goodsList = [];
            },
            goPay(){
                alert('NO');
            }
        },
        components: {
            'shop-head': head,
            'shop-back': back,
        }
    }
</script>

<style>
    .show-goods ul {
        width: 100%;
        padding: 0;
    }

    .show-goods ul li {
        float: left;
        width: 50px;
        list-style: none;
        padding: 5px;
    }

    .show-goods ul img {
        width: 50px;
        height: 50px;
    }

    .clear {
        clear: both;
    }

    .list-head {
        margin-top: 20px;
    }

    .total-amount {
        margin-left: 15px;
    }
    .go-pay{
        display: flex;
        flex-direction: row;
    }
    .go-pay div{
        width: 50%;
    }
    .go-cart{
        background: #f50457;
        color: white;
    }
    .go-money{
        background: #e884a6;
        color: white;
    }
</style>