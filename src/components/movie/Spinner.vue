<template>
  <div v-if="show" id="spinner">
    <div class="loader-inner ball-clip-rotate">
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['show']
  }
</script>

<style>
  .ball-clip-rotate > div {
    z-index:9999999;
    color: #42b983 !important;
    background-color: #38c167 !important;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    margin: 1rem;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    border: 0.1rem solid #38c167;
    border-bottom-color: transparent;
    background: transparent !important;
    display: inline-block;
    -webkit-animation: rotate 0.75s 0s linear infinite;
    animation: rotate 0.75s 0s linear infinite;
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg) scale(1);
      transform: rotate(0deg) scale(1);
    }

    50% {
      -webkit-transform: rotate(180deg) scale(0.6);
      transform: rotate(180deg) scale(0.6);
    }

    100% {
      -webkit-transform: rotate(360deg) scale(1);
      transform: rotate(360deg) scale(1);
    }
  }

  @keyframes scale {
    30% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

</style>
