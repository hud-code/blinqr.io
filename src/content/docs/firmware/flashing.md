---
title: Flashing the Firmware
description: How to upload the BlinQR firmware to your ESP32.
---

This guide explains how to flash (upload) the compiled firmware to your ESP32 device.

## Connect Your ESP32

1. Connect your ESP32 to your computer via USB
2. The device should appear as a serial port:
   - **Windows**: `COM3`, `COM4`, etc.
   - **macOS**: `/dev/cu.usbserial-*` or `/dev/cu.SLAB_USBtoUART`
   - **Linux**: `/dev/ttyUSB0` or `/dev/ttyACM0`

### Installing Drivers

If your ESP32 isn't detected, you may need to install USB-to-serial drivers:

- **CP2102 chip**: [Silicon Labs drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)
- **CH340 chip**: [CH340 drivers](https://sparks.gogo.co.nz/ch340.html)

## Flashing

### Using VS Code

1. Open the project in VS Code with PlatformIO
2. Click the **Upload** button (right arrow icon) in the bottom toolbar
3. PlatformIO will automatically detect the port and upload

### Using Command Line

```bash
cd blinqr-firmware
pio run --target upload
```

### Specifying a Port

If automatic detection fails:

```bash
pio run --target upload --upload-port /dev/cu.usbserial-0001
```

## Expected Output

```
Connecting........_
Chip is ESP32-D0WDQ6 (revision 1)
Features: WiFi, BT, Dual Core, 240MHz
Uploading stub...
Running stub...
Stub running...
Changing baud rate to 921600
Changed.
Configuring flash size...
Writing at 0x00001000... (100 %)
Writing at 0x00008000... (100 %)
Writing at 0x0000e000... (100 %)
Writing at 0x00010000... (100 %)
Wrote 819200 bytes in 10.2 seconds (643.2 kbit/s)
Hash of data verified.
```

## Verify the Upload

### Monitor Serial Output

```bash
pio device monitor
```

Or use the VS Code PlatformIO Serial Monitor.

### Expected Startup Messages

```
=================================
BlinQR Reminder Box - Starting...
=================================

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

[Main] Initializing BLE...
[BLE] Initializing NimBLE...
[BLE] Service created and started
  Service UUID: 12340001-0000-1000-8000-00805F9B34FB
  reminder_state UUID: 12340002-0000-1000-8000-00805F9B34FB
  button_events UUID: 12340003-0000-1000-8000-00805F9B34FB

[Main] Starting BLE advertising...
[BLE] Advertising started

[Main] Ready! Waiting for connections...
```

## Troubleshooting

### "A fatal error occurred: Failed to connect"

1. **Hold the BOOT button** on your ESP32 while uploading
2. Release after "Connecting..." appears
3. Some boards require this for initial flash

### "Permission denied" (Linux/macOS)

Add your user to the dialout group:

```bash
# Linux
sudo usermod -a -G dialout $USER

# macOS
sudo dseditgroup -o edit -a $USER -t user admin
```

Log out and back in for changes to take effect.

### "Port is busy"

Close any other applications using the serial port (Arduino IDE, other terminals, etc.).

### Upload succeeds but device doesn't work

1. Check serial monitor for error messages
2. Verify wiring matches pin configuration
3. Try a full erase and re-flash:

```bash
pio run --target erase
pio run --target upload
```

## Next Steps

After successfully flashing:

1. Open the mobile app
2. Go to the Device tab
3. Tap "Connect" to pair with your BlinQR device
4. Test LEDs and buttons using the simulator (in dev mode) or scheduled reminders

