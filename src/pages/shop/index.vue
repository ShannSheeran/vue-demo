<template>
    <div class="goods-list">
        <topHead>
            <cart></cart>
        </topHead>
        <back></back>
        <div class="goods-item" v-for="(item,index) in goods">
            <router-link :to="{name:'shop/detail', params:{id:item.id}}">
                <div class="goods-img fl">
                    <img v-bind:src="item.img"/>
                </div>
                <div class="goods-text fl">
                    <p>{{item.name}}</p>
                    <p>{{item.price}}¥</p>
                    <p>{{item.num}}</p>
                </div>
                <div class="clear"></div>
            </router-link>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
    import  {goodsData} from  '@/service/goodsData'
    import back from '@/components/back'
    import topHead from '@/components/head'
    import bottom from '@/components/footer'
    import cart from '@/components/cart'
    export default{
        name: 'index',
        data(){
            return {
                goods: null
            }
        },
        mounted(){
            this.getGoods();
        },
        methods: {
            getGoods(){
                this.goods = goodsData;
            }
        },
        components: {
            topHead,
            back,
            bottom,
            cart
        }
    }
</script>

<style>
    .clear {
        clear: both;
    }

    .fl {
        float: left;
    }
    .goods-item {
        color: #666;
        padding: 10px 0;
        border-top: 1px solid #f8f8f8;
        border-buttom: 1px solid #f8f8f8;
    }

    .goods-img {
        width: 60px;
        height: 50px;
        margin-right: 60%;
    }

    .goods-list .goods-item img {
        width: 50px;
        height: 50px;
    }

    .goods-text p {
        margin: 0;
    }
</style>
