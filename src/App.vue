<template>
  <div id="app">
    <HeaderNavmenu></HeaderNavmenu>
    <router-view/>
    <FootItem></FootItem>
  </div>
</template>
<script>
  import HeaderNavmenu from '@/components/HeaderNavmenu'
  import FootItem from '@/components/FootItem'
  export default {
    name: "home",
    components: {
      HeaderNavmenu,
      FootItem
    },
    data() {
      return {
        activeIndex: '1',
      };
    },
    beforeCreate () {

    }
  };
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
  body {
    background: #fae8c8;
  }
</style>
