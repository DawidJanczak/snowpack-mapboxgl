import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
const map = new mapboxgl.Map({container: 'map'})
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
