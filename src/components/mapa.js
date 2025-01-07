import { Map, TerrainControl } from 'maplibre-gl'

export default function (container) {
  const map = new Map({
    center: [11.39085, 47.27574],
    container,
    maxZoom: 18,
    maxPitch: 85,
    pitch: 70,
    rollEnabled: true,
    style: {
      layers: [
        {
          id: 'osm',
          type: 'raster',
          source: 'osm',
        },
        {
          id: 'hills',
          type: 'hillshade',
          source: 'hillshadeSource',
          layout: { visibility: 'visible' },
          paint: { 'hillshade-shadow-color': '#473B24' },
        },
      ],
      sky: {},
      sources: {
        osm: {
          type: 'raster',
          tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '&copy; OpenStreetMap Contributors',
          maxzoom: 19,
        },
        // Use a different source for terrain and hillshade layers, to improve render quality
        terrainSource: {
          type: 'raster-dem',
          url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
          tileSize: 256,
        },
        hillshadeSource: {
          type: 'raster-dem',
          url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
          tileSize: 256,
        },
      },
      terrain: {
        source: 'terrainSource',
        exaggeration: 1,
      },
      version: 8,
    },
    zoom: 12,
  })

  function rotateCamera(timestamp) {
    // clamp the rotation between 0 -360 degrees
    // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
    map.rotateTo((timestamp / 250) % 360, { duration: 0 })
    // Request the next frame of the animation.
    requestAnimationFrame(rotateCamera)
  }

  map.on('load', () => rotateCamera(0))
  map.scrollZoom.disable()

  return map
}

export const terrainControl = new TerrainControl({
  source: 'terrainSource',
  exaggeration: 1,
})
