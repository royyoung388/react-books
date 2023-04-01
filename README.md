# React study case

This is a React study case.

# 1. Installation

Use [create-react-app](https://github.com/facebook/create-react-app) to create react project.
> use --template to create react project with typescript

`npx create-react-app react17demo --template typescript`

# 2. Install required dependency

Copy the dependencies to overwrite `package.json`, then `npm install`.  
Library must support TypeScript, which means `@types/LibName` also should exist in `npm` and be installed.

<details>
  <summary>package.json</summary>
  <p> - 测试 测试测试</p>
  <pre><code>
{
  "name": "react-demo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.11",
    "@types/react": "^17.0.39",
    "@types/react-dom": "^17.0.11",
    "@types/react-redux": "^7.1.16",
    "@types/react-router-dom": "^5.3.3",
    "@types/redux-promise": "^0.5.29",
    "bootstrap": "^5.2.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.3.4",
    "react-scripts": "5.0.0",
    "redux": "^4.1.0",
    "sass": "^1.57.1",
    "typescript": "^4.9.4",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
    </code></pre>
</details>

> `React` version is 17  
> [`react-redux`](https://react-redux.js.org): It lets your React components read data from a Redux store, and dispatch actions to the store to update state  
> [`react-router`](https://reactrouter.com/en/main): Version 5. Navigator/Router library   
> ['sass'](https://sass-lang.com/): CSS extension language. Need to import manually to active it
> [`Bootstrap`](https://getbootstrap.com/): `npm i bootstrap` Installed as a node module to avoid import in Html `<link>`. To active bootstrap, add line `import 'bootstrap/dist/css/bootstrap.min.css';` to the top of `index.tsx`  
> `redux-promise @types/redux-promise`: redux middleware, execute async task  
> `axios`: Promise based HTTP client for the browser and node.js, used to send http request
> `Formik + Yup`: create form html + params validation


# 3. Folder Tree
- src
  - action `action type`
  - header `header/navigator of website` 
  - names `component folder` 
    - add-name `sub-component folder`
        - AddName.tsx `sub-component`
        - AddName.scss `sub-component style`
    - Names.tsx `component`
  - products `component folder`
    - ...
  - reducers `reducers folder`
    - root.reducer.tsx `root reducer`
    - names.reducer.tsx `component reducer`
    - ...
  - shared `shared resources`
    - models `Object class, like Java Bean`
      - product.model.tsx 
      - redux-state.model.tsx `redux store object`
    - appConstants.tsx `constant variables`
- App.tsx `root component`
- index.tsx `entry port of react. not a component`
- index.css

# 4. Deploy
`npm run`   
It's a scripts command configured in `package.json` created by `create-react-app`

