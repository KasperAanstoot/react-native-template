# React Native + Expo Router Starter

A batteries-included React Native template that pairs [Expo Router](https://expo.github.io/router/) with
[React Native Paper](https://callstack.github.io/react-native-paper/) and the
[React Navigation drawer navigator](https://reactnavigation.org/docs/drawer-navigator).

The project is ready to run with Expo and demonstrates how to share a unified theme between Paper components and the
navigation drawer.

## Features

- Expo Router file-system routing with a Drawer navigator layout.
- Material Design 3 UI primitives via React Native Paper.
- Unified theming between React Native Paper and React Navigation with a system/light/dark preference toggle.
- Modern JavaScript, ESLint, and sensible defaults to get productive quickly.

## Getting started

```bash
npm install
npm run start
```

Expo CLI will guide you through opening the project on iOS, Android, or the web.

## Project structure

```text
app/
  _layout.jsx                # Wraps the app with theming providers
  (drawer)/_layout.jsx       # Configures the drawer navigator
  (drawer)/index.jsx         # Example home screen with Paper components
  (drawer)/settings.jsx      # Theme preference controls
  (drawer)/about.jsx         # Shows template resources
src/
  components/Screen.jsx      # Convenience wrapper with SafeAreaView
  providers/ThemeProvider.jsx# Syncs Paper + Navigation themes
```

Replace the placeholder assets in `assets/` with your own icons and splash screens before releasing your app.

## Customization ideas

- Add new routes by creating files inside `app/(drawer)` or by nesting additional layouts.
- Connect your favorite data fetching, state management, and testing libraries.
- Configure CI/CD workflows using Expo Application Services.

Happy shipping!
