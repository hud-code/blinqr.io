---
title: Introduction
description: Learn what blinqr is and how it can help you manage daily reminders.
---

blinqr is an open-source reminder system that combines physical hardware feedback with smartphone connectivity. It's designed to help you remember daily tasks like taking medication, drinking water, walking the dog, or any other recurring activity.

## How It Works

1. **Configure reminders** in the companion mobile app
2. **At scheduled times**, the corresponding LED lights up on your blinqr device
3. **Press the button** next to the LED to acknowledge and dismiss the reminder
4. The app tracks your acknowledgments and can provide insights over time

## System Components

### The Device (ESP32)

The blinqr device is built on an ESP32 microcontroller and includes:

- **5 LEDs** - Visual indicators for each reminder slot
- **5 Buttons** - Physical buttons to acknowledge reminders
- **BLE Radio** - Connects wirelessly to your smartphone

### The Mobile App

The companion app (available for iOS and Android) allows you to:

- Name and customize each reminder slot
- Set schedules for when reminders should fire
- View acknowledgment history
- Configure device settings

### Communication

The device and app communicate via **Bluetooth Low Energy (BLE)**. The app is the "brain" of the system - it manages all scheduling logic and sends commands to the device to control the LEDs. The device simply:

- Turns LEDs on/off based on commands from the app
- Reports button presses back to the app

This architecture keeps the firmware simple and allows for rich features in the app without firmware updates.

## Why blinqr?

- **Physical feedback** - Unlike phone notifications that are easy to ignore, a glowing LED on your desk is a persistent, gentle reminder
- **Tactile acknowledgment** - Pressing a physical button creates a more deliberate "I did it" moment
- **No phone required** - Once configured, the device works independently
- **Privacy-focused** - All data stays on your phone; no cloud accounts required
- **Open source** - Customize and extend to fit your needs

## Next Steps

Ready to build your own blinqr device?

1. Check the [Bill of Materials](/build/bom/) to see what you need
2. Follow the [Build Guide](/build/) for wiring, 3D printing, and assembly
3. [Flash the firmware](/firmware/flashing/) to your ESP32
4. Download the app and start using it!

