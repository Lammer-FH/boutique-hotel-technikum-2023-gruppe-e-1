<script>

import HotelContactInformation from "@/components/HotelContactInformation.vue";
export default {
  name: "ImprintView",
  components: {HotelContactInformation}
}
</script>

<template>

  <div class="container">
    <h1>Imprint - Wellness Boutique Hotel</h1>
    <HotelContactInformation/>

    <p>This website is owned and operated by Wellness Boutique Hotel. By accessing or using this website, you agree to
      be bound by the terms and conditions stated below. If you do not agree to these terms and conditions, please do
      not access or use this site.</p>

    <h2>Disclaimer</h2>
    <p>The information contained in this website is for general information purposes only. While we endeavor to keep
      the information up to date and correct, we make no representations or warranties of any kind, express or implied,
      about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the
      information, products, services, or related graphics contained on the website for any purpose. Any reliance you
      place on such information is therefore strictly at your own risk.</p>

    <h2>Contact</h2>
    <p>If you have any questions regarding this imprint, you may contact us using the information below:</p>
    <HotelContactInformation/>
  </div>

</template>

<style scoped>

</style>