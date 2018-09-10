<template lang="pug">
  v-speed-dial(
  v-if="$auth.loggedIn"
  v-model="fab"
  :direction="direction"
  :open-on-hover="hover"
  :transition="transition"
  )
    v-btn(
    slot="activator"
    v-model="fab"
    fab
    dark
    color="success"
    :loading="waiting"
    )
      v-icon business_center
      v-icon close

    v-btn(
    fab
    dark
    small
    color="warning"
    ): v-icon person
    v-btn(
    fab
    dark
    small
    color="error"
    @click.stop="logout"
    ): v-icon power_off
</template>


<script>
  export default {
    methods: {
      async logout () {
        this.waiting = true;
        await this.$auth.logout()
          .then(() => this.waiting = this.fab = false)
      }
    },

    data () {
      return {
        waiting: false,
        fab: false,
        direction: 'left',
        hover: false,
        // slide-y-transition
        // slide-y-reverse-transition
        // slide-x-transition
        // slide-x-reverse-transition
        // scale-transition
        transition: 'scale-transition'
      }
    }
  }
</script>
