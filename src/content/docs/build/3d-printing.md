---
title: 3D Printing Guide
description: How to print the blinqr enclosure and components.
---

This guide covers everything you need to know about 3D printing the blinqr enclosure, including print settings, tips, and troubleshooting.

## Download Files

:::note[STL Files Coming Soon]
The 3D printable files will be available for download once the enclosure design is finalized.
:::

<!-- TODO: Add download links -->
<!-- 
### Download Options

- **[All Files (ZIP)](https://github.com/hud-code/blinqr-firmware/releases)** - Complete package
- **[Thingiverse](https://thingiverse.com/thing:XXXXX)** - Community remixes welcome
- **[Printables](https://printables.com/model/XXXXX)** - Prusa community
-->

---

## Parts Overview

| Part | Filename | Description |
|------|----------|-------------|
| Top Shell | `enclosure_top.stl` | Main top cover with LED holes |
| Bottom Shell | `enclosure_bottom.stl` | Base with mounting posts |
| Button Caps | `button_cap.stl` | Caps for tactile buttons (print 5) |
| LED Diffusers | `led_diffuser.stl` | Softens LED light (print 5) |
| Light Pipes | `light_pipe.stl` | Optional, directs light (print 5) |

---

## Recommended Print Settings

### General Settings

| Setting | Value | Notes |
|---------|-------|-------|
| Layer Height | 0.2mm | 0.16mm for finer detail |
| Infill | 20% | Higher for strength |
| Perimeters | 3 | Standard wall thickness |
| Top/Bottom Layers | 4 | Good surface finish |

### Material

| Material | Recommended | Notes |
|----------|-------------|-------|
| **PLA** | ✅ Yes | Easy to print, good detail |
| PETG | ✅ Yes | More durable, slight stringing |
| ABS | ⚠️ Caution | Requires enclosure, warping risk |
| TPU | ❌ No | Too flexible for enclosure |

### Per-Part Settings

#### Enclosure (Top & Bottom)

```
Layer Height: 0.2mm
Infill: 20%
Supports: None needed
Orientation: Flat side down
```

#### Button Caps

```
Layer Height: 0.16mm (for smooth top)
Infill: 100%
Supports: None needed
Orientation: Cap facing up
```

#### LED Diffusers

```
Material: White or Natural PLA
Layer Height: 0.2mm
Infill: 0% (hollow)
Supports: None needed
Print thin for best light diffusion
```

---

## Print Orientation

### Enclosure Shells

Print with the flat/open side facing **down** on the bed:

```
        ┌─────────────────┐
        │                 │
        │  (printed up)   │
        │                 │
════════╧═════════════════╧════════ Build Plate
```

### Button Caps

Print with the visible top facing **up**:

```
        ┌───┐
        │   │  ← Nice surface finish
        │   │
════════╧═══╧═════════════════════ Build Plate
```

---

## Color Suggestions

### Single Color Build

Any color works! Popular choices:
- **Black** - Sleek, hides imperfections
- **White** - Clean look, shows LED colors well
- **Gray** - Professional appearance

### Multi-Color Build

| Part | Suggested Color |
|------|-----------------|
| Enclosure | Black or Dark Gray |
| Button Caps | Match LED colors |
| LED Diffusers | White or Clear |

### Accent Ideas

- Print button caps in different colors to match reminder types
- Use glow-in-the-dark filament for diffusers
- Add a contrasting color lid

---

## Print Time Estimates

| Part | Quantity | Est. Time | Est. Filament |
|------|----------|-----------|---------------|
| Top Shell | 1 | 2-3 hours | 30g |
| Bottom Shell | 1 | 2-3 hours | 35g |
| Button Caps | 5 | 30-45 min | 5g |
| LED Diffusers | 5 | 15-20 min | 3g |
| **Total** | - | **5-7 hours** | **~75g** |

---

## Printer Recommendations

### Budget (~$200-300)

- **Creality Ender 3 V2/V3** - Great starter printer
- **Anycubic Kobra 2** - Auto bed leveling

### Mid-Range (~$400-600)

- **Bambu Lab A1 Mini** - Fast, reliable
- **Prusa Mini+** - Excellent quality

### Premium (~$600+)

- **Bambu Lab P1S** - Enclosed, multi-color capable
- **Prusa MK4** - Industry standard

:::tip
If you don't have a 3D printer, check local makerspaces, libraries, or online printing services.
:::

---

## Quality Checklist

After printing, verify:

- [ ] No warping on bottom surfaces
- [ ] Button holes are clean and round
- [ ] LED holes align properly
- [ ] Screw posts are intact
- [ ] Parts fit together snugly
- [ ] No stringing or blobs on visible surfaces

---

## Post-Processing

### Recommended

1. **Remove any stringing** with a heat gun or lighter (briefly)
2. **Clean up holes** with appropriate drill bits
3. **Test fit** all components before final assembly
4. **Sand** any rough edges (optional)

### Optional Finishing

- **Primer + Paint** for custom colors
- **Clear coat** for durability
- **Acetone vapor** (ABS only) for smooth finish
- **Epoxy coating** for glossy look

---

## Troubleshooting

### Parts don't fit together

- Check for elephant's foot (first layer squish)
- Sand or file mating surfaces
- Adjust horizontal expansion in slicer (-0.1 to -0.2mm)

### Holes too small

- Drill out to correct size
- Adjust hole size in slicer settings

### Warping

- Use brim or raft
- Ensure bed is level
- Check bed adhesion (clean with IPA)
- Enclose printer if drafty

### Layer separation

- Increase print temperature
- Reduce cooling fan speed
- Check for wet filament (dry it out)

---

## Alternative Enclosures

Don't have a 3D printer? Consider:

### Project Boxes

- Hammond 1591 series
- Polycase SK/SL series
- Drill holes for LEDs/buttons

### Laser Cut

- Acrylic or wood panels
- Design files coming soon

### No Enclosure

- Mount on breadboard for prototyping
- Use perfboard in any container

---

## Share Your Build!

Made a cool enclosure or modification? 

- Share on [GitHub Discussions](https://github.com/hud-code/blinqr-firmware/discussions)
- Tag with #blinqr on social media
- Submit your remix to Thingiverse/Printables

---

## Next Steps

Once printing is complete:
1. Clean and inspect all parts
2. Test fit components (dry assembly)
3. Proceed to [Final Assembly](/build/assembly/)

