# Disposition tracker using nativeScript-vue

> WIP, but initial implementation tracks your current disposition, taking in a short description of that disposition and the context in which you're so disposed, adding a timestamp and saving it to a sqlite db. The goal is to eventually have the app randomly poll you for a disposition and context. Through that random sampling, the hope is that you'll get an accurate picture of what produces positive dispositions. An underlying assumption is that we don't usually know what creates positive dispositions, and that we're often wrong about what makes us happy.

# Status
We've paused development on this to work on a different app elsewhere; that app is a PWA, and I  think whenever we return to this, it'll be done as a PWA and not with NativeScript.

## Usage

CLI:
```
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```
native-script also has a cool app for the GUI-lovers: https://www.nativescript.org/nativescript-sidekick
