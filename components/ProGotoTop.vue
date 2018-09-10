<template lang="pug">
  v-fab-transition
    v-btn(
    v-scroll="onScroll"
    v-show="showToTop"
    fab
    fixed
    bottom
    right
    dark
    color="pink"
    @click.stop="goToTop"
    ): v-icon expand_less
</template>


<script>
  export default {
    methods: {
      onScroll () {
        this.showToTop = (window.pageYOffset || document.documentElement.scrollTop) > 80
      },
      goToTop () {
        this.$vuetify.goTo(0, {
          duration: 500,
          offset: 0,
          easing: 'easeInOutCubic'
        })
      }
    },

    data () {
      return {
        showToTop: false
      }
    }
  }
</script>


<style lang="stylus" scoped>
  @require '~vuetify/src/stylus/settings/_variables.styl'

  .v-btn--bottom
    bottom: $footer-height + 4px !important
    opacity .7
    &:hover
      opacity 1
</style>
