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
/* harmony import */ var _zoom_indexTouch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/zoom/indexTouch */ "./zoom/indexTouch.js");
/* harmony import */ var _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/legend/TimeSeriesLegend */ "./legend/TimeSeriesLegend.js");
/* harmony import */ var _series_TimeSeries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/series/TimeSeries */ "./series/TimeSeries.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");



















// import Zoom from '@/zoom'
// import Zoom from '@/zoom/PinchIndex'





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
        this.zoomBrush = new _zoom_indexTouch__WEBPACK_IMPORTED_MODULE_19__["default"]({
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

      // if (!this.opts.chart.options.zoom.visible) {
      //
      // }
      // x-Zoom for chart doest not exist, Add rect overlay for brushXDiv
      this.mouseBrush.append('rect').attr('class', 'overlay').attr('x', 0).attr('y', 0).attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight);
    }
  }, {
    key: 'update',
    value: function update() {
      this.mouseBrush.attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight).attr('transform', 'translate(' + this.opts.chart.margin.left + ',' + this.opts.chart.margin.top + ')');
      this.mouseBrush.select('rect.overlay').attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight);
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
          eventName = 'dblclick';
        }
        mouseHandler.mouseBrush.on(eventName, mouseEvt).on('mouseout', function () {
          self.hide();
        }).on('mousedown', function () {
          self.hide();
        });

        mouseHandler.mouseBrush.select('rect.overlay').on('mousedown', function () {
          self.hide();
        });

        if (_this2.opts.chart.options.chart.isTouchScreen) {
          // In case of touch screen, simulate tooltip hover for first time to auto compute elementOffset
          _this2.hover(0, 0, dataSet[0]);
          setTimeout(function () {
            self.hide();
          }, 10);
        }
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

