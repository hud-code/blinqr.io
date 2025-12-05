---
title: Hardware Requirements
description: Components needed to build a BlinQR device.
---

This page lists all the components you'll need to build your own BlinQR reminder box.

## Required Components

| Component | Quantity | Notes |
|-----------|----------|-------|
| ESP32 Development Board | 1 | ESP32-DevKitC or similar |
| LEDs (5mm) | 5 | Any color; recommend different colors per slot |
| Resistors (220-330Ω) | 5 | Current limiting for LEDs |
| Momentary Push Buttons | 5 | 6mm tactile switches work well |
| Breadboard | 1 | For prototyping |
| Jumper Wires | ~20 | Male-to-male for breadboard |
| USB Cable | 1 | Micro-USB or USB-C depending on your ESP32 |

## Optional Components

| Component | Purpose |
|-----------|---------|
| Enclosure/Case | Protect and house the finished device |
| Perfboard/PCB | For a permanent (non-breadboard) build |
| Battery + Charger | For portable/wireless operation |
| 3D Printed Case | Custom housing (STL files coming soon) |

## Recommended ESP32 Boards

Any ESP32 board should work, but these are tested and recommended:

1. **ESP32-DevKitC** - Official Espressif board, widely available
2. **ESP32-WROOM-32** - Common module, good availability
3. **NodeMCU ESP32** - Beginner-friendly with built-in USB

:::tip
Make sure your board has an onboard USB-to-serial chip for easy programming. Most development boards include this.
:::

## Pin Assignments

The default firmware uses the following GPIO pins:

### LEDs

| Slot | GPIO Pin |
|------|----------|
| 0 | GPIO 2 (built-in LED on many boards) |
| 1 | GPIO 4 |
| 2 | GPIO 5 |
| 3 | GPIO 18 |
| 4 | GPIO 19 |

### Buttons

| Slot | GPIO Pin |
|------|----------|
| 0 | GPIO 12 |
| 1 | GPIO 13 |
| 2 | GPIO 14 |
| 3 | GPIO 27 |
| 4 | GPIO 26 |

:::note
These pins can be changed in the firmware's `HwPins.h` file if needed for your specific board.
:::

## Where to Buy

Components can be purchased from:

- **Amazon** - Quick shipping, bundles available
- **Adafruit** - High quality, good documentation
- **SparkFun** - Reliable, educational resources
- **AliExpress** - Budget-friendly, longer shipping
- **DigiKey/Mouser** - Professional suppliers, bulk pricing

## Next Steps

Once you have all components, proceed to the [Assembly Guide](/getting-started/assembly/).

