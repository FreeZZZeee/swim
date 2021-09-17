<template>
  <h1>
    <a href="/">{{ logo.title }}</a>
  </h1>
</template>

<script>
export default {
  name: "HeaderLogoComponent",
  props: {
    logo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
