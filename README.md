# Expressy

Sample project using NodeJS, Express & TypeScript.

## Usage
1. `npm install` to install all the dependencies (`node_modules` will be created and filled with downloaded dependencies).
    - (!) Only required the very first time, after cloning this repository.
2. `npm run app` (the `app` script is configured in `package.json` and executes commands `tsc main.ts` and `node main.js`)
    - This command will first compile all TypeScript `.ts` files to JavaScript `.js` files.
    - Then, it will start up the Express backend by executing `node main.js`.

## Useful resources
- TypeScript, Node, Express, Mongoose Starter template: https://github.com/microsoft/TypeScript-Node-Starter
- Express route handlers using Async / Await (when communicating to the DB, to external services,...): https://zellwk.com/blog/async-await-express/ (includes how to deal with errors when working async.)

## How the setup was done
This is just informational, should you want to generate a similar setup from scratch.

1. `npm init` to generate the `package.json` file.
2. `npm install express --save` to install Express.
3. `npm install typescript --save-dev` to install TypeScript (as a dev dependency).
4. `npm install @types/express` to install the type(script) definitions of Express.
