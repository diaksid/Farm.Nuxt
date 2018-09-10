<template lang="pug">
  v-layout(row)
    header
      h1.display-3.mb-5(v-text="title")
      hrabrovo-logo.mb-5
      ul.ml-5(v-model="ajax")
        li(
        v-for="(item, i) in ajax"
        :key="i"
        v-text="item.name"
        )
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
            content: 'Приглашаем на работу - Фермерское хозяйство «Храброво».'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: [
              'вакансия'
            ].join(',')
          }
        ]
      }
    },

    async asyncData ({$axios}) {
      return {
        ajax: await $axios.$get('/users')
      }
    },

    data () {
      return {
        title: 'Приглашаем на работу'
      }
    }
  }
</script>
