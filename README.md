# cra-monorepo

This repository is an example of how you can set up a Zeit
[Now 2.0](https://zeit.co/now) monorepo containing the following:

## Features

- Yarn + Yarn workspaces
- Create React App
- Node based lambdas
- Fully TypeScript'ed
- Hot module reloading

## Getting started

To bootstrap the project and begin development run the following commands:

```bash
yarn install
yarn dev
```

To deploy:

```bash
now
```

## Create React App Notes

I have rewired the CRA configuration to include the following features:

- The ability to import modules outside of the scope of the CRA project. This
  allows me to more easily share code between the front and backend.
- React Hot Loader support
