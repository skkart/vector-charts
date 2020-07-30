(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["barseries~pieseries~timeseries"],{

/***/ "./charts/Chart.js":
/*!*************************!*\
  !*** ./charts/Chart.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/number/is-finite */ "../node_modules/babel-runtime/core-js/number/is-finite.js");
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");










var Chart = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Chart, _ChartComponent);

  function Chart(container, opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Chart);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Chart.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Chart)).call(this));

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isString"])(container) && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opts) && container.length && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opts.dataParser)) {
      _this.container = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["select"])(container);
      if (!_this.container.size()) {
        throw new Error('The graph container spectifed in options doesnt exist inside in Document Body');
      }
      opts.containerName = container;

      var containerBox = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["elementOffset"])(_this.container);

      var takeContainerWidth = false;
      if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(opts.chart.width)) {
        opts.chart.width = containerBox.width;
        takeContainerWidth = true;
      }

      var takeContainerHeight = false;
      if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(opts.chart.height)) {
        opts.chart.height = containerBox.height;
        takeContainerHeight = true;
      }

      if (opts.chart.width > opts.chart.maxWidth) {
        opts.chart.width = opts.chart.maxWidth;
      }

      if (opts.chart.width < opts.chart.minWidth) {
        opts.chart.width = opts.chart.minWidth;
      }

      _this.options = opts;

      _this.chartHeight = opts.chart.height;
      _this.chartWidth = opts.chart.width;
      _this.margin = opts.chart.margin;
      _this.chartType = opts.chart.chartType;

      if (takeContainerWidth) {
        _this.chartWidth = _this.chartWidth - (_this.margin.left + _this.margin.right);
      }

      if (takeContainerHeight) {
        _this.chartHeight = _this.chartHeight - (_this.margin.top + _this.margin.bottom);
      }

      // Attach dataProcess to chart, which generate chartData and plot Info based on JSON and options
      _this.dataParser = opts.dataParser;

      // Delete dataProcess from options
      delete _this.options.dataParser;

      _this.chartFullSpace = {
        width: _this.chartWidth + _this.margin.left + _this.margin.right,
        height: _this.chartHeight + _this.margin.top + _this.margin.bottom

        // Array which holds all the chartComponents required for the graph like axis, series, tooltip, legend etc
      };_this.chartComponentsArr = [];

      _this.svg = _this.container.select('svg');

      if (_this.svg.size() === 0) {
        // Create svg element if not exist inside chart container DIV
        _this.svg = _this.container.append('svg');
      }

      // Clear svg if it has needless content
      _this.svg.html('');

      var svgClass = 'vc-svg ' + (opts.chart.className || '');
      if (_this.options.chart.isTouchScreen) {
        svgClass += ' vc-noselect';
      }
      _this.svg.attr('width', _this.chartFullSpace.width).attr('height', _this.chartFullSpace.height).attr('class', svgClass);

      // Add defs to show plot series within the def specified width and height
      _this.svg.append('defs').append('clipPath').attr('id', 'chart_clip_' + _this.options.chart.counter).append('rect').attr('width', _this.chartWidth).attr('height', _this.chartHeight);

      // Add graphZone tag, so that all series and axis are grouped together
      _this.graphZone = _this.svg.append('g').attr('transform', 'translate(' + _this.margin.left + ',' + _this.margin.top + ')').attr('class', 'vc-graphZone');
    }
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Chart, [{
    key: 'draw',
    value: function draw() {
      console.log('Chart draw', this);
      // Draw all the chartComponents in the same order of there initilization using chartComponentsArr
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          chartCmpt.draw();
        }
      });
    }
  }, {
    key: 'update',
    value: function update() {
      this.svg.attr('width', this.chartFullSpace.width);
      this.graphZone.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
      this.svg.select('clipPath').select('rect').attr('width', this.chartWidth);

      console.log('Chart update', this);
      // Update all chart component based on new width changes
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          chartCmpt.update();
        }
      });
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      console.log('Chart showHide', this);
      showFlag = !!showFlag; // Convert any type to boolean
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          chartCmpt.showHide(showFlag);
        }
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      console.log('Chart remove', this);
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          chartCmpt.remove();
        }
      });
    }

    // chartResponsive based on screen resize is handled

  }, {
    key: 'chartResponsive',
    value: function chartResponsive() {
      var _this2 = this;

      if (this.options.chart.chartResize) {
        this.throttedResize = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["throttle"])(function (width, height) {
          if (width === _this2.chartFullSpace.width) {
            return; // Dont resize if graph is already adjusted
          }
          _this2.chartFullSpace.width = Math.floor(width);
          _this2.chartFullSpace.height = Math.floor(height);
          _this2.chartWidth = _this2.chartFullSpace.width - (_this2.margin.left + _this2.margin.right);
          _this2.chartHeight = _this2.chartFullSpace.height - (_this2.margin.top + _this2.margin.bottom);
          setTimeout(function () {
            return _this2.update();
          }, 0);
        }, 100); // 'this' Will have reference of timeSeriesChart or pieSeriesChart

        // Add resize for each chart based on chart ID namespace
        var chartId = 'vc-' + (this.options.chart.id || this.options.chart.counter);
        Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["select"])(window).on('resize.' + chartId, function () {
          return _this2.autoSizeChart();
        });
      }
    }
  }, {
    key: 'autoSizeChart',
    value: function autoSizeChart() {
      var containerBox = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["elementOffset"])(this.container);
      var resizedGraphWidth = containerBox.width;

      if (resizedGraphWidth > this.options.chart.maxWidth) {
        resizedGraphWidth = this.options.chart.maxWidth;
      }

      if (resizedGraphWidth < this.options.chart.minWidth) {
        resizedGraphWidth = this.options.chart.minWidth;
      }

      this.throttedResize(resizedGraphWidth, containerBox.height);
    }

    // Destroy all chart properties and components

  }, {
    key: 'destroy',
    value: function destroy(destroyFull) {
      destroyFull = !!destroyFull;
      // Remove resize hander on window for vcChart namespace
      if (this.options.chart.chartResize) {
        var chartId = 'vc-' + (this.options.chart.id || this.options.chart.counter);
        Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["select"])(window).on('resize.' + chartId, null);
      }

      // Remove all chartComponents (timeSeriesChart or pieSeriesChart)
      this.remove();

      // Remove svg and container if destroyFull is true
      destroyFull && this.svg.remove();
      destroyFull && this.container.remove();

      return null;
    }
  }]);

  return Chart;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./d3Importer.js":
/*!***********************!*\
  !*** ./d3Importer.js ***!
  \***********************/
/*! exports provided: scaleBand, scaleLinear, scaleTime, scaleSqrt, scaleOrdinal, axisBottom, axisTop, axisLeft, axisRight, timeFormat, schemeCategory10, interpolate, partition, hierarchy, path, select, selectAll, d3Mouse, d3Event, d3Touch, d3Touches, range, max, transpose, bisector, brushX, brushY, line, stack, area, stackOrderNone, stackOffsetNone, pie, arc, zoom, zoomTransform, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "../node_modules/d3-scale/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]; });

/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-axis */ "../node_modules/d3-axis/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisRight"]; });

/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "../node_modules/d3-time-format/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]; });

/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale-chromatic */ "../node_modules/d3-scale-chromatic/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__["schemeCategory10"]; });

/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-interpolate */ "../node_modules/d3-interpolate/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return d3_interpolate__WEBPACK_IMPORTED_MODULE_4__["interpolate"]; });

/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-hierarchy */ "../node_modules/d3-hierarchy/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return d3_hierarchy__WEBPACK_IMPORTED_MODULE_5__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return d3_hierarchy__WEBPACK_IMPORTED_MODULE_5__["hierarchy"]; });

/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-path */ "../node_modules/d3-path/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return d3_path__WEBPACK_IMPORTED_MODULE_6__["path"]; });

/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "../node_modules/d3-selection/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Mouse", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["mouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Event", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Touch", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["touch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Touches", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["touches"]; });

/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-array */ "../node_modules/d3-array/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return d3_array__WEBPACK_IMPORTED_MODULE_8__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return d3_array__WEBPACK_IMPORTED_MODULE_8__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return d3_array__WEBPACK_IMPORTED_MODULE_8__["transpose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return d3_array__WEBPACK_IMPORTED_MODULE_8__["bisector"]; });

/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-brush */ "../node_modules/d3-brush/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushX", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_9__["brushX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushY", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_9__["brushY"]; });

/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-shape */ "../node_modules/d3-shape/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_10__["line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_10__["stack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_10__["area"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_10__["stackOrderNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_10__["stackOffsetNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_10__["pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_10__["arc"]; });

/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-zoom */ "../node_modules/d3-zoom/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return d3_zoom__WEBPACK_IMPORTED_MODULE_11__["zoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return d3_zoom__WEBPACK_IMPORTED_MODULE_11__["zoomTransform"]; });

























/* harmony default export */ __webpack_exports__["default"] = ({
  version: 'v5'
});

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: addDefaultChartOptions, defaultValueFormat, addDefaultTSOptions, addDefaultBSOptions, addDefaultPSOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultChartOptions", function() { return addDefaultChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultValueFormat", function() { return defaultValueFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultTSOptions", function() { return addDefaultTSOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultBSOptions", function() { return addDefaultBSOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultPSOptions", function() { return addDefaultPSOptions; });
/* harmony import */ var babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/number/max-safe-integer */ "../node_modules/babel-runtime/core-js/number/max-safe-integer.js");
/* harmony import */ var babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");






function addDefaultChartOptions(opts) {

  opts.chart = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    chartResize: false,
    isTouchScreen: false,
    className: '',
    maxWidth: babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0___default.a,
    minWidth: 0
  }, opts.chart);
  opts.chart.counter = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["chartCounter"])();

  opts.tooltip = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, opts.tooltip || {});

  opts.legend = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    legendPrefix: '',
    position: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].DIR_TOP
  }, opts.legend || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.afterDraw)) {
    opts.afterDraw = function (c) {
      return c;
    };
  }

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.onComplete)) {
    opts.onComplete = function (time) {
      console.log('Chart loading of ' + opts.containerName + ' is completed in ' + time + ' ms');
    };
  }

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.onError)) {
    opts.onError = function (error) {
      console.log('Chart has encountered error of ' + opts.containerName + ' ', error);
    };
  }

  return opts;
}

