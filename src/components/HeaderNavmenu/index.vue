<template>
  <div class="header">
    <div class="head">
      <ul>
        <li><img src="@/assets/image/logo.png"></li>
        <li><a href="/"><strong>首页</strong></a></li>
        <li><a href="/foodlist"><strong>菜谱大全</strong></a></li>
        <li><a href=""><strong>饮食健康</strong></a></li>
        <li><a href=""><strong>美食菜单</strong></a></li>
        <li><a href=""><strong>家居馆</strong></a></li>
      </ul>
      <div class="sou">
        <div class="search">
          <form method="post" action="">
            <input type=text placeholder="请输入菜谱/食材/菜单/作者"/>
            <input type=submit value="搜索 ">
          </form>
        </div>
      </div>
      <div class="dl">
        <ul>
          <li><a href=""><img src="@/assets/image/hh.jpg"/>QQ登陆</a></li>
          <li><a href=""><img src="@/assets/image/wb.jpg">微博登陆</a></li>
          <li><a href="">注册</a></li>
          <li><a href="">登陆</a></li>
        </ul>
        <ul style="display: none">
          <li><a href="<%=basePath%>myFoodServlet">我的菜谱</a></li>
          <li><a href="<%=basePath%>getTypeServlet">发表菜谱</a></li>
          <li><a href="<%=basePath%>myMessageServlet">个人信息</a></li>
          <li><a href="<%=basePath%>outLoginServlet">退出登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderNavmenu"
  }
</script>

<style lang="scss" scoped>
  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .header{
    height:50px;
    width: 100%;
    background-image:linear-gradient(to right,#dd1c20,#a1000d);
    overflow:hidden;
    box-shadow:10px 2px 10px 3px #a7a7a7;
  }
  .header li{
    float: left;
  }
  .head{
    width:1200px;
    height:50px;
    margin:0 auto;
  }
  .header .sou,.logo{
    float:left;
  }

  .header img{
    display: block;
    width:70px;
    height:50px;
    /*margin-top: 13px;*/
  }
  .header .search{
    height:20px;
    width:426px;
    border-radius:3px;
    border:3px solid #fff;
    margin-top:13px;
    margin-left: 35px;
  }

  .header .dl{
    float: right;
    height:28px;
    line-height: 28px;

    /*行高会继承，给父亲一个高度*/
  }
  .dl li img{
    float:left;
    width:28px;
    height:28px;
  }
  .head li a{
    margin: 5px 0;
    padding:10px;
    color:white;
    display:block;
    height:28px;
    font-size: 14px;
  }
  .dl li a:hover{
    text-decoration: underline;
    color:white;
    background-color: rgba(126,23,23,0.3);
    border-radius: 5px;
  }
  .search input[type=text]{

    border:none;
    text-indent:2em;
    height:20px;
    width:346px;
    float:left;
  }
  .search input[type=submit]{
    color:white;
    border:none;
    height:20px;
    width:80px;
    float:left;
    background-color:rgba(255,255,255,0);
  }
</style>
