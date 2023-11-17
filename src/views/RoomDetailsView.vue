<script>

import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "RoomDetailsView",
  components: {FontAwesomeIcon},

  data() {
    return {
      room: null
    }
  },

  created() {
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