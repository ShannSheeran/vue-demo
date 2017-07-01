<template>
  <div id="list">
    <scroller :on-infinite="infinite" ref="my_scroller">
      <section class="movie-section">
        <div class="movie-title">
          <div class="title">{{title}}</div>
        </div>
        <div class="clear"></div>
        <div class="movie-card">
          <router-link class="movie-item" v-for="item in items" :to="{name:'movie/detail', params:{id:item.id}}">
            <div class="movie-cover">
              <img v-bind:src="item.images.medium"/>
            </div>
            <div class="movie-text">
              <div class="title">{{item.title}}</div>
              <div class="yesr">年份：{{item.year}}</div>
              <div class="category">类别：{{ arrToString(item.genres) }}</div>
              <div class="score">评分：{{item.rating.average}}</div>
            </div>
          </router-link>
        </div>
      </section>
    </scroller>
  </div>
</template>

<script>
  import Spinner from '@/components/movie/Spinner'
  import {get} from '@/service/movieData'
  import InfiniteScroll from 'vue-infinite-scroll'
  export default{
    directives: {InfiniteScroll},
    data(){
      return {
        loading: true,
        items: [],
        page: 0,
        pageSize: 9,
        total: 0,
        title: 0,
      }
    },
    computed: {},
    mounted(){
      get(0, 1).then(data => {
        this.total = data.total;
        this.title = data.title;
      })
    },
    methods: {
      arrToString(arr){
        let str = '';
        arr.map((val, key) => {
          if (key > 0) {
            str = str + '/' + val
          } else {
            str = str + val
          }
        })
        return str;
      },
      infinite(done) {
        if (this.page > this.total) {
          done(true);
          return;
        }
        get(this.page, this.pageSize).then(data => {
          data.subjects.forEach((movie) => {
            this.items.push(movie);
          })
          done()
        })
        this.page = this.page + 9
      }
    },
    components: {
      'spinner': Spinner
    }
  }
</script>

<style>
  #list {
    width: 100%;
    height: 100%;
  }

  #list ._v-container {
    overflow: scroll;
  }

  #list .movie-section {
    margin-top: 5rem;
  }

  .movie-card .movie-item {
    display: flex;
    flex-direction: row;
    padding: 1rem 1rem;
    text-decoration: none;
    color: #666666;
  }

  #list .movie-text {
    padding-left: 1rem;
    text-align: left;
  }

  #list .movie-text .title {
    font-size: 1.2rem;
    font-weight: 500;
  }


</style>
