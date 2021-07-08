# Microfrontends-demo

A demo of a microfrontends. This demo uses Podium as a microfrontend framework, it's made and maintained by FINN.no.

## Layout
The Layout server has the single responsibility of composing microfrontends. One can start it with the following script:
```bash
$ npm start
```

## Podlets
Podlet is Podium's term for microfrontends and each one in this demo is written in Javascript. Snowpack is used for development mode and it bundles for production to EcmaScript Modules (ESM) using ESbuild.
```bash
$ npm run podlet
```

## Shared dependencies.
Each podlet shares react dependencies through caching in the browser and fetches both react and react-dom from Skypack, thus reducing the bundle size considerably.
