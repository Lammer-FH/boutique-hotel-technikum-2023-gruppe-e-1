

<script>
export default {
  data() {
    return {
      map: null,
      directionsService: null,
      directionsRenderer: null,
      mapCenter: {lat: 48.208492, lng: 16.373127},
      currentLocation: { lat: 0, lng: 0 },
      hotelLocation: { lat: 48.208492, lng: 16.373127 },
      travelMode: 'DRIVING',
    }
  },
  watch: {
    travelMode(newValue) {
      // Re-draw the route when the travel mode changes
      this.drawRoute();
    }
  },
  mounted() {
    this.initializeMap();
    this.getCurrentLocation();
  },
  methods: {
    initializeMap() {
      this.map = new google.maps.Map(this.$refs.mapRef, {
        center: this.mapCenter,
        zoom: 2
      });

      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(this.map);
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.drawRoute();
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
    drawRoute() {
      this.directionsService.route(
          {
            origin: this.currentLocation,
            destination: this.hotelLocation,
            travelMode: google.maps.TravelMode[this.travelMode]
          },
          (result, status) => {
            if (status === "OK") {
              this.directionsRenderer.setDirections(result);
            } else {
              alert("Directions request failed due to " + status);
            }
          }
      );
    },
  },
}
</script>

<template>

  <div>
    <div ref="mapRef" style="width: 100%; height: 600px"></div>

    <b-form-group label="Reiseart:" label-for="travel-mode">
      <b-form-select id="travel-mode" v-model="travelMode">
        <b-form-select-option value="DRIVING">Auto</b-form-select-option>
        <b-form-select-option value="TRANSIT">Öffis</b-form-select-option>
        <b-form-select-option value="BICYCLING">Fahrrad</b-form-select-option>
      </b-form-select>


    </b-form-group>
  </div>
</template>