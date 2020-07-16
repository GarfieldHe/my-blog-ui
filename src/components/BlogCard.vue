<template>
    <div>
        <div class="blog-card">
            <img ref="img" @click="goto('/blog/'+linkUrl)" class="blog-card-inner" :src="img"/>
            <div class="blog-card-inner">
                <div class="bolg-card-title">
                    <div class="bolg-card-fileInnerClass">
                        <i class="el-icon-s-flag"></i>
                        <p>{{fileInnerClass}}</p>
                    </div>
                    <p class="bolg-card-title-title">{{title}}</p>
                </div>
                <p class="bolg-card-time">{{time}}</p>
                <p class="bolg-card-introduce">{{introduce}}</p>
                <p @click="goto('/blog/'+linkUrl)" class="bolg-card-more">阅读更多</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog-card",
        props: ["title", "time", "introduce", "imgUrl", "linkUrl", "photoId","fileInnerClass"],
        data() {
            return {}
        },
        computed: {
            img() {
                return './file/download?id=' + this.photoId
            }
        },
        methods: {
            goto(path) {
                console.log(path)
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .blog-card {
        width: 100%;
        background-color: white;
    }

    .blog-card img {
        height: 200px;
        width: 350px;
        min-width: 350px;
        display: inline-block;
    }

    .blog-card div {
        display: inline-block;
    }

    .bolg-card-title {
        font-family: 微软雅黑;
        font-size: 16px;
        margin: 10px;
    }
    .bolg-card-title p{
        display: inline-block;
    }

    .bolg-card-time {
        font-family: 微软雅黑;
        font-size: 12px;
        color: darkgrey;
        margin-left: 10px;
    }

    .bolg-card-introduce {
        font-family: 微软雅黑;
        font-size: 14px;
        color: grey;
        margin: 8px 0 0 10px;
    }

    .bolg-card-more {
        color: lightskyblue;
        font-size: 14px;
        margin: 14px 0 0 10px;
    }
    .bolg-card-fileInnerClass {
        display: flex;
        flex-direction: row;

    }

</style>