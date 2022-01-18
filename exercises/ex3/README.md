# Exercise 3 - Add Translated UI Texts

In this very short exercise, you will add UI texts to the resource files which were created initially from the template.

This exercise is not related to TypeScript and also not required to continue the next steps of this tutorial. But without this step, some UI parts are not properly labeled.

## Exercise 3.1 Add Texts to `i18n` Files

1.	In the files `src/i18n/i18n.properties` and `src/i18n/i18n_en.properties`, remove the last line (the one starting with `btn_text` - you have removed the button where this text was used) and add the following lines:

	```
	title=Incidence Overview
	incidenceLabel=Incidence
	```

	The first two lines in the file are not used in the user interface of the app, but in `manifest.json` where they could be used by environments offering this application, e.g. the SAP Fiori Launchpad. You can adapt those two texts, but in this tutorial they will never be displayed.


2.	In the file `src/i18n/i18n_de.properties`, remove the last line (the one starting with `btn_text`) and add the following lines:

	```
	title=Inzidenzübersicht
	incidenceLabel=Inzidenz
	```

	You could provide more languages in additional files which contain the respective locale code in their name.

To launch the application in a different language to test these changes, you can add a URL parameter, e.g. `?sap-ui-language=de` for German.

## Summary

You've now provided all needed UI texts in two languages and the base "developer language".

Continue to - [Exercise 4 - Enhance the User Interface and Use Formatters](../ex4/README.md)
