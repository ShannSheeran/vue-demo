<template>
    <div class="head">
        <div>vue demo head</div>
        <router-link :to="{name:'shop/list'}"><p>购物车商品数量：{{num}}</p></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import  {getCartNum} from  '@/service/goodsData'
    export default{
        data(){
            return {
                num:0
            }
        },
        propos:[],
        mounted(){
            this.num = getCartNum();
        },
        watch:{
            num(o, l){
                console.log(o+'======'+l)
            }
        }

    }
</script>

<style>
    .head{
        width: 100%;
        height: 40px;
    }
    .head p{
        line-height: 40px;
        font-size: 0.5rem;
        margin-left: 60%;
        color: red;
    }
</style>
