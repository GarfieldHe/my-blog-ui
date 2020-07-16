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
        width: 100%;
        color: #DCDCDC;
        font-size: 46px;
        background-color: white;
        min-height: 40vh;
        margin-top: 20px;
        border-radius: 5px;
    }
    #default-content p {
        padding: 20px 0 0 50px;
    }
</style>