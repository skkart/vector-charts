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
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/uniqueId */ "../node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");











var Chart = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Chart, _ChartComponent);

  function Chart(container, opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Chart);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Chart.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Chart)).call(this));

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isString"])(container) && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opts) && container.length && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opts.dataParser)) {
      _this.$container = $(container);
      if (!_this.$container.length) {
        throw new Error('The graph container spectifed in options doesnt exist inside in Document Body');
      }
      opts.containerName = container;
      var takeContainerWidth = false;
      if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(opts.chart.width)) {
        opts.chart.width = _this.$container.width();
        takeContainerWidth = true;
      }

      var takeContainerHeight = false;
      if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(opts.chart.height)) {
        opts.chart.height = _this.$container.height();
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

      _this.svg = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["select"])(_this.$container.get(0)).select('svg');

      if (_this.svg.size() === 0) {
        // Create svg element if not exist inside chart container DIV
        _this.svg = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["select"])(_this.$container.get(0)).select('.vc-div-svg').append('svg');
      }

      // Clear svg if it has needless content
      $(_this.svg.node()).empty();

      _this.svg.attr('width', _this.chartFullSpace.width).attr('height', _this.chartFullSpace.height).attr('class', 'vc-svg ' + opts.chart.className);

      // Add defs to show plot series within the def specified width and height
      _this.svg.append('defs').append('clipPath').attr('id', lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7___default()('chart_clip')).append('rect').attr('width', _this.chartWidth).attr('height', _this.chartHeight);

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
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
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
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
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
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          chartCmpt.showHide(showFlag);
        }
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      console.log('ac.chart remove', this);
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
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
        var chartId = 'ac_' + this.options.chart.id;
        $(window).on('resize.' + chartId, function () {
          return _this2.autoSizeChart();
        });
      }
    }
  }, {
    key: 'autoSizeChart',
    value: function autoSizeChart() {
      var resizedGraphWidth = this.$container.width();

      if (resizedGraphWidth > this.options.chart.maxWidth) {
        resizedGraphWidth = this.options.chart.maxWidth;
      }

      if (resizedGraphWidth < this.options.chart.minWidth) {
        resizedGraphWidth = this.options.chart.minWidth;
      }

      this.throttedResize(resizedGraphWidth, this.$container.height());
    }

    // Destroy all chart properties and components

  }, {
    key: 'destroy',
    value: function destroy(destroyFull) {
      destroyFull = !!destroyFull;
      // Remove resize hander on window for vcChart namespace
      if (this.options.chart.chartResize) {
        var chartId = 'ac_' + this.options.chart.id;
        $(window).off('resize.' + chartId);
      }

      // Remove all chartComponents (timeSeriesChart or pieSeriesChart)
      this.remove();

      // Remove svg and container if destroyFull is true
      destroyFull && this.svg.remove();
      destroyFull && this.$container.remove();

      return null;
    }
  }]);

  return Chart;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./d3Importer.js":
/*!***********************!*\
  !*** ./d3Importer.js ***!
  \***********************/
