<template>
    <div id="blog-list">
        <my-header active="3"></my-header>
        <div class="blog-list-wapper">
            <default-content v-if="blogCardList.length === 0"></default-content>
            <div v-else class="blog-list-card" v-for="item in blogCardList" :key="item.linkUrl">
                <blog-card :title="item.title" :time="item.time" :introduce="item.introduction" :imgUrl="item.imgUrl"
                           :linkUrl="item.id" :photoId="item.photoId" :fileInnerClass="item.fileInnerClass"/>
            </div>
        </div>
        <div class="blog-title-search-wapper">
            <blog-title-search></blog-title-search>
        </div>
        <my-footer></my-footer>
    </div>

</template>

<script>
    import MyHeader from '@/components/MyHeader'
    import MyFooter from '@/components/MyFooter'
    import BlogCard from '@/components/BlogCard'
    import DefaultContent from '@/components/DefaultContent'
    import BlogTitleSearch from '@/components/BlogTitleSearch'

    export default {
        name: "life-blog",
        components: {
            MyFooter,
            MyHeader,
            BlogCard,
            DefaultContent,
            BlogTitleSearch
        },
        data() {
            return {
                blogCardList: []
            }
        },
        mounted() {
            console.log(this.$route.params.id)
            this.getBlogList()
        },
        methods: {
            getBlogList() {
                this.$http.anonymous().get('/file/fileList?fileType=life&fileClass=html').then(res => {
                    this.blogCardList = res
                })
            }
        }
    }
</script>

<style scoped>
    .blog-list-card {
        width: 80vw;
        height: 220px;
        margin: 20px 0 10px 0;
    }
    /*.blog-list-card {*/
        /*margin: 20px 0 10px 0;*/
        /*padding: 25px 15px;*/
        /*border: 1px solid lightgrey;*/
        /*border-radius: 5px;*/
        /*background-color: white;*/
    /*}*/

    .blog-list-wapper {
        width: 60vw;
        margin: 80px 4vw 80px 10vw;
        min-height: 60vh;
        display: inline-block;
        vertical-align: top;
        vertical-align:top;
    }

    .blog-title-search-wapper {
        width: 20vw;
        display: inline-block;
        vertical-align: top;
        margin-top: 100px;
        vertical-align:top;
    }
    #blog-list {
        background-image: url("../../static/img/img3.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    @media (max-width: 1186px) {
        #blog-list {
            background-size: 1186px 668.5px; /* Force the image to its minimum width */
        }
    }
</style>