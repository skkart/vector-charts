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
        var valData;

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
            valData = 0;

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

      var clipElement = this.opts.chart.$container.find('svg clipPath');
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
      this.$toolTipDiv = $('<div></div>').addClass('vc-tooltip-display ' + this.opts.className);
      this.opts.chart.$container.append(this.$toolTipDiv);
    }
  }, {
    key: 'hover',
    value: function hover(x, y, displayData, excludeToolTipDiv) {
      // This will be called by series -- bar / pie
      var rootPos = this.opts.chart.$container.offset();
      var xpos = Math.round(x - rootPos.left);
      var ypos = Math.round(y - rootPos.top);

      if (!excludeToolTipDiv) {
        // Consider toolTip offset for position
        xpos = Math.round(xpos - this.$toolTipDiv.width() / 2);
        ypos = Math.round(ypos - this.$toolTipDiv.height() / 2);
      }

      this.$toolTipDiv.css({
        left: xpos + 'px',
        top: ypos + 'px',
        display: 'inline-block'
      }).html(this.opts.format.call(this.opts.chart, displayData.data)); // Used format.call(), so that external fun can have access of chart Instance
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvQmFyU2VyaWVzQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL0Jhci5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9CYXJTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdmMvLi90b29sdGlwL0Jhc2ljVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwiRElSX0xFRlQiLCJheGlzTGVmdCIsIkRJUl9SSUdIVCIsImF4aXNSaWdodCIsImNoYXJ0V2lkdGgiLCJpc0Z1bmN0aW9uIiwiZXh0ZXJuYWxGb3JtYXR0ZXIiLCJ2YWwiLCJzZWxmIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJCYXJTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNCU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiYWRkRGVmYXVsdEJTT3B0aW9ucyIsIm9wdGlvbnMiLCJpc09iamVjdCIsImRhdGFFeGVjdXRvciIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJ0b29sdGlwT3B0cyIsInRvb2x0aXAiLCJUb29sdGlwIiwic2VyaWVzIiwiQmFyU2VyaWVzIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsInJlU2NhbGVZQXhpcyIsImNoYXJ0UmVzcG9uc2l2ZSIsIm1vdXNlSGFuZGxlciIsInRyaWdnZXJNb3VzZUFjdGlvbiIsInRpbWVEaWZmIiwiZ2V0VGltZSIsIm9uQ29tcGxldGUiLCJheGlzU3BlY2lmaWVyIiwidGlja1ZhbEFyciIsImRpZmZWYWwiLCJyYW5nZVZhbCIsInlNYXgiLCJhcHBseVkxQXhpcyIsImFwcGx5WTJBeGlzIiwibW9kaWZ5QXhpc1Byb3BzIiwicmVTY2FsZUF4aXMiLCJyZXF1aXJlZFdpZHRoIiwiY2xhc3MiLCJtYXhUZXh0IiwiZHVtbXlHIiwic3ZnIiwidGlja3NBcnIiLCIkY29udGFpbmVyIiwiZmluZCIsImVhY2giLCJ0aWNrSHRtbCIsIiQiLCJkYXRhIiwiZW50ZXIiLCJTdHJpbmciLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyb3VuZCIsIllfQVhJU19TUEFDRSIsImNoYXJ0RnVsbFNwYWNlIiwid2lkdGgiLCJDaGFydCIsImRhdGFPcHRpb25zIiwiY29uc3RydWN0Q2hhcnREYXRhIiwiY29uc3RydWN0WEF4aXNJbmZvIiwiY29uc3RydWN0UGxvdEluZm8iLCJjb25zdHJ1Y3RZQXhpc0luZm8iLCJlcnIiLCJvbkVycm9yIiwicmVzSnNvbiIsInNlcmllc0RhdGEiLCJiYXJzZXJpZXMiLCJjb2x1bW5zIiwidmFsdWVzIiwidmFsaWRKU09OVHlwZSIsImNoYXJ0RGF0YSIsImRhdGFJbmRleCIsIm1hcCIsImVhY2hQbG90U2V0IiwicGxvdFNldCIsInBsb3RJbmZvIiwia2V5IiwibWluIiwibWF4IiwidmFsRGF0YSIsImZpbmRFYWNoUGxvdFJhbmdlIiwibWluVmFsIiwibWF4VmFsIiwiZWFjaFBsb3QiLCJJbmZpbml0eSIsImZvckVhY2giLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdERhdGEiLCJtZW1iZXJBcnIiLCJiYXJPcmRlck1lbWJlcnMiLCJtZW1iZXIiLCJuYW1lIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJ2YWx1ZVJhbmdlIiwiaXNCb29sZWFuIiwiQmFyIiwiYmFyRGF0YSIsInhBeGlzVGFyZ2V0IiwiYmFyVHlwZSIsIkdST1VQRURfQkFSIiwiZXZlbnRzIiwiYmFyT3JkZXJJbmRleCIsImZpbHRlciIsImVsZSIsInNlcmllc0xlbmd0aCIsIngiLCJpbmRleE9mIiwieSIsInhTY2FsZSIsInlTY2FsZSIsInNyRGF0YSIsInNlcmllc0FyciIsInhBeGlzQXJyIiwiaW5kZXhWYWwiLCJiYXJTdGFjayIsInN0YWNrIiwia2V5cyIsInRyYW5zcG9zZSIsInlNYXhHcm91cGVkIiwieU1heFN0YWNrZWQiLCJuYW1lSW5kZXhNYXAiLCJiYXJWaXNpYmxlT3JkZXIiLCJwbG90IiwicHQiLCJjbGlwRWxlbWVudCIsImJhclNlcmllcyIsImJhcnMiLCJzck5hbWUiLCJzZWxlY3QiLCJwYXJlbnROb2RlIiwiY29sb3JBcnIiLCJiYW5kd2lkdGgiLCJvbiIsImhvdmVyIiwiZDNFdmVudCIsInBhZ2VYIiwicGFnZVkiLCJoaWRlIiwiZm4iLCJhcHBseSIsImFyZ3VtZW50cyIsIlNUQUNLRURfQkFSIiwieFZhbCIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiYmFyIiwiU2VyaWVzIiwiQmFzaWNUb29sdGlwIiwiZm9ybWF0IiwiJHRvb2xUaXBEaXYiLCJhZGRDbGFzcyIsImRpc3BsYXlEYXRhIiwiZXhjbHVkZVRvb2xUaXBEaXYiLCJyb290UG9zIiwib2Zmc2V0IiwieHBvcyIsInlwb3MiLCJ0b3AiLCJoZWlnaHQiLCJjc3MiLCJkaXNwbGF5IiwiaHRtbCIsInNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBOztJQUVxQkEsSTs7O0FBQ25CLGdCQUFhQyxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWSwyRUFBYztBQUN4QkMsaUJBQVcsRUFEYTtBQUV4QkMsZ0JBQVUsR0FGYztBQUd4QkMsY0FBUSxNQUhnQjtBQUl4QkMsYUFBTyxFQUppQjtBQUt4QkMsWUFBTSxFQUxrQjtBQU14QkMsa0JBQVksQ0FBQyxDQUFELEVBQUksSUFBSixDQU5ZO0FBT3hCQyxtQkFBYSxDQUFDLENBQUQsRUFBSSxHQUFKLENBUFc7QUFReEJDLGlCQUFXLEVBUmE7QUFTeEJDLGlCQUFXLElBVGE7QUFVeEJDLGtCQUFZLElBVlk7QUFXeEJDLGtCQUFZLEtBWFk7QUFZeEJDLGlCQUFXLENBWmE7QUFheEJDLHFCQUFlLEtBYlMsRUFhRjtBQUN0QkMscUJBQWUsS0FkUztBQWV4QkMsbUJBQWFDLGtEQUFTQSxDQUFDQyxZQWZDO0FBZ0J4QkMsb0JBQWNGLGtEQUFTQSxDQUFDRyxhQWhCQTtBQWlCeEJDLGVBQVM7QUFqQmUsS0FBZCxFQWtCVHBCLElBbEJTLENBQVo7O0FBb0JBLFVBQUtxQixJQUFMLEdBQVksSUFBWjtBQUNBO0FBQ0EsUUFBSSxNQUFLckIsSUFBTCxDQUFVUSxTQUFWLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3ZDLFlBQUtjLEtBQUwsR0FBYUMsNkRBQVNBLEVBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBS0QsS0FBTCxHQUFhRSwrREFBV0EsRUFBeEI7QUFDQSxVQUFJLE1BQUt4QixJQUFMLENBQVVLLElBQVYsS0FBbUJXLGtEQUFTQSxDQUFDUyxVQUFqQyxFQUE2QztBQUMzQyxjQUFLSCxLQUFMLEdBQWFJLDZEQUFTQSxFQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSSxNQUFLMUIsSUFBTCxDQUFVRSxRQUFWLEtBQXVCLEdBQTNCLEVBQWdDO0FBQzlCLFVBQUksTUFBS0YsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ1csVUFBbkMsRUFBK0M7QUFDN0MsY0FBS04sSUFBTCxHQUFZTyw4REFBVUEsRUFBdEI7QUFDRCxPQUZELE1BRU8sSUFBSSxNQUFLNUIsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ2EsT0FBbkMsRUFBNEM7QUFDakQsY0FBS1IsSUFBTCxHQUFZUywyREFBT0EsRUFBbkI7QUFDRDtBQUNELFVBQUksTUFBSzlCLElBQUwsQ0FBVWMsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNwQyxjQUFLTyxJQUFMLENBQVVVLGFBQVYsQ0FBd0IsQ0FBRSxNQUFLL0IsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FBMUM7QUFDRDtBQUVGOztBQUVEO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjs7QUFFQSxRQUFJLE1BQUtsQyxJQUFMLENBQVVFLFFBQVYsS0FBdUIsR0FBM0IsRUFBZ0M7QUFDOUIsVUFBSSxNQUFLRixJQUFMLENBQVVHLE1BQVYsS0FBcUJhLGtEQUFTQSxDQUFDbUIsUUFBbkMsRUFBNkM7QUFDM0MsY0FBS2QsSUFBTCxHQUFZZSw0REFBUUEsRUFBcEI7QUFDRCxPQUZELE1BRU8sSUFBSSxNQUFLcEMsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ3FCLFNBQW5DLEVBQThDO0FBQ25ELGNBQUtoQixJQUFMLEdBQVlpQiw2REFBU0EsRUFBckI7QUFDQSxjQUFLakIsSUFBTCxDQUFVVSxhQUFWLENBQXdCLENBQXhCO0FBQ0Q7QUFDRCxVQUFJLE1BQUsvQixJQUFMLENBQVVjLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDcEMsY0FBS08sSUFBTCxDQUFVVSxhQUFWLENBQXdCLENBQUUsTUFBSy9CLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JPLFVBQTFDO0FBQ0Q7O0FBRUQsVUFBSUMseURBQVVBLENBQUMsTUFBS3hDLElBQUwsQ0FBVWEsYUFBckIsQ0FBSixFQUF5QztBQUN2QztBQUNBLFlBQU00QixvQkFBb0IsTUFBS3pDLElBQUwsQ0FBVWEsYUFBcEM7QUFDQSxjQUFLYixJQUFMLENBQVVhLGFBQVYsR0FBMEIsVUFBVTZCLEdBQVYsRUFBZTtBQUN2Q0MsZUFBS1QsVUFBTCxDQUFnQlUsT0FBaEIsQ0FBd0JGLEdBQXhCO0FBQ0EsaUJBQU9ELGtCQUFrQkMsR0FBbEIsQ0FBUDtBQUNELFNBSEQ7QUFJRDtBQUNGOztBQUVELFFBQUksTUFBSzFDLElBQUwsQ0FBVWUsV0FBVixHQUF3QixDQUE1QixFQUErQjtBQUM3QixZQUFLTSxJQUFMLENBQVVOLFdBQVYsQ0FBc0IsTUFBS2YsSUFBTCxDQUFVZSxXQUFoQztBQUNEO0FBdkVnQjtBQXdFbEI7Ozs7c0NBRTJCO0FBQUEsVUFBWGYsSUFBVyx1RUFBSixFQUFJOztBQUMxQixpRkFBYyxLQUFLQSxJQUFuQixFQUF5QkEsSUFBekI7QUFDQSxXQUFLNkMsTUFBTDtBQUNEOzs7MkJBRU87QUFDTixXQUFLQyxhQUFMLEdBQXFCLElBQXJCOztBQUVBLFVBQUksS0FBSzlDLElBQUwsQ0FBVUcsTUFBVixLQUFxQmEsa0RBQVNBLENBQUNXLFVBQW5DLEVBQStDO0FBQzdDLGFBQUttQixhQUFMLG9CQUFvQyxLQUFLOUMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FBcEQ7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLakMsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ3FCLFNBQW5DLEVBQThDO0FBQ25ELGFBQUtTLGFBQUwsa0JBQWtDLEtBQUs5QyxJQUFMLENBQVVnQyxLQUFWLENBQWdCTyxVQUFsRDtBQUNEOztBQUVELFdBQUtRLE9BQUwsR0FBZSxLQUFLL0MsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmdCLFNBQWhCLENBQTBCQyxNQUExQixDQUFpQyxHQUFqQyxFQUNaQyxJQURZLENBQ1AsT0FETyx1QkFDcUIsS0FBS2xELElBQUwsQ0FBVUcsTUFEL0IsaUJBQ2lELEtBQUtILElBQUwsQ0FBVUMsU0FEM0QsQ0FBZjs7QUFJQTtBQUNBdUMsK0RBQVVBLENBQUMsS0FBS3hDLElBQUwsQ0FBVWEsYUFBckIsS0FBdUMsS0FBS1EsSUFBTCxDQUFVOEIsVUFBVixDQUFxQixLQUFLbkQsSUFBTCxDQUFVYSxhQUEvQixDQUF2Qzs7QUFFQTtBQUNBLFVBQUksS0FBS2IsSUFBTCxDQUFVSSxLQUFkLEVBQXFCO0FBQ25CLGFBQUtKLElBQUwsQ0FBVW9ELFlBQVYsR0FBeUIsS0FBS0wsT0FBTCxDQUFhRSxNQUFiLENBQW9CLE1BQXBCLEVBQ3RCQyxJQURzQixDQUNqQixPQURpQixFQUNSLGVBRFEsRUFFdEJHLElBRnNCLENBRWpCLEtBQUtyRCxJQUFMLENBQVVJLEtBRk8sQ0FBekI7QUFHRDs7QUFFRCxXQUFLeUMsTUFBTDs7QUFFQTtBQUNBLE9BQUMsS0FBSzdDLElBQUwsQ0FBVW9CLE9BQVgsSUFBc0IsS0FBSzJCLE9BQUwsQ0FBYU8sT0FBYixDQUFxQixXQUFyQixFQUFrQyxJQUFsQyxDQUF0QjtBQUNEOztBQUVEOzs7OzZCQUNVO0FBQ1IsVUFBSSxLQUFLdEQsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ1csVUFBbkMsRUFBK0M7QUFDN0MsYUFBSzNCLElBQUwsQ0FBVU0sVUFBVixHQUF1QixDQUFDLENBQUQsRUFBSSxLQUFLTixJQUFMLENBQVVnQyxLQUFWLENBQWdCTyxVQUFwQixDQUF2QjtBQUNEOztBQUVELFVBQUksS0FBS3ZDLElBQUwsQ0FBVUcsTUFBVixLQUFxQmEsa0RBQVNBLENBQUNxQixTQUFuQyxFQUE4QztBQUM1QyxhQUFLUyxhQUFMLGtCQUFrQyxLQUFLOUMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQk8sVUFBbEQ7QUFDRDs7QUFHRDtBQUNBLFVBQUksS0FBS3ZDLElBQUwsQ0FBVUksS0FBZCxFQUFxQjtBQUNuQixZQUFJbUQsU0FBUyxDQUFiO0FBQ0EsWUFBSUMsU0FBUyxDQUFiO0FBQ0EsWUFBSUMsU0FBUyxDQUFiO0FBQ0EsWUFBSSxLQUFLekQsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ1csVUFBbkMsRUFBK0M7QUFDN0M0QixtQkFBU0csS0FBS0MsS0FBTCxDQUFXLEtBQUszRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCTyxVQUFoQixHQUE2QixDQUF4QyxDQUFUO0FBQ0FpQixtQkFBU3hDLGtEQUFTQSxDQUFDNEMsY0FBbkI7QUFDRCxTQUhELE1BR08sSUFBSSxLQUFLNUQsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ21CLFFBQS9CLElBQTJDLEtBQUtuQyxJQUFMLENBQVVHLE1BQVYsS0FBcUJhLGtEQUFTQSxDQUFDcUIsU0FBOUUsRUFBeUY7QUFDOUYsY0FBSSxLQUFLckMsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ21CLFFBQW5DLEVBQTZDO0FBQzNDb0IscUJBQVMsQ0FBRSxLQUFLdkQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUF6QixHQUFpQzlDLGtEQUFTQSxDQUFDK0MsYUFBcEQ7QUFDQU4scUJBQVMsR0FBVDtBQUNELFdBSEQsTUFHTztBQUNMRixxQkFBUyxLQUFLdkQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCRyxLQUF2QixHQUErQmhELGtEQUFTQSxDQUFDK0MsYUFBbEQ7QUFDQU4scUJBQVMsRUFBVDtBQUNEO0FBQ0RELG1CQUFTRSxLQUFLQyxLQUFMLENBQVcsS0FBSzNELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQWhCLEdBQThCLENBQXpDLENBQVQ7QUFDRDtBQUNELGFBQUtqQyxJQUFMLENBQVVvRCxZQUFWLENBQ0dGLElBREgsQ0FDUSxXQURSLGlCQUVpQkssTUFGakIsU0FFMkJDLE1BRjNCLGlCQUU2Q0MsTUFGN0M7QUFHRDs7QUFFRCxXQUFLdkIsVUFBTCxHQUFrQixFQUFsQjs7QUFFQSxVQUFJM0IsY0FBYyxDQUFDLEtBQUtQLElBQUwsQ0FBVU8sV0FBVixDQUFzQixDQUF0QixDQUFELEVBQTJCLEtBQUtQLElBQUwsQ0FBVU8sV0FBVixDQUFzQixLQUFLUCxJQUFMLENBQVVPLFdBQVYsQ0FBc0IwRCxNQUF0QixHQUErQixDQUFyRCxDQUEzQixDQUFsQjtBQUNBLFVBQUksS0FBS2pFLElBQUwsQ0FBVVEsU0FBVixLQUF3QixXQUE1QixFQUF5QztBQUN2Q0Qsc0JBQWMsS0FBS1AsSUFBTCxDQUFVTyxXQUF4QjtBQUNBLGFBQUtlLEtBQUwsQ0FDRzRDLE9BREgsQ0FDVyxLQUFLbEUsSUFBTCxDQUFVa0IsWUFEckI7QUFFRCxPQUpELE1BSU87QUFDTCxhQUFLbEIsSUFBTCxDQUFVUyxTQUFWLElBQXVCLEtBQUthLEtBQUwsQ0FBVzZDLEtBQVgsRUFBdkIsQ0FESyxDQUNxQztBQUMzQzs7QUFFRCxXQUFLN0MsS0FBTCxDQUFXOEMsS0FBWCxDQUFpQixLQUFLcEUsSUFBTCxDQUFVTSxVQUEzQixFQUNHK0QsTUFESCxDQUNVOUQsV0FEVjs7QUFHQSxXQUFLYyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsS0FBS0EsS0FBckI7O0FBRUEsVUFBSWdELHVEQUFRQSxDQUFDLEtBQUt0RSxJQUFMLENBQVVVLFVBQW5CLENBQUosRUFBb0M7QUFDbEMsWUFBSTZELFVBQVUsS0FBS3ZFLElBQUwsQ0FBVVUsVUFBeEI7QUFDQSxZQUFJLEtBQUtWLElBQUwsQ0FBVUUsUUFBVixLQUF1QixHQUF2QixJQUE4QixLQUFLRixJQUFMLENBQVVLLElBQVYsS0FBbUJXLGtEQUFTQSxDQUFDUyxVQUEvRCxFQUEyRTtBQUN6RTtBQUNBLGNBQU0rQyxVQUFVZCxLQUFLQyxLQUFMLENBQVcsS0FBSzNELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JPLFVBQWhCLEdBQTZCLEVBQXhDLENBQWhCO0FBQ0EsY0FBTWtDLFlBQVlmLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLEtBQUszRCxJQUFMLENBQVVPLFdBQVYsQ0FBc0IsQ0FBdEIsSUFBMkIsS0FBS1AsSUFBTCxDQUFVTyxXQUFWLENBQXNCLENBQXRCLENBQTVCLEtBQXlELEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUF4RSxDQUFYLElBQTRGLENBQTlHO0FBQ0EsY0FBSWtFLFlBQVksQ0FBWixJQUFpQkEsWUFBWUYsT0FBakMsRUFBMEM7QUFDeENBLHNCQUFVRSxTQUFWO0FBQ0Q7O0FBRUQsY0FBTUMsZUFBZWhCLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLEtBQUszRCxJQUFMLENBQVVPLFdBQVYsQ0FBc0IsQ0FBdEIsSUFBMkIsS0FBS1AsSUFBTCxDQUFVTyxXQUFWLENBQXNCLENBQXRCLENBQTVCLEtBQXlELEtBQUssSUFBOUQsQ0FBWCxDQUFyQjtBQUNBLGNBQUltRSxlQUFlSCxPQUFuQixFQUE0QjtBQUMxQkEsc0JBQVVHLFlBQVY7QUFDRDs7QUFFRCxjQUFJRixVQUFVRCxPQUFkLEVBQXVCO0FBQ3JCQSxzQkFBVUMsT0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBS25ELElBQUwsQ0FBVXNELEtBQVYsQ0FBZ0JKLE9BQWhCO0FBQ0QsT0FyQkQsTUFxQk8sSUFBSS9CLHlEQUFVQSxDQUFDLEtBQUt4QyxJQUFMLENBQVVVLFVBQXJCLENBQUosRUFBc0M7QUFDM0MsYUFBS1csSUFBTCxDQUFVc0QsS0FBVixDQUFnQixLQUFLM0UsSUFBTCxDQUFVVSxVQUFWLEVBQWhCO0FBQ0Q7O0FBRUQsV0FBS29DLGFBQUwsSUFBc0IsS0FBS0MsT0FBTCxDQUFhRyxJQUFiLENBQWtCLFdBQWxCLEVBQStCLEtBQUtKLGFBQXBDLENBQXRCOztBQUVBLFVBQUksS0FBSzlDLElBQUwsQ0FBVWMsYUFBVixJQUEyQixLQUFLZCxJQUFMLENBQVVFLFFBQVYsS0FBdUIsR0FBdEQsRUFBMkQ7QUFDekQsYUFBS21CLElBQUwsQ0FBVVUsYUFBVixDQUF3QixDQUFFLEtBQUsvQixJQUFMLENBQVVnQyxLQUFWLENBQWdCTyxVQUExQztBQUNEOztBQUVELFdBQUtRLE9BQUwsQ0FBYTZCLElBQWIsQ0FBa0IsS0FBS3ZELElBQXZCOztBQUdBLFVBQU13RCxZQUFZLEtBQUs3RSxJQUFMLENBQVVZLFNBQTVCO0FBQ0EsVUFBTWtFLFVBQVV0Qyx5REFBVUEsQ0FBQyxLQUFLeEMsSUFBTCxDQUFVYSxhQUFyQixJQUFzQyxLQUFLYixJQUFMLENBQVVhLGFBQWhELEdBQWdFa0UsOENBQWhGOztBQUVBLFVBQUksS0FBSy9FLElBQUwsQ0FBVVcsVUFBVixLQUF5QixPQUE3QixFQUFzQztBQUNwQyxhQUFLb0MsT0FBTCxDQUNHaUMsU0FESCxDQUNhLE1BRGIsRUFFR0MsS0FGSCxDQUVTLGFBRlQsRUFFd0IsS0FGeEIsRUFHRy9CLElBSEgsQ0FHUSxHQUhSLEVBR2EsR0FIYixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljLFFBSmQsRUFLR0EsSUFMSCxDQUtRLElBTFIsRUFLYyxPQUxkLEVBTUdBLElBTkgsQ0FNUSxXQU5SLEVBTXFCLGFBTnJCLEVBT0dHLElBUEgsQ0FPUSxVQUFVNkIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3BCLGlCQUFPQywyREFBWUEsQ0FBQ04sUUFBUUksQ0FBUixDQUFiLEVBQXlCTCxTQUF6QixDQUFQO0FBQ0QsU0FUSDtBQVVELE9BWEQsTUFXTyxJQUFJLEtBQUs3RSxJQUFMLENBQVVXLFVBQVYsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsYUFBS29DLE9BQUwsQ0FDR2lDLFNBREgsQ0FDYSxNQURiLEVBRUc5QixJQUZILENBRVEsR0FGUixFQUVhLENBRmIsRUFHR0EsSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWMsT0FKZCxFQUtHQSxJQUxILENBS1EsV0FMUixFQUtxQixZQUxyQixFQU1HK0IsS0FOSCxDQU1TLGFBTlQsRUFNd0IsT0FOeEIsRUFPRzVCLElBUEgsQ0FPUSxVQUFVNkIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3BCLGlCQUFPQywyREFBWUEsQ0FBQ04sUUFBUUksQ0FBUixDQUFiLEVBQXlCTCxTQUF6QixDQUFQO0FBQ0QsU0FUSDtBQVVEO0FBQ0Y7Ozs2QkFFU1EsUSxFQUFVO0FBQ2xCQSxpQkFBVyxDQUFDLENBQUNBLFFBQWI7QUFDQSxXQUFLdEMsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFPLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0MsQ0FBQytCLFFBQW5DLENBQWhCO0FBQ0EsV0FBS3JGLElBQUwsQ0FBVW9ELFlBQVYsSUFBMEIsS0FBS3BELElBQUwsQ0FBVW9ELFlBQVYsQ0FBdUJFLE9BQXZCLENBQStCLFdBQS9CLEVBQTRDLENBQUMrQixRQUE3QyxDQUExQjtBQUNBLFdBQUtyRixJQUFMLENBQVVvQixPQUFWLEdBQW9CaUUsUUFBcEI7QUFDRDs7QUFFRDs7Ozs2QkFDVTtBQUNSLFdBQUtyRixJQUFMLENBQVVvRCxZQUFWLElBQTBCLEtBQUtwRCxJQUFMLENBQVVvRCxZQUFWLENBQXVCa0MsTUFBdkIsRUFBMUI7QUFDQSxXQUFLdkMsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWF1QyxNQUFiLEVBQWhCO0FBQ0EsV0FBS2hFLEtBQUwsR0FBYSxJQUFiO0FBQ0EsV0FBS0QsSUFBTCxHQUFZLElBQVo7QUFDQSxXQUFLckIsSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQTNPK0J1Riw4RDs7QUFBYnhGLG1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJ5RixjOzs7QUFDbkIsMEJBQWFDLFNBQWIsRUFBd0J6RixJQUF4QixFQUE4QjtBQUFBOztBQUM1QkEsU0FBSzBGLFNBQUwsR0FBaUIsSUFBSUMsSUFBSixFQUFqQjs7QUFFQTtBQUNBLFFBQUksQ0FBQzNGLEtBQUs0RixVQUFWLEVBQXNCO0FBQ3BCNUYsV0FBSzRGLFVBQUwsR0FBa0IsSUFBSUMsbUVBQUosQ0FBa0I3RixJQUFsQixDQUFsQjtBQUNEO0FBQ0Q7QUFDQSxRQUFJLEVBQUVBLEtBQUs0RixVQUFMLFlBQTJCRSxxRUFBN0IsQ0FBSixFQUFtRDtBQUNqRCxZQUFNLElBQUlDLEtBQUosQ0FBVSxzRUFBVixDQUFOO0FBQ0Q7O0FBRUQ7O0FBR0E7QUFmNEIsMlBBYXRCTixTQWJzQixFQWFYekYsSUFiVzs7QUFnQjVCZ0cseUVBQW1CQSxDQUFDLE1BQUtDLE9BQXpCOztBQUVBO0FBQ0EsUUFBSUMsd0RBQVFBLENBQUMsTUFBS04sVUFBZCxDQUFKLEVBQStCO0FBQzdCLGlGQUFjLE1BQUtLLE9BQW5CLEVBQTRCLE1BQUtMLFVBQUwsQ0FBZ0JPLFlBQWhCLEVBQTVCO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLQyxjQUFMOztBQUVBLCtFQUFhO0FBQUEsYUFBTSxNQUFLQyxJQUFMLEVBQU47QUFBQSxLQUFiO0FBMUI0QjtBQTJCN0I7Ozs7cUNBRWlCO0FBQ2hCLFVBQUlDLG9CQUFKO0FBQ0EsVUFBTUMsU0FBUyxLQUFLTixPQUFMLENBQWFNLE1BQTVCO0FBQ0EsVUFBTUMsVUFBVSxLQUFLUCxPQUFMLENBQWFPLE9BQTdCO0FBQ0EsVUFBTUMsV0FBVyxLQUFLUixPQUFMLENBQWFRLFFBQTlCOztBQUVBLFVBQUlGLE1BQUosRUFBWTtBQUNWRCxzQkFBY0kseURBQVNBLENBQUMsSUFBVixFQUFnQixvQkFBaEIsQ0FBZDtBQUNBLGFBQUtDLEtBQUwsR0FBYSxJQUFJNUcsOENBQUo7QUFDWGlDLGlCQUFPLElBREk7QUFFWDlCLG9CQUFVLEdBRkM7QUFHWEMsa0JBQVEsTUFIRztBQUlYRyxzQkFBWSxDQUFDLEtBQUsyQixXQUFOLEVBQW1CLENBQW5CLENBSkQ7QUFLWDFCLHVCQUFhZ0c7QUFMRixXQU1SRCxXQU5RLEVBQWI7QUFRQSxhQUFLTSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS0YsS0FBbEM7QUFDRDs7QUFFRCxVQUFJSCxPQUFKLEVBQWE7QUFDWEYsc0JBQWNJLHlEQUFTQSxDQUFDLElBQVYsRUFBZ0IscUJBQWhCLENBQWQ7QUFDQSxhQUFLSSxNQUFMLEdBQWMsSUFBSS9HLDhDQUFKO0FBQ1ppQyxpQkFBTyxJQURLO0FBRVo5QixvQkFBVSxHQUZFO0FBR1pDLGtCQUFRLE9BSEk7QUFJWkcsc0JBQVksQ0FBQyxLQUFLMkIsV0FBTixFQUFtQixDQUFuQixDQUpBO0FBS1oxQix1QkFBYWlHO0FBTEQsV0FNVEYsV0FOUyxFQUFkO0FBUUE7QUFDQSxhQUFLTSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS0MsTUFBbEM7QUFDRDs7QUFFRCxVQUFJTCxTQUFTTSxTQUFiLEVBQXdCO0FBQ3RCVCxzQkFBY0kseURBQVNBLENBQUMsSUFBVixFQUFnQixzQkFBaEIsQ0FBZDtBQUNBLGFBQUtNLEtBQUwsR0FBYSxJQUFJakgsOENBQUo7QUFDWGlDLGlCQUFPLElBREk7QUFFWDlCLG9CQUFVLEdBRkM7QUFHWEMsa0JBQVEsUUFIRztBQUlYRyxzQkFBWSxDQUFDLENBQUQsRUFBSSxLQUFLaUMsVUFBVCxDQUpEO0FBS1hoQyx1QkFBYWtHLFNBQVNNO0FBTFgsV0FNUlQsV0FOUSxFQUFiO0FBUUEsYUFBS00sa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUtHLEtBQWxDO0FBQ0Q7O0FBRUQsVUFBTUMsY0FBY1AseURBQVNBLENBQUMsSUFBVixFQUFnQixpQkFBaEIsQ0FBcEI7QUFDQSxVQUFJTyxZQUFZN0YsT0FBaEIsRUFBeUI7QUFDdkIsYUFBSzhGLE9BQUwsR0FBZSxJQUFJQyw4REFBSjtBQUNibkYsaUJBQU87QUFETSxXQUVWaUYsV0FGVSxFQUFmO0FBSUEsYUFBS0wsa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUtLLE9BQWxDO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLakIsT0FBTCxDQUFhbUIsTUFBakIsRUFBeUI7QUFDdkIsYUFBS0EsTUFBTCxHQUFjLElBQUlDLDBEQUFKLENBQWM7QUFDMUJyRixpQkFBTztBQURtQixTQUFkLENBQWQ7QUFHQTtBQUNBLGFBQUs0RSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS08sTUFBbEM7QUFDRDtBQUNGOzs7MkJBRU87QUFDTkUsY0FBUUMsR0FBUixDQUFZLHFCQUFaLEVBQW1DLElBQW5DO0FBQ0E7QUFDQSxXQUFLdEIsT0FBTCxDQUFhdUIsU0FBYixDQUF1QjVDLElBQXZCLENBQTRCLElBQTVCOztBQUVBO0FBQ0EsV0FBSzZDLFlBQUw7O0FBRUEsV0FBS0MsZUFBTDs7QUFFQSxXQUFLQyxZQUFMLElBQXFCLEtBQUtBLFlBQUwsQ0FBa0JDLGtCQUFsQixFQUFyQjs7QUFFQSxXQUFLQyxRQUFMLEdBQWlCLElBQUlsQyxJQUFKLEdBQ2RtQyxPQURjLEtBQ0YsS0FBSzdCLE9BQUwsQ0FBYVAsU0FBYixDQUF1Qm9DLE9BQXZCLEVBRGY7QUFFQSxXQUFLN0IsT0FBTCxDQUFhOEIsVUFBYixDQUF3Qm5ELElBQXhCLENBQTZCLElBQTdCLEVBQW1DLEtBQUtpRCxRQUF4QztBQUNEOztBQUVEOzs7O2lDQUNjRyxhLEVBQWU7QUFBQTs7QUFFM0IsVUFBSUMsbUJBQUo7QUFDQSxVQUFJQyxnQkFBSjtBQUNBLFVBQUlDLGlCQUFKO0FBQ0EsVUFBSUMsYUFBSjtBQUNBLFVBQUlDLGNBQWMsSUFBbEI7QUFDQSxVQUFJQyxjQUFjLElBQWxCOztBQUVBLFVBQUlOLGtCQUFrQmhILG1EQUFTQSxDQUFDbUIsUUFBaEMsRUFBMEM7QUFDeENtRyxzQkFBYyxLQUFkO0FBQ0Q7O0FBRUQsVUFBSU4sa0JBQWtCaEgsbURBQVNBLENBQUNxQixTQUFoQyxFQUEyQztBQUN6Q2dHLHNCQUFjLEtBQWQ7QUFDRDs7QUFFRDtBQUNBRCxhQUFPMUIseURBQVNBLENBQUMsS0FBS1QsT0FBZixFQUF3QixnQkFBeEIsQ0FBUDtBQUNBLFVBQUksS0FBS0EsT0FBTCxDQUFhTSxNQUFiLElBQXVCOEIsV0FBdkIsSUFBc0MsQ0FBQyw4RUFBZ0JELElBQWhCLENBQTNDLEVBQWtFO0FBQ2hFSCxxQkFBYSxLQUFLdEIsS0FBTCxDQUFXekUsVUFBeEI7QUFDQTtBQUNBLFlBQUkrRixXQUFXaEUsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN6QjtBQUNBaUUsb0JBQVVELFdBQVcsQ0FBWCxJQUFnQkEsV0FBVyxDQUFYLENBQTFCO0FBQ0E7QUFDQUUscUJBQVdGLFdBQVcsQ0FBWCxJQUFnQkMsT0FBM0I7O0FBRUE7QUFDQSxlQUFLakMsT0FBTCxDQUFhTSxNQUFiLENBQW9CLENBQXBCLElBQXlCNEIsUUFBekI7O0FBRUE7QUFDQSxlQUFLeEIsS0FBTCxDQUFXNEIsZUFBWCxDQUEyQjtBQUN6QmhJLHlCQUFhLEtBQUswRixPQUFMLENBQWFNO0FBREQsV0FBM0I7QUFHRDtBQUNGOztBQUVENkIsYUFBTzFCLHlEQUFTQSxDQUFDLEtBQUtULE9BQWYsRUFBd0IsaUJBQXhCLENBQVA7QUFDQSxVQUFJLEtBQUtBLE9BQUwsQ0FBYU8sT0FBYixJQUF3QjhCLFdBQXhCLElBQXVDLENBQUMsOEVBQWdCRixJQUFoQixDQUE1QyxFQUFtRTtBQUNqRUgscUJBQWEsS0FBS25CLE1BQUwsQ0FBWTVFLFVBQXpCOztBQUVBLFlBQUkrRixXQUFXaEUsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN6QmlFLG9CQUFVRCxXQUFXLENBQVgsSUFBZ0JBLFdBQVcsQ0FBWCxDQUExQjtBQUNBRSxxQkFBV0YsV0FBVyxDQUFYLElBQWdCQyxPQUEzQjs7QUFFQSxlQUFLakMsT0FBTCxDQUFhTyxPQUFiLENBQXFCLENBQXJCLElBQTBCMkIsUUFBMUI7O0FBRUE7QUFDQSxlQUFLckIsTUFBTCxDQUFZeUIsZUFBWixDQUE0QjtBQUMxQmhJLHlCQUFhLEtBQUswRixPQUFMLENBQWFPO0FBREEsV0FBNUI7QUFHRDtBQUNGOztBQUVEO0FBQ0EsVUFBTWdDLGNBQWMsRUFBcEI7QUFDQSxVQUFJQyxnQkFBZ0IsQ0FBcEI7O0FBRUEsVUFBSSxLQUFLeEMsT0FBTCxDQUFhTSxNQUFqQixFQUF5QjtBQUN2QmlDLG9CQUFZeEgsbURBQVNBLENBQUNtQixRQUF0QixJQUFrQyxFQUFsQztBQUNBcUcsb0JBQVl4SCxtREFBU0EsQ0FBQ21CLFFBQXRCLEVBQWdDdUcsS0FBaEMsR0FBd0MsZUFBeEM7QUFDQUYsb0JBQVl4SCxtREFBU0EsQ0FBQ21CLFFBQXRCLEVBQWdDd0csT0FBaEMsR0FBMEMsRUFBMUM7QUFDRDs7QUFFRCxVQUFJLEtBQUsxQyxPQUFMLENBQWFPLE9BQWpCLEVBQTBCO0FBQ3hCZ0Msb0JBQVl4SCxtREFBU0EsQ0FBQ3FCLFNBQXRCLElBQW1DLEVBQW5DO0FBQ0FtRyxvQkFBWXhILG1EQUFTQSxDQUFDcUIsU0FBdEIsRUFBaUNxRyxLQUFqQyxHQUF5QyxnQkFBekM7QUFDQUYsb0JBQVl4SCxtREFBU0EsQ0FBQ3FCLFNBQXRCLEVBQWlDc0csT0FBakMsR0FBMkMsRUFBM0M7QUFDRDs7QUFFRDtBQUNBLFVBQU1DLFNBQVMsS0FBS0MsR0FBTCxDQUFTNUYsTUFBVCxDQUFnQixHQUFoQixFQUNaQyxJQURZLENBQ1AsT0FETyxFQUNFLFNBREYsQ0FBZjs7QUF4RTJCLGlDQTJFaEI3QixJQTNFZ0I7QUE0RXpCLFlBQU15SCxXQUFXLE9BQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLFNBQVNSLFlBQVluSCxJQUFaLEVBQWtCcUgsS0FBaEQsRUFBdURNLElBQXZELENBQTRELE1BQTVELENBQWpCO0FBQ0FGLGlCQUFTRyxJQUFULENBQWMsVUFBVTlELENBQVYsRUFBYTtBQUN6QixjQUFNK0QsV0FBV0MsRUFBRUwsU0FBUzNELENBQVQsQ0FBRixFQUNkOUIsSUFEYyxNQUNKLEVBRGI7QUFFQSxjQUFJNkYsU0FBU2pGLE1BQVQsR0FBa0J1RSxZQUFZbkgsSUFBWixFQUFrQnNILE9BQWxCLENBQTBCMUUsTUFBaEQsRUFBd0Q7QUFDdER1RSx3QkFBWW5ILElBQVosRUFBa0JzSCxPQUFsQixHQUE0Qk8sUUFBNUI7QUFDRDtBQUNGLFNBTkQ7O0FBU0FOLGVBQU81RCxTQUFQLENBQWlCLFlBQWpCLEVBQ0dvRSxJQURILENBQ1EsQ0FBQ1osWUFBWW5ILElBQVosRUFBa0JzSCxPQUFuQixDQURSLEVBRUdVLEtBRkgsR0FHR3BHLE1BSEgsQ0FHVSxNQUhWLEVBSUdJLElBSkgsQ0FJUWlHLE1BSlIsRUFLR0wsSUFMSCxDQUtRLFVBQVUvRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDcEI7QUFDQXNELDBCQUFnQixLQUFLYyxxQkFBTCxFQUFoQjtBQUNBSixZQUFFLElBQUYsRUFBUTdELE1BQVIsR0FIb0IsQ0FHSDtBQUNsQixTQVRIOztBQVdBO0FBQ0EsZUFBS3pCLE1BQUwsQ0FBWXhDLElBQVosSUFBb0JxQyxLQUFLOEYsS0FBTCxDQUFXZixhQUFYLElBQTRCekgsbURBQVNBLENBQUN5SSxZQUExRDtBQWxHeUI7O0FBMkUzQixXQUFLLElBQU1wSSxJQUFYLElBQW1CbUgsV0FBbkIsRUFBZ0M7QUFBQSxjQUFyQm5ILElBQXFCO0FBeUIvQjtBQUNEdUgsYUFBT3RELE1BQVA7O0FBRUEsV0FBSy9DLFVBQUwsR0FBbUIsS0FBS21ILGNBQUwsQ0FBb0JDLEtBQXBCLEdBQTRCLEtBQUs5RixNQUFMLENBQVlDLElBQXhDLEdBQStDLEtBQUtELE1BQUwsQ0FBWUcsS0FBOUU7QUFDQSxXQUFLbkIsTUFBTDtBQUNEOzs7O0VBek55QytHLHNEOztBQUF2QnBFLDZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZyQjtBQUNBO0FBQ0E7O0lBRXFCSyxhOzs7QUFDbkIseUJBQWE3RixJQUFiLEVBQW1CO0FBQUE7O0FBQUEseVBBQ1hBLElBRFc7O0FBRWpCLFVBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUZpQjtBQUdsQjs7OzttQ0FFZTtBQUNkO0FBQ0EsVUFBSTs7QUFFRixhQUFLNkosV0FBTCxHQUFtQixFQUFuQjtBQUNBLGFBQUs3SixJQUFMLENBQVVvSixJQUFWLEtBQW1CLEtBQUtTLFdBQUwsQ0FBaUJULElBQWpCLEdBQXdCLEtBQUtwSixJQUFMLENBQVVvSixJQUFyRDtBQUNBLGFBQUtwSixJQUFMLENBQVVvSCxNQUFWLEtBQXFCLEtBQUt5QyxXQUFMLENBQWlCekMsTUFBakIsR0FBMEIsS0FBS3BILElBQUwsQ0FBVW9ILE1BQXpEO0FBQ0EsYUFBS3BILElBQUwsQ0FBVTJHLEtBQVYsS0FBb0IsS0FBS2tELFdBQUwsQ0FBaUJsRCxLQUFqQixHQUF5QixLQUFLM0csSUFBTCxDQUFVMkcsS0FBdkQ7O0FBRUEsbUZBQWMsS0FBS2tELFdBQW5CLEVBQWdDLEtBQUtDLGtCQUFMLEVBQWhDO0FBQ0EsbUZBQWMsS0FBS0QsV0FBbkIsRUFBZ0MsS0FBS0Usa0JBQUwsRUFBaEM7QUFDQSxtRkFBYyxLQUFLRixXQUFuQixFQUFnQyxLQUFLRyxpQkFBTCxFQUFoQztBQUNBLG1GQUFjLEtBQUtILFdBQW5CLEVBQWdDLEtBQUtJLGtCQUFMLEVBQWhDOztBQUVBLGVBQU8sS0FBS0osV0FBWjtBQUVELE9BZEQsQ0FjRSxPQUFPSyxHQUFQLEVBQVk7QUFDWjVDLGdCQUFRQyxHQUFSLENBQVksa0RBQVosRUFBZ0UyQyxHQUFoRTtBQUNBLGFBQUtsSyxJQUFMLENBQVVtSyxPQUFWLENBQWtCRCxHQUFsQjtBQUNBLGNBQU0sSUFBSW5FLEtBQUosQ0FBVSx5REFBVixDQUFOO0FBQ0Q7QUFDRjs7O3lDQUVxQjtBQUNwQixVQUFNOEQsY0FBYyxLQUFLQSxXQUF6QjtBQUNBLFVBQU1PLFVBQVVQLFlBQVlULElBQTVCO0FBQ0EsVUFBTWlCLGFBQWFELFFBQVFFLFNBQTNCO0FBQ0EsVUFBTUMsVUFBVUYsV0FBV0UsT0FBM0I7QUFDQSxVQUFNbkIsT0FBT2lCLFdBQVdHLE1BQXhCO0FBQ0EsVUFBTUMsZ0JBQWlCRixRQUFRdEcsTUFBUixJQUFrQm1GLEtBQUtuRixNQUE5Qzs7QUFFQSxVQUFJLENBQUN3RyxhQUFMLEVBQW9CO0FBQ2xCLGNBQU0sSUFBSTFFLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0Q7O0FBRUQsYUFBTztBQUNMMkUsbUJBQVd0QjtBQUROLE9BQVA7QUFHRDs7O3lDQUVxQjtBQUNwQixVQUFNUyxjQUFjLEtBQUtBLFdBQXpCO0FBQ0EsVUFBTVEsYUFBYVIsWUFBWWEsU0FBL0I7QUFDQSxVQUFNQyxZQUFZLENBQWxCO0FBQ0EsYUFBTztBQUNMbEUsa0JBQVU7QUFDUmtFLDhCQURRO0FBRVI1RCxxQkFBVzZELGtEQUFHQSxDQUFDUCxVQUFKLEVBQWdCLENBQWhCO0FBRkg7QUFETCxPQUFQO0FBTUQ7Ozt5Q0FFcUI7QUFDcEIsVUFBTVIsY0FBYyxLQUFLQSxXQUF6QjtBQUNBLFVBQU1nQixjQUFjaEIsWUFBWWlCLE9BQWhDO0FBQ0EsVUFBTUMsV0FBV2xCLFlBQVl6QyxNQUE3QjtBQUNBLFVBQU1nQyxPQUFPUyxZQUFZYSxTQUF6QjtBQUNBLFVBQU0vRCxRQUFRRCx3REFBU0EsQ0FBQ21ELFdBQVYsRUFBdUIsWUFBdkIsQ0FBZDtBQUNBLFVBQU0vQyxTQUFTSix3REFBU0EsQ0FBQ21ELFdBQVYsRUFBdUIsYUFBdkIsQ0FBZjtBQUNBLFVBQUltQixZQUFKO0FBQ0EsVUFBSXpFLFNBQVMsSUFBYjtBQUNBLFVBQUlDLFVBQVUsSUFBZDs7QUFHQSxVQUFJRyxLQUFKLEVBQVc7QUFDVCxZQUFJLDhFQUFnQkEsTUFBTXNFLEdBQXRCLEtBQThCLDhFQUFnQnRFLE1BQU11RSxHQUF0QixDQUFsQyxFQUE4RDtBQUM1RDNFLG1CQUFTLENBQUNJLE1BQU1zRSxHQUFQLEVBQVl0RSxNQUFNdUUsR0FBbEIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSXBFLE1BQUosRUFBWTtBQUNWLFlBQUksOEVBQWdCQSxPQUFPbUUsR0FBdkIsS0FBK0IsOEVBQWdCbkUsT0FBT29FLEdBQXZCLENBQW5DLEVBQWdFO0FBQzlEMUUsb0JBQVUsQ0FBQ00sT0FBT21FLEdBQVIsRUFBYW5FLE9BQU9vRSxHQUFwQixDQUFWO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLFVBQUksQ0FBQzNFLE1BQUQsSUFBVyxDQUFDQyxPQUFoQixFQUF5QjtBQUFBLFlBbUJqQjJFLE9BbkJpQjs7QUFBQTtBQUN2QixjQUFJQyxvQkFBb0IsS0FBeEI7QUFDQSxlQUFLSixHQUFMLElBQVlILFdBQVosRUFBeUI7QUFDdkIsZ0JBQUksQ0FBQyw4RUFBZ0JBLFlBQVlHLEdBQVosRUFBaUJLLE1BQWpDLENBQUQsSUFBNkMsQ0FBQyw4RUFBZ0JSLFlBQVlHLEdBQVosRUFBaUJNLE1BQWpDLENBQWxELEVBQTRGO0FBQzFGRixrQ0FBb0IsSUFBcEI7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsY0FBSUEsaUJBQUosRUFBdUI7O0FBRXJCO0FBQ0FuQywrREFBSUEsQ0FBQzRCLFdBQUwsRUFBa0IsVUFBVVUsUUFBVixFQUFvQjtBQUNwQ0EsdUJBQVNGLE1BQVQsR0FBa0JHLFFBQWxCO0FBQ0FELHVCQUFTRCxNQUFULEdBQWtCLENBQUNFLFFBQW5CO0FBQ0QsYUFIRDs7QUFNQTtBQUNJTCxzQkFBVSxDQVZPOztBQVdyQi9CLGlCQUFLcUMsT0FBTCxDQUFhLFVBQVV2RyxDQUFWLEVBQWE7QUFDeEIrRCxpRUFBSUEsQ0FBQzRCLFdBQUwsRUFBa0IsVUFBVVUsUUFBVixFQUFvQjtBQUNwQ0osMEJBQVVqRyxFQUFFcUcsU0FBU1osU0FBWCxDQUFWO0FBQ0Esb0JBQUlRLFVBQVVJLFNBQVNGLE1BQXZCLEVBQStCO0FBQzdCRSwyQkFBU0YsTUFBVCxHQUFrQkYsT0FBbEI7QUFDRDtBQUNELG9CQUFJQSxVQUFVSSxTQUFTRCxNQUF2QixFQUErQjtBQUM3QkMsMkJBQVNELE1BQVQsR0FBa0JILE9BQWxCO0FBQ0Q7QUFDRixlQVJEO0FBU0QsYUFWRDtBQVdEOztBQUVEO0FBQ0EsY0FBSU8sU0FBUyxDQUFDRixRQUFkO0FBQ0EsY0FBSUcsVUFBVSxDQUFDSCxRQUFmO0FBQ0EsZUFBS1IsR0FBTCxJQUFZRCxRQUFaLEVBQXNCO0FBQ3BCLGdCQUFJQyxRQUFRLEtBQVosRUFBbUI7QUFDakJELHVCQUFTQyxHQUFULEVBQWNTLE9BQWQsQ0FBc0IsVUFBVUcsUUFBVixFQUFvQjtBQUN4QyxvQkFBSUMsWUFBWUQsU0FBU0UsZUFBekI7QUFDQUQsMEJBQVVKLE9BQVYsQ0FBa0IsVUFBVU0sTUFBVixFQUFrQjtBQUNsQyxzQkFBSWxCLFlBQVlrQixPQUFPQyxJQUFuQixFQUF5QjVLLE9BQXpCLElBQW9DeUosWUFBWWtCLE9BQU9DLElBQW5CLEVBQXlCQyxRQUF6QixDQUFrQyxDQUFsQyxNQUF5QyxNQUE3RSxJQUF1RnBCLFlBQVlrQixPQUFPQyxJQUFuQixFQUF5QlYsTUFBekIsR0FBa0NJLE1BQTdILEVBQXFJO0FBQ25JQSw2QkFBU2IsWUFBWWtCLE9BQU9DLElBQW5CLEVBQXlCVixNQUFsQztBQUNEO0FBQ0Qsc0JBQUlULFlBQVlrQixPQUFPQyxJQUFuQixFQUF5QjVLLE9BQXpCLElBQW9DeUosWUFBWWtCLE9BQU9DLElBQW5CLEVBQXlCQyxRQUF6QixDQUFrQyxDQUFsQyxNQUF5QyxPQUE3RSxJQUF3RnBCLFlBQVlrQixPQUFPQyxJQUFuQixFQUF5QlYsTUFBekIsR0FBa0NLLE9BQTlILEVBQXVJO0FBQ3JJQSw4QkFBVWQsWUFBWWtCLE9BQU9DLElBQW5CLEVBQXlCVixNQUFuQztBQUNEO0FBQ0YsaUJBUEQ7QUFRRCxlQVZEO0FBV0Q7QUFDRjs7QUFFRDtBQUNBLGNBQUlZLFNBQVNWLFFBQWI7QUFDQSxjQUFJVyxVQUFVWCxRQUFkO0FBQ0EsZUFBS1IsR0FBTCxJQUFZSCxXQUFaLEVBQXlCO0FBQ3ZCLGdCQUFJQSxZQUFZRyxHQUFaLEVBQWlCaUIsUUFBakIsSUFBNkJwQixZQUFZRyxHQUFaLEVBQWlCaUIsUUFBakIsQ0FBMEIsQ0FBMUIsTUFBaUMsTUFBOUQsSUFBd0VwQixZQUFZRyxHQUFaLEVBQWlCNUosT0FBekYsSUFBb0d5SixZQUFZRyxHQUFaLEVBQWlCSyxNQUFqQixHQUEwQmEsTUFBbEksRUFBMEk7QUFDeElBLHVCQUFTckIsWUFBWUcsR0FBWixFQUFpQkssTUFBMUI7QUFDRDtBQUNELGdCQUFJUixZQUFZRyxHQUFaLEVBQWlCaUIsUUFBakIsSUFBNkJwQixZQUFZRyxHQUFaLEVBQWlCaUIsUUFBakIsQ0FBMEIsQ0FBMUIsTUFBaUMsT0FBOUQsSUFBeUVwQixZQUFZRyxHQUFaLEVBQWlCNUosT0FBMUYsSUFBcUd5SixZQUFZRyxHQUFaLEVBQWlCSyxNQUFqQixHQUEwQmMsT0FBbkksRUFBNEk7QUFDMUlBLHdCQUFVdEIsWUFBWUcsR0FBWixFQUFpQkssTUFBM0I7QUFDRDtBQUNGOztBQUdELGNBQUllLGFBQUo7QUFBQSxjQUFVaEUsYUFBVjtBQUNBO0FBQ0EsY0FBSSxDQUFDOEQsTUFBRCxFQUFTUixNQUFULEVBQWlCVyxNQUFqQixDQUF3QixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDMUMsbUJBQU8sOEVBQWdCRCxDQUFoQixLQUFzQiw4RUFBZ0JDLENBQWhCLENBQTdCO0FBQ0QsV0FGRyxDQUFKLEVBRUk7QUFDRkgsbUJBQU8xRix3REFBU0EsQ0FBQ21ELFdBQVYsRUFBdUIsZ0JBQXZCLENBQVA7QUFDQXVDLG1CQUFPLDhFQUFnQkEsSUFBaEIsSUFBd0JBLElBQXhCLEdBQStCRixNQUF0QztBQUNBOUQsbUJBQU8xQix3REFBU0EsQ0FBQ21ELFdBQVYsRUFBdUIsZ0JBQXZCLENBQVA7QUFDQXpCLG1CQUFPLDhFQUFnQkEsSUFBaEIsSUFBd0JBLElBQXhCLEdBQStCc0QsTUFBdEM7QUFDQSxnQkFBSSxDQUFDdEQsSUFBTCxFQUFXO0FBQ1RBLHFCQUFPZ0UsT0FBTyxFQUFkLENBRFMsQ0FDUTtBQUNsQjtBQUNEN0YscUJBQVMsQ0FBQzZGLElBQUQsRUFBT2hFLElBQVAsQ0FBVDtBQUNELFdBWEQsTUFXTztBQUNMLGdCQUFJekIsS0FBSixFQUFXO0FBQ1RKLHVCQUFTLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBVDtBQUNELGFBRkQsTUFFTztBQUNMQSx1QkFBUyxLQUFUO0FBQ0Q7QUFDRjs7QUFHRCxjQUFJLENBQUM0RixPQUFELEVBQVVSLE9BQVYsRUFBbUJVLE1BQW5CLENBQTBCLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUM1QyxtQkFBTyw4RUFBZ0JELENBQWhCLEtBQXNCLDhFQUFnQkMsQ0FBaEIsQ0FBN0I7QUFDRCxXQUZHLENBQUosRUFFSTtBQUNGSCxtQkFBTzFGLHdEQUFTQSxDQUFDbUQsV0FBVixFQUF1QixpQkFBdkIsQ0FBUDtBQUNBdUMsbUJBQU8sOEVBQWdCQSxJQUFoQixJQUF3QkEsSUFBeEIsR0FBK0JELE9BQXRDO0FBQ0EvRCxtQkFBTzFCLHdEQUFTQSxDQUFDbUQsV0FBVixFQUF1QixpQkFBdkIsQ0FBUDtBQUNBekIsbUJBQU8sOEVBQWdCQSxJQUFoQixJQUF3QkEsSUFBeEIsR0FBK0J1RCxPQUF0QztBQUNBLGdCQUFJLENBQUN2RCxJQUFMLEVBQVc7QUFDVEEscUJBQU9nRSxPQUFPLEVBQWQsQ0FEUyxDQUNRO0FBQ2xCO0FBQ0Q1RixzQkFBVSxDQUFDNEYsSUFBRCxFQUFPaEUsSUFBUCxDQUFWO0FBQ0QsV0FYRCxNQVdPO0FBQ0wsZ0JBQUl0QixNQUFKLEVBQVk7QUFDVk4sd0JBQVUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFWO0FBQ0QsYUFGRCxNQUVPO0FBQ0xBLHdCQUFVLEtBQVY7QUFDRDtBQUNGO0FBeEdzQjtBQTBHeEI7O0FBRUQsYUFBTztBQUNMRCxnQkFBUUEsTUFESDtBQUVMQyxpQkFBU0E7QUFGSixPQUFQO0FBSUQ7Ozt3Q0FFb0I7QUFDbkIsVUFBTXFELGNBQWMsS0FBS0EsV0FBekI7QUFDQSxVQUFNTyxVQUFVUCxZQUFZVCxJQUE1QjtBQUNBLFVBQU1pQixhQUFhRCxRQUFRRSxTQUEzQjtBQUNBLFVBQU1DLFVBQVVGLFdBQVdFLE9BQTNCO0FBQ0EsVUFBSWlDLE1BQU0sQ0FBVjtBQUNBO0FBQ0EsVUFBTTNCLGNBQWMsRUFBcEI7QUFDQTtBQUNBLFVBQU1FLFdBQVdsQixZQUFZekMsTUFBN0I7QUFDQSxVQUFJNEQsWUFBSjs7QUFFQSxVQUFNeUIsZUFBZXBDLFdBQVdxQyxLQUFYLElBQW9CLEVBQXpDO0FBQ0EsVUFBTUMsUUFBUWpHLHdEQUFTQSxDQUFDbUQsV0FBVixFQUF1QixZQUF2QixDQUFkO0FBQ0EsVUFBTStDLFNBQVNsRyx3REFBU0EsQ0FBQ21ELFdBQVYsRUFBdUIsYUFBdkIsQ0FBZjs7QUFFQTtBQUNBVSxjQUFRa0IsT0FBUixDQUFnQixVQUFVdkcsQ0FBVixFQUFhO0FBQzNCO0FBQ0EsWUFBTTJILGFBQWFDLDJEQUFZQSxDQUFDNUgsQ0FBYixDQUFuQjtBQUNBMkYsb0JBQVlnQyxVQUFaLElBQTBCO0FBQ3hCYixnQkFBTTlHLENBRGtCO0FBRXhCeUYscUJBQVc2QixHQUZhO0FBR3hCbkIsa0JBQVFHLFFBSGdCO0FBSXhCRixrQkFBUSxDQUFDRSxRQUplO0FBS3hCcEssbUJBQVMsSUFMZTtBQU14QnNMLGlCQUFPRCxhQUFhRCxHQUFiLEtBQXFCO0FBTkosU0FBMUI7QUFRQUE7QUFDRCxPQVpEOztBQWVBLFdBQUt4QixHQUFMLElBQVlELFFBQVosRUFBc0I7QUFDcEIsWUFBSUMsUUFBUSxLQUFaLEVBQW1CO0FBQ2pCRCxtQkFBU0MsR0FBVCxFQUFjUyxPQUFkLENBQXNCLFVBQVVHLFFBQVYsRUFBb0I7QUFDeEMsZ0JBQU1DLFlBQVlELFNBQVNFLGVBQTNCO0FBQ0FGLHFCQUFTbUIsVUFBVCxHQUFzQixDQUFDdkIsUUFBRCxFQUFXLENBQUNBLFFBQVosQ0FBdEI7QUFDQUssc0JBQVVKLE9BQVYsQ0FBa0IsVUFBVU0sTUFBVixFQUFrQjtBQUNsQ0EscUJBQU9DLElBQVAsR0FBY2MsMkRBQVlBLENBQUNmLE9BQU9DLElBQXBCLENBQWQ7QUFDQSxrQkFBTVUsUUFBUVgsT0FBT1csS0FBckIsQ0FGa0MsQ0FFUDtBQUMzQixrQkFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVix3REFBc0NkLFNBQVNJLElBQS9DO0FBQ0Q7QUFDRFUsd0JBQVU3QixZQUFZa0IsT0FBT0MsSUFBbkIsRUFBeUJVLEtBQXpCLEdBQWlDQSxLQUEzQztBQUNBLGtCQUFNVCxXQUFXRixPQUFPRSxRQUFQLElBQW1CLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBcEM7QUFDQXBCLDBCQUFZa0IsT0FBT0MsSUFBbkIsRUFBeUJDLFFBQXpCLEdBQW9DQSxRQUFwQztBQUNBLGtCQUFNNUwsT0FBTzRMLFNBQVMsQ0FBVCxNQUFnQixNQUFoQixHQUF5QlUsTUFBTXRNLElBQS9CLEdBQXNDdU0sT0FBT3ZNLElBQTFEO0FBQ0F3SywwQkFBWWtCLE9BQU9DLElBQW5CLEVBQXlCM0wsSUFBekIsR0FBZ0NBLElBQWhDO0FBQ0EyTSxzRUFBU0EsQ0FBQ2pCLE9BQU8zSyxPQUFqQixNQUE4QnlKLFlBQVlrQixPQUFPQyxJQUFuQixFQUF5QjVLLE9BQXpCLEdBQW1DMkssT0FBTzNLLE9BQXhFO0FBQ0QsYUFaRDtBQWFELFdBaEJEO0FBaUJEO0FBQ0Y7O0FBRUQsYUFBTztBQUNMZ0csZ0JBQVEyRCxRQURILEVBQ2E7QUFDbEJELGlCQUFTRCxXQUZKLENBRWlCO0FBRmpCLE9BQVA7QUFJRDs7OztFQS9Qd0MvRSxvRTs7QUFBdEJELDRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCb0gsRzs7O0FBQ25CLGVBQWFqTixJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBR2pCLFVBQUtBLElBQUwsR0FBWSwyRUFBYztBQUN4QkMsaUJBQVcsRUFEYTtBQUV4QmdNLGdCQUFVLENBQUNqTCxrREFBU0EsQ0FBQ21CLFFBQVgsRUFBcUJuQixrREFBU0EsQ0FBQ1csVUFBL0IsQ0FGYztBQUd4QnVMLGVBQVMsSUFIZTtBQUl4QkMsbUJBQWEsSUFKVztBQUt4QkMsZUFBU3BNLGtEQUFTQSxDQUFDcU0sV0FMSztBQU14QnZCLHVCQUFpQixFQU5PO0FBT3hCMUssZUFBUyxJQVBlO0FBUXhCa00sY0FBUTtBQVJnQixLQUFkLEVBU1R0TixJQVRTLENBQVo7O0FBV0EsUUFBTTJDLFlBQU47O0FBRUEsUUFBTWtJLGNBQWMsTUFBSzdLLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QjZFLE9BQTVDO0FBQ0EsVUFBSzlLLElBQUwsQ0FBVXVOLGFBQVYsR0FBMEIsTUFBS3ZOLElBQUwsQ0FBVThMLGVBQVYsQ0FBMEIwQixNQUExQixDQUFpQyxVQUFVQyxHQUFWLEVBQWU7QUFDeEUsYUFBTzVDLFlBQVk0QyxJQUFJekIsSUFBaEIsRUFBc0I1SyxPQUF0QixJQUFpQyxLQUF4QztBQUNELEtBRnlCLEVBR3ZCd0osR0FIdUIsQ0FHbkIsVUFBVTZDLEdBQVYsRUFBZTtBQUNsQixhQUFPNUMsWUFBWTRDLElBQUl6QixJQUFoQixFQUFzQnJCLFNBQTdCO0FBQ0QsS0FMdUIsQ0FBMUI7O0FBT0EsVUFBSzNLLElBQUwsQ0FBVTBOLFlBQVYsR0FBeUIsTUFBSzFOLElBQUwsQ0FBVXVOLGFBQVYsQ0FBd0J0SixNQUFqRDtBQUNBO0FBQ0EsUUFBSTBKLElBQUlqSCx3REFBU0EsQ0FBQyxNQUFLMUcsSUFBZixFQUFxQixtQkFBckIsQ0FBUjtBQUNBLFFBQUksTUFBS0EsSUFBTCxDQUFVaU0sUUFBVixDQUFtQjJCLE9BQW5CLENBQTJCNU0sa0RBQVNBLENBQUNhLE9BQXJDLElBQWdELENBQUMsQ0FBckQsRUFBd0Q7QUFDdEQ4TCxVQUFJakgsd0RBQVNBLENBQUMsTUFBSzFHLElBQWYsRUFBcUIsb0JBQXJCLENBQUo7QUFDRDs7QUFFRCxRQUFJNk4sSUFBSW5ILHdEQUFTQSxDQUFDLE1BQUsxRyxJQUFmLEVBQXFCLG1CQUFyQixDQUFSO0FBQ0EsUUFBSSxNQUFLQSxJQUFMLENBQVVpTSxRQUFWLENBQW1CMkIsT0FBbkIsQ0FBMkI1TSxrREFBU0EsQ0FBQ3FCLFNBQXJDLElBQWtELENBQUMsQ0FBdkQsRUFBMEQ7QUFDeER3TCxVQUFJbkgsd0RBQVNBLENBQUMsTUFBSzFHLElBQWYsRUFBcUIsb0JBQXJCLENBQUo7QUFDRDs7QUFFRCxVQUFLOE4sTUFBTCxHQUFjSCxDQUFkO0FBQ0EsVUFBS0ksTUFBTCxHQUFjRixDQUFkOztBQUVBLFFBQU1HLFNBQVMsTUFBS2hPLElBQUwsQ0FBVWtOLE9BQXpCO0FBQ0EsVUFBS2xOLElBQUwsQ0FBVWlPLFNBQVYsR0FBc0IsRUFBdEI7QUFDQSxVQUFLak8sSUFBTCxDQUFVa08sUUFBVixHQUFxQnRELGtEQUFHQSxDQUFDb0QsTUFBSixFQUFZLE1BQUtoTyxJQUFMLENBQVVtTixXQUF0QixDQUFyQjtBQUNBbEUsdURBQUlBLENBQUMsTUFBS2pKLElBQUwsQ0FBVXVOLGFBQWYsRUFBOEIsVUFBVVksUUFBVixFQUFvQjtBQUNoRHhMLFdBQUszQyxJQUFMLENBQVVpTyxTQUFWLENBQW9CcEgsSUFBcEIsQ0FBeUIrRCxrREFBR0EsQ0FBQ29ELE1BQUosRUFBWUcsUUFBWixDQUF6QjtBQUNELEtBRkQ7O0FBSUEsVUFBS25PLElBQUwsQ0FBVW9PLFFBQVYsR0FBcUJDLDBEQUFLQSxHQUFHQyxJQUFSLENBQWFsSywwREFBS0EsQ0FBQyxNQUFLcEUsSUFBTCxDQUFVME4sWUFBaEIsQ0FBYixFQUE0Q2EsOERBQVNBLENBQUMsTUFBS3ZPLElBQUwsQ0FBVWlPLFNBQXBCLENBQTVDLENBQXJCOztBQUVBLFVBQUtPLFdBQUwsR0FBbUJ0RCx3REFBR0EsQ0FBQyxNQUFLbEwsSUFBTCxDQUFVaU8sU0FBZCxFQUF5QixVQUFVSixDQUFWLEVBQWE7QUFDdkQsYUFBTzNDLHdEQUFHQSxDQUFDMkMsQ0FBSixDQUFQO0FBQ0QsS0FGa0IsQ0FBbkI7QUFHQSxVQUFLWSxXQUFMLEdBQW1CdkQsd0RBQUdBLENBQUMsTUFBS2xMLElBQUwsQ0FBVW9PLFFBQWQsRUFBd0IsVUFBVVAsQ0FBVixFQUFhO0FBQ3RELGFBQU8zQyx3REFBR0EsQ0FBQzJDLENBQUosRUFBTyxVQUFVM0ksQ0FBVixFQUFhO0FBQ3pCLGVBQU9BLEVBQUUsQ0FBRixDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FKa0IsQ0FBbkI7QUFuRGlCO0FBd0RsQjs7OzsyQkFFTztBQUNOLFVBQU12QyxPQUFPLElBQWI7QUFDQSxVQUFNK0wsZUFBZSxFQUFyQjtBQUNBLFVBQU03RCxjQUFjLEtBQUs3SyxJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0I2RSxPQUE1QztBQUNBLFVBQU02RCxrQkFBa0IsS0FBSzNPLElBQUwsQ0FBVThMLGVBQVYsQ0FBMEIwQixNQUExQixDQUFpQyxVQUFVQyxHQUFWLEVBQWU7QUFDdEUsZUFBUTVDLFlBQVk0QyxJQUFJekIsSUFBaEIsRUFBc0I1SyxPQUF0QixJQUFpQyxLQUF6QztBQUNELE9BRnVCLENBQXhCO0FBR0E2SCx5REFBSUEsQ0FBQzBGLGVBQUwsRUFBc0IsVUFBVUMsSUFBVixFQUFnQjVDLElBQWhCLEVBQXNCO0FBQzFDLFlBQU02QyxLQUFLaEUsWUFBWStELEtBQUs1QyxJQUFqQixDQUFYO0FBQ0EwQyxxQkFBYUcsR0FBR2xFLFNBQUgsR0FBZSxDQUE1QixJQUFpQ2lFLEtBQUs1QyxJQUF0QztBQUNELE9BSEQ7O0FBTUEsVUFBTThDLGNBQWMsS0FBSzlPLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0IrRyxVQUFoQixDQUEyQkMsSUFBM0IsQ0FBZ0MsY0FBaEMsQ0FBcEI7QUFDQSxXQUFLK0YsU0FBTCxHQUFpQixLQUFLL08sSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmdCLFNBQWhCLENBQTBCZ0MsU0FBMUIsQ0FBb0MsZ0JBQXBDLEVBQ2RvRSxJQURjLENBQ1QsS0FBS3BKLElBQUwsQ0FBVW9PLFFBREQsRUFFZC9FLEtBRmMsR0FHZHBHLE1BSGMsQ0FHUCxHQUhPLEVBSWRDLElBSmMsQ0FJVCxXQUpTLEVBSUksVUFBVTRMLFlBQVk1TCxJQUFaLENBQWlCLElBQWpCLENBQVYsR0FBbUMsR0FKdkMsRUFJNEM7QUFKNUMsT0FLZEEsSUFMYyxDQUtULE9BTFMsRUFLQSxlQUxBLEVBTWRBLElBTmMsQ0FNVCxNQU5TLEVBTUQsVUFBVWdDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUM1QixlQUFPMEYsWUFBWTZELGFBQWF2SixDQUFiLENBQVosRUFBNkJ1SCxLQUFwQztBQUNELE9BUmMsRUFTZHhKLElBVGMsQ0FTVCxZQVRTLEVBU0ssVUFBVWdDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNsQyxlQUFPdUosYUFBYXZKLENBQWIsQ0FBUDtBQUNELE9BWGMsRUFZZGpDLElBWmMsQ0FZVCxhQVpTLEVBWU0sVUFBVWdDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNuQyxlQUFPQSxDQUFQO0FBQ0QsT0FkYyxDQUFqQjs7QUFpQkEsV0FBSzZKLElBQUwsR0FBWSxLQUFLRCxTQUFMLENBQWUvSixTQUFmLENBQXlCLE1BQXpCLEVBQ1RvRSxJQURTLENBQ0osVUFBVWxFLENBQVYsRUFBYTtBQUNqQixlQUFPQSxDQUFQO0FBQ0QsT0FIUyxFQUlUbUUsS0FKUyxHQUlEcEcsTUFKQyxDQUlNLE1BSk4sRUFLVEMsSUFMUyxDQUtKLEdBTEksRUFLQyxVQUFVZ0MsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3pCLGVBQU94QyxLQUFLbUwsTUFBTCxDQUFZbkwsS0FBSzNDLElBQUwsQ0FBVWtPLFFBQVYsQ0FBbUIvSSxDQUFuQixDQUFaLENBQVA7QUFDRCxPQVBTLEVBUVRqQyxJQVJTLENBUUosTUFSSSxFQVFJLFVBQVVnQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDNUIsWUFBTThKLFNBQVNDLDJEQUFNQSxDQUFDLEtBQUtDLFVBQVosRUFBd0JqTSxJQUF4QixDQUE2QixZQUE3QixDQUFmO0FBQ0EsZUFBTzJILFlBQVlvRSxNQUFaLEVBQW9CRyxRQUFwQixJQUFnQ3ZFLFlBQVlvRSxNQUFaLEVBQW9CRyxRQUFwQixDQUE2QmpLLENBQTdCLENBQXZDO0FBQ0QsT0FYUyxFQVlUakMsSUFaUyxDQVlKLEdBWkksRUFZQyxLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FaakIsRUFhVGlCLElBYlMsQ0FhSixPQWJJLEVBYUssS0FBSzRLLE1BQUwsQ0FBWXVCLFNBQVosRUFiTCxFQWNUbk0sSUFkUyxDQWNKLFFBZEksRUFjTSxDQWROLEVBZVRvTSxFQWZTLENBZU4sV0FmTSxFQWVPLFVBQVVwSyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDL0J4QyxhQUFLM0MsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmtGLE9BQWhCLElBQTJCdkUsS0FBSzNDLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JrRixPQUFoQixDQUF3QnFJLEtBQXhCLENBQThCQyxvREFBT0EsQ0FBQ0MsS0FBdEMsRUFBNkNELG9EQUFPQSxDQUFDRSxLQUFSLEdBQWdCLEVBQTdELEVBQWlFO0FBQzFGdEcsZ0JBQU07QUFDSjFHLGlCQUFLQyxLQUFLM0MsSUFBTCxDQUFVa04sT0FBVixDQUFrQi9ILENBQWxCLENBREQ7QUFFSnFILGlCQUFLckg7QUFGRDtBQURvRixTQUFqRSxDQUEzQjtBQU1ELE9BdEJTLEVBdUJUbUssRUF2QlMsQ0F1Qk4sVUF2Qk0sRUF1Qk0sVUFBVXBLLENBQVYsRUFBYTtBQUMzQnZDLGFBQUszQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCa0YsT0FBaEIsSUFBMkJ2RSxLQUFLM0MsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmtGLE9BQWhCLENBQXdCeUksSUFBeEIsRUFBM0I7QUFDRCxPQXpCUyxDQUFaOztBQTRCQTFHLHlEQUFJQSxDQUFDLEtBQUtqSixJQUFMLENBQVVzTixNQUFmLEVBQXVCLFVBQVVzQyxFQUFWLEVBQWM1RCxJQUFkLEVBQW9CO0FBQ3pDckosYUFBS3FNLElBQUwsQ0FBVU0sRUFBVixDQUFhdEQsSUFBYixFQUFtQixZQUFZO0FBQzdCNEQsYUFBR0MsS0FBSCxDQUFTbE4sS0FBSzNDLElBQUwsQ0FBVWdDLEtBQW5CLEVBQTBCOE4sU0FBMUI7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQU1EOztBQUVEOzs7OzZCQUNVO0FBQ1IsVUFBTW5OLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBSzNDLElBQUwsQ0FBVW9OLE9BQVYsS0FBc0JwTSxrREFBU0EsQ0FBQytPLFdBQXBDLEVBQWlEO0FBQy9DLGFBQUtmLElBQUwsQ0FDRzlMLElBREgsQ0FDUSxHQURSLEVBQ2EsVUFBVWdDLENBQVYsRUFBYTtBQUN0QixpQkFBT3ZDLEtBQUtvTCxNQUFMLENBQVk3SSxFQUFFLENBQUYsQ0FBWixDQUFQO0FBQ0QsU0FISCxFQUlHaEMsSUFKSCxDQUlRLFFBSlIsRUFJa0IsVUFBVWdDLENBQVYsRUFBYTtBQUMzQixpQkFBT3ZDLEtBQUtvTCxNQUFMLENBQVk3SSxFQUFFLENBQUYsQ0FBWixJQUFvQnZDLEtBQUtvTCxNQUFMLENBQVk3SSxFQUFFLENBQUYsQ0FBWixDQUEzQjtBQUNELFNBTkgsRUFPR2hDLElBUEgsQ0FPUSxHQVBSLEVBT2EsVUFBVWdDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUN6QixpQkFBT3hDLEtBQUttTCxNQUFMLENBQVluTCxLQUFLM0MsSUFBTCxDQUFVa08sUUFBVixDQUFtQi9JLENBQW5CLENBQVosQ0FBUDtBQUNELFNBVEgsRUFVR2pDLElBVkgsQ0FVUSxPQVZSLEVBVWlCUCxLQUFLbUwsTUFBTCxDQUFZdUIsU0FBWixFQVZqQjtBQVdELE9BWkQsTUFZTztBQUNMLGFBQUtMLElBQUwsQ0FDRzlMLElBREgsQ0FDUSxHQURSLEVBQ2EsVUFBVWdDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUN6QixjQUFNNkssT0FBT3JOLEtBQUttTCxNQUFMLENBQVluTCxLQUFLM0MsSUFBTCxDQUFVa08sUUFBVixDQUFtQi9JLENBQW5CLENBQVosSUFBcUN4QyxLQUFLbUwsTUFBTCxDQUFZdUIsU0FBWixLQUEwQjFNLEtBQUszQyxJQUFMLENBQVUwTixZQUFwQyxHQUFtRHdCLDJEQUFNQSxDQUFDLEtBQUtDLFVBQVosRUFBd0JqTSxJQUF4QixDQUE2QixhQUE3QixDQUFyRztBQUNBLGlCQUFPOE0sSUFBUDtBQUNELFNBSkgsRUFLRzlNLElBTEgsQ0FLUSxPQUxSLEVBS2lCUCxLQUFLbUwsTUFBTCxDQUFZdUIsU0FBWixLQUEwQjFNLEtBQUszQyxJQUFMLENBQVUwTixZQUxyRCxFQU1HeEssSUFOSCxDQU1RLEdBTlIsRUFNYSxVQUFVZ0MsQ0FBVixFQUFhO0FBQ3RCLGlCQUFPdkMsS0FBS29MLE1BQUwsQ0FBWTdJLEVBQUUsQ0FBRixJQUFPQSxFQUFFLENBQUYsQ0FBbkIsQ0FBUDtBQUNELFNBUkgsRUFTR2hDLElBVEgsQ0FTUSxRQVRSLEVBU2tCLFVBQVVnQyxDQUFWLEVBQWE7QUFDM0IsaUJBQU92QyxLQUFLb0wsTUFBTCxDQUFZLENBQVosSUFBaUJwTCxLQUFLb0wsTUFBTCxDQUFZN0ksRUFBRSxDQUFGLElBQU9BLEVBQUUsQ0FBRixDQUFuQixDQUF4QjtBQUNELFNBWEg7QUFZRDtBQUNGOzs7NkJBRVNHLFEsRUFBVTtBQUNsQkEsaUJBQVcsQ0FBQyxDQUFDQSxRQUFiO0FBQ0EsV0FBSzBKLFNBQUwsQ0FBZXpMLE9BQWYsQ0FBdUIsV0FBdkIsRUFBb0MsQ0FBQytCLFFBQXJDO0FBQ0EsV0FBS3JGLElBQUwsQ0FBVW9CLE9BQVYsR0FBb0JpRSxRQUFwQjtBQUNEOztBQUVEOzs7OzZCQUNVO0FBQ1IsVUFBTXdGLGNBQWMsS0FBSzdLLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QjZFLE9BQTVDO0FBQ0E7QUFDQSxXQUFLOUssSUFBTCxDQUFVdU4sYUFBVixHQUEwQixLQUFLdk4sSUFBTCxDQUFVOEwsZUFBVixDQUEwQjBCLE1BQTFCLENBQWlDLFVBQVVDLEdBQVYsRUFBZTtBQUN4RSxlQUFRNUMsWUFBWTRDLElBQUl6QixJQUFoQixFQUFzQjVLLE9BQXRCLElBQWlDLEtBQXpDO0FBQ0QsT0FGeUIsRUFHdkJ3SixHQUh1QixDQUduQixVQUFVNkMsR0FBVixFQUFlO0FBQ2xCLGVBQU81QyxZQUFZNEMsSUFBSXpCLElBQWhCLEVBQXNCckIsU0FBN0I7QUFDRCxPQUx1QixDQUExQjs7QUFPQTtBQUNBLFdBQUtvRSxTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZXpKLE1BQWYsRUFBbEI7QUFDQTtBQUNBLFdBQUtlLElBQUw7QUFDRDs7OzZCQUVTO0FBQ1IsV0FBSzBJLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlekosTUFBZixFQUFsQjtBQUNBLFdBQUswSixJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUtoUCxJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBeEw4QnVGLDhEOztBQUFaMEgsa0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7QUFDQTtBQUNBOztJQUVxQjVGLFM7OztBQUNuQixxQkFBYXJILElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS2lRLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxRQUFNN0csT0FBTyxNQUFLcEosSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCeUUsU0FBckMsQ0FKaUIsQ0FJOEI7QUFDL0MsUUFBTUssV0FBVyxNQUFLL0ssSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCbUIsTUFBekM7O0FBRUE7QUFDQThJLDBEQUFPQSxDQUFDbkYsU0FBU29GLEdBQWpCLEtBQXlCcEYsU0FBU29GLEdBQVQsQ0FBYTFFLE9BQWIsQ0FBcUIsVUFBQ0csUUFBRCxFQUFjO0FBQzFELFlBQUtxRSxVQUFMLENBQWdCcEosSUFBaEIsQ0FBcUIsSUFBSW9HLG1EQUFKLENBQVE7QUFDM0JqTCxlQUFPLE1BQUtoQyxJQUFMLENBQVVnQyxLQURVO0FBRTNCL0IsbUJBQVcyTCxTQUFTM0wsU0FBVCxJQUFzQjJMLFNBQVNJLElBRmY7QUFHM0JDLGtCQUFVTCxTQUFTSyxRQUhRO0FBSTNCa0IscUJBQWEsTUFBS25OLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QlEsUUFBeEIsQ0FBaUNrRSxTQUpuQjtBQUszQm1CLHlCQUFpQkYsU0FBU0UsZUFMQztBQU0zQm9CLGlCQUFTOUQ7QUFOa0IsT0FBUixDQUFyQjtBQVFELEtBVHdCLENBQXpCO0FBUmlCO0FBa0JsQjs7O0VBbkJvQ2dILHNEOztBQUFsQi9JLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKckI7QUFDQTs7SUFFcUJnSixZOzs7QUFDbkIsd0JBQWFyUSxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWSwyRUFBYztBQUN4Qm9CLGVBQVM7QUFEZSxLQUFkLEVBRVRwQixJQUZTLENBQVo7O0FBSUE7QUFDQSxRQUFJLENBQUN3Qyx5REFBVUEsQ0FBQyxNQUFLeEMsSUFBTCxDQUFVc1EsTUFBckIsQ0FBTCxFQUFtQztBQUNqQyxZQUFLdFEsSUFBTCxDQUFVc1EsTUFBVixHQUFtQixVQUFVcEwsQ0FBVixFQUFhO0FBQzlCLDREQUFrRCw0RUFBZUEsQ0FBZixDQUFsRDtBQUNELE9BRkQ7QUFHRDtBQVhnQjtBQVlsQjs7OzsyQkFFTztBQUNOLFdBQUtxTCxXQUFMLEdBQW1CcEgsRUFBRSxhQUFGLEVBQWlCcUgsUUFBakIsQ0FBMEIsd0JBQXdCLEtBQUt4USxJQUFMLENBQVVDLFNBQTVELENBQW5CO0FBQ0EsV0FBS0QsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQitHLFVBQWhCLENBQ0c5RixNQURILENBQ1UsS0FBS3NOLFdBRGY7QUFFRDs7OzBCQUVNNUMsQyxFQUFHRSxDLEVBQUc0QyxXLEVBQWFDLGlCLEVBQW1CO0FBQzNDO0FBQ0EsVUFBSUMsVUFBVSxLQUFLM1EsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQitHLFVBQWhCLENBQTJCNkgsTUFBM0IsRUFBZDtBQUNBLFVBQUlDLE9BQU9uTixLQUFLOEYsS0FBTCxDQUFXbUUsSUFBSWdELFFBQVE3TSxJQUF2QixDQUFYO0FBQ0EsVUFBSWdOLE9BQU9wTixLQUFLOEYsS0FBTCxDQUFXcUUsSUFBSThDLFFBQVFJLEdBQXZCLENBQVg7O0FBRUEsVUFBSSxDQUFDTCxpQkFBTCxFQUF3QjtBQUN0QjtBQUNBRyxlQUFPbk4sS0FBSzhGLEtBQUwsQ0FBV3FILE9BQVEsS0FBS04sV0FBTCxDQUFpQjVHLEtBQWpCLEtBQTJCLENBQTlDLENBQVA7QUFDQW1ILGVBQU9wTixLQUFLOEYsS0FBTCxDQUFXc0gsT0FBUSxLQUFLUCxXQUFMLENBQWlCUyxNQUFqQixLQUE0QixDQUEvQyxDQUFQO0FBQ0Q7O0FBRUQsV0FBS1QsV0FBTCxDQUNHVSxHQURILENBQ087QUFDSG5OLGNBQU0rTSxPQUFPLElBRFY7QUFFSEUsYUFBS0QsT0FBTyxJQUZUO0FBR0hJLGlCQUFTO0FBSE4sT0FEUCxFQU1HQyxJQU5ILENBTVEsS0FBS25SLElBQUwsQ0FBVXNRLE1BQVYsQ0FBaUIxTCxJQUFqQixDQUFzQixLQUFLNUUsSUFBTCxDQUFVZ0MsS0FBaEMsRUFBdUN5TyxZQUFZckgsSUFBbkQsQ0FOUixFQVoyQyxDQWtCdUI7QUFDbkU7Ozs2QkFFUy9ELFEsRUFBVTtBQUNsQkEsaUJBQVcsQ0FBQyxDQUFDQSxRQUFiOztBQUVBLFVBQUlBLFFBQUosRUFBYztBQUNaLGFBQUtrTCxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBaUJhLElBQWpCLEVBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2IsV0FBTCxJQUFvQixLQUFLQSxXQUFMLENBQWlCWixJQUFqQixFQUFwQjtBQUNEO0FBQ0Y7Ozs2QkFFUztBQUNSLFdBQUtZLFdBQUwsSUFBb0IsS0FBS0EsV0FBTCxDQUFpQmpMLE1BQWpCLEVBQXBCO0FBQ0EsV0FBS3RGLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUF2RHVDdUYsOEQ7O0FBQXJCOEssMkUiLCJmaWxlIjoiYmFyc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtcbiAgYXhpc0JvdHRvbSwgYXhpc1RvcCwgYXhpc0xlZnQsIGF4aXNSaWdodCxcbiAgc2NhbGVCYW5kLCBzY2FsZUxpbmVhciwgc2NhbGVUaW1lXG59IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2VtcHR5Rm4sIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCB0cnVuY2F0ZVRleHR9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHVuaXQ6ICcnLFxuICAgICAgcmFuZ2VTY2FsZTogWzAsIDEwMDBdLFxuICAgICAgZG9tYWluU2NhbGU6IFswLCAxMDBdLFxuICAgICAgc2NhbGVUeXBlOiAnJyxcbiAgICAgIGF4aXNDbGFtcDogdHJ1ZSxcbiAgICAgIHRpY2tOdW1iZXI6IG51bGwsXG4gICAgICByb3RhdGVUZXh0OiBmYWxzZSxcbiAgICAgIHRleHRMaW1pdDogOCxcbiAgICAgIHRpY2tGb3JtYXR0ZXI6IGZhbHNlLCAvLyBVc2UgZDMgdGlja0Zvcm1hdHRlclxuICAgICAgc2hvd0dyaWRMaW5lczogZmFsc2UsXG4gICAgICB0aWNrUGFkZGluZzogY29uc3RhbnRzLlRJQ0tfUEFERElORyxcbiAgICAgIHNjYWxlUGFkZGluZzogY29uc3RhbnRzLlNDQUxFX1BBRERJTkcsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICAvLyBDcmVhdGUgQXhpcyBhbmQgU2NhbGUgYmFzZWQgb24gaW5wdXQgb3B0aW9uc1xuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgICBpZiAodGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZVRpbWUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNCb3R0b20oKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzVG9wKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCkpXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBIb2xkcyBhbGwgdGljayB2YWx1ZXMgdGhhdCBheGlzIHNob3dzXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzTGVmdCgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1JpZ2h0KClcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoMClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpKSB7XG4gICAgICAgIC8vIElmIGV4dGVybmFsIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgbW9kaWZ5IGZvcm1hdHRlciB0byBwb3B1bGF0ZSB0aWNrVmFsdWVzXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRm9ybWF0dGVyID0gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXJcbiAgICAgICAgdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgc2VsZi50aWNrVmFsdWVzLnVuc2hpZnQodmFsKVxuICAgICAgICAgIHJldHVybiBleHRlcm5hbEZvcm1hdHRlcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnRpY2tQYWRkaW5nID4gMCkge1xuICAgICAgdGhpcy5heGlzLnRpY2tQYWRkaW5nKHRoaXMub3B0cy50aWNrUGFkZGluZylcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBeGlzUHJvcHMgKG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBvcHRzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgwLCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0fSlgXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGB2Yy1heGlzIHZjLWF4aXMtJHt0aGlzLm9wdHMub3JpZW50fSB2Yy1heGlzLSR7dGhpcy5vcHRzLmNsYXNzTmFtZX1gKVxuXG5cbiAgICAvLyBJZiBubyBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIGF4aXMgdXNlcyBkMyBkZWZhdWx0IGZvcm1hdHRlclxuICAgIGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpICYmIHRoaXMuYXhpcy50aWNrRm9ybWF0KHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKVxuXG4gICAgLy8gQWRkIExhYmVsIHRvIEF4aXNcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnID0gdGhpcy5heGlzVGFnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzLWxhYmVsJylcbiAgICAgICAgLnRleHQodGhpcy5vcHRzLmxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIC8vIElGIG5vdCB2aXNpYmxlLCBEb250IHNob3cgdGhlIGF4aXMsIGJ1dCBzdGlsbCBzY2FsZSBhbmQgcGxvdCBvbiBncmFwaFpvbmUsIHNvIHRoYXQgYWxsIHNlcmllcyBjYW4gYmUgcGxvdHRlZFxuICAgICF0aGlzLm9wdHMudmlzaWJsZSAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgZ3JhcGggQXhpcyBiYXNlZCBvbiBuZXcgd2lkdGggYW5kIG1vZGlmeSByYW5nZSwgZG9tYWluIGFuZCB0aWNrc1xuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy5vcHRzLnJhbmdlU2NhbGUgPSBbMCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhdXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG5cbiAgICAvLyBQb3NpdGlvbiBsYWJlbCwgc2NhbGUsIHRpY2tzLCBheGlzIGJhc2VkIG9uIGNoYXJ0IHdpZHRoXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgbGV0IHhUcmFucyA9IDBcbiAgICAgIGxldCB5VHJhbnMgPSAwXG4gICAgICBsZXQgcm90YXRlID0gMFxuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHhUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyAyKVxuICAgICAgICB5VHJhbnMgPSBjb25zdGFudHMuWF9BWElTX0xBQkVMX1lcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUIHx8IHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICAgIHhUcmFucyA9IC0odGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KSArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gMjcwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeFRyYW5zID0gdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gOTBcbiAgICAgICAgfVxuICAgICAgICB5VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt4VHJhbnN9LCR7eVRyYW5zfSkgcm90YXRlKCR7cm90YXRlfSlgKVxuICAgIH1cblxuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBsZXQgZG9tYWluU2NhbGUgPSBbdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdLCB0aGlzLm9wdHMuZG9tYWluU2NhbGVbdGhpcy5vcHRzLmRvbWFpblNjYWxlLmxlbmd0aCAtIDFdXVxuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgZG9tYWluU2NhbGUgPSB0aGlzLm9wdHMuZG9tYWluU2NhbGVcbiAgICAgIHRoaXMuc2NhbGVcbiAgICAgICAgLnBhZGRpbmcodGhpcy5vcHRzLnNjYWxlUGFkZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRzLmF4aXNDbGFtcCAmJiB0aGlzLnNjYWxlLmNsYW1wKCkgLy8gQ2xhbXBzIG91dHNpZGUgcmFuZ2UgdmFsdWUgd2l0aGluIHNwZWN0aWZlZCByYW5nZSBhbmQgZG9tYWluXG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZS5yYW5nZSh0aGlzLm9wdHMucmFuZ2VTY2FsZSlcbiAgICAgIC5kb21haW4oZG9tYWluU2NhbGUpXG5cbiAgICB0aGlzLmF4aXMuc2NhbGUodGhpcy5zY2FsZSlcblxuICAgIGlmIChpc051bWJlcih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIGxldCB0aWNrVmFsID0gdGhpcy5vcHRzLnRpY2tOdW1iZXJcbiAgICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4JyAmJiB0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgLy8gbW9kaWZ5IHh0aWNrIHRvIGRpc3BsYXkgbGVzcyB0aWNrcyBvbiBsb3dlciBjaGFydCB3aWR0aCBvciBoYXMgbGVzcyBkYXlzXG4gICAgICAgIGNvbnN0IG5ld1RpY2sgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gNjApXG4gICAgICAgIGNvbnN0IGRheUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpICsgMVxuICAgICAgICBpZiAoZGF5TGVuZ3RoID4gMiAmJiBkYXlMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IGRheUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWludXRlTGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDEwMDApKVxuICAgICAgICBpZiAobWludXRlTGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBtaW51dGVMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdUaWNrIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBuZXdUaWNrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5heGlzLnRpY2tzKHRpY2tWYWwpXG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgdGhpcy5heGlzLnRpY2tzKHRoaXMub3B0cy50aWNrTnVtYmVyKCkpXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyICYmIHRoaXMuYXhpc1RhZy5hdHRyKCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybUF0dHIpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgJiYgdGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZy5jYWxsKHRoaXMuYXhpcylcblxuXG4gICAgY29uc3QgbGltaXRUZXh0ID0gdGhpcy5vcHRzLnRleHRMaW1pdFxuICAgIGNvbnN0IHRpY2tGbXQgPSBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSA/IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyIDogZW1wdHlGblxuXG4gICAgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAnc2xhbnQnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ3knLCAnOCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctMS4wZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3gnLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MCknKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlbW92ZSBBeGlzIEluc3RhbmNlXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5yZW1vdmUoKVxuICAgIHRoaXMuc2NhbGUgPSBudWxsXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IEF4aXMgZnJvbSAnQC9heGlzJ1xuaW1wb3J0IHthZGREZWZhdWx0QlNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9CYXNpY1Rvb2x0aXAnXG5pbXBvcnQgQmFzaWNCU1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0Jhc2ljQlNQYXJzZXInXG5pbXBvcnQgQmFyU2VyaWVzIGZyb20gJ0Avc2VyaWVzL0JhclNlcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY0JTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydEF4aXNQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRCU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcbiAgICBsZXQgYXhpc09wdGlvbnNcbiAgICBjb25zdCB5UmFuZ2UgPSB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgY29uc3QgeVJhbmdlMiA9IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgY29uc3QgdGltZUluZm8gPSB0aGlzLm9wdGlvbnMudGltZUluZm9cblxuICAgIGlmICh5UmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLmxlZnQnKVxuICAgICAgdGhpcy55QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzKVxuICAgIH1cblxuICAgIGlmICh5UmFuZ2UyKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5yaWdodCcpXG4gICAgICB0aGlzLnlBeGlzMiA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ3JpZ2h0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlMixcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmUgKGNoYXJ0IEFQSSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpczIpXG4gICAgfVxuXG4gICAgaWYgKHRpbWVJbmZvLnRpbWVSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueEF4aXMuYm90dG9tJylcbiAgICAgIHRoaXMueEF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3gnLFxuICAgICAgICBvcmllbnQ6ICdib3R0b20nLFxuICAgICAgICByYW5nZVNjYWxlOiBbMCwgdGhpcy5jaGFydFdpZHRoXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHRpbWVJbmZvLnRpbWVSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueEF4aXMpXG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcE9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMudG9vbHRpcCcpXG4gICAgaWYgKHRvb2x0aXBPcHRzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIC4uLnRvb2x0aXBPcHRzXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnRvb2x0aXApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zZXJpZXMpIHtcbiAgICAgIHRoaXMuc2VyaWVzID0gbmV3IEJhclNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdCYXJTZXJpZXNDaGFydCBkcmF3JywgdGhpcylcbiAgICBzdXBlci5kcmF3KClcbiAgICB0aGlzLm9wdGlvbnMuYWZ0ZXJEcmF3LmNhbGwodGhpcylcblxuICAgIC8vIEFkZCBFeHRyYSBCdWZmZXIgZm9yIG1heCBZIHZhbHVlIGFuZCBwcm92aWRlIHNwYWNlIHRvIGRpc3BsYXkgYWxsIHRpY2tzIGluIGdyYXBoWm9uZVxuICAgIHRoaXMucmVTY2FsZVlBeGlzKClcblxuICAgIHRoaXMuY2hhcnRSZXNwb25zaXZlKClcblxuICAgIHRoaXMubW91c2VIYW5kbGVyICYmIHRoaXMubW91c2VIYW5kbGVyLnRyaWdnZXJNb3VzZUFjdGlvbigpXG5cbiAgICB0aGlzLnRpbWVEaWZmID0gKG5ldyBEYXRlKClcbiAgICAgIC5nZXRUaW1lKCkgLSB0aGlzLm9wdGlvbnMuc3RhcnRUaW1lLmdldFRpbWUoKSlcbiAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZS5jYWxsKHRoaXMsIHRoaXMudGltZURpZmYpXG4gIH1cblxuICAvLyBGaW5kIG5leHQgcG9zc2libGUgdGljayB0byBkaXNwbGF5IG1heCBZIHZhbHVlIGFuZCBhZGp1c3QgbWFyZ2luIHRvIHNob3cgYWxsIHRpY2sgbGFiZWxzIGNvbXBsZXRlbHlcbiAgcmVTY2FsZVlBeGlzIChheGlzU3BlY2lmaWVyKSB7XG5cbiAgICBsZXQgdGlja1ZhbEFyclxuICAgIGxldCBkaWZmVmFsXG4gICAgbGV0IHJhbmdlVmFsXG4gICAgbGV0IHlNYXhcbiAgICBsZXQgYXBwbHlZMUF4aXMgPSB0cnVlXG4gICAgbGV0IGFwcGx5WTJBeGlzID0gdHJ1ZVxuXG4gICAgaWYgKGF4aXNTcGVjaWZpZXIgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgYXBwbHlZMkF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICBhcHBseVkxQXhpcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgTWF4IHZhbHVlIGlzIHByb3ZpZGVkIGluIG9wdGlvbnMsIERvbnQgY29tcHV0ZSBuZXh0IHBvc3NpYmxlIHRpY2suXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UgJiYgYXBwbHlZMUF4aXMgJiYgIU51bWJlci5pc0Zpbml0ZSh5TWF4KSkge1xuICAgICAgdGlja1ZhbEFyciA9IHRoaXMueUF4aXMudGlja1ZhbHVlc1xuICAgICAgLy8gSWYgdGlja1ZhbEFyciBjb250YWlucyB2YWx1ZXNcbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gRmluZCBkaWZmZXJlbmNlIG9mIGxhc3QgYW5kIGxhc3QgcHJldmlvdXMgdGljayB2YWx1ZXMgb2YgWSBBeGlzXG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICAvLyBOZXcgcmFuZ2UgaXMgaW5jcmVhc2VkIGJ5IGFib3ZlIGRpZmZlcmVuY2VcbiAgICAgICAgcmFuZ2VWYWwgPSB0aWNrVmFsQXJyWzBdICsgZGlmZlZhbFxuXG4gICAgICAgIC8vIE1vZGlmeSBuZXcgbWF4IHJhbmdlIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZVsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IHRoaXMub3B0aW9ucy55UmFuZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB5TWF4ID0gZ2V0T2JqZWN0KHRoaXMub3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UyICYmIGFwcGx5WTJBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzMi50aWNrVmFsdWVzXG5cbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZGlmZlZhbCA9IHRpY2tWYWxBcnJbMF0gLSB0aWNrVmFsQXJyWzFdXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICB0aGlzLm9wdGlvbnMueVJhbmdlMlsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzMi5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkanVzdHMgWSBheGlzIHdpZHRoIGJhc2VkIG9uIG1heCB0ZXh0IGxlbmd0aCBkaXNwbGF5ZWRcbiAgICBjb25zdCByZVNjYWxlQXhpcyA9IHt9XG4gICAgbGV0IHJlcXVpcmVkV2lkdGggPSAwXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZSkge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXSA9IHt9XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLmNsYXNzID0gJy52Yy1heGlzLWxlZnQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLm1heFRleHQgPSAnJ1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMikge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0uY2xhc3MgPSAnLnZjLWF4aXMtcmlnaHQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGR1bW15IHN2ZyB0byBhZGQgTWF4IGxlbmd0aCB0aWNrIHZhbHVlcyBhbmQgY2hlY2sgaXRzIHJlcXVpcmVkIHdpZHRoIGluIGNoYXJ0XG4gICAgY29uc3QgZHVtbXlHID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzJylcblxuICAgIGZvciAoY29uc3QgYXhpcyBpbiByZVNjYWxlQXhpcykge1xuICAgICAgY29uc3QgdGlja3NBcnIgPSB0aGlzLiRjb250YWluZXIuZmluZCgnc3ZnICcgKyByZVNjYWxlQXhpc1theGlzXS5jbGFzcykuZmluZCgndGV4dCcpXG4gICAgICB0aWNrc0Fyci5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGNvbnN0IHRpY2tIdG1sID0gJCh0aWNrc0FycltpXSlcbiAgICAgICAgICAudGV4dCgpIHx8ICcnXG4gICAgICAgIGlmICh0aWNrSHRtbC5sZW5ndGggPiByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQgPSB0aWNrSHRtbFxuICAgICAgICB9XG4gICAgICB9KVxuXG5cbiAgICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgICAuZGF0YShbcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dF0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChTdHJpbmcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gQ29tcHV0ZSByZXF1aXJlZFdpZHRoIGZvciB0aGUgTWF4IHRleHRcbiAgICAgICAgICByZXF1aXJlZFdpZHRoID0gdGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgICAgICAgICQodGhpcykucmVtb3ZlKCkgLy8gcmVtb3ZlIGl0IGp1c3QgYWZ0ZXIgZGlzcGxheWluZ1xuICAgICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgcmVzcGVjdGl2ZSBtYXJnaW4gdG8gZml0IGluIHRpY2tzIHRleHRcbiAgICAgIHRoaXMubWFyZ2luW2F4aXNdID0gTWF0aC5yb3VuZChyZXF1aXJlZFdpZHRoKSArIGNvbnN0YW50cy5ZX0FYSVNfU1BBQ0VcblxuICAgIH1cbiAgICBkdW1teUcucmVtb3ZlKClcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9ICh0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IHtnZXRPYmplY3QsIHJlZmluZVN0cmluZywgaXNCb29sZWFufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHttYXAsIGVhY2h9IGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNCU1BhcnNlciBleHRlbmRzIENoYXJ0QXhpc1BhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cylcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gIH1cblxuICBkYXRhRXhlY3V0b3IgKCkge1xuICAgIC8vIE9yZGVyIGluIHdoaWNoIHRoZSBEYXRhUHJvY2Vzc29yIEFQSXMgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLmRhdGFPcHRpb25zID0ge31cbiAgICAgIHRoaXMub3B0cy5kYXRhICYmICh0aGlzLmRhdGFPcHRpb25zLmRhdGEgPSB0aGlzLm9wdHMuZGF0YSlcbiAgICAgIHRoaXMub3B0cy5zZXJpZXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMuc2VyaWVzID0gdGhpcy5vcHRzLnNlcmllcylcbiAgICAgIHRoaXMub3B0cy55QXhpcyAmJiAodGhpcy5kYXRhT3B0aW9ucy55QXhpcyA9IHRoaXMub3B0cy55QXhpcylcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdENoYXJ0RGF0YSgpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFhBeGlzSW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFBsb3RJbmZvKCkpXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgIHJldHVybiB0aGlzLmRhdGFPcHRpb25zXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbmNvdW50ZXJlZCB3aGlsZSBiYXJzZXJpZXMgSlNPTiBwYXJzaW5nIDonLCBlcnIpXG4gICAgICB0aGlzLm9wdHMub25FcnJvcihlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiByZWNlaXZlZCAtIEVycm9yIG9uIGJhcnNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi5iYXJzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgY29uc3QgZGF0YSA9IHNlcmllc0RhdGEudmFsdWVzXG4gICAgY29uc3QgdmFsaWRKU09OVHlwZSA9IChjb2x1bW5zLmxlbmd0aCAmJiBkYXRhLmxlbmd0aClcblxuICAgIGlmICghdmFsaWRKU09OVHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEJhciBzZXJpZXMgSlNPTiByZWNlaXZlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IG1hcChzZXJpZXNEYXRhLCAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFlBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBkYXRhT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBjb25zdCBkYXRhID0gZGF0YU9wdGlvbnMuY2hhcnREYXRhXG4gICAgY29uc3QgeUF4aXMgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0JylcbiAgICBjb25zdCB5QXhpczIgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodCcpXG4gICAgbGV0IGtleVxuICAgIGxldCB5UmFuZ2UgPSBudWxsXG4gICAgbGV0IHlSYW5nZTIgPSBudWxsXG5cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpcy5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpcy5tYXgpKSB7XG4gICAgICAgIHlSYW5nZSA9IFt5QXhpcy5taW4sIHlBeGlzLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeUF4aXMyKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWF4KSkge1xuICAgICAgICB5UmFuZ2UyID0gW3lBeGlzMi5taW4sIHlBeGlzMi5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgeVJhbmdlIGlzIG5vdCBzZXQgZnJvbSBncmFwaE9wdGlvbnMsIHRoZW4gZ28gaW5zaWRlXG4gICAgaWYgKCF5UmFuZ2UgfHwgIXlSYW5nZTIpIHtcbiAgICAgIGxldCBmaW5kRWFjaFBsb3RSYW5nZSA9IGZhbHNlXG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1pblZhbCkgfHwgIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1heFZhbCkpIHtcbiAgICAgICAgICBmaW5kRWFjaFBsb3RSYW5nZSA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5kRWFjaFBsb3RSYW5nZSkge1xuXG4gICAgICAgIC8vIFJlc2V0IHJhbmdlIGZvciBlYWNoIHBsb3QgZm9yIGZpbmRpbmcgbWluICwgbWF4XG4gICAgICAgIGVhY2goZWFjaFBsb3RTZXQsIGZ1bmN0aW9uIChlYWNoUGxvdCkge1xuICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IEluZmluaXR5XG4gICAgICAgICAgZWFjaFBsb3QubWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIHZhciB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBlYWNoKGVhY2hQbG90U2V0LCBmdW5jdGlvbiAoZWFjaFBsb3QpIHtcbiAgICAgICAgICAgIHZhbERhdGEgPSBkW2VhY2hQbG90LmRhdGFJbmRleF1cbiAgICAgICAgICAgIGlmICh2YWxEYXRhIDwgZWFjaFBsb3QubWluVmFsKSB7XG4gICAgICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxEYXRhID4gZWFjaFBsb3QubWF4VmFsKSB7XG4gICAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2JhcicpIHtcbiAgICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICB2YXIgbWVtYmVyQXJyID0gcGxvdERhdGEuYmFyT3JkZXJNZW1iZXJzXG4gICAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgIGlmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ubWF4VmFsID4gYWxsTWF4KSB7XG4gICAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdyaWdodCcgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbCA+IGFsbE1heDIpIHtcbiAgICAgICAgICAgICAgICBhbGxNYXgyID0gZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gLy8gRmluZCBtaW4gdmFsdWUganVzdCBieSBjaGVja2luZyBtaW4gdmFsdWUgYW1vbmcgYWxsIHNlcmllcyBkYXRhXG4gICAgICBsZXQgYWxsTWluID0gSW5maW5pdHlcbiAgICAgIGxldCBhbGxNaW4yID0gSW5maW5pdHlcbiAgICAgIGZvciAoa2V5IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzICYmIGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4pIHtcbiAgICAgICAgICBhbGxNaW4gPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzICYmIGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdyaWdodCcgJiYgZWFjaFBsb3RTZXRba2V5XS52aXNpYmxlICYmIGVhY2hQbG90U2V0W2tleV0ubWluVmFsIDwgYWxsTWluMikge1xuICAgICAgICAgIGFsbE1pbjIgPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgbGV0IHlNaW4sIHlNYXhcbiAgICAgIC8vIElmIFlheGlzIHJhbmdlIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBvcHRpb25zLCBPdmVycmlkZSBpdC5cbiAgICAgIGlmIChbYWxsTWluLCBhbGxNYXhdLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKGEpICYmIE51bWJlci5pc0Zpbml0ZShiKVxuICAgICAgfSkpIHtcbiAgICAgICAgeU1pbiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW5cbiAgICAgICAgeU1heCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQubWF4JylcbiAgICAgICAgeU1heCA9IE51bWJlci5pc0Zpbml0ZSh5TWF4KSA/IHlNYXggOiBhbGxNYXhcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UgPSBbeU1pbiwgeU1heF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh5QXhpcykge1xuICAgICAgICAgIHlSYW5nZSA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgaWYgKFthbGxNaW4yLCBhbGxNYXgyXS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5taW4nKVxuICAgICAgICB5TWluID0gTnVtYmVyLmlzRmluaXRlKHlNaW4pID8geU1pbiA6IGFsbE1pbjJcbiAgICAgICAgeU1heCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4MlxuICAgICAgICBpZiAoIXlNYXgpIHtcbiAgICAgICAgICB5TWF4ID0geU1pbiArIDgwIC8vIFNldCBhcyBkZWZhdWx0IDEwMCBpZiByYW5nZSBpcyBbMCwwXVxuICAgICAgICB9XG4gICAgICAgIHlSYW5nZTIgPSBbeU1pbiwgeU1heF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh5QXhpczIpIHtcbiAgICAgICAgICB5UmFuZ2UyID0gWzAsIDgwXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlSYW5nZTIgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeVJhbmdlOiB5UmFuZ2UsXG4gICAgICB5UmFuZ2UyOiB5UmFuZ2UyXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0UGxvdEluZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHJlc0pzb24gPSBkYXRhT3B0aW9ucy5kYXRhXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IHJlc0pzb24uYmFyc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGxldCBpbmQgPSAwXG4gICAgLy8gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHBsb3QgZnVuY3Rpb25zIG5lZWRlZCBmb3IgdGhlIGNoYXJ0XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB7fVxuICAgIC8vIFNldCBvZiBydWxlcyB0aGF0IGNoYXJ0cyBuZWVkcyB0byBiZSBkcmF3IG9uIHRpbWVTZXJpZXNDaGFydFxuICAgIGNvbnN0IHBsb3RJbmZvID0gZGF0YU9wdGlvbnMuc2VyaWVzXG4gICAgbGV0IGtleVxuXG4gICAgY29uc3QgZGF0YUNvbG9yQXJyID0gc2VyaWVzRGF0YS5jb2xvciB8fCBbXVxuICAgIGNvbnN0IHlMZWZ0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdCcpXG4gICAgY29uc3QgeVJpZ2h0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQnKVxuXG4gICAgLy8gR2VuZXJhdGUgZWFjaFBsb3RTZXQgdXNpbmcgY29sdW1uc1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2JhcicpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLmJhck9yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXJpZXM6IHBsb3RJbmZvLCAvLyBuZXdseSB1cGRhdGVkIHNlcmllcyBmcm9tIHVzZXIgb3B0aW9ucyBoYXZpbmcgYWRkaXRpb25hbCBpbmZvIG9mIGVhY2ggc2VyaWVzXG4gICAgICBwbG90U2V0OiBlYWNoUGxvdFNldCwgLy8gSW5mbyBvZiBlYWNoIHBsb3QgbGlrZSBjb2xvciwgbWF4LCBtaW4gZXRjXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2VhY2gsIG1hcH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHtzdGFjaywgcmFuZ2UsIHRyYW5zcG9zZSwgbWF4LCBzZWxlY3QsIGQzRXZlbnR9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBsb3RBeGlzOiBbY29uc3RhbnRzLkRJUl9MRUZULCBjb25zdGFudHMuRElSX0JPVFRPTV0sXG4gICAgICBiYXJEYXRhOiBudWxsLFxuICAgICAgeEF4aXNUYXJnZXQ6IG51bGwsXG4gICAgICBiYXJUeXBlOiBjb25zdGFudHMuR1JPVVBFRF9CQVIsXG4gICAgICBiYXJPcmRlck1lbWJlcnM6IHt9LFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGV2ZW50czoge31cbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIHRoaXMub3B0cy5iYXJPcmRlckluZGV4ID0gdGhpcy5vcHRzLmJhck9yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIHRoaXMub3B0cy5zZXJpZXNMZW5ndGggPSB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleC5sZW5ndGhcbiAgICAvLyBGaW5kIHggYW5kIHkgYXhpcyBiYXNlZCBvbiBwbG90QXhpc1xuICAgIGxldCB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9UT1ApID4gLTEpIHtcbiAgICAgIHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICBsZXQgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfUklHSFQpID4gLTEpIHtcbiAgICAgIHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICB0aGlzLnhTY2FsZSA9IHhcbiAgICB0aGlzLnlTY2FsZSA9IHlcblxuICAgIGNvbnN0IHNyRGF0YSA9IHRoaXMub3B0cy5iYXJEYXRhXG4gICAgdGhpcy5vcHRzLnNlcmllc0FyciA9IFtdXG4gICAgdGhpcy5vcHRzLnhBeGlzQXJyID0gbWFwKHNyRGF0YSwgdGhpcy5vcHRzLnhBeGlzVGFyZ2V0KVxuICAgIGVhY2godGhpcy5vcHRzLmJhck9yZGVySW5kZXgsIGZ1bmN0aW9uIChpbmRleFZhbCkge1xuICAgICAgc2VsZi5vcHRzLnNlcmllc0Fyci5wdXNoKG1hcChzckRhdGEsIGluZGV4VmFsKSlcbiAgICB9KVxuXG4gICAgdGhpcy5vcHRzLmJhclN0YWNrID0gc3RhY2soKS5rZXlzKHJhbmdlKHRoaXMub3B0cy5zZXJpZXNMZW5ndGgpKSh0cmFuc3Bvc2UodGhpcy5vcHRzLnNlcmllc0FycikpXG5cbiAgICB0aGlzLnlNYXhHcm91cGVkID0gbWF4KHRoaXMub3B0cy5zZXJpZXNBcnIsIGZ1bmN0aW9uICh5KSB7XG4gICAgICByZXR1cm4gbWF4KHkpXG4gICAgfSlcbiAgICB0aGlzLnlNYXhTdGFja2VkID0gbWF4KHRoaXMub3B0cy5iYXJTdGFjaywgZnVuY3Rpb24gKHkpIHtcbiAgICAgIHJldHVybiBtYXgoeSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRbMV1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgbmFtZUluZGV4TWFwID0ge31cbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBiYXJWaXNpYmxlT3JkZXIgPSB0aGlzLm9wdHMuYmFyT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlKVxuICAgIH0pXG4gICAgZWFjaChiYXJWaXNpYmxlT3JkZXIsIGZ1bmN0aW9uIChwbG90LCBuYW1lKSB7XG4gICAgICBjb25zdCBwdCA9IGVhY2hQbG90U2V0W3Bsb3QubmFtZV1cbiAgICAgIG5hbWVJbmRleE1hcFtwdC5kYXRhSW5kZXggLSAxXSA9IHBsb3QubmFtZVxuICAgIH0pXG5cblxuICAgIGNvbnN0IGNsaXBFbGVtZW50ID0gdGhpcy5vcHRzLmNoYXJ0LiRjb250YWluZXIuZmluZCgnc3ZnIGNsaXBQYXRoJylcbiAgICB0aGlzLmJhclNlcmllcyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtYmFyLXNlcmllcycpXG4gICAgICAuZGF0YSh0aGlzLm9wdHMuYmFyU3RhY2spXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBFbGVtZW50LmF0dHIoJ2lkJykgKyAnKScpIC8vIGRpc3BsYXkgZ3JhcGhab25lIG9mIHNhbWUgc2l6ZSBhcyBjbGlwLXBhdGggZGVmaW5lZFxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJhci1zZXJpZXMnKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbbmFtZUluZGV4TWFwW2ldXS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzZXJpZXNOYW1lJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVJbmRleE1hcFtpXVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzZXJpZXNJbmRleCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBpXG4gICAgICB9KVxuXG5cbiAgICB0aGlzLmJhcnMgPSB0aGlzLmJhclNlcmllcy5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRcbiAgICAgIH0pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5vcHRzLnhBeGlzQXJyW2ldKVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgY29uc3Qgc3JOYW1lID0gc2VsZWN0KHRoaXMucGFyZW50Tm9kZSkuYXR0cignc2VyaWVzTmFtZScpXG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtzck5hbWVdLmNvbG9yQXJyICYmIGVhY2hQbG90U2V0W3NyTmFtZV0uY29sb3JBcnJbaV1cbiAgICAgIH0pXG4gICAgICAuYXR0cigneScsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHNlbGYub3B0cy5jaGFydC50b29sdGlwICYmIHNlbGYub3B0cy5jaGFydC50b29sdGlwLmhvdmVyKGQzRXZlbnQucGFnZVgsIGQzRXZlbnQucGFnZVkgLSA1MCwge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHZhbDogc2VsZi5vcHRzLmJhckRhdGFbaV0sXG4gICAgICAgICAgICBpbmQ6IGlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHNlbGYub3B0cy5jaGFydC50b29sdGlwICYmIHNlbGYub3B0cy5jaGFydC50b29sdGlwLmhpZGUoKVxuICAgICAgfSlcblxuXG4gICAgZWFjaCh0aGlzLm9wdHMuZXZlbnRzLCBmdW5jdGlvbiAoZm4sIG5hbWUpIHtcbiAgICAgIHNlbGYuYmFycy5vbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZuLmFwcGx5KHNlbGYub3B0cy5jaGFydCwgYXJndW1lbnRzKVxuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cblxuICAvLyBVcGRhdGUgaGFwcGVucyB3aGVuIHRoZSBjaGFydCBpcyByZXNpemVkXG4gIHVwZGF0ZSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBpZiAodGhpcy5vcHRzLmJhclR5cGUgPT09IGNvbnN0YW50cy5TVEFDS0VEX0JBUikge1xuICAgICAgdGhpcy5iYXJzXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGRbMF0pIC0gc2VsZi55U2NhbGUoZFsxXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhcnNcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGNvbnN0IHhWYWwgPSBzZWxmLnhTY2FsZShzZWxmLm9wdHMueEF4aXNBcnJbaV0pICsgc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLm9wdHMuc2VyaWVzTGVuZ3RoICogc2VsZWN0KHRoaXMucGFyZW50Tm9kZSkuYXR0cignc2VyaWVzSW5kZXgnKVxuICAgICAgICAgIHJldHVybiB4VmFsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5vcHRzLnNlcmllc0xlbmd0aClcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkWzFdIC0gZFswXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKDApIC0gc2VsZi55U2NhbGUoZFsxXSAtIGRbMF0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5iYXJTZXJpZXMuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlZHJhdyBpcyBjYWxsZWQgd2hlbiBzZXJpZXMgaXMgdG9nZ2xlZCBmcm9tIExlZ2VuZHNcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgYmFyT3JkZXIgYXJyIGJhc2VkIG9uIHZpc2libGVTZXJpZXNcbiAgICB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleCA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgYmFyIHNlcmllc1xuICAgIHRoaXMuYmFyU2VyaWVzICYmIHRoaXMuYmFyU2VyaWVzLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBiYXJPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmJhclNlcmllcyAmJiB0aGlzLmJhclNlcmllcy5yZW1vdmUoKVxuICAgIHRoaXMuYmFycyA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufSIsImltcG9ydCB7aXNBcnJheX0gZnJvbSAnQC91dGlscydcbmltcG9ydCBCYXIgZnJvbSAnQC9zZXJpZXMvQmFyJ1xuaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhclNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGEgLy8gQWNjZXB0IGVpdGhlciB0aW1lc2VyaWVzIG9yIHBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzXG5cbiAgICAvLyBDcmVhdGUgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIGlucHV0IG9wdGlvbnMgYW5kIGVhY2ggcGxvdCBpbmZvXG4gICAgaXNBcnJheShwbG90SW5mby5iYXIpICYmIHBsb3RJbmZvLmJhci5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IEJhcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgYmFyT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnMsXG4gICAgICAgIGJhckRhdGE6IGRhdGFcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7aXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNUb29sdGlwIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgLy8gUHJvdmlkZSBiYXNpYyBmb3JtYXR0ZXIgdG8gZGlzcGxheSBob3ZlciBkYXRhXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMub3B0cy5mb3JtYXQpKSB7XG4gICAgICB0aGlzLm9wdHMuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4gVG9vbFRpcCBUZXh0IDogPC9zcGFuPjxici8+PHNwYW4+JHtKU09OLnN0cmluZ2lmeShkKX08L3NwYW4+YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMuJHRvb2xUaXBEaXYgPSAkKCc8ZGl2PjwvZGl2PicpLmFkZENsYXNzKCd2Yy10b29sdGlwLWRpc3BsYXkgJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgdGhpcy5vcHRzLmNoYXJ0LiRjb250YWluZXJcbiAgICAgIC5hcHBlbmQodGhpcy4kdG9vbFRpcERpdilcbiAgfVxuXG4gIGhvdmVyICh4LCB5LCBkaXNwbGF5RGF0YSwgZXhjbHVkZVRvb2xUaXBEaXYpIHtcbiAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IHNlcmllcyAtLSBiYXIgLyBwaWVcbiAgICB2YXIgcm9vdFBvcyA9IHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyLm9mZnNldCgpXG4gICAgdmFyIHhwb3MgPSBNYXRoLnJvdW5kKHggLSByb290UG9zLmxlZnQpXG4gICAgdmFyIHlwb3MgPSBNYXRoLnJvdW5kKHkgLSByb290UG9zLnRvcClcblxuICAgIGlmICghZXhjbHVkZVRvb2xUaXBEaXYpIHtcbiAgICAgIC8vIENvbnNpZGVyIHRvb2xUaXAgb2Zmc2V0IGZvciBwb3NpdGlvblxuICAgICAgeHBvcyA9IE1hdGgucm91bmQoeHBvcyAtICh0aGlzLiR0b29sVGlwRGl2LndpZHRoKCkgLyAyKSlcbiAgICAgIHlwb3MgPSBNYXRoLnJvdW5kKHlwb3MgLSAodGhpcy4kdG9vbFRpcERpdi5oZWlnaHQoKSAvIDIpKVxuICAgIH1cblxuICAgIHRoaXMuJHRvb2xUaXBEaXZcbiAgICAgIC5jc3Moe1xuICAgICAgICBsZWZ0OiB4cG9zICsgJ3B4JyxcbiAgICAgICAgdG9wOiB5cG9zICsgJ3B4JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgIH0pXG4gICAgICAuaHRtbCh0aGlzLm9wdHMuZm9ybWF0LmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBkaXNwbGF5RGF0YS5kYXRhKSkgLy8gVXNlZCBmb3JtYXQuY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1biBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuXG4gICAgaWYgKHNob3dGbGFnKSB7XG4gICAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJHRvb2xUaXBEaXYgJiYgdGhpcy4kdG9vbFRpcERpdi5oaWRlKClcbiAgICB9XG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuJHRvb2xUaXBEaXYgJiYgdGhpcy4kdG9vbFRpcERpdi5yZW1vdmUoKVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==