/*! exports provided: scaleBand, scaleLinear, scaleTime, axisBottom, axisTop, axisLeft, axisRight, timeFormat, interpolate, select, d3Mouse, d3Event, range, max, transpose, bisector, brushX, brushY, line, stack, area, stackOrderNone, stackOffsetNone, pie, arc, default */
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
      var arcInfo = d;
      var percentage = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(d.value / pieObj.total * 100, 1);

      return '<table style=\'opacity: 0.8;\'>\n              <tbody>\n              <tr>\n              <td class=\'name\'><span style=\'background-color:' + arcInfo.color + '\'></span>' + arcInfo.name + '</td>\n              <td class=\'value\'>' + percentage + ' %</td>\n              </tr>\n              <tr>\n              <td class=\'value\' colspan=\'2\'>' + format(arcInfo.value, pieObj.unit) + '</td>\n              </tr>\n              </tbody>\n              </table>';
    };
  }

  addDefaultChartOptions(opts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9DaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2QzSW1wb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9oZWxwZXJzLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1Nlcmllcy5qcyJdLCJuYW1lcyI6WyJDaGFydCIsImNvbnRhaW5lciIsIm9wdHMiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwibGVuZ3RoIiwiZGF0YVBhcnNlciIsIiRjb250YWluZXIiLCIkIiwiRXJyb3IiLCJjb250YWluZXJOYW1lIiwidGFrZUNvbnRhaW5lcldpZHRoIiwiY2hhcnQiLCJ3aWR0aCIsInRha2VDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwib3B0aW9ucyIsImNoYXJ0SGVpZ2h0IiwiY2hhcnRXaWR0aCIsIm1hcmdpbiIsImNoYXJ0VHlwZSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImNoYXJ0RnVsbFNwYWNlIiwiY2hhcnRDb21wb25lbnRzQXJyIiwic3ZnIiwic2VsZWN0IiwiZ2V0Iiwic2l6ZSIsImFwcGVuZCIsIm5vZGUiLCJlbXB0eSIsImF0dHIiLCJjbGFzc05hbWUiLCJ1bmlxdWVJZCIsImdyYXBoWm9uZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiY2hhcnRDbXB0IiwiQ2hhcnRDb21wb25lbnQiLCJkcmF3IiwidXBkYXRlIiwic2hvd0ZsYWciLCJzaG93SGlkZSIsInJlbW92ZSIsImNoYXJ0UmVzaXplIiwidGhyb3R0ZWRSZXNpemUiLCJ0aHJvdHRsZSIsIk1hdGgiLCJmbG9vciIsInNldFRpbWVvdXQiLCJjaGFydElkIiwiaWQiLCJ3aW5kb3ciLCJvbiIsImF1dG9TaXplQ2hhcnQiLCJyZXNpemVkR3JhcGhXaWR0aCIsImRlc3Ryb3lGdWxsIiwib2ZmIiwidmVyc2lvbiIsImFkZERlZmF1bHRDaGFydE9wdGlvbnMiLCJpc1RvdWNoU2NyZWVuIiwidG9vbHRpcCIsInZpc2libGUiLCJmb3JtYXQiLCJsZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJwb3NpdGlvbiIsImNvbnN0YW50cyIsIkRJUl9UT1AiLCJpc0Z1bmN0aW9uIiwiYWZ0ZXJEcmF3IiwiYyIsIm9uQ29tcGxldGUiLCJ0aW1lIiwib25FcnJvciIsImVycm9yIiwiZGVmYXVsdFZhbHVlRm9ybWF0IiwidmFsIiwidW5pdCIsImRlY2ltYWxzIiwiZGVub21pbmF0b3IiLCJrVmFsIiwiZ2V0VmFsdWVXaXRoRGVjaW1hbHMiLCJtVmFsIiwiYWRkRGVmYXVsdFRTT3B0aW9ucyIsInhBeGlzIiwiVU5JVFNfVElNRSIsInRpY2tGb3JtYXR0ZXIiLCJ0aW1lSW5mbyIsInRpbWVMZW4iLCJ0aW1lUmFuZ2UiLCJkYXRlRGlmZiIsInhBeGlzRm4iLCJUSU1FX0ZPUk1BVF9CVUZGRVIiLCJ0aW1lRm9ybWF0IiwieERhdGUiLCJ5QXhpcyIsIlVOSVRTX0RFRiIsIm1pbiIsInpvb20iLCJmb3JtYXRUaW1lIiwiZCIsImlzQXJyYXkiLCJwbG90U2V0Iiwiem9uZU9mZnNldCIsInRhYmxlU3RyIiwiZGF0YUluZGV4Iiwia2V5IiwiaXNOYU4iLCJ5T3JpZW50IiwicGxvdEF4aXMiLCJjb2xvciIsIm5hbWUiLCJhZGREZWZhdWx0QlNPcHRpb25zIiwiZGF0YUFyciIsImFkZERlZmF1bHRQU09wdGlvbnMiLCJ2YWx1ZSIsInBpZU9iaiIsInNlcmllcyIsInBpZSIsImFyY0luZm8iLCJwZXJjZW50YWdlIiwidG90YWwiLCJTZXJpZXMiLCJwbG90U2VyaWVzIiwicGxvdEZuIiwicmVkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxLOzs7QUFDbkIsaUJBQWFDLFNBQWIsRUFBd0JDLElBQXhCLEVBQThCO0FBQUE7O0FBQUE7O0FBRTVCLFFBQUlDLHVEQUFRQSxDQUFDRixTQUFULEtBQXVCRyx1REFBUUEsQ0FBQ0YsSUFBVCxDQUF2QixJQUF5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QUZEO0FBR0EsV0FBS2lGLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxXQUFLaEksSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQXBDaUMwQyw4RDs7QUFBZnFGLHFFIiwiZmlsZSI6ImJhcnNlcmllc35waWVzZXJpZXN+dGltZXNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNPYmplY3QsIGlzU3RyaW5nLCB0aHJvdHRsZX0gZnJvbSAnQC91dGlscydcbmltcG9ydCB1bmlxdWVJZCBmcm9tICdsb2Rhc2gvdW5pcXVlSWQnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lciwgb3B0cykge1xuICAgIHN1cGVyKClcbiAgICBpZiAoaXNTdHJpbmcoY29udGFpbmVyKSAmJiBpc09iamVjdChvcHRzKSAmJiBjb250YWluZXIubGVuZ3RoICYmIGlzT2JqZWN0KG9wdHMuZGF0YVBhcnNlcikpIHtcbiAgICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKVxuICAgICAgaWYgKCF0aGlzLiRjb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGdyYXBoIGNvbnRhaW5lciBzcGVjdGlmZWQgaW4gb3B0aW9ucyBkb2VzbnQgZXhpc3QgaW5zaWRlIGluIERvY3VtZW50IEJvZHknKVxuICAgICAgfVxuICAgICAgb3B0cy5jb250YWluZXJOYW1lID0gY29udGFpbmVyXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lcldpZHRoID0gZmFsc2VcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG9wdHMuY2hhcnQud2lkdGgpKSB7XG4gICAgICAgIG9wdHMuY2hhcnQud2lkdGggPSB0aGlzLiRjb250YWluZXIud2lkdGgoKVxuICAgICAgICB0YWtlQ29udGFpbmVyV2lkdGggPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGxldCB0YWtlQ29udGFpbmVySGVpZ2h0ID0gZmFsc2VcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG9wdHMuY2hhcnQuaGVpZ2h0KSkge1xuICAgICAgICBvcHRzLmNoYXJ0LmhlaWdodCA9IHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoKVxuICAgICAgICB0YWtlQ29udGFpbmVySGVpZ2h0ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5jaGFydC53aWR0aCA+IG9wdHMuY2hhcnQubWF4V2lkdGgpIHtcbiAgICAgICAgb3B0cy5jaGFydC53aWR0aCA9IG9wdHMuY2hhcnQubWF4V2lkdGhcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuY2hhcnQud2lkdGggPCBvcHRzLmNoYXJ0Lm1pbldpZHRoKSB7XG4gICAgICAgIG9wdHMuY2hhcnQud2lkdGggPSBvcHRzLmNoYXJ0Lm1pbldpZHRoXG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdHNcblxuICAgICAgdGhpcy5jaGFydEhlaWdodCA9IG9wdHMuY2hhcnQuaGVpZ2h0XG4gICAgICB0aGlzLmNoYXJ0V2lkdGggPSBvcHRzLmNoYXJ0LndpZHRoXG4gICAgICB0aGlzLm1hcmdpbiA9IG9wdHMuY2hhcnQubWFyZ2luXG4gICAgICB0aGlzLmNoYXJ0VHlwZSA9IG9wdHMuY2hhcnQuY2hhcnRUeXBlXG5cbiAgICAgIGlmICh0YWtlQ29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jaGFydFdpZHRoIC0gKHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgIH1cblxuICAgICAgaWYgKHRha2VDb250YWluZXJIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2hhcnRIZWlnaHQgLSAodGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgfVxuXG4gICAgICAvLyBBdHRhY2ggZGF0YVByb2Nlc3MgdG8gY2hhcnQsIHdoaWNoIGdlbmVyYXRlIGNoYXJ0RGF0YSBhbmQgcGxvdCBJbmZvIGJhc2VkIG9uIEpTT04gYW5kIG9wdGlvbnNcbiAgICAgIHRoaXMuZGF0YVBhcnNlciA9IG9wdHMuZGF0YVBhcnNlclxuXG4gICAgICAvLyBEZWxldGUgZGF0YVByb2Nlc3MgZnJvbSBvcHRpb25zXG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmRhdGFQYXJzZXJcblxuICAgICAgdGhpcy5jaGFydEZ1bGxTcGFjZSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY2hhcnRXaWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNoYXJ0SGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tLFxuICAgICAgfVxuXG5cbiAgICAgIC8vIEFycmF5IHdoaWNoIGhvbGRzIGFsbCB0aGUgY2hhcnRDb21wb25lbnRzIHJlcXVpcmVkIGZvciB0aGUgZ3JhcGggbGlrZSBheGlzLCBzZXJpZXMsIHRvb2x0aXAsIGxlZ2VuZCBldGNcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyID0gW11cblxuICAgICAgdGhpcy5zdmcgPSBzZWxlY3QodGhpcy4kY29udGFpbmVyLmdldCgwKSkuc2VsZWN0KCdzdmcnKVxuXG4gICAgICBpZiAodGhpcy5zdmcuc2l6ZSgpID09PSAwKSB7XG4gICAgICAgIC8vIENyZWF0ZSBzdmcgZWxlbWVudCBpZiBub3QgZXhpc3QgaW5zaWRlIGNoYXJ0IGNvbnRhaW5lciBESVZcbiAgICAgICAgdGhpcy5zdmcgPSBzZWxlY3QodGhpcy4kY29udGFpbmVyLmdldCgwKSkuc2VsZWN0KCcudmMtZGl2LXN2ZycpLmFwcGVuZCgnc3ZnJylcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgc3ZnIGlmIGl0IGhhcyBuZWVkbGVzcyBjb250ZW50XG4gICAgICAkKHRoaXMuc3ZnLm5vZGUoKSkuZW1wdHkoKVxuXG4gICAgICB0aGlzLnN2Z1xuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5jaGFydEZ1bGxTcGFjZS5oZWlnaHQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1zdmcgJyArIG9wdHMuY2hhcnQuY2xhc3NOYW1lKVxuXG4gICAgICAvLyBBZGQgZGVmcyB0byBzaG93IHBsb3Qgc2VyaWVzIHdpdGhpbiB0aGUgZGVmIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoJ2RlZnMnKVxuICAgICAgICAuYXBwZW5kKCdjbGlwUGF0aCcpXG4gICAgICAgIC5hdHRyKCdpZCcsIHVuaXF1ZUlkKCdjaGFydF9jbGlwJykpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLmNoYXJ0V2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmNoYXJ0SGVpZ2h0KVxuXG4gICAgICAvLyBBZGQgZ3JhcGhab25lIHRhZywgc28gdGhhdCBhbGwgc2VyaWVzIGFuZCBheGlzIGFyZSBncm91cGVkIHRvZ2V0aGVyXG4gICAgICB0aGlzLmdyYXBoWm9uZSA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtZ3JhcGhab25lJylcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgLy8gRHJhdyBhbGwgdGhlIGNoYXJ0Q29tcG9uZW50cyBpbiB0aGUgc2FtZSBvcmRlciBvZiB0aGVyZSBpbml0aWxpemF0aW9uIHVzaW5nIGNoYXJ0Q29tcG9uZW50c0FyclxuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC5kcmF3KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnN2Zy5hdHRyKCd3aWR0aCcsIHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGgpXG4gICAgdGhpcy5ncmFwaFpvbmUuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJylcbiAgICB0aGlzLnN2Zy5zZWxlY3QoJ2NsaXBQYXRoJykuc2VsZWN0KCdyZWN0JykuYXR0cignd2lkdGgnLCB0aGlzLmNoYXJ0V2lkdGgpXG5cbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgdXBkYXRlJywgdGhpcylcbiAgICAvLyBVcGRhdGUgYWxsIGNoYXJ0IGNvbXBvbmVudCBiYXNlZCBvbiBuZXcgd2lkdGggY2hhbmdlc1xuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC51cGRhdGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhcnQgc2hvd0hpZGUnLCB0aGlzKVxuICAgIHNob3dGbGFnID0gISFzaG93RmxhZyAvLyBDb252ZXJ0IGFueSB0eXBlIHRvIGJvb2xlYW5cbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQuc2hvd0hpZGUoc2hvd0ZsYWcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgY29uc29sZS5sb2coJ2FjLmNoYXJ0IHJlbW92ZScsIHRoaXMpXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LnJlbW92ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIGNoYXJ0UmVzcG9uc2l2ZSBiYXNlZCBvbiBzY3JlZW4gcmVzaXplIGlzIGhhbmRsZWRcbiAgY2hhcnRSZXNwb25zaXZlICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNoYXJ0LmNoYXJ0UmVzaXplKSB7XG4gICAgICB0aGlzLnRocm90dGVkUmVzaXplID0gdGhyb3R0bGUoKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIC8vIERvbnQgcmVzaXplIGlmIGdyYXBoIGlzIGFscmVhZHkgYWRqdXN0ZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoID0gTWF0aC5mbG9vcih3aWR0aClcbiAgICAgICAgdGhpcy5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodClcbiAgICAgICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCAtICh0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNoYXJ0RnVsbFNwYWNlLmhlaWdodCAtICh0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGUoKSwgMClcbiAgICAgIH0sIDQ1MCkgLy8gJ3RoaXMnIFdpbGwgaGF2ZSByZWZlcmVuY2Ugb2YgdGltZVNlcmllc0NoYXJ0IG9yIHBpZVNlcmllc0NoYXJ0XG5cbiAgICAgIC8vIEFkZCByZXNpemUgZm9yIGVhY2ggY2hhcnQgYmFzZWQgb24gY2hhcnQgSUQgbmFtZXNwYWNlXG4gICAgICBjb25zdCBjaGFydElkID0gJ2FjXycgKyB0aGlzLm9wdGlvbnMuY2hhcnQuaWRcbiAgICAgICQod2luZG93KS5vbigncmVzaXplLicgKyBjaGFydElkLCAoKSA9PiB0aGlzLmF1dG9TaXplQ2hhcnQoKSlcblxuICAgIH1cbiAgfVxuXG4gIGF1dG9TaXplQ2hhcnQgKCkge1xuICAgIGxldCByZXNpemVkR3JhcGhXaWR0aCA9IHRoaXMuJGNvbnRhaW5lci53aWR0aCgpXG5cbiAgICBpZiAocmVzaXplZEdyYXBoV2lkdGggPiB0aGlzLm9wdGlvbnMuY2hhcnQubWF4V2lkdGgpIHtcbiAgICAgIHJlc2l6ZWRHcmFwaFdpZHRoID0gdGhpcy5vcHRpb25zLmNoYXJ0Lm1heFdpZHRoXG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZWRHcmFwaFdpZHRoIDwgdGhpcy5vcHRpb25zLmNoYXJ0Lm1pbldpZHRoKSB7XG4gICAgICByZXNpemVkR3JhcGhXaWR0aCA9IHRoaXMub3B0aW9ucy5jaGFydC5taW5XaWR0aFxuICAgIH1cblxuICAgIHRoaXMudGhyb3R0ZWRSZXNpemUocmVzaXplZEdyYXBoV2lkdGgsIHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoKSlcbiAgfVxuXG4gIC8vIERlc3Ryb3kgYWxsIGNoYXJ0IHByb3BlcnRpZXMgYW5kIGNvbXBvbmVudHNcbiAgZGVzdHJveSAoZGVzdHJveUZ1bGwpIHtcbiAgICBkZXN0cm95RnVsbCA9ICEhZGVzdHJveUZ1bGxcbiAgICAvLyBSZW1vdmUgcmVzaXplIGhhbmRlciBvbiB3aW5kb3cgZm9yIHZjQ2hhcnQgbmFtZXNwYWNlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jaGFydC5jaGFydFJlc2l6ZSkge1xuICAgICAgY29uc3QgY2hhcnRJZCA9ICdhY18nICsgdGhpcy5vcHRpb25zLmNoYXJ0LmlkXG4gICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuJyArIGNoYXJ0SWQpXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGFydENvbXBvbmVudHMgKHRpbWVTZXJpZXNDaGFydCBvciBwaWVTZXJpZXNDaGFydClcbiAgICB0aGlzLnJlbW92ZSgpXG5cbiAgICAvLyBSZW1vdmUgc3ZnIGFuZCBjb250YWluZXIgaWYgZGVzdHJveUZ1bGwgaXMgdHJ1ZVxuICAgIGRlc3Ryb3lGdWxsICYmIHRoaXMuc3ZnLnJlbW92ZSgpXG4gICAgZGVzdHJveUZ1bGwgJiYgdGhpcy4kY29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJleHBvcnQge1xuICBzY2FsZUJhbmQsXG4gIHNjYWxlTGluZWFyLFxuICBzY2FsZVRpbWVcbn0gZnJvbSAnZDMtc2NhbGUnXG5cbmV4cG9ydCB7XG4gIGF4aXNCb3R0b20sXG4gIGF4aXNUb3AsXG4gIGF4aXNMZWZ0LFxuICBheGlzUmlnaHRcbn0gZnJvbSAnZDMtYXhpcydcblxuZXhwb3J0IHt0aW1lRm9ybWF0fSBmcm9tICdkMy10aW1lLWZvcm1hdCdcblxuZXhwb3J0IHtpbnRlcnBvbGF0ZX0gZnJvbSAnZDMtaW50ZXJwb2xhdGUnXG5cbmV4cG9ydCB7XG4gIHNlbGVjdCxcbiAgbW91c2UgYXMgZDNNb3VzZSxcbiAgZXZlbnQgYXMgZDNFdmVudFxufSBmcm9tICdkMy1zZWxlY3Rpb24nXG5cbmV4cG9ydCB7XG4gIHJhbmdlLFxuICBtYXgsXG4gIHRyYW5zcG9zZSxcbiAgYmlzZWN0b3Jcbn0gZnJvbSAnZDMtYXJyYXknXG5cbmV4cG9ydCB7YnJ1c2hYLCBicnVzaFl9IGZyb20gJ2QzLWJydXNoJ1xuXG5leHBvcnQge1xuICBsaW5lLCBzdGFjaywgYXJlYSxcbiAgc3RhY2tPcmRlck5vbmUsIHN0YWNrT2Zmc2V0Tm9uZSxcbiAgcGllLCBhcmNcbn0gZnJvbSAnZDMtc2hhcGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmVyc2lvbjogJ3Y1J1xufVxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Z2V0VmFsdWVXaXRoRGVjaW1hbHMsIGlzQXJyYXksIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge3RpbWVGb3JtYXR9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRDaGFydE9wdGlvbnMgKG9wdHMpIHtcblxuICBvcHRzLmNoYXJ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgY2hhcnRSZXNpemU6IGZhbHNlLFxuICAgIGlzVG91Y2hTY3JlZW46IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWF4V2lkdGg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgIG1pbldpZHRoOiAwXG4gIH0sIG9wdHMuY2hhcnQpXG5cbiAgb3B0cy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IGZhbHNlIC8vIFVzZSBhcnlha2FDaGFydHMgaW50ZXJuYWwgdG9vbHRpcCBmb3JtYXR0ZXIgdG8gc2hvdyByYXcgZGF0YVxuICB9LCAob3B0cy50b29sdGlwIHx8IHt9KSlcblxuICBvcHRzLmxlZ2VuZCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgbGVnZW5kUHJlZml4OiAnJyxcbiAgICBwb3NpdGlvbjogY29uc3RhbnRzLkRJUl9UT1BcbiAgfSwgKG9wdHMubGVnZW5kIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy5hZnRlckRyYXcpKSB7XG4gICAgb3B0cy5hZnRlckRyYXcgPSBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGNcbiAgICB9XG4gIH1cblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy5vbkNvbXBsZXRlKSkge1xuICAgIG9wdHMub25Db21wbGV0ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2hhcnQgbG9hZGluZyBvZiAke29wdHMuY29udGFpbmVyTmFtZX0gaXMgY29tcGxldGVkIGluICR7dGltZX0gbXNgKVxuICAgIH1cbiAgfVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLm9uRXJyb3IpKSB7XG4gICAgb3B0cy5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ2hhcnQgaGFzIGVuY291bnRlcmVkIGVycm9yIG9mICR7b3B0cy5jb250YWluZXJOYW1lfSBgLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3B0c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZhbHVlRm9ybWF0ICh2YWwsIHVuaXQgPSAnJywgZGVjaW1hbHMgPSAzKSB7XG4gIGNvbnN0IGRlbm9taW5hdG9yID0gMTAwMFxuICBpZiAodmFsID4gZGVub21pbmF0b3IpIHtcbiAgICBjb25zdCBrVmFsID0gZ2V0VmFsdWVXaXRoRGVjaW1hbHModmFsIC8gZGVub21pbmF0b3IsIGRlY2ltYWxzKVxuICAgIGlmIChrVmFsID4gZGVub21pbmF0b3IpIHtcbiAgICAgIGNvbnN0IG1WYWwgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscyhrVmFsIC8gZGVub21pbmF0b3IsIGRlY2ltYWxzKVxuICAgICAgcmV0dXJuIGAke21WYWx9TSAke3VuaXR9YFxuICAgIH1cbiAgICByZXR1cm4gYCR7a1ZhbH1LICR7dW5pdH1gXG4gIH1cbiAgcmV0dXJuIGAke2dldFZhbHVlV2l0aERlY2ltYWxzKHZhbCwgZGVjaW1hbHMpfSAke3VuaXR9YFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VFNPcHRpb25zIChvcHRzKSB7XG4gIC8vIEFkZCBkZWZhdWx0cyB0byB4QXhpc1xuICBvcHRzLnhBeGlzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYm90dG9tOiB7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfVElNRSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH0sIChvcHRzLnhBeGlzIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy54QXhpcy5ib3R0b20udGlja0Zvcm1hdHRlcikpIHtcbiAgICBjb25zdCB0aW1lSW5mbyA9IG9wdHMudGltZUluZm9cbiAgICAvLyBJZiB0aGUgZGF0ZSByYW5nZSBpcyBsZXNzIHRoYW4gMiBkYXlzLCBTaG93IGluIGhvdXIgZm9ybWF0XG4gICAgY29uc3QgdGltZUxlbiA9IHRpbWVJbmZvLnRpbWVSYW5nZS5sZW5ndGhcbiAgICBjb25zdCBkYXRlRGlmZiA9IHRpbWVJbmZvLnRpbWVSYW5nZVt0aW1lTGVuIC0gMV0gLSB0aW1lSW5mby50aW1lUmFuZ2VbMF1cblxuICAgIGNvbnN0IHhBeGlzRm4gPSAoZGF0ZURpZmYgPCBjb25zdGFudHMuVElNRV9GT1JNQVRfQlVGRkVSKSA/IHRpbWVGb3JtYXQoJyVIOiVNJykgOiB0aW1lRm9ybWF0KCclZCAlYiAlWScpXG4gICAgb3B0cy54QXhpcy5ib3R0b20udGlja0Zvcm1hdHRlciA9ICh4RGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHhBeGlzRm4oeERhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgeUF4aXMgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBkZWZhdWx0IGlzIGxlZnQgYW5kIGl0cyB2YWx1ZSBheGlzIHdpdGggdW5pdFxuICBpZiAoIW9wdHMueUF4aXMpIHtcbiAgICBvcHRzLnlBeGlzID0ge1xuICAgICAgbGVmdDoge31cbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5sZWZ0KSB7XG4gICAgb3B0cy55QXhpcy5sZWZ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5sZWZ0KVxuICB9XG5cbiAgaWYgKG9wdHMueUF4aXMucmlnaHQpIHtcbiAgICBvcHRzLnlBeGlzLnJpZ2h0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5yaWdodClcbiAgfVxuXG4gIG9wdHMuem9vbSA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IGZhbHNlXG4gIH0sIChvcHRzLnpvb20gfHwge30pKVxuXG4gIC8vIEdlbmVyYWwgT3B0aW9ucyB0byBib3RoIGNoYXJ0VHlwZVxuICBvcHRzLnRvb2x0aXAgPSBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZvcm1hdDogZmFsc2UgLy8gVXNlIGFyeWFrYUNoYXJ0cyBpbnRlcm5hbCB0b29sdGlwIGZvcm1hdHRlciB0byBzaG93IHJhdyBkYXRhXG4gIH0sIChvcHRzLnRvb2x0aXAgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLnRvb2x0aXAuZm9ybWF0KSkge1xuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSB0aW1lRm9ybWF0KCclZCAlYiAlWSAgJUg6JU06JVMnKVxuICAgIG9wdHMudG9vbHRpcC5mb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKCFkIHx8ICFpc0FycmF5KGQpKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgY29uc3QgcGxvdFNldCA9IHRoaXMub3B0aW9ucy5wbG90U2V0XG4gICAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuICAgICAgY29uc3Qgem9uZU9mZnNldCA9IHRoaXMub3B0aW9ucy54QXhpcy56b25lT2Zmc2V0IHx8ICcnXG4gICAgICBjb25zdCB5QXhpcyA9IHRoaXMub3B0aW9ucy55QXhpc1xuXG4gICAgICBsZXQgdGFibGVTdHIgPSBgPHRhYmxlPjx0Ym9keT48dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ2YWx1ZV9mdWxsXCIgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICR7Zm9ybWF0VGltZShkW3RpbWVJbmZvLmRhdGFJbmRleF0pfSAke3pvbmVPZmZzZXR9XG4gICAgICAgICAgICA8L3RkPjwvdHI+YFxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBwbG90U2V0KSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRbcGxvdFNldFtrZXldLmRhdGFJbmRleF1cbiAgICAgICAgaWYgKCFwbG90U2V0W2tleV0udmlzaWJsZSB8fCBpc05hTih2YWwpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgWSBBeGlzIGZvcm1hdCBpcyBwcmVzZXRcbiAgICAgICAgY29uc3QgeU9yaWVudCA9IHlBeGlzW3Bsb3RTZXRba2V5XS5wbG90QXhpc1swXV1cbiAgICAgICAgY29uc3QgZm9ybWF0ID0geU9yaWVudC5mb3JtYXQgfHwgZGVmYXVsdFZhbHVlRm9ybWF0XG5cbiAgICAgICAgdGFibGVTdHIgKz0gYDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPSduYW1lJz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7cGxvdFNldFtrZXldLmNvbG9yfSc+PC9zcGFuPiR7cGxvdFNldFtrZXldLm5hbWV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPlxuICAgICAgICAgICAgJHtmb3JtYXQodmFsLCBwbG90U2V0W2tleV0udW5pdCl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+YFxuICAgICAgfVxuXG4gICAgICB0YWJsZVN0ciArPSAnPC90Ym9keT48L3RhYmxlPidcblxuICAgICAgcmV0dXJuIHRhYmxlU3RyXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0QlNPcHRpb25zIChvcHRzKSB7XG4gIC8vIEFkZCBkZWZhdWx0cyB0byB4QXhpc1xuICBvcHRzLnhBeGlzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgYm90dG9tOiB7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfSwgKG9wdHMueEF4aXMgfHwge30pKVxuXG5cbiAgLy8gSWYgeUF4aXMgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBkZWZhdWx0IGlzIGxlZnQgYW5kIGl0cyB2YWx1ZSBheGlzIHdpdGggdW5pdFxuICBpZiAoIW9wdHMueUF4aXMpIHtcbiAgICBvcHRzLnlBeGlzID0ge1xuICAgICAgbGVmdDoge31cbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5sZWZ0KSB7XG4gICAgb3B0cy55QXhpcy5sZWZ0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5sZWZ0KVxuICB9XG5cbiAgaWYgKG9wdHMueUF4aXMucmlnaHQpIHtcbiAgICBvcHRzLnlBeGlzLnJpZ2h0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB1bml0OiBjb25zdGFudHMuVU5JVFNfREVGLFxuICAgICAgbWluOiAwLCAvLyBTdGFydCBwbG90dGluZyBZIEF4aXMgZnJvbSAwXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cy55QXhpcy5yaWdodClcbiAgfVxuXG4gIG9wdHMuem9vbSA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IGZhbHNlXG4gIH0sIChvcHRzLnpvb20gfHwge30pKVxuXG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBsZXQgZGF0YUFyciA9IGRcbiAgICAgIGlmIChkICYmIGQudmFsKSB7XG4gICAgICAgIGRhdGFBcnIgPSBkLnZhbFxuICAgICAgfVxuICAgICAgaWYgKCFpc0FycmF5KGRhdGFBcnIpKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgY29uc3QgcGxvdFNldCA9IHRoaXMub3B0aW9ucy5wbG90U2V0XG4gICAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuICAgICAgY29uc3QgeUF4aXMgPSB0aGlzLm9wdGlvbnMueUF4aXNcblxuICAgICAgbGV0IHRhYmxlU3RyID0gYDx0YWJsZT48dGJvZHk+PHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidmFsdWVfZnVsbFwiIGNvbHNwYW49XCIyXCI+XG4gICAgICAgICAgICAke2RhdGFBcnJbdGltZUluZm8uZGF0YUluZGV4XX1cbiAgICAgICAgICAgIDwvdGQ+PC90cj5gXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHBsb3RTZXQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YUFycltwbG90U2V0W2tleV0uZGF0YUluZGV4XVxuICAgICAgICBpZiAoIXBsb3RTZXRba2V5XS52aXNpYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBZIEF4aXMgZm9ybWF0IGlzIHByZXNldFxuICAgICAgICBjb25zdCB5T3JpZW50ID0geUF4aXNbcGxvdFNldFtrZXldLnBsb3RBeGlzWzBdXVxuICAgICAgICBjb25zdCBmb3JtYXQgPSB5T3JpZW50LmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcblxuICAgICAgICB0YWJsZVN0ciArPSBgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9J25hbWUnPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtwbG90U2V0W2tleV0uY29sb3J9Jz48L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnPlxuICAgICAgICAgICAgJHtmb3JtYXQodmFsLCBwbG90U2V0W2tleV0udW5pdCl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+YFxuICAgICAgfVxuXG4gICAgICB0YWJsZVN0ciArPSAnPC90Ym9keT48L3RhYmxlPidcblxuICAgICAgcmV0dXJuIHRhYmxlU3RyXG4gICAgfVxuICB9XG5cbiAgYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyhvcHRzKVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0UFNPcHRpb25zIChvcHRzKSB7XG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoIWQgfHwgIWQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwaWVPYmogPSB0aGlzLm9wdGlvbnMuc2VyaWVzLnBpZVxuICAgICAgY29uc3QgZm9ybWF0ID0gcGllT2JqLmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcbiAgICAgIGNvbnN0IGFyY0luZm8gPSBkXG4gICAgICBjb25zdCBwZXJjZW50YWdlID0gZ2V0VmFsdWVXaXRoRGVjaW1hbHMoKGQudmFsdWUgLyBwaWVPYmoudG90YWwpICogMTAwLCAxKVxuXG4gICAgICByZXR1cm4gYDx0YWJsZSBzdHlsZT0nb3BhY2l0eTogMC44Oyc+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9J25hbWUnPjxzcGFuIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7YXJjSW5mby5jb2xvcn0nPjwvc3Bhbj4ke2FyY0luZm8ubmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9J3ZhbHVlJz4ke3BlcmNlbnRhZ2V9ICU8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz0ndmFsdWUnIGNvbHNwYW49JzInPiR7Zm9ybWF0KGFyY0luZm8udmFsdWUsIHBpZU9iai51bml0KX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPmBcbiAgICB9XG4gIH1cblxuICBhZGREZWZhdWx0Q2hhcnRPcHRpb25zKG9wdHMpXG5cbiAgcmV0dXJuIG9wdHNcbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcmllcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4uZHJhdygpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLnVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5zaG93SGlkZShzaG93RmxhZylcbiAgICB9KVxuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZWRyYXcoKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgdGhpcy5wbG90U2VyaWVzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==