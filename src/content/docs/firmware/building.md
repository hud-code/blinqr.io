---
title: Building the Firmware
description: How to compile the BlinQR firmware using PlatformIO.
---

This guide shows you how to build the BlinQR firmware from source using PlatformIO.

## Prerequisites

### Install PlatformIO

PlatformIO can be installed in several ways:

#### Option 1: VS Code Extension (Recommended)
1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Open Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "PlatformIO IDE"
4. Click Install

#### Option 2: Command Line
```bash
pip install platformio
```

### Clone the Repository

```bash
git clone https://github.com/hud-code/blinqr-firmware.git
cd blinqr-firmware
```

## Building

### Using VS Code

1. Open the `blinqr-firmware` folder in VS Code
2. PlatformIO should automatically detect the project
3. Click the **Build** button (checkmark icon) in the bottom toolbar
4. Wait for compilation to complete

### Using Command Line

```bash
cd blinqr-firmware
pio run
```

### Expected Output

```
Processing esp32dev (platform: espressif32; board: esp32dev)
...
Linking .pio/build/esp32dev/firmware.elf
Building .pio/build/esp32dev/firmware.bin
============== [SUCCESS] Took X.XX seconds ==============
```

## Project Structure

```
blinqr-firmware/
├── platformio.ini      # Build configuration
├── src/
│   └── main.cpp        # Main entry point
├── include/
│   ├── hw/
│   │   ├── HwPins.h    # GPIO pin definitions
│   │   └── HwController.h
│   └── ble/
│       └── ReminderBleServer.h
└── lib/
    ├── hw/
    │   └── HwController.cpp
    └── ble/
        └── ReminderBleServer.cpp
```

## Configuration

### Changing Pin Assignments

Edit `include/hw/HwPins.h` to change GPIO pins:

```cpp
// LED GPIO pins
#define LED_PIN_0  2   // Change these to match your wiring
#define LED_PIN_1  4
#define LED_PIN_2  5
#define LED_PIN_3  18
#define LED_PIN_4  19

// Button GPIO pins
#define BTN_PIN_0  12
#define BTN_PIN_1  13
#define BTN_PIN_2  14
#define BTN_PIN_3  27
#define BTN_PIN_4  26
```

### Changing Device Name

Edit `include/ble/ReminderBleServer.h`:

```cpp
#define DEVICE_NAME "BlinQR Box"  // Change to your preferred name
```

## Troubleshooting

### Build fails with "No such file or directory"

Make sure you're in the correct directory and have cloned the full repository:

```bash
ls platformio.ini  # Should exist
```

### "Could not find the package"

PlatformIO downloads dependencies automatically. If it fails:

```bash
pio pkg install
```

### "Upload port not found"

This error occurs during upload, not build. See [Flashing](/firmware/flashing/).

## Next Steps

Once the build succeeds, proceed to [Flashing](/firmware/flashing/) to upload the firmware to your ESP32.

