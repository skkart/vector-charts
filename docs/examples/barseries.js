(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["barseries"],{

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
    var self = _this;

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

/***/ "./charts/BarSeriesChart.js":
/*!**********************************!*\
  !*** ./charts/BarSeriesChart.js ***!
  \**********************************/
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
/* harmony import */ var _tooltip_BasicTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/tooltip/BasicTooltip */ "./tooltip/BasicTooltip.js");
/* harmony import */ var _data_parser_BasicBSParser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/data-parser/BasicBSParser */ "./data-parser/BasicBSParser.js");
/* harmony import */ var _series_BarSeries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/series/BarSeries */ "./series/BarSeries.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/legend/TimeSeriesLegend */ "./legend/TimeSeriesLegend.js");






















var BarSeriesChart = function (_Chart) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(BarSeriesChart, _Chart);

  function BarSeriesChart(container, opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, BarSeriesChart);

    opts.startTime = new Date();

    // Create the dataParser is not passed
    if (!opts.dataParser) {
      opts.dataParser = new _data_parser_BasicBSParser__WEBPACK_IMPORTED_MODULE_17__["default"](opts);
    }
    // Check the dataParser exists and its instanceof ChartAxisParser
    if (!(opts.dataParser instanceof _data_parser_ChartAxisParser__WEBPACK_IMPORTED_MODULE_15__["default"])) {
      throw new Error("DataParser in options dosen't have implementation of ChartAxisParser");
    }

    // Call Parent Impl

    // Add default options to chart
    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, (BarSeriesChart.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(BarSeriesChart)).call(this, container, opts));

    Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["addDefaultBSOptions"])(_this.options);

    // Run the dataParser for given JSON data
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isObject"])(_this.dataParser)) {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(_this.options, _this.dataParser.dataExecutor());
    }

    // Initilize all chart components needed for timeSeriesChart on exact order based on each dependencies
    _this.chartInitilize();

    babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      return _this.draw();
    });
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(BarSeriesChart, [{
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
        this.tooltip = new _tooltip_BasicTooltip__WEBPACK_IMPORTED_MODULE_16__["default"](babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          chart: this
        }, tooltipOpts));
        this.chartComponentsArr.push(this.tooltip);
      }

      if (this.options.series) {
        this.series = new _series_BarSeries__WEBPACK_IMPORTED_MODULE_18__["default"]({
          chart: this
        });
        // Register the component for draw, update, showHide and remove
        this.chartComponentsArr.push(this.series);
      }

      if (this.options.legend && this.options.legend.visible) {
        this.legends = new _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_20__["default"]({
          chart: this,
          legendPrefix: this.options.legend.legendPrefix,
          position: _constants__WEBPACK_IMPORTED_MODULE_14__["default"].DIR_TOP,
          disableSeriesToggle: true, // Disable series toggle effect for bar graph. TODO: Need to support toggling of series
          onLegendChange: this.options.legend.onLegendChange
        });

        this.chartComponentsArr.push(this.legends);
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      console.log('BarSeriesChart draw', this);
      babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(BarSeriesChart.prototype.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default()(BarSeriesChart.prototype), 'draw', this).call(this);
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
          var tickHtml = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_19__["select"])(this).text() || '';
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

  return BarSeriesChart;
}(_charts_Chart__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BarSeriesChart);

/***/ }),

/***/ "./data-parser/BasicBSParser.js":
/*!**************************************!*\
  !*** ./data-parser/BasicBSParser.js ***!
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/constants */ "./constants.js");











