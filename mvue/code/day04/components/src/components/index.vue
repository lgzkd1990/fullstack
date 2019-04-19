<template lang="html">
    <div class="">
        首页
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {}
        },
        async created() {
            //看起来好像差不多啊，但是fetch好像不用import和use
            //let {data}=await this.axios.get('http://localhost:8080/data/1.json');
            //let {data}=await this.$http.get('http://localhost:8080/data/1.json');
            let res = await fetch('http://localhost:8080/data/1.json');
            let data = await res.json();

            console.log(data);
        }
    }
</script>

<style lang="css" scoped>
</style>
