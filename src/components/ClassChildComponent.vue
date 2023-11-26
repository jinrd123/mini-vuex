<template>
  <div>
    <div>{{ message }}</div>
    <div>{{ myCount }}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from '@/store/myVuexClass';

@Component
export default class HelloWorld extends Vue {
  // Declared as component data
  message = 'Class-component!'
  @State((state) => state.count) myCount;
}
</script>

<style scoped>

</style>
