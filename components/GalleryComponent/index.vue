<template>
  <!-- gallery -->
  <div class="gallery" id="gallery">
    <div class="container">
      <div class="about-heading">
        <h3>Наша галерея</h3>
        <p>Cras cursus, nunc sit amet aliquam maximus</p>
      </div>
    </div>
    <div class="gallery-grids">
      <div class="gallery-top-grids">
        <gallery-image-component v-for="(galleryProp, galleryIndex) in gallery" :key="`gallery-${galleryIndex}`"
                                 :galleryProp="galleryProp" :logo="logo"/>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
  <!-- //gallery -->
</template>

<script>
import GalleryImageComponent from "~/components/GalleryComponent/GalleryImageComponent";

export default {
  name: "GalleryComponent",
  components: {GalleryImageComponent},
  props: {
    gallery: {
      type: Array,
      default: () => []
    },
    logo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