var BasicBSParser = function (_ChartAxisParser) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BasicBSParser, _ChartAxisParser);

  function BasicBSParser(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BasicBSParser);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (BasicBSParser.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(BasicBSParser)).call(this, opts));

    _this.opts = opts;
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BasicBSParser, [{
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
        console.log('Error encountered while bar series JSON parsing :', err);
        this.opts.onError(err);
        throw new Error('Invalid JSON received - Error on bar series JSON parsing');
      }
    }
  }, {
    key: 'constructChartData',
    value: function constructChartData() {
      var dataOptions = this.dataOptions;
      var resJson = dataOptions.data;
      var seriesData = resJson.barseries;
      var columns = seriesData.columns;
      var data = seriesData.values;
      var validJSONType = columns.length && data.length;

      if (!validJSONType) {
        throw new Error('Invalid Bar series JSON received');
      }

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
          timeRange: seriesData.map(function (dt) {
            return dt[0];
          })
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
      if (!yRange || !yRange2) {
        (function () {
          var findEachPlotRange = false;
          for (key in eachPlotSet) {
            if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet[key].minVal) || !babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet[key].maxVal)) {
              findEachPlotRange = true;
              break;
            }
          }

          if (findEachPlotRange) {

            // Calculate Max and Min for each plots series
            var valData = 0;
            data.forEach(function (d) {
              for (var plot in eachPlotSet) {
                var eachPlot = eachPlotSet[plot];
                valData = d[eachPlot.dataIndex];
                if (valData < eachPlot.minVal) {
                  eachPlot.minVal = valData;
                }
                if (valData > eachPlot.maxVal) {
                  eachPlot.maxVal = valData;
                }
                // Attach value range for stacked bar data
                plotInfo.bar && plotInfo.bar.forEach(function (plotData) {
                  if (plotData.barType === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].STACKED_BAR) {
                    var memberArr = plotData.barOrderMembers;
                    var sum = 0;
                    // Calculate maximum and minimum range for stacked group by adding all the data
                    memberArr.forEach(function (member) {
                      sum += eachPlotSet[member.name].visible ? d[eachPlotSet[member.name].dataIndex] : 0;
                    });

                    if (sum < plotData.valueRange[0]) {
                      plotData.valueRange[0] = sum;
                    }
                    if (sum > plotData.valueRange[1]) {
                      plotData.valueRange[1] = sum;
                    }
                  }
                });
              }
            });
          }

          // Find Max value required to plot on graph based on visible plot function . i.e line or stack
          var allMax = -Infinity;
          var allMax2 = -Infinity;
          for (key in plotInfo) {
            if (key === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].BAR_KEY) {
              plotInfo[key].forEach(function (plotData) {
                // calculate maximum and minimum range if bar type is a grouped bar
                if (plotData.barType === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].GROUPED_BAR) {
                  var memberArr = plotData.barOrderMembers;
                  memberArr.forEach(function (member) {
                    if (eachPlotSet[member.name].visible && eachPlotSet[member.name].plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].DIR_LEFT && eachPlotSet[member.name].maxVal > allMax) {
                      allMax = eachPlotSet[member.name].maxVal;
                    }
                    if (eachPlotSet[member.name].visible && eachPlotSet[member.name].plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].DIR_RIGHT && eachPlotSet[member.name].maxVal > allMax2) {
                      allMax2 = eachPlotSet[member.name].maxVal;
                    }
                  });
                } else if (plotData.barType === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].STACKED_BAR) {
                  if (plotData.plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].DIR_LEFT && plotData.valueRange[1] > allMax) {
                    allMax = plotData.valueRange[1];
                  }
                  if (plotData.plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].DIR_RIGHT && plotData.valueRange[1] > allMax2) {
                    allMax2 = plotData.valueRange[1];
                  }
                }
              });
            }
          }

          // Find min value just by checking min value among all series data
          var allMin = Infinity;
          var allMin2 = Infinity;
          for (key in eachPlotSet) {
            if (eachPlotSet[key].plotAxis && eachPlotSet[key].plotAxis[0] === 'left' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin) {
              allMin = eachPlotSet[key].minVal;
            }
            if (eachPlotSet[key].plotAxis && eachPlotSet[key].plotAxis[0] === 'right' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin2) {
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
      var seriesData = resJson.barseries;
      var columns = seriesData.columns.slice(1); // Ignore the first column, As it corresponds to x axis
      var ind = 1;
      // Object that contains all plot functions needed for the chart
      var eachPlotSet = {};
      // Set of rules that charts needs to be draw on timeSeriesChart
      var plotInfo = dataOptions.series;
      var key = void 0;

      var dataColorArr = seriesData.color || [];
      var yLeft = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.left');
      var yRight = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(dataOptions, 'yAxis.right');

      // Generate eachPlotSet using columns
      columns.forEach(function (d) {
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
        if (key === 'bar') {
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

  return BasicBSParser;
}(_data_parser_ChartAxisParser__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicBSParser);

/***/ }),

/***/ "./series/Bar.js":
/*!***********************!*\
  !*** ./series/Bar.js ***!
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");











var Bar = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Bar, _ChartComponent);

  function Bar(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Bar);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Bar.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Bar)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: '',
      plotAxis: [_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_LEFT, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_BOTTOM],
      barData: null,
      xAxisTarget: null,
      barType: _constants__WEBPACK_IMPORTED_MODULE_7__["default"].GROUPED_BAR,
      barOrderMembers: {},
      visible: true,
      events: {}
    }, opts);

    var self = _this;

    var eachPlotSet = _this.opts.chart.options.plotSet;
    _this.opts.barOrderIndex = _this.opts.barOrderMembers.filter(function (ele) {
      return eachPlotSet[ele.name].visible || false;
    }).map(function (ele) {
      return eachPlotSet[ele.name].dataIndex;
    });

    _this.opts.seriesLength = _this.opts.barOrderIndex.length;
    // Find x and y axis based on plotAxis
    var x = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.xAxis.scale');
    if (_this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_TOP) > -1) {
      x = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.xAxis2.scale');
    }

    var y = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.yAxis.scale');
    if (_this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_RIGHT) > -1) {
      y = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(_this.opts, 'chart.yAxis2.scale');
    }

    _this.xScale = x;
    _this.yScale = y;

    var srData = _this.opts.barData;
    _this.opts.seriesArr = [];
    _this.opts.xAxisArr = [];
    srData.forEach(function (sData, ind) {
      _this.opts.xAxisArr.push(sData[_this.opts.xAxisTarget]);
      _this.opts.barOrderIndex.forEach(function (indexVal, brInd) {
        if (!self.opts.seriesArr[brInd]) {
          self.opts.seriesArr[brInd] = [];
        }
        var eachSeriesData = self.opts.seriesArr[brInd];
        eachSeriesData.push(sData[indexVal]);
      });
    });
    // this.opts.barOrderIndex.forEach(function (indexVal) {
    //   self.opts.seriesArr.push(map(srData, indexVal))
    // })

    _this.opts.barStack = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["stack"])().keys(Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["range"])(_this.opts.seriesLength))(Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["transpose"])(_this.opts.seriesArr));

    _this.yMaxGrouped = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["max"])(_this.opts.seriesArr, function (y) {
      return Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["max"])(y);
    });
    _this.yMaxStacked = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["max"])(_this.opts.barStack, function (y) {
      return Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["max"])(y, function (d) {
        return d[1];
      });
    });
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Bar, [{
    key: 'draw',
    value: function draw() {
      var _this2 = this;

      var self = this;
      var nameIndexMap = {};
      var eachPlotSet = this.opts.chart.options.plotSet;
      var barVisibleOrder = this.opts.barOrderMembers.filter(function (ele) {
        return eachPlotSet[ele.name].visible || false;
      });
      barVisibleOrder.forEach(function (plot, name) {
        var pt = eachPlotSet[plot.name];
        nameIndexMap[pt.dataIndex - 1] = plot.name;
      });

      var clipElement = this.opts.chart.container.select('svg clipPath');
      this.barSeries = this.opts.chart.graphZone.selectAll('.vc-bar-series').data(this.opts.barStack).enter().append('g').attr('clip-path', 'url(#' + clipElement.attr('id') + ')') // display graphZone of same size as clip-path defined
      .attr('class', 'vc-bar-series').attr('fill', function (d, i) {
        return eachPlotSet[nameIndexMap[i]].color;
      }).attr('seriesName', function (d, i) {
        return nameIndexMap[i];
      }).attr('seriesIndex', function (d, i) {
        return i;
      });

      this.bars = this.barSeries.selectAll('rect').data(function (d) {
        return d;
      }).enter().append('rect').attr('x', function (d, i) {
        return self.xScale(self.opts.xAxisArr[i]);
      }).attr('fill', function (d, i) {
        var srName = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["select"])(this.parentNode).attr('seriesName');
        return eachPlotSet[srName].colorArr && eachPlotSet[srName].colorArr[i];
      }).attr('y', this.opts.chart.chartHeight).attr('width', this.xScale.bandwidth()).attr('height', 0).on('mousemove', function (d, i) {
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Event"].pageX, _d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Event"].pageY, {
          data: {
            val: self.opts.barData[i],
            ind: i
          }
        });
      }).on('mouseout', function (d) {
        self.opts.chart.tooltip && self.opts.chart.tooltip.hide();
      });

      var _loop = function _loop(name) {
        var fn = _this2.opts.events[name];
        self.bars.on(name, function () {
          fn.apply(self.opts.chart, arguments);
        });
      };

      for (var name in this.opts.events) {
        _loop(name);
      }
    }

    // Update happens when the chart is resized

  }, {
    key: 'update',
    value: function update() {
      var self = this;
      if (this.opts.barType === _constants__WEBPACK_IMPORTED_MODULE_7__["default"].STACKED_BAR) {
        this.bars.attr('y', function (d) {
          return self.yScale(d[1]);
        }).attr('height', function (d) {
          return self.yScale(d[0]) - self.yScale(d[1]);
        }).attr('x', function (d, i) {
          return self.xScale(self.opts.xAxisArr[i]);
        }).attr('width', self.xScale.bandwidth());
      } else {
        this.bars.attr('x', function (d, i) {
          var xVal = self.xScale(self.opts.xAxisArr[i]) + self.xScale.bandwidth() / self.opts.seriesLength * Object(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["select"])(this.parentNode).attr('seriesIndex');
          return xVal;
        }).attr('width', self.xScale.bandwidth() / self.opts.seriesLength).attr('y', function (d) {
          return self.yScale(d[1] - d[0]);
        }).attr('height', function (d) {
          return self.yScale(0) - self.yScale(d[1] - d[0]);
        });
      }
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.barSeries.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }

    // Redraw is called when series is toggled from Legends

  }, {
    key: 'redraw',
    value: function redraw() {
      var eachPlotSet = this.opts.chart.options.plotSet;
      // Modify barOrder arr based on visibleSeries
      this.opts.barOrderIndex = this.opts.barOrderMembers.filter(function (ele) {
        return eachPlotSet[ele.name].visible || false;
      }).map(function (ele) {
        return eachPlotSet[ele.name].dataIndex;
      });

      // Remove all bar series
      this.barSeries && this.barSeries.remove();
      // draw with new barOrderMembers
      this.draw();
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.barSeries && this.barSeries.remove();
      this.bars = null;
      this.opts = null;
    }
  }]);

  return Bar;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "./series/BarSeries.js":
/*!*****************************!*\
  !*** ./series/BarSeries.js ***!
  \*****************************/
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
/* harmony import */ var _series_Bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/series/Bar */ "./series/Bar.js");
/* harmony import */ var _series_Series__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/series/Series */ "./series/Series.js");








