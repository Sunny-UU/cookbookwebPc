<template>
    <div>
        <h3 class="food_title">合理的饮食，是身体健康的第一要素 <span class="healthContentKind"><a>最新</a>|<a>最热</a></span></h3>
        <div class="menuList">
            <FoodMenu-Item/>
            <FoodMenu-Item/>
        </div>
    </div>
</template>
<script>
    import FoodMenuItem from  "@/components/PersonMenu"
    export default{
        name:"FoodMenu",
        data:function(){
            return{

            }
        },
        components:{
            FoodMenuItem
        }
    }
</script>
<style scoped>
    .food_title{
        width:1200px;
        height:120px;
        text-align:center;
        line-height:120px;
        position: relative;
        margin: 0 auto;
    }
    .healthContentKind {
        position: absolute;
        top:0px;
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
    .menuList{
        width:1200px;
        margin: 0 auto;
    }
</style>
