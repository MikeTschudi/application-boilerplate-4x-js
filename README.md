# Application Boilerplate

A starter Application for building ArcGIS Online configurable applications with the ArcGIS API for JavaScript version 4.

We hope it helps :)

## Purpose

The purpose of this Boilerplate is to handle fetching and managing ArcGIS Online information used in configurable applications such as:

- Portal information
- User information
- Item data (webscene, webmap, group information, group items)
- Configured application information
- URL parameters

The boilerplate will handle fetching this information, store it, and perform setup when necessary.

## Features

This bare-bones app includes all the code you need to build an ArcGIS Online configurable application. It will save you time when:

- Making an ArcGIS Online compatible application.
- Using your ArcGIS Online webscene to power the application.
- Localizing your application in different languages.
- Capturing URL parameters and using them in your application.
- Using settings from your ArcGIS Online portal or configured application.
- Enabling your application to sign-in to ArcGIS Online using [OAuth 2.0](http://oauth.net/2/).

# Preview examples

todo: link to examples on different repo.

# Getting Started

Review the following ArcGIS.com help topics for details on Templates:

- [Writing your first application](https://developers.arcgis.com/en/javascript/jstutorials/intro_firstmap_amd.html)
*   [Make your first app](http://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-app.htm)
*   [Create apps from maps](http://doc.arcgis.com/en/arcgis-online/create-maps/create-app-templates.htm)
*   [Add configurable parameters to templates](http://doc.arcgis.com/en/arcgis-online/create-maps/configurable-templates.htm)

## Instructions

1. Download and unzip the .zip file or clone the repository.
2. Web-enable the directory.
3. Access the .html page.
4. Start writing your template!

[New to GitHub? Get started here.](https://github.com/)

## Deploying

1. To deploy this application, download the template from Portal/ArcGIS Online and unzip it.
2. Copy the unzipped folder containing the web app template files, such as index.html, to your web server. You can rename the folder to change the URL through which users will access the application. By default the URL to the app will be `http://<Your Web Server>/<app folder name>/index.html`
3. Change the portalUrl, found in config.json inside the config folder for the application, to the portalUrl for ArcGIS Online or Portal. For ArcGIS Online users, keep the default value of www.arcgis.com or specify the name of your organization.
  - ArcGIS Online Example:  `"portalUrl": location.protocol + "//" + “<your organization name>.maps.arcgis.com`
  - Portal Example where `arcgis` is the name of the Web Adaptor: `"portalUrl": location.protocol + "//" + "webadaptor.domain.com/arcgis"`
4. If you are using Portal or a local install of the ArcGIS API for JavaScript, change all references to the ArcGIS API for JavaScript in index.html to refer to your local copy of the API. Search for the references containing `"//js.arcgis.com/4.0"` and replace this portion of the reference with the url to your local install.
  - For example: `"//webadaptor.domain.com/arcgis/jsapi/jsapi"` where `arcgis` is the name of your Web Adaptor.
5. Copy a map or group ID from Portal/ArcGIS Online and replace the default web map ID in the application’s index.html page. You can now run the application on your web server or customize the application further.

> **Note:** If your application edits features in a feature service, contains secure services or web maps that aren't shared publicly, or generate requests that exceed 200 characters, you may need to set up and use a proxy page. Common situations where you may exceed the URL length are using complex polygons as input to a task or specifying a spatial reference using well-known text (WKT). For details on installing and configuring a proxy page see [Using the proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html). If you do not have an Internet connection, you will need to access and deploy the ArcGIS API for JavaScript documentation from [developers.arcgis.com](https://developers.arcgis.com/).

## Requirements

* Text or HTML editor.
* A little background with JavaScript.
* Experience with the [ArcGIS JavaScript API](http://www.esri.com/) would help.

## Resources

* [Community](https://developers.arcgis.com/en/javascript/jshelp/community.html)
* [ArcGIS for JavaScript API Resource Center](https://js.arcgis.com)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/application-boilerplate-js/master/license.txt) file.

