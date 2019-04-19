import Vue from 'vue';
//import Child from './child';
import Parent from './parent';

let vm = new Vue({
    el: '#div1',
    data: {},
    components: {
        //Child,
        Parent
    },
    template: `
    <div>
    <parent/>
</div>
    `
});
