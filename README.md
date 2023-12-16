# Job Interview Assignment: React Native Cities and Weather App

This app is a React Native project developed as part of a job interview assignment. It focuses on demonstrating skills related to React Native development with specific assignment limitations.

## Libraries Used

The app leverages the following libraries:

- **Navigation:** Enables smooth screen transitions.
- **Redux:** Manages app state efficiently with shorthand code.
- **uuid:** Generates unique IDs, useful for keys in components like FlatList.

Please note that city data is hardcoded into the application.

## API

Weather data is obtained through HTTP requests. However, configuring the native platform must be necessary to avoid network error.

## Getting Started

Follow these steps to install and run the app:

```bash
# Using npm
npm install
npm start

# OR using Yarn
yarn
yarn start
```

## Running Tests

Tests are implemented using Jest. One test captures a snapshot of a pure component that should not be modified, while others validate the results of the search bar.

```bash
# Using npm
npm test

# OR using Yarn
yarn test
```
