# Premium-minds 

🚀 Getting Started

## Installation

➤ 1. Install dependencies


```bash
npm install
```
This installs Appium, WebdriverIO, TypeScript, and all required utilities.


➤ 2. Add the Telpark simulator build

```bash
Place your iOS Simulator .app file here:
```

➤ 3. Start iOS Simulator

⚠️ Must be a simulator build (not an .ipa).

List available simulators:

```bash
xcrun simctl list devices
```

Boot one:
```bash
xcrun simctl boot "iPhone 14"
open -a Simulator
```

➤ 4. Set your environment variables

Tests read login credentials from environment variables:

```bash
export TEST_EMAIL="your-test-email"
export TEST_PASS="your-test-password"
```

➤ 5. Run the tests

```bash
npm run test:login
```

Run all tests:
```bash
npm test
```
