<template lang="pug">
  v-layout(row)
    header
      h1.display-3.mb-5(v-text="title")
      hrabrovo-logo
</template>


<script>
  import HrabrovoLogo from '~/components/HrabrovoLogo'

  export default {
    components: {
      HrabrovoLogo
    },

    head () {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Строительство домов, бань, беседок - Фермерское хозяйство «Храброво».'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: [
              'строительство'
            ].join(',')
          }
        ]
      }
    },

    data () {
      return {
        title: 'Строительство'
      }
    }
  }
</script>
