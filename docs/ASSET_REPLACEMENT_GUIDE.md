# Asset Replacement Guide

After implementation, these assets must be replaced with Qurlarmah Moses's personal content.

## Assets to Create/Replace

### 1. 3D Avatar Model
- **Current**: `public/3d/helmet-lorenzo.glb`
- **Replace with**: `public/3d/avatar-caricature.glb`
- **How**: Commission a 3D caricature from Fiverr/Sketchfab artist, or use [Ready Player Me](https://readyplayer.me) to generate a stylized avatar. Export as `.glb` with Draco compression. Keep under 2MB.

### 2. QM Monogram SVG
- **Current**: N/A (new asset)
- **Replace with**: `public/images/qm-monogram.svg`
- **How**: Design in Figma/Illustrator: interlock letters Q and M with clean geometric strokes. Export as SVG with `stroke` paths (no fills) for the draw animation.

### 3. Hero Portrait/Avatar
- **Current**: `public/images/hero-on.png`, `hero-off.png`
- **Replace with**: `public/images/avatar-portrait.png`
- **How**: Professional photo or illustrated caricature. High-res PNG (min 1024x1024), transparent background preferred for WebGL texture.

### 4. Portrait for Community Section
- **Current**: `public/images/lorenzo-pose*.png`
- **Replace with**: `public/images/portrait-base.png`
- **How**: Professional headshot photo. Square crop, neutral expression, high resolution (800x800+).

### 5. Steam Frame Glasses
- **Current**: N/A (new asset)
- **Replace with**: `public/images/steam-frame-glasses.png`
- **How**: Design steampunk-style glasses in Photoshop/Illustrator. Transparent PNG, positioned to align over eyes of portrait-base.png. Match the exact eye-level positioning.

### 6. Displacement Noise Texture
- **Current**: N/A (new asset)
- **Replace with**: `public/images/displacement-noise.png`
- **How**: Generate in Photoshop: Filter > Render > Clouds on 512x512 canvas. Greyscale. Or download from textures.com.

### 7. Name Pronunciation Audio
- **Current**: N/A (new asset)
- **Replace with**: `public/audio/qurlarmah-pronunciation.mp3`
- **How**: Record yourself saying "Qurlarmah" clearly. Export as MP3, keep under 200KB.

### 8. Favicon / App Icons
- **Current**: `public/icon-*.png`, `public/icon.svg`, `public/apple-icon.png`
- **Replace with**: Same paths, new designs
- **How**: Generate from QM monogram SVG. Use [realfavicongenerator.net](https://realfavicongenerator.net) to create all sizes (16x16, 32x32, 180x180, SVG).

### 9. Community Section Images
- **Current**: `public/images/lofan/*`, `lorenzo-col*`
- **Replace with**: `public/images/community/mlsa.jpg`, `gdsc.jpg`, `hackfest.jpg`
- **How**: Photos from actual MLSA workshops, GDSC events, MksU Hackfest. Crop to consistent aspect ratio (16:9 or 4:3).

### 10. OG Image (Social Media Preview)
- **Current**: N/A (new asset)
- **Replace with**: `public/images/og-image.png`
- **How**: 1200x630 PNG: dark teal background, "Qurlarmah Moses - Lead Frontend Architect" text, QM monogram. Create in Figma/Canva.

## Assets to DELETE

All of these are Lorenzo Filho specific and should be removed entirely:

### Images
- `public/images/lorenzo-*` (all Lorenzo photos)
- `public/images/helmets/*` (all helmet images)
- `public/images/flags/*` (all country flag images)
- `public/images/trofeus/*` (all trophy SVGs)
- `public/images/partners/*` (all partner logos)
- `public/images/moto*` (motorcycle images)
- `public/images/cap-*` (cap images)
- `public/images/ico-helmet*` (helmet icons)
- `public/images/panov0.png`
- `public/images/trofeus-lorenzo.PNG`
- `public/images/inspired-by-lando-norris.png`
- `public/images/lofan/*` (all lofan images)
- `public/images/icon/*` (hand icons)

### SVG Decorative Elements (motocross themed)
- `public/images/trilha*.svg` (all track/trail variants)
- `public/images/splash.svg`, `spla.svg`
- `public/images/curv*.svg` (all curve variants)
- `public/images/footer-mask.svg`
- `public/images/mask-pneu.svg`
- `public/images/race-day.svg`
- `public/images/tras.svg`, `trass.svg`
- `public/images/v0mask.svg`

### 3D Models
- `public/3d/helmet-lorenzo.glb`

### Old Logo/Brand
- `public/images/logo-color.png`
- `public/images/logo-white.png`

### Placeholder Files (optional - can keep or replace)
- `public/placeholder-logo.png`
- `public/placeholder-logo.svg`
- `public/placeholder-user.jpg`
- `public/placeholder.jpg`
- `public/placeholder.svg`
