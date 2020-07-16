<template>
    <div id="my-header">
        <div id="header-logo" @click="goto('/index')">logo</div>
        <div id="header-content">

            <el-menu :default-active="activeIndex" class="el-menu-demo navmenu" mode="horizontal" :popper-append-to-body="false" >
                <el-menu-item v-for="item in menuList" :index="item.num" :key="item.label" @click="goto(item.path)"
                              :popper-append-to-body="false" class="navmenu-item">{{item.label}}</el-menu-item>
            </el-menu>
        </div>
        <div id="header-user">user</div>
    </div>
</template>

<script>
    export default {
        name: "my-header",
        props:["active"],
        data() {
            return {
                activeIndex: this.active,
                menuList: [{
                    label: "首页",
                    num: "1",
                    path: "/index"
                }, {
                    label: "博客",
                    num: "2",
                    path: "/blog"
                }, {
                    label: "生活",
                    num: "3",
                    path: "/lifelog"
                }, {
                    label: "关于",
                    num: "4",
                    path: "/about"
                }]
            }
        },
        methods: {
            goto(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .menu-list {
        text-align: right;
        line-height: 60px;
    }

    #my-header {
        display: flex;
        height: 60px;
        background-color: white;
    }
    #header-logo {
        width: 10%;
        line-height: 60px;
    }
    #header-content {
        width: 88%;
        display: flex;
        justify-content: flex-end;
        line-height: 60px;
        margin: 0 4% 0 0;
    }
    #header-content div {
        width: 20%;
        line-height: 60px;
    }
    #header-user {
        width: 10%;
        line-height: 60px;
    }
    .navmenu {

    }
    .navmenu-item {
        width: 12vw;
        display: block;
        text-align: center;
    }
</style>