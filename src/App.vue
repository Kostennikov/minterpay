<template>
  <div id="app">

    <header class="head-links">
      <router-link class="head-links__a" to="/login">Login</router-link>
      <router-link class="head-links__a" to="/MyAccount">My account</router-link>
    </header>

    <main class="main">
      <router-view/>
    </main>

    <footer class="footer">
      <div class="footer__nav">
        <router-link
            class="footer__nav-first"
            to="/more">More information
        </router-link>
        <Navigation
            v-if="this.$route.path !== '/login' && this.$route.path !== '/register'"
        />
        <!--        <span class="arrow">←</span>-->
        <!--        <router-link class="routerLink" to="/">Home</router-link>-->
        <!--        <router-link class="routerLink" to="/about">About MinterPay</router-link>-->
        <!--        <router-link to="/workflow">Workflow</router-link>-->
        <!--        <router-link class="routerLink" to="/currencies">Currencies</router-link>-->
        <!--        <router-link class="routerLink" to="/fees">Fees</router-link>-->

      </div>
      <div class="footer__links">
        <a href="#">
          <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
            <use href="./assets/sprite.svg#donate-solid" />
          </svg>
        </a>
        <a href="#">
          <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
            <use href="./assets/sprite.svg#envelope-solid" />
          </svg>
        </a>
        <a href="#">
          <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
            <use href="./assets/sprite.svg#telegram" />
          </svg>
        </a>
<!--        <a href="#"><img class="footer__links-img" alt="" src="./assets/envelope-solid.svg"></a>-->
<!--        <a href="#"><img class="footer__links-img" alt="" src="./assets/Telegram.svg"></a>-->
      </div>
    </footer>
  </div>
</template>
<script>


import Navigation from "@/components/Navigation";

export default {
  components: {Navigation},
  data: () => ({
    showLinks: true,
    hideNav: true
  }),
}
</script>
<style lang="scss">

$path: './assets/fonts/';

$roboto: "Roboto",
Helvetica,
Arial,
sans-serif;
$nunito: "Nunito",
"Times New Roman",
serif;

@mixin fontFace($name, $src, $weight, $style) {
  $source: $path+$src;

  @font-face {
    font-family: $name;
    src: url($source + '.ttf');
    font-weight: $weight;
    font-style: $style;
  }
}

@include fontFace('Nunito', 'Nunito-Light', 300, normal);
@include fontFace('Nunito', 'Nunito-Regular', 400, normal);
@include fontFace('Nunito', 'Nunito-SemiBold', 600, normal);
@include fontFace('Nunito', 'Nunito-Bold', 700, normal);
@include fontFace('Roboto', 'Roboto-Light', 300, normal);
@include fontFace('Roboto', 'Roboto-Regular', 400, normal);
@include fontFace('Roboto', 'Roboto-Medium', 500, normal);
@include fontFace('Roboto', 'Roboto-Bold', 700, normal);
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

.main {
  margin: auto 0;
  padding: 20px 0;
}

#app {
  position: relative;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: 100%;
  box-sizing: border-box;
  font-family: $nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .arrow {
    padding-right: 40px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .head-links {
    display: flex;
    justify-content: flex-end;
    margin: 30px 40px;

    text-transform: uppercase;

    &__a {
      margin-left: 50px;
      text-decoration: none;
      color: #636B6F;
      font-size: 14px;
      line-height: 19px;
      font-family: $nunito;
      transition: .5s;
      &:hover{
        text-shadow: 0 0 black;
        box-shadow: 0 1px 0 0;
      }
    }
  }

  .footer {
    //flex: 0 0 auto;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 30px 40px;
    @media (max-width: 1024px) {
      margin: 30px 30px;
    }
    @media (max-width: 768px) {

      //margin: 30px 10px;
    }
    @media screen and (max-width: 680px) {
      flex-direction: column;
      align-items: center;
      margin: 30px 10px;


    }

    &__nav {
      display: flex;
      align-items: baseline;
      justify-content: center;
      flex-wrap: wrap;
      font-family: $nunito;
      @media (max-width: 991px) {

        //padding-bottom: 15px;
      }
      @media screen and (max-width: 650px) {
        //padding-left: 0;
        //padding-bottom: 20px;

        //flex-direction: column;
        //align-items: flex-end;
      }


      &-first {
        align-self: baseline;
        //padding-bottom: 15px;
        margin-right: 25px;
        text-decoration: underline;
        color: #636B6F;
        font-size: 14px;
        line-height: 19px;
        transition: .5s;
        text-transform: uppercase;
        &:hover{
          text-shadow: 0 0 black;
        }
        @media (max-width: 650px) {
          margin: 0 10px
        }
        @media screen and (max-width: 414px) {
          margin: 0 10px
        }
        &.router-link-exact-active {
          text-shadow: 0 0 black;

        }
      }
    }


    .routerLink {
      margin-right: 25px;
      text-decoration: none;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      text-transform: capitalize;
      color: #636B6F;
      transition: .3s;
      &:hover{
        text-shadow: 0 0 black;
        box-shadow: 0 1px 0 0;
      }
      @media screen and (max-width: 414px) {

        margin: 0 5px
      }

      &:last-child {
        margin-right: 0;
      }

      &.router-link-exact-active {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

      }
      &.router-link-exact-active:hover {
        text-shadow: none;
        box-shadow: none;
      }
        @media screen and (max-width: 728px) {
          text-shadow: 0 0 black;
          font-weight: 300;
          font-size: 14px;
          line-height: 19px;
          box-shadow: 0 1px 0 0;

      }

    }
  }

  .footer__links {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100px;
    @media (max-width: 991px) {
      //padding-right: 20px;
    }
    @media (max-width: 728px) {
      //padding-right: 0;
    }
    @media screen and (max-width: 680px) {
      padding-top: 15px;
    }
    .footer__links-img {
      align-self: flex-end;
    }
  }


}

</style>
