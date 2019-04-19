import Vue from 'vue';
import Child from './child';

export default Vue.component(
    'parent', {
        data() {
            return {num: 0};
        },
        methods:{
            add(){
                this.num+=5;
            }
        },
        template: `
        <div><div>
        父级,{{num}}
        </div>
        <child :parent="this"/>
        </div>
        `
    }
);