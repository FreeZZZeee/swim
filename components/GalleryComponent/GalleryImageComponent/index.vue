<template>
  <div class="col-sm-3 gallery-grids-left">
    <div class="gallery-grid">
      <a class="example-image-link" :href="galleryProp.img" data-lightbox="example-set" :data-title="galleryProp.dataTitle">
        <img :src="galleryProp.img" alt="" />
        <div class="captn">
          <h4>{{ logo.title }}</h4>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryImageComponent",
  props: {
    galleryProp: {
      type: Object,
      default: () => {}
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
