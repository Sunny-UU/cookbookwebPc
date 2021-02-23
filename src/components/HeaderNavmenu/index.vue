<template>
      <el-row class="header" type="flex" justify="center">
       `<el-col :span="16">
          <el-row type="flex" justify="space-between">

           <el-col :span="8">
             <el-row :gutter="10" class="menu_area">
               <el-col :span="4"><img style="width: 100%; margin-top: -10px;" src="@/assets/image/logo.png"></el-col>
               <el-col :span="4"><router-link to="/">首页</router-link></el-col>
               <el-col :span="4"><router-link to="/foodlist">菜谱大全</router-link></el-col>
               <el-col :span="4"><router-link to="/healthfood">饮食健康</router-link></el-col>
               <el-col :span="4"><router-link to="/foodmenu">美食菜单</router-link></el-col>
               <el-col :span="4"><router-link to="">家居馆</router-link></el-col>
             </el-row>
           </el-col>

          <el-col :span="8">
             <el-row justify="center" type="flex" class="search_area">
                 <el-col  class="search" :span="20">
                     <el-col :span="18">
                         <input type=text placeholder="请输入菜谱/食材/菜单/作者"/>
                     </el-col>
                     <el-col :span="6">
                         <input type=submit value="搜索">
                     </el-col>
                 </el-col>
             </el-row>
           </el-col>

           <el-col :span="8" class="login">
             <el-row v-if="login" type="flex" justify="end" class="login_area">
               <el-col :span="5"><router-link to=""><img class="img" src="@/assets/image/hh.jpg"/>蚂蚁</router-link></el-col>
               <el-col :span="5"><router-link to="/individualcenter">美食空间</router-link></el-col>
               <el-col :span="5"><router-link to="/editartical">发表菜谱</router-link></el-col>
               <el-col :span="5"><router-link to="">退出登录</router-link></el-col>
             </el-row>
             <el-row v-else type="flex" justify="end" class="login_area">
               <el-col :span="6"><router-link to=""><img class="img"  src="@/assets/image/hh.jpg"/>QQ登陆</router-link></el-col>
               <el-col :span="6"><router-link to=""><img class="img"  src="@/assets/image/wb.jpg">微博登陆</router-link></el-col>
               <el-col :span="4"><router-link to="">注册</router-link></el-col>
               <el-col :span="4"><router-link to="/login">登陆</router-link></el-col>
             </el-row>
           </el-col>
          </el-row>
        </el-col>
      </el-row>
</template>

<script>
  export default {
    name: "HeaderNavmenu",
    data(){
      return{
        login:false
      }
    },
    components:{
      // HeaderSearch
    }
  }
</script>

<style lang="scss" scoped>
  *{
      font-size: 14px;
      color:white;
      text-align: center;
      vertical-align: middle;
  }
  .header{
      position: relative;
      height:50px;
      background-image:linear-gradient(to right,#dd1c20,#a1000d);
      overflow:hidden;
      box-shadow:10px 2px 10px 3px #a7a7a7;
  }
  .img{
      width:28px;
      height:28px;
  }
  .menu_area,.search_area,.login_area{
      height: 28px;
      margin: 11px 0;
  }
  .header .search{
      height:20px;
      border-radius:3px;
      border:3px solid #fff;
  }
  .search input[type=text]{
      border:none;
      width: 100%;
      text-indent:2em;
      margin-top: -7px;
      text-align: left;
      outline: none;
      color: #0f0130;
  }
  .search input[type=submit]{
      border:none;
      width: 100%;
      background-color:rgba(255,255,255,0);
      margin-top: -7px;
      outline: none;
  }
</style>
