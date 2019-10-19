(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["timeseries"],{

/***/ "./axis/index.js":
/*!***********************!*\
  !*** ./axis/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "./utils.js");











var Axis = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Axis, _ChartComponent);

  function Axis(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Axis);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Axis.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Axis)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: '',
      position: 'y',
      orient: 'left',
      label: '',
      unit: '',
      rangeScale: [0, 1000],
      domainScale: [0, 100],
      scaleType: '',
      axisClamp: true,
      tickNumber: null,
      rotateText: false,
      textLimit: 8,
      tickFormatter: false, // Use d3 tickFormatter
      showGridLines: false,
      tickPadding: _constants__WEBPACK_IMPORTED_MODULE_8__["default"].TICK_PADDING,
      scalePadding: _constants__WEBPACK_IMPORTED_MODULE_8__["default"].SCALE_PADDING,
      visible: true
    }, opts);

    _this.axis = null;
    // Create Axis and Scale based on input options
    if (_this.opts.scaleType === 'scaleBand') {
      _this.scale = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["scaleBand"])();
    } else {
      _this.scale = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"])();
      if (_this.opts.unit === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].UNITS_TIME) {
        _this.scale = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["scaleTime"])();
      }
    }

    if (_this.opts.position === 'x') {
      if (_this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_BOTTOM) {
        _this.axis = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["axisBottom"])();
      } else if (_this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_TOP) {
        _this.axis = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["axisTop"])();
      }
      if (_this.opts.showGridLines === true) {
        _this.axis.tickSizeInner(-_this.opts.chart.chartHeight);
      }
    }

    // Holds all tick values that axis shows
    _this.tickValues = [];

    if (_this.opts.position === 'y') {
      if (_this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_LEFT) {
        _this.axis = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["axisLeft"])();
      } else if (_this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
        _this.axis = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_7__["axisRight"])();
        _this.axis.tickSizeInner(0);
      }
      if (_this.opts.showGridLines === true) {
        _this.axis.tickSizeInner(-_this.opts.chart.chartWidth);
      }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(_this.opts.tickFormatter)) {
        // If external formatter is provided, modify formatter to populate tickValues
        var externalFormatter = _this.opts.tickFormatter;
        _this.opts.tickFormatter = function (val) {
          self.tickValues.unshift(val);
          return externalFormatter(val);
        };
      }
    }

    if (_this.opts.tickPadding > 0) {
      _this.axis.tickPadding(_this.opts.tickPadding);
    }
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Axis, [{
    key: 'modifyAxisProps',
    value: function modifyAxisProps() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.opts, opts);
      this.update();
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.transformAttr = null;

      if (this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_BOTTOM) {
        this.transformAttr = 'translate(0,' + this.opts.chart.chartHeight + ')';
      } else if (this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
        this.transformAttr = 'translate(' + this.opts.chart.chartWidth + ',0)';
      }

      this.axisTag = this.opts.chart.graphZone.append('g').attr('class', 'vc-axis vc-axis-' + this.opts.orient + ' vc-axis-' + this.opts.className);

      // If no formatter is provided, axis uses d3 default formatter
      Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(this.opts.tickFormatter) && this.axis.tickFormat(this.opts.tickFormatter);

      // Add Label to Axis
      if (this.opts.label) {
        this.opts.axisLabelTag = this.axisTag.append('text').attr('class', 'vc-axis-label').text(this.opts.label);
      }

      this.update();

      // IF not visible, Dont show the axis, but still scale and plot on graphZone, so that all series can be plotted
      !this.opts.visible && this.axisTag.classed('vc-hidden', true);
    }

    // Updates graph Axis based on new width and modify range, domain and ticks

  }, {
    key: 'update',
    value: function update() {
      if (this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_BOTTOM) {
        this.opts.rangeScale = [0, this.opts.chart.chartWidth];
      }

      if (this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
        this.transformAttr = 'translate(' + this.opts.chart.chartWidth + ',0)';
      }

      // Position label, scale, ticks, axis based on chart width
      if (this.opts.label) {
        var xTrans = 0;
        var yTrans = 0;
        var rotate = 0;
        if (this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_BOTTOM) {
          xTrans = Math.floor(this.opts.chart.chartWidth / 2);
          yTrans = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].X_AXIS_LABEL_Y;
        } else if (this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_LEFT || this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
          if (this.opts.orient === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_LEFT) {
            xTrans = -this.opts.chart.margin.left + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].BRUSHY_BUFFER;
            rotate = 270;
          } else {
            xTrans = this.opts.chart.margin.right - _constants__WEBPACK_IMPORTED_MODULE_8__["default"].BRUSHY_BUFFER;
            rotate = 90;
          }
          yTrans = Math.floor(this.opts.chart.chartHeight / 2);
        }
        this.opts.axisLabelTag.attr('transform', 'translate(' + xTrans + ',' + yTrans + ') rotate(' + rotate + ')');
      }

      this.tickValues = [];

      var domainScale = [this.opts.domainScale[0], this.opts.domainScale[this.opts.domainScale.length - 1]];
      if (this.opts.scaleType === 'scaleBand') {
        domainScale = this.opts.domainScale;
        this.scale.padding(this.opts.scalePadding);
      } else {
        this.opts.axisClamp && this.scale.clamp(); // Clamps outside range value within spectifed range and domain
      }

      this.scale.range(this.opts.rangeScale).domain(domainScale);

      this.axis.scale(this.scale);

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNumber"])(this.opts.tickNumber)) {
        var tickVal = this.opts.tickNumber;
        if (this.opts.position === 'x' && this.opts.unit === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].UNITS_TIME) {
          // modify xtick to display less ticks on lower chart width or has less days
          var newTick = Math.floor(this.opts.chart.chartWidth / 60);
          var dayLength = Math.floor((this.opts.domainScale[1] - this.opts.domainScale[0]) / (60 * 60 * 24 * 1000)) + 1;
          if (dayLength > 2 && dayLength < tickVal) {
            tickVal = dayLength;
          }

          var minuteLength = Math.floor((this.opts.domainScale[1] - this.opts.domainScale[0]) / (60 * 1000));
          if (minuteLength < tickVal) {
            tickVal = minuteLength;
          }

          if (newTick < tickVal) {
            tickVal = newTick;
          }
        }

        this.axis.ticks(tickVal);
      } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(this.opts.tickNumber)) {
        this.axis.ticks(this.opts.tickNumber());
      }

      this.transformAttr && this.axisTag.attr('transform', this.transformAttr);

      if (this.opts.showGridLines && this.opts.position === 'y') {
        this.axis.tickSizeInner(-this.opts.chart.chartWidth);
      }

      this.axisTag.call(this.axis);

      var limitText = this.opts.textLimit;
      var tickFmt = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(this.opts.tickFormatter) ? this.opts.tickFormatter : _utils__WEBPACK_IMPORTED_MODULE_9__["emptyFn"];

      if (this.opts.rotateText === 'slant') {
        this.axisTag.selectAll('text').style('text-anchor', 'end').attr('y', '8').attr('dx', '-1.0em').attr('dy', '.15em').attr('transform', 'rotate(-65)').text(function (d, i) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["truncateText"])(tickFmt(d), limitText);
        });
      } else if (this.opts.rotateText === 'vertical') {
        this.axisTag.selectAll('text').attr('y', 0).attr('x', 9).attr('dy', '.35em').attr('transform', 'rotate(90)').style('text-anchor', 'start').text(function (d, i) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["truncateText"])(tickFmt(d), limitText);
        });
      }
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.axisTag && this.axisTag.classed('vc-hidden', !showFlag);
      this.opts.axisLabelTag && this.opts.axisLabelTag.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }

    // Remove Axis Instance

  }, {
    key: 'remove',
    value: function remove() {
      this.opts.axisLabelTag && this.opts.axisLabelTag.remove();
      this.axisTag && this.axisTag.remove();
      this.scale = null;
      this.axis = null;
      this.opts = null;
    }
  }]);

  return Axis;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Axis);

/***/ }),

/***/ "./charts/TimeSeriesChart.js":
/*!***********************************!*\
  !*** ./charts/TimeSeriesChart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/number/is-finite */ "../node_modules/babel-runtime/core-js/number/is-finite.js");
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/set-immediate */ "../node_modules/babel-runtime/core-js/set-immediate.js");
/* harmony import */ var babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/helpers/get */ "../node_modules/babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _charts_Chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/charts/Chart */ "./charts/Chart.js");
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/axis */ "./axis/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/helpers */ "./helpers.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _data_parser_ChartAxisParser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/data-parser/ChartAxisParser */ "./data-parser/ChartAxisParser.js");
/* harmony import */ var _data_parser_BasicTSParser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/data-parser/BasicTSParser */ "./data-parser/BasicTSParser.js");
/* harmony import */ var _tooltip_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/tooltip/TimeSeriesTooltip */ "./tooltip/TimeSeriesTooltip.js");
/* harmony import */ var _mouse_handler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/mouse-handler */ "./mouse-handler/index.js");
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/zoom */ "./zoom/index.js");
/* harmony import */ var _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/legend/TimeSeriesLegend */ "./legend/TimeSeriesLegend.js");
/* harmony import */ var _series_TimeSeries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/series/TimeSeries */ "./series/TimeSeries.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
























var TimeSeriesChart = function (_Chart) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(TimeSeriesChart, _Chart);

  function TimeSeriesChart(container, opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, TimeSeriesChart);

    opts.startTime = new Date();

    // Create the dataParser is not passed
    if (!opts.dataParser) {
      opts.dataParser = new _data_parser_BasicTSParser__WEBPACK_IMPORTED_MODULE_16__["default"](opts);
    }
    // Check the dataParser exists and its instanceof ChartAxisParser
    if (!(opts.dataParser instanceof _data_parser_ChartAxisParser__WEBPACK_IMPORTED_MODULE_15__["default"])) {
      throw new Error("DataParser in options dosen't have implementation of ChartAxisParser");
    }

    // Call Parent Impl

    // Run the dataParser for given JSON data
    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (TimeSeriesChart.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(TimeSeriesChart)).call(this, container, opts));

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isObject"])(_this.dataParser)) {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(_this.options, _this.dataParser.dataExecutor());
    }

    // Add default options to chart
    Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["addDefaultTSOptions"])(_this.options);

    // Initilize all chart components needed for timeSeriesChart on exact order based on each dependencies
    _this.chartInitilize();

    babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      return _this.draw();
    });
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(TimeSeriesChart, [{
    key: 'chartInitilize',
    value: function chartInitilize() {
      var axisOptions = void 0;
      var yRange = this.options.yRange;
      var yRange2 = this.options.yRange2;
      var timeInfo = this.options.timeInfo;

      if (yRange) {
        axisOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getObject"])(this, 'options.yAxis.left');
        this.yAxis = new _axis__WEBPACK_IMPORTED_MODULE_12__["default"](babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          chart: this,
          position: 'y',
          orient: 'left',
          rangeScale: [this.chartHeight, 0],
          domainScale: yRange
        }, axisOptions));
        this.chartComponentsArr.push(this.yAxis);
      }

      if (yRange2) {
        axisOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getObject"])(this, 'options.yAxis.right');
        this.yAxis2 = new _axis__WEBPACK_IMPORTED_MODULE_12__["default"](babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          chart: this,
          position: 'y',
          orient: 'right',
          rangeScale: [this.chartHeight, 0],
          domainScale: yRange2
        }, axisOptions));
        // Register the component for draw, update, showHide and remove (chart API)
        this.chartComponentsArr.push(this.yAxis2);
      }

      if (timeInfo.timeRange) {
        axisOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getObject"])(this, 'options.xAxis.bottom');
        this.xAxis = new _axis__WEBPACK_IMPORTED_MODULE_12__["default"](babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          chart: this,
          position: 'x',
          orient: 'bottom',
          rangeScale: [0, this.chartWidth],
          domainScale: timeInfo.timeRange
        }, axisOptions));
        this.chartComponentsArr.push(this.xAxis);
      }

      var tooltipOpts = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getObject"])(this, 'options.tooltip');
      if (tooltipOpts.visible) {
        this.tooltip = new _tooltip_TimeSeriesTooltip__WEBPACK_IMPORTED_MODULE_17__["default"](babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          chart: this
        }, tooltipOpts));
        this.chartComponentsArr.push(this.tooltip);
      }

      var zoomOpts = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getObject"])(this, 'options.zoom', {});
      if (tooltipOpts.visible || zoomOpts.visible) {
        this.mouseHandler = new _mouse_handler__WEBPACK_IMPORTED_MODULE_18__["default"]({
          chart: this
        });
        this.chartComponentsArr.push(this.mouseHandler);
      }

      if (this.options.zoom.visible) {
        this.zoomBrush = new _zoom__WEBPACK_IMPORTED_MODULE_19__["default"]({
          chart: this,
          onZoom: this.options.zoom.onXZoom,
          onY1Zoom: this.options.zoom.onY1Zoom,
          onY2Zoom: this.options.zoom.onY2Zoom
        });
        this.chartComponentsArr.push(this.zoomBrush);
      }

      if (this.options.series) {
        this.series = new _series_TimeSeries__WEBPACK_IMPORTED_MODULE_21__["default"]({
          chart: this
        });
        // Register the component for draw, update, showHide and remove
        this.chartComponentsArr.push(this.series);
      }

      if (this.options.legend.visible) {
        this.legends = new _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_20__["default"]({
          chart: this,
          legendPrefix: this.options.legend.legendPrefix,
          position: _constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_TOP,
          disableSeriesToggle: this.options.legend.disableSeriesToggle,
          onLegendChange: this.options.legend.onLegendChange
        });
        this.chartComponentsArr.push(this.legends);
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      console.log('TimeSeriesChart draw', this);
      babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(TimeSeriesChart.prototype.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(TimeSeriesChart.prototype), 'draw', this).call(this);
      this.options.afterDraw.call(this);

      // Add Extra Buffer for max Y value and provide space to display all ticks in graphZone
      this.reScaleYAxis();

      this.chartResponsive();

      this.mouseHandler && this.mouseHandler.triggerMouseAction();

      this.timeDiff = new Date().getTime() - this.options.startTime.getTime();
      this.options.onComplete.call(this, this.timeDiff);
    }

    // Find next possible tick to display max Y value and adjust margin to show all tick labels completely

  }, {
    key: 'reScaleYAxis',
    value: function reScaleYAxis(axisSpecifier) {
      var _this2 = this;

      var tickValArr = void 0;
      var diffVal = void 0;
      var rangeVal = void 0;
      var yMax = void 0;
      var applyY1Axis = true;
      var applyY2Axis = true;

      if (axisSpecifier === _constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_LEFT) {
        applyY2Axis = false;
      }

      if (axisSpecifier === _constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_RIGHT) {
        applyY1Axis = false;
      }

      // If Max value is provided in options, Dont compute next possible tick.
      yMax = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getObject"])(this.options, 'yAxis.left.max');
      if (this.options.yRange && applyY1Axis && !babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yMax)) {
        tickValArr = this.yAxis.tickValues;
        // If tickValArr contains values
        if (tickValArr.length > 1) {
          // Find difference of last and last previous tick values of Y Axis
          diffVal = tickValArr[0] - tickValArr[1];
          // New range is increased by above difference
          rangeVal = tickValArr[0] + diffVal;

          // Modify new max range for the graph
          this.options.yRange[1] = rangeVal;

          // Update Y Axis with new domainScale
          this.yAxis.modifyAxisProps({
            domainScale: this.options.yRange
          });
        }
      }

      yMax = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getObject"])(this.options, 'yAxis.right.max');
      if (this.options.yRange2 && applyY2Axis && !babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yMax)) {
        tickValArr = this.yAxis2.tickValues;

        if (tickValArr.length > 1) {
          diffVal = tickValArr[0] - tickValArr[1];
          rangeVal = tickValArr[0] + diffVal;

          this.options.yRange2[1] = rangeVal;

          // Update Y Axis with new domainScale
          this.yAxis2.modifyAxisProps({
            domainScale: this.options.yRange2
          });
        }
      }

      // Adjusts Y axis width based on max text length displayed
      var reScaleAxis = {};
      var requiredWidth = 0;

      if (this.options.yRange) {
        reScaleAxis[_constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_LEFT] = {};
        reScaleAxis[_constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_LEFT].class = '.vc-axis-left';
        reScaleAxis[_constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_LEFT].maxText = '';
      }

      if (this.options.yRange2) {
        reScaleAxis[_constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_RIGHT] = {};
        reScaleAxis[_constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_RIGHT].class = '.vc-axis-right';
        reScaleAxis[_constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_RIGHT].maxText = '';
      }

      // Creates dummy svg to add Max length tick values and check its required width in chart
      var dummyG = this.svg.append('g').attr('class', 'vc-axis');

      var _loop = function _loop(axis) {
        var ticksArr = _this2.container.select('svg ' + reScaleAxis[axis].class).selectAll('text');
        ticksArr.each(function (i) {
          var tickHtml = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_22__["select"])(this).text() || '';
          if (tickHtml.length > reScaleAxis[axis].maxText.length) {
            reScaleAxis[axis].maxText = tickHtml;
          }
        });

        dummyG.selectAll('.dummyText').data([reScaleAxis[axis].maxText]).enter().append('text').text(String).each(function (d, i) {
          // Compute requiredWidth for the Max text
          requiredWidth = this.getComputedTextLength();
        });

        // Update respective margin to fit in ticks text
        _this2.margin[axis] = Math.round(requiredWidth) + _constants__WEBPACK_IMPORTED_MODULE_14__["default"].Y_AXIS_SPACE;
      };

      for (var axis in reScaleAxis) {
        _loop(axis);
      }
      dummyG.remove();

      this.chartWidth = this.chartFullSpace.width - this.margin.left - this.margin.right;
      this.update();
    }
  }]);

  return TimeSeriesChart;
}(_charts_Chart__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TimeSeriesChart);

