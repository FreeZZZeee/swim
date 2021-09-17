<template>
  <div class="col-md-3 wthree-team-grid">
    <img :src="person.img" alt="" />
    <h4>{{ person.name }}</h4>
    <p>{{ person.title }}</p>
    <div class="team-social-grids">
      <ul>
        <li v-for="(social, socialsIndex) in socials" :key="`socials-${socialsIndex}`"><a :href="social.href"><i :class="social.class"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeamPersonComponent",
  props: {
    person: {
      type: Object,
      default: () => {}
    },
    socials: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
