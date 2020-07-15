<template>
    <div>
        <div id="undefine-img">
            <img src="../../static/img/4041.jpg"/>
            <img src="../../static/img/4042.jpg"/>
            <img src="../../static/img/4041.jpg"/>
        </div>
        <p>页面不存在</p>
    </div>
</template>

<script>
    export default {
        name: "undefine"
    }
</script>

<style scoped>
#undefine-img {
    margin: 20vh 0 0 30vw;
    width: 40%;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
}
    #undefine-img img {
        width: 30%;
        flex: 0 0 32.33%;
    }
    p {
        margin: 10vh 0 0 30vw;
        font-weight: bolder;
        font-size: 32px;
        font-family: 华文楷体;
    }
</style>