function defaultValueFormat(val) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  var denominator = 1000;
  if (val > denominator) {
    var kVal = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(val / denominator, decimals);
    if (kVal > denominator) {
      var mVal = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(kVal / denominator, decimals);
      return mVal + 'M ' + unit;
    }
    return kVal + 'K ' + unit;
  }
  return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(val, decimals) + ' ' + unit;
}

function addDefaultTSOptions(opts) {
  // Add defaults to xAxis
  opts.xAxis = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    bottom: {
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_TIME,
      visible: true
    }
  }, opts.xAxis || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.xAxis.bottom.tickFormatter)) {
    var timeInfo = opts.timeInfo;
    // If the date range is less than 2 days, Show in hour format
    var timeLen = timeInfo.timeRange.length;
    var dateDiff = timeInfo.timeRange[timeLen - 1] - timeInfo.timeRange[0];

    var xAxisFn = dateDiff < _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TIME_FORMAT_BUFFER ? Object(_d3Importer__WEBPACK_IMPORTED_MODULE_4__["timeFormat"])('%H:%M') : Object(_d3Importer__WEBPACK_IMPORTED_MODULE_4__["timeFormat"])('%d %b %Y');
    opts.xAxis.bottom.tickFormatter = function (xDate) {
      return xAxisFn(xDate);
    };
  }

  // If yAxis is not specified, then default is left and its value axis with unit
  if (!opts.yAxis) {
    opts.yAxis = {
      left: {}
    };
  }

  if (opts.yAxis.left) {
    opts.yAxis.left = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.left);
  }

  if (opts.yAxis.right) {
    opts.yAxis.right = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.right);
  }

  opts.zoom = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: false
  }, opts.zoom || {});

  // General Options to both chartType
  opts.tooltip = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, opts.tooltip || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.tooltip.format)) {
    var formatTime = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_4__["timeFormat"])('%d %b %Y  %H:%M:%S');
    opts.tooltip.format = function (d) {
      if (!d || !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(d)) {
        return '';
      }
      var plotSet = this.options.plotSet;
      var timeInfo = this.options.timeInfo;
      var zoneOffset = this.options.xAxis.zoneOffset || '';
      var yAxis = this.options.yAxis;

      var tableStr = '<table><tbody><tr>\n            <td class="value_full" colspan="2">\n            ' + formatTime(d[timeInfo.dataIndex]) + ' ' + zoneOffset + '\n            </td></tr>';

      for (var key in plotSet) {
        var val = d[plotSet[key].dataIndex];
        if (!plotSet[key].visible || isNaN(val)) {
          continue;
        }

        // Find Y Axis format is preset
        var yOrient = yAxis[plotSet[key].plotAxis[0]];
        var format = yOrient.format || defaultValueFormat;

        tableStr += '<tr>\n        <td class=\'name\'>\n            <span style=\'background-color:' + plotSet[key].color + '\'></span>' + plotSet[key].name + '\n        </td>\n        <td class=\'value\'>\n            ' + format(val, plotSet[key].unit) + '\n        </td>\n        </tr>';
      }

      tableStr += '</tbody></table>';

      return tableStr;
    };
  }

  addDefaultChartOptions(opts);

  return opts;
}

function addDefaultBSOptions(opts) {
  // Add defaults to xAxis
  opts.xAxis = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    bottom: {
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      visible: true
    }
  }, opts.xAxis || {});

  // If yAxis is not specified, then default is left and its value axis with unit
  if (!opts.yAxis) {
    opts.yAxis = {
      left: {}
    };
  }

  if (opts.yAxis.left) {
    opts.yAxis.left = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.left);
  }

  if (opts.yAxis.right) {
    opts.yAxis.right = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.right);
  }

  opts.zoom = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: false
  }, opts.zoom || {});

  // General Options to both chartType
  opts.tooltip = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    format: false // Use charts internal tooltip formatter to show raw data
  }, opts.tooltip || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.tooltip.format)) {
    opts.tooltip.format = function (d) {
      var dataArr = d;
      if (d && d.val) {
        dataArr = d.val;
      }
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(dataArr)) {
        return '';
      }
      var plotSet = this.options.plotSet;
      var timeInfo = this.options.timeInfo;
      var yAxis = this.options.yAxis;
      var tableStringArray = []; // used to show the tooltip in reverse order

      var tableStr = '<table><tbody><tr>\n            <td class="value_full" colspan="2">\n            ' + dataArr[timeInfo.dataIndex] + '\n            </td></tr>';

      for (var key in plotSet) {
        var val = dataArr[plotSet[key].dataIndex];
        if (!plotSet[key].visible || isNaN(val)) {
          continue;
        }

        // Find Y Axis format is preset
        var yOrient = yAxis[plotSet[key].plotAxis[0]];
        var format = yOrient.format || defaultValueFormat;

        tableStringArray.push('<tr>\n        <td class=\'name\'>\n            <span style=\'background-color:' + plotSet[key].color + '\'></span>\n        </td>\n        <td class=\'value\'>\n            ' + format(val, plotSet[key].unit) + '\n        </td>\n        </tr>');
      }
      // reverse the table string data (for stacked)
      tableStringArray.reverse();

      // construct the table string
      tableStringArray.forEach(function (tString) {
        tableStr += tString;
      });
      tableStr += '</tbody></table>';

      return tableStr;
    };
  }

  addDefaultChartOptions(opts);

  return opts;
}

function addDefaultPSOptions(opts) {

  // General Options to both chartType
  opts.tooltip = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, opts.tooltip || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.tooltip.format)) {
    var formatter = function formatter(d) {
      if (!d || !d.value) {
        return '';
      }
      var pieObj = this.options.series.pie;
      var format = pieObj.format || defaultValueFormat;
      var percentage = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(d.value / pieObj.total * 100, 1);

      return '<table style=\'opacity: 0.8;\'>\n              <tbody>\n              <tr>\n              <td class=\'name\'><span style=\'background-color:' + d.color + '\'></span>' + d.name + '</td>\n              <td class=\'value\'>' + percentage + ' %</td>\n              </tr>\n              <tr>\n              <td class=\'value\' colspan=\'2\'>' + format(d.value, pieObj.unit) + '</td>\n              </tr>\n              </tbody>\n              </table>';
    };
    if (opts.series && opts.series.sunburst) {
      formatter = function formatter(d) {
        if (!d || !d.value) {
          return '';
        }

        var sunburstObj = this.options.series.sunburst;
        var format = sunburstObj.format || defaultValueFormat;
        return '<table style=\'opacity: 0.8;\'>\n              <tbody>\n              <tr>\n              <td class=\'name\'><span style=\'background-color:' + d.color + '\'></span>' + d.name + '</td>\n              <td class=\'value\' colspan=\'2\'>' + format(d.value, sunburstObj.unit) + '</td>\n              </tr>\n              </tbody>\n              </table>';
      };
    }
    opts.tooltip.format = formatter;
  }

  addDefaultChartOptions(opts);

  opts.legend.position = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].DIR_RIGHT;

  return opts;
}

/***/ }),

