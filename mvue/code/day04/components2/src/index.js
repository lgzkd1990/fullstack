import Vue from 'vue';
import App from './cmp1.vue';

let vm = new Vue({
    el: '#div1',
    data: {},
    components: {App},
    //router,
    template: `
    <App/>
  `
})
