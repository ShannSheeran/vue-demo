<template>
  <div id="movie-search">
    <input name="movie" placeholder=" 请输入关键字"/>
    <img src="../../assets/search-icon.png"/>
  </div>
</template>

<script>
  export default{

  }
</script>

<style>
  #movie-search{
    display: flex;
    flex-direction: row;
    background: #f1f1f1;
    padding:0.5rem 0.7rem 0.5rem 0.2rem;
  }
 #movie-search input{
   background: #f1f1f1;
   border: none;
   width: 100%;
 }
  #movie-search img{
    width: 1.5rem;
    height:1.5rem;
  }
</style>
