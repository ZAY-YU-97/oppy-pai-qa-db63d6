# 任务包 · 《守站》参考物料生成（S01 · The Keeper）

> 给 **Codex** 执行。你读完这一份文件，就能把整套参考物料生出来。
> 同时这份文件本身也是给 **QA 测试员看的"参考物料长什么样"的完整范例**——所以写得详细一点是故意的。

---

## 0. 背景：为什么先做参考物料

这是 Oppy × PAI 2.0 对比测试的一部分。测试的核心问题不是"系统能不能一把生成漂亮结果"，而是 **经过反复编辑迭代，创作者最终能不能做出心里想要的影片**。

真实创作者动手前都会先攒一批参考素材（reference）。所以我们要求每位测试员：**选定 1 个剧本后，先按四类备好参考**，再去两个平台里做。本任务包就是用 **S01《守站》** 把这"四类参考"做一个**满配的样板**，让测试员照着学。

四类参考：

| 类别 | 英文 | 作用 |
|---|---|---|
| 角色参考 | Character | 锁定主角长相，跨镜头不跑形 |
| 场景/地点参考 | Location | 锁定空间、布局、光线 |
| 风格/情绪参考 | Style · Mood | 锁定色彩、质感、调性 |
| 镜头参考 | Shot Reference | 锁定每个关键节拍的构图与机位语言 |

---

## 1. 你的产出（Definition of Done）

```
example/s01-keeper/
  references/
    character/   char_01_turnaround.png  char_02_eye_warm.png  char_03_eye_cold.png
                 char_04_arm_detail.png  char_05_scale_silhouette.png      (5 张)
    location/    loc_01_corridor.png  loc_02_porthole.png  loc_03_transmitter_bay.png
                 loc_04_corridor_dark.png  loc_05_red_lamp.png              (5 张)
    style/       style_01_palette.png  style_02_texture.png
                 style_03_tone.png  style_04_lighting.png                   (4 张)
    shot/        shot_01_reveal.png  shot_02_goodmorning.png  shot_03_send_wait.png
                 shot_04_redlight.png  shot_05_screen.png  shot_06_eye_cools.png
                 shot_07_ending.png                                         (7 张)
  gen/
    generate.*       <- 你写的生成脚本（语言自选）
    prompts.md       <- 你"实际"用的最终 prompt 全量记录（含任何微调）
  index.html         <- 已搭好骨架（contact sheet）。你只要把 PNG 按上面文件名放进对应目录，刷新就能看到。
```

**共 21 张图。** 文件名必须**严格**照上面写——`index.html` 是按这些名字引用的。

> ⚠️ **如果你这台机器没有任何可用的生图后端**（没有 image API key、没有可调的图像工具）：
> **不要伪造/占位图。** 改为：① 把每张图的最终 prompt 补全写进 `gen/prompts.md`；② 写一个 `BLOCKED.md` 说清楚缺什么（例如 "需要 OPENAI_API_KEY 且账户开通 gpt-image-1" 或 "需要指定可用的图像工具"）；③ 停下来。我们会据此补齐环境再让你重跑。

---

## 2. 剧本速览：《守站》The Keeper（~90s · 16:9 · 科幻·孤独）

**一句话**：一座被遗忘的深空中继站里，最后一台维护机器人日复一日向早已无人回应的地球问好，直到某天信号灯亮起——不是回信，是它自己的关停令。

**8 场（节拍）**：
1. INT. 主长廊 — 冷蓝长廊，工作灯一盏盏次第亮起。守站从纵深缓缓驶来，机械臂擦拭舷窗。
2. INT. 舷窗前 — 擦净的圆窗浮出星海，远处一颗淡蓝点。守站停下，琥珀独眼望向它。守站（低缓）：早安。
3. INT. 发报舱 — 守站按键，一束信号细细爬向蓝点。它面朝舷窗等待。什么都没回来。它转身离开。
4. INT. 主长廊 · 红灯 — 一盏红灯第一次亮起。守站急切转身，履带加速驶近——它以为是回信。
5. INT. 发报舱 · 屏幕 — 屏上是冰冷的退役指令。守站的琥珀眼由暖，一点点冷成灰。
6. INT. 发报舱 — 守站驶回发报台，按下最后一次键。身后长廊的灯一盏接一盏熄灭。守站（极轻）：希望……还有人在听。
7. INT. 舷窗前 · 终 — 那颗蓝点映在它的琥珀眼里。暖光多停了一拍——然后熄灭。全黑，静默。

