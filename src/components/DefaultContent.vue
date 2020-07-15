<template>
    <div id="default-content" @click="goto(('/new'))">
        <p>这个页面还没有内容，点击添加</p>
    </div>
</template>

<script>
    export default {
        name: "default-content",
        methods: {
            goto(path) {
                console.log(path)
                this.$router.push(path)
            },
        }
    }
</script>

<style scoped>
    #default-content {
        height: 100%;
        width: 100%;
        color: #DCDCDC;
        font-size: 46px;
    }
</style>