<script>

import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";

export default {
  name: "RoomDetailsView",
  components: {FontAwesomeIcon},

  data() {
    return {
      room: null,
      roomId: null,
      currentImageIndex: ref(0),
      // Assuming room details are fetched and stored in `room`
      imageSources: [],

    }
  },

  watch: {
    async room(newRoom) {
      if (newRoom && newRoom.id) {
        try {
          const imagePath = await import(`@/assets/images/rooms/${newRoom.id}.jpg`);
          this.imageSources = [imagePath.default];
        } catch (error) {
          console.error('Error loading image:', error);
          // Handle the error or set a default image
        }
      }
    }
  },


  computed: {
    imagePath() {
      return this.imageSources.length > 0 ? this.imageSources[this.currentImageIndex] : '';
    }
  },


  created() {
    this.roomId = this.$route.params.roomId;
    this.fetchRoomDetails();
  },

  methods: {
    fetchRoomDetails() {
      this.roomId = this.$route.params.roomId
      console.log(this.roomId)

      axios.get(`https://boutique-hotel.helmuth-lammer.at/api/v1/rooms/${this.roomId}`)
          .then(response => {
            this.room = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },

    getIconName(extraName) {
      const iconMap = {
        'minibar': 'wine-bottle',
        'bathroom': 'fa-bath',
        'television': 'fa-tv',
        'livingroom': 'fa-couch',
        'aircondition': 'fa-snowflake',
        'wifi': 'fa-wifi',
        'breakfast': 'fa-mug-saucer',
        'handicapped accessible': 'fa-wheelchair-move'

        // Add other mappings as needed
      };
      return ['fas', iconMap[extraName] || 'question-circle']; // default icon
    },

    getNameToDisplay(nameFromDatabase) {
      const nameMap = {
        'bathroom': 'Badezimmer',
        'minibar': 'Minibar',
        'television': 'Fernseher',
        'livingroom': 'Wohnzimmer',
        'aircondition': 'Klimaanlage',
        'wifi': 'WLAN',
        'breakfast': 'Frühstück',
        'handicapped accessible': 'behindertengerecht'
        // Add other mappings as needed
      };
      return nameMap[nameFromDatabase] || nameFromDatabase; // return the internal name if no mapping is found
    }
  }
}

</script>

<template>
  <div v-if="room">
    <h3>{{ room.roomName }}</h3>

    <img :src="imagePath" class="room-image" alt="Hotelzimmer">
<br>
    <p>Das Zimmer ist mit folgenden Extras ausgestattet:</p>
    <ul class="list-unstyled">

      <li>  <font-awesome-icon :icon="['fas', 'bed']" /> Betten: {{ room.beds }}</li>
      <li v-for="extra in room.extras" :key="extra.id">

        <font-awesome-icon :icon="getIconName(extra.name)" />

        {{ getNameToDisplay(extra.name) }}: {{ extra.available === 1 ? 'ja' : 'nein' }}

      </li>
    </ul>


  </div>

</template>

<style scoped>

</style>