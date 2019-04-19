import Vue from 'vue';

export default Vue.component(
    'child', {
        props: ['parent'],
        data() {
            return { num: 0 };
        },
        methods: {
            fn() {
                //this.parent.num++;
                this.parent.add()
            },
        },
        template: `
        <div>
        子级
        <input type="button" value="1" @click="fn()"/>
        </div>
        `
    }
);