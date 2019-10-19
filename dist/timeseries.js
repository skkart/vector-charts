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
        var ticksArr = _this2.$container.find('svg ' + reScaleAxis[axis].class).find('text');
        ticksArr.each(function (i) {
          var tickHtml = $(ticksArr[i]).text() || '';
          if (tickHtml.length > reScaleAxis[axis].maxText.length) {
            reScaleAxis[axis].maxText = tickHtml;
          }
        });

        dummyG.selectAll('.dummyText').data([reScaleAxis[axis].maxText]).enter().append('text').text(String).each(function (d, i) {
          // Compute requiredWidth for the Max text
          requiredWidth = this.getComputedTextLength();
          $(this).remove(); // remove it just after displaying
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
      $(this).remove(); // remove them just after displaying them
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
      var $legendText = this.opts.chart.$container.find('svg .vc-legend-label');
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
          $legendText.hide();

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
            $legendText.show();
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

      var clipElement = this.opts.chart.$container.find('svg clipPath');
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

      var clipElement = this.opts.chart.$container.find('svg clipPath');

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
      this.$toolTipDiv = $('<div></div>').addClass('vc-tooltip-display');
      this.opts.chart.$container.append(this.$toolTipDiv);

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
        });

        $(mouseHandler.mouseBrush.node()).find('rect.overlay').on('mousedown', function () {
          self.hide();
        });
      });
    }
  }, {
    key: 'hover',
    value: function hover(xPos, yPos, displayData) {
      // Update displayPanel and line based on x position
      this.crossHairs && this.crossHairs.select('line').attr('transform', 'translate(' + xPos + ',0)').attr('x1', this.opts.chart.margin.left).attr('y1', this.opts.chart.margin.top - _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER).attr('x2', this.opts.chart.margin.left).attr('y2', this.opts.chart.chartHeight + this.opts.chart.margin.top);
      this.crossHairs.classed('vc-hidden', false);

      var percentageDiff = xPos / this.opts.chart.chartWidth;

      if (percentageDiff < 0.3) {
        percentageDiff = 0.2;
      }
      if (percentageDiff > 0.7) {
        percentageDiff = 0.95;
      }
      this.$toolTipDiv.css({
        left: Math.round(this.opts.chart.$container.position() // left position of chart on screen
        .left + this.opts.chart.margin.left + xPos - this.$toolTipDiv.width() * percentageDiff) + 'px',
        top: Math.round(this.opts.chart.$container.position() // top position of chart on screen
        .top - this.$toolTipDiv.height() - 5 + _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER * 2) + 'px',
        display: 'inline-block'
      }).html(this.opts.format.call(this.opts.chart, displayData)); // Used format.call(), so that external fun can have access of chart Instance
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;

      if (showFlag) {
        this.$toolTipDiv && this.$toolTipDiv.show();
      } else {
        this.$toolTipDiv && this.$toolTipDiv.hide();
      }

      this.crossHairs && this.crossHairs.classed('vc-hidden', !showFlag);

      this.opts.visible = showFlag;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.$toolTipDiv && this.$toolTipDiv.remove();
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
      var $brushOverlay = null;
      if (xScale) {
        // Create x axis brush for Zoom operation
        this.brushX = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["brushX"])().extent([[0, 0], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]);

        // Use the same mouseBrush for both xBrush and tooltip
        this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush.call(this.brushX);

        $brushOverlay = $(this.brushXDiv.node()).find('rect.overlay');

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
          $brushOverlay.css({
            cursor: 'auto'
          });

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

      $brushOverlay && this.opts.chart.mouseHandler.register(function () {
        // When mouse is clicked or down, enable zoom brush and its mouse cursor
        $brushOverlay.on('mousedown', function () {
          $(this).css({
            cursor: 'col-resize'
          });
        }).on('click', function () {
          $(this).css({
            cursor: 'auto'
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL2xlZ2VuZC9UaW1lU2VyaWVzTGVnZW5kLmpzIiwid2VicGFjazovL3ZjLy4vbW91c2UtaGFuZGxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9MaW5lLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1N0YWNrQXJlYS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9UaW1lU2VyaWVzLmpzIiwid2VicGFjazovL3ZjLy4vdG9vbHRpcC9UaW1lU2VyaWVzVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly92Yy8uL3pvb20vaW5kZXguanMiXSwibmFtZXMiOlsiQXhpcyIsIm9wdHMiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsIm9yaWVudCIsImxhYmVsIiwidW5pdCIsInJhbmdlU2NhbGUiLCJkb21haW5TY2FsZSIsInNjYWxlVHlwZSIsImF4aXNDbGFtcCIsInRpY2tOdW1iZXIiLCJyb3RhdGVUZXh0IiwidGV4dExpbWl0IiwidGlja0Zvcm1hdHRlciIsInNob3dHcmlkTGluZXMiLCJ0aWNrUGFkZGluZyIsImNvbnN0YW50cyIsIlRJQ0tfUEFERElORyIsInNjYWxlUGFkZGluZyIsIlNDQUxFX1BBRERJTkciLCJ2aXNpYmxlIiwiYXhpcyIsInNjYWxlIiwic2NhbGVCYW5kIiwic2NhbGVMaW5lYXIiLCJVTklUU19USU1FIiwic2NhbGVUaW1lIiwiRElSX0JPVFRPTSIsImF4aXNCb3R0b20iLCJESVJfVE9QIiwiYXhpc1RvcCIsInRpY2tTaXplSW5uZXIiLCJjaGFydCIsImNoYXJ0SGVpZ2h0IiwidGlja1ZhbHVlcyIsIkRJUl9MRUZUIiwiYXhpc0xlZnQiLCJESVJfUklHSFQiLCJheGlzUmlnaHQiLCJjaGFydFdpZHRoIiwiaXNGdW5jdGlvbiIsImV4dGVybmFsRm9ybWF0dGVyIiwidmFsIiwic2VsZiIsInVuc2hpZnQiLCJ1cGRhdGUiLCJ0cmFuc2Zvcm1BdHRyIiwiYXhpc1RhZyIsImdyYXBoWm9uZSIsImFwcGVuZCIsImF0dHIiLCJ0aWNrRm9ybWF0IiwiYXhpc0xhYmVsVGFnIiwidGV4dCIsImNsYXNzZWQiLCJ4VHJhbnMiLCJ5VHJhbnMiLCJyb3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJYX0FYSVNfTEFCRUxfWSIsIm1hcmdpbiIsImxlZnQiLCJCUlVTSFlfQlVGRkVSIiwicmlnaHQiLCJsZW5ndGgiLCJwYWRkaW5nIiwiY2xhbXAiLCJyYW5nZSIsImRvbWFpbiIsImlzTnVtYmVyIiwidGlja1ZhbCIsIm5ld1RpY2siLCJkYXlMZW5ndGgiLCJtaW51dGVMZW5ndGgiLCJ0aWNrcyIsImNhbGwiLCJsaW1pdFRleHQiLCJ0aWNrRm10IiwiZW1wdHlGbiIsInNlbGVjdEFsbCIsInN0eWxlIiwiZCIsImkiLCJ0cnVuY2F0ZVRleHQiLCJzaG93RmxhZyIsInJlbW92ZSIsIkNoYXJ0Q29tcG9uZW50IiwiVGltZVNlcmllc0NoYXJ0IiwiY29udGFpbmVyIiwic3RhcnRUaW1lIiwiRGF0ZSIsImRhdGFQYXJzZXIiLCJCYXNpY1RTUGFyc2VyIiwiQ2hhcnRBeGlzUGFyc2VyIiwiRXJyb3IiLCJpc09iamVjdCIsIm9wdGlvbnMiLCJkYXRhRXhlY3V0b3IiLCJhZGREZWZhdWx0VFNPcHRpb25zIiwiY2hhcnRJbml0aWxpemUiLCJkcmF3IiwiYXhpc09wdGlvbnMiLCJ5UmFuZ2UiLCJ5UmFuZ2UyIiwidGltZUluZm8iLCJnZXRPYmplY3QiLCJ5QXhpcyIsImNoYXJ0Q29tcG9uZW50c0FyciIsInB1c2giLCJ5QXhpczIiLCJ0aW1lUmFuZ2UiLCJ4QXhpcyIsInRvb2x0aXBPcHRzIiwidG9vbHRpcCIsIlRvb2x0aXAiLCJ6b29tT3B0cyIsIm1vdXNlSGFuZGxlciIsIk1vdXNlSGFuZGxlciIsInpvb20iLCJ6b29tQnJ1c2giLCJab29tIiwib25ab29tIiwib25YWm9vbSIsIm9uWTFab29tIiwib25ZMlpvb20iLCJzZXJpZXMiLCJUaW1lU2VyaWVzIiwibGVnZW5kIiwibGVnZW5kcyIsIlRpbWVTZXJpZXNMZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJkaXNhYmxlU2VyaWVzVG9nZ2xlIiwib25MZWdlbmRDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYWZ0ZXJEcmF3IiwicmVTY2FsZVlBeGlzIiwiY2hhcnRSZXNwb25zaXZlIiwidHJpZ2dlck1vdXNlQWN0aW9uIiwidGltZURpZmYiLCJnZXRUaW1lIiwib25Db21wbGV0ZSIsImF4aXNTcGVjaWZpZXIiLCJ0aWNrVmFsQXJyIiwiZGlmZlZhbCIsInJhbmdlVmFsIiwieU1heCIsImFwcGx5WTFBeGlzIiwiYXBwbHlZMkF4aXMiLCJtb2RpZnlBeGlzUHJvcHMiLCJyZVNjYWxlQXhpcyIsInJlcXVpcmVkV2lkdGgiLCJjbGFzcyIsIm1heFRleHQiLCJkdW1teUciLCJzdmciLCJ0aWNrc0FyciIsIiRjb250YWluZXIiLCJmaW5kIiwiZWFjaCIsInRpY2tIdG1sIiwiJCIsImRhdGEiLCJlbnRlciIsIlN0cmluZyIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsInJvdW5kIiwiWV9BWElTX1NQQUNFIiwiY2hhcnRGdWxsU3BhY2UiLCJ3aWR0aCIsIkNoYXJ0IiwiZGF0YU9wdGlvbnMiLCJjb25zdHJ1Y3RDaGFydERhdGEiLCJjb25zdHJ1Y3RYQXhpc0luZm8iLCJjb25zdHJ1Y3RQbG90SW5mbyIsImNvbnN0cnVjdFlBeGlzSW5mbyIsImVyciIsIm9uRXJyb3IiLCJyZXNKc29uIiwic2VyaWVzRGF0YSIsInRpbWVzZXJpZXMiLCJjb2x1bW5zIiwidmFsdWVzIiwidmFsaWRKU09OVHlwZSIsInRpbWVTdGFtcEluZGV4IiwiZmlyc3RUaW1lIiwiaXNEYXRlIiwic3RhcnQiLCJmb3JFYWNoIiwiZ2V0RGF0ZUZyb21FcG9jIiwiY2hhcnREYXRhIiwiZGF0YUluZGV4IiwiZWFjaFBsb3RTZXQiLCJwbG90U2V0IiwicGxvdEluZm8iLCJmaW5kRWFjaFBsb3RSYW5nZSIsImtleSIsIm1pbiIsIm1heCIsIm1pblZhbCIsIm1heFZhbCIsInN0YWNrIiwiZWFjaFBsb3QiLCJJbmZpbml0eSIsInBsb3REYXRhIiwidmFsdWVSYW5nZSIsInZhbERhdGEiLCJtZW1iZXJBcnIiLCJzdGFja09yZGVyTWVtYmVycyIsInN1bSIsIm1lbWJlciIsIm5hbWUiLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJpc0Jvb2xlYW4iLCJiYXJPcmRlck1lbWJlcnMiLCJtYXhXaWR0aExlZ2VuZCIsInNwYWNpbmdOYW1lcyIsImdyYXBoT3B0aW9ucyIsImVhY2hQbG90TmFtZXMiLCJsZW5nIiwidGV4dFdpZHRoIiwibWF4TGVuTGVnZW5kIiwidGhpc1dpZHRoIiwiZWxlIiwibWF4VGV4dExlbmd0aCIsInRvZ2dsZVNlcmllcyIsIm1heFlMZW4iLCJoZWlnaHQiLCJmdWxsWUxlbiIsIkxFR0VORF9ZX1NQQUNFIiwiZGl2V2lkdGgiLCJMRUdFTkRfU0hPV19XSURUSCIsImxlZ2VuZERpdiIsInNlcmllc05hbWUiLCJ2aXNpYmxlU2VyaWVzIiwicGxvdE5hbWUiLCJhcHBseVlBeGlzIiwiY3VycmVudFBsb3RJbmZvIiwicmVkcmF3Iiwic0ZsYWciLCJzZWxlY3QiLCJsZWdlbmREaXNwbGF5IiwibGVnZW5kQmxvY2siLCJ4IiwiTEVHRU5EX1NQQUNFIiwieSIsIm9uIiwidGhyb3R0bGUiLCJ0cmFpbGluZyIsIkxFR0VORF9URVhUX1giLCJMRUdFTkRfVEVYVF9ZIiwibGVnTmFtZSIsImlzUGllTGVnZW5kIiwic3Vic3RyaW5nIiwiTEVHRU5EX1JFQ1RfU0laRSIsImhvcml6b250YWxMZWdlbmRXaWR0aCIsIm5vZGUiLCJnZXRCQm94IiwiJGxlZ2VuZFRleHQiLCJiYXNpY1dpZHRoIiwibGVnZW5kUG9zIiwiVkVSVF9QT1NfTEVHRU5EIiwiTEVHRU5EX01BWF9XSURUSCIsImxlZ2VuZFhQb3MiLCJ4QnVmZiIsImxlZ2VuZFlQb3MiLCJkM1N2ZyIsIkRBVEFfSU5URVJWQUxfQlVGRkVSX1giLCJMRUdFTkRfUklHSFRfQlVGRkVSIiwiaHRtbCIsImhpZGUiLCJzaG93IiwicmVnaXN0ZXJGbiIsIm1vdXNlQnJ1c2giLCJ0b3AiLCJpc1RvdWNoU2NyZWVuIiwiY2FsbGJhY2siLCJmdW4iLCJMaW5lIiwibGluZURhdGEiLCJ5QXhpc1RhcmdldCIsInhBeGlzVGFyZ2V0IiwiaW5kZXhPZiIsImxpbmUiLCJkZWZpbmVkIiwibGluZVRhZyIsImNsaXBFbGVtZW50IiwibGluZVdpZHRoIiwiU3RhY2tBcmVhIiwic3RhY2tEYXRhIiwic3RhY2tPcmRlckluZGV4IiwiZmlsdGVyIiwibWFwIiwiZDNTdGFjayIsImFyZWEiLCJ5MCIsInkxIiwia2V5cyIsIm9yZGVyIiwic3RhY2tPcmRlck5vbmUiLCJvZmZzZXQiLCJzdGFja09mZnNldE5vbmUiLCJzdGFja1Zpc2libGVPcmRlciIsInN0YWNrTGF5ZXIiLCJzdGFja01lbWJlciIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiU2VyaWVzIiwiVGltZVNlcmllc1Rvb2x0aXAiLCJjcm9zc0hhaXJzIiwiZW5hYmxlIiwiZm9ybWF0IiwiJHRvb2xUaXBEaXYiLCJhZGRDbGFzcyIsIlRPT0xUSVBfVE9QX0JVRkZFUiIsInJlZ2lzdGVyIiwieFNjYWxlIiwiZGF0ZUluZGV4IiwiZGF0YVNldCIsImJpc2VjdERhdGUiLCJiaXNlY3RvciIsIm1vdXNlRXZ0IiwieE1vdXNlIiwiZDNNb3VzZSIsInlNb3VzZSIsInhWYWwiLCJpbnZlcnQiLCJmb3VuZCIsImRCZWZvcmUiLCJkUHJldiIsImRGb3VuZCIsInRvb2xUaXBEYXRhIiwiZGF0YVBhcnNlTGVuIiwidmlzaWJsZURhdGFJbmRleCIsInBsb3QiLCJtdWx0aUFyck1hcCIsImRTZXQiLCJpbmRleCIsInNvcnQiLCJtYXhJbmQiLCJhcnJTZXQiLCJkYXRlSW50UmFuZ2UiLCJhYnMiLCJob3ZlciIsImV2ZW50TmFtZSIsInhQb3MiLCJ5UG9zIiwiZGlzcGxheURhdGEiLCJwZXJjZW50YWdlRGlmZiIsImNzcyIsImRpc3BsYXkiLCJ5U2NhbGVMZWZ0IiwieVNjYWxlUmlnaHQiLCIkYnJ1c2hPdmVybGF5IiwiYnJ1c2hYIiwiZXh0ZW50IiwiYnJ1c2hYRGl2IiwiZDNFdmVudCIsInNlbGVjdGlvbiIsImQwIiwiZDEiLCJtb3ZlIiwiY3Vyc29yIiwiYnJ1c2hZTGVmdCIsImJydXNoWSIsImJydXNoWUxlZnREaXYiLCJicnVzaFlSaWdodCIsImJydXNoWVJpZ2h0RGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTs7SUFFcUJBLEk7OztBQUNuQixnQkFBYUMsSUFBYixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQSxJQUFMLEdBQVksMkVBQWM7QUFDeEJDLGlCQUFXLEVBRGE7QUFFeEJDLGdCQUFVLEdBRmM7QUFHeEJDLGNBQVEsTUFIZ0I7QUFJeEJDLGFBQU8sRUFKaUI7QUFLeEJDLFlBQU0sRUFMa0I7QUFNeEJDLGtCQUFZLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FOWTtBQU94QkMsbUJBQWEsQ0FBQyxDQUFELEVBQUksR0FBSixDQVBXO0FBUXhCQyxpQkFBVyxFQVJhO0FBU3hCQyxpQkFBVyxJQVRhO0FBVXhCQyxrQkFBWSxJQVZZO0FBV3hCQyxrQkFBWSxLQVhZO0FBWXhCQyxpQkFBVyxDQVphO0FBYXhCQyxxQkFBZSxLQWJTLEVBYUY7QUFDdEJDLHFCQUFlLEtBZFM7QUFleEJDLG1CQUFhQyxrREFBU0EsQ0FBQ0MsWUFmQztBQWdCeEJDLG9CQUFjRixrREFBU0EsQ0FBQ0csYUFoQkE7QUFpQnhCQyxlQUFTO0FBakJlLEtBQWQsRUFrQlRwQixJQWxCUyxDQUFaOztBQW9C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TCxDQUFvQm5ULElBQXBCLENBQXlCLEtBQUtrVCxXQUFMLENBQWlCTCxJQUExQyxFQUFnRCxJQUFoRDtBQUNBLGFBQUtNLGNBQUwsQ0FBb0J6UyxNQUFwQjtBQUNEO0FBQ0QsV0FBS3RGLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUFsTitCdUYsOEQ7O0FBQWJrQyxtRSIsImZpbGUiOiJ0aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtcbiAgYXhpc0JvdHRvbSwgYXhpc1RvcCwgYXhpc0xlZnQsIGF4aXNSaWdodCxcbiAgc2NhbGVCYW5kLCBzY2FsZUxpbmVhciwgc2NhbGVUaW1lXG59IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2VtcHR5Rm4sIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCB0cnVuY2F0ZVRleHR9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHVuaXQ6ICcnLFxuICAgICAgcmFuZ2VTY2FsZTogWzAsIDEwMDBdLFxuICAgICAgZG9tYWluU2NhbGU6IFswLCAxMDBdLFxuICAgICAgc2NhbGVUeXBlOiAnJyxcbiAgICAgIGF4aXNDbGFtcDogdHJ1ZSxcbiAgICAgIHRpY2tOdW1iZXI6IG51bGwsXG4gICAgICByb3RhdGVUZXh0OiBmYWxzZSxcbiAgICAgIHRleHRMaW1pdDogOCxcbiAgICAgIHRpY2tGb3JtYXR0ZXI6IGZhbHNlLCAvLyBVc2UgZDMgdGlja0Zvcm1hdHRlclxuICAgICAgc2hvd0dyaWRMaW5lczogZmFsc2UsXG4gICAgICB0aWNrUGFkZGluZzogY29uc3RhbnRzLlRJQ0tfUEFERElORyxcbiAgICAgIHNjYWxlUGFkZGluZzogY29uc3RhbnRzLlNDQUxFX1BBRERJTkcsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICAvLyBDcmVhdGUgQXhpcyBhbmQgU2NhbGUgYmFzZWQgb24gaW5wdXQgb3B0aW9uc1xuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgICBpZiAodGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZVRpbWUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNCb3R0b20oKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzVG9wKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCkpXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBIb2xkcyBhbGwgdGljayB2YWx1ZXMgdGhhdCBheGlzIHNob3dzXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzTGVmdCgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1JpZ2h0KClcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoMClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpKSB7XG4gICAgICAgIC8vIElmIGV4dGVybmFsIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgbW9kaWZ5IGZvcm1hdHRlciB0byBwb3B1bGF0ZSB0aWNrVmFsdWVzXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRm9ybWF0dGVyID0gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXJcbiAgICAgICAgdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgc2VsZi50aWNrVmFsdWVzLnVuc2hpZnQodmFsKVxuICAgICAgICAgIHJldHVybiBleHRlcm5hbEZvcm1hdHRlcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnRpY2tQYWRkaW5nID4gMCkge1xuICAgICAgdGhpcy5heGlzLnRpY2tQYWRkaW5nKHRoaXMub3B0cy50aWNrUGFkZGluZylcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBeGlzUHJvcHMgKG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBvcHRzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgwLCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0fSlgXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGB2Yy1heGlzIHZjLWF4aXMtJHt0aGlzLm9wdHMub3JpZW50fSB2Yy1heGlzLSR7dGhpcy5vcHRzLmNsYXNzTmFtZX1gKVxuXG5cbiAgICAvLyBJZiBubyBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIGF4aXMgdXNlcyBkMyBkZWZhdWx0IGZvcm1hdHRlclxuICAgIGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpICYmIHRoaXMuYXhpcy50aWNrRm9ybWF0KHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKVxuXG4gICAgLy8gQWRkIExhYmVsIHRvIEF4aXNcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnID0gdGhpcy5heGlzVGFnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzLWxhYmVsJylcbiAgICAgICAgLnRleHQodGhpcy5vcHRzLmxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIC8vIElGIG5vdCB2aXNpYmxlLCBEb250IHNob3cgdGhlIGF4aXMsIGJ1dCBzdGlsbCBzY2FsZSBhbmQgcGxvdCBvbiBncmFwaFpvbmUsIHNvIHRoYXQgYWxsIHNlcmllcyBjYW4gYmUgcGxvdHRlZFxuICAgICF0aGlzLm9wdHMudmlzaWJsZSAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgZ3JhcGggQXhpcyBiYXNlZCBvbiBuZXcgd2lkdGggYW5kIG1vZGlmeSByYW5nZSwgZG9tYWluIGFuZCB0aWNrc1xuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy5vcHRzLnJhbmdlU2NhbGUgPSBbMCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhdXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG5cbiAgICAvLyBQb3NpdGlvbiBsYWJlbCwgc2NhbGUsIHRpY2tzLCBheGlzIGJhc2VkIG9uIGNoYXJ0IHdpZHRoXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgbGV0IHhUcmFucyA9IDBcbiAgICAgIGxldCB5VHJhbnMgPSAwXG4gICAgICBsZXQgcm90YXRlID0gMFxuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHhUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyAyKVxuICAgICAgICB5VHJhbnMgPSBjb25zdGFudHMuWF9BWElTX0xBQkVMX1lcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUIHx8IHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICAgIHhUcmFucyA9IC0odGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KSArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gMjcwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeFRyYW5zID0gdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gOTBcbiAgICAgICAgfVxuICAgICAgICB5VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt4VHJhbnN9LCR7eVRyYW5zfSkgcm90YXRlKCR7cm90YXRlfSlgKVxuICAgIH1cblxuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBsZXQgZG9tYWluU2NhbGUgPSBbdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdLCB0aGlzLm9wdHMuZG9tYWluU2NhbGVbdGhpcy5vcHRzLmRvbWFpblNjYWxlLmxlbmd0aCAtIDFdXVxuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgZG9tYWluU2NhbGUgPSB0aGlzLm9wdHMuZG9tYWluU2NhbGVcbiAgICAgIHRoaXMuc2NhbGVcbiAgICAgICAgLnBhZGRpbmcodGhpcy5vcHRzLnNjYWxlUGFkZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRzLmF4aXNDbGFtcCAmJiB0aGlzLnNjYWxlLmNsYW1wKCkgLy8gQ2xhbXBzIG91dHNpZGUgcmFuZ2UgdmFsdWUgd2l0aGluIHNwZWN0aWZlZCByYW5nZSBhbmQgZG9tYWluXG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZS5yYW5nZSh0aGlzLm9wdHMucmFuZ2VTY2FsZSlcbiAgICAgIC5kb21haW4oZG9tYWluU2NhbGUpXG5cbiAgICB0aGlzLmF4aXMuc2NhbGUodGhpcy5zY2FsZSlcblxuICAgIGlmIChpc051bWJlcih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIGxldCB0aWNrVmFsID0gdGhpcy5vcHRzLnRpY2tOdW1iZXJcbiAgICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4JyAmJiB0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgLy8gbW9kaWZ5IHh0aWNrIHRvIGRpc3BsYXkgbGVzcyB0aWNrcyBvbiBsb3dlciBjaGFydCB3aWR0aCBvciBoYXMgbGVzcyBkYXlzXG4gICAgICAgIGNvbnN0IG5ld1RpY2sgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gNjApXG4gICAgICAgIGNvbnN0IGRheUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpICsgMVxuICAgICAgICBpZiAoZGF5TGVuZ3RoID4gMiAmJiBkYXlMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IGRheUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWludXRlTGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDEwMDApKVxuICAgICAgICBpZiAobWludXRlTGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBtaW51dGVMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdUaWNrIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBuZXdUaWNrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5heGlzLnRpY2tzKHRpY2tWYWwpXG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgdGhpcy5heGlzLnRpY2tzKHRoaXMub3B0cy50aWNrTnVtYmVyKCkpXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyICYmIHRoaXMuYXhpc1RhZy5hdHRyKCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybUF0dHIpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgJiYgdGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZy5jYWxsKHRoaXMuYXhpcylcblxuXG4gICAgY29uc3QgbGltaXRUZXh0ID0gdGhpcy5vcHRzLnRleHRMaW1pdFxuICAgIGNvbnN0IHRpY2tGbXQgPSBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSA/IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyIDogZW1wdHlGblxuXG4gICAgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAnc2xhbnQnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ3knLCAnOCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctMS4wZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3gnLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MCknKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlbW92ZSBBeGlzIEluc3RhbmNlXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5yZW1vdmUoKVxuICAgIHRoaXMuc2NhbGUgPSBudWxsXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IEF4aXMgZnJvbSAnQC9heGlzJ1xuaW1wb3J0IHthZGREZWZhdWx0VFNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCBCYXNpY1RTUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9UaW1lU2VyaWVzVG9vbHRpcCdcbmltcG9ydCBNb3VzZUhhbmRsZXIgZnJvbSAnQC9tb3VzZS1oYW5kbGVyJ1xuaW1wb3J0IFpvb20gZnJvbSAnQC96b29tJ1xuaW1wb3J0IFRpbWVTZXJpZXNMZWdlbmQgZnJvbSAnQC9sZWdlbmQvVGltZVNlcmllc0xlZ2VuZCdcbmltcG9ydCBUaW1lU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1RpbWVTZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXNDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lciwgb3B0cykge1xuICAgIG9wdHMuc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBkYXRhUGFyc2VyIGlzIG5vdCBwYXNzZWRcbiAgICBpZiAoIW9wdHMuZGF0YVBhcnNlcikge1xuICAgICAgb3B0cy5kYXRhUGFyc2VyID0gbmV3IEJhc2ljVFNQYXJzZXIob3B0cylcbiAgICB9XG4gICAgLy8gQ2hlY2sgdGhlIGRhdGFQYXJzZXIgZXhpc3RzIGFuZCBpdHMgaW5zdGFuY2VvZiBDaGFydEF4aXNQYXJzZXJcbiAgICBpZiAoIShvcHRzLmRhdGFQYXJzZXIgaW5zdGFuY2VvZiBDaGFydEF4aXNQYXJzZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRhUGFyc2VyIGluIG9wdGlvbnMgZG9zZW4ndCBoYXZlIGltcGxlbWVudGF0aW9uIG9mIENoYXJ0QXhpc1BhcnNlclwiKVxuICAgIH1cblxuICAgIC8vIENhbGwgUGFyZW50IEltcGxcbiAgICBzdXBlcihjb250YWluZXIsIG9wdHMpXG5cbiAgICAvLyBSdW4gdGhlIGRhdGFQYXJzZXIgZm9yIGdpdmVuIEpTT04gZGF0YVxuICAgIGlmIChpc09iamVjdCh0aGlzLmRhdGFQYXJzZXIpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgdGhpcy5kYXRhUGFyc2VyLmRhdGFFeGVjdXRvcigpKVxuICAgIH1cblxuICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgdG8gY2hhcnRcbiAgICBhZGREZWZhdWx0VFNPcHRpb25zKHRoaXMub3B0aW9ucylcblxuICAgIC8vIEluaXRpbGl6ZSBhbGwgY2hhcnQgY29tcG9uZW50cyBuZWVkZWQgZm9yIHRpbWVTZXJpZXNDaGFydCBvbiBleGFjdCBvcmRlciBiYXNlZCBvbiBlYWNoIGRlcGVuZGVuY2llc1xuICAgIHRoaXMuY2hhcnRJbml0aWxpemUoKVxuXG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHRoaXMuZHJhdygpKVxuICB9XG5cbiAgY2hhcnRJbml0aWxpemUgKCkge1xuICAgIGxldCBheGlzT3B0aW9uc1xuICAgIGNvbnN0IHlSYW5nZSA9IHRoaXMub3B0aW9ucy55UmFuZ2VcbiAgICBjb25zdCB5UmFuZ2UyID0gdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuXG4gICAgaWYgKHlSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMubGVmdCcpXG4gICAgICB0aGlzLnlBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd5JyxcbiAgICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMpXG4gICAgfVxuXG4gICAgaWYgKHlSYW5nZTIpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLnJpZ2h0JylcbiAgICAgIHRoaXMueUF4aXMyID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd5JyxcbiAgICAgICAgb3JpZW50OiAncmlnaHQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UyLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZSAoY2hhcnQgQVBJKVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzMilcbiAgICB9XG5cbiAgICBpZiAodGltZUluZm8udGltZVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy54QXhpcy5ib3R0b20nKVxuICAgICAgdGhpcy54QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneCcsXG4gICAgICAgIG9yaWVudDogJ2JvdHRvbScsXG4gICAgICAgIHJhbmdlU2NhbGU6IFswLCB0aGlzLmNoYXJ0V2lkdGhdLFxuICAgICAgICBkb21haW5TY2FsZTogdGltZUluZm8udGltZVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy54QXhpcylcbiAgICB9XG5cbiAgICBjb25zdCB0b29sdGlwT3B0cyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy50b29sdGlwJylcbiAgICBpZiAodG9vbHRpcE9wdHMudmlzaWJsZSkge1xuICAgICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgLi4udG9vbHRpcE9wdHNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMudG9vbHRpcClcbiAgICB9XG5cbiAgICBjb25zdCB6b29tT3B0cyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy56b29tJywge30pXG4gICAgaWYgKCh0b29sdGlwT3B0cy52aXNpYmxlIHx8IHpvb21PcHRzLnZpc2libGUpKSB7XG4gICAgICB0aGlzLm1vdXNlSGFuZGxlciA9IG5ldyBNb3VzZUhhbmRsZXIoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMubW91c2VIYW5kbGVyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuem9vbS52aXNpYmxlKSB7XG4gICAgICB0aGlzLnpvb21CcnVzaCA9IG5ldyBab29tKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIG9uWm9vbTogdGhpcy5vcHRpb25zLnpvb20ub25YWm9vbSxcbiAgICAgICAgb25ZMVpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWTFab29tLFxuICAgICAgICBvblkyWm9vbTogdGhpcy5vcHRpb25zLnpvb20ub25ZMlpvb21cbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuem9vbUJydXNoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICB0aGlzLnNlcmllcyA9IG5ldyBUaW1lU2VyaWVzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmVcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5zZXJpZXMpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5sZWdlbmQudmlzaWJsZSkge1xuICAgICAgdGhpcy5sZWdlbmRzID0gbmV3IFRpbWVTZXJpZXNMZWdlbmQoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgbGVnZW5kUHJlZml4OiB0aGlzLm9wdGlvbnMubGVnZW5kLmxlZ2VuZFByZWZpeCxcbiAgICAgICAgcG9zaXRpb246IGNvbnN0YW50cy5ESVJfVE9QLFxuICAgICAgICBkaXNhYmxlU2VyaWVzVG9nZ2xlOiB0aGlzLm9wdGlvbnMubGVnZW5kLmRpc2FibGVTZXJpZXNUb2dnbGUsXG4gICAgICAgIG9uTGVnZW5kQ2hhbmdlOiB0aGlzLm9wdGlvbnMubGVnZW5kLm9uTGVnZW5kQ2hhbmdlXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLmxlZ2VuZHMpXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc29sZS5sb2coJ1RpbWVTZXJpZXNDaGFydCBkcmF3JywgdGhpcylcbiAgICBzdXBlci5kcmF3KClcbiAgICB0aGlzLm9wdGlvbnMuYWZ0ZXJEcmF3LmNhbGwodGhpcylcblxuICAgIC8vIEFkZCBFeHRyYSBCdWZmZXIgZm9yIG1heCBZIHZhbHVlIGFuZCBwcm92aWRlIHNwYWNlIHRvIGRpc3BsYXkgYWxsIHRpY2tzIGluIGdyYXBoWm9uZVxuICAgIHRoaXMucmVTY2FsZVlBeGlzKClcblxuICAgIHRoaXMuY2hhcnRSZXNwb25zaXZlKClcblxuICAgIHRoaXMubW91c2VIYW5kbGVyICYmIHRoaXMubW91c2VIYW5kbGVyLnRyaWdnZXJNb3VzZUFjdGlvbigpXG5cbiAgICB0aGlzLnRpbWVEaWZmID0gKG5ldyBEYXRlKClcbiAgICAgIC5nZXRUaW1lKCkgLSB0aGlzLm9wdGlvbnMuc3RhcnRUaW1lLmdldFRpbWUoKSlcbiAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZS5jYWxsKHRoaXMsIHRoaXMudGltZURpZmYpXG4gIH1cblxuICAvLyBGaW5kIG5leHQgcG9zc2libGUgdGljayB0byBkaXNwbGF5IG1heCBZIHZhbHVlIGFuZCBhZGp1c3QgbWFyZ2luIHRvIHNob3cgYWxsIHRpY2sgbGFiZWxzIGNvbXBsZXRlbHlcbiAgcmVTY2FsZVlBeGlzIChheGlzU3BlY2lmaWVyKSB7XG5cbiAgICBsZXQgdGlja1ZhbEFyclxuICAgIGxldCBkaWZmVmFsXG4gICAgbGV0IHJhbmdlVmFsXG4gICAgbGV0IHlNYXhcbiAgICBsZXQgYXBwbHlZMUF4aXMgPSB0cnVlXG4gICAgbGV0IGFwcGx5WTJBeGlzID0gdHJ1ZVxuXG4gICAgaWYgKGF4aXNTcGVjaWZpZXIgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgYXBwbHlZMkF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICBhcHBseVkxQXhpcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgTWF4IHZhbHVlIGlzIHByb3ZpZGVkIGluIG9wdGlvbnMsIERvbnQgY29tcHV0ZSBuZXh0IHBvc3NpYmxlIHRpY2suXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UgJiYgYXBwbHlZMUF4aXMgJiYgIU51bWJlci5pc0Zpbml0ZSh5TWF4KSkge1xuICAgICAgdGlja1ZhbEFyciA9IHRoaXMueUF4aXMudGlja1ZhbHVlc1xuICAgICAgLy8gSWYgdGlja1ZhbEFyciBjb250YWlucyB2YWx1ZXNcbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gRmluZCBkaWZmZXJlbmNlIG9mIGxhc3QgYW5kIGxhc3QgcHJldmlvdXMgdGljayB2YWx1ZXMgb2YgWSBBeGlzXG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICAvLyBOZXcgcmFuZ2UgaXMgaW5jcmVhc2VkIGJ5IGFib3ZlIGRpZmZlcmVuY2VcbiAgICAgICAgcmFuZ2VWYWwgPSB0aWNrVmFsQXJyWzBdICsgZGlmZlZhbFxuXG4gICAgICAgIC8vIE1vZGlmeSBuZXcgbWF4IHJhbmdlIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZVsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IHRoaXMub3B0aW9ucy55UmFuZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB5TWF4ID0gZ2V0T2JqZWN0KHRoaXMub3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UyICYmIGFwcGx5WTJBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzMi50aWNrVmFsdWVzXG5cbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZGlmZlZhbCA9IHRpY2tWYWxBcnJbMF0gLSB0aWNrVmFsQXJyWzFdXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICB0aGlzLm9wdGlvbnMueVJhbmdlMlsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzMi5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkanVzdHMgWSBheGlzIHdpZHRoIGJhc2VkIG9uIG1heCB0ZXh0IGxlbmd0aCBkaXNwbGF5ZWRcbiAgICBjb25zdCByZVNjYWxlQXhpcyA9IHt9XG4gICAgbGV0IHJlcXVpcmVkV2lkdGggPSAwXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZSkge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXSA9IHt9XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLmNsYXNzID0gJy52Yy1heGlzLWxlZnQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLm1heFRleHQgPSAnJ1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMikge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0uY2xhc3MgPSAnLnZjLWF4aXMtcmlnaHQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGR1bW15IHN2ZyB0byBhZGQgTWF4IGxlbmd0aCB0aWNrIHZhbHVlcyBhbmQgY2hlY2sgaXRzIHJlcXVpcmVkIHdpZHRoIGluIGNoYXJ0XG4gICAgY29uc3QgZHVtbXlHID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzJylcblxuICAgIGZvciAoY29uc3QgYXhpcyBpbiByZVNjYWxlQXhpcykge1xuICAgICAgY29uc3QgdGlja3NBcnIgPSB0aGlzLiRjb250YWluZXIuZmluZCgnc3ZnICcgKyByZVNjYWxlQXhpc1theGlzXS5jbGFzcykuZmluZCgndGV4dCcpXG4gICAgICB0aWNrc0Fyci5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGNvbnN0IHRpY2tIdG1sID0gJCh0aWNrc0FycltpXSlcbiAgICAgICAgICAudGV4dCgpIHx8ICcnXG4gICAgICAgIGlmICh0aWNrSHRtbC5sZW5ndGggPiByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQgPSB0aWNrSHRtbFxuICAgICAgICB9XG4gICAgICB9KVxuXG5cbiAgICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgICAuZGF0YShbcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dF0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChTdHJpbmcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gQ29tcHV0ZSByZXF1aXJlZFdpZHRoIGZvciB0aGUgTWF4IHRleHRcbiAgICAgICAgICByZXF1aXJlZFdpZHRoID0gdGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgICAgICAgICQodGhpcykucmVtb3ZlKCkgLy8gcmVtb3ZlIGl0IGp1c3QgYWZ0ZXIgZGlzcGxheWluZ1xuICAgICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgcmVzcGVjdGl2ZSBtYXJnaW4gdG8gZml0IGluIHRpY2tzIHRleHRcbiAgICAgIHRoaXMubWFyZ2luW2F4aXNdID0gTWF0aC5yb3VuZChyZXF1aXJlZFdpZHRoKSArIGNvbnN0YW50cy5ZX0FYSVNfU1BBQ0VcblxuICAgIH1cbiAgICBkdW1teUcucmVtb3ZlKClcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9ICh0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IHtnZXREYXRlRnJvbUVwb2MsIGdldE9iamVjdCwgcmVmaW5lU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc0Jvb2xlYW59IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNUU1BhcnNlciBleHRlbmRzIENoYXJ0QXhpc1BhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cylcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gIH1cblxuICBkYXRhRXhlY3V0b3IgKCkge1xuICAgIC8vIE9yZGVyIGluIHdoaWNoIHRoZSBEYXRhUHJvY2Vzc29yIEFQSXMgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLmRhdGFPcHRpb25zID0ge31cbiAgICAgIHRoaXMub3B0cy5kYXRhICYmICh0aGlzLmRhdGFPcHRpb25zLmRhdGEgPSB0aGlzLm9wdHMuZGF0YSlcbiAgICAgIHRoaXMub3B0cy5zZXJpZXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMuc2VyaWVzID0gdGhpcy5vcHRzLnNlcmllcylcbiAgICAgIHRoaXMub3B0cy55QXhpcyAmJiAodGhpcy5kYXRhT3B0aW9ucy55QXhpcyA9IHRoaXMub3B0cy55QXhpcylcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdENoYXJ0RGF0YSgpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFhBeGlzSW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFBsb3RJbmZvKCkpXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgIHJldHVybiB0aGlzLmRhdGFPcHRpb25zXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbmNvdW50ZXJlZCB3aGlsZSB0aW1lc2VyaWVzIEpTT04gcGFyc2luZyA6JywgZXJyKVxuICAgICAgdGhpcy5vcHRzLm9uRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgLSBFcnJvciBvbiB0aW1lc2VyaWVzIEpTT04gcGFyc2luZycpXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0Q2hhcnREYXRhICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgY29uc3QgZGF0YSA9IHNlcmllc0RhdGEudmFsdWVzXG4gICAgY29uc3QgdmFsaWRKU09OVHlwZSA9IChjb2x1bW5zLmxlbmd0aCAmJiBkYXRhLmxlbmd0aClcblxuICAgIC8vIEZpbmQgc2Vjb25kcyBpbiB1bml0QXJyIHRvIGZpbmQgdGhlIHRpbWVTdGFtcEluZGV4XG4gICAgY29uc3QgdGltZVN0YW1wSW5kZXggPSAwXG4gICAgY29uc3QgZmlyc3RUaW1lID0gZGF0YVswXVt0aW1lU3RhbXBJbmRleF1cbiAgICBpZiAoIXZhbGlkSlNPTlR5cGUgfHwgIShpc051bWJlcihmaXJzdFRpbWUpIHx8IGlzRGF0ZShmaXJzdFRpbWUpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFRpbWUgc2VyaWVzIEpTT04gcmVjZWl2ZWQnKVxuICAgIH1cblxuICAgIGxldCBzdGFydCA9IDBcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmIChzdGFydCA+IGRbdGltZVN0YW1wSW5kZXhdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkOiBUaW1lc3RhbXAgVmFsdWVzIG11c3QgYmUgaW4gYXNjZW5kaW5nIG9yZGVyJylcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gZFt0aW1lU3RhbXBJbmRleF1cbiAgICAgIGRbdGltZVN0YW1wSW5kZXhdID0gZ2V0RGF0ZUZyb21FcG9jKGRbdGltZVN0YW1wSW5kZXhdLCB0cnVlKSAvLyBjb252ZXJ0IEVQT0MgdG8gZGF0ZVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhcnREYXRhOiBkYXRhXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WEF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gZGF0YU9wdGlvbnMuY2hhcnREYXRhXG4gICAgY29uc3QgZGF0YUluZGV4ID0gMFxuICAgIHJldHVybiB7XG4gICAgICB0aW1lSW5mbzoge1xuICAgICAgICBkYXRhSW5kZXgsXG4gICAgICAgIHRpbWVSYW5nZTogW3Nlcmllc0RhdGFbMF1bZGF0YUluZGV4XSwgc2VyaWVzRGF0YVsoc2VyaWVzRGF0YS5sZW5ndGggLSAxKV1bZGF0YUluZGV4XV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RZQXhpc0luZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gZGF0YU9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IHBsb3RJbmZvID0gZGF0YU9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IHlBeGlzID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdCcpXG4gICAgY29uc3QgeUF4aXMyID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQnKVxuICAgIGxldCBmaW5kRWFjaFBsb3RSYW5nZSA9IGZhbHNlXG4gICAgbGV0IGtleVxuICAgIGxldCB5UmFuZ2UgPSBudWxsXG4gICAgbGV0IHlSYW5nZTIgPSBudWxsXG5cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpcy5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpcy5tYXgpKSB7XG4gICAgICAgIHlSYW5nZSA9IFt5QXhpcy5taW4sIHlBeGlzLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeUF4aXMyKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWF4KSkge1xuICAgICAgICB5UmFuZ2UyID0gW3lBeGlzMi5taW4sIHlBeGlzMi5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgeVJhbmdlIGlzIG5vdCBzZXQgZnJvbSBncmFwaE9wdGlvbnMsIHRoZW4gZ28gaW5zaWRlXG4gICAgaWYgKCh5QXhpcyAmJiAheVJhbmdlKSB8fCAoeUF4aXMyICYmICF5UmFuZ2UyKSkge1xuXG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1pblZhbCkgfHwgIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1heFZhbCkpIHtcbiAgICAgICAgICBmaW5kRWFjaFBsb3RSYW5nZSA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgocGxvdEluZm8uc3RhY2sgJiYgcGxvdEluZm8uc3RhY2subGVuZ3RoKSB8fCBmaW5kRWFjaFBsb3RSYW5nZSkge1xuXG4gICAgICAgIGlmIChmaW5kRWFjaFBsb3RSYW5nZSkge1xuICAgICAgICAgIC8vIFJlc2V0IHJhbmdlIGZvciBlYWNoIHBsb3QgZm9yIGZpbmRpbmcgbWluICwgbWF4XG4gICAgICAgICAgZWFjaChlYWNoUGxvdFNldCwgZnVuY3Rpb24gKGVhY2hQbG90KSB7XG4gICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSBJbmZpbml0eVxuICAgICAgICAgICAgZWFjaFBsb3QubWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IHN0YWNrIHJhbmdlIGZvciBlYWNoIHN0YWNrIGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIGxldCB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAgIGVhY2goZWFjaFBsb3RTZXQsIGZ1bmN0aW9uIChlYWNoUGxvdCkge1xuICAgICAgICAgICAgICB2YWxEYXRhID0gZFtlYWNoUGxvdC5kYXRhSW5kZXhdXG4gICAgICAgICAgICAgIGlmICh2YWxEYXRhIDwgZWFjaFBsb3QubWluVmFsKSB7XG4gICAgICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gdmFsRGF0YVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh2YWxEYXRhID4gZWFjaFBsb3QubWF4VmFsKSB7XG4gICAgICAgICAgICAgICAgZWFjaFBsb3QubWF4VmFsID0gdmFsRGF0YVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgICAgbGV0IHN1bSA9IDBcbiAgICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgc3VtICs9IChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSA/IGRbZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLmRhdGFJbmRleF0gOiAwKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHN1bSA8IHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0pIHtcbiAgICAgICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZVswXSA9IHN1bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bSA+IHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0pIHtcbiAgICAgICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZVsxXSA9IHN1bVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgTWF4IHZhbHVlIHJlcXVpcmVkIHRvIHBsb3Qgb24gZ3JhcGggYmFzZWQgb24gdmlzaWJsZSBwbG90IGZ1bmN0aW9uIC4gaS5lIGxpbmUgb3Igc3RhY2tcbiAgICAgIGxldCBhbGxNYXggPSAtSW5maW5pdHlcbiAgICAgIGxldCBhbGxNYXgyID0gLUluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgICBpZiAoa2V5ID09PSAnbGluZScpIHtcbiAgICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLm1heFZhbCA+IGFsbE1heCkge1xuICAgICAgICAgICAgICBhbGxNYXggPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlICYmIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLm1heFZhbCA+IGFsbE1heDIpIHtcbiAgICAgICAgICAgICAgYWxsTWF4MiA9IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLm1heFZhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgcGxvdERhdGEudmFsdWVSYW5nZVsxXSA+IGFsbE1heCkge1xuICAgICAgICAgICAgICBhbGxNYXggPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxvdERhdGEucGxvdEF4aXNbMF0gPT09ICdyaWdodCcgJiYgcGxvdERhdGEudmFsdWVSYW5nZVsxXSA+IGFsbE1heDIpIHtcbiAgICAgICAgICAgICAgYWxsTWF4MiA9IHBsb3REYXRhLnZhbHVlUmFuZ2VbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgbWluIHZhbHVlIGp1c3QgYnkgY2hlY2tpbmcgbWluIHZhbHVlIGFtb25nIGFsbCBzZXJpZXMgZGF0YVxuICAgICAgbGV0IGFsbE1pbiA9IEluZmluaXR5XG4gICAgICBsZXQgYWxsTWluMiA9IEluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbikge1xuICAgICAgICAgIGFsbE1pbiA9IGVhY2hQbG90U2V0W2tleV0ubWluVmFsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdyaWdodCcgJiYgZWFjaFBsb3RTZXRba2V5XS52aXNpYmxlICYmIGVhY2hQbG90U2V0W2tleV0ubWluVmFsIDwgYWxsTWluMikge1xuICAgICAgICAgIGFsbE1pbjIgPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgbGV0IHlNaW4sIHlNYXhcbiAgICAgIC8vIElmIFlheGlzIHJhbmdlIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBvcHRpb25zLCBPdmVycmlkZSBpdC5cbiAgICAgIGlmIChbYWxsTWluLCBhbGxNYXhdLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKGEpICYmIE51bWJlci5pc0Zpbml0ZShiKVxuICAgICAgfSkpIHtcbiAgICAgICAgeU1pbiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW5cbiAgICAgICAgeU1heCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQubWF4JylcbiAgICAgICAgeU1heCA9IE51bWJlci5pc0Zpbml0ZSh5TWF4KSA/IHlNYXggOiBhbGxNYXhcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UgPSBbeU1pbiwgeU1heF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh5QXhpcykge1xuICAgICAgICAgIHlSYW5nZSA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgaWYgKFthbGxNaW4yLCBhbGxNYXgyXS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5taW4nKVxuICAgICAgICB5TWluID0gTnVtYmVyLmlzRmluaXRlKHlNaW4pID8geU1pbiA6IGFsbE1pbjJcbiAgICAgICAgeU1heCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4MlxuICAgICAgICBpZiAoIXlNYXgpIHtcbiAgICAgICAgICB5TWF4ID0geU1pbiArIDgwIC8vIFNldCBhcyBkZWZhdWx0IDEwMCBpZiByYW5nZSBpcyBbMCwwXVxuICAgICAgICB9XG4gICAgICAgIHlSYW5nZTIgPSBbeU1pbiwgeU1heF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh5QXhpczIpIHtcbiAgICAgICAgICB5UmFuZ2UyID0gWzAsIDgwXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlSYW5nZTIgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeVJhbmdlOiB5UmFuZ2UsXG4gICAgICB5UmFuZ2UyOiB5UmFuZ2UyXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0UGxvdEluZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHJlc0pzb24gPSBkYXRhT3B0aW9ucy5kYXRhXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IHJlc0pzb24udGltZXNlcmllc1xuICAgIGNvbnN0IGNvbHVtbnMgPSBzZXJpZXNEYXRhLmNvbHVtbnNcbiAgICBsZXQgaW5kID0gMFxuICAgIC8vIE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBwbG90IGZ1bmN0aW9ucyBuZWVkZWQgZm9yIHRoZSBjaGFydFxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0ge31cbiAgICAvLyBTZXQgb2YgcnVsZXMgdGhhdCBjaGFydHMgbmVlZHMgdG8gYmUgZHJhdyBvbiB0aW1lU2VyaWVzQ2hhcnRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGxldCBrZXlcblxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gZGF0YU9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4XG4gICAgY29uc3QgZGF0YUNvbG9yQXJyID0gc2VyaWVzRGF0YS5jb2xvciB8fCBbXVxuICAgIGNvbnN0IHlMZWZ0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdCcpXG4gICAgY29uc3QgeVJpZ2h0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQnKVxuXG4gICAgLy8gR2VuZXJhdGUgZWFjaFBsb3RTZXQgdXNpbmcgY29sdW1uc1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKHRpbWVTdGFtcEluZGV4ID09PSBpbmQpIHtcbiAgICAgICAgaW5kKytcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyBDb252ZXJ0IHRoZSBTZXJpZXMgTmFtZSB0byBKUyBzdWl0YWJsZSBvYmplY3QgbWFwcGVkIG5hbWUgZXg6IGFiYyglKSAxIC0tPiBhYmMxXG4gICAgICBjb25zdCByZWZpbmVOYW1lID0gcmVmaW5lU3RyaW5nKGQpXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXSA9IHtcbiAgICAgICAgbmFtZTogZCxcbiAgICAgICAgZGF0YUluZGV4OiBpbmQsXG4gICAgICAgIG1pblZhbDogSW5maW5pdHksXG4gICAgICAgIG1heFZhbDogLUluZmluaXR5LFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjogZGF0YUNvbG9yQXJyW2luZF0gfHwgJyMwMDAnXG4gICAgICB9XG4gICAgICBpbmQrK1xuICAgIH0pXG5cblxuICAgIGZvciAoa2V5IGluIHBsb3RJbmZvKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbGluZScpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIHBsb3REYXRhLm5hbWUgPSByZWZpbmVTdHJpbmcocGxvdERhdGEubmFtZSlcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHBsb3REYXRhLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgIHRocm93IGBDb2xvciBub3QgcHJlc2VudCBmb3Igc2VyaWVzICR7cGxvdERhdGEubmFtZX1gXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gcGxvdERhdGEucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICBpc0Jvb2xlYW4ocGxvdERhdGEudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgPSBwbG90RGF0YS52aXNpYmxlKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdGFjaycpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLnN0YWNrT3JkZXJNZW1iZXJzXG4gICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZSA9IFtJbmZpbml0eSwgLUluZmluaXR5XVxuICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgIG1lbWJlci5uYW1lID0gcmVmaW5lU3RyaW5nKG1lbWJlci5uYW1lKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBtZW1iZXIuY29sb3IgLy8gQXBwbHkgY29sb3IgZm9yIGVhY2ggUGxvdCBzZXJpZXMgb3IgcGljayBmcm9tIGRhdGEgY29sb3IgQXJyXG4gICAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IGBDb2xvciBub3QgcHJlc2VudCBmb3Igc2VyaWVzICR7cGxvdERhdGEubmFtZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLmNvbG9yID0gY29sb3IpXG4gICAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IG1lbWJlci5wbG90QXhpcyB8fCBbJ2xlZnQnLCAnYm90dG9tJ11cbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpcyA9IHBsb3RBeGlzXG4gICAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgICBpc0Jvb2xlYW4obWVtYmVyLnZpc2libGUpICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSA9IG1lbWJlci52aXNpYmxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2JhcicpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLmJhck9yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXJpZXM6IHBsb3RJbmZvLCAvLyBuZXdseSB1cGRhdGVkIHNlcmllcyBmcm9tIHVzZXIgb3B0aW9ucyBoYXZpbmcgYWRkaXRpb25hbCBpbmZvIG9mIGVhY2ggc2VyaWVzXG4gICAgICBwbG90U2V0OiBlYWNoUGxvdFNldCwgLy8gSW5mbyBvZiBlYWNoIHBsb3QgbGlrZSBjb2xvciwgbWF4LCBtaW4gZXRjXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtlbXB0eUZuLCBpc0Z1bmN0aW9uLCB0aHJvdHRsZX0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXNMZWdlbmQgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZGlzYWJsZVNlcmllc1RvZ2dsZTogZmFsc2VcbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgPSAwXG4gICAgdGhpcy5vcHRzLnNwYWNpbmdOYW1lcyA9IFtdXG5cblxuICAgIGNvbnN0IGdyYXBoT3B0aW9ucyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBncmFwaE9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IGVhY2hQbG90TmFtZXMgPSBPYmplY3Qua2V5cyhlYWNoUGxvdFNldClcbiAgICBsZXQgbGVuZyA9IDBcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBbXVxuICAgIGxldCBtYXhMZW5MZWdlbmRcblxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAvLyBBZGQgYWxsIG5hbWUgb24gRE9NIHRvIGNhbGN1bGF0ZSBob3cgbXVjaCBzcGFjZSBpcyBuZWVkZWQgZm9yIGV2ZXJ5IG5hbWVzXG4gICAgZHVtbXlHLnNlbGVjdEFsbCgnLmR1bW15VGV4dCcpXG4gICAgICAuZGF0YShlYWNoUGxvdE5hbWVzKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1sYWJlbCcpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMXB4JylcbiAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnNTAwJylcbiAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAoc2VsZi5vcHRzLmxlZ2VuZFByZWZpeCArIChlYWNoUGxvdFNldFtkXSA/IGVhY2hQbG90U2V0W2RdLm5hbWUgOiAnJykpXG4gICAgICB9KVxuICAgICAgLmVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgLy8gRmluZCBzaXplIHJlcXVpcmVkIGZvciBlYWNoIGxlZ2VuZCBvbiBzY3JlZW5cbiAgICAgICAgY29uc3QgdGhpc1dpZHRoID0gTWF0aC5yb3VuZCh0aGlzLmdldENvbXB1dGVkVGV4dExlbmd0aCgpKVxuICAgICAgICBpZiAodGhpc1dpZHRoID4gc2VsZi5vcHRzLm1heFdpZHRoTGVnZW5kKSB7XG4gICAgICAgICAgc2VsZi5vcHRzLm1heFdpZHRoTGVnZW5kID0gdGhpc1dpZHRoXG4gICAgICAgICAgbWF4TGVuTGVnZW5kID0gZFxuICAgICAgICB9XG4gICAgICAgIHRleHRXaWR0aC5wdXNoKHRoaXNXaWR0aClcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKSAvLyByZW1vdmUgdGhlbSBqdXN0IGFmdGVyIGRpc3BsYXlpbmcgdGhlbVxuICAgICAgfSlcblxuICAgIC8vIEZpbGwgdGhlIHNwYWNpbmcgQXJyIGhhdmluZyBwb3NpdGlvbiBmb3IgZWFjaCBsZWdlbmRzIG9uIGhvcml6b250YWwgb3JkZXJcbiAgICB0ZXh0V2lkdGguZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICBsZW5nICs9IGVsZVxuICAgICAgc2VsZi5vcHRzLnNwYWNpbmdOYW1lcy5wdXNoKGxlbmcpXG4gICAgfSlcblxuICAgIC8vIE1ha2UgbWF4VGV4dExlbmd0aCBIaWdoZXIgdG8gc2hvdyBmdWxsIHRleHQgZm9yIHBpZSBsZWdlbmRzXG4gICAgdGhpcy5vcHRzLm1heFRleHRMZW5ndGggPSBtYXhMZW5MZWdlbmQubGVuZ3RoICsgMTAwXG5cbiAgICBkdW1teUcucmVtb3ZlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBncmFwaE9wdGlvbnMgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9uc1xuICAgIGxldCB0b2dnbGVTZXJpZXMgPSBlbXB0eUZuXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBncmFwaE9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IGVhY2hQbG90TmFtZXMgPSBPYmplY3Qua2V5cyhlYWNoUGxvdFNldClcbiAgICBjb25zdCBtYXhZTGVuID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0ICogOTAgLyAxMDApXG4gICAgbGV0IGZ1bGxZTGVuID0gZWFjaFBsb3ROYW1lcy5sZW5ndGggKiBjb25zdGFudHMuTEVHRU5EX1lfU1BBQ0VcbiAgICBmdWxsWUxlbiA9IGZ1bGxZTGVuID4gbWF4WUxlbiA/IG1heFlMZW4gOiBmdWxsWUxlblxuICAgIGNvbnN0IGRpdldpZHRoID0gdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kICsgY29uc3RhbnRzLkxFR0VORF9TSE9XX1dJRFRIXG5cbiAgICB0aGlzLm9wdHMubGVnZW5kRGl2ID0ge1xuICAgICAgd2lkdGg6IGRpdldpZHRoLFxuICAgICAgaGVpZ2h0OiBmdWxsWUxlblxuICAgIH1cblxuXG4gICAgLy8gUGVyZm9tIFNlcmllcyBzaG93IGFuZCBoaWRlIG9uIGNsaWNrIG9mIGVhY2ggbGVnZW5kXG4gICAgaWYgKCF0aGlzLm9wdHMuZGlzYWJsZVNlcmllc1RvZ2dsZSkge1xuXG4gICAgICB0b2dnbGVTZXJpZXMgPSBmdW5jdGlvbiAoc2VyaWVzTmFtZSkge1xuICAgICAgICBsZXQgdmlzaWJsZVNlcmllcyA9IDBcbiAgICAgICAgbGV0IHBsb3ROYW1lXG5cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Nlcmllc05hbWVdICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdLnZpc2libGUpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgc2VyaWVzIGlzIGdldHRpbmcgZGlzYWJsZWQgYW5kIGl0cyBvbmx5IG9uZSBzZXJpZXMgdmlzaWJsZSwgRG9udCBkaXNhYmxlIGl0LlxuICAgICAgICAgIGZvciAocGxvdE5hbWUgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3ROYW1lXS52aXNpYmxlICYmIHZpc2libGVTZXJpZXMrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2aXNpYmxlU2VyaWVzIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcHBseVlBeGlzXG5cbiAgICAgICAgLy8gcGxvdFNlcmllcyB0aGF0IGlzIGdldHRpbmcgdG9nZ2xlZFxuICAgICAgICBsZXQgY3VycmVudFBsb3RJbmZvXG5cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0ICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdKSB7XG4gICAgICAgICAgY3VycmVudFBsb3RJbmZvID0gZWFjaFBsb3RTZXRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGN1cnJlbnRQbG90SW5mbykge1xuXG4gICAgICAgICAgY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGUgPSAhY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGVcblxuICAgICAgICAgIGlmIChjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0ucGxvdEF4aXNbMF0gPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgY29tcHV0ZSBtYXggYW5kIG1pbiB2YWx1ZSBmb3IgWUF4aXMgYmFzZWQgb24gc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYub3B0cy5jaGFydC5vcHRpb25zLCBzZWxmLm9wdHMuY2hhcnQuZGF0YVBhcnNlci5jb25zdHJ1Y3RZQXhpc0luZm8oKSlcblxuICAgICAgICAgICAgYXBwbHlZQXhpcyA9IGNvbnN0YW50cy5ESVJfTEVGVFxuICAgICAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgICAgIGRvbWFpblNjYWxlOiBncmFwaE9wdGlvbnMueVJhbmdlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0ucGxvdEF4aXNbMF0gPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcblxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGNvbXB1dGUgbWF4IGFuZCBtaW4gdmFsdWUgZm9yIFlBeGlzIGJhc2VkIG9uIHNlcmllcyB3aGljaCBhcmUgdmlzaWJsZVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLm9wdHMuY2hhcnQub3B0aW9ucywgc2VsZi5vcHRzLmNoYXJ0LmRhdGFQYXJzZXIuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgICAgICAgIGFwcGx5WUF4aXMgPSBjb25zdGFudHMuRElSX1JJR0hUXG4gICAgICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgICAgIGRvbWFpblNjYWxlOiBncmFwaE9wdGlvbnMueVJhbmdlMlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGp1c3QgWUF4aXMgdGljayB2YWx1ZSBkaXNwbGF5IGJhc2VkIG9uIHlBeGlzIGNoYW5nZVxuICAgICAgICAgIHNlbGYub3B0cy5jaGFydC5yZVNjYWxlWUF4aXMoYXBwbHlZQXhpcylcblxuICAgICAgICAgIC8vIFJlZHJhdyBhbGwgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIHlBeGlzIGNoYW5nZVxuICAgICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMucmVkcmF3KClcblxuICAgICAgICAgIGNvbnN0IHNGbGFnID0gY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnZpc2libGVcblxuICAgICAgICAgIHNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3ZjLWZpbGwtaGlkZGVuJywgIXNGbGFnKVxuXG4gICAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25MZWdlbmRDaGFuZ2UpICYmIHNlbGYub3B0cy5vbkxlZ2VuZENoYW5nZS5jYWxsKHNlbGYub3B0cy5jaGFydCwgY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLCBzRmxhZylcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1ncm91cCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgxNSwgNSknKVxuXG4gICAgdGhpcy5sZWdlbmRCbG9jayA9IHRoaXMubGVnZW5kRGlzcGxheVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShlYWNoUGxvdE5hbWVzKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIC8vIFByb3ZpZGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBiYXNlZCBvbiBvcmRlclxuICAgICAgICBpZiAoc2VsZi5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICAgIGNvbnN0IHggPSBzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSA/IChzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSArIGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpKSA6IDBcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsIDApJ1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICAgIC8vIFByb3ZpZGUgdmVydGljYWwgcG9zaXRpb24gYmFzZWQgb24gb3JkZXJcbiAgICAgICAgICBjb25zdCB5ID0gaSAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKDAgLCcgKyB5ICsgJyknXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gJ3ZjLWxlZ2VuZCB2Yy1sZWdlbmQtJyArIGRcbiAgICAgIH0pXG4gICAgICAuY2xhc3NlZCgndmMtZmlsbC1oaWRkZW4nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2RdID8gIWVhY2hQbG90U2V0W2RdLnZpc2libGUgOiBmYWxzZSlcbiAgICAgIH0pXG5cbiAgICAvLyBMaXN0ZW4gdG8gY2xpY2sgZXZlbnQgb25seSBmb3IgdGltZXNlcmllcyBsZWdlbmRzXG4gICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgLm9uKCdjbGljaycsIHRocm90dGxlKHRvZ2dsZVNlcmllcywgMzAwLCB7IC8vIFNvbWV0aW1lcyB0b2dnbGUgZXZlbnQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzLCBoZW5jZSBibG9jayBieSBhZGRpbmcgdGhyb3R0bGVcbiAgICAgICAgdHJhaWxpbmc6IGZhbHNlXG4gICAgICB9KSlcblxuXG4gICAgdGhpcy5sZWdlbmRCbG9jay5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1sYWJlbCcpXG4gICAgICAuYXR0cigneCcsIGNvbnN0YW50cy5MRUdFTkRfVEVYVF9YKVxuICAgICAgLmF0dHIoJ3knLCBjb25zdGFudHMuTEVHRU5EX1RFWFRfWSlcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzExcHgnKVxuICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc1MDAnKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IGxlZ05hbWUgPSAoc2VsZi5vcHRzLmxlZ2VuZFByZWZpeCArIChlYWNoUGxvdFNldFtkXSA/IGVhY2hQbG90U2V0W2RdLm5hbWUgOiAnJykpXG4gICAgICAgIGlmIChzZWxmLm9wdHMuaXNQaWVMZWdlbmQgJiYgc2VsZi5vcHRzLm1heFRleHRMZW5ndGggPCBsZWdOYW1lLmxlbmd0aCkge1xuICAgICAgICAgIGxlZ05hbWUgPSBsZWdOYW1lLnN1YnN0cmluZygwLCBzZWxmLm9wdHMubWF4VGV4dExlbmd0aCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWdOYW1lXG4gICAgICB9KVxuXG5cbiAgICB0aGlzLmxlZ2VuZEJsb2NrLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWJveCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cignd2lkdGgnLCBjb25zdGFudHMuTEVHRU5EX1JFQ1RfU0laRSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBjb25zdGFudHMuTEVHRU5EX1JFQ1RfU0laRSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0uY29sb3IgOiAnJ1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzJweCcpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZF0gPyBlYWNoUGxvdFNldFtkXS5jb2xvciA6ICcnXG4gICAgICB9KVxuXG4gICAgdGhpcy5vcHRzLmhvcml6b250YWxMZWdlbmRXaWR0aCA9IE1hdGgucm91bmQodGhpcy5sZWdlbmREaXNwbGF5Lm5vZGUoKVxuICAgICAgLmdldEJCb3goKVxuICAgICAgLndpZHRoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIC8vIERpc3BsYXkgaW4gdmVydGljYWwgb3JkZXJcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0ICRsZWdlbmRUZXh0ID0gdGhpcy5vcHRzLmNoYXJ0LiRjb250YWluZXIuZmluZCgnc3ZnIC52Yy1sZWdlbmQtbGFiZWwnKVxuICAgIGxldCBiYXNpY1dpZHRoID0gdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodFxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgLy8gRGlzcGxheSBsZWdlbmRzIHZlcnRpY2FsbHkgb24gcmlnaHQgc2lkZVxuICAgICAgYmFzaWNXaWR0aCArPSBjb25zdGFudHMuTEVHRU5EX1NIT1dfV0lEVEhcbiAgICAgIGxldCBsZWdlbmRQb3MgPSBjb25zdGFudHMuVkVSVF9QT1NfTEVHRU5EXG4gICAgICBpZiAodGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID09PSBjb25zdGFudHMuTEVHRU5EX01BWF9XSURUSCkge1xuICAgICAgICBsZWdlbmRQb3MgPSBjb25zdGFudHMuVkVSVF9QT1NfTEVHRU5EICsgMTBcbiAgICAgIH1cbiAgICAgIGxldCBsZWdlbmRYUG9zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIGxlZ2VuZFBvcyAvIDEwMClcbiAgICAgIGxldCB4QnVmZiA9IHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gbGVnZW5kWFBvc1xuICAgICAgeEJ1ZmYgPSBNYXRoLmZsb29yKCh4QnVmZiAtIHRoaXMub3B0cy5sZWdlbmREaXYud2lkdGgpIC8gMilcbiAgICAgIGxlZ2VuZFhQb3MgKz0geEJ1ZmZcblxuICAgICAgY29uc3QgbGVnZW5kWVBvcyA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5jaGFydC5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgLSB0aGlzLm9wdHMubGVnZW5kRGl2LmhlaWdodCkgLyAyKVxuXG4gICAgICB0aGlzLmxlZ2VuZERpc3BsYXlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGxlZ2VuZFhQb3MgKyAnLCcgKyBsZWdlbmRZUG9zICsgJyknKVxuXG4gICAgfVxuXG4gICAgY29uc3QgZDNTdmcgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnXG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgYmFzaWNXaWR0aCA9IGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBzZWxmLm9wdHMuc3BhY2luZ05hbWVzLmxlbmd0aCArIGNvbnN0YW50cy5EQVRBX0lOVEVSVkFMX0JVRkZFUl9YXG5cbiAgICAgIGlmICgodGhpcy5vcHRzLmhvcml6b250YWxMZWdlbmRXaWR0aCArIGNvbnN0YW50cy5MRUdFTkRfUklHSFRfQlVGRkVSKSA+IHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSB7XG4gICAgICAgIC8vIEhpZGUgb25seSB0ZXh0IGFuZCBkaXNwbGF5IENvbG9yIGJveCB3aXRoIHRvb2x0aXBcbiAgICAgICAgZDNTdmcuc2VsZWN0QWxsKCcudmMtbGVnZW5kJylcbiAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzZXJpZXNOYW1lID0gc2VsZWN0KHRoaXMpLnNlbGVjdCgndGV4dCcpLmh0bWwoKVxuICAgICAgICAgICAgc2VsZWN0KHRoaXMpLnNlbGVjdCgncmVjdCcpXG4gICAgICAgICAgICAgIC5odG1sKCcnKVxuICAgICAgICAgICAgICAuYXBwZW5kKCdzdmc6dGl0bGUnKVxuICAgICAgICAgICAgICAudGV4dChzZXJpZXNOYW1lKVxuICAgICAgICAgIH0pXG4gICAgICAgICRsZWdlbmRUZXh0LmhpZGUoKVxuXG4gICAgICAgIGlmIChzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCA8IGJhc2ljV2lkdGgpIHtcbiAgICAgICAgICAvLyBkaXNwbGF5IGJveCB2ZXJ0aWNhbGx5XG4gICAgICAgICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHkgPSBpICogY29uc3RhbnRzLkxFR0VORF9ZX1NQQUNFXG4gICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKDAsJyArIHkgKyAnKSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGlzcGxheSBvbmx5IGJveCBvbiB0b3BcbiAgICAgICAgICB0aGlzLmxlZ2VuZEJsb2NrXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpXG4gICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywgMCknXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEaXNwbGF5IGxlZ2VuZCBvbiB0b3Agd2l0aCBib3RoIHRleHQsIGJveCBhbmQgcmVtb3ZlIHRvb2x0aXBcbiAgICAgICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IHNlbGYub3B0cy5zcGFjaW5nTmFtZXNbaSAtIDFdID8gKHNlbGYub3B0cy5zcGFjaW5nTmFtZXNbaSAtIDFdICsgY29uc3RhbnRzLkxFR0VORF9TUEFDRSAqIGkpIDogMFxuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHggKyAnLCAwKSdcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRzLmlzUGllTGVnZW5kKSB7XG4gICAgICAgICAgZDNTdmcuc2VsZWN0QWxsKCcudmMtbGVnZW5kJylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZWN0KHRoaXMpLnNlbGVjdCgncmVjdCcpXG4gICAgICAgICAgICAgICAgLmh0bWwoJycpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICRsZWdlbmRUZXh0LnNob3coKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ICYmIHRoaXMubGVnZW5kRGlzcGxheS5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubGVnZW5kQmxvY2sgJiYgdGhpcy5sZWdlbmRCbG9jay5yZW1vdmUoKVxuICAgIHRoaXMubGVnZW5kRGlzcGxheSAmJiB0aGlzLmxlZ2VuZERpc3BsYXkucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlSGFuZGxlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuID0gW11cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaCA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFgnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuYXR0cigncG9pbnRlci1ldmVudHMnLCAnYWxsJylcbiAgICAgIC5hdHRyKCdzdHlsZScsICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCknKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnR9LCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3B9KWApXG5cbiAgICBpZiAodGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgdGhpcy5tb3VzZUJydXNoLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5jaGFydC5vcHRpb25zLnpvb20udmlzaWJsZSkge1xuICAgICAgLy8geC1ab29tIGZvciBjaGFydCBkb2VzdCBub3QgZXhpc3QsIEFkZCByZWN0IG92ZXJsYXkgZm9yIGJydXNoWERpdlxuICAgICAgdGhpcy5tb3VzZUJydXNoLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdvdmVybGF5JylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5tb3VzZUJydXNoLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnR9LCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3B9KWApXG4gICAgaWYgKCF0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5zZWxlY3QoJ3JlY3Qub3ZlcmxheScpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMubW91c2VCcnVzaCAmJiB0aGlzLm1vdXNlQnJ1c2guY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICB9XG5cbiAgcmVnaXN0ZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vcHRzLnJlZ2lzdGVyRm4ucHVzaChjYWxsYmFjaylcbiAgfVxuXG4gIHRyaWdnZXJNb3VzZUFjdGlvbiAoKSB7XG4gICAgdGhpcy5vcHRzLnJlZ2lzdGVyRm4uZm9yRWFjaCgoZnVuKSA9PiB7XG4gICAgICBmdW4uY2FsbCh0aGlzKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaCAmJiB0aGlzLm1vdXNlQnJ1c2gucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2xpbmV9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICAvLyBEbyBub3QgcmVnaXN0ZXIgdGhpcyBjb21wb25lbnQgaW4gY2hhcnRDb21wb25lbnRzQXJyLCAgQXMgdGhlIHNlcmllcyBjb21wb25lbnQgaXMgYWxyZWFkeSByZWdpc3RlcmVkIGFuZCB3aWxsIGNhbGwgdGhlIGxpbmUgQVBJc1xuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBsb3RBeGlzOiBbY29uc3RhbnRzLkRJUl9MRUZULCBjb25zdGFudHMuRElSX0JPVFRPTV0sXG4gICAgICBsaW5lRGF0YTogbnVsbCxcbiAgICAgIHlBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgeEF4aXNUYXJnZXQ6IG51bGwsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAvLyBGaW5kIHggYW5kIHkgYXhpcyBiYXNlZCBvbiBwbG90QXhpc1xuICAgIGxldCB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9UT1ApID4gLTEpIHtcbiAgICAgIHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICBsZXQgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfUklHSFQpID4gLTEpIHtcbiAgICAgIHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSBsaW5lKClcblxuICAgIGlmICh0aGlzLm9wdHMueUF4aXNUYXJnZXQpIHtcbiAgICAgIC8vIEZvciBub3JtYWwgc2VyaWVzLCB5QXhpc1RhcmdldCByZWZlcnMgdG8gdGhlIGluZGV4IG9mIHRoaXMgc2VyaWVzIGluIGRhdGEgQXJyXG4gICAgICB0aGlzLmxpbmVcbiAgICAgICAgLmRlZmluZWQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZFtzZWxmLm9wdHMueUF4aXNUYXJnZXRdICE9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgLngoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAvLyB4QXhpc1RhcmdldCByZWZlcnMgdGhlIGluZGV4IG9mIGRhdGUgaW4gZGF0YSBBcnJcbiAgICAgICAgICByZXR1cm4geChkW3NlbGYub3B0cy54QXhpc1RhcmdldF0pXG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHkoZFtzZWxmLm9wdHMueUF4aXNUYXJnZXRdKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5saW5lVGFnID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5zZWxlY3RBbGwoJy52Yy1saW5lLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICAgICAgLmRhdGEoW3RoaXMub3B0cy5saW5lRGF0YV0pXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGluZS1wbG90IHZjLWxpbmUtJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyLmZpbmQoJ3N2ZyBjbGlwUGF0aCcpXG4gICAgLy8gQWRkaW5nIHRoZSBsaW5lcyBzZXJpZXMgZm9yIGRhdGEgdG8gYmUgc2hvd25cbiAgICB0aGlzLmxpbmVUYWcuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGluZScpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ3RyYW5zcGFyZW50JylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQubGluZVdpZHRoIHx8ICcycHgnXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gc2VsZi5saW5lKGQudmFsdWVzKSAvLyBWYWx1ZXMgYXJlIGFycmF5IG9mIGFycmF5IGhhdmluZyBmb3JtYXQgbGlrZSAgW1tkYXRlLCBzZXJpZXMxLCBzZXJpZXMyIC4uLi5dLC4uLl1cbiAgICAgIH0pXG4gIH1cblxuICAvLyBVcGRhdGUgaGFwcGVucyB3aGVuIHRoZSBjaGFydCBpcyByZXNpemVkXG4gIHVwZGF0ZSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnNlbGVjdCgncGF0aCcpLmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIHNlbGYubGluZShkLnZhbHVlcylcbiAgICB9KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IHNlcmllc05hbWUgPSB0aGlzLm9wdHMubGluZURhdGEubmFtZVxuICAgIC8vIFJlbW92ZSBsaW5lIHNlcmllc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcucmVtb3ZlKClcblxuICAgIGlmIChlYWNoUGxvdFNldCAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXSAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXS52aXNpYmxlKSB7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuICB9XG4gIFxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcucmVtb3ZlKClcbiAgICB0aGlzLmxpbmUgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG5cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHthcmVhLCBzdGFjaywgc3RhY2tPcmRlck5vbmUsIHN0YWNrT2Zmc2V0Tm9uZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrQXJlYSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIHhBeGlzVGFyZ2V0OiAnJyxcbiAgICAgIHN0YWNrRGF0YTogbnVsbCxcbiAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiB7fSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBEZWZpbmUgaW4gd2hhdCBvcmRlciwgU3RhY2sgc2VyaWVzIG5lZWRzIHRvIGJlIHBsb3RlZFxuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cblxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gc3RhY2soKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChkLmRhdGFbc2VsZi5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgIH0pXG4gICAgICAueTAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZFswXSkgLy8gSW5kaWNhdGVzIHdoZXJlIHRvIHN0YXJ0IGFsb25nIFlBeGlzXG4gICAgICB9KVxuICAgICAgLnkxKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGRbMV0pIC8vIEluZGljYXRlcyB3aGVyZSB0byBlbmQgYWxvbmcgWUF4aXNcbiAgICAgIH0pXG5cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICB0aGlzLm9wdHMuZDNTdGFjay5rZXlzKHRoaXMub3B0cy5zdGFja09yZGVySW5kZXgpIC8vIHNwZWNpZnkgdGhlIHN0YWNrIHNlcmllcyBuYW1lcyBpbiBhcnJheSBmb3JtYXRcbiAgICB0aGlzLm9wdHMuZDNTdGFjay5vcmRlcihzdGFja09yZGVyTm9uZSkgLy8gdXNlIHRoZSBnaXZlbiBzZXJpZXMgb3JkZXIuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sub2Zmc2V0KHN0YWNrT2Zmc2V0Tm9uZSkgLy8gYXBwbHkgYSB6ZXJvIGJhc2VsaW5lIG9uIHN0YXJ0XG5cbiAgICAvLyBTaG93IHN0YWNrIHBsb3QgZm9yIG9ubHkgc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgY29uc3Qgc3RhY2tWaXNpYmxlT3JkZXIgPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcblxuICAgIHRoaXMuc3RhY2tMYXllciA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtc3RhY2stJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuZGF0YSh0aGlzLm9wdHMuZDNTdGFjayh0aGlzLm9wdHMuc3RhY2tEYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1zdGFjay1wbG90IHZjLXN0YWNrLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuJGNvbnRhaW5lci5maW5kKCdzdmcgY2xpcFBhdGgnKVxuXG4gICAgLy8gUExvdCBzdGFja0xheWVyIGJhc2VkIG9uIGVhY2ggc2VyaWVzIHZpc2libGl0eVxuICAgIHRoaXMuc3RhY2tMYXllci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd2Yy1zdGFjayB2Yy1zdGFjay0nICsgc3RhY2tNZW1iZXIubmFtZVxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W3N0YWNrTWVtYmVyLm5hbWVdLmNvbG9yXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCB0aGlzLmFyZWEpXG5cbiAgfVxuICBcbiAgLy8gVXBkYXRlIHN0YWNrTGF5ZXIgYmFzZWQgb24gY2hhcnQgcmVzaXplXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdkJywgdGhpcy5hcmVhKVxuICB9XG4gIFxuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIC8vIE1vZGlmeSBzdGFja09yZGVyIGFyciBiYXNlZCBvbiB2aXNpYmxlU2VyaWVzXG4gICAgdGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBzdGFjayBzZXJpZXNcbiAgICB0aGlzLnN0YWNrTGF5ZXIgJiYgdGhpcy5zdGFja0xheWVyLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBzdGFja09yZGVyTWVtYmVyc1xuICAgIHRoaXMuZHJhdygpXG4gIH1cbiAgXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuc3RhY2tMYXllci5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG4gIFxuICByZW1vdmUgKCkge1xuICAgIC8vICB0aGlzLnN0YWNrQXJlYVBhdGgucmVtb3ZlKCk7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gbnVsbFxuICAgIHRoaXMuYXJlYSA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQge2lzQXJyYXl9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgTGluZSBmcm9tICdAL3Nlcmllcy9MaW5lJ1xuaW1wb3J0IFN0YWNrQXJlYSBmcm9tICdAL3Nlcmllcy9TdGFja0FyZWEnXG5pbXBvcnQgU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1NlcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGEgLy8gQWNjZXB0IGVpdGhlciB0aW1lc2VyaWVzIG9yIHBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICAvLyBDcmVhdGUgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIGlucHV0IG9wdGlvbnMgYW5kIGVhY2ggcGxvdCBpbmZvXG4gICAgaXNBcnJheShwbG90SW5mby5zdGFjaykgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaCgocGxvdERhdGEpID0+IHtcbiAgICAgIHRoaXMucGxvdFNlcmllcy5wdXNoKG5ldyBTdGFja0FyZWEoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHN0YWNrRGF0YTogZGF0YSxcbiAgICAgICAgc3RhY2tPcmRlck1lbWJlcnM6IHBsb3REYXRhLnN0YWNrT3JkZXJNZW1iZXJzXG4gICAgICB9KSlcbiAgICB9KVxuXG4gICAgaXNBcnJheShwbG90SW5mby5saW5lKSAmJiBwbG90SW5mby5saW5lLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgTGluZSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeUF4aXNUYXJnZXQ6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmRhdGFJbmRleCxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgdmlzaWJsZTogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSxcbiAgICAgICAgbGluZURhdGE6IHtcbiAgICAgICAgICBuYW1lOiBwbG90RGF0YS5uYW1lLFxuICAgICAgICAgIGNvbG9yOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5jb2xvcixcbiAgICAgICAgICBsaW5lV2lkdGg6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmxpbmVXaWR0aCxcbiAgICAgICAgICB2YWx1ZXM6IGRhdGFcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtnZXRPYmplY3QsIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2Jpc2VjdG9yLCBkM01vdXNlfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQge2VhY2gsIGZpbHRlcn0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc1Rvb2x0aXAgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY3Jvc3NIYWlyczoge1xuICAgICAgICBlbmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIC8vIFByb3ZpZGUgYmFzaWMgZm9ybWF0dGVyIHRvIGRpc3BsYXkgaG92ZXIgZGF0YVxuICAgIGlmICghaXNGdW5jdGlvbih0aGlzLm9wdHMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5vcHRzLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+IFRvb2xUaXAgVGV4dCA6IDwvc3Bhbj48YnIvPjxzcGFuPiR7SlNPTi5zdHJpbmdpZnkoZCl9PC9zcGFuPmBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLmNyb3NzSGFpcnMgPSBmYWxzZVxuICAgIHRoaXMuJHRvb2xUaXBEaXYgPSAkKCc8ZGl2PjwvZGl2PicpLmFkZENsYXNzKCd2Yy10b29sdGlwLWRpc3BsYXknKVxuICAgIHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyXG4gICAgICAuYXBwZW5kKHRoaXMuJHRvb2xUaXBEaXYpXG5cblxuICAgIGlmICh0aGlzLm9wdHMuY3Jvc3NIYWlycy5lbmFibGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3Jvc3NIYWlycyA9IHRoaXMub3B0cy5jaGFydC5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy10b29sdGlwLWxpbmUnKVxuICAgICAgdGhpcy5jcm9zc0hhaXJzLmFwcGVuZCgnbGluZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC05OTksLTk5OSknKVxuICAgICAgICAuYXR0cigneDEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgIC5hdHRyKCd5MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wIC0gY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUilcbiAgICAgICAgLmF0dHIoJ3gyJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAuYXR0cigneTInLCAodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3ApKVxuXG4gICAgfVxuXG4gICAgdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5yZWdpc3RlcigoKSA9PiB7XG4gICAgICAvLyBSZWdpc3RlciBob3ZlciBhbmQgaGlkZS9zaG93IHRvb2xpcCBldmVudHNcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCB4U2NhbGUgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKSB8fCBmYWxzZVxuICAgICAgY29uc3QgbW91c2VIYW5kbGVyID0gdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlclxuICAgICAgY29uc3QgZGF0ZUluZGV4ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4XG4gICAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhXG4gICAgICAvLyBGaW5kIG5lYXJlc3QgZXhpc3RpbmcgZGF0ZSBhbW9uZyBhcnJheSBvZiBzb3J0ZWQgZGF0ZVxuICAgICAgY29uc3QgYmlzZWN0RGF0ZSA9IGJpc2VjdG9yKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkW2RhdGVJbmRleF1cbiAgICAgIH0pLmxlZnRcblxuICAgICAgY29uc3QgbW91c2VFdnQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyBPbiBtb3VzZW1vdmUgb2YgeCBvdmVybGF5LCBmaW5kIHgseSB2YWx1ZXMgYW5kIHVwZGF0ZSB0b29sdGlwXG4gICAgICAgIGNvbnN0IHhNb3VzZSA9IGQzTW91c2UodGhpcylbMF1cbiAgICAgICAgY29uc3QgeU1vdXNlID0gZDNNb3VzZSh0aGlzKVsxXVxuICAgICAgICBjb25zdCB4VmFsID0geFNjYWxlLmludmVydCh4TW91c2UpIC8vIGZpbmQgeEF4aXMgZGF0ZSBmb3IgbW91c2UgcG9zaXRpb25cblxuICAgICAgICAvLyBEbyBiaW5hcnkgc2VhcmNoIG9mIGRhdGEgc2V0IGZyb20gMm5kIGRhdGEgc2V0IHRvIGVuZFxuICAgICAgICBjb25zdCBmb3VuZCA9IGJpc2VjdERhdGUoZGF0YVNldCwgeFZhbCwgMSlcblxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkQmVmb3JlID0gZGF0YVNldFtmb3VuZCAtIDJdXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZFByZXYgPSBkYXRhU2V0W2ZvdW5kIC0gMV1cbiAgICAgICAgLy8gZ2V0IGJlZm9yZSBmaW5kIGRhdGFTZXRcbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZEZvdW5kID0gZGF0YVNldFtmb3VuZF0gfHwgZFByZXYgLy8gZ2V0IGZpbmQgZGF0YVNldFxuXG4gICAgICAgIGxldCB0b29sVGlwRGF0YSA9IGRQcmV2XG4gICAgICAgIGlmIChkYXRhU2V0Lmxlbmd0aCA+IHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSB7XG4gICAgICAgICAgLy8gTW9yZSB0aGFuIG9uZSB0aWNrIHJlc2lkZSBvbiBlYWNoIHBpeGVsLiBIZW5jZSBmaW5kIHRpY2sgaGF2aW5nIG1heCB2YWx1ZSBhbW9uZyB0aGUgZGF0YXNldFxuICAgICAgICAgIGNvbnN0IGRhdGFQYXJzZUxlbiA9IE1hdGguZmxvb3IoZGF0YVNldC5sZW5ndGggLyBzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkgKyAxXG5cbiAgICAgICAgICBjb25zdCB2aXNpYmxlRGF0YUluZGV4ID0ge31cblxuICAgICAgICAgIGVhY2goc2VsZi5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldCwgZnVuY3Rpb24gKHBsb3QpIHtcbiAgICAgICAgICAgIGlmIChwbG90LnZpc2libGUpIHtcbiAgICAgICAgICAgICAgdmlzaWJsZURhdGFJbmRleFtwbG90LmRhdGFJbmRleF0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IG11bHRpQXJyTWFwID0ge31cbiAgICAgICAgICAvLyBEbyBTY2FuIGZyb20gcmFuZ2UgLWRhdGFQYXJzZUxlbiB0byArZGF0YVBhcnNlTGVuIGJldHdlZW4gZm91bmQgZGF0YSBpbmRleFxuICAgICAgICAgIGZvciAobGV0IGluZCA9IChmb3VuZCAtIGRhdGFQYXJzZUxlbik7IGluZCA8IChmb3VuZCArIGRhdGFQYXJzZUxlbik7IGluZCsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVNldFtpbmRdKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRTZXQgPSBmaWx0ZXIoZGF0YVNldFtpbmRdLCBmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlRGF0YUluZGV4W2luZGV4XVxuICAgICAgICAgICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChkU2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG11bHRpQXJyTWFwW2luZF0gPSBkU2V0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG1heEluZFxuICAgICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICAgICAgICBlYWNoKG11bHRpQXJyTWFwLCBmdW5jdGlvbiAoYXJyU2V0LCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChtYXhWYWwgPCBhcnJTZXRbMF0pIHtcbiAgICAgICAgICAgICAgbWF4VmFsID0gYXJyU2V0WzBdXG4gICAgICAgICAgICAgIG1heEluZCA9IGtleVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0b29sVGlwRGF0YSA9IGRhdGFTZXRbbWF4SW5kXSB8fCBkRm91bmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGaW5kIG5lYXJlc3QgcmVhY2hpbmcgZGF0ZSBhbW9uZyBhYm92ZSB0d28gZGF0ZXNcbiAgICAgICAgICB0b29sVGlwRGF0YSA9ICh4VmFsIC0gZFByZXZbZGF0ZUluZGV4XSkgPiAoZEZvdW5kW2RhdGVJbmRleF0gLSB4VmFsKSA/IGRGb3VuZCA6IGRQcmV2XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0ZUludFJhbmdlID0gZEZvdW5kW2RhdGVJbmRleF0gLSBkUHJldltkYXRlSW5kZXhdXG5cbiAgICAgICAgaWYgKCFkYXRlSW50UmFuZ2UgJiYgZEJlZm9yZSkge1xuICAgICAgICAgIGRhdGVJbnRSYW5nZSA9IGRQcmV2W2RhdGVJbmRleF0gLSBkQmVmb3JlW2RhdGVJbmRleF1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRlSW50UmFuZ2UgPCBNYXRoLmFicyhkRm91bmRbZGF0ZUluZGV4XSAtIHhWYWwpKSB7XG4gICAgICAgICAgLy8gSWYgZm91bmQgaXMgb3V0c2lkZSBkYXRhIGludGVydmFsIHJhbmdlLCBUaGVuIGRhdGEgZG9lc250IGV4aXN0IGZvciB0aGF0IHRpY2suXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSBbXVxuICAgICAgICAgIHRvb2xUaXBEYXRhW2RhdGVJbmRleF0gPSB4VmFsXG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmhvdmVyKHhNb3VzZSwgeU1vdXNlLCB0b29sVGlwRGF0YSlcbiAgICAgIH1cblxuICAgICAgbGV0IGV2ZW50TmFtZSA9ICdtb3VzZW1vdmUnXG4gICAgICBpZiAodGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgICBldmVudE5hbWUgPSAnY2xpY2snXG4gICAgICB9XG4gICAgICBtb3VzZUhhbmRsZXIubW91c2VCcnVzaFxuICAgICAgICAub24oZXZlbnROYW1lLCBtb3VzZUV2dClcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9KVxuXG4gICAgICAkKG1vdXNlSGFuZGxlci5tb3VzZUJydXNoLm5vZGUoKSkuZmluZCgncmVjdC5vdmVybGF5JylcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgIH0pXG4gIH1cblxuICBob3ZlciAoeFBvcywgeVBvcywgZGlzcGxheURhdGEpIHtcbiAgICAvLyBVcGRhdGUgZGlzcGxheVBhbmVsIGFuZCBsaW5lIGJhc2VkIG9uIHggcG9zaXRpb25cbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnNlbGVjdCgnbGluZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3hQb3N9LDApYClcbiAgICAgIC5hdHRyKCd4MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wIC0gY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUilcbiAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MicsICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCkpXG4gICAgdGhpcy5jcm9zc0hhaXJzLmNsYXNzZWQoJ3ZjLWhpZGRlbicsIGZhbHNlKVxuXG4gICAgbGV0IHBlcmNlbnRhZ2VEaWZmID0geFBvcyAvIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoXG5cbiAgICBpZiAocGVyY2VudGFnZURpZmYgPCAwLjMpIHtcbiAgICAgIHBlcmNlbnRhZ2VEaWZmID0gMC4yXG4gICAgfVxuICAgIGlmIChwZXJjZW50YWdlRGlmZiA+IDAuNykge1xuICAgICAgcGVyY2VudGFnZURpZmYgPSAwLjk1XG4gICAgfVxuICAgIHRoaXMuJHRvb2xUaXBEaXZcbiAgICAgIC5jc3Moe1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyLnBvc2l0aW9uKCkgLy8gbGVmdCBwb3NpdGlvbiBvZiBjaGFydCBvbiBzY3JlZW5cbiAgICAgICAgICAubGVmdCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHhQb3MgLSB0aGlzLiR0b29sVGlwRGl2LndpZHRoKCkgKiBwZXJjZW50YWdlRGlmZikgKyAncHgnLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQodGhpcy5vcHRzLmNoYXJ0LiRjb250YWluZXIucG9zaXRpb24oKSAvLyB0b3AgcG9zaXRpb24gb2YgY2hhcnQgb24gc2NyZWVuXG4gICAgICAgICAgLnRvcCAtIHRoaXMuJHRvb2xUaXBEaXYuaGVpZ2h0KCkgLSA1ICsgY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUiAqIDIpICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgIH0pXG4gICAgICAuaHRtbCh0aGlzLm9wdHMuZm9ybWF0LmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBkaXNwbGF5RGF0YSkpIC8vIFVzZWQgZm9ybWF0LmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW4gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcblxuICAgIGlmIChzaG93RmxhZykge1xuICAgICAgdGhpcy4kdG9vbFRpcERpdiAmJiB0aGlzLiR0b29sVGlwRGl2LnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG5cbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuJHRvb2xUaXBEaXYgJiYgdGhpcy4kdG9vbFRpcERpdi5yZW1vdmUoKVxuICAgIHRoaXMuY3Jvc3NIYWlycyAmJiB0aGlzLmNyb3NzSGFpcnMucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7Z2V0T2JqZWN0LCBpc0Z1bmN0aW9uLCBlbXB0eUZufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHticnVzaFgsIGJydXNoWSwgZDNFdmVudH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBvblpvb206IGVtcHR5Rm4sXG4gICAgICBvblkxWm9vbTogZW1wdHlGbixcbiAgICAgIG9uWTJab29tOiBlbXB0eUZuXG4gICAgfSwgb3B0cylcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVMZWZ0ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVSaWdodCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGxldCAkYnJ1c2hPdmVybGF5ID0gbnVsbFxuICAgIGlmICh4U2NhbGUpIHtcbiAgICAgIC8vIENyZWF0ZSB4IGF4aXMgYnJ1c2ggZm9yIFpvb20gb3BlcmF0aW9uXG4gICAgICB0aGlzLmJydXNoWCA9IGJydXNoWCgpXG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgLy8gVXNlIHRoZSBzYW1lIG1vdXNlQnJ1c2ggZm9yIGJvdGggeEJydXNoIGFuZCB0b29sdGlwXG4gICAgICB0aGlzLmJydXNoWERpdiA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIubW91c2VCcnVzaFxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWClcblxuICAgICAgJGJydXNoT3ZlcmxheSA9ICQodGhpcy5icnVzaFhEaXYubm9kZSgpKS5maW5kKCdyZWN0Lm92ZXJsYXknKVxuXG4gICAgICAvLyBDYWxsIHRoaXMgZXZlbnQgd2hlbiB4QXhpcyBicnVzaCBpcyBlbmRlZFxuICAgICAgdGhpcy5icnVzaFgub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeFNjYWxlLmludmVydClcbiAgICAgICAgLy8gZmluZCB4MSBhbmQgeDJcbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZCkgLy8gcm91bmQgYm90aCB2YWx1ZXNcblxuICAgICAgICAvLyBjbGVhciBCcnVzaFxuICAgICAgICBzZWxmLmJydXNoWERpdi5jYWxsKHNlbGYuYnJ1c2hYLm1vdmUsIG51bGwpXG4gICAgICAgICRicnVzaE92ZXJsYXlcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIGN1cnNvcjogJ2F1dG8nXG4gICAgICAgICAgfSlcblxuICAgICAgICAvLyBkMSA9IGQxXG4gICAgICAgIC8vICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgIC8vICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueEF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBYIGF4aXMgdXBvbiBob3Jpem9udGFsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgc2VsZi5vcHRzICYmIHNlbGYub3B0cy5vblpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCBsZWZ0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVMZWZ0KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktbGVmdCcpXG5cbiAgICAgIC8vIENhbGwgdGhpcyBldmVudCB3aGVuIHlBeGlzIGJydXNoIGlzIGVuZGVkXG4gICAgICB0aGlzLmJydXNoWUxlZnQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZTGVmdERpdi5jYWxsKHNlbGYuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZUxlZnQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZIGF4aXMgdXBvbiB2ZXJ0aWNhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vblkxWm9vbSkgJiYgc2VsZi5vcHRzLm9uWTFab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBkMVswXSwgZDFbMV0pXG5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHkgYXhpcyBicnVzaCBmb3IgdmVydGljYWwgcmlnaHQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZVJpZ2h0KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0ID0gYnJ1c2hZKClcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1yaWdodCcpXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZUmlnaHREaXYuY2FsbChzZWxmLmJydXNoWVJpZ2h0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlUmlnaHQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWTIgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTJab29tKSAmJiBzZWxmLm9wdHMub25ZMlpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAkYnJ1c2hPdmVybGF5ICYmIHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIucmVnaXN0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiBtb3VzZSBpcyBjbGlja2VkIG9yIGRvd24sIGVuYWJsZSB6b29tIGJydXNoIGFuZCBpdHMgbW91c2UgY3Vyc29yXG4gICAgICAkYnJ1c2hPdmVybGF5XG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICBjdXJzb3I6ICdjb2wtcmVzaXplJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgY3Vyc29yOiAnYXV0bydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuYnJ1c2hYKSB7XG4gICAgICB0aGlzLmJydXNoWC5leHRlbnQoW1xuICAgICAgICBbMCwgMF0sXG4gICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFhEaXYuY2FsbCh0aGlzLmJydXNoWClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlMZWZ0KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnRcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgIFsodGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0IC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdlxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIgKyAnLCcgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCArICcpJylcbiAgICAgICAgLmNhbGwodGhpcy5icnVzaFlMZWZ0KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFsodGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0ICsgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIDBdLFxuICAgICAgICAgIFsodGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0ICsgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnJpZ2h0IC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIChjb25zdGFudHMuQlJVU0hZX0JVRkZFUikgKyAnLCcgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCArICcpJylcbiAgICAgICAgLmNhbGwodGhpcy5icnVzaFlSaWdodClcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmJydXNoWERpdiAmJiB0aGlzLmJydXNoWERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5icnVzaFlMZWZ0RGl2ICYmIHRoaXMuYnJ1c2hZTGVmdERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5icnVzaFlSaWdodERpdiAmJiB0aGlzLmJydXNoWVJpZ2h0RGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIGlmICh0aGlzLmJydXNoWERpdikge1xuICAgICAgdGhpcy5icnVzaFhEaXYuY2FsbCh0aGlzLmJydXNoWC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdERpdikge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LmNhbGwodGhpcy5icnVzaFlMZWZ0Lm1vdmUsIG51bGwpXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKHRoaXMuYnJ1c2hZUmlnaHREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYuY2FsbCh0aGlzLmJydXNoWVJpZ2h0Lm1vdmUsIG51bGwpXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=