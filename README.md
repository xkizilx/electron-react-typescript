# electron-react-typescript-redux

### A Boilerplate for an Easy Start with TypeScript, React, Redux and Electron.

[![React](docs/img/react.png)](https://reactjs.org/)
[![Webpack](docs/img/webpack.png)](https://webpack.js.org/)
[![TypeScript](docs/img/ts.png)](https://www.typescriptlang.org/)
[![Electron](docs/img/electron.png)](https://electronjs.org/)
[![Redux](docs/img/redux.png)](https://redux.js.org/)
[![Jest](docs/img/jest.png)](https://facebook.github.io/jest/)

[Electron](https://electronjs.org/) application boilerplate based on [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [Webpack](https://webpack.js.org/) for rapid application development using [TypeScript](https://www.typescriptlang.org/).

## Install
Clone the repository with Git:

```bash
git clone git@github.com:xkizilx/electron-react-typescript-redux.git <your-project-name>
```

And then install the dependencies:

```bash
cd <your-project-name>
yarn install
```

## Usage
Both processes have to be started **simultaneously** in different console tabs:

```bash
yarn start-react
yarn start-electron
```

This will start the application with hot-reload so you can instantly start developing your application.

You can also run do the following to start both in a single process:

```bash
yarn start
```

## Packaging
We use [Electron builder](https://www.electron.build/) to build and package the application. By default you can run the following to package for your current platform:

```bash
yarn dist
```

This will create a installer for your platform in the `releases` folder.

You can make builds for specific platforms (or multiple platforms) by using the options found [here](https://www.electron.build/cli). E.g. building for all platforms (Windows, Mac, Linux):

```bash
yarn dist -- -mwl
```
