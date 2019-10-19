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

      _this.svg.attr('width', _this.chartFullSpace.width).attr('height', _this.chartFullSpace.height).attr('class', 'vc-svg ' + opts.chart.className);

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
/*! exports provided: scaleBand, scaleLinear, scaleTime, axisBottom, axisTop, axisLeft, axisRight, timeFormat, interpolate, select, selectAll, d3Mouse, d3Event, range, max, transpose, bisector, brushX, brushY, line, stack, area, stackOrderNone, stackOffsetNone, pie, arc, default */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9DaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2QzSW1wb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9oZWxwZXJzLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1Nlcmllcy5qcyJdLCJuYW1lcyI6WyJDaGFydCIsImNvbnRhaW5lciIsIm9wdHMiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwibGVuZ3RoIiwiZGF0YVBhcnNlciIsInNlbGVjdCIsInNpemUiLCJFcnJvciIsImNvbnRhaW5lck5hbWUiLCJjb250YWluZXJCb3giLCJlbGVtZW50T2Zmc2V0IiwidGFrZUNvbnRhaW5lcldpZHRoIiwiY2hhcnQiLCJ3aWR0aCIsInRha2VDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwib3B0aW9ucyIsImNoYXJ0SGVpZ2h0IiwiY2hhcnRXaWR0aCIsIm1hcmdpbiIsImNoYXJ0VHlwZSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImNoYXJ0RnVsbFNwYWNlIiwiY2hhcnRDb21wb25lbnRzQXJyIiwic3ZnIiwiYXBwZW5kIiwiaHRtbCIsImF0dHIiLCJjbGFzc05hbWUiLCJjb3VudGVyIiwiZ3JhcGhab25lIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJjaGFydENtcHQiLCJDaGFydENvbXBvbmVudCIsImRyYXciLCJ1cGRhdGUiLCJzaG93RmxhZyIsInNob3dIaWRlIiwicmVtb3ZlIiwiY2hhcnRSZXNpemUiLCJ0aHJvdHRlZFJlc2l6ZSIsInRocm90dGxlIiwiTWF0aCIsImZsb29yIiwic2V0VGltZW91dCIsImNoYXJ0SWQiLCJpZCIsIndpbmRvdyIsIm9uIiwiYXV0b1NpemVDaGFydCIsInJlc2l6ZWRHcmFwaFdpZHRoIiwiZGVzdHJveUZ1bGwiLCJ2ZXJzaW9uIiwiYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyIsImlzVG91Y2hTY3JlZW4iLCJjaGFydENvdW50ZXIiLCJ0b29sdGlwIiwidmlzaWJsZSIsImZvcm1hdCIsImxlZ2VuZCIsImxlZ2VuZFByZWZpeCIsInBvc2l0aW9uIiwiY29uc3RhbnRzIiwiRElSX1RPUCIsImlzRnVuY3Rpb24iLCJhZnRlckRyYXciLCJjIiwib25Db21wbGV0ZSIsInRpbWUiLCJvbkVycm9yIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWVGb3JtYXQiLCJ2YWwiLCJ1bml0IiwiZGVjaW1hbHMiLCJkZW5vbWluYXRvciIsImtWYWwiLCJnZXRWYWx1ZVdpdGhEZWNpbWFscyIsIm1WYWwiLCJhZGREZWZhdWx0VFNPcHRpb25zIiwieEF4aXMiLCJVTklUU19USU1FIiwidGlja0Zvcm1hdHRlciIsInRpbWVJbmZvIiwidGltZUxlbiIsInRpbWVSYW5nZSIsImRhdGVEaWZmIiwieEF4aXNGbiIsIlRJTUVfRk9STUFUX0JVRkZFUiIsInRpbWVGb3JtYXQiLCJ4RGF0ZSIsInlBeGlzIiwiVU5JVFNfREVGIiwibWluIiwiem9vbSIsImZvcm1hdFRpbWUiLCJkIiwiaXNBcnJheSIsInBsb3RTZXQiLCJ6b25lT2Zmc2V0IiwidGFibGVTdHIiLCJkYXRhSW5kZXgiLCJrZXkiLCJpc05hTiIsInlPcmllbnQiLCJwbG90QXhpcyIsImNvbG9yIiwibmFtZSIsImFkZERlZmF1bHRCU09wdGlvbnMiLCJkYXRhQXJyIiwiYWRkRGVmYXVsdFBTT3B0aW9ucyIsInZhbHVlIiwicGllT2JqIiwic2VyaWVzIiwicGllIiwicGVyY2VudGFnZSIsInRvdGFsIiwiRElSX1JJR0hUIiwiU2VyaWVzIiwicGxvdFNlcmllcyIsInBsb3RGbiIsInJlZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxLOzs7QUFDbkIsaUJBQWFDLFNBQWIsRUFBd0JDLElBQXhCLEVBQThCO0FBQUE7O0FBQUE7O0FBRTVCLFFBQUlDLHVEQUFRQSxDQUFDRixTQUFULEtBQXVCRyx1REFBUUEsQ0FBQ0YsSUFBVCxDQUF2QixJQUF5Q0QsVUFBVUksTUFBbkQsSUFBNkRELHVEQUFRQSxDQUFDRixLQUFLSSxVQUFkLENBQWpFLEVBQTRGO0FBQzFGLFlBQUtMLFNBQUwsR0FBaUJNLDBEQUFNQSxDQUFDTixTQUFQLENBQWpCO0FBQ0EsVUFBSSxDQUFDLE1BQUtBLFNBQUwsQ0FBZU8sSUFBZixFQUFMLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLCtFQUFWLENBQU47QUFDRDtBQUNEUCxXQUFLUSxhQUFMLEdBQXFCVCxTQUFyQjs7QUFFQSxVQUFNVSxlQUFlQyw0REFBYUEsQ0FBQyxNQUFLWCxTQUFuQixDQUFyQjs7QUFFQSxVQUFJWSxxQkFBcUIsS0FBekI7QUFDQSxVQUFJLENBQUMsOEVBQWdCWCxLQUFLWSxLQUFMLENBQVdDLEtBQTNCLENBQUwsRUFBd0M7QUFDdENiLGFBQUtZLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQkosYUFBYUksS0FBaEM7QUFDQUYsNkJBQXFCLElBQXJCO0FBQ0Q7O0FBRUQsVUFBSUcsc0JBQXNCLEtBQTFCO0FBQ0EsVUFBSSxDQUFDLDhFQUFnQmQsS0FBS1ksS0FBTCxDQUFXRyxNQUEzQixDQUFMLEVBQXlDO0FBQ3ZDZixhQUFLWSxLQUFMLENBQVdHLE1BQVgsR0FBb0JOLGFBQWFNLE1BQWpDO0FBQ0FELDhCQUFzQixJQUF0QjtBQUNEOztBQUVELFVBQUlkLEtBQUtZLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQmIsS0FBS1ksS0FBTCxDQUFXSSxRQUFsQyxFQUE0QztBQUMxQ2hCLGFBQUtZLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQmIsS0FBS1ksS0FBTCxDQUFXSSxRQUE5QjtBQUNEOztBQUVELFVBQUloQixLQUFLWSxLQUFMLENBQVdDLEtBQVgsR0FBbUJiLEtBQUtZLEtBQUwsQ0FBV0ssUUFBbEMsRUFBNEM7QUFDMUNqQixhQUFLWSxLQUFMLENBQVdDLEtBQVgsR0FBbUJiLEtBQUtZLEtBQUwsQ0FBV0ssUUFBOUI7QUFDRDs7QUFFRCxZQUFLQyxPQUFMLEdBQWVsQixJQUFmOztBQUVBLFlBQUttQixXQUFMLEdBQW1CbkIsS0FBS1ksS0FBTCxDQUFXRyxNQUE5QjtBQUNBLFlBQUtLLFVBQUwsR0FBa0JwQixLQUFLWSxLQUFMLENBQVdDLEtBQTdCO0FBQ0EsWUFBS1EsTUFBTCxHQUFjckIsS0FBS1ksS0FBTCxDQUFXUyxNQUF6QjtBQUNBLFlBQUtDLFNBQUwsR0FBaUJ0QixLQUFLWSxLQUFMLENBQVdVLFNBQTVCOztBQUVBLFVBQUlYLGtCQUFKLEVBQXdCO0FBQ3RCLGNBQUtTLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxJQUFtQixNQUFLQyxNQUFMLENBQVlFLElBQVosR0FBbUIsTUFBS0YsTUFBTCxDQUFZRyxLQUFsRCxDQUFsQjtBQUNEOztBQUVELFVBQUlWLG1CQUFKLEVBQXlCO0FBQ3ZCLGNBQUtLLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxJQUFvQixNQUFLRSxNQUFMLENBQVlJLEdBQVosR0FBa0IsTUFBS0osTUFBTCxDQUFZSyxNQUFsRCxDQUFuQjtBQUNEOztBQUVEO0FBQ0EsWUFBS3RCLFVBQUwsR0FBa0JKLEtBQUtJLFVBQXZCOztBQUVBO0FBQ0EsYUFBTyxNQUFLYyxPQUFMLENBQWFkLFVBQXBCOztBQUVBLFlBQUt1QixjQUFMLEdBQXNCO0FBQ3BCZCxlQUFPLE1BQUtPLFVBQUwsR0FBa0IsTUFBS0MsTUFBTCxDQUFZRSxJQUE5QixHQUFxQyxNQUFLRixNQUFMLENBQVlHLEtBRHBDO0FBRXBCVCxnQkFBUSxNQUFLSSxXQUFMLEdBQW1CLE1BQUtFLE1BQUwsQ0FBWUksR0FBL0IsR0FBcUMsTUFBS0osTUFBTCxDQUFZSzs7QUFJM0Q7QUFOc0IsT0FBdEIsQ0FPQSxNQUFLRSxrQkFBTCxHQUEwQixFQUExQjs7QUFFQSxZQUFLQyxHQUFMLEdBQVcsTUFBSzlCLFNBQUwsQ0FBZU0sTUFBZixDQUFzQixLQUF0QixDQUFYOztBQUVBLFVBQUksTUFBS3dCLEdBQUwsQ0FBU3ZCLElBQVQsT0FBb0IsQ0FBeEIsRUFBMkI7QUFDekI7QUFDQSxjQUFLdUIsR0FBTCxHQUFXLE1BQUs5QixTQUFMLENBQWUrQixNQUFmLENBQXNCLEtBQXRCLENBQVg7QUFDRDs7QUFFRDtBQUNBLFlBQUtELEdBQUwsQ0FBU0UsSUFBVCxDQUFjLEVBQWQ7O0FBRUEsWUFBS0YsR0FBTCxDQUNHRyxJQURILENBQ1EsT0FEUixFQUNpQixNQUFLTCxjQUFMLENBQW9CZCxLQURyQyxFQUVHbUIsSUFGSCxDQUVRLFFBRlIsRUFFa0IsTUFBS0wsY0FBTCxDQUFvQlosTUFGdEMsRUFHR2lCLElBSEgsQ0FHUSxPQUhSLEVBR2lCLFlBQVloQyxLQUFLWSxLQUFMLENBQVdxQixTQUh4Qzs7QUFLQTtBQUNBLFlBQUtKLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixNQUFoQixFQUNHQSxNQURILENBQ1UsVUFEVixFQUVHRSxJQUZILENBRVEsSUFGUixrQkFFNEIsTUFBS2QsT0FBTCxDQUFhTixLQUFiLENBQW1Cc0IsT0FGL0MsRUFHR0osTUFISCxDQUdVLE1BSFYsRUFJR0UsSUFKSCxDQUlRLE9BSlIsRUFJaUIsTUFBS1osVUFKdEIsRUFLR1ksSUFMSCxDQUtRLFFBTFIsRUFLa0IsTUFBS2IsV0FMdkI7O0FBT0E7QUFDQSxZQUFLZ0IsU0FBTCxHQUFpQixNQUFLTixHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFDZEUsSUFEYyxDQUNULFdBRFMsRUFDSSxlQUFlLE1BQUtYLE1BQUwsQ0FBWUUsSUFBM0IsR0FBa0MsR0FBbEMsR0FBd0MsTUFBS0YsTUFBTCxDQUFZSSxHQUFwRCxHQUEwRCxHQUQ5RCxFQUVkTyxJQUZjLENBRVQsT0FGUyxFQUVBLGNBRkEsQ0FBakI7QUFHRDtBQXhGMkI7QUF5RjdCOzs7OzJCQUVPO0FBQ05JLGNBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLElBQTFCO0FBQ0E7QUFDQSxXQUFLVCxrQkFBTCxDQUF3QlUsT0FBeEIsQ0FBZ0MsVUFBVUMsU0FBVixFQUFxQjtBQUNuRCxZQUFJQSxxQkFBcUJDLDhEQUF6QixFQUF5QztBQUN2Q0Qsb0JBQVVFLElBQVY7QUFDRDtBQUNGLE9BSkQ7QUFLRDs7OzZCQUVTO0FBQ1IsV0FBS1osR0FBTCxDQUFTRyxJQUFULENBQWMsT0FBZCxFQUF1QixLQUFLTCxjQUFMLENBQW9CZCxLQUEzQztBQUNBLFdBQUtzQixTQUFMLENBQWVILElBQWYsQ0FBb0IsV0FBcEIsRUFBaUMsZUFBZSxLQUFLWCxNQUFMLENBQVlFLElBQTNCLEdBQWtDLEdBQWxDLEdBQXdDLEtBQUtGLE1BQUwsQ0FBWUksR0FBcEQsR0FBMEQsR0FBM0Y7QUFDQSxXQUFLSSxHQUFMLENBQVN4QixNQUFULENBQWdCLFVBQWhCLEVBQTRCQSxNQUE1QixDQUFtQyxNQUFuQyxFQUEyQzJCLElBQTNDLENBQWdELE9BQWhELEVBQXlELEtBQUtaLFVBQTlEOztBQUVBZ0IsY0FBUUMsR0FBUixDQUFZLGNBQVosRUFBNEIsSUFBNUI7QUFDQTtBQUNBLFdBQUtULGtCQUFMLENBQXdCVSxPQUF4QixDQUFnQyxVQUFVQyxTQUFWLEVBQXFCO0FBQ25ELFlBQUlBLHFCQUFxQkMsOERBQXpCLEVBQXlDO0FBQ3ZDRCxvQkFBVUcsTUFBVjtBQUNEO0FBQ0YsT0FKRDtBQUtEOzs7NkJBRVNDLFEsRUFBVTtBQUNsQlAsY0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLElBQTlCO0FBQ0FNLGlCQUFXLENBQUMsQ0FBQ0EsUUFBYixDQUZrQixDQUVJO0FBQ3RCLFdBQUtmLGtCQUFMLENBQXdCVSxPQUF4QixDQUFnQyxVQUFVQyxTQUFWLEVBQXFCO0FBQ25ELFlBQUlBLHFCQUFxQkMsOERBQXpCLEVBQXlDO0FBQ3ZDRCxvQkFBVUssUUFBVixDQUFtQkQsUUFBbkI7QUFDRDtBQUNGLE9BSkQ7QUFLRDs7OzZCQUVTO0FBQ1JQLGNBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLElBQTVCO0FBQ0EsV0FBS1Qsa0JBQUwsQ0FBd0JVLE9BQXhCLENBQWdDLFVBQVVDLFNBQVYsRUFBcUI7QUFDbkQsWUFBSUEscUJBQXFCQyw4REFBekIsRUFBeUM7QUFDdkNELG9CQUFVTSxNQUFWO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7O0FBRUQ7Ozs7c0NBQ21CO0FBQUE7O0FBQ2pCLFVBQUksS0FBSzNCLE9BQUwsQ0FBYU4sS0FBYixDQUFtQmtDLFdBQXZCLEVBQW9DO0FBQ2xDLGFBQUtDLGNBQUwsR0FBc0JDLHVEQUFRQSxDQUFDLFVBQUNuQyxLQUFELEVBQVFFLE1BQVIsRUFBbUI7QUFDaEQsY0FBSUYsVUFBVSxPQUFLYyxjQUFMLENBQW9CZCxLQUFsQyxFQUF5QztBQUN2QyxtQkFEdUMsQ0FDaEM7QUFDUjtBQUNELGlCQUFLYyxjQUFMLENBQW9CZCxLQUFwQixHQUE0Qm9DLEtBQUtDLEtBQUwsQ0FBV3JDLEtBQVgsQ0FBNUI7QUFDQSxpQkFBS2MsY0FBTCxDQUFvQlosTUFBcEIsR0FBNkJrQyxLQUFLQyxLQUFMLENBQVduQyxNQUFYLENBQTdCO0FBQ0EsaUJBQUtLLFVBQUwsR0FBa0IsT0FBS08sY0FBTCxDQUFvQmQsS0FBcEIsSUFBNkIsT0FBS1EsTUFBTCxDQUFZRSxJQUFaLEdBQW1CLE9BQUtGLE1BQUwsQ0FBWUcsS0FBNUQsQ0FBbEI7QUFDQSxpQkFBS0wsV0FBTCxHQUFtQixPQUFLUSxjQUFMLENBQW9CWixNQUFwQixJQUE4QixPQUFLTSxNQUFMLENBQVlJLEdBQVosR0FBa0IsT0FBS0osTUFBTCxDQUFZSyxNQUE1RCxDQUFuQjtBQUNBeUIscUJBQVc7QUFBQSxtQkFBTSxPQUFLVCxNQUFMLEVBQU47QUFBQSxXQUFYLEVBQWdDLENBQWhDO0FBQ0QsU0FUcUIsRUFTbkIsR0FUbUIsQ0FBdEIsQ0FEa0MsQ0FVMUI7O0FBRVI7QUFDQSxZQUFNVSxVQUFVLFNBQVMsS0FBS2xDLE9BQUwsQ0FBYU4sS0FBYixDQUFtQnlDLEVBQW5CLElBQXlCLEtBQUtuQyxPQUFMLENBQWFOLEtBQWIsQ0FBbUJzQixPQUFyRCxDQUFoQjtBQUNBN0Isa0VBQU1BLENBQUNpRCxNQUFQLEVBQWVDLEVBQWYsQ0FBa0IsWUFBWUgsT0FBOUIsRUFBdUM7QUFBQSxpQkFBTSxPQUFLSSxhQUFMLEVBQU47QUFBQSxTQUF2QztBQUVEO0FBQ0Y7OztvQ0FFZ0I7QUFDZixVQUFNL0MsZUFBZUMsNERBQWFBLENBQUMsS0FBS1gsU0FBbkIsQ0FBckI7QUFDQSxVQUFJMEQsb0JBQW9CaEQsYUFBYUksS0FBckM7O0FBRUEsVUFBSTRDLG9CQUFvQixLQUFLdkMsT0FBTCxDQUFhTixLQUFiLENBQW1CSSxRQUEzQyxFQUFxRDtBQUNuRHlDLDRCQUFvQixLQUFLdkMsT0FBTCxDQUFhTixLQUFiLENBQW1CSSxRQUF2QztBQUNEOztBQUVELFVBQUl5QyxvQkFBb0IsS0FBS3ZDLE9BQUwsQ0FBYU4sS0FBYixDQUFtQkssUUFBM0MsRUFBcUQ7QUFDbkR3Qyw0QkFBb0IsS0FBS3ZDLE9BQUwsQ0FBYU4sS0FBYixDQUFtQkssUUFBdkM7QUFDRDs7QUFFRCxXQUFLOEIsY0FBTCxDQUFvQlUsaUJBQXBCLEVBQXVDaEQsYUFBYU0sTUFBcEQ7QUFDRDs7QUFFRDs7Ozs0QkFDUzJDLFcsRUFBYTtBQUNwQkEsb0JBQWMsQ0FBQyxDQUFDQSxXQUFoQjtBQUNBO0FBQ0EsVUFBSSxLQUFLeEMsT0FBTCxDQUFhTixLQUFiLENBQW1Ca0MsV0FBdkIsRUFBb0M7QUFDbEMsWUFBTU0sVUFBVSxTQUFTLEtBQUtsQyxPQUFMLENBQWFOLEtBQWIsQ0FBbUJ5QyxFQUFuQixJQUF5QixLQUFLbkMsT0FBTCxDQUFhTixLQUFiLENBQW1Cc0IsT0FBckQsQ0FBaEI7QUFDQTdCLGtFQUFNQSxDQUFDaUQsTUFBUCxFQUFlQyxFQUFmLENBQWtCLFlBQVlILE9BQTlCLEVBQXVDLElBQXZDO0FBQ0Q7O0FBRUQ7QUFDQSxXQUFLUCxNQUFMOztBQUVBO0FBQ0FhLHFCQUFlLEtBQUs3QixHQUFMLENBQVNnQixNQUFULEVBQWY7QUFDQWEscUJBQWUsS0FBSzNELFNBQUwsQ0FBZThDLE1BQWYsRUFBZjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQTVMZ0NMLDhEOztBQUFkMUMsb0U7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BOztBQU9BOztBQUVBOztBQUVBOztBQU9BOztBQU9BOztBQUVBOztBQU1lO0FBQ2I2RCxXQUFTO0FBREksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBOztBQUVPLFNBQVNDLHNCQUFULENBQWlDNUQsSUFBakMsRUFBdUM7O0FBRTVDQSxPQUFLWSxLQUFMLEdBQWEsMkVBQWM7QUFDekJrQyxpQkFBYSxLQURZO0FBRXpCZSxtQkFBZSxLQUZVO0FBR3pCNUIsZUFBVyxFQUhjO0FBSXpCakIsa0dBSnlCO0FBS3pCQyxjQUFVO0FBTGUsR0FBZCxFQU1WakIsS0FBS1ksS0FOSyxDQUFiO0FBT0FaLE9BQUtZLEtBQUwsQ0FBV3NCLE9BQVgsR0FBcUI0QiwyREFBWUEsRUFBakM7O0FBRUE5RCxPQUFLK0QsT0FBTCxHQUFlLDJFQUFjO0FBQzNCQyxhQUFTLElBRGtCO0FBRTNCQyxZQUFRLEtBRm1CLENBRWI7QUFGYSxHQUFkLEVBR1hqRSxLQUFLK0QsT0FBTCxJQUFnQixFQUhMLENBQWY7O0FBS0EvRCxPQUFLa0UsTUFBTCxHQUFjLDJFQUFjO0FBQzFCRixhQUFTLElBRGlCO0FBRTFCRyxrQkFBYyxFQUZZO0FBRzFCQyxjQUFVQyxrREFBU0EsQ0FBQ0M7QUFITSxHQUFkLEVBSVZ0RSxLQUFLa0UsTUFBTCxJQUFlLEVBSkwsQ0FBZDs7QUFNQSxNQUFJLENBQUNLLHlEQUFVQSxDQUFDdkUsS0FBS3dFLFNBQWhCLENBQUwsRUFBaUM7QUFDL0J4RSxTQUFLd0UsU0FBTCxHQUFpQixVQUFVQyxDQUFWLEVBQWE7QUFDNUIsYUFBT0EsQ0FBUDtBQUNELEtBRkQ7QUFHRDs7QUFFRCxNQUFJLENBQUNGLHlEQUFVQSxDQUFDdkUsS0FBSzBFLFVBQWhCLENBQUwsRUFBa0M7QUFDaEMxRSxTQUFLMEUsVUFBTCxHQUFrQixVQUFVQyxJQUFWLEVBQWdCO0FBQ2hDdkMsY0FBUUMsR0FBUix1QkFBZ0NyQyxLQUFLUSxhQUFyQyx5QkFBc0VtRSxJQUF0RTtBQUNELEtBRkQ7QUFHRDs7QUFFRCxNQUFJLENBQUNKLHlEQUFVQSxDQUFDdkUsS0FBSzRFLE9BQWhCLENBQUwsRUFBK0I7QUFDN0I1RSxTQUFLNEUsT0FBTCxHQUFlLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUJ6QyxjQUFRQyxHQUFSLHFDQUE4Q3JDLEtBQUtRLGFBQW5ELFFBQXFFcUUsS0FBckU7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsU0FBTzdFLElBQVA7QUFDRDs7QUFFTSxTQUFTOEUsa0JBQVQsQ0FBNkJDLEdBQTdCLEVBQTJEO0FBQUEsTUFBekJDLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLE1BQWRDLFFBQWMsdUVBQUgsQ0FBRzs7QUFDaEUsTUFBTUMsY0FBYyxJQUFwQjtBQUNBLE1BQUlILE1BQU1HLFdBQVYsRUFBdUI7QUFDckIsUUFBTUMsT0FBT0MsbUVBQW9CQSxDQUFDTCxNQUFNRyxXQUEzQixFQUF3Q0QsUUFBeEMsQ0FBYjtBQUNBLFFBQUlFLE9BQU9ELFdBQVgsRUFBd0I7QUFDdEIsVUFBTUcsT0FBT0QsbUVBQW9CQSxDQUFDRCxPQUFPRCxXQUE1QixFQUF5Q0QsUUFBekMsQ0FBYjtBQUNBLGFBQVVJLElBQVYsVUFBbUJMLElBQW5CO0FBQ0Q7QUFDRCxXQUFVRyxJQUFWLFVBQW1CSCxJQUFuQjtBQUNEO0FBQ0QsU0FBVUksbUVBQW9CQSxDQUFDTCxHQUFyQixFQUEwQkUsUUFBMUIsQ0FBVixTQUFpREQsSUFBakQ7QUFDRDs7QUFHTSxTQUFTTSxtQkFBVCxDQUE4QnRGLElBQTlCLEVBQW9DO0FBQ3pDO0FBQ0FBLE9BQUt1RixLQUFMLEdBQWEsMkVBQWM7QUFDekI3RCxZQUFRO0FBQ05zRCxZQUFNWCxrREFBU0EsQ0FBQ21CLFVBRFY7QUFFTnhCLGVBQVM7QUFGSDtBQURpQixHQUFkLEVBS1RoRSxLQUFLdUYsS0FBTCxJQUFjLEVBTEwsQ0FBYjs7QUFPQSxNQUFJLENBQUNoQix5REFBVUEsQ0FBQ3ZFLEtBQUt1RixLQUFMLENBQVc3RCxNQUFYLENBQWtCK0QsYUFBN0IsQ0FBTCxFQUFrRDtBQUNoRCxRQUFNQyxXQUFXMUYsS0FBSzBGLFFBQXRCO0FBQ0E7QUFDQSxRQUFNQyxVQUFVRCxTQUFTRSxTQUFULENBQW1CekYsTUFBbkM7QUFDQSxRQUFNMEYsV0FBV0gsU0FBU0UsU0FBVCxDQUFtQkQsVUFBVSxDQUE3QixJQUFrQ0QsU0FBU0UsU0FBVCxDQUFtQixDQUFuQixDQUFuRDs7QUFFQSxRQUFNRSxVQUFXRCxXQUFXeEIsa0RBQVNBLENBQUMwQixrQkFBdEIsR0FBNENDLDhEQUFVQSxDQUFDLE9BQVgsQ0FBNUMsR0FBa0VBLDhEQUFVQSxDQUFDLFVBQVgsQ0FBbEY7QUFDQWhHLFNBQUt1RixLQUFMLENBQVc3RCxNQUFYLENBQWtCK0QsYUFBbEIsR0FBa0MsVUFBQ1EsS0FBRCxFQUFXO0FBQzNDLGFBQU9ILFFBQVFHLEtBQVIsQ0FBUDtBQUNELEtBRkQ7QUFHRDs7QUFFRDtBQUNBLE1BQUksQ0FBQ2pHLEtBQUtrRyxLQUFWLEVBQWlCO0FBQ2ZsRyxTQUFLa0csS0FBTCxHQUFhO0FBQ1gzRSxZQUFNO0FBREssS0FBYjtBQUdEOztBQUVELE1BQUl2QixLQUFLa0csS0FBTCxDQUFXM0UsSUFBZixFQUFxQjtBQUNuQnZCLFNBQUtrRyxLQUFMLENBQVczRSxJQUFYLEdBQWtCLDJFQUFjO0FBQzlCeUQsWUFBTVgsa0RBQVNBLENBQUM4QixTQURjO0FBRTlCQyxXQUFLLENBRnlCLEVBRXRCO0FBQ1JwQyxlQUFTO0FBSHFCLEtBQWQsRUFJZmhFLEtBQUtrRyxLQUFMLENBQVczRSxJQUpJLENBQWxCO0FBS0Q7O0FBRUQsTUFBSXZCLEtBQUtrRyxLQUFMLENBQVcxRSxLQUFmLEVBQXNCO0FBQ3BCeEIsU0FBS2tHLEtBQUwsQ0FBVzFFLEtBQVgsR0FBbUIsMkVBQWM7QUFDL0J3RCxZQUFNWCxrREFBU0EsQ0FBQzhCLFNBRGU7QUFFL0JDLFdBQUssQ0FGMEIsRUFFdkI7QUFDUnBDLGVBQVM7QUFIc0IsS0FBZCxFQUloQmhFLEtBQUtrRyxLQUFMLENBQVcxRSxLQUpLLENBQW5CO0FBS0Q7O0FBRUR4QixPQUFLcUcsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCckMsYUFBUztBQURlLEdBQWQsRUFFUmhFLEtBQUtxRyxJQUFMLElBQWEsRUFGTCxDQUFaOztBQUlBO0FBQ0FyRyxPQUFLK0QsT0FBTCxHQUFlLDJFQUFjO0FBQzNCQyxhQUFTLElBRGtCO0FBRTNCQyxZQUFRLEtBRm1CLENBRWI7QUFGYSxHQUFkLEVBR1hqRSxLQUFLK0QsT0FBTCxJQUFnQixFQUhMLENBQWY7O0FBS0EsTUFBSSxDQUFDUSx5REFBVUEsQ0FBQ3ZFLEtBQUsrRCxPQUFMLENBQWFFLE1BQXhCLENBQUwsRUFBc0M7QUFDcEMsUUFBTXFDLGFBQWFOLDhEQUFVQSxDQUFDLG9CQUFYLENBQW5CO0FBQ0FoRyxTQUFLK0QsT0FBTCxDQUFhRSxNQUFiLEdBQXNCLFVBQVVzQyxDQUFWLEVBQWE7QUFDakMsVUFBSSxDQUFDQSxDQUFELElBQU0sQ0FBQ0Msc0RBQU9BLENBQUNELENBQVIsQ0FBWCxFQUF1QjtBQUNyQixlQUFPLEVBQVA7QUFDRDtBQUNELFVBQU1FLFVBQVUsS0FBS3ZGLE9BQUwsQ0FBYXVGLE9BQTdCO0FBQ0EsVUFBTWYsV0FBVyxLQUFLeEUsT0FBTCxDQUFhd0UsUUFBOUI7QUFDQSxVQUFNZ0IsYUFBYSxLQUFLeEYsT0FBTCxDQUFhcUUsS0FBYixDQUFtQm1CLFVBQW5CLElBQWlDLEVBQXBEO0FBQ0EsVUFBTVIsUUFBUSxLQUFLaEYsT0FBTCxDQUFhZ0YsS0FBM0I7O0FBRUEsVUFBSVMsaUdBRUlMLFdBQVdDLEVBQUViLFNBQVNrQixTQUFYLENBQVgsQ0FGSixTQUV5Q0YsVUFGekMsNkJBQUo7O0FBS0EsV0FBSyxJQUFNRyxHQUFYLElBQWtCSixPQUFsQixFQUEyQjtBQUN6QixZQUFNMUIsTUFBTXdCLEVBQUVFLFFBQVFJLEdBQVIsRUFBYUQsU0FBZixDQUFaO0FBQ0EsWUFBSSxDQUFDSCxRQUFRSSxHQUFSLEVBQWE3QyxPQUFkLElBQXlCOEMsTUFBTS9CLEdBQU4sQ0FBN0IsRUFBeUM7QUFDdkM7QUFDRDs7QUFFRDtBQUNBLFlBQU1nQyxVQUFVYixNQUFNTyxRQUFRSSxHQUFSLEVBQWFHLFFBQWIsQ0FBc0IsQ0FBdEIsQ0FBTixDQUFoQjtBQUNBLFlBQU0vQyxTQUFTOEMsUUFBUTlDLE1BQVIsSUFBa0JhLGtCQUFqQzs7QUFFQTZCLHVHQUVvQ0YsUUFBUUksR0FBUixFQUFhSSxLQUZqRCxrQkFFa0VSLFFBQVFJLEdBQVIsRUFBYUssSUFGL0UsbUVBS01qRCxPQUFPYyxHQUFQLEVBQVkwQixRQUFRSSxHQUFSLEVBQWE3QixJQUF6QixDQUxOO0FBUUQ7O0FBRUQyQixrQkFBWSxrQkFBWjs7QUFFQSxhQUFPQSxRQUFQO0FBQ0QsS0FyQ0Q7QUFzQ0Q7O0FBRUQvQyx5QkFBdUI1RCxJQUF2Qjs7QUFFQSxTQUFPQSxJQUFQO0FBQ0Q7O0FBRU0sU0FBU21ILG1CQUFULENBQThCbkgsSUFBOUIsRUFBb0M7QUFDekM7QUFDQUEsT0FBS3VGLEtBQUwsR0FBYSwyRUFBYztBQUN6QjdELFlBQVE7QUFDTnNELFlBQU1YLGtEQUFTQSxDQUFDOEIsU0FEVjtBQUVObkMsZUFBUztBQUZIO0FBRGlCLEdBQWQsRUFLVGhFLEtBQUt1RixLQUFMLElBQWMsRUFMTCxDQUFiOztBQVFBO0FBQ0EsTUFBSSxDQUFDdkYsS0FBS2tHLEtBQVYsRUFBaUI7QUFDZmxHLFNBQUtrRyxLQUFMLEdBQWE7QUFDWDNFLFlBQU07QUFESyxLQUFiO0FBR0Q7O0FBRUQsTUFBSXZCLEtBQUtrRyxLQUFMLENBQVczRSxJQUFmLEVBQXFCO0FBQ25CdkIsU0FBS2tHLEtBQUwsQ0FBVzNFLElBQVgsR0FBa0IsMkVBQWM7QUFDOUJ5RCxZQUFNWCxrREFBU0EsQ0FBQzhCLFNBRGM7QUFFOUJDLFdBQUssQ0FGeUIsRUFFdEI7QUFDUnBDLGVBQVM7QUFIcUIsS0FBZCxFQUlmaEUsS0FBS2tHLEtBQUwsQ0FBVzNFLElBSkksQ0FBbEI7QUFLRDs7QUFFRCxNQUFJdkIsS0FBS2tHLEtBQUwsQ0FBVzFFLEtBQWYsRUFBc0I7QUFDcEJ4QixTQUFLa0csS0FBTCxDQUFXMUUsS0FBWCxHQUFtQiwyRUFBYztBQUMvQndELFlBQU1YLGtEQUFTQSxDQUFDOEIsU0FEZTtBQUUvQkMsV0FBSyxDQUYwQixFQUV2QjtBQUNScEMsZUFBUztBQUhzQixLQUFkLEVBSWhCaEUsS0FBS2tHLEtBQUwsQ0FBVzFFLEtBSkssQ0FBbkI7QUFLRDs7QUFFRHhCLE9BQUtxRyxJQUFMLEdBQVksMkVBQWM7QUFDeEJyQyxhQUFTO0FBRGUsR0FBZCxFQUVSaEUsS0FBS3FHLElBQUwsSUFBYSxFQUZMLENBQVo7O0FBS0E7QUFDQXJHLE9BQUsrRCxPQUFMLEdBQWUsMkVBQWM7QUFDM0JDLGFBQVMsSUFEa0I7QUFFM0JDLFlBQVEsS0FGbUIsQ0FFYjtBQUZhLEdBQWQsRUFHWGpFLEtBQUsrRCxPQUFMLElBQWdCLEVBSEwsQ0FBZjs7QUFLQSxNQUFJLENBQUNRLHlEQUFVQSxDQUFDdkUsS0FBSytELE9BQUwsQ0FBYUUsTUFBeEIsQ0FBTCxFQUFzQztBQUNwQ2pFLFNBQUsrRCxPQUFMLENBQWFFLE1BQWIsR0FBc0IsVUFBVXNDLENBQVYsRUFBYTtBQUNqQyxVQUFJYSxVQUFVYixDQUFkO0FBQ0EsVUFBSUEsS0FBS0EsRUFBRXhCLEdBQVgsRUFBZ0I7QUFDZHFDLGtCQUFVYixFQUFFeEIsR0FBWjtBQUNEO0FBQ0QsVUFBSSxDQUFDeUIsc0RBQU9BLENBQUNZLE9BQVIsQ0FBTCxFQUF1QjtBQUNyQixlQUFPLEVBQVA7QUFDRDtBQUNELFVBQU1YLFVBQVUsS0FBS3ZGLE9BQUwsQ0FBYXVGLE9BQTdCO0FBQ0EsVUFBTWYsV0FBVyxLQUFLeEUsT0FBTCxDQUFhd0UsUUFBOUI7QUFDQSxVQUFNUSxRQUFRLEtBQUtoRixPQUFMLENBQWFnRixLQUEzQjs7QUFFQSxVQUFJUyxpR0FFSVMsUUFBUTFCLFNBQVNrQixTQUFqQixDQUZKLDZCQUFKOztBQUtBLFdBQUssSUFBTUMsR0FBWCxJQUFrQkosT0FBbEIsRUFBMkI7QUFDekIsWUFBTTFCLE1BQU1xQyxRQUFRWCxRQUFRSSxHQUFSLEVBQWFELFNBQXJCLENBQVo7QUFDQSxZQUFJLENBQUNILFFBQVFJLEdBQVIsRUFBYTdDLE9BQWQsSUFBeUI4QyxNQUFNL0IsR0FBTixDQUE3QixFQUF5QztBQUN2QztBQUNEOztBQUVEO0FBQ0EsWUFBTWdDLFVBQVViLE1BQU1PLFFBQVFJLEdBQVIsRUFBYUcsUUFBYixDQUFzQixDQUF0QixDQUFOLENBQWhCO0FBQ0EsWUFBTS9DLFNBQVM4QyxRQUFROUMsTUFBUixJQUFrQmEsa0JBQWpDOztBQUVBNkIsdUdBRW9DRixRQUFRSSxHQUFSLEVBQWFJLEtBRmpELDZFQUtNaEQsT0FBT2MsR0FBUCxFQUFZMEIsUUFBUUksR0FBUixFQUFhN0IsSUFBekIsQ0FMTjtBQVFEOztBQUVEMkIsa0JBQVksa0JBQVo7O0FBRUEsYUFBT0EsUUFBUDtBQUNELEtBeENEO0FBeUNEOztBQUVEL0MseUJBQXVCNUQsSUFBdkI7O0FBRUEsU0FBT0EsSUFBUDtBQUNEOztBQUVNLFNBQVNxSCxtQkFBVCxDQUE4QnJILElBQTlCLEVBQW9DOztBQUV6QztBQUNBQSxPQUFLK0QsT0FBTCxHQUFlLDJFQUFjO0FBQzNCQyxhQUFTLElBRGtCO0FBRTNCQyxZQUFRLEtBRm1CLENBRWI7QUFGYSxHQUFkLEVBR1hqRSxLQUFLK0QsT0FBTCxJQUFnQixFQUhMLENBQWY7O0FBS0EsTUFBSSxDQUFDUSx5REFBVUEsQ0FBQ3ZFLEtBQUsrRCxPQUFMLENBQWFFLE1BQXhCLENBQUwsRUFBc0M7QUFDcENqRSxTQUFLK0QsT0FBTCxDQUFhRSxNQUFiLEdBQXNCLFVBQVVzQyxDQUFWLEVBQWE7QUFDakMsVUFBSSxDQUFDQSxDQUFELElBQU0sQ0FBQ0EsRUFBRWUsS0FBYixFQUFvQjtBQUNsQixlQUFPLEVBQVA7QUFDRDtBQUNELFVBQU1DLFNBQVMsS0FBS3JHLE9BQUwsQ0FBYXNHLE1BQWIsQ0FBb0JDLEdBQW5DO0FBQ0EsVUFBTXhELFNBQVNzRCxPQUFPdEQsTUFBUCxJQUFpQmEsa0JBQWhDO0FBQ0EsVUFBTTRDLGFBQWF0QyxtRUFBb0JBLENBQUVtQixFQUFFZSxLQUFGLEdBQVVDLE9BQU9JLEtBQWxCLEdBQTJCLEdBQWhELEVBQXFELENBQXJELENBQW5COztBQUVBLDhKQUd5RHBCLEVBQUVVLEtBSDNELGtCQUc0RVYsRUFBRVcsSUFIOUUsaURBSTRCUSxVQUo1QiwwR0FPd0N6RCxPQUFPc0MsRUFBRWUsS0FBVCxFQUFnQkMsT0FBT3ZDLElBQXZCLENBUHhDO0FBV0QsS0FuQkQ7QUFvQkQ7O0FBRURwQix5QkFBdUI1RCxJQUF2Qjs7QUFFQUEsT0FBS2tFLE1BQUwsQ0FBWUUsUUFBWixHQUF1QkMsa0RBQVNBLENBQUN1RCxTQUFqQzs7QUFFQSxTQUFPNUgsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblNEOztJQUVxQjZILE07OztBQUNuQixrQkFBYTdILElBQWIsRUFBbUI7QUFBQTs7QUFBQTtBQUVsQjs7OzsyQkFFTztBQUNOLFdBQUs4SCxVQUFMLENBQWdCeEYsT0FBaEIsQ0FBd0IsVUFBVXlGLE1BQVYsRUFBa0I7QUFDeENBLGVBQU90RixJQUFQO0FBQ0QsT0FGRDtBQUdEOzs7NkJBRVM7QUFDUixXQUFLcUYsVUFBTCxDQUFnQnhGLE9BQWhCLENBQXdCLFVBQVV5RixNQUFWLEVBQWtCO0FBQ3hDQSxlQUFPckYsTUFBUDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVTQyxRLEVBQVU7QUFDbEIsV0FBS21GLFVBQUwsQ0FBZ0J4RixPQUFoQixDQUF3QixVQUFVeUYsTUFBVixFQUFrQjtBQUN4Q0EsZUFBT25GLFFBQVAsQ0FBZ0JELFFBQWhCO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7OzZCQUNVO0FBQ1IsV0FBS21GLFVBQUwsQ0FBZ0J4RixPQUFoQixDQUF3QixVQUFVeUYsTUFBVixFQUFrQjtBQUN4Q0EsZUFBT0MsTUFBUDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVTO0FBQ1IsV0FBS0YsVUFBTCxDQUFnQnhGLE9BQWhCLENBQXdCLFVBQVV5RixNQUFWLEVBQWtCO0FBQ3hDQSxlQUFPbEYsTUFBUDtBQUNELE9BRkQ7QUFHQSxXQUFLaUYsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUs5SCxJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBcENpQ3dDLDhEOztBQUFmcUYscUUiLCJmaWxlIjoiYmFyc2VyaWVzfnBpZXNlcmllc350aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBpc09iamVjdCwgaXNTdHJpbmcsIHRocm90dGxlfSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgaWYgKGlzU3RyaW5nKGNvbnRhaW5lcikgJiYgaXNPYmplY3Qob3B0cykgJiYgY29udGFpbmVyLmxlbmd0aCAmJiBpc09iamVjdChvcHRzLmRhdGFQYXJzZXIpKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHNlbGVjdChjb250YWluZXIpXG4gICAgICBpZiAoIXRoaXMuY29udGFpbmVyLnNpemUoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBncmFwaCBjb250YWluZXIgc3BlY3RpZmVkIGluIG9wdGlvbnMgZG9lc250IGV4aXN0IGluc2lkZSBpbiBEb2N1bWVudCBCb2R5JylcbiAgICAgIH1cbiAgICAgIG9wdHMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lclxuXG4gICAgICBjb25zdCBjb250YWluZXJCb3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMuY29udGFpbmVyKVxuXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lcldpZHRoID0gZmFsc2VcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG9wdHMuY2hhcnQud2lkdGgpKSB7XG4gICAgICAgIG9wdHMuY2hhcnQud2lkdGggPSBjb250YWluZXJCb3gud2lkdGhcbiAgICAgICAgdGFrZUNvbnRhaW5lcldpZHRoID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lckhlaWdodCA9IGZhbHNlXG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShvcHRzLmNoYXJ0LmhlaWdodCkpIHtcbiAgICAgICAgb3B0cy5jaGFydC5oZWlnaHQgPSBjb250YWluZXJCb3guaGVpZ2h0XG4gICAgICAgIHRha2VDb250YWluZXJIZWlnaHQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmNoYXJ0LndpZHRoID4gb3B0cy5jaGFydC5tYXhXaWR0aCkge1xuICAgICAgICBvcHRzLmNoYXJ0LndpZHRoID0gb3B0cy5jaGFydC5tYXhXaWR0aFxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5jaGFydC53aWR0aCA8IG9wdHMuY2hhcnQubWluV2lkdGgpIHtcbiAgICAgICAgb3B0cy5jaGFydC53aWR0aCA9IG9wdHMuY2hhcnQubWluV2lkdGhcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0c1xuXG4gICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gb3B0cy5jaGFydC5oZWlnaHRcbiAgICAgIHRoaXMuY2hhcnRXaWR0aCA9IG9wdHMuY2hhcnQud2lkdGhcbiAgICAgIHRoaXMubWFyZ2luID0gb3B0cy5jaGFydC5tYXJnaW5cbiAgICAgIHRoaXMuY2hhcnRUeXBlID0gb3B0cy5jaGFydC5jaGFydFR5cGVcblxuICAgICAgaWYgKHRha2VDb250YWluZXJXaWR0aCkge1xuICAgICAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLSAodGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFrZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jaGFydEhlaWdodCAtICh0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCBkYXRhUHJvY2VzcyB0byBjaGFydCwgd2hpY2ggZ2VuZXJhdGUgY2hhcnREYXRhIGFuZCBwbG90IEluZm8gYmFzZWQgb24gSlNPTiBhbmQgb3B0aW9uc1xuICAgICAgdGhpcy5kYXRhUGFyc2VyID0gb3B0cy5kYXRhUGFyc2VyXG5cbiAgICAgIC8vIERlbGV0ZSBkYXRhUHJvY2VzcyBmcm9tIG9wdGlvbnNcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZGF0YVBhcnNlclxuXG4gICAgICB0aGlzLmNoYXJ0RnVsbFNwYWNlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jaGFydFdpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0LFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY2hhcnRIZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20sXG4gICAgICB9XG5cblxuICAgICAgLy8gQXJyYXkgd2hpY2ggaG9sZHMgYWxsIHRoZSBjaGFydENvbXBvbmVudHMgcmVxdWlyZWQgZm9yIHRoZSBncmFwaCBsaWtlIGF4aXMsIHNlcmllcywgdG9vbHRpcCwgbGVnZW5kIGV0Y1xuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIgPSBbXVxuXG4gICAgICB0aGlzLnN2ZyA9IHRoaXMuY29udGFpbmVyLnNlbGVjdCgnc3ZnJylcblxuICAgICAgaWYgKHRoaXMuc3ZnLnNpemUoKSA9PT0gMCkge1xuICAgICAgICAvLyBDcmVhdGUgc3ZnIGVsZW1lbnQgaWYgbm90IGV4aXN0IGluc2lkZSBjaGFydCBjb250YWluZXIgRElWXG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5jb250YWluZXIuYXBwZW5kKCdzdmcnKVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBzdmcgaWYgaXQgaGFzIG5lZWRsZXNzIGNvbnRlbnRcbiAgICAgIHRoaXMuc3ZnLmh0bWwoJycpXG5cbiAgICAgIHRoaXMuc3ZnXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmNoYXJ0RnVsbFNwYWNlLmhlaWdodClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXN2ZyAnICsgb3B0cy5jaGFydC5jbGFzc05hbWUpXG5cbiAgICAgIC8vIEFkZCBkZWZzIHRvIHNob3cgcGxvdCBzZXJpZXMgd2l0aGluIHRoZSBkZWYgc3BlY2lmaWVkIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgIHRoaXMuc3ZnLmFwcGVuZCgnZGVmcycpXG4gICAgICAgIC5hcHBlbmQoJ2NsaXBQYXRoJylcbiAgICAgICAgLmF0dHIoJ2lkJywgYGNoYXJ0X2NsaXBfJHt0aGlzLm9wdGlvbnMuY2hhcnQuY291bnRlcn1gKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydFdpZHRoKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5jaGFydEhlaWdodClcblxuICAgICAgLy8gQWRkIGdyYXBoWm9uZSB0YWcsIHNvIHRoYXQgYWxsIHNlcmllcyBhbmQgYXhpcyBhcmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgdGhpcy5ncmFwaFpvbmUgPSB0aGlzLnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWdyYXBoWm9uZScpXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IGRyYXcnLCB0aGlzKVxuICAgIC8vIERyYXcgYWxsIHRoZSBjaGFydENvbXBvbmVudHMgaW4gdGhlIHNhbWUgb3JkZXIgb2YgdGhlcmUgaW5pdGlsaXphdGlvbiB1c2luZyBjaGFydENvbXBvbmVudHNBcnJcbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQuZHJhdygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zdmcuYXR0cignd2lkdGgnLCB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoKVxuICAgIHRoaXMuZ3JhcGhab25lLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpXG4gICAgdGhpcy5zdmcuc2VsZWN0KCdjbGlwUGF0aCcpLnNlbGVjdCgncmVjdCcpLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydFdpZHRoKVxuXG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHVwZGF0ZScsIHRoaXMpXG4gICAgLy8gVXBkYXRlIGFsbCBjaGFydCBjb21wb25lbnQgYmFzZWQgb24gbmV3IHdpZHRoIGNoYW5nZXNcbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQudXBkYXRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHNob3dIaWRlJywgdGhpcylcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWcgLy8gQ29udmVydCBhbnkgdHlwZSB0byBib29sZWFuXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LnNob3dIaWRlKHNob3dGbGFnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIGNvbnNvbGUubG9nKCdDaGFydCByZW1vdmUnLCB0aGlzKVxuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBjaGFydFJlc3BvbnNpdmUgYmFzZWQgb24gc2NyZWVuIHJlc2l6ZSBpcyBoYW5kbGVkXG4gIGNoYXJ0UmVzcG9uc2l2ZSAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jaGFydC5jaGFydFJlc2l6ZSkge1xuICAgICAgdGhpcy50aHJvdHRlZFJlc2l6ZSA9IHRocm90dGxlKCh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICAgIGlmICh3aWR0aCA9PT0gdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCkge1xuICAgICAgICAgIHJldHVybiAvLyBEb250IHJlc2l6ZSBpZiBncmFwaCBpcyBhbHJlYWR5IGFkanVzdGVkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpXG4gICAgICAgIHRoaXMuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpXG4gICAgICAgIHRoaXMuY2hhcnRXaWR0aCA9IHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGggLSAodGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgLSAodGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKCksIDApXG4gICAgICB9LCA0NTApIC8vICd0aGlzJyBXaWxsIGhhdmUgcmVmZXJlbmNlIG9mIHRpbWVTZXJpZXNDaGFydCBvciBwaWVTZXJpZXNDaGFydFxuXG4gICAgICAvLyBBZGQgcmVzaXplIGZvciBlYWNoIGNoYXJ0IGJhc2VkIG9uIGNoYXJ0IElEIG5hbWVzcGFjZVxuICAgICAgY29uc3QgY2hhcnRJZCA9ICd2Yy0nICsgKHRoaXMub3B0aW9ucy5jaGFydC5pZCB8fCB0aGlzLm9wdGlvbnMuY2hhcnQuY291bnRlcilcbiAgICAgIHNlbGVjdCh3aW5kb3cpLm9uKCdyZXNpemUuJyArIGNoYXJ0SWQsICgpID0+IHRoaXMuYXV0b1NpemVDaGFydCgpKVxuXG4gICAgfVxuICB9XG5cbiAgYXV0b1NpemVDaGFydCAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyQm94ID0gZWxlbWVudE9mZnNldCh0aGlzLmNvbnRhaW5lcilcbiAgICBsZXQgcmVzaXplZEdyYXBoV2lkdGggPSBjb250YWluZXJCb3gud2lkdGhcblxuICAgIGlmIChyZXNpemVkR3JhcGhXaWR0aCA+IHRoaXMub3B0aW9ucy5jaGFydC5tYXhXaWR0aCkge1xuICAgICAgcmVzaXplZEdyYXBoV2lkdGggPSB0aGlzLm9wdGlvbnMuY2hhcnQubWF4V2lkdGhcbiAgICB9XG5cbiAgICBpZiAocmVzaXplZEdyYXBoV2lkdGggPCB0aGlzLm9wdGlvbnMuY2hhcnQubWluV2lkdGgpIHtcbiAgICAgIHJlc2l6ZWRHcmFwaFdpZHRoID0gdGhpcy5vcHRpb25zLmNoYXJ0Lm1pbldpZHRoXG4gICAgfVxuXG4gICAgdGhpcy50aHJvdHRlZFJlc2l6ZShyZXNpemVkR3JhcGhXaWR0aCwgY29udGFpbmVyQm94LmhlaWdodClcbiAgfVxuXG4gIC8vIERlc3Ryb3kgYWxsIGNoYXJ0IHByb3BlcnRpZXMgYW5kIGNvbXBvbmVudHNcbiAgZGVzdHJveSAoZGVzdHJveUZ1bGwpIHtcbiAgICBkZXN0cm95RnVsbCA9ICEhZGVzdHJveUZ1bGxcbiAgICAvLyBSZW1vdmUgcmVzaXplIGhhbmRlciBvbiB3aW5kb3cgZm9yIHZjQ2hhcnQgbmFtZXNwYWNlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jaGFydC5jaGFydFJlc2l6ZSkge1xuICAgICAgY29uc3QgY2hhcnRJZCA9ICd2Yy0nICsgKHRoaXMub3B0aW9ucy5jaGFydC5pZCB8fCB0aGlzLm9wdGlvbnMuY2hhcnQuY291bnRlcilcbiAgICAgIHNlbGVjdCh3aW5kb3cpLm9uKCdyZXNpemUuJyArIGNoYXJ0SWQsIG51bGwpXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGFydENvbXBvbmVudHMgKHRpbWVTZXJpZXNDaGFydCBvciBwaWVTZXJpZXNDaGFydClcbiAgICB0aGlzLnJlbW92ZSgpXG5cbiAgICAvLyBSZW1vdmUgc3ZnIGFuZCBjb250YWluZXIgaWYgZGVzdHJveUZ1bGwgaXMgdHJ1ZVxuICAgIGRlc3Ryb3lGdWxsICYmIHRoaXMuc3ZnLnJlbW92ZSgpXG4gICAgZGVzdHJveUZ1bGwgJiYgdGhpcy5jb250YWluZXIucmVtb3ZlKClcblxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImV4cG9ydCB7XG4gIHNjYWxlQmFuZCxcbiAgc2NhbGVMaW5lYXIsXG4gIHNjYWxlVGltZVxufSBmcm9tICdkMy1zY2FsZSdcblxuZXhwb3J0IHtcbiAgYXhpc0JvdHRvbSxcbiAgYXhpc1RvcCxcbiAgYXhpc0xlZnQsXG4gIGF4aXNSaWdodFxufSBmcm9tICdkMy1heGlzJ1xuXG5leHBvcnQge3RpbWVGb3JtYXR9IGZyb20gJ2QzLXRpbWUtZm9ybWF0J1xuXG5leHBvcnQge2ludGVycG9sYXRlfSBmcm9tICdkMy1pbnRlcnBvbGF0ZSdcblxuZXhwb3J0IHtcbiAgc2VsZWN0LFxuICBzZWxlY3RBbGwsXG4gIG1vdXNlIGFzIGQzTW91c2UsXG4gIGV2ZW50IGFzIGQzRXZlbnRcbn0gZnJvbSAnZDMtc2VsZWN0aW9uJ1xuXG5leHBvcnQge1xuICByYW5nZSxcbiAgbWF4LFxuICB0cmFuc3Bvc2UsXG4gIGJpc2VjdG9yXG59IGZyb20gJ2QzLWFycmF5J1xuXG5leHBvcnQge2JydXNoWCwgYnJ1c2hZfSBmcm9tICdkMy1icnVzaCdcblxuZXhwb3J0IHtcbiAgbGluZSwgc3RhY2ssIGFyZWEsXG4gIHN0YWNrT3JkZXJOb25lLCBzdGFja09mZnNldE5vbmUsXG4gIHBpZSwgYXJjXG59IGZyb20gJ2QzLXNoYXBlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZlcnNpb246ICd2NSdcbn1cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2NoYXJ0Q291bnRlciwgZ2V0VmFsdWVXaXRoRGVjaW1hbHMsIGlzQXJyYXksIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge3RpbWVGb3JtYXR9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRDaGFydE9wdGlvbnMgKG9wdHMpIHtcblxuICBvcHRzLmNoYXJ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgY2hhcnRSZXNpemU6IGZhbHNlLFxuICAgIGlzVG91Y2hTY3JlZW46IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWF4V2lkdGg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgIG1pbldpZHRoOiAwXG4gIH0sIG9wdHMuY2hhcnQpXG4gIG9wdHMuY2hhcnQuY291bnRlciA9IGNoYXJ0Q291bnRlcigpXG5cbiAgb3B0cy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IGZhbHNlIC8vIFVzZSBhcnlha2FDaGFydHMgaW50ZXJuYWwgdG9vbHRpcCBmb3JtYXR0ZXIgdG8gc2hvdyByYXcgZGF0YVxuICB9LCAob3B0cy50b29sdGlwIHx8IHt9KSlcblxuICBvcHRzLmxlZ2VuZCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgbGVnZW5kUHJlZml4OiAnJyxcbiAgICBwb3NpdGlvbjogY29uc3RhbnRzLkRJUl9UT1BcbiAgfSwgKG9wdHMubGVnZW5kIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy5hZnRlckRyYXcpKSB7XG4gICAgb3B0cy5hZnRlckRyYXcgPSBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGNcbiAgICB9XG4gIH1cblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy5vbkNvbXBsZXRlKSkge1xuICAgIG9wdHMub25Db21wbGV0ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2hhcnQgbG9hZGluZyBvZiAke29wdHMuY29udGFpbmVyTmFtZX0gaXMgY29tcGxldGVkIGluICR7dGltZX0gbXNgKVxuICAgIH1cbiAgfVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLm9uRXJyb3IpKSB7XG4gICAgb3B0cy5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2hhcnQgaGFzIGVuY291bnRlcmVkIGVycm9yIG9mICR7b3B0cy5jb250YWluZXJOYW1lfSBgLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3B0c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZhbHVlRm9ybWF0ICh2YWwsIHVuaXQgPSAnJywgZGVjaW1hbHMgPSAzKSB7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gMTAwMFxuICBpZiAodmFsID4gZGVub21pbmF0b3IpIHtcbiAgICBjb25zdCBrVmFsID0gZ2V0VmFsdWVXaXRoRGVjaW1hbHModmFsIC8gZGVub21pbmF0b3IsIGRlY2ltYWxzKVxuICAgIGlmIChrVmFsID4gZGVub21pbmF0b3IpIHtcbiAgICAgIGNvbnN0IG1WYWwgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscyhrVmFsIC8gZGVub21pbmF0b3IsIGRlY2ltYWxzKVxuICAgICAgcmV0dXJuIGAke21WYWx9TSAke3VuaXR9YFxuICAgIH1cbiAgICByZXR1cm4gYCR7a1ZhbH1LICR7dW5pdH1gXG4gIH1cbiAgcmV0dXJuIGAke2dldFZhbHVlV2l0aERlY2ltYWxzKHZhbCwgZGVjaW1hbHMpfSAke3VuaXR9YFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VFNPcHRpb25zIChvcHRzKSB7XG4gIC8vIEFkZCBkZWZhdWx0cyB0byB4QXhpc1xuICBvcHRzLnhBeGlzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYm90dG9tOiB7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfVElNRSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH0sIChvcHRzLnhBeGlzIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy54QXhpcy5ib3R0b20udGlja0Zvcm1hdHRlcikpIHtcbiAgICBjb25zdCB0aW1lSW5mbyA9IG9wdHMudGltZUluZm9cbiAgICAvLyBJZiB0aGUgZGF0ZSByYW5nZSBpcyBsZXNzIHRoYW4gMiBkYXlzLCBTaG93IGluIGhvdXIgZm9ybWF0XG4gICAgY29uc3QgdGltZUxlbiA9IHRpbWVJbmZvLnRpbWVSYW5nZS5sZW5ndGhcbiAgICBjb25zdCBkYXRlRGlmZiA9IHRpbWVJbmZvLnRpbWVSYW5nZVt0aW1lTGVuIC0gMV0gLSB0aW1lSW5mby50aW1lUmFuZ2VbMF1cblxuICAgIGNvbnN0IHhBeGlzRm4gPSAoZGF0ZURpZmYgPCBjb25zdGFudHMuVElNRV9GT1JNQVRfQlVGRkVSKSA/IHRpbWVGb3JtYXQoJyVIOiVNJykgOiB0aW1lRm9ybWF0KCclZCAlYiAlWScpXG4gICAgb3B0cy54QXhpcy5ib3R0b20udGlja0Zvcm1hdHRlciA9ICh4RGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHhBeGlzRm4oeERhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgeUF4aXMgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBkZWZhdWx0IGlzIGxlZnQgYW5kIGl0cyB2YWx1ZSBheGlzIHdpdGggdW5pdFxuICBpZiAoIW9wdHMueUF4aXMpIHtcbiAgICBvcHRzLnlBeGlzID0ge1xuICAgICAgbGVmdDoge31cbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5sZWZ0KSB7XG4gICAgb3B0cy55QXhpcy5sZWZ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5sZWZ0KVxuICB9XG5cbiAgaWYgKG9wdHMueUF4aXMucmlnaHQpIHtcbiAgICBvcHRzLnlBeGlzLnJpZ2h0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5yaWdodClcbiAgfVxuXG4gIG9wdHMuem9vbSA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IGZhbHNlXG4gIH0sIChvcHRzLnpvb20gfHwge30pKVxuXG4gIC8vIEdlbmVyYWwgT3B0aW9ucyB0byBib3RoIGNoYXJ0VHlwZVxuICBvcHRzLnRvb2x0aXAgPSBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZvcm1hdDogZmFsc2UgLy8gVXNlIGFyeWFrYUNoYXJ0cyBpbnRlcm5hbCB0b29sdGlwIGZvcm1hdHRlciB0byBzaG93IHJhdyBkYXRhXG4gIH0sIChvcHRzLnRvb2x0aXAgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLnRvb2x0aXAuZm9ybWF0KSkge1xuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSB0aW1lRm9ybWF0KCclZCAlYiAlWSAgJUg6JU06JVMnKVxuICAgIG9wdHMudG9vbHRpcC5mb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKCFkIHx8ICFpc0FycmF5KGQpKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgY29uc3QgcGxvdFNldCA9IHRoaXMub3B0aW9ucy5wbG90U2V0XG4gICAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuICAgICAgY29uc3Qgem9uZU9mZnNldCA9IHRoaXMub3B0aW9ucy54QXhpcy56b25lT2Zmc2V0IHx8ICcnXG4gICAgICBjb25zdCB5QXhpcyA9IHRoaXMub3B0aW9ucy55QXhpc1xuXG4gICAgICBsZXQgdGFibGVTdHIgPSBgPHRhYmxlPjx0Ym9keT48dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ2YWx1ZV9mdWxsXCIgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICR7Zm9ybWF0VGltZShkW3RpbWVJbmZvLmRhdGFJbmRleF0pfSAke3pvbmVPZmZzZXR9XG4gICAgICAgICAgICA8L3RkPjwvdHI+YFxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBwbG90U2V0KSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRbcGxvdFNldFtrZXldLmRhdGFJbmRleF1cbiAgICAgICAgaWYgKCFwbG90U2V0W2tleV0udmlzaWJsZSB8fCBpc05hTih2YWwpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgWSBBeGlzIGZvcm1hdCBpcyBwcmVzZXRcbiAgICAgICAgY29uc3QgeU9yaWVudCA9IHlBeGlzW3Bsb3RTZXRba2V5XS5wbG90QXhpc1swXV1cbiAgICAgICAgY29uc3QgZm9ybWF0ID0geU9yaWVudC5mb3JtYXQgfHwgZGVmYXVsdFZhbHVlRm9ybWF0XG5cbiAgICAgICAgdGFibGVTdHIgKz0gYDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPSduYW1lJz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7cGxvdFNldFtrZXldLmNvbG9yfSc+PC9zcGFuPiR7cGxvdFNldFtrZXldLm5hbWV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPlxuICAgICAgICAgICAgJHtmb3JtYXQodmFsLCBwbG90U2V0W2tleV0udW5pdCl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+YFxuICAgICAgfVxuXG4gICAgICB0YWJsZVN0ciArPSAnPC90Ym9keT48L3RhYmxlPidcblxuICAgICAgcmV0dXJuIHRhYmxlU3RyXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0QlNPcHRpb25zIChvcHRzKSB7XG4gIC8vIEFkZCBkZWZhdWx0cyB0byB4QXhpc1xuICBvcHRzLnhBeGlzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYm90dG9tOiB7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfSwgKG9wdHMueEF4aXMgfHwge30pKVxuXG5cbiAgLy8gSWYgeUF4aXMgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBkZWZhdWx0IGlzIGxlZnQgYW5kIGl0cyB2YWx1ZSBheGlzIHdpdGggdW5pdFxuICBpZiAoIW9wdHMueUF4aXMpIHtcbiAgICBvcHRzLnlBeGlzID0ge1xuICAgICAgbGVmdDoge31cbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5sZWZ0KSB7XG4gICAgb3B0cy55QXhpcy5sZWZ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5sZWZ0KVxuICB9XG5cbiAgaWYgKG9wdHMueUF4aXMucmlnaHQpIHtcbiAgICBvcHRzLnlBeGlzLnJpZ2h0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5yaWdodClcbiAgfVxuXG4gIG9wdHMuem9vbSA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IGZhbHNlXG4gIH0sIChvcHRzLnpvb20gfHwge30pKVxuXG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBsZXQgZGF0YUFyciA9IGRcbiAgICAgIGlmIChkICYmIGQudmFsKSB7XG4gICAgICAgIGRhdGFBcnIgPSBkLnZhbFxuICAgICAgfVxuICAgICAgaWYgKCFpc0FycmF5KGRhdGFBcnIpKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgY29uc3QgcGxvdFNldCA9IHRoaXMub3B0aW9ucy5wbG90U2V0XG4gICAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuICAgICAgY29uc3QgeUF4aXMgPSB0aGlzLm9wdGlvbnMueUF4aXNcblxuICAgICAgbGV0IHRhYmxlU3RyID0gYDx0YWJsZT48dGJvZHk+PHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidmFsdWVfZnVsbFwiIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICAke2RhdGFBcnJbdGltZUluZm8uZGF0YUluZGV4XX1cbiAgICAgICAgICAgIDwvdGQ+PC90cj5gXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHBsb3RTZXQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YUFycltwbG90U2V0W2tleV0uZGF0YUluZGV4XVxuICAgICAgICBpZiAoIXBsb3RTZXRba2V5XS52aXNpYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBZIEF4aXMgZm9ybWF0IGlzIHByZXNldFxuICAgICAgICBjb25zdCB5T3JpZW50ID0geUF4aXNbcGxvdFNldFtrZXldLnBsb3RBeGlzWzBdXVxuICAgICAgICBjb25zdCBmb3JtYXQgPSB5T3JpZW50LmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcblxuICAgICAgICB0YWJsZVN0ciArPSBgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9J25hbWUnPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtwbG90U2V0W2tleV0uY29sb3J9Jz48L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPlxuICAgICAgICAgICAgJHtmb3JtYXQodmFsLCBwbG90U2V0W2tleV0udW5pdCl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+YFxuICAgICAgfVxuXG4gICAgICB0YWJsZVN0ciArPSAnPC90Ym9keT48L3RhYmxlPidcblxuICAgICAgcmV0dXJuIHRhYmxlU3RyXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0UFNPcHRpb25zIChvcHRzKSB7XG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoIWQgfHwgIWQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwaWVPYmogPSB0aGlzLm9wdGlvbnMuc2VyaWVzLnBpZVxuICAgICAgY29uc3QgZm9ybWF0ID0gcGllT2JqLmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscygoZC52YWx1ZSAvIHBpZU9iai50b3RhbCkgKiAxMDAsIDEpXG5cbiAgICAgIHJldHVybiBgPHRhYmxlIHN0eWxlPSdvcGFjaXR5OiAwLjg7Jz5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0nbmFtZSc+PHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtkLmNvbG9yfSc+PC9zcGFuPiR7ZC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPiR7cGVyY2VudGFnZX0gJTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZScgY29sc3Bhbj0nMic+JHtmb3JtYXQoZC52YWx1ZSwgcGllT2JqLnVuaXQpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+YFxuICAgIH1cbiAgfVxuXG4gIGFkZERlZmF1bHRDaGFydE9wdGlvbnMob3B0cylcblxuICBvcHRzLmxlZ2VuZC5wb3NpdGlvbiA9IGNvbnN0YW50cy5ESVJfUklHSFRcblxuICByZXR1cm4gb3B0c1xufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VyaWVzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5kcmF3KClcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4udXBkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLnNob3dIaWRlKHNob3dGbGFnKVxuICAgIH0pXG4gIH1cblxuICAvLyBSZWRyYXcgaXMgY2FsbGVkIHdoZW4gc2VyaWVzIGlzIHRvZ2dsZWQgZnJvbSBMZWdlbmRzXG4gIHJlZHJhdyAoKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLnJlZHJhdygpXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLnJlbW92ZSgpXG4gICAgfSlcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9