---
title: Firmware Customization
description: How to customize the BlinQR firmware for your needs.
---

The BlinQR firmware is designed to be easily customizable. This guide covers common modifications.

## Changing GPIO Pins

If your wiring differs from the defaults, edit `include/hw/HwPins.h`:

```cpp
// LED GPIO pins
#define LED_PIN_0  2    // Slot 0 LED
#define LED_PIN_1  4    // Slot 1 LED
#define LED_PIN_2  5    // Slot 2 LED
#define LED_PIN_3  18   // Slot 3 LED
#define LED_PIN_4  19   // Slot 4 LED

// Button GPIO pins  
#define BTN_PIN_0  12   // Slot 0 button
#define BTN_PIN_1  13   // Slot 1 button
#define BTN_PIN_2  14   // Slot 2 button
#define BTN_PIN_3  27   // Slot 3 button
#define BTN_PIN_4  26   // Slot 4 button
```

### Pin Selection Tips

- Avoid GPIO 6-11 (used for flash memory)
- Avoid GPIO 34-39 (input only, no internal pull-up)
- GPIO 2 is often connected to an onboard LED

## Changing LED Behavior

### Active Low LEDs

If your LEDs are wired active-low (LED on when GPIO is LOW), change in `HwPins.h`:

```cpp
#define LED_ACTIVE_STATE LOW  // Change from HIGH to LOW
```

### PWM Brightness (Advanced)

To add brightness control, modify `lib/hw/HwController.cpp`:

```cpp
void HwController::setLed(int index, bool state, uint8_t brightness) {
    if (state) {
        ledcWrite(index, brightness);  // 0-255
    } else {
        ledcWrite(index, 0);
    }
}
```

## Changing Button Behavior

### Debounce Time

Adjust the debounce delay in `HwPins.h`:

```cpp
#define DEBOUNCE_TIME_MS 50  // Increase for noisy buttons
```

### Active High Buttons

If your buttons pull the pin HIGH when pressed:

```cpp
#define BTN_PRESSED_STATE HIGH  // Change from LOW
```

Remove the `INPUT_PULLUP` and add external pull-down resistors.

## Changing BLE Settings

### Device Name

Edit `include/ble/ReminderBleServer.h`:

```cpp
#define DEVICE_NAME "My Custom BlinQR"
```

### UUIDs

:::caution
Changing UUIDs will make the device incompatible with the standard mobile app. Only change these if you're also modifying the app.
:::

```cpp
#define SERVICE_UUID        "12340001-0000-1000-8000-00805F9B34FB"
#define REMINDER_STATE_UUID "12340002-0000-1000-8000-00805F9B34FB"
#define BUTTON_EVENTS_UUID  "12340003-0000-1000-8000-00805F9B34FB"
```

## Adding Features

### Connection Status LED

Add a dedicated LED to show BLE connection status:

```cpp
// In main.cpp
#define STATUS_LED_PIN 15

void setup() {
    pinMode(STATUS_LED_PIN, OUTPUT);
    // ... existing setup
}

void loop() {
    digitalWrite(STATUS_LED_PIN, bleServer.isConnected() ? HIGH : LOW);
    // ... existing loop
}
```

### Button Long Press

Detect long presses for additional actions:

```cpp
// In HwController, track press duration
unsigned long pressStartTime[NUM_SLOTS];
bool isLongPress[NUM_SLOTS];

int HwController::pollButtons() {
    // ... existing debounce logic
    
    if (currentState && !_lastButtonStates[i]) {
        // Button just pressed
        pressStartTime[i] = millis();
    }
    
    if (!currentState && _lastButtonStates[i]) {
        // Button just released
        unsigned long duration = millis() - pressStartTime[i];
        if (duration > 1000) {
            // Long press detected
            return i + 100;  // Return different value for long press
        }
        return i;
    }
}
```

### Multiple Devices

To run multiple BlinQR devices, give each a unique name:

```cpp
#define DEVICE_NAME "BlinQR Kitchen"
// or
#define DEVICE_NAME "BlinQR Office"
```

## Building Custom Versions

Create different configurations using PlatformIO environments:

```ini
; platformio.ini

[env:default]
platform = espressif32
board = esp32dev
framework = arduino

[env:custom_pins]
platform = espressif32
board = esp32dev
framework = arduino
build_flags = 
    -DLED_PIN_0=25
    -DLED_PIN_1=26
    -DBTN_PIN_0=32
```

Build a specific environment:

```bash
pio run -e custom_pins
```

## Contributing Changes

If you've made improvements that others could benefit from, consider [contributing](/contributing/how-to-contribute/) them back to the project!

