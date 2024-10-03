import * as THREE from 'three'
//scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//cubo01
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({color: 0x0a638a});
const cube = new THREE.Mesh(geometry, material);

//cubo02
const geometry2 = new THREE.BoxGeometry(2, 0.5, 2);
const material2 = new THREE.MeshStandardMaterial({color: 0xe57701});
const cube2 = new THREE.Mesh(geometry2, material2);

//plano01
const geometry3 = new THREE.PlaneGeometry( 10, 10, 3);
const material3 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane3 = new THREE.Mesh( geometry3, material3 );


const light = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)

scene.add(cube);
scene.add(cube2);
scene.add(plane3);
scene.add(light);
scene.add(directionalLight);

camera.position.set(1,1,1);
directionalLight.position.set(10,1,5);
camera.lookAt (cube.position);

function animate(){

plane3.rotation.x = Math.PI / 2;
plane3.position.y = -2;

   // cube.rotation.x +=0.01;
   // cube.rotation.y +=0.01;

    renderer.render(scene, camera);
    plane.rotation.x
}



