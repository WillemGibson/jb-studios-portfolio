import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const LogoScene = () => {
    const modelRef = useRef(null);
    const velocityRef = useRef(new THREE.Vector3(0.02, 0.02, 0)); // Initial velocity
    const bounds = { x: 6.5, y: 3.5 }; // Define bounds for the "bouncing"
    const [isCameraMoved, setIsCameraMoved] = useState(false);

    const initialCameraPosition = useRef(new THREE.Vector3(0, 0, 5));
    const initialCameraRotation = useRef(new THREE.Euler().copy(new THREE.Euler(0, 0, 0)));

    useEffect(() => {
        const canvas = document.querySelector('#container3D');
        if (!canvas) {
            console.error("Canvas element not found");
            return;
        }
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });
        
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.set(0, 0, 5); // Set the camera position

        initialCameraPosition.current.copy(camera.position);
        initialCameraRotation.current.copy(camera.rotation);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;

        controls.addEventListener('change', () => {
            if (
                !camera.position.equals(initialCameraPosition.current) ||
                !camera.rotation.equals(initialCameraRotation.current)
            ) {
                setIsCameraMoved(true);
            }
        });
        
        controls.update();

        scene.background = new THREE.Color(0x000000);
        
        const loaderGLTF = new GLTFLoader();
        loaderGLTF.load(
            '/models/logo.glb',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(20, 20, 20);
                model.rotateX(-Math.PI / -2);
                
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
                    }
                });

                scene.add(model);
                modelRef.current = model;
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );

        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshBasicMaterial({color: 0xffffff});
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            
            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(200).fill().forEach(addStar);
        
        function animate() {
            requestAnimationFrame(animate);

            if (modelRef.current) {
                // Update the position of the model
                const model = modelRef.current;
                const velocity = velocityRef.current;

                model.position.x += velocity.x;
                model.position.y += velocity.y;

                // Check for boundaries and bounce
                if (model.position.x > bounds.x || model.position.x < -bounds.x) {
                    velocity.x = -velocity.x;
                }
                if (model.position.y > bounds.y || model.position.y < -bounds.y) {
                    velocity.y = -velocity.y;
                }

                controls.update();
                renderer.render(scene, camera);
            }
        }
        
        animate();
        
        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    const resetCamera = () => {
        window.location.reload(); 
        setIsCameraMoved(false);
    };

    return (
        <div>
            <canvas id='container3D'></canvas>
            {isCameraMoved && (
                <button
                style={{  
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: 'none',
                    fontFamily: '',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 1000,}}
                    onClick={resetCamera}
                >
                    Recenter
                </button>
            )}
        </div>
    );
}

export default LogoScene;
