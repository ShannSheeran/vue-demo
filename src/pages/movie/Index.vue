<template>
  <div id="movie-list">
    <div class="nav-bar">
      <movie-head></movie-head>
      <movie-search></movie-search>
    </div>
    <div class="r-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/movie/Head'
  import Search from '@/components/movie/Search'
  import List from '@/pages/movie/List'
  export default{
    data(){
      return {
        path: ''
      }
    },
    created(){
      this.$router.push({name: 'movie/list'});
      window.title='电影';
    },
    components: {
      'movie-head': Head,
      'movie-search': Search,
      'movie-list': List,
    },
  }
</script>

<style>
  #movie-list .nav-bar{
    width: 100%;
    position: fixed;
    top:0;
    z-index: 9999999999;
    background: #ffffff;
  }
  #movie-list .r-view{
    margin-top: 5rem;
  }
</style>