/***/ }),

/***/ "./data-parser/BasicTSParser.js":
/*!**************************************!*\
  !*** ./data-parser/BasicTSParser.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/number/is-finite */ "../node_modules/babel-runtime/core-js/number/is-finite.js");
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _data_parser_ChartAxisParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data-parser/ChartAxisParser */ "./data-parser/ChartAxisParser.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "./utils.js");










var BasicTSParser = function (_ChartAxisParser) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BasicTSParser, _ChartAxisParser);

  function BasicTSParser(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BasicTSParser);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (BasicTSParser.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(BasicTSParser)).call(this, opts));

    _this.opts = opts;
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BasicTSParser, [{
    key: 'dataExecutor',
    value: function dataExecutor() {
      // Order in which the DataProcessor APIs needs to be executed
      try {

        this.dataOptions = {};
        this.opts.data && (this.dataOptions.data = this.opts.data);
        this.opts.series && (this.dataOptions.series = this.opts.series);
        this.opts.yAxis && (this.dataOptions.yAxis = this.opts.yAxis);

        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(this.dataOptions, this.constructChartData());
        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(this.dataOptions, this.constructXAxisInfo());
        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(this.dataOptions, this.constructPlotInfo());
        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(this.dataOptions, this.constructYAxisInfo());

        return this.dataOptions;
      } catch (err) {
        console.log('Error encountered while timeseries JSON parsing :', err);
        this.opts.onError(err);
        throw new Error('Invalid JSON received - Error on timeseries JSON parsing');
      }
    }
  }, {
    key: 'constructChartData',
    value: function constructChartData() {
      var dataOptions = this.dataOptions;
      var resJson = dataOptions.data;
      var seriesData = resJson.timeseries;
      var columns = seriesData.columns;
      var data = seriesData.values;
      var validJSONType = columns.length && data.length;

      // Find seconds in unitArr to find the timeStampIndex
      var timeStampIndex = 0;
      var firstTime = data[0][timeStampIndex];
      if (!validJSONType || !(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isNumber"])(firstTime) || Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isDate"])(firstTime))) {
        throw new Error('Invalid Time series JSON received');
      }

      var start = 0;
      data.forEach(function (d) {
        if (start > d[timeStampIndex]) {
          throw new Error('Invalid Time series JSON received: Timestamp Values must be in ascending order');
        }
        start = d[timeStampIndex];
        d[timeStampIndex] = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getDateFromEpoc"])(d[timeStampIndex], true); // convert EPOC to date
      });

      return {
        chartData: data
      };
    }
  }, {
    key: 'constructXAxisInfo',
    value: function constructXAxisInfo() {
      var dataOptions = this.dataOptions;
      var seriesData = dataOptions.chartData;
      var dataIndex = 0;
      return {
        timeInfo: {
          dataIndex: dataIndex,
          timeRange: [seriesData[0][dataIndex], seriesData[seriesData.length - 1][dataIndex]]
        }
      };
    }
  }, {
    key: 'constructYAxisInfo',
    value: function constructYAxisInfo() {
      var dataOptions = this.dataOptions;
      var eachPlotSet = dataOptions.plotSet;
      var plotInfo = dataOptions.series;
      var data = dataOptions.chartData;
      var yAxis = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.left');
      var yAxis2 = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.right');
      var findEachPlotRange = false;
      var key = void 0;
      var yRange = null;
      var yRange2 = null;

      if (yAxis) {
        if (babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yAxis.min) && babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yAxis.max)) {
          yRange = [yAxis.min, yAxis.max];
        }
      }

      if (yAxis2) {
        if (babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yAxis2.min) && babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yAxis2.max)) {
          yRange2 = [yAxis2.min, yAxis2.max];
        }
      }

      // If yRange is not set from graphOptions, then go inside
      if (yAxis && !yRange || yAxis2 && !yRange2) {
        (function () {

          for (key in eachPlotSet) {
            if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet[key].minVal) || !babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet[key].maxVal)) {
              findEachPlotRange = true;
              break;
            }
          }

          if (plotInfo.stack && plotInfo.stack.length || findEachPlotRange) {

            if (findEachPlotRange) {
              // Reset range for each plot for finding min , max
              for (var plot in eachPlotSet) {
                var eachPlot = eachPlotSet[plot];
                eachPlot.minVal = Infinity;
                eachPlot.maxVal = -Infinity;
              }
            }

            // Reset stack range for each stack for finding min , max
            plotInfo.stack && plotInfo.stack.forEach(function (plotData) {
              plotData.valueRange = [Infinity, -Infinity];
            });

            // Calculate Max and Min for each plots series
            var valData = 0;
            data.forEach(function (d) {
              if (findEachPlotRange) {
                for (var _plot in eachPlotSet) {
                  var _eachPlot = eachPlotSet[_plot];
                  valData = d[_eachPlot.dataIndex];
                  if (valData < _eachPlot.minVal) {
                    _eachPlot.minVal = valData;
                  }
                  if (valData > _eachPlot.maxVal) {
                    _eachPlot.maxVal = valData;
                  }
                }
              }

              plotInfo.stack && plotInfo.stack.forEach(function (plotData) {
                var memberArr = plotData.stackOrderMembers;
                var sum = 0;
                memberArr.forEach(function (member) {
                  sum += eachPlotSet[member.name].visible ? d[eachPlotSet[member.name].dataIndex] : 0;
                });

                if (sum < plotData.valueRange[0]) {
                  plotData.valueRange[0] = sum;
                }
                if (sum > plotData.valueRange[1]) {
                  plotData.valueRange[1] = sum;
                }
              });
            });
          }

          // Find Max value required to plot on graph based on visible plot function . i.e line or stack
          var allMax = -Infinity;
          var allMax2 = -Infinity;
          for (key in plotInfo) {
            if (key === 'line') {
              plotInfo[key].forEach(function (plotData) {
                if (eachPlotSet[plotData.name].visible && eachPlotSet[plotData.name].plotAxis[0] === 'left' && eachPlotSet[plotData.name].maxVal > allMax) {
                  allMax = eachPlotSet[plotData.name].maxVal;
                }
                if (eachPlotSet[plotData.name].visible && eachPlotSet[plotData.name].plotAxis[0] === 'right' && eachPlotSet[plotData.name].maxVal > allMax2) {
                  allMax2 = eachPlotSet[plotData.name].maxVal;
                }
              });
            } else if (key === 'stack') {
              plotInfo[key].forEach(function (plotData) {
                if (plotData.plotAxis[0] === 'left' && plotData.valueRange[1] > allMax) {
                  allMax = plotData.valueRange[1];
                }
                if (plotData.plotAxis[0] === 'right' && plotData.valueRange[1] > allMax2) {
                  allMax2 = plotData.valueRange[1];
                }
              });
            }
          }

          // Find min value just by checking min value among all series data
          var allMin = Infinity;
          var allMin2 = Infinity;
          for (key in eachPlotSet) {
            if (eachPlotSet[key].plotAxis[0] === 'left' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin) {
              allMin = eachPlotSet[key].minVal;
            }
            if (eachPlotSet[key].plotAxis[0] === 'right' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin2) {
              allMin2 = eachPlotSet[key].minVal;
            }
          }

          var yMin = void 0,
              yMax = void 0;
          // If Yaxis range is already defined in options, Override it.
          if ([allMin, allMax].reduce(function (a, b) {
            return babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(a) && babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(b);
          })) {
            yMin = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.left.min');
            yMin = babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yMin) ? yMin : allMin;
            yMax = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.left.max');
            yMax = babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yMax) ? yMax : allMax;
            if (!yMax) {
              yMax = yMin + 80; // Set as default 100 if range is [0,0]
            }
            yRange = [yMin, yMax];
          } else {
            if (yAxis) {
              yRange = [0, 80];
            } else {
              yRange = false;
            }
          }

          if ([allMin2, allMax2].reduce(function (a, b) {
            return babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(a) && babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(b);
          })) {
            yMin = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.right.min');
            yMin = babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yMin) ? yMin : allMin2;
            yMax = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.right.max');
            yMax = babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(yMax) ? yMax : allMax2;
            if (!yMax) {
              yMax = yMin + 80; // Set as default 100 if range is [0,0]
            }
            yRange2 = [yMin, yMax];
          } else {
            if (yAxis2) {
              yRange2 = [0, 80];
            } else {
              yRange2 = false;
            }
          }
        })();
      }

      return {
        yRange: yRange,
        yRange2: yRange2
      };
    }
  }, {
    key: 'constructPlotInfo',
    value: function constructPlotInfo() {
      var dataOptions = this.dataOptions;
      var resJson = dataOptions.data;
      var seriesData = resJson.timeseries;
      var columns = seriesData.columns;
      var ind = 0;
      // Object that contains all plot functions needed for the chart
      var eachPlotSet = {};
      // Set of rules that charts needs to be draw on timeSeriesChart
      var plotInfo = dataOptions.series;
      var key = void 0;

      var timeStampIndex = dataOptions.timeInfo.dataIndex;
      var dataColorArr = seriesData.color || [];
      var yLeft = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.left');
      var yRight = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.right');

      // Generate eachPlotSet using columns
      columns.forEach(function (d) {
        if (timeStampIndex === ind) {
          ind++;
          return;
        }
        // Convert the Series Name to JS suitable object mapped name ex: abc(%) 1 --> abc1
        var refineName = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["refineString"])(d);
        eachPlotSet[refineName] = {
          name: d,
          dataIndex: ind,
          minVal: Infinity,
          maxVal: -Infinity,
          visible: true,
          color: dataColorArr[ind] || '#000'
        };
        ind++;
      });

      for (key in plotInfo) {
        if (key === 'line') {
          plotInfo[key].forEach(function (plotData) {
            plotData.name = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["refineString"])(plotData.name);
            var color = plotData.color; // Apply color for each Plot series or pick from data color Arr
            if (!color) {
              throw 'Color not present for series ' + plotData.name;
            }
            color && (eachPlotSet[plotData.name].color = color);
            var plotAxis = plotData.plotAxis || ['left', 'bottom'];
            eachPlotSet[plotData.name].plotAxis = plotAxis;
            var unit = plotAxis[0] === 'left' ? yLeft.unit : yRight.unit;
            eachPlotSet[plotData.name].unit = unit;
            Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isBoolean"])(plotData.visible) && (eachPlotSet[plotData.name].visible = plotData.visible);
          });
        } else if (key === 'stack') {
          plotInfo[key].forEach(function (plotData) {
            var memberArr = plotData.stackOrderMembers;
            plotData.valueRange = [Infinity, -Infinity];
            memberArr.forEach(function (member) {
              member.name = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["refineString"])(member.name);
              var color = member.color; // Apply color for each Plot series or pick from data color Arr
              if (!color) {
                throw 'Color not present for series ' + plotData.name;
              }
              color && (eachPlotSet[member.name].color = color);
              var plotAxis = member.plotAxis || ['left', 'bottom'];
              eachPlotSet[member.name].plotAxis = plotAxis;
              var unit = plotAxis[0] === 'left' ? yLeft.unit : yRight.unit;
              eachPlotSet[member.name].unit = unit;
              Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isBoolean"])(member.visible) && (eachPlotSet[member.name].visible = member.visible);
            });
          });
        } else if (key === 'bar') {
          plotInfo[key].forEach(function (plotData) {
            var memberArr = plotData.barOrderMembers;
            plotData.valueRange = [Infinity, -Infinity];
            memberArr.forEach(function (member) {
              member.name = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["refineString"])(member.name);
              var color = member.color; // Apply color for each Plot series or pick from data color Arr
              if (!color) {
                throw 'Color not present for series ' + plotData.name;
              }
              color && (eachPlotSet[member.name].color = color);
              var plotAxis = member.plotAxis || ['left', 'bottom'];
              eachPlotSet[member.name].plotAxis = plotAxis;
              var unit = plotAxis[0] === 'left' ? yLeft.unit : yRight.unit;
              eachPlotSet[member.name].unit = unit;
              Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isBoolean"])(member.visible) && (eachPlotSet[member.name].visible = member.visible);
            });
          });
        }
      }

      return {
        series: plotInfo, // newly updated series from user options having additional info of each series
        plotSet: eachPlotSet // Info of each plot like color, max, min etc
      };
    }
  }]);

  return BasicTSParser;
}(_data_parser_ChartAxisParser__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicTSParser);

