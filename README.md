# cra-monorepo

This is a starter for a monorepo Create React App + API endpoints aimed at being deployed to the Zeit [Now 2.0](https://zeit.co/now) cloud platform.

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
now dev
```

Deployment:

```bash
now
```

## Todo

I've had to put in a workaround on the jest config for the CRA project so that .tsx files can be tested. Doing this breaks a root "jest projects" based configuration, so we are forced to run backend and frontend tests separately.
