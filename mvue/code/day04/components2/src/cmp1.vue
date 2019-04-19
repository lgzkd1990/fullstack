<template lang="html">
    <div class="box">
        cmp1:{{a}}
        <input type="button" value="+1" @click="$refs.c1.n++">
        <Child ref="c1" name="hhhh"/>
    </div>
</template>

<script>
    import Child from "./components/child.vue"

    export default {
        name: 'cmp1',//调试时使用，可选的
        data() {
            return {a: 12}
        },
        methods: {},
        components: {//名字来自于此，局部组件
            Child
        }
    }

</script>

<style lang="css" scoped>
    .box {
        width: 200px;
        height: 200px;
        background: #CCC;
    }
</style>