/***/ }),

/***/ "./mouse-handler/index.js":
/*!********************************!*\
  !*** ./mouse-handler/index.js ***!
  \********************************/
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







var MouseHandler = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MouseHandler, _ChartComponent);

  function MouseHandler(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MouseHandler);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (MouseHandler.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(MouseHandler)).call(this));

    _this.opts = opts;
    _this.opts.registerFn = [];
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MouseHandler, [{
    key: 'draw',
    value: function draw() {
      this.mouseBrush = this.opts.chart.svg.append('g').attr('class', 'vc-brushX').attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight).attr('fill', 'none').attr('pointer-events', 'all').attr('style', '-webkit-tap-highlight-color: rgba(0, 0, 0, 0)').attr('transform', 'translate(' + this.opts.chart.margin.left + ',' + this.opts.chart.margin.top + ')');

      if (this.opts.chart.options.chart.isTouchScreen) {
        this.mouseBrush.attr('cursor', 'pointer');
      }

      if (!this.opts.chart.options.zoom.visible) {
        // x-Zoom for chart doest not exist, Add rect overlay for brushXDiv
        this.mouseBrush.append('rect').attr('class', 'overlay').attr('x', 0).attr('y', 0).attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      this.mouseBrush.attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight).attr('transform', 'translate(' + this.opts.chart.margin.left + ',' + this.opts.chart.margin.top + ')');
      if (!this.opts.chart.options.zoom.visible) {
        this.mouseBrush.select('rect.overlay').attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight);
      }
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.mouseBrush && this.mouseBrush.classed('vc-hidden', !showFlag);
    }
  }, {
    key: 'register',
    value: function register(callback) {
      this.opts.registerFn.push(callback);
    }
  }, {
    key: 'triggerMouseAction',
    value: function triggerMouseAction() {
      var _this2 = this;

      this.opts.registerFn.forEach(function (fun) {
        fun.call(_this2);
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.mouseBrush && this.mouseBrush.remove();
      this.opts = null;
    }
  }]);

  return MouseHandler;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MouseHandler);

/***/ }),

/***/ "./series/Line.js":
/*!************************!*\
  !*** ./series/Line.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");











var Line = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Line, _ChartComponent);

  function Line(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Line);

    // Do not register this component in chartComponentsArr,  As the series component is already registered and will call the line APIs
    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Line.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Line)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: '',
      plotAxis: [_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_LEFT, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_BOTTOM],
      lineData: null,
      yAxisTarget: null,
      xAxisTarget: null,
      visible: true
    }, opts);

    var self = _this;

    // Find x and y axis based on plotAxis
    var x = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.xAxis.scale');
    if (_this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_TOP) > -1) {
      x = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.xAxis2.scale');
    }

    var y = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.yAxis.scale');
    if (_this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_RIGHT) > -1) {
      y = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.yAxis2.scale');
    }

    _this.line = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["line"])();

    if (_this.opts.yAxisTarget) {
      // For normal series, yAxisTarget refers to the index of this series in data Arr
      _this.line.defined(function (d) {
        return d[self.opts.yAxisTarget] != null;
      }).x(function (d) {
        // xAxisTarget refers the index of date in data Arr
        return x(d[self.opts.xAxisTarget]);
      }).y(function (d) {
        return y(d[self.opts.yAxisTarget]);
      });
    }
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Line, [{
    key: 'draw',
    value: function draw() {
      var self = this;
      this.lineTag = this.opts.chart.graphZone.selectAll('.vc-line-' + this.opts.className).data([this.opts.lineData]).enter().append('g').attr('class', 'vc-line-plot vc-line-' + this.opts.className);

      var clipElement = this.opts.chart.container.select('svg clipPath');
      // Adding the lines series for data to be shown
      this.lineTag.append('path').attr('clip-path', 'url(#' + clipElement.attr('id') + ')') // display graphZone of same size as clip-path defined
      .attr('class', 'vc-line').style('stroke', function (d) {
        return d.color;
      }).style('fill', 'transparent').style('stroke-width', function (d) {
        return d.lineWidth || '2px';
      }).attr('d', function (d) {
        return self.line(d.values); // Values are array of array having format like  [[date, series1, series2 ....],...]
      });
    }

    // Update happens when the chart is resized

  }, {
    key: 'update',
    value: function update() {
      var self = this;
      this.lineTag && this.lineTag.select('path').attr('d', function (d) {
        return self.line(d.values);
      });
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.lineTag && this.lineTag.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }

    // Redraw is called when series is toggled from Legends

  }, {
    key: 'redraw',
    value: function redraw() {
      var eachPlotSet = this.opts.chart.options.plotSet;
      var seriesName = this.opts.lineData.name;
      // Remove line series
      this.lineTag && this.lineTag.remove();

      if (eachPlotSet && eachPlotSet[seriesName] && eachPlotSet[seriesName].visible) {
        this.draw();
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.lineTag && this.lineTag.remove();
      this.line = null;
      this.opts = null;
    }
  }]);

  return Line;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./series/StackArea.js":
/*!*****************************!*\
  !*** ./series/StackArea.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "./utils.js");











var StackArea = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StackArea, _ChartComponent);

  function StackArea(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, StackArea);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (StackArea.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(StackArea)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: '',
      plotAxis: [_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_LEFT, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_BOTTOM],
      xAxisTarget: '',
      stackData: null,
      stackOrderMembers: {},
      visible: true
    }, opts);

    var self = _this;
    var eachPlotSet = _this.opts.chart.options.plotSet;
    // Define in what order, Stack series needs to be ploted
    _this.opts.stackOrderIndex = _this.opts.stackOrderMembers.filter(function (ele) {
      return eachPlotSet[ele.name].visible || false;
    }).map(function (ele) {
      return eachPlotSet[ele.name].dataIndex;
    });

    // Find x and y axis based on plotAxis
    var x = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getObject"])(_this.opts, 'chart.xAxis.scale');
    if (_this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_TOP) > -1) {
      x = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getObject"])(_this.opts, 'chart.xAxis2.scale');
    }

    var y = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getObject"])(_this.opts, 'chart.yAxis.scale');
    if (_this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_RIGHT) > -1) {
      y = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getObject"])(_this.opts, 'chart.yAxis2.scale');
    }

    _this.opts.d3Stack = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["stack"])();

    _this.area = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["area"])().x(function (d, i) {
      return x(d.data[self.opts.xAxisTarget]);
    }).y0(function (d) {
      return y(d[0]); // Indicates where to start along YAxis
    }).y1(function (d) {
      return y(d[1]); // Indicates where to end along YAxis
    });

    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(StackArea, [{
    key: 'draw',
    value: function draw() {
      var self = this;
      var eachPlotSet = this.opts.chart.options.plotSet;

      this.opts.d3Stack.keys(this.opts.stackOrderIndex); // specify the stack series names in array format
      this.opts.d3Stack.order(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["stackOrderNone"]); // use the given series order.
      this.opts.d3Stack.offset(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["stackOffsetNone"]); // apply a zero baseline on start

      // Show stack plot for only series which are visible
      var stackVisibleOrder = this.opts.stackOrderMembers.filter(function (ele) {
        return eachPlotSet[ele.name].visible || false;
      });

      this.stackLayer = this.opts.chart.graphZone.selectAll('.vc-stack-' + this.opts.className).data(this.opts.d3Stack(this.opts.stackData)).enter().append('g').attr('class', 'vc-stack-plot vc-stack-' + this.opts.className);

      var clipElement = this.opts.chart.container.select('svg clipPath');

      // PLot stackLayer based on each series visiblity
      this.stackLayer.append('path').attr('clip-path', 'url(#' + clipElement.attr('id') + ')') // display graphZone of same size as clip-path defined
      .attr('class', function (d) {
        var stackMember = stackVisibleOrder[self.opts.stackOrderIndex.indexOf(d.key)] || {
          name: ''
        };
        return 'vc-stack vc-stack-' + stackMember.name;
      }).style('fill', function (d) {
        var stackMember = stackVisibleOrder[self.opts.stackOrderIndex.indexOf(d.key)] || {
          name: ''
        };
        return eachPlotSet[stackMember.name].color;
      }).attr('d', this.area);
    }

    // Update stackLayer based on chart resize

  }, {
    key: 'update',
    value: function update() {
      this.stackLayer && this.stackLayer.select('path').attr('d', this.area);
    }
  }, {
    key: 'redraw',
    value: function redraw() {
      var eachPlotSet = this.opts.chart.options.plotSet;
      // Modify stackOrder arr based on visibleSeries
      this.opts.stackOrderIndex = this.opts.stackOrderMembers.filter(function (ele) {
        return eachPlotSet[ele.name].visible || false;
      }).map(function (ele) {
        return eachPlotSet[ele.name].dataIndex;
      });

      // Remove all stack series
      this.stackLayer && this.stackLayer.remove();
      // draw with new stackOrderMembers
      this.draw();
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.stackLayer.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }
  }, {
    key: 'remove',
    value: function remove() {
      //  this.stackAreaPath.remove();
      this.stackLayer && this.stackLayer.remove();
      this.opts.d3Stack = null;
      this.area = null;
      this.opts = null;
    }
  }]);

  return StackArea;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (StackArea);

/***/ }),

/***/ "./series/TimeSeries.js":
/*!******************************!*\
  !*** ./series/TimeSeries.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _series_Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/series/Line */ "./series/Line.js");
/* harmony import */ var _series_StackArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/series/StackArea */ "./series/StackArea.js");
/* harmony import */ var _series_Series__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/series/Series */ "./series/Series.js");









var TimeSeries = function (_Series) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TimeSeries, _Series);

  function TimeSeries(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TimeSeries);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (TimeSeries.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(TimeSeries)).call(this));

    _this.opts = opts;
    _this.plotSeries = [];
    var data = _this.opts.chart.options.chartData; // Accept either timeseries or pieseries
    var plotInfo = _this.opts.chart.options.series;
    var eachPlotSet = _this.opts.chart.options.plotSet;

    // Create plot components based on input options and each plot info
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"])(plotInfo.stack) && plotInfo.stack.forEach(function (plotData) {
      _this.plotSeries.push(new _series_StackArea__WEBPACK_IMPORTED_MODULE_6__["default"]({
        chart: _this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        xAxisTarget: _this.opts.chart.options.timeInfo.dataIndex,
        stackData: data,
        stackOrderMembers: plotData.stackOrderMembers
      }));
    });

    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"])(plotInfo.line) && plotInfo.line.forEach(function (plotData) {
      _this.plotSeries.push(new _series_Line__WEBPACK_IMPORTED_MODULE_5__["default"]({
        chart: _this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        yAxisTarget: eachPlotSet[plotData.name].dataIndex,
        xAxisTarget: _this.opts.chart.options.timeInfo.dataIndex,
        visible: eachPlotSet[plotData.name].visible,
        lineData: {
          name: plotData.name,
          color: eachPlotSet[plotData.name].color,
          lineWidth: eachPlotSet[plotData.name].lineWidth,
          values: data
        }
      }));
    });
    return _this;
  }

  return TimeSeries;
}(_series_Series__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TimeSeries);

