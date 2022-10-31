import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VuetifyDialog from "vuetify-dialog";
Vue.config.productionTip = false;
Vue.use(VuetifyDialog);
new Vue({
  Vuetify,

  render: (h) => h(App),
}).$mount("#app");
