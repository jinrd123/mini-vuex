<template>
  <div id="app">
    vuex中的数据：count--{{ this.$store.state.count }}
    <ChildComponent />
    <ClassChildComponent />
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
import ClassChildComponent from './components/ClassChildComponent.vue';

export default {
  name: 'App',
  components: {
    ChildComponent,
    ClassChildComponent
  },
  mounted() {
    console.log(this);
  }
}
</script>

<style>

</style>
