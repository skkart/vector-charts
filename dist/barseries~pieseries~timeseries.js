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

      var svgClass = 'vc-svg ' + opts.chart.className;
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
        }, 450); // 'this' Will have reference of timeSeriesChart or pieSeriesChart

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
/*! exports provided: scaleBand, scaleLinear, scaleTime, axisBottom, axisTop, axisLeft, axisRight, timeFormat, interpolate, select, selectAll, d3Mouse, d3Event, d3Touch, d3Touches, range, max, transpose, bisector, brushX, brushY, line, stack, area, stackOrderNone, stackOffsetNone, pie, arc, zoom, zoomTransform, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "../node_modules/d3-scale/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]; });

/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-axis */ "../node_modules/d3-axis/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisRight"]; });

/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "../node_modules/d3-time-format/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]; });

/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "../node_modules/d3-interpolate/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["interpolate"]; });

/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "../node_modules/d3-selection/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_4__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Mouse", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_4__["mouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Event", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_4__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Touch", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_4__["touch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Touches", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_4__["touches"]; });

/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-array */ "../node_modules/d3-array/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return d3_array__WEBPACK_IMPORTED_MODULE_5__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return d3_array__WEBPACK_IMPORTED_MODULE_5__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return d3_array__WEBPACK_IMPORTED_MODULE_5__["transpose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return d3_array__WEBPACK_IMPORTED_MODULE_5__["bisector"]; });

/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-brush */ "../node_modules/d3-brush/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushX", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_6__["brushX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushY", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_6__["brushY"]; });

/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-shape */ "../node_modules/d3-shape/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_7__["line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_7__["stack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_7__["area"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_7__["stackOrderNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_7__["stackOffsetNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_7__["pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_7__["arc"]; });

/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-zoom */ "../node_modules/d3-zoom/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return d3_zoom__WEBPACK_IMPORTED_MODULE_8__["zoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return d3_zoom__WEBPACK_IMPORTED_MODULE_8__["zoomTransform"]; });

