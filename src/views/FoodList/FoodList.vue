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
        <food-item v-for="item in foodList" v-bind:key="item.id" :footItme="item"/>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </article>
  </section>
</template>

<script>
  import FoodItem from "@/components/FoodItem";
  import {getFootListApi} from "@/api/footList"
  export default {
    name: "FoodList",
    components: {
      FoodItem
    },
    data: function () {
      return {
        foodList: []
      }
    },
    methods: {
      // 获取菜单列表
      getfoodList(data) {

        getFootListApi(data)
          .then(res => {
            console.log(res.foodList);
            this.foodList = res.foodList;
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    mounted: function () {
      this.getfoodList({})
      console.log('a is: ' + this.a)
    }
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

    }
  }
}

  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
