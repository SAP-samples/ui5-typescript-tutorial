# Exercise 1 - Create And Run Your Application

In this exercise, we will create a UI5 TypeScript application from scratch and run it.

## Exercise 1.1 - Create Your Application With Yeoman

The first step is using the UI5 TypeScript application template available within the Easy UI5 Generator:

```sh
yo easy-ui5 ts-app
```

Now Yeoman will ask you several questions necessary to create your application:

```
? How do you want to name this application? myapp
? Which namespace do you want to use? com.myorg
? Which framework do you want to use? OpenUI5
? Which framework version do you want to use? 1.103.0
? Who is the author of the application? <Your Name>
? Would you like to create a new directory for the application? Yes
```

After answering all questions (just press `Enter` to confirm the defaults), Yeoman runs `npm install` in the application directory. Once completed you can switch into the directory `com.myorg.myapp`.

> `yo easy-ui5 ts-app` may cause an error to download and install the `ts-app` template on Macs. In this case, a similar error like this can appear:
>
> ```sh
> Error: EACCES: permission denied, mkdir '/path/to/project/ProjectName'
> at Error (native)
> at Object.fs.mkdirSync (fs.js:799:18)
> ...
> ```
>
> The issue appears as your global `node_modules` folder is located in your `usr/local/lib` folder for which owner permissions are needed to create/modify/delete files or folders. To overcome this issue run `chmod ugo+rwx /usr/local/lib/node_modules/generator-easy-ui5/plugin-generators` to ensure write permissions are granted.

> `npm install` may cause an error in finding dependencies. In this case, a similar error like this can appear:
>
> ```sh
> npm ERR! code ETARGET
> npm ERR! notarget No matching version found for @typescript-eslint/eslint-plugin@^5.6.0.
> npm ERR! notarget In most cases you or one of your dependencies are requesting
> npm ERR! notarget a package version that doesn't exist.
> ```
>
> Just switch into the application directory and re-run `npm install`.

## Exercise 1.2 - Open Your Application

Switch into new folder `com.myorg.myapp` and open the editor of your choice (e.g. [Visual Studio Code](https://code.visualstudio.com/)).

> **REMARK**: make sure to open the folder `com.myorg.myapp` in the editor, not the folder above! Otherwise there may be errors indicating that `tsconfig.json` was not found!

In the project root of the UI5 TypeScript application you will find the `package.json` and `ui5.yaml` which indicate that this is a UI5 application project. Compared to the classic UI5 application projects, the characteristic of the UI5 TypeScript application project is that the sources can be found in the `src` folder instead of the `webapp` folder. Instead of a `Component.js` you will find a `Component.ts` next to the manifest:

```sh
project-root
\- src
   \- [...]
   \- Component.ts
   \- index.html
   \- manifest.json
\- [...]
\- package.json
\- README.md
\- ui5.yaml
```

More details about the project, the project structure and how to use this project can be found in the project root in the `README.md` file.

## Exercise 1.3 - Running Your Project

To get an impression about the project and what it finally provides, just run your project in the development mode with the following command (executed within the `com.myorg.myapp` directory):

```sh
npm start
```

This runs Babel in watch mode which transpiles and copies the sources from `src` to `webapp` folder. On top of the `webapp` folder, the UI5 tooling is running the development server to serve the application resources.

Finally, it opens your default browser which runs the application. While the application is running you can now modify the application in your editor and directly see the changes once you saved them. This happens because the UI5 application project makes use of the [`ui5-middleware-livereload`](https://www.npmjs.com/package/ui5-middleware-livereload) which triggers a reload of the browser window whenever resources have been changed.

As long as you do not stop this `npm start` script, you will automatically see the updated app after doing the subsequent exercises.

## Summary

Congratulations, you have created your first UI5 application project using TypeScript from scratch and can now gather your first experience with UI5 and TypeScript. Let's go ahead and start developing the application further.

Continue to - [Exercise 2 - Create the Initial User Interface and set up Routing](../ex2/README.md)
