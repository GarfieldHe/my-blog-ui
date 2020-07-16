<template>
    <div>
        <div id="backImg1">
            <div id="blog-name">
                <p>姓名</p>
                <el-button type="primary" :popper-append-to-body="false" class="button-enter" @click="goto('/blog')">
                    进入博客
                </el-button>
                <img src="../../static/img/zhcc.png" @click="scrollTo"/>
            </div>
            <div id="blog-hot1" ref="acp">
                <p>热门文章</p>
                <hr/>
            </div>
        </div>
        <div id="blog-hot2">
            <div class="blog-card-wapper" v-for="item in blogCardList">
                <blog-card class="hot-inner" :key="item.linkUrl"
                           :title="item.title" :time="item.time" :introduce="item.introduction" :imgUrl="item.imgUrl"
                           :linkUrl="item.id" :photoId="item.photoId" :fileInnerClass="item.fileInnerClass"/>
            </div>

        </div>
        <div id="backImg2">
            <div id="blog-link">
                <el-button :popper-append-to-body="false" class="button-index" @click="goto('/lifelog')">生活</el-button>
                <el-button :popper-append-to-body="false" class="button-index" @click="goto('/about')">关于</el-button>
            </div>
            <div id="blog-sign">
                <p id="blog-sign-first">某段话</p>
                <p>另外一段话</p>
            </div>
            <!--<div id="blog-footer">-->
            <!--<p>相关连接</p>-->
            <my-footer></my-footer>
            <!--</div>-->
        </div>
        <go-top/>
    </div>
</template>

<script>
    import BlogCard from '@/components/BlogCard'
    import GoTop from '@/components/GoTop'
    import MyFooter from '@/components/MyFooter'

    export default {
        name: "index",
        components: {
            BlogCard,
            GoTop,
            MyFooter
        },
        data() {
            return {
                blogCardList: []
            }
        },
        mounted() {
            // console.log(this.$store.count)
            // this.$store.commit('increment')
            // console.log(this.$store.count)
            window.addEventListener('scroll', this.handleScroll, true)
            this.hotBlog()
        },
        methods: {
            handleScroll() {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                // 设备/屏幕高度
                let scrollObj = document.getElementById(div); // 滚动区域
                let scrollTop = scrollObj.scrollTop; // div 到头部的距离
                let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
                //滚动条到底部的条件
                if (scrollTop + clientHeight == scrollHeight) {
                    // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
                }
            }
        },
        // todo 触发位置时间
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
        },
        hotBlog() {
            this.$http.anonymous().get('/file/fileList/hot?fileType=blog&fileClass=html').then(res => {
                this.blogCardList = res
            })
        },
        goto(path) {
            console.log(path)
            this.$router.push(path)
        },
        scrollTo() {
            window.scrollTo({
                top: this.$refs.acp.getBoundingClientRect().top,
                behavior: "smooth"
            })
        }
    }
    }
</script>

<style scoped>
    #backImg img {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    #backImg1 {
        width: 100%;
        background-image: url("../../static/img/img8.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    @media (max-width: 1186px) {
        #backImg1 {
            background-size: 1186px 668.5px; /* Force the image to its minimum width */
        }
    }

    #backImg2 {
        width: 100%;
        background-image: url("../../static/img/img3.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    #blog-name {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #blog-name p {
        color: black;
        font-size: 30px;
        font-weight: 900;
        margin-top: 40vh;
        margin-bottom: 20px;
        font-family: 华文仿宋;
    }

    #blog-name button {
        margin-bottom: 30vh;
    }

    #blog-name img {
        width: 46px;
    }

    #blog-hot1 {
        width: 100%;
        height: 120px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #blog-hot1 p {
        font-size: 30px;
        font-weight: bold;
        color: darkgrey;
        text-align: center;
        margin: 20px 0;
        font-family: 华文隶书;
    }

    #blog-hot1 hr {
        height: 2px;
        width: 100px;
        background-color: orange;
        border: none;
    }

    #blog-hot2 {
        width: 90%;
        min-height: 400px;
        background-color: white;
        display: flex;
        flex-flow: row wrap;
        align-content: space-around;
        padding: 0px 5% 30px 5%;
    }

    .blog-card-wapper {
        flex: 0 0 28.33%;
        margin: 1.5% 0.5%;
        padding: 20px;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }

    .hot-inner {
        box-sizing: border-box;
        background-color: white;
    }

    #blog-link {
        width: 100%;
        height: 30vh;
        display: block;
        text-align: center;
        line-height: 30vh;
    }

    .button-index {
        background-color: white;
        width: 20vw;
        margin: 0 5vw;
        border-radius: 10px;
        letter-spacing: 1vw;
        border: none;
        box-shadow: 6px 6px 5px #888888;
        font-size: 18px;
        font-weight: 700;
        font-family: 华文楷体;
    }

    .button-enter {
        border-radius: 10px;
        letter-spacing: 1vw;
        border: none;
        box-shadow: 6px 6px 5px #888888;
        font-size: 18px;
        font-weight: 700;
        font-family: 华文楷体;
    }

    #blog-sign {
        width: 100%;
        min-height: 30vh;
        background-color: white;
        display: block;
        text-align: center;
    }

    #blog-sign p {
        line-height: 30px;
    }

    #blog-sign-first {
        padding-top: 4vh;
    }

    #blog-footer {
        width: 100%;
        height: 150px;
        background-color: black;
        color: white;
    }
</style>