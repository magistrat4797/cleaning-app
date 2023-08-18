// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

// Custom styles
import "@/assets/styles/styles.scss";

const app = createApp(App);

registerPlugins(app);
library.add(faPaperPlane);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");