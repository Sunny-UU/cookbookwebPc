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

    }
  }
}

  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
