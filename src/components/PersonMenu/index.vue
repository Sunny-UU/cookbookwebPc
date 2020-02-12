<template>
    <div class="section">
        <div class="food_title">我的菜单<span class="healthContentKind"><a>100</a>篇菜谱</span></div>
        <div>
            <div class="menuPerson">
                <div class="menuPerson_time">2016-12-21 12:32</div>
                <div class="personal_msg">
                    <a href=""><img src="@/assets/image/2.jpg" class="msg_pic"><span class="msg_name">蚂蚁蚂蚁</span></a>
                </div>
            </div>
            <div class="foodMenu">
                <a href=""  @mouseover="showtitle(1)" @mouseleave="showtitle(0)"><img src="@/assets/image/2.jpg" alt="" class="foodImg"></a>
                <span class="foodMenu_title" v-show="index=='1'">宫爆鸡丁</span>
            </div>

        </div>
    </div>
</template>
<script>
    export default{
        name:"PersonMenuItem",
        props:"PersonMenuList",
        data:function(){
            return{
                index:0
            }
        },
        methods:{
            showtitle:function(num){
                this.index=num
            }
        },
    }
</script>
<style scoped>
    .section{
        height:220px;
        background-color: #fff;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .food_title{
        color: #333;
        font-size: 18px;
        font-family: Microsoft Yahei;
        font-weight: bold;
        text-indent: 24px;
        height:60px;
        line-height:60px;
        position: relative;
    }
    .healthContentKind {
        position: absolute;
        top:0px;
        right:24px;
        font-size: 10px;
        font-weight: normal;
        color: #999;
    }
    .healthContentKind a {
        font-size: 12px;
        font-weight: normal;
        padding: 0 12px;
        color: #ff3232;
    }
    .menuPerson{
        width: 186px;
        height: 160px;
        position: relative;
        float: left
    }
    .menuPerson_time{
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding-left: 24px
    }
    .personal_msg{
        position: absolute;
        left: 24px;
        bottom: 0px;
        display: block;
    }
    .msg_pic{
        width: 40px;
        height: 40px;
        display: inline-block
    }
    .msg_name{
        display: inline-block;
        padding-left:10px;
        overflow: hidden;
        height: 40px;
        line-height: 40px
    }
    .foodMenu{
        position: relative;
        float: left
    }
    .foodImg{
        width: 165px;
        height:160px;
    }
    .foodMenu_title{
        position: absolute;
        top: 128px;
        right: 0;
        width: 165px;
        height:32px;
        background-color:rgba(0,0,0,0.7);
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 32px
    }
</style>
