<template>
    <div>
        <h3 class="food_title">修改个人资料</h3>
        <form action="" method="post" class="basic-grey">
            <div class="personalTab">
                <a href="/individualcenter"><div class="return">返回</div></a>
                <ul class="tabTitle">
                    <li><a href="#" key="1" :class="{current:index==1}" @click="tabTitle(1)">编辑个人资料</a></li>
                    <li><a href="#" key="2" :class="{current:index==2}" @click="tabTitle(2)">修改头像</a></li>
                    <li><a href="#" key="3" :class="{current:index==3}" @click="tabTitle(3)">修改密码</a></li>
                </ul>
            </div>
            <div class="content" v-show="index==1">
                <label>
                    <span>昵称:</span>
                    <input id="username" type="text" name="name" placeholder="请输入昵称" />
                </label>
                <label>
                    <span>姓名:</span>
                    <input id="realname" type="text" name="name" placeholder="请输入真实姓名" />
                </label>
                <label>
                    <span>性别:</span><select name="selection">
                    <option value="Job Inquiry">美女</option>
                    <option value="General Question">暖男</option>
                </select>
                </label>
                <label>
                    <span>生日:</span>
                    <input id="birthday" type="date"  name="data" placeholder="请输入生日" />
                </label>
                <label>
                    <span>Email :</span>
                    <input id="email" type="email" name="email" placeholder="请输入你的电子邮箱" />
                </label>

                <label>
                    <span>个性签名 :</span>
                    <textarea id="message" name="message" placeholder="请描述一下你自己~"></textarea>
                </label>

            </div>
            <div class="content" v-show="index==2" style="margin-bottom: 30px">
                <label>
                    <span>&nbsp;</span>
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove" limit="1">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </label>
            </div>
            <div class="content" v-show="index==3">
                <label>
                    <span>旧密码:</span>
                    <input id="oldpass" type="text" name="oldpass" placeholder="请输入旧密码" />
                </label>
                <label>
                    <span>新密码:</span>
                    <input id="newpass" type="text" name="newpass" placeholder="请输入新密码" />
                </label>
                <label>
                    <span>重复密码:</span>
                    <input id="repass" type="text" name="repass" placeholder="请再次输入密码" />
                </label>
            </div>
            <label style="margin:10px 0 40px 0">
                <span>&nbsp;</span>
                <el-button class="input button" type="danger" @click="login">提交</el-button>
            </label>
        </form>
    </div>
</template>
<script>
    export default {
        name:"EditPerson",
        data:function () {
          return{
              index:'1',
              value1:'',
              dialogImageUrl: '',
              dialogVisible: false
          }
        },
        methods: {
            tabTitle:function(num){
              this.index=num
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>
<style scoped>
    *{
        margin:0;
        padding:0; /*清除内外边距*/
    }
    ul{
        list-style: none; /*去除列表样式小点*/
    }
    a {
        text-decoration: none;
    }
    .clearfix:before,.clearfix:after{/*清除浮动*/
        display:table;
        content:"";
    }
    .clearfix:after {/*清除浮动*/
        clear:both;
    }
    .clearfix {/*清除浮动*/
        *zoom:1;
    }
    .food_title{
        width:1200px;
        height:120px;
        text-align:center;
        margin:0 auto;
        line-height:120px;
    }
    .basic-grey {
        background: #fafafa;
        margin: 0 auto 60px;
        width: 1200px;
        font: 12px Georgia, "Times New Roman", Times, serif;
        color: #888;
        text-shadow: 1px 1px 1px #FFF;
        border:1px solid #E4E4E4;
    }
    .basic-grey .personalTab {
        background: #fff;
        font-size: 25px;
        height:68px;
        border-bottom:1px solid #E4E4E4;
        color: #888;
    }
    .return{
        display: block;
        line-height: 68px;
        text-align: center;
        height:68px;
        width: 80px;
        font-size: 18px;
        border-right: 1px solid #E4E4E4;
        float: left;
    }
    .tabTitle{
        display: block;
        font-size: 14px;
        overflow: auto;
        padding: 14px 20px;
    }
    .tabTitle li{
        float: left;
        display: inline-block;
        vertical-align: top;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        position: relative;
        color: #333;
        float: left;
    }
    .tabTitle li a{
        display: block;
        background: #fff;
        color: #333;
        padding: 0px 18px;
        margin-right: 10px;
        border-radius: 4px;
    }
    .tabTitle li a.current {
        display: block;
        vertical-align: top;
        padding: 0px 14px;
        margin-right: 10px;
        border-radius: 4px;
        background: #ff3232;
        color: #fff;
    }
    .content{
        background-color: #fafafa;
        padding: 30px 0 0;
    }
    .submit{
        margin-bottom: 40px;
    }
    .basic-grey h1>span {
        display: block;
        font-size: 9px;
    }
    .basic-grey label {
        display: block;
        margin: 0px;
    }
    .basic-grey label>span {
        float: left;
        width: 20%;
        text-align: right;
        padding-right: 10px;
        margin-top: 13px;
        color: #888;
    }
    .basic-grey input[type="text"], .basic-grey input[type="email"], .basic-grey input[type="date"],.basic-grey textarea, .basic-grey select {
        border: 1px solid #DADADA;
        color: #888;
        height: 30px;
        margin-bottom: 16px;
        margin-right: 6px;
        margin-top: 2px;
        outline: 0 none;
        padding: 3px 3px 3px 5px;
        width: 69%;
        font-size: 12px;
        line-height:15px;
        box-shadow: inset 0px 1px 4px #ECECEC;
        -moz-box-shadow: inset 0px 1px 4px #ECECEC;
        -webkit-box-shadow: inset 0px 1px 4px #ECECEC;
    }
    .basic-grey textarea{
        padding: 5px 3px 3px 5px;
    }
    .basic-grey select {
        background: #FFF  no-repeat right;
        background: #FFF  no-repeat right;
        appearance:none;
        -webkit-appearance:none;
        -moz-appearance: none;
        text-indent: 0.01px;
        text-overflow: '';
        width: 70%;
        height: 35px;
        line-height: 25px;
    }
    .basic-grey textarea{
        height:100px;
    }
    .basic-grey .button {
        background: #ff7575;
        border: none;
        padding: 10px 25px 10px 25px;
        color: #FFF;
        box-shadow: 1px 1px 5px #B6B6B6;
        border-radius: 3px;
        text-shadow: 1px 1px 1px #9E3F3F;
        cursor: pointer;
    }
    .basic-grey .button:hover {
        background: #ff3232
    }
    .avatar-uploader .el-upload {
        border: 1px solid #d9d9d9;
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
        border: 1px solid #d9d9d9;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
