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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL21vdXNlLWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvTGluZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TdGFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvVGltZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vdmMvLi96b29tL2luZGV4VG91Y2guanMiXSwibmFtZXMiOlsiQXhpcyIsIm9wdHMiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsIm9yaWVudCIsImxhYmVsIiwidW5pdCIsInJhbmdlU2NhbGUiLCJkb21haW5TY2FsZSIsInNjYWxlVHlwZSIsImF4aXNDbGFtcCIsInRpY2tOdW1iZXIiLCJyb3RhdGVUZXh0IiwidGV4dExpbWl0IiwidGlja0Zvcm1hdHRlciIsInNob3dHcmlkTGluZXMiLCJ0aWNrUGFkZGluZyIsImNvbnN0YW50cyIsIlRJQ0tfUEFERElORyIsInNjYWxlUGFkZGluZyIsIlNDQUxFX1BBRERJTkciLCJ2aXNpYmxlIiwiYXhpcyIsInNjYWxlIiwic2NhbGVCYW5kIiwic2NhbGVMaW5lYXIiLCJVTklUU19USU1FIiwic2NhbGVUaW1lIiwiRElSX0JPVFRPTSIsImF4aXNCb3R0b20iLCJESVJfVE9QIiwiYXhpc1RvcCIsInRpY2tTaXplSW5uZXIiLCJjaGFydCIsImNoYXJ0SGVpZ2h0IiwidGlja1ZhbHVlcyIsInNlbGYiLCJESVJfTEVGVCIsImF4aXNMZWZ0IiwiRElSX1JJR0hUIiwiYXhpc1JpZ2h0IiwiY2hhcnRXaWR0aCIsImlzRnVuY3Rpb24iLCJleHRlcm5hbEZvcm1hdHRlciIsInZhbCIsInVuc2hpZnQiLCJ1cGRhdGUiLCJ0cmFuc2Zvcm1BdHRyIiwiYXhpc1RhZyIsImdyYXBoWm9uZSIsImFwcGVuZCIsImF0dHIiLCJ0aWNrRm9ybWF0IiwiYXhpc0xhYmVsVGFnIiwidGV4dCIsImNsYXNzZWQiLCJ4VHJhbnMiLCJ5VHJhbnMiLCJyb3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJYX0FYSVNfTEFCRUxfWSIsIm1hcmdpbiIsImxlZnQiLCJCUlVTSFlfQlVGRkVSIiwicmlnaHQiLCJsZW5ndGgiLCJwYWRkaW5nIiwiY2xhbXAiLCJyYW5nZSIsImRvbWFpbiIsImlzTnVtYmVyIiwidGlja1ZhbCIsIm5ld1RpY2siLCJkYXlMZW5ndGgiLCJtaW51dGVMZW5ndGgiLCJ0aWNrcyIsImNhbGwiLCJsaW1pdFRleHQiLCJ0aWNrRm10IiwiZW1wdHlGbiIsInNlbGVjdEFsbCIsInN0eWxlIiwiZCIsImkiLCJ0cnVuY2F0ZVRleHQiLCJzaG93RmxhZyIsInJlbW92ZSIsIkNoYXJ0Q29tcG9uZW50IiwiVGltZVNlcmllc0NoYXJ0IiwiY29udGFpbmVyIiwic3RhcnRUaW1lIiwiRGF0ZSIsImRhdGFQYXJzZXIiLCJCYXNpY1RTUGFyc2VyIiwiQ2hhcnRBeGlzUGFyc2VyIiwiRXJyb3IiLCJpc09iamVjdCIsIm9wdGlvbnMiLCJkYXRhRXhlY3V0b3IiLCJhZGREZWZhdWx0VFNPcHRpb25zIiwiY2hhcnRJbml0aWxpemUiLCJkcmF3IiwiYXhpc09wdGlvbnMiLCJ5UmFuZ2UiLCJ5UmFuZ2UyIiwidGltZUluZm8iLCJnZXRPYmplY3QiLCJ5QXhpcyIsImNoYXJ0Q29tcG9uZW50c0FyciIsInB1c2giLCJ5QXhpczIiLCJ0aW1lUmFuZ2UiLCJ4QXhpcyIsInRvb2x0aXBPcHRzIiwidG9vbHRpcCIsIlRvb2x0aXAiLCJ6b29tT3B0cyIsIm1vdXNlSGFuZGxlciIsIk1vdXNlSGFuZGxlciIsInpvb20iLCJ6b29tQnJ1c2giLCJab29tIiwib25ab29tIiwib25YWm9vbSIsIm9uWTFab29tIiwib25ZMlpvb20iLCJzZXJpZXMiLCJUaW1lU2VyaWVzIiwibGVnZW5kIiwibGVnZW5kcyIsIlRpbWVTZXJpZXNMZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJkaXNhYmxlU2VyaWVzVG9nZ2xlIiwib25MZWdlbmRDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYWZ0ZXJEcmF3IiwicmVTY2FsZVlBeGlzIiwiY2hhcnRSZXNwb25zaXZlIiwidHJpZ2dlck1vdXNlQWN0aW9uIiwidGltZURpZmYiLCJnZXRUaW1lIiwib25Db21wbGV0ZSIsImF4aXNTcGVjaWZpZXIiLCJ0aWNrVmFsQXJyIiwiZGlmZlZhbCIsInJhbmdlVmFsIiwieU1heCIsImFwcGx5WTFBeGlzIiwiYXBwbHlZMkF4aXMiLCJtb2RpZnlBeGlzUHJvcHMiLCJyZVNjYWxlQXhpcyIsInJlcXVpcmVkV2lkdGgiLCJjbGFzcyIsIm1heFRleHQiLCJkdW1teUciLCJzdmciLCJ0aWNrc0FyciIsInNlbGVjdCIsImVhY2giLCJ0aWNrSHRtbCIsImRhdGEiLCJlbnRlciIsIlN0cmluZyIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsInJvdW5kIiwiWV9BWElTX1NQQUNFIiwiY2hhcnRGdWxsU3BhY2UiLCJ3aWR0aCIsIkNoYXJ0IiwiZGF0YU9wdGlvbnMiLCJjb25zdHJ1Y3RDaGFydERhdGEiLCJjb25zdHJ1Y3RYQXhpc0luZm8iLCJjb25zdHJ1Y3RQbG90SW5mbyIsImNvbnN0cnVjdFlBeGlzSW5mbyIsImVyciIsIm9uRXJyb3IiLCJyZXNKc29uIiwic2VyaWVzRGF0YSIsInRpbWVzZXJpZXMiLCJjb2x1bW5zIiwidmFsdWVzIiwidmFsaWRKU09OVHlwZSIsInRpbWVTdGFtcEluZGV4IiwiZmlyc3RUaW1lIiwiaXNEYXRlIiwic3RhcnQiLCJmb3JFYWNoIiwiZ2V0RGF0ZUZyb21FcG9jIiwiY2hhcnREYXRhIiwiZGF0YUluZGV4IiwiZWFjaFBsb3RTZXQiLCJwbG90U2V0IiwicGxvdEluZm8iLCJmaW5kRWFjaFBsb3RSYW5nZSIsImtleSIsIm1pbiIsIm1heCIsIm1pblZhbCIsIm1heFZhbCIsInN0YWNrIiwicGxvdCIsImVhY2hQbG90IiwiSW5maW5pdHkiLCJwbG90RGF0YSIsInZhbHVlUmFuZ2UiLCJ2YWxEYXRhIiwibWVtYmVyQXJyIiwic3RhY2tPcmRlck1lbWJlcnMiLCJzdW0iLCJtZW1iZXIiLCJuYW1lIiwiYWxsTWF4IiwiYWxsTWF4MiIsInBsb3RBeGlzIiwiYWxsTWluIiwiYWxsTWluMiIsInlNaW4iLCJyZWR1Y2UiLCJhIiwiYiIsImluZCIsImRhdGFDb2xvckFyciIsImNvbG9yIiwieUxlZnQiLCJ5UmlnaHQiLCJyZWZpbmVOYW1lIiwicmVmaW5lU3RyaW5nIiwiaXNCb29sZWFuIiwiYmFyT3JkZXJNZW1iZXJzIiwicmVnaXN0ZXJGbiIsIm1vdXNlQnJ1c2giLCJ0b3AiLCJpc1RvdWNoU2NyZWVuIiwiY2FsbGJhY2siLCJmdW4iLCJMaW5lIiwibGluZURhdGEiLCJ5QXhpc1RhcmdldCIsInhBeGlzVGFyZ2V0IiwieCIsImluZGV4T2YiLCJ5IiwibGluZSIsImRlZmluZWQiLCJsaW5lVGFnIiwiY2xpcEVsZW1lbnQiLCJsaW5lV2lkdGgiLCJzZXJpZXNOYW1lIiwiU3RhY2tBcmVhIiwic3RhY2tEYXRhIiwic3RhY2tPcmRlckluZGV4IiwiZmlsdGVyIiwiZWxlIiwibWFwIiwiZDNTdGFjayIsImFyZWEiLCJ5MCIsInkxIiwia2V5cyIsIm9yZGVyIiwic3RhY2tPcmRlck5vbmUiLCJvZmZzZXQiLCJzdGFja09mZnNldE5vbmUiLCJzdGFja1Zpc2libGVPcmRlciIsInN0YWNrTGF5ZXIiLCJzdGFja01lbWJlciIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiU2VyaWVzIiwiVGltZVNlcmllc1Rvb2x0aXAiLCJjcm9zc0hhaXJzIiwiZW5hYmxlIiwiZm9ybWF0IiwidG9vbFRpcERpdiIsIlRPT0xUSVBfVE9QX0JVRkZFUiIsInJlZ2lzdGVyIiwieFNjYWxlIiwiZGF0ZUluZGV4IiwiZGF0YVNldCIsImJpc2VjdERhdGUiLCJiaXNlY3RvciIsIm1vdXNlRXZ0IiwieE1vdXNlIiwiZDNNb3VzZSIsInlNb3VzZSIsInhWYWwiLCJpbnZlcnQiLCJmb3VuZCIsImRCZWZvcmUiLCJkUHJldiIsImRGb3VuZCIsInRvb2xUaXBEYXRhIiwiZGF0YVBhcnNlTGVuIiwidmlzaWJsZURhdGFJbmRleCIsInBsIiwibXVsdGlBcnJNYXAiLCJkU2V0IiwiaW5kZXgiLCJzb3J0IiwibWF4SW5kIiwibXAiLCJhcnJTZXQiLCJkYXRlSW50UmFuZ2UiLCJhYnMiLCJob3ZlciIsImV2ZW50TmFtZSIsIm9uIiwiaGlkZSIsInhQb3MiLCJ5UG9zIiwiZGlzcGxheURhdGEiLCJzaG93SGlkZSIsInBlcmNlbnRhZ2VEaWZmIiwiYm94IiwiZWxlbWVudE9mZnNldCIsInJvb3RQb3MiLCJoZWlnaHQiLCJodG1sIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJicnVzaFhEaXYiLCJ5U2NhbGVMZWZ0IiwieVNjYWxlUmlnaHQiLCJicnVzaE92ZXJsYXkiLCJ6b29tWCIsInNjYWxlRXh0ZW50IiwidHJhbnNsYXRlRXh0ZW50IiwiZXh0ZW50IiwidG91Y2hhYmxlIiwiem9vbVhEaXYiLCJpc0dlc3R1cmUiLCJ0aCIsImQzVG91Y2hlcyIsImQzRXZlbnQiLCJ0b3VjaGVzIiwidXBkYXRlYnJ1c2hYU2VsZWN0aW9uIiwid2luZG93IiwibXYiLCJ4UG9zMSIsInhQb3MyIiwieE1pbiIsInhNYXgiLCJzdGFydFZhbCIsInN0YXJ0RHQiLCJlbmRWYWwiLCJlbmREdCIsImdldENsb3Nlc3RYQXhpc0RhdGEiLCJzZXRUaW1lb3V0IiwiYnJ1c2hZTGVmdCIsImJydXNoWSIsImJydXNoWUxlZnREaXYiLCJzZWxlY3Rpb24iLCJtb3ZlIiwiZDAiLCJkMSIsImJydXNoWVJpZ2h0IiwiYnJ1c2hZUmlnaHREaXYiLCJicnVzaFgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBOztJQUVxQkEsSTs7O0FBQ25CLGdCQUFhQyxJQUFiLEVBQW1C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QUFMLENBQWUzTyxNQUFmLEVBQWxCO0FBQ0Q7QUFDRCxVQUFJLEtBQUt5USxhQUFULEVBQXdCO0FBQ3RCLGFBQUtBLGFBQUwsQ0FBbUJuUixJQUFuQixDQUF3QixLQUFLaVIsVUFBTCxDQUFnQkksSUFBeEMsRUFBOEMsSUFBOUM7QUFDQSxhQUFLRixhQUFMLENBQW1CelEsTUFBbkI7QUFDRDtBQUNELFVBQUksS0FBSytRLGNBQVQsRUFBeUI7QUFDdkIsYUFBS0EsY0FBTCxDQUFvQnpSLElBQXBCLENBQXlCLEtBQUt3UixXQUFMLENBQWlCSCxJQUExQyxFQUFnRCxJQUFoRDtBQUNBLGFBQUtJLGNBQUwsQ0FBb0IvUSxNQUFwQjtBQUNEO0FBQ0QsV0FBS3RGLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUE1VCtCdUYsOEQ7O0FBQWJrQyxtRSIsImZpbGUiOiJ0aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtcbiAgYXhpc0JvdHRvbSwgYXhpc1RvcCwgYXhpc0xlZnQsIGF4aXNSaWdodCxcbiAgc2NhbGVCYW5kLCBzY2FsZUxpbmVhciwgc2NhbGVUaW1lXG59IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2VtcHR5Rm4sIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCB0cnVuY2F0ZVRleHR9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHVuaXQ6ICcnLFxuICAgICAgcmFuZ2VTY2FsZTogWzAsIDEwMDBdLFxuICAgICAgZG9tYWluU2NhbGU6IFswLCAxMDBdLFxuICAgICAgc2NhbGVUeXBlOiAnJyxcbiAgICAgIGF4aXNDbGFtcDogdHJ1ZSxcbiAgICAgIHRpY2tOdW1iZXI6IG51bGwsXG4gICAgICByb3RhdGVUZXh0OiBmYWxzZSxcbiAgICAgIHRleHRMaW1pdDogOCxcbiAgICAgIHRpY2tGb3JtYXR0ZXI6IGZhbHNlLCAvLyBVc2UgZDMgdGlja0Zvcm1hdHRlclxuICAgICAgc2hvd0dyaWRMaW5lczogZmFsc2UsXG4gICAgICB0aWNrUGFkZGluZzogY29uc3RhbnRzLlRJQ0tfUEFERElORyxcbiAgICAgIHNjYWxlUGFkZGluZzogY29uc3RhbnRzLlNDQUxFX1BBRERJTkcsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICAvLyBDcmVhdGUgQXhpcyBhbmQgU2NhbGUgYmFzZWQgb24gaW5wdXQgb3B0aW9uc1xuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgICBpZiAodGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZVRpbWUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNCb3R0b20oKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzVG9wKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCkpXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBIb2xkcyBhbGwgdGljayB2YWx1ZXMgdGhhdCBheGlzIHNob3dzXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3knKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNMZWZ0KClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzUmlnaHQoKVxuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigwKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikpIHtcbiAgICAgICAgLy8gSWYgZXh0ZXJuYWwgZm9ybWF0dGVyIGlzIHByb3ZpZGVkLCBtb2RpZnkgZm9ybWF0dGVyIHRvIHBvcHVsYXRlIHRpY2tWYWx1ZXNcbiAgICAgICAgY29uc3QgZXh0ZXJuYWxGb3JtYXR0ZXIgPSB0aGlzLm9wdHMudGlja0Zvcm1hdHRlclxuICAgICAgICB0aGlzLm9wdHMudGlja0Zvcm1hdHRlciA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBzZWxmLnRpY2tWYWx1ZXMudW5zaGlmdCh2YWwpXG4gICAgICAgICAgcmV0dXJuIGV4dGVybmFsRm9ybWF0dGVyKHZhbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMudGlja1BhZGRpbmcgPiAwKSB7XG4gICAgICB0aGlzLmF4aXMudGlja1BhZGRpbmcodGhpcy5vcHRzLnRpY2tQYWRkaW5nKVxuICAgIH1cbiAgfVxuXG4gIG1vZGlmeUF4aXNQcm9wcyAob3B0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdHMsIG9wdHMpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gbnVsbFxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKDAsJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHR9KWBcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgYHZjLWF4aXMgdmMtYXhpcy0ke3RoaXMub3B0cy5vcmllbnR9IHZjLWF4aXMtJHt0aGlzLm9wdHMuY2xhc3NOYW1lfWApXG5cblxuICAgIC8vIElmIG5vIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgYXhpcyB1c2VzIGQzIGRlZmF1bHQgZm9ybWF0dGVyXG4gICAgaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikgJiYgdGhpcy5heGlzLnRpY2tGb3JtYXQodGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpXG5cbiAgICAvLyBBZGQgTGFiZWwgdG8gQXhpc1xuICAgIGlmICh0aGlzLm9wdHMubGFiZWwpIHtcbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgPSB0aGlzLmF4aXNUYWcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWF4aXMtbGFiZWwnKVxuICAgICAgICAudGV4dCh0aGlzLm9wdHMubGFiZWwpXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgLy8gSUYgbm90IHZpc2libGUsIERvbnQgc2hvdyB0aGUgYXhpcywgYnV0IHN0aWxsIHNjYWxlIGFuZCBwbG90IG9uIGdyYXBoWm9uZSwgc28gdGhhdCBhbGwgc2VyaWVzIGNhbiBiZSBwbG90dGVkXG4gICAgIXRoaXMub3B0cy52aXNpYmxlICYmIHRoaXMuYXhpc1RhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCB0cnVlKVxuICB9XG5cbiAgLy8gVXBkYXRlcyBncmFwaCBBeGlzIGJhc2VkIG9uIG5ldyB3aWR0aCBhbmQgbW9kaWZ5IHJhbmdlLCBkb21haW4gYW5kIHRpY2tzXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLm9wdHMucmFuZ2VTY2FsZSA9IFswLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aF1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSwwKWBcbiAgICB9XG5cblxuICAgIC8vIFBvc2l0aW9uIGxhYmVsLCBzY2FsZSwgdGlja3MsIGF4aXMgYmFzZWQgb24gY2hhcnQgd2lkdGhcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICBsZXQgeFRyYW5zID0gMFxuICAgICAgbGV0IHlUcmFucyA9IDBcbiAgICAgIGxldCByb3RhdGUgPSAwXG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgICAgeFRyYW5zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAvIDIpXG4gICAgICAgIHlUcmFucyA9IGNvbnN0YW50cy5YX0FYSVNfTEFCRUxfWVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQgfHwgdGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgICAgeFRyYW5zID0gLSh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpICsgY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSAyNzBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4VHJhbnMgPSB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnJpZ2h0IC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSA5MFxuICAgICAgICB9XG4gICAgICAgIHlUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWdcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsXG4gICAgICAgICAgYHRyYW5zbGF0ZSgke3hUcmFuc30sJHt5VHJhbnN9KSByb3RhdGUoJHtyb3RhdGV9KWApXG4gICAgfVxuXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cblxuICAgIGxldCBkb21haW5TY2FsZSA9IFt0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0sIHRoaXMub3B0cy5kb21haW5TY2FsZVt0aGlzLm9wdHMuZG9tYWluU2NhbGUubGVuZ3RoIC0gMV1dXG4gICAgaWYgKHRoaXMub3B0cy5zY2FsZVR5cGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICBkb21haW5TY2FsZSA9IHRoaXMub3B0cy5kb21haW5TY2FsZVxuICAgICAgdGhpcy5zY2FsZVxuICAgICAgICAucGFkZGluZyh0aGlzLm9wdHMuc2NhbGVQYWRkaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0NsYW1wICYmIHRoaXMuc2NhbGUuY2xhbXAoKSAvLyBDbGFtcHMgb3V0c2lkZSByYW5nZSB2YWx1ZSB3aXRoaW4gc3BlY3RpZmVkIHJhbmdlIGFuZCBkb21haW5cbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlLnJhbmdlKHRoaXMub3B0cy5yYW5nZVNjYWxlKVxuICAgICAgLmRvbWFpbihkb21haW5TY2FsZSlcblxuICAgIHRoaXMuYXhpcy5zY2FsZSh0aGlzLnNjYWxlKVxuXG4gICAgaWYgKGlzTnVtYmVyKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgbGV0IHRpY2tWYWwgPSB0aGlzLm9wdHMudGlja051bWJlclxuICAgICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3gnICYmIHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICAvLyBtb2RpZnkgeHRpY2sgdG8gZGlzcGxheSBsZXNzIHRpY2tzIG9uIGxvd2VyIGNoYXJ0IHdpZHRoIG9yIGhhcyBsZXNzIGRheXNcbiAgICAgICAgY29uc3QgbmV3VGljayA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyA2MClcbiAgICAgICAgY29uc3QgZGF5TGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDYwICogMjQgKiAxMDAwKSkgKyAxXG4gICAgICAgIGlmIChkYXlMZW5ndGggPiAyICYmIGRheUxlbmd0aCA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gZGF5TGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW51dGVMZW5ndGggPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuZG9tYWluU2NhbGVbMV0gLSB0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0pIC8gKDYwICogMTAwMCkpXG4gICAgICAgIGlmIChtaW51dGVMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG1pbnV0ZUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1RpY2sgPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG5ld1RpY2tcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmF4aXMudGlja3ModGlja1ZhbClcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tOdW1iZXIpKSB7XG4gICAgICB0aGlzLmF4aXMudGlja3ModGhpcy5vcHRzLnRpY2tOdW1iZXIoKSlcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybUF0dHIgJiYgdGhpcy5heGlzVGFnLmF0dHIoJ3RyYW5zZm9ybScsIHRoaXMudHJhbnNmb3JtQXR0cilcblxuICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyAmJiB0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkpXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnLmNhbGwodGhpcy5heGlzKVxuXG5cbiAgICBjb25zdCBsaW1pdFRleHQgPSB0aGlzLm9wdHMudGV4dExpbWl0XG4gICAgY29uc3QgdGlja0ZtdCA9IGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpID8gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgOiBlbXB0eUZuXG5cbiAgICBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICdzbGFudCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAuYXR0cigneScsICc4JylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0xLjBlbScpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMTVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC02NSknKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cigneCcsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKDkwKScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYXhpc1RhZyAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgJiYgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVtb3ZlIEF4aXMgSW5zdGFuY2VcbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcucmVtb3ZlKClcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5zY2FsZSA9IG51bGxcbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQge2dldE9iamVjdCwgaXNPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgQ2hhcnQgZnJvbSAnQC9jaGFydHMvQ2hhcnQnXG5pbXBvcnQgQXhpcyBmcm9tICdAL2F4aXMnXG5pbXBvcnQge2FkZERlZmF1bHRUU09wdGlvbnN9IGZyb20gJ0AvaGVscGVycydcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IEJhc2ljVFNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9CYXNpY1RTUGFyc2VyJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQC90b29sdGlwL1RpbWVTZXJpZXNUb29sdGlwJ1xuaW1wb3J0IE1vdXNlSGFuZGxlciBmcm9tICdAL21vdXNlLWhhbmRsZXInXG4vLyBpbXBvcnQgWm9vbSBmcm9tICdAL3pvb20nXG4vLyBpbXBvcnQgWm9vbSBmcm9tICdAL3pvb20vUGluY2hJbmRleCdcbmltcG9ydCBab29tIGZyb20gJ0Avem9vbS9pbmRleFRvdWNoJ1xuaW1wb3J0IFRpbWVTZXJpZXNMZWdlbmQgZnJvbSAnQC9sZWdlbmQvVGltZVNlcmllc0xlZ2VuZCdcbmltcG9ydCBUaW1lU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1RpbWVTZXJpZXMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY1RTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydEF4aXNQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBBZGQgZGVmYXVsdCBvcHRpb25zIHRvIGNoYXJ0XG4gICAgYWRkRGVmYXVsdFRTT3B0aW9ucyh0aGlzLm9wdGlvbnMpXG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcbiAgICBsZXQgYXhpc09wdGlvbnNcbiAgICBjb25zdCB5UmFuZ2UgPSB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgY29uc3QgeVJhbmdlMiA9IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgY29uc3QgdGltZUluZm8gPSB0aGlzLm9wdGlvbnMudGltZUluZm9cblxuICAgIGlmICh5UmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLmxlZnQnKVxuICAgICAgdGhpcy55QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzKVxuICAgIH1cblxuICAgIGlmICh5UmFuZ2UyKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5yaWdodCcpXG4gICAgICB0aGlzLnlBeGlzMiA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ3JpZ2h0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlMixcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmUgKGNoYXJ0IEFQSSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpczIpXG4gICAgfVxuXG4gICAgaWYgKHRpbWVJbmZvLnRpbWVSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueEF4aXMuYm90dG9tJylcbiAgICAgIHRoaXMueEF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3gnLFxuICAgICAgICBvcmllbnQ6ICdib3R0b20nLFxuICAgICAgICByYW5nZVNjYWxlOiBbMCwgdGhpcy5jaGFydFdpZHRoXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHRpbWVJbmZvLnRpbWVSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueEF4aXMpXG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcE9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMudG9vbHRpcCcpXG4gICAgaWYgKHRvb2x0aXBPcHRzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIC4uLnRvb2x0aXBPcHRzXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnRvb2x0aXApXG4gICAgfVxuXG4gICAgY29uc3Qgem9vbU9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMuem9vbScsIHt9KVxuICAgIGlmICgodG9vbHRpcE9wdHMudmlzaWJsZSB8fCB6b29tT3B0cy52aXNpYmxlKSkge1xuICAgICAgdGhpcy5tb3VzZUhhbmRsZXIgPSBuZXcgTW91c2VIYW5kbGVyKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLm1vdXNlSGFuZGxlcilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnpvb20udmlzaWJsZSkge1xuICAgICAgdGhpcy56b29tQnJ1c2ggPSBuZXcgWm9vbSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBvblpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWFpvb20sXG4gICAgICAgIG9uWTFab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblkxWm9vbSxcbiAgICAgICAgb25ZMlpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWTJab29tXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnpvb21CcnVzaClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNlcmllcykge1xuICAgICAgdGhpcy5zZXJpZXMgPSBuZXcgVGltZVNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGVnZW5kLnZpc2libGUpIHtcbiAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBUaW1lU2VyaWVzTGVnZW5kKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIGxlZ2VuZFByZWZpeDogdGhpcy5vcHRpb25zLmxlZ2VuZC5sZWdlbmRQcmVmaXgsXG4gICAgICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUCxcbiAgICAgICAgZGlzYWJsZVNlcmllc1RvZ2dsZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5kaXNhYmxlU2VyaWVzVG9nZ2xlLFxuICAgICAgICBvbkxlZ2VuZENoYW5nZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5vbkxlZ2VuZENoYW5nZVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdUaW1lU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy5jb250YWluZXIuc2VsZWN0KCdzdmcgJyArIHJlU2NhbGVBeGlzW2F4aXNdLmNsYXNzKS5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9IHNlbGVjdCh0aGlzKS50ZXh0KCkgfHwgJydcbiAgICAgICAgaWYgKHRpY2tIdG1sLmxlbmd0aCA+IHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dCA9IHRpY2tIdG1sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgICAuZGF0YShbcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dF0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChTdHJpbmcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gQ29tcHV0ZSByZXF1aXJlZFdpZHRoIGZvciB0aGUgTWF4IHRleHRcbiAgICAgICAgICByZXF1aXJlZFdpZHRoID0gdGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgcmVzcGVjdGl2ZSBtYXJnaW4gdG8gZml0IGluIHRpY2tzIHRleHRcbiAgICAgIHRoaXMubWFyZ2luW2F4aXNdID0gTWF0aC5yb3VuZChyZXF1aXJlZFdpZHRoKSArIGNvbnN0YW50cy5ZX0FYSVNfU1BBQ0VcblxuICAgIH1cbiAgICBkdW1teUcucmVtb3ZlKClcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9ICh0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IHtnZXREYXRlRnJvbUVwb2MsIGdldE9iamVjdCwgcmVmaW5lU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc0Jvb2xlYW59IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVFNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgdGltZXNlcmllcyBKU09OIHBhcnNpbmcgOicsIGVycilcbiAgICAgIHRoaXMub3B0cy5vbkVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKU09OIHJlY2VpdmVkIC0gRXJyb3Igb24gdGltZXNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi50aW1lc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICAvLyBGaW5kIHNlY29uZHMgaW4gdW5pdEFyciB0byBmaW5kIHRoZSB0aW1lU3RhbXBJbmRleFxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gMFxuICAgIGNvbnN0IGZpcnN0VGltZSA9IGRhdGFbMF1bdGltZVN0YW1wSW5kZXhdXG4gICAgaWYgKCF2YWxpZEpTT05UeXBlIHx8ICEoaXNOdW1iZXIoZmlyc3RUaW1lKSB8fCBpc0RhdGUoZmlyc3RUaW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkJylcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQgPSAwXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoc3RhcnQgPiBkW3RpbWVTdGFtcEluZGV4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVGltZSBzZXJpZXMgSlNPTiByZWNlaXZlZDogVGltZXN0YW1wIFZhbHVlcyBtdXN0IGJlIGluIGFzY2VuZGluZyBvcmRlcicpXG4gICAgICB9XG4gICAgICBzdGFydCA9IGRbdGltZVN0YW1wSW5kZXhdXG4gICAgICBkW3RpbWVTdGFtcEluZGV4XSA9IGdldERhdGVGcm9tRXBvYyhkW3RpbWVTdGFtcEluZGV4XSwgdHJ1ZSkgLy8gY29udmVydCBFUE9DIHRvIGRhdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IFtzZXJpZXNEYXRhWzBdW2RhdGFJbmRleF0sIHNlcmllc0RhdGFbKHNlcmllc0RhdGEubGVuZ3RoIC0gMSldW2RhdGFJbmRleF1dXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQgZmluZEVhY2hQbG90UmFuZ2UgPSBmYWxzZVxuICAgIGxldCBrZXlcbiAgICBsZXQgeVJhbmdlID0gbnVsbFxuICAgIGxldCB5UmFuZ2UyID0gbnVsbFxuXG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWF4KSkge1xuICAgICAgICB5UmFuZ2UgPSBbeUF4aXMubWluLCB5QXhpcy5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzMikge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1heCkpIHtcbiAgICAgICAgeVJhbmdlMiA9IFt5QXhpczIubWluLCB5QXhpczIubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHlSYW5nZSBpcyBub3Qgc2V0IGZyb20gZ3JhcGhPcHRpb25zLCB0aGVuIGdvIGluc2lkZVxuICAgIGlmICgoeUF4aXMgJiYgIXlSYW5nZSkgfHwgKHlBeGlzMiAmJiAheVJhbmdlMikpIHtcblxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5taW5WYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5tYXhWYWwpKSB7XG4gICAgICAgICAgZmluZEVhY2hQbG90UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmxlbmd0aCkgfHwgZmluZEVhY2hQbG90UmFuZ2UpIHtcblxuICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAvLyBSZXNldCByYW5nZSBmb3IgZWFjaCBwbG90IGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgY29uc3QgZWFjaFBsb3QgPSBlYWNoUGxvdFNldFtwbG90XVxuICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gSW5maW5pdHlcbiAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IHN0YWNrIHJhbmdlIGZvciBlYWNoIHN0YWNrIGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIGxldCB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgICBjb25zdCBlYWNoUGxvdCA9IGVhY2hQbG90U2V0W3Bsb3RdXG4gICAgICAgICAgICAgIHZhbERhdGEgPSBkW2VhY2hQbG90LmRhdGFJbmRleF1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPCBlYWNoUGxvdC5taW5WYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPiBlYWNoUGxvdC5tYXhWYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgIHN1bSArPSAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPyBkW2VhY2hQbG90U2V0W21lbWJlci5uYW1lXS5kYXRhSW5kZXhdIDogMClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChzdW0gPCBwbG90RGF0YS52YWx1ZVJhbmdlWzBdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW0gPiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0YWNrJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gcGxvdERhdGEudmFsdWVSYW5nZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4pIHtcbiAgICAgICAgICBhbGxNaW4gPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCB0aW1lU3RhbXBJbmRleCA9IGRhdGFPcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICh0aW1lU3RhbXBJbmRleCA9PT0gaW5kKSB7XG4gICAgICAgIGluZCsrXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS5uYW1lID0gcmVmaW5lU3RyaW5nKHBsb3REYXRhLm5hbWUpXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBwbG90RGF0YS5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IHBsb3REYXRhLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgaXNCb29sZWFuKHBsb3REYXRhLnZpc2libGUpICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlID0gcGxvdERhdGEudmlzaWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUhhbmRsZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbiA9IFtdXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hYJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgfVxuXG4gICAgLy8gaWYgKCF0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAvL1xuICAgIC8vIH1cbiAgICAvLyB4LVpvb20gZm9yIGNoYXJ0IGRvZXN0IG5vdCBleGlzdCwgQWRkIHJlY3Qgb3ZlcmxheSBmb3IgYnJ1c2hYRGl2XG4gICAgdGhpcy5tb3VzZUJydXNoLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnb3ZlcmxheScpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuICAgIHRoaXMubW91c2VCcnVzaC5zZWxlY3QoJ3JlY3Qub3ZlcmxheScpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlZ2lzdGVyIChjYWxsYmFjaykge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICB0cmlnZ2VyTW91c2VBY3Rpb24gKCkge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLmZvckVhY2goKGZ1bikgPT4ge1xuICAgICAgZnVuLmNhbGwodGhpcylcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtsaW5lfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgLy8gRG8gbm90IHJlZ2lzdGVyIHRoaXMgY29tcG9uZW50IGluIGNoYXJ0Q29tcG9uZW50c0FyciwgIEFzIHRoZSBzZXJpZXMgY29tcG9uZW50IGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBhbmQgd2lsbCBjYWxsIHRoZSBsaW5lIEFQSXNcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgbGluZURhdGE6IG51bGwsXG4gICAgICB5QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIHhBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0gbGluZSgpXG5cbiAgICBpZiAodGhpcy5vcHRzLnlBeGlzVGFyZ2V0KSB7XG4gICAgICAvLyBGb3Igbm9ybWFsIHNlcmllcywgeUF4aXNUYXJnZXQgcmVmZXJzIHRvIHRoZSBpbmRleCBvZiB0aGlzIHNlcmllcyBpbiBkYXRhIEFyclxuICAgICAgdGhpcy5saW5lXG4gICAgICAgIC5kZWZpbmVkKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSAhPSBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgLy8geEF4aXNUYXJnZXQgcmVmZXJzIHRoZSBpbmRleCBvZiBkYXRlIGluIGRhdGEgQXJyXG4gICAgICAgICAgcmV0dXJuIHgoZFtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB5KGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtbGluZS0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKFt0aGlzLm9wdHMubGluZURhdGFdKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxpbmUtcGxvdCB2Yy1saW5lLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcbiAgICAvLyBBZGRpbmcgdGhlIGxpbmVzIHNlcmllcyBmb3IgZGF0YSB0byBiZSBzaG93blxuICAgIHRoaXMubGluZVRhZy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1saW5lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5saW5lV2lkdGggfHwgJzJweCdcbiAgICAgIH0pXG4gICAgICAuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmxpbmUoZC52YWx1ZXMpIC8vIFZhbHVlcyBhcmUgYXJyYXkgb2YgYXJyYXkgaGF2aW5nIGZvcm1hdCBsaWtlICBbW2RhdGUsIHNlcmllczEsIHNlcmllczIgLi4uLl0sLi4uXVxuICAgICAgfSlcbiAgfVxuXG4gIC8vIFVwZGF0ZSBoYXBwZW5zIHdoZW4gdGhlIGNoYXJ0IGlzIHJlc2l6ZWRcbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gc2VsZi5saW5lKGQudmFsdWVzKVxuICAgIH0pXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZWRyYXcgaXMgY2FsbGVkIHdoZW4gc2VyaWVzIGlzIHRvZ2dsZWQgZnJvbSBMZWdlbmRzXG4gIHJlZHJhdyAoKSB7XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3Qgc2VyaWVzTmFtZSA9IHRoaXMub3B0cy5saW5lRGF0YS5uYW1lXG4gICAgLy8gUmVtb3ZlIGxpbmUgc2VyaWVzXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5yZW1vdmUoKVxuXG4gICAgaWYgKGVhY2hQbG90U2V0ICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdICYmIGVhY2hQbG90U2V0W3Nlcmllc05hbWVdLnZpc2libGUpIHtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuXG4gIH1cbiAgXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5yZW1vdmUoKVxuICAgIHRoaXMubGluZSA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2FyZWEsIHN0YWNrLCBzdGFja09yZGVyTm9uZSwgc3RhY2tPZmZzZXROb25lfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQge2dldE9iamVjdH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2tBcmVhIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgeEF4aXNUYXJnZXQ6ICcnLFxuICAgICAgc3RhY2tEYXRhOiBudWxsLFxuICAgICAgc3RhY2tPcmRlck1lbWJlcnM6IHt9LFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIC8vIERlZmluZSBpbiB3aGF0IG9yZGVyLCBTdGFjayBzZXJpZXMgbmVlZHMgdG8gYmUgcGxvdGVkXG4gICAgdGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sgPSBzdGFjaygpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhKClcbiAgICAgIC54KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiB4KGQuZGF0YVtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgfSlcbiAgICAgIC55MChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkWzBdKSAvLyBJbmRpY2F0ZXMgd2hlcmUgdG8gc3RhcnQgYWxvbmcgWUF4aXNcbiAgICAgIH0pXG4gICAgICAueTEoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZFsxXSkgLy8gSW5kaWNhdGVzIHdoZXJlIHRvIGVuZCBhbG9uZyBZQXhpc1xuICAgICAgfSlcblxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcblxuICAgIHRoaXMub3B0cy5kM1N0YWNrLmtleXModGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCkgLy8gc3BlY2lmeSB0aGUgc3RhY2sgc2VyaWVzIG5hbWVzIGluIGFycmF5IGZvcm1hdFxuICAgIHRoaXMub3B0cy5kM1N0YWNrLm9yZGVyKHN0YWNrT3JkZXJOb25lKSAvLyB1c2UgdGhlIGdpdmVuIHNlcmllcyBvcmRlci5cbiAgICB0aGlzLm9wdHMuZDNTdGFjay5vZmZzZXQoc3RhY2tPZmZzZXROb25lKSAvLyBhcHBseSBhIHplcm8gYmFzZWxpbmUgb24gc3RhcnRcblxuICAgIC8vIFNob3cgc3RhY2sgcGxvdCBmb3Igb25seSBzZXJpZXMgd2hpY2ggYXJlIHZpc2libGVcbiAgICBjb25zdCBzdGFja1Zpc2libGVPcmRlciA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuXG4gICAgdGhpcy5zdGFja0xheWVyID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5zZWxlY3RBbGwoJy52Yy1zdGFjay0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKHRoaXMub3B0cy5kM1N0YWNrKHRoaXMub3B0cy5zdGFja0RhdGEpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXN0YWNrLXBsb3QgdmMtc3RhY2stJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXIuc2VsZWN0KCdzdmcgY2xpcFBhdGgnKVxuXG4gICAgLy8gUExvdCBzdGFja0xheWVyIGJhc2VkIG9uIGVhY2ggc2VyaWVzIHZpc2libGl0eVxuICAgIHRoaXMuc3RhY2tMYXllci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd2Yy1zdGFjayB2Yy1zdGFjay0nICsgc3RhY2tNZW1iZXIubmFtZVxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrTWVtYmVyID0gc3RhY2tWaXNpYmxlT3JkZXJbc2VsZi5vcHRzLnN0YWNrT3JkZXJJbmRleC5pbmRleE9mKGQua2V5KV0gfHwge1xuICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W3N0YWNrTWVtYmVyLm5hbWVdLmNvbG9yXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCB0aGlzLmFyZWEpXG5cbiAgfVxuICBcbiAgLy8gVXBkYXRlIHN0YWNrTGF5ZXIgYmFzZWQgb24gY2hhcnQgcmVzaXplXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdkJywgdGhpcy5hcmVhKVxuICB9XG4gIFxuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIC8vIE1vZGlmeSBzdGFja09yZGVyIGFyciBiYXNlZCBvbiB2aXNpYmxlU2VyaWVzXG4gICAgdGhpcy5vcHRzLnN0YWNrT3JkZXJJbmRleCA9IHRoaXMub3B0cy5zdGFja09yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBzdGFjayBzZXJpZXNcbiAgICB0aGlzLnN0YWNrTGF5ZXIgJiYgdGhpcy5zdGFja0xheWVyLnJlbW92ZSgpXG4gICAgLy8gZHJhdyB3aXRoIG5ldyBzdGFja09yZGVyTWVtYmVyc1xuICAgIHRoaXMuZHJhdygpXG4gIH1cbiAgXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuc3RhY2tMYXllci5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG4gIFxuICByZW1vdmUgKCkge1xuICAgIC8vICB0aGlzLnN0YWNrQXJlYVBhdGgucmVtb3ZlKCk7XG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gbnVsbFxuICAgIHRoaXMuYXJlYSA9IG51bGxcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQge2lzQXJyYXl9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgTGluZSBmcm9tICdAL3Nlcmllcy9MaW5lJ1xuaW1wb3J0IFN0YWNrQXJlYSBmcm9tICdAL3Nlcmllcy9TdGFja0FyZWEnXG5pbXBvcnQgU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1NlcmllcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGEgLy8gQWNjZXB0IGVpdGhlciB0aW1lc2VyaWVzIG9yIHBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICAvLyBDcmVhdGUgcGxvdCBjb21wb25lbnRzIGJhc2VkIG9uIGlucHV0IG9wdGlvbnMgYW5kIGVhY2ggcGxvdCBpbmZvXG4gICAgaXNBcnJheShwbG90SW5mby5zdGFjaykgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaCgocGxvdERhdGEpID0+IHtcbiAgICAgIHRoaXMucGxvdFNlcmllcy5wdXNoKG5ldyBTdGFja0FyZWEoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHN0YWNrRGF0YTogZGF0YSxcbiAgICAgICAgc3RhY2tPcmRlck1lbWJlcnM6IHBsb3REYXRhLnN0YWNrT3JkZXJNZW1iZXJzXG4gICAgICB9KSlcbiAgICB9KVxuXG4gICAgaXNBcnJheShwbG90SW5mby5saW5lKSAmJiBwbG90SW5mby5saW5lLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgTGluZSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeUF4aXNUYXJnZXQ6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmRhdGFJbmRleCxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgdmlzaWJsZTogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSxcbiAgICAgICAgbGluZURhdGE6IHtcbiAgICAgICAgICBuYW1lOiBwbG90RGF0YS5uYW1lLFxuICAgICAgICAgIGNvbG9yOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5jb2xvcixcbiAgICAgICAgICBsaW5lV2lkdGg6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmxpbmVXaWR0aCxcbiAgICAgICAgICB2YWx1ZXM6IGRhdGFcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSlcbiAgfVxuXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBnZXRPYmplY3QsIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2Jpc2VjdG9yLCBkM01vdXNlfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzVG9vbHRpcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjcm9zc0hhaXJzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgLy8gUHJvdmlkZSBiYXNpYyBmb3JtYXR0ZXIgdG8gZGlzcGxheSBob3ZlciBkYXRhXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMub3B0cy5mb3JtYXQpKSB7XG4gICAgICB0aGlzLm9wdHMuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4gVG9vbFRpcCBUZXh0IDogPC9zcGFuPjxici8+PHNwYW4+JHtKU09OLnN0cmluZ2lmeShkKX08L3NwYW4+YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMuY3Jvc3NIYWlycyA9IGZhbHNlXG4gICAgdGhpcy50b29sVGlwRGl2ID0gdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lclxuICAgICAgLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy10b29sdGlwLWRpc3BsYXkgJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBpZiAodGhpcy5vcHRzLmNyb3NzSGFpcnMuZW5hYmxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNyb3NzSGFpcnMgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1saW5lJylcbiAgICAgIHRoaXMuY3Jvc3NIYWlycy5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5LC05OTkpJylcbiAgICAgICAgLmF0dHIoJ3gxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAuYXR0cigneTEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCAtIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIpXG4gICAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ3kyJywgKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wKSlcblxuICAgIH1cblxuICAgIHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIucmVnaXN0ZXIoKCkgPT4ge1xuICAgICAgLy8gUmVnaXN0ZXIgaG92ZXIgYW5kIGhpZGUvc2hvdyB0b29saXAgZXZlbnRzXG4gICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICAgIGNvbnN0IG1vdXNlSGFuZGxlciA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXJcbiAgICAgIGNvbnN0IGRhdGVJbmRleCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgICAgY29uc3QgZGF0YVNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YVxuICAgICAgLy8gRmluZCBuZWFyZXN0IGV4aXN0aW5nIGRhdGUgYW1vbmcgYXJyYXkgb2Ygc29ydGVkIGRhdGVcbiAgICAgIGNvbnN0IGJpc2VjdERhdGUgPSBiaXNlY3RvcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFtkYXRlSW5kZXhdXG4gICAgICB9KS5sZWZ0XG5cbiAgICAgIGNvbnN0IG1vdXNlRXZ0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gT24gbW91c2Vtb3ZlIG9mIHggb3ZlcmxheSwgZmluZCB4LHkgdmFsdWVzIGFuZCB1cGRhdGUgdG9vbHRpcFxuICAgICAgICBjb25zdCB4TW91c2UgPSBkM01vdXNlKHRoaXMpWzBdXG4gICAgICAgIGNvbnN0IHlNb3VzZSA9IGQzTW91c2UodGhpcylbMV1cbiAgICAgICAgY29uc3QgeFZhbCA9IHhTY2FsZS5pbnZlcnQoeE1vdXNlKSAvLyBmaW5kIHhBeGlzIGRhdGUgZm9yIG1vdXNlIHBvc2l0aW9uXG5cbiAgICAgICAgLy8gRG8gYmluYXJ5IHNlYXJjaCBvZiBkYXRhIHNldCBmcm9tIDJuZCBkYXRhIHNldCB0byBlbmRcbiAgICAgICAgY29uc3QgZm91bmQgPSBiaXNlY3REYXRlKGRhdGFTZXQsIHhWYWwsIDEpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZEJlZm9yZSA9IGRhdGFTZXRbZm91bmQgLSAyXVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRQcmV2ID0gZGF0YVNldFtmb3VuZCAtIDFdXG4gICAgICAgIC8vIGdldCBiZWZvcmUgZmluZCBkYXRhU2V0XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRGb3VuZCA9IGRhdGFTZXRbZm91bmRdIHx8IGRQcmV2IC8vIGdldCBmaW5kIGRhdGFTZXRcblxuICAgICAgICBsZXQgdG9vbFRpcERhdGEgPSBkUHJldlxuICAgICAgICBpZiAoZGF0YVNldC5sZW5ndGggPiBzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkge1xuICAgICAgICAgIC8vIE1vcmUgdGhhbiBvbmUgdGljayByZXNpZGUgb24gZWFjaCBwaXhlbC4gSGVuY2UgZmluZCB0aWNrIGhhdmluZyBtYXggdmFsdWUgYW1vbmcgdGhlIGRhdGFzZXRcbiAgICAgICAgICBjb25zdCBkYXRhUGFyc2VMZW4gPSBNYXRoLmZsb29yKGRhdGFTZXQubGVuZ3RoIC8gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpICsgMVxuXG4gICAgICAgICAgY29uc3QgdmlzaWJsZURhdGFJbmRleCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGNvbnN0IHBsIGluIHNlbGYub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsb3QgPSBzZWxmLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0W3BsXVxuICAgICAgICAgICAgaWYgKHBsb3QudmlzaWJsZSkge1xuICAgICAgICAgICAgICB2aXNpYmxlRGF0YUluZGV4W3Bsb3QuZGF0YUluZGV4XSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBtdWx0aUFyck1hcCA9IHt9XG4gICAgICAgICAgLy8gRG8gU2NhbiBmcm9tIHJhbmdlIC1kYXRhUGFyc2VMZW4gdG8gK2RhdGFQYXJzZUxlbiBiZXR3ZWVuIGZvdW5kIGRhdGEgaW5kZXhcbiAgICAgICAgICBmb3IgKGxldCBpbmQgPSAoZm91bmQgLSBkYXRhUGFyc2VMZW4pOyBpbmQgPCAoZm91bmQgKyBkYXRhUGFyc2VMZW4pOyBpbmQrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFTZXRbaW5kXSkge1xuICAgICAgICAgICAgICBjb25zdCBkU2V0ID0gZGF0YVNldFtpbmRdLmZpbHRlcihmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlRGF0YUluZGV4W2luZGV4XVxuICAgICAgICAgICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChkU2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG11bHRpQXJyTWFwW2luZF0gPSBkU2V0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG1heEluZFxuICAgICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICAgICAgICBmb3IgKGNvbnN0IG1wIGluIG11bHRpQXJyTWFwKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJTZXQgPSBtdWx0aUFyck1hcFttcF1cbiAgICAgICAgICAgIGlmIChtYXhWYWwgPCBhcnJTZXRbMF0pIHtcbiAgICAgICAgICAgICAgbWF4VmFsID0gYXJyU2V0WzBdXG4gICAgICAgICAgICAgIG1heEluZCA9IG1wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSBkYXRhU2V0W21heEluZF0gfHwgZEZvdW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRmluZCBuZWFyZXN0IHJlYWNoaW5nIGRhdGUgYW1vbmcgYWJvdmUgdHdvIGRhdGVzXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSAoeFZhbCAtIGRQcmV2W2RhdGVJbmRleF0pID4gKGRGb3VuZFtkYXRlSW5kZXhdIC0geFZhbCkgPyBkRm91bmQgOiBkUHJldlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGVJbnRSYW5nZSA9IGRGb3VuZFtkYXRlSW5kZXhdIC0gZFByZXZbZGF0ZUluZGV4XVxuXG4gICAgICAgIGlmICghZGF0ZUludFJhbmdlICYmIGRCZWZvcmUpIHtcbiAgICAgICAgICBkYXRlSW50UmFuZ2UgPSBkUHJldltkYXRlSW5kZXhdIC0gZEJlZm9yZVtkYXRlSW5kZXhdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZUludFJhbmdlIDwgTWF0aC5hYnMoZEZvdW5kW2RhdGVJbmRleF0gLSB4VmFsKSkge1xuICAgICAgICAgIC8vIElmIGZvdW5kIGlzIG91dHNpZGUgZGF0YSBpbnRlcnZhbCByYW5nZSwgVGhlbiBkYXRhIGRvZXNudCBleGlzdCBmb3IgdGhhdCB0aWNrLlxuICAgICAgICAgIHRvb2xUaXBEYXRhID0gW11cbiAgICAgICAgICB0b29sVGlwRGF0YVtkYXRlSW5kZXhdID0geFZhbFxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5ob3Zlcih4TW91c2UsIHlNb3VzZSwgdG9vbFRpcERhdGEpXG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE5hbWUgPSAnbW91c2Vtb3ZlJ1xuICAgICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgZXZlbnROYW1lID0gJ2RibGNsaWNrJ1xuICAgICAgfVxuICAgICAgbW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLm9uKGV2ZW50TmFtZSwgbW91c2VFdnQpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgICAgbW91c2VIYW5kbGVyLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9KVxuXG4gICAgfSlcbiAgfVxuXG4gIGhvdmVyICh4UG9zLCB5UG9zLCBkaXNwbGF5RGF0YSkge1xuICAgIC8vIFVwZGF0ZSBkaXNwbGF5UGFuZWwgYW5kIGxpbmUgYmFzZWQgb24geCBwb3NpdGlvblxuICAgIHRoaXMuY3Jvc3NIYWlycyAmJiB0aGlzLmNyb3NzSGFpcnMuc2VsZWN0KCdsaW5lJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7eFBvc30sMClgKVxuICAgICAgLmF0dHIoJ3gxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3kxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgLSBjb25zdGFudHMuVE9PTFRJUF9UT1BfQlVGRkVSKVxuICAgICAgLmF0dHIoJ3gyJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3kyJywgKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wKSlcbiAgICB0aGlzLnNob3dIaWRlKHRydWUpXG5cbiAgICBsZXQgcGVyY2VudGFnZURpZmYgPSB4UG9zIC8gdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhcblxuICAgIGlmIChwZXJjZW50YWdlRGlmZiA8IDAuMykge1xuICAgICAgcGVyY2VudGFnZURpZmYgPSAwLjJcbiAgICB9XG4gICAgaWYgKHBlcmNlbnRhZ2VEaWZmID4gMC43KSB7XG4gICAgICBwZXJjZW50YWdlRGlmZiA9IDAuOTVcbiAgICB9XG5cbiAgICBjb25zdCBib3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMudG9vbFRpcERpdilcbiAgICBjb25zdCByb290UG9zID0gZWxlbWVudE9mZnNldCh0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLnJvdW5kKHJvb3RQb3MubGVmdCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHhQb3MgLSBib3gud2lkdGggKiBwZXJjZW50YWdlRGlmZikgKyAncHgnXG4gICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZChyb290UG9zLnRvcCAtIGJveC5oZWlnaHQgLSA1ICsgY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUiAqIDIpICsgJ3B4J1xuXG5cbiAgICB0aGlzLnRvb2xUaXBEaXZcbiAgICAgIC5zdHlsZSgnbGVmdCcsIGxlZnQpXG4gICAgICAuc3R5bGUoJ3RvcCcsIHRvcClcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgLmh0bWwodGhpcy5vcHRzLmZvcm1hdC5jYWxsKHRoaXMub3B0cy5jaGFydCwgZGlzcGxheURhdGEpKSAvLyBVc2VkIGZvcm1hdC5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG5cbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMudG9vbFRpcERpdiAmJiB0aGlzLnRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2dldE9iamVjdCwgaXNGdW5jdGlvbiwgZW1wdHlGbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7YnJ1c2hZLCBkM0V2ZW50LCBkM1RvdWNoZXMsIHpvb219IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2Jpc2VjdG9yfSBmcm9tICdkMy1hcnJheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBvblpvb206IGVtcHR5Rm4sXG4gICAgICBvblkxWm9vbTogZW1wdHlGbixcbiAgICAgIG9uWTJab29tOiBlbXB0eUZuLFxuICAgIH0sIG9wdHMpXG4gIH1cblxuICBnZXRDbG9zZXN0WEF4aXNEYXRhICh4VmFsLCBkYXRhU2V0KSB7XG4gICAgY29uc3QgZGF0ZUluZGV4ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4XG4gICAgLy8gRmluZCBuZWFyZXN0IGV4aXN0aW5nIGRhdGUgYW1vbmcgYXJyYXkgb2Ygc29ydGVkIGRhdGVcbiAgICBjb25zdCBiaXNlY3REYXRlID0gYmlzZWN0b3IoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkW2RhdGVJbmRleF1cbiAgICB9KS5sZWZ0XG5cbiAgICAvLyBEbyBiaW5hcnkgc2VhcmNoIG9mIGRhdGEgc2V0IGZyb20gMm5kIGRhdGEgc2V0IHRvIGVuZFxuICAgIGNvbnN0IGZvdW5kID0gYmlzZWN0RGF0ZShkYXRhU2V0LCB4VmFsLCAxKVxuXG5cbiAgICBjb25zdCBkUHJldiA9IGRhdGFTZXRbZm91bmQgLSAxXVxuICAgIC8vIGdldCBiZWZvcmUgZmluZCBkYXRhU2V0XG5cbiAgICBjb25zdCBkRm91bmQgPSBkYXRhU2V0W2ZvdW5kXSB8fCBkUHJldiAvLyBnZXQgZmluZCBkYXRhU2V0XG5cbiAgICByZXR1cm4gZEZvdW5kXG4gIH1cblxuXG4gIHVwZGF0ZWJydXNoWFNlbGVjdGlvbiAoc3RhcnRQb3MsIGVuZFBvcykge1xuICAgIHRoaXMuYnJ1c2hYRGl2XG4gICAgICAuYXR0cigneCcsIHN0YXJ0UG9zKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgKGVuZFBvcyAtIHN0YXJ0UG9zKSlcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVMZWZ0ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVSaWdodCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCBicnVzaE92ZXJsYXkgPSBudWxsXG4gICAgaWYgKHhTY2FsZSkge1xuXG4gICAgICAvLyBDcmVhdGUgeCBheGlzIGJydXNoIGZvciBab29tIG9wZXJhdGlvblxuICAgICAgdGhpcy56b29tWCA9IHpvb20oKVxuICAgICAgICAuc2NhbGVFeHRlbnQoWzAsIGRhdGFTZXQubGVuZ3RoXSlcbiAgICAgICAgLnRyYW5zbGF0ZUV4dGVudChbXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCwgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3BdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XV0pXG4gICAgICAgIC5leHRlbnQoW1t0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wXSwgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXSlcbiAgICAgICAgLnRvdWNoYWJsZSgoKSA9PiB0cnVlKVxuICAgICAgICAvLyAub24oJ3pvb20nLCAoLi4uYXJncykgPT4ge1xuICAgICAgICAvLyAgIHZhciB0cmFuc2Zvcm0gPSB6b29tVHJhbnNmb3JtKHRoaXMpXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coJ0FyZycsIGFyZ3MpXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3RyYW4nLCB0cmFuc2Zvcm0udG9TdHJpbmcoKSlcbiAgICAgICAgLy8gICBjb25zdCBkMCA9IGQzVG91Y2hlcyAmJiBkM0V2ZW50LnRyYW5zZm9ybS5yZXNjYWxlWCh4U2NhbGUpLmRvbWFpbigpXG4gICAgICAgIC8vICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnWm9vbSBUcmFuc2Zvcm0gU3RhcnQnLCBuZXcgRGF0ZShkMVswXSkpXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ1pvb20gVHJhbnNmb3JtIEVuZCcsIG5ldyBEYXRlKGQxWzFdKSlcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAvLyBjYWxsWm9vbShkMSlcbiAgICAgICAgLy8gfSlcbiAgICAgIC8vIHRoaXMuYnJ1c2hYID0gYnJ1c2hYKClcbiAgICAgIC8vICAgLmV4dGVudChbXG4gICAgICAvLyAgICAgWzAsIDBdLFxuICAgICAgLy8gICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgLy8gICBdKVxuICAgICAgLy8gLnRvdWNoYWJsZSh0cnVlKVxuXG4gICAgICB0aGlzLnpvb21YRGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Z1xuICAgICAgLy8gdGhpcy56b29tWERpdiA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmVcbiAgICAgIC8vIHRoaXMuem9vbVhEaXYgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLmNhbGwodGhpcy56b29tWClcblxuICAgICAgLy8gVXNlIHRoZSBzYW1lIG1vdXNlQnJ1c2ggZm9yIGJvdGggeEJydXNoIGFuZCB0b29sdGlwXG4gICAgICAvLyB0aGlzLmJydXNoWERpdiA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIubW91c2VCcnVzaFxuICAgICAgLy8gICAuY2FsbCh0aGlzLmJydXNoWClcblxuICAgICAgLy8gYnJ1c2hPdmVybGF5ID0gdGhpcy5icnVzaFhEaXYuc2VsZWN0QWxsKCdyZWN0Lm92ZXJsYXknKVxuXG4gICAgICAvLyB0aGlzLmJydXNoWCA9IGJydXNoWCgpXG4gICAgICAvLyAgIC5leHRlbnQoW1xuICAgICAgLy8gICAgIFswLCAwXSxcbiAgICAgIC8vICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgIC8vICAgXSlcblxuXG4gICAgICAvLyBVc2UgdGhlIHNhbWUgbW91c2VCcnVzaCBmb3IgYm90aCB4QnJ1c2ggYW5kIHRvb2x0aXBcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ID0gdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnc2VsZWN0aW9uJylcbiAgICAgICAgLmF0dHIoJ2N1cnNvcicsICdtb3ZlJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAuMycpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuXG4gICAgICBsZXQgaXNHZXN0dXJlID0gZmFsc2VcbiAgICAgIGxldCBzdGFydFBvcyA9IDBcbiAgICAgIGxldCBlbmRQb3MgPSAwXG4gICAgICB0aGlzLnpvb21YRGl2XG4gICAgICAgIC5zdHlsZSgndG91Y2gtYWN0aW9uJywgJ3Bhbi15JylcbiAgICAgICAgLm9uKCd0b3VjaHN0YXJ0Lnpvb20nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgdGggPSBkM1RvdWNoZXModGhpcylcbiAgICAgICAgICBpc0dlc3R1cmUgPSBkM0V2ZW50LnRvdWNoZXMgJiYgZDNFdmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMlxuICAgICAgICAgIGlmIChpc0dlc3R1cmUgJiYgdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB4UG9zID0gKHRoWzBdWzBdIC0gc2VsZi5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgc3RhcnRQb3MgPSB4UG9zXG4gICAgICAgICAgICBlbmRQb3MgPSB4UG9zXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhcnQgU2VsZWN0JylcbiAgICAgICAgICAgIHNlbGYudXBkYXRlYnJ1c2hYU2VsZWN0aW9uKHN0YXJ0UG9zLCBlbmRQb3MpXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKVxuICAgICAgICAub24oJ3RvdWNobW92ZS56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRoID0gZDNUb3VjaGVzKHRoaXMpXG4gICAgICAgICAgY29uc29sZS5sb2coJ21vdmUnLCB0aClcbiAgICAgICAgICB3aW5kb3cubXYgPSB0aFxuICAgICAgICAgIGlmIChpc0dlc3R1cmUgJiYgdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB4UG9zMSA9ICh0aFswXVswXSAtIHNlbGYub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIGNvbnN0IHhQb3MyID0gKHRoWzFdWzBdIC0gc2VsZi5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgbGV0IHhNaW4gPSB4UG9zMVxuICAgICAgICAgICAgbGV0IHhNYXggPSB4UG9zMlxuICAgICAgICAgICAgaWYgKHhQb3MxID4geFBvczIpIHtcbiAgICAgICAgICAgICAgeE1pbiA9IHhQb3MyXG4gICAgICAgICAgICAgIHhNYXggPSB4UG9zMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aW1lQXJyLnB1c2godGltZSlcbiAgICAgICAgICAgIGlmIChzdGFydFBvcyA+IHhNaW4pIHtcbiAgICAgICAgICAgICAgLy8gc3RhcnRQb3MgPSB4TWluXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydFBvcyA9IHhNaW5cbiAgICAgICAgICAgIGlmIChlbmRQb3MgPCB4TWF4KSB7XG4gICAgICAgICAgICAgIC8vIGVuZFBvcyA9IHhNYXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZFBvcyA9IHhNYXhcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGUgU2VsZWN0JylcbiAgICAgICAgICAgIHNlbGYudXBkYXRlYnJ1c2hYU2VsZWN0aW9uKHN0YXJ0UG9zLCBlbmRQb3MpXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKVxuICAgICAgICAub24oJ3RvdWNoZW5kLnpvb20nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgdGggPSBkM1RvdWNoZXModGhpcylcbiAgICAgICAgICBjb25zb2xlLmxvZygnZW5kJywgdGgpXG4gICAgICAgICAgaWYgKGlzR2VzdHVyZSAmJiB0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHhQb3MgPSAodGhbMF1bMF0gLSBzZWxmLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICBpZiAoc3RhcnRQb3MgPiB4UG9zKSB7XG4gICAgICAgICAgICAgIHN0YXJ0UG9zID0geFBvc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZFBvcyA8IHhQb3MpIHtcbiAgICAgICAgICAgICAgZW5kUG9zID0geFBvc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydFZhbCA9IHhTY2FsZS5pbnZlcnQoc3RhcnRQb3MpXG4gICAgICAgICAgICBjb25zdCBzdGFydER0ID0gTWF0aC5yb3VuZChzdGFydFZhbClcblxuICAgICAgICAgICAgY29uc3QgZW5kVmFsID0geFNjYWxlLmludmVydChlbmRQb3MpXG4gICAgICAgICAgICBjb25zdCBlbmREdCA9IE1hdGgucm91bmQoZW5kVmFsKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmluYWwgU2VsZWN0JylcbiAgICAgICAgICAgIHNlbGYudXBkYXRlYnJ1c2hYU2VsZWN0aW9uKHN0YXJ0UG9zLCBlbmRQb3MpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmdldENsb3Nlc3RYQXhpc0RhdGEoc3RhcnREdCwgZGF0YVNldCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmdldENsb3Nlc3RYQXhpc0RhdGEoZW5kRHQsIGRhdGFTZXQpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYudXBkYXRlYnJ1c2hYU2VsZWN0aW9uKDAsIDApXG4gICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpc0dlc3R1cmUgJiYgY29uc29sZS5sb2coJ1N0YXJ0OiAnICsgc3QgKyAnICBFbmQ6ICcgKyBlZClcbiAgICAgICAgICAvLyB0aW1lQXJyID0gW11cbiAgICAgICAgICBzdGFydFBvcyA9IDBcbiAgICAgICAgICBlbmRQb3MgPSAwXG4gICAgICAgICAgaXNHZXN0dXJlID0gZmFsc2VcbiAgICAgICAgfSwgdHJ1ZSlcblxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIGxlZnQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1sZWZ0JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geUF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlMZWZ0RGl2LmNhbGwoc2VsZi5icnVzaFlMZWZ0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlTGVmdC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFkgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTFab29tKSAmJiBzZWxmLm9wdHMub25ZMVpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCByaWdodCBzY2FsZSBvcGVyYXRpb25cbiAgICBpZiAoeVNjYWxlUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hZLXJpZ2h0JylcblxuICAgICAgdGhpcy5icnVzaFlSaWdodC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlSaWdodERpdi5jYWxsKHNlbGYuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh5U2NhbGVSaWdodC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZMiBheGlzIHVwb24gdmVydGljYWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ZMlpvb20pICYmIHNlbGYub3B0cy5vblkyWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIGJydXNoT3ZlcmxheSAmJiB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gbW91c2UgaXMgY2xpY2tlZCBvciBkb3duLCBlbmFibGUgem9vbSBicnVzaCBhbmQgaXRzIG1vdXNlIGN1cnNvclxuICAgICAgYnJ1c2hPdmVybGF5XG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2NvbC1yZXNpemUnKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2F1dG8nKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIC8vIGlmICh0aGlzLmJydXNoWCkge1xuICAgIC8vICAgdGhpcy5icnVzaFguZXh0ZW50KFtcbiAgICAvLyAgICAgWzAsIDBdLFxuICAgIC8vICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAvLyAgIF0pXG4gICAgLy9cbiAgICAvLyAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgpXG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZTGVmdClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAoY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQpXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZTGVmdERpdiAmJiB0aGlzLmJydXNoWUxlZnREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgJiYgdGhpcy5icnVzaFlSaWdodERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFhEaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWUxlZnREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5jYWxsKHRoaXMuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LmNhbGwodGhpcy5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9