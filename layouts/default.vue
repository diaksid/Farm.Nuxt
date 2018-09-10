<template lang="pug">
  v-app(:dark="$store.state.themeDark")
    v-navigation-drawer(
    app
    permanent
    :mini-variant="$store.state.drawerAppMini"
    )
      v-list
        v-list-tile(
        router
        exact
        ripple
        v-for="(page, i) in pages"
        :key="i"
        :to="page.to"
        )
          v-tooltip(
          right
          :z-index="$store.state.drawerAppMini && 99 || -1"
          )
            v-list-tile-action(slot="activator"): v-icon(v-text="page.icon")
            span(v-text="page.title")
          v-list-tile-content
            v-list-tile-title {{ page.title }}
      v-list.v-list--bottom
        v-list-tile(
        target="_blank"
        href="//daks.pro"
        ): v-list-tile-action: v-icon(light) laptop_windows

    v-toolbar(
    app
    dense
    )
      v-toolbar-side-icon(@click.stop="$store.commit('toggleDrawerAppMini')")
      v-toolbar-title(v-text="title")
      v-spacer
      v-btn(
      icon
      ripple
      href="tel:+0 123 123-45-67"
      ): v-icon phone
      v-btn(
      icon
      ripple
      href="http://shop.khrabrov.biz"
      target="_blank"
      ): v-icon shopping_cart

    v-content: v-container: nuxt

    v-footer(:style="`padding-left:${$vuetify.application.left}px`")
      v-btn.my-0.mx-3(
      icon
      flat
      small
      @click.stop="$store.commit('toggleThemeDark')"
      ): v-icon invert_colors
      span.px-3.ml-auto &copy; 2018

    pro-auth
    pro-goto-top
    pro-notify
</template>


<script>
  import ProAuth from '~/components/ProAuth'
  import ProGotoTop from '~/components/ProGotoTop'
  import ProNotify from '~/components/ProNotify'

  export default {
    components: {
      ProAuth,
      ProGotoTop,
      ProNotify
    },

    data () {
      return {
        pages: [
          {
            to: '/',
            title: 'Хозяйство',
            icon: 'nature_people'
          },
          {
            to: '/rent',
            title: 'Аренда техники',
            icon: 'local_shipping'
          },
          {
            to: '/trade',
            title: 'Продажа стройматериалов',
            icon: 'widgets' // 'category'
          },
          {
            to: '/building',
            title: 'Строительство',
            icon: 'store_mall_directory'
          },
          {
            to: '/vacancy',
            title: 'Приглашаем на работу',
            icon: 'person_add'
          },
          {
            to: '/contact',
            title: 'Контакты',
            icon: 'mail'
          }
        ],
        title: 'ФХ «Храброво»'
      }
    }
  }
</script>


<style lang="stylus">
  @require '../node_modules/vuetify/src/stylus/settings/_variables.styl'

  .v-list--bottom
    position: absolute
    bottom: 0
    padding: 0
    .v-list__tile
      height: $footer-height;

  .v-footer .v-btn
    opacity .7
    &:hover
      opacity 1

  .theme--light
    .v-content
      background: url('~/assets/images/bg/white.linen.png') repeat transparent
</style>
