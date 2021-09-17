<template>
  <!-- banner -->
  <div class="banner" id='banner'>
    <div class="header">
      <div class="header-left">
        <div class="w3layouts-logo">
          <header-logo-component :logo="logo"/>
        </div>
        <div class="agileinfo-social-grids">
          <ul>
            <header-icon-component v-for="(icon, iconIndex) in icons" :key="`icon-${iconIndex}`" :icon="icon"/>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="top-nav">
        <header-categories-component v-for="({navBarNav, navbarHeader}, categoriesIndex) in categories"
                                     :key="`categories-${categoriesIndex}`" :navBarNav="navBarNav" :navbarHeader="navbarHeader"/>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="banner-info">
      <div class="container">
        <h3>Новое поколение в обучении</h3>
        <h2>уроки плавания</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere tempor quam, vitae vestibulum lacus
          placerat non. Donec volutpat odio sed neque molestie elementum quis nec nisi. Phasellus elit leo, lobortis non
          massa in, elementum maximus urna.</p>
      </div>
    </div>
  </div>
  <!-- //banner -->
</template>

<script>
import HeaderIconComponent from "~/components/HeaderComponent/HeaderIconComponent";
import HeaderLogoComponent from "~/components/HeaderComponent/HeaderLogoComponent";
import HeaderCategoriesComponent from "~/components/HeaderComponent/HeaderCategoriesComponent";

export default {
  name: "headerComponents",
  components: {HeaderCategoriesComponent, HeaderLogoComponent, HeaderIconComponent},
  props: {
    icons: {
      type: Array,
      default: () => []
    },
    logo: {
      type: Object,
      default: () => {
      }
    },
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css">
</style>
