# Typescript and Vue Example, Using Webpack via Laravel Mix

This demo uses Laravel Mix as a wrapper around Webpack. Only a little extra configuration is required in `webpack.mix.js` to use TypeScript. Also, with its help I usually include Browsersync with very little effort.

## Install and Run

Run `npm install` to install. Then use `npm run watch` to run the build process, and Browsersync will open this demo in a new browser tab.

## Use Typescript Right from the Beginning

You can see in `webpack.mix.js` that a TypeScript file `app-with-ts-all-the-way-through.ts` is defined as one entry point. With basic configuration in place (see below) there is no more preparation needed.

## How to Use Typescript Progressively in an Existing Project

`webpack.mix.js` also includes a directive to use an existing `*.js` file as an entry point. Imagine we are going to introduce TypeScript only in new Vue components or migrate one at a time. This is where a little extra Webpack configuration is needed, and you find it in `webpack.mix.js` along with helpful comments.

## Basic Setup for TypeScript

Please note the files `tsconfig.json` and `resources/vue-shims.d.ts`.

In `tsconfig.json`, among other things, we define the files that TypeScript is responsible to process. Also we define how module imports inside TypeScript files are handled. This applies to when we import Vue in the Single File Component.

## The Vue Single File Component

There are three things to consider regarding setup:

- set the lang attribute for the script section
- import Vue
- export not just some object, but use `Vue.extend()` to get access to Vue's type definitions

Then please note the type definitions for the method arguments. This example shows how we can make sure to process a number, although an input field provides a string.
