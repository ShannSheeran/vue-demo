<template>
    <div>
        <div class="back" @click="routerBack">Back</div>
    </div>
</template>

<script>
    export default{
        name:'back',
        methods:{
            routerBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
    .back{
        text-align: left;
        background: #00a5ff;
    }
</style>
