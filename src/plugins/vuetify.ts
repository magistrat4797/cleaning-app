// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1195FF",
          secondary: "#1E2746",
          tertiary: "#A8C1FF",
          grey: "#BCBCBC"
        },
      },
    },
  },
});
