---
title: How to Contribute
description: Guidelines for contributing to the BlinQR project.
---

Thank you for your interest in contributing to BlinQR! This guide will help you get started.

## Ways to Contribute

### Report Bugs

Found a bug? Please open an issue on GitHub:

1. Go to [blinqr-firmware issues](https://github.com/hud-code/blinqr-firmware/issues)
2. Click "New Issue"
3. Include:
   - What you expected to happen
   - What actually happened
   - Steps to reproduce
   - Your hardware/software setup

### Suggest Features

Have an idea? We'd love to hear it!

1. Check existing issues to avoid duplicates
2. Open a new issue with the "enhancement" label
3. Describe the feature and why it would be useful

### Improve Documentation

Documentation improvements are always welcome:

- Fix typos or unclear explanations
- Add missing information
- Translate to other languages
- Add diagrams or images

### Submit Code

Ready to write some code? Here's how:

## Development Setup

### Firmware

```bash
# Clone the repository
git clone https://github.com/hud-code/blinqr-firmware.git
cd blinqr-firmware

# Install PlatformIO (if not already installed)
pip install platformio

# Build
pio run

# Upload to your device
pio run --target upload
```

### Documentation Site

```bash
# Clone the docs repository
git clone https://github.com/hud-code/blinqr.io.git
cd blinqr.io

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Pull Request Process

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Create a Branch

```bash
git checkout -b feature/my-new-feature
# or
git checkout -b fix/bug-description
```

### 3. Make Your Changes

- Write clear, commented code
- Follow existing code style
- Test your changes thoroughly

### 4. Commit Your Changes

Write clear commit messages:

```bash
# Good
git commit -m "Add brightness control for LEDs"
git commit -m "Fix button debounce timing issue"

# Not so good
git commit -m "fixed stuff"
git commit -m "updates"
```

### 5. Push and Create PR

```bash
git push origin feature/my-new-feature
```

Then go to GitHub and create a Pull Request.

### 6. Code Review

- Respond to feedback promptly
- Make requested changes
- Be patient - reviews take time

## Code Style

### C++ (Firmware)

- Use descriptive variable names
- Comment complex logic
- Keep functions focused and small
- Use the existing formatting style

```cpp
// Good
void HwController::setLed(int index, bool state) {
    if (index < 0 || index >= NUM_SLOTS) {
        Serial.printf("[HwController] Invalid LED index: %d\n", index);
        return;
    }
    // ... implementation
}

// Avoid
void setled(int i, bool s) { digitalWrite(p[i], s); }
```

### TypeScript (App/Docs)

- Use TypeScript strict mode
- Prefer `const` over `let`
- Use meaningful names
- Add JSDoc comments for public APIs

```typescript
// Good
/** Updates a reminder slot's configuration */
const updateSlot = (id: number, updates: Partial<ReminderSlot>) => {
  // ...
};

// Avoid
const update = (i, u) => { /* ... */ };
```

## Testing

### Firmware

Currently, testing is manual:

1. Upload firmware to device
2. Connect with the mobile app
3. Test all LEDs and buttons
4. Verify BLE communication

Automated testing contributions welcome!

### Documentation

Preview your changes locally:

```bash
npm run dev
# Open http://localhost:4321
```

Check for broken links:

```bash
npm run build
```

## Community Guidelines

### Be Respectful

- Treat everyone with respect
- Be welcoming to newcomers
- Assume good intentions

### Be Constructive

- Provide helpful feedback
- Suggest improvements, not just criticisms
- Celebrate successes

### Be Patient

- Maintainers are volunteers
- Complex changes take time to review
- Not all suggestions can be accepted

## Recognition

Contributors are recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Special thanks in documentation

## Getting Help

Stuck? Need help?

- Open a [GitHub Discussion](https://github.com/hud-code/blinqr-firmware/discussions)
- Check existing issues for similar problems
- Read through the documentation

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

Thank you for helping make BlinQR better! 🎉

