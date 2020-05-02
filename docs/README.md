# vector-charts
***A light-weigth reusable charting library based on D3.js v5.***

[Link to another page](./examples/Timeseries.html)
[Link to Test page](./examples/New.html)

**Timeseries Charts**
* Line Chart - [Demo](./examples/line.html)
* Area Chart - [Demo](./examples/area.html)
* Line + Area Chart - [Demo](./examples/line-area.html)
* Stacked Area Chart - [Demo](./examples/stacked-area.html)
* Line + Stacked Area Chart - [Demo](./examples/line-stacked-area.html)

**Pieseries Charts**
* Pie Chart - [Demo](https://jsfiddle.net/46jtemnd/5/)
* Donut Chart - [Demo](https://jsfiddle.net/46jtemnd/6/)

**Barseries Charts**
* Bar Chart - [Demo](https://jsfiddle.net/46jtemnd/8/)
* Multi series Bar Chart - [Demo](https://jsfiddle.net/46jtemnd/7/)



## Quick Start
Vector-charts is written in ES6, uses yarn package manager and built with webpack.
The released bundle supports AMD, CommonJS, and vanilla environments.
Usage example:
* Simply add the vector-charts assets to your project and include them in your HTML.
```js
<!--Include CSS for Vector-charts -->
<link rel="stylesheet" type="text/css" href="vector-charts.css">


<!--Include Vector-charts - whole bundle, imports all Charts by default -->
<script src="vector-charts.min.js"></script>  
          
<!-- Include Vector-charts on demand - lazy bundle, imports required Charts based on demand and usage -->         
<script src="vector-charts-lazy.min.js"></script>

``` 

* You can create a custom bundle using webpack or your preferred bundler and import the vector-charts
in your application as shown below:
```js
import * as vc from "vector-charts"; // Import everything into a namespace (here, vc):

import {plotChart} from "vector-charts"; // To import specific module

```

## Dependencies
Imports only few modules of D3.js in vector-charts and not the entrie D3.js modules.
Please check package.json for the various d3 packages dependencies imported.
Requires **D3.js ^5.0.0** - Greater than V5 version.


## How to build
* Run ```yarn install``` -- Download all project dependencies.
* Run ```yarn build``` -- Production mode, the compiled code will be in the dist folder.
* Run ```yarn start``` -- Start server on example folder to check the chart samples (open Usage.html for chart links)


## Supported Browsers
Recommended that you upgrade to the latest version of one of the below-listed browsers
- Google Chrome
- Opera
- Safari
- Firefox
- Microsoft Edge


## License
[MIT](LICENSE)

Copyright (c) 2019 Karthik S

