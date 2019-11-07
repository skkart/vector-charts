# vector-charts
***A light-weight D3-based reusable chart library.***


**Timeseries Charts**
* Line Chart - [Demo](https://jsfiddle.net/46jtemnd/2/)
* Area Chart - [Demo](https://jsfiddle.net/46jtemnd/3/)
* Line + Area Chart - [Demo](https://jsfiddle.net/38q9n1vx/)
* Stacked Area Chart - [Demo](https://jsfiddle.net/46jtemnd/4/)
* Line + Stacked Area Chart - [Demo](https://jsfiddle.net/1scrhgb8/)

**Pieseries Charts**
* Pie Chart - [Demo](https://jsfiddle.net/46jtemnd/5/)
* Donut Chart - [Demo](https://jsfiddle.net/46jtemnd/6/)

**Barseries Charts**
* Bar Chart - [Demo](https://jsfiddle.net/46jtemnd/8/)
* Multi series Bar Chart - [Demo](https://jsfiddle.net/46jtemnd/7/)



## Quick Start
* Install with npm:``` npm install vector-charts```
* Install with yarn:``` yarn add vector-charts```
* Clone the repo: git clone https://github.com/skkart/vector-charts.git

The released bundle supports anonymous AMD, CommonJS, and vanilla environments. 
For example:
Simply add the vector-charts assets to your project and include them in your HTML.\
```
<link rel="stylesheet" type="text/css" href="vector-charts.css">
<script src="vector-charts.js"></script>

```
Note: Prefer minified assets (.min) for production.

D3 is written using ES2015 modules. Create a custom bundle using Rollup, Webpack, or your preferred bundler. \
To import D3 into an ES2015 application, either import specific symbols from specific D3 modules:\
```
import {plotChart} from "vector-charts"; // To import specific module

import * as vc from "vector-charts"; // Import everything into a namespace (here, vc):

```

## Dependencies
vector-charts uses d3.js V5 and later versions. \
Please check package.json for the various d3 packages imported by vector-charts.


## Supported Browsers
Recommended that you upgrade to the latest version of one of the below-listed browsers
- Google Chrome
- Opera
- Safari
- Firefox
- Microsoft Edge

## How to build
Clone the repo.\
Run ```yarn install``` -- Download all project dependencies.\
Run ```yarn build``` -- Production mode, the compiled code will be in the dist folder.\
Run ```yarn dev``` -- Development mode\
Run ```yarn start``` -- Start server on example folder to check the chart samples (timeseries.html, Pieseries.html, Barseries.html)

