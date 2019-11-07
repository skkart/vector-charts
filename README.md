# vector-charts
***A light-weight D3-based reusable chart library.***


**Timeseries Charts**
* Line Chart
* Area Chart
* Line + Area Chart
* Stacked Area Chart
* Line + Stacked Area Chart

**Pieseries Charts**
* Pie Chart
* Donut Chart

**Barseries Charts**
* Bar Chart
* Multi series Bar Chart



## Quick Start
* Install with npm:``` npm install vector-charts```
* Install with yarn:``` yarn add vector-charts```
* Clone the repo: git clone https://github.com/skkart/vector-charts.git

The released bundle supports anonymous AMD, CommonJS, and vanilla environments. 
For example:
Simply add the vector-charts assets to your project and include them in your HTML.
```
<link rel="stylesheet" type="text/css" href="vector-charts.css">
<script src="vector-charts.js"></script>

```
Note: Prefer minified assets (.min) for production.

D3 is written using ES2015 modules. Create a custom bundle using Rollup, Webpack, or your preferred bundler. 
To import D3 into an ES2015 application, either import specific symbols from specific D3 modules:
```
import {plotChart} from "vector-charts"; // To import specific module

import * as vc from "vector-charts"; // Import everything into a namespace (here, vc):

```

## Dependencies
vector-charts uses d3.js V5 and later versions. 
Please check package.json for the various d3 packages imported by vector-charts.


## Supported Browsers
Recommended that you upgrade to the latest version of one of the below-listed browsers
- Google Chrome
- Opera
- Safari
- Firefox
- Microsoft Edge

