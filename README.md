# excel-col-converter
## English | [中文](https://github.com/tuutoo/excel-col-converter/blob/main/README.zh-CN.md)

This tool is built to convert excel column name and number back and force.

# Preview
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
docker build -t xl-col-converter:v2.2.0 -t xl-col-converter:latest .

# Run docker locally to test
docker run -p 80:80 -it --name xl-col-converter xl-col-converter
```
Navigate to http://localhost to test

Or you can use this docker image directly:
```sh
docker run -itd --name xl-col-converter \
-p 1253:80 \
tuutoo/xl-col-converter
```

# Deploy App to Netlify
 1. Fork this repo
 1. Register a Netlify account
 1. Create a new site on Netlify
 1. Connect to your repo and it will auto deploy
 1. Done
