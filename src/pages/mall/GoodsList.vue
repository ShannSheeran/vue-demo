<template>
  <div id="goods-list">
    <div class="goods-card">
      <ul>
        <li v-for="(item,index) in goods">
          <router-link :to="{name:'mall-goods-detail', params:{id:item.skuId}}">
            <div class="image">
              <img :src="item.pictureUrl"/>
            </div>
            <div class="info">
              <div class="item-title">
                <span>{{item.name}}</span>
              </div>
              <div class="item-num">
                <span>{{item.promotionTag2}}</span>
              </div>
              <div class="item-price">
                <span>¥{{item.pPrice}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import  {mallGoods} from  '@/service/goodsData'
  export default{
    data(){
      return {
        goods: []
      }
    },
    mounted(){
      this.goods = mallGoods
    }
  }
</script>

<style scoped>
  #goods-list .image {
    width: 30%;
  }

  #goods-list .info {
    width: 70%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-right: 1rem;
  }

  #goods-list .image img {
    width: 7rem;
    height: 7rem;
  }

  .goods-card li a{
    text-decoration: none;
    color: #2c3e50;
    padding-top: 0.5rem;
    border-bottom: 0.1rem dashed #f1f1f1;
    display: flex;
    flex-direction: row;
  }

  .item-title {
    font-weight: 500;
    font-size: 0.9rem;
  }

  .item-price {
    padding-top: 1rem;
    font-weight: 500;
    color: #f02b2b;
  }

  .item-num {
    height: 1.5rem;
    padding-top: 0.5rem;
    color: #f02b2b;
  }
</style>
