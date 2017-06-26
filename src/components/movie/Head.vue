<template>
  <div id="movie-head">
    <div class="movie-head">
      <router-link :to="{name:'movie/list'}">电影</router-link>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style>
  #movie-head .movie-head {
    color: #3687d8;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: left;
    padding: 0 1rem;
  }
  #movie-head .movie-head a{
    color: #3687d8;
    text-decoration: none;
  }
</style>
