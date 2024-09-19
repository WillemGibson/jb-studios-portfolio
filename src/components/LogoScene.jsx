import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CameraResetButton from './buttons/CameraResetButton';

export default function LogoScene() {
    const modelRef = useRef(null);
    const velocityRef = useRef(new THREE.Vector3(0.02, 0.02, 0)); // Initial velocity for bouncing
    const bounds = { x: 6.5, y: 3.5 }; // Define bounds for the "bouncing" movement
    const [isCameraMoved, setIsCameraMoved] = useState(false); // State to track camera movement

    // Initial camera position and rotation
    const initialCameraPosition = useRef(new THREE.Vector3(0, 0, 5));
    const initialCameraRotation = useRef(new THREE.Euler(0, 0, 0));

    useEffect(() => {
        const canvas = document.querySelector('#container3D');
        if (!canvas) {
            console.error("Canvas element not found");
            return;
        }

        // Initialize the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });

        // Configure renderer
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.set(0, 0, 5); // Set the camera position

        // Store initial camera position and rotation
        initialCameraPosition.current.copy(camera.position);
        initialCameraRotation.current.copy(camera.rotation);

        // Setup OrbitControls for camera manipulation
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth controls
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;

        // Detect camera movements
        controls.addEventListener('change', () => {
            if (
                !camera.position.equals(initialCameraPosition.current) ||
                !camera.rotation.equals(initialCameraRotation.current)
            ) {
                setIsCameraMoved(true);
            }
        });

        controls.update();
        scene.background = new THREE.Color(0x000000); // Set background color

        // Load the 3D model
        const loaderGLTF = new GLTFLoader();
        loaderGLTF.load(
            '/models/logo.glb',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(20, 20, 20);
                model.rotateX(-Math.PI / -2); // Rotate model

                // Apply a basic material to each mesh in the model
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
                    }
                });

                scene.add(model); // Add model to the scene
                modelRef.current = model; // Store model reference
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Log loading progress
            },
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );

        // Function to add stars to the scene
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            // Randomly position stars
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);
            scene.add(star); // Add star to the scene
        }

        // Create multiple stars
        Array(200).fill().forEach(addStar);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            if (modelRef.current) {
                // Update the position of the model
                const model = modelRef.current;
                const velocity = velocityRef.current;

                model.position.x += velocity.x;
                model.position.y += velocity.y;

                // Check for boundaries and reverse direction if needed
                if (model.position.x > bounds.x || model.position.x < -bounds.x) {
                    velocity.x = -velocity.x;
                }
                if (model.position.y > bounds.y || model.position.y < -bounds.y) {
                    velocity.y = -velocity.y;
                }

                controls.update(); // Update controls
                renderer.render(scene, camera); // Render the scene
            }
        }

        animate(); // Start animation loop

        // Handle window resizing
        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', handleResize); // Add resize event listener

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose(); // Dispose of the renderer
        };
    }, []);

    // Reset camera to initial position
    const resetCamera = () => {
        window.location.reload(); 
        setIsCameraMoved(false);
    };

    return (
        <div>
            <canvas id='container3D'></canvas>
            {isCameraMoved && (
                <CameraResetButton resetCamera={resetCamera} />
            )}
        </div>
    );
}