/***/ "./legend/TimeSeriesLegend.js":
/*!************************************!*\
  !*** ./legend/TimeSeriesLegend.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "../node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");












var TimeSeriesLegend = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TimeSeriesLegend, _ChartComponent);

  function TimeSeriesLegend(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TimeSeriesLegend);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TimeSeriesLegend.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(TimeSeriesLegend)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      disableSeriesToggle: false
    }, opts);

    var self = _this;
    _this.opts.maxWidthLegend = 0;
    _this.opts.spacingNames = [];

    var graphOptions = _this.opts.chart.options;
    var eachPlotSet = graphOptions.plotSet;
    var eachPlotNames = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet);
    var leng = 0;
    var textWidth = [];
    var maxLenLegend = void 0;

    var dummyG = _this.opts.chart.svg.append('g');
    // Add all name on DOM to calculate how much space is needed for every names
    dummyG.selectAll('.dummyText').data(eachPlotNames).enter().append('text').attr('class', 'vc-legend-label').style('font-size', '11px').style('font-weight', '500').text(function (d) {
      return self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : '');
    }).each(function (d, i) {
      // Find size required for each legend on screen
      var thisWidth = Math.round(this.getComputedTextLength());
      if (thisWidth > self.opts.maxWidthLegend) {
        self.opts.maxWidthLegend = thisWidth;
        maxLenLegend = d;
      }
      textWidth.push(thisWidth);
    });

    // Fill the spacing Arr having position for each legends on horizontal order
    textWidth.forEach(function (ele) {
      leng += ele;
      self.opts.spacingNames.push(leng);
    });

    // Make maxTextLength Higher to show full text for pie legends
    _this.opts.maxTextLength = maxLenLegend.length + 100;

    dummyG.remove();
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TimeSeriesLegend, [{
    key: 'draw',
    value: function draw() {

      var self = this;
      var graphOptions = this.opts.chart.options;
      var toggleSeries = _utils__WEBPACK_IMPORTED_MODULE_9__["emptyFn"];
      var eachPlotSet = graphOptions.plotSet;
      var eachPlotNames = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet);
      var maxYLen = Math.floor(this.opts.chart.chartFullSpace.height * 90 / 100);
      var fullYLen = eachPlotNames.length * _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_Y_SPACE;
      fullYLen = fullYLen > maxYLen ? maxYLen : fullYLen;
      var divWidth = this.opts.maxWidthLegend + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SHOW_WIDTH;

      this.opts.legendDiv = {
        width: divWidth,
        height: fullYLen

        // Perfom Series show and hide on click of each legend
      };if (!this.opts.disableSeriesToggle) {

        toggleSeries = function toggleSeries(seriesName) {
          var visibleSeries = 0;
          var plotName = void 0;

          if (eachPlotSet[seriesName] && eachPlotSet[seriesName].visible) {
            // If the series is getting disabled and its only one series visible, Dont disable it.
            for (plotName in eachPlotSet) {
              eachPlotSet[plotName].visible && visibleSeries++;
            }

            if (visibleSeries <= 1) {
              return;
            }
          }

          var applyYAxis = void 0;

          // plotSeries that is getting toggled
          var currentPlotInfo = void 0;

          if (eachPlotSet && eachPlotSet[seriesName]) {
            currentPlotInfo = eachPlotSet;
          }

          if (currentPlotInfo) {

            currentPlotInfo[seriesName].visible = !currentPlotInfo[seriesName].visible;

            if (currentPlotInfo[seriesName].plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_LEFT) {

              // This will compute max and min value for YAxis based on series which are visible
              babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(self.opts.chart.options, self.opts.chart.dataParser.constructYAxisInfo());

              applyYAxis = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_LEFT;
              // Update Y Axis with new domainScale
              self.opts.chart.yAxis.modifyAxisProps({
                domainScale: graphOptions.yRange
              });
            } else if (currentPlotInfo[seriesName].plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {

              // This will compute max and min value for YAxis based on series which are visible
              babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(self.opts.chart.options, self.opts.chart.dataParser.constructYAxisInfo());

              applyYAxis = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT;
              // Update Y Axis with new domainScale
              self.opts.chart.yAxis2.modifyAxisProps({
                domainScale: graphOptions.yRange2
              });
            }

            // Adjust YAxis tick value display based on yAxis change
            self.opts.chart.reScaleYAxis(applyYAxis);

            // Redraw all plot components based on yAxis change
            self.opts.chart.series.redraw();

            var sFlag = currentPlotInfo[seriesName].visible;

            Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).classed('vc-fill-hidden', !sFlag);

            Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(self.opts.onLegendChange) && self.opts.onLegendChange.call(self.opts.chart, currentPlotInfo[seriesName], sFlag);
          }
        };
      }

      this.legendDisplay = this.opts.chart.svg.append('g').attr('class', 'vc-legend-group').attr('transform', 'translate(15, 5)');

      this.legendBlock = this.legendDisplay.selectAll('g').data(eachPlotNames).enter().append('g').attr('transform', function (d, i) {
        // Provide horizontal position based on order
        if (self.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_TOP) {
          var x = self.opts.spacingNames[i - 1] ? self.opts.spacingNames[i - 1] + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * i : 0;
          return 'translate(' + x + ', 0)';
        } else if (self.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
          // Provide vertical position based on order
          var y = i * _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_Y_SPACE;
          return 'translate(0 ,' + y + ')';
        }
      }).attr('class', function (d) {
        return 'vc-legend vc-legend-' + d;
      }).classed('vc-fill-hidden', function (d, i) {
        return eachPlotSet[d] ? !eachPlotSet[d].visible : false;
      });

      // Listen to click event only for timeseries legends
      this.legendBlock.on('click', Object(_utils__WEBPACK_IMPORTED_MODULE_9__["throttle"])(toggleSeries, 300, { // Sometimes toggle event is called multiple times, hence block by adding throttle
        trailing: false
      }));

      this.legendBlock.append('text').attr('class', 'vc-legend-label').attr('x', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_TEXT_X).attr('y', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_TEXT_Y).style('font-size', '11px').style('font-weight', '500').text(function (d) {
        var legName = self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : '');
        if (self.opts.isPieLegend && self.opts.maxTextLength < legName.length) {
          legName = legName.substring(0, self.opts.maxTextLength) + '...';
        }
        return legName;
      });

      this.legendBlock.append('rect').attr('class', 'vc-legend-box').attr('x', 0).attr('width', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_RECT_SIZE).attr('height', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_RECT_SIZE).style('stroke', function (d) {
        return eachPlotSet[d] ? eachPlotSet[d].color : '';
      }).style('stroke-width', '2px').style('fill', function (d) {
        return eachPlotSet[d] ? eachPlotSet[d].color : '';
      });

      this.opts.horizontalLegendWidth = Math.round(this.legendDisplay.node().getBBox().width);

      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      // Display in vertical order
      var self = this;
      var legendText = this.opts.chart.container.selectAll('svg .vc-legend-label');
      var basicWidth = this.opts.maxWidthLegend + this.opts.chart.margin.left + this.opts.chart.margin.right;

      if (this.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
        // Display legends vertically on right side
        basicWidth += _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SHOW_WIDTH;
        var legendPos = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].VERT_POS_LEGEND;
        if (this.opts.maxWidthLegend === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_MAX_WIDTH) {
          legendPos = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].VERT_POS_LEGEND + 10;
        }
        var legendXPos = Math.floor(this.opts.chart.chartWidth * legendPos / 100);
        var xBuff = this.opts.chart.chartWidth - legendXPos;
        xBuff = Math.floor((xBuff - this.opts.legendDiv.width) / 2);
        legendXPos += xBuff;

        var legendYPos = Math.floor((this.opts.chart.chartFullSpace.height - this.opts.legendDiv.height) / 2);

        this.legendDisplay.attr('transform', 'translate(' + legendXPos + ',' + legendYPos + ')');
      }

      var d3Svg = this.opts.chart.svg;

      if (this.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_TOP) {
        basicWidth = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * self.opts.spacingNames.length + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DATA_INTERVAL_BUFFER_X;

        if (this.opts.horizontalLegendWidth + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_RIGHT_BUFFER > self.opts.chart.chartWidth) {
          // Hide only text and display Color box with tooltip
          d3Svg.selectAll('.vc-legend').each(function () {
            var seriesName = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).select('text').html();
            Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).select('rect').html('').append('svg:title').text(seriesName);
          });
          legendText.classed('vc-hidden', true);

          if (self.opts.chart.chartWidth < basicWidth) {
            // display box vertically
            this.legendBlock.attr('transform', function (d, i) {
              var y = i * _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_Y_SPACE;
              return 'translate(0,' + y + ')';
            });
          } else {
            // Display only box on top
            this.legendBlock.attr('transform', function (d, i) {
              var x = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * i;
              return 'translate(' + x + ', 0)';
            });
          }
        } else {
          // Display legend on top with both text, box and remove tooltip
          this.legendBlock.attr('transform', function (d, i) {
            var x = self.opts.spacingNames[i - 1] ? self.opts.spacingNames[i - 1] + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * i : 0;
            return 'translate(' + x + ', 0)';
          });

          if (!this.opts.isPieLegend) {
            d3Svg.selectAll('.vc-legend').each(function () {
              Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).select('rect').html('');
            });
            legendText.classed('vc-hidden', false);
          }
        }
      }
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.opts.visible = showFlag;
      this.legendDisplay && this.legendDisplay.classed('vc-hidden', !showFlag);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.legendBlock && this.legendBlock.remove();
      this.legendDisplay && this.legendDisplay.remove();
      this.opts = null;
    }
  }]);

  return TimeSeriesLegend;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TimeSeriesLegend);

/***/ }),

