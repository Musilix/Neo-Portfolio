import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Injectable({
  providedIn: 'root'
})
export class SplashThreeSectionService {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.DirectionalLight;

  private cube: THREE.Mesh;
  private testModel;

  private frameId: number = null;

  private loader: GLTFLoader = new GLTFLoader();

  constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(this.renderer.domElement);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    // this.light = new THREE.DirectionalLight( 0x404040 );
    // this.light.position.z = 10;
    // this.scene.add(this.light);

    //stronger lights
    var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, -25, 7);
    this.scene.add(hemiLight);

    var dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(2.0, 100, 7);
    this.scene.add(dirLight);

    var loader = new GLTFLoader();
    loader.load( 'scene.glb', (gltf)=>{
      gltf.scene.scale.set(.5,.5,.5);

      // let boundingRad = gltf.scene. geometry.boundingSphere.radius;

      var elem = this.renderer.domElement, 
      boundingRect = elem.getBoundingClientRect(),
      x = (window.innerWidth - boundingRect.left) * (elem.width / boundingRect.width),
      y = (window.innerHeight - boundingRect.top) * (elem.height / boundingRect.height);

      var vector = new THREE.Vector3( 
        (x / window.innerWidth) * 2 - 1, 
        -(y / window.innerHeight) * 2 + 1, 
        0.5 
      );

      // gltf.scene.position.set(-vector.x * (boundingRad), 0, 0);
      this.testModel = gltf.scene; //uhhhh
      this.scene.add(gltf.scene);
    }, undefined, function (error){
      console.error( error );
    });

    //cube stuff
    // const geometry = new THREE.BoxGeometry(2.5,2.5,2.5);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // this.cube = new THREE.Mesh(geometry, material);
    // this.cube.geometry.computeBoundingSphere();
    // let boundingRad = this.cube.geometry.boundingSphere.radius;

    // //trying to center the 3d obj on its side... awfully hard, but temporarily done
    // var elem = this.renderer.domElement, 
    // boundingRect = elem.getBoundingClientRect(),
    // x = (window.innerWidth - boundingRect.left) * (elem.width / boundingRect.width),
    // y = (window.innerHeight - boundingRect.top) * (elem.height / boundingRect.height);

    // var vector = new THREE.Vector3( 
    //     (x / window.innerWidth) * 2 - 1, 
    //     -(y / window.innerHeight) * 2 + 1, 
    //     0.5 
    // );

    // this.cube.position.set(-vector.x * (boundingRad), 0, 0);
    // this.scene.add(this.cube);


    //necessary for 3d lookAt mouse
    var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2.5);
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var pointOfIntersection = new THREE.Vector3();

    //have 3d obj look at mouse on move in canvas
    this.canvas.addEventListener("mousemove", (event)=>{
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);
      raycaster.ray.intersectPlane(plane, pointOfIntersection);

      this.testModel.lookAt(pointOfIntersection.x, pointOfIntersection.y * 1.5, pointOfIntersection.z);
    }, false);
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });

    });
  }
  
  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
 
    this.cube.position.set(-.5* (this.cube.geometry.boundingSphere.radius * 2), 0, 0);
    this.scene.add(this.cube);
    this.renderer.setSize( width, height );

  }
}
