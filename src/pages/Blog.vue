<template>
    <div class="blog-inner">
        <my-header active="2"></my-header>
        <div class="blog-html" v-html="blogHtml"></div>
        <div class="blog-title-search-wapper">
            <blog-title-search ></blog-title-search>
        </div>
        <my-footer></my-footer>
    </div>

</template>

<script>
    import MyHeader from '@/components/MyHeader'
    import MyFooter from '@/components/MyFooter'
    import BlogTitleSearch from '@/components/BlogTitleSearch'
    export default {
        name: "blog",
        components: {
            MyFooter,
            MyHeader,
            BlogTitleSearch
        },
        data() {
            return {
                blogHtml: ''
            }
        },
        mounted(){
            this.$http.anonymous().get('/file/download/html?id='+this.$route.params.id).then(res => {
                this.blogHtml = res
            })
        }
    }
</script>

<style scoped>
.blog-html {
    width: 60vw;
    margin: 80px 4vw 80px 10vw;
    min-height: 60vh;
    display: inline-block;
    vertical-align:top;
}
.blog-title-search-wapper {
    width: 20vw;
    display: inline-block;
    vertical-align:top;
    margin-top: 100px;
}
</style>