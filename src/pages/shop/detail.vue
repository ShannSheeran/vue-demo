<template>
    <div>
        <topHead ></topHead>
        <back></back>
        <div v-if="goods">
            <img style="width: 100px;height: 100px" v-bind:src="goods.img"/>
            <p>{{goods.name}}</p>
            <p>{{goods.price}}¥</p>
            <p>{{goods.num}}</p>
        </div>
        <big-input v-on:getInputValue="hello"></big-input>
        <div class="add-cart" @click="addToCart">加入购物车</div>
    </div>
</template>

<script>
    import  {goodsDetail, addGoodsToCart} from  '@/service/goodsData'
    import back from '@/components/back'
    import topHead from '@/components/head'
    import bottom from '@/components/footer'
    import BigInput from '@/components/BigInput'

    export default{
        data(){
            return {
                goods: null,
                num: 0,
                goodsId: 0,
                total: 0,
                phone: 0,
                value:0
            }
        },
        mounted(){
            this.getGoods();
        },
        methods: {
            getGoods(){
                this.goods = goodsDetail(this.$route.params.id);
            },
            addToCart(){
                this.num++;
                if (this.value == 0) return;
                addGoodsToCart(this.goods.id, this.value);
            },
            hello(val){
                this.value = val;
            }
        },
        components: {
            topHead,
            back,
            bottom,
            BigInput
        }

    }
</script>

<style>
    .add-cart {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #f1f1f1;
    }
</style>
