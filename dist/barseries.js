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
        console.log('Error encountered while barseries JSON parsing :', err);
        this.opts.onError(err);
        throw new Error('Invalid JSON received - Error on barseries JSON parsing');
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

            // Reset range for each plot for finding min , max
            for (var plot in eachPlotSet) {
              var eachPlot = eachPlotSet[plot];
              eachPlot.minVal = Infinity;
              eachPlot.maxVal = -Infinity;
            }

            // Calculate Max and Min for each plots series
            var valData = 0;
            data.forEach(function (d) {
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
            });
          }

          // Find Max value required to plot on graph based on visible plot function . i.e line or stack
          var allMax = -Infinity;
          var allMax2 = -Infinity;
          for (key in plotInfo) {
            if (key === 'bar') {
              plotInfo[key].forEach(function (plotData) {
                var memberArr = plotData.barOrderMembers;
                memberArr.forEach(function (member) {
                  if (eachPlotSet[member.name].visible && eachPlotSet[member.name].plotAxis[0] === 'left' && eachPlotSet[member.name].maxVal > allMax) {
                    allMax = eachPlotSet[member.name].maxVal;
                  }
                  if (eachPlotSet[member.name].visible && eachPlotSet[member.name].plotAxis[0] === 'right' && eachPlotSet[member.name].maxVal > allMax2) {
                    allMax2 = eachPlotSet[member.name].maxVal;
                  }
                });
              });
            }
          }

          // // Find min value just by checking min value among all series data
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
      var columns = seriesData.columns;
      var ind = 0;
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
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Event"].pageX, _d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Event"].pageY - 20, {
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

    // Create plot components based on input options and each plot info
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"])(plotInfo.bar) && plotInfo.bar.forEach(function (plotData) {
      _this.plotSeries.push(new _series_Bar__WEBPACK_IMPORTED_MODULE_5__["default"]({
        chart: _this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        xAxisTarget: _this.opts.chart.options.timeInfo.dataIndex,
        barOrderMembers: plotData.barOrderMembers,
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
      this.toolTipDiv = this.opts.chart.container.append('div').attr('class', 'vc-tooltip-display ' + this.opts.className);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvQmFyU2VyaWVzQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL0Jhci5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9CYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdmMvLi90b29sdGlwL0Jhc2ljVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwic2VsZiIsIkRJUl9MRUZUIiwiYXhpc0xlZnQiLCJESVJfUklHSFQiLCJheGlzUmlnaHQiLCJjaGFydFdpZHRoIiwiaXNGdW5jdGlvbiIsImV4dGVybmFsRm9ybWF0dGVyIiwidmFsIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJCYXJTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNCU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiYWRkRGVmYXVsdEJTT3B0aW9ucyIsIm9wdGlvbnMiLCJpc09iamVjdCIsImRhdGFFeGVjdXRvciIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJ0b29sdGlwT3B0cyIsInRvb2x0aXAiLCJUb29sdGlwIiwic2VyaWVzIiwiQmFyU2VyaWVzIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsInJlU2NhbGVZQXhpcyIsImNoYXJ0UmVzcG9uc2l2ZSIsIm1vdXNlSGFuZGxlciIsInRyaWdnZXJNb3VzZUFjdGlvbiIsInRpbWVEaWZmIiwiZ2V0VGltZSIsIm9uQ29tcGxldGUiLCJheGlzU3BlY2lmaWVyIiwidGlja1ZhbEFyciIsImRpZmZWYWwiLCJyYW5nZVZhbCIsInlNYXgiLCJhcHBseVkxQXhpcyIsImFwcGx5WTJBeGlzIiwibW9kaWZ5QXhpc1Byb3BzIiwicmVTY2FsZUF4aXMiLCJyZXF1aXJlZFdpZHRoIiwiY2xhc3MiLCJtYXhUZXh0IiwiZHVtbXlHIiwic3ZnIiwidGlja3NBcnIiLCJzZWxlY3QiLCJlYWNoIiwidGlja0h0bWwiLCJkYXRhIiwiZW50ZXIiLCJTdHJpbmciLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyb3VuZCIsIllfQVhJU19TUEFDRSIsImNoYXJ0RnVsbFNwYWNlIiwid2lkdGgiLCJDaGFydCIsImRhdGFPcHRpb25zIiwiY29uc3RydWN0Q2hhcnREYXRhIiwiY29uc3RydWN0WEF4aXNJbmZvIiwiY29uc3RydWN0UGxvdEluZm8iLCJjb25zdHJ1Y3RZQXhpc0luZm8iLCJlcnIiLCJvbkVycm9yIiwicmVzSnNvbiIsInNlcmllc0RhdGEiLCJiYXJzZXJpZXMiLCJjb2x1bW5zIiwidmFsdWVzIiwidmFsaWRKU09OVHlwZSIsImNoYXJ0RGF0YSIsImRhdGFJbmRleCIsIm1hcCIsImR0IiwiZWFjaFBsb3RTZXQiLCJwbG90U2V0IiwicGxvdEluZm8iLCJrZXkiLCJtaW4iLCJtYXgiLCJmaW5kRWFjaFBsb3RSYW5nZSIsIm1pblZhbCIsIm1heFZhbCIsInBsb3QiLCJlYWNoUGxvdCIsIkluZmluaXR5IiwidmFsRGF0YSIsImZvckVhY2giLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdERhdGEiLCJtZW1iZXJBcnIiLCJiYXJPcmRlck1lbWJlcnMiLCJtZW1iZXIiLCJuYW1lIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJ2YWx1ZVJhbmdlIiwiaXNCb29sZWFuIiwiQmFyIiwiYmFyRGF0YSIsInhBeGlzVGFyZ2V0IiwiYmFyVHlwZSIsIkdST1VQRURfQkFSIiwiZXZlbnRzIiwiYmFyT3JkZXJJbmRleCIsImZpbHRlciIsImVsZSIsInNlcmllc0xlbmd0aCIsIngiLCJpbmRleE9mIiwieSIsInhTY2FsZSIsInlTY2FsZSIsInNyRGF0YSIsInNlcmllc0FyciIsInhBeGlzQXJyIiwic0RhdGEiLCJpbmRleFZhbCIsImJySW5kIiwiZWFjaFNlcmllc0RhdGEiLCJiYXJTdGFjayIsInN0YWNrIiwia2V5cyIsInRyYW5zcG9zZSIsInlNYXhHcm91cGVkIiwieU1heFN0YWNrZWQiLCJuYW1lSW5kZXhNYXAiLCJiYXJWaXNpYmxlT3JkZXIiLCJwdCIsImNsaXBFbGVtZW50IiwiYmFyU2VyaWVzIiwiYmFycyIsInNyTmFtZSIsInBhcmVudE5vZGUiLCJjb2xvckFyciIsImJhbmR3aWR0aCIsIm9uIiwiaG92ZXIiLCJkM0V2ZW50IiwicGFnZVgiLCJwYWdlWSIsImhpZGUiLCJmbiIsImFwcGx5IiwiYXJndW1lbnRzIiwiU1RBQ0tFRF9CQVIiLCJ4VmFsIiwicGxvdFNlcmllcyIsImlzQXJyYXkiLCJiYXIiLCJTZXJpZXMiLCJCYXNpY1Rvb2x0aXAiLCJmb3JtYXQiLCJ0b29sVGlwRGl2IiwiZGlzcGxheURhdGEiLCJleGNsdWRlVG9vbFRpcERpdiIsInNob3dIaWRlIiwiYm94IiwiZWxlbWVudE9mZnNldCIsInJvb3RQb3MiLCJ4cG9zIiwieXBvcyIsInRvcCIsImhlaWdodCIsImh0bWwiLCIkdG9vbFRpcERpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQWFDLElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0EsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCQyxpQkFBVyxFQURhO0FBRXhCQyxnQkFBVSxHQUZjO0FBR3hCQyxjQUFRLE1BSGdCO0FBSXhCQyxhQUFPLEVBSmlCO0FBS3hCQyxZQUFNLEVBTGtCO0FBTXhCQyxrQkFBWSxDQUFDLENBQUQsRUFBSSxJQUFKLENBTlk7QUFPeEJD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QUNSLFdBQUsrTCxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBaUI5TCxNQUFqQixFQUFwQjtBQUNBLFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBbkR1Q3VGLDhEOztBQUFyQitLLDJFIiwiZmlsZSI6ImJhcnNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7XG4gIGF4aXNCb3R0b20sIGF4aXNUb3AsIGF4aXNMZWZ0LCBheGlzUmlnaHQsXG4gIHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIHNjYWxlVGltZVxufSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtlbXB0eUZuLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgdHJ1bmNhdGVUZXh0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICBsYWJlbDogJycsXG4gICAgICB1bml0OiAnJyxcbiAgICAgIHJhbmdlU2NhbGU6IFswLCAxMDAwXSxcbiAgICAgIGRvbWFpblNjYWxlOiBbMCwgMTAwXSxcbiAgICAgIHNjYWxlVHlwZTogJycsXG4gICAgICBheGlzQ2xhbXA6IHRydWUsXG4gICAgICB0aWNrTnVtYmVyOiBudWxsLFxuICAgICAgcm90YXRlVGV4dDogZmFsc2UsXG4gICAgICB0ZXh0TGltaXQ6IDgsXG4gICAgICB0aWNrRm9ybWF0dGVyOiBmYWxzZSwgLy8gVXNlIGQzIHRpY2tGb3JtYXR0ZXJcbiAgICAgIHNob3dHcmlkTGluZXM6IGZhbHNlLFxuICAgICAgdGlja1BhZGRpbmc6IGNvbnN0YW50cy5USUNLX1BBRERJTkcsXG4gICAgICBzY2FsZVBhZGRpbmc6IGNvbnN0YW50cy5TQ0FMRV9QQURESU5HLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgLy8gQ3JlYXRlIEF4aXMgYW5kIFNjYWxlIGJhc2VkIG9uIGlucHV0IG9wdGlvbnNcbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUJhbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgaWYgKHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzQm90dG9tKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1RvcCgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpKVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gSG9sZHMgYWxsIHRpY2sgdmFsdWVzIHRoYXQgYXhpcyBzaG93c1xuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzTGVmdCgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1JpZ2h0KClcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoMClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpKSB7XG4gICAgICAgIC8vIElmIGV4dGVybmFsIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgbW9kaWZ5IGZvcm1hdHRlciB0byBwb3B1bGF0ZSB0aWNrVmFsdWVzXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRm9ybWF0dGVyID0gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXJcbiAgICAgICAgdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgc2VsZi50aWNrVmFsdWVzLnVuc2hpZnQodmFsKVxuICAgICAgICAgIHJldHVybiBleHRlcm5hbEZvcm1hdHRlcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnRpY2tQYWRkaW5nID4gMCkge1xuICAgICAgdGhpcy5heGlzLnRpY2tQYWRkaW5nKHRoaXMub3B0cy50aWNrUGFkZGluZylcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBeGlzUHJvcHMgKG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBvcHRzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgwLCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0fSlgXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGB2Yy1heGlzIHZjLWF4aXMtJHt0aGlzLm9wdHMub3JpZW50fSB2Yy1heGlzLSR7dGhpcy5vcHRzLmNsYXNzTmFtZX1gKVxuXG5cbiAgICAvLyBJZiBubyBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIGF4aXMgdXNlcyBkMyBkZWZhdWx0IGZvcm1hdHRlclxuICAgIGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpICYmIHRoaXMuYXhpcy50aWNrRm9ybWF0KHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKVxuXG4gICAgLy8gQWRkIExhYmVsIHRvIEF4aXNcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnID0gdGhpcy5heGlzVGFnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzLWxhYmVsJylcbiAgICAgICAgLnRleHQodGhpcy5vcHRzLmxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIC8vIElGIG5vdCB2aXNpYmxlLCBEb250IHNob3cgdGhlIGF4aXMsIGJ1dCBzdGlsbCBzY2FsZSBhbmQgcGxvdCBvbiBncmFwaFpvbmUsIHNvIHRoYXQgYWxsIHNlcmllcyBjYW4gYmUgcGxvdHRlZFxuICAgICF0aGlzLm9wdHMudmlzaWJsZSAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgZ3JhcGggQXhpcyBiYXNlZCBvbiBuZXcgd2lkdGggYW5kIG1vZGlmeSByYW5nZSwgZG9tYWluIGFuZCB0aWNrc1xuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy5vcHRzLnJhbmdlU2NhbGUgPSBbMCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhdXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG5cbiAgICAvLyBQb3NpdGlvbiBsYWJlbCwgc2NhbGUsIHRpY2tzLCBheGlzIGJhc2VkIG9uIGNoYXJ0IHdpZHRoXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgbGV0IHhUcmFucyA9IDBcbiAgICAgIGxldCB5VHJhbnMgPSAwXG4gICAgICBsZXQgcm90YXRlID0gMFxuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHhUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyAyKVxuICAgICAgICB5VHJhbnMgPSBjb25zdGFudHMuWF9BWElTX0xBQkVMX1lcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUIHx8IHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICAgIHhUcmFucyA9IC0odGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KSArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gMjcwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeFRyYW5zID0gdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gOTBcbiAgICAgICAgfVxuICAgICAgICB5VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt4VHJhbnN9LCR7eVRyYW5zfSkgcm90YXRlKCR7cm90YXRlfSlgKVxuICAgIH1cblxuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBsZXQgZG9tYWluU2NhbGUgPSBbdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdLCB0aGlzLm9wdHMuZG9tYWluU2NhbGVbdGhpcy5vcHRzLmRvbWFpblNjYWxlLmxlbmd0aCAtIDFdXVxuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgZG9tYWluU2NhbGUgPSB0aGlzLm9wdHMuZG9tYWluU2NhbGVcbiAgICAgIHRoaXMuc2NhbGVcbiAgICAgICAgLnBhZGRpbmcodGhpcy5vcHRzLnNjYWxlUGFkZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRzLmF4aXNDbGFtcCAmJiB0aGlzLnNjYWxlLmNsYW1wKCkgLy8gQ2xhbXBzIG91dHNpZGUgcmFuZ2UgdmFsdWUgd2l0aGluIHNwZWN0aWZlZCByYW5nZSBhbmQgZG9tYWluXG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZS5yYW5nZSh0aGlzLm9wdHMucmFuZ2VTY2FsZSlcbiAgICAgIC5kb21haW4oZG9tYWluU2NhbGUpXG5cbiAgICB0aGlzLmF4aXMuc2NhbGUodGhpcy5zY2FsZSlcblxuICAgIGlmIChpc051bWJlcih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIGxldCB0aWNrVmFsID0gdGhpcy5vcHRzLnRpY2tOdW1iZXJcbiAgICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4JyAmJiB0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgLy8gbW9kaWZ5IHh0aWNrIHRvIGRpc3BsYXkgbGVzcyB0aWNrcyBvbiBsb3dlciBjaGFydCB3aWR0aCBvciBoYXMgbGVzcyBkYXlzXG4gICAgICAgIGNvbnN0IG5ld1RpY2sgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gNjApXG4gICAgICAgIGNvbnN0IGRheUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpICsgMVxuICAgICAgICBpZiAoZGF5TGVuZ3RoID4gMiAmJiBkYXlMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IGRheUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWludXRlTGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDEwMDApKVxuICAgICAgICBpZiAobWludXRlTGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBtaW51dGVMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdUaWNrIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBuZXdUaWNrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5heGlzLnRpY2tzKHRpY2tWYWwpXG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgdGhpcy5heGlzLnRpY2tzKHRoaXMub3B0cy50aWNrTnVtYmVyKCkpXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyICYmIHRoaXMuYXhpc1RhZy5hdHRyKCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybUF0dHIpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgJiYgdGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZy5jYWxsKHRoaXMuYXhpcylcblxuXG4gICAgY29uc3QgbGltaXRUZXh0ID0gdGhpcy5vcHRzLnRleHRMaW1pdFxuICAgIGNvbnN0IHRpY2tGbXQgPSBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSA/IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyIDogZW1wdHlGblxuXG4gICAgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAnc2xhbnQnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ3knLCAnOCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctMS4wZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3gnLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MCknKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlbW92ZSBBeGlzIEluc3RhbmNlXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5yZW1vdmUoKVxuICAgIHRoaXMuc2NhbGUgPSBudWxsXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IEF4aXMgZnJvbSAnQC9heGlzJ1xuaW1wb3J0IHthZGREZWZhdWx0QlNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9CYXNpY1Rvb2x0aXAnXG5pbXBvcnQgQmFzaWNCU1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0Jhc2ljQlNQYXJzZXInXG5pbXBvcnQgQmFyU2VyaWVzIGZyb20gJ0Avc2VyaWVzL0JhclNlcmllcydcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhclNlcmllc0NoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBvcHRzKSB7XG4gICAgb3B0cy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGFQYXJzZXIgaXMgbm90IHBhc3NlZFxuICAgIGlmICghb3B0cy5kYXRhUGFyc2VyKSB7XG4gICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNCU1BhcnNlcihvcHRzKVxuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgZGF0YVBhcnNlciBleGlzdHMgYW5kIGl0cyBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlclxuICAgIGlmICghKG9wdHMuZGF0YVBhcnNlciBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGFQYXJzZXIgaW4gb3B0aW9ucyBkb3Nlbid0IGhhdmUgaW1wbGVtZW50YXRpb24gb2YgQ2hhcnRBeGlzUGFyc2VyXCIpXG4gICAgfVxuXG4gICAgLy8gQ2FsbCBQYXJlbnQgSW1wbFxuICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0cylcblxuICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgdG8gY2hhcnRcbiAgICBhZGREZWZhdWx0QlNPcHRpb25zKHRoaXMub3B0aW9ucylcblxuICAgIC8vIFJ1biB0aGUgZGF0YVBhcnNlciBmb3IgZ2l2ZW4gSlNPTiBkYXRhXG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuZGF0YVBhcnNlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRhdGFQYXJzZXIuZGF0YUV4ZWN1dG9yKCkpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlsaXplIGFsbCBjaGFydCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGltZVNlcmllc0NoYXJ0IG9uIGV4YWN0IG9yZGVyIGJhc2VkIG9uIGVhY2ggZGVwZW5kZW5jaWVzXG4gICAgdGhpcy5jaGFydEluaXRpbGl6ZSgpXG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5kcmF3KCkpXG4gIH1cblxuICBjaGFydEluaXRpbGl6ZSAoKSB7XG4gICAgbGV0IGF4aXNPcHRpb25zXG4gICAgY29uc3QgeVJhbmdlID0gdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgIGNvbnN0IHlSYW5nZTIgPSB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG5cbiAgICBpZiAoeVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5sZWZ0JylcbiAgICAgIHRoaXMueUF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpcylcbiAgICB9XG5cbiAgICBpZiAoeVJhbmdlMikge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMucmlnaHQnKVxuICAgICAgdGhpcy55QXhpczIgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdyaWdodCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZTIsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlIChjaGFydCBBUEkpXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMyKVxuICAgIH1cblxuICAgIGlmICh0aW1lSW5mby50aW1lUmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnhBeGlzLmJvdHRvbScpXG4gICAgICB0aGlzLnhBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd4JyxcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgcmFuZ2VTY2FsZTogWzAsIHRoaXMuY2hhcnRXaWR0aF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB0aW1lSW5mby50aW1lUmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnhBeGlzKVxuICAgIH1cblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICB0aGlzLnNlcmllcyA9IG5ldyBCYXJTZXJpZXMoe1xuICAgICAgICBjaGFydDogdGhpc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnNlcmllcylcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zb2xlLmxvZygnQmFyU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy5jb250YWluZXIuc2VsZWN0KCdzdmcgJyArIHJlU2NhbGVBeGlzW2F4aXNdLmNsYXNzKS5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9IHNlbGVjdCh0aGlzKS50ZXh0KCkgfHwgJydcbiAgICAgICAgaWYgKHRpY2tIdG1sLmxlbmd0aCA+IHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dCA9IHRpY2tIdG1sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cblxuICAgICAgZHVtbXlHLnNlbGVjdEFsbCgnLmR1bW15VGV4dCcpXG4gICAgICAgIC5kYXRhKFtyZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0XSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC50ZXh0KFN0cmluZylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAvLyBDb21wdXRlIHJlcXVpcmVkV2lkdGggZm9yIHRoZSBNYXggdGV4dFxuICAgICAgICAgIHJlcXVpcmVkV2lkdGggPSB0aGlzLmdldENvbXB1dGVkVGV4dExlbmd0aCgpXG4gICAgICAgIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSByZXNwZWN0aXZlIG1hcmdpbiB0byBmaXQgaW4gdGlja3MgdGV4dFxuICAgICAgdGhpcy5tYXJnaW5bYXhpc10gPSBNYXRoLnJvdW5kKHJlcXVpcmVkV2lkdGgpICsgY29uc3RhbnRzLllfQVhJU19TUEFDRVxuXG4gICAgfVxuICAgIGR1bW15Ry5yZW1vdmUoKVxuXG4gICAgdGhpcy5jaGFydFdpZHRoID0gKHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cbiIsImltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQge2dldE9iamVjdCwgcmVmaW5lU3RyaW5nLCBpc0Jvb2xlYW59IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQlNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgYmFyc2VyaWVzIEpTT04gcGFyc2luZyA6JywgZXJyKVxuICAgICAgdGhpcy5vcHRzLm9uRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgLSBFcnJvciBvbiBiYXJzZXJpZXMgSlNPTiBwYXJzaW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RDaGFydERhdGEgKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHJlc0pzb24gPSBkYXRhT3B0aW9ucy5kYXRhXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IHJlc0pzb24uYmFyc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICBpZiAoIXZhbGlkSlNPTlR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBCYXIgc2VyaWVzIEpTT04gcmVjZWl2ZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjaGFydERhdGE6IGRhdGFcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RYQXhpc0luZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHNlcmllc0RhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCBkYXRhSW5kZXggPSAwXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVJbmZvOiB7XG4gICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgdGltZVJhbmdlOiBzZXJpZXNEYXRhLm1hcCgoZHQpID0+IGR0WzBdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFlBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBkYXRhT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBjb25zdCBkYXRhID0gZGF0YU9wdGlvbnMuY2hhcnREYXRhXG4gICAgY29uc3QgeUF4aXMgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0JylcbiAgICBjb25zdCB5QXhpczIgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodCcpXG4gICAgbGV0IGtleVxuICAgIGxldCB5UmFuZ2UgPSBudWxsXG4gICAgbGV0IHlSYW5nZTIgPSBudWxsXG5cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpcy5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpcy5tYXgpKSB7XG4gICAgICAgIHlSYW5nZSA9IFt5QXhpcy5taW4sIHlBeGlzLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeUF4aXMyKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWF4KSkge1xuICAgICAgICB5UmFuZ2UyID0gW3lBeGlzMi5taW4sIHlBeGlzMi5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgeVJhbmdlIGlzIG5vdCBzZXQgZnJvbSBncmFwaE9wdGlvbnMsIHRoZW4gZ28gaW5zaWRlXG4gICAgaWYgKCF5UmFuZ2UgfHwgIXlSYW5nZTIpIHtcbiAgICAgIGxldCBmaW5kRWFjaFBsb3RSYW5nZSA9IGZhbHNlXG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1pblZhbCkgfHwgIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1heFZhbCkpIHtcbiAgICAgICAgICBmaW5kRWFjaFBsb3RSYW5nZSA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5kRWFjaFBsb3RSYW5nZSkge1xuXG4gICAgICAgIC8vIFJlc2V0IHJhbmdlIGZvciBlYWNoIHBsb3QgZm9yIGZpbmRpbmcgbWluICwgbWF4XG4gICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgIGNvbnN0IGVhY2hQbG90ID0gZWFjaFBsb3RTZXRbcGxvdF1cbiAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSBJbmZpbml0eVxuICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIE1heCBhbmQgTWluIGZvciBlYWNoIHBsb3RzIHNlcmllc1xuICAgICAgICBsZXQgdmFsRGF0YSA9IDBcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwbG90IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgICAgICBjb25zdCBlYWNoUGxvdCA9IGVhY2hQbG90U2V0W3Bsb3RdXG4gICAgICAgICAgICB2YWxEYXRhID0gZFtlYWNoUGxvdC5kYXRhSW5kZXhdXG4gICAgICAgICAgICBpZiAodmFsRGF0YSA8IGVhY2hQbG90Lm1pblZhbCkge1xuICAgICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsRGF0YSA+IGVhY2hQbG90Lm1heFZhbCkge1xuICAgICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2JhcicpIHtcbiAgICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgICBhbGxNYXggPSBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ubWF4VmFsID4gYWxsTWF4Mikge1xuICAgICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXMgJiYgZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbikge1xuICAgICAgICAgIGFsbE1pbiA9IGVhY2hQbG90U2V0W2tleV0ubWluVmFsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXMgJiYgZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4yKSB7XG4gICAgICAgICAgYWxsTWluMiA9IGVhY2hQbG90U2V0W2tleV0ubWluVmFsXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBsZXQgeU1pbiwgeU1heFxuICAgICAgLy8gSWYgWWF4aXMgcmFuZ2UgaXMgYWxyZWFkeSBkZWZpbmVkIGluIG9wdGlvbnMsIE92ZXJyaWRlIGl0LlxuICAgICAgaWYgKFthbGxNaW4sIGFsbE1heF0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdC5taW4nKVxuICAgICAgICB5TWluID0gTnVtYmVyLmlzRmluaXRlKHlNaW4pID8geU1pbiA6IGFsbE1pblxuICAgICAgICB5TWF4ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heFxuICAgICAgICBpZiAoIXlNYXgpIHtcbiAgICAgICAgICB5TWF4ID0geU1pbiArIDgwIC8vIFNldCBhcyBkZWZhdWx0IDEwMCBpZiByYW5nZSBpcyBbMCwwXVxuICAgICAgICB9XG4gICAgICAgIHlSYW5nZSA9IFt5TWluLCB5TWF4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHlBeGlzKSB7XG4gICAgICAgICAgeVJhbmdlID0gWzAsIDgwXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlSYW5nZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBpZiAoW2FsbE1pbjIsIGFsbE1heDJdLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKGEpICYmIE51bWJlci5pc0Zpbml0ZShiKVxuICAgICAgfSkpIHtcbiAgICAgICAgeU1pbiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluMlxuICAgICAgICB5TWF4ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWF4JylcbiAgICAgICAgeU1heCA9IE51bWJlci5pc0Zpbml0ZSh5TWF4KSA/IHlNYXggOiBhbGxNYXgyXG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlMiA9IFt5TWluLCB5TWF4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHlBeGlzMikge1xuICAgICAgICAgIHlSYW5nZTIgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlMiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB5UmFuZ2U6IHlSYW5nZSxcbiAgICAgIHlSYW5nZTI6IHlSYW5nZTJcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RQbG90SW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi5iYXJzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCBkYXRhQ29sb3JBcnIgPSBzZXJpZXNEYXRhLmNvbG9yIHx8IFtdXG4gICAgY29uc3QgeUxlZnQgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0JylcbiAgICBjb25zdCB5UmlnaHQgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodCcpXG5cbiAgICAvLyBHZW5lcmF0ZSBlYWNoUGxvdFNldCB1c2luZyBjb2x1bW5zXG4gICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAvLyBDb252ZXJ0IHRoZSBTZXJpZXMgTmFtZSB0byBKUyBzdWl0YWJsZSBvYmplY3QgbWFwcGVkIG5hbWUgZXg6IGFiYyglKSAxIC0tPiBhYmMxXG4gICAgICBjb25zdCByZWZpbmVOYW1lID0gcmVmaW5lU3RyaW5nKGQpXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXSA9IHtcbiAgICAgICAgbmFtZTogZCxcbiAgICAgICAgZGF0YUluZGV4OiBpbmQsXG4gICAgICAgIG1pblZhbDogSW5maW5pdHksXG4gICAgICAgIG1heFZhbDogLUluZmluaXR5LFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjogZGF0YUNvbG9yQXJyW2luZF0gfHwgJyMwMDAnXG4gICAgICB9XG4gICAgICBpbmQrK1xuICAgIH0pXG5cblxuICAgIGZvciAoa2V5IGluIHBsb3RJbmZvKSB7XG4gICAgICBpZiAoa2V5ID09PSAnYmFyJykge1xuICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuYmFyT3JkZXJNZW1iZXJzXG4gICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZSA9IFtJbmZpbml0eSwgLUluZmluaXR5XVxuICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgIG1lbWJlci5uYW1lID0gcmVmaW5lU3RyaW5nKG1lbWJlci5uYW1lKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBtZW1iZXIuY29sb3IgLy8gQXBwbHkgY29sb3IgZm9yIGVhY2ggUGxvdCBzZXJpZXMgb3IgcGljayBmcm9tIGRhdGEgY29sb3IgQXJyXG4gICAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IGBDb2xvciBub3QgcHJlc2VudCBmb3Igc2VyaWVzICR7cGxvdERhdGEubmFtZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLmNvbG9yID0gY29sb3IpXG4gICAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IG1lbWJlci5wbG90QXhpcyB8fCBbJ2xlZnQnLCAnYm90dG9tJ11cbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpcyA9IHBsb3RBeGlzXG4gICAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgICBpc0Jvb2xlYW4obWVtYmVyLnZpc2libGUpICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSA9IG1lbWJlci52aXNpYmxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcmllczogcGxvdEluZm8sIC8vIG5ld2x5IHVwZGF0ZWQgc2VyaWVzIGZyb20gdXNlciBvcHRpb25zIGhhdmluZyBhZGRpdGlvbmFsIGluZm8gb2YgZWFjaCBzZXJpZXNcbiAgICAgIHBsb3RTZXQ6IGVhY2hQbG90U2V0LCAvLyBJbmZvIG9mIGVhY2ggcGxvdCBsaWtlIGNvbG9yLCBtYXgsIG1pbiBldGNcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge1xuICBnZXRPYmplY3Rcbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7XG4gIHN0YWNrLFxuICByYW5nZSxcbiAgdHJhbnNwb3NlLFxuICBtYXgsXG4gIHNlbGVjdCxcbiAgZDNFdmVudFxufSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgYmFyRGF0YTogbnVsbCxcbiAgICAgIHhBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgYmFyVHlwZTogY29uc3RhbnRzLkdST1VQRURfQkFSLFxuICAgICAgYmFyT3JkZXJNZW1iZXJzOiB7fSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBldmVudHM6IHt9XG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleCA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cbiAgICB0aGlzLm9wdHMuc2VyaWVzTGVuZ3RoID0gdGhpcy5vcHRzLmJhck9yZGVySW5kZXgubGVuZ3RoXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy54U2NhbGUgPSB4XG4gICAgdGhpcy55U2NhbGUgPSB5XG5cbiAgICBjb25zdCBzckRhdGEgPSB0aGlzLm9wdHMuYmFyRGF0YVxuICAgIHRoaXMub3B0cy5zZXJpZXNBcnIgPSBbXVxuICAgIHRoaXMub3B0cy54QXhpc0FyciA9IFtdXG4gICAgc3JEYXRhLmZvckVhY2goKHNEYXRhLCBpbmQpID0+IHtcbiAgICAgIHRoaXMub3B0cy54QXhpc0Fyci5wdXNoKHNEYXRhW3RoaXMub3B0cy54QXhpc1RhcmdldF0pXG4gICAgICB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleC5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleFZhbCwgYnJJbmQpIHtcbiAgICAgICAgaWYgKCFzZWxmLm9wdHMuc2VyaWVzQXJyW2JySW5kXSkge1xuICAgICAgICAgIHNlbGYub3B0cy5zZXJpZXNBcnJbYnJJbmRdID0gW11cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlYWNoU2VyaWVzRGF0YSA9IHNlbGYub3B0cy5zZXJpZXNBcnJbYnJJbmRdXG4gICAgICAgIGVhY2hTZXJpZXNEYXRhLnB1c2goc0RhdGFbaW5kZXhWYWxdKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC8vIHRoaXMub3B0cy5iYXJPcmRlckluZGV4LmZvckVhY2goZnVuY3Rpb24gKGluZGV4VmFsKSB7XG4gICAgLy8gICBzZWxmLm9wdHMuc2VyaWVzQXJyLnB1c2gobWFwKHNyRGF0YSwgaW5kZXhWYWwpKVxuICAgIC8vIH0pXG5cbiAgICB0aGlzLm9wdHMuYmFyU3RhY2sgPSBzdGFjaygpLmtleXMocmFuZ2UodGhpcy5vcHRzLnNlcmllc0xlbmd0aCkpKHRyYW5zcG9zZSh0aGlzLm9wdHMuc2VyaWVzQXJyKSlcblxuICAgIHRoaXMueU1heEdyb3VwZWQgPSBtYXgodGhpcy5vcHRzLnNlcmllc0FyciwgZnVuY3Rpb24gKHkpIHtcbiAgICAgIHJldHVybiBtYXgoeSlcbiAgICB9KVxuICAgIHRoaXMueU1heFN0YWNrZWQgPSBtYXgodGhpcy5vcHRzLmJhclN0YWNrLCBmdW5jdGlvbiAoeSkge1xuICAgICAgcmV0dXJuIG1heCh5LCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFsxXVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBuYW1lSW5kZXhNYXAgPSB7fVxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IGJhclZpc2libGVPcmRlciA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICBiYXJWaXNpYmxlT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAocGxvdCwgbmFtZSkge1xuICAgICAgY29uc3QgcHQgPSBlYWNoUGxvdFNldFtwbG90Lm5hbWVdXG4gICAgICBuYW1lSW5kZXhNYXBbcHQuZGF0YUluZGV4IC0gMV0gPSBwbG90Lm5hbWVcbiAgICB9KVxuXG5cbiAgICBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXIuc2VsZWN0KCdzdmcgY2xpcFBhdGgnKVxuICAgIHRoaXMuYmFyU2VyaWVzID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5zZWxlY3RBbGwoJy52Yy1iYXItc2VyaWVzJylcbiAgICAgIC5kYXRhKHRoaXMub3B0cy5iYXJTdGFjaylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYmFyLXNlcmllcycpXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtuYW1lSW5kZXhNYXBbaV1dLmNvbG9yXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3Nlcmllc05hbWUnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gbmFtZUluZGV4TWFwW2ldXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3Nlcmllc0luZGV4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH0pXG5cblxuICAgIHRoaXMuYmFycyA9IHRoaXMuYmFyU2VyaWVzLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAuZGF0YShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFxuICAgICAgfSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBjb25zdCBzck5hbWUgPSBzZWxlY3QodGhpcy5wYXJlbnROb2RlKS5hdHRyKCdzZXJpZXNOYW1lJylcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W3NyTmFtZV0uY29sb3JBcnIgJiYgZWFjaFBsb3RTZXRbc3JOYW1lXS5jb2xvckFycltpXVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy54U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAgJiYgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAuaG92ZXIoZDNFdmVudC5wYWdlWCwgZDNFdmVudC5wYWdlWSAtIDIwLCB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdmFsOiBzZWxmLm9wdHMuYmFyRGF0YVtpXSxcbiAgICAgICAgICAgIGluZDogaVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAgJiYgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAuaGlkZSgpXG4gICAgICB9KVxuXG4gICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0cy5ldmVudHMpIHtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5vcHRzLmV2ZW50c1tuYW1lXVxuICAgICAgc2VsZi5iYXJzLm9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm4uYXBwbHkoc2VsZi5vcHRzLmNoYXJ0LCBhcmd1bWVudHMpXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgLy8gVXBkYXRlIGhhcHBlbnMgd2hlbiB0aGUgY2hhcnQgaXMgcmVzaXplZFxuICB1cGRhdGUgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgaWYgKHRoaXMub3B0cy5iYXJUeXBlID09PSBjb25zdGFudHMuU1RBQ0tFRF9CQVIpIHtcbiAgICAgIHRoaXMuYmFyc1xuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGRbMV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkWzBdKSAtIHNlbGYueVNjYWxlKGRbMV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5vcHRzLnhBeGlzQXJyW2ldKVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iYXJzXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBjb25zdCB4VmFsID0gc2VsZi54U2NhbGUoc2VsZi5vcHRzLnhBeGlzQXJyW2ldKSArIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5vcHRzLnNlcmllc0xlbmd0aCAqIHNlbGVjdCh0aGlzLnBhcmVudE5vZGUpLmF0dHIoJ3Nlcmllc0luZGV4JylcbiAgICAgICAgICByZXR1cm4geFZhbFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYub3B0cy5zZXJpZXNMZW5ndGgpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZFsxXSAtIGRbMF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZSgwKSAtIHNlbGYueVNjYWxlKGRbMV0gLSBkWzBdKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYmFyU2VyaWVzLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZWRyYXcgaXMgY2FsbGVkIHdoZW4gc2VyaWVzIGlzIHRvZ2dsZWQgZnJvbSBMZWdlbmRzXG4gIHJlZHJhdyAoKSB7XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgLy8gTW9kaWZ5IGJhck9yZGVyIGFyciBiYXNlZCBvbiB2aXNpYmxlU2VyaWVzXG4gICAgdGhpcy5vcHRzLmJhck9yZGVySW5kZXggPSB0aGlzLm9wdHMuYmFyT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlKVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgYWxsIGJhciBzZXJpZXNcbiAgICB0aGlzLmJhclNlcmllcyAmJiB0aGlzLmJhclNlcmllcy5yZW1vdmUoKVxuICAgIC8vIGRyYXcgd2l0aCBuZXcgYmFyT3JkZXJNZW1iZXJzXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5iYXJTZXJpZXMgJiYgdGhpcy5iYXJTZXJpZXMucmVtb3ZlKClcbiAgICB0aGlzLmJhcnMgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG5cbn0iLCJpbXBvcnQge2lzQXJyYXl9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgQmFyIGZyb20gJ0Avc2VyaWVzL0JhcidcbmltcG9ydCBTZXJpZXMgZnJvbSAnQC9zZXJpZXMvU2VyaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJTZXJpZXMgZXh0ZW5kcyBTZXJpZXMge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5wbG90U2VyaWVzID0gW11cbiAgICBjb25zdCBkYXRhID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhIC8vIEFjY2VwdCBlaXRoZXIgdGltZXNlcmllcyBvciBwaWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnNlcmllc1xuXG4gICAgLy8gQ3JlYXRlIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiBpbnB1dCBvcHRpb25zIGFuZCBlYWNoIHBsb3QgaW5mb1xuICAgIGlzQXJyYXkocGxvdEluZm8uYmFyKSAmJiBwbG90SW5mby5iYXIuZm9yRWFjaCgocGxvdERhdGEpID0+IHtcbiAgICAgIHRoaXMucGxvdFNlcmllcy5wdXNoKG5ldyBCYXIoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIGJhck9yZGVyTWVtYmVyczogcGxvdERhdGEuYmFyT3JkZXJNZW1iZXJzLFxuICAgICAgICBiYXJEYXRhOiBkYXRhXG4gICAgICB9KSlcbiAgICB9KVxuICB9XG5cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2VsZW1lbnRPZmZzZXQsIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVG9vbHRpcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIC8vIFByb3ZpZGUgYmFzaWMgZm9ybWF0dGVyIHRvIGRpc3BsYXkgaG92ZXIgZGF0YVxuICAgIGlmICghaXNGdW5jdGlvbih0aGlzLm9wdHMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5vcHRzLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+IFRvb2xUaXAgVGV4dCA6IDwvc3Bhbj48YnIvPjxzcGFuPiR7SlNPTi5zdHJpbmdpZnkoZCl9PC9zcGFuPmBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnRvb2xUaXBEaXYgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXRvb2x0aXAtZGlzcGxheSAnICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgfVxuXG4gIGhvdmVyICh4LCB5LCBkaXNwbGF5RGF0YSwgZXhjbHVkZVRvb2xUaXBEaXYpIHtcbiAgICB0aGlzLnNob3dIaWRlKHRydWUpXG4gICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBzZXJpZXMgLS0gYmFyIC8gcGllXG4gICAgY29uc3QgYm94ID0gZWxlbWVudE9mZnNldCh0aGlzLnRvb2xUaXBEaXYpXG4gICAgY29uc3Qgcm9vdFBvcyA9IGVsZW1lbnRPZmZzZXQodGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lcilcbiAgICBsZXQgeHBvcyA9IE1hdGgucm91bmQoeCAtIHJvb3RQb3MubGVmdClcbiAgICBsZXQgeXBvcyA9IE1hdGgucm91bmQoeSAtIHJvb3RQb3MudG9wKVxuXG4gICAgaWYgKCFleGNsdWRlVG9vbFRpcERpdikge1xuICAgICAgLy8gQ29uc2lkZXIgdG9vbFRpcCBvZmZzZXQgZm9yIHBvc2l0aW9uXG4gICAgICB4cG9zID0gTWF0aC5yb3VuZCh4cG9zIC0gKGJveC53aWR0aCAvIDIpKVxuICAgICAgeXBvcyA9IE1hdGgucm91bmQoeXBvcyAtIChib3guaGVpZ2h0IC8gMikpXG4gICAgfVxuXG5cbiAgICB0aGlzLnRvb2xUaXBEaXZcbiAgICAgIC5zdHlsZSgnbGVmdCcsIHhwb3MgKyAncHgnKVxuICAgICAgLnN0eWxlKCd0b3AnLCB5cG9zICsgJ3B4JylcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgLmh0bWwodGhpcy5vcHRzLmZvcm1hdC5jYWxsKHRoaXMub3B0cy5jaGFydCwgZGlzcGxheURhdGEuZGF0YSkpIC8vIFVzZWQgZm9ybWF0LmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW4gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy4kdG9vbFRpcERpdiAmJiB0aGlzLiR0b29sVGlwRGl2LnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9