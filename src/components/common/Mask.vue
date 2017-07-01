<template>
  <div v-if="show" id="mask" @touchmove.prevent @click="closeMask">

  </div>
</template>

<script>
  export default{
    data(){
      return {

      }
    },
    props:['show'],
    methods:{
      closeMask(){
        this.$emit('closeMask', false);
      }
    }
  }
</script>

<style>
  #mask{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: #2c3e50;
    z-index:99999;
    opacity: 0.5;
  }
</style>
