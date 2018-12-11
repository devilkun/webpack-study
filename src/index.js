import Vue from "vue";

import App from "./app.vue";

const root = document.createElement("div");

document.body.appendChild(root);

new Vue({
  // 声明一个方法

  render: h => h(App)
}).$mount(root);
