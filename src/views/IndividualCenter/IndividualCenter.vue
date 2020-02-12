<template>
    <div class="section">
        <div class="person_detail">
            <a class="person_pic" href=""><img src="@/assets/image/person_pic.jpg"></a>
            <div class="person_content">
                <h4><a>蚂蚁蚂蚁</a></h4>
                <span> <a href="#">2020-1-30 加入美食杰</a></span><span>|</span><span> <a href="/editperson">编辑个人资料</a></span><br/>
                <span> <a href="#" style="color: #333; font-size: 16px; padding: 4px 0; line-height: 32px">个性签名：这个人很懒，没有留下话哦~</a></span>
                <el-button class="button" type="danger">关注</el-button>
                <el-button class="button" style="background-color: white; color: #ff3232" type="danger">已关注</el-button>
            </div>
            <div class="person_info">
                <ul>
<!--                    用户量， 菜谱数量， 新增用户， 日访问量-->
                    <li class="li1"><a class="li1"><span>粉丝</span><strong>0</strong></a></li>
                    <li class="li2"><a class="li2"><span>收藏</span><strong>0</strong></a></li>
                    <li class="li3"><a class="li3"><span>发布菜谱</span><strong>0</strong></a></li>
                    <li class="li4"><a class="li4"><span>点赞</span><strong>0</strong></a></li>
                </ul>
            </div>
        </div>
        <div class="personTab">
            <div class="tabTitle">
                <ul>
                    <li><a href="">作品</a></li>
                    <li><a href="">关注</a></li>
                    <li><a href="">收藏</a></li>
                    <li><a href="">讨论</a></li>
