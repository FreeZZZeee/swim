<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">

      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
        <template v-for="(span) in navbarHeader">
          <span :class="span.class">{{ span.title }}</span>
        </template>
      </button>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li v-for="(nav, navBarNavIndex) in navBarNav" :key="`navBarNavIndex-${navBarNavIndex}`"><a :class="nav.class"
                                                                                                    :href="nav.href"
                                                                                                    v-scroll-to="`${nav.href}`">{{
            nav.title
          }}</a>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderCategoriesComponent",
  props: {
    navBarNav: {
      type: Array,
      default: () => []
    },
    navbarHeader: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