/***/ }),

/***/ "./tooltip/TimeSeriesTooltip.js":
/*!**************************************!*\
  !*** ./tooltip/TimeSeriesTooltip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "../node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/constants */ "./constants.js");












var TimeSeriesTooltip = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TimeSeriesTooltip, _ChartComponent);

  function TimeSeriesTooltip(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TimeSeriesTooltip);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TimeSeriesTooltip.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(TimeSeriesTooltip)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      crossHairs: {
        enable: true
      },
      visible: true
    }, opts);

    // Provide basic formatter to display hover data
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(_this.opts.format)) {
      _this.opts.format = function (d) {
        return '<span> ToolTip Text : </span><br/><span>' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(d) + '</span>';
      };
    }
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TimeSeriesTooltip, [{
    key: 'draw',
    value: function draw() {
      var _this2 = this;

      this.crossHairs = false;
      this.toolTipDiv = this.opts.chart.container.append('div').attr('class', 'vc-tooltip-display ' + this.opts.className);

      if (this.opts.crossHairs.enable === true) {
        this.crossHairs = this.opts.chart.svg.append('g').attr('class', 'vc-tooltip-line');
        this.crossHairs.append('line').attr('transform', 'translate(-999,-999)').attr('x1', this.opts.chart.margin.left).attr('y1', this.opts.chart.margin.top - _constants__WEBPACK_IMPORTED_MODULE_10__["default"].TOOLTIP_TOP_BUFFER).attr('x2', this.opts.chart.margin.left).attr('y2', this.opts.chart.chartHeight + this.opts.chart.margin.top);
      }

      this.opts.chart.mouseHandler.register(function () {
        // Register hover and hide/show toolip events
        var self = _this2;
        var xScale = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this2.opts, 'chart.xAxis.scale') || false;
        var mouseHandler = _this2.opts.chart.mouseHandler;
        var dateIndex = _this2.opts.chart.options.timeInfo.dataIndex;
        var dataSet = _this2.opts.chart.options.chartData;
        // Find nearest existing date among array of sorted date
        var bisectDate = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["bisector"])(function (d) {
          return d[dateIndex];
        }).left;

        var mouseEvt = function mouseEvt(d) {
          // On mousemove of x overlay, find x,y values and update tooltip
          var xMouse = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Mouse"])(this)[0];
          var yMouse = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Mouse"])(this)[1];
          var xVal = xScale.invert(xMouse); // find xAxis date for mouse position

          // Do binary search of data set from 2nd data set to end
          var found = bisectDate(dataSet, xVal, 1);

          var dBefore = dataSet[found - 2];

          var dPrev = dataSet[found - 1];
          // get before find dataSet

          var dFound = dataSet[found] || dPrev; // get find dataSet

          var toolTipData = dPrev;
          if (dataSet.length > self.opts.chart.chartWidth) {
            (function () {
              // More than one tick reside on each pixel. Hence find tick having max value among the dataset
              var dataParseLen = Math.floor(dataSet.length / self.opts.chart.chartWidth) + 1;

              var visibleDataIndex = {};

              for (var pl in self.opts.chart.options.plotSet) {
                var plot = self.opts.chart.options.plotSet[pl];
                if (plot.visible) {
                  visibleDataIndex[plot.dataIndex] = true;
                }
              }

              var multiArrMap = {};
              // Do Scan from range -dataParseLen to +dataParseLen between found data index
              for (var ind = found - dataParseLen; ind < found + dataParseLen; ind++) {
                if (dataSet[ind]) {
                  var dSet = dataSet[ind].filter(function (val, index) {
                    return visibleDataIndex[index];
                  }).sort(function (a, b) {
                    return b - a;
                  });
                  if (dSet.length) {
                    multiArrMap[ind] = dSet;
                  }
                }
              }
              var maxInd = void 0;
              var maxVal = -Infinity;
              for (var mp in multiArrMap) {
                var arrSet = multiArrMap[mp];
                if (maxVal < arrSet[0]) {
                  maxVal = arrSet[0];
                  maxInd = mp;
                }
              }

              toolTipData = dataSet[maxInd] || dFound;
            })();
          } else {
            // Find nearest reaching date among above two dates
            toolTipData = xVal - dPrev[dateIndex] > dFound[dateIndex] - xVal ? dFound : dPrev;
          }

          var dateIntRange = dFound[dateIndex] - dPrev[dateIndex];

          if (!dateIntRange && dBefore) {
            dateIntRange = dPrev[dateIndex] - dBefore[dateIndex];
          }

          if (dateIntRange < Math.abs(dFound[dateIndex] - xVal)) {
            // If found is outside data interval range, Then data doesnt exist for that tick.
            toolTipData = [];
            toolTipData[dateIndex] = xVal;
          }

          self.hover(xMouse, yMouse, toolTipData);
        };

        var eventName = 'mousemove';
        if (_this2.opts.chart.options.chart.isTouchScreen) {
          eventName = 'click';
        }
        mouseHandler.mouseBrush.on(eventName, mouseEvt).on('mouseout', function () {
          self.hide();
        }).on('mousedown', function () {
          self.hide();
        });

        mouseHandler.mouseBrush.select('rect.overlay').on('mousedown', function () {
          self.hide();
        });
      });
    }
  }, {
    key: 'hover',
    value: function hover(xPos, yPos, displayData) {
      // Update displayPanel and line based on x position
      this.crossHairs && this.crossHairs.select('line').attr('transform', 'translate(' + xPos + ',0)').attr('x1', this.opts.chart.margin.left).attr('y1', this.opts.chart.margin.top - _constants__WEBPACK_IMPORTED_MODULE_10__["default"].TOOLTIP_TOP_BUFFER).attr('x2', this.opts.chart.margin.left).attr('y2', this.opts.chart.chartHeight + this.opts.chart.margin.top);
      this.showHide(true);

      var percentageDiff = xPos / this.opts.chart.chartWidth;

      if (percentageDiff < 0.3) {
        percentageDiff = 0.2;
      }
      if (percentageDiff > 0.7) {
        percentageDiff = 0.95;
      }

      var box = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["elementOffset"])(this.toolTipDiv);
      var rootPos = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["elementOffset"])(this.opts.chart.container);
      var left = Math.round(rootPos.left + this.opts.chart.margin.left + xPos - box.width * percentageDiff) + 'px';
      var top = Math.round(rootPos.top - box.height - 5 + _constants__WEBPACK_IMPORTED_MODULE_10__["default"].TOOLTIP_TOP_BUFFER * 2) + 'px';

      this.toolTipDiv.style('left', left).style('top', top).style('display', 'inline-block').html(this.opts.format.call(this.opts.chart, displayData)); // Used format.call(), so that external fun can have access of chart Instance
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;

      this.crossHairs && this.crossHairs.classed('vc-hidden', !showFlag);
      this.toolTipDiv && this.toolTipDiv.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.toolTipDiv && this.toolTipDiv.remove();
      this.crossHairs && this.crossHairs.remove();
      this.opts = null;
    }
  }]);

  return TimeSeriesTooltip;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TimeSeriesTooltip);

/***/ }),

/***/ "./zoom/index.js":
/*!***********************!*\
  !*** ./zoom/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/constants */ "./constants.js");











