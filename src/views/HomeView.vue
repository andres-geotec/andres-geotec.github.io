<script setup>
import mapa from '@/components/mapa'
import 'maplibre-gl/dist/maplibre-gl.css'
import { onMounted } from 'vue'

onMounted(() => mapa('map'))
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

  <main class="contenedor m-y-maximo">
    <section class="ancho-lectura">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo fugit laborum corrupti
        corporis mollitia! Non beatae officiis qui, omnis voluptatibus et porro commodi quae
        quisquam distinctio nihil sit alias?
      </p>
    </section>
  </main>
</template>

<style lang="scss">
#map {
  height: 100%;

  &.maplibregl-map
    .maplibregl-control-container
    .maplibregl-ctrl-bottom-right
    .maplibregl-ctrl.maplibregl-ctrl-attrib.maplibregl-compact
    .maplibregl-ctrl-attrib-button {
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
