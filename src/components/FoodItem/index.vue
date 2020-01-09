<template>
  <section class="food-item">
    <img src="@/assets/image/2.jpg" alt="">
    <div class="food-info">
      <div class="box">
        <div class="top">
          <h3>鸡翅焖锅</h3>
          <p class="p1"><span>0 评论 </span><span> 0 人气</span></p>
          <p class="p2">图图</p>
        </div>
        <div class="bottom">
          <ul>
            <li class="li1">10步 / 大概60分钟</li>
            <li class="li2">煮 / 咸鲜味</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FoodItem"
  }
</script>

<style lang="scss" scoped>
  .food-item{
    width: 220px;
    height: 332px;
    overflow: hidden;
    margin: 10px;
    &:hover {
      .food-info .box{
        top: -100px;
      }
    }
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
        transition: top 1s;
        -moz-transition: top 1s;	/* Firefox 4 */
        -webkit-transition: top 1s;	/* Safari 和 Chrome */
        -o-transition: top 1s;	/* Opera */
        top: 0;
        .top {
          height: 100px;
          overflow: hidden;
          background-color: #fff;
          padding: 0 10px;
          line-height: 32px;
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
