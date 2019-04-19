import Vue from 'vue';
import Child from './child';

export default Vue.component(
    'parent', {
        data() {
            return {}
        },
        methods: {
            fn() {
                console.log('aaa');
                this.$refs.c1.$emit('addNum', 8);//给某个元素发送事件
            }
        },
        template: `
        <div><div>
        父级
        <input type="button" value="+8"  @click="fn()"/>
        </div>
        <child ref="c1" />
        </div>
        `
    }
);