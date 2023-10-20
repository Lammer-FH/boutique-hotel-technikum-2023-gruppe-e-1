<script>
export default {
  name: "RoomCard",
  props: ["roomName", "description"],
}

</script>

<template>
  <div>
    <b-card
        title="{{$props.roomName}}"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
        {{description}} {{$props.roomName}}
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<style scoped>

</style>