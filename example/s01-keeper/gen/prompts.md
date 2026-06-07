# 《守站》S01 参考物料最终 prompts

实际生图路径：Codex 运行时自带 `image_gen`。环境未提供 `OPENAI_API_KEY`，未使用 API/CLI。内置工具未暴露 seed；先生成 `char_01_turnaround.png`，后续含守站的图在 prompt 中引用它作为视觉身份锚点。

## 角色圣经原文

```text
THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.
```

## Character

### references/character/char_01_turnaround.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: character reference sheet for the short film The Keeper
Output: PNG, 16:9, 1280x720.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: Character turnaround model sheet of THE KEEPER on a neutral mid-grey studio background, even soft lighting, four views in one frame — front, three-quarter, side profile, back. Full body, clearly showing the tracked base, the single amber lens eye, the articulated arm with squeegee tool, worn gunmetal panels. Clean reference-sheet look, no dramatic shadows.

Consistency constraints: same single robot design across all views; exactly one glowing amber lens; exactly one articulated mechanical arm; tracked base only, no legs, no humanoid hands, no face, no extra eyes, no text labels or watermark.
```

### references/character/char_02_eye_warm.png

尺寸：1024x1024

```text
Use case: stylized-concept
Asset type: character close-up reference for the short film The Keeper
Output: PNG, 1:1, 1024x1024.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: Extreme close-up of THE KEEPER's single round lens eye glowing a warm, living amber; faint reflections of a starfield and a pale-blue dot in the glass; fine scratches on the lens; warm inner light. Hopeful, tender mood.

Consistency constraints: the lens belongs to the same robot as the reference sheet; one round glass eye only; no face, no second eye, no humanoid features, no text, no watermark.
```

### references/character/char_03_eye_cold.png

尺寸：1024x1024

```text
Use case: stylized-concept
Asset type: character close-up reference for the short film The Keeper
Output: PNG, 1:1, 1024x1024.
Reference anchor: use the previously generated char_01_turnaround model sheet and char_02_eye_warm as visual identity anchors for THE KEEPER; keep the same lens housing and scratches.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: Extreme close-up of THE KEEPER's single lens eye, the amber glow draining to a cold dim grey, light almost gone, reflections fading. SAME lens, same scratches as the warm version — only the light has died. Grief, resignation.

Consistency constraints: one round glass eye only; preserve the same worn gunmetal lens rim and scratch pattern feeling; no extra sensors, no face, no humanoid features, no text, no watermark.
```

### references/character/char_04_arm_detail.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: character mechanical detail reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: Detail shot of THE KEEPER's single articulated mechanical arm — worn servos, exposed cabling, ending in a soft cloth/squeegee tool, a few water streaks. Utilitarian, lived-in. Cold-blue ambient with a warm rim light.

Consistency constraints: exactly one articulated mechanical arm visible; emphasize worn servos, cable routing, and soft cleaning tool; no humanoid hand, no extra arm, no weapon, no text, no watermark.
```

### references/character/char_05_scale_silhouette.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: character scale and silhouette reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: Wide shot establishing scale — THE KEEPER, small and alone, at the far end of a vast cold-blue relay-station corridor, dwarfed by the architecture, rows of work lights receding into the dark. Loneliness.

Consistency constraints: the robot is tiny but readable as the same non-humanoid tracked maintenance unit; one amber lens, one mechanical arm, low tracked base; no humans, no extra robots, no text, no watermark.
```

## Location

### references/location/loc_01_corridor.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: location reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: INT. deep-space relay-station main corridor — a long cold-blue corridor stretching into darkness, rows of work lights blinking on one by one and receding to a vanishing point, faint volumetric haze, worn metal walls with pipes and panels, a round porthole far down. Empty, quiet, vast. No characters.

Style constraints: cinematic painterly-realistic sci-fi, soft volumetric light, subtle film grain, cold steel-blue palette, deep-space darkness, worn utilitarian station design. No robots, no humans, no creatures, no text, no watermark.
```

### references/location/loc_02_porthole.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: location reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: INT. a round porthole window in the relay station, freshly wiped clean; beyond the glass a deep star sea and, far away in the dark, a single faint pale-blue dot (a distant Earth). Cold light, dust motes, lonely. No characters.

Style constraints: cinematic painterly-realistic sci-fi, cold steel-blue interior rim, scratched but freshly wiped glass, subtle film grain, deep-space black outside, delicate dust in volumetric light. No robots, no humans, no text, no watermark.
```

### references/location/loc_03_transmitter_bay.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: location reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: INT. the transmitter bay of the relay station — a utilitarian console with physical keys and switches, a small dim status screen, antenna and signal cabling, warm and cold indicator lights, worn metal. Cramped, functional, lived-in. No characters.

Style constraints: cinematic painterly-realistic sci-fi, cold steel-blue shadows with small amber and red-green indicator accents, practical old hardware, visible cables and antenna routing, subtle film grain. No robots, no humans, no readable UI text except abstract status marks, no watermark.
```

