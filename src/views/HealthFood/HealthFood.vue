<template>
    <div>
        <div class="section">
            <h3 class="food_title">五月，补肾调阴阳，不负好春光</h3>
            <div>
                <ul class="healthTab">
                    <li><a>健康饮食</a></li>
                    <li><a>人群膳食</a></li>
                    <li><a>疾病调理</a></li>
                    <li><a>功能性调理</a></li>
                    <li><a>脏腑调理</a></li>
                </ul>
                <!--            健康饮食-->
                <div class="healthTab_content" v-show="true">
                    <div class="healthTab_section">
                        <div>
                            <div class="content_title"><h2>饮食健康</h2></div>
                        </div>
                        <div>
                            <ul>
                                <li><a>运动员</a></li>
                                <li><a>围孕期</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="healthTab_section">
                        <div>
                            <div class="content_title"><h2>饮食健康</h2></div>
                        </div>
                        <div>
                            <ul>
                                <li><a>婴儿</a></li>
                                <li><a>学龄前儿童</a></li>
                                <li><a>学龄期儿童</a></li>
                                <li><a>青少年</a></li>
                                <li><a>老人</a></li>
                                <li><a>学龄前儿童</a></li>
                                <li><a>学龄期儿童</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="healthTab_section" style="border-right:none">
                        <div>
                            <div class="content_title"><h2>专区</h2></div>
                        </div>
                        <div>
                            <ul>
                                <li><a>孕妇</a></li>
                                <li><a>产妇</a></li>
                                <li><a>幼儿</a></li>
                                <li><a>哺乳期</a></li>
                                <li><a>婴儿</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="healthTab_section" style="border-top: 1px solid #ccc; border-right:none; width:1107px;">
                        <div>
                            <div class="content_title"><h2>饮食健康</h2></div>
                        </div>
                        <div>
                            <ul>
                                <li><a>孕妇</a></li>
                                <li><a>产妇</a></li>
                                <li><a>幼儿</a></li>
                                <li><a>哺乳期</a></li>
                                <li><a>婴儿</a></li>
                                <li><a>学龄前儿童</a></li>
                                <li><a>学龄期儿童</a></li>
                                <li><a>青少年</a></li>
                                <li><a>老人</a></li>
                                <li><a>高温环境作业人群</a></li>
                                <li><a>低温环境作业人群</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--            其他-->
                <div class="healthTab_content"  v-show="false">
                    <div class="content_title"><h2 style="font-weight:normal; padding-left:12px">饮食健康</h2></div>
                    <div>
                        <ul>
                            <li><a>孕妇</a></li>
                            <li><a>产妇</a></li>
                            <li><a>幼儿</a></li>
                            <li><a>哺乳期</a></li>
                            <li><a>婴儿</a></li>
                            <li><a>学龄前儿童</a></li>
                            <li><a>学龄期儿童</a></li>
                            <li><a>青少年</a></li>
                            <li><a>老人</a></li>
                            <li><a>高温环境作业人群</a></li>
                            <li><a>低温环境作业人群</a></li>
                            <li><a>接触电离辐射人员</a></li>
                            <li><a>接触化学毒素人员</a></li>
                            <li><a>运动员</a></li>
                            <li><a>围孕期</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="healthContent goot-list-box" style=" width:1230px; margin: 0 auto;" v-show="false">
            <h3 class="food_title">合理的饮食，是身体健康的第一要素 <span class="healthContentKind"><a>最新</a>|<a>最热</a></span></h3>
            <HealthNews-Item  v-for="item in mainFoodList" v-bind:key="item.id" :healthNews="item" style="margin: 13px;"/>
        </div>
        <div class="healthContent goot-list-box" style="width:1230px; margin: 0 auto;" v-show="true">
            <div class="food_title1">
                <ul>
                    <li><a class="clearfix">人群膳食菜谱</a></li>
                    <li><a class="clearfix">人群膳食中医保健</a></li>
                    <li><a class="clearfix">人群膳食养生妙方</a></li>
                </ul>
                <span class="healthContentKind"><a>最新</a>|<a>最热</a></span>
            </div>
            <food-item v-for="item in mainFoodList" v-bind:key="item.id" :footItme="item" style="margin: 13px;"/>
        </div>
    </div>

</template>
<script>
    import {getMainFoodList} from "@/api/footList"
    import FoodItem from "@/components/FoodItem";
    import HealthNewsItem from "@/components/NewsItem/HealthNewsItem";
export default{
    name:"HealthFood",
    data:function(){
      return{
        //美食推荐
        mainFoodList:[],
      }
    },
    components:{
        FoodItem,
        HealthNewsItem
    },
    methods:{
      //获取推荐列表
      getMainFood(data){
          getMainFoodList(data).then(res => {
              console.log(res.mainFoodList);
              this.mainFoodList = res.mainFoodList;
          }).catch(err=>{
              console.log(err)
          })
      },
    },
    mounted:function(){
       this.getMainFood({})
    }
}
</script>
<style scoped>
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
    ul{
        list-style: none;
    }
    .section{
        width:1200px;
        margin:0 auto;
    }
    aside{
        width:400px;
        float:right;
    }
    aside img{
        width:400px;
    }
    .food_title{
        width:1200px;
        height:120px;
        text-align:center;
        line-height:120px;
        position: relative;
        margin: 0 auto;
    }
    .food_title1{
        width:1200px;
        height:120px;
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    .food_title1 ul{
        width:900px;
        height:46px;
    }
    .food_title1 ul li{
        height:46px;
        vertical-align: middle;
        margin-right: 20px;
        background-color: #ff3232;
        display: inline-block;
    }
    .food_title1 ul li a{
        line-height: 46px;
        height:46px;
        padding:0 22px;
        color: #fff;
        font-size: 18px;
        display: inline-block;
    }
    .healthTab{
        height: 50px;
        background-color: #fff;
        filter:alpha(opacity=50);   /*标准的css透明度，在大部分的标准浏览器Firefox, Safari, and Opera都有效*/
        opacity:0.5; /*兼容IE解决方案*/
    }
    .healthTab li{
      float: left;
      padding: 0 30px;
      line-height:50px;
    }
    .healthTab li a{
        text-decoration: none;
        font-weight:bold;
        font-size: 14px;
        color:#000;
    }
    .healthTab_content{
        background-color: #fff;
        padding:10px 16px 0px;
        width: 1168px;
        overflow: auto;
    }
    .healthTab_section{
        border-right: 1px solid rgb(204, 204, 204);
        padding:10px 45px 14px 16px;
        overflow:auto;
        display:inline-block
    }
    .healthTab_content h2{
        font-weight:normal;
        padding-left:12px;
        height:42px;
        line-height:42px
    }
    .healthTab_content li{
        float:left;
        padding:0 12px;
    }
    .healthTab_content li a{
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        color:#666;
    }
    .goot-list-box {
        display: flex;
        flex-wrap: wrap;
    }
    .healthContentKind {
        position: absolute;
        top:60px;
        right:0;
        font-size: 14px;
        font-weight: normal;
    }
    .healthContentKind a {
        font-size: 14px;
        font-weight: normal;
        padding: 0 12px;
    }
    .healthContentKind a:hover{
        color: #ff3232;
        text-decoration: underline;
        cursor: pointer;
    }
</style>
