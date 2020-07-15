<template>
    <div>
        <img v-if="btnFlag" class="go-top" src="../../static/img/toTop.png" @click="backTop">
    </div>
</template>

<script>
    export default {
        name: "go-top",
        mounted () {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },

        data() {
            return {
                btnFlag:false
            }
        },
        methods: {
            backTop() {

                let timer = setInterval(() => {
                    let ispeed = Math.floor(-this.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
                    if (this.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            },
            scrollToTop () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.scrollTop = scrollTop
                if (this.scrollTop > 110) {
                    this.btnFlag = true
                } else {
                    this.btnFlag = false
                }
            }

        }
    }
</script>

<style scoped>
.go-top {
    margin: 10px;
    width: 50px;
    position: fixed;
    right: 0;
    bottom: 0;
}
</style>