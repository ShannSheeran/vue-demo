<template>
  <div id="movie-list">
    <div>
      <movie-head></movie-head>
      <movie-search></movie-search>
      <section class="movie-section">
        <div class="movie-title">
          <div>{{moviesInfo.title}}</div>
        </div>
        <div class="clear"></div>
        <div class="movie-card">
          <a class="movie-item" v-for="item in moviesInfo.subjects">
            <div class="movie-cover">
              <img v-bind:src="item.images.medium"/>
            </div>
            <div class="movie-text">
              <div class="title">{{item.title}}</div>
            </div>
          </a>
        </div>
        <spinner :show="loading"></spinner>
      </section>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/movie/Head'
  import Search from '@/components/movie/Search'
  import Spinner from '@/components/movie/Spinner'
  import {get, api} from '@/service/movieData'
  export default{
    data(){
      return {
        loading: true,
        moviesInfo: '',
      }
    },
    computed(){

    },
    mounted(){
      get(api).then(data => {
        this.moviesInfo = data;
        this.loading=false;
      })
    },
    components: {
      'movie-head': Head,
      'movie-search': Search,
      'spinner':Spinner
    }
  }
</script>

<style>
  #movie-list .movie-title {
    height: 2rem;
    line-height: 2rem;
  }

  .movie-section {
    display: block;
    background: #eee;
    margin-top: 1rem;
  }

  #movie-list .movie-card {
    margin-top: 1rem;
    border-radius: 2rem;
  }

  #movie-list .movie-item {
    float: left;
    width: 33.333333333333%;
  }

  #movie-list .movie-cover {
    height: 9rem;
    margin: 0;
  }

  #movie-list .movie-text {
    padding: 0.5rem;
    height: 2rem;
  }

  #movie-list .movie-text .title {
    font-size: 0.8rem;
    text-align: center;
  }

</style>
