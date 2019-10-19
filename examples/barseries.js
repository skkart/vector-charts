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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);











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
          timeRange: Object(lodash__WEBPACK_IMPORTED_MODULE_9__["map"])(seriesData, 0)
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
            Object(lodash__WEBPACK_IMPORTED_MODULE_9__["each"])(eachPlotSet, function (eachPlot) {
              eachPlot.minVal = Infinity;
              eachPlot.maxVal = -Infinity;
            });

            // Calculate Max and Min for each plots series
            var valData = 0;
            data.forEach(function (d) {
              Object(lodash__WEBPACK_IMPORTED_MODULE_9__["each"])(eachPlotSet, function (eachPlot) {
                valData = d[eachPlot.dataIndex];
                if (valData < eachPlot.minVal) {
                  eachPlot.minVal = valData;
                }
                if (valData > eachPlot.maxVal) {
                  eachPlot.maxVal = valData;
                }
              });
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");












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
    _this.opts.xAxisArr = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["map"])(srData, _this.opts.xAxisTarget);
    Object(lodash__WEBPACK_IMPORTED_MODULE_9__["each"])(_this.opts.barOrderIndex, function (indexVal) {
      self.opts.seriesArr.push(Object(lodash__WEBPACK_IMPORTED_MODULE_9__["map"])(srData, indexVal));
    });

    _this.opts.barStack = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["stack"])().keys(Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["range"])(_this.opts.seriesLength))(Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["transpose"])(_this.opts.seriesArr));

    _this.yMaxGrouped = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["max"])(_this.opts.seriesArr, function (y) {
      return Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["max"])(y);
    });
    _this.yMaxStacked = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["max"])(_this.opts.barStack, function (y) {
      return Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["max"])(y, function (d) {
        return d[1];
      });
    });
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Bar, [{
    key: 'draw',
    value: function draw() {
      var self = this;
      var nameIndexMap = {};
      var eachPlotSet = this.opts.chart.options.plotSet;
      var barVisibleOrder = this.opts.barOrderMembers.filter(function (ele) {
        return eachPlotSet[ele.name].visible || false;
      });
      Object(lodash__WEBPACK_IMPORTED_MODULE_9__["each"])(barVisibleOrder, function (plot, name) {
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
        var srName = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this.parentNode).attr('seriesName');
        return eachPlotSet[srName].colorArr && eachPlotSet[srName].colorArr[i];
      }).attr('y', this.opts.chart.chartHeight).attr('width', this.xScale.bandwidth()).attr('height', 0).on('mousemove', function (d, i) {
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["d3Event"].pageX, _d3Importer__WEBPACK_IMPORTED_MODULE_10__["d3Event"].pageY - 50, {
          data: {
            val: self.opts.barData[i],
            ind: i
          }
        });
      }).on('mouseout', function (d) {
        self.opts.chart.tooltip && self.opts.chart.tooltip.hide();
      });

      Object(lodash__WEBPACK_IMPORTED_MODULE_9__["each"])(this.opts.events, function (fn, name) {
        self.bars.on(name, function () {
          fn.apply(self.opts.chart, arguments);
        });
      });
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
          var xVal = self.xScale(self.opts.xAxisArr[i]) + self.xScale.bandwidth() / self.opts.seriesLength * Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this.parentNode).attr('seriesIndex');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvQmFyU2VyaWVzQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL0Jhci5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9CYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdmMvLi90b29sdGlwL0Jhc2ljVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwiRElSX0xFRlQiLCJheGlzTGVmdCIsIkRJUl9SSUdIVCIsImF4aXNSaWdodCIsImNoYXJ0V2lkdGgiLCJpc0Z1bmN0aW9uIiwiZXh0ZXJuYWxGb3JtYXR0ZXIiLCJ2YWwiLCJzZWxmIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJCYXJTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNCU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiYWRkRGVmYXVsdEJTT3B0aW9ucyIsIm9wdGlvbnMiLCJpc09iamVjdCIsImRhdGFFeGVjdXRvciIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJ0b29sdGlwT3B0cyIsInRvb2x0aXAiLCJUb29sdGlwIiwic2VyaWVzIiwiQmFyU2VyaWVzIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsInJlU2NhbGVZQXhpcyIsImNoYXJ0UmVzcG9uc2l2ZSIsIm1vdXNlSGFuZGxlciIsInRyaWdnZXJNb3VzZUFjdGlvbiIsInRpbWVEaWZmIiwiZ2V0VGltZSIsIm9uQ29tcGxldGUiLCJheGlzU3BlY2lmaWVyIiwidGlja1ZhbEFyciIsImRpZmZWYWwiLCJyYW5nZVZhbCIsInlNYXgiLCJhcHBseVkxQXhpcyIsImFwcGx5WTJBeGlzIiwibW9kaWZ5QXhpc1Byb3BzIiwicmVTY2FsZUF4aXMiLCJyZXF1aXJlZFdpZHRoIiwiY2xhc3MiLCJtYXhUZXh0IiwiZHVtbXlHIiwic3ZnIiwidGlja3NBcnIiLCJzZWxlY3QiLCJlYWNoIiwidGlja0h0bWwiLCJkYXRhIiwiZW50ZXIiLCJTdHJpbmciLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyb3VuZCIsIllfQVhJU19TUEFDRSIsImNoYXJ0RnVsbFNwYWNlIiwid2lkdGgiLCJDaGFydCIsImRhdGFPcHRpb25zIiwiY29uc3RydWN0Q2hhcnREYXRhIiwiY29uc3RydWN0WEF4aXNJbmZvIiwiY29uc3RydWN0UGxvdEluZm8iLCJjb25zdHJ1Y3RZQXhpc0luZm8iLCJlcnIiLCJvbkVycm9yIiwicmVzSnNvbiIsInNlcmllc0RhdGEiLCJiYXJzZXJpZXMiLCJjb2x1bW5zIiwidmFsdWVzIiwidmFsaWRKU09OVHlwZSIsImNoYXJ0RGF0YSIsImRhdGFJbmRleCIsIm1hcCIsImVhY2hQbG90U2V0IiwicGxvdFNldCIsInBsb3RJbmZvIiwia2V5IiwibWluIiwibWF4IiwiZmluZEVhY2hQbG90UmFuZ2UiLCJtaW5WYWwiLCJtYXhWYWwiLCJlYWNoUGxvdCIsIkluZmluaXR5IiwidmFsRGF0YSIsImZvckVhY2giLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdERhdGEiLCJtZW1iZXJBcnIiLCJiYXJPcmRlck1lbWJlcnMiLCJtZW1iZXIiLCJuYW1lIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJ2YWx1ZVJhbmdlIiwiaXNCb29sZWFuIiwiQmFyIiwiYmFyRGF0YSIsInhBeGlzVGFyZ2V0IiwiYmFyVHlwZSIsIkdST1VQRURfQkFSIiwiZXZlbnRzIiwiYmFyT3JkZXJJbmRleCIsImZpbHRlciIsImVsZSIsInNlcmllc0xlbmd0aCIsIngiLCJpbmRleE9mIiwieSIsInhTY2FsZSIsInlTY2FsZSIsInNyRGF0YSIsInNlcmllc0FyciIsInhBeGlzQXJyIiwiaW5kZXhWYWwiLCJiYXJTdGFjayIsInN0YWNrIiwia2V5cyIsInRyYW5zcG9zZSIsInlNYXhHcm91cGVkIiwieU1heFN0YWNrZWQiLCJuYW1lSW5kZXhNYXAiLCJiYXJWaXNpYmxlT3JkZXIiLCJwbG90IiwicHQiLCJjbGlwRWxlbWVudCIsImJhclNlcmllcyIsImJhcnMiLCJzck5hbWUiLCJwYXJlbnROb2RlIiwiY29sb3JBcnIiLCJiYW5kd2lkdGgiLCJvbiIsImhvdmVyIiwiZDNFdmVudCIsInBhZ2VYIiwicGFnZVkiLCJoaWRlIiwiZm4iLCJhcHBseSIsImFyZ3VtZW50cyIsIlNUQUNLRURfQkFSIiwieFZhbCIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiYmFyIiwiU2VyaWVzIiwiQmFzaWNUb29sdGlwIiwiZm9ybWF0IiwidG9vbFRpcERpdiIsImRpc3BsYXlEYXRhIiwiZXhjbHVkZVRvb2xUaXBEaXYiLCJzaG93SGlkZSIsImJveCIsImVsZW1lbnRPZmZzZXQiLCJyb290UG9zIiwieHBvcyIsInlwb3MiLCJ0b3AiLCJoZWlnaHQiLCJodG1sIiwiJHRvb2xUaXBEaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBOztJQUVxQkEsSTs7O0FBQ25CLGdCQUFhQyxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWSwyRUFBYztBQUN4QkMsaUJBQVcsRUFEYTtBQUV4QkMsZ0JBQVUsR0FGYztBQUd4QkMsY0FBUSxNQUhnQjtBQUl4QkMsYUFBTyxFQUppQjtBQUt4QkMsWUFBTSxFQUxrQjtBQU14QkMsa0JBQVksQ0FBQyxDQUFELEVBQUksSUFBSixDQU5ZO0FBT3hCQyxtQkFBYSxDQUFDLENBQUQsRUFBSSxHQUFKLENBUFc7QUFReEJD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QWhDLENBQVA7QUFDRDs7QUFHRCxXQUFLVixVQUFMLENBQ0duTCxLQURILENBQ1MsTUFEVCxFQUNpQjBMLE9BQU8sSUFEeEIsRUFFRzFMLEtBRkgsQ0FFUyxLQUZULEVBRWdCMkwsT0FBTyxJQUZ2QixFQUdHM0wsS0FISCxDQUdTLFNBSFQsRUFHb0IsY0FIcEIsRUFJRzhMLElBSkgsQ0FJUSxLQUFLL1EsSUFBTCxDQUFVbVEsTUFBVixDQUFpQnZMLElBQWpCLENBQXNCLEtBQUs1RSxJQUFMLENBQVVnQyxLQUFoQyxFQUF1Q3FPLFlBQVluSCxJQUFuRCxDQUpSLEVBZjJDLENBbUJ1QjtBQUNuRTs7OzZCQUVTN0QsUSxFQUFVO0FBQ2xCQSxpQkFBVyxDQUFDLENBQUNBLFFBQWI7QUFDQSxXQUFLK0ssVUFBTCxJQUFtQixLQUFLQSxVQUFMLENBQWdCOU0sT0FBaEIsQ0FBd0IsV0FBeEIsRUFBcUMsQ0FBQytCLFFBQXRDLENBQW5CO0FBQ0Q7Ozs2QkFFUztBQUNSLFdBQUsyTCxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBaUIxTCxNQUFqQixFQUFwQjtBQUNBLFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBbkR1Q3VGLDhEOztBQUFyQjJLLDJFIiwiZmlsZSI6ImJhcnNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7XG4gIGF4aXNCb3R0b20sIGF4aXNUb3AsIGF4aXNMZWZ0LCBheGlzUmlnaHQsXG4gIHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIHNjYWxlVGltZVxufSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtlbXB0eUZuLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgdHJ1bmNhdGVUZXh0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICBsYWJlbDogJycsXG4gICAgICB1bml0OiAnJyxcbiAgICAgIHJhbmdlU2NhbGU6IFswLCAxMDAwXSxcbiAgICAgIGRvbWFpblNjYWxlOiBbMCwgMTAwXSxcbiAgICAgIHNjYWxlVHlwZTogJycsXG4gICAgICBheGlzQ2xhbXA6IHRydWUsXG4gICAgICB0aWNrTnVtYmVyOiBudWxsLFxuICAgICAgcm90YXRlVGV4dDogZmFsc2UsXG4gICAgICB0ZXh0TGltaXQ6IDgsXG4gICAgICB0aWNrRm9ybWF0dGVyOiBmYWxzZSwgLy8gVXNlIGQzIHRpY2tGb3JtYXR0ZXJcbiAgICAgIHNob3dHcmlkTGluZXM6IGZhbHNlLFxuICAgICAgdGlja1BhZGRpbmc6IGNvbnN0YW50cy5USUNLX1BBRERJTkcsXG4gICAgICBzY2FsZVBhZGRpbmc6IGNvbnN0YW50cy5TQ0FMRV9QQURESU5HLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgLy8gQ3JlYXRlIEF4aXMgYW5kIFNjYWxlIGJhc2VkIG9uIGlucHV0IG9wdGlvbnNcbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUJhbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgaWYgKHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzQm90dG9tKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1RvcCgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpKVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gSG9sZHMgYWxsIHRpY2sgdmFsdWVzIHRoYXQgYXhpcyBzaG93c1xuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc0xlZnQoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNSaWdodCgpXG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKDApXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSkge1xuICAgICAgICAvLyBJZiBleHRlcm5hbCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIG1vZGlmeSBmb3JtYXR0ZXIgdG8gcG9wdWxhdGUgdGlja1ZhbHVlc1xuICAgICAgICBjb25zdCBleHRlcm5hbEZvcm1hdHRlciA9IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyXG4gICAgICAgIHRoaXMub3B0cy50aWNrRm9ybWF0dGVyID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHNlbGYudGlja1ZhbHVlcy51bnNoaWZ0KHZhbClcbiAgICAgICAgICByZXR1cm4gZXh0ZXJuYWxGb3JtYXR0ZXIodmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy50aWNrUGFkZGluZyA+IDApIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrUGFkZGluZyh0aGlzLm9wdHMudGlja1BhZGRpbmcpXG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5QXhpc1Byb3BzIChvcHRzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0cywgb3B0cylcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBudWxsXG5cbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoMCwke3RoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodH0pYFxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSwwKWBcbiAgICB9XG5cbiAgICB0aGlzLmF4aXNUYWcgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCBgdmMtYXhpcyB2Yy1heGlzLSR7dGhpcy5vcHRzLm9yaWVudH0gdmMtYXhpcy0ke3RoaXMub3B0cy5jbGFzc05hbWV9YClcblxuXG4gICAgLy8gSWYgbm8gZm9ybWF0dGVyIGlzIHByb3ZpZGVkLCBheGlzIHVzZXMgZDMgZGVmYXVsdCBmb3JtYXR0ZXJcbiAgICBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSAmJiB0aGlzLmF4aXMudGlja0Zvcm1hdCh0aGlzLm9wdHMudGlja0Zvcm1hdHRlcilcblxuICAgIC8vIEFkZCBMYWJlbCB0byBBeGlzXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyA9IHRoaXMuYXhpc1RhZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcy1sYWJlbCcpXG4gICAgICAgIC50ZXh0KHRoaXMub3B0cy5sYWJlbClcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICAvLyBJRiBub3QgdmlzaWJsZSwgRG9udCBzaG93IHRoZSBheGlzLCBidXQgc3RpbGwgc2NhbGUgYW5kIHBsb3Qgb24gZ3JhcGhab25lLCBzbyB0aGF0IGFsbCBzZXJpZXMgY2FuIGJlIHBsb3R0ZWRcbiAgICAhdGhpcy5vcHRzLnZpc2libGUgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsIHRydWUpXG4gIH1cblxuICAvLyBVcGRhdGVzIGdyYXBoIEF4aXMgYmFzZWQgb24gbmV3IHdpZHRoIGFuZCBtb2RpZnkgcmFuZ2UsIGRvbWFpbiBhbmQgdGlja3NcbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgIHRoaXMub3B0cy5yYW5nZVNjYWxlID0gWzAsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoXVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuXG4gICAgLy8gUG9zaXRpb24gbGFiZWwsIHNjYWxlLCB0aWNrcywgYXhpcyBiYXNlZCBvbiBjaGFydCB3aWR0aFxuICAgIGlmICh0aGlzLm9wdHMubGFiZWwpIHtcbiAgICAgIGxldCB4VHJhbnMgPSAwXG4gICAgICBsZXQgeVRyYW5zID0gMFxuICAgICAgbGV0IHJvdGF0ZSA9IDBcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB4VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gMilcbiAgICAgICAgeVRyYW5zID0gY29uc3RhbnRzLlhfQVhJU19MQUJFTF9ZXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCB8fCB0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgICAgICB4VHJhbnMgPSAtKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCkgKyBjb25zdGFudHMuQlJVU0hZX0JVRkZFUlxuICAgICAgICAgIHJvdGF0ZSA9IDI3MFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhUcmFucyA9IHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUlxuICAgICAgICAgIHJvdGF0ZSA9IDkwXG4gICAgICAgIH1cbiAgICAgICAgeVRyYW5zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgLyAyKVxuICAgICAgfVxuICAgICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZ1xuICAgICAgICAuYXR0cigndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlKCR7eFRyYW5zfSwke3lUcmFuc30pIHJvdGF0ZSgke3JvdGF0ZX0pYClcbiAgICB9XG5cbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSBbXVxuXG4gICAgbGV0IGRvbWFpblNjYWxlID0gW3RoaXMub3B0cy5kb21haW5TY2FsZVswXSwgdGhpcy5vcHRzLmRvbWFpblNjYWxlW3RoaXMub3B0cy5kb21haW5TY2FsZS5sZW5ndGggLSAxXV1cbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIGRvbWFpblNjYWxlID0gdGhpcy5vcHRzLmRvbWFpblNjYWxlXG4gICAgICB0aGlzLnNjYWxlXG4gICAgICAgIC5wYWRkaW5nKHRoaXMub3B0cy5zY2FsZVBhZGRpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0cy5heGlzQ2xhbXAgJiYgdGhpcy5zY2FsZS5jbGFtcCgpIC8vIENsYW1wcyBvdXRzaWRlIHJhbmdlIHZhbHVlIHdpdGhpbiBzcGVjdGlmZWQgcmFuZ2UgYW5kIGRvbWFpblxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUucmFuZ2UodGhpcy5vcHRzLnJhbmdlU2NhbGUpXG4gICAgICAuZG9tYWluKGRvbWFpblNjYWxlKVxuXG4gICAgdGhpcy5heGlzLnNjYWxlKHRoaXMuc2NhbGUpXG5cbiAgICBpZiAoaXNOdW1iZXIodGhpcy5vcHRzLnRpY2tOdW1iZXIpKSB7XG4gICAgICBsZXQgdGlja1ZhbCA9IHRoaXMub3B0cy50aWNrTnVtYmVyXG4gICAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcgJiYgdGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIC8vIG1vZGlmeSB4dGljayB0byBkaXNwbGF5IGxlc3MgdGlja3Mgb24gbG93ZXIgY2hhcnQgd2lkdGggb3IgaGFzIGxlc3MgZGF5c1xuICAgICAgICBjb25zdCBuZXdUaWNrID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAvIDYwKVxuICAgICAgICBjb25zdCBkYXlMZW5ndGggPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuZG9tYWluU2NhbGVbMV0gLSB0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0pIC8gKDYwICogNjAgKiAyNCAqIDEwMDApKSArIDFcbiAgICAgICAgaWYgKGRheUxlbmd0aCA+IDIgJiYgZGF5TGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBkYXlMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pbnV0ZUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiAxMDAwKSlcbiAgICAgICAgaWYgKG1pbnV0ZUxlbmd0aCA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gbWludXRlTGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VGljayA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gbmV3VGlja1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXhpcy50aWNrcyh0aWNrVmFsKVxuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrcyh0aGlzLm9wdHMudGlja051bWJlcigpKVxuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtQXR0ciAmJiB0aGlzLmF4aXNUYWcuYXR0cigndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm1BdHRyKVxuXG4gICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzICYmIHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3knKSB7XG4gICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICB9XG5cbiAgICB0aGlzLmF4aXNUYWcuY2FsbCh0aGlzLmF4aXMpXG5cblxuICAgIGNvbnN0IGxpbWl0VGV4dCA9IHRoaXMub3B0cy50ZXh0TGltaXRcbiAgICBjb25zdCB0aWNrRm10ID0gaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikgPyB0aGlzLm9wdHMudGlja0Zvcm1hdHRlciA6IGVtcHR5Rm5cblxuICAgIGlmICh0aGlzLm9wdHMucm90YXRlVGV4dCA9PT0gJ3NsYW50Jykge1xuICAgICAgdGhpcy5heGlzVGFnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC5hdHRyKCd5JywgJzgnKVxuICAgICAgICAuYXR0cignZHgnLCAnLTEuMGVtJylcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4xNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTY1KScpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydW5jYXRlVGV4dCh0aWNrRm10KGQpLCBsaW1pdFRleHQpXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMucm90YXRlVGV4dCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5heGlzVGFnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCd4JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoOTApJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydW5jYXRlVGV4dCh0aWNrRm10KGQpLCBsaW1pdFRleHQpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZW1vdmUgQXhpcyBJbnN0YW5jZVxuICByZW1vdmUgKCkge1xuICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgJiYgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZy5yZW1vdmUoKVxuICAgIHRoaXMuYXhpc1RhZyAmJiB0aGlzLmF4aXNUYWcucmVtb3ZlKClcbiAgICB0aGlzLnNjYWxlID0gbnVsbFxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCB7Z2V0T2JqZWN0LCBpc09iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydCBmcm9tICdAL2NoYXJ0cy9DaGFydCdcbmltcG9ydCBBeGlzIGZyb20gJ0AvYXhpcydcbmltcG9ydCB7YWRkRGVmYXVsdEJTT3B0aW9uc30gZnJvbSAnQC9oZWxwZXJzJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAL3Rvb2x0aXAvQmFzaWNUb29sdGlwJ1xuaW1wb3J0IEJhc2ljQlNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyJ1xuaW1wb3J0IEJhclNlcmllcyBmcm9tICdAL3Nlcmllcy9CYXJTZXJpZXMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJTZXJpZXNDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lciwgb3B0cykge1xuICAgIG9wdHMuc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBkYXRhUGFyc2VyIGlzIG5vdCBwYXNzZWRcbiAgICBpZiAoIW9wdHMuZGF0YVBhcnNlcikge1xuICAgICAgb3B0cy5kYXRhUGFyc2VyID0gbmV3IEJhc2ljQlNQYXJzZXIob3B0cylcbiAgICB9XG4gICAgLy8gQ2hlY2sgdGhlIGRhdGFQYXJzZXIgZXhpc3RzIGFuZCBpdHMgaW5zdGFuY2VvZiBDaGFydEF4aXNQYXJzZXJcbiAgICBpZiAoIShvcHRzLmRhdGFQYXJzZXIgaW5zdGFuY2VvZiBDaGFydEF4aXNQYXJzZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRhUGFyc2VyIGluIG9wdGlvbnMgZG9zZW4ndCBoYXZlIGltcGxlbWVudGF0aW9uIG9mIENoYXJ0QXhpc1BhcnNlclwiKVxuICAgIH1cblxuICAgIC8vIENhbGwgUGFyZW50IEltcGxcbiAgICBzdXBlcihjb250YWluZXIsIG9wdHMpXG5cbiAgICAvLyBBZGQgZGVmYXVsdCBvcHRpb25zIHRvIGNoYXJ0XG4gICAgYWRkRGVmYXVsdEJTT3B0aW9ucyh0aGlzLm9wdGlvbnMpXG5cbiAgICAvLyBSdW4gdGhlIGRhdGFQYXJzZXIgZm9yIGdpdmVuIEpTT04gZGF0YVxuICAgIGlmIChpc09iamVjdCh0aGlzLmRhdGFQYXJzZXIpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgdGhpcy5kYXRhUGFyc2VyLmRhdGFFeGVjdXRvcigpKVxuICAgIH1cblxuICAgIC8vIEluaXRpbGl6ZSBhbGwgY2hhcnQgY29tcG9uZW50cyBuZWVkZWQgZm9yIHRpbWVTZXJpZXNDaGFydCBvbiBleGFjdCBvcmRlciBiYXNlZCBvbiBlYWNoIGRlcGVuZGVuY2llc1xuICAgIHRoaXMuY2hhcnRJbml0aWxpemUoKVxuXG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHRoaXMuZHJhdygpKVxuICB9XG5cbiAgY2hhcnRJbml0aWxpemUgKCkge1xuICAgIGxldCBheGlzT3B0aW9uc1xuICAgIGNvbnN0IHlSYW5nZSA9IHRoaXMub3B0aW9ucy55UmFuZ2VcbiAgICBjb25zdCB5UmFuZ2UyID0gdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICBjb25zdCB0aW1lSW5mbyA9IHRoaXMub3B0aW9ucy50aW1lSW5mb1xuXG4gICAgaWYgKHlSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMubGVmdCcpXG4gICAgICB0aGlzLnlBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd5JyxcbiAgICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMpXG4gICAgfVxuXG4gICAgaWYgKHlSYW5nZTIpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLnJpZ2h0JylcbiAgICAgIHRoaXMueUF4aXMyID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd5JyxcbiAgICAgICAgb3JpZW50OiAncmlnaHQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UyLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZSAoY2hhcnQgQVBJKVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzMilcbiAgICB9XG5cbiAgICBpZiAodGltZUluZm8udGltZVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy54QXhpcy5ib3R0b20nKVxuICAgICAgdGhpcy54QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneCcsXG4gICAgICAgIG9yaWVudDogJ2JvdHRvbScsXG4gICAgICAgIHJhbmdlU2NhbGU6IFswLCB0aGlzLmNoYXJ0V2lkdGhdLFxuICAgICAgICBkb21haW5TY2FsZTogdGltZUluZm8udGltZVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy54QXhpcylcbiAgICB9XG5cbiAgICBjb25zdCB0b29sdGlwT3B0cyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy50b29sdGlwJylcbiAgICBpZiAodG9vbHRpcE9wdHMudmlzaWJsZSkge1xuICAgICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgLi4udG9vbHRpcE9wdHNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMudG9vbHRpcClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNlcmllcykge1xuICAgICAgdGhpcy5zZXJpZXMgPSBuZXcgQmFyU2VyaWVzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmVcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5zZXJpZXMpXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc29sZS5sb2coJ0JhclNlcmllc0NoYXJ0IGRyYXcnLCB0aGlzKVxuICAgIHN1cGVyLmRyYXcoKVxuICAgIHRoaXMub3B0aW9ucy5hZnRlckRyYXcuY2FsbCh0aGlzKVxuXG4gICAgLy8gQWRkIEV4dHJhIEJ1ZmZlciBmb3IgbWF4IFkgdmFsdWUgYW5kIHByb3ZpZGUgc3BhY2UgdG8gZGlzcGxheSBhbGwgdGlja3MgaW4gZ3JhcGhab25lXG4gICAgdGhpcy5yZVNjYWxlWUF4aXMoKVxuXG4gICAgdGhpcy5jaGFydFJlc3BvbnNpdmUoKVxuXG4gICAgdGhpcy5tb3VzZUhhbmRsZXIgJiYgdGhpcy5tb3VzZUhhbmRsZXIudHJpZ2dlck1vdXNlQWN0aW9uKClcblxuICAgIHRoaXMudGltZURpZmYgPSAobmV3IERhdGUoKVxuICAgICAgLmdldFRpbWUoKSAtIHRoaXMub3B0aW9ucy5zdGFydFRpbWUuZ2V0VGltZSgpKVxuICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlLmNhbGwodGhpcywgdGhpcy50aW1lRGlmZilcbiAgfVxuXG4gIC8vIEZpbmQgbmV4dCBwb3NzaWJsZSB0aWNrIHRvIGRpc3BsYXkgbWF4IFkgdmFsdWUgYW5kIGFkanVzdCBtYXJnaW4gdG8gc2hvdyBhbGwgdGljayBsYWJlbHMgY29tcGxldGVseVxuICByZVNjYWxlWUF4aXMgKGF4aXNTcGVjaWZpZXIpIHtcblxuICAgIGxldCB0aWNrVmFsQXJyXG4gICAgbGV0IGRpZmZWYWxcbiAgICBsZXQgcmFuZ2VWYWxcbiAgICBsZXQgeU1heFxuICAgIGxldCBhcHBseVkxQXhpcyA9IHRydWVcbiAgICBsZXQgYXBwbHlZMkF4aXMgPSB0cnVlXG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICBhcHBseVkyQXhpcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGF4aXNTcGVjaWZpZXIgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIGFwcGx5WTFBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBNYXggdmFsdWUgaXMgcHJvdmlkZWQgaW4gb3B0aW9ucywgRG9udCBjb21wdXRlIG5leHQgcG9zc2libGUgdGljay5cbiAgICB5TWF4ID0gZ2V0T2JqZWN0KHRoaXMub3B0aW9ucywgJ3lBeGlzLmxlZnQubWF4JylcbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZSAmJiBhcHBseVkxQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpcy50aWNrVmFsdWVzXG4gICAgICAvLyBJZiB0aWNrVmFsQXJyIGNvbnRhaW5zIHZhbHVlc1xuICAgICAgaWYgKHRpY2tWYWxBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBGaW5kIGRpZmZlcmVuY2Ugb2YgbGFzdCBhbmQgbGFzdCBwcmV2aW91cyB0aWNrIHZhbHVlcyBvZiBZIEF4aXNcbiAgICAgICAgZGlmZlZhbCA9IHRpY2tWYWxBcnJbMF0gLSB0aWNrVmFsQXJyWzFdXG4gICAgICAgIC8vIE5ldyByYW5nZSBpcyBpbmNyZWFzZWQgYnkgYWJvdmUgZGlmZmVyZW5jZVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgLy8gTW9kaWZ5IG5ldyBtYXggcmFuZ2UgZm9yIHRoZSBncmFwaFxuICAgICAgICB0aGlzLm9wdGlvbnMueVJhbmdlWzFdID0gcmFuZ2VWYWxcblxuICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgIHRoaXMueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMucmlnaHQubWF4JylcbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIgJiYgYXBwbHlZMkF4aXMgJiYgIU51bWJlci5pc0Zpbml0ZSh5TWF4KSkge1xuICAgICAgdGlja1ZhbEFyciA9IHRoaXMueUF4aXMyLnRpY2tWYWx1ZXNcblxuICAgICAgaWYgKHRpY2tWYWxBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgcmFuZ2VWYWwgPSB0aWNrVmFsQXJyWzBdICsgZGlmZlZhbFxuXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2UyWzFdID0gcmFuZ2VWYWxcblxuICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgIHRoaXMueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRqdXN0cyBZIGF4aXMgd2lkdGggYmFzZWQgb24gbWF4IHRleHQgbGVuZ3RoIGRpc3BsYXllZFxuICAgIGNvbnN0IHJlU2NhbGVBeGlzID0ge31cbiAgICBsZXQgcmVxdWlyZWRXaWR0aCA9IDBcblxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlKSB7XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0uY2xhc3MgPSAnLnZjLWF4aXMtbGVmdCdcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UyKSB7XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXSA9IHt9XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXS5jbGFzcyA9ICcudmMtYXhpcy1yaWdodCdcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLm1heFRleHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgZHVtbXkgc3ZnIHRvIGFkZCBNYXggbGVuZ3RoIHRpY2sgdmFsdWVzIGFuZCBjaGVjayBpdHMgcmVxdWlyZWQgd2lkdGggaW4gY2hhcnRcbiAgICBjb25zdCBkdW1teUcgPSB0aGlzLnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWF4aXMnKVxuXG4gICAgZm9yIChjb25zdCBheGlzIGluIHJlU2NhbGVBeGlzKSB7XG4gICAgICBjb25zdCB0aWNrc0FyciA9IHRoaXMuY29udGFpbmVyLnNlbGVjdCgnc3ZnICcgKyByZVNjYWxlQXhpc1theGlzXS5jbGFzcykuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIHRpY2tzQXJyLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgY29uc3QgdGlja0h0bWwgPSBzZWxlY3QodGhpcykudGV4dCgpIHx8ICcnXG4gICAgICAgIGlmICh0aWNrSHRtbC5sZW5ndGggPiByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQgPSB0aWNrSHRtbFxuICAgICAgICB9XG4gICAgICB9KVxuXG5cbiAgICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgICAuZGF0YShbcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dF0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChTdHJpbmcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gQ29tcHV0ZSByZXF1aXJlZFdpZHRoIGZvciB0aGUgTWF4IHRleHRcbiAgICAgICAgICByZXF1aXJlZFdpZHRoID0gdGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgcmVzcGVjdGl2ZSBtYXJnaW4gdG8gZml0IGluIHRpY2tzIHRleHRcbiAgICAgIHRoaXMubWFyZ2luW2F4aXNdID0gTWF0aC5yb3VuZChyZXF1aXJlZFdpZHRoKSArIGNvbnN0YW50cy5ZX0FYSVNfU1BBQ0VcblxuICAgIH1cbiAgICBkdW1teUcucmVtb3ZlKClcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9ICh0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IHtnZXRPYmplY3QsIHJlZmluZVN0cmluZywgaXNCb29sZWFufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHttYXAsIGVhY2h9IGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNCU1BhcnNlciBleHRlbmRzIENoYXJ0QXhpc1BhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cylcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gIH1cblxuICBkYXRhRXhlY3V0b3IgKCkge1xuICAgIC8vIE9yZGVyIGluIHdoaWNoIHRoZSBEYXRhUHJvY2Vzc29yIEFQSXMgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLmRhdGFPcHRpb25zID0ge31cbiAgICAgIHRoaXMub3B0cy5kYXRhICYmICh0aGlzLmRhdGFPcHRpb25zLmRhdGEgPSB0aGlzLm9wdHMuZGF0YSlcbiAgICAgIHRoaXMub3B0cy5zZXJpZXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMuc2VyaWVzID0gdGhpcy5vcHRzLnNlcmllcylcbiAgICAgIHRoaXMub3B0cy55QXhpcyAmJiAodGhpcy5kYXRhT3B0aW9ucy55QXhpcyA9IHRoaXMub3B0cy55QXhpcylcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdENoYXJ0RGF0YSgpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFhBeGlzSW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFBsb3RJbmZvKCkpXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgIHJldHVybiB0aGlzLmRhdGFPcHRpb25zXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbmNvdW50ZXJlZCB3aGlsZSBiYXJzZXJpZXMgSlNPTiBwYXJzaW5nIDonLCBlcnIpXG4gICAgICB0aGlzLm9wdHMub25FcnJvcihlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiByZWNlaXZlZCAtIEVycm9yIG9uIGJhcnNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi5iYXJzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgY29uc3QgZGF0YSA9IHNlcmllc0RhdGEudmFsdWVzXG4gICAgY29uc3QgdmFsaWRKU09OVHlwZSA9IChjb2x1bW5zLmxlbmd0aCAmJiBkYXRhLmxlbmd0aClcblxuICAgIGlmICghdmFsaWRKU09OVHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEJhciBzZXJpZXMgSlNPTiByZWNlaXZlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IG1hcChzZXJpZXNEYXRhLCAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFlBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBkYXRhT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBjb25zdCBkYXRhID0gZGF0YU9wdGlvbnMuY2hhcnREYXRhXG4gICAgY29uc3QgeUF4aXMgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0JylcbiAgICBjb25zdCB5QXhpczIgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodCcpXG4gICAgbGV0IGtleVxuICAgIGxldCB5UmFuZ2UgPSBudWxsXG4gICAgbGV0IHlSYW5nZTIgPSBudWxsXG5cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpcy5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpcy5tYXgpKSB7XG4gICAgICAgIHlSYW5nZSA9IFt5QXhpcy5taW4sIHlBeGlzLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeUF4aXMyKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWF4KSkge1xuICAgICAgICB5UmFuZ2UyID0gW3lBeGlzMi5taW4sIHlBeGlzMi5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgeVJhbmdlIGlzIG5vdCBzZXQgZnJvbSBncmFwaE9wdGlvbnMsIHRoZW4gZ28gaW5zaWRlXG4gICAgaWYgKCF5UmFuZ2UgfHwgIXlSYW5nZTIpIHtcbiAgICAgIGxldCBmaW5kRWFjaFBsb3RSYW5nZSA9IGZhbHNlXG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1pblZhbCkgfHwgIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1heFZhbCkpIHtcbiAgICAgICAgICBmaW5kRWFjaFBsb3RSYW5nZSA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5kRWFjaFBsb3RSYW5nZSkge1xuXG4gICAgICAgIC8vIFJlc2V0IHJhbmdlIGZvciBlYWNoIHBsb3QgZm9yIGZpbmRpbmcgbWluICwgbWF4XG4gICAgICAgIGVhY2goZWFjaFBsb3RTZXQsIGZ1bmN0aW9uIChlYWNoUGxvdCkge1xuICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IEluZmluaXR5XG4gICAgICAgICAgZWFjaFBsb3QubWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIGxldCB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBlYWNoKGVhY2hQbG90U2V0LCBmdW5jdGlvbiAoZWFjaFBsb3QpIHtcbiAgICAgICAgICAgIHZhbERhdGEgPSBkW2VhY2hQbG90LmRhdGFJbmRleF1cbiAgICAgICAgICAgIGlmICh2YWxEYXRhIDwgZWFjaFBsb3QubWluVmFsKSB7XG4gICAgICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxEYXRhID4gZWFjaFBsb3QubWF4VmFsKSB7XG4gICAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2JhcicpIHtcbiAgICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgICBhbGxNYXggPSBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ubWF4VmFsID4gYWxsTWF4Mikge1xuICAgICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXMgJiYgZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbikge1xuICAgICAgICAgIGFsbE1pbiA9IGVhY2hQbG90U2V0W2tleV0ubWluVmFsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXMgJiYgZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4yKSB7XG4gICAgICAgICAgYWxsTWluMiA9IGVhY2hQbG90U2V0W2tleV0ubWluVmFsXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBsZXQgeU1pbiwgeU1heFxuICAgICAgLy8gSWYgWWF4aXMgcmFuZ2UgaXMgYWxyZWFkeSBkZWZpbmVkIGluIG9wdGlvbnMsIE92ZXJyaWRlIGl0LlxuICAgICAgaWYgKFthbGxNaW4sIGFsbE1heF0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdC5taW4nKVxuICAgICAgICB5TWluID0gTnVtYmVyLmlzRmluaXRlKHlNaW4pID8geU1pbiA6IGFsbE1pblxuICAgICAgICB5TWF4ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heFxuICAgICAgICBpZiAoIXlNYXgpIHtcbiAgICAgICAgICB5TWF4ID0geU1pbiArIDgwIC8vIFNldCBhcyBkZWZhdWx0IDEwMCBpZiByYW5nZSBpcyBbMCwwXVxuICAgICAgICB9XG4gICAgICAgIHlSYW5nZSA9IFt5TWluLCB5TWF4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHlBeGlzKSB7XG4gICAgICAgICAgeVJhbmdlID0gWzAsIDgwXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlSYW5nZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBpZiAoW2FsbE1pbjIsIGFsbE1heDJdLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKGEpICYmIE51bWJlci5pc0Zpbml0ZShiKVxuICAgICAgfSkpIHtcbiAgICAgICAgeU1pbiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluMlxuICAgICAgICB5TWF4ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWF4JylcbiAgICAgICAgeU1heCA9IE51bWJlci5pc0Zpbml0ZSh5TWF4KSA/IHlNYXggOiBhbGxNYXgyXG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlMiA9IFt5TWluLCB5TWF4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHlBeGlzMikge1xuICAgICAgICAgIHlSYW5nZTIgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlMiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB5UmFuZ2U6IHlSYW5nZSxcbiAgICAgIHlSYW5nZTI6IHlSYW5nZTJcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RQbG90SW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi5iYXJzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCBkYXRhQ29sb3JBcnIgPSBzZXJpZXNEYXRhLmNvbG9yIHx8IFtdXG4gICAgY29uc3QgeUxlZnQgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0JylcbiAgICBjb25zdCB5UmlnaHQgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodCcpXG5cbiAgICAvLyBHZW5lcmF0ZSBlYWNoUGxvdFNldCB1c2luZyBjb2x1bW5zXG4gICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAvLyBDb252ZXJ0IHRoZSBTZXJpZXMgTmFtZSB0byBKUyBzdWl0YWJsZSBvYmplY3QgbWFwcGVkIG5hbWUgZXg6IGFiYyglKSAxIC0tPiBhYmMxXG4gICAgICBjb25zdCByZWZpbmVOYW1lID0gcmVmaW5lU3RyaW5nKGQpXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXSA9IHtcbiAgICAgICAgbmFtZTogZCxcbiAgICAgICAgZGF0YUluZGV4OiBpbmQsXG4gICAgICAgIG1pblZhbDogSW5maW5pdHksXG4gICAgICAgIG1heFZhbDogLUluZmluaXR5LFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjogZGF0YUNvbG9yQXJyW2luZF0gfHwgJyMwMDAnXG4gICAgICB9XG4gICAgICBpbmQrK1xuICAgIH0pXG5cblxuICAgIGZvciAoa2V5IGluIHBsb3RJbmZvKSB7XG4gICAgICBpZiAoa2V5ID09PSAnYmFyJykge1xuICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuYmFyT3JkZXJNZW1iZXJzXG4gICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZSA9IFtJbmZpbml0eSwgLUluZmluaXR5XVxuICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgIG1lbWJlci5uYW1lID0gcmVmaW5lU3RyaW5nKG1lbWJlci5uYW1lKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBtZW1iZXIuY29sb3IgLy8gQXBwbHkgY29sb3IgZm9yIGVhY2ggUGxvdCBzZXJpZXMgb3IgcGljayBmcm9tIGRhdGEgY29sb3IgQXJyXG4gICAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IGBDb2xvciBub3QgcHJlc2VudCBmb3Igc2VyaWVzICR7cGxvdERhdGEubmFtZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLmNvbG9yID0gY29sb3IpXG4gICAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IG1lbWJlci5wbG90QXhpcyB8fCBbJ2xlZnQnLCAnYm90dG9tJ11cbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpcyA9IHBsb3RBeGlzXG4gICAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgICBpc0Jvb2xlYW4obWVtYmVyLnZpc2libGUpICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSA9IG1lbWJlci52aXNpYmxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcmllczogcGxvdEluZm8sIC8vIG5ld2x5IHVwZGF0ZWQgc2VyaWVzIGZyb20gdXNlciBvcHRpb25zIGhhdmluZyBhZGRpdGlvbmFsIGluZm8gb2YgZWFjaCBzZXJpZXNcbiAgICAgIHBsb3RTZXQ6IGVhY2hQbG90U2V0LCAvLyBJbmZvIG9mIGVhY2ggcGxvdCBsaWtlIGNvbG9yLCBtYXgsIG1pbiBldGNcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2dldE9iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7ZWFjaCwgbWFwfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQge3N0YWNrLCByYW5nZSwgdHJhbnNwb3NlLCBtYXgsIHNlbGVjdCwgZDNFdmVudH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIGJhckRhdGE6IG51bGwsXG4gICAgICB4QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIGJhclR5cGU6IGNvbnN0YW50cy5HUk9VUEVEX0JBUixcbiAgICAgIGJhck9yZGVyTWVtYmVyczoge30sXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgZXZlbnRzOiB7fVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgdGhpcy5vcHRzLmJhck9yZGVySW5kZXggPSB0aGlzLm9wdHMuYmFyT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2VcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG4gICAgdGhpcy5vcHRzLnNlcmllc0xlbmd0aCA9IHRoaXMub3B0cy5iYXJPcmRlckluZGV4Lmxlbmd0aFxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMueFNjYWxlID0geFxuICAgIHRoaXMueVNjYWxlID0geVxuXG4gICAgY29uc3Qgc3JEYXRhID0gdGhpcy5vcHRzLmJhckRhdGFcbiAgICB0aGlzLm9wdHMuc2VyaWVzQXJyID0gW11cbiAgICB0aGlzLm9wdHMueEF4aXNBcnIgPSBtYXAoc3JEYXRhLCB0aGlzLm9wdHMueEF4aXNUYXJnZXQpXG4gICAgZWFjaCh0aGlzLm9wdHMuYmFyT3JkZXJJbmRleCwgZnVuY3Rpb24gKGluZGV4VmFsKSB7XG4gICAgICBzZWxmLm9wdHMuc2VyaWVzQXJyLnB1c2gobWFwKHNyRGF0YSwgaW5kZXhWYWwpKVxuICAgIH0pXG5cbiAgICB0aGlzLm9wdHMuYmFyU3RhY2sgPSBzdGFjaygpLmtleXMocmFuZ2UodGhpcy5vcHRzLnNlcmllc0xlbmd0aCkpKHRyYW5zcG9zZSh0aGlzLm9wdHMuc2VyaWVzQXJyKSlcblxuICAgIHRoaXMueU1heEdyb3VwZWQgPSBtYXgodGhpcy5vcHRzLnNlcmllc0FyciwgZnVuY3Rpb24gKHkpIHtcbiAgICAgIHJldHVybiBtYXgoeSlcbiAgICB9KVxuICAgIHRoaXMueU1heFN0YWNrZWQgPSBtYXgodGhpcy5vcHRzLmJhclN0YWNrLCBmdW5jdGlvbiAoeSkge1xuICAgICAgcmV0dXJuIG1heCh5LCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFsxXVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBuYW1lSW5kZXhNYXAgPSB7fVxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IGJhclZpc2libGVPcmRlciA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICBlYWNoKGJhclZpc2libGVPcmRlciwgZnVuY3Rpb24gKHBsb3QsIG5hbWUpIHtcbiAgICAgIGNvbnN0IHB0ID0gZWFjaFBsb3RTZXRbcGxvdC5uYW1lXVxuICAgICAgbmFtZUluZGV4TWFwW3B0LmRhdGFJbmRleCAtIDFdID0gcGxvdC5uYW1lXG4gICAgfSlcblxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcbiAgICB0aGlzLmJhclNlcmllcyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtYmFyLXNlcmllcycpXG4gICAgICAuZGF0YSh0aGlzLm9wdHMuYmFyU3RhY2spXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBFbGVtZW50LmF0dHIoJ2lkJykgKyAnKScpIC8vIGRpc3BsYXkgZ3JhcGhab25lIG9mIHNhbWUgc2l6ZSBhcyBjbGlwLXBhdGggZGVmaW5lZFxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJhci1zZXJpZXMnKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbbmFtZUluZGV4TWFwW2ldXS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzZXJpZXNOYW1lJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVJbmRleE1hcFtpXVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzZXJpZXNJbmRleCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBpXG4gICAgICB9KVxuXG5cbiAgICB0aGlzLmJhcnMgPSB0aGlzLmJhclNlcmllcy5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRcbiAgICAgIH0pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5vcHRzLnhBeGlzQXJyW2ldKVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgY29uc3Qgc3JOYW1lID0gc2VsZWN0KHRoaXMucGFyZW50Tm9kZSkuYXR0cignc2VyaWVzTmFtZScpXG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtzck5hbWVdLmNvbG9yQXJyICYmIGVhY2hQbG90U2V0W3NyTmFtZV0uY29sb3JBcnJbaV1cbiAgICAgIH0pXG4gICAgICAuYXR0cigneScsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHNlbGYub3B0cy5jaGFydC50b29sdGlwICYmIHNlbGYub3B0cy5jaGFydC50b29sdGlwLmhvdmVyKGQzRXZlbnQucGFnZVgsIGQzRXZlbnQucGFnZVkgLSA1MCwge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHZhbDogc2VsZi5vcHRzLmJhckRhdGFbaV0sXG4gICAgICAgICAgICBpbmQ6IGlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHNlbGYub3B0cy5jaGFydC50b29sdGlwICYmIHNlbGYub3B0cy5jaGFydC50b29sdGlwLmhpZGUoKVxuICAgICAgfSlcblxuXG4gICAgZWFjaCh0aGlzLm9wdHMuZXZlbnRzLCBmdW5jdGlvbiAoZm4sIG5hbWUpIHtcbiAgICAgIHNlbGYuYmFycy5vbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZuLmFwcGx5KHNlbGYub3B0cy5jaGFydCwgYXJndW1lbnRzKVxuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cblxuICAvLyBVcGRhdGUgaGFwcGVucyB3aGVuIHRoZSBjaGFydCBpcyByZXNpemVkXG4gIHVwZGF0ZSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBpZiAodGhpcy5vcHRzLmJhclR5cGUgPT09IGNvbnN0YW50cy5TVEFDS0VEX0JBUikge1xuICAgICAgdGhpcy5iYXJzXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGRbMF0pIC0gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhcnNcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGNvbnN0IHhWYWwgPSBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pICsgc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLm9wdHMuc2VyaWVzTGVuZ3RoICogc2VsZWN0KHRoaXMucGFyZW50Tm9kZSkuYXR0cignc2VyaWVzSW5kZXgnKVxuICAgICAgICAgIHJldHVybiB4VmFsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5vcHRzLnNlcmllc0xlbmd0aClcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkWzFdIC0gZFswXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKDApIC0gc2VsZi55U2NhbGUoZFsxXSAtIGRbMF0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5iYXJTZXJpZXMuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlZHJhdyBpcyBjYWxsZWQgd2hlbiBzZXJpZXMgaXMgdG9nZ2xlZCBmcm9tIExlZ2VuZHNcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgYmFyT3JkZXIgYXJyIGJhc2VkIG9uIHZpc2libGVTZXJpZXNcbiAgICB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleCA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgYmFyIHNlcmllc1xuICAgIHRoaXMuYmFyU2VyaWVzICYmIHRoaXMuYmFyU2VyaWVzLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBiYXJPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmJhclNlcmllcyAmJiB0aGlzLmJhclNlcmllcy5yZW1vdmUoKVxuICAgIHRoaXMuYmFycyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufSIsImltcG9ydCB7aXNBcnJheX0gZnJvbSAnQC91dGlscydcbmltcG9ydCBCYXIgZnJvbSAnQC9zZXJpZXMvQmFyJ1xuaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhclNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGEgLy8gQWNjZXB0IGVpdGhlciB0aW1lc2VyaWVzIG9yIHBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzXG5cbiAgICAvLyBDcmVhdGUgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIGlucHV0IG9wdGlvbnMgYW5kIGVhY2ggcGxvdCBpbmZvXG4gICAgaXNBcnJheShwbG90SW5mby5iYXIpICYmIHBsb3RJbmZvLmJhci5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IEJhcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgYmFyT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnMsXG4gICAgICAgIGJhckRhdGE6IGRhdGFcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7ZWxlbWVudE9mZnNldCwgaXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNUb29sdGlwIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgLy8gUHJvdmlkZSBiYXNpYyBmb3JtYXR0ZXIgdG8gZGlzcGxheSBob3ZlciBkYXRhXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMub3B0cy5mb3JtYXQpKSB7XG4gICAgICB0aGlzLm9wdHMuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4gVG9vbFRpcCBUZXh0IDogPC9zcGFuPjxici8+PHNwYW4+JHtKU09OLnN0cmluZ2lmeShkKX08L3NwYW4+YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudG9vbFRpcERpdiA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXJcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1kaXNwbGF5ICcgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICB9XG5cbiAgaG92ZXIgKHgsIHksIGRpc3BsYXlEYXRhLCBleGNsdWRlVG9vbFRpcERpdikge1xuICAgIHRoaXMuc2hvd0hpZGUodHJ1ZSlcbiAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IHNlcmllcyAtLSBiYXIgLyBwaWVcbiAgICBjb25zdCBib3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMudG9vbFRpcERpdilcbiAgICBjb25zdCByb290UG9zID0gZWxlbWVudE9mZnNldCh0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyKVxuICAgIGxldCB4cG9zID0gTWF0aC5yb3VuZCh4IC0gcm9vdFBvcy5sZWZ0KVxuICAgIGxldCB5cG9zID0gTWF0aC5yb3VuZCh5IC0gcm9vdFBvcy50b3ApXG5cbiAgICBpZiAoIWV4Y2x1ZGVUb29sVGlwRGl2KSB7XG4gICAgICAvLyBDb25zaWRlciB0b29sVGlwIG9mZnNldCBmb3IgcG9zaXRpb25cbiAgICAgIHhwb3MgPSBNYXRoLnJvdW5kKHhwb3MgLSAoYm94LndpZHRoIC8gMikpXG4gICAgICB5cG9zID0gTWF0aC5yb3VuZCh5cG9zIC0gKGJveC5oZWlnaHQgLyAyKSlcbiAgICB9XG5cblxuICAgIHRoaXMudG9vbFRpcERpdlxuICAgICAgLnN0eWxlKCdsZWZ0JywgeHBvcyArICdweCcpXG4gICAgICAuc3R5bGUoJ3RvcCcsIHlwb3MgKyAncHgnKVxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG4gICAgICAuaHRtbCh0aGlzLm9wdHMuZm9ybWF0LmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBkaXNwbGF5RGF0YS5kYXRhKSkgLy8gVXNlZCBmb3JtYXQuY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1biBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMudG9vbFRpcERpdiAmJiB0aGlzLnRvb2xUaXBEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=