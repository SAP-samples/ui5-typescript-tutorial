# Exercise 0 - Get Prepared

To get started, you need to ensure that you have a recent [Node.js](https://nodejs.org/de/download) version (recommended: 18.x or 20.x) installed on your machine.

## Install Yeoman And Easy UI5

Next to [Node.js](https://nodejs.org/de/download) you need to install [Yeoman](https://yeoman.io/) and the [Easy UI5 Generator](https://github.com/SAP/generator-easy-ui5). Both NPM packages will be installed globally by entering the following command in your console:

```sh
npm install -g yo generator-easy-ui5
```

Please verify your installation to see if Yeoman has been installed correctly and the Easy UI5 Generator is available by executing the following command in your console:

```sh
yo --generators
```

Make sure that `easy-ui5` is listed.

To verify the version of the installed generator-easy-ui5 you can run the following command:

```sh
npm list -g "generator-easy-ui5"
```

> :warning: **Remark:** The version must be at least **```3.6.2```** to be able to consume the latest template from this repository available [here](https://github.com/SAP-samples/ui5-typescript-tutorial/tree/main/generator)!<br>
> When using Node.js 21.x or higher, you need at least version 3.7.0 of the Easy UI5 Generator.<br>
> For the tutorial we used the Easy UI5 Generator 3.6.2. You can also explicitly install this version via `npm install -g generator-easy-ui5@3.6.2`.

## Summary

Now that you have prepared your computer you can go ahead and create your first UI5 TypeScript application.

Continue to - [Exercise 1 - Create And Run Your Application](../ex1/README.md)
