<template>
  <nav class="navBar">
    <span class="arrow">←</span>
    <router-link class="routerLink" to="/">Home</router-link>
    <router-link class="routerLink" to="/about">About</router-link>
    <router-link class="routerLink" to="/workflow">Workflow</router-link>
    <router-link class="routerLink" to="/currencies">Currencies</router-link>
    <router-link class="routerLink" to="/fees">Fees</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="scss" scoped>
.navBar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 10px;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 28px;

  @media screen and (max-width: 529px) {
    padding-top: 0.625rem;

  }


  .arrow {
    /*margin: -6px;*/
  }

  @media (max-width: 1024px) {
    .arrow {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    .navBar {
      padding-top: 0.625rem;
    }
    .arrow {
      display: none;
    }
  }
}
</style>