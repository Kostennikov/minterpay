<template>
  <form class="card" @submit.prevent="submitHandler">
    <p class="card__title">Recovery account</p>
    <p class="card__desc">Enter your email</p>
    <div class="card__content">


      <div class="input-field"
           :class="{error: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
        <label class="input-field__label" for="email">Email</label>
        <input
            id="email"
            class="input"
            type="text"
            ref="inputEmail"
            placeholder="E-mail"
            v-model.trim="email"

            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <svg class="input-field__envelope" width="15" height="15" viewBox="0 0 15 15">
          <use href="../assets/sprite.svg#envelope-solid-gr" />
        </svg>
<!--        <img class="input-field__envelope" src="../assets/envelope-solid-gr.svg" alt="">-->

        <small
            class="helper-text"
            v-if="$v.email.$dirty && !$v.email.required"
        >E-mail is required.</small>
        <small
            class="helper-text"
            v-else-if="$v.email.$dirty && !$v.email.email"
        >Use correct E-mail</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button

            class="loginButton"
            type="submit"
        >
          Next
        </button>
      </div>


    </div>
  </form>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators'
// import {mapGetters} from 'vuex'

export default {
  name: 'login',
  data: () => ({
    email: '',
    showPass: false,
    agree: false,
    invalid: false
  }),
  validations: {
    email: {email, required},

  },
  // computed: mapGetters(["setLocalStorage"]),

  mounted() {
    if (localStorage.email) {
      this.email = localStorage.email;
    }
  },
  watch: {
    email(newEmail) {
      localStorage.email = newEmail;
    },
  },
  methods: {
    submitHandler() {

      console.log(this.$v.$invalid);

      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
      }
      console.log(formData)
      //переадресация на главную страницу

      this.$router.push('/password-reset')
    }
  }
}
</script>
<style scoped>
@keyframes shakeError {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(0.375rem);
  }
  30% {
    transform: translateX(-0.375rem);
  }
  45% {
    transform: translateX(0.375rem);
  }
  60% {
    transform: translateX(-0.375rem);
  }
  75% {
    transform: translateX(0.375rem);
  }
  90% {
    transform: translateX(-0.375rem);
  }
  100% {
    transform: translateX(0);
  }
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #00C2FF;
}

.card {
  /*margin: auto;*/
  /*align-self: center;*/

}

.card__content {
  padding-bottom: 15px;
  width: fit-content;
  margin: 0 auto;
}

.card__title {

  padding-bottom: 30px;
  font-size: 64px;
  line-height: 87px;

  letter-spacing: 0.05em;

  color: #3D3D3E;


}

.card__desc {
  padding-bottom: 30px;
  font-weight: 600;
  font-size: 18px;
  /*line-height: 25px;*/


  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #646464;
}

.input-field {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

}

.error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: .6s;
  animation-timing-function: ease-in-out;
}

.invalid {
  border: 1px solid #ff0000 !important;

  /*background: red;*/
  /*border: 1px solid red;*/

}

.input-field__envelope, .input-field__lock {
  position: absolute;
  left: 12px;
  top: 43px;
}

.input-field__label {
  align-self: flex-start;
  padding-bottom: 10px;
}

.input {

  width: 405px;
  height: 39px;
  padding-left: 34px;
  padding-right: 15px;
  margin-bottom: 44px;
  line-height: 20px;
  font-size: 16px;
  /*margin-top: 10px;*/
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;

}

input:focus {
  border: 1px solid #00C2FF;
  outline: none;
  color: #3D3D3E;
}

.input::placeholder {
  color: #C4C4C4;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.05em;

}


.helper-text {
  position: absolute;
  top: 77px;
  left: 0;
  border: none;
  color: red;
}

.remember__text {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #888888;
}

.remember__check {
  width: 16px;
  height: 16px;
  border: 1px solid #888888;
  box-sizing: border-box;
  border-radius: 2px;

}

.remember__span {
  position: absolute;
  left: 20px;
  top: -2px;
}
.loginButton {
  width: 405px;
  height: 39px;
  margin-bottom: 15px;
  background: #0389B4;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;


  letter-spacing: 0.05em;

  color: #FFFFFF;
}

.loginButton:focus {
  border: 1px solid #00C2FF;
  outline: none;


}
@media screen and (max-width: 650px) {
  .card__title {
    font-size: 50px;
    line-height: 72px;
  }

  .input {
    width: 300px;
  }

  .loginButton {
    width: 300px;
  }
}

</style>