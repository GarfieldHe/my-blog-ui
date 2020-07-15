<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="fileClass">
                <el-select v-model="form.fileClass" placeholder="">
                    <el-option label="blog" value="blog"></el-option>
                    <el-option label="life" value="life"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="introduction">
                <el-input v-model="form.introduction"></el-input>
            </el-form-item>
            <el-form-item label="photo">
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="file">
                <input ref="file" type="file"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "new-blog",
        data() {
            return {
                form: {
                    title: '',
                    fileClass: '',
                    introduction: ''
                },
                dialogImageUrl: '',
                dialogVisible: false,
                imgId:''
            }
        },
        methods: {
            onSubmit() {
                // console.log(this.$refs.file.files[0]);
                var formdata = new FormData()
                formdata.append('file', this.$refs.file.files[0])
                formdata.append('fileName', this.form.title)
                formdata.append('fileClass', this.form.fileClass)
                formdata.append('photoId', this.imgId)
                formdata.append('introduction', this.form.introduction)
                this.$http.anonymous().post("./file/upload", formdata).then(res => {
                    console.log(res)
                    // todo 提交成功
                    Message.success("提交成功")
                })
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleSuccess(response, file, fileList) {
                var formdata = new FormData()
                formdata.append('file', file.raw)
                this.$http.anonymous().post("./file/upload/img", formdata).then(res => {
                    this.imgId = res.message
                })
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>