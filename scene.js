"use strict";

//  Adapted from Daniel Rohmer tutorial
//
// 		https://imagecomputing.net/damien.rohmer/teaching/2019_2020/semester_1/MPRI_2-39/practice/threejs/content/000_threejs_tutorial/index.html
//
// 		J. Madeira - April 2021


// To store the scene graph, and elements usefull to rendering the scene
const sceneElements = {
    sceneGraph: null,
    camera: null,
    renderer: null,
};


// Functions are called
//  1. Initialize the empty scene
//  2. Add elements within the scene
//  3. Render the scene
helper.initEmptyScene(sceneElements);
load3DObjects(sceneElements.sceneGraph);
requestAnimationFrame(computeFrame);


// Create and insert in the scene graph the models of the 3D scene
function load3DObjects(sceneGraph) {

    // ************************** //
    // Create a ground plane
    // ************************** //
    const planeGeometry = new THREE.PlaneGeometry(18, 18);
    const planeMaterial = new THREE.MeshPhongMaterial({ color: 'rgb(200, 200, 200)', side: THREE.DoubleSide });
    const planeObject = new THREE.Mesh(planeGeometry, planeMaterial);
    sceneGraph.add(planeObject);
    const axesHelper = new THREE.AxesHelper( 5 );
    sceneGraph.add( axesHelper );
    // Change orientation of the plane using rotation
    planeObject.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    // Set shadow property
    planeObject.receiveShadow = true;
    createShip(sceneGraph)
}

function createShip(sceneGraph){
    var swordFish = new THREE.Group();
    plasmaGun(swordFish);
    gunBase(swordFish)
    swordFish.position.y=2;
    sceneGraph.add(swordFish);
}

function gunBase(swordFish){
    const gun_base = new THREE.Group();

    swordFish.add(gun_base);
}

function plasmaGun(swordFish){
    const plasma_gun = new THREE.Group();
    //geometries
    const ocylgeometry = new THREE.CylinderGeometry( 0.3, 0.5, 8, 24,12, true);
    const icylgeometry = new THREE.CylinderGeometry( 0.23, 0.28, 0.4, 5,12, true);
    const crosscylgeometry = new THREE.CylinderGeometry( 0.5, 0.5, 1.5, 24,12);
    const isidecrosscylg = new THREE.CylinderGeometry( 0.3, 0.5, 0.1, 24,12);
    const osidecrosscylg = new THREE.CylinderGeometry( 0.3, 0.3, 0.07, 24,12);
    const backcylg = new THREE.CylinderGeometry( 0.5, 1.3, 3.3, 24,12);
    //materials
    const material = new THREE.MeshPhongMaterial( {color: 0x808080, side: THREE.DoubleSide } );
    
    //meshes
    const ocylinder = new THREE.Mesh( ocylgeometry, material );
    const icylinder = new THREE.Mesh( icylgeometry, material );
    const crosscyl = new THREE.Mesh( crosscylgeometry, material );
    const isidecrosscyl = new THREE.Mesh( isidecrosscylg, material);
    const isidecrosscyl2 = new THREE.Mesh( isidecrosscylg, material);
    const osidecrosscyl = new THREE.Mesh( osidecrosscylg, material);
    const osidecrosscyl2 = new THREE.Mesh( osidecrosscylg, material);
    const backcyl = new THREE.Mesh(backcylg, material);
    
    //positions
    icylinder.position.y=2;
    icylinder.position.x=-6.2;
    icylinder.rotation.z = Math.PI/2;
    icylinder.receiveShadow=true;
    ocylinder.position.y=2;
    ocylinder.position.x=-2;
    ocylinder.rotation.z = Math.PI/2;
    ocylinder.receiveShadow=true;
    crosscyl.position.y=1.5
    crosscyl.position.x=2.5
    crosscyl.rotation.x=Math.PI/2;
    crosscyl.receiveShadow=true;
    isidecrosscyl.position.y=1.5
    isidecrosscyl.position.x=2.5
    isidecrosscyl.rotation.x=Math.PI/2;
    isidecrosscyl.receiveShadow=true;
    isidecrosscyl.position.z=0.8
    isidecrosscyl2.position.y=1.5
    isidecrosscyl2.position.x=2.5
    isidecrosscyl2.rotation.x=Math.PI/2;
    isidecrosscyl2.receiveShadow=true;
    isidecrosscyl2.position.z=-0.8;
    isidecrosscyl2.rotation.z=Math.PI;
    osidecrosscyl.position.y=1.5
    osidecrosscyl.position.x=2.5
    osidecrosscyl.rotation.x=Math.PI/2;
    osidecrosscyl.receiveShadow=true;
    osidecrosscyl.position.z=-0.9;
    osidecrosscyl.rotation.z=Math.PI;
    osidecrosscyl2.position.y=1.5
    osidecrosscyl2.position.x=2.5
    osidecrosscyl2.rotation.x=Math.PI/2;
    osidecrosscyl2.receiveShadow=true;
    osidecrosscyl2.position.z=0.9;
    osidecrosscyl2.rotation.z=Math.PI;
    backcyl.position.y=1.88
    backcyl.position.x=3.55;
    backcyl.rotation.x=Math.PI;
    backcyl.receiveShadow=true;
    backcyl.rotation.z=Math.PI/2+0.07;
    //add to group
    plasma_gun.add(icylinder);
    plasma_gun.add(ocylinder);
    plasma_gun.add(crosscyl);
    plasma_gun.add(isidecrosscyl);
    plasma_gun.add(isidecrosscyl2);
    plasma_gun.add(osidecrosscyl);
    plasma_gun.add(osidecrosscyl2);
    plasma_gun.add(backcyl);
    swordFish.add(plasma_gun);
}

function computeFrame(time) {

    // Rendering
    helper.render(sceneElements);

    // Call for the next frame
    requestAnimationFrame(computeFrame);
}