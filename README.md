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

Bootstrap:

```bash
yarn install
```

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

I've had to put in a workaround on the jest config for the CRA project so that .tsx files can be tested. Doing this breaks a root "jest projects" based configuration, so we are forced to run backend and frontend tests separately.
