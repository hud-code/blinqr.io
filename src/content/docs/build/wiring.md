---
title: Wiring Guide
description: Detailed wiring diagrams and connection instructions for the blinqr device.
---

This guide shows you how to wire all the electronic components for your blinqr device.

## Wiring Diagram

:::note[Diagram Coming Soon]
A detailed wiring diagram will be added here showing all connections.
:::

<!-- TODO: Add wiring diagram image -->
<!-- ![Wiring Diagram](/images/wiring-diagram.png) -->

## Pin Assignments

### Default GPIO Configuration

| Function | GPIO Pin | Wire Color (suggested) |
|----------|----------|------------------------|
| LED 0 | GPIO 2 | Blue |
| LED 1 | GPIO 4 | Red |
| LED 2 | GPIO 5 | Yellow |
| LED 3 | GPIO 18 | Green |
| LED 4 | GPIO 19 | White |
| Button 0 | GPIO 12 | Blue |
| Button 1 | GPIO 13 | Red |
| Button 2 | GPIO 14 | Yellow |
| Button 3 | GPIO 27 | Green |
| Button 4 | GPIO 26 | White |
| 3.3V | 3V3 | Red |
| Ground | GND | Black |

---

## LED Wiring

Each LED requires a current-limiting resistor. Wire them as follows:

### Circuit Diagram (per LED)

```
GPIO Pin ────[220Ω]────┬────► LED Anode (+)
                       │      (longer leg)
                       │
                  LED Cathode (-)
                  (shorter leg)
                       │
                      GND
```

### LED Identification

- **Anode (+)**: Longer leg, connects through resistor to GPIO
- **Cathode (-)**: Shorter leg, connects to ground
- **Flat edge**: On the LED body, indicates cathode side

### Step-by-Step LED Wiring

1. **Identify LED polarity** - Find the longer leg (anode)
2. **Solder resistor** - Connect 220Ω resistor to one leg of each LED
3. **Connect to GPIO** - Wire resistor end to designated GPIO pin
4. **Connect ground** - Wire LED cathode to common ground rail

:::caution
Always use resistors with LEDs! Without them, the LED will burn out and may damage your ESP32.
:::

---

## Button Wiring

Buttons use the ESP32's internal pull-up resistors, so no external resistors are needed.

### Circuit Diagram (per button)

```
GPIO Pin ────┬──── Button ──── GND
             │
      (internal pull-up)
```

### Step-by-Step Button Wiring

1. **Identify button pins** - Most tactile buttons have 4 pins (2 pairs connected internally)
2. **Connect one side to GPIO** - Wire to designated GPIO pin
3. **Connect other side to GND** - Wire to common ground rail
4. **Test continuity** - Button should show continuity when pressed

### Button Pin Layout

```
     ┌─────────┐
     │  ┌───┐  │
Pin1 ●──┤   ├──● Pin2
     │  │   │  │
Pin3 ●──┤   ├──● Pin4
     │  └───┘  │
     └─────────┘

Pin1-Pin2 are connected (top pair)
Pin3-Pin4 are connected (bottom pair)
Pressing button connects top to bottom
```

---

## Power Options

### USB Power (Recommended for beginners)

Simply connect via USB - the ESP32 dev board handles power regulation.

```
USB Cable ──► ESP32 DevKit USB Port
```

### Battery Power (Advanced)

For portable operation with a LiPo battery:

```
┌─────────────┐
│   LiPo      │
│   Battery   │
│   3.7V      │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   TP4056    │──── USB (for charging)
│   Charger   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Power     │──── ESP32 VIN
│   Switch    │
└─────────────┘
```

:::warning
LiPo batteries can be dangerous if mishandled. Ensure proper polarity and never short-circuit.
:::

---

## Common Ground

All components share a common ground. Connect all ground wires to the ESP32's GND pin(s).

```
ESP32 GND ──┬── LED 0 Cathode
            ├── LED 1 Cathode
            ├── LED 2 Cathode
            ├── LED 3 Cathode
            ├── LED 4 Cathode
            ├── Button 0
            ├── Button 1
            ├── Button 2
            ├── Button 3
            └── Button 4
```

---

## Wiring Checklist

Before powering on, verify:

- [ ] All LEDs have resistors in series
- [ ] LED polarity is correct (long leg toward resistor/GPIO)
- [ ] No resistors on button circuits (not needed)
- [ ] All grounds connected to common GND
- [ ] No short circuits between adjacent pins
- [ ] No exposed wire touching other connections
- [ ] Solder joints are clean and shiny

---

## Testing Your Wiring

### Before Assembly

1. **Flash the firmware** to your ESP32
2. **Open serial monitor** at 115200 baud
3. **Verify startup messages** show correct pin assignments
4. **Test each LED** using the mobile app
5. **Test each button** and verify serial output

### Expected Serial Output

```
[Main] Initializing hardware...
  LED 0 -> GPIO 2
  LED 1 -> GPIO 4
  LED 2 -> GPIO 5
  LED 3 -> GPIO 18
  LED 4 -> GPIO 19
  BTN 0 -> GPIO 12
  BTN 1 -> GPIO 13
  BTN 2 -> GPIO 14
  BTN 3 -> GPIO 27
  BTN 4 -> GPIO 26
[HwController] Initialization complete
```

---

## Troubleshooting

### LED doesn't light up

1. Check polarity (swap LED orientation)
2. Verify resistor connection
3. Test LED with a coin cell battery
4. Check GPIO pin assignment in firmware

### Button doesn't register

1. Test button with multimeter (continuity when pressed)
2. Verify both pins are connected (GPIO and GND)
3. Check for cold solder joints
4. Verify GPIO pin assignment in firmware

### Multiple issues

1. Check common ground connections
2. Look for solder bridges
3. Verify 3.3V power rail
4. Test ESP32 separately first

---

## Next Steps

Once wiring is complete and tested:
1. Take photos for reference (helpful for troubleshooting)
2. Proceed to [3D Printing](/build/3d-printing/) for the enclosure
3. Or skip to [Assembly](/build/assembly/) if you already have printed parts

