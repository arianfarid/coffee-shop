<template>
  <div class='home'>
    <!-- a sub menu component for featured drinks, faves, etc -->
    <sub-menu></sub-menu>
    <div class='flex'>
      <!-- panel searching stores, and listing them -->
      <div class='grid-cols-1'>
      </div>
      <!-- Map, should go on right on bigger screens, smaller height and center fill width on smaller screen -->
      <l-map style='height:50vh'>
        <l-geo-json :geojson='geojson' />
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap" :max-zoom="10" />
      </l-map>
    </div>
  </div>
</template>
<script>
import { onBeforeMount } from 'vue'
import 'leaflet/dist/leaflet.css'
import SubMenu from '@/components/SubMenu.vue'
import { LMap, LGeoJson, LTileLayer } from '@vue-leaflet/vue-leaflet'
export default {
  components: {
    LMap,
    LGeoJson,
    LTileLayer,
    SubMenu
  },
  setup () {
    const geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: {
          dataType: 'lat lng coordinate',
          notes: 'test point.'
        },
        geometry: {
          type: 'Point',
          coordinates: [15, 30]
        }
      }]
    }
    const geojsonOptions = {
      // Options that don't rely on Leaflet methods.
    }
    onBeforeMount(async () => {
      // HERE is where to load Leaflet components!
      const { circleMarker } = await import('leaflet/dist/leaflet-src.esm')

      // And now the Leaflet circleMarker function can be used by the options:
      this.geojsonOptions.pointToLayer = (feature, latLng) =>
        circleMarker(latLng, { radius: 8 })
      this.mapIsReady = true
    })

    return {
      geojson,
      geojsonOptions
    }
  }
}
</script>
