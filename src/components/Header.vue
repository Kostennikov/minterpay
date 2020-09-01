<template>
  <footer class="footer">
    <span class="arrow">←</span>
    <router-link class="routerLink" to="/">Home</router-link>
    <router-link class="routerLink" to="/about">About MinterPay</router-link>
    <router-link to="/workflow">Workflow</router-link>
    <router-link class="routerLink" to="/currencies">Currencies</router-link>
    <router-link class="routerLink" to="/fees">Fees</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 40px;

  }
</style>