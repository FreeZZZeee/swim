<template>
  <div>
    <header-component :icons="icons" :logo="logo" :categories="categories"/>
    <about-component :iconAndText="iconAndText"/>
    <gallery-component :gallery="gallery" :logo="logo"/>
    <our-team-component :ourTeam="ourTeam"/>
    <services-component :priceBlock="priceBlock"/>
    <map-component/>
    <contact-us-component/>
    <footer-component :logo="logo" :categories="categories"/>
    <copyright-component :logo="logo"/>
  </div>
</template>

<script>
import {icons, logo, categories, iconAndText, gallery, ourTeam, priceBlock} from "~/pages/setup";
import headerComponent from "~/components/HeaderComponent";
import aboutComponent from "~/components/AboutComponent";
import GalleryComponent from "~/components/GalleryComponent";
import OurTeamComponent from "~/components/OurTeamComponent";
import ServicesComponent from "~/components/ServicesComponent";
import MapComponent from "~/components/MapComponent";
import ContactUsComponent from "~/components/ContactUsComponent";
import FooterComponent from "~/components/FooterComponent";
import CopyrightComponent from '~/components/CopyrightComponent'

export default {
  components: {
    CopyrightComponent,
    FooterComponent,
    ContactUsComponent,
    MapComponent, ServicesComponent, OurTeamComponent, GalleryComponent, headerComponent, aboutComponent},
  data: () => ({
    icons,
    logo,
    categories,
    iconAndText,
    gallery,
    ourTeam,
    priceBlock
  }),
}
</script>
