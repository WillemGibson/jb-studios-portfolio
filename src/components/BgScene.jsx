import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function BgScene() {
    const bounds = { x: 6.5, y: 3.5 }; // Define bounds for the "bouncing" movement of stars

    // Refs for initial camera position and rotation
    const initialCameraPosition = useRef(new THREE.Vector3(0, 0, 5));
    const initialCameraRotation = useRef(new THREE.Euler(0, 0, 0));

    useEffect(() => {
        const canvas = document.querySelector('#container3D');
        if (!canvas) {
            console.error("Canvas element not found");
            return;
        }

        // Initialize scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });

        // Configure renderer for high DPI displays
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight); // Set initial size of the canvas
        camera.position.set(0, 0, 5); // Set initial camera position

        // Store initial camera position and rotation for possible future reference
        initialCameraPosition.current.copy(camera.position);
        initialCameraRotation.current.copy(camera.rotation);

        // Set background color of the scene
        scene.background = new THREE.Color(0x000000);

        // Array to store the stars and their velocities
        const stars = [];

        // Function to add a star to the scene
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24); // Small star geometry
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color material
            const star = new THREE.Mesh(geometry, material);

            // Random position for each star
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);

            // Random velocity for each star
            const velocity = new THREE.Vector3(
                Math.random() * 0.05 - 0.025, // Random X velocity
                Math.random() * 0.05 - 0.025, // Random Y velocity
                Math.random() * 0.05 - 0.025  // Random Z velocity
            );

            // Attach velocity to each star object
            star.velocity = velocity;

            stars.push(star); // Add star to the stars array
            scene.add(star); // Add the star to the scene
        }

        // Create multiple stars (200 stars in total)
        Array(200).fill().forEach(addStar);

        // Main animation loop
        function animate() {
            requestAnimationFrame(animate); // Call animate recursively for continuous animation

            // Update positions of stars based on their velocities
            stars.forEach(star => {
                star.position.add(star.velocity); // Apply velocity to the star's position

                // Bounce stars off the defined bounds (simple boundary collision detection)
                if (star.position.x > bounds.x || star.position.x < -bounds.x) {
                    star.velocity.x *= -0.25; // Reverse X velocity when out of bounds
                }
                if (star.position.y > bounds.y || star.position.y < -bounds.y) {
                    star.velocity.y *= -0.25; // Reverse Y velocity when out of bounds
                }
                if (star.position.z > 100 || star.position.z < -100) {
                    star.velocity.z *= -0.25; // Reverse Z velocity when out of bounds
                }
            });

            renderer.render(scene, camera); // Render the updated scene
        }

        animate(); // Start the animation loop

        // Handle window resizing
        function handleResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Update camera aspect ratio and projection matrix
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            // Update renderer size to fit the new window dimensions
            renderer.setSize(width, height);
        }

        // Event listener for window resizing
        window.addEventListener('resize', handleResize);

        // Cleanup when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize); // Remove the resize listener
            renderer.dispose(); // Dispose of the renderer to free memory
        };
    }, []);

    return (
        <div>
            <canvas id="container3D"></canvas> {/* Canvas for the Three.js scene */}
        </div>
    );
}