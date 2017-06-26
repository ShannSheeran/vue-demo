<template>
  <div id="movie-list">
    <div>
      <movie-head></movie-head>
      <movie-search></movie-search>
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
    },
    mounted(){

    },
    components: {
      'movie-head': Head,
      'movie-search': Search,
      'movie-list': List,
    },
    watch: {

    }
  }
</script>

