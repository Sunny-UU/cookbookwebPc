<template>
    <form action="<%=basePath %>/upFoodServlet" method="post" class="basic-grey">
        <h1>发布菜谱
            <span>My Food</span>
        </h1>
        <input type="hidden" name="id"  value="${requestScope.food.id }"/>
        <label>
            <span>文章标题:</span>
            <input id="name" type="text" name="title" value="${requestScope.blog.title }"  placeholder="请输入文章标题，16个字以内" />
        </label>
        <label>
            <span>属性</span>
            <select id="type1" name="type1" onchange="changeStyle();">
                <option >工艺</option>
            </select>
            <select id="type2" name="type2" onchange="changeStyle();">
                <option >口味</option>
            </select>
            <select id="type3" name="type3" onchange="changeStyle();">
                <option >难度</option>
            </select>
            <select id="type4" name="4" onchange="changeStyle();">
                <option >准备时间</option>
            </select>
            <select id="type5" name="type5" onchange="changeStyle();">
                <option >烹饪时间</option>
            </select>
            <select id="type6" name="type6" onchange="changeStyle();">
                <option >人数</option>
            </select>

        </label>
        <label>
            <span>主料:</span>
            <input id="zhuliao" type="text" name="zhuliao" value="${requestScope.food.zhuliao }" placeholder="请输入主料" />
        </label>
        <label>
            <span>辅料:</span>
            <input id="fuliao" type="text" name="fuliao" value="${requestScope.food.fuliao }"  placeholder="请输入辅料" />
        </label>

        <label>
            <span>步骤 :</span>
            <textarea id="content" name="content" value="${requestScope.food.content }" placeholder="请写下步骤~ (一定要详细哦~~)"></textarea>
<!--            <tinymce :height="300" v-model="content" id='tinymce'></tinymce>-->
        </label>
        <label>
            <span>烹饪小技巧 :</span>
            <textarea id="skill" name="skill" value="${requestScope.food.skill }"  placeholder="小技巧会让食物更加美味~~"></textarea>
        </label>
        <label>
            <span>&nbsp;</span>
            <input type="submit" class="button" value="提交" />
        </label>
    </form>
</template>
<script>
    // import tinymce from './components/Tinymce/index.vue' // ES6 Module
    export default {
        name:"EditArtical",
        data(){
          return {
            content: {
                id:"kdkkd",
                value:"jjdjdjd",
                toolbar:[],
                menubar:"0",
                height:'200px',
                width:"990px",
                color:"black"
            }
          }
        },
        // components: {
        //     tinymce
        //
        // }
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
    body{
        background-color:#fae8c8;
    }
    .basic-grey {
        margin: 60px auto;
        margin-left:auto;
        margin-right:auto;
        width: 1175px;
        background: #fff;
        padding: 25px 15px 25px 10px;
        font: 12px Georgia, "Times New Roman", Times, serif;
        color: #888;
        text-shadow: 1px 1px 1px #FFF;
        border:1px solid #E4E4E4;
    }
    .basic-grey h1 {
        font-size: 25px;
        padding: 0px 0px 10px 40px;
        display: block;
        border-bottom:1px solid #E4E4E4;
        margin: -10px -15px 30px -10px;
        color: #888;
    }
    .basic-grey h1>span {
        display: block;
        font-size: 9px;
    }
    .basic-grey label {
        display: block;
        margin: 0px;
    }
    .basic-grey label>span {
        float: left;
        width: 20%;
        text-align: right;
        padding-right: 10px;
        margin-top: 10px;
        color: #888;
    }
    .basic-grey input[type="text"], .basic-grey input[type="email"], .basic-grey textarea, .basic-grey select {
        border: 1px solid #DADADA;
        color: #888;
        height: 30px;
        margin-bottom: 16px;
        margin-right: 6px;
        margin-top: 2px;
        outline: 0 none;
        padding: 3px 3px 3px 5px;
        font-size: 12px;
        line-height:15px;
        box-shadow: inset 0px 1px 4px #ECECEC;
        -moz-box-shadow: inset 0px 1px 4px #ECECEC;
        -webkit-box-shadow: inset 0px 1px 4px #ECECEC;
    }
    .basic-grey select {
        width:11.4%;
    }
    .basic-grey input[type="text"], .basic-grey input[type="email"], .basic-grey textarea{
        width:70%;
    }
    .basic-grey textarea{
        padding: 5px 3px 3px 5px;
    }
    .basic-grey textarea{
        height:100px;
    }
    .basic-grey .button {
        background: #E27575;
        border: none;
        padding: 10px 25px 10px 25px;
        color: #FFF;
        box-shadow: 1px 1px 5px #B6B6B6;
        border-radius: 3px;
        text-shadow: 1px 1px 1px #9E3F3F;
        cursor: pointer;
    }
    .basic-grey .button:hover {
        background: #CF7A7A
    }
</style>
