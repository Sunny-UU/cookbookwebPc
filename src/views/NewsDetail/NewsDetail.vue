<template>
    <div class="section">
            <div class="make clearfix">
                <div class="make_step">
                    <div style="overflow: auto; background-color: white; margin-bottom: 30px">
                    <h2 style="text-align: center; font-size: 26px; padding-top:22px;">氨糖对人体有什么作用？哪个牌子的氨糖效果好</h2>
                    <span class="collect">
                        <a href="" id="collect">收藏<span id="sc_sl">(123)</span></a>
						<a href="" id="share">分享到:</a>
					</span>
                    </div>
                    <div class="detail_step">
                        <h2>白切鸡的做法</h2>
                        <div class="detail_step_content clearfix">
                            <p>1.制作沾酱。将大蒜，姜切、青椒切成末<br/>

                                2.加入2-3勺芝麻酱（如果是很干的芝麻酱，用之前可以用麻油调稀一点会更好调匀）<br/>


                                3.倒入生抽，加一小勺糖，醋，鸡精适量<br/>

                                4.由于芝麻酱比较稠，所以加入一点点温水把沾酱调成可以流动的稀糊状就可以方便沾取了<br/>


                                5.白切鸡的制作：自然解冻，洗净三黄鸡，去掉头和PP，在锅里加满冷水，将整只鸡完全浸入（可以加点姜片或料酒），盖上盖，大火煮开后转小火保持沸腾，整个煮制时间18-20分钟即可关火捞起，这样煮出来的鸡已经成全煮，切开后没有血水流出，鸡肉还非常嫩滑。待不烫手后抹麻油或色拉油，保持色泽和香味，防止鸡皮变干<br/>

                                烹饪技巧
                                另外，有人会偏好切开带血水的白切鸡，方法是先将水烧开，再把鸡放进去煮15分钟，马上离火，焖10分钟后捞起，待不烫手后抹上麻油或色拉油切块。如果想口感更有弹性，可以把切好的鸡放到冰箱里冷藏一会再食用。</p>

                        </div>
                        <div class="opera">
				<span id="btn">
					<i class="iconfont">&#xe602;</i> 点赞
				</span>
                        </div>
                    </div>
                    <discuss-item/>
                </div>

                <aside>
                    <img src="@/assets/image/gg1.jpg" alt="">
                    <img src="@/assets/image/gg2.jpg" alt="">
                    <img src="@/assets/image/gg3.jpg" alt="">
                    <img src="@/assets/image/gg4.jpg" alt="">
                </aside>
            </div>
        </div>
</template>
<script>
    import DiscussItem from "@/components/DiscussItem";
    export default{
        name: "NewsDetail",
        components:{
            DiscussItem
        },
        data:function(){
            return{

            }
        }
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
    em,i{
        font-style:normal;
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
    .section{
        width:1200px;
        margin:0 auto;
        margin-top:30px;
    }
    aside{
        width:400px;
        float:right;
    }
    aside img{
        width:400px;
    }
    .collect{
        margin: 15px 15px 25px 0px;
        width:245px;
        height:35px;
        float:right;
    }
    #collect{
        width:85px;
        height:35px;
        float: left;
        line-height: 35px;
        background: #ff3232;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
    }
    #share{
        width:160px;
        height:35px;
        display:block;
        float:left;
        line-height: 35px;
        background:#eee;
        color: #999;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
    }
    .make_step{
        width:770px;
        float:left;

    }
    .make_step h2{
        background-color:#fff;
        font-size: 24px;
        color: #333;
        height: 66px;
        line-height: 66px;
        border-bottom: 1px solid #eee;
        text-indent: 24px;
        font-family: Microsoft Yahei;
        display: block;
    }
    .make_step h3{
        height: 22px;
        color: #333;
        font-weight: normal;
        text-align: center;
        line-height: 22px;
        margin: 14px 30px 14px 5px;
        float: right;
        font-size: 12px;
        padding:0 6px ;
    }
    .make_step h3 a{
        font-size: 12px;
        color: #ff3232;
    }
    .shicai_yl{
        background-color: white;
        margin-bottom: 20px;
    }
    .detail_step{
        background-color: #fff;
    }
    .make_step .detail_step_content{
        width:590px;
        padding:40px;
    }
    .make_step .detail_step_content p{
        word-break: keep-all;
    }
    /*设置点赞*/
    .opera{
        margin-bottom:20px;
        text-align:left;
        height: 66px;
        line-height: 66px;
        border-top: 1px solid #eee;
    }
    #btn
    {	margin:13.5px auto;
        width: 90px;
        height: 36px;
        line-height: 36px;
        background-color:#ff3232;
        color: #fff;
        font-size: 14px;
        font-family: Microsoft YaHei;
        cursor: pointer;
        display:block;
        text-align:center;
    }
    #btn i{
        display:inline-block;
        *display:inline;
        *zoom:1;
    }
</style>
