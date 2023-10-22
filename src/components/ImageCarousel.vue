<script>
export default {
  name: "ImageCarousel"
}
</script>

<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://picsum.photos/id/202/200/300" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/id/203/200/300" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/id/351/200/300" class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>

</style>