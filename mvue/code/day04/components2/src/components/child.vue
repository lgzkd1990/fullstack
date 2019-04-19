<template lang="html">
    <div>
        子元素{{n}},{{name}}
    </div>
</template>

<script>
    export default {
        props:['name'],
        data() {
            return {n: 5}
        },
        comments: {}
    }
</script>

<style lang="css" scoped>

</style>