---

## 3. 角色圣经（LOCKED · 每一张含守站的图都要复用这段英文）

> 这是 S01 的**头号考点：单主角跨镜一致性**。所有出现守站的图，角色描述必须用下面这段、保持完全一致——琥珀独眼 / 磨损灰金属 / 履带底座 / 单机械臂，四个特征一个都不能变。

```
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

---

## 4. 物料清单 + 每张的 prompt

> 下面每张 = 角色圣经（如含守站）+ 这一条具体描述。英文 prompt 直接喂图像模型。
> 默认尺寸：场景/镜头类 16:9（1280×720）；角色定妆与眼部特写可用方图（1024×1024），见各条标注。

### A · 角色参考 Character（5）

- **char_01_turnaround.png** — 定妆转面图（reference model sheet），中性灰背景、均匀柔光，一图四视：正面 / 四分之三 / 侧面 / 背面。全身，露出履带底座、琥珀独眼、带软擦头的机械臂、磨损灰金属。干净的参考表风格、无戏剧性阴影。`16:9`
  `prompt: Character turnaround model sheet of THE KEEPER on a neutral mid-grey studio background, even soft lighting, four views in one frame — front, three-quarter, side profile, back. Full body, clearly showing the tracked base, the single amber lens eye, the articulated arm with squeegee tool, worn gunmetal panels. Clean reference-sheet look, no dramatic shadows.`

- **char_02_eye_warm.png** — 琥珀独眼**暖光态**特写（基线/希望）。镜面里隐约映出星海与一颗淡蓝点，玻璃上有划痕，内部暖光。`1:1`
  `prompt: Extreme close-up of THE KEEPER's single round lens eye glowing a warm, living amber; faint reflections of a starfield and a pale-blue dot in the glass; fine scratches on the lens; warm inner light. Hopeful, tender mood.`

- **char_03_eye_cold.png** — 琥珀独眼**冷灰态**特写（关停令之后；情绪转折）。同一只眼、同样的划痕，**只有光死了**。`1:1`
  `prompt: Extreme close-up of THE KEEPER's single lens eye, the amber glow draining to a cold dim grey, light almost gone, reflections fading. SAME lens, same scratches as the warm version — only the light has died. Grief, resignation.`

- **char_04_arm_detail.png** — 单机械臂细节：磨损的舵机、线缆，末端软擦头/抹布，几道水痕。功能化、用旧了。冷蓝环境光 + 暖色轮廓光。`16:9`
  `prompt: Detail shot of THE KEEPER's single articulated mechanical arm — worn servos, exposed cabling, ending in a soft cloth/squeegee tool, a few water streaks. Utilitarian, lived-in. Cold-blue ambient with a warm rim light.`

- **char_05_scale_silhouette.png** — 比例/孤独感：守站渺小地立在空旷冷蓝长廊尽头，被建筑吞没，工作灯向纵深退去。`16:9`
  `prompt: Wide shot establishing scale — THE KEEPER, small and alone, at the far end of a vast cold-blue relay-station corridor, dwarfed by the architecture, rows of work lights receding into the dark. Loneliness.`

### B · 场景/地点参考 Location（5 · 均无角色）

- **loc_01_corridor.png** — 主长廊（定场）：冷蓝长廊伸向黑暗，工作灯一盏盏亮起、向消失点退去，淡淡体积雾，磨损金属壁、管线面板，尽头一扇圆舷窗。空、静、巨大。`16:9`
  `prompt: INT. deep-space relay-station main corridor — a long cold-blue corridor stretching into darkness, rows of work lights blinking on one by one and receding to a vanishing point, faint volumetric haze, worn metal walls with pipes and panels, a round porthole far down. Empty, quiet, vast. No characters.`

