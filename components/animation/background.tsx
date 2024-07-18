import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { cn } from '@/lib/utils';

const AsciiBackground = ({ children, className }
    : { children: React.ReactNode, className?: string }
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const asciiRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let camera: THREE.PerspectiveCamera, controls: TrackballControls, scene: THREE.Scene, renderer: THREE.WebGLRenderer, effect: AsciiEffect;
        let sphere: THREE.Mesh, plane: THREE.Mesh;
        const start = Date.now();

        const init = () => {
            camera = new THREE.PerspectiveCamera(70, containerRef.current!.offsetWidth / containerRef.current!.offsetHeight, 1, 1000);
            camera.position.y = 150;
            camera.position.z = 500;

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0, 0, 0);

            const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
            pointLight1.position.set(500, 500, 500);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
            pointLight2.position.set(-500, -500, -500);
            scene.add(pointLight2);

            sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
            scene.add(sphere);

            plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
            plane.position.y = -200;
            plane.rotation.x = -Math.PI / 2;
            scene.add(plane);

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(containerRef.current!.offsetWidth, containerRef.current!.offsetHeight);
            renderer.setAnimationLoop(animate);

            effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
            effect.setSize(containerRef.current!.offsetWidth, containerRef.current!.offsetHeight);
            effect.domElement.style.color = 'black';
            effect.domElement.style.backgroundColor = 'transparent';

            asciiRef.current!.appendChild(effect.domElement);

            controls = new TrackballControls(camera, effect.domElement);

            window.addEventListener('resize', onWindowResize);
        };

        const onWindowResize = () => {
            camera.aspect = containerRef.current!.offsetWidth / containerRef.current!.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current!.offsetWidth, containerRef.current!.offsetHeight);
            effect.setSize(containerRef.current!.offsetWidth, containerRef.current!.offsetHeight);
        };

        const animate = () => {
            const timer = Date.now() - start;
            sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
            sphere.rotation.x = timer * 0.0003;
            sphere.rotation.z = timer * 0.0002;
            controls.update();
            effect.render(scene, camera);
        };

        init();

        return () => {
            window.removeEventListener('resize', onWindowResize);
            asciiRef.current?.removeChild(effect.domElement);
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className={cn(
            "relative h-full w-full overflow-hidden",
            className
        )}>
            <div className="absolute top-0 left-0 w-full h-full z-0" ref={asciiRef}></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default AsciiBackground;
