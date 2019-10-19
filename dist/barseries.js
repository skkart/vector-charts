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
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(_d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Event"].pageX, _d3Importer__WEBPACK_IMPORTED_MODULE_9__["d3Event"].pageY - 50, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvQmFyU2VyaWVzQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL0Jhci5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9CYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdmMvLi90b29sdGlwL0Jhc2ljVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwiRElSX0xFRlQiLCJheGlzTGVmdCIsIkRJUl9SSUdIVCIsImF4aXNSaWdodCIsImNoYXJ0V2lkdGgiLCJpc0Z1bmN0aW9uIiwiZXh0ZXJuYWxGb3JtYXR0ZXIiLCJ2YWwiLCJzZWxmIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJCYXJTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNCU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiYWRkRGVmYXVsdEJTT3B0aW9ucyIsIm9wdGlvbnMiLCJpc09iamVjdCIsImRhdGFFeGVjdXRvciIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJ0b29sdGlwT3B0cyIsInRvb2x0aXAiLCJUb29sdGlwIiwic2VyaWVzIiwiQmFyU2VyaWVzIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsInJlU2NhbGVZQXhpcyIsImNoYXJ0UmVzcG9uc2l2ZSIsIm1vdXNlSGFuZGxlciIsInRyaWdnZXJNb3VzZUFjdGlvbiIsInRpbWVEaWZmIiwiZ2V0VGltZSIsIm9uQ29tcGxldGUiLCJheGlzU3BlY2lmaWVyIiwidGlja1ZhbEFyciIsImRpZmZWYWwiLCJyYW5nZVZhbCIsInlNYXgiLCJhcHBseVkxQXhpcyIsImFwcGx5WTJBeGlzIiwibW9kaWZ5QXhpc1Byb3BzIiwicmVTY2FsZUF4aXMiLCJyZXF1aXJlZFdpZHRoIiwiY2xhc3MiLCJtYXhUZXh0IiwiZHVtbXlHIiwic3ZnIiwidGlja3NBcnIiLCJzZWxlY3QiLCJlYWNoIiwidGlja0h0bWwiLCJkYXRhIiwiZW50ZXIiLCJTdHJpbmciLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyb3VuZCIsIllfQVhJU19TUEFDRSIsImNoYXJ0RnVsbFNwYWNlIiwid2lkdGgiLCJDaGFydCIsImRhdGFPcHRpb25zIiwiY29uc3RydWN0Q2hhcnREYXRhIiwiY29uc3RydWN0WEF4aXNJbmZvIiwiY29uc3RydWN0UGxvdEluZm8iLCJjb25zdHJ1Y3RZQXhpc0luZm8iLCJlcnIiLCJvbkVycm9yIiwicmVzSnNvbiIsInNlcmllc0RhdGEiLCJiYXJzZXJpZXMiLCJjb2x1bW5zIiwidmFsdWVzIiwidmFsaWRKU09OVHlwZSIsImNoYXJ0RGF0YSIsImRhdGFJbmRleCIsIm1hcCIsImR0IiwiZWFjaFBsb3RTZXQiLCJwbG90U2V0IiwicGxvdEluZm8iLCJrZXkiLCJtaW4iLCJtYXgiLCJmaW5kRWFjaFBsb3RSYW5nZSIsIm1pblZhbCIsIm1heFZhbCIsInBsb3QiLCJlYWNoUGxvdCIsIkluZmluaXR5IiwidmFsRGF0YSIsImZvckVhY2giLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdERhdGEiLCJtZW1iZXJBcnIiLCJiYXJPcmRlck1lbWJlcnMiLCJtZW1iZXIiLCJuYW1lIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJ2YWx1ZVJhbmdlIiwiaXNCb29sZWFuIiwiQmFyIiwiYmFyRGF0YSIsInhBeGlzVGFyZ2V0IiwiYmFyVHlwZSIsIkdST1VQRURfQkFSIiwiZXZlbnRzIiwiYmFyT3JkZXJJbmRleCIsImZpbHRlciIsImVsZSIsInNlcmllc0xlbmd0aCIsIngiLCJpbmRleE9mIiwieSIsInhTY2FsZSIsInlTY2FsZSIsInNyRGF0YSIsInNlcmllc0FyciIsInhBeGlzQXJyIiwic0RhdGEiLCJpbmRleFZhbCIsImJySW5kIiwiZWFjaFNlcmllc0RhdGEiLCJiYXJTdGFjayIsInN0YWNrIiwia2V5cyIsInRyYW5zcG9zZSIsInlNYXhHcm91cGVkIiwieU1heFN0YWNrZWQiLCJuYW1lSW5kZXhNYXAiLCJiYXJWaXNpYmxlT3JkZXIiLCJwdCIsImNsaXBFbGVtZW50IiwiYmFyU2VyaWVzIiwiYmFycyIsInNyTmFtZSIsInBhcmVudE5vZGUiLCJjb2xvckFyciIsImJhbmR3aWR0aCIsIm9uIiwiaG92ZXIiLCJkM0V2ZW50IiwicGFnZVgiLCJwYWdlWSIsImhpZGUiLCJmbiIsImFwcGx5IiwiYXJndW1lbnRzIiwiU1RBQ0tFRF9CQVIiLCJ4VmFsIiwicGxvdFNlcmllcyIsImlzQXJyYXkiLCJiYXIiLCJTZXJpZXMiLCJCYXNpY1Rvb2x0aXAiLCJmb3JtYXQiLCJ0b29sVGlwRGl2IiwiZGlzcGxheURhdGEiLCJleGNsdWRlVG9vbFRpcERpdiIsInNob3dIaWRlIiwiYm94IiwiZWxlbWVudE9mZnNldCIsInJvb3RQb3MiLCJ4cG9zIiwieXBvcyIsInRvcCIsImhlaWdodCIsImh0bWwiLCIkdG9vbFRpcERpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQWFDLElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0EsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCQyxpQkFBVyxFQURhO0FBRXhCQyxnQkFBVSxHQUZjO0FBR3hCQyxjQUFRLE1BSGdCO0FBSXhCQyxhQUFPLEVBSmlCO0FBS3hCQyxZQUFNLEVBTGtCO0FBTXhCQyxrQkFBWSxDQUFDLENBQUQsRUFBSSxJQUFKLENBTlk7QUFPeEJD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QUFvQixLQUFLQSxXQUFMLENBQWlCOUwsTUFBakIsRUFBcEI7QUFDQSxXQUFLdEYsSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQW5EdUN1Riw4RDs7QUFBckIrSywyRSIsImZpbGUiOiJiYXJzZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge1xuICBheGlzQm90dG9tLCBheGlzVG9wLCBheGlzTGVmdCwgYXhpc1JpZ2h0LFxuICBzY2FsZUJhbmQsIHNjYWxlTGluZWFyLCBzY2FsZVRpbWVcbn0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7ZW1wdHlGbiwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIHRydW5jYXRlVGV4dH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcG9zaXRpb246ICd5JyxcbiAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgdW5pdDogJycsXG4gICAgICByYW5nZVNjYWxlOiBbMCwgMTAwMF0sXG4gICAgICBkb21haW5TY2FsZTogWzAsIDEwMF0sXG4gICAgICBzY2FsZVR5cGU6ICcnLFxuICAgICAgYXhpc0NsYW1wOiB0cnVlLFxuICAgICAgdGlja051bWJlcjogbnVsbCxcbiAgICAgIHJvdGF0ZVRleHQ6IGZhbHNlLFxuICAgICAgdGV4dExpbWl0OiA4LFxuICAgICAgdGlja0Zvcm1hdHRlcjogZmFsc2UsIC8vIFVzZSBkMyB0aWNrRm9ybWF0dGVyXG4gICAgICBzaG93R3JpZExpbmVzOiBmYWxzZSxcbiAgICAgIHRpY2tQYWRkaW5nOiBjb25zdGFudHMuVElDS19QQURESU5HLFxuICAgICAgc2NhbGVQYWRkaW5nOiBjb25zdGFudHMuU0NBTEVfUEFERElORyxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIC8vIENyZWF0ZSBBeGlzIGFuZCBTY2FsZSBiYXNlZCBvbiBpbnB1dCBvcHRpb25zXG4gICAgaWYgKHRoaXMub3B0cy5zY2FsZVR5cGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVCYW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAgIGlmICh0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlVGltZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3gnKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc0JvdHRvbSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfVE9QKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNUb3AoKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KSlcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIEhvbGRzIGFsbCB0aWNrIHZhbHVlcyB0aGF0IGF4aXMgc2hvd3NcbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSBbXVxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3knKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNMZWZ0KClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzUmlnaHQoKVxuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigwKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikpIHtcbiAgICAgICAgLy8gSWYgZXh0ZXJuYWwgZm9ybWF0dGVyIGlzIHByb3ZpZGVkLCBtb2RpZnkgZm9ybWF0dGVyIHRvIHBvcHVsYXRlIHRpY2tWYWx1ZXNcbiAgICAgICAgY29uc3QgZXh0ZXJuYWxGb3JtYXR0ZXIgPSB0aGlzLm9wdHMudGlja0Zvcm1hdHRlclxuICAgICAgICB0aGlzLm9wdHMudGlja0Zvcm1hdHRlciA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBzZWxmLnRpY2tWYWx1ZXMudW5zaGlmdCh2YWwpXG4gICAgICAgICAgcmV0dXJuIGV4dGVybmFsRm9ybWF0dGVyKHZhbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMudGlja1BhZGRpbmcgPiAwKSB7XG4gICAgICB0aGlzLmF4aXMudGlja1BhZGRpbmcodGhpcy5vcHRzLnRpY2tQYWRkaW5nKVxuICAgIH1cbiAgfVxuXG4gIG1vZGlmeUF4aXNQcm9wcyAob3B0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdHMsIG9wdHMpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gbnVsbFxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKDAsJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHR9KWBcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgYHZjLWF4aXMgdmMtYXhpcy0ke3RoaXMub3B0cy5vcmllbnR9IHZjLWF4aXMtJHt0aGlzLm9wdHMuY2xhc3NOYW1lfWApXG5cblxuICAgIC8vIElmIG5vIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgYXhpcyB1c2VzIGQzIGRlZmF1bHQgZm9ybWF0dGVyXG4gICAgaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikgJiYgdGhpcy5heGlzLnRpY2tGb3JtYXQodGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpXG5cbiAgICAvLyBBZGQgTGFiZWwgdG8gQXhpc1xuICAgIGlmICh0aGlzLm9wdHMubGFiZWwpIHtcbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgPSB0aGlzLmF4aXNUYWcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWF4aXMtbGFiZWwnKVxuICAgICAgICAudGV4dCh0aGlzLm9wdHMubGFiZWwpXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgLy8gSUYgbm90IHZpc2libGUsIERvbnQgc2hvdyB0aGUgYXhpcywgYnV0IHN0aWxsIHNjYWxlIGFuZCBwbG90IG9uIGdyYXBoWm9uZSwgc28gdGhhdCBhbGwgc2VyaWVzIGNhbiBiZSBwbG90dGVkXG4gICAgIXRoaXMub3B0cy52aXNpYmxlICYmIHRoaXMuYXhpc1RhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCB0cnVlKVxuICB9XG5cbiAgLy8gVXBkYXRlcyBncmFwaCBBeGlzIGJhc2VkIG9uIG5ldyB3aWR0aCBhbmQgbW9kaWZ5IHJhbmdlLCBkb21haW4gYW5kIHRpY2tzXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLm9wdHMucmFuZ2VTY2FsZSA9IFswLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aF1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSwwKWBcbiAgICB9XG5cblxuICAgIC8vIFBvc2l0aW9uIGxhYmVsLCBzY2FsZSwgdGlja3MsIGF4aXMgYmFzZWQgb24gY2hhcnQgd2lkdGhcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICBsZXQgeFRyYW5zID0gMFxuICAgICAgbGV0IHlUcmFucyA9IDBcbiAgICAgIGxldCByb3RhdGUgPSAwXG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgICAgeFRyYW5zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAvIDIpXG4gICAgICAgIHlUcmFucyA9IGNvbnN0YW50cy5YX0FYSVNfTEFCRUxfWVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQgfHwgdGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgICAgeFRyYW5zID0gLSh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpICsgY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSAyNzBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4VHJhbnMgPSB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnJpZ2h0IC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSA5MFxuICAgICAgICB9XG4gICAgICAgIHlUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWdcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsXG4gICAgICAgICAgYHRyYW5zbGF0ZSgke3hUcmFuc30sJHt5VHJhbnN9KSByb3RhdGUoJHtyb3RhdGV9KWApXG4gICAgfVxuXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cblxuICAgIGxldCBkb21haW5TY2FsZSA9IFt0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0sIHRoaXMub3B0cy5kb21haW5TY2FsZVt0aGlzLm9wdHMuZG9tYWluU2NhbGUubGVuZ3RoIC0gMV1dXG4gICAgaWYgKHRoaXMub3B0cy5zY2FsZVR5cGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICBkb21haW5TY2FsZSA9IHRoaXMub3B0cy5kb21haW5TY2FsZVxuICAgICAgdGhpcy5zY2FsZVxuICAgICAgICAucGFkZGluZyh0aGlzLm9wdHMuc2NhbGVQYWRkaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0NsYW1wICYmIHRoaXMuc2NhbGUuY2xhbXAoKSAvLyBDbGFtcHMgb3V0c2lkZSByYW5nZSB2YWx1ZSB3aXRoaW4gc3BlY3RpZmVkIHJhbmdlIGFuZCBkb21haW5cbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlLnJhbmdlKHRoaXMub3B0cy5yYW5nZVNjYWxlKVxuICAgICAgLmRvbWFpbihkb21haW5TY2FsZSlcblxuICAgIHRoaXMuYXhpcy5zY2FsZSh0aGlzLnNjYWxlKVxuXG4gICAgaWYgKGlzTnVtYmVyKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgbGV0IHRpY2tWYWwgPSB0aGlzLm9wdHMudGlja051bWJlclxuICAgICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3gnICYmIHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICAvLyBtb2RpZnkgeHRpY2sgdG8gZGlzcGxheSBsZXNzIHRpY2tzIG9uIGxvd2VyIGNoYXJ0IHdpZHRoIG9yIGhhcyBsZXNzIGRheXNcbiAgICAgICAgY29uc3QgbmV3VGljayA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyA2MClcbiAgICAgICAgY29uc3QgZGF5TGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDYwICogMjQgKiAxMDAwKSkgKyAxXG4gICAgICAgIGlmIChkYXlMZW5ndGggPiAyICYmIGRheUxlbmd0aCA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gZGF5TGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW51dGVMZW5ndGggPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuZG9tYWluU2NhbGVbMV0gLSB0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0pIC8gKDYwICogMTAwMCkpXG4gICAgICAgIGlmIChtaW51dGVMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG1pbnV0ZUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1RpY2sgPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG5ld1RpY2tcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmF4aXMudGlja3ModGlja1ZhbClcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tOdW1iZXIpKSB7XG4gICAgICB0aGlzLmF4aXMudGlja3ModGhpcy5vcHRzLnRpY2tOdW1iZXIoKSlcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybUF0dHIgJiYgdGhpcy5heGlzVGFnLmF0dHIoJ3RyYW5zZm9ybScsIHRoaXMudHJhbnNmb3JtQXR0cilcblxuICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyAmJiB0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkpXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnLmNhbGwodGhpcy5heGlzKVxuXG5cbiAgICBjb25zdCBsaW1pdFRleHQgPSB0aGlzLm9wdHMudGV4dExpbWl0XG4gICAgY29uc3QgdGlja0ZtdCA9IGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpID8gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgOiBlbXB0eUZuXG5cbiAgICBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICdzbGFudCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAuYXR0cigneScsICc4JylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0xLjBlbScpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMTVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC02NSknKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cigneCcsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKDkwKScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYXhpc1RhZyAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgJiYgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVtb3ZlIEF4aXMgSW5zdGFuY2VcbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcucmVtb3ZlKClcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5zY2FsZSA9IG51bGxcbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQge2dldE9iamVjdCwgaXNPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgQ2hhcnQgZnJvbSAnQC9jaGFydHMvQ2hhcnQnXG5pbXBvcnQgQXhpcyBmcm9tICdAL2F4aXMnXG5pbXBvcnQge2FkZERlZmF1bHRCU09wdGlvbnN9IGZyb20gJ0AvaGVscGVycydcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQC90b29sdGlwL0Jhc2ljVG9vbHRpcCdcbmltcG9ydCBCYXNpY0JTUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQmFzaWNCU1BhcnNlcidcbmltcG9ydCBCYXJTZXJpZXMgZnJvbSAnQC9zZXJpZXMvQmFyU2VyaWVzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY0JTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydEF4aXNQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRCU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcbiAgICBsZXQgYXhpc09wdGlvbnNcbiAgICBjb25zdCB5UmFuZ2UgPSB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgY29uc3QgeVJhbmdlMiA9IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgY29uc3QgdGltZUluZm8gPSB0aGlzLm9wdGlvbnMudGltZUluZm9cblxuICAgIGlmICh5UmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLmxlZnQnKVxuICAgICAgdGhpcy55QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzKVxuICAgIH1cblxuICAgIGlmICh5UmFuZ2UyKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5yaWdodCcpXG4gICAgICB0aGlzLnlBeGlzMiA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ3JpZ2h0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlMixcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmUgKGNoYXJ0IEFQSSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpczIpXG4gICAgfVxuXG4gICAgaWYgKHRpbWVJbmZvLnRpbWVSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueEF4aXMuYm90dG9tJylcbiAgICAgIHRoaXMueEF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3gnLFxuICAgICAgICBvcmllbnQ6ICdib3R0b20nLFxuICAgICAgICByYW5nZVNjYWxlOiBbMCwgdGhpcy5jaGFydFdpZHRoXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHRpbWVJbmZvLnRpbWVSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueEF4aXMpXG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcE9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMudG9vbHRpcCcpXG4gICAgaWYgKHRvb2x0aXBPcHRzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIC4uLnRvb2x0aXBPcHRzXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnRvb2x0aXApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zZXJpZXMpIHtcbiAgICAgIHRoaXMuc2VyaWVzID0gbmV3IEJhclNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdCYXJTZXJpZXNDaGFydCBkcmF3JywgdGhpcylcbiAgICBzdXBlci5kcmF3KClcbiAgICB0aGlzLm9wdGlvbnMuYWZ0ZXJEcmF3LmNhbGwodGhpcylcblxuICAgIC8vIEFkZCBFeHRyYSBCdWZmZXIgZm9yIG1heCBZIHZhbHVlIGFuZCBwcm92aWRlIHNwYWNlIHRvIGRpc3BsYXkgYWxsIHRpY2tzIGluIGdyYXBoWm9uZVxuICAgIHRoaXMucmVTY2FsZVlBeGlzKClcblxuICAgIHRoaXMuY2hhcnRSZXNwb25zaXZlKClcblxuICAgIHRoaXMubW91c2VIYW5kbGVyICYmIHRoaXMubW91c2VIYW5kbGVyLnRyaWdnZXJNb3VzZUFjdGlvbigpXG5cbiAgICB0aGlzLnRpbWVEaWZmID0gKG5ldyBEYXRlKClcbiAgICAgIC5nZXRUaW1lKCkgLSB0aGlzLm9wdGlvbnMuc3RhcnRUaW1lLmdldFRpbWUoKSlcbiAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZS5jYWxsKHRoaXMsIHRoaXMudGltZURpZmYpXG4gIH1cblxuICAvLyBGaW5kIG5leHQgcG9zc2libGUgdGljayB0byBkaXNwbGF5IG1heCBZIHZhbHVlIGFuZCBhZGp1c3QgbWFyZ2luIHRvIHNob3cgYWxsIHRpY2sgbGFiZWxzIGNvbXBsZXRlbHlcbiAgcmVTY2FsZVlBeGlzIChheGlzU3BlY2lmaWVyKSB7XG5cbiAgICBsZXQgdGlja1ZhbEFyclxuICAgIGxldCBkaWZmVmFsXG4gICAgbGV0IHJhbmdlVmFsXG4gICAgbGV0IHlNYXhcbiAgICBsZXQgYXBwbHlZMUF4aXMgPSB0cnVlXG4gICAgbGV0IGFwcGx5WTJBeGlzID0gdHJ1ZVxuXG4gICAgaWYgKGF4aXNTcGVjaWZpZXIgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgYXBwbHlZMkF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICBhcHBseVkxQXhpcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgTWF4IHZhbHVlIGlzIHByb3ZpZGVkIGluIG9wdGlvbnMsIERvbnQgY29tcHV0ZSBuZXh0IHBvc3NpYmxlIHRpY2suXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UgJiYgYXBwbHlZMUF4aXMgJiYgIU51bWJlci5pc0Zpbml0ZSh5TWF4KSkge1xuICAgICAgdGlja1ZhbEFyciA9IHRoaXMueUF4aXMudGlja1ZhbHVlc1xuICAgICAgLy8gSWYgdGlja1ZhbEFyciBjb250YWlucyB2YWx1ZXNcbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gRmluZCBkaWZmZXJlbmNlIG9mIGxhc3QgYW5kIGxhc3QgcHJldmlvdXMgdGljayB2YWx1ZXMgb2YgWSBBeGlzXG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICAvLyBOZXcgcmFuZ2UgaXMgaW5jcmVhc2VkIGJ5IGFib3ZlIGRpZmZlcmVuY2VcbiAgICAgICAgcmFuZ2VWYWwgPSB0aWNrVmFsQXJyWzBdICsgZGlmZlZhbFxuXG4gICAgICAgIC8vIE1vZGlmeSBuZXcgbWF4IHJhbmdlIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZVsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IHRoaXMub3B0aW9ucy55UmFuZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB5TWF4ID0gZ2V0T2JqZWN0KHRoaXMub3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UyICYmIGFwcGx5WTJBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzMi50aWNrVmFsdWVzXG5cbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZGlmZlZhbCA9IHRpY2tWYWxBcnJbMF0gLSB0aWNrVmFsQXJyWzFdXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICB0aGlzLm9wdGlvbnMueVJhbmdlMlsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzMi5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkanVzdHMgWSBheGlzIHdpZHRoIGJhc2VkIG9uIG1heCB0ZXh0IGxlbmd0aCBkaXNwbGF5ZWRcbiAgICBjb25zdCByZVNjYWxlQXhpcyA9IHt9XG4gICAgbGV0IHJlcXVpcmVkV2lkdGggPSAwXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZSkge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXSA9IHt9XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLmNsYXNzID0gJy52Yy1heGlzLWxlZnQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLm1heFRleHQgPSAnJ1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMikge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0uY2xhc3MgPSAnLnZjLWF4aXMtcmlnaHQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGR1bW15IHN2ZyB0byBhZGQgTWF4IGxlbmd0aCB0aWNrIHZhbHVlcyBhbmQgY2hlY2sgaXRzIHJlcXVpcmVkIHdpZHRoIGluIGNoYXJ0XG4gICAgY29uc3QgZHVtbXlHID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzJylcblxuICAgIGZvciAoY29uc3QgYXhpcyBpbiByZVNjYWxlQXhpcykge1xuICAgICAgY29uc3QgdGlja3NBcnIgPSB0aGlzLmNvbnRhaW5lci5zZWxlY3QoJ3N2ZyAnICsgcmVTY2FsZUF4aXNbYXhpc10uY2xhc3MpLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICB0aWNrc0Fyci5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGNvbnN0IHRpY2tIdG1sID0gc2VsZWN0KHRoaXMpLnRleHQoKSB8fCAnJ1xuICAgICAgICBpZiAodGlja0h0bWwubGVuZ3RoID4gcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0ID0gdGlja0h0bWxcbiAgICAgICAgfVxuICAgICAgfSlcblxuXG4gICAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgICAgLmRhdGEoW3JlU2NhbGVBeGlzW2F4aXNdLm1heFRleHRdKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLnRleHQoU3RyaW5nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIC8vIENvbXB1dGUgcmVxdWlyZWRXaWR0aCBmb3IgdGhlIE1heCB0ZXh0XG4gICAgICAgICAgcmVxdWlyZWRXaWR0aCA9IHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKClcbiAgICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIHJlc3BlY3RpdmUgbWFyZ2luIHRvIGZpdCBpbiB0aWNrcyB0ZXh0XG4gICAgICB0aGlzLm1hcmdpbltheGlzXSA9IE1hdGgucm91bmQocmVxdWlyZWRXaWR0aCkgKyBjb25zdGFudHMuWV9BWElTX1NQQUNFXG5cbiAgICB9XG4gICAgZHVtbXlHLnJlbW92ZSgpXG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSAodGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCB7Z2V0T2JqZWN0LCByZWZpbmVTdHJpbmcsIGlzQm9vbGVhbn0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNCU1BhcnNlciBleHRlbmRzIENoYXJ0QXhpc1BhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cylcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gIH1cblxuICBkYXRhRXhlY3V0b3IgKCkge1xuICAgIC8vIE9yZGVyIGluIHdoaWNoIHRoZSBEYXRhUHJvY2Vzc29yIEFQSXMgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLmRhdGFPcHRpb25zID0ge31cbiAgICAgIHRoaXMub3B0cy5kYXRhICYmICh0aGlzLmRhdGFPcHRpb25zLmRhdGEgPSB0aGlzLm9wdHMuZGF0YSlcbiAgICAgIHRoaXMub3B0cy5zZXJpZXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMuc2VyaWVzID0gdGhpcy5vcHRzLnNlcmllcylcbiAgICAgIHRoaXMub3B0cy55QXhpcyAmJiAodGhpcy5kYXRhT3B0aW9ucy55QXhpcyA9IHRoaXMub3B0cy55QXhpcylcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdENoYXJ0RGF0YSgpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFhBeGlzSW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFBsb3RJbmZvKCkpXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgIHJldHVybiB0aGlzLmRhdGFPcHRpb25zXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbmNvdW50ZXJlZCB3aGlsZSBiYXJzZXJpZXMgSlNPTiBwYXJzaW5nIDonLCBlcnIpXG4gICAgICB0aGlzLm9wdHMub25FcnJvcihlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiByZWNlaXZlZCAtIEVycm9yIG9uIGJhcnNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi5iYXJzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgY29uc3QgZGF0YSA9IHNlcmllc0RhdGEudmFsdWVzXG4gICAgY29uc3QgdmFsaWRKU09OVHlwZSA9IChjb2x1bW5zLmxlbmd0aCAmJiBkYXRhLmxlbmd0aClcblxuICAgIGlmICghdmFsaWRKU09OVHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEJhciBzZXJpZXMgSlNPTiByZWNlaXZlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IHNlcmllc0RhdGEubWFwKChkdCkgPT4gZHRbMF0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQga2V5XG4gICAgbGV0IHlSYW5nZSA9IG51bGxcbiAgICBsZXQgeVJhbmdlMiA9IG51bGxcblxuXG4gICAgaWYgKHlBeGlzKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzLm1pbikgJiYgTnVtYmVyLmlzRmluaXRlKHlBeGlzLm1heCkpIHtcbiAgICAgICAgeVJhbmdlID0gW3lBeGlzLm1pbiwgeUF4aXMubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh5QXhpczIpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1pbikgJiYgTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5tYXgpKSB7XG4gICAgICAgIHlSYW5nZTIgPSBbeUF4aXMyLm1pbiwgeUF4aXMyLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB5UmFuZ2UgaXMgbm90IHNldCBmcm9tIGdyYXBoT3B0aW9ucywgdGhlbiBnbyBpbnNpZGVcbiAgICBpZiAoIXlSYW5nZSB8fCAheVJhbmdlMikge1xuICAgICAgbGV0IGZpbmRFYWNoUGxvdFJhbmdlID0gZmFsc2VcbiAgICAgIGZvciAoa2V5IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGVhY2hQbG90U2V0W2tleV0ubWluVmFsKSB8fCAhTnVtYmVyLmlzRmluaXRlKGVhY2hQbG90U2V0W2tleV0ubWF4VmFsKSkge1xuICAgICAgICAgIGZpbmRFYWNoUGxvdFJhbmdlID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmRFYWNoUGxvdFJhbmdlKSB7XG5cbiAgICAgICAgLy8gUmVzZXQgcmFuZ2UgZm9yIGVhY2ggcGxvdCBmb3IgZmluZGluZyBtaW4gLCBtYXhcbiAgICAgICAgZm9yIChjb25zdCBwbG90IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgICAgY29uc3QgZWFjaFBsb3QgPSBlYWNoUGxvdFNldFtwbG90XVxuICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IEluZmluaXR5XG4gICAgICAgICAgZWFjaFBsb3QubWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIGxldCB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHBsb3QgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVhY2hQbG90ID0gZWFjaFBsb3RTZXRbcGxvdF1cbiAgICAgICAgICAgIHZhbERhdGEgPSBkW2VhY2hQbG90LmRhdGFJbmRleF1cbiAgICAgICAgICAgIGlmICh2YWxEYXRhIDwgZWFjaFBsb3QubWluVmFsKSB7XG4gICAgICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxEYXRhID4gZWFjaFBsb3QubWF4VmFsKSB7XG4gICAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgTWF4IHZhbHVlIHJlcXVpcmVkIHRvIHBsb3Qgb24gZ3JhcGggYmFzZWQgb24gdmlzaWJsZSBwbG90IGZ1bmN0aW9uIC4gaS5lIGxpbmUgb3Igc3RhY2tcbiAgICAgIGxldCBhbGxNYXggPSAtSW5maW5pdHlcbiAgICAgIGxldCBhbGxNYXgyID0gLUluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgICBpZiAoa2V5ID09PSAnYmFyJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLmJhck9yZGVyTWVtYmVyc1xuICAgICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbCA+IGFsbE1heCkge1xuICAgICAgICAgICAgICAgIGFsbE1heCA9IGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgICAgYWxsTWF4MiA9IGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIC8vIEZpbmQgbWluIHZhbHVlIGp1c3QgYnkgY2hlY2tpbmcgbWluIHZhbHVlIGFtb25nIGFsbCBzZXJpZXMgZGF0YVxuICAgICAgbGV0IGFsbE1pbiA9IEluZmluaXR5XG4gICAgICBsZXQgYWxsTWluMiA9IEluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpcyAmJiBlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgZWFjaFBsb3RTZXRba2V5XS52aXNpYmxlICYmIGVhY2hQbG90U2V0W2tleV0ubWluVmFsIDwgYWxsTWluKSB7XG4gICAgICAgICAgYWxsTWluID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpcyAmJiBlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLmJhcnNlcmllc1xuICAgIGNvbnN0IGNvbHVtbnMgPSBzZXJpZXNEYXRhLmNvbHVtbnNcbiAgICBsZXQgaW5kID0gMFxuICAgIC8vIE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBwbG90IGZ1bmN0aW9ucyBuZWVkZWQgZm9yIHRoZSBjaGFydFxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0ge31cbiAgICAvLyBTZXQgb2YgcnVsZXMgdGhhdCBjaGFydHMgbmVlZHMgdG8gYmUgZHJhdyBvbiB0aW1lU2VyaWVzQ2hhcnRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGxldCBrZXlcblxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIC8vIENvbnZlcnQgdGhlIFNlcmllcyBOYW1lIHRvIEpTIHN1aXRhYmxlIG9iamVjdCBtYXBwZWQgbmFtZSBleDogYWJjKCUpIDEgLS0+IGFiYzFcbiAgICAgIGNvbnN0IHJlZmluZU5hbWUgPSByZWZpbmVTdHJpbmcoZClcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdID0ge1xuICAgICAgICBuYW1lOiBkLFxuICAgICAgICBkYXRhSW5kZXg6IGluZCxcbiAgICAgICAgbWluVmFsOiBJbmZpbml0eSxcbiAgICAgICAgbWF4VmFsOiAtSW5maW5pdHksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiBkYXRhQ29sb3JBcnJbaW5kXSB8fCAnIzAwMCdcbiAgICAgIH1cbiAgICAgIGluZCsrXG4gICAgfSlcblxuXG4gICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtzdGFjaywgcmFuZ2UsIHRyYW5zcG9zZSwgbWF4LCBzZWxlY3QsIGQzRXZlbnR9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBsb3RBeGlzOiBbY29uc3RhbnRzLkRJUl9MRUZULCBjb25zdGFudHMuRElSX0JPVFRPTV0sXG4gICAgICBiYXJEYXRhOiBudWxsLFxuICAgICAgeEF4aXNUYXJnZXQ6IG51bGwsXG4gICAgICBiYXJUeXBlOiBjb25zdGFudHMuR1JPVVBFRF9CQVIsXG4gICAgICBiYXJPcmRlck1lbWJlcnM6IHt9LFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGV2ZW50czoge31cbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIHRoaXMub3B0cy5iYXJPcmRlckluZGV4ID0gdGhpcy5vcHRzLmJhck9yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIHRoaXMub3B0cy5zZXJpZXNMZW5ndGggPSB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleC5sZW5ndGhcbiAgICAvLyBGaW5kIHggYW5kIHkgYXhpcyBiYXNlZCBvbiBwbG90QXhpc1xuICAgIGxldCB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9UT1ApID4gLTEpIHtcbiAgICAgIHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICBsZXQgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfUklHSFQpID4gLTEpIHtcbiAgICAgIHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICB0aGlzLnhTY2FsZSA9IHhcbiAgICB0aGlzLnlTY2FsZSA9IHlcblxuICAgIGNvbnN0IHNyRGF0YSA9IHRoaXMub3B0cy5iYXJEYXRhXG4gICAgdGhpcy5vcHRzLnNlcmllc0FyciA9IFtdXG4gICAgdGhpcy5vcHRzLnhBeGlzQXJyID0gW11cbiAgICBzckRhdGEuZm9yRWFjaCgoc0RhdGEsIGluZCkgPT4ge1xuICAgICAgdGhpcy5vcHRzLnhBeGlzQXJyLnB1c2goc0RhdGFbdGhpcy5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgIHRoaXMub3B0cy5iYXJPcmRlckluZGV4LmZvckVhY2goZnVuY3Rpb24gKGluZGV4VmFsLCBickluZCkge1xuICAgICAgICBpZiAoIXNlbGYub3B0cy5zZXJpZXNBcnJbYnJJbmRdKSB7XG4gICAgICAgICAgc2VsZi5vcHRzLnNlcmllc0FycltickluZF0gPSBbXVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVhY2hTZXJpZXNEYXRhID0gc2VsZi5vcHRzLnNlcmllc0FycltickluZF1cbiAgICAgICAgZWFjaFNlcmllc0RhdGEucHVzaChzRGF0YVtpbmRleFZhbF0pXG4gICAgICB9KVxuICAgIH0pXG4gICAgLy8gdGhpcy5vcHRzLmJhck9yZGVySW5kZXguZm9yRWFjaChmdW5jdGlvbiAoaW5kZXhWYWwpIHtcbiAgICAvLyAgIHNlbGYub3B0cy5zZXJpZXNBcnIucHVzaChtYXAoc3JEYXRhLCBpbmRleFZhbCkpXG4gICAgLy8gfSlcblxuICAgIHRoaXMub3B0cy5iYXJTdGFjayA9IHN0YWNrKCkua2V5cyhyYW5nZSh0aGlzLm9wdHMuc2VyaWVzTGVuZ3RoKSkodHJhbnNwb3NlKHRoaXMub3B0cy5zZXJpZXNBcnIpKVxuXG4gICAgdGhpcy55TWF4R3JvdXBlZCA9IG1heCh0aGlzLm9wdHMuc2VyaWVzQXJyLCBmdW5jdGlvbiAoeSkge1xuICAgICAgcmV0dXJuIG1heCh5KVxuICAgIH0pXG4gICAgdGhpcy55TWF4U3RhY2tlZCA9IG1heCh0aGlzLm9wdHMuYmFyU3RhY2ssIGZ1bmN0aW9uICh5KSB7XG4gICAgICByZXR1cm4gbWF4KHksIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkWzFdXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IG5hbWVJbmRleE1hcCA9IHt9XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgYmFyVmlzaWJsZU9yZGVyID0gdGhpcy5vcHRzLmJhck9yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuICAgIGJhclZpc2libGVPcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChwbG90LCBuYW1lKSB7XG4gICAgICBjb25zdCBwdCA9IGVhY2hQbG90U2V0W3Bsb3QubmFtZV1cbiAgICAgIG5hbWVJbmRleE1hcFtwdC5kYXRhSW5kZXggLSAxXSA9IHBsb3QubmFtZVxuICAgIH0pXG5cblxuICAgIGNvbnN0IGNsaXBFbGVtZW50ID0gdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lci5zZWxlY3QoJ3N2ZyBjbGlwUGF0aCcpXG4gICAgdGhpcy5iYXJTZXJpZXMgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLnNlbGVjdEFsbCgnLnZjLWJhci1zZXJpZXMnKVxuICAgICAgLmRhdGEodGhpcy5vcHRzLmJhclN0YWNrKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1iYXItc2VyaWVzJylcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W25hbWVJbmRleE1hcFtpXV0uY29sb3JcbiAgICAgIH0pXG4gICAgICAuYXR0cignc2VyaWVzTmFtZScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBuYW1lSW5kZXhNYXBbaV1cbiAgICAgIH0pXG4gICAgICAuYXR0cignc2VyaWVzSW5kZXgnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gaVxuICAgICAgfSlcblxuXG4gICAgdGhpcy5iYXJzID0gdGhpcy5iYXJTZXJpZXMuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgIC5kYXRhKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkXG4gICAgICB9KVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYub3B0cy54QXhpc0FycltpXSlcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGNvbnN0IHNyTmFtZSA9IHNlbGVjdCh0aGlzLnBhcmVudE5vZGUpLmF0dHIoJ3Nlcmllc05hbWUnKVxuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbc3JOYW1lXS5jb2xvckFyciAmJiBlYWNoUGxvdFNldFtzck5hbWVdLmNvbG9yQXJyW2ldXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3knLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLnhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5ob3ZlcihkM0V2ZW50LnBhZ2VYLCBkM0V2ZW50LnBhZ2VZIC0gNTAsIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2YWw6IHNlbGYub3B0cy5iYXJEYXRhW2ldLFxuICAgICAgICAgICAgaW5kOiBpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5oaWRlKClcbiAgICAgIH0pXG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5vcHRzLmV2ZW50cykge1xuICAgICAgY29uc3QgZm4gPSB0aGlzLm9wdHMuZXZlbnRzW25hbWVdXG4gICAgICBzZWxmLmJhcnMub24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbi5hcHBseShzZWxmLm9wdHMuY2hhcnQsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuICAvLyBVcGRhdGUgaGFwcGVucyB3aGVuIHRoZSBjaGFydCBpcyByZXNpemVkXG4gIHVwZGF0ZSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBpZiAodGhpcy5vcHRzLmJhclR5cGUgPT09IGNvbnN0YW50cy5TVEFDS0VEX0JBUikge1xuICAgICAgdGhpcy5iYXJzXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGRbMF0pIC0gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhcnNcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGNvbnN0IHhWYWwgPSBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pICsgc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLm9wdHMuc2VyaWVzTGVuZ3RoICogc2VsZWN0KHRoaXMucGFyZW50Tm9kZSkuYXR0cignc2VyaWVzSW5kZXgnKVxuICAgICAgICAgIHJldHVybiB4VmFsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5vcHRzLnNlcmllc0xlbmd0aClcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkWzFdIC0gZFswXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKDApIC0gc2VsZi55U2NhbGUoZFsxXSAtIGRbMF0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5iYXJTZXJpZXMuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlZHJhdyBpcyBjYWxsZWQgd2hlbiBzZXJpZXMgaXMgdG9nZ2xlZCBmcm9tIExlZ2VuZHNcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgYmFyT3JkZXIgYXJyIGJhc2VkIG9uIHZpc2libGVTZXJpZXNcbiAgICB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleCA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgYmFyIHNlcmllc1xuICAgIHRoaXMuYmFyU2VyaWVzICYmIHRoaXMuYmFyU2VyaWVzLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBiYXJPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmJhclNlcmllcyAmJiB0aGlzLmJhclNlcmllcy5yZW1vdmUoKVxuICAgIHRoaXMuYmFycyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufSIsImltcG9ydCB7aXNBcnJheX0gZnJvbSAnQC91dGlscydcbmltcG9ydCBCYXIgZnJvbSAnQC9zZXJpZXMvQmFyJ1xuaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhclNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGEgLy8gQWNjZXB0IGVpdGhlciB0aW1lc2VyaWVzIG9yIHBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzXG5cbiAgICAvLyBDcmVhdGUgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIGlucHV0IG9wdGlvbnMgYW5kIGVhY2ggcGxvdCBpbmZvXG4gICAgaXNBcnJheShwbG90SW5mby5iYXIpICYmIHBsb3RJbmZvLmJhci5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IEJhcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgYmFyT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnMsXG4gICAgICAgIGJhckRhdGE6IGRhdGFcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7ZWxlbWVudE9mZnNldCwgaXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNUb29sdGlwIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgLy8gUHJvdmlkZSBiYXNpYyBmb3JtYXR0ZXIgdG8gZGlzcGxheSBob3ZlciBkYXRhXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMub3B0cy5mb3JtYXQpKSB7XG4gICAgICB0aGlzLm9wdHMuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4gVG9vbFRpcCBUZXh0IDogPC9zcGFuPjxici8+PHNwYW4+JHtKU09OLnN0cmluZ2lmeShkKX08L3NwYW4+YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudG9vbFRpcERpdiA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXJcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1kaXNwbGF5ICcgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICB9XG5cbiAgaG92ZXIgKHgsIHksIGRpc3BsYXlEYXRhLCBleGNsdWRlVG9vbFRpcERpdikge1xuICAgIHRoaXMuc2hvd0hpZGUodHJ1ZSlcbiAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IHNlcmllcyAtLSBiYXIgLyBwaWVcbiAgICBjb25zdCBib3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMudG9vbFRpcERpdilcbiAgICBjb25zdCByb290UG9zID0gZWxlbWVudE9mZnNldCh0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyKVxuICAgIGxldCB4cG9zID0gTWF0aC5yb3VuZCh4IC0gcm9vdFBvcy5sZWZ0KVxuICAgIGxldCB5cG9zID0gTWF0aC5yb3VuZCh5IC0gcm9vdFBvcy50b3ApXG5cbiAgICBpZiAoIWV4Y2x1ZGVUb29sVGlwRGl2KSB7XG4gICAgICAvLyBDb25zaWRlciB0b29sVGlwIG9mZnNldCBmb3IgcG9zaXRpb25cbiAgICAgIHhwb3MgPSBNYXRoLnJvdW5kKHhwb3MgLSAoYm94LndpZHRoIC8gMikpXG4gICAgICB5cG9zID0gTWF0aC5yb3VuZCh5cG9zIC0gKGJveC5oZWlnaHQgLyAyKSlcbiAgICB9XG5cblxuICAgIHRoaXMudG9vbFRpcERpdlxuICAgICAgLnN0eWxlKCdsZWZ0JywgeHBvcyArICdweCcpXG4gICAgICAuc3R5bGUoJ3RvcCcsIHlwb3MgKyAncHgnKVxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG4gICAgICAuaHRtbCh0aGlzLm9wdHMuZm9ybWF0LmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBkaXNwbGF5RGF0YS5kYXRhKSkgLy8gVXNlZCBmb3JtYXQuY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1biBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMudG9vbFRpcERpdiAmJiB0aGlzLnRvb2xUaXBEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=