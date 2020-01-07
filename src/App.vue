<template>
      <Home/>
</template>
<script>
import Home from  '@/views/Home.vue'
export default {
    components: {
        Home
    }
}
</script>
<style lang="scss">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
