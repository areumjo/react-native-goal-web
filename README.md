## React Native
### React Native Tutorial for Beginners - Crash Course 2019
- https://www.youtube.com/watch?v=qSRrxpdMpVc
- React.js
    - JS library for building UI
    - Typically used for Web Development
    - zReactDOM.render(...)z adds the web support
    - Platform agnostic
- React Native
    - A collection of "special" React components
    - Components compiled to Native Widgets -- iOS, Android
    - Native Platform APIs exposed to JS
    - Connects JS and Native Platform Code
    
 
### Expo
- Expo CLI/Tool
    - 3rd party service
    - managed app development
    - lots of convenince & utility features: simplifies development
    - but: you're limited to the Expo Ecosystme (can't control fine-control)
- React Native CLI
    - by react native team / community
    - bare bone development (only a basic setup)
    - full flexibility: integrate with any Native Code
- You can switch ('eject') from Expo to React Native CLI
- Install `Expo Client (App)` in native device/simulator and your app code (config) will be loaded into the Expo App
    - good for development
    - can publish apps as Expo apps
    - can also publish standalone apps
    - can also always switch to React Native CLI
- https://expo.io/learn

**Expo install**
- Download NodeJS
- Get the command line tool
    - `npm install expo-cli --global`
- Create your project
    ```bash
    expo init my-new-project
    cd my-new-project
    expo start
    ```
- Preview the project
    - open expo client on device and use it to scan the QR code printed by `expo start`
- Select your editor (VS Code)
    - React Native styling is done via JS by offering CSS-like Property names
- Run the code
    - `npm start`
