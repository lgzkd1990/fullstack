import Vue from 'vue';

export default Vue.component(
    'child', {
        data() {
            return {num: 0};
        },
        methods: {
            
        },
        template: `
        <div>
        子级:{{num}}
        </div>
        `,
        created () {
            this.$on('addNum',function(n){
                console.log(n);
                this.num+=n;
            }); 
        }
    }
);