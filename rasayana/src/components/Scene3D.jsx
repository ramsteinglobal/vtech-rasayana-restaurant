import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Hero 3D: lathe plate + saffron orb + orbiting rings + dust. Reacts to mouse and scroll.
export default function Scene3D() {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current, host = cv.parentElement
    const R = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true })
    R.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    const S = new THREE.Scene()
    const C = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    S.add(new THREE.AmbientLight(0x442211, 0.9))
    const L1 = new THREE.PointLight(0xf2a31b, 2.4, 30); L1.position.set(3, 4, 4); S.add(L1)
    const L2 = new THREE.PointLight(0xc8741a, 1.6, 30); L2.position.set(-4, 1, -2); S.add(L2)

    const G = new THREE.Group(); S.add(G)
    const profile = [[0,0],[1.6,0],[1.9,.12],[2.5,.3],[2.6,.34],[2.3,.3],[1.5,.1],[0,.08]].map(([x,y]) => new THREE.Vector2(x,y))
    G.add(new THREE.Mesh(new THREE.LatheGeometry(profile, 64),
      new THREE.MeshStandardMaterial({ color: 0x1a1410, metalness: 0.9, roughness: 0.25, side: THREE.DoubleSide })))
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 3),
      new THREE.MeshStandardMaterial({ color: 0xf2a31b, emissive: 0xc8741a, emissiveIntensity: 0.8, metalness: 0.5, roughness: 0.2, flatShading: true }))
    orb.position.y = 1.3; G.add(orb)
    const rings = [1.6, 2.1, 2.7].map((r, i) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.012, 8, 120),
        new THREE.MeshBasicMaterial({ color: 0xf2a31b, transparent: true, opacity: 0.55 - i * 0.12 }))
      m.position.y = 1.3; m.rotation.x = Math.PI / 2.3 + i * 0.3; G.add(m); return m
    })
    const N = 500, pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      const a = Math.random() * 6.28, r = 2 + Math.random() * 5
      pos[i*3] = Math.cos(a) * r; pos[i*3+1] = (Math.random() - 0.3) * 6; pos[i*3+2] = Math.sin(a) * r - 2
    }
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const dust = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xffc04d, size: 0.04, transparent: true, opacity: 0.8 }))
    S.add(dust)

    let mx = 0, my = 0, sc = 0, t = 0, raf
    const onMove = (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5 }
    const onScroll = () => { sc = Math.min(window.scrollY / host.clientHeight, 1) }
    const fit = () => {
      const w = host.clientWidth, h = host.clientHeight, mobile = w < 760
      R.setSize(w, h, false); C.aspect = w / h
      G.position.set(mobile ? 0 : 2.4, mobile ? 1.2 : 0, 0); G.scale.setScalar(mobile ? 0.7 : 1)
      C.updateProjectionMatrix()
    }
    fit(); onScroll()
    window.addEventListener('pointermove', onMove); window.addEventListener('scroll', onScroll); window.addEventListener('resize', fit)

    const loop = () => {
      t += 0.01
      G.rotation.y = t * 0.4 + mx * 0.8 + sc * 3
      G.rotation.x = my * 0.25 + sc * 0.6
      orb.position.y = 1.3 + Math.sin(t * 2) * 0.15; orb.rotation.y = t; orb.scale.setScalar(1 + sc * 0.4)
      rings.forEach((r, i) => (r.rotation.z = t * (i % 2 ? -0.5 : 0.4)))
      dust.rotation.y = -t * 0.08
      C.position.set(0, 2.2, 7.5 + sc * 3); C.lookAt(0, 0.8, 0)
      R.render(S, C); raf = requestAnimationFrame(loop)
    }
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', fit)
      R.dispose()
    }
  }, [])
  return <canvas id="cv" ref={ref} aria-hidden="true" />
}