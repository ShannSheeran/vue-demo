<template>
  <transition name="fade">
  <div id="goods-detail">
      <div class="mall-slide">
        <img :src="goods.image"/>
      </div>
      <div class="goods-text">
        <div class="goods-info">
          <div class="mall-goods-title">
            {{goods.name}}
          </div>
          <div class="mall-goods-price">
            ¥&nbsp;<span>{{goods.pPrice}}</span>
          </div>
        </div>
        <div class="benefit">
          <span>白条</span>
          <div>【白条支付】首单最高立减5元</div>
        </div>
        <div class="promote">
          <span>促销</span>
          <div class="promote-tag">
            <span>可享受以下优惠</span>
            <span>购买1件可优惠换购热销商品</span>
            <span>最高省21.00元</span>
          </div>
        </div>
        <div class="buy-num">
          <span>已选</span>
          <div class="num">{{string}} {{num}}件</div>
          <div class="show-mask" @click="showMask">....</div>
        </div>
        <div class="mall-view-cart">
          <router-link :to="{name:'Hello'}">查看购物车🛒</router-link>
        </div>
      </div>

      <div class="mall-menu">
        <mall-sku :show="show" v-on:addToCart="addToCart" v-on:closeMask="closeMask"></mall-sku>
      </div>
      <div class="mask">
        <mall-mask :show="show" v-on:closeMask="closeMask"></mall-mask>
      </div>
  </div>
  </transition>
</template>

<script>
  import  {getMallGoodsDetail} from  '@/service/goodsData'
  import Sku from '@/pages/mall/Sku';
  import Mask from '@/components/common/Mask';
  export default{
    data(){
      return {
        goods: [],
        show: false,
        cart: [],
        num: 0,
        string: ''
      }
    },
    mounted(){
      this.goods = getMallGoodsDetail(this.$route.params.id)
      this.setTitle(this.goods.name)
    },
    methods: {
      closeMask(data){
        this.show = false;
      },
      addToCart(data){
        this.cart = data.goods
        this.num = data.goods.num
        this.show = data.show
        this.string = this.cart.color + ' ' + this.cart.size + ' ' + this.cart.attr
      },
      showMask(){
        this.show = true;
      },
      setTitle(t) {
        document.title = t;
        var i = document.createElement('iframe');
        i.src = '//m.baidu.com/favicon.ico';
        i.style.display = 'none';
        i.onload = function () {
          setTimeout(function () {
            i.remove();
          }, 9)
        }
        document.body.appendChild(i);
      }
    },
    components: {
      'mall-sku': Sku,
      'mall-mask': Mask
    }
  }
</script>

<style scoped>
  #goods-detail {
    padding: 1rem 0 0 0;
  }

  .benefit {
    padding: 0.7rem 0.5rem;
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    background: #ffffff;
  }

  .benefit span {
    width: 10%;
    font-weight: 500;
  }

  .benefit div {
    font-weight: 300;
  }

  .promote {
    padding: 0.7rem 0.5rem;
    display: flex;
    border-top: 0.01rem solid #f1f1f1;
    flex-direction: row;
    background: #ffffff;
  }

  .promote span {
    width: 10%;
    font-weight: 500;
  }

  .promote div {
    font-weight: 300;
  }

  .promote-tag {
    display: flex;
    flex-direction: column;
  }

  .promote-tag span {
    padding: 0.1rem 0.5rem;
    font-weight: 300;
    width: 100%;
    text-align: left;
  }

  .buy-num {
    margin-top: 0.5rem;
    padding: 0.7rem 0.7rem;
    display: flex;
    border-top: 0.01rem solid #f1f1f1;
    flex-direction: row;
    background: #ffffff;
    margin-bottom: 3.5rem;
  }

  .buy-num span {
    font-weight: 500;
  }

  .buy-num .num {
    width: 55%;
    text-align: left;
    font-weight: 300;
    padding-left: 0.5rem;
  }

  .buy-num .show-mask {
    padding-left: 15%;
    width: 3rem;
    text-align: right;
  }

  .goods-text {
    background: #eee;
    border-bottom: 0.01rem solid #f1f1f1;
  }

  .mall-slide img {
    width: 100%;
  }

  .goods-info {
    padding: 0 1rem;
    background: #ffffff;
    border-top: 0.01rem solid #f1f1f1;
  }

  .mall-goods-title {
    font-weight: 500;
    font-size: 1.1rem;
    width: 100%;
    text-align: left;
  }

  .mall-goods-price {
    text-align: left;
    color: #f02b2b;
    padding-top: 0.5rem;
  }

  .mall-goods-price span {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .fade-enter-active {
    transition: all 3s ease;
  }
  .fade-enter {
    transform: translate3d(0, 0, 0);
  }
  .mall-view-cart{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.7rem 0.7rem;
    background: #f02b2b;
  }
  .mall-view-cart a{
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
  }
</style>
