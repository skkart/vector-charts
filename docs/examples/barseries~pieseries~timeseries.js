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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9DaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2QzSW1wb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9oZWxwZXJzLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1Nlcmllcy5qcyJdLCJuYW1lcyI6WyJDaGFydCIsImNvbnRhaW5lciIsIm9wdHMiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwibGVuZ3RoIiwiZGF0YVBhcnNlciIsInNlbGVjdCIsInNpemUiLCJFcnJvciIsImNvbnRhaW5lck5hbWUiLCJjb250YWluZXJCb3giLCJlbGVtZW50T2Zmc2V0IiwidGFrZUNvbnRhaW5lcldpZHRoIiwiY2hhcnQiLCJ3aWR0aCIsInRha2VDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwib3B0aW9ucyIsImNoYXJ0SGVpZ2h0IiwiY2hhcnRXaWR0aCIsIm1hcmdpbiIsImNoYXJ0VHlwZSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImNoYXJ0RnVsbFNwYWNlIiwiY2hhcnRDb21wb25lbnRzQXJyIiwic3ZnIiwiYXBwZW5kIiwiaHRtbCIsInN2Z0NsYXNzIiwiY2xhc3NOYW1lIiwiaXNUb3VjaFNjcmVlbiIsImF0dHIiLCJjb3VudGVyIiwiZ3JhcGhab25lIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJjaGFydENtcHQiLCJDaGFydENvbXBvbmVudCIsImRyYXciLCJ1cGRhdGUiLCJzaG93RmxhZyIsInNob3dIaWRlIiwicmVtb3ZlIiwiY2hhcnRSZXNpemUiLCJ0aHJvdHRlZFJlc2l6ZSIsInRocm90dGxlIiwiTWF0aCIsImZsb29yIiwic2V0VGltZW91dCIsImNoYXJ0SWQiLCJpZCIsIndpbmRvdyIsIm9uIiwiYXV0b1NpemVDaGFydCIsInJlc2l6ZWRHcmFwaFdpZHRoIiwiZGVzdHJveUZ1bGwiLCJ2ZXJzaW9uIiwiYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyIsImNoYXJ0Q291bnRlciIsInRvb2x0aXAiLCJ2aXNpYmxlIiwiZm9ybWF0IiwibGVnZW5kIiwibGVnZW5kUHJlZml4IiwicG9zaXRpb24iLCJjb25zdGFudHMiLCJESVJfVE9QIiwiaXNGdW5jdGlvbiIsImFmdGVyRHJhdyIsImMiLCJvbkNvbXBsZXRlIiwidGltZSIsIm9uRXJyb3IiLCJlcnJvciIsImRlZmF1bHRWYWx1ZUZvcm1hdCIsInZhbCIsInVuaXQiLCJkZWNpbWFscyIsImRlbm9taW5hdG9yIiwia1ZhbCIsImdldFZhbHVlV2l0aERlY2ltYWxzIiwibVZhbCIsImFkZERlZmF1bHRUU09wdGlvbnMiLCJ4QXhpcyIsIlVOSVRTX1RJTUUiLCJ0aWNrRm9ybWF0dGVyIiwidGltZUluZm8iLCJ0aW1lTGVuIiwidGltZVJhbmdlIiwiZGF0ZURpZmYiLCJ4QXhpc0ZuIiwiVElNRV9GT1JNQVRfQlVGRkVSIiwidGltZUZvcm1hdCIsInhEYXRlIiwieUF4aXMiLCJVTklUU19ERUYiLCJtaW4iLCJ6b29tIiwiZm9ybWF0VGltZSIsImQiLCJpc0FycmF5IiwicGxvdFNldCIsInpvbmVPZmZzZXQiLCJ0YWJsZVN0ciIsImRhdGFJbmRleCIsImtleSIsImlzTmFOIiwieU9yaWVudCIsInBsb3RBeGlzIiwiY29sb3IiLCJuYW1lIiwiYWRkRGVmYXVsdEJTT3B0aW9ucyIsImRhdGFBcnIiLCJhZGREZWZhdWx0UFNPcHRpb25zIiwidmFsdWUiLCJwaWVPYmoiLCJzZXJpZXMiLCJwaWUiLCJwZXJjZW50YWdlIiwidG90YWwiLCJESVJfUklHSFQiLCJTZXJpZXMiLCJwbG90U2VyaWVzIiwicGxvdEZuIiwicmVkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLEs7OztBQUNuQixpQkFBYUMsU0FBYixFQUF3QkMsSUFBeEIsRUFBOEI7QUFBQTs7QUFBQTs7QUFFNUIsUUFBSUMsdURBQVFBLENBQUNGLFNBQVQsS0FBdUJHLHVEQUFRQSxDQUFDRixJ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QUFHRDs7OzZCQUVTQyxRLEVBQVU7QUFDbEIsV0FBS2tGLFVBQUwsQ0FBZ0J2RixPQUFoQixDQUF3QixVQUFVd0YsTUFBVixFQUFrQjtBQUN4Q0EsZUFBT2xGLFFBQVAsQ0FBZ0JELFFBQWhCO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7OzZCQUNVO0FBQ1IsV0FBS2tGLFVBQUwsQ0FBZ0J2RixPQUFoQixDQUF3QixVQUFVd0YsTUFBVixFQUFrQjtBQUN4Q0EsZUFBT0MsTUFBUDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVTO0FBQ1IsV0FBS0YsVUFBTCxDQUFnQnZGLE9BQWhCLENBQXdCLFVBQVV3RixNQUFWLEVBQWtCO0FBQ3hDQSxlQUFPakYsTUFBUDtBQUNELE9BRkQ7QUFHQSxXQUFLZ0YsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUsvSCxJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBcENpQzBDLDhEOztBQUFmb0YscUUiLCJmaWxlIjoiYmFyc2VyaWVzfnBpZXNlcmllc350aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBpc09iamVjdCwgaXNTdHJpbmcsIHRocm90dGxlfSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgaWYgKGlzU3RyaW5nKGNvbnRhaW5lcikgJiYgaXNPYmplY3Qob3B0cykgJiYgY29udGFpbmVyLmxlbmd0aCAmJiBpc09iamVjdChvcHRzLmRhdGFQYXJzZXIpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHNlbGVjdChjb250YWluZXIpXG4gICAgICBpZiAoIXRoaXMuY29udGFpbmVyLnNpemUoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBncmFwaCBjb250YWluZXIgc3BlY3RpZmVkIGluIG9wdGlvbnMgZG9lc250IGV4aXN0IGluc2lkZSBpbiBEb2N1bWVudCBCb2R5JylcbiAgICAgIH1cbiAgICAgIG9wdHMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lclxuXG4gICAgICBjb25zdCBjb250YWluZXJCb3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMuY29udGFpbmVyKVxuXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lcldpZHRoID0gZmFsc2VcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG9wdHMuY2hhcnQud2lkdGgpKSB7XG4gICAgICAgIG9wdHMuY2hhcnQud2lkdGggPSBjb250YWluZXJCb3gud2lkdGhcbiAgICAgICAgdGFrZUNvbnRhaW5lcldpZHRoID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lckhlaWdodCA9IGZhbHNlXG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShvcHRzLmNoYXJ0LmhlaWdodCkpIHtcbiAgICAgICAgb3B0cy5jaGFydC5oZWlnaHQgPSBjb250YWluZXJCb3guaGVpZ2h0XG4gICAgICAgIHRha2VDb250YWluZXJIZWlnaHQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmNoYXJ0LndpZHRoID4gb3B0cy5jaGFydC5tYXhXaWR0aCkge1xuICAgICAgICBvcHRzLmNoYXJ0LndpZHRoID0gb3B0cy5jaGFydC5tYXhXaWR0aFxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5jaGFydC53aWR0aCA8IG9wdHMuY2hhcnQubWluV2lkdGgpIHtcbiAgICAgICAgb3B0cy5jaGFydC53aWR0aCA9IG9wdHMuY2hhcnQubWluV2lkdGhcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0c1xuXG4gICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gb3B0cy5jaGFydC5oZWlnaHRcbiAgICAgIHRoaXMuY2hhcnRXaWR0aCA9IG9wdHMuY2hhcnQud2lkdGhcbiAgICAgIHRoaXMubWFyZ2luID0gb3B0cy5jaGFydC5tYXJnaW5cbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gb3B0cy5jaGFydC5jaGFydFR5cGVcblxuICAgICAgaWYgKHRha2VDb250YWluZXJXaWR0aCkge1xuICAgICAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLSAodGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFrZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jaGFydEhlaWdodCAtICh0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCBkYXRhUHJvY2VzcyB0byBjaGFydCwgd2hpY2ggZ2VuZXJhdGUgY2hhcnREYXRhIGFuZCBwbG90IEluZm8gYmFzZWQgb24gSlNPTiBhbmQgb3B0aW9uc1xuICAgICAgdGhpcy5kYXRhUGFyc2VyID0gb3B0cy5kYXRhUGFyc2VyXG5cbiAgICAgIC8vIERlbGV0ZSBkYXRhUHJvY2VzcyBmcm9tIG9wdGlvbnNcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZGF0YVBhcnNlclxuXG4gICAgICB0aGlzLmNoYXJ0RnVsbFNwYWNlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jaGFydFdpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0LFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY2hhcnRIZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20sXG4gICAgICB9XG5cblxuICAgICAgLy8gQXJyYXkgd2hpY2ggaG9sZHMgYWxsIHRoZSBjaGFydENvbXBvbmVudHMgcmVxdWlyZWQgZm9yIHRoZSBncmFwaCBsaWtlIGF4aXMsIHNlcmllcywgdG9vbHRpcCwgbGVnZW5kIGV0Y1xuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIgPSBbXVxuXG4gICAgICB0aGlzLnN2ZyA9IHRoaXMuY29udGFpbmVyLnNlbGVjdCgnc3ZnJylcblxuICAgICAgaWYgKHRoaXMuc3ZnLnNpemUoKSA9PT0gMCkge1xuICAgICAgICAvLyBDcmVhdGUgc3ZnIGVsZW1lbnQgaWYgbm90IGV4aXN0IGluc2lkZSBjaGFydCBjb250YWluZXIgRElWXG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5jb250YWluZXIuYXBwZW5kKCdzdmcnKVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBzdmcgaWYgaXQgaGFzIG5lZWRsZXNzIGNvbnRlbnRcbiAgICAgIHRoaXMuc3ZnLmh0bWwoJycpXG5cbiAgICAgIGxldCBzdmdDbGFzcyA9ICd2Yy1zdmcgJyArIG9wdHMuY2hhcnQuY2xhc3NOYW1lXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgc3ZnQ2xhc3MgKz0gJyB2Yy1ub3NlbGVjdCdcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ZnXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmNoYXJ0RnVsbFNwYWNlLmhlaWdodClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgc3ZnQ2xhc3MpXG5cblxuICAgICAgLy8gQWRkIGRlZnMgdG8gc2hvdyBwbG90IHNlcmllcyB3aXRoaW4gdGhlIGRlZiBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodFxuICAgICAgdGhpcy5zdmcuYXBwZW5kKCdkZWZzJylcbiAgICAgICAgLmFwcGVuZCgnY2xpcFBhdGgnKVxuICAgICAgICAuYXR0cignaWQnLCBgY2hhcnRfY2xpcF8ke3RoaXMub3B0aW9ucy5jaGFydC5jb3VudGVyfWApXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLmNoYXJ0V2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmNoYXJ0SGVpZ2h0KVxuXG4gICAgICAvLyBBZGQgZ3JhcGhab25lIHRhZywgc28gdGhhdCBhbGwgc2VyaWVzIGFuZCBheGlzIGFyZSBncm91cGVkIHRvZ2V0aGVyXG4gICAgICB0aGlzLmdyYXBoWm9uZSA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtZ3JhcGhab25lJylcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgLy8gRHJhdyBhbGwgdGhlIGNoYXJ0Q29tcG9uZW50cyBpbiB0aGUgc2FtZSBvcmRlciBvZiB0aGVyZSBpbml0aWxpemF0aW9uIHVzaW5nIGNoYXJ0Q29tcG9uZW50c0FyclxuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC5kcmF3KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnN2Zy5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGgpXG4gICAgdGhpcy5ncmFwaFpvbmUuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJylcbiAgICB0aGlzLnN2Zy5zZWxlY3QoJ2NsaXBQYXRoJykuc2VsZWN0KCdyZWN0JykuYXR0cignd2lkdGgnLCB0aGlzLmNoYXJ0V2lkdGgpXG5cbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgdXBkYXRlJywgdGhpcylcbiAgICAvLyBVcGRhdGUgYWxsIGNoYXJ0IGNvbXBvbmVudCBiYXNlZCBvbiBuZXcgd2lkdGggY2hhbmdlc1xuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC51cGRhdGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgc2hvd0hpZGUnLCB0aGlzKVxuICAgIHNob3dGbGFnID0gISFzaG93RmxhZyAvLyBDb252ZXJ0IGFueSB0eXBlIHRvIGJvb2xlYW5cbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQuc2hvd0hpZGUoc2hvd0ZsYWcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHJlbW92ZScsIHRoaXMpXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LnJlbW92ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIGNoYXJ0UmVzcG9uc2l2ZSBiYXNlZCBvbiBzY3JlZW4gcmVzaXplIGlzIGhhbmRsZWRcbiAgY2hhcnRSZXNwb25zaXZlICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNoYXJ0LmNoYXJ0UmVzaXplKSB7XG4gICAgICB0aGlzLnRocm90dGVkUmVzaXplID0gdGhyb3R0bGUoKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIC8vIERvbnQgcmVzaXplIGlmIGdyYXBoIGlzIGFscmVhZHkgYWRqdXN0ZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoID0gTWF0aC5mbG9vcih3aWR0aClcbiAgICAgICAgdGhpcy5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodClcbiAgICAgICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCAtICh0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNoYXJ0RnVsbFNwYWNlLmhlaWdodCAtICh0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoKSwgMClcbiAgICAgIH0sIDQ1MCkgLy8gJ3RoaXMnIFdpbGwgaGF2ZSByZWZlcmVuY2Ugb2YgdGltZVNlcmllc0NoYXJ0IG9yIHBpZVNlcmllc0NoYXJ0XG5cbiAgICAgIC8vIEFkZCByZXNpemUgZm9yIGVhY2ggY2hhcnQgYmFzZWQgb24gY2hhcnQgSUQgbmFtZXNwYWNlXG4gICAgICBjb25zdCBjaGFydElkID0gJ3ZjLScgKyAodGhpcy5vcHRpb25zLmNoYXJ0LmlkIHx8IHRoaXMub3B0aW9ucy5jaGFydC5jb3VudGVyKVxuICAgICAgc2VsZWN0KHdpbmRvdykub24oJ3Jlc2l6ZS4nICsgY2hhcnRJZCwgKCkgPT4gdGhpcy5hdXRvU2l6ZUNoYXJ0KCkpXG5cbiAgICB9XG4gIH1cblxuICBhdXRvU2l6ZUNoYXJ0ICgpIHtcbiAgICBjb25zdCBjb250YWluZXJCb3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMuY29udGFpbmVyKVxuICAgIGxldCByZXNpemVkR3JhcGhXaWR0aCA9IGNvbnRhaW5lckJveC53aWR0aFxuXG4gICAgaWYgKHJlc2l6ZWRHcmFwaFdpZHRoID4gdGhpcy5vcHRpb25zLmNoYXJ0Lm1heFdpZHRoKSB7XG4gICAgICByZXNpemVkR3JhcGhXaWR0aCA9IHRoaXMub3B0aW9ucy5jaGFydC5tYXhXaWR0aFxuICAgIH1cblxuICAgIGlmIChyZXNpemVkR3JhcGhXaWR0aCA8IHRoaXMub3B0aW9ucy5jaGFydC5taW5XaWR0aCkge1xuICAgICAgcmVzaXplZEdyYXBoV2lkdGggPSB0aGlzLm9wdGlvbnMuY2hhcnQubWluV2lkdGhcbiAgICB9XG5cbiAgICB0aGlzLnRocm90dGVkUmVzaXplKHJlc2l6ZWRHcmFwaFdpZHRoLCBjb250YWluZXJCb3guaGVpZ2h0KVxuICB9XG5cbiAgLy8gRGVzdHJveSBhbGwgY2hhcnQgcHJvcGVydGllcyBhbmQgY29tcG9uZW50c1xuICBkZXN0cm95IChkZXN0cm95RnVsbCkge1xuICAgIGRlc3Ryb3lGdWxsID0gISFkZXN0cm95RnVsbFxuICAgIC8vIFJlbW92ZSByZXNpemUgaGFuZGVyIG9uIHdpbmRvdyBmb3IgdmNDaGFydCBuYW1lc3BhY2VcbiAgICBpZiAodGhpcy5vcHRpb25zLmNoYXJ0LmNoYXJ0UmVzaXplKSB7XG4gICAgICBjb25zdCBjaGFydElkID0gJ3ZjLScgKyAodGhpcy5vcHRpb25zLmNoYXJ0LmlkIHx8IHRoaXMub3B0aW9ucy5jaGFydC5jb3VudGVyKVxuICAgICAgc2VsZWN0KHdpbmRvdykub24oJ3Jlc2l6ZS4nICsgY2hhcnRJZCwgbnVsbClcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGNoYXJ0Q29tcG9uZW50cyAodGltZVNlcmllc0NoYXJ0IG9yIHBpZVNlcmllc0NoYXJ0KVxuICAgIHRoaXMucmVtb3ZlKClcblxuICAgIC8vIFJlbW92ZSBzdmcgYW5kIGNvbnRhaW5lciBpZiBkZXN0cm95RnVsbCBpcyB0cnVlXG4gICAgZGVzdHJveUZ1bGwgJiYgdGhpcy5zdmcucmVtb3ZlKClcbiAgICBkZXN0cm95RnVsbCAmJiB0aGlzLmNvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiLy8gaW1wb3J0ICogYXMgem9vbSBmcm9tICdkMy16b29tJ1xuXG5leHBvcnQge1xuICBzY2FsZUJhbmQsXG4gIHNjYWxlTGluZWFyLFxuICBzY2FsZVRpbWVcbn0gZnJvbSAnZDMtc2NhbGUnXG5cbmV4cG9ydCB7XG4gIGF4aXNCb3R0b20sXG4gIGF4aXNUb3AsXG4gIGF4aXNMZWZ0LFxuICBheGlzUmlnaHRcbn0gZnJvbSAnZDMtYXhpcydcblxuZXhwb3J0IHt0aW1lRm9ybWF0fSBmcm9tICdkMy10aW1lLWZvcm1hdCdcblxuZXhwb3J0IHtpbnRlcnBvbGF0ZX0gZnJvbSAnZDMtaW50ZXJwb2xhdGUnXG5cbmV4cG9ydCB7XG4gIHNlbGVjdCxcbiAgc2VsZWN0QWxsLFxuICBtb3VzZSBhcyBkM01vdXNlLFxuICBldmVudCBhcyBkM0V2ZW50LFxuICB0b3VjaCBhcyBkM1RvdWNoLFxuICB0b3VjaGVzIGFzIGQzVG91Y2hlc1xufSBmcm9tICdkMy1zZWxlY3Rpb24nXG5cbmV4cG9ydCB7XG4gIHJhbmdlLFxuICBtYXgsXG4gIHRyYW5zcG9zZSxcbiAgYmlzZWN0b3Jcbn0gZnJvbSAnZDMtYXJyYXknXG5cbmV4cG9ydCB7YnJ1c2hYLCBicnVzaFl9IGZyb20gJ2QzLWJydXNoJ1xuXG5leHBvcnQge1xuICBsaW5lLCBzdGFjaywgYXJlYSxcbiAgc3RhY2tPcmRlck5vbmUsIHN0YWNrT2Zmc2V0Tm9uZSxcbiAgcGllLCBhcmNcbn0gZnJvbSAnZDMtc2hhcGUnXG5cbmV4cG9ydCB7em9vbSwgem9vbVRyYW5zZm9ybX0gZnJvbSAnZDMtem9vbSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2ZXJzaW9uOiAndjUnLFxufVxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Y2hhcnRDb3VudGVyLCBnZXRWYWx1ZVdpdGhEZWNpbWFscywgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7dGltZUZvcm1hdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyAob3B0cykge1xuXG4gIG9wdHMuY2hhcnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjaGFydFJlc2l6ZTogZmFsc2UsXG4gICAgaXNUb3VjaFNjcmVlbjogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBtYXhXaWR0aDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgbWluV2lkdGg6IDBcbiAgfSwgb3B0cy5jaGFydClcbiAgb3B0cy5jaGFydC5jb3VudGVyID0gY2hhcnRDb3VudGVyKClcblxuICBvcHRzLnRvb2x0aXAgPSBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZvcm1hdDogZmFsc2UgLy8gVXNlIGFyeWFrYUNoYXJ0cyBpbnRlcm5hbCB0b29sdGlwIGZvcm1hdHRlciB0byBzaG93IHJhdyBkYXRhXG4gIH0sIChvcHRzLnRvb2x0aXAgfHwge30pKVxuXG4gIG9wdHMubGVnZW5kID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBsZWdlbmRQcmVmaXg6ICcnLFxuICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUFxuICB9LCAob3B0cy5sZWdlbmQgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLmFmdGVyRHJhdykpIHtcbiAgICBvcHRzLmFmdGVyRHJhdyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gY1xuICAgIH1cbiAgfVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLm9uQ29tcGxldGUpKSB7XG4gICAgb3B0cy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDaGFydCBsb2FkaW5nIG9mICR7b3B0cy5jb250YWluZXJOYW1lfSBpcyBjb21wbGV0ZWQgaW4gJHt0aW1lfSBtc2ApXG4gICAgfVxuICB9XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMub25FcnJvcikpIHtcbiAgICBvcHRzLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDaGFydCBoYXMgZW5jb3VudGVyZWQgZXJyb3Igb2YgJHtvcHRzLmNvbnRhaW5lck5hbWV9IGAsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWVGb3JtYXQgKHZhbCwgdW5pdCA9ICcnLCBkZWNpbWFscyA9IDMpIHtcbiAgY29uc3QgZGVub21pbmF0b3IgPSAxMDAwXG4gIGlmICh2YWwgPiBkZW5vbWluYXRvcikge1xuICAgIGNvbnN0IGtWYWwgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscyh2YWwgLyBkZW5vbWluYXRvciwgZGVjaW1hbHMpXG4gICAgaWYgKGtWYWwgPiBkZW5vbWluYXRvcikge1xuICAgICAgY29uc3QgbVZhbCA9IGdldFZhbHVlV2l0aERlY2ltYWxzKGtWYWwgLyBkZW5vbWluYXRvciwgZGVjaW1hbHMpXG4gICAgICByZXR1cm4gYCR7bVZhbH1NICR7dW5pdH1gXG4gICAgfVxuICAgIHJldHVybiBgJHtrVmFsfUsgJHt1bml0fWBcbiAgfVxuICByZXR1cm4gYCR7Z2V0VmFsdWVXaXRoRGVjaW1hbHModmFsLCBkZWNpbWFscyl9ICR7dW5pdH1gXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRUU09wdGlvbnMgKG9wdHMpIHtcbiAgLy8gQWRkIGRlZmF1bHRzIHRvIHhBeGlzXG4gIG9wdHMueEF4aXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBib3R0b206IHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19USU1FLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfSwgKG9wdHMueEF4aXMgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLnhBeGlzLmJvdHRvbS50aWNrRm9ybWF0dGVyKSkge1xuICAgIGNvbnN0IHRpbWVJbmZvID0gb3B0cy50aW1lSW5mb1xuICAgIC8vIElmIHRoZSBkYXRlIHJhbmdlIGlzIGxlc3MgdGhhbiAyIGRheXMsIFNob3cgaW4gaG91ciBmb3JtYXRcbiAgICBjb25zdCB0aW1lTGVuID0gdGltZUluZm8udGltZVJhbmdlLmxlbmd0aFxuICAgIGNvbnN0IGRhdGVEaWZmID0gdGltZUluZm8udGltZVJhbmdlW3RpbWVMZW4gLSAxXSAtIHRpbWVJbmZvLnRpbWVSYW5nZVswXVxuXG4gICAgY29uc3QgeEF4aXNGbiA9IChkYXRlRGlmZiA8IGNvbnN0YW50cy5USU1FX0ZPUk1BVF9CVUZGRVIpID8gdGltZUZvcm1hdCgnJUg6JU0nKSA6IHRpbWVGb3JtYXQoJyVkICViICVZJylcbiAgICBvcHRzLnhBeGlzLmJvdHRvbS50aWNrRm9ybWF0dGVyID0gKHhEYXRlKSA9PiB7XG4gICAgICByZXR1cm4geEF4aXNGbih4RGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiB5QXhpcyBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGRlZmF1bHQgaXMgbGVmdCBhbmQgaXRzIHZhbHVlIGF4aXMgd2l0aCB1bml0XG4gIGlmICghb3B0cy55QXhpcykge1xuICAgIG9wdHMueUF4aXMgPSB7XG4gICAgICBsZWZ0OiB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLnlBeGlzLmxlZnQpIHtcbiAgICBvcHRzLnlBeGlzLmxlZnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLmxlZnQpXG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5yaWdodCkge1xuICAgIG9wdHMueUF4aXMucmlnaHQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLnJpZ2h0KVxuICB9XG5cbiAgb3B0cy56b29tID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogZmFsc2VcbiAgfSwgKG9wdHMuem9vbSB8fCB7fSkpXG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgY29uc3QgZm9ybWF0VGltZSA9IHRpbWVGb3JtYXQoJyVkICViICVZICAlSDolTTolUycpXG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoIWQgfHwgIWlzQXJyYXkoZCkpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwbG90U2V0ID0gdGhpcy5vcHRpb25zLnBsb3RTZXRcbiAgICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG4gICAgICBjb25zdCB6b25lT2Zmc2V0ID0gdGhpcy5vcHRpb25zLnhBeGlzLnpvbmVPZmZzZXQgfHwgJydcbiAgICAgIGNvbnN0IHlBeGlzID0gdGhpcy5vcHRpb25zLnlBeGlzXG5cbiAgICAgIGxldCB0YWJsZVN0ciA9IGA8dGFibGU+PHRib2R5Pjx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlX2Z1bGxcIiBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgJHtmb3JtYXRUaW1lKGRbdGltZUluZm8uZGF0YUluZGV4XSl9ICR7em9uZU9mZnNldH1cbiAgICAgICAgICAgIDwvdGQ+PC90cj5gXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHBsb3RTZXQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZFtwbG90U2V0W2tleV0uZGF0YUluZGV4XVxuICAgICAgICBpZiAoIXBsb3RTZXRba2V5XS52aXNpYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBZIEF4aXMgZm9ybWF0IGlzIHByZXNldFxuICAgICAgICBjb25zdCB5T3JpZW50ID0geUF4aXNbcGxvdFNldFtrZXldLnBsb3RBeGlzWzBdXVxuICAgICAgICBjb25zdCBmb3JtYXQgPSB5T3JpZW50LmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcblxuICAgICAgICB0YWJsZVN0ciArPSBgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9J25hbWUnPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtwbG90U2V0W2tleV0uY29sb3J9Jz48L3NwYW4+JHtwbG90U2V0W2tleV0ubmFtZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZSc+XG4gICAgICAgICAgICAke2Zvcm1hdCh2YWwsIHBsb3RTZXRba2V5XS51bml0KX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5gXG4gICAgICB9XG5cbiAgICAgIHRhYmxlU3RyICs9ICc8L3Rib2R5PjwvdGFibGU+J1xuXG4gICAgICByZXR1cm4gdGFibGVTdHJcbiAgICB9XG4gIH1cblxuICBhZGREZWZhdWx0Q2hhcnRPcHRpb25zKG9wdHMpXG5cbiAgcmV0dXJuIG9wdHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRCU09wdGlvbnMgKG9wdHMpIHtcbiAgLy8gQWRkIGRlZmF1bHRzIHRvIHhBeGlzXG4gIG9wdHMueEF4aXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBib3R0b206IHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfVxuICB9LCAob3B0cy54QXhpcyB8fCB7fSkpXG5cblxuICAvLyBJZiB5QXhpcyBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGRlZmF1bHQgaXMgbGVmdCBhbmQgaXRzIHZhbHVlIGF4aXMgd2l0aCB1bml0XG4gIGlmICghb3B0cy55QXhpcykge1xuICAgIG9wdHMueUF4aXMgPSB7XG4gICAgICBsZWZ0OiB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLnlBeGlzLmxlZnQpIHtcbiAgICBvcHRzLnlBeGlzLmxlZnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLmxlZnQpXG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5yaWdodCkge1xuICAgIG9wdHMueUF4aXMucmlnaHQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLnJpZ2h0KVxuICB9XG5cbiAgb3B0cy56b29tID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogZmFsc2VcbiAgfSwgKG9wdHMuem9vbSB8fCB7fSkpXG5cblxuICAvLyBHZW5lcmFsIE9wdGlvbnMgdG8gYm90aCBjaGFydFR5cGVcbiAgb3B0cy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IGZhbHNlIC8vIFVzZSBhcnlha2FDaGFydHMgaW50ZXJuYWwgdG9vbHRpcCBmb3JtYXR0ZXIgdG8gc2hvdyByYXcgZGF0YVxuICB9LCAob3B0cy50b29sdGlwIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy50b29sdGlwLmZvcm1hdCkpIHtcbiAgICBvcHRzLnRvb2x0aXAuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIGxldCBkYXRhQXJyID0gZFxuICAgICAgaWYgKGQgJiYgZC52YWwpIHtcbiAgICAgICAgZGF0YUFyciA9IGQudmFsXG4gICAgICB9XG4gICAgICBpZiAoIWlzQXJyYXkoZGF0YUFycikpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwbG90U2V0ID0gdGhpcy5vcHRpb25zLnBsb3RTZXRcbiAgICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG4gICAgICBjb25zdCB5QXhpcyA9IHRoaXMub3B0aW9ucy55QXhpc1xuXG4gICAgICBsZXQgdGFibGVTdHIgPSBgPHRhYmxlPjx0Ym9keT48dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ2YWx1ZV9mdWxsXCIgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICR7ZGF0YUFyclt0aW1lSW5mby5kYXRhSW5kZXhdfVxuICAgICAgICAgICAgPC90ZD48L3RyPmBcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGxvdFNldCkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhQXJyW3Bsb3RTZXRba2V5XS5kYXRhSW5kZXhdXG4gICAgICAgIGlmICghcGxvdFNldFtrZXldLnZpc2libGUgfHwgaXNOYU4odmFsKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIFkgQXhpcyBmb3JtYXQgaXMgcHJlc2V0XG4gICAgICAgIGNvbnN0IHlPcmllbnQgPSB5QXhpc1twbG90U2V0W2tleV0ucGxvdEF4aXNbMF1dXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHlPcmllbnQuZm9ybWF0IHx8IGRlZmF1bHRWYWx1ZUZvcm1hdFxuXG4gICAgICAgIHRhYmxlU3RyICs9IGA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz0nbmFtZSc+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjoke3Bsb3RTZXRba2V5XS5jb2xvcn0nPjwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZSc+XG4gICAgICAgICAgICAke2Zvcm1hdCh2YWwsIHBsb3RTZXRba2V5XS51bml0KX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5gXG4gICAgICB9XG5cbiAgICAgIHRhYmxlU3RyICs9ICc8L3Rib2R5PjwvdGFibGU+J1xuXG4gICAgICByZXR1cm4gdGFibGVTdHJcbiAgICB9XG4gIH1cblxuICBhZGREZWZhdWx0Q2hhcnRPcHRpb25zKG9wdHMpXG5cbiAgcmV0dXJuIG9wdHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRQU09wdGlvbnMgKG9wdHMpIHtcblxuICAvLyBHZW5lcmFsIE9wdGlvbnMgdG8gYm90aCBjaGFydFR5cGVcbiAgb3B0cy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IGZhbHNlIC8vIFVzZSBhcnlha2FDaGFydHMgaW50ZXJuYWwgdG9vbHRpcCBmb3JtYXR0ZXIgdG8gc2hvdyByYXcgZGF0YVxuICB9LCAob3B0cy50b29sdGlwIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy50b29sdGlwLmZvcm1hdCkpIHtcbiAgICBvcHRzLnRvb2x0aXAuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICghZCB8fCAhZC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBpZU9iaiA9IHRoaXMub3B0aW9ucy5zZXJpZXMucGllXG4gICAgICBjb25zdCBmb3JtYXQgPSBwaWVPYmouZm9ybWF0IHx8IGRlZmF1bHRWYWx1ZUZvcm1hdFxuICAgICAgY29uc3QgcGVyY2VudGFnZSA9IGdldFZhbHVlV2l0aERlY2ltYWxzKChkLnZhbHVlIC8gcGllT2JqLnRvdGFsKSAqIDEwMCwgMSlcblxuICAgICAgcmV0dXJuIGA8dGFibGUgc3R5bGU9J29wYWNpdHk6IDAuODsnPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPSduYW1lJz48c3BhbiBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjoke2QuY29sb3J9Jz48L3NwYW4+JHtkLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZSc+JHtwZXJjZW50YWdlfSAlPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9J3ZhbHVlJyBjb2xzcGFuPScyJz4ke2Zvcm1hdChkLnZhbHVlLCBwaWVPYmoudW5pdCl9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5gXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIG9wdHMubGVnZW5kLnBvc2l0aW9uID0gY29uc3RhbnRzLkRJUl9SSUdIVFxuXG4gIHJldHVybiBvcHRzXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJpZXMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLmRyYXcoKVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi51cGRhdGUoKVxuICAgIH0pXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4uc2hvd0hpZGUoc2hvd0ZsYWcpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFJlZHJhdyBpcyBjYWxsZWQgd2hlbiBzZXJpZXMgaXMgdG9nZ2xlZCBmcm9tIExlZ2VuZHNcbiAgcmVkcmF3ICgpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4ucmVkcmF3KClcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4ucmVtb3ZlKClcbiAgICB9KVxuICAgIHRoaXMucGxvdFNlcmllcyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=