var BarSeries = function (_Series) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(BarSeries, _Series);

  function BarSeries(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BarSeries);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (BarSeries.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(BarSeries)).call(this));

    _this.opts = opts;
    _this.plotSeries = [];
    var data = _this.opts.chart.options.chartData; // Accept either timeseries or pieseries
    var plotInfo = _this.opts.chart.options.series;
    var isBarPlot = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"])(plotInfo.bar) && plotInfo.bar.length;
    var isStackPlot = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"])(plotInfo.stack) && plotInfo.stack.length;
    var arrayData = [];

    // check which data needs to be passed and present
    if (isBarPlot) {
      arrayData = plotInfo.bar;
    } else if (isStackPlot) {
      arrayData = plotInfo.stack;
    }

    // Create plot components based on input options and each plot info
    arrayData.forEach(function (plotData) {
      _this.plotSeries.push(new _series_Bar__WEBPACK_IMPORTED_MODULE_5__["default"]({
        chart: _this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        xAxisTarget: _this.opts.chart.options.timeInfo.dataIndex,
        barOrderMembers: plotData.barOrderMembers || plotData.stackOrderMembers,
        barType: plotData.barType || '',
        events: plotData.events || {},
        barData: data
      }));
    });
    return _this;
  }

  return BarSeries;
}(_series_Series__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BarSeries);

/***/ }),

/***/ "./tooltip/BasicTooltip.js":
/*!*********************************!*\
  !*** ./tooltip/BasicTooltip.js ***!
  \*********************************/
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










