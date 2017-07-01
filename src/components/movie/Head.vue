<template>
  <div id="movie-head">
    <div class="movie-head">
      <router-link :to="{name:'movie/list'}">电影</router-link>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        img: 'http://shop.xzzx24.com/store/qrcod.html?t=1&store_id=4&is_d=1'
      }
    },
    created(){
        this.setTitle('电影');
    },
    methods: {
      setTitle(t) {
        document.title = t;
        var i = document.createElement('iframe');
        i.src = '//m.baidu.com/favicon.ico';
        i.style.display = 'none';
        i.onload = function () {
          setTimeout(function () {
            i.remove();
          }, 9)
        }
        document.body.appendChild(i);
      }

    }
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

  #movie-head .movie-head a {
    color: #3687d8;
    text-decoration: none;
  }
</style>
