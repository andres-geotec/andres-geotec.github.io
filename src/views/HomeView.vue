<script setup>
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { onMounted } from 'vue'

onMounted(() => {
  new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 1,
  })
})
</script>

<template>
  <div class="portada">
    <div id="map" class="portada-imagen" />
    <div class="portada-degradado">
      <div class="portada-cuerpo">
        <p class="portada-subtitulo">Hola, soy</p>
        <h1 class="portada-titulo">andres-geotec</h1>
      </div>
    </div>
  </div>
  <!-- <main>:)</main> -->

  <!-- <div id="map"></div> -->
</template>

<style lang="scss">
#map {
  height: 100%;
}
</style>
