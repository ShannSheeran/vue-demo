<template>
    <div>
        <big-input v-on:getInputValue="hello"></big-input>
        <p>testPage</p>
        <p>{{value}}</p>
    </div>
</template>

<script>
    import BigInput from '@/components/BigInput'
    export default{
        name:'test',
        data(){
          return {
              value:0
          }
        },
        methods:{
            hello(data){
                this.value = data;
            }
        },
        components:{
            BigInput
        }
    }
</script>
