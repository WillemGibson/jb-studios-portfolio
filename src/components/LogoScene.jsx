import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CameraResetButton from './buttons/CameraResetButton';
import CameraMoveSuggestionButton from './buttons/CameraMoveSuggestionButton';

export default function LogoScene() {
    const modelRef = useRef(null); // Reference for the loaded 3D model
    const velocityRef = useRef(new THREE.Vector3(0.02, 0.02, 0)); // Initial velocity for model bouncing
    const bounds = { x: 6.8, y: 3.5 }; // Define movement bounds for the model
    const [isCameraMoved, setIsCameraMoved] = useState(false); // Track if the camera was moved by the user
    const [showSuggestionButton, setShowSuggestionButton] = useState(false); // Show suggestion button if camera hasn't moved

    // Initial camera position and rotation
    const initialCameraPosition = useRef(new THREE.Vector3(0, 0, 5));
    const initialCameraRotation = useRef(new THREE.Euler(0, 0, 0));

    useEffect(() => {
        // Get the canvas element for the WebGL renderer
        const canvas = document.querySelector('#container3D');
        if (!canvas) {
            console.error("Canvas element not found");
            return;
        }

        // Initialize scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });

        // Configure renderer
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.set(0, 0, 5); // Set initial camera position

        // Store initial camera position and rotation
        initialCameraPosition.current.copy(camera.position);
        initialCameraRotation.current.copy(camera.rotation);

        // Set up OrbitControls for camera manipulation
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth controls
        controls.dampingFactor = 0.25;
        controls.enableZoom = false; // Disable zooming

        // Detect camera movement and update state
        controls.addEventListener('change', () => {
            if (
                !camera.position.equals(initialCameraPosition.current) ||
                !camera.rotation.equals(initialCameraRotation.current)
            ) {
                setIsCameraMoved(true); // Set state if camera was moved
            }
        });

        controls.update(); // Ensure controls are updated initially
        scene.background = new THREE.Color(0x000000); // Set black background for the scene

        // Load 3D model using GLTFLoader
        const loaderGLTF = new GLTFLoader();
        loaderGLTF.load(
            '/models/logo.glb',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(20, 20, 20); // Scale the model
                model.rotateX(-Math.PI / -2); // Rotate model

                // Apply a basic material to each mesh in the model
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
                    }
                });

                scene.add(model); // Add the model to the scene
                modelRef.current = model; // Store the model reference for future use
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Log model loading progress
            },
            (error) => {
                console.error('Error loading the model:', error); // Handle loading errors
            }
        );

        // Array to store stars and their velocities
        const stars = [];

        // Function to add stars to the scene with velocities
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            // Randomly position stars in the scene
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);

            // Random velocity for each star
            const velocity = new THREE.Vector3(
                Math.random() * 0.02 - 0.01, // Random X velocity
                Math.random() * 0.02 - 0.01, // Random Y velocity
                Math.random() * 0.02 - 0.01  // Random Z velocity
            );

            // Attach velocity to the star
            star.velocity = velocity;

            stars.push(star); // Add star to the array
            scene.add(star); // Add star to the scene
        }

        // Create multiple stars
        Array(200).fill().forEach(addStar);

        // Animation loop to update positions of model and stars
        function animate() {
            requestAnimationFrame(animate);

            if (modelRef.current) {
                // Update the position of the logo model
                const model = modelRef.current;
                const velocity = velocityRef.current;

                model.position.x += velocity.x;
                model.position.y += velocity.y;

                // Check boundaries and reverse direction when needed
                if (model.position.x > bounds.x || model.position.x < -bounds.x) {
                    velocity.x = -velocity.x;
                }
                if (model.position.y > bounds.y || model.position.y < -bounds.y) {
                    velocity.y = -velocity.y;
                }
            }

            // Move stars based on their velocity and check boundaries
            stars.forEach(star => {
                star.position.add(star.velocity);

                if (star.position.x > bounds.x || star.position.x < -bounds.x) {
                    star.velocity.x *= -0.25;
                }
                if (star.position.y > bounds.y || star.position.y < -bounds.y) {
                    star.velocity.y *= -0.25;
                }
                if (star.position.z > 100 || star.position.z < -100) {
                    star.velocity.z *= -0.25;
                }
            });

            controls.update(); // Update camera controls
            renderer.render(scene, camera); // Render the scene
        }

        animate(); // Start the animation loop

        // Handle window resizing
        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', handleResize); // Add resize listener

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose(); // Dispose of renderer
        };
    }, []);

    // Function to reset the camera to its initial position
    const resetCamera = () => {
        window.location.reload(); 
        setIsCameraMoved(false); // Reset camera moved state
    };

    // Check after 5 seconds if the camera hasn't been moved and show suggestion button
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isCameraMoved) {
                setShowSuggestionButton(true); // Show suggestion button after 5 seconds if camera hasn't moved
            }
        }, 5000); // 5 seconds timer

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, [isCameraMoved]);

    return (
        <div className="relative">
            <canvas id='container3D' className="w-full h-full"></canvas> {/* 3D canvas */}
            
            {/* Camera reset button only shows if camera has moved */}
            {isCameraMoved && (
                <CameraResetButton resetCamera={resetCamera} />
            )}

            {/* Suggestion button if camera hasn't moved after 5 seconds */}
            {showSuggestionButton && !isCameraMoved && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <CameraMoveSuggestionButton />
                </div>
            )}
        </div>
    );
}