<template>
  <!-- services -->
  <div class="services" id="services">
    <div class="container">
      <div class="about-heading">
        <h3>Перечень услуг</h3>
        <p>Cras cursus, nunc sit amet aliquam maximus</p>
      </div>
      <div class="w3-agileits-services-grids">
        <div class='wrapper'>
          <template v-for="({block, pricing}) in priceBlock">
            <services-price-component v-for="(blockPr, blockIndex) in block" :key="`block-${blockIndex}`"
                                      :blockPr="blockPr" :pricing="pricing"/>
          </template>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  <!-- //services -->
</template>

<script>
import ServicesPriceComponent from "~/components/ServicesComponent/ServicesPriceComponent";

export default {
  name: "ServicesComponent",
  components: {ServicesPriceComponent},
  props: {
    priceBlock: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