/***/ "./series/Series.js":
/*!**************************!*\
  !*** ./series/Series.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");







var Series = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Series, _ChartComponent);

  function Series(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Series);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Series.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Series)).call(this));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Series, [{
    key: 'draw',
    value: function draw() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.draw();
      });
    }
  }, {
    key: 'update',
    value: function update() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.update();
      });
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.showHide(showFlag);
      });
    }

    // Redraw is called when series is toggled from Legends

  }, {
    key: 'redraw',
    value: function redraw() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.redraw();
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.remove();
      });
      this.plotSeries = null;
      this.opts = null;
    }
  }]);

  return Series;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Series);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9DaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2QzSW1wb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9oZWxwZXJzLmpzIiwid2VicGFjazovL3ZjLy4vbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvU2VyaWVzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0IiwiY29udGFpbmVyIiwib3B0cyIsImlzU3RyaW5nIiwiaXNPYmplY3QiLCJsZW5ndGgiLCJkYXRhUGFyc2VyIiwic2VsZWN0Iiwic2l6ZSIsIkVycm9yIiwiY29udGFpbmVyTmFtZSIsImNvbnRhaW5lckJveCIsImVsZW1lbnRPZmZzZXQiLCJ0YWtlQ29udGFpbmVyV2lkdGgiLCJjaGFydCIsIndpZHRoIiwidGFrZUNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJvcHRpb25zIiwiY2hhcnRIZWlnaHQiLCJjaGFydFdpZHRoIiwibWFyZ2luIiwiY2hhcnRUeXBlIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiY2hhcnRGdWxsU3BhY2UiLCJjaGFydENvbXBvbmVudHNBcnIiLCJzdmciLCJhcHBlbmQiLCJodG1sIiwic3ZnQ2xhc3MiLCJjbGFzc05hbWUiLCJpc1RvdWNoU2NyZWVuIiwiYXR0ciIsImNvdW50ZXIiLCJncmFwaFpvbmUiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImNoYXJ0Q21wdCIsIkNoYXJ0Q29tcG9uZW50IiwiZHJhdyIsInVwZGF0ZSIsInNob3dGbGFnIiwic2hvd0hpZGUiLCJyZW1vdmUiLCJjaGFydFJlc2l6ZSIsInRocm90dGVkUmVzaXplIiwidGhyb3R0bGUiLCJNYXRoIiwiZmxvb3IiLCJzZXRUaW1lb3V0IiwiY2hhcnRJZCIsImlkIiwid2luZG93Iiwib24iLCJhdXRvU2l6ZUNoYXJ0IiwicmVzaXplZEdyYXBoV2lkdGgiLCJkZXN0cm95RnVsbCIsInZlcnNpb24iLCJhZGREZWZhdWx0Q2hhcnRPcHRpb25zIiwiY2hhcnRDb3VudGVyIiwidG9vbHRpcCIsInZpc2libGUiLCJmb3JtYXQiLCJsZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJwb3NpdGlvbiIsImNvbnN0YW50cyIsIkRJUl9UT1AiLCJpc0Z1bmN0aW9uIiwiYWZ0ZXJEcmF3IiwiYyIsIm9uQ29tcGxldGUiLCJ0aW1lIiwib25FcnJvciIsImVycm9yIiwiZGVmYXVsdFZhbHVlRm9ybWF0IiwidmFsIiwidW5pdCIsImRlY2ltYWxzIiwiZGVub21pbmF0b3IiLCJrVmFsIiwiZ2V0VmFsdWVXaXRoRGVjaW1hbHMiLCJtVmFsIiwiYWRkRGVmYXVsdFRTT3B0aW9ucyIsInhBeGlzIiwiVU5JVFNfVElNRSIsInRpY2tGb3JtYXR0ZXIiLCJ0aW1lSW5mbyIsInRpbWVMZW4iLCJ0aW1lUmFuZ2UiLCJkYXRlRGlmZiIsInhBeGlzRm4iLCJUSU1FX0ZPUk1BVF9CVUZGRVIiLCJ0aW1lRm9ybWF0IiwieERhdGUiLCJ5QXhpcyIsIlVOSVRTX0RFRiIsIm1pbiIsInpvb20iLCJmb3JtYXRUaW1lIiwiZCIsImlzQXJyYXkiLCJwbG90U2V0Iiwiem9uZU9mZnNldCIsInRhYmxlU3RyIiwiZGF0YUluZGV4Iiwia2V5IiwiaXNOYU4iLCJ5T3JpZW50IiwicGxvdEF4aXMiLCJjb2xvciIsIm5hbWUiLCJhZGREZWZhdWx0QlNPcHRpb25zIiwiZGF0YUFyciIsInRhYmxlU3RyaW5nQXJyYXkiLCJwdXNoIiwicmV2ZXJzZSIsInRTdHJpbmciLCJhZGREZWZhdWx0UFNPcHRpb25zIiwiZm9ybWF0dGVyIiwidmFsdWUiLCJwaWVPYmoiLCJzZXJpZXMiLCJwaWUiLCJwZXJjZW50YWdlIiwidG90YWwiLCJzdW5idXJzdCIsInN1bmJ1cnN0T2JqIiwiRElSX1JJR0hUIiwiVGltZVNlcmllc0xlZ2VuZCIsImRpc2FibGVTZXJpZXNUb2dnbGUiLCJzZWxmIiwibWF4V2lkdGhMZWdlbmQiLCJzcGFjaW5nTmFtZXMiLCJncmFwaE9wdGlvbnMiLCJlYWNoUGxvdFNldCIsImVhY2hQbG90TmFtZXMiLCJsZW5nIiwidGV4dFdpZHRoIiwibWF4TGVuTGVnZW5kIiwiZHVtbXlHIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwic3R5bGUiLCJ0ZXh0IiwiZWFjaCIsImkiLCJ0aGlzV2lkdGgiLCJyb3VuZCIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsImVsZSIsIm1heFRleHRMZW5ndGgiLCJ0b2dnbGVTZXJpZXMiLCJlbXB0eUZuIiwibWF4WUxlbiIsImZ1bGxZTGVuIiwiTEVHRU5EX1lfU1BBQ0UiLCJkaXZXaWR0aCIsIkxFR0VORF9TSE9XX1dJRFRIIiwibGVnZW5kRGl2Iiwic2VyaWVzTmFtZSIsInZpc2libGVTZXJpZXMiLCJwbG90TmFtZSIsImFwcGx5WUF4aXMiLCJjdXJyZW50UGxvdEluZm8iLCJESVJfTEVGVCIsImNvbnN0cnVjdFlBeGlzSW5mbyIsIm1vZGlmeUF4aXNQcm9wcyIsImRvbWFpblNjYWxlIiwieVJhbmdlIiwieUF4aXMyIiwieVJhbmdlMiIsInJlU2NhbGVZQXhpcyIsInJlZHJhdyIsInNGbGFnIiwiY2xhc3NlZCIsIm9uTGVnZW5kQ2hhbmdlIiwiY2FsbCIsImxlZ2VuZERpc3BsYXkiLCJsZWdlbmRCbG9jayIsIngiLCJMRUdFTkRfU1BBQ0UiLCJ5IiwidHJhaWxpbmciLCJMRUdFTkRfVEVYVF9YIiwiTEVHRU5EX1RFWFRfWSIsImxlZ05hbWUiLCJpc1BpZUxlZ2VuZCIsInN1YnN0cmluZyIsIkxFR0VORF9SRUNUX1NJWkUiLCJob3Jpem9udGFsTGVnZW5kV2lkdGgiLCJub2RlIiwiZ2V0QkJveCIsImxlZ2VuZFRleHQiLCJiYXNpY1dpZHRoIiwibGVnZW5kUG9zIiwiVkVSVF9QT1NfTEVHRU5EIiwiTEVHRU5EX01BWF9XSURUSCIsImxlZ2VuZFhQb3MiLCJ4QnVmZiIsImxlZ2VuZFlQb3MiLCJkM1N2ZyIsIkRBVEFfSU5URVJWQUxfQlVGRkVSX1giLCJMRUdFTkRfUklHSFRfQlVGRkVSIiwiU2VyaWVz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QUFoQixDQUF3QixVQUFVMkssTUFBVixFQUFrQjtBQUN4Q0EsZUFBT3ZLLE1BQVA7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFU0MsUSxFQUFVO0FBQ2xCLFdBQUtxSyxVQUFMLENBQWdCMUssT0FBaEIsQ0FBd0IsVUFBVTJLLE1BQVYsRUFBa0I7QUFDeENBLGVBQU9ySyxRQUFQLENBQWdCRCxRQUFoQjtBQUNELE9BRkQ7QUFHRDs7QUFFRDs7Ozs2QkFDVTtBQUNSLFdBQUtxSyxVQUFMLENBQWdCMUssT0FBaEIsQ0FBd0IsVUFBVTJLLE1BQVYsRUFBa0I7QUFDeENBLGVBQU9qQyxNQUFQO0FBQ0QsT0FGRDtBQUdEOzs7NkJBRVM7QUFDUixXQUFLZ0MsVUFBTCxDQUFnQjFLLE9BQWhCLENBQXdCLFVBQVUySyxNQUFWLEVBQWtCO0FBQ3hDQSxlQUFPcEssTUFBUDtBQUNELE9BRkQ7QUFHQSxXQUFLbUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtsTixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBcENpQzBDLDhEOztBQUFmdUsscUUiLCJmaWxlIjoiYmFyc2VyaWVzfnBpZXNlcmllc350aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBpc09iamVjdCwgaXNTdHJpbmcsIHRocm90dGxlfSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgaWYgKGlzU3RyaW5nKGNvbnRhaW5lcikgJiYgaXNPYmplY3Qob3B0cykgJiYgY29udGFpbmVyLmxlbmd0aCAmJiBpc09iamVjdChvcHRzLmRhdGFQYXJzZXIpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHNlbGVjdChjb250YWluZXIpXG4gICAgICBpZiAoIXRoaXMuY29udGFpbmVyLnNpemUoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBncmFwaCBjb250YWluZXIgc3BlY3RpZmVkIGluIG9wdGlvbnMgZG9lc250IGV4aXN0IGluc2lkZSBpbiBEb2N1bWVudCBCb2R5JylcbiAgICAgIH1cbiAgICAgIG9wdHMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lclxuXG4gICAgICBjb25zdCBjb250YWluZXJCb3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMuY29udGFpbmVyKVxuXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lcldpZHRoID0gZmFsc2VcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG9wdHMuY2hhcnQud2lkdGgpKSB7XG4gICAgICAgIG9wdHMuY2hhcnQud2lkdGggPSBjb250YWluZXJCb3gud2lkdGhcbiAgICAgICAgdGFrZUNvbnRhaW5lcldpZHRoID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lckhlaWdodCA9IGZhbHNlXG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShvcHRzLmNoYXJ0LmhlaWdodCkpIHtcbiAgICAgICAgb3B0cy5jaGFydC5oZWlnaHQgPSBjb250YWluZXJCb3guaGVpZ2h0XG4gICAgICAgIHRha2VDb250YWluZXJIZWlnaHQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmNoYXJ0LndpZHRoID4gb3B0cy5jaGFydC5tYXhXaWR0aCkge1xuICAgICAgICBvcHRzLmNoYXJ0LndpZHRoID0gb3B0cy5jaGFydC5tYXhXaWR0aFxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5jaGFydC53aWR0aCA8IG9wdHMuY2hhcnQubWluV2lkdGgpIHtcbiAgICAgICAgb3B0cy5jaGFydC53aWR0aCA9IG9wdHMuY2hhcnQubWluV2lkdGhcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0c1xuXG4gICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gb3B0cy5jaGFydC5oZWlnaHRcbiAgICAgIHRoaXMuY2hhcnRXaWR0aCA9IG9wdHMuY2hhcnQud2lkdGhcbiAgICAgIHRoaXMubWFyZ2luID0gb3B0cy5jaGFydC5tYXJnaW5cbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gb3B0cy5jaGFydC5jaGFydFR5cGVcblxuICAgICAgaWYgKHRha2VDb250YWluZXJXaWR0aCkge1xuICAgICAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLSAodGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFrZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jaGFydEhlaWdodCAtICh0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCBkYXRhUHJvY2VzcyB0byBjaGFydCwgd2hpY2ggZ2VuZXJhdGUgY2hhcnREYXRhIGFuZCBwbG90IEluZm8gYmFzZWQgb24gSlNPTiBhbmQgb3B0aW9uc1xuICAgICAgdGhpcy5kYXRhUGFyc2VyID0gb3B0cy5kYXRhUGFyc2VyXG5cbiAgICAgIC8vIERlbGV0ZSBkYXRhUHJvY2VzcyBmcm9tIG9wdGlvbnNcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZGF0YVBhcnNlclxuXG4gICAgICB0aGlzLmNoYXJ0RnVsbFNwYWNlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jaGFydFdpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0LFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY2hhcnRIZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20sXG4gICAgICB9XG5cblxuICAgICAgLy8gQXJyYXkgd2hpY2ggaG9sZHMgYWxsIHRoZSBjaGFydENvbXBvbmVudHMgcmVxdWlyZWQgZm9yIHRoZSBncmFwaCBsaWtlIGF4aXMsIHNlcmllcywgdG9vbHRpcCwgbGVnZW5kIGV0Y1xuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIgPSBbXVxuXG4gICAgICB0aGlzLnN2ZyA9IHRoaXMuY29udGFpbmVyLnNlbGVjdCgnc3ZnJylcblxuICAgICAgaWYgKHRoaXMuc3ZnLnNpemUoKSA9PT0gMCkge1xuICAgICAgICAvLyBDcmVhdGUgc3ZnIGVsZW1lbnQgaWYgbm90IGV4aXN0IGluc2lkZSBjaGFydCBjb250YWluZXIgRElWXG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5jb250YWluZXIuYXBwZW5kKCdzdmcnKVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBzdmcgaWYgaXQgaGFzIG5lZWRsZXNzIGNvbnRlbnRcbiAgICAgIHRoaXMuc3ZnLmh0bWwoJycpXG5cbiAgICAgIGxldCBzdmdDbGFzcyA9ICd2Yy1zdmcgJyArIChvcHRzLmNoYXJ0LmNsYXNzTmFtZSB8fCAnJylcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgICBzdmdDbGFzcyArPSAnIHZjLW5vc2VsZWN0J1xuICAgICAgfVxuICAgICAgdGhpcy5zdmdcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0KVxuICAgICAgICAuYXR0cignY2xhc3MnLCBzdmdDbGFzcylcblxuXG4gICAgICAvLyBBZGQgZGVmcyB0byBzaG93IHBsb3Qgc2VyaWVzIHdpdGhpbiB0aGUgZGVmIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoJ2RlZnMnKVxuICAgICAgICAuYXBwZW5kKCdjbGlwUGF0aCcpXG4gICAgICAgIC5hdHRyKCdpZCcsIGBjaGFydF9jbGlwXyR7dGhpcy5vcHRpb25zLmNoYXJ0LmNvdW50ZXJ9YClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuY2hhcnRIZWlnaHQpXG5cbiAgICAgIC8vIEFkZCBncmFwaFpvbmUgdGFnLCBzbyB0aGF0IGFsbCBzZXJpZXMgYW5kIGF4aXMgYXJlIGdyb3VwZWQgdG9nZXRoZXJcbiAgICAgIHRoaXMuZ3JhcGhab25lID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1ncmFwaFpvbmUnKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdDaGFydCBkcmF3JywgdGhpcylcbiAgICAvLyBEcmF3IGFsbCB0aGUgY2hhcnRDb21wb25lbnRzIGluIHRoZSBzYW1lIG9yZGVyIG9mIHRoZXJlIGluaXRpbGl6YXRpb24gdXNpbmcgY2hhcnRDb21wb25lbnRzQXJyXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LmRyYXcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc3ZnLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aClcbiAgICB0aGlzLmdyYXBoWm9uZS5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKVxuICAgIHRoaXMuc3ZnLnNlbGVjdCgnY2xpcFBhdGgnKS5zZWxlY3QoJ3JlY3QnKS5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRXaWR0aClcblxuICAgIGNvbnNvbGUubG9nKCdDaGFydCB1cGRhdGUnLCB0aGlzKVxuICAgIC8vIFVwZGF0ZSBhbGwgY2hhcnQgY29tcG9uZW50IGJhc2VkIG9uIG5ldyB3aWR0aCBjaGFuZ2VzXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIGNvbnNvbGUubG9nKCdDaGFydCBzaG93SGlkZScsIHRoaXMpXG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnIC8vIENvbnZlcnQgYW55IHR5cGUgdG8gYm9vbGVhblxuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC5zaG93SGlkZShzaG93RmxhZylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgcmVtb3ZlJywgdGhpcylcbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gY2hhcnRSZXNwb25zaXZlIGJhc2VkIG9uIHNjcmVlbiByZXNpemUgaXMgaGFuZGxlZFxuICBjaGFydFJlc3BvbnNpdmUgKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuY2hhcnRSZXNpemUpIHtcbiAgICAgIHRoaXMudGhyb3R0ZWRSZXNpemUgPSB0aHJvdHRsZSgod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgICBpZiAod2lkdGggPT09IHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gLy8gRG9udCByZXNpemUgaWYgZ3JhcGggaXMgYWxyZWFkeSBhZGp1c3RlZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKVxuICAgICAgICB0aGlzLmNoYXJ0RnVsbFNwYWNlLmhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KVxuICAgICAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gKHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0IC0gKHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAwKVxuICAgICAgfSwgMTAwKSAvLyAndGhpcycgV2lsbCBoYXZlIHJlZmVyZW5jZSBvZiB0aW1lU2VyaWVzQ2hhcnQgb3IgcGllU2VyaWVzQ2hhcnRcblxuICAgICAgLy8gQWRkIHJlc2l6ZSBmb3IgZWFjaCBjaGFydCBiYXNlZCBvbiBjaGFydCBJRCBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IGNoYXJ0SWQgPSAndmMtJyArICh0aGlzLm9wdGlvbnMuY2hhcnQuaWQgfHwgdGhpcy5vcHRpb25zLmNoYXJ0LmNvdW50ZXIpXG4gICAgICBzZWxlY3Qod2luZG93KS5vbigncmVzaXplLicgKyBjaGFydElkLCAoKSA9PiB0aGlzLmF1dG9TaXplQ2hhcnQoKSlcblxuICAgIH1cbiAgfVxuXG4gIGF1dG9TaXplQ2hhcnQgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckJveCA9IGVsZW1lbnRPZmZzZXQodGhpcy5jb250YWluZXIpXG4gICAgbGV0IHJlc2l6ZWRHcmFwaFdpZHRoID0gY29udGFpbmVyQm94LndpZHRoXG5cbiAgICBpZiAocmVzaXplZEdyYXBoV2lkdGggPiB0aGlzLm9wdGlvbnMuY2hhcnQubWF4V2lkdGgpIHtcbiAgICAgIHJlc2l6ZWRHcmFwaFdpZHRoID0gdGhpcy5vcHRpb25zLmNoYXJ0Lm1heFdpZHRoXG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZWRHcmFwaFdpZHRoIDwgdGhpcy5vcHRpb25zLmNoYXJ0Lm1pbldpZHRoKSB7XG4gICAgICByZXNpemVkR3JhcGhXaWR0aCA9IHRoaXMub3B0aW9ucy5jaGFydC5taW5XaWR0aFxuICAgIH1cblxuICAgIHRoaXMudGhyb3R0ZWRSZXNpemUocmVzaXplZEdyYXBoV2lkdGgsIGNvbnRhaW5lckJveC5oZWlnaHQpXG4gIH1cblxuICAvLyBEZXN0cm95IGFsbCBjaGFydCBwcm9wZXJ0aWVzIGFuZCBjb21wb25lbnRzXG4gIGRlc3Ryb3kgKGRlc3Ryb3lGdWxsKSB7XG4gICAgZGVzdHJveUZ1bGwgPSAhIWRlc3Ryb3lGdWxsXG4gICAgLy8gUmVtb3ZlIHJlc2l6ZSBoYW5kZXIgb24gd2luZG93IGZvciB2Y0NoYXJ0IG5hbWVzcGFjZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuY2hhcnRSZXNpemUpIHtcbiAgICAgIGNvbnN0IGNoYXJ0SWQgPSAndmMtJyArICh0aGlzLm9wdGlvbnMuY2hhcnQuaWQgfHwgdGhpcy5vcHRpb25zLmNoYXJ0LmNvdW50ZXIpXG4gICAgICBzZWxlY3Qod2luZG93KS5vbigncmVzaXplLicgKyBjaGFydElkLCBudWxsKVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgY2hhcnRDb21wb25lbnRzICh0aW1lU2VyaWVzQ2hhcnQgb3IgcGllU2VyaWVzQ2hhcnQpXG4gICAgdGhpcy5yZW1vdmUoKVxuXG4gICAgLy8gUmVtb3ZlIHN2ZyBhbmQgY29udGFpbmVyIGlmIGRlc3Ryb3lGdWxsIGlzIHRydWVcbiAgICBkZXN0cm95RnVsbCAmJiB0aGlzLnN2Zy5yZW1vdmUoKVxuICAgIGRlc3Ryb3lGdWxsICYmIHRoaXMuY29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJleHBvcnQge1xuICBzY2FsZUJhbmQsXG4gIHNjYWxlTGluZWFyLFxuICBzY2FsZVRpbWUsXG4gIHNjYWxlU3FydCxcbiAgc2NhbGVPcmRpbmFsLFxufSBmcm9tICdkMy1zY2FsZSdcblxuZXhwb3J0IHtcbiAgYXhpc0JvdHRvbSxcbiAgYXhpc1RvcCxcbiAgYXhpc0xlZnQsXG4gIGF4aXNSaWdodFxufSBmcm9tICdkMy1heGlzJ1xuXG5leHBvcnQge3RpbWVGb3JtYXR9IGZyb20gJ2QzLXRpbWUtZm9ybWF0J1xuXG5leHBvcnQge3NjaGVtZUNhdGVnb3J5MTB9IGZyb20gJ2QzLXNjYWxlLWNocm9tYXRpYydcblxuZXhwb3J0IHtpbnRlcnBvbGF0ZX0gZnJvbSAnZDMtaW50ZXJwb2xhdGUnXG5cbmV4cG9ydCB7cGFydGl0aW9uLCBoaWVyYXJjaHl9IGZyb20gJ2QzLWhpZXJhcmNoeSdcblxuZXhwb3J0IHtwYXRofSBmcm9tICdkMy1wYXRoJ1xuXG5leHBvcnQge1xuICBzZWxlY3QsXG4gIHNlbGVjdEFsbCxcbiAgbW91c2UgYXMgZDNNb3VzZSxcbiAgZXZlbnQgYXMgZDNFdmVudCxcbiAgdG91Y2ggYXMgZDNUb3VjaCxcbiAgdG91Y2hlcyBhcyBkM1RvdWNoZXNcbn0gZnJvbSAnZDMtc2VsZWN0aW9uJ1xuXG5leHBvcnQge1xuICByYW5nZSxcbiAgbWF4LFxuICB0cmFuc3Bvc2UsXG4gIGJpc2VjdG9yXG59IGZyb20gJ2QzLWFycmF5J1xuXG5leHBvcnQge2JydXNoWCwgYnJ1c2hZfSBmcm9tICdkMy1icnVzaCdcblxuZXhwb3J0IHtcbiAgbGluZSwgc3RhY2ssIGFyZWEsXG4gIHN0YWNrT3JkZXJOb25lLCBzdGFja09mZnNldE5vbmUsXG4gIHBpZSwgYXJjXG59IGZyb20gJ2QzLXNoYXBlJ1xuXG5leHBvcnQge3pvb20sIHpvb21UcmFuc2Zvcm19IGZyb20gJ2QzLXpvb20nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmVyc2lvbjogJ3Y1J1xufVxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Y2hhcnRDb3VudGVyLCBnZXRWYWx1ZVdpdGhEZWNpbWFscywgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7dGltZUZvcm1hdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyAob3B0cykge1xuXG4gIG9wdHMuY2hhcnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjaGFydFJlc2l6ZTogZmFsc2UsXG4gICAgaXNUb3VjaFNjcmVlbjogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBtYXhXaWR0aDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgbWluV2lkdGg6IDBcbiAgfSwgb3B0cy5jaGFydClcbiAgb3B0cy5jaGFydC5jb3VudGVyID0gY2hhcnRDb3VudGVyKClcblxuICBvcHRzLnRvb2x0aXAgPSBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZvcm1hdDogZmFsc2UgLy8gVXNlIGFyeWFrYUNoYXJ0cyBpbnRlcm5hbCB0b29sdGlwIGZvcm1hdHRlciB0byBzaG93IHJhdyBkYXRhXG4gIH0sIChvcHRzLnRvb2x0aXAgfHwge30pKVxuXG4gIG9wdHMubGVnZW5kID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBsZWdlbmRQcmVmaXg6ICcnLFxuICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUFxuICB9LCAob3B0cy5sZWdlbmQgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLmFmdGVyRHJhdykpIHtcbiAgICBvcHRzLmFmdGVyRHJhdyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gY1xuICAgIH1cbiAgfVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLm9uQ29tcGxldGUpKSB7XG4gICAgb3B0cy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDaGFydCBsb2FkaW5nIG9mICR7b3B0cy5jb250YWluZXJOYW1lfSBpcyBjb21wbGV0ZWQgaW4gJHt0aW1lfSBtc2ApXG4gICAgfVxuICB9XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMub25FcnJvcikpIHtcbiAgICBvcHRzLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDaGFydCBoYXMgZW5jb3VudGVyZWQgZXJyb3Igb2YgJHtvcHRzLmNvbnRhaW5lck5hbWV9IGAsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWVGb3JtYXQgKHZhbCwgdW5pdCA9ICcnLCBkZWNpbWFscyA9IDMpIHtcbiAgY29uc3QgZGVub21pbmF0b3IgPSAxMDAwXG4gIGlmICh2YWwgPiBkZW5vbWluYXRvcikge1xuICAgIGNvbnN0IGtWYWwgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscyh2YWwgLyBkZW5vbWluYXRvciwgZGVjaW1hbHMpXG4gICAgaWYgKGtWYWwgPiBkZW5vbWluYXRvcikge1xuICAgICAgY29uc3QgbVZhbCA9IGdldFZhbHVlV2l0aERlY2ltYWxzKGtWYWwgLyBkZW5vbWluYXRvciwgZGVjaW1hbHMpXG4gICAgICByZXR1cm4gYCR7bVZhbH1NICR7dW5pdH1gXG4gICAgfVxuICAgIHJldHVybiBgJHtrVmFsfUsgJHt1bml0fWBcbiAgfVxuICByZXR1cm4gYCR7Z2V0VmFsdWVXaXRoRGVjaW1hbHModmFsLCBkZWNpbWFscyl9ICR7dW5pdH1gXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRUU09wdGlvbnMgKG9wdHMpIHtcbiAgLy8gQWRkIGRlZmF1bHRzIHRvIHhBeGlzXG4gIG9wdHMueEF4aXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBib3R0b206IHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19USU1FLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfSwgKG9wdHMueEF4aXMgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLnhBeGlzLmJvdHRvbS50aWNrRm9ybWF0dGVyKSkge1xuICAgIGNvbnN0IHRpbWVJbmZvID0gb3B0cy50aW1lSW5mb1xuICAgIC8vIElmIHRoZSBkYXRlIHJhbmdlIGlzIGxlc3MgdGhhbiAyIGRheXMsIFNob3cgaW4gaG91ciBmb3JtYXRcbiAgICBjb25zdCB0aW1lTGVuID0gdGltZUluZm8udGltZVJhbmdlLmxlbmd0aFxuICAgIGNvbnN0IGRhdGVEaWZmID0gdGltZUluZm8udGltZVJhbmdlW3RpbWVMZW4gLSAxXSAtIHRpbWVJbmZvLnRpbWVSYW5nZVswXVxuXG4gICAgY29uc3QgeEF4aXNGbiA9IChkYXRlRGlmZiA8IGNvbnN0YW50cy5USU1FX0ZPUk1BVF9CVUZGRVIpID8gdGltZUZvcm1hdCgnJUg6JU0nKSA6IHRpbWVGb3JtYXQoJyVkICViICVZJylcbiAgICBvcHRzLnhBeGlzLmJvdHRvbS50aWNrRm9ybWF0dGVyID0gKHhEYXRlKSA9PiB7XG4gICAgICByZXR1cm4geEF4aXNGbih4RGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiB5QXhpcyBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGRlZmF1bHQgaXMgbGVmdCBhbmQgaXRzIHZhbHVlIGF4aXMgd2l0aCB1bml0XG4gIGlmICghb3B0cy55QXhpcykge1xuICAgIG9wdHMueUF4aXMgPSB7XG4gICAgICBsZWZ0OiB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLnlBeGlzLmxlZnQpIHtcbiAgICBvcHRzLnlBeGlzLmxlZnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLmxlZnQpXG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5yaWdodCkge1xuICAgIG9wdHMueUF4aXMucmlnaHQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLnJpZ2h0KVxuICB9XG5cbiAgb3B0cy56b29tID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogZmFsc2VcbiAgfSwgKG9wdHMuem9vbSB8fCB7fSkpXG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgY29uc3QgZm9ybWF0VGltZSA9IHRpbWVGb3JtYXQoJyVkICViICVZICAlSDolTTolUycpXG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoIWQgfHwgIWlzQXJyYXkoZCkpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwbG90U2V0ID0gdGhpcy5vcHRpb25zLnBsb3RTZXRcbiAgICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG4gICAgICBjb25zdCB6b25lT2Zmc2V0ID0gdGhpcy5vcHRpb25zLnhBeGlzLnpvbmVPZmZzZXQgfHwgJydcbiAgICAgIGNvbnN0IHlBeGlzID0gdGhpcy5vcHRpb25zLnlBeGlzXG5cbiAgICAgIGxldCB0YWJsZVN0ciA9IGA8dGFibGU+PHRib2R5Pjx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlX2Z1bGxcIiBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgJHtmb3JtYXRUaW1lKGRbdGltZUluZm8uZGF0YUluZGV4XSl9ICR7em9uZU9mZnNldH1cbiAgICAgICAgICAgIDwvdGQ+PC90cj5gXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHBsb3RTZXQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZFtwbG90U2V0W2tleV0uZGF0YUluZGV4XVxuICAgICAgICBpZiAoIXBsb3RTZXRba2V5XS52aXNpYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBZIEF4aXMgZm9ybWF0IGlzIHByZXNldFxuICAgICAgICBjb25zdCB5T3JpZW50ID0geUF4aXNbcGxvdFNldFtrZXldLnBsb3RBeGlzWzBdXVxuICAgICAgICBjb25zdCBmb3JtYXQgPSB5T3JpZW50LmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcblxuICAgICAgICB0YWJsZVN0ciArPSBgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9J25hbWUnPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtwbG90U2V0W2tleV0uY29sb3J9Jz48L3NwYW4+JHtwbG90U2V0W2tleV0ubmFtZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZSc+XG4gICAgICAgICAgICAke2Zvcm1hdCh2YWwsIHBsb3RTZXRba2V5XS51bml0KX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5gXG4gICAgICB9XG5cbiAgICAgIHRhYmxlU3RyICs9ICc8L3Rib2R5PjwvdGFibGU+J1xuXG4gICAgICByZXR1cm4gdGFibGVTdHJcbiAgICB9XG4gIH1cblxuICBhZGREZWZhdWx0Q2hhcnRPcHRpb25zKG9wdHMpXG5cbiAgcmV0dXJuIG9wdHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRCU09wdGlvbnMgKG9wdHMpIHtcbiAgLy8gQWRkIGRlZmF1bHRzIHRvIHhBeGlzXG4gIG9wdHMueEF4aXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBib3R0b206IHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfVxuICB9LCAob3B0cy54QXhpcyB8fCB7fSkpXG5cblxuICAvLyBJZiB5QXhpcyBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGRlZmF1bHQgaXMgbGVmdCBhbmQgaXRzIHZhbHVlIGF4aXMgd2l0aCB1bml0XG4gIGlmICghb3B0cy55QXhpcykge1xuICAgIG9wdHMueUF4aXMgPSB7XG4gICAgICBsZWZ0OiB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLnlBeGlzLmxlZnQpIHtcbiAgICBvcHRzLnlBeGlzLmxlZnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLmxlZnQpXG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5yaWdodCkge1xuICAgIG9wdHMueUF4aXMucmlnaHQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLnJpZ2h0KVxuICB9XG5cbiAgb3B0cy56b29tID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogZmFsc2VcbiAgfSwgKG9wdHMuem9vbSB8fCB7fSkpXG5cblxuICAvLyBHZW5lcmFsIE9wdGlvbnMgdG8gYm90aCBjaGFydFR5cGVcbiAgb3B0cy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IGZhbHNlIC8vIFVzZSBjaGFydHMgaW50ZXJuYWwgdG9vbHRpcCBmb3JtYXR0ZXIgdG8gc2hvdyByYXcgZGF0YVxuICB9LCAob3B0cy50b29sdGlwIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy50b29sdGlwLmZvcm1hdCkpIHtcbiAgICBvcHRzLnRvb2x0aXAuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIGxldCBkYXRhQXJyID0gZFxuICAgICAgaWYgKGQgJiYgZC52YWwpIHtcbiAgICAgICAgZGF0YUFyciA9IGQudmFsXG4gICAgICB9XG4gICAgICBpZiAoIWlzQXJyYXkoZGF0YUFycikpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwbG90U2V0ID0gdGhpcy5vcHRpb25zLnBsb3RTZXRcbiAgICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG4gICAgICBjb25zdCB5QXhpcyA9IHRoaXMub3B0aW9ucy55QXhpc1xuICAgICAgY29uc3QgdGFibGVTdHJpbmdBcnJheSA9IFtdIC8vIHVzZWQgdG8gc2hvdyB0aGUgdG9vbHRpcCBpbiByZXZlcnNlIG9yZGVyXG5cbiAgICAgIGxldCB0YWJsZVN0ciA9IGA8dGFibGU+PHRib2R5Pjx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlX2Z1bGxcIiBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgJHtkYXRhQXJyW3RpbWVJbmZvLmRhdGFJbmRleF19XG4gICAgICAgICAgICA8L3RkPjwvdHI+YFxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBwbG90U2V0KSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFBcnJbcGxvdFNldFtrZXldLmRhdGFJbmRleF1cbiAgICAgICAgaWYgKCFwbG90U2V0W2tleV0udmlzaWJsZSB8fCBpc05hTih2YWwpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgWSBBeGlzIGZvcm1hdCBpcyBwcmVzZXRcbiAgICAgICAgY29uc3QgeU9yaWVudCA9IHlBeGlzW3Bsb3RTZXRba2V5XS5wbG90QXhpc1swXV1cbiAgICAgICAgY29uc3QgZm9ybWF0ID0geU9yaWVudC5mb3JtYXQgfHwgZGVmYXVsdFZhbHVlRm9ybWF0XG5cblxuICAgICAgICB0YWJsZVN0cmluZ0FycmF5LnB1c2goYDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPSduYW1lJz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7cGxvdFNldFtrZXldLmNvbG9yfSc+PC9zcGFuPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9J3ZhbHVlJz5cbiAgICAgICAgICAgICR7Zm9ybWF0KHZhbCwgcGxvdFNldFtrZXldLnVuaXQpfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPmApXG4gICAgICB9XG4gICAgICAvLyByZXZlcnNlIHRoZSB0YWJsZSBzdHJpbmcgZGF0YSAoZm9yIHN0YWNrZWQpXG4gICAgICB0YWJsZVN0cmluZ0FycmF5LnJldmVyc2UoKVxuXG4gICAgICAvLyBjb25zdHJ1Y3QgdGhlIHRhYmxlIHN0cmluZ1xuICAgICAgdGFibGVTdHJpbmdBcnJheS5mb3JFYWNoKCh0U3RyaW5nKSA9PiB7XG4gICAgICAgIHRhYmxlU3RyICs9IHRTdHJpbmdcbiAgICAgIH0pXG4gICAgICB0YWJsZVN0ciArPSAnPC90Ym9keT48L3RhYmxlPidcblxuICAgICAgcmV0dXJuIHRhYmxlU3RyXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0UFNPcHRpb25zIChvcHRzKSB7XG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgbGV0IGZvcm1hdHRlciA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoIWQgfHwgIWQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwaWVPYmogPSB0aGlzLm9wdGlvbnMuc2VyaWVzLnBpZVxuICAgICAgY29uc3QgZm9ybWF0ID0gcGllT2JqLmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscygoZC52YWx1ZSAvIHBpZU9iai50b3RhbCkgKiAxMDAsIDEpXG5cbiAgICAgIHJldHVybiBgPHRhYmxlIHN0eWxlPSdvcGFjaXR5OiAwLjg7Jz5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0nbmFtZSc+PHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtkLmNvbG9yfSc+PC9zcGFuPiR7ZC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPiR7cGVyY2VudGFnZX0gJTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZScgY29sc3Bhbj0nMic+JHtmb3JtYXQoZC52YWx1ZSwgcGllT2JqLnVuaXQpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+YFxuXG5cbiAgICB9XG4gICAgaWYgKG9wdHMuc2VyaWVzICYmIG9wdHMuc2VyaWVzLnN1bmJ1cnN0KSB7XG4gICAgICBmb3JtYXR0ZXIgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoIWQgfHwgIWQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1bmJ1cnN0T2JqID0gdGhpcy5vcHRpb25zLnNlcmllcy5zdW5idXJzdFxuICAgICAgICBjb25zdCBmb3JtYXQgPSBzdW5idXJzdE9iai5mb3JtYXQgfHwgZGVmYXVsdFZhbHVlRm9ybWF0XG4gICAgICAgIHJldHVybiBgPHRhYmxlIHN0eWxlPSdvcGFjaXR5OiAwLjg7Jz5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0nbmFtZSc+PHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtkLmNvbG9yfSc+PC9zcGFuPiR7ZC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnIGNvbHNwYW49JzInPiR7Zm9ybWF0KGQudmFsdWUsIHN1bmJ1cnN0T2JqLnVuaXQpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+YFxuICAgICAgfVxuICAgIH1cbiAgICBvcHRzLnRvb2x0aXAuZm9ybWF0ID0gZm9ybWF0dGVyXG4gIH1cblxuICBhZGREZWZhdWx0Q2hhcnRPcHRpb25zKG9wdHMpXG5cbiAgb3B0cy5sZWdlbmQucG9zaXRpb24gPSBjb25zdGFudHMuRElSX1JJR0hUXG5cbiAgcmV0dXJuIG9wdHNcbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2VtcHR5Rm4sIGlzRnVuY3Rpb24sIHRocm90dGxlfSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc0xlZ2VuZCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBkaXNhYmxlU2VyaWVzVG9nZ2xlOiBmYWxzZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCA9IDBcbiAgICB0aGlzLm9wdHMuc3BhY2luZ05hbWVzID0gW11cblxuXG4gICAgY29uc3QgZ3JhcGhPcHRpb25zID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGdyYXBoT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgZWFjaFBsb3ROYW1lcyA9IE9iamVjdC5rZXlzKGVhY2hQbG90U2V0KVxuICAgIGxldCBsZW5nID0gMFxuICAgIGNvbnN0IHRleHRXaWR0aCA9IFtdXG4gICAgbGV0IG1heExlbkxlZ2VuZFxuXG4gICAgY29uc3QgZHVtbXlHID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgIC8vIEFkZCBhbGwgbmFtZSBvbiBET00gdG8gY2FsY3VsYXRlIGhvdyBtdWNoIHNwYWNlIGlzIG5lZWRlZCBmb3IgZXZlcnkgbmFtZXNcbiAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgIC5kYXRhKGVhY2hQbG90TmFtZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWxhYmVsJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzExcHgnKVxuICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc1MDAnKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIChzZWxmLm9wdHMubGVnZW5kUHJlZml4ICsgKGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0ubmFtZSA6ICcnKSlcbiAgICAgIH0pXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAvLyBGaW5kIHNpemUgcmVxdWlyZWQgZm9yIGVhY2ggbGVnZW5kIG9uIHNjcmVlblxuICAgICAgICBjb25zdCB0aGlzV2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkpXG4gICAgICAgIGlmICh0aGlzV2lkdGggPiBzZWxmLm9wdHMubWF4V2lkdGhMZWdlbmQpIHtcbiAgICAgICAgICBzZWxmLm9wdHMubWF4V2lkdGhMZWdlbmQgPSB0aGlzV2lkdGhcbiAgICAgICAgICBtYXhMZW5MZWdlbmQgPSBkXG4gICAgICAgIH1cbiAgICAgICAgdGV4dFdpZHRoLnB1c2godGhpc1dpZHRoKVxuICAgICAgfSlcblxuICAgIC8vIEZpbGwgdGhlIHNwYWNpbmcgQXJyIGhhdmluZyBwb3NpdGlvbiBmb3IgZWFjaCBsZWdlbmRzIG9uIGhvcml6b250YWwgb3JkZXJcbiAgICB0ZXh0V2lkdGguZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICBsZW5nICs9IGVsZVxuICAgICAgc2VsZi5vcHRzLnNwYWNpbmdOYW1lcy5wdXNoKGxlbmcpXG4gICAgfSlcblxuICAgIC8vIE1ha2UgbWF4VGV4dExlbmd0aCBIaWdoZXIgdG8gc2hvdyBmdWxsIHRleHQgZm9yIHBpZSBsZWdlbmRzXG4gICAgdGhpcy5vcHRzLm1heFRleHRMZW5ndGggPSBtYXhMZW5MZWdlbmQubGVuZ3RoICsgMTAwXG5cbiAgICBkdW1teUcucmVtb3ZlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBncmFwaE9wdGlvbnMgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9uc1xuICAgIGxldCB0b2dnbGVTZXJpZXMgPSBlbXB0eUZuXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBncmFwaE9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IGVhY2hQbG90TmFtZXMgPSBPYmplY3Qua2V5cyhlYWNoUGxvdFNldClcbiAgICBjb25zdCBtYXhZTGVuID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0ICogOTAgLyAxMDApXG4gICAgbGV0IGZ1bGxZTGVuID0gZWFjaFBsb3ROYW1lcy5sZW5ndGggKiBjb25zdGFudHMuTEVHRU5EX1lfU1BBQ0VcbiAgICBmdWxsWUxlbiA9IGZ1bGxZTGVuID4gbWF4WUxlbiA/IG1heFlMZW4gOiBmdWxsWUxlblxuICAgIGNvbnN0IGRpdldpZHRoID0gdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kICsgY29uc3RhbnRzLkxFR0VORF9TSE9XX1dJRFRIXG5cbiAgICB0aGlzLm9wdHMubGVnZW5kRGl2ID0ge1xuICAgICAgd2lkdGg6IGRpdldpZHRoLFxuICAgICAgaGVpZ2h0OiBmdWxsWUxlblxuICAgIH1cblxuXG4gICAgLy8gUGVyZm9tIFNlcmllcyBzaG93IGFuZCBoaWRlIG9uIGNsaWNrIG9mIGVhY2ggbGVnZW5kXG4gICAgaWYgKCF0aGlzLm9wdHMuZGlzYWJsZVNlcmllc1RvZ2dsZSkge1xuXG4gICAgICB0b2dnbGVTZXJpZXMgPSBmdW5jdGlvbiAoc2VyaWVzTmFtZSkge1xuICAgICAgICBsZXQgdmlzaWJsZVNlcmllcyA9IDBcbiAgICAgICAgbGV0IHBsb3ROYW1lXG5cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Nlcmllc05hbWVdICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdLnZpc2libGUpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgc2VyaWVzIGlzIGdldHRpbmcgZGlzYWJsZWQgYW5kIGl0cyBvbmx5IG9uZSBzZXJpZXMgdmlzaWJsZSwgRG9udCBkaXNhYmxlIGl0LlxuICAgICAgICAgIGZvciAocGxvdE5hbWUgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3ROYW1lXS52aXNpYmxlICYmIHZpc2libGVTZXJpZXMrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2aXNpYmxlU2VyaWVzIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcHBseVlBeGlzXG5cbiAgICAgICAgLy8gcGxvdFNlcmllcyB0aGF0IGlzIGdldHRpbmcgdG9nZ2xlZFxuICAgICAgICBsZXQgY3VycmVudFBsb3RJbmZvXG5cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0ICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdKSB7XG4gICAgICAgICAgY3VycmVudFBsb3RJbmZvID0gZWFjaFBsb3RTZXRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGN1cnJlbnRQbG90SW5mbykge1xuXG4gICAgICAgICAgY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGUgPSAhY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGVcblxuICAgICAgICAgIGlmIChjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0ucGxvdEF4aXNbMF0gPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgY29tcHV0ZSBtYXggYW5kIG1pbiB2YWx1ZSBmb3IgWUF4aXMgYmFzZWQgb24gc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYub3B0cy5jaGFydC5vcHRpb25zLCBzZWxmLm9wdHMuY2hhcnQuZGF0YVBhcnNlci5jb25zdHJ1Y3RZQXhpc0luZm8oKSlcblxuICAgICAgICAgICAgYXBwbHlZQXhpcyA9IGNvbnN0YW50cy5ESVJfTEVGVFxuICAgICAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgICAgIGRvbWFpblNjYWxlOiBncmFwaE9wdGlvbnMueVJhbmdlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0ucGxvdEF4aXNbMF0gPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcblxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGNvbXB1dGUgbWF4IGFuZCBtaW4gdmFsdWUgZm9yIFlBeGlzIGJhc2VkIG9uIHNlcmllcyB3aGljaCBhcmUgdmlzaWJsZVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLm9wdHMuY2hhcnQub3B0aW9ucywgc2VsZi5vcHRzLmNoYXJ0LmRhdGFQYXJzZXIuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgICAgICAgIGFwcGx5WUF4aXMgPSBjb25zdGFudHMuRElSX1JJR0hUXG4gICAgICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgICAgIGRvbWFpblNjYWxlOiBncmFwaE9wdGlvbnMueVJhbmdlMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGp1c3QgWUF4aXMgdGljayB2YWx1ZSBkaXNwbGF5IGJhc2VkIG9uIHlBeGlzIGNoYW5nZVxuICAgICAgICAgIHNlbGYub3B0cy5jaGFydC5yZVNjYWxlWUF4aXMoYXBwbHlZQXhpcylcblxuICAgICAgICAgIC8vIFJlZHJhdyBhbGwgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIHlBeGlzIGNoYW5nZVxuICAgICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMucmVkcmF3KClcblxuICAgICAgICAgIGNvbnN0IHNGbGFnID0gY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGVcblxuICAgICAgICAgIHNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3ZjLWZpbGwtaGlkZGVuJywgIXNGbGFnKVxuXG4gICAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25MZWdlbmRDaGFuZ2UpICYmIHNlbGYub3B0cy5vbkxlZ2VuZENoYW5nZS5jYWxsKHNlbGYub3B0cy5jaGFydCwgY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLCBzRmxhZylcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1ncm91cCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgxNSwgNSknKVxuXG4gICAgdGhpcy5sZWdlbmRCbG9jayA9IHRoaXMubGVnZW5kRGlzcGxheVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShlYWNoUGxvdE5hbWVzKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIC8vIFByb3ZpZGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBiYXNlZCBvbiBvcmRlclxuICAgICAgICBpZiAoc2VsZi5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICAgIGNvbnN0IHggPSBzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSA/IChzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSArIGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpKSA6IDBcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsIDApJ1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICAgIC8vIFByb3ZpZGUgdmVydGljYWwgcG9zaXRpb24gYmFzZWQgb24gb3JkZXJcbiAgICAgICAgICBjb25zdCB5ID0gaSAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKDAgLCcgKyB5ICsgJyknXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gJ3ZjLWxlZ2VuZCB2Yy1sZWdlbmQtJyArIGRcbiAgICAgIH0pXG4gICAgICAuY2xhc3NlZCgndmMtZmlsbC1oaWRkZW4nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2RdID8gIWVhY2hQbG90U2V0W2RdLnZpc2libGUgOiBmYWxzZSlcbiAgICAgIH0pXG5cbiAgICAvLyBMaXN0ZW4gdG8gY2xpY2sgZXZlbnQgb25seSBmb3IgdGltZXNlcmllcyBsZWdlbmRzXG4gICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgLm9uKCdjbGljaycsIHRocm90dGxlKHRvZ2dsZVNlcmllcywgMzAwLCB7IC8vIFNvbWV0aW1lcyB0b2dnbGUgZXZlbnQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzLCBoZW5jZSBibG9jayBieSBhZGRpbmcgdGhyb3R0bGVcbiAgICAgICAgdHJhaWxpbmc6IGZhbHNlXG4gICAgICB9KSlcblxuXG4gICAgdGhpcy5sZWdlbmRCbG9jay5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1sYWJlbCcpXG4gICAgICAuYXR0cigneCcsIGNvbnN0YW50cy5MRUdFTkRfVEVYVF9YKVxuICAgICAgLmF0dHIoJ3knLCBjb25zdGFudHMuTEVHRU5EX1RFWFRfWSlcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzExcHgnKVxuICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc1MDAnKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IGxlZ05hbWUgPSAoc2VsZi5vcHRzLmxlZ2VuZFByZWZpeCArIChlYWNoUGxvdFNldFtkXSA/IGVhY2hQbG90U2V0W2RdLm5hbWUgOiAnJykpXG4gICAgICAgIGlmIChzZWxmLm9wdHMuaXNQaWVMZWdlbmQgJiYgc2VsZi5vcHRzLm1heFRleHRMZW5ndGggPCBsZWdOYW1lLmxlbmd0aCkge1xuICAgICAgICAgIGxlZ05hbWUgPSBsZWdOYW1lLnN1YnN0cmluZygwLCBzZWxmLm9wdHMubWF4VGV4dExlbmd0aCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWdOYW1lXG4gICAgICB9KVxuXG5cbiAgICB0aGlzLmxlZ2VuZEJsb2NrLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWJveCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cignd2lkdGgnLCBjb25zdGFudHMuTEVHRU5EX1JFQ1RfU0laRSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBjb25zdGFudHMuTEVHRU5EX1JFQ1RfU0laRSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0uY29sb3IgOiAnJ1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzJweCcpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZF0gPyBlYWNoUGxvdFNldFtkXS5jb2xvciA6ICcnXG4gICAgICB9KVxuXG4gICAgdGhpcy5vcHRzLmhvcml6b250YWxMZWdlbmRXaWR0aCA9IE1hdGgucm91bmQodGhpcy5sZWdlbmREaXNwbGF5Lm5vZGUoKVxuICAgICAgLmdldEJCb3goKVxuICAgICAgLndpZHRoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIC8vIERpc3BsYXkgaW4gdmVydGljYWwgb3JkZXJcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGxlZ2VuZFRleHQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdEFsbCgnc3ZnIC52Yy1sZWdlbmQtbGFiZWwnKVxuICAgIGxldCBiYXNpY1dpZHRoID0gdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodFxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgLy8gRGlzcGxheSBsZWdlbmRzIHZlcnRpY2FsbHkgb24gcmlnaHQgc2lkZVxuICAgICAgYmFzaWNXaWR0aCArPSBjb25zdGFudHMuTEVHRU5EX1NIT1dfV0lEVEhcbiAgICAgIGxldCBsZWdlbmRQb3MgPSBjb25zdGFudHMuVkVSVF9QT1NfTEVHRU5EXG4gICAgICBpZiAodGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID09PSBjb25zdGFudHMuTEVHRU5EX01BWF9XSURUSCkge1xuICAgICAgICBsZWdlbmRQb3MgPSBjb25zdGFudHMuVkVSVF9QT1NfTEVHRU5EICsgMTBcbiAgICAgIH1cbiAgICAgIGxldCBsZWdlbmRYUG9zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIGxlZ2VuZFBvcyAvIDEwMClcbiAgICAgIGxldCB4QnVmZiA9IHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gbGVnZW5kWFBvc1xuICAgICAgeEJ1ZmYgPSBNYXRoLmZsb29yKCh4QnVmZiAtIHRoaXMub3B0cy5sZWdlbmREaXYud2lkdGgpIC8gMilcbiAgICAgIGxlZ2VuZFhQb3MgKz0geEJ1ZmZcblxuICAgICAgY29uc3QgbGVnZW5kWVBvcyA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5jaGFydC5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgLSB0aGlzLm9wdHMubGVnZW5kRGl2LmhlaWdodCkgLyAyKVxuXG4gICAgICB0aGlzLmxlZ2VuZERpc3BsYXlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGxlZ2VuZFhQb3MgKyAnLCcgKyBsZWdlbmRZUG9zICsgJyknKVxuXG4gICAgfVxuXG4gICAgY29uc3QgZDNTdmcgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnXG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgYmFzaWNXaWR0aCA9IGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBzZWxmLm9wdHMuc3BhY2luZ05hbWVzLmxlbmd0aCArIGNvbnN0YW50cy5EQVRBX0lOVEVSVkFMX0JVRkZFUl9YXG5cbiAgICAgIGlmICgodGhpcy5vcHRzLmhvcml6b250YWxMZWdlbmRXaWR0aCArIGNvbnN0YW50cy5MRUdFTkRfUklHSFRfQlVGRkVSKSA+IHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSB7XG4gICAgICAgIC8vIEhpZGUgb25seSB0ZXh0IGFuZCBkaXNwbGF5IENvbG9yIGJveCB3aXRoIHRvb2x0aXBcbiAgICAgICAgZDNTdmcuc2VsZWN0QWxsKCcudmMtbGVnZW5kJylcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzZXJpZXNOYW1lID0gc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpLmh0bWwoKVxuICAgICAgICAgICAgc2VsZWN0KHRoaXMpLnNlbGVjdCgncmVjdCcpXG4gICAgICAgICAgICAgIC5odG1sKCcnKVxuICAgICAgICAgICAgICAuYXBwZW5kKCdzdmc6dGl0bGUnKVxuICAgICAgICAgICAgICAudGV4dChzZXJpZXNOYW1lKVxuICAgICAgICAgIH0pXG4gICAgICAgIGxlZ2VuZFRleHQuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcblxuICAgICAgICBpZiAoc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggPCBiYXNpY1dpZHRoKSB7XG4gICAgICAgICAgLy8gZGlzcGxheSBib3ggdmVydGljYWxseVxuICAgICAgICAgIHRoaXMubGVnZW5kQmxvY2tcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICBjb25zdCB5ID0gaSAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgwLCcgKyB5ICsgJyknXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERpc3BsYXkgb25seSBib3ggb24gdG9wXG4gICAgICAgICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHggPSBjb25zdGFudHMuTEVHRU5EX1NQQUNFICogaVxuICAgICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsIDApJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGlzcGxheSBsZWdlbmQgb24gdG9wIHdpdGggYm90aCB0ZXh0LCBib3ggYW5kIHJlbW92ZSB0b29sdGlwXG4gICAgICAgIHRoaXMubGVnZW5kQmxvY2tcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSA/IChzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSArIGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpKSA6IDBcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywgMCknXG4gICAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRoaXMub3B0cy5pc1BpZUxlZ2VuZCkge1xuICAgICAgICAgIGQzU3ZnLnNlbGVjdEFsbCgnLnZjLWxlZ2VuZCcpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGVjdCh0aGlzKS5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAgICAgICAgIC5odG1sKCcnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBsZWdlbmRUZXh0LmNsYXNzZWQoJ3ZjLWhpZGRlbicsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ICYmIHRoaXMubGVnZW5kRGlzcGxheS5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubGVnZW5kQmxvY2sgJiYgdGhpcy5sZWdlbmRCbG9jay5yZW1vdmUoKVxuICAgIHRoaXMubGVnZW5kRGlzcGxheSAmJiB0aGlzLmxlZ2VuZERpc3BsYXkucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcmllcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4uZHJhdygpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLnVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5zaG93SGlkZShzaG93RmxhZylcbiAgICB9KVxuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZWRyYXcoKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgdGhpcy5wbG90U2VyaWVzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==