import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.blueGrey.darken4, // #263238
        background: colors.blue.lighten5, // #E3F2FD
        tableFish: colors.blue.lighten4, // #BBDEFB
      },
    },
  },
});
