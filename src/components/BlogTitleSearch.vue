<template>
    <div class="blog-title-search">
        <div class="blog-title-search-select">
            <el-select
                    v-model="value"
                    filterable
                    remote
                    reserve-keyword
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="loading">
                <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id">
                </el-option>
            </el-select>
        </div>
        <el-menu
                class="el-menu-vertical-demo"
                @select="handleSelect">
            <el-menu-item v-for="item in blogInnerClassList" :index="item.key">
                <i class="el-icon-setting"></i>
                <span slot="title">{{item.value}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "blog-title-search",
        data() {
            return {
                blogInnerClassList:[],
                options: [],
                value:'',
                list: [],
                loading: false,
                states: []
            }
        },
        mounted() {
            this.getBlogInnerClassList()
        },
        watch: {
            value:function (val) {
                this.$router.push('/blog/'+val)
            }
        },
        methods: {
            getBlogInnerClassList() {
                this.$http.anonymous().get('/file/fileList/fileInnerClassList').then(res=> {
                    this.blogInnerClassList = res
                })
            },
            load(name) {
                this.$http.anonymous().get('/file/file/searchResult?fileName='+name).then(res=> {
                    this.options =  res
                })
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.load(query)
                    }, 200);
                } else {
                    this.options = [];
                }
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
.blog-title-search {
    background-color: white;
    border-radius: 5px;
}
.blog-title-search-select {
    background-color: lightgrey;
    border-radius: 5px;
    padding: 20px 10px;
}

</style>