/***/ "./zoom/indexTouch.js":
/*!****************************!*\
  !*** ./zoom/indexTouch.js ***!
  \****************************/
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
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-array */ "../node_modules/d3-array/src/index.js");












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
    key: 'getClosestXAxisData',
    value: function getClosestXAxisData(xVal, dataSet) {
      var dateIndex = this.opts.chart.options.timeInfo.dataIndex;
      // Find nearest existing date among array of sorted date
      var bisectDate = Object(d3_array__WEBPACK_IMPORTED_MODULE_10__["bisector"])(function (d) {
        return d[dateIndex];
      }).left;

      // Do binary search of data set from 2nd data set to end
      var found = bisectDate(dataSet, xVal, 1);

      var dPrev = dataSet[found - 1];
      // get before find dataSet

      var dFound = dataSet[found] || dPrev; // get find dataSet

      return dFound;
    }
  }, {
    key: 'updatebrushXSelection',
    value: function updatebrushXSelection(startPos, endPos) {
      this.brushXDiv.attr('x', startPos).attr('width', endPos - startPos);
    }
  }, {
    key: 'draw',
    value: function draw() {
      var self = this;
      var xScale = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts, 'chart.xAxis.scale') || false;
      var yScaleLeft = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts, 'chart.yAxis.scale') || false;
      var yScaleRight = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts, 'chart.yAxis2.scale') || false;
      var dataSet = this.opts.chart.options.chartData;
      var brushOverlay = null;
      if (xScale) {

        // Create x axis brush for Zoom operation
        this.zoomX = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["zoom"])().scaleExtent([0, dataSet.length]).translateExtent([[this.opts.chart.margin.left, this.opts.chart.margin.top], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]).extent([[this.opts.chart.margin.left, this.opts.chart.margin.top], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]).touchable(function () {
          return true;
        });
        // .on('zoom', (...args) => {
        //   var transform = zoomTransform(this)
        //   // console.log('Arg', args)
        //   console.log('tran', transform.toString())
        //   const d0 = d3Touches && d3Event.transform.rescaleX(xScale).domain()
        //   const d1 = d0 && d0.map(Math.round)
        //   console.log('Zoom Transform Start', new Date(d1[0]))
        //   console.log('Zoom Transform End', new Date(d1[1]))
        //
        //   // callZoom(d1)
        // })
        // this.brushX = brushX()
        //   .extent([
        //     [0, 0],
        //     [this.opts.chart.chartWidth, this.opts.chart.chartHeight]
        //   ])
        // .touchable(true)

        this.zoomXDiv = this.opts.chart.svg
        // this.zoomXDiv = this.opts.chart.graphZone
        // this.zoomXDiv = this.opts.chart.mouseHandler.mouseBrush
        .call(this.zoomX);

        // Use the same mouseBrush for both xBrush and tooltip
        // this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush
        //   .call(this.brushX)

        // brushOverlay = this.brushXDiv.selectAll('rect.overlay')

        // this.brushX = brushX()
        //   .extent([
        //     [0, 0],
        //     [this.opts.chart.chartWidth, this.opts.chart.chartHeight]
        //   ])


        // Use the same mouseBrush for both xBrush and tooltip
        this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush.append('rect').attr('class', 'selection').attr('cursor', 'move').style('opacity', '0.3').attr('x', 0).attr('y', 0).attr('width', 0).attr('height', this.opts.chart.chartHeight);

        var isGesture = false;
        var startPos = 0;
        var endPos = 0;
        this.zoomXDiv.style('touch-action', 'pan-y').on('touchstart.zoom', function () {
          var th = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Touches"])(this);
          // d3Event.preventDefault()
          isGesture = _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].touches && _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].touches.length === 2;
          if (isGesture && th.length) {
            var xPos = th[0][0] - self.opts.chart.margin.left;
            startPos = xPos;
            endPos = xPos;
            console.log('Start Select');
            self.updatebrushXSelection(startPos, endPos);
          }
        }, true).on('touchmove.zoom', function () {
          var th = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Touches"])(this);
          // d3Event.preventDefault()
          console.log('move', th);
          window.mv = th;
          if (isGesture && th.length) {
            var xPos1 = th[0][0] - self.opts.chart.margin.left;
            var xPos2 = th[1][0] - self.opts.chart.margin.left;
            var xMin = xPos1;
            var xMax = xPos2;
            if (xPos1 > xPos2) {
              xMin = xPos2;
              xMax = xPos1;
            }

            // timeArr.push(time)
            if (startPos > xMin) {
              // startPos = xMin
            }
            startPos = xMin;
            if (endPos < xMax) {
              // endPos = xMax
            }
            endPos = xMax;
            console.log('Update Select');
            self.updatebrushXSelection(startPos, endPos);
          }
        }, true).on('touchend.zoom', function () {
          var th = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Touches"])(this);
          // d3Event.preventDefault()
          console.log('end', th);
          if (isGesture && th.length) {
            var xPos = th[0][0] - self.opts.chart.margin.left;
            if (startPos > xPos) {
              startPos = xPos;
            }
            if (endPos < xPos) {
              endPos = xPos;
            }

            var startVal = xScale.invert(startPos);
            var startDt = Math.round(startVal);

            var endVal = xScale.invert(endPos);
            var endDt = Math.round(endVal);

            console.log('Final Select');
            self.updatebrushXSelection(startPos, endPos);
            console.log(self.getClosestXAxisData(startDt, dataSet));
            console.log(self.getClosestXAxisData(endDt, dataSet));
            setTimeout(function () {
              self.updatebrushXSelection(0, 0);
            }, 4000);
          }
          // isGesture && console.log('Start: ' + st + '  End: ' + ed)
          // timeArr = []
          startPos = 0;
          endPos = 0;
          isGesture = false;
        }, true);
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
      // if (this.brushX) {
      //   this.brushX.extent([
      //     [0, 0],
      //     [this.opts.chart.chartWidth, this.opts.chart.chartHeight]
      //   ])
      //
      //   this.brushXDiv.call(this.brushX)
      // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL21vdXNlLWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvTGluZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TdGFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvVGltZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vdmMvLi96b29tL2luZGV4VG91Y2guanMiXSwibmFtZXMiOlsiQXhpcyIsIm9wdHMiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsIm9yaWVudCIsImxhYmVsIiwidW5pdCIsInJhbmdlU2NhbGUiLCJkb21haW5TY2FsZSIsInNjYWxlVHlwZSIsImF4aXNDbGFtcCIsInRpY2tOdW1iZXIiLCJyb3RhdGVUZXh0IiwidGV4dExpbWl0IiwidGlja0Zvcm1hdHRlciIsInNob3dHcmlkTGluZXMiLCJ0aWNrUGFkZGluZyIsImNvbnN0YW50cyIsIlRJQ0tfUEFERElORyIsInNjYWxlUGFkZGluZyIsIlNDQUxFX1BBRERJTkciLCJ2aXNpYmxlIiwiYXhpcyIsInNjYWxlIiwic2NhbGVCYW5kIiwic2NhbGVMaW5lYXIiLCJVTklUU19USU1FIiwic2NhbGVUaW1lIiwiRElSX0JPVFRPTSIsImF4aXNCb3R0b20iLCJESVJfVE9QIiwiYXhpc1RvcCIsInRpY2tTaXplSW5uZXIiLCJjaGFydCIsImNoYXJ0SGVpZ2h0IiwidGlja1ZhbHVlcyIsInNlbGYiLCJESVJfTEVGVCIsImF4aXNMZWZ0IiwiRElSX1JJR0hUIiwiYXhpc1JpZ2h0IiwiY2hhcnRXaWR0aCIsImlzRnVuY3Rpb24iLCJleHRlcm5hbEZvcm1hdHRlciIsInZhbCIsInVuc2hpZnQiLCJ1cGRhdGUiLCJ0cmFuc2Zvcm1BdHRyIiwiYXhpc1RhZyIsImdyYXBoWm9uZSIsImFwcGVuZCIsImF0dHIiLCJ0aWNrRm9ybWF0IiwiYXhpc0xhYmVsVGFnIiwidGV4dCIsImNsYXNzZWQiLCJ4VHJhbnMiLCJ5VHJhbnMiLCJyb3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJYX0FYSVNfTEFCRUxfWSIsIm1hcmdpbiIsImxlZnQiLCJCUlVTSFlfQlVGRkVSIiwicmlnaHQiLCJsZW5ndGgiLCJwYWRkaW5nIiwiY2xhbXAiLCJyYW5nZSIsImRvbWFpbiIsImlzTnVtYmVyIiwidGlja1ZhbCIsIm5ld1RpY2siLCJkYXlMZW5ndGgiLCJtaW51dGVMZW5ndGgiLCJ0aWNrcyIsImNhbGwiLCJsaW1pdFRleHQiLCJ0aWNrRm10IiwiZW1wdHlGbiIsInNlbGVjdEFsbCIsInN0eWxlIiwiZCIsImkiLCJ0cnVuY2F0ZVRleHQiLCJzaG93RmxhZyIsInJlbW92ZSIsIkNoYXJ0Q29tcG9uZW50IiwiVGltZVNlcmllc0NoYXJ0IiwiY29udGFpbmVyIiwic3RhcnRUaW1lIiwiRGF0ZSIsImRhdGFQYXJzZXIiLCJCYXNpY1RTUGFyc2VyIiwiQ2hhcnRBeGlzUGFyc2VyIiwiRXJyb3IiLCJpc09iamVjdCIsIm9wdGlvbnMiLCJkYXRhRXhlY3V0b3IiLCJhZGREZWZhdWx0VFNPcHRpb25zIiwiY2hhcnRJbml0aWxpemUiLCJkcmF3IiwiYXhpc09wdGlvbnMiLCJ5UmFuZ2UiLCJ5UmFuZ2UyIiwidGltZUluZm8iLCJnZXRPYmplY3QiLCJ5QXhpcyIsImNoYXJ0Q29tcG9uZW50c0FyciIsInB1c2giLCJ5QXhpczIiLCJ0aW1lUmFuZ2UiLCJ4QXhpcyIsInRvb2x0aXBPcHRzIiwidG9vbHRpcCIsIlRvb2x0aXAiLCJ6b29tT3B0cyIsIm1vdXNlSGFuZGxlciIsIk1vdXNlSGFuZGxlciIsInpvb20iLCJ6b29tQnJ1c2giLCJab29tIiwib25ab29tIiwib25YWm9vbSIsIm9uWTFab29tIiwib25ZMlpvb20iLCJzZXJpZXMiLCJUaW1lU2VyaWVzIiwibGVnZW5kIiwibGVnZW5kcyIsIlRpbWVTZXJpZXNMZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJkaXNhYmxlU2VyaWVzVG9nZ2xlIiwib25MZWdlbmRDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYWZ0ZXJEcmF3IiwicmVTY2FsZVlBeGlzIiwiY2hhcnRSZXNwb25zaXZlIiwidHJpZ2dlck1vdXNlQWN0aW9uIiwidGltZURpZmYiLCJnZXRUaW1lIiwib25Db21wbGV0ZSIsImF4aXNTcGVjaWZpZXIiLCJ0aWNrVmFsQXJyIiwiZGlmZlZhbCIsInJhbmdlVmFsIiwieU1heCIsImFwcGx5WTFBeGlzIiwiYXBwbHlZMkF4aXMiLCJtb2RpZnlBeGlzUHJvcHMiLCJyZVNjYWxlQXhpcyIsInJlcXVpcmVkV2lkdGgiLCJjbGFzcyIsIm1heFRleHQiLCJkdW1teUciLCJzdmciLCJ0aWNrc0FyciIsInNlbGVjdCIsImVhY2giLCJ0aWNrSHRtbCIsImRhdGEiLCJlbnRlciIsIlN0cmluZyIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsInJvdW5kIiwiWV9BWElTX1NQQUNFIiwiY2hhcnRGdWxsU3BhY2UiLCJ3aWR0aCIsIkNoYXJ0IiwiZGF0YU9wdGlvbnMiLCJjb25zdHJ1Y3RDaGFydERhdGEiLCJjb25zdHJ1Y3RYQXhpc0luZm8iLCJjb25zdHJ1Y3RQbG90SW5mbyIsImNvbnN0cnVjdFlBeGlzSW5mbyIsImVyciIsIm9uRXJyb3IiLCJyZXNKc29uIiwic2VyaWVzRGF0YSIsInRpbWVzZXJpZXMiLCJjb2x1bW5zIiwidmFsdWVzIiwidmFsaWRKU09OVHlwZSIsInRpbWVTdGFtcEluZGV4IiwiZmlyc3RUaW1lIiwiaXNEYXRlIiwic3RhcnQiLCJmb3JFYWNoIiwiZ2V0RGF0ZUZyb21FcG9jIiwiY2hhcnREYXRhIiwiZGF0YUluZGV4IiwiZWFjaFBsb3RTZXQiLCJwbG90U2V0IiwicGxvdEluZm8iLCJmaW5kRWFjaFBsb3RSYW5nZSIsImtleSIsIm1pbiIsIm1heCIsIm1pblZhbCIsIm1heFZhbCIsInN0YWNrIiwicGxvdCIsImVhY2hQbG90IiwiSW5maW5pdHkiLCJwbG90RGF0YSIsInZhbHVlUmFuZ2UiLCJ2YWxEYXRhIiwibWVtYmVyQXJyIiwic3RhY2tPcmRlck1lbWJlcnMiLCJzdW0iLCJtZW1iZXIiLCJuYW1lIiwiYWxsTWF4IiwiYWxsTWF4MiIsInBsb3RBeGlzIiwiYWxsTWluIiwiYWxsTWluMiIsInlNaW4iLCJyZWR1Y2UiLCJhIiwiYiIsImluZCIsImRhdGFDb2xvckFyciIsImNvbG9yIiwieUxlZnQiLCJ5UmlnaHQiLCJyZWZpbmVOYW1lIiwicmVmaW5lU3RyaW5nIiwiaXNCb29sZWFuIiwiYmFyT3JkZXJNZW1iZXJzIiwicmVnaXN0ZXJGbiIsIm1vdXNlQnJ1c2giLCJ0b3AiLCJpc1RvdWNoU2NyZWVuIiwiY2FsbGJhY2siLCJmdW4iLCJMaW5lIiwibGluZURhdGEiLCJ5QXhpc1RhcmdldCIsInhBeGlzVGFyZ2V0IiwieCIsImluZGV4T2YiLCJ5IiwibGluZSIsImRlZmluZWQiLCJsaW5lVGFnIiwiY2xpcEVsZW1lbnQiLCJsaW5lV2lkdGgiLCJzZXJpZXNOYW1lIiwiU3RhY2tBcmVhIiwic3RhY2tEYXRhIiwic3RhY2tPcmRlckluZGV4IiwiZmlsdGVyIiwiZWxlIiwibWFwIiwiZDNTdGFjayIsImFyZWEiLCJ5MCIsInkxIiwia2V5cyIsIm9yZGVyIiwic3RhY2tPcmRlck5vbmUiLCJvZmZzZXQiLCJzdGFja09mZnNldE5vbmUiLCJzdGFja1Zpc2libGVPcmRlciIsInN0YWNrTGF5ZXIiLCJzdGFja01lbWJlciIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiU2VyaWVzIiwiVGltZVNlcmllc1Rvb2x0aXAiLCJjcm9zc0hhaXJzIiwiZW5hYmxlIiwiZm9ybWF0IiwidG9vbFRpcERpdiIsIlRPT0xUSVBfVE9QX0JVRkZFUiIsInJlZ2lzdGVyIiwieFNjYWxlIiwiZGF0ZUluZGV4IiwiZGF0YVNldCIsImJpc2VjdERhdGUiLCJiaXNlY3RvciIsIm1vdXNlRXZ0IiwieE1vdXNlIiwiZDNNb3VzZSIsInlNb3VzZSIsInhWYWwiLCJpbnZlcnQiLCJmb3VuZCIsImRCZWZvcmUiLCJkUHJldiIsImRGb3VuZCIsInRvb2xUaXBEYXRhIiwiZGF0YVBhcnNlTGVuIiwidmlzaWJsZURhdGFJbmRleCIsInBsIiwibXVsdGlBcnJNYXAiLCJkU2V0IiwiaW5kZXgiLCJzb3J0IiwibWF4SW5kIiwibXAiLCJhcnJTZXQiLCJkYXRlSW50UmFuZ2UiLCJhYnMiLCJob3ZlciIsImV2ZW50TmFtZSIsIm9uIiwiaGlkZSIsInNldFRpbWVvdXQiLCJ4UG9zIiwieVBvcyIsImRpc3BsYXlEYXRhIiwic2hvd0hpZGUiLCJwZXJjZW50YWdlRGlmZiIsImJveCIsImVsZW1lbnRPZmZzZXQiLCJyb290UG9zIiwiaGVpZ2h0IiwiaHRtbCIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiYnJ1c2hYRGl2IiwieVNjYWxlTGVmdCIsInlTY2FsZVJpZ2h0IiwiYnJ1c2hPdmVybGF5Iiwiem9vbVgiLCJzY2FsZUV4dGVudCIsInRyYW5zbGF0ZUV4dGVudCIsImV4dGVudCIsInRvdWNoYWJsZSIsInpvb21YRGl2IiwiaXNHZXN0dXJlIiwidGgiLCJkM1RvdWNoZXMiLCJkM0V2ZW50IiwidG91Y2hlcyIsInVwZGF0ZWJydXNoWFNlbGVjdGlvbiIsIndpbmRvdyIsIm12IiwieFBvczEiLCJ4UG9zMiIsInhNaW4iLCJ4TWF4Iiwic3RhcnRWYWwiLCJzdGFydER0IiwiZW5kVmFsIiwiZW5kRHQiLCJnZXRDbG9zZXN0WEF4aXNEYXRhIiwiYnJ1c2hZTGVmdCIsImJydXNoWSIsImJydXNoWUxlZnREaXYiLCJzZWxlY3Rpb24iLCJtb3ZlIiwiZDAiLCJkMSIsImJydXNoWVJpZ2h0IiwiYnJ1c2hZUmlnaHREaXYiLCJicnVzaFgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBOztJQUVxQkEsSTs7O0FBQ25CLGdCQUFhQyxJQUFiLEVBQW1C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LE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDLENBQUMrQixRQUExQyxDQUF2QjtBQUNBLFdBQUtyRixJQUFMLENBQVVvQixPQUFWLEdBQW9CaUUsUUFBcEI7QUFDRDs7OzZCQUVTO0FBQ1IsVUFBSSxLQUFLNk8sU0FBVCxFQUFvQjtBQUNsQixhQUFLQSxTQUFMLENBQWV0UCxJQUFmLENBQW9CLEtBQUswUixNQUFMLENBQVlMLElBQWhDLEVBQXNDLElBQXRDO0FBQ0EsYUFBSy9CLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlNU8sTUFBZixFQUFsQjtBQUNEO0FBQ0QsVUFBSSxLQUFLeVEsYUFBVCxFQUF3QjtBQUN0QixhQUFLQSxhQUFMLENBQW1CblIsSUFBbkIsQ0FBd0IsS0FBS2lSLFVBQUwsQ0FBZ0JJLElBQXhDLEVBQThDLElBQTlDO0FBQ0EsYUFBS0YsYUFBTCxDQUFtQnpRLE1BQW5CO0FBQ0Q7QUFDRCxVQUFJLEtBQUsrUSxjQUFULEVBQXlCO0FBQ3ZCLGFBQUtBLGNBQUwsQ0FBb0J6UixJQUFwQixDQUF5QixLQUFLd1IsV0FBTCxDQUFpQkgsSUFBMUMsRUFBZ0QsSUFBaEQ7QUFDQSxhQUFLSSxjQUFMLENBQW9CL1EsTUFBcEI7QUFDRDtBQUNELFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBL1QrQnVGLDhEOztBQUFia0MsbUUiLCJmaWxlIjoidGltZXNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7XG4gIGF4aXNCb3R0b20sIGF4aXNUb3AsIGF4aXNMZWZ0LCBheGlzUmlnaHQsXG4gIHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIHNjYWxlVGltZVxufSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtlbXB0eUZuLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgdHJ1bmNhdGVUZXh0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICBsYWJlbDogJycsXG4gICAgICB1bml0OiAnJyxcbiAgICAgIHJhbmdlU2NhbGU6IFswLCAxMDAwXSxcbiAgICAgIGRvbWFpblNjYWxlOiBbMCwgMTAwXSxcbiAgICAgIHNjYWxlVHlwZTogJycsXG4gICAgICBheGlzQ2xhbXA6IHRydWUsXG4gICAgICB0aWNrTnVtYmVyOiBudWxsLFxuICAgICAgcm90YXRlVGV4dDogZmFsc2UsXG4gICAgICB0ZXh0TGltaXQ6IDgsXG4gICAgICB0aWNrRm9ybWF0dGVyOiBmYWxzZSwgLy8gVXNlIGQzIHRpY2tGb3JtYXR0ZXJcbiAgICAgIHNob3dHcmlkTGluZXM6IGZhbHNlLFxuICAgICAgdGlja1BhZGRpbmc6IGNvbnN0YW50cy5USUNLX1BBRERJTkcsXG4gICAgICBzY2FsZVBhZGRpbmc6IGNvbnN0YW50cy5TQ0FMRV9QQURESU5HLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgLy8gQ3JlYXRlIEF4aXMgYW5kIFNjYWxlIGJhc2VkIG9uIGlucHV0IG9wdGlvbnNcbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUJhbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgaWYgKHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzQm90dG9tKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1RvcCgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpKVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gSG9sZHMgYWxsIHRpY2sgdmFsdWVzIHRoYXQgYXhpcyBzaG93c1xuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzTGVmdCgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1JpZ2h0KClcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoMClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpKSB7XG4gICAgICAgIC8vIElmIGV4dGVybmFsIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgbW9kaWZ5IGZvcm1hdHRlciB0byBwb3B1bGF0ZSB0aWNrVmFsdWVzXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRm9ybWF0dGVyID0gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXJcbiAgICAgICAgdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgc2VsZi50aWNrVmFsdWVzLnVuc2hpZnQodmFsKVxuICAgICAgICAgIHJldHVybiBleHRlcm5hbEZvcm1hdHRlcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnRpY2tQYWRkaW5nID4gMCkge1xuICAgICAgdGhpcy5heGlzLnRpY2tQYWRkaW5nKHRoaXMub3B0cy50aWNrUGFkZGluZylcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBeGlzUHJvcHMgKG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBvcHRzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgwLCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0fSlgXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGB2Yy1heGlzIHZjLWF4aXMtJHt0aGlzLm9wdHMub3JpZW50fSB2Yy1heGlzLSR7dGhpcy5vcHRzLmNsYXNzTmFtZX1gKVxuXG5cbiAgICAvLyBJZiBubyBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIGF4aXMgdXNlcyBkMyBkZWZhdWx0IGZvcm1hdHRlclxuICAgIGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpICYmIHRoaXMuYXhpcy50aWNrRm9ybWF0KHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKVxuXG4gICAgLy8gQWRkIExhYmVsIHRvIEF4aXNcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnID0gdGhpcy5heGlzVGFnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzLWxhYmVsJylcbiAgICAgICAgLnRleHQodGhpcy5vcHRzLmxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIC8vIElGIG5vdCB2aXNpYmxlLCBEb250IHNob3cgdGhlIGF4aXMsIGJ1dCBzdGlsbCBzY2FsZSBhbmQgcGxvdCBvbiBncmFwaFpvbmUsIHNvIHRoYXQgYWxsIHNlcmllcyBjYW4gYmUgcGxvdHRlZFxuICAgICF0aGlzLm9wdHMudmlzaWJsZSAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgZ3JhcGggQXhpcyBiYXNlZCBvbiBuZXcgd2lkdGggYW5kIG1vZGlmeSByYW5nZSwgZG9tYWluIGFuZCB0aWNrc1xuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy5vcHRzLnJhbmdlU2NhbGUgPSBbMCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhdXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG5cbiAgICAvLyBQb3NpdGlvbiBsYWJlbCwgc2NhbGUsIHRpY2tzLCBheGlzIGJhc2VkIG9uIGNoYXJ0IHdpZHRoXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgbGV0IHhUcmFucyA9IDBcbiAgICAgIGxldCB5VHJhbnMgPSAwXG4gICAgICBsZXQgcm90YXRlID0gMFxuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHhUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyAyKVxuICAgICAgICB5VHJhbnMgPSBjb25zdGFudHMuWF9BWElTX0xBQkVMX1lcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUIHx8IHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICAgIHhUcmFucyA9IC0odGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KSArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gMjcwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeFRyYW5zID0gdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gOTBcbiAgICAgICAgfVxuICAgICAgICB5VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt4VHJhbnN9LCR7eVRyYW5zfSkgcm90YXRlKCR7cm90YXRlfSlgKVxuICAgIH1cblxuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBsZXQgZG9tYWluU2NhbGUgPSBbdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdLCB0aGlzLm9wdHMuZG9tYWluU2NhbGVbdGhpcy5vcHRzLmRvbWFpblNjYWxlLmxlbmd0aCAtIDFdXVxuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgZG9tYWluU2NhbGUgPSB0aGlzLm9wdHMuZG9tYWluU2NhbGVcbiAgICAgIHRoaXMuc2NhbGVcbiAgICAgICAgLnBhZGRpbmcodGhpcy5vcHRzLnNjYWxlUGFkZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRzLmF4aXNDbGFtcCAmJiB0aGlzLnNjYWxlLmNsYW1wKCkgLy8gQ2xhbXBzIG91dHNpZGUgcmFuZ2UgdmFsdWUgd2l0aGluIHNwZWN0aWZlZCByYW5nZSBhbmQgZG9tYWluXG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZS5yYW5nZSh0aGlzLm9wdHMucmFuZ2VTY2FsZSlcbiAgICAgIC5kb21haW4oZG9tYWluU2NhbGUpXG5cbiAgICB0aGlzLmF4aXMuc2NhbGUodGhpcy5zY2FsZSlcblxuICAgIGlmIChpc051bWJlcih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIGxldCB0aWNrVmFsID0gdGhpcy5vcHRzLnRpY2tOdW1iZXJcbiAgICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4JyAmJiB0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgLy8gbW9kaWZ5IHh0aWNrIHRvIGRpc3BsYXkgbGVzcyB0aWNrcyBvbiBsb3dlciBjaGFydCB3aWR0aCBvciBoYXMgbGVzcyBkYXlzXG4gICAgICAgIGNvbnN0IG5ld1RpY2sgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gNjApXG4gICAgICAgIGNvbnN0IGRheUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpICsgMVxuICAgICAgICBpZiAoZGF5TGVuZ3RoID4gMiAmJiBkYXlMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IGRheUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWludXRlTGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDEwMDApKVxuICAgICAgICBpZiAobWludXRlTGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBtaW51dGVMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdUaWNrIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBuZXdUaWNrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5heGlzLnRpY2tzKHRpY2tWYWwpXG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgdGhpcy5heGlzLnRpY2tzKHRoaXMub3B0cy50aWNrTnVtYmVyKCkpXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyICYmIHRoaXMuYXhpc1RhZy5hdHRyKCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybUF0dHIpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgJiYgdGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZy5jYWxsKHRoaXMuYXhpcylcblxuXG4gICAgY29uc3QgbGltaXRUZXh0ID0gdGhpcy5vcHRzLnRleHRMaW1pdFxuICAgIGNvbnN0IHRpY2tGbXQgPSBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSA/IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyIDogZW1wdHlGblxuXG4gICAgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAnc2xhbnQnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ3knLCAnOCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctMS4wZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3gnLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MCknKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlbW92ZSBBeGlzIEluc3RhbmNlXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5yZW1vdmUoKVxuICAgIHRoaXMuc2NhbGUgPSBudWxsXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IEF4aXMgZnJvbSAnQC9heGlzJ1xuaW1wb3J0IHthZGREZWZhdWx0VFNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCBCYXNpY1RTUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9UaW1lU2VyaWVzVG9vbHRpcCdcbmltcG9ydCBNb3VzZUhhbmRsZXIgZnJvbSAnQC9tb3VzZS1oYW5kbGVyJ1xuLy8gaW1wb3J0IFpvb20gZnJvbSAnQC96b29tJ1xuLy8gaW1wb3J0IFpvb20gZnJvbSAnQC96b29tL1BpbmNoSW5kZXgnXG5pbXBvcnQgWm9vbSBmcm9tICdAL3pvb20vaW5kZXhUb3VjaCdcbmltcG9ydCBUaW1lU2VyaWVzTGVnZW5kIGZyb20gJ0AvbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQnXG5pbXBvcnQgVGltZVNlcmllcyBmcm9tICdAL3Nlcmllcy9UaW1lU2VyaWVzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc0NoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBvcHRzKSB7XG4gICAgb3B0cy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGFQYXJzZXIgaXMgbm90IHBhc3NlZFxuICAgIGlmICghb3B0cy5kYXRhUGFyc2VyKSB7XG4gICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNUU1BhcnNlcihvcHRzKVxuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgZGF0YVBhcnNlciBleGlzdHMgYW5kIGl0cyBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlclxuICAgIGlmICghKG9wdHMuZGF0YVBhcnNlciBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGFQYXJzZXIgaW4gb3B0aW9ucyBkb3Nlbid0IGhhdmUgaW1wbGVtZW50YXRpb24gb2YgQ2hhcnRBeGlzUGFyc2VyXCIpXG4gICAgfVxuXG4gICAgLy8gQ2FsbCBQYXJlbnQgSW1wbFxuICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0cylcblxuICAgIC8vIFJ1biB0aGUgZGF0YVBhcnNlciBmb3IgZ2l2ZW4gSlNPTiBkYXRhXG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuZGF0YVBhcnNlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRhdGFQYXJzZXIuZGF0YUV4ZWN1dG9yKCkpXG4gICAgfVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRUU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gSW5pdGlsaXplIGFsbCBjaGFydCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGltZVNlcmllc0NoYXJ0IG9uIGV4YWN0IG9yZGVyIGJhc2VkIG9uIGVhY2ggZGVwZW5kZW5jaWVzXG4gICAgdGhpcy5jaGFydEluaXRpbGl6ZSgpXG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5kcmF3KCkpXG4gIH1cblxuICBjaGFydEluaXRpbGl6ZSAoKSB7XG4gICAgbGV0IGF4aXNPcHRpb25zXG4gICAgY29uc3QgeVJhbmdlID0gdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgIGNvbnN0IHlSYW5nZTIgPSB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG5cbiAgICBpZiAoeVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5sZWZ0JylcbiAgICAgIHRoaXMueUF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpcylcbiAgICB9XG5cbiAgICBpZiAoeVJhbmdlMikge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMucmlnaHQnKVxuICAgICAgdGhpcy55QXhpczIgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdyaWdodCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZTIsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlIChjaGFydCBBUEkpXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMyKVxuICAgIH1cblxuICAgIGlmICh0aW1lSW5mby50aW1lUmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnhBeGlzLmJvdHRvbScpXG4gICAgICB0aGlzLnhBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd4JyxcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgcmFuZ2VTY2FsZTogWzAsIHRoaXMuY2hhcnRXaWR0aF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB0aW1lSW5mby50aW1lUmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnhBeGlzKVxuICAgIH1cblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGNvbnN0IHpvb21PcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnpvb20nLCB7fSlcbiAgICBpZiAoKHRvb2x0aXBPcHRzLnZpc2libGUgfHwgem9vbU9wdHMudmlzaWJsZSkpIHtcbiAgICAgIHRoaXMubW91c2VIYW5kbGVyID0gbmV3IE1vdXNlSGFuZGxlcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5tb3VzZUhhbmRsZXIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIHRoaXMuem9vbUJydXNoID0gbmV3IFpvb20oe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgb25ab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblhab29tLFxuICAgICAgICBvblkxWm9vbTogdGhpcy5vcHRpb25zLnpvb20ub25ZMVpvb20sXG4gICAgICAgIG9uWTJab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblkyWm9vbVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy56b29tQnJ1c2gpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zZXJpZXMpIHtcbiAgICAgIHRoaXMuc2VyaWVzID0gbmV3IFRpbWVTZXJpZXMoe1xuICAgICAgICBjaGFydDogdGhpc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnNlcmllcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxlZ2VuZC52aXNpYmxlKSB7XG4gICAgICB0aGlzLmxlZ2VuZHMgPSBuZXcgVGltZVNlcmllc0xlZ2VuZCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBsZWdlbmRQcmVmaXg6IHRoaXMub3B0aW9ucy5sZWdlbmQubGVnZW5kUHJlZml4LFxuICAgICAgICBwb3NpdGlvbjogY29uc3RhbnRzLkRJUl9UT1AsXG4gICAgICAgIGRpc2FibGVTZXJpZXNUb2dnbGU6IHRoaXMub3B0aW9ucy5sZWdlbmQuZGlzYWJsZVNlcmllc1RvZ2dsZSxcbiAgICAgICAgb25MZWdlbmRDaGFuZ2U6IHRoaXMub3B0aW9ucy5sZWdlbmQub25MZWdlbmRDaGFuZ2VcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMubGVnZW5kcylcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zb2xlLmxvZygnVGltZVNlcmllc0NoYXJ0IGRyYXcnLCB0aGlzKVxuICAgIHN1cGVyLmRyYXcoKVxuICAgIHRoaXMub3B0aW9ucy5hZnRlckRyYXcuY2FsbCh0aGlzKVxuXG4gICAgLy8gQWRkIEV4dHJhIEJ1ZmZlciBmb3IgbWF4IFkgdmFsdWUgYW5kIHByb3ZpZGUgc3BhY2UgdG8gZGlzcGxheSBhbGwgdGlja3MgaW4gZ3JhcGhab25lXG4gICAgdGhpcy5yZVNjYWxlWUF4aXMoKVxuXG4gICAgdGhpcy5jaGFydFJlc3BvbnNpdmUoKVxuXG4gICAgdGhpcy5tb3VzZUhhbmRsZXIgJiYgdGhpcy5tb3VzZUhhbmRsZXIudHJpZ2dlck1vdXNlQWN0aW9uKClcblxuICAgIHRoaXMudGltZURpZmYgPSAobmV3IERhdGUoKVxuICAgICAgLmdldFRpbWUoKSAtIHRoaXMub3B0aW9ucy5zdGFydFRpbWUuZ2V0VGltZSgpKVxuICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlLmNhbGwodGhpcywgdGhpcy50aW1lRGlmZilcbiAgfVxuXG4gIC8vIEZpbmQgbmV4dCBwb3NzaWJsZSB0aWNrIHRvIGRpc3BsYXkgbWF4IFkgdmFsdWUgYW5kIGFkanVzdCBtYXJnaW4gdG8gc2hvdyBhbGwgdGljayBsYWJlbHMgY29tcGxldGVseVxuICByZVNjYWxlWUF4aXMgKGF4aXNTcGVjaWZpZXIpIHtcblxuICAgIGxldCB0aWNrVmFsQXJyXG4gICAgbGV0IGRpZmZWYWxcbiAgICBsZXQgcmFuZ2VWYWxcbiAgICBsZXQgeU1heFxuICAgIGxldCBhcHBseVkxQXhpcyA9IHRydWVcbiAgICBsZXQgYXBwbHlZMkF4aXMgPSB0cnVlXG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICBhcHBseVkyQXhpcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGF4aXNTcGVjaWZpZXIgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIGFwcGx5WTFBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBNYXggdmFsdWUgaXMgcHJvdmlkZWQgaW4gb3B0aW9ucywgRG9udCBjb21wdXRlIG5leHQgcG9zc2libGUgdGljay5cbiAgICB5TWF4ID0gZ2V0T2JqZWN0KHRoaXMub3B0aW9ucywgJ3lBeGlzLmxlZnQubWF4JylcbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZSAmJiBhcHBseVkxQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpcy50aWNrVmFsdWVzXG4gICAgICAvLyBJZiB0aWNrVmFsQXJyIGNvbnRhaW5zIHZhbHVlc1xuICAgICAgaWYgKHRpY2tWYWxBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBGaW5kIGRpZmZlcmVuY2Ugb2YgbGFzdCBhbmQgbGFzdCBwcmV2aW91cyB0aWNrIHZhbHVlcyBvZiBZIEF4aXNcbiAgICAgICAgZGlmZlZhbCA9IHRpY2tWYWxBcnJbMF0gLSB0aWNrVmFsQXJyWzFdXG4gICAgICAgIC8vIE5ldyByYW5nZSBpcyBpbmNyZWFzZWQgYnkgYWJvdmUgZGlmZmVyZW5jZVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgLy8gTW9kaWZ5IG5ldyBtYXggcmFuZ2UgZm9yIHRoZSBncmFwaFxuICAgICAgICB0aGlzLm9wdGlvbnMueVJhbmdlWzFdID0gcmFuZ2VWYWxcblxuICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgIHRoaXMueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMucmlnaHQubWF4JylcbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIgJiYgYXBwbHlZMkF4aXMgJiYgIU51bWJlci5pc0Zpbml0ZSh5TWF4KSkge1xuICAgICAgdGlja1ZhbEFyciA9IHRoaXMueUF4aXMyLnRpY2tWYWx1ZXNcblxuICAgICAgaWYgKHRpY2tWYWxBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgcmFuZ2VWYWwgPSB0aWNrVmFsQXJyWzBdICsgZGlmZlZhbFxuXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2UyWzFdID0gcmFuZ2VWYWxcblxuICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgIHRoaXMueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRqdXN0cyBZIGF4aXMgd2lkdGggYmFzZWQgb24gbWF4IHRleHQgbGVuZ3RoIGRpc3BsYXllZFxuICAgIGNvbnN0IHJlU2NhbGVBeGlzID0ge31cbiAgICBsZXQgcmVxdWlyZWRXaWR0aCA9IDBcblxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlKSB7XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0uY2xhc3MgPSAnLnZjLWF4aXMtbGVmdCdcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UyKSB7XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXSA9IHt9XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXS5jbGFzcyA9ICcudmMtYXhpcy1yaWdodCdcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLm1heFRleHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgZHVtbXkgc3ZnIHRvIGFkZCBNYXggbGVuZ3RoIHRpY2sgdmFsdWVzIGFuZCBjaGVjayBpdHMgcmVxdWlyZWQgd2lkdGggaW4gY2hhcnRcbiAgICBjb25zdCBkdW1teUcgPSB0aGlzLnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWF4aXMnKVxuXG4gICAgZm9yIChjb25zdCBheGlzIGluIHJlU2NhbGVBeGlzKSB7XG4gICAgICBjb25zdCB0aWNrc0FyciA9IHRoaXMuY29udGFpbmVyLnNlbGVjdCgnc3ZnICcgKyByZVNjYWxlQXhpc1theGlzXS5jbGFzcykuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIHRpY2tzQXJyLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgY29uc3QgdGlja0h0bWwgPSBzZWxlY3QodGhpcykudGV4dCgpIHx8ICcnXG4gICAgICAgIGlmICh0aWNrSHRtbC5sZW5ndGggPiByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQgPSB0aWNrSHRtbFxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgICAgLmRhdGEoW3JlU2NhbGVBeGlzW2F4aXNdLm1heFRleHRdKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLnRleHQoU3RyaW5nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIC8vIENvbXB1dGUgcmVxdWlyZWRXaWR0aCBmb3IgdGhlIE1heCB0ZXh0XG4gICAgICAgICAgcmVxdWlyZWRXaWR0aCA9IHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKClcbiAgICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIHJlc3BlY3RpdmUgbWFyZ2luIHRvIGZpdCBpbiB0aWNrcyB0ZXh0XG4gICAgICB0aGlzLm1hcmdpbltheGlzXSA9IE1hdGgucm91bmQocmVxdWlyZWRXaWR0aCkgKyBjb25zdGFudHMuWV9BWElTX1NQQUNFXG5cbiAgICB9XG4gICAgZHVtbXlHLnJlbW92ZSgpXG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSAodGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCB7Z2V0RGF0ZUZyb21FcG9jLCBnZXRPYmplY3QsIHJlZmluZVN0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNCb29sZWFufSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1RTUGFyc2VyIGV4dGVuZHMgQ2hhcnRBeGlzUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgfVxuXG4gIGRhdGFFeGVjdXRvciAoKSB7XG4gICAgLy8gT3JkZXIgaW4gd2hpY2ggdGhlIERhdGFQcm9jZXNzb3IgQVBJcyBuZWVkcyB0byBiZSBleGVjdXRlZFxuICAgIHRyeSB7XG5cbiAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB7fVxuICAgICAgdGhpcy5vcHRzLmRhdGEgJiYgKHRoaXMuZGF0YU9wdGlvbnMuZGF0YSA9IHRoaXMub3B0cy5kYXRhKVxuICAgICAgdGhpcy5vcHRzLnNlcmllcyAmJiAodGhpcy5kYXRhT3B0aW9ucy5zZXJpZXMgPSB0aGlzLm9wdHMuc2VyaWVzKVxuICAgICAgdGhpcy5vcHRzLnlBeGlzICYmICh0aGlzLmRhdGFPcHRpb25zLnlBeGlzID0gdGhpcy5vcHRzLnlBeGlzKVxuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0Q2hhcnREYXRhKCkpXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0WEF4aXNJbmZvKCkpXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0UGxvdEluZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RZQXhpc0luZm8oKSlcblxuICAgICAgcmV0dXJuIHRoaXMuZGF0YU9wdGlvbnNcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGVuY291bnRlcmVkIHdoaWxlIHRpbWVzZXJpZXMgSlNPTiBwYXJzaW5nIDonLCBlcnIpXG4gICAgICB0aGlzLm9wdHMub25FcnJvcihlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiByZWNlaXZlZCAtIEVycm9yIG9uIHRpbWVzZXJpZXMgSlNPTiBwYXJzaW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RDaGFydERhdGEgKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHJlc0pzb24gPSBkYXRhT3B0aW9ucy5kYXRhXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IHJlc0pzb24udGltZXNlcmllc1xuICAgIGNvbnN0IGNvbHVtbnMgPSBzZXJpZXNEYXRhLmNvbHVtbnNcbiAgICBjb25zdCBkYXRhID0gc2VyaWVzRGF0YS52YWx1ZXNcbiAgICBjb25zdCB2YWxpZEpTT05UeXBlID0gKGNvbHVtbnMubGVuZ3RoICYmIGRhdGEubGVuZ3RoKVxuXG4gICAgLy8gRmluZCBzZWNvbmRzIGluIHVuaXRBcnIgdG8gZmluZCB0aGUgdGltZVN0YW1wSW5kZXhcbiAgICBjb25zdCB0aW1lU3RhbXBJbmRleCA9IDBcbiAgICBjb25zdCBmaXJzdFRpbWUgPSBkYXRhWzBdW3RpbWVTdGFtcEluZGV4XVxuICAgIGlmICghdmFsaWRKU09OVHlwZSB8fCAhKGlzTnVtYmVyKGZpcnN0VGltZSkgfHwgaXNEYXRlKGZpcnN0VGltZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVGltZSBzZXJpZXMgSlNPTiByZWNlaXZlZCcpXG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0ID0gMFxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKHN0YXJ0ID4gZFt0aW1lU3RhbXBJbmRleF0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFRpbWUgc2VyaWVzIEpTT04gcmVjZWl2ZWQ6IFRpbWVzdGFtcCBWYWx1ZXMgbXVzdCBiZSBpbiBhc2NlbmRpbmcgb3JkZXInKVxuICAgICAgfVxuICAgICAgc3RhcnQgPSBkW3RpbWVTdGFtcEluZGV4XVxuICAgICAgZFt0aW1lU3RhbXBJbmRleF0gPSBnZXREYXRlRnJvbUVwb2MoZFt0aW1lU3RhbXBJbmRleF0sIHRydWUpIC8vIGNvbnZlcnQgRVBPQyB0byBkYXRlXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBjaGFydERhdGE6IGRhdGFcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RYQXhpc0luZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHNlcmllc0RhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCBkYXRhSW5kZXggPSAwXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVJbmZvOiB7XG4gICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgdGltZVJhbmdlOiBbc2VyaWVzRGF0YVswXVtkYXRhSW5kZXhdLCBzZXJpZXNEYXRhWyhzZXJpZXNEYXRhLmxlbmd0aCAtIDEpXVtkYXRhSW5kZXhdXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFlBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBkYXRhT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBjb25zdCBkYXRhID0gZGF0YU9wdGlvbnMuY2hhcnREYXRhXG4gICAgY29uc3QgeUF4aXMgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0JylcbiAgICBjb25zdCB5QXhpczIgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodCcpXG4gICAgbGV0IGZpbmRFYWNoUGxvdFJhbmdlID0gZmFsc2VcbiAgICBsZXQga2V5XG4gICAgbGV0IHlSYW5nZSA9IG51bGxcbiAgICBsZXQgeVJhbmdlMiA9IG51bGxcblxuXG4gICAgaWYgKHlBeGlzKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzLm1pbikgJiYgTnVtYmVyLmlzRmluaXRlKHlBeGlzLm1heCkpIHtcbiAgICAgICAgeVJhbmdlID0gW3lBeGlzLm1pbiwgeUF4aXMubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh5QXhpczIpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1pbikgJiYgTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5tYXgpKSB7XG4gICAgICAgIHlSYW5nZTIgPSBbeUF4aXMyLm1pbiwgeUF4aXMyLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB5UmFuZ2UgaXMgbm90IHNldCBmcm9tIGdyYXBoT3B0aW9ucywgdGhlbiBnbyBpbnNpZGVcbiAgICBpZiAoKHlBeGlzICYmICF5UmFuZ2UpIHx8ICh5QXhpczIgJiYgIXlSYW5nZTIpKSB7XG5cbiAgICAgIGZvciAoa2V5IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGVhY2hQbG90U2V0W2tleV0ubWluVmFsKSB8fCAhTnVtYmVyLmlzRmluaXRlKGVhY2hQbG90U2V0W2tleV0ubWF4VmFsKSkge1xuICAgICAgICAgIGZpbmRFYWNoUGxvdFJhbmdlID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5sZW5ndGgpIHx8IGZpbmRFYWNoUGxvdFJhbmdlKSB7XG5cbiAgICAgICAgaWYgKGZpbmRFYWNoUGxvdFJhbmdlKSB7XG4gICAgICAgICAgLy8gUmVzZXQgcmFuZ2UgZm9yIGVhY2ggcGxvdCBmb3IgZmluZGluZyBtaW4gLCBtYXhcbiAgICAgICAgICBmb3IgKGNvbnN0IHBsb3QgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVhY2hQbG90ID0gZWFjaFBsb3RTZXRbcGxvdF1cbiAgICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IEluZmluaXR5XG4gICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSAtSW5maW5pdHlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBzdGFjayByYW5nZSBmb3IgZWFjaCBzdGFjayBmb3IgZmluZGluZyBtaW4gLCBtYXhcbiAgICAgICAgcGxvdEluZm8uc3RhY2sgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIE1heCBhbmQgTWluIGZvciBlYWNoIHBsb3RzIHNlcmllc1xuICAgICAgICBsZXQgdmFsRGF0YSA9IDBcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgaWYgKGZpbmRFYWNoUGxvdFJhbmdlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBsb3QgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZWFjaFBsb3QgPSBlYWNoUGxvdFNldFtwbG90XVxuICAgICAgICAgICAgICB2YWxEYXRhID0gZFtlYWNoUGxvdC5kYXRhSW5kZXhdXG4gICAgICAgICAgICAgIGlmICh2YWxEYXRhIDwgZWFjaFBsb3QubWluVmFsKSB7XG4gICAgICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gdmFsRGF0YVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh2YWxEYXRhID4gZWFjaFBsb3QubWF4VmFsKSB7XG4gICAgICAgICAgICAgICAgZWFjaFBsb3QubWF4VmFsID0gdmFsRGF0YVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGxvdEluZm8uc3RhY2sgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLnN0YWNrT3JkZXJNZW1iZXJzXG4gICAgICAgICAgICBsZXQgc3VtID0gMFxuICAgICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICBzdW0gKz0gKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID8gZFtlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uZGF0YUluZGV4XSA6IDApXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoc3VtIDwgcGxvdERhdGEudmFsdWVSYW5nZVswXSkge1xuICAgICAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlWzBdID0gc3VtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VtID4gcGxvdERhdGEudmFsdWVSYW5nZVsxXSkge1xuICAgICAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlWzFdID0gc3VtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBNYXggdmFsdWUgcmVxdWlyZWQgdG8gcGxvdCBvbiBncmFwaCBiYXNlZCBvbiB2aXNpYmxlIHBsb3QgZnVuY3Rpb24gLiBpLmUgbGluZSBvciBzdGFja1xuICAgICAgbGV0IGFsbE1heCA9IC1JbmZpbml0eVxuICAgICAgbGV0IGFsbE1heDIgPSAtSW5maW5pdHlcbiAgICAgIGZvciAoa2V5IGluIHBsb3RJbmZvKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdsaW5lJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlICYmIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsID4gYWxsTWF4KSB7XG4gICAgICAgICAgICAgIGFsbE1heCA9IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLm1heFZhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdyaWdodCcgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsID4gYWxsTWF4Mikge1xuICAgICAgICAgICAgICBhbGxNYXgyID0gZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdGFjaycpIHtcbiAgICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICBpZiAocGxvdERhdGEucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdID4gYWxsTWF4KSB7XG4gICAgICAgICAgICAgIGFsbE1heCA9IHBsb3REYXRhLnZhbHVlUmFuZ2VbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdID4gYWxsTWF4Mikge1xuICAgICAgICAgICAgICBhbGxNYXgyID0gcGxvdERhdGEudmFsdWVSYW5nZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBtaW4gdmFsdWUganVzdCBieSBjaGVja2luZyBtaW4gdmFsdWUgYW1vbmcgYWxsIHNlcmllcyBkYXRhXG4gICAgICBsZXQgYWxsTWluID0gSW5maW5pdHlcbiAgICAgIGxldCBhbGxNaW4yID0gSW5maW5pdHlcbiAgICAgIGZvciAoa2V5IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgZWFjaFBsb3RTZXRba2V5XS52aXNpYmxlICYmIGVhY2hQbG90U2V0W2tleV0ubWluVmFsIDwgYWxsTWluKSB7XG4gICAgICAgICAgYWxsTWluID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4yKSB7XG4gICAgICAgICAgYWxsTWluMiA9IGVhY2hQbG90U2V0W2tleV0ubWluVmFsXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBsZXQgeU1pbiwgeU1heFxuICAgICAgLy8gSWYgWWF4aXMgcmFuZ2UgaXMgYWxyZWFkeSBkZWZpbmVkIGluIG9wdGlvbnMsIE92ZXJyaWRlIGl0LlxuICAgICAgaWYgKFthbGxNaW4sIGFsbE1heF0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdC5taW4nKVxuICAgICAgICB5TWluID0gTnVtYmVyLmlzRmluaXRlKHlNaW4pID8geU1pbiA6IGFsbE1pblxuICAgICAgICB5TWF4ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heFxuICAgICAgICBpZiAoIXlNYXgpIHtcbiAgICAgICAgICB5TWF4ID0geU1pbiArIDgwIC8vIFNldCBhcyBkZWZhdWx0IDEwMCBpZiByYW5nZSBpcyBbMCwwXVxuICAgICAgICB9XG4gICAgICAgIHlSYW5nZSA9IFt5TWluLCB5TWF4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHlBeGlzKSB7XG4gICAgICAgICAgeVJhbmdlID0gWzAsIDgwXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlSYW5nZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBpZiAoW2FsbE1pbjIsIGFsbE1heDJdLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKGEpICYmIE51bWJlci5pc0Zpbml0ZShiKVxuICAgICAgfSkpIHtcbiAgICAgICAgeU1pbiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluMlxuICAgICAgICB5TWF4ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWF4JylcbiAgICAgICAgeU1heCA9IE51bWJlci5pc0Zpbml0ZSh5TWF4KSA/IHlNYXggOiBhbGxNYXgyXG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlMiA9IFt5TWluLCB5TWF4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHlBeGlzMikge1xuICAgICAgICAgIHlSYW5nZTIgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlMiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB5UmFuZ2U6IHlSYW5nZSxcbiAgICAgIHlSYW5nZTI6IHlSYW5nZTJcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RQbG90SW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi50aW1lc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGxldCBpbmQgPSAwXG4gICAgLy8gT2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHBsb3QgZnVuY3Rpb25zIG5lZWRlZCBmb3IgdGhlIGNoYXJ0XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB7fVxuICAgIC8vIFNldCBvZiBydWxlcyB0aGF0IGNoYXJ0cyBuZWVkcyB0byBiZSBkcmF3IG9uIHRpbWVTZXJpZXNDaGFydFxuICAgIGNvbnN0IHBsb3RJbmZvID0gZGF0YU9wdGlvbnMuc2VyaWVzXG4gICAgbGV0IGtleVxuXG4gICAgY29uc3QgdGltZVN0YW1wSW5kZXggPSBkYXRhT3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXhcbiAgICBjb25zdCBkYXRhQ29sb3JBcnIgPSBzZXJpZXNEYXRhLmNvbG9yIHx8IFtdXG4gICAgY29uc3QgeUxlZnQgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0JylcbiAgICBjb25zdCB5UmlnaHQgPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodCcpXG5cbiAgICAvLyBHZW5lcmF0ZSBlYWNoUGxvdFNldCB1c2luZyBjb2x1bW5zXG4gICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAodGltZVN0YW1wSW5kZXggPT09IGluZCkge1xuICAgICAgICBpbmQrK1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIENvbnZlcnQgdGhlIFNlcmllcyBOYW1lIHRvIEpTIHN1aXRhYmxlIG9iamVjdCBtYXBwZWQgbmFtZSBleDogYWJjKCUpIDEgLS0+IGFiYzFcbiAgICAgIGNvbnN0IHJlZmluZU5hbWUgPSByZWZpbmVTdHJpbmcoZClcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdID0ge1xuICAgICAgICBuYW1lOiBkLFxuICAgICAgICBkYXRhSW5kZXg6IGluZCxcbiAgICAgICAgbWluVmFsOiBJbmZpbml0eSxcbiAgICAgICAgbWF4VmFsOiAtSW5maW5pdHksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiBkYXRhQ29sb3JBcnJbaW5kXSB8fCAnIzAwMCdcbiAgICAgIH1cbiAgICAgIGluZCsrXG4gICAgfSlcblxuXG4gICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgIGlmIChrZXkgPT09ICdsaW5lJykge1xuICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgcGxvdERhdGEubmFtZSA9IHJlZmluZVN0cmluZyhwbG90RGF0YS5uYW1lKVxuICAgICAgICAgIGNvbnN0IGNvbG9yID0gcGxvdERhdGEuY29sb3IgLy8gQXBwbHkgY29sb3IgZm9yIGVhY2ggUGxvdCBzZXJpZXMgb3IgcGljayBmcm9tIGRhdGEgY29sb3IgQXJyXG4gICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICB9XG4gICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmNvbG9yID0gY29sb3IpXG4gICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBwbG90RGF0YS5wbG90QXhpcyB8fCBbJ2xlZnQnLCAnYm90dG9tJ11cbiAgICAgICAgICBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpcyA9IHBsb3RBeGlzXG4gICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgIGlzQm9vbGVhbihwbG90RGF0YS52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSA9IHBsb3REYXRhLnZpc2libGUpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0YWNrJykge1xuICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnYmFyJykge1xuICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuYmFyT3JkZXJNZW1iZXJzXG4gICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZSA9IFtJbmZpbml0eSwgLUluZmluaXR5XVxuICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgIG1lbWJlci5uYW1lID0gcmVmaW5lU3RyaW5nKG1lbWJlci5uYW1lKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBtZW1iZXIuY29sb3IgLy8gQXBwbHkgY29sb3IgZm9yIGVhY2ggUGxvdCBzZXJpZXMgb3IgcGljayBmcm9tIGRhdGEgY29sb3IgQXJyXG4gICAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IGBDb2xvciBub3QgcHJlc2VudCBmb3Igc2VyaWVzICR7cGxvdERhdGEubmFtZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLmNvbG9yID0gY29sb3IpXG4gICAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IG1lbWJlci5wbG90QXhpcyB8fCBbJ2xlZnQnLCAnYm90dG9tJ11cbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpcyA9IHBsb3RBeGlzXG4gICAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgICBpc0Jvb2xlYW4obWVtYmVyLnZpc2libGUpICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSA9IG1lbWJlci52aXNpYmxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcmllczogcGxvdEluZm8sIC8vIG5ld2x5IHVwZGF0ZWQgc2VyaWVzIGZyb20gdXNlciBvcHRpb25zIGhhdmluZyBhZGRpdGlvbmFsIGluZm8gb2YgZWFjaCBzZXJpZXNcbiAgICAgIHBsb3RTZXQ6IGVhY2hQbG90U2V0LCAvLyBJbmZvIG9mIGVhY2ggcGxvdCBsaWtlIGNvbG9yLCBtYXgsIG1pbiBldGNcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VIYW5kbGVyIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5vcHRzLnJlZ2lzdGVyRm4gPSBbXVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy5tb3VzZUJydXNoID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKCdwb2ludGVyLWV2ZW50cycsICdhbGwnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdH0sJHt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcH0pYClcblxuICAgIGlmICh0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICB0aGlzLm1vdXNlQnJ1c2guYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgIH1cblxuICAgIC8vIGlmICghdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuem9vbS52aXNpYmxlKSB7XG4gICAgLy9cbiAgICAvLyB9XG4gICAgLy8geC1ab29tIGZvciBjaGFydCBkb2VzdCBub3QgZXhpc3QsIEFkZCByZWN0IG92ZXJsYXkgZm9yIGJydXNoWERpdlxuICAgIHRoaXMubW91c2VCcnVzaC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ292ZXJsYXknKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2guYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdH0sJHt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcH0pYClcbiAgICB0aGlzLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5tb3VzZUJydXNoICYmIHRoaXMubW91c2VCcnVzaC5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gIH1cblxuICByZWdpc3RlciAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbi5wdXNoKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJpZ2dlck1vdXNlQWN0aW9uICgpIHtcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbi5mb3JFYWNoKChmdW4pID0+IHtcbiAgICAgIGZ1bi5jYWxsKHRoaXMpXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5tb3VzZUJydXNoICYmIHRoaXMubW91c2VCcnVzaC5yZW1vdmUoKVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2dldE9iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7bGluZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIERvIG5vdCByZWdpc3RlciB0aGlzIGNvbXBvbmVudCBpbiBjaGFydENvbXBvbmVudHNBcnIsICBBcyB0aGUgc2VyaWVzIGNvbXBvbmVudCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgYW5kIHdpbGwgY2FsbCB0aGUgbGluZSBBUElzXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIGxpbmVEYXRhOiBudWxsLFxuICAgICAgeUF4aXNUYXJnZXQ6IG51bGwsXG4gICAgICB4QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMubGluZSA9IGxpbmUoKVxuXG4gICAgaWYgKHRoaXMub3B0cy55QXhpc1RhcmdldCkge1xuICAgICAgLy8gRm9yIG5vcm1hbCBzZXJpZXMsIHlBeGlzVGFyZ2V0IHJlZmVycyB0byB0aGUgaW5kZXggb2YgdGhpcyBzZXJpZXMgaW4gZGF0YSBBcnJcbiAgICAgIHRoaXMubGluZVxuICAgICAgICAuZGVmaW5lZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkW3NlbGYub3B0cy55QXhpc1RhcmdldF0gIT0gbnVsbFxuICAgICAgICB9KVxuICAgICAgICAueChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIC8vIHhBeGlzVGFyZ2V0IHJlZmVycyB0aGUgaW5kZXggb2YgZGF0ZSBpbiBkYXRhIEFyclxuICAgICAgICAgIHJldHVybiB4KGRbc2VsZi5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4geShkW3NlbGYub3B0cy55QXhpc1RhcmdldF0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLmxpbmVUYWcgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLnNlbGVjdEFsbCgnLnZjLWxpbmUtJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuZGF0YShbdGhpcy5vcHRzLmxpbmVEYXRhXSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1saW5lLXBsb3QgdmMtbGluZS0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNsaXBFbGVtZW50ID0gdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lci5zZWxlY3QoJ3N2ZyBjbGlwUGF0aCcpXG4gICAgLy8gQWRkaW5nIHRoZSBsaW5lcyBzZXJpZXMgZm9yIGRhdGEgdG8gYmUgc2hvd25cbiAgICB0aGlzLmxpbmVUYWcuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGluZScpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ3RyYW5zcGFyZW50JylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQubGluZVdpZHRoIHx8ICcycHgnXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gc2VsZi5saW5lKGQudmFsdWVzKSAvLyBWYWx1ZXMgYXJlIGFycmF5IG9mIGFycmF5IGhhdmluZyBmb3JtYXQgbGlrZSAgW1tkYXRlLCBzZXJpZXMxLCBzZXJpZXMyIC4uLi5dLC4uLl1cbiAgICAgIH0pXG4gIH1cblxuICAvLyBVcGRhdGUgaGFwcGVucyB3aGVuIHRoZSBjaGFydCBpcyByZXNpemVkXG4gIHVwZGF0ZSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnNlbGVjdCgncGF0aCcpLmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIHNlbGYubGluZShkLnZhbHVlcylcbiAgICB9KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IHNlcmllc05hbWUgPSB0aGlzLm9wdHMubGluZURhdGEubmFtZVxuICAgIC8vIFJlbW92ZSBsaW5lIHNlcmllc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcucmVtb3ZlKClcblxuICAgIGlmIChlYWNoUGxvdFNldCAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXSAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXS52aXNpYmxlKSB7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuICB9XG4gIFxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcucmVtb3ZlKClcbiAgICB0aGlzLmxpbmUgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG5cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHthcmVhLCBzdGFjaywgc3RhY2tPcmRlck5vbmUsIHN0YWNrT2Zmc2V0Tm9uZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrQXJlYSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIHhBeGlzVGFyZ2V0OiAnJyxcbiAgICAgIHN0YWNrRGF0YTogbnVsbCxcbiAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiB7fSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBEZWZpbmUgaW4gd2hhdCBvcmRlciwgU3RhY2sgc2VyaWVzIG5lZWRzIHRvIGJlIHBsb3RlZFxuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cblxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gc3RhY2soKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChkLmRhdGFbc2VsZi5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgIH0pXG4gICAgICAueTAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZFswXSkgLy8gSW5kaWNhdGVzIHdoZXJlIHRvIHN0YXJ0IGFsb25nIFlBeGlzXG4gICAgICB9KVxuICAgICAgLnkxKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGRbMV0pIC8vIEluZGljYXRlcyB3aGVyZSB0byBlbmQgYWxvbmcgWUF4aXNcbiAgICAgIH0pXG5cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICB0aGlzLm9wdHMuZDNTdGFjay5rZXlzKHRoaXMub3B0cy5zdGFja09yZGVySW5kZXgpIC8vIHNwZWNpZnkgdGhlIHN0YWNrIHNlcmllcyBuYW1lcyBpbiBhcnJheSBmb3JtYXRcbiAgICB0aGlzLm9wdHMuZDNTdGFjay5vcmRlcihzdGFja09yZGVyTm9uZSkgLy8gdXNlIHRoZSBnaXZlbiBzZXJpZXMgb3JkZXIuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sub2Zmc2V0KHN0YWNrT2Zmc2V0Tm9uZSkgLy8gYXBwbHkgYSB6ZXJvIGJhc2VsaW5lIG9uIHN0YXJ0XG5cbiAgICAvLyBTaG93IHN0YWNrIHBsb3QgZm9yIG9ubHkgc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgY29uc3Qgc3RhY2tWaXNpYmxlT3JkZXIgPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcblxuICAgIHRoaXMuc3RhY2tMYXllciA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtc3RhY2stJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuZGF0YSh0aGlzLm9wdHMuZDNTdGFjayh0aGlzLm9wdHMuc3RhY2tEYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1zdGFjay1wbG90IHZjLXN0YWNrLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcblxuICAgIC8vIFBMb3Qgc3RhY2tMYXllciBiYXNlZCBvbiBlYWNoIHNlcmllcyB2aXNpYmxpdHlcbiAgICB0aGlzLnN0YWNrTGF5ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAndmMtc3RhY2sgdmMtc3RhY2stJyArIHN0YWNrTWVtYmVyLm5hbWVcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtzdGFja01lbWJlci5uYW1lXS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgdGhpcy5hcmVhKVxuXG4gIH1cbiAgXG4gIC8vIFVwZGF0ZSBzdGFja0xheWVyIGJhc2VkIG9uIGNoYXJ0IHJlc2l6ZVxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIHRoaXMuYXJlYSlcbiAgfVxuICBcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgc3RhY2tPcmRlciBhcnIgYmFzZWQgb24gdmlzaWJsZVNlcmllc1xuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgc3RhY2sgc2VyaWVzXG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIC8vIGRyYXcgd2l0aCBuZXcgc3RhY2tPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG4gIFxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLnN0YWNrTGF5ZXIuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuICBcbiAgcmVtb3ZlICgpIHtcbiAgICAvLyAgdGhpcy5zdGFja0FyZWFQYXRoLnJlbW92ZSgpO1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMuZDNTdGFjayA9IG51bGxcbiAgICB0aGlzLmFyZWEgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IHtpc0FycmF5fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IExpbmUgZnJvbSAnQC9zZXJpZXMvTGluZSdcbmltcG9ydCBTdGFja0FyZWEgZnJvbSAnQC9zZXJpZXMvU3RhY2tBcmVhJ1xuaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXMgZXh0ZW5kcyBTZXJpZXMge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5wbG90U2VyaWVzID0gW11cbiAgICBjb25zdCBkYXRhID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhIC8vIEFjY2VwdCBlaXRoZXIgdGltZXNlcmllcyBvciBwaWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuXG4gICAgLy8gQ3JlYXRlIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiBpbnB1dCBvcHRpb25zIGFuZCBlYWNoIHBsb3QgaW5mb1xuICAgIGlzQXJyYXkocGxvdEluZm8uc3RhY2spICYmIHBsb3RJbmZvLnN0YWNrLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgU3RhY2tBcmVhKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMub3B0cy5jaGFydCxcbiAgICAgICAgY2xhc3NOYW1lOiBwbG90RGF0YS5jbGFzc05hbWUgfHwgcGxvdERhdGEubmFtZSxcbiAgICAgICAgcGxvdEF4aXM6IHBsb3REYXRhLnBsb3RBeGlzLFxuICAgICAgICB4QXhpc1RhcmdldDogdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4LFxuICAgICAgICBzdGFja0RhdGE6IGRhdGEsXG4gICAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgfSkpXG4gICAgfSlcblxuICAgIGlzQXJyYXkocGxvdEluZm8ubGluZSkgJiYgcGxvdEluZm8ubGluZS5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IExpbmUoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHlBeGlzVGFyZ2V0OiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5kYXRhSW5kZXgsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHZpc2libGU6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUsXG4gICAgICAgIGxpbmVEYXRhOiB7XG4gICAgICAgICAgbmFtZTogcGxvdERhdGEubmFtZSxcbiAgICAgICAgICBjb2xvcjogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IsXG4gICAgICAgICAgbGluZVdpZHRoOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5saW5lV2lkdGgsXG4gICAgICAgICAgdmFsdWVzOiBkYXRhXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7ZWxlbWVudE9mZnNldCwgZ2V0T2JqZWN0LCBpc0Z1bmN0aW9ufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtiaXNlY3RvciwgZDNNb3VzZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc1Rvb2x0aXAgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY3Jvc3NIYWlyczoge1xuICAgICAgICBlbmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIC8vIFByb3ZpZGUgYmFzaWMgZm9ybWF0dGVyIHRvIGRpc3BsYXkgaG92ZXIgZGF0YVxuICAgIGlmICghaXNGdW5jdGlvbih0aGlzLm9wdHMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5vcHRzLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+IFRvb2xUaXAgVGV4dCA6IDwvc3Bhbj48YnIvPjxzcGFuPiR7SlNPTi5zdHJpbmdpZnkoZCl9PC9zcGFuPmBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLmNyb3NzSGFpcnMgPSBmYWxzZVxuICAgIHRoaXMudG9vbFRpcERpdiA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXJcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1kaXNwbGF5ICcgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jcm9zc0hhaXJzLmVuYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jcm9zc0hhaXJzID0gdGhpcy5vcHRzLmNoYXJ0LnN2Z1xuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXRvb2x0aXAtbGluZScpXG4gICAgICB0aGlzLmNyb3NzSGFpcnMuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoLTk5OSwtOTk5KScpXG4gICAgICAgIC5hdHRyKCd4MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ3kxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgLSBjb25zdGFudHMuVE9PTFRJUF9UT1BfQlVGRkVSKVxuICAgICAgICAuYXR0cigneDInLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgIC5hdHRyKCd5MicsICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCkpXG5cbiAgICB9XG5cbiAgICB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKCgpID0+IHtcbiAgICAgIC8vIFJlZ2lzdGVyIGhvdmVyIGFuZCBoaWRlL3Nob3cgdG9vbGlwIGV2ZW50c1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgICBjb25zdCBtb3VzZUhhbmRsZXIgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyXG4gICAgICBjb25zdCBkYXRlSW5kZXggPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXhcbiAgICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGFcbiAgICAgIC8vIEZpbmQgbmVhcmVzdCBleGlzdGluZyBkYXRlIGFtb25nIGFycmF5IG9mIHNvcnRlZCBkYXRlXG4gICAgICBjb25zdCBiaXNlY3REYXRlID0gYmlzZWN0b3IoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRbZGF0ZUluZGV4XVxuICAgICAgfSkubGVmdFxuXG4gICAgICBjb25zdCBtb3VzZUV2dCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vIE9uIG1vdXNlbW92ZSBvZiB4IG92ZXJsYXksIGZpbmQgeCx5IHZhbHVlcyBhbmQgdXBkYXRlIHRvb2x0aXBcbiAgICAgICAgY29uc3QgeE1vdXNlID0gZDNNb3VzZSh0aGlzKVswXVxuICAgICAgICBjb25zdCB5TW91c2UgPSBkM01vdXNlKHRoaXMpWzFdXG4gICAgICAgIGNvbnN0IHhWYWwgPSB4U2NhbGUuaW52ZXJ0KHhNb3VzZSkgLy8gZmluZCB4QXhpcyBkYXRlIGZvciBtb3VzZSBwb3NpdGlvblxuXG4gICAgICAgIC8vIERvIGJpbmFyeSBzZWFyY2ggb2YgZGF0YSBzZXQgZnJvbSAybmQgZGF0YSBzZXQgdG8gZW5kXG4gICAgICAgIGNvbnN0IGZvdW5kID0gYmlzZWN0RGF0ZShkYXRhU2V0LCB4VmFsLCAxKVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRCZWZvcmUgPSBkYXRhU2V0W2ZvdW5kIC0gMl1cblxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkUHJldiA9IGRhdGFTZXRbZm91bmQgLSAxXVxuICAgICAgICAvLyBnZXQgYmVmb3JlIGZpbmQgZGF0YVNldFxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkRm91bmQgPSBkYXRhU2V0W2ZvdW5kXSB8fCBkUHJldiAvLyBnZXQgZmluZCBkYXRhU2V0XG5cbiAgICAgICAgbGV0IHRvb2xUaXBEYXRhID0gZFByZXZcbiAgICAgICAgaWYgKGRhdGFTZXQubGVuZ3RoID4gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpIHtcbiAgICAgICAgICAvLyBNb3JlIHRoYW4gb25lIHRpY2sgcmVzaWRlIG9uIGVhY2ggcGl4ZWwuIEhlbmNlIGZpbmQgdGljayBoYXZpbmcgbWF4IHZhbHVlIGFtb25nIHRoZSBkYXRhc2V0XG4gICAgICAgICAgY29uc3QgZGF0YVBhcnNlTGVuID0gTWF0aC5mbG9vcihkYXRhU2V0Lmxlbmd0aCAvIHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSArIDFcblxuICAgICAgICAgIGNvbnN0IHZpc2libGVEYXRhSW5kZXggPSB7fVxuXG4gICAgICAgICAgZm9yIChjb25zdCBwbCBpbiBzZWxmLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwbG90ID0gc2VsZi5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFtwbF1cbiAgICAgICAgICAgIGlmIChwbG90LnZpc2libGUpIHtcbiAgICAgICAgICAgICAgdmlzaWJsZURhdGFJbmRleFtwbG90LmRhdGFJbmRleF0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbXVsdGlBcnJNYXAgPSB7fVxuICAgICAgICAgIC8vIERvIFNjYW4gZnJvbSByYW5nZSAtZGF0YVBhcnNlTGVuIHRvICtkYXRhUGFyc2VMZW4gYmV0d2VlbiBmb3VuZCBkYXRhIGluZGV4XG4gICAgICAgICAgZm9yIChsZXQgaW5kID0gKGZvdW5kIC0gZGF0YVBhcnNlTGVuKTsgaW5kIDwgKGZvdW5kICsgZGF0YVBhcnNlTGVuKTsgaW5kKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhU2V0W2luZF0pIHtcbiAgICAgICAgICAgICAgY29uc3QgZFNldCA9IGRhdGFTZXRbaW5kXS5maWx0ZXIoZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlzaWJsZURhdGFJbmRleFtpbmRleF1cbiAgICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiIC0gYVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBpZiAoZFNldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtdWx0aUFyck1hcFtpbmRdID0gZFNldFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBtYXhJbmRcbiAgICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgICAgZm9yIChjb25zdCBtcCBpbiBtdWx0aUFyck1hcCkge1xuICAgICAgICAgICAgY29uc3QgYXJyU2V0ID0gbXVsdGlBcnJNYXBbbXBdXG4gICAgICAgICAgICBpZiAobWF4VmFsIDwgYXJyU2V0WzBdKSB7XG4gICAgICAgICAgICAgIG1heFZhbCA9IGFyclNldFswXVxuICAgICAgICAgICAgICBtYXhJbmQgPSBtcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvb2xUaXBEYXRhID0gZGF0YVNldFttYXhJbmRdIHx8IGRGb3VuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEZpbmQgbmVhcmVzdCByZWFjaGluZyBkYXRlIGFtb25nIGFib3ZlIHR3byBkYXRlc1xuICAgICAgICAgIHRvb2xUaXBEYXRhID0gKHhWYWwgLSBkUHJldltkYXRlSW5kZXhdKSA+IChkRm91bmRbZGF0ZUluZGV4XSAtIHhWYWwpID8gZEZvdW5kIDogZFByZXZcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRlSW50UmFuZ2UgPSBkRm91bmRbZGF0ZUluZGV4XSAtIGRQcmV2W2RhdGVJbmRleF1cblxuICAgICAgICBpZiAoIWRhdGVJbnRSYW5nZSAmJiBkQmVmb3JlKSB7XG4gICAgICAgICAgZGF0ZUludFJhbmdlID0gZFByZXZbZGF0ZUluZGV4XSAtIGRCZWZvcmVbZGF0ZUluZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGVJbnRSYW5nZSA8IE1hdGguYWJzKGRGb3VuZFtkYXRlSW5kZXhdIC0geFZhbCkpIHtcbiAgICAgICAgICAvLyBJZiBmb3VuZCBpcyBvdXRzaWRlIGRhdGEgaW50ZXJ2YWwgcmFuZ2UsIFRoZW4gZGF0YSBkb2VzbnQgZXhpc3QgZm9yIHRoYXQgdGljay5cbiAgICAgICAgICB0b29sVGlwRGF0YSA9IFtdXG4gICAgICAgICAgdG9vbFRpcERhdGFbZGF0ZUluZGV4XSA9IHhWYWxcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaG92ZXIoeE1vdXNlLCB5TW91c2UsIHRvb2xUaXBEYXRhKVxuICAgICAgfVxuXG4gICAgICBsZXQgZXZlbnROYW1lID0gJ21vdXNlbW92ZSdcbiAgICAgIGlmICh0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICAgIGV2ZW50TmFtZSA9ICdkYmxjbGljaydcbiAgICAgIH1cbiAgICAgIG1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5vbihldmVudE5hbWUsIG1vdXNlRXZ0KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG5cbiAgICAgIG1vdXNlSGFuZGxlci5tb3VzZUJydXNoLnNlbGVjdCgncmVjdC5vdmVybGF5JylcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiB0b3VjaCBzY3JlZW4sIHNpbXVsYXRlIHRvb2x0aXAgaG92ZXIgZm9yIGZpcnN0IHRpbWUgdG8gYXV0byBjb21wdXRlIGVsZW1lbnRPZmZzZXRcbiAgICAgICAgdGhpcy5ob3ZlcigwLCAwLCBkYXRhU2V0WzBdKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9LCAxMClcbiAgICAgIH1cblxuICAgIH0pXG4gIH1cblxuICBob3ZlciAoeFBvcywgeVBvcywgZGlzcGxheURhdGEpIHtcbiAgICAvLyBVcGRhdGUgZGlzcGxheVBhbmVsIGFuZCBsaW5lIGJhc2VkIG9uIHggcG9zaXRpb25cbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnNlbGVjdCgnbGluZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3hQb3N9LDApYClcbiAgICAgIC5hdHRyKCd4MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wIC0gY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUilcbiAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MicsICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCkpXG4gICAgdGhpcy5zaG93SGlkZSh0cnVlKVxuXG4gICAgbGV0IHBlcmNlbnRhZ2VEaWZmID0geFBvcyAvIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoXG5cbiAgICBpZiAocGVyY2VudGFnZURpZmYgPCAwLjMpIHtcbiAgICAgIHBlcmNlbnRhZ2VEaWZmID0gMC4yXG4gICAgfVxuICAgIGlmIChwZXJjZW50YWdlRGlmZiA+IDAuNykge1xuICAgICAgcGVyY2VudGFnZURpZmYgPSAwLjk1XG4gICAgfVxuXG4gICAgY29uc3QgYm94ID0gZWxlbWVudE9mZnNldCh0aGlzLnRvb2xUaXBEaXYpXG4gICAgY29uc3Qgcm9vdFBvcyA9IGVsZW1lbnRPZmZzZXQodGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lcilcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZChyb290UG9zLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB4UG9zIC0gYm94LndpZHRoICogcGVyY2VudGFnZURpZmYpICsgJ3B4J1xuICAgIGNvbnN0IHRvcCA9IE1hdGgucm91bmQocm9vdFBvcy50b3AgLSBib3guaGVpZ2h0IC0gNSArIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIgKiAyKSArICdweCdcblxuXG4gICAgdGhpcy50b29sVGlwRGl2XG4gICAgICAuc3R5bGUoJ2xlZnQnLCBsZWZ0KVxuICAgICAgLnN0eWxlKCd0b3AnLCB0b3ApXG4gICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgIC5odG1sKHRoaXMub3B0cy5mb3JtYXQuY2FsbCh0aGlzLm9wdHMuY2hhcnQsIGRpc3BsYXlEYXRhKSkgLy8gVXNlZCBmb3JtYXQuY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1biBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy50b29sVGlwRGl2ICYmIHRoaXMudG9vbFRpcERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LnJlbW92ZSgpXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5yZW1vdmUoKVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtnZXRPYmplY3QsIGlzRnVuY3Rpb24sIGVtcHR5Rm59IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2JydXNoWSwgZDNFdmVudCwgZDNUb3VjaGVzLCB6b29tfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtiaXNlY3Rvcn0gZnJvbSAnZDMtYXJyYXknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20gZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgb25ab29tOiBlbXB0eUZuLFxuICAgICAgb25ZMVpvb206IGVtcHR5Rm4sXG4gICAgICBvblkyWm9vbTogZW1wdHlGbixcbiAgICB9LCBvcHRzKVxuICB9XG5cbiAgZ2V0Q2xvc2VzdFhBeGlzRGF0YSAoeFZhbCwgZGF0YVNldCkge1xuICAgIGNvbnN0IGRhdGVJbmRleCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIC8vIEZpbmQgbmVhcmVzdCBleGlzdGluZyBkYXRlIGFtb25nIGFycmF5IG9mIHNvcnRlZCBkYXRlXG4gICAgY29uc3QgYmlzZWN0RGF0ZSA9IGJpc2VjdG9yKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZFtkYXRlSW5kZXhdXG4gICAgfSkubGVmdFxuXG4gICAgLy8gRG8gYmluYXJ5IHNlYXJjaCBvZiBkYXRhIHNldCBmcm9tIDJuZCBkYXRhIHNldCB0byBlbmRcbiAgICBjb25zdCBmb3VuZCA9IGJpc2VjdERhdGUoZGF0YVNldCwgeFZhbCwgMSlcblxuXG4gICAgY29uc3QgZFByZXYgPSBkYXRhU2V0W2ZvdW5kIC0gMV1cbiAgICAvLyBnZXQgYmVmb3JlIGZpbmQgZGF0YVNldFxuXG4gICAgY29uc3QgZEZvdW5kID0gZGF0YVNldFtmb3VuZF0gfHwgZFByZXYgLy8gZ2V0IGZpbmQgZGF0YVNldFxuXG4gICAgcmV0dXJuIGRGb3VuZFxuICB9XG5cblxuICB1cGRhdGVicnVzaFhTZWxlY3Rpb24gKHN0YXJ0UG9zLCBlbmRQb3MpIHtcbiAgICB0aGlzLmJydXNoWERpdlxuICAgICAgLmF0dHIoJ3gnLCBzdGFydFBvcylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIChlbmRQb3MgLSBzdGFydFBvcykpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlTGVmdCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlUmlnaHQgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhXG4gICAgY29uc3QgYnJ1c2hPdmVybGF5ID0gbnVsbFxuICAgIGlmICh4U2NhbGUpIHtcblxuICAgICAgLy8gQ3JlYXRlIHggYXhpcyBicnVzaCBmb3IgWm9vbSBvcGVyYXRpb25cbiAgICAgIHRoaXMuem9vbVggPSB6b29tKClcbiAgICAgICAgLnNjYWxlRXh0ZW50KFswLCBkYXRhU2V0Lmxlbmd0aF0pXG4gICAgICAgIC50cmFuc2xhdGVFeHRlbnQoW1xuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wXSxcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1dKVxuICAgICAgICAuZXh0ZW50KFtbdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0LCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcF0sIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XV0pXG4gICAgICAgIC50b3VjaGFibGUoKCkgPT4gdHJ1ZSlcbiAgICAgICAgLy8gLm9uKCd6b29tJywgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgLy8gICB2YXIgdHJhbnNmb3JtID0gem9vbVRyYW5zZm9ybSh0aGlzKVxuICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKCdBcmcnLCBhcmdzKVxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCd0cmFuJywgdHJhbnNmb3JtLnRvU3RyaW5nKCkpXG4gICAgICAgIC8vICAgY29uc3QgZDAgPSBkM1RvdWNoZXMgJiYgZDNFdmVudC50cmFuc2Zvcm0ucmVzY2FsZVgoeFNjYWxlKS5kb21haW4oKVxuICAgICAgICAvLyAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ1pvb20gVHJhbnNmb3JtIFN0YXJ0JywgbmV3IERhdGUoZDFbMF0pKVxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdab29tIFRyYW5zZm9ybSBFbmQnLCBuZXcgRGF0ZShkMVsxXSkpXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgLy8gY2FsbFpvb20oZDEpXG4gICAgICAgIC8vIH0pXG4gICAgICAvLyB0aGlzLmJydXNoWCA9IGJydXNoWCgpXG4gICAgICAvLyAgIC5leHRlbnQoW1xuICAgICAgLy8gICAgIFswLCAwXSxcbiAgICAgIC8vICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgIC8vICAgXSlcbiAgICAgIC8vIC50b3VjaGFibGUodHJ1ZSlcblxuICAgICAgdGhpcy56b29tWERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmdcbiAgICAgIC8vIHRoaXMuem9vbVhEaXYgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lXG4gICAgICAvLyB0aGlzLnpvb21YRGl2ID0gdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5jYWxsKHRoaXMuem9vbVgpXG5cbiAgICAgIC8vIFVzZSB0aGUgc2FtZSBtb3VzZUJydXNoIGZvciBib3RoIHhCcnVzaCBhbmQgdG9vbHRpcFxuICAgICAgLy8gdGhpcy5icnVzaFhEaXYgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgIC8vICAgLmNhbGwodGhpcy5icnVzaFgpXG5cbiAgICAgIC8vIGJydXNoT3ZlcmxheSA9IHRoaXMuYnJ1c2hYRGl2LnNlbGVjdEFsbCgncmVjdC5vdmVybGF5JylcblxuICAgICAgLy8gdGhpcy5icnVzaFggPSBicnVzaFgoKVxuICAgICAgLy8gICAuZXh0ZW50KFtcbiAgICAgIC8vICAgICBbMCwgMF0sXG4gICAgICAvLyAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICAvLyAgIF0pXG5cblxuICAgICAgLy8gVXNlIHRoZSBzYW1lIG1vdXNlQnJ1c2ggZm9yIGJvdGggeEJydXNoIGFuZCB0b29sdGlwXG4gICAgICB0aGlzLmJydXNoWERpdiA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIubW91c2VCcnVzaFxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3NlbGVjdGlvbicpXG4gICAgICAgIC5hdHRyKCdjdXJzb3InLCAnbW92ZScpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsICcwLjMnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcblxuICAgICAgbGV0IGlzR2VzdHVyZSA9IGZhbHNlXG4gICAgICBsZXQgc3RhcnRQb3MgPSAwXG4gICAgICBsZXQgZW5kUG9zID0gMFxuICAgICAgdGhpcy56b29tWERpdlxuICAgICAgICAuc3R5bGUoJ3RvdWNoLWFjdGlvbicsICdwYW4teScpXG4gICAgICAgIC5vbigndG91Y2hzdGFydC56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRoID0gZDNUb3VjaGVzKHRoaXMpXG4gICAgICAgICAgLy8gZDNFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaXNHZXN0dXJlID0gZDNFdmVudC50b3VjaGVzICYmIGQzRXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDJcbiAgICAgICAgICBpZiAoaXNHZXN0dXJlICYmIHRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgeFBvcyA9ICh0aFswXVswXSAtIHNlbGYub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIHN0YXJ0UG9zID0geFBvc1xuICAgICAgICAgICAgZW5kUG9zID0geFBvc1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0IFNlbGVjdCcpXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWJydXNoWFNlbGVjdGlvbihzdGFydFBvcywgZW5kUG9zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgLm9uKCd0b3VjaG1vdmUuem9vbScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCB0aCA9IGQzVG91Y2hlcyh0aGlzKVxuICAgICAgICAgIC8vIGQzRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZlJywgdGgpXG4gICAgICAgICAgd2luZG93Lm12ID0gdGhcbiAgICAgICAgICBpZiAoaXNHZXN0dXJlICYmIHRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgeFBvczEgPSAodGhbMF1bMF0gLSBzZWxmLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICBjb25zdCB4UG9zMiA9ICh0aFsxXVswXSAtIHNlbGYub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIGxldCB4TWluID0geFBvczFcbiAgICAgICAgICAgIGxldCB4TWF4ID0geFBvczJcbiAgICAgICAgICAgIGlmICh4UG9zMSA+IHhQb3MyKSB7XG4gICAgICAgICAgICAgIHhNaW4gPSB4UG9zMlxuICAgICAgICAgICAgICB4TWF4ID0geFBvczFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGltZUFyci5wdXNoKHRpbWUpXG4gICAgICAgICAgICBpZiAoc3RhcnRQb3MgPiB4TWluKSB7XG4gICAgICAgICAgICAgIC8vIHN0YXJ0UG9zID0geE1pblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRQb3MgPSB4TWluXG4gICAgICAgICAgICBpZiAoZW5kUG9zIDwgeE1heCkge1xuICAgICAgICAgICAgICAvLyBlbmRQb3MgPSB4TWF4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmRQb3MgPSB4TWF4XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlIFNlbGVjdCcpXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWJydXNoWFNlbGVjdGlvbihzdGFydFBvcywgZW5kUG9zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgLm9uKCd0b3VjaGVuZC56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRoID0gZDNUb3VjaGVzKHRoaXMpXG4gICAgICAgICAgLy8gZDNFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2VuZCcsIHRoKVxuICAgICAgICAgIGlmIChpc0dlc3R1cmUgJiYgdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB4UG9zID0gKHRoWzBdWzBdIC0gc2VsZi5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9zID4geFBvcykge1xuICAgICAgICAgICAgICBzdGFydFBvcyA9IHhQb3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmRQb3MgPCB4UG9zKSB7XG4gICAgICAgICAgICAgIGVuZFBvcyA9IHhQb3NcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRWYWwgPSB4U2NhbGUuaW52ZXJ0KHN0YXJ0UG9zKVxuICAgICAgICAgICAgY29uc3Qgc3RhcnREdCA9IE1hdGgucm91bmQoc3RhcnRWYWwpXG5cbiAgICAgICAgICAgIGNvbnN0IGVuZFZhbCA9IHhTY2FsZS5pbnZlcnQoZW5kUG9zKVxuICAgICAgICAgICAgY29uc3QgZW5kRHQgPSBNYXRoLnJvdW5kKGVuZFZhbClcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpbmFsIFNlbGVjdCcpXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWJydXNoWFNlbGVjdGlvbihzdGFydFBvcywgZW5kUG9zKVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5nZXRDbG9zZXN0WEF4aXNEYXRhKHN0YXJ0RHQsIGRhdGFTZXQpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5nZXRDbG9zZXN0WEF4aXNEYXRhKGVuZER0LCBkYXRhU2V0KSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLnVwZGF0ZWJydXNoWFNlbGVjdGlvbigwLCAwKVxuICAgICAgICAgICAgfSwgNDAwMClcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaXNHZXN0dXJlICYmIGNvbnNvbGUubG9nKCdTdGFydDogJyArIHN0ICsgJyAgRW5kOiAnICsgZWQpXG4gICAgICAgICAgLy8gdGltZUFyciA9IFtdXG4gICAgICAgICAgc3RhcnRQb3MgPSAwXG4gICAgICAgICAgZW5kUG9zID0gMFxuICAgICAgICAgIGlzR2VzdHVyZSA9IGZhbHNlXG4gICAgICAgIH0sIHRydWUpXG5cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCBsZWZ0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVMZWZ0KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktbGVmdCcpXG5cbiAgICAgIC8vIENhbGwgdGhpcyBldmVudCB3aGVuIHlBeGlzIGJydXNoIGlzIGVuZGVkXG4gICAgICB0aGlzLmJydXNoWUxlZnQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZTGVmdERpdi5jYWxsKHNlbGYuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZUxlZnQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZIGF4aXMgdXBvbiB2ZXJ0aWNhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vblkxWm9vbSkgJiYgc2VsZi5vcHRzLm9uWTFab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBkMVswXSwgZDFbMV0pXG5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHkgYXhpcyBicnVzaCBmb3IgdmVydGljYWwgcmlnaHQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZVJpZ2h0KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0ID0gYnJ1c2hZKClcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1yaWdodCcpXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZUmlnaHREaXYuY2FsbChzZWxmLmJydXNoWVJpZ2h0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlUmlnaHQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWTIgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTJab29tKSAmJiBzZWxmLm9wdHMub25ZMlpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBicnVzaE92ZXJsYXkgJiYgdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5yZWdpc3RlcihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIG1vdXNlIGlzIGNsaWNrZWQgb3IgZG93biwgZW5hYmxlIHpvb20gYnJ1c2ggYW5kIGl0cyBtb3VzZSBjdXJzb3JcbiAgICAgIGJydXNoT3ZlcmxheVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBicnVzaE92ZXJsYXkuc3R5bGUoJ2N1cnNvcicsICdjb2wtcmVzaXplJylcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBicnVzaE92ZXJsYXkuc3R5bGUoJ2N1cnNvcicsICdhdXRvJylcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMudXBkYXRlKClcblxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICAvLyBpZiAodGhpcy5icnVzaFgpIHtcbiAgICAvLyAgIHRoaXMuYnJ1c2hYLmV4dGVudChbXG4gICAgLy8gICAgIFswLCAwXSxcbiAgICAvLyAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgLy8gICBdKVxuICAgIC8vXG4gICAgLy8gICB0aGlzLmJydXNoWERpdi5jYWxsKHRoaXMuYnJ1c2hYKVxuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLmJydXNoWUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWUxlZnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHRcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdlxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWVJpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWUxlZnREaXYgJiYgdGhpcy5icnVzaFlMZWZ0RGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ICYmIHRoaXMuYnJ1c2hZUmlnaHREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgaWYgKHRoaXMuYnJ1c2hYRGl2KSB7XG4gICAgICB0aGlzLmJydXNoWERpdi5jYWxsKHRoaXMuYnJ1c2hYLm1vdmUsIG51bGwpXG4gICAgICB0aGlzLmJydXNoWERpdiAmJiB0aGlzLmJydXNoWERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlMZWZ0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYuY2FsbCh0aGlzLmJydXNoWUxlZnQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodERpdikge1xuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==