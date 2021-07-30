# Microfrontends-demo

A demo of microfrontends. This demo uses [Podium](https://podium-lib.io/), a microfrontend framework that's made and maintained by [FINN.no](https://github.com/finn-no).

## Layout

The Layout server has the single responsibility of composing microfrontends. It does so by setting up contracts between it and other microservices. One can start it with the following script:

```bash
$ npm run layout
```

## Podlets

Podlet is Podium's term for microfrontends and each one in this demo is written in Javascript. [Snowpack](https://www.snowpack.dev/) is used for development mode and it bundles for production to EcmaScript Modules (ESM) using [ESbuild](https://esbuild.github.io/).

```bash
$ npm run podlet
```

## Shared dependencies

Each podlet shares react dependencies through absolute ESM imports that are cached in the browser. They fetch both react and react-dom from [Skypack](https://www.skypack.dev/), thus reducing the bundle size considerably.
