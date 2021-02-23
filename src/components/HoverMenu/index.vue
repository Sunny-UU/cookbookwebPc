<template>
  <!--    //这是主页hover组件-->
  <div class="shicai" id="shicai">
    <ul>
      <li v-for="foodstuff in foodStruf.foodstuffSel" :key="foodstuff.key" :class="{active:nowindex!=foodstuff.key}" @mouseover="foodtuffs(foodstuff.key)" @mouseout="foodtuffs(0)"><a>{{foodstuff.value}}</a></li>
    </ul>
    <div id="shicai_content">
      <div v-for="(foodImg ,index) in foodStruf.foodstuffImgs" :key="index" class="shicai_tu" v-show="nowindex==index">
        <img v-for="img in foodImg.items" :key="img.key" :src="img.href"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverMenu',
  props: ["foodStruf"],
  data(){
    return{
      nowindex:0,
    }
  },
  methods: {
      //表单切换
      foodtuffs:function (index) {
        this.nowindex=index;
      },
  }
}
</script>
<style lang="scss" scoped>
  li{
    list-style: none;
  }
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
    list-style: none;
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
</style>
