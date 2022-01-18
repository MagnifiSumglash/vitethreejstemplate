/*
 Three.js Doc : https://threejs.org/docs/index.html#manual/en/introduction/Libraries-and-Plugins
 Three.js example : https://threejs.org/examples/#webgl_animation_keyframes
 */
// Import Style and Three
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MeshBasicMaterial, MeshStandardMaterial } from 'three'

// Setup the scene and camera

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
camera.position.setX(-3)

renderer.render(scene, camera)

// torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({color: 0xff6347}) // meshStandard need light to be seen
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)


// Lights
 const pointLight = new THREE.PointLight(0xFFFFFF)
 pointLight.position.set(20, 20, 20)

//const ambientLight = new THREE.AmbientLight(0xFFFFFF)
scene.add(pointLight /*ambientLight*/)

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight) // helper for point light
// const gridHelper = new THREE.GridHelper(200, 50) // grid Helper 
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement) // move camera by dragging the mouse

// Animation Loop

function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

   // controls.update()

  renderer.render(scene, camera)
}

animate()