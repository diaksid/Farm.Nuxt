<template lang="pug">
  v-dialog(
  v-if="!$auth.loggedIn"
  v-model="$store.state.modal.login"
  persistent
  max-width="400"
  )
    v-card(light)
      v-card-title.grey.lighten-2(primary-title)
        v-icon.mr-auto(large) person
        v-btn.ma-0(
        fab
        flat
        small
        @click="$store.commit('modal/setLogin', false)"
        ): v-icon close
      v-form(
      ref="form"
      v-model="valid"
      :lazy-validation="true"
      )
        v-card-text
          v-text-field(
          label="E-mail"
          append-icon="email"
          v-model="email"
          required
          :rules="emailRules"
          :counter="32"
          )
          v-text-field.mb-4(
          label="Пароль"
          append-icon="lock"
          v-model="password"
          type="password"
          required
          :rules="passwordRules"
          :counter="32"
          )
        v-divider
        v-card-actions
          v-spacer
          v-btn(
          round
          flat
          color="secondary"
          @click="clear"
          ) Очистить
          v-btn(
          round
          flat
          color="primary"
          @click="submit"
          :loading="waiting"
          :disabled="!valid"
          ) Войти
</template>


<script>
  const emailMask = /[a-z0-9][a-z0-9\-_.]+@([a-z]|[a-z0-9]?[a-z0-9\-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?/i;

  export default {
    methods: {
      clear () {
        this.$refs.form.reset()
      },
      async submit () {
        if (this.waiting = this.$refs.form.validate()) {
          await this.$auth.loginWith('local', { data: {
            email: this.email,
            password: this.password
          }})
            .then(() => {
              this.waiting = false;
              this.$store.commit('modal/setLogin', false);
              this.$store.commit('notify/set', ['success', 'Вход выполнен!'])
            })
            .catch(() => this.waiting = false)
        }
      }
    },

    data () {
      return {
        valid: false,
        waiting: false,
        email: '',
        emailRules: [
          v => !!v || 'E-mail требуется для продолжения!',
          v => (v ? v.length <= 32 : true) || 'E-mail не должен быть длиннее 32 символов!',
          v => emailMask.test(v) || 'E-mail должен быть корректным!'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Пароль требуется для продолжения!',
          v => (v ? v.length >= 7 : true) || 'Пароль не должен быть короче 7 символов!',
          v => (v ? v.length <= 32 : true) || 'Пароль не должен быть длиннее 32 символов!'
        ]
      }
    }
  }
</script>


<style lang="stylus" scoped>
  @require '~vuetify/src/stylus/settings/_variables.styl'

  .v-card__title--primary
    padding: $grid-gutters.lg
</style>
