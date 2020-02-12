<template>
    <div>
        <img src="@/assets/image/foot.png"/>
    </div>
</template>
<script>
    export default{
        name:"FootItem",
    }
</script>
<style scoped>
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
    div {
        overfloat:hidden;
        background-color:#3f3a32;
        background-position: center bottom;
        height:464px;
        width:100%;
        padding-top:40px;
        text-align:center;
    }
</style>
