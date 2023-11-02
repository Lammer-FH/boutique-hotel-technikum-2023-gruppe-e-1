<script>
export default {
  name: "ImageCarousel",
};
</script>

<template>
  <BCarousel controls indicators ride="carousel">
    <BCarouselSlide img-src="https://picsum.photos/1024/680/?image=202" />
    <BCarouselSlide img-src="https://picsum.photos/1024/680/?image=203" />
    <BCarouselSlide img-src="https://picsum.photos/1024/680/?image=351" />
  </BCarousel>
</template>

<style scoped>
 .carousel{
  margin-bottom: 3rem;
 }
</style>
