<script>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";
import {useRoomApiStore} from "@/stores/roomApiStore";

export default {
  name: "RoomDetails",
  props: ["roomId"],
  data() {
    return {
        roomApi: useRoomApiStore(),
        room: null,
        //roomId: 0
    }
  },

  created() {
    this.getRoomDetails();
  },

  computed: {
    imagePath() {
      return `/src/assets/images/rooms/${this.room.id}.jpg`;
    }
  },

  methods: {
    getRoomDetails() {
      this.roomApi.fetchRoomDetails(this.roomId);
      setTimeout(() => {
        this.room = this.roomApi.room;
      }, 500);
    },

    // -------------------------------------------------------

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
    },

    // -------------------------------------------------------

  },
}
</script>

<template>
    <div v-if="room" class="container my-4">
      <b-row>
        <!-- Image Column -->
        <b-col md="6" class="mb-3">
          <b-img :src="imagePath" class="img-fluid w-100" alt="Hotelzimmer"></b-img>
        </b-col>

        <!-- Room Details Column -->
        <b-col md="6">
          <h3>{{ room.roomName }}</h3>
          <b-list-group>
            <b-list-group-item>
              <font-awesome-icon :icon="['fas', 'bed']"/>
              Betten: {{ room.beds }}
            </b-list-group-item>
            <b-list-group-item v-for="extra in room.extras" :key="extra.id">
              <font-awesome-icon :icon="getIconName(extra.name)"/>
              {{ getNameToDisplay(extra.name) }}: {{ extra.available === 1 ? 'ja' : 'nein' }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

    </div>
    <div v-else class="text-center">
      Die Zimmerdetails werden gerade geladen.
    </div>
</template>

<style scoped>

</style>