// import * as zoom from 'd3-zoom'



















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
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
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

      var tableStr = '<table><tbody><tr>\n            <td class="value_full" colspan="2">\n            ' + dataArr[timeInfo.dataIndex] + '\n            </td></tr>';

      for (var key in plotSet) {
        var val = dataArr[plotSet[key].dataIndex];
        if (!plotSet[key].visible || isNaN(val)) {
          continue;
        }

        // Find Y Axis format is preset
        var yOrient = yAxis[plotSet[key].plotAxis[0]];
        var format = yOrient.format || defaultValueFormat;

        tableStr += '<tr>\n        <td class=\'name\'>\n            <span style=\'background-color:' + plotSet[key].color + '\'></span>\n        </td>\n        <td class=\'value\'>\n            ' + format(val, plotSet[key].unit) + '\n        </td>\n        </tr>';
      }

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
    opts.tooltip.format = function (d) {
      if (!d || !d.value) {
        return '';
      }
      var pieObj = this.options.series.pie;
      var format = pieObj.format || defaultValueFormat;
      var percentage = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(d.value / pieObj.total * 100, 1);

      return '<table style=\'opacity: 0.8;\'>\n              <tbody>\n              <tr>\n              <td class=\'name\'><span style=\'background-color:' + d.color + '\'></span>' + d.name + '</td>\n              <td class=\'value\'>' + percentage + ' %</td>\n              </tr>\n              <tr>\n              <td class=\'value\' colspan=\'2\'>' + format(d.value, pieObj.unit) + '</td>\n              </tr>\n              </tbody>\n              </table>';
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9DaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2QzSW1wb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9oZWxwZXJzLmpzIiwid2VicGFjazovL3ZjLy4vbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvU2VyaWVzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0IiwiY29udGFpbmVyIiwib3B0cyIsImlzU3RyaW5nIiwiaXNPYmplY3QiLCJsZW5ndGgiLCJkYXRhUGFyc2VyIiwic2VsZWN0Iiwic2l6ZSIsIkVycm9yIiwiY29udGFpbmVyTmFtZSIsImNvbnRhaW5lckJveCIsImVsZW1lbnRPZmZzZXQiLCJ0YWtlQ29udGFpbmVyV2lkdGgiLCJjaGFydCIsIndpZHRoIiwidGFrZUNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJvcHRpb25zIiwiY2hhcnRIZWlnaHQiLCJjaGFydFdpZHRoIiwibWFyZ2luIiwiY2hhcnRUeXBlIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiY2hhcnRGdWxsU3BhY2UiLCJjaGFydENvbXBvbmVudHNBcnIiLCJzdmciLCJhcHBlbmQiLCJodG1sIiwic3ZnQ2xhc3MiLCJjbGFzc05hbWUiLCJpc1RvdWNoU2NyZWVuIiwiYXR0ciIsImNvdW50ZXIiLCJncmFwaFpvbmUiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImNoYXJ0Q21wdCIsIkNoYXJ0Q29tcG9uZW50IiwiZHJhdyIsInVwZGF0ZSIsInNob3dGbGFnIiwic2hvd0hpZGUiLCJyZW1vdmUiLCJjaGFydFJlc2l6ZSIsInRocm90dGVkUmVzaXplIiwidGhyb3R0bGUiLCJNYXRoIiwiZmxvb3IiLCJzZXRUaW1lb3V0IiwiY2hhcnRJZCIsImlkIiwid2luZG93Iiwib24iLCJhdXRvU2l6ZUNoYXJ0IiwicmVzaXplZEdyYXBoV2lkdGgiLCJkZXN0cm95RnVsbCIsInZlcnNpb24iLCJhZGREZWZhdWx0Q2hhcnRPcHRpb25zIiwiY2hhcnRDb3VudGVyIiwidG9vbHRpcCIsInZpc2libGUiLCJmb3JtYXQiLCJsZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJwb3NpdGlvbiIsImNvbnN0YW50cyIsIkRJUl9UT1AiLCJpc0Z1bmN0aW9uIiwiYWZ0ZXJEcmF3IiwiYyIsIm9uQ29tcGxldGUiLCJ0aW1lIiwib25FcnJvciIsImVycm9yIiwiZGVmYXVsdFZhbHVlRm9ybWF0IiwidmFsIiwidW5pdCIsImRlY2ltYWxzIiwiZGVub21pbmF0b3IiLCJrVmFsIiwiZ2V0VmFsdWVXaXRoRGVjaW1hbHMiLCJtVmFsIiwiYWRkRGVmYXVsdFRTT3B0aW9ucyIsInhBeGlzIiwiVU5JVFNfVElNRSIsInRpY2tGb3JtYXR0ZXIiLCJ0aW1lSW5mbyIsInRpbWVMZW4iLCJ0aW1lUmFuZ2UiLCJkYXRlRGlmZiIsInhBeGlzRm4iLCJUSU1FX0ZPUk1BVF9CVUZGRVIiLCJ0aW1lRm9ybWF0IiwieERhdGUiLCJ5QXhpcyIsIlVOSVRTX0RFRiIsIm1pbiIsInpvb20iLCJmb3JtYXRUaW1lIiwiZCIsImlzQXJyYXkiLCJwbG90U2V0Iiwiem9uZU9mZnNldCIsInRhYmxlU3RyIiwiZGF0YUluZGV4Iiwia2V5IiwiaXNOYU4iLCJ5T3JpZW50IiwicGxvdEF4aXMiLCJjb2xvciIsIm5hbWUiLCJhZGREZWZhdWx0QlNPcHRpb25zIiwiZGF0YUFyciIsImFkZERlZmF1bHRQU09wdGlvbnMiLCJ2YWx1ZSIsInBpZU9iaiIsInNlcmllcyIsInBpZSIsInBlcmNlbnRhZ2UiLCJ0b3RhbCIsIkRJUl9SSUdIVCIsIlRpbWVTZXJpZXNMZWdlbmQiLCJkaXNhYmxlU2VyaWVzVG9nZ2xlIiwic2VsZiIsIm1heFdpZHRoTGVnZW5kIiwic3BhY2luZ05hbWVzIiwiZ3JhcGhPcHRpb25zIiwiZWFjaFBsb3RTZXQiLCJlYWNoUGxvdE5hbWVzIiwibGVuZyIsInRleHRXaWR0aCIsIm1heExlbkxlZ2VuZCIsImR1bW15RyIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsInN0eWxlIiwidGV4dCIsImVhY2giLCJpIiwidGhpc1dpZHRoIiwicm91bmQiLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJwdXNoIiwiZWxlIiwibWF4VGV4dExlbmd0aCIsInRvZ2dsZVNlcmllcyIsImVtcHR5Rm4iLCJtYXhZTGVuIiwiZnVsbFlMZW4iLCJMRUdFTkRfWV9TUEFDRSIsImRpdldpZHRoIiwiTEVHRU5EX1NIT1dfV0lEVEgiLCJsZWdlbmREaXYiLCJzZXJpZXNOYW1lIiwidmlzaWJsZVNlcmllcyIsInBsb3ROYW1lIiwiYXBwbHlZQXhpcyIsImN1cnJlbnRQbG90SW5mbyIsIkRJUl9MRUZUIiwiY29uc3RydWN0WUF4aXNJbmZvIiwibW9kaWZ5QXhpc1Byb3BzIiwiZG9tYWluU2NhbGUiLCJ5UmFuZ2UiLCJ5QXhpczIiLCJ5UmFuZ2UyIiwicmVTY2FsZVlBeGlzIiwicmVkcmF3Iiwic0ZsYWciLCJjbGFzc2VkIiwib25MZWdlbmRDaGFuZ2UiLCJjYWxsIiwibGVnZW5kRGlzcGxheSIsImxlZ2VuZEJsb2NrIiwieCIsIkxFR0VORF9TUEFDRSIsInkiLCJ0cmFpbGluZyIsIkxFR0VORF9URVhUX1giLCJMRUdFTkRfVEVYVF9ZIiwibGVnTmFtZSIsImlzUGllTGVnZW5kIiwic3Vic3RyaW5nIiwiTEVHRU5EX1JFQ1RfU0laRSIsImhvcml6b250YWxMZWdlbmRXaWR0aCIsIm5vZGUiLCJnZXRCQm94IiwibGVnZW5kVGV4dCIsImJhc2ljV2lkdGgiLCJsZWdlbmRQb3MiLCJWRVJUX1BPU19MRUdFTkQiLCJMRUdFTkRfTUFYX1dJRFRIIiwibGVnZW5kWFBvcyIsInhCdWZmIiwibGVnZW5kWVBvcyIsImQzU3ZnIiwiREFUQV9JTlRFUlZBTF9CVUZGRVJfWCIsIkxFR0VORF9SSUdIVF9CVUZGRVIiLCJTZXJpZXMiLCJwbG90U2VyaWVzIiwicGxvdEZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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RUFBbUI7QUFBQTs7QUFBQTtBQUVsQjs7OzsyQkFFTztBQUNOLFdBQUs0TSxVQUFMLENBQWdCcEssT0FBaEIsQ0FBd0IsVUFBVXFLLE1BQVYsRUFBa0I7QUFDeENBLGVBQU9sSyxJQUFQO0FBQ0QsT0FGRDtBQUdEOzs7NkJBRVM7QUFDUixXQUFLaUssVUFBTCxDQUFnQnBLLE9BQWhCLENBQXdCLFVBQVVxSyxNQUFWLEVBQWtCO0FBQ3hDQSxlQUFPakssTUFBUDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVTQyxRLEVBQVU7QUFDbEIsV0FBSytKLFVBQUwsQ0FBZ0JwSyxPQUFoQixDQUF3QixVQUFVcUssTUFBVixFQUFrQjtBQUN4Q0EsZUFBTy9KLFFBQVAsQ0FBZ0JELFFBQWhCO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7OzZCQUNVO0FBQ1IsV0FBSytKLFVBQUwsQ0FBZ0JwSyxPQUFoQixDQUF3QixVQUFVcUssTUFBVixFQUFrQjtBQUN4Q0EsZUFBT2pDLE1BQVA7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUztBQUNSLFdBQUtnQyxVQUFMLENBQWdCcEssT0FBaEIsQ0FBd0IsVUFBVXFLLE1BQVYsRUFBa0I7QUFDeENBLGVBQU85SixNQUFQO0FBQ0QsT0FGRDtBQUdBLFdBQUs2SixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBSzVNLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUFwQ2lDMEMsOEQ7O0FBQWZpSyxxRSIsImZpbGUiOiJiYXJzZXJpZXN+cGllc2VyaWVzfnRpbWVzZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2VsZW1lbnRPZmZzZXQsIGlzT2JqZWN0LCBpc1N0cmluZywgdGhyb3R0bGV9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lciwgb3B0cykge1xuICAgIHN1cGVyKClcbiAgICBpZiAoaXNTdHJpbmcoY29udGFpbmVyKSAmJiBpc09iamVjdChvcHRzKSAmJiBjb250YWluZXIubGVuZ3RoICYmIGlzT2JqZWN0KG9wdHMuZGF0YVBhcnNlcikpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gc2VsZWN0KGNvbnRhaW5lcilcbiAgICAgIGlmICghdGhpcy5jb250YWluZXIuc2l6ZSgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGdyYXBoIGNvbnRhaW5lciBzcGVjdGlmZWQgaW4gb3B0aW9ucyBkb2VzbnQgZXhpc3QgaW5zaWRlIGluIERvY3VtZW50IEJvZHknKVxuICAgICAgfVxuICAgICAgb3B0cy5jb250YWluZXJOYW1lID0gY29udGFpbmVyXG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lckJveCA9IGVsZW1lbnRPZmZzZXQodGhpcy5jb250YWluZXIpXG5cbiAgICAgIGxldCB0YWtlQ29udGFpbmVyV2lkdGggPSBmYWxzZVxuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUob3B0cy5jaGFydC53aWR0aCkpIHtcbiAgICAgICAgb3B0cy5jaGFydC53aWR0aCA9IGNvbnRhaW5lckJveC53aWR0aFxuICAgICAgICB0YWtlQ29udGFpbmVyV2lkdGggPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGxldCB0YWtlQ29udGFpbmVySGVpZ2h0ID0gZmFsc2VcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG9wdHMuY2hhcnQuaGVpZ2h0KSkge1xuICAgICAgICBvcHRzLmNoYXJ0LmhlaWdodCA9IGNvbnRhaW5lckJveC5oZWlnaHRcbiAgICAgICAgdGFrZUNvbnRhaW5lckhlaWdodCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuY2hhcnQud2lkdGggPiBvcHRzLmNoYXJ0Lm1heFdpZHRoKSB7XG4gICAgICAgIG9wdHMuY2hhcnQud2lkdGggPSBvcHRzLmNoYXJ0Lm1heFdpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmNoYXJ0LndpZHRoIDwgb3B0cy5jaGFydC5taW5XaWR0aCkge1xuICAgICAgICBvcHRzLmNoYXJ0LndpZHRoID0gb3B0cy5jaGFydC5taW5XaWR0aFxuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRzXG5cbiAgICAgIHRoaXMuY2hhcnRIZWlnaHQgPSBvcHRzLmNoYXJ0LmhlaWdodFxuICAgICAgdGhpcy5jaGFydFdpZHRoID0gb3B0cy5jaGFydC53aWR0aFxuICAgICAgdGhpcy5tYXJnaW4gPSBvcHRzLmNoYXJ0Lm1hcmdpblxuICAgICAgdGhpcy5jaGFydFR5cGUgPSBvcHRzLmNoYXJ0LmNoYXJ0VHlwZVxuXG4gICAgICBpZiAodGFrZUNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgIHRoaXMuY2hhcnRXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAtICh0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICB9XG5cbiAgICAgIGlmICh0YWtlQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNoYXJ0SGVpZ2h0IC0gKHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgIH1cblxuICAgICAgLy8gQXR0YWNoIGRhdGFQcm9jZXNzIHRvIGNoYXJ0LCB3aGljaCBnZW5lcmF0ZSBjaGFydERhdGEgYW5kIHBsb3QgSW5mbyBiYXNlZCBvbiBKU09OIGFuZCBvcHRpb25zXG4gICAgICB0aGlzLmRhdGFQYXJzZXIgPSBvcHRzLmRhdGFQYXJzZXJcblxuICAgICAgLy8gRGVsZXRlIGRhdGFQcm9jZXNzIGZyb20gb3B0aW9uc1xuICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5kYXRhUGFyc2VyXG5cbiAgICAgIHRoaXMuY2hhcnRGdWxsU3BhY2UgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNoYXJ0V2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQsXG4gICAgICAgIGhlaWdodDogdGhpcy5jaGFydEhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSxcbiAgICAgIH1cblxuXG4gICAgICAvLyBBcnJheSB3aGljaCBob2xkcyBhbGwgdGhlIGNoYXJ0Q29tcG9uZW50cyByZXF1aXJlZCBmb3IgdGhlIGdyYXBoIGxpa2UgYXhpcywgc2VyaWVzLCB0b29sdGlwLCBsZWdlbmQgZXRjXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0FyciA9IFtdXG5cbiAgICAgIHRoaXMuc3ZnID0gdGhpcy5jb250YWluZXIuc2VsZWN0KCdzdmcnKVxuXG4gICAgICBpZiAodGhpcy5zdmcuc2l6ZSgpID09PSAwKSB7XG4gICAgICAgIC8vIENyZWF0ZSBzdmcgZWxlbWVudCBpZiBub3QgZXhpc3QgaW5zaWRlIGNoYXJ0IGNvbnRhaW5lciBESVZcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLmNvbnRhaW5lci5hcHBlbmQoJ3N2ZycpXG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHN2ZyBpZiBpdCBoYXMgbmVlZGxlc3MgY29udGVudFxuICAgICAgdGhpcy5zdmcuaHRtbCgnJylcblxuICAgICAgbGV0IHN2Z0NsYXNzID0gJ3ZjLXN2ZyAnICsgb3B0cy5jaGFydC5jbGFzc05hbWVcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgICBzdmdDbGFzcyArPSAnIHZjLW5vc2VsZWN0J1xuICAgICAgfVxuICAgICAgdGhpcy5zdmdcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0KVxuICAgICAgICAuYXR0cignY2xhc3MnLCBzdmdDbGFzcylcblxuXG4gICAgICAvLyBBZGQgZGVmcyB0byBzaG93IHBsb3Qgc2VyaWVzIHdpdGhpbiB0aGUgZGVmIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoJ2RlZnMnKVxuICAgICAgICAuYXBwZW5kKCdjbGlwUGF0aCcpXG4gICAgICAgIC5hdHRyKCdpZCcsIGBjaGFydF9jbGlwXyR7dGhpcy5vcHRpb25zLmNoYXJ0LmNvdW50ZXJ9YClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuY2hhcnRIZWlnaHQpXG5cbiAgICAgIC8vIEFkZCBncmFwaFpvbmUgdGFnLCBzbyB0aGF0IGFsbCBzZXJpZXMgYW5kIGF4aXMgYXJlIGdyb3VwZWQgdG9nZXRoZXJcbiAgICAgIHRoaXMuZ3JhcGhab25lID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1ncmFwaFpvbmUnKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdDaGFydCBkcmF3JywgdGhpcylcbiAgICAvLyBEcmF3IGFsbCB0aGUgY2hhcnRDb21wb25lbnRzIGluIHRoZSBzYW1lIG9yZGVyIG9mIHRoZXJlIGluaXRpbGl6YXRpb24gdXNpbmcgY2hhcnRDb21wb25lbnRzQXJyXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LmRyYXcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc3ZnLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aClcbiAgICB0aGlzLmdyYXBoWm9uZS5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKVxuICAgIHRoaXMuc3ZnLnNlbGVjdCgnY2xpcFBhdGgnKS5zZWxlY3QoJ3JlY3QnKS5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRXaWR0aClcblxuICAgIGNvbnNvbGUubG9nKCdDaGFydCB1cGRhdGUnLCB0aGlzKVxuICAgIC8vIFVwZGF0ZSBhbGwgY2hhcnQgY29tcG9uZW50IGJhc2VkIG9uIG5ldyB3aWR0aCBjaGFuZ2VzXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LnVwZGF0ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIGNvbnNvbGUubG9nKCdDaGFydCBzaG93SGlkZScsIHRoaXMpXG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnIC8vIENvbnZlcnQgYW55IHR5cGUgdG8gYm9vbGVhblxuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC5zaG93SGlkZShzaG93RmxhZylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgcmVtb3ZlJywgdGhpcylcbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gY2hhcnRSZXNwb25zaXZlIGJhc2VkIG9uIHNjcmVlbiByZXNpemUgaXMgaGFuZGxlZFxuICBjaGFydFJlc3BvbnNpdmUgKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuY2hhcnRSZXNpemUpIHtcbiAgICAgIHRoaXMudGhyb3R0ZWRSZXNpemUgPSB0aHJvdHRsZSgod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgICBpZiAod2lkdGggPT09IHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gLy8gRG9udCByZXNpemUgaWYgZ3JhcGggaXMgYWxyZWFkeSBhZGp1c3RlZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKVxuICAgICAgICB0aGlzLmNoYXJ0RnVsbFNwYWNlLmhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KVxuICAgICAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gKHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0IC0gKHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAwKVxuICAgICAgfSwgNDUwKSAvLyAndGhpcycgV2lsbCBoYXZlIHJlZmVyZW5jZSBvZiB0aW1lU2VyaWVzQ2hhcnQgb3IgcGllU2VyaWVzQ2hhcnRcblxuICAgICAgLy8gQWRkIHJlc2l6ZSBmb3IgZWFjaCBjaGFydCBiYXNlZCBvbiBjaGFydCBJRCBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IGNoYXJ0SWQgPSAndmMtJyArICh0aGlzLm9wdGlvbnMuY2hhcnQuaWQgfHwgdGhpcy5vcHRpb25zLmNoYXJ0LmNvdW50ZXIpXG4gICAgICBzZWxlY3Qod2luZG93KS5vbigncmVzaXplLicgKyBjaGFydElkLCAoKSA9PiB0aGlzLmF1dG9TaXplQ2hhcnQoKSlcblxuICAgIH1cbiAgfVxuXG4gIGF1dG9TaXplQ2hhcnQgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckJveCA9IGVsZW1lbnRPZmZzZXQodGhpcy5jb250YWluZXIpXG4gICAgbGV0IHJlc2l6ZWRHcmFwaFdpZHRoID0gY29udGFpbmVyQm94LndpZHRoXG5cbiAgICBpZiAocmVzaXplZEdyYXBoV2lkdGggPiB0aGlzLm9wdGlvbnMuY2hhcnQubWF4V2lkdGgpIHtcbiAgICAgIHJlc2l6ZWRHcmFwaFdpZHRoID0gdGhpcy5vcHRpb25zLmNoYXJ0Lm1heFdpZHRoXG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZWRHcmFwaFdpZHRoIDwgdGhpcy5vcHRpb25zLmNoYXJ0Lm1pbldpZHRoKSB7XG4gICAgICByZXNpemVkR3JhcGhXaWR0aCA9IHRoaXMub3B0aW9ucy5jaGFydC5taW5XaWR0aFxuICAgIH1cblxuICAgIHRoaXMudGhyb3R0ZWRSZXNpemUocmVzaXplZEdyYXBoV2lkdGgsIGNvbnRhaW5lckJveC5oZWlnaHQpXG4gIH1cblxuICAvLyBEZXN0cm95IGFsbCBjaGFydCBwcm9wZXJ0aWVzIGFuZCBjb21wb25lbnRzXG4gIGRlc3Ryb3kgKGRlc3Ryb3lGdWxsKSB7XG4gICAgZGVzdHJveUZ1bGwgPSAhIWRlc3Ryb3lGdWxsXG4gICAgLy8gUmVtb3ZlIHJlc2l6ZSBoYW5kZXIgb24gd2luZG93IGZvciB2Y0NoYXJ0IG5hbWVzcGFjZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuY2hhcnRSZXNpemUpIHtcbiAgICAgIGNvbnN0IGNoYXJ0SWQgPSAndmMtJyArICh0aGlzLm9wdGlvbnMuY2hhcnQuaWQgfHwgdGhpcy5vcHRpb25zLmNoYXJ0LmNvdW50ZXIpXG4gICAgICBzZWxlY3Qod2luZG93KS5vbigncmVzaXplLicgKyBjaGFydElkLCBudWxsKVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgY2hhcnRDb21wb25lbnRzICh0aW1lU2VyaWVzQ2hhcnQgb3IgcGllU2VyaWVzQ2hhcnQpXG4gICAgdGhpcy5yZW1vdmUoKVxuXG4gICAgLy8gUmVtb3ZlIHN2ZyBhbmQgY29udGFpbmVyIGlmIGRlc3Ryb3lGdWxsIGlzIHRydWVcbiAgICBkZXN0cm95RnVsbCAmJiB0aGlzLnN2Zy5yZW1vdmUoKVxuICAgIGRlc3Ryb3lGdWxsICYmIHRoaXMuY29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCIvLyBpbXBvcnQgKiBhcyB6b29tIGZyb20gJ2QzLXpvb20nXG5cbmV4cG9ydCB7XG4gIHNjYWxlQmFuZCxcbiAgc2NhbGVMaW5lYXIsXG4gIHNjYWxlVGltZVxufSBmcm9tICdkMy1zY2FsZSdcblxuZXhwb3J0IHtcbiAgYXhpc0JvdHRvbSxcbiAgYXhpc1RvcCxcbiAgYXhpc0xlZnQsXG4gIGF4aXNSaWdodFxufSBmcm9tICdkMy1heGlzJ1xuXG5leHBvcnQge3RpbWVGb3JtYXR9IGZyb20gJ2QzLXRpbWUtZm9ybWF0J1xuXG5leHBvcnQge2ludGVycG9sYXRlfSBmcm9tICdkMy1pbnRlcnBvbGF0ZSdcblxuZXhwb3J0IHtcbiAgc2VsZWN0LFxuICBzZWxlY3RBbGwsXG4gIG1vdXNlIGFzIGQzTW91c2UsXG4gIGV2ZW50IGFzIGQzRXZlbnQsXG4gIHRvdWNoIGFzIGQzVG91Y2gsXG4gIHRvdWNoZXMgYXMgZDNUb3VjaGVzXG59IGZyb20gJ2QzLXNlbGVjdGlvbidcblxuZXhwb3J0IHtcbiAgcmFuZ2UsXG4gIG1heCxcbiAgdHJhbnNwb3NlLFxuICBiaXNlY3RvclxufSBmcm9tICdkMy1hcnJheSdcblxuZXhwb3J0IHticnVzaFgsIGJydXNoWX0gZnJvbSAnZDMtYnJ1c2gnXG5cbmV4cG9ydCB7XG4gIGxpbmUsIHN0YWNrLCBhcmVhLFxuICBzdGFja09yZGVyTm9uZSwgc3RhY2tPZmZzZXROb25lLFxuICBwaWUsIGFyY1xufSBmcm9tICdkMy1zaGFwZSdcblxuZXhwb3J0IHt6b29tLCB6b29tVHJhbnNmb3JtfSBmcm9tICdkMy16b29tJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZlcnNpb246ICd2NSdcbn1cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2NoYXJ0Q291bnRlciwgZ2V0VmFsdWVXaXRoRGVjaW1hbHMsIGlzQXJyYXksIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge3RpbWVGb3JtYXR9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRDaGFydE9wdGlvbnMgKG9wdHMpIHtcblxuICBvcHRzLmNoYXJ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgY2hhcnRSZXNpemU6IGZhbHNlLFxuICAgIGlzVG91Y2hTY3JlZW46IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWF4V2lkdGg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgIG1pbldpZHRoOiAwXG4gIH0sIG9wdHMuY2hhcnQpXG4gIG9wdHMuY2hhcnQuY291bnRlciA9IGNoYXJ0Q291bnRlcigpXG5cbiAgb3B0cy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IGZhbHNlIC8vIFVzZSBhcnlha2FDaGFydHMgaW50ZXJuYWwgdG9vbHRpcCBmb3JtYXR0ZXIgdG8gc2hvdyByYXcgZGF0YVxuICB9LCAob3B0cy50b29sdGlwIHx8IHt9KSlcblxuICBvcHRzLmxlZ2VuZCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgbGVnZW5kUHJlZml4OiAnJyxcbiAgICBwb3NpdGlvbjogY29uc3RhbnRzLkRJUl9UT1BcbiAgfSwgKG9wdHMubGVnZW5kIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy5hZnRlckRyYXcpKSB7XG4gICAgb3B0cy5hZnRlckRyYXcgPSBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGNcbiAgICB9XG4gIH1cblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy5vbkNvbXBsZXRlKSkge1xuICAgIG9wdHMub25Db21wbGV0ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2hhcnQgbG9hZGluZyBvZiAke29wdHMuY29udGFpbmVyTmFtZX0gaXMgY29tcGxldGVkIGluICR7dGltZX0gbXNgKVxuICAgIH1cbiAgfVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLm9uRXJyb3IpKSB7XG4gICAgb3B0cy5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2hhcnQgaGFzIGVuY291bnRlcmVkIGVycm9yIG9mICR7b3B0cy5jb250YWluZXJOYW1lfSBgLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3B0c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZhbHVlRm9ybWF0ICh2YWwsIHVuaXQgPSAnJywgZGVjaW1hbHMgPSAzKSB7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gMTAwMFxuICBpZiAodmFsID4gZGVub21pbmF0b3IpIHtcbiAgICBjb25zdCBrVmFsID0gZ2V0VmFsdWVXaXRoRGVjaW1hbHModmFsIC8gZGVub21pbmF0b3IsIGRlY2ltYWxzKVxuICAgIGlmIChrVmFsID4gZGVub21pbmF0b3IpIHtcbiAgICAgIGNvbnN0IG1WYWwgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscyhrVmFsIC8gZGVub21pbmF0b3IsIGRlY2ltYWxzKVxuICAgICAgcmV0dXJuIGAke21WYWx9TSAke3VuaXR9YFxuICAgIH1cbiAgICByZXR1cm4gYCR7a1ZhbH1LICR7dW5pdH1gXG4gIH1cbiAgcmV0dXJuIGAke2dldFZhbHVlV2l0aERlY2ltYWxzKHZhbCwgZGVjaW1hbHMpfSAke3VuaXR9YFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VFNPcHRpb25zIChvcHRzKSB7XG4gIC8vIEFkZCBkZWZhdWx0cyB0byB4QXhpc1xuICBvcHRzLnhBeGlzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYm90dG9tOiB7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfVElNRSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH0sIChvcHRzLnhBeGlzIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy54QXhpcy5ib3R0b20udGlja0Zvcm1hdHRlcikpIHtcbiAgICBjb25zdCB0aW1lSW5mbyA9IG9wdHMudGltZUluZm9cbiAgICAvLyBJZiB0aGUgZGF0ZSByYW5nZSBpcyBsZXNzIHRoYW4gMiBkYXlzLCBTaG93IGluIGhvdXIgZm9ybWF0XG4gICAgY29uc3QgdGltZUxlbiA9IHRpbWVJbmZvLnRpbWVSYW5nZS5sZW5ndGhcbiAgICBjb25zdCBkYXRlRGlmZiA9IHRpbWVJbmZvLnRpbWVSYW5nZVt0aW1lTGVuIC0gMV0gLSB0aW1lSW5mby50aW1lUmFuZ2VbMF1cblxuICAgIGNvbnN0IHhBeGlzRm4gPSAoZGF0ZURpZmYgPCBjb25zdGFudHMuVElNRV9GT1JNQVRfQlVGRkVSKSA/IHRpbWVGb3JtYXQoJyVIOiVNJykgOiB0aW1lRm9ybWF0KCclZCAlYiAlWScpXG4gICAgb3B0cy54QXhpcy5ib3R0b20udGlja0Zvcm1hdHRlciA9ICh4RGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHhBeGlzRm4oeERhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgeUF4aXMgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBkZWZhdWx0IGlzIGxlZnQgYW5kIGl0cyB2YWx1ZSBheGlzIHdpdGggdW5pdFxuICBpZiAoIW9wdHMueUF4aXMpIHtcbiAgICBvcHRzLnlBeGlzID0ge1xuICAgICAgbGVmdDoge31cbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5sZWZ0KSB7XG4gICAgb3B0cy55QXhpcy5sZWZ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5sZWZ0KVxuICB9XG5cbiAgaWYgKG9wdHMueUF4aXMucmlnaHQpIHtcbiAgICBvcHRzLnlBeGlzLnJpZ2h0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5yaWdodClcbiAgfVxuXG4gIG9wdHMuem9vbSA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IGZhbHNlXG4gIH0sIChvcHRzLnpvb20gfHwge30pKVxuXG4gIC8vIEdlbmVyYWwgT3B0aW9ucyB0byBib3RoIGNoYXJ0VHlwZVxuICBvcHRzLnRvb2x0aXAgPSBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZvcm1hdDogZmFsc2UgLy8gVXNlIGFyeWFrYUNoYXJ0cyBpbnRlcm5hbCB0b29sdGlwIGZvcm1hdHRlciB0byBzaG93IHJhdyBkYXRhXG4gIH0sIChvcHRzLnRvb2x0aXAgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLnRvb2x0aXAuZm9ybWF0KSkge1xuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSB0aW1lRm9ybWF0KCclZCAlYiAlWSAgJUg6JU06JVMnKVxuICAgIG9wdHMudG9vbHRpcC5mb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKCFkIHx8ICFpc0FycmF5KGQpKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgY29uc3QgcGxvdFNldCA9IHRoaXMub3B0aW9ucy5wbG90U2V0XG4gICAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuICAgICAgY29uc3Qgem9uZU9mZnNldCA9IHRoaXMub3B0aW9ucy54QXhpcy56b25lT2Zmc2V0IHx8ICcnXG4gICAgICBjb25zdCB5QXhpcyA9IHRoaXMub3B0aW9ucy55QXhpc1xuXG4gICAgICBsZXQgdGFibGVTdHIgPSBgPHRhYmxlPjx0Ym9keT48dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ2YWx1ZV9mdWxsXCIgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICR7Zm9ybWF0VGltZShkW3RpbWVJbmZvLmRhdGFJbmRleF0pfSAke3pvbmVPZmZzZXR9XG4gICAgICAgICAgICA8L3RkPjwvdHI+YFxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBwbG90U2V0KSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRbcGxvdFNldFtrZXldLmRhdGFJbmRleF1cbiAgICAgICAgaWYgKCFwbG90U2V0W2tleV0udmlzaWJsZSB8fCBpc05hTih2YWwpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgWSBBeGlzIGZvcm1hdCBpcyBwcmVzZXRcbiAgICAgICAgY29uc3QgeU9yaWVudCA9IHlBeGlzW3Bsb3RTZXRba2V5XS5wbG90QXhpc1swXV1cbiAgICAgICAgY29uc3QgZm9ybWF0ID0geU9yaWVudC5mb3JtYXQgfHwgZGVmYXVsdFZhbHVlRm9ybWF0XG5cbiAgICAgICAgdGFibGVTdHIgKz0gYDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPSduYW1lJz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7cGxvdFNldFtrZXldLmNvbG9yfSc+PC9zcGFuPiR7cGxvdFNldFtrZXldLm5hbWV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPlxuICAgICAgICAgICAgJHtmb3JtYXQodmFsLCBwbG90U2V0W2tleV0udW5pdCl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+YFxuICAgICAgfVxuXG4gICAgICB0YWJsZVN0ciArPSAnPC90Ym9keT48L3RhYmxlPidcblxuICAgICAgcmV0dXJuIHRhYmxlU3RyXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0QlNPcHRpb25zIChvcHRzKSB7XG4gIC8vIEFkZCBkZWZhdWx0cyB0byB4QXhpc1xuICBvcHRzLnhBeGlzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYm90dG9tOiB7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfSwgKG9wdHMueEF4aXMgfHwge30pKVxuXG5cbiAgLy8gSWYgeUF4aXMgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBkZWZhdWx0IGlzIGxlZnQgYW5kIGl0cyB2YWx1ZSBheGlzIHdpdGggdW5pdFxuICBpZiAoIW9wdHMueUF4aXMpIHtcbiAgICBvcHRzLnlBeGlzID0ge1xuICAgICAgbGVmdDoge31cbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5sZWZ0KSB7XG4gICAgb3B0cy55QXhpcy5sZWZ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5sZWZ0KVxuICB9XG5cbiAgaWYgKG9wdHMueUF4aXMucmlnaHQpIHtcbiAgICBvcHRzLnlBeGlzLnJpZ2h0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5yaWdodClcbiAgfVxuXG4gIG9wdHMuem9vbSA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IGZhbHNlXG4gIH0sIChvcHRzLnpvb20gfHwge30pKVxuXG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBsZXQgZGF0YUFyciA9IGRcbiAgICAgIGlmIChkICYmIGQudmFsKSB7XG4gICAgICAgIGRhdGFBcnIgPSBkLnZhbFxuICAgICAgfVxuICAgICAgaWYgKCFpc0FycmF5KGRhdGFBcnIpKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgY29uc3QgcGxvdFNldCA9IHRoaXMub3B0aW9ucy5wbG90U2V0XG4gICAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuICAgICAgY29uc3QgeUF4aXMgPSB0aGlzLm9wdGlvbnMueUF4aXNcblxuICAgICAgbGV0IHRhYmxlU3RyID0gYDx0YWJsZT48dGJvZHk+PHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidmFsdWVfZnVsbFwiIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICAke2RhdGFBcnJbdGltZUluZm8uZGF0YUluZGV4XX1cbiAgICAgICAgICAgIDwvdGQ+PC90cj5gXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHBsb3RTZXQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YUFycltwbG90U2V0W2tleV0uZGF0YUluZGV4XVxuICAgICAgICBpZiAoIXBsb3RTZXRba2V5XS52aXNpYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBZIEF4aXMgZm9ybWF0IGlzIHByZXNldFxuICAgICAgICBjb25zdCB5T3JpZW50ID0geUF4aXNbcGxvdFNldFtrZXldLnBsb3RBeGlzWzBdXVxuICAgICAgICBjb25zdCBmb3JtYXQgPSB5T3JpZW50LmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcblxuICAgICAgICB0YWJsZVN0ciArPSBgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9J25hbWUnPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtwbG90U2V0W2tleV0uY29sb3J9Jz48L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPlxuICAgICAgICAgICAgJHtmb3JtYXQodmFsLCBwbG90U2V0W2tleV0udW5pdCl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+YFxuICAgICAgfVxuXG4gICAgICB0YWJsZVN0ciArPSAnPC90Ym9keT48L3RhYmxlPidcblxuICAgICAgcmV0dXJuIHRhYmxlU3RyXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0UFNPcHRpb25zIChvcHRzKSB7XG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoIWQgfHwgIWQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwaWVPYmogPSB0aGlzLm9wdGlvbnMuc2VyaWVzLnBpZVxuICAgICAgY29uc3QgZm9ybWF0ID0gcGllT2JqLmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscygoZC52YWx1ZSAvIHBpZU9iai50b3RhbCkgKiAxMDAsIDEpXG5cbiAgICAgIHJldHVybiBgPHRhYmxlIHN0eWxlPSdvcGFjaXR5OiAwLjg7Jz5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0nbmFtZSc+PHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtkLmNvbG9yfSc+PC9zcGFuPiR7ZC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPiR7cGVyY2VudGFnZX0gJTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZScgY29sc3Bhbj0nMic+JHtmb3JtYXQoZC52YWx1ZSwgcGllT2JqLnVuaXQpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+YFxuICAgIH1cbiAgfVxuXG4gIGFkZERlZmF1bHRDaGFydE9wdGlvbnMob3B0cylcblxuICBvcHRzLmxlZ2VuZC5wb3NpdGlvbiA9IGNvbnN0YW50cy5ESVJfUklHSFRcblxuICByZXR1cm4gb3B0c1xufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2VtcHR5Rm4sIGlzRnVuY3Rpb24sIHRocm90dGxlfSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc0xlZ2VuZCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBkaXNhYmxlU2VyaWVzVG9nZ2xlOiBmYWxzZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCA9IDBcbiAgICB0aGlzLm9wdHMuc3BhY2luZ05hbWVzID0gW11cblxuXG4gICAgY29uc3QgZ3JhcGhPcHRpb25zID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGdyYXBoT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgZWFjaFBsb3ROYW1lcyA9IE9iamVjdC5rZXlzKGVhY2hQbG90U2V0KVxuICAgIGxldCBsZW5nID0gMFxuICAgIGNvbnN0IHRleHRXaWR0aCA9IFtdXG4gICAgbGV0IG1heExlbkxlZ2VuZFxuXG4gICAgY29uc3QgZHVtbXlHID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgIC8vIEFkZCBhbGwgbmFtZSBvbiBET00gdG8gY2FsY3VsYXRlIGhvdyBtdWNoIHNwYWNlIGlzIG5lZWRlZCBmb3IgZXZlcnkgbmFtZXNcbiAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgIC5kYXRhKGVhY2hQbG90TmFtZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWxhYmVsJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzExcHgnKVxuICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc1MDAnKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIChzZWxmLm9wdHMubGVnZW5kUHJlZml4ICsgKGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0ubmFtZSA6ICcnKSlcbiAgICAgIH0pXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAvLyBGaW5kIHNpemUgcmVxdWlyZWQgZm9yIGVhY2ggbGVnZW5kIG9uIHNjcmVlblxuICAgICAgICBjb25zdCB0aGlzV2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkpXG4gICAgICAgIGlmICh0aGlzV2lkdGggPiBzZWxmLm9wdHMubWF4V2lkdGhMZWdlbmQpIHtcbiAgICAgICAgICBzZWxmLm9wdHMubWF4V2lkdGhMZWdlbmQgPSB0aGlzV2lkdGhcbiAgICAgICAgICBtYXhMZW5MZWdlbmQgPSBkXG4gICAgICAgIH1cbiAgICAgICAgdGV4dFdpZHRoLnB1c2godGhpc1dpZHRoKVxuICAgICAgfSlcblxuICAgIC8vIEZpbGwgdGhlIHNwYWNpbmcgQXJyIGhhdmluZyBwb3NpdGlvbiBmb3IgZWFjaCBsZWdlbmRzIG9uIGhvcml6b250YWwgb3JkZXJcbiAgICB0ZXh0V2lkdGguZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICBsZW5nICs9IGVsZVxuICAgICAgc2VsZi5vcHRzLnNwYWNpbmdOYW1lcy5wdXNoKGxlbmcpXG4gICAgfSlcblxuICAgIC8vIE1ha2UgbWF4VGV4dExlbmd0aCBIaWdoZXIgdG8gc2hvdyBmdWxsIHRleHQgZm9yIHBpZSBsZWdlbmRzXG4gICAgdGhpcy5vcHRzLm1heFRleHRMZW5ndGggPSBtYXhMZW5MZWdlbmQubGVuZ3RoICsgMTAwXG5cbiAgICBkdW1teUcucmVtb3ZlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBncmFwaE9wdGlvbnMgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9uc1xuICAgIGxldCB0b2dnbGVTZXJpZXMgPSBlbXB0eUZuXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBncmFwaE9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IGVhY2hQbG90TmFtZXMgPSBPYmplY3Qua2V5cyhlYWNoUGxvdFNldClcbiAgICBjb25zdCBtYXhZTGVuID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0ICogOTAgLyAxMDApXG4gICAgbGV0IGZ1bGxZTGVuID0gZWFjaFBsb3ROYW1lcy5sZW5ndGggKiBjb25zdGFudHMuTEVHRU5EX1lfU1BBQ0VcbiAgICBmdWxsWUxlbiA9IGZ1bGxZTGVuID4gbWF4WUxlbiA/IG1heFlMZW4gOiBmdWxsWUxlblxuICAgIGNvbnN0IGRpdldpZHRoID0gdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kICsgY29uc3RhbnRzLkxFR0VORF9TSE9XX1dJRFRIXG5cbiAgICB0aGlzLm9wdHMubGVnZW5kRGl2ID0ge1xuICAgICAgd2lkdGg6IGRpdldpZHRoLFxuICAgICAgaGVpZ2h0OiBmdWxsWUxlblxuICAgIH1cblxuXG4gICAgLy8gUGVyZm9tIFNlcmllcyBzaG93IGFuZCBoaWRlIG9uIGNsaWNrIG9mIGVhY2ggbGVnZW5kXG4gICAgaWYgKCF0aGlzLm9wdHMuZGlzYWJsZVNlcmllc1RvZ2dsZSkge1xuXG4gICAgICB0b2dnbGVTZXJpZXMgPSBmdW5jdGlvbiAoc2VyaWVzTmFtZSkge1xuICAgICAgICBsZXQgdmlzaWJsZVNlcmllcyA9IDBcbiAgICAgICAgbGV0IHBsb3ROYW1lXG5cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Nlcmllc05hbWVdICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdLnZpc2libGUpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgc2VyaWVzIGlzIGdldHRpbmcgZGlzYWJsZWQgYW5kIGl0cyBvbmx5IG9uZSBzZXJpZXMgdmlzaWJsZSwgRG9udCBkaXNhYmxlIGl0LlxuICAgICAgICAgIGZvciAocGxvdE5hbWUgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3ROYW1lXS52aXNpYmxlICYmIHZpc2libGVTZXJpZXMrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2aXNpYmxlU2VyaWVzIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcHBseVlBeGlzXG5cbiAgICAgICAgLy8gcGxvdFNlcmllcyB0aGF0IGlzIGdldHRpbmcgdG9nZ2xlZFxuICAgICAgICBsZXQgY3VycmVudFBsb3RJbmZvXG5cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0ICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdKSB7XG4gICAgICAgICAgY3VycmVudFBsb3RJbmZvID0gZWFjaFBsb3RTZXRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGN1cnJlbnRQbG90SW5mbykge1xuXG4gICAgICAgICAgY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGUgPSAhY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGVcblxuICAgICAgICAgIGlmIChjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0ucGxvdEF4aXNbMF0gPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgY29tcHV0ZSBtYXggYW5kIG1pbiB2YWx1ZSBmb3IgWUF4aXMgYmFzZWQgb24gc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYub3B0cy5jaGFydC5vcHRpb25zLCBzZWxmLm9wdHMuY2hhcnQuZGF0YVBhcnNlci5jb25zdHJ1Y3RZQXhpc0luZm8oKSlcblxuICAgICAgICAgICAgYXBwbHlZQXhpcyA9IGNvbnN0YW50cy5ESVJfTEVGVFxuICAgICAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgICAgIGRvbWFpblNjYWxlOiBncmFwaE9wdGlvbnMueVJhbmdlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0ucGxvdEF4aXNbMF0gPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcblxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGNvbXB1dGUgbWF4IGFuZCBtaW4gdmFsdWUgZm9yIFlBeGlzIGJhc2VkIG9uIHNlcmllcyB3aGljaCBhcmUgdmlzaWJsZVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLm9wdHMuY2hhcnQub3B0aW9ucywgc2VsZi5vcHRzLmNoYXJ0LmRhdGFQYXJzZXIuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgICAgICAgIGFwcGx5WUF4aXMgPSBjb25zdGFudHMuRElSX1JJR0hUXG4gICAgICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgICAgIGRvbWFpblNjYWxlOiBncmFwaE9wdGlvbnMueVJhbmdlMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGp1c3QgWUF4aXMgdGljayB2YWx1ZSBkaXNwbGF5IGJhc2VkIG9uIHlBeGlzIGNoYW5nZVxuICAgICAgICAgIHNlbGYub3B0cy5jaGFydC5yZVNjYWxlWUF4aXMoYXBwbHlZQXhpcylcblxuICAgICAgICAgIC8vIFJlZHJhdyBhbGwgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIHlBeGlzIGNoYW5nZVxuICAgICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMucmVkcmF3KClcblxuICAgICAgICAgIGNvbnN0IHNGbGFnID0gY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGVcblxuICAgICAgICAgIHNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3ZjLWZpbGwtaGlkZGVuJywgIXNGbGFnKVxuXG4gICAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25MZWdlbmRDaGFuZ2UpICYmIHNlbGYub3B0cy5vbkxlZ2VuZENoYW5nZS5jYWxsKHNlbGYub3B0cy5jaGFydCwgY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLCBzRmxhZylcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1ncm91cCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgxNSwgNSknKVxuXG4gICAgdGhpcy5sZWdlbmRCbG9jayA9IHRoaXMubGVnZW5kRGlzcGxheVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShlYWNoUGxvdE5hbWVzKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIC8vIFByb3ZpZGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBiYXNlZCBvbiBvcmRlclxuICAgICAgICBpZiAoc2VsZi5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICAgIGNvbnN0IHggPSBzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSA/IChzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSArIGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpKSA6IDBcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsIDApJ1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICAgIC8vIFByb3ZpZGUgdmVydGljYWwgcG9zaXRpb24gYmFzZWQgb24gb3JkZXJcbiAgICAgICAgICBjb25zdCB5ID0gaSAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKDAgLCcgKyB5ICsgJyknXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gJ3ZjLWxlZ2VuZCB2Yy1sZWdlbmQtJyArIGRcbiAgICAgIH0pXG4gICAgICAuY2xhc3NlZCgndmMtZmlsbC1oaWRkZW4nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2RdID8gIWVhY2hQbG90U2V0W2RdLnZpc2libGUgOiBmYWxzZSlcbiAgICAgIH0pXG5cbiAgICAvLyBMaXN0ZW4gdG8gY2xpY2sgZXZlbnQgb25seSBmb3IgdGltZXNlcmllcyBsZWdlbmRzXG4gICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgLm9uKCdjbGljaycsIHRocm90dGxlKHRvZ2dsZVNlcmllcywgMzAwLCB7IC8vIFNvbWV0aW1lcyB0b2dnbGUgZXZlbnQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzLCBoZW5jZSBibG9jayBieSBhZGRpbmcgdGhyb3R0bGVcbiAgICAgICAgdHJhaWxpbmc6IGZhbHNlXG4gICAgICB9KSlcblxuXG4gICAgdGhpcy5sZWdlbmRCbG9jay5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1sYWJlbCcpXG4gICAgICAuYXR0cigneCcsIGNvbnN0YW50cy5MRUdFTkRfVEVYVF9YKVxuICAgICAgLmF0dHIoJ3knLCBjb25zdGFudHMuTEVHRU5EX1RFWFRfWSlcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzExcHgnKVxuICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc1MDAnKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IGxlZ05hbWUgPSAoc2VsZi5vcHRzLmxlZ2VuZFByZWZpeCArIChlYWNoUGxvdFNldFtkXSA/IGVhY2hQbG90U2V0W2RdLm5hbWUgOiAnJykpXG4gICAgICAgIGlmIChzZWxmLm9wdHMuaXNQaWVMZWdlbmQgJiYgc2VsZi5vcHRzLm1heFRleHRMZW5ndGggPCBsZWdOYW1lLmxlbmd0aCkge1xuICAgICAgICAgIGxlZ05hbWUgPSBsZWdOYW1lLnN1YnN0cmluZygwLCBzZWxmLm9wdHMubWF4VGV4dExlbmd0aCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWdOYW1lXG4gICAgICB9KVxuXG5cbiAgICB0aGlzLmxlZ2VuZEJsb2NrLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWJveCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cignd2lkdGgnLCBjb25zdGFudHMuTEVHRU5EX1JFQ1RfU0laRSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBjb25zdGFudHMuTEVHRU5EX1JFQ1RfU0laRSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0uY29sb3IgOiAnJ1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzJweCcpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZF0gPyBlYWNoUGxvdFNldFtkXS5jb2xvciA6ICcnXG4gICAgICB9KVxuXG4gICAgdGhpcy5vcHRzLmhvcml6b250YWxMZWdlbmRXaWR0aCA9IE1hdGgucm91bmQodGhpcy5sZWdlbmREaXNwbGF5Lm5vZGUoKVxuICAgICAgLmdldEJCb3goKVxuICAgICAgLndpZHRoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIC8vIERpc3BsYXkgaW4gdmVydGljYWwgb3JkZXJcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGxlZ2VuZFRleHQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdEFsbCgnc3ZnIC52Yy1sZWdlbmQtbGFiZWwnKVxuICAgIGxldCBiYXNpY1dpZHRoID0gdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodFxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgLy8gRGlzcGxheSBsZWdlbmRzIHZlcnRpY2FsbHkgb24gcmlnaHQgc2lkZVxuICAgICAgYmFzaWNXaWR0aCArPSBjb25zdGFudHMuTEVHRU5EX1NIT1dfV0lEVEhcbiAgICAgIGxldCBsZWdlbmRQb3MgPSBjb25zdGFudHMuVkVSVF9QT1NfTEVHRU5EXG4gICAgICBpZiAodGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID09PSBjb25zdGFudHMuTEVHRU5EX01BWF9XSURUSCkge1xuICAgICAgICBsZWdlbmRQb3MgPSBjb25zdGFudHMuVkVSVF9QT1NfTEVHRU5EICsgMTBcbiAgICAgIH1cbiAgICAgIGxldCBsZWdlbmRYUG9zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIGxlZ2VuZFBvcyAvIDEwMClcbiAgICAgIGxldCB4QnVmZiA9IHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gbGVnZW5kWFBvc1xuICAgICAgeEJ1ZmYgPSBNYXRoLmZsb29yKCh4QnVmZiAtIHRoaXMub3B0cy5sZWdlbmREaXYud2lkdGgpIC8gMilcbiAgICAgIGxlZ2VuZFhQb3MgKz0geEJ1ZmZcblxuICAgICAgY29uc3QgbGVnZW5kWVBvcyA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5jaGFydC5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgLSB0aGlzLm9wdHMubGVnZW5kRGl2LmhlaWdodCkgLyAyKVxuXG4gICAgICB0aGlzLmxlZ2VuZERpc3BsYXlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGxlZ2VuZFhQb3MgKyAnLCcgKyBsZWdlbmRZUG9zICsgJyknKVxuXG4gICAgfVxuXG4gICAgY29uc3QgZDNTdmcgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnXG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgYmFzaWNXaWR0aCA9IGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBzZWxmLm9wdHMuc3BhY2luZ05hbWVzLmxlbmd0aCArIGNvbnN0YW50cy5EQVRBX0lOVEVSVkFMX0JVRkZFUl9YXG5cbiAgICAgIGlmICgodGhpcy5vcHRzLmhvcml6b250YWxMZWdlbmRXaWR0aCArIGNvbnN0YW50cy5MRUdFTkRfUklHSFRfQlVGRkVSKSA+IHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSB7XG4gICAgICAgIC8vIEhpZGUgb25seSB0ZXh0IGFuZCBkaXNwbGF5IENvbG9yIGJveCB3aXRoIHRvb2x0aXBcbiAgICAgICAgZDNTdmcuc2VsZWN0QWxsKCcudmMtbGVnZW5kJylcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzZXJpZXNOYW1lID0gc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpLmh0bWwoKVxuICAgICAgICAgICAgc2VsZWN0KHRoaXMpLnNlbGVjdCgncmVjdCcpXG4gICAgICAgICAgICAgIC5odG1sKCcnKVxuICAgICAgICAgICAgICAuYXBwZW5kKCdzdmc6dGl0bGUnKVxuICAgICAgICAgICAgICAudGV4dChzZXJpZXNOYW1lKVxuICAgICAgICAgIH0pXG4gICAgICAgIGxlZ2VuZFRleHQuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcblxuICAgICAgICBpZiAoc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggPCBiYXNpY1dpZHRoKSB7XG4gICAgICAgICAgLy8gZGlzcGxheSBib3ggdmVydGljYWxseVxuICAgICAgICAgIHRoaXMubGVnZW5kQmxvY2tcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICBjb25zdCB5ID0gaSAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgwLCcgKyB5ICsgJyknXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERpc3BsYXkgb25seSBib3ggb24gdG9wXG4gICAgICAgICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHggPSBjb25zdGFudHMuTEVHRU5EX1NQQUNFICogaVxuICAgICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsIDApJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGlzcGxheSBsZWdlbmQgb24gdG9wIHdpdGggYm90aCB0ZXh0LCBib3ggYW5kIHJlbW92ZSB0b29sdGlwXG4gICAgICAgIHRoaXMubGVnZW5kQmxvY2tcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSA/IChzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSArIGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpKSA6IDBcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywgMCknXG4gICAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRoaXMub3B0cy5pc1BpZUxlZ2VuZCkge1xuICAgICAgICAgIGQzU3ZnLnNlbGVjdEFsbCgnLnZjLWxlZ2VuZCcpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGVjdCh0aGlzKS5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAgICAgICAgIC5odG1sKCcnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBsZWdlbmRUZXh0LmNsYXNzZWQoJ3ZjLWhpZGRlbicsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ICYmIHRoaXMubGVnZW5kRGlzcGxheS5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubGVnZW5kQmxvY2sgJiYgdGhpcy5sZWdlbmRCbG9jay5yZW1vdmUoKVxuICAgIHRoaXMubGVnZW5kRGlzcGxheSAmJiB0aGlzLmxlZ2VuZERpc3BsYXkucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcmllcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4uZHJhdygpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLnVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5zaG93SGlkZShzaG93RmxhZylcbiAgICB9KVxuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZWRyYXcoKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgdGhpcy5wbG90U2VyaWVzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==