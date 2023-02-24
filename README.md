# excel-col-converter
## English | [中文](https://github.com/tuutoo/excel-col-converter/blob/main/README.zh-CN.md)

This tool is built to convert excel column name and number back and force.

# Preview
https://excel-col-converter.vercel.app/
https://excel-col-converter.netlify.app/

# Features
 -  Convert excel column name and number back and force
 -  Single or Multiple lines supported
 -  Light/Dark Mode
 -  Mobile friendly
 -  Support Docker
 -  Easy deploy to Netlify with a config file.

# Technology used
 -  Vue3 (UI library - Naive UI)
 -  Eslint + prettier.
 -  Husky + commitlint.
 -  Unplugin auto import.
 -  Iconify icon，support custom svg icons.
 -  Unocss.

# Project Setup

```sh
pnpm install
```

# Compile and Hot-Reload for Development

```sh
pnpm run dev
```

# Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

# Generate Docker image
```sh
# Build docker image
# replace [tuutoo] with your repository name
docker build -t [tuutoo]/xl-col-converter:v2.2.0 -t [tuutoo]/xl-col-converter:latest .

# Run docker locally to test
docker run -p 80:80 -it --name xl-col-converter tuutoo/xl-col-converter

# Push your docker image to docker.io
docker push tuutoo/xl-col-converter:latest
The push refers to repository [docker.io/tuutoo/xl-col-converter]
cf4b0083cda3: Pushed
a3592b80e453: Pushed
7fbf7f6957d5: Pushed
7ef61094715c: Pushed
98e71313b6c2: Pushed
78bf1b847806: Pushed
d58d318d37eb: Pushed
aa5968d388b8: Pushed
latest: digest: sha256:31e603b8d999d745a2038f53e3e042a76ad04eeb8f6cc7d841ae34fca50fe416 size: 1985
```
Navigate to http://localhost to test

Or you can use this docker image directly:
```sh
docker run -itd --name xl-col-converter \
-p 1253:80 \
tuutoo/xl-col-converter
```

# Deploy App to Vercel/Netlify
 1. Fork this repo
 1. Register a Vercel/Netlify account
 1. Create a new project on Vercel/Netlify
 1. Connect to your repo and it will auto deploy
 1. Done