### references/location/loc_04_corridor_dark.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: location reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: INT. the same long relay-station corridor going dark — the row of work lights switching OFF one by one from foreground to back, deep shadow swallowing the space, only a faint glow remaining far away. Endings, loss. No characters.

Style constraints: cinematic painterly-realistic sci-fi, same cold steel-blue worn metal corridor language as loc_01, stronger deep-space darkness, fading volumetric haze, subtle film grain. No robots, no humans, no text, no watermark.
```

### references/location/loc_05_red_lamp.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: location insert reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: INT. a single red signal indicator lamp on the relay-station corridor wall, lit red for the first time, glowing against cold-blue dark metal, slight lens flare. Tense, a false promise of contact. No characters.

Style constraints: cinematic painterly-realistic sci-fi, worn dark gunmetal wall panels, cold steel-blue shadows, red glow bleeding subtly onto scratched metal, dust and faint haze. No robots, no humans, no extra lamps dominating, no text, no watermark.
```

## Style

### references/style/style_01_palette.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: style and palette reference board for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: A cinematic color & light reference board for a melancholic sci-fi short — swatches of cold steel-blue (base), a single warm living amber (hope / the eye), desaturated cold grey (death of hope), and deep-space black; showing how the warm amber accent reads against cold blue. Label-free mood board, painterly.

Style constraints: no typography, no labels, no characters, no robots, no humans, no watermark; arrange abstract painted color blocks and small lighting vignettes with cinematic softness and subtle film grain.
```

### references/style/style_02_texture.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: texture reference board for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: A texture reference board for a lonely maintenance robot in deep space — worn scratched gunmetal, faded paint, faint rust streaks, dust motes drifting in volumetric light beams, scratched glass. Tactile, lived-in, decades of wear.

Style constraints: label-free material mood board, painterly-realistic macro panels, cold steel-blue lighting with tiny warm amber reflection accents; no characters, no robots, no humans, no typography, no watermark.
```

### references/style/style_03_tone.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: tonal and emotional mood frame for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: A tonal/emotional mood frame — 'solitude and faded hope': a tiny lonely machine in a vast cold quiet space station, soft volumetric god-rays, deep shadow, subtle film grain, painterly-realistic, in the spirit of quiet contemplative sci-fi (2001 / Wall-E's quietest moments).

Style constraints: this is a mood reference, not a character design sheet; the machine should read as a small anonymous silhouette with minimal detail, no identifiable face, no explicit THE KEEPER design, no humans, no typography, no watermark; cold steel-blue and deep-space black with one restrained warm amber accent.
```

### references/style/style_04_lighting.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: lighting key reference for the short film The Keeper
Output: PNG, 16:9, 1280x720.

Primary request: A lighting key reference — low-key cinematic lighting of a deep-space station interior: cold ambient blue fill, a single small warm amber source (a glowing lens) modeling the darkness, rim light catching worn metal edges, volumetric haze. Shows the warm-vs-cold contrast.

Style constraints: lighting study only, no full character, no humans, no typography, no watermark; use abstract station interior metal edges, a small lens-like amber source, cold steel-blue shadows, painterly-realistic texture, subtle film grain.
```

## Shot

### references/shot/shot_01_reveal.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: shot reference frame for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: [Beat 1 · establishing] WIDE, low camera, slow dolly-in down the cold-blue corridor as work lights blink on; THE KEEPER rolls up from the depths on its tracks, arm wiping a porthole. Small in frame, lonely routine.

Composition constraints: low wide angle, deep vanishing-point corridor, Keeper small but readable; clearly show tracked base, one amber lens, one mechanical arm with soft squeegee/cloth touching a round porthole; no humans, no extra robots, no walking legs, no second arm, no text, no watermark.
```

### references/shot/shot_02_goodmorning.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: shot reference frame for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: [Beat 2 · 'Good morning'] Over-the-shoulder from behind THE KEEPER toward the freshly wiped round porthole; the star sea and the faint pale-blue dot beyond; the amber eye warm. Intimate, hopeful.

Composition constraints: camera behind the compact tracked robot, porthole centered as emotional target, faint pale-blue Earth dot visible outside, the single amber lens glows warmly toward the window. The one mechanical arm ends in a flat rectangular soft squeegee/cloth pad touching the glass.

Hard negatives: no humanoid hand, no fingers, no palm, no gripper claws, no second arm, no second eye, no walking legs, no humans, no extra robots, no text, no watermark.
```

### references/shot/shot_03_send_wait.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: shot reference frame for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: [Beat 3 · send & wait] MEDIUM on THE KEEPER's arm pressing a transmitter key, a thin signal beam leaving toward the blue dot; then the Keeper facing the porthole, motionless, waiting. Nothing returns. Quiet patience.

