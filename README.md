# cra-monorepo

This is a starter for a Zeit [Now 2.0](https://zeit.co/now) based monorepo containing a Create React App frontend + Node lambda based backend.

Example deployment: https://cra-monorepo.ctrlplusb.now.sh/

## Features

- Yarn
- Backend: Node lambdas
- Frontend: Create React App with React Fast Refresh and Storybook
- Shared code between frontend and backend
- Fully TypeScript'ed with same TSConfig across entire codebase
- Consistent ESLint with Typescript parser across entire codebase
- Run Jest from the root
- Prettier configuration

## Recommendations

Highly recommend using VSCode with the Prettier plugin. 🥰

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

Lint:

```bash
yarn lint
```

Storybook:

```bash
yarn storybook
```

Test:

```bash
yarn test
```
