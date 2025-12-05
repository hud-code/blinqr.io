---
title: Bill of Materials
description: Complete list of components needed to build a blinqr device.
---

This page lists all the components you'll need to build your own blinqr reminder box. Links are provided for reference - feel free to source from your preferred suppliers.

## Electronics

### Core Components

| Component | Quantity | Description | Est. Cost |
|-----------|----------|-------------|-----------|
| ESP32 DevKit | 1 | ESP32-WROOM-32 development board | $8-12 |
| 5mm LEDs | 5 | Diffused LEDs (assorted colors recommended) | $2-3 |
| Tactile Buttons | 5 | 6x6mm momentary push buttons | $2-3 |
| Resistors (220Ω) | 5 | 1/4W through-hole resistors | $1 |
| USB Cable | 1 | Micro-USB or USB-C (match your ESP32) | $3-5 |

### Optional Components

| Component | Quantity | Description | Est. Cost |
|-----------|----------|-------------|-----------|
| Status LED | 1 | For connection indicator | $0.50 |
| Power Switch | 1 | SPST toggle or slide switch | $1-2 |
| Battery Holder | 1 | 2x AA or 18650 holder | $2-3 |
| LiPo Battery | 1 | 3.7V 1000mAh+ (for portable use) | $8-12 |
| TP4056 Module | 1 | LiPo charging module | $1-2 |

**Estimated Electronics Cost: $15-25** (basic) / $30-45 (with battery)

---

## 3D Printed Parts

All STL files are available in the [GitHub releases](https://github.com/hud-code/blinqr-firmware/releases).

| Part | Quantity | Print Time | Filament |
|------|----------|------------|----------|
| Main Enclosure (Top) | 1 | ~2 hours | ~30g |
| Main Enclosure (Bottom) | 1 | ~2 hours | ~35g |
| Button Caps | 5 | ~30 min | ~5g |
| LED Diffusers | 5 | ~15 min | ~3g |
| Light Guides (optional) | 5 | ~20 min | ~4g |

**Estimated Filament: ~80g** (~$2-3 worth of PLA)

---

## Hardware

| Item | Quantity | Description |
|------|----------|-------------|
| M3x8mm Screws | 4 | For enclosure assembly |
| M3 Heat-Set Inserts | 4 | Optional, for repeated assembly |
| Rubber Feet | 4 | Adhesive bumpers for bottom |
| 22 AWG Wire | ~1m | For internal connections |

**Estimated Hardware Cost: $3-5**

---

## Recommended LED Colors

For visual distinction between reminder types:

| Slot | Suggested Color | Common Use |
|------|-----------------|------------|
| 0 | Blue | Water/Hydration |
| 1 | Red | Medication |
| 2 | Yellow | Pet care |
| 3 | Green | Tasks/Exercise |
| 4 | White | Custom/Other |

:::tip
Using different colored LEDs makes it easier to identify which reminder is active at a glance, even without looking at the app.
:::

---

## Where to Buy

### Electronics

- **Amazon** - Fast shipping, kits available
- **Adafruit** - High quality, good documentation
- **SparkFun** - Reliable, educational resources
- **AliExpress** - Budget-friendly, 2-4 week shipping
- **DigiKey/Mouser** - Professional grade, bulk pricing

### 3D Printing (if you don't have a printer)

- **JLCPCB** - Affordable, good quality
- **Craftcloud** - Price comparison across services
- **Shapeways** - Premium quality
- **Local makerspaces** - Often have printers available

---

## Shopping List Generator

:::note[Coming Soon]
Interactive shopping list with quantity calculations and supplier links.
:::

---

## Total Cost Estimate

| Configuration | Est. Cost |
|---------------|-----------|
| Basic (USB powered) | $20-30 |
| With battery | $35-50 |
| Premium (quality components) | $50-70 |

*Costs exclude 3D printing if you don't own a printer (~$15-25 from a service)*

---

## Next Steps

Once you have all your components:
1. Verify everything arrived and matches specifications
2. Test your ESP32 by [flashing the firmware](/firmware/flashing/)
3. Move on to the [Wiring Guide](/build/wiring/)

