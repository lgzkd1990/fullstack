import Vue from 'vue';
import Child from './child';

export default Vue.component(
    'parent', {
        methods: {
            fn() {
                this.$refs.c1.num++;
            }
        },
        template: `
        <div><div>
        父级
        <input type="button" value="+1" @click="fn()"/>
        </div>
        <child ref="c1" />
        </div>
        `
    }
);