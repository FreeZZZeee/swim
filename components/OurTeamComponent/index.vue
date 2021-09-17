<template>
  <!-- team -->
  <div class="team" id="team">
    <div class="container">
      <div class="about-heading">
        <h3>Наши сотрудники</h3>
        <p>Cras cursus, nunc sit amet aliquam maximus</p>
      </div>
      <div class="agileinfo-team-grids">
        <template v-for="({persons, socials}) in ourTeam">
          <our-team-person-component v-for="(person, personsIndex) in persons" :key="`persons-${personsIndex}`"
                                     :person="person" :socials="socials"/>
        </template>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  <!-- //team -->

</template>

<script>
import OurTeamPersonComponent from "~/components/OurTeamComponent/OurTeamPersonComponent";

export default {
  name: "OurTeamComponent",
  components: {OurTeamPersonComponent},
  props: {
    ourTeam: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
