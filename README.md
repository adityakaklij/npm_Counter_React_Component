# npm_Counter_React_Component

<p>
  This project offers a comprehensive guide to transform a React component into an npm package. It includes every step of the process, from development and testing of the React component to its final publication on the npm registry.

Whether you're a seasoned developer or just getting started, this repository will walk you through all the necessary steps to share your React component with the world as an npm package.
</p>


<h2> Follow the following steps</h2>
1. Create a React Component

2. Crete a `index.js` file at a root directory

3. Export your component in the `index.js`
```js
  export { default as Test } from './dist/your_component_name';
```

4. Update the `package.json` file

```json
  "babel": {
    "presets": [
      "@babel/preset-react"
    ]
  },

```

Use the specific version of babel/cli

```json
   "devDependencies": {
    "@babel/cli": "^7.22.9"
  }

```
for Windows
```json
  "publish:npm": "rmdir /s /q dist && mkdir dist && babel src/components -d dist --copy-files",

```

for Mac/ Linux
```json
  "publish:npm": "rm -rf dist && mkdir dist && babel src/components -d dist --copy-files",
```



After complete development


```bash
  npm run publish:npm
```

Make sure you are having a npm [account]([url](https://www.npmjs.com/)) 

```bash
  npm login
```
Enter your all details while logging


```bash
  npm publish
```
Make sure your project name is unique, else update the name from `package.json`
