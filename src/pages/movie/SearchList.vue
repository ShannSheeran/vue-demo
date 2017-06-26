<template>
  <div id="search-list">
    <div>
      {{query}}
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              query:''
          }
      },
      mounted(){
          this.query = this.$route.params.query;
      }
  }
</script>
