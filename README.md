# cra-monorepo

This repository is an example of how you can set up a Zeit [Now 2.0](https://zeit.co/now) monorepo containing the following:

- Yarn + Yarn workspaces
- Create React App based frontend
- Node based lambdas
- Fully TypeScript'ed

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

- The ability to import modules outside of the scope of the CRA project. This allows me to more easily share code between the front and backend.
- React Hot Loader support

## Workarounds

I've had to include a few workarounds/hacks as a temporary measure due to some limitations of `now dev`. To be fair `now dev` is still in beta, so I suspect that these "issues" will eventually be addressed. Moving over to native `now dev` support, when the features do eventually land, should be trivial.

Unfortunately the current `now dev` doesn't support proxying of websockets. This is a bummer as the hot loading feature requires this. As a temporary measure I have configured the monorepo development to do the following:

1. Use `now dev` to run the Node lambdas only

   To do this I have dropped in a minimal `now.json` directly into the `node/` subfolder. This allows me to target this configuration specifically.

   I have then added a script within the root `package.json` to allow me to target `now dev` at this subfolder, changing it to run on port 3001, so it doesn't class with the dev server I will run for CRA.

2. Run the CRA dev server directly, proxying to the Node lambdas

   I have configured the "proxy" setting within the CRA `package.json` to point to the `now dev` endpoint that gets run for the Node lambdas.

We still need the root `now.json` to contain the full configuration for both the Node lambdas and the CRA app.
