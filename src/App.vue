<template>
  <div id="app">
    <HeaderNavmenu></HeaderNavmenu>
    <router-view/>
  </div>
</template>
<script>
  import HeaderNavmenu from '@/components/HeaderNavmenu'
  export default {
    name: "home",
    components: {
      HeaderNavmenu
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