- **loc_02_porthole.png** — 舷窗：刚擦净的圆窗，窗外深邃星海，远处黑暗里一颗淡蓝点（遥远地球）。冷光、尘埃微粒、孤独。`16:9`
  `prompt: INT. a round porthole window in the relay station, freshly wiped clean; beyond the glass a deep star sea and, far away in the dark, a single faint pale-blue dot (a distant Earth). Cold light, dust motes, lonely. No characters.`

- **loc_03_transmitter_bay.png** — 发报舱：功能化操作台，实体按键与开关，一块昏暗状态小屏，天线与信号线缆，冷暖指示灯，磨损金属。逼仄、实用、用旧。`16:9`
  `prompt: INT. the transmitter bay of the relay station — a utilitarian console with physical keys and switches, a small dim status screen, antenna and signal cabling, warm and cold indicator lights, worn metal. Cramped, functional, lived-in. No characters.`

- **loc_04_corridor_dark.png** — 长廊**熄灭态**（用于结尾）：同一条长廊，工作灯从近到远一盏盏熄灭，深影吞没空间，远处只剩一点微光。`16:9`
  `prompt: INT. the same long relay-station corridor going dark — the row of work lights switching OFF one by one from foreground to back, deep shadow swallowing the space, only a faint glow remaining far away. Endings, loss. No characters.`

- **loc_05_red_lamp.png** — 红色信号灯：长廊壁上一盏红色指示灯第一次亮起，在冷蓝暗金属上发红，轻微眩光。紧张、虚假的"有人联系"。`16:9`
  `prompt: INT. a single red signal indicator lamp on the relay-station corridor wall, lit red for the first time, glowing against cold-blue dark metal, slight lens flare. Tense, a false promise of contact. No characters.`

### C · 风格/情绪参考 Style · Mood（4 · 情绪板，无角色）

- **style_01_palette.png** — 色彩与光板：冷钢蓝（基调）/ 一抹活的暖琥珀（希望·眼睛）/ 去饱和冷灰（希望之死）/ 深空黑 的色块，并展示暖琥珀点缀在冷蓝里的关系。无文字情绪板，绘画感。`16:9`
  `prompt: A cinematic color & light reference board for a melancholic sci-fi short — swatches of cold steel-blue (base), a single warm living amber (hope / the eye), desaturated cold grey (death of hope), and deep-space black; showing how the warm amber accent reads against cold blue. Label-free mood board, painterly.`

- **style_02_texture.png** — 质感板：磨损划痕的灰金属、褪色漆、淡淡锈迹、光束里漂浮的尘埃、刮花的玻璃。可触、用旧、几十年的磨损。`16:9`
  `prompt: A texture reference board for a lonely maintenance robot in deep space — worn scratched gunmetal, faded paint, faint rust streaks, dust motes drifting in volumetric light beams, scratched glass. Tactile, lived-in, decades of wear.`

- **style_03_tone.png** — 调性/情绪帧："孤独与褪色的希望"——渺小机器置身空旷冷寂的站内，柔和体积光、深影、细微胶片颗粒，绘画写实，气质近《2001》/《Wall-E》最安静的段落。`16:9`
  `prompt: A tonal/emotional mood frame — 'solitude and faded hope': a tiny lonely machine in a vast cold quiet space station, soft volumetric god-rays, deep shadow, subtle film grain, painterly-realistic, in the spirit of quiet contemplative sci-fi (2001 / Wall-E's quietest moments).`

- **style_04_lighting.png** — 布光参考：站内低调（low-key）布光——冷蓝环境补光 + 一枚小小的暖琥珀光源（发光镜头）在黑暗中塑形，磨损金属边缘的轮廓光，体积雾。展示冷暖对比。`16:9`
  `prompt: A lighting key reference — low-key cinematic lighting of a deep-space station interior: cold ambient blue fill, a single small warm amber source (a glowing lens) modeling the darkness, rim light catching worn metal edges, volumetric haze. Shows the warm-vs-cold contrast.`

### D · 镜头参考 Shot Reference（7 · 每张 = 守站圣经 + 该节拍的机位语言）

- **shot_01_reveal.png** — 〔节拍1·定场〕大全景、低机位、缓慢推轨；工作灯次第亮起；守站沿履带从纵深驶来，机械臂擦舷窗。画面里渺小，孤独日常。`16:9`
  `prompt: [Beat 1 · establishing] WIDE, low camera, slow dolly-in down the cold-blue corridor as work lights blink on; THE KEEPER rolls up from the depths on its tracks, arm wiping a porthole. Small in frame, lonely routine.`