<!--                    <li><a href="">用户管理</a></li>-->
<!--                    <li><a href="">菜谱管理</a></li>-->
<!--                    <li><a href="">菜单管理</a></li>-->
<!--                    <li><a href="">新闻管理</a></li>-->
<!--                    <li><a href="">评论管理</a></li>-->
                </ul>
            </div>
            <div class="basic-grey" v-show="false">
                <div class="personalTab">
                    <ul class="tabTitle1">
                        <li><a href="#" key="1" :class="{current:index==1}" @click="tabTitle(1)">全部作品</a></li>
                        <li><a href="#" key="2" :class="{current:index==2}" @click="tabTitle(2)">我的作品</a></li>
                        <li><a href="#" key="3" :class="{current:index==3}" @click="tabTitle(3)">我的菜谱</a></li>
                    </ul>
                </div>
                <div class="content" v-show="index==1">
                    11111
                </div>
                <div class="content" v-show="index==2" style="">
                    22222
                </div>
                <div class="content" v-show="index==3">
                    33333
                </div>
            </div>
            <div class="basic-grey" v-show="false">
                <div class="personalTab">
                    <ul class="tabTitle1">
                        <li><a href="#" key="1" :class="{current:index==1}" @click="tabTitle(1)">我的粉丝</a></li>
                        <li><a href="#" key="2" :class="{current:index==2}" @click="tabTitle(2)">我的关注</a></li>
                        <li><a href="#" key="3" :class="{current:index==3}" @click="tabTitle(3)">我的赞赏</a></li>
                    </ul>
                </div>
                <div class="content" v-show="index==1">
                    11111
                </div>
                <div class="content" v-show="index==2" style="">
                    22222
                </div>
                <div class="content" v-show="index==3">
                    33333
                </div>
            </div>
            <div class="basic-grey" v-show="false">
                <div class="personalTab">
                    <ul class="tabTitle1">
                        <li><a href="#" key="1" :class="{current:index==1}" @click="tabTitle(1)">菜谱收藏</a></li>
                        <li><a href="#" key="1" :class="{current:index==1}" @click="tabTitle(2)">美食菜单</a></li>
                        <li><a href="#" key="2" :class="{current:index==2}" @click="tabTitle(3)">健康新闻</a></li>
                    </ul>
                </div>
                <div class="content" v-show="index==1">
                    11111
                </div>
                <div class="content" v-show="index==2" style="">
                    22222
                </div>
                <div class="content" v-show="index==3">
                    33333
                </div>
            </div>
            <div class="basic-grey" v-show="true">
                <div class="personalTab">
                    <ul class="tabTitle1">
                        <li><a href="#" key="1" :class="{current:index==1}" @click="tabTitle(1)">我的评论</a></li>
                        <li><a href="#" key="2" :class="{current:index==2}" @click="tabTitle(2)">我的提问</a></li>
                    </ul>
                </div>
                <div class="content" v-show="index==1">
                    11111
                </div>
                <div class="content" v-show="index==2" style="">
                    22222
                </div>
                <div class="content" v-show="index==3">
                    33333
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name:"IndividualCenter",
        data:function () {
            return{
                index:"1"
            }
        },
        methods:{
          tabTitle:function(num) {
              this.index = num
          }
        },
    }
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    em{
        font-style: normal;
    }
    ul{
        list-style: none; /*鍘婚櫎鍒楄〃鏍峰紡灏忕偣*/
    }
    a {
        text-decoration: none;
    }
    .clearfix:before,.clearfix:after{/*娓呴櫎娴姩*/
        display:table;
        content:"";
    }
    .clearfix:after {/*娓呴櫎娴姩*/
        clear:both;
    }
    .clearfix {/*娓呴櫎娴姩*/
        *zoom:1;
    }
    .section{
        width:1200px;
        margin:40px auto;
    }
    .person_detail{
        height:210px;
        background-color: #fff;
    }
    .person_pic{
        float:left;
    }
    .person_detail .person_pic img{
        width:210px;
        height:210px;
        float:left;
    }
    .person_content{
        margin:0 35px;
        float:left;
        color: #888;
        width: 650px;
        overflow: auto;
        border-bottom: 1px solid #eee;
        padding-bottom:10px ;
        position: relative;
    }
    .person_content h4{
        font-size: 24px;
        color: #333;
        line-height: 44px;
        font-family: Microsoft Yahei;
        padding: 18px 0 10px;
    }
    .person_content span a{
        color: #888;
    }
    .person_content span{
        line-height: 24px;
        padding: 4px 4px 0;
        font-size: 14px;
    }
    .person_content strong{
        color: #999;
        font-size: 10px;
    }
    .person_info{
        width: 200px;
        padding: 20px;
        float: right;
        background: #fff;
        height: 170px;
    }
    .person_info li{
        height: 81px;
        width: 91px;
        float: left;
        margin: 0px 8px 8px 0px;
        background: #f8f8f8;
        float: left;
        border-radius: 32px;
    }
    .person_info li a{
        border-radius: 32px;
        display: block;
        height: 81px;
        width: 91px;
        box-shadow: 0px 0px 6px rgba(0,0,0,0.05) inset;
        font-size:10px;
        overflow: auto;
    }
    .person_info  .li1{
        border-bottom-right-radius: 0;
    }
    .person_info  .li2{
        border-bottom-left-radius: 0;
    }
    .person_info .li3{
        border-top-right-radius: 0;
    }
    .person_info .li4{
        border-top-left-radius: 0;
    }
    .person_info  span{
        width: 67px;
        padding:14px 0 0 14px;
        height:20px;
        float: left;
    }
    .person_info  strong{
        float: left;
        display: block;
        font-size: 18px;
        color: #ff3232;
        font-family: Microsoft Yahei;
        padding-left: 14px;
        line-height: 32px;
    }
    .button{
        padding:6px 10px;
        position: absolute;
        right:15px;
        top:30px;
    }
    .tabTitle{
        width:1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    .tabTitle ul{
        height: 50px;
        width: 990px;
        margin: 20px 0 20px;
    }
    .tabTitle ul li{
        display: inline-block;
        vertical-align: top;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #333;
    }
    .tabTitle ul li a{
        color: #333;
        display: inline-block;
        vertical-align: top;
        padding: 0px 0px;
        text-align: center;
        margin: 0px 20px;
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
    .tabTitle1{
        display: block;
        font-size: 14px;
        overflow: auto;
        padding: 14px 20px;
    }
    .tabTitle1 li{
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
    .tabTitle1 li a{
        display: block;
        background: #fff;
        color: #333;
        padding: 0px 18px;
        margin-right: 10px;
        border-radius: 4px;
    }
    .tabTitle1 li a.current {
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
</style>
