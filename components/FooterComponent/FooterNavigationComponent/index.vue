<template>
  <div class="col-md-3 footer-grid">
    <h3>Навигация</h3>
    <ul>
      <li v-for="(nav, navBarNavIndex) in navBarNav" :key="`navBarNavIndex-${navBarNavIndex}`"><a :class="nav.class"
                                                                                                  :href="nav.href"
                                                                                                  v-scroll-to="`${nav.href}`">{{
          nav.title
        }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterNavigationComponent',
  props: {
    navBarNav: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style scoped>

</style>
