import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import BaseButton from "./components/ui/BaseButton.vue";
import './style.css'
import './styles/ui.css'

const app = createApp(App);
app.use(router);
app.use(i18n);
app.component("BaseButton", BaseButton);
app.mount("#app");