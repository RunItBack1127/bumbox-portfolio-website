<template>
  <section id="speaker-container"></section>
</template>

<script>
import * as THREE from '../../three-bundle';
import { onMounted } from 'vue';

export default {
    props: {
        modelComponentBlur: Number
    },
    setup(props) {
        console.log(props.modelComponentBlur);

        const scene = new THREE.Scene();
        scene.background = null;

        const pLight1 = new THREE.PointLight( 0xffffff, 1.0 );
        pLight1.position.set(0, 0, -1);
        scene.add(pLight1);

        const pLight2 = new THREE.PointLight( 0xffffff, 1.0 );
        pLight2.position.set(0, 1, 0);
        scene.add(pLight2);

        const pLight3 = new THREE.PointLight( 0xfffffff, 1.0 );
        pLight3.position.set(0, -1, 0);
        scene.add(pLight3);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const camera = new THREE.PerspectiveCamera( 45, 2, 0.1, 100 );
        camera.position.set(0, 0, -0.3);

        adjustModelSizing();

        const controls = new THREE.OrbitControls(camera, renderer.domElement);

        controls.enableRotate = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 12.5;

        const gltfLoader = new THREE.GLTFLoader();

        gltfLoader.load("https://raw.githubusercontent.com/RunItBack1127/bumbox-portfolio-website/main/src/assets/models/UE_MEGABOOM.gltf", (model) => {
            const speakerModel = model.scene;

            const sBBox = new THREE.Box3().setFromObject(speakerModel);
            const sCenter = {
                x: ( sBBox.max.x + sBBox.min.x ) / 2,
                y: ( sBBox.max.y + sBBox.min.y ) / 2,
                z: ( sBBox.max.z + sBBox.min.z ) / 2
            };

            speakerModel.translateX(-sCenter.x);
            speakerModel.translateY(-sCenter.y);
            speakerModel.translateZ(-sCenter.z);

            scene.add(speakerModel);
        });

        window.addEventListener("resize", () => {
            adjustModelSizing();
        });

        function adjustModelSizing() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        onMounted(() => {
            const speakerContainer = document.querySelector('#speaker-container');
            speakerContainer.appendChild(renderer.domElement);
        });
    },
    mounted() {
        this.$emit('modelLoaded');
    },
    computed: {
        modelBlur() {
            return this.modelComponentBlur + "px";
        }
    }
}
</script>

<style lang="less" scoped>
#speaker-container {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    transform: translateY(25%) translateX(35%) scale(1.5) rotate(-45deg);
    z-index: -1;
    filter: blur(v-bind('modelBlur'));
    opacity: 0.35;

    canvas {
        width: 100%;
        height: 100%;
    }
}
</style>