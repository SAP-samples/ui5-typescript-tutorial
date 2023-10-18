# ui5-typescript-tutorial - Learn App Development in UI5 with TypeScript

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/ui5-typescript-tutorial)](https://api.reuse.software/info/github.com/SAP-samples/ui5-typescript-tutorial)

Updated 2023 tutorial for writing UI5 apps in TypeScript. A 100-minute video walkthrough of this tutorial can be fount on [YouTube](https://www.youtube.com/watch?v=CRKNIiXZN6U).

## Overview

This brief (~2 hours) tutorial introduces developers to *using TypeScript for UI5 application development*. It is a TypeScript introduction, not a UI5 introduction. The tutorial includes:
- Creating a basic application from the TypeScript template using the ["Easy UI5"](https://github.com/SAP/generator-easy-ui5) generator,
- TypeScript coding in regular UI controllers,
- Testing

as well as advanced topics like
- Custom control development and 
- Using third-party libraries

> This tutorial is **NOT** meant to create an impressive shiny app, but to teach the most important practical TypeScript knowledge with the least possible coding effort.<br>
You learn way *more* than in the [original 2022 tutorial](https://github.com/SAP-samples/ui5-typescript-tutorial/tree/main_2022) in probably *less* time with *far less* coding. The resulting app, however, is hence also far less impressive than the one resulting from the previous tutorial. Just to have expectations managed.

Significant changes/improvements regarding UI5's TypeScript support since the summer 2022 version of this tutorial are explicitly marked with: :tada: **NEW**.

The developed app simply displays the current weather for the location entered by the user. To do so, it uses the free weather service [Open Meteo](https://open-meteo.com) and [OpenStreetMap's "Nominatim" geolocation service](https://nominatim.openstreetmap.org/ui/about.html).

[These slides](https://sap-samples.github.io/ui5-typescript-tutorial/resources/2023-07-06_UI5con-TypeScript-Workshop.pdf) were used at UI5con 2023 to give a short intro on TypeScript and the UI5 setup for using it.

## Requirements

### Technical Requirements

* A current version of [Node.js](https://nodejs.org/) (preferably 18.x)
* A code editor supporting TypeScript development (preferably the free [Microsoft Visual Studio Code](https://code.visualstudio.com/), as it was used to create the tutorial)

### Required Knowledge

* You need some Javascript knowledge to avoid blind copy&paste without knowing what's going on.
* You should have some UI5 knowledge, as this tutorial focuses on the TypeScript side of things.
* TypeScript knowledge is *not* required. If interested, having a quick look e.g. at [this brief TypeScript intro for JavaScript developers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) lets you know what to expect.

## Exercises - Get Started!

The tutorial consists of the following exercises. To start, just [open the first link](exercises/ex0/) - you will be guided from there.

From this list, you can not only access each exercise directly, but also also browse the resulting sources and run the resulting app:
* [Exercise 0 - Get Prepared](exercises/ex0/)
* [Exercise 1 - Create And Run Your Application](exercises/ex1/) (*[browse sources](exercises/ex1/com.myorg.myapp) - [run app](https://sap-samples.github.io/ui5-typescript-tutorial/exercises/ex1/)*)
* [Exercise 2 - Create the Initial User Interface and Load Data](exercises/ex2/) (*[browse sources](exercises/ex2/com.myorg.myapp) - [run app](https://sap-samples.github.io/ui5-typescript-tutorial/exercises/ex2/)*)
* [Exercise 3 - React on User Input](exercises/ex3/) (*[browse sources](exercises/ex3/com.myorg.myapp) - [run app](https://sap-samples.github.io/ui5-typescript-tutorial/exercises/ex3/)*)
* [Exercise 4 - Use Third-Party NPM Packages](exercises/ex4/) (*[browse sources](exercises/ex4/com.myorg.myapp) - [run app](https://sap-samples.github.io/ui5-typescript-tutorial/exercises/ex4/)*)
* [Exercise 5 - Create and Use a Custom Control](exercises/ex5/) (*[browse sources](exercises/ex5/com.myorg.myapp) - [run app](https://sap-samples.github.io/ui5-typescript-tutorial/exercises/ex5/)*)
* [Exercise 6 - Testing](exercises/ex6/) (*[browse sources](exercises/ex6/com.myorg.myapp) - [run app](https://sap-samples.github.io/ui5-typescript-tutorial/exercises/ex6/)*)

If you want to download the code for all the exercises, you can either [download the entire repository as zip file](https://github.com/SAP-samples/ui5-typescript-tutorial/archive/refs/heads/main.zip) and find the content in there below "ui5-typescript-tutorial-main/exercises/ex1/com.myorg.myapp" etc., or you can clone the [repository](https://github.com/SAP-samples/ui5-typescript-tutorial) using git.<br>

The resulting app after each exercise can also be [run from this page](https://sap-samples.github.io/ui5-typescript-tutorial). It includes additional links to unoptimized versions of the app, which can be used to debug the original TypeScript sources.

## References

### Used APIs

- Weather: https://open-meteo.com/
  - Sample request: https://api.open-meteo.com/v1/forecast?latitude=49.31&longitude=8.64&current_weather=true
  - Sample request with forecast: https://api.open-meteo.com/v1/forecast?latitude=49.31&longitude=8.64&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m
- Geolocation: https://nominatim.openstreetmap.org/ui/about.html

<!--  NOT USED RIGHT NOW
### Weather interpretation codes
See https://open-meteo.com/en/docs/dwd-api#weathervariables

Codes seem to be a subset of *"Present weather reported from a manned weather station"* (https://marswiki.jrc.ec.europa.eu/agri4castwiki/images/a/ad/WMO_306_VolI1_en.pdf, page 414).

Interpretation:
- 0	Clear sky
- 1, 2, 3	Mainly clear, partly cloudy, and overcast
- 45, 48	Fog and depositing rime fog
- 51, 53, 55	Drizzle: Light, moderate, and dense intensity
- 56, 57	Freezing Drizzle: Light and dense intensity
- 61, 63, 65	Rain: Slight, moderate and heavy intensity
- 66, 67	Freezing Rain: Light and heavy intensity
- 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
- 77	Snow grains
- 80, 81, 82	Rain showers: Slight, moderate, and violent
- 85, 86	Snow showers slight and heavy
- 95 *	Thunderstorm: Slight or moderate
- 96, 99 *	Thunderstorm with slight and heavy hail
-->
### Other References
- https://www.windy.com is a nice site to find locations with different wind directions

## How to obtain support

This repository is provided as-is, without any support guarantees. However, you are welcome to report issues via the [Issues](../../issues) tab and we'll see what we can do to fix them.

## License

Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
