<template lang="pug">
  v-container(grid-list-sm fluid)
    v-layout.mb-5(row)
      hrabrovo-logo.mr-auto
      vue-to-nuxt-logo.mr-3
      vuetify-logo

    v-layout(row wrap)
      v-flex(
      xs12 md6 lg4 xl3
      v-for="n in 20"
      :key="n"
      )
        img.lazyload.lazyload--fluid(
        v-lazy:background-image="`https://picsum.photos/600/450?image=${n * 4 + 3}`"
        v-img:index="{src: `https://picsum.photos/800/600?image=${n * 4 + 3}`}"
        src="/images/system/lazy.4x3.svg"
        width="800"
        height="600"
        )
</template>


<script>
  import HrabrovoLogo from '~/components/HrabrovoLogo'
  import VueToNuxtLogo from '~/components/VueToNuxtLogo'
  import VuetifyLogo from '~/components/VuetifyLogo'

  export default {
    components: {
      HrabrovoLogo,
      VueToNuxtLogo,
      VuetifyLogo
    },

    data () {
      return {
        index: 'picsum'
      }
    }
  }
</script>

<style lang="stylus">
  .lazyload
    display: flex
    border-radius: 4px
</style>
