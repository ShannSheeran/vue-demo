<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link :to="{path:'/shop'}">Shop</router-link>
        <hr>
        <router-link :to="{name:'shop/test'}">testPage</router-link>
        <hr>
        <router-link :to="{name:'shop/input'}">BigInput</router-link>
        <hr>
        <router-link :to="{name:'movie/index'}">Movie</router-link>
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
</style>
