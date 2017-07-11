<template>
  <div id="mall-cart">
    <div class="cart-header">
      <div class="cart-text">购物车</div>
      <span>编辑</span>
    </div>
    <div class="cart-container">
      <div class="cart-store">
        <!--<div class="cart-store-title">
          <span class="cart-check-box select-icon-box" :class="{checked:singleCheck(22)}" @click="checkGoods(22)"></span>
          <span>京东自营</span>
        </div>-->
        <div class="cart-goods">
          <div class="cart-goods-list" v-for="(item, index) in cart">
            <div class="cart-goods-check">
              <span class="cart-check-box" :class="{checked:singleCheck(index)}" @click="checkGoods(index)"></span>
            </div>
            <div class="cart-goods-img">
              <img v-bind:src="item.img" />
            </div>
            <div class="cart-goods-info">
              <div class="cart-goods-name">
                {{item.name}}
              </div>
              <div class="cart-goods-attr">
                <span>{{item.attr}}</span>
              </div>
              <div class="cart-goods-amount">
                <span class="goods-total-amount">${{item.price}}</span>
                <span class="goods-total-num">{{item.num}}</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  {getCartGoods} from  '@/service/goodsData'
  export default{
    data(){
      return {
        checked: 0,
        isCheck: false,
        style: {},
        arr: [],
        cart:[]
      }
    },
    mounted(){
        this.cart = getCartGoods();
    },
    methods: {
      checkGoods(id){
        if (this.arr.indexOf(id) < 0) {
          this.arr.push(id);
        } else {
          this.arr.splice(this.arr.indexOf(id), 1);
        }
      },
      singleCheck(id){
        if (this.arr.indexOf(id) < 0) return false;
        return true;
      },
      setStyle(){
        return {backgroundPosition: '-25px 0px !important'}
      },
      delStyle(){
        return {}
      }
    }
  }
</script>


<style scoped>
  #mall-cart {
    width: 100%;
    height: 100%;
    background: #f0f2f5;
  }

  .cart-header {
    display: flex;
    flex-direction: row;
    padding: 1rem 0.1rem;
    border-bottom: 0.01rem solid #f1f1f1;
    background: #ffffff;
  }

  .cart-header .cart-text {
    font-size: 1.2rem;
    font-weight: 500;
    width: 70%;
    padding-left: 10%;
  }

  .cart-container {
    margin-top: 0.5rem;
    background: #f0f2f5;
  }

  .cart-store {
    background: #ffffff;
  }

  .cart-store-title {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0.1rem 0.5rem 1rem;
    border-bottom: 0.01rem solid #f1f1f1;
    text-align: left;
  }

  .select-icon-box {
    margin: 0 0 !important;
  }

  .cart-goods-img img {
    width: 5.2rem;
    height: 5.2rem;
  }

  .cart-goods-list {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0.2rem;
    text-align: center;
    line-height: 100%;
    border-bottom: 0.01rem solid #f1f1f1;
  }

  .cart-goods-name {
    font-weight: 400;
    font-size: 0.9rem;
    text-align: left;
    padding-left: 0.1rem;
  }

  .cart-goods-attr {
    font-weight: 300;
    font-size: 0.7rem;
    text-align: left;
    padding: 0.25rem 0 0 0.1rem;
  }

  .cart-goods-amount {
    display: flex;
    flex-direction: row;
    font-weight: 400;
    text-align: left;
    padding: 1rem 0 0 0.1rem;
  }

  .goods-total-amount {
    width: 20%;
    color: #f23030;
  }

  .goods-total-num {
    width: 80%;
    text-align: right;
    padding-right: 0.5rem;
  }

  .checked {
    background-position: -25px 0px !important;
  }

  .cart-check-box {
    border: 0.1rem solid #f1f1f1;
    border-radius: 100%;
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 auto;
    background: url(https://st.360buyimg.com/order/images/cart5.0/shopping.cart.spirits.icns2.png?t=0510) no-repeat 0px 1px;
    background-size: 50px 200px;
  }
</style>
