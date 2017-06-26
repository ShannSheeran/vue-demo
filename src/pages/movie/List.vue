<template>
  <div id="list">
    <section class="movie-section">
      <div class="movie-title">
        <div>{{moviesInfo.title}}</div>
      </div>
      <div class="clear"></div>
      <div class="movie-card">
        <router-link class="movie-item" v-for="item in moviesInfo.subjects" :to="{name:'movie/detail', params:{id:item.id}}">
          <div class="movie-cover">
            <img v-bind:src="item.images.medium"/>
          </div>
          <div class="movie-text">
            <div class="title">{{item.title}}</div>
          </div>
        </router-link>
      </div>
      <spinner :show="loading"></spinner>
    </section>
  </div>
</template>

<script>
  import Spinner from '@/components/movie/Spinner'
  import {get, api} from '@/service/movieData'
  export default{
    data(){
      return {
        loading: true,
        moviesInfo: '',
      }
    },
    mounted(){
      get(api).then(data => {
        this.moviesInfo = data;
        this.loading = false;
      })
    },
    components: {
      'spinner': Spinner
    }
  }
</script>

<style>
  #movie-list .movie-title {
    height: 2rem;
    line-height: 2rem;
  }

  .movie-section {
    position: relative;
    display: block;
    background: #eee;
    margin-top: 1rem;
  }

  #movie-list .movie-card {
    display: block;
    width: 100%;
    height: 37rem;
    margin-top: 1rem;
    border-radius: 2rem;
  }

  movie-list .movie-card a {
    text-decoration: none;
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
  #spinner{
    top:4rem;
    left: 45%;
    position: absolute;
  }
  #movie-list .movie-text .title {
    font-size: 0.8rem;
    text-align: center;
  }
  #list a{
    text-decoration: none;
    color: inherit;
  }
  .movie-title div{
    font-weight: 700;
  }

</style>
