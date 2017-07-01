<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card-item">
      <router-link :to="{path:'/shop'}">Shop</router-link>
      <router-link :to="{name:'movie/index'}">Movie</router-link>
      <router-link :to="{name:'scroll'}">scroll</router-link>
      <router-link :to="{name:'mall'}">Mall</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Vue'
      }
    }
  }
</script>


<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .card-item{
    display: flex;
    flex-direction: column;
  }
  .card-item a{
    padding: 1rem;
    text-align: center;
    margin: 0.2rem 0.1rem 0.2rem;
    background: #42b983;
    color: #ffffff;
    text-decoration: none;
    border-radius: 0.25rem;
  }
</style>
