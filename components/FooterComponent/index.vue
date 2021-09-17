<template>
  <!-- footer -->
  <div class='footer'>
    <div class='footer-top'>
      <div class='container'>
        <div class='footer-grids'>
          <div class='col-md-4 footer-grid'>
            <div class='footer-logo'>
              <h3><a href='#banner' v-scroll-to="`#banner`">{{ logo.title }}</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget egestas erat. In hac habitasse platea
                dictumst.</p>
            </div>
          </div>
          <footer-navigation-component v-for="({navBarNav, navbarHeader}, categoriesIndex) in categories"
                                       :key="`categories-${categoriesIndex}`" :navBarNav="navBarNav"/>
          <!--          <div class="clearfix"> </div>-->
        </div>
      </div>
    </div>
  </div>
  <!-- //footer -->
</template>

<script>
import FooterNavigationComponent from '~/components/FooterComponent/FooterNavigationComponent'

export default {
  name: 'FooterComponent',
  components: { FooterNavigationComponent },
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    logo: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>

</style>
