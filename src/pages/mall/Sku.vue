<template>
  <div id="mall-sku" v-if="show">
    <div class="item-price">
      <p>$&nbsp;234.00</p>
      <span>重量：0.39kg</span>
    </div>
    <div class="item-num">
      <div class="choose">
        <span>已选</span>
        <div>{{color}} {{size}} {{suit}} {{num}}件 </div>
      </div>
      <div class="mall-color">
        <span class="attr-name">颜色</span>
        <div class="attr-color">
          <span  v-for="acolor in gcolor" @click="getColor(acolor)" :class="{active:color==acolor}">{{acolor}}</span>
        </div>
      </div>
      <div class="mall-size">
        <span class="attr-name">内存</span>
        <div class="attr-color">
          <span v-for="asize in gsize" @click="getSize(asize)" :class="{active:size==asize}">{{asize}}</span>
        </div>
      </div>
      <div class="mall-suit">
        <span class="attr-name">套装</span>
        <div class="attr-color">
          <span v-for="asuit in gsuit" @click="getSuit(asuit)" :class="{active:suit==asuit}">{{asuit}}</span>
        </div>
      </div>
      <div class="num">
        <span>数量</span>
        <div>
          <mall-input v-on:getInputValue="getRealVal" :num="num"></mall-input>
        </div>
      </div>
    </div>
    <div class="mall-button">
      <div @click="addToCart">加入购物车</div>
    </div>


    <div class="mall-img">
      <img src="https://m.360buyimg.com/n12/jfs/t277/193/1005339798/768456/29136988/542d0798N19d42ce3.jpg!q70.jpg"/>
    </div>
    <div class="flick-menu-close" @click="closeSku">
      <span class="close-icon"></span>
    </div>


  </div>
</template>

<script>
  import Input from '@/components/common/BigInput'
  export default{
    data(){
      return {
        num: 0,
        gcolor: ['金色', '玫瑰金色', '银色', '亮黑色', '红色特别版'],
        gsize: ['32G', '64G', '128G', '256G'],
        gsuit: ['公开版', '双网通'],
        color:'',
        size:'',
        suit:''
      }
    },
    mounted(){
      //alert(this.$route.params.id);
    },
    props: ['show'],
    methods: {
      getRealVal(data){
        this.num = data
      },
      addToCart(){
        let goods = {id: 1123, name: 'iPhone7', color: this.color, size: this.size, num: this.num, attr: this.suit};
        this.$emit('addToCart', {goods: goods, show: false});
      },
      closeSku(){
        this.$emit('closeMask', false)
      },
      getColor(color){
          this.color = color
      },
      getSize(size){
          this.size = size
      },
      getSuit(suit){
          this.suit = suit
      }
    },
    components: {
      'mall-input': Input
    }

  }
</script>

<style scoped>
  #mall-sku {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999999;
    background: #ffffff;
  }

  #mall-sku img {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: -1rem;
    left: 0.5rem;
    border: 0.1rem solid #f1f1f1;
  }

  .item-price {
    padding: 1.8rem 0 0 7rem;
    color: #f02b2b;
    height: 3rem;
    text-align: left;
    border-bottom: 0.01rem solid #f1f1f1;
  }

  .item-price p {
    font-weight: 500;
  }

  .item-price span {
    font-size: 0.5rem;
    color: #666666;
  }

  .item-num {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0.5rem 1rem;
    border-bottom: 0.01rem solid #f1f1f1;
  }
  .choose{
    display: flex;
    flex-direction: row;
  }
  .choose span {
    display: block;
    width: 3rem;
  }
  .choose div{
    font-weight: 300;
  }

  #mall-sku .num {
    padding: 0.2rem 0 0 0;
    display: flex;
    flex-direction: row;
  }

  #mall-sku .num div {
    padding: 0 0 0 0.25rem;
  }

  .mall-button div {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background: #f23030;
    color: #ffffff;
  }

  .flick-menu-close .close-icon {
    display: block;
    background: url(https://st.360buyimg.com/item/images/5.4/product-detail-sprites-mjs.png?v=1) no-repeat 0 0;
    background-size: 100px 100px;
    background-position: -28px -17px;
    width: 11px;
    height: 12px;
    position: absolute;
    right: 10px;
    top: 16px;
  }

  .mall-color {
    margin-top: 0.4rem;
    display: flex;
    flex-direction: row;
  }

  .mall-color .attr-color span {
    text-align: center;
    float: left;
    width: 5rem !important;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    padding: 0.2rem 0.5rem;
    border: 0.01rem solid #bfbfbf;
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
    font-weight: 300;
    height: 1.5rem;
  }

  .mall-color .attr-name {
    width: 4.5rem;
  }

  .mall-size {
    margin-top: 0.4rem;
    display: flex;
    flex-direction: row;
  }

  .mall-size .attr-color span {
    text-align: center;
    float: left;
    width: 5rem !important;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    padding: 0.2rem 0.5rem;
    border: 0.01rem solid #bfbfbf;
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
    font-weight: 300;
    height: 1.5rem;
  }

  .mall-size .attr-name {
    width: 3.5rem;
  }

  .mall-suit {
    margin-top: 0.4rem;
    display: flex;
    flex-direction: row;
  }

  .mall-suit .attr-color span {
    text-align: center;
    float: left;
    height: 1.5rem;
    width: 5rem !important;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    padding: 0.2rem 0.5rem;
    border: 0.01rem solid #bfbfbf;
    border-radius: 0.2rem;
    margin-bottom: 0.3rem;
    font-weight: 300;
  }

  .mall-suit .attr-name {
    width: 2.6rem;
  }
  #mall-sku .active{
    border: 0.025rem solid #f23030 !important;
    color: #f23030;
  }
</style>
