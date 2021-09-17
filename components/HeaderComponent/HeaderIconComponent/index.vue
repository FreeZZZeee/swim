<template>
  <li><a :href="icon.href"><i :class="icon.class"></i></a></li>
</template>

<script>
export default {
  name: "HeaderIconComponent",
  props: {
    icon: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>

</style>
