# Exercise 1 - Create And Run Your Application

In this exercise, you will create a UI5 TypeScript application from scratch and run it.

## Exercise 1.1 - Create Your Application With Yeoman

The first step is using the UI5 TypeScript application template available within the Easy UI5 Generator. Inside an (empty) directory of your choice, enter this command into the console:

```sh
yo easy-ui5 SAP-samples/ui5-typescript-tutorial
```

> :information_source: To keep this tutorial stable, a frozen copy of the official generator for UI5 TypeScript applications is used. The official generator continuously evolves and we don't want to keep updating this tutorial. With Easy UI5 Generator `3.6.2` it is possible to fetch a generator directly from a GitHub repository. This ensures a stable baseline for the tutorial. When starting new productive projects, it is highly recommended to use the official generator via: `yo easy-ui5 ts-app`.

Now Yeoman will ask you several questions necessary to create your application. The questions and recommended answers (just press `Enter` to confirm the defaults) are:

```sh
? Enter your application id (namespace)? com.myorg.myapp
? Which framework do you want to use? OpenUI5
? Which framework version do you want to use? 1.131.1
? Who is the author of the application? <Your Name>
? Would you like to create a new directory for the application? Yes
? Would you like to initialize a local git repository for the application? Yes
```

After answering all questions, Yeoman runs `npm install` in the application directory. This can take a while.

## Exercise 1.2 - Open Your Application and Understand its Structure

Switch into the new folder `com.myorg.myapp` and open this folder in the editor of your choice (e.g. [Visual Studio Code](https://code.visualstudio.com/)).

```sh
cd com.myorg.myapp
code .
```

> :warning: **Remark:** make sure to open the folder `com.myorg.myapp` in the editor, not the folder above! Otherwise there may be e.g. errors indicating that `tsconfig.json` was not found!

In the project root of the UI5 TypeScript application you will find `package.json` and `ui5.yaml` which indicates that this is a UI5 application project and the `tsconfig.json` file, which contains the configuration for the TypeScript compiler.

In the `webapp` folder, instead of a `Component.js`, you will find a TypeScript file named `Component.ts` next to the manifest, which is the main component of the application. As usual, the controllers are - also `*.ts` files - in the `controller` subfolder:

```sh
project-root
\- webapp
   \- controller
   \- [...]
   \- test
      \- integration
      \- unit
      \- [...]
   \- view
   \- Component.ts
   \- index-cdn.html
   \- index.html
   \- manifest.json
\- [...]
\- package.json
\- README.md
\- tsconfig.json
\- ui5.yaml
```

Because `index.html` references the UI5 framework via relative local URL, which is served by the UI5 development server (i.e. many single files are loaded, which affects performance), you can use `index-cdn.html` for pure application development. This file loads UI5 from the global content delivery network.

> :tada: **NEW**: The TypeScript transpilation now happens on-the-fly within the UI5 development server (done by the [`ui5-tooling-transpile-middleware`](https://www.npmjs.com/package/ui5-tooling-transpile), which is configured in `ui5.yaml`), hence the applications sources can be maintained directly in the `webapp` folder despite the need to transform them before being served to the browser. This middleware not only transpiles TypeScript to JavaScript, but also modern JavaScript syntax using ES6 classes and modules to the respective UI5 APIs needed by the UI5 runtime (`SomeClass.extend(...)` to define classes and `sap.ui.define(...)`/`sap.ui.require(...)` to load dependencies). This transformation is done by the [`babel-plugin-transform-modules-ui5`](https://github.com/ui5-community/babel-plugin-transform-modules-ui5) package. `ui5-tooling-transpile` has been provided in the second half of 2022.

> :tada: **NEW**: The template now also contains the setup for unit tests (QUnit) and integration tests (OPA) (since June 2023).

> :tada: **NEW**: It is not visible here, as we are using the `@types/openui5` type definitions, but when choosing SAPUI5 as framework, you will see that those type definitions have been renamed from `@sapui5/ts-types-esm` to `@sapui5/types` with version 1.113 (April 2023). Same for `@openui5/ts-types-esm` -> `@openui5/types`.

> :tada: **NEW**: In [`Component.ts`](./com.myorg.myapp/webapp/Component.ts) you can see that using the `sap.ui.Device` object now works as one would expect, by importing it with `import Device from "sap/ui/Device";` and accessing the members on the imported object like `Device.support.touch`. This is implemented since version 1.115.0 (June 2023).

More details about the project, the project structure and how to use this project can be found in the project root in the `README.md` file.

## Exercise 1.3 - Running Your Project

To get an impression of the initial application, just run it with the following command (executed within the `com.myorg.myapp` directory):

```sh
npm start
```

This runs the UI5 development server, which internally transpiles the TypeScript sources to JavaScript on-the-fly when served to the browser via the [`ui5-tooling-transpile`](https://www.npmjs.com/package/ui5-tooling-transpile) tooling extension.

The `npm start` script above opens your default browser to run the application. While the development server is running you can now modify the application code in your editor and directly see the changes once you saved them. This happens because the UI5 application project makes use of the [`ui5-middleware-livereload`](https://www.npmjs.com/package/ui5-middleware-livereload) which triggers a reload of the browser window whenever resources have been changed.

For a faster reload performance, you can open [http://localhost:8080/index-cdn.html](http://localhost:8080/index-cdn.html) instead of the `index.html` file opened by default. This HTML page loads the bundled resources of the UI5 framework from CDN instead of loading the development sources from the local dependencies.

As long as you do not stop the `npm start` script (and unless `ui5.yaml` has been modified or dependencies have been added in the `package.json`, which requires a restart), you will automatically see the updated app after doing the subsequent exercises.

## Exercise 1.4 - (OPTIONAL) Running the Tests

The project already contains basic tests and has the "Karma" test runner set up, so you can conveniently launch the tests (unit and integration tests) by executing the following terminal command:

```sh
npm run karma
```

This will open a browser window and you can actually see what the OPA test is doing. For centrally-running integration tests, the `karma-ci` script is suited better as it runs a headless browser (no user interface). To additionally measure code coverage, you can run `npm run karma-ci-cov`. The coverage results are collected in the newly created `coverage` folder. In its `report-html` subfolder there is a nicely presented HTML report (you can e.g. just drag&drop the `index.html` file from there to your browser).

In addition to the tests, linting for the TypeScript code is set up - configured in `.eslintrc.js`. You can execute it with:

```sh
npm run lint
```

Finally, you can do everything - linting and headless testing with code coverage - by running:

```sh
npm test
```

## Summary

Congratulations, you have created a UI5 application project using TypeScript from scratch and learned how the overall application structure looks and how the TypeScript-to-JavaScript transpilation works under the hood. You can now gather your first coding experience with UI5 and TypeScript. Let's go ahead and start developing the application further.

Continue to - [Exercise 2 - Create the Initial User Interface and Load Data](../ex2/README.md)