Composition constraints: transmitter console foreground with physical key being pressed by a small non-humanoid actuator integrated into the single squeegee/cloth-tool arm; THE KEEPER remains compact on tracks in medium shot, one warm amber lens, porthole and faint blue dot visible beyond, thin signal line extending outward. No split screen.

Hard negatives: no humanoid hand, no fingers, no second arm, no second eye, no walking legs, no humans, no extra robots, no readable text, no watermark.
```

### references/shot/shot_04_redlight.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: shot reference frame for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: [Beat 4 · false hope] The red lamp lit (insert), then THE KEEPER turning eagerly, tracks accelerating toward it, amber eye bright with hope — it thinks it's a reply. Slight motion energy.

Composition constraints: cold-blue corridor wall with a single red signal lamp glowing in the upper frame; THE KEEPER in the same frame turning toward it, compact chassis on low tracks with subtle motion blur, one bright amber lens, one articulated arm trailing with soft squeegee/cloth tool. Tense but hopeful.

Hard negatives: no humans, no extra robots, no second arm, no second eye, no walking legs, no humanoid hand or fingers, no text, no watermark.
```

### references/shot/shot_05_screen.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: shot reference frame for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: [Beat 5 · the blow] Over-the-shoulder / POV of THE KEEPER looking at the small console screen showing a cold, impersonal DECOMMISSION ORDER; the Keeper still and dwarfed.

Composition constraints: over-the-shoulder from behind the compact tracked robot, the small dim console screen is the emotional focus, the screen text should read exactly: DECOMMISSION ORDER. The Keeper is motionless, one amber lens beginning to dim, one mechanical arm lowered, transmitter bay cold and cramped.

Hard negatives: no humans, no extra robots, no second arm, no second eye, no walking legs, no humanoid hands or fingers, no extra readable text besides DECOMMISSION ORDER, no watermark.
```

### references/shot/shot_06_eye_cools.png

尺寸：1024x1024

```text
Use case: stylized-concept
Asset type: shot reference close-up for the short film The Keeper
Output: PNG, 1:1, 1024x1024.
Reference anchor: use the previously generated char_01_turnaround model sheet and eye close-ups as visual identity anchors for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: [Beat 6 · heart of the film] EXTREME CLOSE-UP of THE KEEPER's amber eye slowly cooling from warm amber to dim grey — hope dying. Held, tender, devastating.

Composition constraints: one single round glass lens fills the frame; show a visible transition with remaining weak amber at the center fading into cold grey around it, scratches on glass, worn gunmetal rim, deep dark background. Emotional stillness.

Hard negatives: no second eye, no face, no humanoid features, no extra sensors, no text, no watermark.
```

### references/shot/shot_07_ending.png

尺寸：1280x720

```text
Use case: stylized-concept
Asset type: shot reference frame for the short film The Keeper
Output: PNG, 16:9, 1280x720.
Reference anchor: use the previously generated char_01_turnaround model sheet as the visual identity anchor for THE KEEPER.

THE KEEPER — a single aged maintenance robot aboard a forgotten deep-space relay
station. A NON-humanoid utility unit. Body: a compact upright chassis of worn
gunmetal-grey metal, scratched and dented, patches of faded paint and faint rust
streaks, a half-legible stenciled serial number on one panel, one slightly bent
plate. Locomotion: a low TRACKED base (rubber-and-metal treads) — it rolls, never
walks. Sensor head: a SINGLE round glass lens that glows warm AMBER; this glow is
its emotional barometer (warm amber = alive and hopeful; dimming to cold grey =
despair). ONE articulated mechanical arm ending in a soft squeegee/cloth tool, with
fine actuators able to press console keys. Roughly chest-height to a human; reads
small and lonely against the vast cold corridor. Quiet dignity, decades of solitude.
Render style: cinematic, painterly-realistic, soft volumetric light, subtle film
grain, deep-space darkness; palette of cold steel-blue with a single warm amber accent.

Primary request: [Beat 7 · ending] WIDE: THE KEEPER back at the transmitter pressing the key one last time as the corridor lights go out one by one behind it; final beat — the pale-blue dot reflected in the dimming amber eye, then black. 'I hope someone is still listening.'

Composition constraints: wide transmitter bay connected to a long corridor behind; corridor work lights fading off into darkness from foreground to distance; THE KEEPER small at the console, on tracks, one mechanical arm pressing the final key with a non-humanoid actuator, one dim amber eye catching a faint pale-blue dot reflection. Quiet finality, mostly darkness.

Hard negatives: no humans, no extra robots, no second arm, no second eye, no walking legs, no humanoid hand or fingers, no subtitles, no visible quote text, no watermark.
```
