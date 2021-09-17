<template>
  <div :class='blockPr.class'>
    <div class='name'>{{ blockPr.name }}</div>
    <div class='trial'>{{ blockPr.trial }}</div>
    <hr>
    <ul class="services-list">
      <li v-for="(price, pricingIndex) in pricing" :key="`pricing-${pricingIndex}`" class="services-list-item">
        <strong>{{price.price}}</strong>
        {{ price.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ServicesPriceComponent",
  props: {
    blockPr: {
      type: Object,
      default: () => {}
    },
    pricing: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
