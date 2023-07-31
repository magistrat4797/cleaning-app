// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Custom styles
import "@/assets/styles/styles.scss";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
