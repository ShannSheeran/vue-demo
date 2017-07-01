<template>
  <div>
    <big-input v-on:getInputValue="hello"></big-input>
    <p>testPage</p>
    <p>{{added}}</p>
    <button  @click="addNumber">Button2🛒</button>
  </div>
</template>

<script>
  import BigInput from '@/components/BigInput'
  import { mapGetters, mapState } from 'vuex'
  export default{
    name: 'test',
    data(){
      return {
        value: 0
      }
    },
    computed: {
      ...mapState(['added']),
      count(){
        return this.$store.state.added
      }
    },
    methods: {
      hello(data){
        this.value = data;
      },
      addNumber(){
        this.$store.commit('ADD_TO_CART')
      }
    },
    components: {
      BigInput
    },
    watch:{
        added:function (value) {
          alert(33);
        }
    }
  }
</script>

<style scoped>
  button{
    padding: 1rem;
    width: 5rem;
    height: 3rem;
    background: #42b983;
    border: none;
    text-align: center;
    border-radius: 0.25rem;
  }
</style>
