<template>
    <div>
        <my-header active="4"></my-header>
        <div>about</div>
        <my-footer></my-footer>
    </div>

</template>

<script>
    import MyHeader from '@/components/MyHeader'
    import MyFooter from '@/components/MyFooter'
    export default {
        name: "blog",
        components: {
            MyFooter,
            MyHeader
        },
        mounted(){
            console.log(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>