<template>
    <div class="blog-inner">
        <my-header active="2"></my-header>
        <div class="blog-html" v-html="blogHtml"></div>
        <!--<div class="blog-title-search-wapper">-->
            <!--<blog-title-search ></blog-title-search>-->
        <!--</div>-->
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
    width: 70vw;
    margin: 80px 4vw 80px 10vw;
    min-height: 60vh;
    display: inline-block;
    vertical-align:top;
    background-color: white;
    padding: 5vw;
    border-radius: 5px;
}
.blog-inner {
    background-image: url("../../static/img/img3.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
@media (max-width: 1186px) {
    .blog-inner {
        background-size: 1186px 668.5px; /* Force the image to its minimum width */
    }
}
/*.blog-title-search-wapper {*/
    /*width: 20vw;*/
    /*display: inline-block;*/
    /*vertical-align:top;*/
    /*margin-top: 100px;*/
/*}*/
</style>