---
title: Assembly Guide
description: Step-by-step instructions for assembling your BlinQR device.
---

This guide walks you through assembling your BlinQR device on a breadboard. Once you've verified everything works, you can move to a more permanent solution.

## Before You Start

Make sure you have:
- All [required components](/getting-started/hardware/)
- A clear workspace
- Basic understanding of breadboard connections

:::caution
Always disconnect power before making wiring changes. Double-check all connections before powering on.
:::

## Step 1: Place the ESP32

1. Position your ESP32 board on the breadboard
2. Straddle the center channel so pins are accessible on both sides
3. Make sure it's firmly seated

## Step 2: Connect the LEDs

For each LED (repeat for slots 0-4):

1. **Identify the LED legs**:
   - Longer leg = Anode (+)
   - Shorter leg = Cathode (-)

2. **Connect the resistor**:
   - One end to the GPIO pin
   - Other end to the LED anode

3. **Connect the LED cathode to GND**

### LED Circuit Diagram

```
GPIO Pin ──[220Ω]──┬──► LED (+)
                   │
              LED (-)
                   │
                  GND
```

### Default Wiring

| Slot | GPIO | LED Color (suggestion) |
|------|------|------------------------|
| 0 | GPIO 2 | Blue (Water 💧) |
| 1 | GPIO 4 | Red (Meds 💊) |
| 2 | GPIO 5 | Yellow (Dog 🐶) |
| 3 | GPIO 18 | Green (Task 📌) |
| 4 | GPIO 19 | White (Other ⚪) |

## Step 3: Connect the Buttons

For each button (repeat for slots 0-4):

1. **Place the button** on the breadboard spanning the center channel
2. **Connect one side** to the GPIO pin
3. **Connect the other side** to GND

The firmware uses internal pull-up resistors, so no external resistor is needed.

### Button Circuit Diagram

```
GPIO Pin ────┬──── Button ────── GND
             │
      (internal pull-up)
```

### Default Wiring

| Slot | GPIO |
|------|------|
| 0 | GPIO 12 |
| 1 | GPIO 13 |
| 2 | GPIO 14 |
| 3 | GPIO 27 |
| 4 | GPIO 26 |

## Step 4: Power Connections

1. Connect the **3.3V** rail on your breadboard to the ESP32's 3.3V pin
2. Connect the **GND** rail to the ESP32's GND pin
3. Use these rails for all LED/button ground connections

## Step 5: Verify Connections

Before powering on, double-check:

- [ ] All LEDs have resistors in series
- [ ] LED polarity is correct (long leg toward GPIO)
- [ ] Buttons are connected between GPIO and GND
- [ ] No short circuits between adjacent pins
- [ ] Power rails are connected correctly

## Step 6: Test

1. Connect the ESP32 via USB
2. Flash the firmware (see [Building](/firmware/building/))
3. Open the serial monitor at 115200 baud
4. You should see startup messages
5. Connect with the mobile app and test each LED/button

## Troubleshooting

### LED doesn't light up
- Check polarity (long leg to GPIO)
- Verify resistor connection
- Test with a different LED
- Check GPIO pin assignment in firmware

### Button doesn't register
- Verify both legs are connected (GPIO and GND)
- Check for loose connections
- Test button with a multimeter
- Verify GPIO pin in firmware

### No BLE connection
- Ensure ESP32 has BLE capability (most do)
- Check serial output for BLE initialization messages
- Try restarting the device
- Make sure the app has Bluetooth permissions

## Next Steps

Once assembled and tested:
- [Build the firmware](/firmware/building/) if you haven't already
- Download the mobile app
- Consider designing a [custom enclosure](/getting-started/assembly/#enclosure-ideas)

## Enclosure Ideas

Once your breadboard prototype works, consider:

1. **3D Printed Case** - Design your own or use community designs (coming soon)
2. **Project Box** - Drill holes for LEDs and buttons
3. **Laser Cut** - Acrylic panels with custom cutouts
4. **Desktop Stand** - Angled display for visibility

Share your builds with the community!

