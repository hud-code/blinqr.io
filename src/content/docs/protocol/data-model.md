---
title: Data Model
description: Specification for the BlinQR reminder slot data model.
---

This document describes the data model used by the BlinQR system for managing reminder slots.

## Overview

BlinQR manages exactly **5 reminder slots**. Each slot represents an independent daily reminder that can be configured through the mobile app.

## ReminderSlot

The core data structure for a reminder:

```typescript
interface ReminderSlot {
  id: number;        // 0-4 (immutable, maps to physical slot)
  label: string;     // User-defined name
  icon: string;      // Emoji for visual identification
  hour: number;      // 0-23 (24-hour format)
  minute: number;    // 0-59
  isEnabled: boolean; // Whether this reminder is active
}
```

### Field Specifications

| Field | Type | Range | Description |
|-------|------|-------|-------------|
| `id` | number | 0-4 | Unique identifier matching physical LED/button |
| `label` | string | 1-20 chars | Human-readable name for the reminder |
| `icon` | string | 1 emoji | Visual indicator shown in the app UI |
| `hour` | number | 0-23 | Hour when reminder should fire (24-hour) |
| `minute` | number | 0-59 | Minute when reminder should fire |
| `isEnabled` | boolean | true/false | Whether the slot is active |

### Constraints

- `id` is immutable and assigned at creation
- `label` should be non-empty; default to "Reminder {id}" if empty
- `icon` should be a single emoji character
- `hour` and `minute` define a single daily trigger time
- Only `isEnabled: true` slots will trigger reminders

## Default Configuration

The app initializes with these default slots:

| ID | Label | Icon | Time | Enabled |
|----|-------|------|------|---------|
| 0 | Water | 💧 | 09:00 | Yes |
| 1 | Meds | 💊 | 08:00 | Yes |
| 2 | Dog | 🐶 | 18:00 | Yes |
| 3 | Task | 📌 | 12:00 | No |
| 4 | Other | ⚪ | 14:00 | No |

## LED Mask

The device uses an 8-bit mask to control LED states:

```
Bit:     7   6   5   4   3   2   1   0
       [reserved ]  [4] [3] [2] [1] [0]
                     │   │   │   │   └── Slot 0 LED
                     │   │   │   └────── Slot 1 LED
                     │   │   └────────── Slot 2 LED
                     │   └────────────── Slot 3 LED
                     └────────────────── Slot 4 LED
```

### Mask Operations

```typescript
// Set a bit (turn LED on)
mask = mask | (1 << slotId);

// Clear a bit (turn LED off)
mask = mask & ~(1 << slotId);

// Check if bit is set
isSet = (mask & (1 << slotId)) !== 0;

// Convert mask to array of active slot IDs
function maskToSlotIds(mask: number): number[] {
  const ids: number[] = [];
  for (let i = 0; i < 5; i++) {
    if ((mask & (1 << i)) !== 0) {
      ids.push(i);
    }
  }
  return ids;
}
```

## Reminder Lifecycle

### 1. Configuration

User configures slots in the app:
- Set label, icon, time, enabled status
- Changes are stored locally on the phone

### 2. Triggering

The app's reminder engine:
- Runs a timer checking current time against slot schedules
- When `currentTime === slot.time && slot.isEnabled`:
  - Set the corresponding bit in the mask
  - Send updated mask to device via BLE

### 3. Active State

While a reminder is active:
- The LED on the device is illuminated
- The app shows the slot as "ACTIVE"
- The mask bit remains set

### 4. Acknowledgment

When the user presses the button:
- Device sends `button_events` notification with slot index
- App receives the notification and:
  - Clears the corresponding mask bit
  - Sends updated mask to device
  - Marks slot as "acknowledged today"

### 5. Daily Reset

At midnight (or configurable time):
- All "acknowledged today" flags are cleared
- Reminders can fire again the next day

## State Diagram

```
                    ┌─────────────────┐
                    │    INACTIVE     │
                    │  (LED off)      │
                    └────────┬────────┘
                             │
                   [Time matches schedule]
                             │
                             ▼
                    ┌─────────────────┐
                    │     ACTIVE      │
                    │   (LED on)      │
                    └────────┬────────┘
                             │
                   [Button pressed]
                             │
                             ▼
                    ┌─────────────────┐
                    │  ACKNOWLEDGED   │
                    │  (LED off)      │
                    └────────┬────────┘
                             │
                   [New day / Reset]
                             │
                             ▼
                    ┌─────────────────┐
                    │    INACTIVE     │
                    │  (Ready again)  │
                    └─────────────────┘
```

## Storage

### Current Implementation (MVP)

- Slot configuration stored in memory only
- Resets to defaults on app restart

### Future Implementation

- Persist to AsyncStorage (React Native)
- Sync across devices via cloud (optional)
- Export/import configurations

## API Reference

### ReminderStore (Zustand)

```typescript
interface ReminderState {
  // State
  slots: ReminderSlot[];
  currentMask: number;
  acknowledgedToday: Set<number>;

  // Actions
  updateSlot: (id: number, updates: Partial<ReminderSlot>) => void;
  setMaskBit: (slotId: number) => void;
  clearMaskBit: (slotId: number) => void;
  setMask: (mask: number) => void;
  acknowledgeSlot: (slotId: number) => void;
  resetAcknowledgments: () => void;
  shouldSlotFire: (slotId: number, hour: number, minute: number) => boolean;
}
```

## Validation Rules

When updating a slot, validate:

```typescript
function validateSlot(slot: Partial<ReminderSlot>): boolean {
  if (slot.label !== undefined) {
    if (typeof slot.label !== 'string' || slot.label.length > 20) {
      return false;
    }
  }
  
  if (slot.hour !== undefined) {
    if (!Number.isInteger(slot.hour) || slot.hour < 0 || slot.hour > 23) {
      return false;
    }
  }
  
  if (slot.minute !== undefined) {
    if (!Number.isInteger(slot.minute) || slot.minute < 0 || slot.minute > 59) {
      return false;
    }
  }
  
  return true;
}
```

