'use strict'

import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VBtn,
  VCard,
  VCheckbox,
  VDialog,
  VDivider,
  VFooter,
  VForm,
  VGrid,
  VHover,
  VIcon,
  VInput,
  VList,
  VNavigationDrawer,
  VProgressCircular,
  VResponsive,
  VSnackbar,
  VSpeedDial,
  VTextField,
  VTextarea,
  VToolbar,
  VTooltip
} from 'vuetify'
import {
  VFabTransition
} from 'vuetify/es5/components/transitions'
import {
  Ripple,
  Scroll
} from 'vuetify/es5/directives'

const themeCache = require('lru-cache')({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VCheckbox,
    VDialog,
    VDivider,
    VFabTransition,
    VFooter,
    VForm,
    VGrid,
    VHover,
    VIcon,
    VInput,
    VList,
    VNavigationDrawer,
    VProgressCircular,
    VResponsive,
    VSnackbar,
    VSpeedDial,
    VTextField,
    VTextarea,
    VToolbar,
    VTooltip
  },
  directives: {
    Ripple,
    Scroll
  },
  /*theme: {
    primary: '#78909C',
    secondary: '#455A64'
  },*/
  options: {
    themeCache,
    minifyTheme: css => process.env.NODE_ENV === 'production' ? css.replace(/[\s|\r\n|\r|\n]/g, '') : css
  }
})