var BasicTooltip = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BasicTooltip, _ChartComponent);

  function BasicTooltip(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BasicTooltip);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (BasicTooltip.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(BasicTooltip)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
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

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BasicTooltip, [{
    key: 'draw',
    value: function draw() {
      this.toolTipDiv = this.opts && this.opts.chart.container.append('div').attr('class', 'vc-tooltip-display ' + this.opts.className);
    }
  }, {
    key: 'hover',
    value: function hover(x, y, displayData, excludeToolTipDiv) {
      this.showHide(true);
      // This will be called by series -- bar / pie
      var box = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["elementOffset"])(this.toolTipDiv);
      var rootPos = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["elementOffset"])(this.opts.chart.container);
      var xpos = Math.round(x - rootPos.left);
      var ypos = Math.round(y - rootPos.top);

      if (!excludeToolTipDiv) {
        // Consider toolTip offset for position
        xpos = Math.round(xpos - box.width / 2);
        ypos = Math.round(ypos - box.height / 2);
      }

      this.toolTipDiv.style('left', xpos + 'px').style('top', ypos + 'px').style('display', 'inline-block').html(this.opts.format.call(this.opts.chart, displayData.data)); // Used format.call(), so that external fun can have access of chart Instance
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.toolTipDiv && this.toolTipDiv.classed('vc-hidden', !showFlag);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.$toolTipDiv && this.$toolTipDiv.remove();
      this.opts = null;
    }
  }]);

  return BasicTooltip;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicTooltip);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvQmFyU2VyaWVzQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL0Jhci5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9CYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdmMvLi90b29sdGlwL0Jhc2ljVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwic2VsZiIsIkRJUl9MRUZUIiwiYXhpc0xlZnQiLCJESVJfUklHSFQiLCJheGlzUmlnaHQiLCJjaGFydFdpZHRoIiwiaXNGdW5jdGlvbiIsImV4dGVybmFsRm9ybWF0dGVyIiwidmFsIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJCYXJTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNCU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiYWRkRGVmYXVsdEJTT3B0aW9ucyIsIm9wdGlvbnMiLCJpc09iamVjdCIsImRhdGFFeGVjdXRvciIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJ0b29sdGlwT3B0cyIsInRvb2x0aXAiLCJUb29sdGlwIiwic2VyaWVzIiwiQmFyU2VyaWVzIiwibGVnZW5kIiwibGVnZW5kcyIsIlRpbWVTZXJpZXNMZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJkaXNhYmxlU2VyaWVzVG9nZ2xlIiwib25MZWdlbmRDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYWZ0ZXJEcmF3IiwicmVTY2FsZVlBeGlzIiwiY2hhcnRSZXNwb25zaXZlIiwibW91c2VIYW5kbGVyIiwidHJpZ2dlck1vdXNlQWN0aW9uIiwidGltZURpZmYiLCJnZXRUaW1lIiwib25Db21wbGV0ZSIsImF4aXNTcGVjaWZpZXIiLCJ0aWNrVmFsQXJyIiwiZGlmZlZhbCIsInJhbmdlVmFsIiwieU1heCIsImFwcGx5WTFBeGlzIiwiYXBwbHlZMkF4aXMiLCJtb2RpZnlBeGlzUHJvcHMiLCJyZVNjYWxlQXhpcyIsInJlcXVpcmVkV2lkdGgiLCJjbGFzcyIsIm1heFRleHQiLCJkdW1teUciLCJzdmciLCJ0aWNrc0FyciIsInNlbGVjdCIsImVhY2giLCJ0aWNrSHRtbCIsImRhdGEiLCJlbnRlciIsIlN0cmluZyIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsInJvdW5kIiwiWV9BWElTX1NQQUNFIiwiY2hhcnRGdWxsU3BhY2UiLCJ3aWR0aCIsIkNoYXJ0IiwiZGF0YU9wdGlvbnMiLCJjb25zdHJ1Y3RDaGFydERhdGEiLCJjb25zdHJ1Y3RYQXhpc0luZm8iLCJjb25zdHJ1Y3RQbG90SW5mbyIsImNvbnN0cnVjdFlBeGlzSW5mbyIsImVyciIsIm9uRXJyb3IiLCJyZXNKc29uIiwic2VyaWVzRGF0YSIsImJhcnNlcmllcyIsImNvbHVtbnMiLCJ2YWx1ZXMiLCJ2YWxpZEpTT05UeXBlIiwiY2hhcnREYXRhIiwiZGF0YUluZGV4IiwibWFwIiwiZHQiLCJlYWNoUGxvdFNldCIsInBsb3RTZXQiLCJwbG90SW5mbyIsImtleSIsIm1pbiIsIm1heCIsImZpbmRFYWNoUGxvdFJhbmdlIiwibWluVmFsIiwibWF4VmFsIiwidmFsRGF0YSIsImZvckVhY2giLCJwbG90IiwiZWFjaFBsb3QiLCJiYXIiLCJwbG90RGF0YSIsImJhclR5cGUiLCJTVEFDS0VEX0JBUiIsIm1lbWJlckFyciIsImJhck9yZGVyTWVtYmVycyIsInN1bSIsIm1lbWJlciIsIm5hbWUiLCJ2YWx1ZVJhbmdlIiwiYWxsTWF4IiwiSW5maW5pdHkiLCJhbGxNYXgyIiwiQkFSX0tFWSIsIkdST1VQRURfQkFSIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwic2xpY2UiLCJpbmQiLCJkYXRhQ29sb3JBcnIiLCJjb2xvciIsInlMZWZ0IiwieVJpZ2h0IiwicmVmaW5lTmFtZSIsInJlZmluZVN0cmluZyIsImlzQm9vbGVhbiIsIkJhciIsImJhckRhdGEiLCJ4QXhpc1RhcmdldCIsImV2ZW50cyIsImJhck9yZGVySW5kZXgiLCJmaWx0ZXIiLCJlbGUiLCJzZXJpZXNMZW5ndGgiLCJ4IiwiaW5kZXhPZiIsInkiLCJ4U2NhbGUiLCJ5U2NhbGUiLCJzckRhdGEiLCJzZXJpZXNBcnIiLCJ4QXhpc0FyciIsInNEYXRhIiwiaW5kZXhWYWwiLCJickluZCIsImVhY2hTZXJpZXNEYXRhIiwiYmFyU3RhY2siLCJzdGFjayIsImtleXMiLCJ0cmFuc3Bvc2UiLCJ5TWF4R3JvdXBlZCIsInlNYXhTdGFja2VkIiwibmFtZUluZGV4TWFwIiwiYmFyVmlzaWJsZU9yZGVyIiwicHQiLCJjbGlwRWxlbWVudCIsImJhclNlcmllcyIsImJhcnMiLCJzck5hbWUiLCJwYXJlbnROb2RlIiwiY29sb3JBcnIiLCJiYW5kd2lkdGgiLCJvbiIsImhvdmVyIiwiZDNFdmVudCIsInBhZ2VYIiwicGFnZVkiLCJoaWRlIiwiZm4iLCJhcHBseSIsImFyZ3VtZW50cyIsInhWYWwiLCJwbG90U2VyaWVzIiwiaXNCYXJQbG90IiwiaXNBcnJheSIsImlzU3RhY2tQbG90IiwiYXJyYXlEYXRhIiwic3RhY2tPcmRlck1lbWJlcnMiLCJTZXJpZXMiLCJCYXNpY1Rvb2x0aXAiLCJmb3JtYXQiLCJ0b29sVGlwRGl2IiwiZGlzcGxheURhdGEiLCJleGNsdWRlVG9vbFRpcERpdiIsInNob3dIaWRlIiwiYm94IiwiZWxlbWVudE9mZnNldCIsInJvb3RQb3MiLCJ4cG9zIiwieXBvcyIsInRvcCIsImhlaWdodCIsImh0bWwiLCIkdG9vbFRpcERpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQWFDLElBQWIsRUFBbUI7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QSxRQUFiO0FBQ0EsV0FBS2dNLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQi9OLE9BQWhCLENBQXdCLFdBQXhCLEVBQXFDLENBQUMrQixRQUF0QyxDQUFuQjtBQUNEOzs7NkJBRVM7QUFDUixXQUFLNE0sV0FBTCxJQUFvQixLQUFLQSxXQUFMLENBQWlCM00sTUFBakIsRUFBcEI7QUFDQSxXQUFLdEYsSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQW5EdUN1Riw4RDs7QUFBckI0TCwyRSIsImZpbGUiOiJiYXJzZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge1xuICBheGlzQm90dG9tLCBheGlzVG9wLCBheGlzTGVmdCwgYXhpc1JpZ2h0LFxuICBzY2FsZUJhbmQsIHNjYWxlTGluZWFyLCBzY2FsZVRpbWVcbn0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7ZW1wdHlGbiwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIHRydW5jYXRlVGV4dH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcG9zaXRpb246ICd5JyxcbiAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgdW5pdDogJycsXG4gICAgICByYW5nZVNjYWxlOiBbMCwgMTAwMF0sXG4gICAgICBkb21haW5TY2FsZTogWzAsIDEwMF0sXG4gICAgICBzY2FsZVR5cGU6ICcnLFxuICAgICAgYXhpc0NsYW1wOiB0cnVlLFxuICAgICAgdGlja051bWJlcjogbnVsbCxcbiAgICAgIHJvdGF0ZVRleHQ6IGZhbHNlLFxuICAgICAgdGV4dExpbWl0OiA4LFxuICAgICAgdGlja0Zvcm1hdHRlcjogZmFsc2UsIC8vIFVzZSBkMyB0aWNrRm9ybWF0dGVyXG4gICAgICBzaG93R3JpZExpbmVzOiBmYWxzZSxcbiAgICAgIHRpY2tQYWRkaW5nOiBjb25zdGFudHMuVElDS19QQURESU5HLFxuICAgICAgc2NhbGVQYWRkaW5nOiBjb25zdGFudHMuU0NBTEVfUEFERElORyxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIC8vIENyZWF0ZSBBeGlzIGFuZCBTY2FsZSBiYXNlZCBvbiBpbnB1dCBvcHRpb25zXG4gICAgaWYgKHRoaXMub3B0cy5zY2FsZVR5cGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVCYW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAgIGlmICh0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlVGltZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3gnKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc0JvdHRvbSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfVE9QKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNUb3AoKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KSlcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIEhvbGRzIGFsbCB0aWNrIHZhbHVlcyB0aGF0IGF4aXMgc2hvd3NcbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSBbXVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc0xlZnQoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNSaWdodCgpXG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKDApXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSkge1xuICAgICAgICAvLyBJZiBleHRlcm5hbCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIG1vZGlmeSBmb3JtYXR0ZXIgdG8gcG9wdWxhdGUgdGlja1ZhbHVlc1xuICAgICAgICBjb25zdCBleHRlcm5hbEZvcm1hdHRlciA9IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyXG4gICAgICAgIHRoaXMub3B0cy50aWNrRm9ybWF0dGVyID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHNlbGYudGlja1ZhbHVlcy51bnNoaWZ0KHZhbClcbiAgICAgICAgICByZXR1cm4gZXh0ZXJuYWxGb3JtYXR0ZXIodmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy50aWNrUGFkZGluZyA+IDApIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrUGFkZGluZyh0aGlzLm9wdHMudGlja1BhZGRpbmcpXG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5QXhpc1Byb3BzIChvcHRzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0cywgb3B0cylcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBudWxsXG5cbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoMCwke3RoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodH0pYFxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSwwKWBcbiAgICB9XG5cbiAgICB0aGlzLmF4aXNUYWcgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCBgdmMtYXhpcyB2Yy1heGlzLSR7dGhpcy5vcHRzLm9yaWVudH0gdmMtYXhpcy0ke3RoaXMub3B0cy5jbGFzc05hbWV9YClcblxuXG4gICAgLy8gSWYgbm8gZm9ybWF0dGVyIGlzIHByb3ZpZGVkLCBheGlzIHVzZXMgZDMgZGVmYXVsdCBmb3JtYXR0ZXJcbiAgICBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSAmJiB0aGlzLmF4aXMudGlja0Zvcm1hdCh0aGlzLm9wdHMudGlja0Zvcm1hdHRlcilcblxuICAgIC8vIEFkZCBMYWJlbCB0byBBeGlzXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyA9IHRoaXMuYXhpc1RhZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcy1sYWJlbCcpXG4gICAgICAgIC50ZXh0KHRoaXMub3B0cy5sYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICAvLyBJRiBub3QgdmlzaWJsZSwgRG9udCBzaG93IHRoZSBheGlzLCBidXQgc3RpbGwgc2NhbGUgYW5kIHBsb3Qgb24gZ3JhcGhab25lLCBzbyB0aGF0IGFsbCBzZXJpZXMgY2FuIGJlIHBsb3R0ZWRcbiAgICAhdGhpcy5vcHRzLnZpc2libGUgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsIHRydWUpXG4gIH1cblxuICAvLyBVcGRhdGVzIGdyYXBoIEF4aXMgYmFzZWQgb24gbmV3IHdpZHRoIGFuZCBtb2RpZnkgcmFuZ2UsIGRvbWFpbiBhbmQgdGlja3NcbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgIHRoaXMub3B0cy5yYW5nZVNjYWxlID0gWzAsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoXVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuXG4gICAgLy8gUG9zaXRpb24gbGFiZWwsIHNjYWxlLCB0aWNrcywgYXhpcyBiYXNlZCBvbiBjaGFydCB3aWR0aFxuICAgIGlmICh0aGlzLm9wdHMubGFiZWwpIHtcbiAgICAgIGxldCB4VHJhbnMgPSAwXG4gICAgICBsZXQgeVRyYW5zID0gMFxuICAgICAgbGV0IHJvdGF0ZSA9IDBcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB4VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gMilcbiAgICAgICAgeVRyYW5zID0gY29uc3RhbnRzLlhfQVhJU19MQUJFTF9ZXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCB8fCB0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgICAgICB4VHJhbnMgPSAtKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCkgKyBjb25zdGFudHMuQlJVU0hZX0JVRkZFUlxuICAgICAgICAgIHJvdGF0ZSA9IDI3MFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhUcmFucyA9IHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUlxuICAgICAgICAgIHJvdGF0ZSA9IDkwXG4gICAgICAgIH1cbiAgICAgICAgeVRyYW5zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgLyAyKVxuICAgICAgfVxuICAgICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZ1xuICAgICAgICAuYXR0cigndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlKCR7eFRyYW5zfSwke3lUcmFuc30pIHJvdGF0ZSgke3JvdGF0ZX0pYClcbiAgICB9XG5cbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSBbXVxuXG4gICAgbGV0IGRvbWFpblNjYWxlID0gW3RoaXMub3B0cy5kb21haW5TY2FsZVswXSwgdGhpcy5vcHRzLmRvbWFpblNjYWxlW3RoaXMub3B0cy5kb21haW5TY2FsZS5sZW5ndGggLSAxXV1cbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIGRvbWFpblNjYWxlID0gdGhpcy5vcHRzLmRvbWFpblNjYWxlXG4gICAgICB0aGlzLnNjYWxlXG4gICAgICAgIC5wYWRkaW5nKHRoaXMub3B0cy5zY2FsZVBhZGRpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0cy5heGlzQ2xhbXAgJiYgdGhpcy5zY2FsZS5jbGFtcCgpIC8vIENsYW1wcyBvdXRzaWRlIHJhbmdlIHZhbHVlIHdpdGhpbiBzcGVjdGlmZWQgcmFuZ2UgYW5kIGRvbWFpblxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUucmFuZ2UodGhpcy5vcHRzLnJhbmdlU2NhbGUpXG4gICAgICAuZG9tYWluKGRvbWFpblNjYWxlKVxuXG4gICAgdGhpcy5heGlzLnNjYWxlKHRoaXMuc2NhbGUpXG5cbiAgICBpZiAoaXNOdW1iZXIodGhpcy5vcHRzLnRpY2tOdW1iZXIpKSB7XG4gICAgICBsZXQgdGlja1ZhbCA9IHRoaXMub3B0cy50aWNrTnVtYmVyXG4gICAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcgJiYgdGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIC8vIG1vZGlmeSB4dGljayB0byBkaXNwbGF5IGxlc3MgdGlja3Mgb24gbG93ZXIgY2hhcnQgd2lkdGggb3IgaGFzIGxlc3MgZGF5c1xuICAgICAgICBjb25zdCBuZXdUaWNrID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAvIDYwKVxuICAgICAgICBjb25zdCBkYXlMZW5ndGggPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuZG9tYWluU2NhbGVbMV0gLSB0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0pIC8gKDYwICogNjAgKiAyNCAqIDEwMDApKSArIDFcbiAgICAgICAgaWYgKGRheUxlbmd0aCA+IDIgJiYgZGF5TGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBkYXlMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pbnV0ZUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiAxMDAwKSlcbiAgICAgICAgaWYgKG1pbnV0ZUxlbmd0aCA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gbWludXRlTGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VGljayA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gbmV3VGlja1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXhpcy50aWNrcyh0aWNrVmFsKVxuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrcyh0aGlzLm9wdHMudGlja051bWJlcigpKVxuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtQXR0ciAmJiB0aGlzLmF4aXNUYWcuYXR0cigndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm1BdHRyKVxuXG4gICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzICYmIHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3knKSB7XG4gICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICB9XG5cbiAgICB0aGlzLmF4aXNUYWcuY2FsbCh0aGlzLmF4aXMpXG5cblxuICAgIGNvbnN0IGxpbWl0VGV4dCA9IHRoaXMub3B0cy50ZXh0TGltaXRcbiAgICBjb25zdCB0aWNrRm10ID0gaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikgPyB0aGlzLm9wdHMudGlja0Zvcm1hdHRlciA6IGVtcHR5Rm5cblxuICAgIGlmICh0aGlzLm9wdHMucm90YXRlVGV4dCA9PT0gJ3NsYW50Jykge1xuICAgICAgdGhpcy5heGlzVGFnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC5hdHRyKCd5JywgJzgnKVxuICAgICAgICAuYXR0cignZHgnLCAnLTEuMGVtJylcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4xNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTY1KScpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydW5jYXRlVGV4dCh0aWNrRm10KGQpLCBsaW1pdFRleHQpXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMucm90YXRlVGV4dCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5heGlzVGFnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCd4JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoOTApJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydW5jYXRlVGV4dCh0aWNrRm10KGQpLCBsaW1pdFRleHQpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZW1vdmUgQXhpcyBJbnN0YW5jZVxuICByZW1vdmUgKCkge1xuICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgJiYgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZy5yZW1vdmUoKVxuICAgIHRoaXMuYXhpc1RhZyAmJiB0aGlzLmF4aXNUYWcucmVtb3ZlKClcbiAgICB0aGlzLnNjYWxlID0gbnVsbFxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCB7Z2V0T2JqZWN0LCBpc09iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydCBmcm9tICdAL2NoYXJ0cy9DaGFydCdcbmltcG9ydCBBeGlzIGZyb20gJ0AvYXhpcydcbmltcG9ydCB7YWRkRGVmYXVsdEJTT3B0aW9uc30gZnJvbSAnQC9oZWxwZXJzJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAL3Rvb2x0aXAvQmFzaWNUb29sdGlwJ1xuaW1wb3J0IEJhc2ljQlNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyJ1xuaW1wb3J0IEJhclNlcmllcyBmcm9tICdAL3Nlcmllcy9CYXJTZXJpZXMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IFRpbWVTZXJpZXNMZWdlbmQgZnJvbSAnQC9sZWdlbmQvVGltZVNlcmllc0xlZ2VuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY0JTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydEF4aXNQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRCU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcbiAgICBsZXQgYXhpc09wdGlvbnNcbiAgICBjb25zdCB5UmFuZ2UgPSB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgY29uc3QgeVJhbmdlMiA9IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgY29uc3QgdGltZUluZm8gPSB0aGlzLm9wdGlvbnMudGltZUluZm9cblxuICAgIGlmICh5UmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLmxlZnQnKVxuICAgICAgdGhpcy55QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzKVxuICAgIH1cblxuICAgIGlmICh5UmFuZ2UyKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5yaWdodCcpXG4gICAgICB0aGlzLnlBeGlzMiA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ3JpZ2h0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlMixcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmUgKGNoYXJ0IEFQSSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpczIpXG4gICAgfVxuXG4gICAgaWYgKHRpbWVJbmZvLnRpbWVSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueEF4aXMuYm90dG9tJylcbiAgICAgIHRoaXMueEF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3gnLFxuICAgICAgICBvcmllbnQ6ICdib3R0b20nLFxuICAgICAgICByYW5nZVNjYWxlOiBbMCwgdGhpcy5jaGFydFdpZHRoXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHRpbWVJbmZvLnRpbWVSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueEF4aXMpXG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcE9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMudG9vbHRpcCcpXG4gICAgaWYgKHRvb2x0aXBPcHRzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIC4uLnRvb2x0aXBPcHRzXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnRvb2x0aXApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zZXJpZXMpIHtcbiAgICAgIHRoaXMuc2VyaWVzID0gbmV3IEJhclNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGVnZW5kICYmIHRoaXMub3B0aW9ucy5sZWdlbmQudmlzaWJsZSkge1xuICAgICAgdGhpcy5sZWdlbmRzID0gbmV3IFRpbWVTZXJpZXNMZWdlbmQoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgbGVnZW5kUHJlZml4OiB0aGlzLm9wdGlvbnMubGVnZW5kLmxlZ2VuZFByZWZpeCxcbiAgICAgICAgcG9zaXRpb246IGNvbnN0YW50cy5ESVJfVE9QLFxuICAgICAgICBkaXNhYmxlU2VyaWVzVG9nZ2xlOiB0cnVlLCAvLyBEaXNhYmxlIHNlcmllcyB0b2dnbGUgZWZmZWN0IGZvciBiYXIgZ3JhcGguIFRPRE86IE5lZWQgdG8gc3VwcG9ydCB0b2dnbGluZyBvZiBzZXJpZXNcbiAgICAgICAgb25MZWdlbmRDaGFuZ2U6IHRoaXMub3B0aW9ucy5sZWdlbmQub25MZWdlbmRDaGFuZ2VcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cblxuXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zb2xlLmxvZygnQmFyU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy5jb250YWluZXIuc2VsZWN0KCdzdmcgJyArIHJlU2NhbGVBeGlzW2F4aXNdLmNsYXNzKS5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9IHNlbGVjdCh0aGlzKS50ZXh0KCkgfHwgJydcbiAgICAgICAgaWYgKHRpY2tIdG1sLmxlbmd0aCA+IHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dCA9IHRpY2tIdG1sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cblxuICAgICAgZHVtbXlHLnNlbGVjdEFsbCgnLmR1bW15VGV4dCcpXG4gICAgICAgIC5kYXRhKFtyZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0XSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC50ZXh0KFN0cmluZylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAvLyBDb21wdXRlIHJlcXVpcmVkV2lkdGggZm9yIHRoZSBNYXggdGV4dFxuICAgICAgICAgIHJlcXVpcmVkV2lkdGggPSB0aGlzLmdldENvbXB1dGVkVGV4dExlbmd0aCgpXG4gICAgICAgIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSByZXNwZWN0aXZlIG1hcmdpbiB0byBmaXQgaW4gdGlja3MgdGV4dFxuICAgICAgdGhpcy5tYXJnaW5bYXhpc10gPSBNYXRoLnJvdW5kKHJlcXVpcmVkV2lkdGgpICsgY29uc3RhbnRzLllfQVhJU19TUEFDRVxuXG4gICAgfVxuICAgIGR1bW15Ry5yZW1vdmUoKVxuXG4gICAgdGhpcy5jaGFydFdpZHRoID0gKHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cbiIsImltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQge2dldE9iamVjdCwgcmVmaW5lU3RyaW5nLCBpc0Jvb2xlYW59IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQlNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgYmFyIHNlcmllcyBKU09OIHBhcnNpbmcgOicsIGVycilcbiAgICAgIHRoaXMub3B0cy5vbkVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKU09OIHJlY2VpdmVkIC0gRXJyb3Igb24gYmFyIHNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi5iYXJzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgY29uc3QgZGF0YSA9IHNlcmllc0RhdGEudmFsdWVzXG4gICAgY29uc3QgdmFsaWRKU09OVHlwZSA9IChjb2x1bW5zLmxlbmd0aCAmJiBkYXRhLmxlbmd0aClcblxuICAgIGlmICghdmFsaWRKU09OVHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEJhciBzZXJpZXMgSlNPTiByZWNlaXZlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IHNlcmllc0RhdGEubWFwKChkdCkgPT4gZHRbMF0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQga2V5XG4gICAgbGV0IHlSYW5nZSA9IG51bGxcbiAgICBsZXQgeVJhbmdlMiA9IG51bGxcblxuXG4gICAgaWYgKHlBeGlzKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzLm1pbikgJiYgTnVtYmVyLmlzRmluaXRlKHlBeGlzLm1heCkpIHtcbiAgICAgICAgeVJhbmdlID0gW3lBeGlzLm1pbiwgeUF4aXMubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh5QXhpczIpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1pbikgJiYgTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5tYXgpKSB7XG4gICAgICAgIHlSYW5nZTIgPSBbeUF4aXMyLm1pbiwgeUF4aXMyLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB5UmFuZ2UgaXMgbm90IHNldCBmcm9tIGdyYXBoT3B0aW9ucywgdGhlbiBnbyBpbnNpZGVcbiAgICBpZiAoIXlSYW5nZSB8fCAheVJhbmdlMikge1xuICAgICAgbGV0IGZpbmRFYWNoUGxvdFJhbmdlID0gZmFsc2VcbiAgICAgIGZvciAoa2V5IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGVhY2hQbG90U2V0W2tleV0ubWluVmFsKSB8fCAhTnVtYmVyLmlzRmluaXRlKGVhY2hQbG90U2V0W2tleV0ubWF4VmFsKSkge1xuICAgICAgICAgIGZpbmRFYWNoUGxvdFJhbmdlID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmRFYWNoUGxvdFJhbmdlKSB7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIE1heCBhbmQgTWluIGZvciBlYWNoIHBsb3RzIHNlcmllc1xuICAgICAgICBsZXQgdmFsRGF0YSA9IDBcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwbG90IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgICAgICBjb25zdCBlYWNoUGxvdCA9IGVhY2hQbG90U2V0W3Bsb3RdXG4gICAgICAgICAgICB2YWxEYXRhID0gZFtlYWNoUGxvdC5kYXRhSW5kZXhdXG4gICAgICAgICAgICBpZiAodmFsRGF0YSA8IGVhY2hQbG90Lm1pblZhbCkge1xuICAgICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsRGF0YSA+IGVhY2hQbG90Lm1heFZhbCkge1xuICAgICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdHRhY2ggdmFsdWUgcmFuZ2UgZm9yIHN0YWNrZWQgYmFyIGRhdGFcbiAgICAgICAgICAgIHBsb3RJbmZvLmJhciAmJiBwbG90SW5mby5iYXIuZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKHBsb3REYXRhLmJhclR5cGUgPT09IGNvbnN0YW50cy5TVEFDS0VEX0JBUikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLmJhck9yZGVyTWVtYmVyc1xuICAgICAgICAgICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG1heGltdW0gYW5kIG1pbmltdW0gcmFuZ2UgZm9yIHN0YWNrZWQgZ3JvdXAgYnkgYWRkaW5nIGFsbCB0aGUgZGF0YVxuICAgICAgICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgIHN1bSArPSAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPyBkW2VhY2hQbG90U2V0W21lbWJlci5uYW1lXS5kYXRhSW5kZXhdIDogMClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgaWYgKHN1bSA8IHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0pIHtcbiAgICAgICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0gPSBzdW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN1bSA+IHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0pIHtcbiAgICAgICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPSBzdW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgTWF4IHZhbHVlIHJlcXVpcmVkIHRvIHBsb3Qgb24gZ3JhcGggYmFzZWQgb24gdmlzaWJsZSBwbG90IGZ1bmN0aW9uIC4gaS5lIGxpbmUgb3Igc3RhY2tcbiAgICAgIGxldCBhbGxNYXggPSAtSW5maW5pdHlcbiAgICAgIGxldCBhbGxNYXgyID0gLUluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgICBpZiAoa2V5ID09PSBjb25zdGFudHMuQkFSX0tFWSkge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBtYXhpbXVtIGFuZCBtaW5pbXVtIHJhbmdlIGlmIGJhciB0eXBlIGlzIGEgZ3JvdXBlZCBiYXJcbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5iYXJUeXBlID09PSBjb25zdGFudHMuR1JPVVBFRF9CQVIpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuYmFyT3JkZXJNZW1iZXJzXG4gICAgICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzWzBdID09PSBjb25zdGFudHMuRElSX0xFRlQgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbCA+IGFsbE1heCkge1xuICAgICAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzWzBdID09PSBjb25zdGFudHMuRElSX1JJR0hUICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgICAgICBhbGxNYXgyID0gZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdERhdGEuYmFyVHlwZSA9PT0gY29uc3RhbnRzLlNUQUNLRURfQkFSKSB7XG4gICAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gY29uc3RhbnRzLkRJUl9MRUZUICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgICBhbGxNYXggPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSBjb25zdGFudHMuRElSX1JJR0hUICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgICAgYWxsTWF4MiA9IHBsb3REYXRhLnZhbHVlUmFuZ2VbMV1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgbWluIHZhbHVlIGp1c3QgYnkgY2hlY2tpbmcgbWluIHZhbHVlIGFtb25nIGFsbCBzZXJpZXMgZGF0YVxuICAgICAgbGV0IGFsbE1pbiA9IEluZmluaXR5XG4gICAgICBsZXQgYWxsTWluMiA9IEluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpcyAmJiBlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgZWFjaFBsb3RTZXRba2V5XS52aXNpYmxlICYmIGVhY2hQbG90U2V0W2tleV0ubWluVmFsIDwgYWxsTWluKSB7XG4gICAgICAgICAgYWxsTWluID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpcyAmJiBlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLmJhcnNlcmllc1xuICAgIGNvbnN0IGNvbHVtbnMgPSBzZXJpZXNEYXRhLmNvbHVtbnMuc2xpY2UoMSkgLy8gSWdub3JlIHRoZSBmaXJzdCBjb2x1bW4sIEFzIGl0IGNvcnJlc3BvbmRzIHRvIHggYXhpc1xuICAgIGxldCBpbmQgPSAxXG4gICAgLy8gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHBsb3QgZnVuY3Rpb25zIG5lZWRlZCBmb3IgdGhlIGNoYXJ0XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB7fVxuICAgIC8vIFNldCBvZiBydWxlcyB0aGF0IGNoYXJ0cyBuZWVkcyB0byBiZSBkcmF3IG9uIHRpbWVTZXJpZXNDaGFydFxuICAgIGNvbnN0IHBsb3RJbmZvID0gZGF0YU9wdGlvbnMuc2VyaWVzXG4gICAgbGV0IGtleVxuXG4gICAgY29uc3QgZGF0YUNvbG9yQXJyID0gc2VyaWVzRGF0YS5jb2xvciB8fCBbXVxuICAgIGNvbnN0IHlMZWZ0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdCcpXG4gICAgY29uc3QgeVJpZ2h0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQnKVxuXG4gICAgLy8gR2VuZXJhdGUgZWFjaFBsb3RTZXQgdXNpbmcgY29sdW1uc1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2JhcicpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLmJhck9yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXJpZXM6IHBsb3RJbmZvLCAvLyBuZXdseSB1cGRhdGVkIHNlcmllcyBmcm9tIHVzZXIgb3B0aW9ucyBoYXZpbmcgYWRkaXRpb25hbCBpbmZvIG9mIGVhY2ggc2VyaWVzXG4gICAgICBwbG90U2V0OiBlYWNoUGxvdFNldCwgLy8gSW5mbyBvZiBlYWNoIHBsb3QgbGlrZSBjb2xvciwgbWF4LCBtaW4gZXRjXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge3N0YWNrLCByYW5nZSwgdHJhbnNwb3NlLCBtYXgsIHNlbGVjdCwgZDNFdmVudH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIGJhckRhdGE6IG51bGwsXG4gICAgICB4QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIGJhclR5cGU6IGNvbnN0YW50cy5HUk9VUEVEX0JBUixcbiAgICAgIGJhck9yZGVyTWVtYmVyczoge30sXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgZXZlbnRzOiB7fVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgdGhpcy5vcHRzLmJhck9yZGVySW5kZXggPSB0aGlzLm9wdHMuYmFyT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2VcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG4gICAgdGhpcy5vcHRzLnNlcmllc0xlbmd0aCA9IHRoaXMub3B0cy5iYXJPcmRlckluZGV4Lmxlbmd0aFxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMueFNjYWxlID0geFxuICAgIHRoaXMueVNjYWxlID0geVxuXG4gICAgY29uc3Qgc3JEYXRhID0gdGhpcy5vcHRzLmJhckRhdGFcbiAgICB0aGlzLm9wdHMuc2VyaWVzQXJyID0gW11cbiAgICB0aGlzLm9wdHMueEF4aXNBcnIgPSBbXVxuICAgIHNyRGF0YS5mb3JFYWNoKChzRGF0YSwgaW5kKSA9PiB7XG4gICAgICB0aGlzLm9wdHMueEF4aXNBcnIucHVzaChzRGF0YVt0aGlzLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgdGhpcy5vcHRzLmJhck9yZGVySW5kZXguZm9yRWFjaChmdW5jdGlvbiAoaW5kZXhWYWwsIGJySW5kKSB7XG4gICAgICAgIGlmICghc2VsZi5vcHRzLnNlcmllc0FycltickluZF0pIHtcbiAgICAgICAgICBzZWxmLm9wdHMuc2VyaWVzQXJyW2JySW5kXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWFjaFNlcmllc0RhdGEgPSBzZWxmLm9wdHMuc2VyaWVzQXJyW2JySW5kXVxuICAgICAgICBlYWNoU2VyaWVzRGF0YS5wdXNoKHNEYXRhW2luZGV4VmFsXSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICAvLyB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleC5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleFZhbCkge1xuICAgIC8vICAgc2VsZi5vcHRzLnNlcmllc0Fyci5wdXNoKG1hcChzckRhdGEsIGluZGV4VmFsKSlcbiAgICAvLyB9KVxuXG4gICAgdGhpcy5vcHRzLmJhclN0YWNrID0gc3RhY2soKS5rZXlzKHJhbmdlKHRoaXMub3B0cy5zZXJpZXNMZW5ndGgpKSh0cmFuc3Bvc2UodGhpcy5vcHRzLnNlcmllc0FycikpXG5cbiAgICB0aGlzLnlNYXhHcm91cGVkID0gbWF4KHRoaXMub3B0cy5zZXJpZXNBcnIsIGZ1bmN0aW9uICh5KSB7XG4gICAgICByZXR1cm4gbWF4KHkpXG4gICAgfSlcbiAgICB0aGlzLnlNYXhTdGFja2VkID0gbWF4KHRoaXMub3B0cy5iYXJTdGFjaywgZnVuY3Rpb24gKHkpIHtcbiAgICAgIHJldHVybiBtYXgoeSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRbMV1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgbmFtZUluZGV4TWFwID0ge31cbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBiYXJWaXNpYmxlT3JkZXIgPSB0aGlzLm9wdHMuYmFyT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlKVxuICAgIH0pXG4gICAgYmFyVmlzaWJsZU9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHBsb3QsIG5hbWUpIHtcbiAgICAgIGNvbnN0IHB0ID0gZWFjaFBsb3RTZXRbcGxvdC5uYW1lXVxuICAgICAgbmFtZUluZGV4TWFwW3B0LmRhdGFJbmRleCAtIDFdID0gcGxvdC5uYW1lXG4gICAgfSlcblxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcbiAgICB0aGlzLmJhclNlcmllcyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtYmFyLXNlcmllcycpXG4gICAgICAuZGF0YSh0aGlzLm9wdHMuYmFyU3RhY2spXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBFbGVtZW50LmF0dHIoJ2lkJykgKyAnKScpIC8vIGRpc3BsYXkgZ3JhcGhab25lIG9mIHNhbWUgc2l6ZSBhcyBjbGlwLXBhdGggZGVmaW5lZFxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJhci1zZXJpZXMnKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbbmFtZUluZGV4TWFwW2ldXS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzZXJpZXNOYW1lJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVJbmRleE1hcFtpXVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzZXJpZXNJbmRleCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBpXG4gICAgICB9KVxuXG5cbiAgICB0aGlzLmJhcnMgPSB0aGlzLmJhclNlcmllcy5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRcbiAgICAgIH0pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5vcHRzLnhBeGlzQXJyW2ldKVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgY29uc3Qgc3JOYW1lID0gc2VsZWN0KHRoaXMucGFyZW50Tm9kZSkuYXR0cignc2VyaWVzTmFtZScpXG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtzck5hbWVdLmNvbG9yQXJyICYmIGVhY2hQbG90U2V0W3NyTmFtZV0uY29sb3JBcnJbaV1cbiAgICAgIH0pXG4gICAgICAuYXR0cigneScsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHNlbGYub3B0cy5jaGFydC50b29sdGlwICYmIHNlbGYub3B0cy5jaGFydC50b29sdGlwLmhvdmVyKGQzRXZlbnQucGFnZVgsIGQzRXZlbnQucGFnZVksIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2YWw6IHNlbGYub3B0cy5iYXJEYXRhW2ldLFxuICAgICAgICAgICAgaW5kOiBpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5oaWRlKClcbiAgICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5vcHRzLmV2ZW50cykge1xuICAgICAgY29uc3QgZm4gPSB0aGlzLm9wdHMuZXZlbnRzW25hbWVdXG4gICAgICBzZWxmLmJhcnMub24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbi5hcHBseShzZWxmLm9wdHMuY2hhcnQsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICAvLyBVcGRhdGUgaGFwcGVucyB3aGVuIHRoZSBjaGFydCBpcyByZXNpemVkXG4gIHVwZGF0ZSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBpZiAodGhpcy5vcHRzLmJhclR5cGUgPT09IGNvbnN0YW50cy5TVEFDS0VEX0JBUikge1xuICAgICAgdGhpcy5iYXJzXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGRbMF0pIC0gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhcnNcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGNvbnN0IHhWYWwgPSBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pICsgc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLm9wdHMuc2VyaWVzTGVuZ3RoICogc2VsZWN0KHRoaXMucGFyZW50Tm9kZSkuYXR0cignc2VyaWVzSW5kZXgnKVxuICAgICAgICAgIHJldHVybiB4VmFsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5vcHRzLnNlcmllc0xlbmd0aClcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkWzFdIC0gZFswXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKDApIC0gc2VsZi55U2NhbGUoZFsxXSAtIGRbMF0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5iYXJTZXJpZXMuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlZHJhdyBpcyBjYWxsZWQgd2hlbiBzZXJpZXMgaXMgdG9nZ2xlZCBmcm9tIExlZ2VuZHNcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgYmFyT3JkZXIgYXJyIGJhc2VkIG9uIHZpc2libGVTZXJpZXNcbiAgICB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleCA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgYmFyIHNlcmllc1xuICAgIHRoaXMuYmFyU2VyaWVzICYmIHRoaXMuYmFyU2VyaWVzLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBiYXJPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmJhclNlcmllcyAmJiB0aGlzLmJhclNlcmllcy5yZW1vdmUoKVxuICAgIHRoaXMuYmFycyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufVxuIiwiaW1wb3J0IHtpc0FycmF5fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IEJhciBmcm9tICdAL3Nlcmllcy9CYXInXG5pbXBvcnQgU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1NlcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyU2VyaWVzIGV4dGVuZHMgU2VyaWVzIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMucGxvdFNlcmllcyA9IFtdXG4gICAgY29uc3QgZGF0YSA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YSAvLyBBY2NlcHQgZWl0aGVyIHRpbWVzZXJpZXMgb3IgcGllc2VyaWVzXG4gICAgY29uc3QgcGxvdEluZm8gPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5zZXJpZXNcbiAgICBjb25zdCBpc0JhclBsb3QgPSBpc0FycmF5KHBsb3RJbmZvLmJhcikgJiYgcGxvdEluZm8uYmFyLmxlbmd0aFxuICAgIGNvbnN0IGlzU3RhY2tQbG90ID0gaXNBcnJheShwbG90SW5mby5zdGFjaykgJiYgcGxvdEluZm8uc3RhY2subGVuZ3RoXG4gICAgbGV0IGFycmF5RGF0YSA9IFtdXG5cbiAgICAvLyBjaGVjayB3aGljaCBkYXRhIG5lZWRzIHRvIGJlIHBhc3NlZCBhbmQgcHJlc2VudFxuICAgIGlmIChpc0JhclBsb3QpIHtcbiAgICAgIGFycmF5RGF0YSA9IHBsb3RJbmZvLmJhclxuICAgIH0gZWxzZSBpZiAoaXNTdGFja1Bsb3QpIHtcbiAgICAgIGFycmF5RGF0YSA9IHBsb3RJbmZvLnN0YWNrXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiBpbnB1dCBvcHRpb25zIGFuZCBlYWNoIHBsb3QgaW5mb1xuICAgIGFycmF5RGF0YS5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IEJhcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgYmFyT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnMgfHwgcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnMsXG4gICAgICAgIGJhclR5cGU6IHBsb3REYXRhLmJhclR5cGUgfHwgJycsXG4gICAgICAgIGV2ZW50czogcGxvdERhdGEuZXZlbnRzIHx8IHt9LFxuICAgICAgICBiYXJEYXRhOiBkYXRhXG4gICAgICB9KSlcbiAgICB9KVxuICB9XG5cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7ZWxlbWVudE9mZnNldCwgaXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNUb29sdGlwIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgLy8gUHJvdmlkZSBiYXNpYyBmb3JtYXR0ZXIgdG8gZGlzcGxheSBob3ZlciBkYXRhXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMub3B0cy5mb3JtYXQpKSB7XG4gICAgICB0aGlzLm9wdHMuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4gVG9vbFRpcCBUZXh0IDogPC9zcGFuPjxici8+PHNwYW4+JHtKU09OLnN0cmluZ2lmeShkKX08L3NwYW4+YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudG9vbFRpcERpdiA9IHRoaXMub3B0cyAmJiB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXRvb2x0aXAtZGlzcGxheSAnICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgfVxuXG4gIGhvdmVyICh4LCB5LCBkaXNwbGF5RGF0YSwgZXhjbHVkZVRvb2xUaXBEaXYpIHtcbiAgICB0aGlzLnNob3dIaWRlKHRydWUpXG4gICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBzZXJpZXMgLS0gYmFyIC8gcGllXG4gICAgY29uc3QgYm94ID0gZWxlbWVudE9mZnNldCh0aGlzLnRvb2xUaXBEaXYpXG4gICAgY29uc3Qgcm9vdFBvcyA9IGVsZW1lbnRPZmZzZXQodGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lcilcbiAgICBsZXQgeHBvcyA9IE1hdGgucm91bmQoeCAtIHJvb3RQb3MubGVmdClcbiAgICBsZXQgeXBvcyA9IE1hdGgucm91bmQoeSAtIHJvb3RQb3MudG9wKVxuXG4gICAgaWYgKCFleGNsdWRlVG9vbFRpcERpdikge1xuICAgICAgLy8gQ29uc2lkZXIgdG9vbFRpcCBvZmZzZXQgZm9yIHBvc2l0aW9uXG4gICAgICB4cG9zID0gTWF0aC5yb3VuZCh4cG9zIC0gKGJveC53aWR0aCAvIDIpKVxuICAgICAgeXBvcyA9IE1hdGgucm91bmQoeXBvcyAtIChib3guaGVpZ2h0IC8gMikpXG4gICAgfVxuXG5cbiAgICB0aGlzLnRvb2xUaXBEaXZcbiAgICAgIC5zdHlsZSgnbGVmdCcsIHhwb3MgKyAncHgnKVxuICAgICAgLnN0eWxlKCd0b3AnLCB5cG9zICsgJ3B4JylcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgLmh0bWwodGhpcy5vcHRzLmZvcm1hdC5jYWxsKHRoaXMub3B0cy5jaGFydCwgZGlzcGxheURhdGEuZGF0YSkpIC8vIFVzZWQgZm9ybWF0LmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW4gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy4kdG9vbFRpcERpdiAmJiB0aGlzLiR0b29sVGlwRGl2LnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9