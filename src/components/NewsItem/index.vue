<template>
    <div class="news">
       <img v-for="(img,index) in newsitems.items" :key="index" :src="img.href" v-show="newindex==index"/>
       <ul>
           <li v-for="(news,index) in newsitems.items" :key="index"  :class="{healthNew:newindex==index}" @mouseover="healthNew(index)"  @mouseout="healthNew(0)"><a>{{news.title}}</a></li>
       </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsItem",
        props: ['newsitems'],
        data:function () {
            return{
                newindex:0,
            }
        },
        methods: {
            //表单切换
            healthNew: function (index) {
                this.newindex = index;
            },
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        list-style: none; /*去除列表样式小点*/
    }
    .news {
        height: 160px;
        margin: 20px;
        float: left;
    }
    .news img {
        width:200px;
        height:160px;
        float:left;
    }
    .news ul{
        height:160px;
        width:380px;
        background-color:#fff;
        float:left;
    }
    .news li{
        font-size:14px;
        color:#333;
        height:54px;
        line-height:54px;
        padding-left:26px;
        border-bottom:1px solid rgba(220,220,220,0.6);
    }
    .healthNew{
        font-size:18px !important;
        color:#000;
        text-decoration:underline;
        font-weight: bold;
    }
    .news li a:hover{
        color:#ff3232;
        font-size:18px;
        text-decoration:underline;
        font-weight: bold;
    }
</style>

