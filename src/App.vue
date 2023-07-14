<template>
  <div id="app">
    vuex中的数据：count--{{ this.$store.state.count }}
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'App',
  components: {
    ChildComponent
  },
  mounted() {
    console.log(this);
  }
}
</script>

<style>

</style>
