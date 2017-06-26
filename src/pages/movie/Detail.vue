<template>
  <div id="movies-detail">
    <spinner :show="loading"></spinner>
    <div v-if="info">
      <div class="movie-detail">
        <div class="movie-title">
          <p>{{info.title}}</p>
        </div>
        <div class="movie-img">
          <img v-bind:src="image">
        </div>
        <div class="movie-other">

        </div>
        <div class="movie-view">
          <span>想看（{{info.wish_count}}）</span>
          <span>看过</span>
        </div>
        <div class="movie-info">
          <p>{{info.title}}剧情简介</p>
          <div>
            {{info.summary}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getMovieDetail} from '@/service/movieData'
  import Spinner from '@/components/movie/Spinner'
  export default{
    data(){
      return {
        loading: true,
        info: '',
        image: '',
      }
    },
    mounted(){
      getMovieDetail(this.$route.params.id).then(data => {
        this.info = data;
        this.image = data.images.large;
        this.loading = false
      });
    },
    components:{
      Spinner
    }
  }
</script>

<style>
  .movie-title {
    margin: 0.5rem 0;
  }

  .movie-title p {
    text-align: left;
    margin: 0;
    font-weight: 700;
    word-break: break-all;
  }

  #movies-detail {
    padding: 0 1rem;
  }

  .movie-view {
    margin: 1rem 0;
    height: 2rem;
    display: flex;
    flex-direction: row;
  }

  .movie-view span {
    margin: 0 1rem;
    display: block;
    width: 50%;
    line-height: 2rem;
    color: #ffb712;
    border: 0.01rem solid #ffb712;
  }

  .movie-img img {
    width: 100%;
  }

  .movie-info div {
    text-align: left;
  }
  .movie-info p{
    text-align: left;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
</style>
