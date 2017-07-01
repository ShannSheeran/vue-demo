<template>
  <div id="mall-index">
    <mall-header></mall-header>
    <mall-search></mall-search>
    <div class="children">
      <transition name="fade">
        <router-view></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
  import Header from '@/components/mall/Header';
  import SearchBar from '@/components/mall/SearchBar';
  export default{
    mounted(){
      this.$router.push({name: 'mall-goods'});
    },
    components: {
      'mall-header': Header,
      'mall-search': SearchBar
    }
  }
</script>

<style>
  .fold-enter-active {
    animation-name: fold-in;
    animation-duration: .5s;
  }
  .fold-leave-active {
    animation-name: fold-out;
    animation-duration: .5s;
  }
  @keyframes fold-in {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    50% {
      transform: translate3d(0, 50%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, 50%, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }
</style>
