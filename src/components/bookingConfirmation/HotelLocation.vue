<script>
import {defineComponent} from "vue";
import {GoogleMap, Marker} from "vue3-google-map";


export default {
  name: "HotelLocation",
  components: { GoogleMap, Marker },
  data() {
    return {
      mapCenter: {lat: 48.208492, lng: 16.373127},
      currentLocation: {
        position: {lat: 0, lng: 0},
        label: "Me"
      },
      hotelLocation: {
        position: {lat: 48.208492, lng: 16.373127},
        label: 'BH'
      }
    }

  },

  methods: {
    async getCurrentLocation() {
      try {
        // Use Geolocation API to get the current location
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        // Update the currentLocation property with the obtained coordinates
        this.currentLocation.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(this.currentLocation)
      } catch (error) {
        console.error("Error getting current location:", error);
        // Handle errors here, for example, notify the user or set default values
      }
    }
  },
  mounted() {
    // Call the method to get the current location when the component is mounted
    this.getCurrentLocation();
  }
}
</script>

<template>
  <p>Anfahrt</p>
  <GoogleMap
      api-key="AIzaSyBd9hZJusA-siF_MtwHHnIRwYwidRrtUL0"
      style="width: 100%; height: 500px"
      :center="mapCenter"
      :zoom="15"
  >
    <Marker :options="hotelLocation" />
    <Marker :options="currentLocation" />

    <GmapDirectionsRenderer
        :origin="currentLocation"
        :destination="hotelLocation"
        :travel-mode="'DRIVING'"
        :options="{draggable: true}"
    ></GmapDirectionsRenderer>


  </GoogleMap>
</template>

<style scoped>

</style>