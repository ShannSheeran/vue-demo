<template>
  <div id="movie-search">
    <input name="movie" placeholder="请输入关键字" v-model="query" @keyup.enter="search()">
    <img src="../../assets/search-icon.png" @click="search"/>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        query: ''
      }
    },
    methods: {
      search(){
        if (this.$route.name == 'movie/search/list') {
          this.$router.replace({name: 'movie/search/list', query: {query: this.query}});
          this.query = '';
          return;
        };
        this.$router.push({name: 'movie/search/list', query: {query: this.query}});
        this.query = '';
      },
    }
  }
</script>

<style>
  #movie-search {
    display: flex;
    flex-direction: row;
    background: #f1f1f1;
    padding: 0.5rem 0.7rem 0.5rem 0.2rem;
  }

  #movie-search input {
    background: #f1f1f1;
    border: none;
    width: 100%;
  }

  #movie-search img {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
