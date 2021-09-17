<template>
  <div class='copyright'>
    <div class='container'>
      <p>© {{ localeDate }} {{ logo.title }}. All rights reserved | Design by <a
        href='http://w3layouts.com'>W3layouts</a> | <a href='http://pstu.ru'>ПНИПУ</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CopyrightComponent',
  props: {
    logo: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    localeDate() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
