<template>
  <div class="agileits-icon-grid">
    <div class="icon-left hvr-radial-out">
      <i :class="iconAText.class" aria-hidden="true"></i>
    </div>
    <div class="icon-right">
      <h5>{{iconAText.titleHead}}</h5>
      <p>{{
          iconAText.titleText
        }}</p>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "AboutIconAndTextComponent",
  props: {
    iconAText: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
