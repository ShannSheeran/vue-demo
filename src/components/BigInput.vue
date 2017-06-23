<template>
    <div id="input">
        <div class="my-input">
            <span class="input-increcement" v-on:click="reduce">-</span>
            <input v-model="value" class="input-text" type="text" v-on:change="input" />
            <span class="input-reduce" v-on:click="increcement">+</span>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                value:0
            }
        },
        methods:{
            increcement(){
                this.value++;
                this.$emit('getInputValue', this.value);
            },
            reduce(){
                if (this.value == 0) return;
                this.value--;
                this.$emit('getInputValue', this.value);
            },
            input(){
                this.value = parseInt(this.value);
                if (isNaN(this.value)) this.value = 0;
                this.$emit('getInputValue', this.value);
            }

        }
    }
</script>

<style>
    .my-input{
        padding: 0.5px 1px;
        width: 5rem;
        height: 1.5rem;
        line-height: 2rem;
        border: 0.001rem solid #30b3fb;
        border-radius: 0.2rem;
        display: flex;
        flex-direction: row;
    }
    .input-increcement{

        display: block;
        width: 20%;
        margin: 0;
        border-right: 0.001rem solid #30b3fb;
        border-radius: 0.08rem;
        font-size: 1.5rem;
        color: #30b3fb;
    }
    .input-reduce{

        display: block;
        margin: 0;
        width: 20%;
        border-left: 0.001rem solid #30b3fb;
        border-radius: 0.08rem;
        text-align: center;
        font-size: 1.5rem;
        color: #30b3fb;
    }
    .input-text{
        line-height: 2rem;
        margin: 0;
        width: 60%;
        border: none;

    }
</style>
