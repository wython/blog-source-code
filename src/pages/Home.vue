<template>
  <div class="home">
    <Ripple :loading="loading" class="my-rapple"/>
    <button @click="handleLoading">
      loading
    </button>
  </div>
</template>

<script>
  import Ripple from '@/components/ripple'
  export default {
    name: 'Home',
    components: {
      Ripple
    },
    data() {
      return {
          loading: false
      }
    },
    methods: {
      handleLoading(e) {
        this.loading = !this.loading
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .my-rapple{
    width: 50px;
    height: 50px;
    background: #91bce9;
  }
</style>
