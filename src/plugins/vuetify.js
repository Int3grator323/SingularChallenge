import Vue from "vue";
import Vuetify, { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        base: colors.red,
        primary: colors.blueGrey,
        secondary: colors.grey,
        anchor: colors.amber,
        accent: colors.teal.accent4,
        pink: colors.pink,
        error: colors.red,
        info: colors.amber.accent4,
        success: colors.teal,
        warning: colors.orange,
        teal: colors.teal,
        blue: colors.blue,
      },
    },
  },
});
