<template lang="pug">
  v-snackbar(
  top
  v-model="notify"
  :timeout="7000"
  :color="$store.state.notify.type"
  :style="`padding-left:${$vuetify.application.left}px`"
  )
    span(v-text="$store.state.notify.message")
    v-btn(
    icon
    flat
    @click="notify = false"
    ): v-icon close
</template>


<script>
  export default {
    computed: {
      notify: {
        get () {
          return this.$store.state.notify.type && this.$store.state.notify.message
        },
        set (val) {
          val === false && this.$store.commit('notify/clear')
        }
      }
    }
  }
</script>
