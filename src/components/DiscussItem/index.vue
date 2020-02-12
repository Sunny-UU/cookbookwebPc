<template>
    <div class="discuss_section clearfix">
        <h2>白切鸡讨论区</h2>
        <div id=discuss_list clearfix>
            <div class="discuss_person">
                <a href="" class="image_head"><img src="../../assets/image/gg1.jpg" alt=""></a>
                <form class="discuss_form">
                    <div class="discuss_sign">
                        <em style="padding-right: 5px">给内容一个标签:</em>
                        <span :class="{sign:0!=1}">随意吐槽</span>
                        <span>提问求解</span>
                    </div>
                    <textarea name="discuss" id="" cols="30" rows="10"></textarea>
                    <a href=""  class="addDiscuss discuss_btn">上传成果作品</a>
                    <input type="submit" value="提交" class="discuss_submit discuss_btn">
                </form>
            </div>
            <div class="discuss_tab clearfix">
                <strong>评论排序：</strong>
                <span class="newest">最新</span>
                <span>最热</span>
            </div>
            <div class="discuss_space">
                <ul id="discuss_other">
                    <li>
                        <a href="" class="image_head"><img src="../../assets/image/gg1.jpg"  alt="">
                            <h5 class="author_name">杰米1042</h5>
                        </a>
                        <div class="discuss_per">
                            <p><span class="sign">随意吐槽</span>哈哈哈好想吃</p>
                            <div class="discuss_time"><span class="submit_time">2019-12-23 12：34 <a href="">美食杰</a></span>
                                <a class="turn" href="">回复</a>
                                <span class="goods_num"><i class="iconfont">&#xe602;</i><strong >0</strong></span>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"DiscussItem",
        data:function(){
            return{

            }
        }
    }
</script>
<style scoped>
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    em{
        font-style: normal;
    }
    h2{
        background-color:#fff;
        font-size: 24px;
        color: #333;
        height: 66px;
        line-height: 66px;
        border-bottom: 1px solid #eee;
        text-indent: 24px;
        font-family: Microsoft Yahei;
        display: block;
    }
    .discuss_section{
        width: 770px;
        background-color: white;
    }
    #discuss_list{
        padding-left:40px;
        width:770px;
        padding:20px 0;
        background-color: #fff;
    }
    .discuss_person{
        width:730px;
        height:200px;
        padding:0 20px;
    }
    .image_head{
        width:50px;
        height:50px;
        float: left;
        display:block;
    }
    #discuss_list a img{
        width:50px;
        height:50px;
        display:block;
    }
    .discuss_form{
        float:left;
        width:660px;
        height:180px;
        margin-left:20px;
        margin-bottom:20px;
    }
    .discuss_sign{
        width:100%;
        height:24px;
        margin-bottom: 10px;
        width:560px;
    }
    .discuss_sign em{
        line-height: 24px;
        color: #666;
        font-size: 12px;
        display: inline-block;
        vertical-align: top;
        height: 24px;
    }
    .sign{
        background: #ff3232;
        color: #fff;
    }
    #discuss_list span{
        cursor: pointer;
        line-height: 24px;
        color: #999;
        font-size: 12px;
        display: inline-block;
        vertical-align: top;
        height: 24px;
        padding: 0px 10px;
        background: #eee;
        margin-right: 10px;}

    #discuss_list textarea{
        width:625px;
        height:70px;
        padding: 14px;
        border: 1px solid #ddd;
        background: #fcfcfc;
        color: #333;
        font-size: 14px;
    }
    .discuss_btn{
        height:40px;
        line-height: 40px;
        text-align:center;
        color:#fff;
        background: #ff3232;
        border: 1px solid #e90808;
        font-size: 14px;
        display: block;
    }
    #discuss_list .addDiscuss{
        width:140px;
        float: left;
    }
   .discuss_submit{
        float:right;
        width:80px;
       margin-right: 5px;

    }
    .discuss_tab{
        height: 24px;
        line-height: 24px;
        margin: 0px 20px;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        color: #666;
    }
    #discuss_list .newest{
        background: #ff3232;
        color: #fff;
    }
    .discuss_space li{
        height:92px;
        margin:20px 20px 0px 20px;
        border-bottom: 1px solid #eee;
    }
    .discuss_per{
        width:560px;
        height:24px;
        padding-left:20px;
        float:left;
    }
    .author_name,h5{
        height: 32px;
        line-height: 32px;
        color: #999;
        font-weight:normal;
        text-align: center;
        white-space: nowrap;
        width: 50px;
        font-size:8px;
        display: block;
    }
    .discuss_per p{
        font-size: 14px;
        color: #666;
        line-height: 24px;
    }
    #discuss_other span{
        height: 24px;
        line-height: 24px;
        color: #999;
        background:#fff;
    }
    #discuss_other .discuss_time {
        height:32px;
        line-height:40px;
        padding-top: 8px;
    }
    .discuss_time span{
        height: 24px;
        line-height: 24px;
        color: #999;
        background:#fff;
    }
   .goods_num,.turn{
        float:right;
        font-size: 12px;
        height:24px;
        line-height: 24px;
    }
</style>
