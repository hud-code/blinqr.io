---
title: Final Assembly
description: Step-by-step instructions for assembling your blinqr device.
---

This guide walks you through the final assembly of your blinqr device, bringing together the electronics, 3D printed parts, and firmware.

## Before You Start

Ensure you have completed:

- [ ] [Wiring](/build/wiring/) - All electronics connected and tested
- [ ] [3D Printing](/build/3d-printing/) - All parts printed and cleaned
- [ ] [Firmware](/firmware/flashing/) - ESP32 flashed and tested

### Tools Needed

- Small Phillips screwdriver
- Needle-nose pliers (optional)
- Hot glue gun (optional, for securing wires)

---

## Assembly Overview

:::note[Detailed Photos Coming Soon]
Step-by-step photos will be added once the enclosure design is finalized.
:::

The assembly process:

1. Install heat-set inserts (if using)
2. Mount ESP32 board
3. Install LEDs in top shell
4. Install buttons in top shell  
5. Route and organize wires
6. Close enclosure
7. Add feet and finishing touches

---

## Step 1: Prepare the Bottom Shell

### Option A: Heat-Set Inserts (Recommended)

1. Heat your soldering iron to ~220°C
2. Place insert on mounting post
3. Gently press with soldering iron tip
4. Let insert sink flush with surface
5. Allow to cool before proceeding

### Option B: Direct Screw Threads

If not using inserts, screws will thread directly into plastic. This works but allows fewer assembly/disassembly cycles.

---

## Step 2: Mount the ESP32

### Positioning

```
┌─────────────────────────────────┐
│                                 │
│    ┌─────────────────────┐      │
│    │                     │      │
│    │      ESP32          │      │
│    │      DevKit         │      │
│    │                     │      │
│    │  [USB PORT]         │      │
│    └─────────────────────┘      │
│              ↓                  │
│         (USB cutout)            │
└─────────────────────────────────┘
```

### Mounting Options

1. **Double-sided tape** - Quick, removable
2. **Hot glue corners** - Secure, semi-permanent
3. **Screw mount** - If using a breakout board with holes
4. **Friction fit** - If enclosure has mounting rails

---

## Step 3: Install LEDs

### From Inside the Top Shell

1. Insert LED through hole from inside
2. LED should fit snugly (friction fit)
3. If loose, add small amount of hot glue
4. Ensure cathode (short leg) orientation is consistent

### LED Alignment

```
     Top Shell (outside view)
┌─────────────────────────────────┐
│                                 │
│   ◯     ◯     ◯     ◯     ◯    │  ← LEDs visible from outside
│  (0)   (1)   (2)   (3)   (4)   │
│                                 │
└─────────────────────────────────┘
```

### Install Diffusers

1. Place diffuser cap over each LED
2. Should snap or press fit in place
3. Test fit before gluing

---

## Step 4: Install Buttons

### Button Placement

1. Insert button from inside of top shell
2. Button cap hole should align with exterior
3. Button should click freely when pressed
4. Secure with small amount of hot glue if needed

### Add Button Caps

1. Press-fit button caps onto button actuators
2. Ensure smooth operation
3. Caps should not bind on enclosure holes

### Test Button Action

```
         ┌─────┐
         │ Cap │  ← Should move freely
         └──┬──┘
            │
         ┌──┴──┐
         │ Btn │  ← Tactile click when pressed
         └─────┘
```

---

## Step 5: Wire Management

### Organize Wires

1. Group wires by function (LEDs together, buttons together)
2. Use small zip ties or twist ties
3. Route away from moving parts (buttons)
4. Leave enough slack for opening enclosure later

### Secure with Hot Glue (Optional)

- Tack down wire bundles to prevent rattling
- Avoid gluing directly to ESP32
- Leave USB port accessible

### Wire Routing Diagram

```
┌─────────────────────────────────┐
│  LED wires    Button wires      │
│     ↓              ↓            │
│   ┌─────┐      ┌─────┐         │
│   │     │      │     │         │
│   └──┬──┘      └──┬──┘         │
│      │            │            │
│      └────┬───────┘            │
│           ↓                    │
│      ┌─────────┐               │
│      │  ESP32  │               │
│      └─────────┘               │
└─────────────────────────────────┘
```

---

## Step 6: Close Enclosure

### Pre-Close Checklist

- [ ] All LEDs light up correctly
- [ ] All buttons register presses
- [ ] USB cable connects and works
- [ ] No wires pinched between shells
- [ ] ESP32 is secure

### Joining the Shells

1. Align top and bottom shells
2. Ensure no wires are caught in seam
3. Press together gently
4. Insert and tighten screws (don't overtighten)

### Screw Pattern

```
    ┌─────────────────┐
    │ ●             ● │  ← Start with diagonal corners
    │                 │
    │                 │
    │ ●             ● │  ← Then remaining corners
    └─────────────────┘
```

---

## Step 7: Final Touches

### Add Rubber Feet

1. Clean bottom surface with alcohol
2. Apply adhesive rubber feet to corners
3. Press firmly and let adhesive set

### Label (Optional)

- Add labels for each reminder slot
- Use label maker or printed stickers
- Position near corresponding button

---

## Final Testing

### Hardware Check

1. **Power on** via USB
2. **Verify serial output** shows successful initialization
3. **Test each LED** using the app
4. **Test each button** and verify app receives events
5. **Check BLE connection** stability

### Expected Behavior

| Test | Expected Result |
|------|-----------------|
| Power on | Status LED blinks, serial shows boot messages |
| BLE scan | Device appears as "blinqr Box" |
| Connect | App shows "Connected" |
| LED test | Each LED lights individually |
| Button test | Each button registers in app |

---

## Troubleshooting

### LED doesn't light after assembly

1. Check LED orientation wasn't reversed
2. Verify wire wasn't disconnected
3. Check for pinched/broken wires

### Button doesn't work after assembly

1. Ensure button cap isn't binding
2. Check button has enough travel
3. Verify wires still connected

### Enclosure doesn't close properly

1. Check for trapped wires
2. Verify no components are misaligned
3. Don't force - find the obstruction

### Device won't power on

1. Check USB cable connection
2. Verify no shorts (smell for burning)
3. Test ESP32 outside enclosure

---

## Congratulations! 🎉

Your blinqr device is complete! 

### Next Steps

1. **Download the app** and pair with your device
2. **Configure your reminders** for daily tasks
3. **Share your build** with the community
4. **Check the docs** for advanced customization

### Get Help

- [GitHub Discussions](https://github.com/hud-code/blinqr-firmware/discussions) - Ask questions
- [GitHub Issues](https://github.com/hud-code/blinqr-firmware/issues) - Report bugs

---

## Share Your Build!

We'd love to see your completed blinqr device!

- Post photos in GitHub Discussions
- Share on social media with #blinqr
- Submit improvements via pull request

Thanks for building with blinqr!

