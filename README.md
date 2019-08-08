# cra-monorepo

This is a starter for a Zeit [Now 2.0](https://zeit.co/now) based monorepo containing a Create React App frontend + Node lambda based backend.

Example deployment: https://cra-monorepo.ctrlplusb.now.sh/

## Features

- Yarn + Yarn workspaces
- Create React App
- React Hot Loader
- Fully TypeScript'ed
- ESLint with Typescript parser
- Jest
- Storybook

## Getting started

```bash
git clone https://github.com/ctrlplusb/cra-monorepo
cd cra-monorepo
yarn install
```

## Commands

Development:

```bash
yarn start
```

Deployment:

```bash
yarn deploy
```

Storybook:

```bash
yarn storybook
```

Test backend:

```bash
yarn test:backend
```

Test frontend:

```bash
yarn test:frontend
```

## Todo

I've had to put in a workaround on the jest config for the CRA project so that .tsx files can be tested. This workaround involves providing a `globals` configuration to the CRA jest config.

Whilst this fixes the test run for CRA component tests it breaks a root [jest projects](https://jestjs.io/docs/en/configuration#projects-array-string-projectconfig) configuration. Therefore we are forced to run backend and frontend tests separately.
