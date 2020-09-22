<template>
  <form class="card" @submit.prevent="submitHandler">
    <p class="card__title">Welcome to MinterPay</p>
    <p class="card__desc">CREATE Account</p>
    <div class="card__content">

      <!--      Name-->
      <div class="input-field" :class="{error: ($v.name.$dirty && !$v.name.required)}">

        <label class="label__name" for="name">Your Name</label>
        <input
            id="name"
            class="input"
            type="text"
            placeholder="Name"
            v-model.trim="$v.name.$model"
            v-on:keydown.enter.stop="toggleType"
            :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
        >
        <svg class="input-field__user" width="13" height="15" viewBox="0 0 13 15">
          <use href="../assets/sprite.svg#user-solid-gr" />
        </svg>

        <small
            class="helper-text"
            v-if="$v.name.$dirty && !$v.name.required"
        >
          Name is required.
        </small>
      </div>
      <!--      email-->
      <div class="input-field"
           :class="{error: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
        <label class="label__email" for="email">Email</label>
        <input
            id="email"
            class="input"
            type="text"
            placeholder="E-mail"
            v-model.trim="email"
            v-on:keydown.enter.stop="toggleType"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <svg class="input-field__envelope" width="15" height="15" viewBox="0 0 15 15">
          <use href="../assets/sprite.svg#envelope-solid-gr" />
        </svg>


        <small
            class="helper-text"
            v-if="$v.email.$dirty && !$v.email.required"
        >E-mail is required.</small>
        <small
            class="helper-text "
            v-else-if="$v.email.$dirty && !$v.email.email"
        >Use correct E-mail</small>
      </div>
      <!--      password-->
      <div class="input-field"
           :class="{error: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
        <label class="label__pass" for="password">Пароль</label>
        <input
            id="password"
            class="input"
            :type="type"
            placeholder="Password"
            ref="onFocus"
            @keydown.enter.stop="toggleType"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <svg class="input-field__lock" width="13" height="15" viewBox="0 0 13 15">
          <use href="../assets/sprite.svg#lock-solid-gr" />
        </svg>


<!--        button-->
        <button class="passToggle" @click.prevent="toggleType">
          <svg class="passToggle__img" v-show="showPass" width="19" height="15" viewBox="0 0 19 15">
            <use href="../assets/sprite.svg#view" />
          </svg>

          <svg class="passToggle__img" v-show="!showPass" width="19" height="15" viewBox="0 0 19 15">
            <use href="../assets/sprite.svg#no-view" />
          </svg>

        </button>
        <small
            class="helper-text"
            v-if="$v.password.$dirty && !$v.password.required"
        >
          Password is required.
        </small>
        <small
            class="helper-text"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Password must have at least {{ $v.password.$params.minLength.min }} letters. Now it {{ password.length }}
        </small>
      </div>
      <!--      checkbox-->
      <p class="remember__text">
        <label>
          <input class="remember__check" type="checkbox" v-model="agree"/>
          <span class="remember__span">Remember Me</span>
        </label>
      </p>
    </div>
    <!--    button-->


    <div class="card-action">
      <div>
        <button
            class="loginButton"
            type="submit"
        >
          Register
        </button>
      </div>

      <p class="center">
        Have an account?
        <router-link class="regLink" to="/login">Login</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import {mapGetters} from "vuex";

export default {
  name: 'register',
  data: () => ({
    name: '',
    email: '',
    password: '',
    showPass: false,
    type: 'password',

    agree: false,
    errorMess: false,

  }),
  components: {},

  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required, minLength: minLength(1)},

  },
  computed: mapGetters(["setLocalStorage"]),
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },

    email(newEmail) {
      localStorage.email = newEmail;
    }
  },

  methods: {
    toggleType() {
      //переключаем тип поля
      this.showPass = !this.showPass
      this.type = this.showPass ? 'text' : 'password'
      //ставим курсор в конец поля
      this.$nextTick(() => {
        this.$refs.onFocus.focus();
        this.$refs.onFocus.selectionStart = this.$refs.onFocus.value.length;
      })
    },
    submitHandler() {
      //вызов валидации
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      //запрос к бэку
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      //переадресация на главную страницу
      this.$router.push('/')
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

}

.card__content {
  padding-bottom: 1rem;
  width: fit-content;
  margin: 0 auto;
}

.card__title {
  padding-bottom: 1.875rem;
  font-size: 4rem;
  line-height: 87px;

  letter-spacing: 0.05em;

  color: #3D3D3E;

}

.card__desc {
  padding-bottom: 1.875rem;
  font-weight: 600;
  font-size: 1.125rem;
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


}

.input-field__envelope, .input-field__lock, .input-field__user {
  position: absolute;
  left: 12px;
  top: 43px;
}

.label__email, .label__pass, .label__name {
  align-self: flex-start;
  padding-bottom: 10px;
}

#password {
  font-weight: 300;
  font-size: 1.125rem;
  padding-right: 2.5rem;
  /*line-height: 25px;*/


  color: #242424;
}

.input {

  width: 405px;
  height: 39px;
  padding-left: 2.125rem;
  padding-right: 1rem;
  margin-bottom: 2.75rem;
  line-height: 19px;
  font-size: 1rem;
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
  font-size: 0.875rem;
  line-height: 19px;
  letter-spacing: 0.05em;

}

.passToggle {
  position: absolute;
  top: 40px;
  right: 7px;
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #FFFFFF;
  border: none;
  cursor: pointer;
}

.passToggle:focus {
  /*border: 1px solid #00C2FF;*/
  outline: none;
  border-radius: 50%;

}

.passToggle__img {
  position: absolute;
  left: 2px;
  top: 4px;
}

.helper-text {
  position: absolute;
  top: 77px;
  left: 0;
  border: none;
  color: red;
}

.loginButton {
  width: 405px;
  height: 39px;
  margin-bottom: 1rem;
  background: #0389B4;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 0.875rem;
  line-height: 19px;
  text-transform: uppercase;
  cursor: pointer;

  letter-spacing: 0.05em;

  color: #FFFFFF;
}

.loginButton:focus {
  border: 1px solid #00C2FF;
  outline: none;
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
  cursor: pointer;
}

.remember__span {
  position: absolute;
  left: 20px;
  top: -2px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.regLink{
  transition: .3s;
}
.regLink:hover{
  /*text-shadow: 0 0 #026a8c;*/
  border-bottom: 1px solid #00C2FF;
  /*box-shadow: 0 1px 0 0;*/
}
@media screen and (max-width: 650px) {
  .card__title{
    font-size: 3rem;
    line-height: 72px;
  }
  .input {
    width: 300px;
  }
  .loginButton{
    width: 300px;
  }
}

</style>
