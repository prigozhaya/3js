import { createEffect } from 'solid-js';
import * as THREE from 'three';
import './App.css';

function App() {
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const size = {
    width: 600,
    height: 600
  };
  const light = new THREE.AmbientLight(0xffffff, 5);
  scene.add(light);
  light.position.set(0, 1, 0);
  
  const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
  scene.add(camera); 
  camera.position.set(0, 0, 5); 
  cube.rotation.x = Math.PI*0.25;

createEffect(() => {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas') as HTMLCanvasElement,
  });
  renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

}, []);
  return (
    <>
      <canvas class='camera' id="canvas"></canvas>
    </>
  )
}

export default App
