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

    getIconClass(extraName) {
      const iconMap = {
        'minibar': 'fa fa-glass-martini',
        'bathroom': 'fa fa-bath',

        // Add other mappings as needed
      };
      return iconMap[extraName] || 'fa fa-question-circle'; // default icon
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
    <h2>{{ room.roomName }}</h2>
    <font-awesome-icon icon="fa-solid fa-user-secret"/>

    <ul>
      <li>Anzahl Betten: {{ room.beds }}</li>
      <li v-for="extra in room.extras" :key="extra.id">

        <i :class="getIconClass(extra.name)"></i>

        {{ getNameToDisplay(extra.name) }}: {{ extra.available === 1 ? 'ja' : 'nein' }}
      </li>
    </ul>


  </div>

</template>

<style scoped>

</style>