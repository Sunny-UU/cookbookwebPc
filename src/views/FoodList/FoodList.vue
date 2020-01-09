<template>
  <section class="main-box">
    <header>
      <nav>
        <ul>
          <li>精选</li>
          <li>分类</li>
          <li>食材</li>
          <li>菜单</li>
        </ul>
      </nav>
    </header>
    <article class="foot-list">
      <h1>精选推荐菜谱</h1>
      <div class="goot-list-box">
        <food-item />
        <food-item />
        <food-item />
        <food-item />
        <food-item />
        <food-item />
        <food-item />
        <food-item />
        <food-item />
        <food-item />
        <food-item />
      </div>
    </article>
  </section>
</template>

<script>
  // import FoodItem from '@/components/FoodItem'
  import FoodItem from "@/components/FoodItem";
  export default {
    name: "FoodList",
    components: {
      FoodItem
    },
  }
</script>

<style lang="scss" scoped>
.main-box {
  width: 1200px;
  margin: auto;
  header {
    padding: 10px 0;
    margin: 20px 0 30px;
    overflow: auto;
    nav ul {
      display: flex;
      li {
        padding: 5px 10px;
        cursor: pointer;
      }
    }
  }
  .foot-list {
    h1 {
      margin-bottom: 20px;
    }
    .goot-list-box {
      display: flex;
      flex-wrap: wrap;
      .food-item{
        width: 232px;
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
    }
  }
}

  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
