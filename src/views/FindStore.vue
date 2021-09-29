<template>
  <div class='home'>
    <!-- a sub menu component for featured drinks, faves, etc -->
    <sub-menu></sub-menu>
    <div class='grid grid-rows-2 grid-cols-1 h-full sm:flex'>
      <!-- panel searching stores, and listing them -->
      <div class='row-start-2 bg-white border-gray-200 border-r border-b rounded-br overflow-y-auto
      h-48
      sm:row-start-1 sm:flex sm:flex-none
      grid grid-cols-1 sm:left-0 sm:w-72 sm:h-screen '>
        <div class='m-4 inline'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <input type="text" name="" class="border-b border-gray-200 mr-2 transition ease-in-out hover:animate-pulse hover:border-b-2 hover:border-indigo-600 focus:border-b-2 focus:border-indigo-600 outline-none">
          <button class="btn-pill btn-light transition ease-in-out btn-animate">Filter</button>
        </div>
      </div>
      <!-- Map, should go on right on bigger screens, smaller height and center fill width on smaller screen -->
      <div class="row-start-1 h-36 w-full relative
      sm:row-start-2 sm:block">
        <div class="h-auto w-full">
          <l-map style='height:50vh' :zoom="2" >
            <l-geo-json :geojson='geojson' />
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap" :max-zoom="10"></l-tile-layer>
          </l-map>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onBeforeMount, ref } from 'vue'
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
      style: {
        color: '#34d399',
        weight: 5,
        opacity: 0.65
      }
    }
    onBeforeMount(async () => {
      // HERE is where to load Leaflet components!
      const { circleMarker } = await import('leaflet/dist/leaflet-src.esm')

      // And now the Leaflet circleMarker function can be used by the options:
      geojsonOptions.pointToLayer = (feature, latLng) =>
        circleMarker(latLng, { radius: 8 })
      ref.mapIsReady = true
    })

    return {
      geojson,
      geojsonOptions
    }
  }
}

</script>
