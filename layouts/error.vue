<template lang="pug">
  v-layout(
  column
  fill-height
  justify-center
  align-center
  )
    h3.error-brand &mdash; <span>DAkS PRO</span> &mdash;

    .error-content
      h1.error-code(v-text="error.statusCode")
      h2.error-message(v-text="error.message")

    .error-link(v-if="error.statusCode === 404")
      v-btn(
      fab
      to='/'
      ): v-icon home
</template>


<script>
  export default {
    name: 'nuxt-error',
    props: [
      'error'
    ],
    head () {
      return {
        title: this.error.message || 'An error occured'
      }
    }
  }
</script>


<style scoped lang="stylus">
  .error-brand
    color: rgba(255, 255, 255, .7)
    font-size: 3vmin
    span
      color: rgba(128, 128, 128, .3)

  .error-content
    display: flex
    flex-direction: row
    align-items: center
    padding: 10vmin 0
    line-height 10vmin

  .error-code
    margin: 0
    padding: 0 5vmin 0 0
    width: 45vmin
    color: rgba(255, 255, 255, .5)
    font-size: 5vmin
    font-weight: 500
    text-align right
    border-right: 4px solid rgba(255, 255, 255, .1)

  .error-message
    margin: 0
    padding: 0 0 0 5vmin
    width: 45vmin
    font-size: 2vmin
    font-weight: normal

  .theme--light
    .error-brand
      color: rgba(0, 0, 0, .3)
      span
        color: rgba(128, 128, 128, .5)

    .error-code
      color: rgba(0, 0, 0, .5)
      border-right-color: rgba(128, 128, 128, .3)
</style>
