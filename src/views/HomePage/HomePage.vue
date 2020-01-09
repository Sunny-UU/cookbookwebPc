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
          <li><a>水果</a></li>
          <li><a>蔬菜</a></li>
          <li><a>五谷</a></li>
          <li><a>生鲜</a></li>
        </ul>
        <div id="shicai_content">
          <div class="shicai_tu" style="display:block">
            <img src="@/assets/image/guo1.jpg"/>
            <img src="@/assets/image/guo2.jpg"/>
            <img src="@/assets/image/guo3.jpg"/>
            <img src="@/assets/image/guo4.jpg"/>
            <img src="@/assets/image/guo5.jpg"/>
            <img src="@/assets/image/guo6.jpg"/>
            <img src="@/assets/image/guo7.jpg"/>
            <img src="@/assets/image/guo8.jpg"/>
          </div>
          <div class="shicai_tu">

            <img src="@/assets/image/shu1.jpg"/>
            <img src="@/assets/image/shu2.jpg"/>
            <img src="@/assets/image/shu3.jpg"/>
            <img src="@/assets/image/shu4.jpg"/>
            <img src="@/assets/image/shu5.jpg"/>
            <img src="@/assets/image/shu6.jpg"/>
            <img src="@/assets/image/shu7.jpg"/>
            <img src="@/assets/image/shu8.jpg"/>
          </div>
          <div class="shicai_tu">
            <img src="@/assets/image/gu1.jpg"/>
            <img src="@/assets/image/gu2.jpg"/>
            <img src="@/assets/image/gu3.jpg"/>
            <img src="@/assets/image/gu4.jpg"/>
            <img src="@/assets/image/gu5.jpg"/>
            <img src="@/assets/image/gu6.jpg"/>
            <img src="@/assets/image/gu7.jpg"/>
            <img src="@/assets/image/gu8.jpg"/>
          </div>
          <div class="shicai_tu">
            <img src="@/assets/image/hai1.jpg"/>
            <img src="@/assets/image/hai2.jpg"/>
            <img src="@/assets/image/hai3.jpg"/>
            <img src="@/assets/image/hai4.jpg"/>
            <img src="@/assets/image/hai5.jpg"/>
            <img src="@/assets/image/hai6.jpg"/>
            <img src="@/assets/image/hai7.jpg"/>
            <img src="@/assets/image/hai8.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage"
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

  body{
    background-color:#fae8c8;
  }

  .section{
    margin:0 auto;
    width:990px;
    overflow: hidden;
  }
  .food_title{
    width:990px;
    height:120px;
    text-align:center;
    margin:0 auto;
    line-height:120px;

  }
  #float{
    position:relative;
    left:0;
    top:120px;
    z-index:9;
  }
  #float .w1{
    position: absolute;
    left:0;
    top:0px;
    width:24%;
    height:330px;
    background-color:rgba(255,255,255,0.7);
  }
  #float .w2{
    position: absolute;
    right:0;
    top:0px;
    width:24%;
    height:330px;
    background-color:rgba(255,255,255,0.7);
  }
  /*=================*/
  .window {
    height:450px;
    overflow:hidden;
    box-shadow:10px 2px 10px 3px #e3e3e3;
    position:relative;
  }
  .window p{
    width:7920px;
    position:absolute;

    transition:all 0.8s 0s;
  }
  .window img{
    width:330px;
    float:left
  }
  .shicai {
    width:1200px;
    height:192px;
    background-color:#ffffff;
    padding:0 10px;
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
  .shicai li:hover{
    background:rgb(255,50,50);
    color:white;
  }
  /*---------------------*/
  .shicai_tu {
    position:absolute;
    left:10px;
    bottom:10px;
    width:1200px;
    height:117px;
    display:none;
  }
  .shicai_tu img{
    margin:0px;
    padding:0px;
    width:117px;
    height:117px;
    border-right-width:1px;
  }
  #caipu{
    height:684px;
    width:990px;
  }
  #caipu div{
    width:232px;
    height:332px;
    background-color:white;
    float:left;
    box-shadow:1px 1px 10px 3px #e3e3e3;
    overflow:hidden;
  }
  #caipu p{
    background-color:#fff;
    height:100px;
    width:232px;
    margin-top:-4px;
    font-size:14px;
    padding-top:14px;
    overflow: hidden;
    transition: background,0.6s;

  }
  #caipu p span{
    display: block;
    height:200px;
    width:210px;
    float:left;
    transition: transform,0.6s;
    background-image:linear-gradient(to bottom,#fff 38.5%,#e3e3e3 38.5%);
  }

  #caipu p span:hover{
    transform:translateY(-100px);
  }
  #caipu .c1{
    margin-right:20.6px;

  }
  #caipu .c3{
    margin-bottom:20px;
  }
  #caipu strong{
    font-size:14px;
    color:#444;
    height:24px;
  }

  #caipu span{
    padding:11px;
    font-size:12px;
    color:#999;
  }
  #caipu i{
    font-style:normal;
    color:#ff3232;
    font-size:14px;
  }
  #caipu p span a{
    color:#999;
  }
  .news {
    width:990px;
    height:340px;
  }
  .news21,.news23{
    margin-right:20px;
  }

  .news img {
    width:160px;
    height:160px;
    float:left;
  }
  .news ul{
    height:160px;
    width:325px;
    float:left;
  }
  .news li{
    font-size:14px;
    color:#333;
    height:54px;
    line-height:54px;
    padding-left:20px;
    border-bottom:1px solid rgba(220,220,220,0.6);
  }
  .news div{
    width:485px;
    height:160px;
    background-color:#fff;
    float:left;
    display:block;
    margin-bottom:20px;
  }
  .news li a:hover{
    font-size:16px;
    color:#ff3232;
    text-decoration:underline;
  }
</style>
