<template>
  <!-- contact -->
  <div class="contact" id="contact">
    <div class="container">
      <div class="about-heading">
        <h3>Наши контакты</h3>
        <p>Cras cursus, nunc sit amet aliquam maximus</p>
      </div>
      <contact-us-address-component/>
      <contact-us-information/>
      <contact-us-form-component/>
    </div>
  </div>
  <!-- //contact -->
</template>

<script>
import ContactUsAddressComponent from "~/components/ContactUsComponent/ContactUsAddressComponent";
import ContactUsInformation from "~/components/ContactUsComponent/ContactUsInformation";
import ContactUsFormComponent from "~/components/ContactUsComponent/ContactUsFomComponent";

export default {
  name: "ContactUsComponent",
  components: {ContactUsFormComponent, ContactUsInformation, ContactUsAddressComponent}
}
</script>

<style scoped>

</style>
