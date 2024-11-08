import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function BgScene() {
    const bounds = { x: 6.5, y: 3.5 }; // Define bounds for the "bouncing" movement

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

        // Set background color
        scene.background = new THREE.Color(0x000000);

        // Array to store stars and their velocities
        const stars = [];

        // Function to add stars to the scene with velocities
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            // Randomly position stars within a larger range
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);

            // Random velocity for each star
            const velocity = new THREE.Vector3(
                Math.random() * 0.05 - 0.025, // Random X velocity
                Math.random() * 0.05 - 0.025, // Random Y velocity
                Math.random() * 0.05 - 0.025  // Random Z velocity
            );

            // Attach velocity to each star
            star.velocity = velocity;

            stars.push(star); // Add star to the array
            scene.add(star); // Add star to the scene
        }

        // Create multiple stars
        Array(200).fill().forEach(addStar);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            // Move each star based on its velocity
            stars.forEach(star => {
                // Update star position based on its velocity
                star.position.add(star.velocity);

                // Apply some boundary conditions: "bounce" when reaching the bounds
                if (star.position.x > bounds.x || star.position.x < -bounds.x) {
                    star.velocity.x *= -0.25; // Reverse X velocity
                }
                if (star.position.y > bounds.y || star.position.y < -bounds.y) {
                    star.velocity.y *= -0.25; // Reverse Y velocity
                }
                if (star.position.z > 100 || star.position.z < -100) {
                    star.velocity.z *= -0.25; // Reverse Z velocity
                }
            });

            renderer.render(scene, camera); // Render the scene
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

    return (
        <div>
            <canvas id='container3D'></canvas>
        </div>
    );
}
