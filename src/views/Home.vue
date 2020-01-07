<template>
  <div class="home">
    <Head1 msg="Welcome to Your Vue.js App"/>
    <Body1/>
    <Foot1/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head1 from '@/components/head.vue'
import Body1 from '@/components/body.vue'
import Foot1 from '@/components/foot.vue'
export default {
  name: 'home',
  components: {
    Head1,
    Body1,
    Foot1
  }
}
</script>
