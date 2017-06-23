<template>
    <div class="child">
        <div v-on:click="counters">ClickMe {{counter}}</div>
        <input v-on:change="senToParent" v-model="tel" type="tel"/>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                counter: 0,
                tel:''
            }
        },
        methods: {
            senToParent: function () {
                this.$emit('eventListener', this.tel);
            },
            counters:function () {
                this.counter++;
                this.$emit('counters');
            }
        }
    }
</script>

<style>
    .child input{
        height: 30px;
    }
    .child div{
        height: 30px;
    }
</style>