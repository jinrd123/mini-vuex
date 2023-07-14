<template>
  <div>
    <hr />
    child
    <button @click="addCount">addCount</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    addCount() {
      this.$store.state.count += 1;
    }
  }
}
</script>

<style scoped>

</style>
