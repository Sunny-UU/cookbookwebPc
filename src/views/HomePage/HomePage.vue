<template>
  <div>
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="section">
      <h3 class="food_title">五月，补肾调阴阳，不负好春光</h3>
      <div class="shicai" id="shicai">
        <ul>
          <li v-for="foodstuff in foodstuffSel" :key="foodstuff.key" :class="{active:nowindex!=foodstuff.key}" @mouseover="foodtuffs(foodstuff.key)" @mouseout="foodtuffs(0)"><a>{{foodstuff.value}}</a></li>
        </ul>
        <div id="shicai_content">
          <div v-for="(foodImg , index) in foodstuffImgs" :key="index" class="shicai_tu" v-show="nowindex==index">
            <img v-for="img in foodImg.items" :key="img.key" :src="img.href"/>
          </div>
        </div>
      </div>
    </div>
    <div class="section goot-list-box" style=" margin: 0 auto; width:1230px">
      <h3 class="food_title">五月，补肾调阴阳，不负好春光</h3>
      <food-item v-for="item in mainFoodList" v-bind:key="item.id" :footItme="item" style="margin: 13px;"/>
    </div>
    <div class="section goot-list-box" style=" margin: 0 auto; width:1240px;">
      <h3 class="food_title">健康新闻</h3>
      <!-- 新闻id  图片路径 标题 分类-->
      <News-item v-for="(item,index) in newsList" v-bind:key="index" :newsitems="item"/>
    </div>
  </div>
</template>

<script>
  // getMainFoodList,,getNewsList
  import {getMainFoodList} from "@/api/footList"
  import FoodItem from "@/components/FoodItem";
  import NewsItem from "@/components/NewsItem";
  export default {
    name: "HomePage",
    data:function () {
      return{
        nowindex:0,
        foodstuffSel:[
          {key:0, value:"水果"},
          {key:1, value:"蔬菜"},
          {key:2, value:"五谷"},
          {key:3, value:"生鲜"},
        ],
        //食材
        foodstuffImgs:[
           {"items":[
              {key:"1", href:require('@/assets/image/guo1.jpg')},
              {key:"2", href:require('@/assets/image/guo2.jpg')},
              {key:"3", href:require('@/assets/image/guo3.jpg')},
              {key:"4", href:require('@/assets/image/guo4.jpg')},
              {key:"5", href:require('@/assets/image/guo5.jpg')},
              {key:"6", href:require('@/assets/image/guo6.jpg')},
              {key:"7", href:require('@/assets/image/guo7.jpg')},
              {key:"8", href:require('@/assets/image/guo8.jpg')},
            ]},
           {"items":[
               {key:"1", href:require('@/assets/image/shu1.jpg')},
               {key:"2", href:require('@/assets/image/shu2.jpg')},
               {key:"3", href:require('@/assets/image/shu3.jpg')},
               {key:"4", href:require('@/assets/image/shu4.jpg')},
               {key:"5", href:require('@/assets/image/shu5.jpg')},
               {key:"6", href:require('@/assets/image/shu6.jpg')},
               {key:"7", href:require('@/assets/image/shu7.jpg')},
               {key:"8", href:require('@/assets/image/shu8.jpg')},
             ]},
           {"items":[
               {key:"1", href:require('@/assets/image/gu1.jpg')},
               {key:"2", href:require('@/assets/image/gu2.jpg')},
               {key:"3", href:require('@/assets/image/gu3.jpg')},
               {key:"4", href:require('@/assets/image/gu4.jpg')},
               {key:"5", href:require('@/assets/image/gu5.jpg')},
               {key:"6", href:require('@/assets/image/gu6.jpg')},
               {key:"7", href:require('@/assets/image/gu7.jpg')},
               {key:"8", href:require('@/assets/image/gu8.jpg')},
             ]},
           {"items":[
               {key:"1", href:require('@/assets/image/hai1.jpg')},
               {key:"2", href:require('@/assets/image/hai2.jpg')},
               {key:"3", href:require('@/assets/image/hai3.jpg')},
               {key:"4", href:require('@/assets/image/hai4.jpg')},
               {key:"5", href:require('@/assets/image/hai5.jpg')},
               {key:"6", href:require('@/assets/image/hai6.jpg')},
               {key:"7", href:require('@/assets/image/hai7.jpg')},
               {key:"8", href:require('@/assets/image/hai8.jpg')},
             ]},

         ],
        //美食推荐
        mainFoodList:[],
        //健康新闻
        newsList:[
          {"items":[
              {id:"1", href:require('@/assets/image/guo1.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"2", href:require('@/assets/image/guo2.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"3", href:require('@/assets/image/guo3.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
           ]},
          {"items":[
              {id:"1", href:require('@/assets/image/guo2.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"2", href:require('@/assets/image/guo2.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"3", href:require('@/assets/image/guo3.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
            ]},
          {"items":[
              {id:"1", href:require('@/assets/image/guo3.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"2", href:require('@/assets/image/guo2.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"3", href:require('@/assets/image/guo3.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
            ]},
          {"items":[
              {id:"1", href:require('@/assets/image/guo2.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"2", href:require('@/assets/image/guo2.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
              {id:"3", href:require('@/assets/image/guo3.jpg'), title:"南方春节食物的寓意", kind:"饮食"},
            ]},
        ]

      }
    },
    components:{
      FoodItem,
      NewsItem
    },
    methods:{
      //表单切换
      foodtuffs:function (index) {
        this.nowindex=index;
      },
      //获取推荐列表
      getMainFood(data){
        getMainFoodList(data).then(res => {
          console.log(res.mainFoodList);
          this.mainFoodList = res.mainFoodList;
        }).catch(err=>{
          console.log(err)
        })
      },
      //获取新闻列表
      // getNewsList(data){
      //   getNewsList(data).then(res=>{
      //     this.newsList=res.newsList
      //   }).catch(err=>{
      //     console.loge(err)
      //   })
      // }
    },
    mounted:function () {
      this.getMainFood({})
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*主题内容*/
  ul{
    list-style: none; /*去除列表样式小点*/
  }
  .section{
    margin:0 auto;
    width:1200px;
  }
  .food_title{
    width:1200px;
    height:120px;
    text-align:center;
    margin:0 auto;
    line-height:120px;
  }
  /*=================*/
  .shicai {
    width:1170px;
    height:198px;
    background-color:#ffffff;
    padding:0 15px;
    box-shadow:1px 1px 10px 3px #e3e3e3;
    position:relative;
  }
  .shicai li {
    margin:0;
    border:none;
    width:58px;
    height:60px;
    text-align:center;
    float:left;
    line-height: 58px;
  }
  .shicai li{
    background:rgb(255,50,50);
    color:white;
  }
  .active {
    background:#fff !important;
    color:#000 !important;
  }
  /*---------------------*/
  .shicai_tu {
    position:absolute;
    left:15px;
    bottom:10px;
    width:1200px;
    height:123px;
  }
  .shicai_tu img{
    margin:0px;
    padding:0px;
    width:146px;
    height:123px;
    border-right-width:1px;
  }
  .goot-list-box {
    display: flex;
    flex-wrap: wrap;
  }
</style>
