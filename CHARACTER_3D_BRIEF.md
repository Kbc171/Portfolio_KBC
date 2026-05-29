# 3D Character Production Brief

## Goal

Create a stylized 3D character for portfolio use that represents a young South Indian product developer with confidence, creativity, and cultural grounding.

This asset is intended for:

- web portfolio hero use
- real-time rendering
- interactive presentation
- animation-driven section transitions

## Creative Direction

### Character Summary

- Young South Indian male
- Smart, confident, creative presence
- Semi-realistic stylization
- Pixar-level appeal and readability
- Not cartoon-flat
- Not hyper-real scanned realism

### Visual Personality

- Friendly but composed
- Professional without feeling corporate
- Culturally rooted
- Modern product-builder energy
- Looks natural in both tech and traditional contexts

### Inspiration Constraint

Reference images should be used only for:

- general face and hair direction
- wardrobe tone
- cultural and personality cues
- overall vibe

Do not replicate the reference image exactly.

## Character Design

### Face

- Clean facial structure
- Warm, approachable eyes
- Short styled hair with volume
- Light beard
- Clean smile or neutral confident expression

### Body and Build

- Lean to medium build
- Proportions slightly stylized for readability
- Hands and face should be expressive enough for presentation animation

### Clothing

Primary look:

- white shirt
- white mundu or dhoti
- modern tailored fit
- subtle premium folds and fabric response

Modern touches:

- smart watch
- bracelet
- optional minimal footwear or barefoot version

## Modeling Requirements

### Delivery Format

- `GLB` preferred
- `GLTF` acceptable if external textures are required

### Rigging

Rig must include:

- full body rig
- facial rig
- eye controls
- mouth controls
- brow controls
- hand and finger controls

### Topology

- clean deformation-friendly topology
- suitable for real-time rendering
- suitable for animation retargeting if needed
- avoid unnecessary subdivision-heavy geometry

### Separate Mesh Groups

Required split:

- `body`
- `clothing`
- `accessories_watch`
- `accessories_bracelet`
- `prop_laptop`
- `prop_desk`
- `prop_camera`
- `prop_books`
- `prop_mug`
- `prop_decor`

Do not merge props into one baked environment mesh.

## Environment Requirements

Environment should be modular and optional.

### Include as Separate Assets

- desk
- laptop
- camera
- books
- coffee mug
- decorative elements

### Environment Style

- minimal stylized workspace
- clean modern portfolio aesthetic
- warm, premium, uncluttered

## Material Requirements

Use PBR materials suitable for web rendering.

### Material Style

- clean skin shader
- soft cloth response
- subtle roughness variation
- polished but believable accessories
- readable details from medium camera distance

### Texture Notes

- keep texture count reasonable for web
- use 2K where needed, 1K where acceptable
- avoid over-detailed noisy surfaces

## Animation Requirements

### Required Clips

1. `idle_breathing`
- subtle chest and shoulder motion
- small head settling
- micro hand movement

2. `look_around_confident`
- gentle upper-body shift
- head turn
- eye follow

3. `gesture_presenting_left`
- one hand presentation gesture

4. `gesture_presenting_right`
- mirrored or separate purposeful explanation gesture

5. `gesture_explaining`
- small conversational movement

### Optional Clips

6. `walk_loop`
- short loop for hero transitions

7. `turn_in_place`
- slow confident turn for showcase mode

## Interactive Requirements

### Laptop Screen

Laptop screen must support dynamic content.

Requirements:

- separate screen material or screen mesh
- no baked static code screenshot
- UVs or plane setup suitable for runtime texture replacement

### Floating UI/Text

The following words should exist as runtime UI or separate animated elements, not texture-baked:

- `Designer`
- `Developer`
- `Dreamer`

These can be implemented in the web layer rather than inside the model.

## Lighting Direction

Target rendering mood:

- warm natural lighting
- golden hour feel
- soft shadows
- premium presentation

This should guide preview renders and portfolio integration.

## Performance Targets

For web use, prefer:

- character mesh budget suitable for real-time hero use
- compressed textures
- named animation clips
- clean hierarchy

Recommended target:

- hero character and props optimized for modern desktop and good mobile fallback

## Naming Convention

### Model File

- `chandra_guide_character.glb`

### Animation Clips

- `idle_breathing`
- `look_around_confident`
- `gesture_presenting_left`
- `gesture_presenting_right`
- `gesture_explaining`
- `walk_loop`
- `turn_in_place`

### Material Names

- `mat_skin`
- `mat_hair`
- `mat_shirt`
- `mat_mundu`
- `mat_watch`
- `mat_bracelet`
- `mat_laptop_body`
- `mat_laptop_screen`
- `mat_desk`

## Web Integration Notes

The final model should support:

- `react-three-fiber`
- `three.js`
- animation playback via `AnimationMixer`
- dynamic texture replacement on laptop screen
- optional camera orbit or guided timeline animation

## Acceptance Checklist

The asset is ready when:

- model is delivered as `GLB` or `GLTF`
- rig is complete
- mesh groups are separated correctly
- clips are named cleanly
- laptop screen is runtime-addressable
- asset loads in web viewer without broken materials
- overall look matches the stylized premium brief

## Limitation of Current Workspace

This workspace currently contains reference and portfolio code, but not a 3D modeling pipeline capable of producing the final rigged `GLB` directly.

This brief is the production handoff specification for:

- Blender artist workflow
- character generator workflow
- external 3D vendor
- future in-repo integration once the asset is delivered
