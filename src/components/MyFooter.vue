<template>
    <div id="my-footer">
        <div class="footer-content">
            <div class="footer-button" @mouseover="mouseOver('red')" @mouseleave="mouseLeave" :style="styleActive.wechartStyle">
                <img  src="../assets/wechart.png">
            </div>
            <div class="footer-button" @mouseover="mouseOver('blue')" @mouseleave="mouseLeave" :style="styleActive.qqStyle">
                <img  src="../assets/qq2.png">
            </div>
            <div class="footer-button" @mouseover="mouseOver('yellow')" @mouseleave="mouseLeave" :style="styleActive.messageStyle">
                <img  src="../assets/message.png">
            </div>
            <div class="footer-button" @mouseover="mouseOver('green')" @mouseleave="mouseLeave" :style="styleActive.githubStyle">
                <img  src="../assets/github.png">
            </div>
        </div>
        <p class="footer-content">Copyright © 2018-2020 燕十三 All Rights Reserved V.1.0.0 备案号:
            <span>蜀ICP备18008600号</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "my-footer",
        data() {
            return{
                styleActive: {
                    wechartStyle:"",
                    qqStyle:"",
                    messageStyle:"",
                    githubStyle:""
                }
            }
        },
        methods: {
            imgSrc() {
                return "./message.png"
            },
            mouseOver(color) {
                switch (color) {
                    case 'red':
                        this.styleActive.wechartStyle = "background-color:red";
                        break;
                    case 'blue':
                        this.styleActive.qqStyle = "background-color:blue";
                        break;
                    case 'yellow':
                        this.styleActive.messageStyle = "background-color:yellow";
                        break;
                    case 'green':
                        this.styleActive.githubStyle = "background-color:green";
                        break;
                }

                // 操作dom 获取p标签改变其样式
                // this.$refs.acp.style=''
                // var acps = this.$refs.acp
                // acps.style.backgroundColor = "red"
                // acps.src = "../assets/wechart2.png"
            },
            // 移出
            mouseLeave() {
                this.styleActive.wechartStyle = "";
                this.styleActive.qqStyle = "";
                this.styleActive.messageStyle = "";
                this.styleActive.githubStyle = "";
            }
        }
    }
</script>

<style scoped>
    #my-footer {
        width: 100%;
        height: 80px;
        background-color: black;
    }

    .footer-content {
        color: lightgrey;
        font-size: 14px;
        width: 100%;
        display: block;
        text-align: center;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 14px;
    }
    .footer-content span{
        color: white;
        margin-left: 5px;
        font-weight: 400;
    }
    .footer-button {
        width: 20px;
        height: 20px;
        background-color: lightgrey;
        border-radius: 10px;
        background-color: white;
        margin: 0 1vw;
        box-shadow: 4px 4px 3px #888888;
    }
    .footer-button img {
        width: 80%;
        height: 80%;
        margin: 10%;
        border-radius: 40%;
    }
    #wechart-img:hover {
        content: "../assets/wechart (1).png";
    }
</style>