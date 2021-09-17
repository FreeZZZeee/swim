<template>
  <!-- about -->
  <div class="about" id="about">
    <div class="container">
      <div class="about-heading">
        <h3>о нас</h3>
        <p>Cras cursus, nunc sit amet aliquam maximus</p>
      </div>
      <div class="w3l-about-grids">
        <div class="col-md-6 w3ls-about-left">
          <about-icon-and-text-component v-for="(iconAText, iconAndTextIndex) in iconAndText"
                                         :key="`iconAndText-${iconAndTextIndex}`" :iconAText="iconAText"/>
        </div>
        <div class="col-md-6 w3ls-about-right">
          <div class="w3ls-about-right-img">
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  <!-- //about -->
</template>

<script>
import AboutIconAndTextComponent from "~/components/AboutComponent/AboutIconAndTextComponent";

export default {
  name: "AboutComponent",
  components: {AboutIconAndTextComponent},
  props: {
    iconAndText: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
