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
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/each */ "../node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_9__);











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
              lodash_each__WEBPACK_IMPORTED_MODULE_9___default()(eachPlotSet, function (eachPlot) {
                eachPlot.minVal = Infinity;
                eachPlot.maxVal = -Infinity;
              });
            }

            // Reset stack range for each stack for finding min , max
            plotInfo.stack && plotInfo.stack.forEach(function (plotData) {
              plotData.valueRange = [Infinity, -Infinity];
            });

            // Calculate Max and Min for each plots series
            var valData = 0;
            data.forEach(function (d) {
              if (findEachPlotRange) {
                lodash_each__WEBPACK_IMPORTED_MODULE_9___default()(eachPlotSet, function (eachPlot) {
                  valData = d[eachPlot.dataIndex];
                  if (valData < eachPlot.minVal) {
                    eachPlot.minVal = valData;
                  }
                  if (valData > eachPlot.maxVal) {
                    eachPlot.maxVal = valData;
                  }
                });
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/constants */ "./constants.js");













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
        this.crossHairs.append('line').attr('transform', 'translate(-999,-999)').attr('x1', this.opts.chart.margin.left).attr('y1', this.opts.chart.margin.top - _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER).attr('x2', this.opts.chart.margin.left).attr('y2', this.opts.chart.chartHeight + this.opts.chart.margin.top);
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

              Object(lodash__WEBPACK_IMPORTED_MODULE_10__["each"])(self.opts.chart.options.plotSet, function (plot) {
                if (plot.visible) {
                  visibleDataIndex[plot.dataIndex] = true;
                }
              });

              var multiArrMap = {};
              // Do Scan from range -dataParseLen to +dataParseLen between found data index
              for (var ind = found - dataParseLen; ind < found + dataParseLen; ind++) {
                if (dataSet[ind]) {
                  var dSet = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["filter"])(dataSet[ind], function (val, index) {
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
              Object(lodash__WEBPACK_IMPORTED_MODULE_10__["each"])(multiArrMap, function (arrSet, key) {
                if (maxVal < arrSet[0]) {
                  maxVal = arrSet[0];
                  maxInd = key;
                }
              });

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
      this.crossHairs && this.crossHairs.select('line').attr('transform', 'translate(' + xPos + ',0)').attr('x1', this.opts.chart.margin.left).attr('y1', this.opts.chart.margin.top - _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER).attr('x2', this.opts.chart.margin.left).attr('y2', this.opts.chart.chartHeight + this.opts.chart.margin.top);
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
      var top = Math.round(rootPos.top - box.height - 5 + _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER * 2) + 'px';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL21vdXNlLWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvTGluZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TdGFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvVGltZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vdmMvLi96b29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIkF4aXMiLCJvcHRzIiwiY2xhc3NOYW1lIiwicG9zaXRpb24iLCJvcmllbnQiLCJsYWJlbCIsInVuaXQiLCJyYW5nZVNjYWxlIiwiZG9tYWluU2NhbGUiLCJzY2FsZVR5cGUiLCJheGlzQ2xhbXAiLCJ0aWNrTnVtYmVyIiwicm90YXRlVGV4dCIsInRleHRMaW1pdCIsInRpY2tGb3JtYXR0ZXIiLCJzaG93R3JpZExpbmVzIiwidGlja1BhZGRpbmciLCJjb25zdGFudHMiLCJUSUNLX1BBRERJTkciLCJzY2FsZVBhZGRpbmciLCJTQ0FMRV9QQURESU5HIiwidmlzaWJsZSIsImF4aXMiLCJzY2FsZSIsInNjYWxlQmFuZCIsInNjYWxlTGluZWFyIiwiVU5JVFNfVElNRSIsInNjYWxlVGltZSIsIkRJUl9CT1RUT00iLCJheGlzQm90dG9tIiwiRElSX1RPUCIsImF4aXNUb3AiLCJ0aWNrU2l6ZUlubmVyIiwiY2hhcnQiLCJjaGFydEhlaWdodCIsInRpY2tWYWx1ZXMiLCJESVJfTEVGVCIsImF4aXNMZWZ0IiwiRElSX1JJR0hUIiwiYXhpc1JpZ2h0IiwiY2hhcnRXaWR0aCIsImlzRnVuY3Rpb24iLCJleHRlcm5hbEZvcm1hdHRlciIsInZhbCIsInNlbGYiLCJ1bnNoaWZ0IiwidXBkYXRlIiwidHJhbnNmb3JtQXR0ciIsImF4aXNUYWciLCJncmFwaFpvbmUiLCJhcHBlbmQiLCJhdHRyIiwidGlja0Zvcm1hdCIsImF4aXNMYWJlbFRhZyIsInRleHQiLCJjbGFzc2VkIiwieFRyYW5zIiwieVRyYW5zIiwicm90YXRlIiwiTWF0aCIsImZsb29yIiwiWF9BWElTX0xBQkVMX1kiLCJtYXJnaW4iLCJsZWZ0IiwiQlJVU0hZX0JVRkZFUiIsInJpZ2h0IiwibGVuZ3RoIiwicGFkZGluZyIsImNsYW1wIiwicmFuZ2UiLCJkb21haW4iLCJpc051bWJlciIsInRpY2tWYWwiLCJuZXdUaWNrIiwiZGF5TGVuZ3RoIiwibWludXRlTGVuZ3RoIiwidGlja3MiLCJjYWxsIiwibGltaXRUZXh0IiwidGlja0ZtdCIsImVtcHR5Rm4iLCJzZWxlY3RBbGwiLCJzdHlsZSIsImQiLCJpIiwidHJ1bmNhdGVUZXh0Iiwic2hvd0ZsYWciLCJyZW1vdmUiLCJDaGFydENvbXBvbmVudCIsIlRpbWVTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNUU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiaXNPYmplY3QiLCJvcHRpb25zIiwiZGF0YUV4ZWN1dG9yIiwiYWRkRGVmYXVsdFRTT3B0aW9ucyIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJ0b29sdGlwT3B0cyIsInRvb2x0aXAiLCJUb29sdGlwIiwiem9vbU9wdHMiLCJtb3VzZUhhbmRsZXIiLCJNb3VzZUhhbmRsZXIiLCJ6b29tIiwiem9vbUJydXNoIiwiWm9vbSIsIm9uWm9vbSIsIm9uWFpvb20iLCJvblkxWm9vbSIsIm9uWTJab29tIiwic2VyaWVzIiwiVGltZVNlcmllcyIsImxlZ2VuZCIsImxlZ2VuZHMiLCJUaW1lU2VyaWVzTGVnZW5kIiwibGVnZW5kUHJlZml4IiwiZGlzYWJsZVNlcmllc1RvZ2dsZSIsIm9uTGVnZW5kQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsInJlU2NhbGVZQXhpcyIsImNoYXJ0UmVzcG9uc2l2ZSIsInRyaWdnZXJNb3VzZUFjdGlvbiIsInRpbWVEaWZmIiwiZ2V0VGltZSIsIm9uQ29tcGxldGUiLCJheGlzU3BlY2lmaWVyIiwidGlja1ZhbEFyciIsImRpZmZWYWwiLCJyYW5nZVZhbCIsInlNYXgiLCJhcHBseVkxQXhpcyIsImFwcGx5WTJBeGlzIiwibW9kaWZ5QXhpc1Byb3BzIiwicmVTY2FsZUF4aXMiLCJyZXF1aXJlZFdpZHRoIiwiY2xhc3MiLCJtYXhUZXh0IiwiZHVtbXlHIiwic3ZnIiwidGlja3NBcnIiLCJzZWxlY3QiLCJlYWNoIiwidGlja0h0bWwiLCJkYXRhIiwiZW50ZXIiLCJTdHJpbmciLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyb3VuZCIsIllfQVhJU19TUEFDRSIsImNoYXJ0RnVsbFNwYWNlIiwid2lkdGgiLCJDaGFydCIsImRhdGFPcHRpb25zIiwiY29uc3RydWN0Q2hhcnREYXRhIiwiY29uc3RydWN0WEF4aXNJbmZvIiwiY29uc3RydWN0UGxvdEluZm8iLCJjb25zdHJ1Y3RZQXhpc0luZm8iLCJlcnIiLCJvbkVycm9yIiwicmVzSnNvbiIsInNlcmllc0RhdGEiLCJ0aW1lc2VyaWVzIiwiY29sdW1ucyIsInZhbHVlcyIsInZhbGlkSlNPTlR5cGUiLCJ0aW1lU3RhbXBJbmRleCIsImZpcnN0VGltZSIsImlzRGF0ZSIsInN0YXJ0IiwiZm9yRWFjaCIsImdldERhdGVGcm9tRXBvYyIsImNoYXJ0RGF0YSIsImRhdGFJbmRleCIsImVhY2hQbG90U2V0IiwicGxvdFNldCIsInBsb3RJbmZvIiwiZmluZEVhY2hQbG90UmFuZ2UiLCJrZXkiLCJtaW4iLCJtYXgiLCJtaW5WYWwiLCJtYXhWYWwiLCJzdGFjayIsImVhY2hQbG90IiwiSW5maW5pdHkiLCJwbG90RGF0YSIsInZhbHVlUmFuZ2UiLCJ2YWxEYXRhIiwibWVtYmVyQXJyIiwic3RhY2tPcmRlck1lbWJlcnMiLCJzdW0iLCJtZW1iZXIiLCJuYW1lIiwiYWxsTWF4IiwiYWxsTWF4MiIsInBsb3RBeGlzIiwiYWxsTWluIiwiYWxsTWluMiIsInlNaW4iLCJyZWR1Y2UiLCJhIiwiYiIsImluZCIsImRhdGFDb2xvckFyciIsImNvbG9yIiwieUxlZnQiLCJ5UmlnaHQiLCJyZWZpbmVOYW1lIiwicmVmaW5lU3RyaW5nIiwiaXNCb29sZWFuIiwiYmFyT3JkZXJNZW1iZXJzIiwicmVnaXN0ZXJGbiIsIm1vdXNlQnJ1c2giLCJ0b3AiLCJpc1RvdWNoU2NyZWVuIiwiY2FsbGJhY2siLCJmdW4iLCJMaW5lIiwibGluZURhdGEiLCJ5QXhpc1RhcmdldCIsInhBeGlzVGFyZ2V0IiwieCIsImluZGV4T2YiLCJ5IiwibGluZSIsImRlZmluZWQiLCJsaW5lVGFnIiwiY2xpcEVsZW1lbnQiLCJsaW5lV2lkdGgiLCJzZXJpZXNOYW1lIiwiU3RhY2tBcmVhIiwic3RhY2tEYXRhIiwic3RhY2tPcmRlckluZGV4IiwiZmlsdGVyIiwiZWxlIiwibWFwIiwiZDNTdGFjayIsImFyZWEiLCJ5MCIsInkxIiwia2V5cyIsIm9yZGVyIiwic3RhY2tPcmRlck5vbmUiLCJvZmZzZXQiLCJzdGFja09mZnNldE5vbmUiLCJzdGFja1Zpc2libGVPcmRlciIsInN0YWNrTGF5ZXIiLCJzdGFja01lbWJlciIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiU2VyaWVzIiwiVGltZVNlcmllc1Rvb2x0aXAiLCJjcm9zc0hhaXJzIiwiZW5hYmxlIiwiZm9ybWF0IiwidG9vbFRpcERpdiIsIlRPT0xUSVBfVE9QX0JVRkZFUiIsInJlZ2lzdGVyIiwieFNjYWxlIiwiZGF0ZUluZGV4IiwiZGF0YVNldCIsImJpc2VjdERhdGUiLCJiaXNlY3RvciIsIm1vdXNlRXZ0IiwieE1vdXNlIiwiZDNNb3VzZSIsInlNb3VzZSIsInhWYWwiLCJpbnZlcnQiLCJmb3VuZCIsImRCZWZvcmUiLCJkUHJldiIsImRGb3VuZCIsInRvb2xUaXBEYXRhIiwiZGF0YVBhcnNlTGVuIiwidmlzaWJsZURhdGFJbmRleCIsInBsb3QiLCJtdWx0aUFyck1hcCIsImRTZXQiLCJpbmRleCIsInNvcnQiLCJtYXhJbmQiLCJhcnJTZXQiLCJkYXRlSW50UmFuZ2UiLCJhYnMiLCJob3ZlciIsImV2ZW50TmFtZSIsIm9uIiwiaGlkZSIsInhQb3MiLCJ5UG9zIiwiZGlzcGxheURhdGEiLCJzaG93SGlkZSIsInBlcmNlbnRhZ2VEaWZmIiwiYm94IiwiZWxlbWVudE9mZnNldCIsInJvb3RQb3MiLCJoZWlnaHQiLCJodG1sIiwieVNjYWxlTGVmdCIsInlTY2FsZVJpZ2h0IiwiYnJ1c2hPdmVybGF5IiwiYnJ1c2hYIiwiZXh0ZW50IiwiYnJ1c2hYRGl2IiwiZDNFdmVudCIsInNlbGVjdGlvbiIsImQwIiwiZDEiLCJtb3ZlIiwiYnJ1c2hZTGVmdCIsImJydXNoWSIsImJydXNoWUxlZnREaXYiLCJicnVzaFlSaWdodCIsImJydXNoWVJpZ2h0RGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTs7SUFFcUJBLEk7OztBQUNuQixnQkFBYUMsSUFBYixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQSxJQUFMLEdBQVksMkVBQWM7QUFDeEJDLGlCQUFXLEVBRGE7QUFFeEJDLGdCQUFVLEdBRmM7QUFHeEJDLGNBQVEsTUFIZ0I7QUFJeEJDLGFBQU8sRUFKaUI7QUFLeEJDLFlBQU0sRUFMa0I7QUFNeEJDLGtCQUFZLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FOWTtBQU94QkMsbUJBQWEsQ0FBQyxDQUFELEVBQUksR0FBSixDQVBXO0FBUXhCQyxpQkFBVyxFQVJhO0FBU3hCQyxpQkFBVyxJQVRhO0FBVXhCQyxrQkFBWSxJQVZZO0FBV3hCQyxrQkFBWSxLQVhZ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TUFBcEI7QUFDRDtBQUNELFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBek0rQnVGLDhEOztBQUFia0MsbUUiLCJmaWxlIjoidGltZXNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7XG4gIGF4aXNCb3R0b20sIGF4aXNUb3AsIGF4aXNMZWZ0LCBheGlzUmlnaHQsXG4gIHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIHNjYWxlVGltZVxufSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtlbXB0eUZuLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgdHJ1bmNhdGVUZXh0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICBsYWJlbDogJycsXG4gICAgICB1bml0OiAnJyxcbiAgICAgIHJhbmdlU2NhbGU6IFswLCAxMDAwXSxcbiAgICAgIGRvbWFpblNjYWxlOiBbMCwgMTAwXSxcbiAgICAgIHNjYWxlVHlwZTogJycsXG4gICAgICBheGlzQ2xhbXA6IHRydWUsXG4gICAgICB0aWNrTnVtYmVyOiBudWxsLFxuICAgICAgcm90YXRlVGV4dDogZmFsc2UsXG4gICAgICB0ZXh0TGltaXQ6IDgsXG4gICAgICB0aWNrRm9ybWF0dGVyOiBmYWxzZSwgLy8gVXNlIGQzIHRpY2tGb3JtYXR0ZXJcbiAgICAgIHNob3dHcmlkTGluZXM6IGZhbHNlLFxuICAgICAgdGlja1BhZGRpbmc6IGNvbnN0YW50cy5USUNLX1BBRERJTkcsXG4gICAgICBzY2FsZVBhZGRpbmc6IGNvbnN0YW50cy5TQ0FMRV9QQURESU5HLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgLy8gQ3JlYXRlIEF4aXMgYW5kIFNjYWxlIGJhc2VkIG9uIGlucHV0IG9wdGlvbnNcbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUJhbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgaWYgKHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzQm90dG9tKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1RvcCgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpKVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gSG9sZHMgYWxsIHRpY2sgdmFsdWVzIHRoYXQgYXhpcyBzaG93c1xuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc0xlZnQoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNSaWdodCgpXG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKDApXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSkge1xuICAgICAgICAvLyBJZiBleHRlcm5hbCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIG1vZGlmeSBmb3JtYXR0ZXIgdG8gcG9wdWxhdGUgdGlja1ZhbHVlc1xuICAgICAgICBjb25zdCBleHRlcm5hbEZvcm1hdHRlciA9IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyXG4gICAgICAgIHRoaXMub3B0cy50aWNrRm9ybWF0dGVyID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHNlbGYudGlja1ZhbHVlcy51bnNoaWZ0KHZhbClcbiAgICAgICAgICByZXR1cm4gZXh0ZXJuYWxGb3JtYXR0ZXIodmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy50aWNrUGFkZGluZyA+IDApIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrUGFkZGluZyh0aGlzLm9wdHMudGlja1BhZGRpbmcpXG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5QXhpc1Byb3BzIChvcHRzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0cywgb3B0cylcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBudWxsXG5cbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoMCwke3RoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodH0pYFxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSwwKWBcbiAgICB9XG5cbiAgICB0aGlzLmF4aXNUYWcgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCBgdmMtYXhpcyB2Yy1heGlzLSR7dGhpcy5vcHRzLm9yaWVudH0gdmMtYXhpcy0ke3RoaXMub3B0cy5jbGFzc05hbWV9YClcblxuXG4gICAgLy8gSWYgbm8gZm9ybWF0dGVyIGlzIHByb3ZpZGVkLCBheGlzIHVzZXMgZDMgZGVmYXVsdCBmb3JtYXR0ZXJcbiAgICBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSAmJiB0aGlzLmF4aXMudGlja0Zvcm1hdCh0aGlzLm9wdHMudGlja0Zvcm1hdHRlcilcblxuICAgIC8vIEFkZCBMYWJlbCB0byBBeGlzXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyA9IHRoaXMuYXhpc1RhZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcy1sYWJlbCcpXG4gICAgICAgIC50ZXh0KHRoaXMub3B0cy5sYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICAvLyBJRiBub3QgdmlzaWJsZSwgRG9udCBzaG93IHRoZSBheGlzLCBidXQgc3RpbGwgc2NhbGUgYW5kIHBsb3Qgb24gZ3JhcGhab25lLCBzbyB0aGF0IGFsbCBzZXJpZXMgY2FuIGJlIHBsb3R0ZWRcbiAgICAhdGhpcy5vcHRzLnZpc2libGUgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsIHRydWUpXG4gIH1cblxuICAvLyBVcGRhdGVzIGdyYXBoIEF4aXMgYmFzZWQgb24gbmV3IHdpZHRoIGFuZCBtb2RpZnkgcmFuZ2UsIGRvbWFpbiBhbmQgdGlja3NcbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgIHRoaXMub3B0cy5yYW5nZVNjYWxlID0gWzAsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoXVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuXG4gICAgLy8gUG9zaXRpb24gbGFiZWwsIHNjYWxlLCB0aWNrcywgYXhpcyBiYXNlZCBvbiBjaGFydCB3aWR0aFxuICAgIGlmICh0aGlzLm9wdHMubGFiZWwpIHtcbiAgICAgIGxldCB4VHJhbnMgPSAwXG4gICAgICBsZXQgeVRyYW5zID0gMFxuICAgICAgbGV0IHJvdGF0ZSA9IDBcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB4VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gMilcbiAgICAgICAgeVRyYW5zID0gY29uc3RhbnRzLlhfQVhJU19MQUJFTF9ZXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCB8fCB0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgICAgICB4VHJhbnMgPSAtKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCkgKyBjb25zdGFudHMuQlJVU0hZX0JVRkZFUlxuICAgICAgICAgIHJvdGF0ZSA9IDI3MFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhUcmFucyA9IHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUlxuICAgICAgICAgIHJvdGF0ZSA9IDkwXG4gICAgICAgIH1cbiAgICAgICAgeVRyYW5zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgLyAyKVxuICAgICAgfVxuICAgICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZ1xuICAgICAgICAuYXR0cigndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlKCR7eFRyYW5zfSwke3lUcmFuc30pIHJvdGF0ZSgke3JvdGF0ZX0pYClcbiAgICB9XG5cbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSBbXVxuXG4gICAgbGV0IGRvbWFpblNjYWxlID0gW3RoaXMub3B0cy5kb21haW5TY2FsZVswXSwgdGhpcy5vcHRzLmRvbWFpblNjYWxlW3RoaXMub3B0cy5kb21haW5TY2FsZS5sZW5ndGggLSAxXV1cbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIGRvbWFpblNjYWxlID0gdGhpcy5vcHRzLmRvbWFpblNjYWxlXG4gICAgICB0aGlzLnNjYWxlXG4gICAgICAgIC5wYWRkaW5nKHRoaXMub3B0cy5zY2FsZVBhZGRpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0cy5heGlzQ2xhbXAgJiYgdGhpcy5zY2FsZS5jbGFtcCgpIC8vIENsYW1wcyBvdXRzaWRlIHJhbmdlIHZhbHVlIHdpdGhpbiBzcGVjdGlmZWQgcmFuZ2UgYW5kIGRvbWFpblxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUucmFuZ2UodGhpcy5vcHRzLnJhbmdlU2NhbGUpXG4gICAgICAuZG9tYWluKGRvbWFpblNjYWxlKVxuXG4gICAgdGhpcy5heGlzLnNjYWxlKHRoaXMuc2NhbGUpXG5cbiAgICBpZiAoaXNOdW1iZXIodGhpcy5vcHRzLnRpY2tOdW1iZXIpKSB7XG4gICAgICBsZXQgdGlja1ZhbCA9IHRoaXMub3B0cy50aWNrTnVtYmVyXG4gICAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcgJiYgdGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIC8vIG1vZGlmeSB4dGljayB0byBkaXNwbGF5IGxlc3MgdGlja3Mgb24gbG93ZXIgY2hhcnQgd2lkdGggb3IgaGFzIGxlc3MgZGF5c1xuICAgICAgICBjb25zdCBuZXdUaWNrID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAvIDYwKVxuICAgICAgICBjb25zdCBkYXlMZW5ndGggPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuZG9tYWluU2NhbGVbMV0gLSB0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0pIC8gKDYwICogNjAgKiAyNCAqIDEwMDApKSArIDFcbiAgICAgICAgaWYgKGRheUxlbmd0aCA+IDIgJiYgZGF5TGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBkYXlMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pbnV0ZUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiAxMDAwKSlcbiAgICAgICAgaWYgKG1pbnV0ZUxlbmd0aCA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gbWludXRlTGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VGljayA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gbmV3VGlja1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXhpcy50aWNrcyh0aWNrVmFsKVxuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrcyh0aGlzLm9wdHMudGlja051bWJlcigpKVxuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtQXR0ciAmJiB0aGlzLmF4aXNUYWcuYXR0cigndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm1BdHRyKVxuXG4gICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzICYmIHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3knKSB7XG4gICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICB9XG5cbiAgICB0aGlzLmF4aXNUYWcuY2FsbCh0aGlzLmF4aXMpXG5cblxuICAgIGNvbnN0IGxpbWl0VGV4dCA9IHRoaXMub3B0cy50ZXh0TGltaXRcbiAgICBjb25zdCB0aWNrRm10ID0gaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikgPyB0aGlzLm9wdHMudGlja0Zvcm1hdHRlciA6IGVtcHR5Rm5cblxuICAgIGlmICh0aGlzLm9wdHMucm90YXRlVGV4dCA9PT0gJ3NsYW50Jykge1xuICAgICAgdGhpcy5heGlzVGFnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC5hdHRyKCd5JywgJzgnKVxuICAgICAgICAuYXR0cignZHgnLCAnLTEuMGVtJylcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4xNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTY1KScpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydW5jYXRlVGV4dCh0aWNrRm10KGQpLCBsaW1pdFRleHQpXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMucm90YXRlVGV4dCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5heGlzVGFnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCd4JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoOTApJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydW5jYXRlVGV4dCh0aWNrRm10KGQpLCBsaW1pdFRleHQpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZW1vdmUgQXhpcyBJbnN0YW5jZVxuICByZW1vdmUgKCkge1xuICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgJiYgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZy5yZW1vdmUoKVxuICAgIHRoaXMuYXhpc1RhZyAmJiB0aGlzLmF4aXNUYWcucmVtb3ZlKClcbiAgICB0aGlzLnNjYWxlID0gbnVsbFxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCB7Z2V0T2JqZWN0LCBpc09iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydCBmcm9tICdAL2NoYXJ0cy9DaGFydCdcbmltcG9ydCBBeGlzIGZyb20gJ0AvYXhpcydcbmltcG9ydCB7YWRkRGVmYXVsdFRTT3B0aW9uc30gZnJvbSAnQC9oZWxwZXJzJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQgQmFzaWNUU1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0Jhc2ljVFNQYXJzZXInXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAnXG5pbXBvcnQgTW91c2VIYW5kbGVyIGZyb20gJ0AvbW91c2UtaGFuZGxlcidcbmltcG9ydCBab29tIGZyb20gJ0Avem9vbSdcbmltcG9ydCBUaW1lU2VyaWVzTGVnZW5kIGZyb20gJ0AvbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQnXG5pbXBvcnQgVGltZVNlcmllcyBmcm9tICdAL3Nlcmllcy9UaW1lU2VyaWVzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc0NoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBvcHRzKSB7XG4gICAgb3B0cy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGFQYXJzZXIgaXMgbm90IHBhc3NlZFxuICAgIGlmICghb3B0cy5kYXRhUGFyc2VyKSB7XG4gICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNUU1BhcnNlcihvcHRzKVxuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgZGF0YVBhcnNlciBleGlzdHMgYW5kIGl0cyBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlclxuICAgIGlmICghKG9wdHMuZGF0YVBhcnNlciBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGFQYXJzZXIgaW4gb3B0aW9ucyBkb3Nlbid0IGhhdmUgaW1wbGVtZW50YXRpb24gb2YgQ2hhcnRBeGlzUGFyc2VyXCIpXG4gICAgfVxuXG4gICAgLy8gQ2FsbCBQYXJlbnQgSW1wbFxuICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0cylcblxuICAgIC8vIFJ1biB0aGUgZGF0YVBhcnNlciBmb3IgZ2l2ZW4gSlNPTiBkYXRhXG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuZGF0YVBhcnNlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRhdGFQYXJzZXIuZGF0YUV4ZWN1dG9yKCkpXG4gICAgfVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRUU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gSW5pdGlsaXplIGFsbCBjaGFydCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGltZVNlcmllc0NoYXJ0IG9uIGV4YWN0IG9yZGVyIGJhc2VkIG9uIGVhY2ggZGVwZW5kZW5jaWVzXG4gICAgdGhpcy5jaGFydEluaXRpbGl6ZSgpXG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5kcmF3KCkpXG4gIH1cblxuICBjaGFydEluaXRpbGl6ZSAoKSB7XG4gICAgbGV0IGF4aXNPcHRpb25zXG4gICAgY29uc3QgeVJhbmdlID0gdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgIGNvbnN0IHlSYW5nZTIgPSB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG5cbiAgICBpZiAoeVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5sZWZ0JylcbiAgICAgIHRoaXMueUF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpcylcbiAgICB9XG5cbiAgICBpZiAoeVJhbmdlMikge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMucmlnaHQnKVxuICAgICAgdGhpcy55QXhpczIgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdyaWdodCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZTIsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlIChjaGFydCBBUEkpXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMyKVxuICAgIH1cblxuICAgIGlmICh0aW1lSW5mby50aW1lUmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnhBeGlzLmJvdHRvbScpXG4gICAgICB0aGlzLnhBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd4JyxcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgcmFuZ2VTY2FsZTogWzAsIHRoaXMuY2hhcnRXaWR0aF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB0aW1lSW5mby50aW1lUmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnhBeGlzKVxuICAgIH1cblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGNvbnN0IHpvb21PcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnpvb20nLCB7fSlcbiAgICBpZiAoKHRvb2x0aXBPcHRzLnZpc2libGUgfHwgem9vbU9wdHMudmlzaWJsZSkpIHtcbiAgICAgIHRoaXMubW91c2VIYW5kbGVyID0gbmV3IE1vdXNlSGFuZGxlcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5tb3VzZUhhbmRsZXIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIHRoaXMuem9vbUJydXNoID0gbmV3IFpvb20oe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgb25ab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblhab29tLFxuICAgICAgICBvblkxWm9vbTogdGhpcy5vcHRpb25zLnpvb20ub25ZMVpvb20sXG4gICAgICAgIG9uWTJab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblkyWm9vbVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy56b29tQnJ1c2gpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zZXJpZXMpIHtcbiAgICAgIHRoaXMuc2VyaWVzID0gbmV3IFRpbWVTZXJpZXMoe1xuICAgICAgICBjaGFydDogdGhpc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnNlcmllcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxlZ2VuZC52aXNpYmxlKSB7XG4gICAgICB0aGlzLmxlZ2VuZHMgPSBuZXcgVGltZVNlcmllc0xlZ2VuZCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBsZWdlbmRQcmVmaXg6IHRoaXMub3B0aW9ucy5sZWdlbmQubGVnZW5kUHJlZml4LFxuICAgICAgICBwb3NpdGlvbjogY29uc3RhbnRzLkRJUl9UT1AsXG4gICAgICAgIGRpc2FibGVTZXJpZXNUb2dnbGU6IHRoaXMub3B0aW9ucy5sZWdlbmQuZGlzYWJsZVNlcmllc1RvZ2dsZSxcbiAgICAgICAgb25MZWdlbmRDaGFuZ2U6IHRoaXMub3B0aW9ucy5sZWdlbmQub25MZWdlbmRDaGFuZ2VcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMubGVnZW5kcylcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zb2xlLmxvZygnVGltZVNlcmllc0NoYXJ0IGRyYXcnLCB0aGlzKVxuICAgIHN1cGVyLmRyYXcoKVxuICAgIHRoaXMub3B0aW9ucy5hZnRlckRyYXcuY2FsbCh0aGlzKVxuXG4gICAgLy8gQWRkIEV4dHJhIEJ1ZmZlciBmb3IgbWF4IFkgdmFsdWUgYW5kIHByb3ZpZGUgc3BhY2UgdG8gZGlzcGxheSBhbGwgdGlja3MgaW4gZ3JhcGhab25lXG4gICAgdGhpcy5yZVNjYWxlWUF4aXMoKVxuXG4gICAgdGhpcy5jaGFydFJlc3BvbnNpdmUoKVxuXG4gICAgdGhpcy5tb3VzZUhhbmRsZXIgJiYgdGhpcy5tb3VzZUhhbmRsZXIudHJpZ2dlck1vdXNlQWN0aW9uKClcblxuICAgIHRoaXMudGltZURpZmYgPSAobmV3IERhdGUoKVxuICAgICAgLmdldFRpbWUoKSAtIHRoaXMub3B0aW9ucy5zdGFydFRpbWUuZ2V0VGltZSgpKVxuICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlLmNhbGwodGhpcywgdGhpcy50aW1lRGlmZilcbiAgfVxuXG4gIC8vIEZpbmQgbmV4dCBwb3NzaWJsZSB0aWNrIHRvIGRpc3BsYXkgbWF4IFkgdmFsdWUgYW5kIGFkanVzdCBtYXJnaW4gdG8gc2hvdyBhbGwgdGljayBsYWJlbHMgY29tcGxldGVseVxuICByZVNjYWxlWUF4aXMgKGF4aXNTcGVjaWZpZXIpIHtcblxuICAgIGxldCB0aWNrVmFsQXJyXG4gICAgbGV0IGRpZmZWYWxcbiAgICBsZXQgcmFuZ2VWYWxcbiAgICBsZXQgeU1heFxuICAgIGxldCBhcHBseVkxQXhpcyA9IHRydWVcbiAgICBsZXQgYXBwbHlZMkF4aXMgPSB0cnVlXG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICBhcHBseVkyQXhpcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGF4aXNTcGVjaWZpZXIgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIGFwcGx5WTFBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBNYXggdmFsdWUgaXMgcHJvdmlkZWQgaW4gb3B0aW9ucywgRG9udCBjb21wdXRlIG5leHQgcG9zc2libGUgdGljay5cbiAgICB5TWF4ID0gZ2V0T2JqZWN0KHRoaXMub3B0aW9ucywgJ3lBeGlzLmxlZnQubWF4JylcbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZSAmJiBhcHBseVkxQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpcy50aWNrVmFsdWVzXG4gICAgICAvLyBJZiB0aWNrVmFsQXJyIGNvbnRhaW5zIHZhbHVlc1xuICAgICAgaWYgKHRpY2tWYWxBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBGaW5kIGRpZmZlcmVuY2Ugb2YgbGFzdCBhbmQgbGFzdCBwcmV2aW91cyB0aWNrIHZhbHVlcyBvZiBZIEF4aXNcbiAgICAgICAgZGlmZlZhbCA9IHRpY2tWYWxBcnJbMF0gLSB0aWNrVmFsQXJyWzFdXG4gICAgICAgIC8vIE5ldyByYW5nZSBpcyBpbmNyZWFzZWQgYnkgYWJvdmUgZGlmZmVyZW5jZVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgLy8gTW9kaWZ5IG5ldyBtYXggcmFuZ2UgZm9yIHRoZSBncmFwaFxuICAgICAgICB0aGlzLm9wdGlvbnMueVJhbmdlWzFdID0gcmFuZ2VWYWxcblxuICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgIHRoaXMueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMucmlnaHQubWF4JylcbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIgJiYgYXBwbHlZMkF4aXMgJiYgIU51bWJlci5pc0Zpbml0ZSh5TWF4KSkge1xuICAgICAgdGlja1ZhbEFyciA9IHRoaXMueUF4aXMyLnRpY2tWYWx1ZXNcblxuICAgICAgaWYgKHRpY2tWYWxBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgcmFuZ2VWYWwgPSB0aWNrVmFsQXJyWzBdICsgZGlmZlZhbFxuXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2UyWzFdID0gcmFuZ2VWYWxcblxuICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgIHRoaXMueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRqdXN0cyBZIGF4aXMgd2lkdGggYmFzZWQgb24gbWF4IHRleHQgbGVuZ3RoIGRpc3BsYXllZFxuICAgIGNvbnN0IHJlU2NhbGVBeGlzID0ge31cbiAgICBsZXQgcmVxdWlyZWRXaWR0aCA9IDBcblxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlKSB7XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0uY2xhc3MgPSAnLnZjLWF4aXMtbGVmdCdcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UyKSB7XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXSA9IHt9XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXS5jbGFzcyA9ICcudmMtYXhpcy1yaWdodCdcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLm1heFRleHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgZHVtbXkgc3ZnIHRvIGFkZCBNYXggbGVuZ3RoIHRpY2sgdmFsdWVzIGFuZCBjaGVjayBpdHMgcmVxdWlyZWQgd2lkdGggaW4gY2hhcnRcbiAgICBjb25zdCBkdW1teUcgPSB0aGlzLnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWF4aXMnKVxuXG4gICAgZm9yIChjb25zdCBheGlzIGluIHJlU2NhbGVBeGlzKSB7XG4gICAgICBjb25zdCB0aWNrc0FyciA9IHRoaXMuY29udGFpbmVyLnNlbGVjdCgnc3ZnICcgKyByZVNjYWxlQXhpc1theGlzXS5jbGFzcykuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIHRpY2tzQXJyLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgY29uc3QgdGlja0h0bWwgPSBzZWxlY3QodGhpcykudGV4dCgpIHx8ICcnXG4gICAgICAgIGlmICh0aWNrSHRtbC5sZW5ndGggPiByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQgPSB0aWNrSHRtbFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgICAgLmRhdGEoW3JlU2NhbGVBeGlzW2F4aXNdLm1heFRleHRdKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLnRleHQoU3RyaW5nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIC8vIENvbXB1dGUgcmVxdWlyZWRXaWR0aCBmb3IgdGhlIE1heCB0ZXh0XG4gICAgICAgICAgcmVxdWlyZWRXaWR0aCA9IHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKClcbiAgICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIHJlc3BlY3RpdmUgbWFyZ2luIHRvIGZpdCBpbiB0aWNrcyB0ZXh0XG4gICAgICB0aGlzLm1hcmdpbltheGlzXSA9IE1hdGgucm91bmQocmVxdWlyZWRXaWR0aCkgKyBjb25zdGFudHMuWV9BWElTX1NQQUNFXG5cbiAgICB9XG4gICAgZHVtbXlHLnJlbW92ZSgpXG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSAodGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCB7Z2V0RGF0ZUZyb21FcG9jLCBnZXRPYmplY3QsIHJlZmluZVN0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNCb29sZWFufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVFNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgdGltZXNlcmllcyBKU09OIHBhcnNpbmcgOicsIGVycilcbiAgICAgIHRoaXMub3B0cy5vbkVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKU09OIHJlY2VpdmVkIC0gRXJyb3Igb24gdGltZXNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi50aW1lc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICAvLyBGaW5kIHNlY29uZHMgaW4gdW5pdEFyciB0byBmaW5kIHRoZSB0aW1lU3RhbXBJbmRleFxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gMFxuICAgIGNvbnN0IGZpcnN0VGltZSA9IGRhdGFbMF1bdGltZVN0YW1wSW5kZXhdXG4gICAgaWYgKCF2YWxpZEpTT05UeXBlIHx8ICEoaXNOdW1iZXIoZmlyc3RUaW1lKSB8fCBpc0RhdGUoZmlyc3RUaW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkJylcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQgPSAwXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoc3RhcnQgPiBkW3RpbWVTdGFtcEluZGV4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVGltZSBzZXJpZXMgSlNPTiByZWNlaXZlZDogVGltZXN0YW1wIFZhbHVlcyBtdXN0IGJlIGluIGFzY2VuZGluZyBvcmRlcicpXG4gICAgICB9XG4gICAgICBzdGFydCA9IGRbdGltZVN0YW1wSW5kZXhdXG4gICAgICBkW3RpbWVTdGFtcEluZGV4XSA9IGdldERhdGVGcm9tRXBvYyhkW3RpbWVTdGFtcEluZGV4XSwgdHJ1ZSkgLy8gY29udmVydCBFUE9DIHRvIGRhdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IFtzZXJpZXNEYXRhWzBdW2RhdGFJbmRleF0sIHNlcmllc0RhdGFbKHNlcmllc0RhdGEubGVuZ3RoIC0gMSldW2RhdGFJbmRleF1dXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQgZmluZEVhY2hQbG90UmFuZ2UgPSBmYWxzZVxuICAgIGxldCBrZXlcbiAgICBsZXQgeVJhbmdlID0gbnVsbFxuICAgIGxldCB5UmFuZ2UyID0gbnVsbFxuXG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWF4KSkge1xuICAgICAgICB5UmFuZ2UgPSBbeUF4aXMubWluLCB5QXhpcy5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzMikge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1heCkpIHtcbiAgICAgICAgeVJhbmdlMiA9IFt5QXhpczIubWluLCB5QXhpczIubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHlSYW5nZSBpcyBub3Qgc2V0IGZyb20gZ3JhcGhPcHRpb25zLCB0aGVuIGdvIGluc2lkZVxuICAgIGlmICgoeUF4aXMgJiYgIXlSYW5nZSkgfHwgKHlBeGlzMiAmJiAheVJhbmdlMikpIHtcblxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5taW5WYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5tYXhWYWwpKSB7XG4gICAgICAgICAgZmluZEVhY2hQbG90UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmxlbmd0aCkgfHwgZmluZEVhY2hQbG90UmFuZ2UpIHtcblxuICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAvLyBSZXNldCByYW5nZSBmb3IgZWFjaCBwbG90IGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICAgIGVhY2goZWFjaFBsb3RTZXQsIGZ1bmN0aW9uIChlYWNoUGxvdCkge1xuICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gSW5maW5pdHlcbiAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBzdGFjayByYW5nZSBmb3IgZWFjaCBzdGFjayBmb3IgZmluZGluZyBtaW4gLCBtYXhcbiAgICAgICAgcGxvdEluZm8uc3RhY2sgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIE1heCBhbmQgTWluIGZvciBlYWNoIHBsb3RzIHNlcmllc1xuICAgICAgICBsZXQgdmFsRGF0YSA9IDBcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgaWYgKGZpbmRFYWNoUGxvdFJhbmdlKSB7XG4gICAgICAgICAgICBlYWNoKGVhY2hQbG90U2V0LCBmdW5jdGlvbiAoZWFjaFBsb3QpIHtcbiAgICAgICAgICAgICAgdmFsRGF0YSA9IGRbZWFjaFBsb3QuZGF0YUluZGV4XVxuICAgICAgICAgICAgICBpZiAodmFsRGF0YSA8IGVhY2hQbG90Lm1pblZhbCkge1xuICAgICAgICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodmFsRGF0YSA+IGVhY2hQbG90Lm1heFZhbCkge1xuICAgICAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgIHN1bSArPSAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPyBkW2VhY2hQbG90U2V0W21lbWJlci5uYW1lXS5kYXRhSW5kZXhdIDogMClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChzdW0gPCBwbG90RGF0YS52YWx1ZVJhbmdlWzBdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW0gPiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0YWNrJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gcGxvdERhdGEudmFsdWVSYW5nZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4pIHtcbiAgICAgICAgICBhbGxNaW4gPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCB0aW1lU3RhbXBJbmRleCA9IGRhdGFPcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICh0aW1lU3RhbXBJbmRleCA9PT0gaW5kKSB7XG4gICAgICAgIGluZCsrXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS5uYW1lID0gcmVmaW5lU3RyaW5nKHBsb3REYXRhLm5hbWUpXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBwbG90RGF0YS5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IHBsb3REYXRhLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgaXNCb29sZWFuKHBsb3REYXRhLnZpc2libGUpICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlID0gcGxvdERhdGEudmlzaWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUhhbmRsZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbiA9IFtdXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hYJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIC8vIHgtWm9vbSBmb3IgY2hhcnQgZG9lc3Qgbm90IGV4aXN0LCBBZGQgcmVjdCBvdmVybGF5IGZvciBicnVzaFhEaXZcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnb3ZlcmxheScpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuICAgIGlmICghdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuem9vbS52aXNpYmxlKSB7XG4gICAgICB0aGlzLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlZ2lzdGVyIChjYWxsYmFjaykge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICB0cmlnZ2VyTW91c2VBY3Rpb24gKCkge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLmZvckVhY2goKGZ1bikgPT4ge1xuICAgICAgZnVuLmNhbGwodGhpcylcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtsaW5lfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgLy8gRG8gbm90IHJlZ2lzdGVyIHRoaXMgY29tcG9uZW50IGluIGNoYXJ0Q29tcG9uZW50c0FyciwgIEFzIHRoZSBzZXJpZXMgY29tcG9uZW50IGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBhbmQgd2lsbCBjYWxsIHRoZSBsaW5lIEFQSXNcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgbGluZURhdGE6IG51bGwsXG4gICAgICB5QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIHhBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0gbGluZSgpXG5cbiAgICBpZiAodGhpcy5vcHRzLnlBeGlzVGFyZ2V0KSB7XG4gICAgICAvLyBGb3Igbm9ybWFsIHNlcmllcywgeUF4aXNUYXJnZXQgcmVmZXJzIHRvIHRoZSBpbmRleCBvZiB0aGlzIHNlcmllcyBpbiBkYXRhIEFyclxuICAgICAgdGhpcy5saW5lXG4gICAgICAgIC5kZWZpbmVkKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSAhPSBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgLy8geEF4aXNUYXJnZXQgcmVmZXJzIHRoZSBpbmRleCBvZiBkYXRlIGluIGRhdGEgQXJyXG4gICAgICAgICAgcmV0dXJuIHgoZFtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB5KGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtbGluZS0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKFt0aGlzLm9wdHMubGluZURhdGFdKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxpbmUtcGxvdCB2Yy1saW5lLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcbiAgICAvLyBBZGRpbmcgdGhlIGxpbmVzIHNlcmllcyBmb3IgZGF0YSB0byBiZSBzaG93blxuICAgIHRoaXMubGluZVRhZy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1saW5lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5saW5lV2lkdGggfHwgJzJweCdcbiAgICAgIH0pXG4gICAgICAuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmxpbmUoZC52YWx1ZXMpIC8vIFZhbHVlcyBhcmUgYXJyYXkgb2YgYXJyYXkgaGF2aW5nIGZvcm1hdCBsaWtlICBbW2RhdGUsIHNlcmllczEsIHNlcmllczIgLi4uLl0sLi4uXVxuICAgICAgfSlcbiAgfVxuXG4gIC8vIFVwZGF0ZSBoYXBwZW5zIHdoZW4gdGhlIGNoYXJ0IGlzIHJlc2l6ZWRcbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gc2VsZi5saW5lKGQudmFsdWVzKVxuICAgIH0pXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZWRyYXcgaXMgY2FsbGVkIHdoZW4gc2VyaWVzIGlzIHRvZ2dsZWQgZnJvbSBMZWdlbmRzXG4gIHJlZHJhdyAoKSB7XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3Qgc2VyaWVzTmFtZSA9IHRoaXMub3B0cy5saW5lRGF0YS5uYW1lXG4gICAgLy8gUmVtb3ZlIGxpbmUgc2VyaWVzXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5yZW1vdmUoKVxuXG4gICAgaWYgKGVhY2hQbG90U2V0ICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdLnZpc2libGUpIHtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuXG4gIH1cbiAgXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5yZW1vdmUoKVxuICAgIHRoaXMubGluZSA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2FyZWEsIHN0YWNrLCBzdGFja09yZGVyTm9uZSwgc3RhY2tPZmZzZXROb25lfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQge2dldE9iamVjdH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2tBcmVhIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgeEF4aXNUYXJnZXQ6ICcnLFxuICAgICAgc3RhY2tEYXRhOiBudWxsLFxuICAgICAgc3RhY2tPcmRlck1lbWJlcnM6IHt9LFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIC8vIERlZmluZSBpbiB3aGF0IG9yZGVyLCBTdGFjayBzZXJpZXMgbmVlZHMgdG8gYmUgcGxvdGVkXG4gICAgdGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sgPSBzdGFjaygpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhKClcbiAgICAgIC54KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiB4KGQuZGF0YVtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgfSlcbiAgICAgIC55MChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkWzBdKSAvLyBJbmRpY2F0ZXMgd2hlcmUgdG8gc3RhcnQgYWxvbmcgWUF4aXNcbiAgICAgIH0pXG4gICAgICAueTEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZFsxXSkgLy8gSW5kaWNhdGVzIHdoZXJlIHRvIGVuZCBhbG9uZyBZQXhpc1xuICAgICAgfSlcblxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcblxuICAgIHRoaXMub3B0cy5kM1N0YWNrLmtleXModGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCkgLy8gc3BlY2lmeSB0aGUgc3RhY2sgc2VyaWVzIG5hbWVzIGluIGFycmF5IGZvcm1hdFxuICAgIHRoaXMub3B0cy5kM1N0YWNrLm9yZGVyKHN0YWNrT3JkZXJOb25lKSAvLyB1c2UgdGhlIGdpdmVuIHNlcmllcyBvcmRlci5cbiAgICB0aGlzLm9wdHMuZDNTdGFjay5vZmZzZXQoc3RhY2tPZmZzZXROb25lKSAvLyBhcHBseSBhIHplcm8gYmFzZWxpbmUgb24gc3RhcnRcblxuICAgIC8vIFNob3cgc3RhY2sgcGxvdCBmb3Igb25seSBzZXJpZXMgd2hpY2ggYXJlIHZpc2libGVcbiAgICBjb25zdCBzdGFja1Zpc2libGVPcmRlciA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuXG4gICAgdGhpcy5zdGFja0xheWVyID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5zZWxlY3RBbGwoJy52Yy1zdGFjay0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKHRoaXMub3B0cy5kM1N0YWNrKHRoaXMub3B0cy5zdGFja0RhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXN0YWNrLXBsb3QgdmMtc3RhY2stJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXIuc2VsZWN0KCdzdmcgY2xpcFBhdGgnKVxuXG4gICAgLy8gUExvdCBzdGFja0xheWVyIGJhc2VkIG9uIGVhY2ggc2VyaWVzIHZpc2libGl0eVxuICAgIHRoaXMuc3RhY2tMYXllci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd2Yy1zdGFjayB2Yy1zdGFjay0nICsgc3RhY2tNZW1iZXIubmFtZVxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W3N0YWNrTWVtYmVyLm5hbWVdLmNvbG9yXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCB0aGlzLmFyZWEpXG5cbiAgfVxuICBcbiAgLy8gVXBkYXRlIHN0YWNrTGF5ZXIgYmFzZWQgb24gY2hhcnQgcmVzaXplXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdkJywgdGhpcy5hcmVhKVxuICB9XG4gIFxuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIC8vIE1vZGlmeSBzdGFja09yZGVyIGFyciBiYXNlZCBvbiB2aXNpYmxlU2VyaWVzXG4gICAgdGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBzdGFjayBzZXJpZXNcbiAgICB0aGlzLnN0YWNrTGF5ZXIgJiYgdGhpcy5zdGFja0xheWVyLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBzdGFja09yZGVyTWVtYmVyc1xuICAgIHRoaXMuZHJhdygpXG4gIH1cbiAgXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuc3RhY2tMYXllci5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG4gIFxuICByZW1vdmUgKCkge1xuICAgIC8vICB0aGlzLnN0YWNrQXJlYVBhdGgucmVtb3ZlKCk7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gbnVsbFxuICAgIHRoaXMuYXJlYSA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQge2lzQXJyYXl9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgTGluZSBmcm9tICdAL3Nlcmllcy9MaW5lJ1xuaW1wb3J0IFN0YWNrQXJlYSBmcm9tICdAL3Nlcmllcy9TdGFja0FyZWEnXG5pbXBvcnQgU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1NlcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGEgLy8gQWNjZXB0IGVpdGhlciB0aW1lc2VyaWVzIG9yIHBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICAvLyBDcmVhdGUgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIGlucHV0IG9wdGlvbnMgYW5kIGVhY2ggcGxvdCBpbmZvXG4gICAgaXNBcnJheShwbG90SW5mby5zdGFjaykgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaCgocGxvdERhdGEpID0+IHtcbiAgICAgIHRoaXMucGxvdFNlcmllcy5wdXNoKG5ldyBTdGFja0FyZWEoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHN0YWNrRGF0YTogZGF0YSxcbiAgICAgICAgc3RhY2tPcmRlck1lbWJlcnM6IHBsb3REYXRhLnN0YWNrT3JkZXJNZW1iZXJzXG4gICAgICB9KSlcbiAgICB9KVxuXG4gICAgaXNBcnJheShwbG90SW5mby5saW5lKSAmJiBwbG90SW5mby5saW5lLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgTGluZSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeUF4aXNUYXJnZXQ6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmRhdGFJbmRleCxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgdmlzaWJsZTogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSxcbiAgICAgICAgbGluZURhdGE6IHtcbiAgICAgICAgICBuYW1lOiBwbG90RGF0YS5uYW1lLFxuICAgICAgICAgIGNvbG9yOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5jb2xvcixcbiAgICAgICAgICBsaW5lV2lkdGg6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmxpbmVXaWR0aCxcbiAgICAgICAgICB2YWx1ZXM6IGRhdGFcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBnZXRPYmplY3QsIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2Jpc2VjdG9yLCBkM01vdXNlfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQge2VhY2gsIGZpbHRlcn0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc1Rvb2x0aXAgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY3Jvc3NIYWlyczoge1xuICAgICAgICBlbmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIC8vIFByb3ZpZGUgYmFzaWMgZm9ybWF0dGVyIHRvIGRpc3BsYXkgaG92ZXIgZGF0YVxuICAgIGlmICghaXNGdW5jdGlvbih0aGlzLm9wdHMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5vcHRzLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+IFRvb2xUaXAgVGV4dCA6IDwvc3Bhbj48YnIvPjxzcGFuPiR7SlNPTi5zdHJpbmdpZnkoZCl9PC9zcGFuPmBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLmNyb3NzSGFpcnMgPSBmYWxzZVxuICAgIHRoaXMudG9vbFRpcERpdiA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXJcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1kaXNwbGF5ICcgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jcm9zc0hhaXJzLmVuYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jcm9zc0hhaXJzID0gdGhpcy5vcHRzLmNoYXJ0LnN2Z1xuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXRvb2x0aXAtbGluZScpXG4gICAgICB0aGlzLmNyb3NzSGFpcnMuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoLTk5OSwtOTk5KScpXG4gICAgICAgIC5hdHRyKCd4MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ3kxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgLSBjb25zdGFudHMuVE9PTFRJUF9UT1BfQlVGRkVSKVxuICAgICAgICAuYXR0cigneDInLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgIC5hdHRyKCd5MicsICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCkpXG5cbiAgICB9XG5cbiAgICB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKCgpID0+IHtcbiAgICAgIC8vIFJlZ2lzdGVyIGhvdmVyIGFuZCBoaWRlL3Nob3cgdG9vbGlwIGV2ZW50c1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgICBjb25zdCBtb3VzZUhhbmRsZXIgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyXG4gICAgICBjb25zdCBkYXRlSW5kZXggPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXhcbiAgICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGFcbiAgICAgIC8vIEZpbmQgbmVhcmVzdCBleGlzdGluZyBkYXRlIGFtb25nIGFycmF5IG9mIHNvcnRlZCBkYXRlXG4gICAgICBjb25zdCBiaXNlY3REYXRlID0gYmlzZWN0b3IoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRbZGF0ZUluZGV4XVxuICAgICAgfSkubGVmdFxuXG4gICAgICBjb25zdCBtb3VzZUV2dCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vIE9uIG1vdXNlbW92ZSBvZiB4IG92ZXJsYXksIGZpbmQgeCx5IHZhbHVlcyBhbmQgdXBkYXRlIHRvb2x0aXBcbiAgICAgICAgY29uc3QgeE1vdXNlID0gZDNNb3VzZSh0aGlzKVswXVxuICAgICAgICBjb25zdCB5TW91c2UgPSBkM01vdXNlKHRoaXMpWzFdXG4gICAgICAgIGNvbnN0IHhWYWwgPSB4U2NhbGUuaW52ZXJ0KHhNb3VzZSkgLy8gZmluZCB4QXhpcyBkYXRlIGZvciBtb3VzZSBwb3NpdGlvblxuXG4gICAgICAgIC8vIERvIGJpbmFyeSBzZWFyY2ggb2YgZGF0YSBzZXQgZnJvbSAybmQgZGF0YSBzZXQgdG8gZW5kXG4gICAgICAgIGNvbnN0IGZvdW5kID0gYmlzZWN0RGF0ZShkYXRhU2V0LCB4VmFsLCAxKVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRCZWZvcmUgPSBkYXRhU2V0W2ZvdW5kIC0gMl1cblxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkUHJldiA9IGRhdGFTZXRbZm91bmQgLSAxXVxuICAgICAgICAvLyBnZXQgYmVmb3JlIGZpbmQgZGF0YVNldFxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkRm91bmQgPSBkYXRhU2V0W2ZvdW5kXSB8fCBkUHJldiAvLyBnZXQgZmluZCBkYXRhU2V0XG5cbiAgICAgICAgbGV0IHRvb2xUaXBEYXRhID0gZFByZXZcbiAgICAgICAgaWYgKGRhdGFTZXQubGVuZ3RoID4gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpIHtcbiAgICAgICAgICAvLyBNb3JlIHRoYW4gb25lIHRpY2sgcmVzaWRlIG9uIGVhY2ggcGl4ZWwuIEhlbmNlIGZpbmQgdGljayBoYXZpbmcgbWF4IHZhbHVlIGFtb25nIHRoZSBkYXRhc2V0XG4gICAgICAgICAgY29uc3QgZGF0YVBhcnNlTGVuID0gTWF0aC5mbG9vcihkYXRhU2V0Lmxlbmd0aCAvIHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSArIDFcblxuICAgICAgICAgIGNvbnN0IHZpc2libGVEYXRhSW5kZXggPSB7fVxuXG4gICAgICAgICAgZWFjaChzZWxmLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0LCBmdW5jdGlvbiAocGxvdCkge1xuICAgICAgICAgICAgaWYgKHBsb3QudmlzaWJsZSkge1xuICAgICAgICAgICAgICB2aXNpYmxlRGF0YUluZGV4W3Bsb3QuZGF0YUluZGV4XSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgbXVsdGlBcnJNYXAgPSB7fVxuICAgICAgICAgIC8vIERvIFNjYW4gZnJvbSByYW5nZSAtZGF0YVBhcnNlTGVuIHRvICtkYXRhUGFyc2VMZW4gYmV0d2VlbiBmb3VuZCBkYXRhIGluZGV4XG4gICAgICAgICAgZm9yIChsZXQgaW5kID0gKGZvdW5kIC0gZGF0YVBhcnNlTGVuKTsgaW5kIDwgKGZvdW5kICsgZGF0YVBhcnNlTGVuKTsgaW5kKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhU2V0W2luZF0pIHtcbiAgICAgICAgICAgICAgY29uc3QgZFNldCA9IGZpbHRlcihkYXRhU2V0W2luZF0sIGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpc2libGVEYXRhSW5kZXhbaW5kZXhdXG4gICAgICAgICAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYiAtIGFcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgaWYgKGRTZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbXVsdGlBcnJNYXBbaW5kXSA9IGRTZXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbWF4SW5kXG4gICAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIGVhY2gobXVsdGlBcnJNYXAsIGZ1bmN0aW9uIChhcnJTZXQsIGtleSkge1xuICAgICAgICAgICAgaWYgKG1heFZhbCA8IGFyclNldFswXSkge1xuICAgICAgICAgICAgICBtYXhWYWwgPSBhcnJTZXRbMF1cbiAgICAgICAgICAgICAgbWF4SW5kID0ga2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRvb2xUaXBEYXRhID0gZGF0YVNldFttYXhJbmRdIHx8IGRGb3VuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEZpbmQgbmVhcmVzdCByZWFjaGluZyBkYXRlIGFtb25nIGFib3ZlIHR3byBkYXRlc1xuICAgICAgICAgIHRvb2xUaXBEYXRhID0gKHhWYWwgLSBkUHJldltkYXRlSW5kZXhdKSA+IChkRm91bmRbZGF0ZUluZGV4XSAtIHhWYWwpID8gZEZvdW5kIDogZFByZXZcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRlSW50UmFuZ2UgPSBkRm91bmRbZGF0ZUluZGV4XSAtIGRQcmV2W2RhdGVJbmRleF1cblxuICAgICAgICBpZiAoIWRhdGVJbnRSYW5nZSAmJiBkQmVmb3JlKSB7XG4gICAgICAgICAgZGF0ZUludFJhbmdlID0gZFByZXZbZGF0ZUluZGV4XSAtIGRCZWZvcmVbZGF0ZUluZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGVJbnRSYW5nZSA8IE1hdGguYWJzKGRGb3VuZFtkYXRlSW5kZXhdIC0geFZhbCkpIHtcbiAgICAgICAgICAvLyBJZiBmb3VuZCBpcyBvdXRzaWRlIGRhdGEgaW50ZXJ2YWwgcmFuZ2UsIFRoZW4gZGF0YSBkb2VzbnQgZXhpc3QgZm9yIHRoYXQgdGljay5cbiAgICAgICAgICB0b29sVGlwRGF0YSA9IFtdXG4gICAgICAgICAgdG9vbFRpcERhdGFbZGF0ZUluZGV4XSA9IHhWYWxcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaG92ZXIoeE1vdXNlLCB5TW91c2UsIHRvb2xUaXBEYXRhKVxuICAgICAgfVxuXG4gICAgICBsZXQgZXZlbnROYW1lID0gJ21vdXNlbW92ZSdcbiAgICAgIGlmICh0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICAgIGV2ZW50TmFtZSA9ICdjbGljaydcbiAgICAgIH1cbiAgICAgIG1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5vbihldmVudE5hbWUsIG1vdXNlRXZ0KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG5cbiAgICAgIG1vdXNlSGFuZGxlci5tb3VzZUJydXNoLnNlbGVjdCgncmVjdC5vdmVybGF5JylcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgIH0pXG4gIH1cblxuICBob3ZlciAoeFBvcywgeVBvcywgZGlzcGxheURhdGEpIHtcbiAgICAvLyBVcGRhdGUgZGlzcGxheVBhbmVsIGFuZCBsaW5lIGJhc2VkIG9uIHggcG9zaXRpb25cbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnNlbGVjdCgnbGluZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3hQb3N9LDApYClcbiAgICAgIC5hdHRyKCd4MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wIC0gY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUilcbiAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MicsICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCkpXG4gICAgdGhpcy5zaG93SGlkZSh0cnVlKVxuXG4gICAgbGV0IHBlcmNlbnRhZ2VEaWZmID0geFBvcyAvIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoXG5cbiAgICBpZiAocGVyY2VudGFnZURpZmYgPCAwLjMpIHtcbiAgICAgIHBlcmNlbnRhZ2VEaWZmID0gMC4yXG4gICAgfVxuICAgIGlmIChwZXJjZW50YWdlRGlmZiA+IDAuNykge1xuICAgICAgcGVyY2VudGFnZURpZmYgPSAwLjk1XG4gICAgfVxuXG4gICAgY29uc3QgYm94ID0gZWxlbWVudE9mZnNldCh0aGlzLnRvb2xUaXBEaXYpXG4gICAgY29uc3Qgcm9vdFBvcyA9IGVsZW1lbnRPZmZzZXQodGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lcilcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZChyb290UG9zLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB4UG9zIC0gYm94LndpZHRoICogcGVyY2VudGFnZURpZmYpICsgJ3B4J1xuICAgIGNvbnN0IHRvcCA9IE1hdGgucm91bmQocm9vdFBvcy50b3AgLSBib3guaGVpZ2h0IC0gNSArIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIgKiAyKSArICdweCdcblxuXG4gICAgdGhpcy50b29sVGlwRGl2XG4gICAgICAuc3R5bGUoJ2xlZnQnLCBsZWZ0KVxuICAgICAgLnN0eWxlKCd0b3AnLCB0b3ApXG4gICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgIC5odG1sKHRoaXMub3B0cy5mb3JtYXQuY2FsbCh0aGlzLm9wdHMuY2hhcnQsIGRpc3BsYXlEYXRhKSkgLy8gVXNlZCBmb3JtYXQuY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1biBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy50b29sVGlwRGl2ICYmIHRoaXMudG9vbFRpcERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LnJlbW92ZSgpXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5yZW1vdmUoKVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtnZXRPYmplY3QsIGlzRnVuY3Rpb24sIGVtcHR5Rm59IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2JydXNoWCwgYnJ1c2hZLCBkM0V2ZW50fSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG9uWm9vbTogZW1wdHlGbixcbiAgICAgIG9uWTFab29tOiBlbXB0eUZuLFxuICAgICAgb25ZMlpvb206IGVtcHR5Rm5cbiAgICB9LCBvcHRzKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB4U2NhbGUgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGNvbnN0IHlTY2FsZUxlZnQgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGNvbnN0IHlTY2FsZVJpZ2h0ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpIHx8IGZhbHNlXG4gICAgbGV0IGJydXNoT3ZlcmxheSA9IG51bGxcbiAgICBpZiAoeFNjYWxlKSB7XG4gICAgICAvLyBDcmVhdGUgeCBheGlzIGJydXNoIGZvciBab29tIG9wZXJhdGlvblxuICAgICAgdGhpcy5icnVzaFggPSBicnVzaFgoKVxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICAgIF0pXG5cbiAgICAgIC8vIFVzZSB0aGUgc2FtZSBtb3VzZUJydXNoIGZvciBib3RoIHhCcnVzaCBhbmQgdG9vbHRpcFxuICAgICAgdGhpcy5icnVzaFhEaXYgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLmNhbGwodGhpcy5icnVzaFgpXG5cbiAgICAgIGJydXNoT3ZlcmxheSA9IHRoaXMuYnJ1c2hYRGl2LnNlbGVjdEFsbCgncmVjdC5vdmVybGF5JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geEF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hYLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZDNFdmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHhTY2FsZS5pbnZlcnQpXG4gICAgICAgIC8vIGZpbmQgeDEgYW5kIHgyXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpIC8vIHJvdW5kIGJvdGggdmFsdWVzXG5cbiAgICAgICAgLy8gY2xlYXIgQnJ1c2hcbiAgICAgICAgc2VsZi5icnVzaFhEaXYuY2FsbChzZWxmLmJydXNoWC5tb3ZlLCBudWxsKVxuICAgICAgICBicnVzaE92ZXJsYXkuc3R5bGUoJ2N1cnNvcicsICdhdXRvJylcblxuICAgICAgICAvLyBkMSA9IGQxXG4gICAgICAgIC8vICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgIC8vICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueEF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBYIGF4aXMgdXBvbiBob3Jpem9udGFsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgc2VsZi5vcHRzICYmIHNlbGYub3B0cy5vblpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCBsZWZ0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVMZWZ0KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktbGVmdCcpXG5cbiAgICAgIC8vIENhbGwgdGhpcyBldmVudCB3aGVuIHlBeGlzIGJydXNoIGlzIGVuZGVkXG4gICAgICB0aGlzLmJydXNoWUxlZnQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZTGVmdERpdi5jYWxsKHNlbGYuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZUxlZnQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZIGF4aXMgdXBvbiB2ZXJ0aWNhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vblkxWm9vbSkgJiYgc2VsZi5vcHRzLm9uWTFab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBkMVswXSwgZDFbMV0pXG5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHkgYXhpcyBicnVzaCBmb3IgdmVydGljYWwgcmlnaHQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZVJpZ2h0KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0ID0gYnJ1c2hZKClcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1yaWdodCcpXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZUmlnaHREaXYuY2FsbChzZWxmLmJydXNoWVJpZ2h0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlUmlnaHQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWTIgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTJab29tKSAmJiBzZWxmLm9wdHMub25ZMlpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBicnVzaE92ZXJsYXkgJiYgdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5yZWdpc3RlcihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIG1vdXNlIGlzIGNsaWNrZWQgb3IgZG93biwgZW5hYmxlIHpvb20gYnJ1c2ggYW5kIGl0cyBtb3VzZSBjdXJzb3JcbiAgICAgIGJydXNoT3ZlcmxheVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBicnVzaE92ZXJsYXkuc3R5bGUoJ2N1cnNvcicsICdjb2wtcmVzaXplJylcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBicnVzaE92ZXJsYXkuc3R5bGUoJ2N1cnNvcicsICdhdXRvJylcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMudXBkYXRlKClcblxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFgpIHtcbiAgICAgIHRoaXMuYnJ1c2hYLmV4dGVudChbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWERpdi5jYWxsKHRoaXMuYnJ1c2hYKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJydXNoWUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWUxlZnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHRcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdlxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWVJpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWUxlZnREaXYgJiYgdGhpcy5icnVzaFlMZWZ0RGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ICYmIHRoaXMuYnJ1c2hZUmlnaHREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgaWYgKHRoaXMuYnJ1c2hYRGl2KSB7XG4gICAgICB0aGlzLmJydXNoWERpdi5jYWxsKHRoaXMuYnJ1c2hYLm1vdmUsIG51bGwpXG4gICAgICB0aGlzLmJydXNoWERpdiAmJiB0aGlzLmJydXNoWERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlMZWZ0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYuY2FsbCh0aGlzLmJydXNoWUxlZnQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodERpdikge1xuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==