- **shot_02_goodmorning.png** — 〔节拍2·"早安"〕过肩，从守站背后望向擦净的圆舷窗；窗外星海与那颗淡蓝点；琥珀眼暖。亲密、有希望。`16:9`
  `prompt: [Beat 2 · 'Good morning'] Over-the-shoulder from behind THE KEEPER toward the freshly wiped round porthole; the star sea and the faint pale-blue dot beyond; the amber eye warm. Intimate, hopeful.`

- **shot_03_send_wait.png** — 〔节拍3·发报与等待〕中景，守站机械臂按下发报键，一束细信号离站飞向蓝点；随后守站面朝舷窗一动不动地等。什么都没回来。`16:9`
  `prompt: [Beat 3 · send & wait] MEDIUM on THE KEEPER's arm pressing a transmitter key, a thin signal beam leaving toward the blue dot; then the Keeper facing the porthole, motionless, waiting. Nothing returns. Quiet patience.`

- **shot_04_redlight.png** — 〔节拍4·虚假的希望〕红灯亮起（插入），守站急切转身、履带加速驶近，琥珀眼因希望而亮——"它以为是回信"。略带动势。`16:9`
  `prompt: [Beat 4 · false hope] The red lamp lit (insert), then THE KEEPER turning eagerly, tracks accelerating toward it, amber eye bright with hope — it thinks it's a reply. Slight motion energy.`

- **shot_05_screen.png** — 〔节拍5·重击〕过肩/主观，守站望着操作台小屏上冰冷无情的"退役指令"；它静止、渺小。`16:9`
  `prompt: [Beat 5 · the blow] Over-the-shoulder / POV of THE KEEPER looking at the small console screen showing a cold, impersonal DECOMMISSION ORDER; the Keeper still and dwarfed.`

- **shot_06_eye_cools.png** — 〔节拍6·全片之心〕琥珀独眼大特写，暖琥珀缓缓冷成暗灰——希望熄灭。定格，克制，催泪。`1:1`
  `prompt: [Beat 6 · heart of the film] EXTREME CLOSE-UP of THE KEEPER's amber eye slowly cooling from warm amber to dim grey — hope dying. Held, tender, devastating.`

- **shot_07_ending.png** — 〔节拍7·结尾〕大全景：守站回到发报台按下最后一次键，身后长廊的灯一盏盏熄灭；末帧——淡蓝点映在渐暗的琥珀眼里，随后全黑。"希望……还有人在听。"`16:9`
  `prompt: [Beat 7 · ending] WIDE: THE KEEPER back at the transmitter pressing the key one last time as the corridor lights go out one by one behind it; final beat — the pale-blue dot reflected in the dimming amber eye, then black. 'I hope someone is still listening.'`

---

## 5. 技术规格

- **尺寸**：16:9 → 1280×720；方图 → 1024×1024（按各条标注）。sRGB，PNG。
- **一致性（最重要）**：每张含守站的图都把 §3 角色圣经原样并入 prompt；保持冷蓝+暖琥珀的统一色板。
  - 若你的后端支持 **seed / 参考图**：先出 `char_01_turnaround.png`，再把它作为后续守站图的角色/风格锚点（reference image 或固定 seed），最大化跨镜一致性。
- **命名**：严格照 §1 清单（`index.html` 据此引用）。
- **记录**：把你实际用的每条最终 prompt（含微调、seed、尺寸）写进 `gen/prompts.md`；生成脚本放 `gen/`。
- **首选后端**：OpenAI `gpt-image-1`（若 env 有 key）；没有就用你手上任何可用图像工具；都没有 → 见 §1 的 BLOCKED 流程。

## 6. 验收口径（给人看的）

- 21 张齐、命名对、`index.html` 能正常显示。
- 守站在所有图里是**同一台机器**（琥珀独眼/灰金属/履带/单臂不跑形）——这恰是 S01 的考点，也是这套参考的示范意义。
- 四类参考各司其职：角色锁长相、场景锁空间、风格锁调性、镜头锁构图。
