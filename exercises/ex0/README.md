# Exercise 0 - Getting Started

To get started, you need to ensure that you have a recent Node.js version 12 or higher installed on your machine.

## Install Yeoman And Easy-UI5

After having a proper [Node.js](https://nodejs.org/) version installed, the next step is to install [Yeoman](https://yeoman.io/) and the [Easy UI5 Generator](https://github.com/SAP/generator-easy-ui5). Both NPM packages will be installed globally via the following command in your console:

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
npm info generator-easy-ui5 version
```

:warning:  The version must be at least **```3.5.0```** to be able to consume the latest template from this repository available [here](https://github.com/SAP-samples/ui5-typescript-tutorial/tree/main_2022/generator)!

> **Remark:**
> For the tutorial we used the Easy UI5 Generator 3.5.0. You can also explicitly install this version via `npm install -g generator-easy-ui5@3.5.0`.

## Summary

Now that you have prepared your workstation we can go ahead and create our first UI5 TypeScript application.

Continue to - [Exercise 1 - Create And Run Your Application](../ex1/README.md)
