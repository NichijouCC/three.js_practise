import * as THREE from "three";
require('imports-loader?THREE=three!../node_modules/three/examples/js/loaders/GLTFLoader');

import { setTimeout } from "timers";

// import '../node_modules/three/examples/js/loaders/GLTFLoader';
// import { GLTF2Loader } from "../node_modules/three/examples/js/loaders/GLTFLoader";

// require('../node_modules/three/examples/js/loaders/GLTFLoader');


export class LoadGLTFObj
{
    static run()
    {

        console.log("open example_002_loadGltfObj!");

        //创建场景.
        let scene = new THREE.Scene();
        //相机
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        //渲染器
        let renderer = new THREE.WebGLRenderer();
        //设置画布大小
        renderer.setSize(window.innerWidth, window.innerHeight);
        //加入到body
        document.body.appendChild(renderer.domElement);

        window.onresize=()=>{
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect=window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }

        //第二步,创建几何体.
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(geometry, material);
        //加入到场景
        scene.add(cube);

        //设置相机位置
        camera.position.z = 5;

        //渲染循环
        function animate()
        {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();



        var loader = new THREE.GLTFLoader();
        var url="../../Res/box/Box.gltf";
        setTimeout(()=>{
            loader.load(url,(gltf)=>{
                // var object = gltf.scene;
                // object.traverse((obj)=>{
                //     scene.add(object);
                // });
            });
        },3000);


        // Jsloader.ins.loadJsFile("src/js/loader/GLTF2Loader.js",()=>{

        // });

    }
}