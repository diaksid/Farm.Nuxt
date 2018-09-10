<template lang="pug">
  v-layout(
  row
  wrap
  )
    v-flex(
    xs12
    tag="header"
    )
      h1.display-3.mb-5(v-text="title")

    v-flex(
    hidden-sm-and-down
    md1
    lg2
    )
      hrabrovo-logo.hidden-md-and-down

    v-flex(
    xs12
    md10
    lg8
    )
      v-container(
      grid-list-md
      fluid
      )
        v-layout(
        row
        wrap
        )
          v-flex(
          v-for="card in cards"
          v-bind="{ [`xs12 md${card.flex}`]: true }"
          :key="card.title"
          )
            v-card
              v-responsive.lazyload.lazyload--fluid(
              v-lazy:background-image="card.src"
              v-img="{src: card.src}"
              :height="`${$vuetify.breakpoint.smAndDown ? 200 : card.flex === 12 ? 352 : 256}px`"
              )
                v-container(fill-height fluid)
              v-card-actions.white
                v-spacer
                v-btn(icon)
                  v-icon(light) favorite
                v-btn(icon)
                  v-icon(light) bookmark
                v-btn(icon)
                  v-icon(light) share
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
            content: 'Аренда техники - Фермерское хозяйство «Храброво».'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: [
              'аренда техники'
            ].join(',')
          }
        ]
      }
    },
    data () {
      return {
        cards: [
          {
            title: 'Аренда 0',
            src: '/media/equipment/000.jpg',
            flex: 12,
            class: 'h-bg--lazy'
          },
          {
            title: 'Аренда 1',
            src: '/media/equipment/003.jpg',
            flex: 6,
            class: 'h-bg--lazy'
          },
          {
            title: 'Аренда 2',
            src: '/media/equipment/001.jpg',
            flex: 6,
            class: 'h-bg--lazy'
          },
          {
            title: 'Аренда 3',
            src: '/media/equipment/002.jpg',
            flex: 6,
            class: 'h-bg--lazy'
          },
          {
            title: 'Аренда 4',
            src: '/media/equipment/005.jpg',
            flex: 6,
            class: 'h-bg--lazy'
          },
          {
            title: 'Аренда 5',
            src: '/media/equipment/004.jpg',
            flex: 12,
            class: 'h-bg--lazy'
          }
        ],
        title: 'Аренда техники'
      }
    }
  }
</script>


<style lang="stylus" scoped>
  .grid-list-md
    padding: 0
</style>
