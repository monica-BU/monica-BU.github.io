// src/main.js
import App from './App.js';

new Vue({
  render: h => h(App),
}).$mount(`#app`);

new Vue({
    el: '#todo',
    data: {
      
      todoList: []
    }
  })