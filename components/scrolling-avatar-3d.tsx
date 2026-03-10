"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ScrollingAvatar3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    // Lighting with teal tint
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0x5eead4, 1.2)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const rimLight = new THREE.PointLight(0x5eead4, 0.8, 10)
    rimLight.position.set(-3, 2, 3)
    scene.add(rimLight)

    // Placeholder avatar geometry (replace with GLB loader when model is ready)
    const avatarGroup = new THREE.Group()

    // Main body - icosahedron as stylized placeholder
    const bodyGeometry = new THREE.IcosahedronGeometry(0.4, 1)
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x014d4e,
      metalness: 0.3,
      roughness: 0.4,
      emissive: 0x5eead4,
      emissiveIntensity: 0.1,
    })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    avatarGroup.add(body)

    // Orbiting ring
    const ringGeometry = new THREE.TorusGeometry(0.6, 0.02, 16, 32)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      emissive: 0x5eead4,
      emissiveIntensity: 0.5,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 3
    avatarGroup.add(ring)

    scene.add(avatarGroup)

    // Position avatar off-screen initially
    avatarGroup.position.set(3, 2, 0)

    // Scroll-driven animation path
    const scrollProgress = { value: 0 }

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        scrollProgress.value = self.progress
      },
    })

    // Define path waypoints (screen-space approximate)
    const pathPoints = [
      { x: 3, y: 2, z: 0 },     // Start: top-right, off-view
      { x: 2, y: 0.5, z: 0 },   // Hero section right
      { x: -2, y: -0.5, z: 0 }, // Stats section left
      { x: 2, y: -1, z: 0 },    // Projects section right
      { x: -1.5, y: -1.5, z: 0 }, // Case studies left
      { x: 0, y: -2, z: 0 },    // Timeline center
      { x: 2, y: -2.5, z: 0 },  // Community right
      { x: 0, y: -3, z: 0 },    // Footer center
    ]

    // Animation loop
    let time = 0
    const clock = new THREE.Clock()

    const animate = () => {
      time += clock.getDelta()
      const progress = scrollProgress.value

      // Interpolate position along path
      const totalSegments = pathPoints.length - 1
      const segmentProgress = progress * totalSegments
      const currentSegment = Math.min(Math.floor(segmentProgress), totalSegments - 1)
      const segmentT = segmentProgress - currentSegment

      const from = pathPoints[currentSegment]
      const to = pathPoints[Math.min(currentSegment + 1, totalSegments)]

      // Smooth interpolation
      avatarGroup.position.x = from.x + (to.x - from.x) * segmentT
      avatarGroup.position.y =
        from.y + (to.y - from.y) * segmentT + Math.sin(time * 2) * 0.1
      avatarGroup.position.z = from.z + (to.z - from.z) * segmentT

      // Rotation based on scroll progress
      avatarGroup.rotation.y = progress * Math.PI * 4
      avatarGroup.rotation.x = Math.sin(progress * Math.PI * 2) * 0.3

      // Ring rotation
      ring.rotation.z += 0.01

      renderer.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Pause when tab is hidden
    const handleVisibility = () => {
      if (document.hidden) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      } else {
        clock.getDelta() // Reset delta
        animate()
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      scrollTrigger.kill()
      renderer.dispose()
      bodyGeometry.dispose()
      bodyMaterial.dispose()
      ringGeometry.dispose()
      ringMaterial.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 30 }}
      aria-hidden="true"
    />
  )
}
