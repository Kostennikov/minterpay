<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <Page/>
  </div>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'

export default {
  name: 'Home',
  components: {
    Page,
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
}
</style>
