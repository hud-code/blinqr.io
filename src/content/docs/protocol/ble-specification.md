---
title: BLE Specification
description: Technical specification for the BlinQR Bluetooth Low Energy protocol.
---

This document specifies the Bluetooth Low Energy (BLE) GATT service used for communication between the BlinQR device and companion mobile app.

## Overview

The BlinQR device operates as a BLE **peripheral** (server). The mobile app acts as a **central** (client) that connects to the device.

The device exposes a single GATT service with two characteristics:
- **reminder_state**: App writes LED mask to device
- **button_events**: Device notifies app of button presses

## Service Definition

### ReminderService

| Property | Value |
|----------|-------|
| Name | ReminderService |
| UUID | `12340001-0000-1000-8000-00805F9B34FB` |
| Type | Primary Service |

## Characteristics

### reminder_state

Controls which LEDs are illuminated on the device.

| Property | Value |
|----------|-------|
| UUID | `12340002-0000-1000-8000-00805F9B34FB` |
| Properties | Write, Write Without Response |
| Value Type | `uint8` (1 byte) |
| Direction | App → Device |

#### Value Format

The value is a bitmask where bits 0–4 correspond to reminder slots 0–4:

| Bit | Slot | Binary | Hex |
|-----|------|--------|-----|
| 0 | Slot 0 | `0b00000001` | `0x01` |
| 1 | Slot 1 | `0b00000010` | `0x02` |
| 2 | Slot 2 | `0b00000100` | `0x04` |
| 3 | Slot 3 | `0b00001000` | `0x08` |
| 4 | Slot 4 | `0b00010000` | `0x10` |

**Examples:**
- `0x00` (0b00000) - All LEDs off
- `0x01` (0b00001) - LED 0 on
- `0x03` (0b00011) - LEDs 0 and 1 on
- `0x1F` (0b11111) - All LEDs on

Bits 5-7 are reserved and should be set to 0.

---

### button_events

Notifies the app when a physical button is pressed on the device.

| Property | Value |
|----------|-------|
| UUID | `12340003-0000-1000-8000-00805F9B34FB` |
| Properties | Notify |
| Value Type | `uint8` (1 byte) |
| Direction | Device → App |

#### Value Format

The value is the index (0–4) of the button that was pressed:

| Value | Meaning |
|-------|---------|
| `0x00` | Button 0 pressed |
| `0x01` | Button 1 pressed |
| `0x02` | Button 2 pressed |
| `0x03` | Button 3 pressed |
| `0x04` | Button 4 pressed |

#### Subscription

The app must subscribe to notifications on this characteristic to receive button events:

```
Enable notifications: Write 0x0100 to CCCD (Client Characteristic Configuration Descriptor)
```

## Communication Flow

```
┌─────────────┐                         ┌─────────────┐
│  Mobile App │                         │   Device    │
│  (Central)  │                         │ (Peripheral)│
└──────┬──────┘                         └──────┬──────┘
       │                                       │
       │─────── Scan for devices ─────────────>│
       │                                       │
       │<─────── Advertise "BlinQR Box" ───────│
       │                                       │
       │─────── Connect ──────────────────────>│
       │                                       │
       │─────── Discover services ────────────>│
       │<────── Service: ReminderService ──────│
       │                                       │
       │─────── Subscribe to button_events ───>│
       │<────── Subscription confirmed ────────│
       │                                       │
       │                                       │
       │  ═══ CONNECTED STATE ════════════════ │
       │                                       │
       │  [Reminder fires at 9:00 AM]          │
       │                                       │
       │─────── Write reminder_state: 0x01 ───>│
       │                                       │ [LED 0 turns ON]
       │                                       │
       │                                       │ [User presses button 0]
       │                                       │
       │<────── Notify button_events: 0x00 ────│
       │                                       │
       │  [App acknowledges, clears bit]       │
       │                                       │
       │─────── Write reminder_state: 0x00 ───>│
       │                                       │ [LED 0 turns OFF]
       │                                       │
```

## Connection Parameters

### Advertising

| Parameter | Value |
|-----------|-------|
| Advertising Interval | 100-200ms |
| Advertising Data | Service UUID, Device Name |
| Scan Response | Full device name |

### Connection

| Parameter | Recommended |
|-----------|-------------|
| Connection Interval | 15-30ms |
| Slave Latency | 0 |
| Supervision Timeout | 4000ms |

## Error Handling

### Disconnection Behavior

When the BLE connection is lost:

1. **Device**: Turns off all LEDs, restarts advertising
2. **App**: Should attempt reconnection and resend current mask

### Write Errors

If a write to `reminder_state` fails:
- Retry up to 3 times
- If still failing, inform user of connection issue

## Security

The current implementation uses **no encryption or pairing**. This is suitable for:
- Development and testing
- Personal use in a trusted environment

For production deployments requiring security:
- Enable BLE bonding/pairing
- Use encrypted characteristics
- Implement authentication

## Compatibility

### Supported Platforms

| Platform | BLE Library | Notes |
|----------|-------------|-------|
| iOS | CoreBluetooth | iOS 13+ recommended |
| Android | android.bluetooth | Android 6.0+ |
| React Native | react-native-ble-plx | Cross-platform |
| Web | Web Bluetooth API | Chrome/Edge only |

### Known Limitations

- Maximum 1 connected client at a time
- No bonding/pairing in current implementation
- Notification buffer limited to single button event