var Zoom = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Zoom, _ChartComponent);

  function Zoom(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Zoom);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Zoom.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Zoom)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      onZoom: _utils__WEBPACK_IMPORTED_MODULE_7__["emptyFn"],
      onY1Zoom: _utils__WEBPACK_IMPORTED_MODULE_7__["emptyFn"],
      onY2Zoom: _utils__WEBPACK_IMPORTED_MODULE_7__["emptyFn"]
    }, opts);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Zoom, [{
    key: 'draw',
    value: function draw() {
      var self = this;
      var xScale = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts, 'chart.xAxis.scale') || false;
      var yScaleLeft = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts, 'chart.yAxis.scale') || false;
      var yScaleRight = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts, 'chart.yAxis2.scale') || false;
      var brushOverlay = null;
      if (xScale) {
        // Create x axis brush for Zoom operation
        this.brushX = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["brushX"])().extent([[0, 0], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]);

        // Use the same mouseBrush for both xBrush and tooltip
        this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush.call(this.brushX);

        brushOverlay = this.brushXDiv.selectAll('rect.overlay');

        // Call this event when xAxis brush is ended
        this.brushX.on('end', function () {
          if (!_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].selection) {
            return;
          }

          var d0 = _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].selection.map(xScale.invert);
          // find x1 and x2

          var d1 = d0 && d0.map(Math.round); // round both values

          // clear Brush
          self.brushXDiv.call(self.brushX.move, null);
          brushOverlay.style('cursor', 'auto');

          // d1 = d1
          //   .sort(function (a, b) {
          //     return (a - b)
          //   })

          self.opts.chart.xAxis.modifyAxisProps({
            domainScale: d1 // Change domain of X axis upon horizontal zoom
          });

          self.opts.chart.series.update(); // Update all plotSeries for new YAxis domain change


          // Used onZoom.call(), so that external function can have access of chart Instance
          self.opts && self.opts.onZoom.call(self.opts.chart, d1[0], d1[1]);
        });
      }

      // Create y axis brush for vertical left scale operation
      if (yScaleLeft) {
        this.brushYLeft = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["brushY"])();

        this.brushYLeftDiv = this.opts.chart.svg.append('g').attr('class', 'vc-brushY-left');

        // Call this event when yAxis brush is ended
        this.brushYLeft.on('end', function () {
          if (!_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].selection) {
            return;
          }
          self.brushYLeftDiv.call(self.brushYLeft.move, null);

          var d0 = _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].selection.map(yScaleLeft.invert);

          var d1 = d0 && d0.map(Math.round).sort(function (a, b) {
            return a - b;
          });

          self.opts.chart.yAxis.modifyAxisProps({
            domainScale: d1 // Change domain of Y axis upon vertical zoom
          });

          self.opts.chart.series.update(); // Update all plotSeries for new YAxis domain change

          // Used onZoom.call(), so that external function can have access of chart Instance
          Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(self.opts.onY1Zoom) && self.opts.onY1Zoom.call(self.opts.chart, d1[0], d1[1]);
        });
      }

      // Create y axis brush for vertical right scale operation
      if (yScaleRight) {
        this.brushYRight = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["brushY"])();

        this.brushYRightDiv = this.opts.chart.svg.append('g').attr('class', 'vc-brushY-right');

        this.brushYRight.on('end', function () {
          if (!_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].selection) {
            return;
          }
          self.brushYRightDiv.call(self.brushYRight.move, null);

          var d0 = _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].selection.map(yScaleRight.invert);

          var d1 = d0 && d0.map(Math.round).sort(function (a, b) {
            return a - b;
          });

          self.opts.chart.yAxis2.modifyAxisProps({
            domainScale: d1 // Change domain of Y2 axis upon vertical zoom
          });

          self.opts.chart.series.update(); // Update all plotSeries for new YAxis domain change

          // Used onZoom.call(), so that external function can have access of chart Instance
          Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(self.opts.onY2Zoom) && self.opts.onY2Zoom.call(self.opts.chart, d1[0], d1[1]);
        });
      }

      brushOverlay && this.opts.chart.mouseHandler.register(function () {
        // When mouse is clicked or down, enable zoom brush and its mouse cursor
        brushOverlay.on('mousedown', function () {
          brushOverlay.style('cursor', 'col-resize');
        }).on('click', function () {
          brushOverlay.style('cursor', 'auto');
        });
      });
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.brushX) {
        this.brushX.extent([[0, 0], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]);

        this.brushXDiv.call(this.brushX);
      }

      if (this.brushYLeft) {
        this.brushYLeft.extent([[0, 0], [this.opts.chart.margin.left - _constants__WEBPACK_IMPORTED_MODULE_9__["default"].BRUSHY_BUFFER, this.opts.chart.chartHeight]]);

        this.brushYLeftDiv.attr('transform', 'translate(' + _constants__WEBPACK_IMPORTED_MODULE_9__["default"].BRUSHY_BUFFER + ',' + this.opts.chart.margin.top + ')').call(this.brushYLeft);
      }

      if (this.brushYRight) {
        this.brushYRight.extent([[this.opts.chart.margin.left + this.opts.chart.chartWidth - _constants__WEBPACK_IMPORTED_MODULE_9__["default"].BRUSHY_BUFFER, 0], [this.opts.chart.margin.left + this.opts.chart.chartWidth + this.opts.chart.margin.right - _constants__WEBPACK_IMPORTED_MODULE_9__["default"].BRUSHY_BUFFER, this.opts.chart.chartHeight]]);

        this.brushYRightDiv.attr('transform', 'translate(' + _constants__WEBPACK_IMPORTED_MODULE_9__["default"].BRUSHY_BUFFER + ',' + this.opts.chart.margin.top + ')').call(this.brushYRight);
      }
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.brushXDiv && this.brushXDiv.classed('vc-hidden', !showFlag);
      this.brushYLeftDiv && this.brushYLeftDiv.classed('vc-hidden', !showFlag);
      this.brushYRightDiv && this.brushYRightDiv.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.brushXDiv) {
        this.brushXDiv.call(this.brushX.move, null);
        this.brushXDiv && this.brushXDiv.remove();
      }
      if (this.brushYLeftDiv) {
        this.brushYLeftDiv.call(this.brushYLeft.move, null);
        this.brushYLeftDiv.remove();
      }
      if (this.brushYRightDiv) {
        this.brushYRightDiv.call(this.brushYRight.move, null);
        this.brushYRightDiv.remove();
      }
      this.opts = null;
    }
  }]);

  return Zoom;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Zoom);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL21vdXNlLWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvTGluZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TdGFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvVGltZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vdmMvLi96b29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIkF4aXMiLCJvcHRzIiwiY2xhc3NOYW1lIiwicG9zaXRpb24iLCJvcmllbnQiLCJsYWJlbCIsInVuaXQiLCJyYW5nZVNjYWxlIiwiZG9tYWluU2NhbGUiLCJzY2FsZVR5cGUiLCJheGlzQ2xhbXAiLCJ0aWNrTnVtYmVyIiwicm90YXRlVGV4dCIsInRleHRMaW1pdCIsInRpY2tGb3JtYXR0ZXIiLCJzaG93R3JpZExpbmVzIiwidGlja1BhZGRpbmciLCJjb25zdGFudHMiLCJUSUNLX1BBRERJTkciLCJzY2FsZVBhZGRpbmciLCJTQ0FMRV9QQURESU5HIiwidmlzaWJsZSIsImF4aXMiLCJzY2FsZSIsInNjYWxlQmFuZCIsInNjYWxlTGluZWFyIiwiVU5JVFNfVElNRSIsInNjYWxlVGltZSIsIkRJUl9CT1RUT00iLCJheGlzQm90dG9tIiwiRElSX1RPUCIsImF4aXNUb3AiLCJ0aWNrU2l6ZUlubmVyIiwiY2hhcnQiLCJjaGFydEhlaWdodCIsInRpY2tWYWx1ZXMiLCJESVJfTEVGVCIsImF4aXNMZWZ0IiwiRElSX1JJR0hUIiwiYXhpc1JpZ2h0IiwiY2hhcnRXaWR0aCIsImlzRnVuY3Rpb24iLCJleHRlcm5hbEZvcm1hdHRlciIsInZhbCIsInNlbGYiLCJ1bnNoaWZ0IiwidXBkYXRlIiwidHJhbnNmb3JtQXR0ciIsImF4aXNUYWciLCJncmFwaFpvbmUiLCJhcHBlbmQiLCJhdHRyIiwidGlja0Zvcm1hdCIsImF4aXNMYWJlbFRhZyIsInRleHQiLCJjbGFzc2VkIiwieFRyYW5zIiwieVRyYW5zIiwicm90YXRlIiwiTWF0aCIsImZsb29yIiwiWF9BWElTX0xBQkVMX1kiLCJtYXJnaW4iLCJsZWZ0IiwiQlJVU0hZX0JVRkZFUiIsInJpZ2h0IiwibGVuZ3RoIiwicGFkZGluZyIsImNsYW1wIiwicmFuZ2UiLCJkb21haW4iLCJpc051bWJlciIsInRpY2tWYWwiLCJuZXdUaWNrIiwiZGF5TGVuZ3RoIiwibWludXRlTGVuZ3RoIiwidGlja3MiLCJjYWxsIiwibGltaXRUZXh0IiwidGlja0ZtdCIsImVtcHR5Rm4iLCJzZWxlY3RBbGwiLCJzdHlsZSIsImQiLCJpIiwidHJ1bmNhdGVUZXh0Iiwic2hvd0ZsYWciLCJyZW1vdmUiLCJDaGFydENvbXBvbmVudCIsIlRpbWVTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNUU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiaXNPYmplY3QiLCJvcHRpb25zIiwiZGF0YUV4ZWN1dG9yIiwiYWRkRGVmYXVsdFRTT3B0aW9ucyIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJ0b29sdGlwT3B0cyIsInRvb2x0aXAiLCJUb29sdGlwIiwiem9vbU9wdHMiLCJtb3VzZUhhbmRsZXIiLCJNb3VzZUhhbmRsZXIiLCJ6b29tIiwiem9vbUJydXNoIiwiWm9vbSIsIm9uWm9vbSIsIm9uWFpvb20iLCJvblkxWm9vbSIsIm9uWTJab29tIiwic2VyaWVzIiwiVGltZVNlcmllcyIsImxlZ2VuZCIsImxlZ2VuZHMiLCJUaW1lU2VyaWVzTGVnZW5kIiwibGVnZW5kUHJlZml4IiwiZGlzYWJsZVNlcmllc1RvZ2dsZSIsIm9uTGVnZW5kQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsInJlU2NhbGVZQXhpcyIsImNoYXJ0UmVzcG9uc2l2ZSIsInRyaWdnZXJNb3VzZUFjdGlvbiIsInRpbWVEaWZmIiwiZ2V0VGltZSIsIm9uQ29tcGxldGUiLCJheGlzU3BlY2lmaWVyIiwidGlja1ZhbEFyciIsImRpZmZWYWwiLCJyYW5nZVZhbCIsInlNYXgiLCJhcHBseVkxQXhpcyIsImFwcGx5WTJBeGlzIiwibW9kaWZ5QXhpc1Byb3BzIiwicmVTY2FsZUF4aXMiLCJyZXF1aXJlZFdpZHRoIiwiY2xhc3MiLCJtYXhUZXh0IiwiZHVtbXlHIiwic3ZnIiwidGlja3NBcnIiLCJzZWxlY3QiLCJlYWNoIiwidGlja0h0bWwiLCJkYXRhIiwiZW50ZXIiLCJTdHJpbmciLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyb3VuZCIsIllfQVhJU19TUEFDRSIsImNoYXJ0RnVsbFNwYWNlIiwid2lkdGgiLCJDaGFydCIsImRhdGFPcHRpb25zIiwiY29uc3RydWN0Q2hhcnREYXRhIiwiY29uc3RydWN0WEF4aXNJbmZvIiwiY29uc3RydWN0UGxvdEluZm8iLCJjb25zdHJ1Y3RZQXhpc0luZm8iLCJlcnIiLCJvbkVycm9yIiwicmVzSnNvbiIsInNlcmllc0RhdGEiLCJ0aW1lc2VyaWVzIiwiY29sdW1ucyIsInZhbHVlcyIsInZhbGlkSlNPTlR5cGUiLCJ0aW1lU3RhbXBJbmRleCIsImZpcnN0VGltZSIsImlzRGF0ZSIsInN0YXJ0IiwiZm9yRWFjaCIsImdldERhdGVGcm9tRXBvYyIsImNoYXJ0RGF0YSIsImRhdGFJbmRleCIsImVhY2hQbG90U2V0IiwicGxvdFNldCIsInBsb3RJbmZvIiwiZmluZEVhY2hQbG90UmFuZ2UiLCJrZXkiLCJtaW4iLCJtYXgiLCJtaW5WYWwiLCJtYXhWYWwiLCJzdGFjayIsInBsb3QiLCJlYWNoUGxvdCIsIkluZmluaXR5IiwicGxvdERhdGEiLCJ2YWx1ZVJhbmdlIiwidmFsRGF0YSIsIm1lbWJlckFyciIsInN0YWNrT3JkZXJNZW1iZXJzIiwic3VtIiwibWVtYmVyIiwibmFtZSIsImFsbE1heCIsImFsbE1heDIiLCJwbG90QXhpcyIsImFsbE1pbiIsImFsbE1pbjIiLCJ5TWluIiwicmVkdWNlIiwiYSIsImIiLCJpbmQiLCJkYXRhQ29sb3JBcnIiLCJjb2xvciIsInlMZWZ0IiwieVJpZ2h0IiwicmVmaW5lTmFtZSIsInJlZmluZVN0cmluZyIsImlzQm9vbGVhbiIsImJhck9yZGVyTWVtYmVycyIsInJlZ2lzdGVyRm4iLCJtb3VzZUJydXNoIiwidG9wIiwiaXNUb3VjaFNjcmVlbiIsImNhbGxiYWNrIiwiZnVuIiwiTGluZSIsImxpbmVEYXRhIiwieUF4aXNUYXJnZXQiLCJ4QXhpc1RhcmdldCIsIngiLCJpbmRleE9mIiwieSIsImxpbmUiLCJkZWZpbmVkIiwibGluZVRhZyIsImNsaXBFbGVtZW50IiwibGluZVdpZHRoIiwic2VyaWVzTmFtZSIsIlN0YWNrQXJlYSIsInN0YWNrRGF0YSIsInN0YWNrT3JkZXJJbmRleCIsImZpbHRlciIsImVsZSIsIm1hcCIsImQzU3RhY2siLCJhcmVhIiwieTAiLCJ5MSIsImtleXMiLCJvcmRlciIsInN0YWNrT3JkZXJOb25lIiwib2Zmc2V0Iiwic3RhY2tPZmZzZXROb25lIiwic3RhY2tWaXNpYmxlT3JkZXIiLCJzdGFja0xheWVyIiwic3RhY2tNZW1iZXIiLCJwbG90U2VyaWVzIiwiaXNBcnJheSIsIlNlcmllcyIsIlRpbWVTZXJpZXNUb29sdGlwIiwiY3Jvc3NIYWlycyIsImVuYWJsZSIsImZvcm1hdCIsInRvb2xUaXBEaXYiLCJUT09MVElQX1RPUF9CVUZGRVIiLCJyZWdpc3RlciIsInhTY2FsZSIsImRhdGVJbmRleCIsImRhdGFTZXQiLCJiaXNlY3REYXRlIiwiYmlzZWN0b3IiLCJtb3VzZUV2dCIsInhNb3VzZSIsImQzTW91c2UiLCJ5TW91c2UiLCJ4VmFsIiwiaW52ZXJ0IiwiZm91bmQiLCJkQmVmb3JlIiwiZFByZXYiLCJkRm91bmQiLCJ0b29sVGlwRGF0YSIsImRhdGFQYXJzZUxlbiIsInZpc2libGVEYXRhSW5kZXgiLCJwbCIsIm11bHRpQXJyTWFwIiwiZFNldCIsImluZGV4Iiwic29ydCIsIm1heEluZCIsIm1wIiwiYXJyU2V0IiwiZGF0ZUludFJhbmdlIiwiYWJzIiwiaG92ZXIiLCJldmVudE5hbWUiLCJvbiIsImhpZGUiLCJ4UG9zIiwieVBvcyIsImRpc3BsYXlEYXRhIiwic2hvd0hpZGUiLCJwZXJjZW50YWdlRGlmZiIsImJveCIsImVsZW1lbnRPZmZzZXQiLCJyb290UG9zIiwiaGVpZ2h0IiwiaHRtbCIsInlTY2FsZUxlZnQiLCJ5U2NhbGVSaWdodCIsImJydXNoT3ZlcmxheSIsImJydXNoWCIsImV4dGVudCIsImJydXNoWERpdiIsImQzRXZlbnQiLCJzZWxlY3Rpb24iLCJkMCIsImQxIiwibW92ZSIsImJydXNoWUxlZnQiLCJicnVzaFkiLCJicnVzaFlMZWZ0RGl2IiwiYnJ1c2hZUmlnaHQiLCJicnVzaFlSaWdodERpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQWFDLElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0EsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCQyxpQkFBVyxFQURhO0FBRXhCQyxnQkFBVSxHQUZjO0FBR3hCQyxjQUFRLE1BSGdCO0FBSXhCQyxhQUFPLEVBSmlCO0FBS3hCQyxZQUFNLEVBTGtCO0FBTXhCQyxrQkFBWSxDQUFDLENBQUQsRUFBSSxJQUFKLENBTlk7QUFPeEJDLG1CQUFhLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FQVztBQVF4QkMsaUJBQVcsRUFSYTtBQVN4QkMsaUJBQVcsSUFUYTtBQVV4QkMsa0JBQVksSUFWWTtBQVd4QkMs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QUksS0FBS3dQLGNBQVQsRUFBeUI7QUFDdkIsYUFBS0EsY0FBTCxDQUFvQmxRLElBQXBCLENBQXlCLEtBQUtpUSxXQUFMLENBQWlCSixJQUExQyxFQUFnRCxJQUFoRDtBQUNBLGFBQUtLLGNBQUwsQ0FBb0J4UCxNQUFwQjtBQUNEO0FBQ0QsV0FBS3RGLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUF6TStCdUYsOEQ7O0FBQWJrQyxtRSIsImZpbGUiOiJ0aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtcbiAgYXhpc0JvdHRvbSwgYXhpc1RvcCwgYXhpc0xlZnQsIGF4aXNSaWdodCxcbiAgc2NhbGVCYW5kLCBzY2FsZUxpbmVhciwgc2NhbGVUaW1lXG59IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2VtcHR5Rm4sIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCB0cnVuY2F0ZVRleHR9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHVuaXQ6ICcnLFxuICAgICAgcmFuZ2VTY2FsZTogWzAsIDEwMDBdLFxuICAgICAgZG9tYWluU2NhbGU6IFswLCAxMDBdLFxuICAgICAgc2NhbGVUeXBlOiAnJyxcbiAgICAgIGF4aXNDbGFtcDogdHJ1ZSxcbiAgICAgIHRpY2tOdW1iZXI6IG51bGwsXG4gICAgICByb3RhdGVUZXh0OiBmYWxzZSxcbiAgICAgIHRleHRMaW1pdDogOCxcbiAgICAgIHRpY2tGb3JtYXR0ZXI6IGZhbHNlLCAvLyBVc2UgZDMgdGlja0Zvcm1hdHRlclxuICAgICAgc2hvd0dyaWRMaW5lczogZmFsc2UsXG4gICAgICB0aWNrUGFkZGluZzogY29uc3RhbnRzLlRJQ0tfUEFERElORyxcbiAgICAgIHNjYWxlUGFkZGluZzogY29uc3RhbnRzLlNDQUxFX1BBRERJTkcsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICAvLyBDcmVhdGUgQXhpcyBhbmQgU2NhbGUgYmFzZWQgb24gaW5wdXQgb3B0aW9uc1xuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgICBpZiAodGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZVRpbWUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNCb3R0b20oKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzVG9wKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCkpXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBIb2xkcyBhbGwgdGljayB2YWx1ZXMgdGhhdCBheGlzIHNob3dzXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzTGVmdCgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1JpZ2h0KClcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoMClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpKSB7XG4gICAgICAgIC8vIElmIGV4dGVybmFsIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgbW9kaWZ5IGZvcm1hdHRlciB0byBwb3B1bGF0ZSB0aWNrVmFsdWVzXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRm9ybWF0dGVyID0gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXJcbiAgICAgICAgdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgc2VsZi50aWNrVmFsdWVzLnVuc2hpZnQodmFsKVxuICAgICAgICAgIHJldHVybiBleHRlcm5hbEZvcm1hdHRlcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnRpY2tQYWRkaW5nID4gMCkge1xuICAgICAgdGhpcy5heGlzLnRpY2tQYWRkaW5nKHRoaXMub3B0cy50aWNrUGFkZGluZylcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBeGlzUHJvcHMgKG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBvcHRzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgwLCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0fSlgXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGB2Yy1heGlzIHZjLWF4aXMtJHt0aGlzLm9wdHMub3JpZW50fSB2Yy1heGlzLSR7dGhpcy5vcHRzLmNsYXNzTmFtZX1gKVxuXG5cbiAgICAvLyBJZiBubyBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIGF4aXMgdXNlcyBkMyBkZWZhdWx0IGZvcm1hdHRlclxuICAgIGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpICYmIHRoaXMuYXhpcy50aWNrRm9ybWF0KHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKVxuXG4gICAgLy8gQWRkIExhYmVsIHRvIEF4aXNcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnID0gdGhpcy5heGlzVGFnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzLWxhYmVsJylcbiAgICAgICAgLnRleHQodGhpcy5vcHRzLmxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIC8vIElGIG5vdCB2aXNpYmxlLCBEb250IHNob3cgdGhlIGF4aXMsIGJ1dCBzdGlsbCBzY2FsZSBhbmQgcGxvdCBvbiBncmFwaFpvbmUsIHNvIHRoYXQgYWxsIHNlcmllcyBjYW4gYmUgcGxvdHRlZFxuICAgICF0aGlzLm9wdHMudmlzaWJsZSAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgZ3JhcGggQXhpcyBiYXNlZCBvbiBuZXcgd2lkdGggYW5kIG1vZGlmeSByYW5nZSwgZG9tYWluIGFuZCB0aWNrc1xuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy5vcHRzLnJhbmdlU2NhbGUgPSBbMCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhdXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG5cbiAgICAvLyBQb3NpdGlvbiBsYWJlbCwgc2NhbGUsIHRpY2tzLCBheGlzIGJhc2VkIG9uIGNoYXJ0IHdpZHRoXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgbGV0IHhUcmFucyA9IDBcbiAgICAgIGxldCB5VHJhbnMgPSAwXG4gICAgICBsZXQgcm90YXRlID0gMFxuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHhUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyAyKVxuICAgICAgICB5VHJhbnMgPSBjb25zdGFudHMuWF9BWElTX0xBQkVMX1lcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUIHx8IHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICAgIHhUcmFucyA9IC0odGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KSArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gMjcwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeFRyYW5zID0gdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gOTBcbiAgICAgICAgfVxuICAgICAgICB5VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt4VHJhbnN9LCR7eVRyYW5zfSkgcm90YXRlKCR7cm90YXRlfSlgKVxuICAgIH1cblxuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBsZXQgZG9tYWluU2NhbGUgPSBbdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdLCB0aGlzLm9wdHMuZG9tYWluU2NhbGVbdGhpcy5vcHRzLmRvbWFpblNjYWxlLmxlbmd0aCAtIDFdXVxuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgZG9tYWluU2NhbGUgPSB0aGlzLm9wdHMuZG9tYWluU2NhbGVcbiAgICAgIHRoaXMuc2NhbGVcbiAgICAgICAgLnBhZGRpbmcodGhpcy5vcHRzLnNjYWxlUGFkZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRzLmF4aXNDbGFtcCAmJiB0aGlzLnNjYWxlLmNsYW1wKCkgLy8gQ2xhbXBzIG91dHNpZGUgcmFuZ2UgdmFsdWUgd2l0aGluIHNwZWN0aWZlZCByYW5nZSBhbmQgZG9tYWluXG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZS5yYW5nZSh0aGlzLm9wdHMucmFuZ2VTY2FsZSlcbiAgICAgIC5kb21haW4oZG9tYWluU2NhbGUpXG5cbiAgICB0aGlzLmF4aXMuc2NhbGUodGhpcy5zY2FsZSlcblxuICAgIGlmIChpc051bWJlcih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIGxldCB0aWNrVmFsID0gdGhpcy5vcHRzLnRpY2tOdW1iZXJcbiAgICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4JyAmJiB0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgLy8gbW9kaWZ5IHh0aWNrIHRvIGRpc3BsYXkgbGVzcyB0aWNrcyBvbiBsb3dlciBjaGFydCB3aWR0aCBvciBoYXMgbGVzcyBkYXlzXG4gICAgICAgIGNvbnN0IG5ld1RpY2sgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gNjApXG4gICAgICAgIGNvbnN0IGRheUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpICsgMVxuICAgICAgICBpZiAoZGF5TGVuZ3RoID4gMiAmJiBkYXlMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IGRheUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWludXRlTGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDEwMDApKVxuICAgICAgICBpZiAobWludXRlTGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBtaW51dGVMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdUaWNrIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBuZXdUaWNrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5heGlzLnRpY2tzKHRpY2tWYWwpXG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgdGhpcy5heGlzLnRpY2tzKHRoaXMub3B0cy50aWNrTnVtYmVyKCkpXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyICYmIHRoaXMuYXhpc1RhZy5hdHRyKCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybUF0dHIpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgJiYgdGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZy5jYWxsKHRoaXMuYXhpcylcblxuXG4gICAgY29uc3QgbGltaXRUZXh0ID0gdGhpcy5vcHRzLnRleHRMaW1pdFxuICAgIGNvbnN0IHRpY2tGbXQgPSBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSA/IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyIDogZW1wdHlGblxuXG4gICAgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAnc2xhbnQnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ3knLCAnOCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctMS4wZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3gnLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MCknKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlbW92ZSBBeGlzIEluc3RhbmNlXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5yZW1vdmUoKVxuICAgIHRoaXMuc2NhbGUgPSBudWxsXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IEF4aXMgZnJvbSAnQC9heGlzJ1xuaW1wb3J0IHthZGREZWZhdWx0VFNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCBCYXNpY1RTUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9UaW1lU2VyaWVzVG9vbHRpcCdcbmltcG9ydCBNb3VzZUhhbmRsZXIgZnJvbSAnQC9tb3VzZS1oYW5kbGVyJ1xuaW1wb3J0IFpvb20gZnJvbSAnQC96b29tJ1xuaW1wb3J0IFRpbWVTZXJpZXNMZWdlbmQgZnJvbSAnQC9sZWdlbmQvVGltZVNlcmllc0xlZ2VuZCdcbmltcG9ydCBUaW1lU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1RpbWVTZXJpZXMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY1RTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydEF4aXNQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBBZGQgZGVmYXVsdCBvcHRpb25zIHRvIGNoYXJ0XG4gICAgYWRkRGVmYXVsdFRTT3B0aW9ucyh0aGlzLm9wdGlvbnMpXG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcbiAgICBsZXQgYXhpc09wdGlvbnNcbiAgICBjb25zdCB5UmFuZ2UgPSB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgY29uc3QgeVJhbmdlMiA9IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgY29uc3QgdGltZUluZm8gPSB0aGlzLm9wdGlvbnMudGltZUluZm9cblxuICAgIGlmICh5UmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLmxlZnQnKVxuICAgICAgdGhpcy55QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzKVxuICAgIH1cblxuICAgIGlmICh5UmFuZ2UyKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5yaWdodCcpXG4gICAgICB0aGlzLnlBeGlzMiA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ3JpZ2h0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlMixcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmUgKGNoYXJ0IEFQSSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpczIpXG4gICAgfVxuXG4gICAgaWYgKHRpbWVJbmZvLnRpbWVSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueEF4aXMuYm90dG9tJylcbiAgICAgIHRoaXMueEF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3gnLFxuICAgICAgICBvcmllbnQ6ICdib3R0b20nLFxuICAgICAgICByYW5nZVNjYWxlOiBbMCwgdGhpcy5jaGFydFdpZHRoXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHRpbWVJbmZvLnRpbWVSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueEF4aXMpXG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcE9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMudG9vbHRpcCcpXG4gICAgaWYgKHRvb2x0aXBPcHRzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIC4uLnRvb2x0aXBPcHRzXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnRvb2x0aXApXG4gICAgfVxuXG4gICAgY29uc3Qgem9vbU9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMuem9vbScsIHt9KVxuICAgIGlmICgodG9vbHRpcE9wdHMudmlzaWJsZSB8fCB6b29tT3B0cy52aXNpYmxlKSkge1xuICAgICAgdGhpcy5tb3VzZUhhbmRsZXIgPSBuZXcgTW91c2VIYW5kbGVyKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLm1vdXNlSGFuZGxlcilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnpvb20udmlzaWJsZSkge1xuICAgICAgdGhpcy56b29tQnJ1c2ggPSBuZXcgWm9vbSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBvblpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWFpvb20sXG4gICAgICAgIG9uWTFab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblkxWm9vbSxcbiAgICAgICAgb25ZMlpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWTJab29tXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnpvb21CcnVzaClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNlcmllcykge1xuICAgICAgdGhpcy5zZXJpZXMgPSBuZXcgVGltZVNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGVnZW5kLnZpc2libGUpIHtcbiAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBUaW1lU2VyaWVzTGVnZW5kKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIGxlZ2VuZFByZWZpeDogdGhpcy5vcHRpb25zLmxlZ2VuZC5sZWdlbmRQcmVmaXgsXG4gICAgICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUCxcbiAgICAgICAgZGlzYWJsZVNlcmllc1RvZ2dsZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5kaXNhYmxlU2VyaWVzVG9nZ2xlLFxuICAgICAgICBvbkxlZ2VuZENoYW5nZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5vbkxlZ2VuZENoYW5nZVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdUaW1lU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy5jb250YWluZXIuc2VsZWN0KCdzdmcgJyArIHJlU2NhbGVBeGlzW2F4aXNdLmNsYXNzKS5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9IHNlbGVjdCh0aGlzKS50ZXh0KCkgfHwgJydcbiAgICAgICAgaWYgKHRpY2tIdG1sLmxlbmd0aCA+IHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dCA9IHRpY2tIdG1sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgICAuZGF0YShbcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dF0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChTdHJpbmcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gQ29tcHV0ZSByZXF1aXJlZFdpZHRoIGZvciB0aGUgTWF4IHRleHRcbiAgICAgICAgICByZXF1aXJlZFdpZHRoID0gdGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgcmVzcGVjdGl2ZSBtYXJnaW4gdG8gZml0IGluIHRpY2tzIHRleHRcbiAgICAgIHRoaXMubWFyZ2luW2F4aXNdID0gTWF0aC5yb3VuZChyZXF1aXJlZFdpZHRoKSArIGNvbnN0YW50cy5ZX0FYSVNfU1BBQ0VcblxuICAgIH1cbiAgICBkdW1teUcucmVtb3ZlKClcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9ICh0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IHtnZXREYXRlRnJvbUVwb2MsIGdldE9iamVjdCwgcmVmaW5lU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc0Jvb2xlYW59IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVFNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgdGltZXNlcmllcyBKU09OIHBhcnNpbmcgOicsIGVycilcbiAgICAgIHRoaXMub3B0cy5vbkVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKU09OIHJlY2VpdmVkIC0gRXJyb3Igb24gdGltZXNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi50aW1lc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICAvLyBGaW5kIHNlY29uZHMgaW4gdW5pdEFyciB0byBmaW5kIHRoZSB0aW1lU3RhbXBJbmRleFxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gMFxuICAgIGNvbnN0IGZpcnN0VGltZSA9IGRhdGFbMF1bdGltZVN0YW1wSW5kZXhdXG4gICAgaWYgKCF2YWxpZEpTT05UeXBlIHx8ICEoaXNOdW1iZXIoZmlyc3RUaW1lKSB8fCBpc0RhdGUoZmlyc3RUaW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkJylcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQgPSAwXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoc3RhcnQgPiBkW3RpbWVTdGFtcEluZGV4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVGltZSBzZXJpZXMgSlNPTiByZWNlaXZlZDogVGltZXN0YW1wIFZhbHVlcyBtdXN0IGJlIGluIGFzY2VuZGluZyBvcmRlcicpXG4gICAgICB9XG4gICAgICBzdGFydCA9IGRbdGltZVN0YW1wSW5kZXhdXG4gICAgICBkW3RpbWVTdGFtcEluZGV4XSA9IGdldERhdGVGcm9tRXBvYyhkW3RpbWVTdGFtcEluZGV4XSwgdHJ1ZSkgLy8gY29udmVydCBFUE9DIHRvIGRhdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IFtzZXJpZXNEYXRhWzBdW2RhdGFJbmRleF0sIHNlcmllc0RhdGFbKHNlcmllc0RhdGEubGVuZ3RoIC0gMSldW2RhdGFJbmRleF1dXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQgZmluZEVhY2hQbG90UmFuZ2UgPSBmYWxzZVxuICAgIGxldCBrZXlcbiAgICBsZXQgeVJhbmdlID0gbnVsbFxuICAgIGxldCB5UmFuZ2UyID0gbnVsbFxuXG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWF4KSkge1xuICAgICAgICB5UmFuZ2UgPSBbeUF4aXMubWluLCB5QXhpcy5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzMikge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1heCkpIHtcbiAgICAgICAgeVJhbmdlMiA9IFt5QXhpczIubWluLCB5QXhpczIubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHlSYW5nZSBpcyBub3Qgc2V0IGZyb20gZ3JhcGhPcHRpb25zLCB0aGVuIGdvIGluc2lkZVxuICAgIGlmICgoeUF4aXMgJiYgIXlSYW5nZSkgfHwgKHlBeGlzMiAmJiAheVJhbmdlMikpIHtcblxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5taW5WYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5tYXhWYWwpKSB7XG4gICAgICAgICAgZmluZEVhY2hQbG90UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmxlbmd0aCkgfHwgZmluZEVhY2hQbG90UmFuZ2UpIHtcblxuICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAvLyBSZXNldCByYW5nZSBmb3IgZWFjaCBwbG90IGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgY29uc3QgZWFjaFBsb3QgPSBlYWNoUGxvdFNldFtwbG90XVxuICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gSW5maW5pdHlcbiAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IHN0YWNrIHJhbmdlIGZvciBlYWNoIHN0YWNrIGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIGxldCB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgICBjb25zdCBlYWNoUGxvdCA9IGVhY2hQbG90U2V0W3Bsb3RdXG4gICAgICAgICAgICAgIHZhbERhdGEgPSBkW2VhY2hQbG90LmRhdGFJbmRleF1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPCBlYWNoUGxvdC5taW5WYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPiBlYWNoUGxvdC5tYXhWYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgIHN1bSArPSAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPyBkW2VhY2hQbG90U2V0W21lbWJlci5uYW1lXS5kYXRhSW5kZXhdIDogMClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChzdW0gPCBwbG90RGF0YS52YWx1ZVJhbmdlWzBdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW0gPiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0YWNrJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gcGxvdERhdGEudmFsdWVSYW5nZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4pIHtcbiAgICAgICAgICBhbGxNaW4gPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCB0aW1lU3RhbXBJbmRleCA9IGRhdGFPcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICh0aW1lU3RhbXBJbmRleCA9PT0gaW5kKSB7XG4gICAgICAgIGluZCsrXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS5uYW1lID0gcmVmaW5lU3RyaW5nKHBsb3REYXRhLm5hbWUpXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBwbG90RGF0YS5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IHBsb3REYXRhLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgaXNCb29sZWFuKHBsb3REYXRhLnZpc2libGUpICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlID0gcGxvdERhdGEudmlzaWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUhhbmRsZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbiA9IFtdXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hYJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIC8vIHgtWm9vbSBmb3IgY2hhcnQgZG9lc3Qgbm90IGV4aXN0LCBBZGQgcmVjdCBvdmVybGF5IGZvciBicnVzaFhEaXZcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnb3ZlcmxheScpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuICAgIGlmICghdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuem9vbS52aXNpYmxlKSB7XG4gICAgICB0aGlzLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlZ2lzdGVyIChjYWxsYmFjaykge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICB0cmlnZ2VyTW91c2VBY3Rpb24gKCkge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLmZvckVhY2goKGZ1bikgPT4ge1xuICAgICAgZnVuLmNhbGwodGhpcylcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtsaW5lfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgLy8gRG8gbm90IHJlZ2lzdGVyIHRoaXMgY29tcG9uZW50IGluIGNoYXJ0Q29tcG9uZW50c0FyciwgIEFzIHRoZSBzZXJpZXMgY29tcG9uZW50IGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBhbmQgd2lsbCBjYWxsIHRoZSBsaW5lIEFQSXNcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgbGluZURhdGE6IG51bGwsXG4gICAgICB5QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIHhBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0gbGluZSgpXG5cbiAgICBpZiAodGhpcy5vcHRzLnlBeGlzVGFyZ2V0KSB7XG4gICAgICAvLyBGb3Igbm9ybWFsIHNlcmllcywgeUF4aXNUYXJnZXQgcmVmZXJzIHRvIHRoZSBpbmRleCBvZiB0aGlzIHNlcmllcyBpbiBkYXRhIEFyclxuICAgICAgdGhpcy5saW5lXG4gICAgICAgIC5kZWZpbmVkKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSAhPSBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgLy8geEF4aXNUYXJnZXQgcmVmZXJzIHRoZSBpbmRleCBvZiBkYXRlIGluIGRhdGEgQXJyXG4gICAgICAgICAgcmV0dXJuIHgoZFtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB5KGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtbGluZS0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKFt0aGlzLm9wdHMubGluZURhdGFdKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxpbmUtcGxvdCB2Yy1saW5lLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcbiAgICAvLyBBZGRpbmcgdGhlIGxpbmVzIHNlcmllcyBmb3IgZGF0YSB0byBiZSBzaG93blxuICAgIHRoaXMubGluZVRhZy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1saW5lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5saW5lV2lkdGggfHwgJzJweCdcbiAgICAgIH0pXG4gICAgICAuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmxpbmUoZC52YWx1ZXMpIC8vIFZhbHVlcyBhcmUgYXJyYXkgb2YgYXJyYXkgaGF2aW5nIGZvcm1hdCBsaWtlICBbW2RhdGUsIHNlcmllczEsIHNlcmllczIgLi4uLl0sLi4uXVxuICAgICAgfSlcbiAgfVxuXG4gIC8vIFVwZGF0ZSBoYXBwZW5zIHdoZW4gdGhlIGNoYXJ0IGlzIHJlc2l6ZWRcbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gc2VsZi5saW5lKGQudmFsdWVzKVxuICAgIH0pXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZWRyYXcgaXMgY2FsbGVkIHdoZW4gc2VyaWVzIGlzIHRvZ2dsZWQgZnJvbSBMZWdlbmRzXG4gIHJlZHJhdyAoKSB7XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3Qgc2VyaWVzTmFtZSA9IHRoaXMub3B0cy5saW5lRGF0YS5uYW1lXG4gICAgLy8gUmVtb3ZlIGxpbmUgc2VyaWVzXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5yZW1vdmUoKVxuXG4gICAgaWYgKGVhY2hQbG90U2V0ICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdLnZpc2libGUpIHtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuXG4gIH1cbiAgXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5yZW1vdmUoKVxuICAgIHRoaXMubGluZSA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2FyZWEsIHN0YWNrLCBzdGFja09yZGVyTm9uZSwgc3RhY2tPZmZzZXROb25lfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQge2dldE9iamVjdH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2tBcmVhIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgeEF4aXNUYXJnZXQ6ICcnLFxuICAgICAgc3RhY2tEYXRhOiBudWxsLFxuICAgICAgc3RhY2tPcmRlck1lbWJlcnM6IHt9LFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIC8vIERlZmluZSBpbiB3aGF0IG9yZGVyLCBTdGFjayBzZXJpZXMgbmVlZHMgdG8gYmUgcGxvdGVkXG4gICAgdGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sgPSBzdGFjaygpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhKClcbiAgICAgIC54KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiB4KGQuZGF0YVtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgfSlcbiAgICAgIC55MChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkWzBdKSAvLyBJbmRpY2F0ZXMgd2hlcmUgdG8gc3RhcnQgYWxvbmcgWUF4aXNcbiAgICAgIH0pXG4gICAgICAueTEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZFsxXSkgLy8gSW5kaWNhdGVzIHdoZXJlIHRvIGVuZCBhbG9uZyBZQXhpc1xuICAgICAgfSlcblxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcblxuICAgIHRoaXMub3B0cy5kM1N0YWNrLmtleXModGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCkgLy8gc3BlY2lmeSB0aGUgc3RhY2sgc2VyaWVzIG5hbWVzIGluIGFycmF5IGZvcm1hdFxuICAgIHRoaXMub3B0cy5kM1N0YWNrLm9yZGVyKHN0YWNrT3JkZXJOb25lKSAvLyB1c2UgdGhlIGdpdmVuIHNlcmllcyBvcmRlci5cbiAgICB0aGlzLm9wdHMuZDNTdGFjay5vZmZzZXQoc3RhY2tPZmZzZXROb25lKSAvLyBhcHBseSBhIHplcm8gYmFzZWxpbmUgb24gc3RhcnRcblxuICAgIC8vIFNob3cgc3RhY2sgcGxvdCBmb3Igb25seSBzZXJpZXMgd2hpY2ggYXJlIHZpc2libGVcbiAgICBjb25zdCBzdGFja1Zpc2libGVPcmRlciA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuXG4gICAgdGhpcy5zdGFja0xheWVyID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5zZWxlY3RBbGwoJy52Yy1zdGFjay0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKHRoaXMub3B0cy5kM1N0YWNrKHRoaXMub3B0cy5zdGFja0RhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXN0YWNrLXBsb3QgdmMtc3RhY2stJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXIuc2VsZWN0KCdzdmcgY2xpcFBhdGgnKVxuXG4gICAgLy8gUExvdCBzdGFja0xheWVyIGJhc2VkIG9uIGVhY2ggc2VyaWVzIHZpc2libGl0eVxuICAgIHRoaXMuc3RhY2tMYXllci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd2Yy1zdGFjayB2Yy1zdGFjay0nICsgc3RhY2tNZW1iZXIubmFtZVxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W3N0YWNrTWVtYmVyLm5hbWVdLmNvbG9yXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCB0aGlzLmFyZWEpXG5cbiAgfVxuICBcbiAgLy8gVXBkYXRlIHN0YWNrTGF5ZXIgYmFzZWQgb24gY2hhcnQgcmVzaXplXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdkJywgdGhpcy5hcmVhKVxuICB9XG4gIFxuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIC8vIE1vZGlmeSBzdGFja09yZGVyIGFyciBiYXNlZCBvbiB2aXNpYmxlU2VyaWVzXG4gICAgdGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBzdGFjayBzZXJpZXNcbiAgICB0aGlzLnN0YWNrTGF5ZXIgJiYgdGhpcy5zdGFja0xheWVyLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBzdGFja09yZGVyTWVtYmVyc1xuICAgIHRoaXMuZHJhdygpXG4gIH1cbiAgXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuc3RhY2tMYXllci5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG4gIFxuICByZW1vdmUgKCkge1xuICAgIC8vICB0aGlzLnN0YWNrQXJlYVBhdGgucmVtb3ZlKCk7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gbnVsbFxuICAgIHRoaXMuYXJlYSA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQge2lzQXJyYXl9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgTGluZSBmcm9tICdAL3Nlcmllcy9MaW5lJ1xuaW1wb3J0IFN0YWNrQXJlYSBmcm9tICdAL3Nlcmllcy9TdGFja0FyZWEnXG5pbXBvcnQgU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1NlcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGEgLy8gQWNjZXB0IGVpdGhlciB0aW1lc2VyaWVzIG9yIHBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICAvLyBDcmVhdGUgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIGlucHV0IG9wdGlvbnMgYW5kIGVhY2ggcGxvdCBpbmZvXG4gICAgaXNBcnJheShwbG90SW5mby5zdGFjaykgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaCgocGxvdERhdGEpID0+IHtcbiAgICAgIHRoaXMucGxvdFNlcmllcy5wdXNoKG5ldyBTdGFja0FyZWEoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHN0YWNrRGF0YTogZGF0YSxcbiAgICAgICAgc3RhY2tPcmRlck1lbWJlcnM6IHBsb3REYXRhLnN0YWNrT3JkZXJNZW1iZXJzXG4gICAgICB9KSlcbiAgICB9KVxuXG4gICAgaXNBcnJheShwbG90SW5mby5saW5lKSAmJiBwbG90SW5mby5saW5lLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgTGluZSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeUF4aXNUYXJnZXQ6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmRhdGFJbmRleCxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgdmlzaWJsZTogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSxcbiAgICAgICAgbGluZURhdGE6IHtcbiAgICAgICAgICBuYW1lOiBwbG90RGF0YS5uYW1lLFxuICAgICAgICAgIGNvbG9yOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5jb2xvcixcbiAgICAgICAgICBsaW5lV2lkdGg6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmxpbmVXaWR0aCxcbiAgICAgICAgICB2YWx1ZXM6IGRhdGFcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBnZXRPYmplY3QsIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2Jpc2VjdG9yLCBkM01vdXNlfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzVG9vbHRpcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjcm9zc0hhaXJzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgLy8gUHJvdmlkZSBiYXNpYyBmb3JtYXR0ZXIgdG8gZGlzcGxheSBob3ZlciBkYXRhXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMub3B0cy5mb3JtYXQpKSB7XG4gICAgICB0aGlzLm9wdHMuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4gVG9vbFRpcCBUZXh0IDogPC9zcGFuPjxici8+PHNwYW4+JHtKU09OLnN0cmluZ2lmeShkKX08L3NwYW4+YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMuY3Jvc3NIYWlycyA9IGZhbHNlXG4gICAgdGhpcy50b29sVGlwRGl2ID0gdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lclxuICAgICAgLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy10b29sdGlwLWRpc3BsYXkgJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBpZiAodGhpcy5vcHRzLmNyb3NzSGFpcnMuZW5hYmxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNyb3NzSGFpcnMgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1saW5lJylcbiAgICAgIHRoaXMuY3Jvc3NIYWlycy5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5LC05OTkpJylcbiAgICAgICAgLmF0dHIoJ3gxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAuYXR0cigneTEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCAtIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIpXG4gICAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ3kyJywgKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wKSlcblxuICAgIH1cblxuICAgIHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIucmVnaXN0ZXIoKCkgPT4ge1xuICAgICAgLy8gUmVnaXN0ZXIgaG92ZXIgYW5kIGhpZGUvc2hvdyB0b29saXAgZXZlbnRzXG4gICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICAgIGNvbnN0IG1vdXNlSGFuZGxlciA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXJcbiAgICAgIGNvbnN0IGRhdGVJbmRleCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgICAgY29uc3QgZGF0YVNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YVxuICAgICAgLy8gRmluZCBuZWFyZXN0IGV4aXN0aW5nIGRhdGUgYW1vbmcgYXJyYXkgb2Ygc29ydGVkIGRhdGVcbiAgICAgIGNvbnN0IGJpc2VjdERhdGUgPSBiaXNlY3RvcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFtkYXRlSW5kZXhdXG4gICAgICB9KS5sZWZ0XG5cbiAgICAgIGNvbnN0IG1vdXNlRXZ0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gT24gbW91c2Vtb3ZlIG9mIHggb3ZlcmxheSwgZmluZCB4LHkgdmFsdWVzIGFuZCB1cGRhdGUgdG9vbHRpcFxuICAgICAgICBjb25zdCB4TW91c2UgPSBkM01vdXNlKHRoaXMpWzBdXG4gICAgICAgIGNvbnN0IHlNb3VzZSA9IGQzTW91c2UodGhpcylbMV1cbiAgICAgICAgY29uc3QgeFZhbCA9IHhTY2FsZS5pbnZlcnQoeE1vdXNlKSAvLyBmaW5kIHhBeGlzIGRhdGUgZm9yIG1vdXNlIHBvc2l0aW9uXG5cbiAgICAgICAgLy8gRG8gYmluYXJ5IHNlYXJjaCBvZiBkYXRhIHNldCBmcm9tIDJuZCBkYXRhIHNldCB0byBlbmRcbiAgICAgICAgY29uc3QgZm91bmQgPSBiaXNlY3REYXRlKGRhdGFTZXQsIHhWYWwsIDEpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZEJlZm9yZSA9IGRhdGFTZXRbZm91bmQgLSAyXVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRQcmV2ID0gZGF0YVNldFtmb3VuZCAtIDFdXG4gICAgICAgIC8vIGdldCBiZWZvcmUgZmluZCBkYXRhU2V0XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRGb3VuZCA9IGRhdGFTZXRbZm91bmRdIHx8IGRQcmV2IC8vIGdldCBmaW5kIGRhdGFTZXRcblxuICAgICAgICBsZXQgdG9vbFRpcERhdGEgPSBkUHJldlxuICAgICAgICBpZiAoZGF0YVNldC5sZW5ndGggPiBzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkge1xuICAgICAgICAgIC8vIE1vcmUgdGhhbiBvbmUgdGljayByZXNpZGUgb24gZWFjaCBwaXhlbC4gSGVuY2UgZmluZCB0aWNrIGhhdmluZyBtYXggdmFsdWUgYW1vbmcgdGhlIGRhdGFzZXRcbiAgICAgICAgICBjb25zdCBkYXRhUGFyc2VMZW4gPSBNYXRoLmZsb29yKGRhdGFTZXQubGVuZ3RoIC8gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpICsgMVxuXG4gICAgICAgICAgY29uc3QgdmlzaWJsZURhdGFJbmRleCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGNvbnN0IHBsIGluIHNlbGYub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsb3QgPSBzZWxmLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0W3BsXVxuICAgICAgICAgICAgaWYgKHBsb3QudmlzaWJsZSkge1xuICAgICAgICAgICAgICB2aXNpYmxlRGF0YUluZGV4W3Bsb3QuZGF0YUluZGV4XSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBtdWx0aUFyck1hcCA9IHt9XG4gICAgICAgICAgLy8gRG8gU2NhbiBmcm9tIHJhbmdlIC1kYXRhUGFyc2VMZW4gdG8gK2RhdGFQYXJzZUxlbiBiZXR3ZWVuIGZvdW5kIGRhdGEgaW5kZXhcbiAgICAgICAgICBmb3IgKGxldCBpbmQgPSAoZm91bmQgLSBkYXRhUGFyc2VMZW4pOyBpbmQgPCAoZm91bmQgKyBkYXRhUGFyc2VMZW4pOyBpbmQrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFTZXRbaW5kXSkge1xuICAgICAgICAgICAgICBjb25zdCBkU2V0ID0gZGF0YVNldFtpbmRdLmZpbHRlcihmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlRGF0YUluZGV4W2luZGV4XVxuICAgICAgICAgICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChkU2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG11bHRpQXJyTWFwW2luZF0gPSBkU2V0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG1heEluZFxuICAgICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICAgICAgICBmb3IgKGNvbnN0IG1wIGluIG11bHRpQXJyTWFwKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJTZXQgPSBtdWx0aUFyck1hcFttcF1cbiAgICAgICAgICAgIGlmIChtYXhWYWwgPCBhcnJTZXRbMF0pIHtcbiAgICAgICAgICAgICAgbWF4VmFsID0gYXJyU2V0WzBdXG4gICAgICAgICAgICAgIG1heEluZCA9IG1wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSBkYXRhU2V0W21heEluZF0gfHwgZEZvdW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRmluZCBuZWFyZXN0IHJlYWNoaW5nIGRhdGUgYW1vbmcgYWJvdmUgdHdvIGRhdGVzXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSAoeFZhbCAtIGRQcmV2W2RhdGVJbmRleF0pID4gKGRGb3VuZFtkYXRlSW5kZXhdIC0geFZhbCkgPyBkRm91bmQgOiBkUHJldlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGVJbnRSYW5nZSA9IGRGb3VuZFtkYXRlSW5kZXhdIC0gZFByZXZbZGF0ZUluZGV4XVxuXG4gICAgICAgIGlmICghZGF0ZUludFJhbmdlICYmIGRCZWZvcmUpIHtcbiAgICAgICAgICBkYXRlSW50UmFuZ2UgPSBkUHJldltkYXRlSW5kZXhdIC0gZEJlZm9yZVtkYXRlSW5kZXhdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZUludFJhbmdlIDwgTWF0aC5hYnMoZEZvdW5kW2RhdGVJbmRleF0gLSB4VmFsKSkge1xuICAgICAgICAgIC8vIElmIGZvdW5kIGlzIG91dHNpZGUgZGF0YSBpbnRlcnZhbCByYW5nZSwgVGhlbiBkYXRhIGRvZXNudCBleGlzdCBmb3IgdGhhdCB0aWNrLlxuICAgICAgICAgIHRvb2xUaXBEYXRhID0gW11cbiAgICAgICAgICB0b29sVGlwRGF0YVtkYXRlSW5kZXhdID0geFZhbFxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5ob3Zlcih4TW91c2UsIHlNb3VzZSwgdG9vbFRpcERhdGEpXG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE5hbWUgPSAnbW91c2Vtb3ZlJ1xuICAgICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgZXZlbnROYW1lID0gJ2NsaWNrJ1xuICAgICAgfVxuICAgICAgbW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLm9uKGV2ZW50TmFtZSwgbW91c2VFdnQpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgICAgbW91c2VIYW5kbGVyLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9KVxuXG4gICAgfSlcbiAgfVxuXG4gIGhvdmVyICh4UG9zLCB5UG9zLCBkaXNwbGF5RGF0YSkge1xuICAgIC8vIFVwZGF0ZSBkaXNwbGF5UGFuZWwgYW5kIGxpbmUgYmFzZWQgb24geCBwb3NpdGlvblxuICAgIHRoaXMuY3Jvc3NIYWlycyAmJiB0aGlzLmNyb3NzSGFpcnMuc2VsZWN0KCdsaW5lJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7eFBvc30sMClgKVxuICAgICAgLmF0dHIoJ3gxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3kxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgLSBjb25zdGFudHMuVE9PTFRJUF9UT1BfQlVGRkVSKVxuICAgICAgLmF0dHIoJ3gyJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3kyJywgKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wKSlcbiAgICB0aGlzLnNob3dIaWRlKHRydWUpXG5cbiAgICBsZXQgcGVyY2VudGFnZURpZmYgPSB4UG9zIC8gdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhcblxuICAgIGlmIChwZXJjZW50YWdlRGlmZiA8IDAuMykge1xuICAgICAgcGVyY2VudGFnZURpZmYgPSAwLjJcbiAgICB9XG4gICAgaWYgKHBlcmNlbnRhZ2VEaWZmID4gMC43KSB7XG4gICAgICBwZXJjZW50YWdlRGlmZiA9IDAuOTVcbiAgICB9XG5cbiAgICBjb25zdCBib3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMudG9vbFRpcERpdilcbiAgICBjb25zdCByb290UG9zID0gZWxlbWVudE9mZnNldCh0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLnJvdW5kKHJvb3RQb3MubGVmdCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHhQb3MgLSBib3gud2lkdGggKiBwZXJjZW50YWdlRGlmZikgKyAncHgnXG4gICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZChyb290UG9zLnRvcCAtIGJveC5oZWlnaHQgLSA1ICsgY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUiAqIDIpICsgJ3B4J1xuXG5cbiAgICB0aGlzLnRvb2xUaXBEaXZcbiAgICAgIC5zdHlsZSgnbGVmdCcsIGxlZnQpXG4gICAgICAuc3R5bGUoJ3RvcCcsIHRvcClcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgLmh0bWwodGhpcy5vcHRzLmZvcm1hdC5jYWxsKHRoaXMub3B0cy5jaGFydCwgZGlzcGxheURhdGEpKSAvLyBVc2VkIGZvcm1hdC5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG5cbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMudG9vbFRpcERpdiAmJiB0aGlzLnRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2dldE9iamVjdCwgaXNGdW5jdGlvbiwgZW1wdHlGbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7YnJ1c2hYLCBicnVzaFksIGQzRXZlbnR9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20gZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgb25ab29tOiBlbXB0eUZuLFxuICAgICAgb25ZMVpvb206IGVtcHR5Rm4sXG4gICAgICBvblkyWm9vbTogZW1wdHlGblxuICAgIH0sIG9wdHMpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlTGVmdCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlUmlnaHQgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJykgfHwgZmFsc2VcbiAgICBsZXQgYnJ1c2hPdmVybGF5ID0gbnVsbFxuICAgIGlmICh4U2NhbGUpIHtcbiAgICAgIC8vIENyZWF0ZSB4IGF4aXMgYnJ1c2ggZm9yIFpvb20gb3BlcmF0aW9uXG4gICAgICB0aGlzLmJydXNoWCA9IGJydXNoWCgpXG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgLy8gVXNlIHRoZSBzYW1lIG1vdXNlQnJ1c2ggZm9yIGJvdGggeEJydXNoIGFuZCB0b29sdGlwXG4gICAgICB0aGlzLmJydXNoWERpdiA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIubW91c2VCcnVzaFxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWClcblxuICAgICAgYnJ1c2hPdmVybGF5ID0gdGhpcy5icnVzaFhEaXYuc2VsZWN0QWxsKCdyZWN0Lm92ZXJsYXknKVxuXG4gICAgICAvLyBDYWxsIHRoaXMgZXZlbnQgd2hlbiB4QXhpcyBicnVzaCBpcyBlbmRlZFxuICAgICAgdGhpcy5icnVzaFgub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeFNjYWxlLmludmVydClcbiAgICAgICAgLy8gZmluZCB4MSBhbmQgeDJcbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZCkgLy8gcm91bmQgYm90aCB2YWx1ZXNcblxuICAgICAgICAvLyBjbGVhciBCcnVzaFxuICAgICAgICBzZWxmLmJydXNoWERpdi5jYWxsKHNlbGYuYnJ1c2hYLm1vdmUsIG51bGwpXG4gICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2F1dG8nKVxuXG4gICAgICAgIC8vIGQxID0gZDFcbiAgICAgICAgLy8gICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgLy8gICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC54QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFggYXhpcyB1cG9uIGhvcml6b250YWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBzZWxmLm9wdHMgJiYgc2VsZi5vcHRzLm9uWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIGxlZnQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1sZWZ0JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geUF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlMZWZ0RGl2LmNhbGwoc2VsZi5icnVzaFlMZWZ0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlTGVmdC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFkgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTFab29tKSAmJiBzZWxmLm9wdHMub25ZMVpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCByaWdodCBzY2FsZSBvcGVyYXRpb25cbiAgICBpZiAoeVNjYWxlUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hZLXJpZ2h0JylcblxuICAgICAgdGhpcy5icnVzaFlSaWdodC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlSaWdodERpdi5jYWxsKHNlbGYuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh5U2NhbGVSaWdodC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZMiBheGlzIHVwb24gdmVydGljYWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ZMlpvb20pICYmIHNlbGYub3B0cy5vblkyWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIGJydXNoT3ZlcmxheSAmJiB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gbW91c2UgaXMgY2xpY2tlZCBvciBkb3duLCBlbmFibGUgem9vbSBicnVzaCBhbmQgaXRzIG1vdXNlIGN1cnNvclxuICAgICAgYnJ1c2hPdmVybGF5XG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2NvbC1yZXNpemUnKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2F1dG8nKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLmJydXNoWCkge1xuICAgICAgdGhpcy5icnVzaFguZXh0ZW50KFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZTGVmdClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAoY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQpXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZTGVmdERpdiAmJiB0aGlzLmJydXNoWUxlZnREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgJiYgdGhpcy5icnVzaFlSaWdodERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFhEaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWUxlZnREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5jYWxsKHRoaXMuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LmNhbGwodGhpcy5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9