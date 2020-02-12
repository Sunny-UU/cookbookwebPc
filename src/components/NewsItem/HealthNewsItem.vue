<template>
    <section class="HealthNews-item">
        <img src="@/assets/image/2.jpg" alt="">
        <div class="food-info">
            <div class="box">
                <div class="top">
                    <h3><a >{{healthNews.foodName}}</a></h3>
                    <p class="p1"><span>{{healthNews.commentNum}} 评论 </span><span> {{healthNews.popularityNum}} 人气</span></p>
                    <p class="p2">{{healthNews.userName}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HealthNewsItem",
        props: ['healthNews'],
    }
</script>

<style lang="scss" scoped>
    .HealthNews-item{
        width: 220px;
        height: 332px;
        overflow: hidden;
        margin: 10px;
        img {
            width: 100%;
            height: 232px;
            position: relative;
            z-index: 10;
        }
        .food-info {
            position: relative;
            top: -4px;
            .box {
                position: absolute;
                width: 100%;
                .top {
                    height: 100px;
                    overflow: hidden;
                    background-color: #fff;
                    padding: 0 10px;
                    line-height: 32px;
                    a{
                        text-decoration: none;
                        font-size: 14px;
                    }
                    p {
                        line-height: 32px;
                    }
                    .p1 {
                        font-size: 12px;
                        color: #999;
                    }
                    .p2 {
                        font-size: 12px;
                        color: #ff3232;
                    }
                }
                .bottom {
                    height: 100px;
                    overflow: hidden;
                    background-color: #eee;
                    padding: 0 10px;
                    line-height: 42px;
                    ul {
                        .li1 {
                            background: url("./../../assets/image/list_style1_icons.png") no-repeat;
                            background-position: 0 76%;
                            padding-left: 38px;
                        }
                        .li2 {
                            background: url("./../../assets/image/list_style1_icons.png") no-repeat;
                            background-position: 0 24%;
                            padding-left: 38px;
                        }
                    }
                }
            }

        }
    }
</style>
