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
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/zoom */ "./zoom/index.js");
/* harmony import */ var _zoom_GestureZoom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/zoom/GestureZoom */ "./zoom/GestureZoom.js");
/* harmony import */ var _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/legend/TimeSeriesLegend */ "./legend/TimeSeriesLegend.js");
/* harmony import */ var _series_TimeSeries__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/series/TimeSeries */ "./series/TimeSeries.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");

























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
        var zoomFn = _zoom__WEBPACK_IMPORTED_MODULE_19__["default"];
        if (this.options.chart.isTouchScreen) {
          zoomFn = _zoom_GestureZoom__WEBPACK_IMPORTED_MODULE_20__["default"];
        }
        this.zoomBrush = new zoomFn({
          chart: this,
          onZoom: this.options.zoom.onXZoom,
          onY1Zoom: this.options.zoom.onY1Zoom,
          onY2Zoom: this.options.zoom.onY2Zoom
        });
        this.chartComponentsArr.push(this.zoomBrush);
      }

      if (this.options.series) {
        this.series = new _series_TimeSeries__WEBPACK_IMPORTED_MODULE_22__["default"]({
          chart: this
        });
        // Register the component for draw, update, showHide and remove
        this.chartComponentsArr.push(this.series);
      }

      if (this.options.legend.visible) {
        this.legends = new _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_21__["default"]({
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
          var tickHtml = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_23__["select"])(this).text() || '';
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

      if (!this.opts.chart.options.zoom.visible || this.opts.chart.options.chart.isTouchScreen) {
        // x-Zoom for chart doest not exist, Add rect overlay for brushXDiv or add In case of zoom with touch screen
        this.mouseBrush.append('rect').attr('class', 'overlay').attr('x', 0).attr('y', 0).attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      this.mouseBrush.attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight).attr('transform', 'translate(' + this.opts.chart.margin.left + ',' + this.opts.chart.margin.top + ')');
      if (!this.opts.chart.options.zoom.visible || this.opts.chart.options.chart.isTouchScreen) {
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
      visible: true,
      dots: null
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

      // Adding dots on each points on line if enabled
      if (this.opts.dots && this.opts.dots.visible) {
        var totalLineLength = this.opts.lineData.values.length;
        this.dotsTag = this.lineTag.selectAll('vc-line-dot').data(this.opts.lineData.values).enter().append('circle').attr('class', function (d, index) {
          var className = 'vc-dot vc-dot-count-' + index;
          if (index === 0) {
            className += ' vc-dot-first';
          }
          if (index === totalLineLength - 1) {
            className += ' vc-dot-last';
          }
          return className;
        }).attr('r', this.opts.dots.radius);
      }
    }

    // Update happens when the chart is resized

  }, {
    key: 'update',
    value: function update() {
      var self = this;
      this.lineTag && this.lineTag.select('path').attr('d', function (d) {
        return self.line(d.values);
      });
      // Refresh dots
      if (this.dotsTag) {
        // Find x and y axis based on plotAxis
        var x = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(this.opts, 'chart.xAxis.scale');
        if (this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_TOP) > -1) {
          x = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(this.opts, 'chart.xAxis2.scale');
        }

        var y = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(this.opts, 'chart.yAxis.scale');
        if (this.opts.plotAxis.indexOf(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].DIR_RIGHT) > -1) {
          y = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getObject"])(this.opts, 'chart.yAxis2.scale');
        }
        this.dotsTag.attr('r', this.opts.dots.radius).attr('cx', function (d) {
          // xAxisTarget refers the index of date in data Arr
          return x(d[self.opts.xAxisTarget]);
        }).attr('cy', function (d) {
          return y(d[self.opts.yAxisTarget]);
        });
      }
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
        },
        dots: plotData.dots
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
          }, 25);
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

/***/ "./zoom/GestureZoom.js":
/*!*****************************!*\
  !*** ./zoom/GestureZoom.js ***!
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-array */ "../node_modules/d3-array/src/index.js");












var GestureZoom = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GestureZoom, _ChartComponent);

  function GestureZoom(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, GestureZoom);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (GestureZoom.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(GestureZoom)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      onZoom: _utils__WEBPACK_IMPORTED_MODULE_7__["emptyFn"],
      onY1Zoom: _utils__WEBPACK_IMPORTED_MODULE_7__["emptyFn"],
      onY2Zoom: _utils__WEBPACK_IMPORTED_MODULE_7__["emptyFn"]
    }, opts);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GestureZoom, [{
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
      if (xScale) {

        // Create x axis brush for Zoom operation
        this.zoomX = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["zoom"])().scaleExtent([0, dataSet.length]).translateExtent([[this.opts.chart.margin.left, this.opts.chart.margin.top], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]).extent([[this.opts.chart.margin.left, this.opts.chart.margin.top], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]).touchable(function () {
          return true;
        });

        this.zoomXDiv = this.opts.chart.svg.call(this.zoomX);

        // Use the same mouseBrush for both xBrush and tooltip
        this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush.append('rect').attr('class', 'selection').attr('cursor', 'move').style('opacity', '0.3').attr('x', 0).attr('y', 0).attr('width', 0).attr('height', this.opts.chart.chartHeight);

        var isGesture = false;
        var startPos = 0;
        var endPos = 0;
        var tooltip = self.opts.chart.tooltip;
        this.zoomXDiv.style('touch-action', 'pan-y').on('touchstart.zoom', function () {
          var touches = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Touches"])(this);
          isGesture = _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].touches && _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].touches.length === 2;
          if (isGesture && touches.length) {
            tooltip && tooltip.hide();
            var xPos = touches[0][0] - self.opts.chart.margin.left;
            startPos = xPos;
            endPos = xPos;
            self.updatebrushXSelection(startPos, endPos);
          }
        }, true).on('touchmove.zoom', function () {
          var touches = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Touches"])(this);
          if (isGesture && touches.length) {
            var xPos1 = touches[0][0] - self.opts.chart.margin.left;
            var xPos2 = touches[1][0] - self.opts.chart.margin.left;
            var xMin = xPos1;
            var xMax = xPos2;
            if (xPos1 > xPos2) {
              xMin = xPos2;
              xMax = xPos1;
            }
            startPos = xMin;
            endPos = xMax;
            self.updatebrushXSelection(startPos, endPos);
          }
        }, true).on('touchend.zoom', function () {
          var touches = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Touches"])(this);
          if (isGesture && touches.length) {
            var xPos = touches[0][0] - self.opts.chart.margin.left;
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
            self.updatebrushXSelection(startPos, endPos);

            // Used onZoom.call(), so that external function can have access of chart Instance
            Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(self.opts.onZoom) && self.opts.onZoom.call(self.opts.chart, startDt, endDt);
          }
          self.updatebrushXSelection(0, 0);
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

      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.zoomX) {
        this.zoomX.translateExtent([[this.opts.chart.margin.left, this.opts.chart.margin.top], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]).extent([[this.opts.chart.margin.left, this.opts.chart.margin.top], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]);

        this.brushXDiv.attr('x', 0).attr('y', 0).attr('width', 0).attr('height', this.opts.chart.chartHeight);
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

  return GestureZoom;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GestureZoom);

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
          Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(self.opts.onZoom) && self.opts.onZoom.call(self.opts.chart, d1[0], d1[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL21vdXNlLWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvTGluZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TdGFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvVGltZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vdmMvLi96b29tL0dlc3R1cmVab29tLmpzIiwid2VicGFjazovL3ZjLy4vem9vbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwic2VsZiIsIkRJUl9MRUZUIiwiYXhpc0xlZnQiLCJESVJfUklHSFQiLCJheGlzUmlnaHQiLCJjaGFydFdpZHRoIiwiaXNGdW5jdGlvbiIsImV4dGVybmFsRm9ybWF0dGVyIiwidmFsIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJUaW1lU2VyaWVzQ2hhcnQiLCJjb250YWluZXIiLCJzdGFydFRpbWUiLCJEYXRlIiwiZGF0YVBhcnNlciIsIkJhc2ljVFNQYXJzZXIiLCJDaGFydEF4aXNQYXJzZXIiLCJFcnJvciIsImlzT2JqZWN0Iiwib3B0aW9ucyIsImRhdGFFeGVjdXRvciIsImFkZERlZmF1bHRUU09wdGlvbnMiLCJjaGFydEluaXRpbGl6ZSIsImRyYXciLCJheGlzT3B0aW9ucyIsInlSYW5nZSIsInlSYW5nZTIiLCJ0aW1lSW5mbyIsImdldE9iamVjdCIsInlBeGlzIiwiY2hhcnRDb21wb25lbnRzQXJyIiwicHVzaCIsInlBeGlzMiIsInRpbWVSYW5nZSIsInhBeGlzIiwidG9vbHRpcE9wdHMiLCJ0b29sdGlwIiwiVG9vbHRpcCIsInpvb21PcHRzIiwibW91c2VIYW5kbGVyIiwiTW91c2VIYW5kbGVyIiwiem9vbSIsInpvb21GbiIsIlpvb20iLCJpc1RvdWNoU2NyZWVuIiwiR2VzdHVyZVpvb20iLCJ6b29tQnJ1c2giLCJvblpvb20iLCJvblhab29tIiwib25ZMVpvb20iLCJvblkyWm9vbSIsInNlcmllcyIsIlRpbWVTZXJpZXMiLCJsZWdlbmQiLCJsZWdlbmRzIiwiVGltZVNlcmllc0xlZ2VuZCIsImxlZ2VuZFByZWZpeCIsImRpc2FibGVTZXJpZXNUb2dnbGUiLCJvbkxlZ2VuZENoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhZnRlckRyYXciLCJyZVNjYWxlWUF4aXMiLCJjaGFydFJlc3BvbnNpdmUiLCJ0cmlnZ2VyTW91c2VBY3Rpb24iLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJvbkNvbXBsZXRlIiwiYXhpc1NwZWNpZmllciIsInRpY2tWYWxBcnIiLCJkaWZmVmFsIiwicmFuZ2VWYWwiLCJ5TWF4IiwiYXBwbHlZMUF4aXMiLCJhcHBseVkyQXhpcyIsIm1vZGlmeUF4aXNQcm9wcyIsInJlU2NhbGVBeGlzIiwicmVxdWlyZWRXaWR0aCIsImNsYXNzIiwibWF4VGV4dCIsImR1bW15RyIsInN2ZyIsInRpY2tzQXJyIiwic2VsZWN0IiwiZWFjaCIsInRpY2tIdG1sIiwiZGF0YSIsImVudGVyIiwiU3RyaW5nIiwiZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoIiwicm91bmQiLCJZX0FYSVNfU1BBQ0UiLCJjaGFydEZ1bGxTcGFjZSIsIndpZHRoIiwiQ2hhcnQiLCJkYXRhT3B0aW9ucyIsImNvbnN0cnVjdENoYXJ0RGF0YSIsImNvbnN0cnVjdFhBeGlzSW5mbyIsImNvbnN0cnVjdFBsb3RJbmZvIiwiY29uc3RydWN0WUF4aXNJbmZvIiwiZXJyIiwib25FcnJvciIsInJlc0pzb24iLCJzZXJpZXNEYXRhIiwidGltZXNlcmllcyIsImNvbHVtbnMiLCJ2YWx1ZXMiLCJ2YWxpZEpTT05UeXBlIiwidGltZVN0YW1wSW5kZXgiLCJmaXJzdFRpbWUiLCJpc0RhdGUiLCJzdGFydCIsImZvckVhY2giLCJnZXREYXRlRnJvbUVwb2MiLCJjaGFydERhdGEiLCJkYXRhSW5kZXgiLCJlYWNoUGxvdFNldCIsInBsb3RTZXQiLCJwbG90SW5mbyIsImZpbmRFYWNoUGxvdFJhbmdlIiwia2V5IiwibWluIiwibWF4IiwibWluVmFsIiwibWF4VmFsIiwic3RhY2siLCJwbG90IiwiZWFjaFBsb3QiLCJJbmZpbml0eSIsInBsb3REYXRhIiwidmFsdWVSYW5nZSIsInZhbERhdGEiLCJtZW1iZXJBcnIiLCJzdGFja09yZGVyTWVtYmVycyIsInN1bSIsIm1lbWJlciIsIm5hbWUiLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJpc0Jvb2xlYW4iLCJiYXJPcmRlck1lbWJlcnMiLCJyZWdpc3RlckZuIiwibW91c2VCcnVzaCIsInRvcCIsImNhbGxiYWNrIiwiZnVuIiwiTGluZSIsImxpbmVEYXRhIiwieUF4aXNUYXJnZXQiLCJ4QXhpc1RhcmdldCIsImRvdHMiLCJ4IiwiaW5kZXhPZiIsInkiLCJsaW5lIiwiZGVmaW5lZCIsImxpbmVUYWciLCJjbGlwRWxlbWVudCIsImxpbmVXaWR0aCIsInRvdGFsTGluZUxlbmd0aCIsImRvdHNUYWciLCJpbmRleCIsInJhZGl1cyIsInNlcmllc05hbWUiLCJTdGFja0FyZWEiLCJzdGFja0RhdGEiLCJzdGFja09yZGVySW5kZXgiLCJmaWx0ZXIiLCJlbGUiLCJtYXAiLCJkM1N0YWNrIiwiYXJlYSIsInkwIiwieTEiLCJrZXlzIiwib3JkZXIiLCJzdGFja09yZGVyTm9uZSIsIm9mZnNldCIsInN0YWNrT2Zmc2V0Tm9uZSIsInN0YWNrVmlzaWJsZU9yZGVyIiwic3RhY2tMYXllciIsInN0YWNrTWVtYmVyIiwicGxvdFNlcmllcyIsImlzQXJyYXkiLCJTZXJpZXMiLCJUaW1lU2VyaWVzVG9vbHRpcCIsImNyb3NzSGFpcnMiLCJlbmFibGUiLCJmb3JtYXQiLCJ0b29sVGlwRGl2IiwiVE9PTFRJUF9UT1BfQlVGRkVSIiwicmVnaXN0ZXIiLCJ4U2NhbGUiLCJkYXRlSW5kZXgiLCJkYXRhU2V0IiwiYmlzZWN0RGF0ZSIsImJpc2VjdG9yIiwibW91c2VFdnQiLCJ4TW91c2UiLCJkM01vdXNlIiwieU1vdXNlIiwieFZhbCIsImludmVydCIsImZvdW5kIiwiZEJlZm9yZSIsImRQcmV2IiwiZEZvdW5kIiwidG9vbFRpcERhdGEiLCJkYXRhUGFyc2VMZW4iLCJ2aXNpYmxlRGF0YUluZGV4IiwicGwiLCJtdWx0aUFyck1hcCIsImRTZXQiLCJzb3J0IiwibWF4SW5kIiwibXAiLCJhcnJTZXQiLCJkYXRlSW50UmFuZ2UiLCJhYnMiLCJob3ZlciIsImV2ZW50TmFtZSIsIm9uIiwiaGlkZSIsInNldFRpbWVvdXQiLCJ4UG9zIiwieVBvcyIsImRpc3BsYXlEYXRhIiwic2hvd0hpZGUiLCJwZXJjZW50YWdlRGlmZiIsImJveCIsImVsZW1lbnRPZmZzZXQiLCJyb290UG9zIiwiaGVpZ2h0IiwiaHRtbCIsInN0YXJ0UG9zIiwiZW5kUG9zIiwiYnJ1c2hYRGl2IiwieVNjYWxlTGVmdCIsInlTY2FsZVJpZ2h0Iiwiem9vbVgiLCJzY2FsZUV4dGVudCIsInRyYW5zbGF0ZUV4dGVudCIsImV4dGVudCIsInRvdWNoYWJsZSIsInpvb21YRGl2IiwiaXNHZXN0dXJlIiwidG91Y2hlcyIsImQzVG91Y2hlcyIsImQzRXZlbnQiLCJ1cGRhdGVicnVzaFhTZWxlY3Rpb24iLCJ4UG9zMSIsInhQb3MyIiwieE1pbiIsInhNYXgiLCJzdGFydFZhbCIsInN0YXJ0RHQiLCJlbmRWYWwiLCJlbmREdCIsImJydXNoWUxlZnQiLCJicnVzaFkiLCJicnVzaFlMZWZ0RGl2Iiwic2VsZWN0aW9uIiwibW92ZSIsImQwIiwiZDEiLCJicnVzaFlSaWdodCIsImJydXNoWVJpZ2h0RGl2IiwiYnJ1c2hPdmVybGF5IiwiYnJ1c2hYIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTs7SUFFcUJBLEk7OztBQUNuQixnQkFBYUMsSUFBYixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQSxJQUFMLEdBQVksMkVBQWM7QUFDeEJDLGlCQUFXLEVBRGE7QUFFeEJDLGdCQUFVLEdBRmM7QUFHeEJDLGNBQVEsTUFIZ0I7QUFJeEJDLGFBQU8sRUFKaUI7QUFLeEJDLFlBQU0sRUFMa0I7QUFNeEJDLGtCQUFZLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FOWTtBQU94QkMsbUJBQWEsQ0FBQyxDQUFELEVBQUksR0FBSixDQVBXO0FBUXhCQyxpQkFBVyxFQVJhO0FBU3hCQyxpQkFBVyxJQVRhO0FBVXhCQyxrQkFBWSxJQVZZO0FBV3hCQyxrQkFBWSxLQVhZO0FBWXhCQyxpQkFBVyxDQVphO0FBYXhCQyxxQkFBZSxLQWJTLEVBYUY7QUFDdEJDLHFCQUFlLEtBZFM7QUFleEJDLG1CQUFhQyxrREFBU0EsQ0FBQ0MsWUFmQztBQWdCeEJDLG9CQUFjRixrREFBU0EsQ0FBQ0csYUFoQkE7QUFpQnhCQyxlQUFTO0FBakJlLEtBQWQsRUFrQlRwQixJQWxCUyxDQUFaOztBQW9CQSxVQUFLcUIsSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNBLFFBQUksTUFBS3JCLElBQUwsQ0FBVVEsU0FBVixLQUF3QixXQUE1QixFQUF5QztBQUN2QyxZQUFLYyxLQUFMLEdBQWFDLDZEQUFTQSxFQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQUtELEtBQUwsR0FBYUUsK0RBQVdBLEVBQXhCO0FBQ0EsVUFBSSxNQUFLeEIsSUFBTCxDQUFVSyxJQUFWLEtBQW1CVyxrREFBU0EsQ0FBQ1MsVUFBakMsRUFBNkM7QUFDM0MsY0FBS0gsS0FBTCxHQUFhSSw2REFBU0EsRUFBdEI7QUFDRDtBQUNGOztBQUVELFFBQUksTUFBSzFCLElBQUwsQ0FBVUUsUUFBVixLQUF1QixHQUEzQixFQUFnQztBQUM5QixVQUFJLE1BQUtGLElBQUwsQ0FBVUcsTUFBVixLQUFxQmEsa0RBQVNBLENBQUNXLFVBQW5DLEVBQStDO0FBQzdDLGNBQUtOLElBQUwsR0FBWU8sOERBQVVBLEVBQXRCO0FBQ0QsT0FGRCxNQUVPLElBQUksTUFBSzVCLElBQUwsQ0FBVUcsTUFBVixLQUFxQmEsa0RBQVNBLENBQUNhLE9BQW5DLEVBQTRDO0FBQ2pELGNBQUtSLElBQUwsR0FBWVMsMkRBQU9BLEVBQW5CO0FBQ0Q7QUFDRCxVQUFJLE1BQUs5QixJQUFMLENBQVVjLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDcEMsY0FBS08sSUFBTCxDQUFVVSxhQUFWLENBQXdCLENBQUUsTUFBSy9CLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQTFDO0FBQ0Q7QUFFRjs7QUFFRDtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxRQUFNQyxZQUFOOztBQUVBLFFBQUksTUFBS25DLElBQUwsQ0FBVUUsUUFBVixLQUF1QixHQUEzQixFQUFnQztBQUM5QixVQUFJLE1BQUtGLElBQUwsQ0FBVUcsTUFBVixLQUFxQmEsa0RBQVNBLENBQUNvQixRQUFuQyxFQUE2QztBQUMzQyxjQUFLZixJQUFMLEdBQVlnQiw0REFBUUEsRUFBcEI7QUFDRCxPQUZELE1BRU8sSUFBSSxNQUFLckMsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ3NCLFNBQW5DLEVBQThDO0FBQ25ELGNBQUtqQixJQUFMLEdBQVlrQiw2REFBU0EsRUFBckI7QUFDQSxjQUFLbEIsSUFBTCxDQUFVVSxhQUFWLENBQXdCLENBQXhCO0FBQ0Q7QUFDRCxVQUFJLE1BQUsvQixJQUFMLENBQVVjLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDcEMsY0FBS08sSUFBTCxDQUFVVSxhQUFWLENBQXdCLENBQUUsTUFBSy9CLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JRLFVBQTFDO0FBQ0Q7O0FBRUQsVUFBSUMseURBQVVBLENBQUMsTUFBS3pDLElBQUwsQ0FBVWEsYUFBckIsQ0FBSixFQUF5QztBQUN2QztBQUNBLFlBQU02QixvQkFBb0IsTUFBSzFDLElBQUwsQ0FBVWEsYUFBcEM7QUFDQSxjQUFLYixJQUFMLENBQVVhLGFBQVYsR0FBMEIsVUFBVThCLEdBQVYsRUFBZTtBQUN2Q1IsZUFBS0QsVUFBTCxDQUFnQlUsT0FBaEIsQ0FBd0JELEdBQXhCO0FBQ0EsaUJBQU9ELGtCQUFrQkMsR0FBbEIsQ0FBUDtBQUNELFNBSEQ7QUFJRDtBQUNGOztBQUVELFFBQUksTUFBSzNDLElBQUwsQ0FBVWUsV0FBVixHQUF3QixDQUE1QixFQUErQjtBQUM3QixZQUFLTSxJQUFMLENBQVVOLFdBQVYsQ0FBc0IsTUFBS2YsSUFBTCxDQUFVZSxXQUFoQztBQUNEO0FBeEVnQjtBQXlFbEI7Ozs7c0NBRTJCO0FBQUEsVUFBWGYsSUFBVyx1RUFBSixFQUFJOztBQUMxQixpRkFBYyxLQUFLQSxJQUFuQixFQUF5QkEsSUFBekI7QUFDQSxXQUFLNkMsTUFBTDtBQUNEOzs7MkJBRU87QUFDTixXQUFLQyxhQUFMLEdBQXFCLElBQXJCOztBQUVBLFVBQUksS0FBSzlDLElBQUwsQ0FBVUcsTUFBVixLQUFxQmEsa0RBQVNBLENBQUNXLFVBQW5DLEVBQStDO0FBQzdDLGFBQUttQixhQUFMLG9CQUFvQyxLQUFLOUMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FBcEQ7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLakMsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ3NCLFNBQW5DLEVBQThDO0FBQ25ELGFBQUtRLGFBQUwsa0JBQWtDLEtBQUs5QyxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUFsRDtBQUNEOztBQUVELFdBQUtPLE9BQUwsR0FBZSxLQUFLL0MsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmdCLFNBQWhCLENBQTBCQyxNQUExQixDQUFpQyxHQUFqQyxFQUNaQyxJQURZLENBQ1AsT0FETyx1QkFDcUIsS0FBS2xELElBQUwsQ0FBVUcsTUFEL0IsaUJBQ2lELEtBQUtILElBQUwsQ0FBVUMsU0FEM0QsQ0FBZjs7QUFJQTtBQUNBd0MsK0RBQVVBLENBQUMsS0FBS3pDLElBQUwsQ0FBVWEsYUFBckIsS0FBdUMsS0FBS1EsSUFBTCxDQUFVOEIsVUFBVixDQUFxQixLQUFLbkQsSUFBTCxDQUFVYSxhQUEvQixDQUF2Qzs7QUFFQTtBQUNBLFVBQUksS0FBS2IsSUFBTCxDQUFVSSxLQUFkLEVBQXFCO0FBQ25CLGFBQUtKLElBQUwsQ0FBVW9ELFlBQVYsR0FBeUIsS0FBS0wsT0FBTCxDQUFhRSxNQUFiLENBQW9CLE1BQXBCLEVBQ3RCQyxJQURzQixDQUNqQixPQURpQixFQUNSLGVBRFEsRUFFdEJHLElBRnNCLENBRWpCLEtBQUtyRCxJQUFMLENBQVVJLEtBRk8sQ0FBekI7QUFHRDs7QUFFRCxXQUFLeUMsTUFBTDs7QUFFQTtBQUNBLE9BQUMsS0FBSzdDLElBQUwsQ0FBVW9CLE9BQVgsSUFBc0IsS0FBSzJCLE9BQUwsQ0FBYU8sT0FBYixDQUFxQixXQUFyQixFQUFrQyxJQUFsQyxDQUF0QjtBQUNEOztBQUVEOzs7OzZCQUNVO0FBQ1IsVUFBSSxLQUFLdEQsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ1csVUFBbkMsRUFBK0M7QUFDN0MsYUFBSzNCLElBQUwsQ0FBVU0sVUFBVixHQUF1QixDQUFDLENBQUQsRUFBSSxLQUFLTixJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUFwQixDQUF2QjtBQUNEOztBQUVELFVBQUksS0FBS3hDLElBQUwsQ0FBVUcsTUFBVixLQUFxQmEsa0RBQVNBLENBQUNzQixTQUFuQyxFQUE4QztBQUM1QyxhQUFLUSxhQUFMLGtCQUFrQyxLQUFLOUMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFBbEQ7QUFDRDs7QUFHRDtBQUNBLFVBQUksS0FBS3hDLElBQUwsQ0FBVUksS0FBZCxFQUFxQjtBQUNuQixZQUFJbUQsU0FBUyxDQUFiO0FBQ0EsWUFBSUMsU0FBUyxDQUFiO0FBQ0EsWUFBSUMsU0FBUyxDQUFiO0FBQ0EsWUFBSSxLQUFLekQsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ1csVUFBbkMsRUFBK0M7QUFDN0M0QixtQkFBU0csS0FBS0MsS0FBTCxDQUFXLEtBQUszRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUFoQixHQUE2QixDQUF4QyxDQUFUO0FBQ0FnQixtQkFBU3hDLGtEQUFTQSxDQUFDNEMsY0FBbkI7QUFDRCxTQUhELE1BR08sSUFBSSxLQUFLNUQsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ29CLFFBQS9CLElBQTJDLEtBQUtwQyxJQUFMLENBQVVHLE1BQVYsS0FBcUJhLGtEQUFTQSxDQUFDc0IsU0FBOUUsRUFBeUY7QUFDOUYsY0FBSSxLQUFLdEMsSUFBTCxDQUFVRyxNQUFWLEtBQXFCYSxrREFBU0EsQ0FBQ29CLFFBQW5DLEVBQTZDO0FBQzNDbUIscUJBQVMsQ0FBRSxLQUFLdkQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUF6QixHQUFpQzlDLGtEQUFTQSxDQUFDK0MsYUFBcEQ7QUFDQU4scUJBQVMsR0FBVDtBQUNELFdBSEQsTUFHTztBQUNMRixxQkFBUyxLQUFLdkQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCRyxLQUF2QixHQUErQmhELGtEQUFTQSxDQUFDK0MsYUFBbEQ7QUFDQU4scUJBQVMsRUFBVDtBQUNEO0FBQ0RELG1CQUFTRSxLQUFLQyxLQUFMLENBQVcsS0FBSzNELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQWhCLEdBQThCLENBQXpDLENBQVQ7QUFDRDtBQUNELGFBQUtqQyxJQUFMLENBQVVvRCxZQUFWLENBQ0dGLElBREgsQ0FDUSxXQURSLGlCQUVpQkssTUFGakIsU0FFMkJDLE1BRjNCLGlCQUU2Q0MsTUFGN0M7QUFHRDs7QUFFRCxXQUFLdkIsVUFBTCxHQUFrQixFQUFsQjs7QUFFQSxVQUFJM0IsY0FBYyxDQUFDLEtBQUtQLElBQUwsQ0FBVU8sV0FBVixDQUFzQixDQUF0QixDQUFELEVBQTJCLEtBQUtQLElBQUwsQ0FBVU8sV0FBVixDQUFzQixLQUFLUCxJQUFMLENBQVVPLFdBQVYsQ0FBc0IwRCxNQUF0QixHQUErQixDQUFyRCxDQUEzQixDQUFsQjtBQUNBLFVBQUksS0FBS2pFLElBQUwsQ0FBVVEsU0FBVixLQUF3QixXQUE1QixFQUF5QztBQUN2Q0Qsc0JBQWMsS0FBS1AsSUFBTCxDQUFVTyxXQUF4QjtBQUNBLGFBQUtlLEtBQUwsQ0FDRzRDLE9BREgsQ0FDVyxLQUFLbEUsSUFBTCxDQUFVa0IsWUFEckI7QUFFRCxPQUpELE1BSU87QUFDTCxhQUFLbEIsSUFBTCxDQUFVUyxTQUFWLElBQXVCLEtBQUthLEtBQUwsQ0FBVzZDLEtBQVgsRUFBdkIsQ0FESyxDQUNxQztBQUMzQzs7QUFFRCxXQUFLN0MsS0FBTCxDQUFXOEMsS0FBWCxDQUFpQixLQUFLcEUsSUFBTCxDQUFVTSxVQUEzQixFQUNHK0QsTUFESCxDQUNVOUQsV0FEVjs7QUFHQSxXQUFLYyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsS0FBS0EsS0FBckI7O0FBRUEsVUFBSWdELHVEQUFRQSxDQUFDLEtBQUt0RSxJQUFMLENBQVVVLFVBQW5CLENBQUosRUFBb0M7QUFDbEMsWUFBSTZELFVBQVUsS0FBS3ZFLElBQUwsQ0FBVVUsVUFBeEI7QUFDQSxZQUFJLEtBQUtWLElBQUwsQ0FBVUUsUUFBVixLQUF1QixHQUF2QixJQUE4QixLQUFLRixJQUFMLENBQVVLLElBQVYsS0FBbUJXLGtEQUFTQSxDQUFDUyxVQUEvRCxFQUEyRTtBQUN6RTtBQUNBLGNBQU0rQyxVQUFVZCxLQUFLQyxLQUFMLENBQVcsS0FBSzNELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JRLFVBQWhCLEdBQTZCLEVBQXhDLENBQWhCO0FBQ0EsY0FBTWlDLFlBQVlmLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLEtBQUszRCxJQUFMLENBQVVPLFdBQVYsQ0FBc0IsQ0FBdEIsSUFBMkIsS0FBS1AsSUFBTCxDQUFVTyxXQUFWLENBQXNCLENBQXRCLENBQTVCLEtBQXlELEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUF4RSxDQUFYLElBQTRGLENBQTlHO0FBQ0EsY0FBSWtFLFlBQVksQ0FBWixJQUFpQkEsWUFBWUYsT0FBakMsRUFBMEM7QUFDeENBLHNCQUFVRSxTQUFWO0FBQ0Q7O0FBRUQsY0FBTUMsZUFBZWhCLEtBQUtDLEtBQUwsQ0FBVyxDQUFDLEtBQUszRCxJQUFMLENBQVVPLFdBQVYsQ0FBc0IsQ0FBdEIsSUFBMkIsS0FBS1AsSUFBTCxDQUFVTyxXQUFWLENBQXNCLENBQXRCLENBQTVCLEtBQXlELEtBQUssSUFBOUQsQ0FBWCxDQUFyQjtBQUNBLGNBQUltRSxlQUFlSCxPQUFuQixFQUE0QjtBQUMxQkEsc0JBQVVHLFlBQVY7QUFDRDs7QUFFRCxjQUFJRixVQUFVRCxPQUFkLEVBQXVCO0FBQ3JCQSxzQkFBVUMsT0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBS25ELElBQUwsQ0FBVXNELEtBQVYsQ0FBZ0JKLE9BQWhCO0FBQ0QsT0FyQkQsTUFxQk8sSUFBSTlCLHlEQUFVQSxDQUFDLEtBQUt6QyxJQUFMLENBQVVVLFVBQXJCLENBQUosRUFBc0M7QUFDM0MsYUFBS1csSUFBTCxDQUFVc0QsS0FBVixDQUFnQixLQUFLM0UsSUFBTCxDQUFVVSxVQUFWLEVBQWhCO0FBQ0Q7O0FBRUQsV0FBS29DLGFBQUwsSUFBc0IsS0FBS0MsT0FBTCxDQUFhRyxJQUFiLENBQWtCLFdBQWxCLEVBQStCLEtBQUtKLGFBQXBDLENBQXRCOztBQUVBLFVBQUksS0FBSzlDLElBQUwsQ0FBVWMsYUFBVixJQUEyQixLQUFLZCxJQUFMLENBQVVFLFFBQVYsS0FBdUIsR0FBdEQsRUFBMkQ7QUFDekQsYUFBS21CLElBQUwsQ0FBVVUsYUFBVixDQUF3QixDQUFFLEtBQUsvQixJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUExQztBQUNEOztBQUVELFdBQUtPLE9BQUwsQ0FBYTZCLElBQWIsQ0FBa0IsS0FBS3ZELElBQXZCOztBQUdBLFVBQU13RCxZQUFZLEtBQUs3RSxJQUFMLENBQVVZLFNBQTVCO0FBQ0EsVUFBTWtFLFVBQVVyQyx5REFBVUEsQ0FBQyxLQUFLekMsSUFBTCxDQUFVYSxhQUFyQixJQUFzQyxLQUFLYixJQUFMLENBQVVhLGFBQWhELEdBQWdFa0UsOENBQWhGOztBQUVBLFVBQUksS0FBSy9FLElBQUwsQ0FBVVcsVUFBVixLQUF5QixPQUE3QixFQUFzQztBQUNwQyxhQUFLb0MsT0FBTCxDQUNHaUMsU0FESCxDQUNhLE1BRGIsRUFFR0MsS0FGSCxDQUVTLGFBRlQsRUFFd0IsS0FGeEIsRUFHRy9CLElBSEgsQ0FHUSxHQUhSLEVBR2EsR0FIYixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljLFFBSmQsRUFLR0EsSUFMSCxDQUtRLElBTFIsRUFLYyxPQUxkLEVBTUdBLElBTkgsQ0FNUSxXQU5SLEVBTXFCLGFBTnJCLEVBT0dHLElBUEgsQ0FPUSxVQUFVNkIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3BCLGlCQUFPQywyREFBWUEsQ0FBQ04sUUFBUUksQ0FBUixDQUFiLEVBQXlCTCxTQUF6QixDQUFQO0FBQ0QsU0FUSDtBQVVELE9BWEQsTUFXTyxJQUFJLEtBQUs3RSxJQUFMLENBQVVXLFVBQVYsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsYUFBS29DLE9BQUwsQ0FDR2lDLFNBREgsQ0FDYSxNQURiLEVBRUc5QixJQUZILENBRVEsR0FGUixFQUVhLENBRmIsRUFHR0EsSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWMsT0FKZCxFQUtHQSxJQUxILENBS1EsV0FMUixFQUtxQixZQUxyQixFQU1HK0IsS0FOSCxDQU1TLGFBTlQsRUFNd0IsT0FOeEIsRUFPRzVCLElBUEgsQ0FPUSxVQUFVNkIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3BCLGlCQUFPQywyREFBWUEsQ0FBQ04sUUFBUUksQ0FBUixDQUFiLEVBQXlCTCxTQUF6QixDQUFQO0FBQ0QsU0FUSDtBQVVEO0FBQ0Y7Ozs2QkFFU1EsUSxFQUFVO0FBQ2xCQSxpQkFBVyxDQUFDLENBQUNBLFFBQWI7QUFDQSxXQUFLdEMsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFPLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0MsQ0FBQytCLFFBQW5DLENBQWhCO0FBQ0EsV0FBS3JGLElBQUwsQ0FBVW9ELFlBQVYsSUFBMEIsS0FBS3BELElBQUwsQ0FBVW9ELFlBQVYsQ0FBdUJFLE9BQXZCLENBQStCLFdBQS9CLEVBQTRDLENBQUMrQixRQUE3QyxDQUExQjtBQUNBLFdBQUtyRixJQUFMLENBQVVvQixPQUFWLEdBQW9CaUUsUUFBcEI7QUFDRDs7QUFFRDs7Ozs2QkFDVTtBQUNSLFdBQUtyRixJQUFMLENBQVVvRCxZQUFWLElBQTBCLEtBQUtwRCxJQUFMLENBQVVvRCxZQUFWLENBQXVCa0MsTUFBdkIsRUFBMUI7QUFDQSxXQUFLdkMsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWF1QyxNQUFiLEVBQWhCO0FBQ0EsV0FBS2hFLEtBQUwsR0FBYSxJQUFiO0FBQ0EsV0FBS0QsSUFBTCxHQUFZLElBQVo7QUFDQSxXQUFLckIsSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQTVPK0J1Riw4RDs7QUFBYnhGLG1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJ5RixlOzs7QUFDbkIsMkJBQWFDLFNBQWIsRUFBd0J6RixJQUF4QixFQUE4QjtBQUFBOztBQUM1QkEsU0FBSzBGLFNBQUwsR0FBaUIsSUFBSUMsSUFBSixFQUFqQjs7QUFFQTtBQUNBLFFBQUksQ0FBQzNGLEtBQUs0RixVQUFWLEVBQXNCO0FBQ3BCNUYsV0FBSzRGLFVBQUwsR0FBa0IsSUFBSUMsbUVBQUosQ0FBa0I3RixJQUFsQixDQUFsQjtBQUNEO0FBQ0Q7QUFDQSxRQUFJLEVBQUVBLEtBQUs0RixVQUFMLFlBQTJCRSxxRUFBN0IsQ0FBSixFQUFtRDtBQUNqRCxZQUFNLElBQUlDLEtBQUosQ0FBVSxzRUFBVixDQUFOO0FBQ0Q7O0FBRUQ7O0FBR0E7QUFmNEIsNlBBYXRCTixTQWJzQixFQWFYekYsSUFiVzs7QUFnQjVCLFFBQUlnRyx3REFBUUEsQ0FBQyxNQUFLSixVQUFkLENBQUosRUFBK0I7QUFDN0IsaUZBQWMsTUFBS0ssT0FBbkIsRUFBNEIsTUFBS0wsVUFBTCxDQUFnQk0sWUFBaEIsRUFBNUI7QUFDRDs7QUFFRDtBQUNBQyx5RUFBbUJBLENBQUMsTUFBS0YsT0FBekI7O0FBRUE7QUFDQSxVQUFLRyxjQUFMOztBQUVBLCtFQUFhO0FBQUEsYUFBTSxNQUFLQyxJQUFMLEVBQU47QUFBQSxLQUFiO0FBMUI0QjtBQTJCN0I7Ozs7cUNBRWlCO0FBQ2hCLFVBQUlDLG9CQUFKO0FBQ0EsVUFBTUMsU0FBUyxLQUFLTixPQUFMLENBQWFNLE1BQTVCO0FBQ0EsVUFBTUMsVUFBVSxLQUFLUCxPQUFMLENBQWFPLE9BQTdCO0FBQ0EsVUFBTUMsV0FBVyxLQUFLUixPQUFMLENBQWFRLFFBQTlCOztBQUVBLFVBQUlGLE1BQUosRUFBWTtBQUNWRCxzQkFBY0kseURBQVNBLENBQUMsSUFBVixFQUFnQixvQkFBaEIsQ0FBZDtBQUNBLGFBQUtDLEtBQUwsR0FBYSxJQUFJNUcsOENBQUo7QUFDWGlDLGlCQUFPLElBREk7QUFFWDlCLG9CQUFVLEdBRkM7QUFHWEMsa0JBQVEsTUFIRztBQUlYRyxzQkFBWSxDQUFDLEtBQUsyQixXQUFOLEVBQW1CLENBQW5CLENBSkQ7QUFLWDFCLHVCQUFhZ0c7QUFMRixXQU1SRCxXQU5RLEVBQWI7QUFRQSxhQUFLTSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS0YsS0FBbEM7QUFDRDs7QUFFRCxVQUFJSCxPQUFKLEVBQWE7QUFDWEYsc0JBQWNJLHlEQUFTQSxDQUFDLElBQVYsRUFBZ0IscUJBQWhCLENBQWQ7QUFDQSxhQUFLSSxNQUFMLEdBQWMsSUFBSS9HLDhDQUFKO0FBQ1ppQyxpQkFBTyxJQURLO0FBRVo5QixvQkFBVSxHQUZFO0FBR1pDLGtCQUFRLE9BSEk7QUFJWkcsc0JBQVksQ0FBQyxLQUFLMkIsV0FBTixFQUFtQixDQUFuQixDQUpBO0FBS1oxQix1QkFBYWlHO0FBTEQsV0FNVEYsV0FOUyxFQUFkO0FBUUE7QUFDQSxhQUFLTSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS0MsTUFBbEM7QUFDRDs7QUFFRCxVQUFJTCxTQUFTTSxTQUFiLEVBQXdCO0FBQ3RCVCxzQkFBY0kseURBQVNBLENBQUMsSUFBVixFQUFnQixzQkFBaEIsQ0FBZDtBQUNBLGFBQUtNLEtBQUwsR0FBYSxJQUFJakgsOENBQUo7QUFDWGlDLGlCQUFPLElBREk7QUFFWDlCLG9CQUFVLEdBRkM7QUFHWEMsa0JBQVEsUUFIRztBQUlYRyxzQkFBWSxDQUFDLENBQUQsRUFBSSxLQUFLa0MsVUFBVCxDQUpEO0FBS1hqQyx1QkFBYWtHLFNBQVNNO0FBTFgsV0FNUlQsV0FOUSxFQUFiO0FBUUEsYUFBS00sa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUtHLEtBQWxDO0FBQ0Q7O0FBRUQsVUFBTUMsY0FBY1AseURBQVNBLENBQUMsSUFBVixFQUFnQixpQkFBaEIsQ0FBcEI7QUFDQSxVQUFJTyxZQUFZN0YsT0FBaEIsRUFBeUI7QUFDdkIsYUFBSzhGLE9BQUwsR0FBZSxJQUFJQyxtRUFBSjtBQUNibkYsaUJBQU87QUFETSxXQUVWaUYsV0FGVSxFQUFmO0FBSUEsYUFBS0wsa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUtLLE9BQWxDO0FBQ0Q7O0FBRUQsVUFBTUUsV0FBV1YseURBQVNBLENBQUMsSUFBVixFQUFnQixjQUFoQixFQUFnQyxFQUFoQyxDQUFqQjtBQUNBLFVBQUtPLFlBQVk3RixPQUFaLElBQXVCZ0csU0FBU2hHLE9BQXJDLEVBQStDO0FBQzdDLGFBQUtpRyxZQUFMLEdBQW9CLElBQUlDLHVEQUFKLENBQWlCO0FBQ25DdEYsaUJBQU87QUFENEIsU0FBakIsQ0FBcEI7QUFHQSxhQUFLNEUsa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUtRLFlBQWxDO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLcEIsT0FBTCxDQUFhc0IsSUFBYixDQUFrQm5HLE9BQXRCLEVBQStCO0FBQzdCLFlBQUlvRyxTQUFTQyw4Q0FBYjtBQUNBLFlBQUksS0FBS3hCLE9BQUwsQ0FBYWpFLEtBQWIsQ0FBbUIwRixhQUF2QixFQUFzQztBQUNwQ0YsbUJBQVNHLDBEQUFUO0FBQ0Q7QUFDRCxhQUFLQyxTQUFMLEdBQWlCLElBQUlKLE1BQUosQ0FBVztBQUMxQnhGLGlCQUFPLElBRG1CO0FBRTFCNkYsa0JBQVEsS0FBSzVCLE9BQUwsQ0FBYXNCLElBQWIsQ0FBa0JPLE9BRkE7QUFHMUJDLG9CQUFVLEtBQUs5QixPQUFMLENBQWFzQixJQUFiLENBQWtCUSxRQUhGO0FBSTFCQyxvQkFBVSxLQUFLL0IsT0FBTCxDQUFhc0IsSUFBYixDQUFrQlM7QUFKRixTQUFYLENBQWpCO0FBTUEsYUFBS3BCLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixLQUFLZSxTQUFsQztBQUNEOztBQUVELFVBQUksS0FBSzNCLE9BQUwsQ0FBYWdDLE1BQWpCLEVBQXlCO0FBQ3ZCLGFBQUtBLE1BQUwsR0FBYyxJQUFJQywyREFBSixDQUFlO0FBQzNCbEcsaUJBQU87QUFEb0IsU0FBZixDQUFkO0FBR0E7QUFDQSxhQUFLNEUsa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUtvQixNQUFsQztBQUNEOztBQUVELFVBQUksS0FBS2hDLE9BQUwsQ0FBYWtDLE1BQWIsQ0FBb0IvRyxPQUF4QixFQUFpQztBQUMvQixhQUFLZ0gsT0FBTCxHQUFlLElBQUlDLGlFQUFKLENBQXFCO0FBQ2xDckcsaUJBQU8sSUFEMkI7QUFFbENzRyx3QkFBYyxLQUFLckMsT0FBTCxDQUFha0MsTUFBYixDQUFvQkcsWUFGQTtBQUdsQ3BJLG9CQUFVYyxtREFBU0EsQ0FBQ2EsT0FIYztBQUlsQzBHLCtCQUFxQixLQUFLdEMsT0FBTCxDQUFha0MsTUFBYixDQUFvQkksbUJBSlA7QUFLbENDLDBCQUFnQixLQUFLdkMsT0FBTCxDQUFha0MsTUFBYixDQUFvQks7QUFMRixTQUFyQixDQUFmO0FBT0EsYUFBSzVCLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixLQUFLdUIsT0FBbEM7QUFDRDtBQUNGOzs7MkJBRU87QUFDTkssY0FBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DLElBQXBDO0FBQ0E7QUFDQSxXQUFLekMsT0FBTCxDQUFhMEMsU0FBYixDQUF1Qi9ELElBQXZCLENBQTRCLElBQTVCOztBQUVBO0FBQ0EsV0FBS2dFLFlBQUw7O0FBRUEsV0FBS0MsZUFBTDs7QUFFQSxXQUFLeEIsWUFBTCxJQUFxQixLQUFLQSxZQUFMLENBQWtCeUIsa0JBQWxCLEVBQXJCOztBQUVBLFdBQUtDLFFBQUwsR0FBaUIsSUFBSXBELElBQUosR0FDZHFELE9BRGMsS0FDRixLQUFLL0MsT0FBTCxDQUFhUCxTQUFiLENBQXVCc0QsT0FBdkIsRUFEZjtBQUVBLFdBQUsvQyxPQUFMLENBQWFnRCxVQUFiLENBQXdCckUsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUMsS0FBS21FLFFBQXhDO0FBQ0Q7O0FBRUQ7Ozs7aUNBQ2NHLGEsRUFBZTtBQUFBOztBQUUzQixVQUFJQyxtQkFBSjtBQUNBLFVBQUlDLGdCQUFKO0FBQ0EsVUFBSUMsaUJBQUo7QUFDQSxVQUFJQyxhQUFKO0FBQ0EsVUFBSUMsY0FBYyxJQUFsQjtBQUNBLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUEsVUFBSU4sa0JBQWtCbEksbURBQVNBLENBQUNvQixRQUFoQyxFQUEwQztBQUN4Q29ILHNCQUFjLEtBQWQ7QUFDRDs7QUFFRCxVQUFJTixrQkFBa0JsSSxtREFBU0EsQ0FBQ3NCLFNBQWhDLEVBQTJDO0FBQ3pDaUgsc0JBQWMsS0FBZDtBQUNEOztBQUVEO0FBQ0FELGFBQU81Qyx5REFBU0EsQ0FBQyxLQUFLVCxPQUFmLEVBQXdCLGdCQUF4QixDQUFQO0FBQ0EsVUFBSSxLQUFLQSxPQUFMLENBQWFNLE1BQWIsSUFBdUJnRCxXQUF2QixJQUFzQyxDQUFDLDhFQUFnQkQsSUFBaEIsQ0FBM0MsRUFBa0U7QUFDaEVILHFCQUFhLEtBQUt4QyxLQUFMLENBQVd6RSxVQUF4QjtBQUNBO0FBQ0EsWUFBSWlILFdBQVdsRixNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3pCO0FBQ0FtRixvQkFBVUQsV0FBVyxDQUFYLElBQWdCQSxXQUFXLENBQVgsQ0FBMUI7QUFDQTtBQUNBRSxxQkFBV0YsV0FBVyxDQUFYLElBQWdCQyxPQUEzQjs7QUFFQTtBQUNBLGVBQUtuRCxPQUFMLENBQWFNLE1BQWIsQ0FBb0IsQ0FBcEIsSUFBeUI4QyxRQUF6Qjs7QUFFQTtBQUNBLGVBQUsxQyxLQUFMLENBQVc4QyxlQUFYLENBQTJCO0FBQ3pCbEoseUJBQWEsS0FBSzBGLE9BQUwsQ0FBYU07QUFERCxXQUEzQjtBQUdEO0FBQ0Y7O0FBRUQrQyxhQUFPNUMseURBQVNBLENBQUMsS0FBS1QsT0FBZixFQUF3QixpQkFBeEIsQ0FBUDtBQUNBLFVBQUksS0FBS0EsT0FBTCxDQUFhTyxPQUFiLElBQXdCZ0QsV0FBeEIsSUFBdUMsQ0FBQyw4RUFBZ0JGLElBQWhCLENBQTVDLEVBQW1FO0FBQ2pFSCxxQkFBYSxLQUFLckMsTUFBTCxDQUFZNUUsVUFBekI7O0FBRUEsWUFBSWlILFdBQVdsRixNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3pCbUYsb0JBQVVELFdBQVcsQ0FBWCxJQUFnQkEsV0FBVyxDQUFYLENBQTFCO0FBQ0FFLHFCQUFXRixXQUFXLENBQVgsSUFBZ0JDLE9BQTNCOztBQUVBLGVBQUtuRCxPQUFMLENBQWFPLE9BQWIsQ0FBcUIsQ0FBckIsSUFBMEI2QyxRQUExQjs7QUFFQTtBQUNBLGVBQUt2QyxNQUFMLENBQVkyQyxlQUFaLENBQTRCO0FBQzFCbEoseUJBQWEsS0FBSzBGLE9BQUwsQ0FBYU87QUFEQSxXQUE1QjtBQUdEO0FBQ0Y7O0FBRUQ7QUFDQSxVQUFNa0QsY0FBYyxFQUFwQjtBQUNBLFVBQUlDLGdCQUFnQixDQUFwQjs7QUFFQSxVQUFJLEtBQUsxRCxPQUFMLENBQWFNLE1BQWpCLEVBQXlCO0FBQ3ZCbUQsb0JBQVkxSSxtREFBU0EsQ0FBQ29CLFFBQXRCLElBQWtDLEVBQWxDO0FBQ0FzSCxvQkFBWTFJLG1EQUFTQSxDQUFDb0IsUUFBdEIsRUFBZ0N3SCxLQUFoQyxHQUF3QyxlQUF4QztBQUNBRixvQkFBWTFJLG1EQUFTQSxDQUFDb0IsUUFBdEIsRUFBZ0N5SCxPQUFoQyxHQUEwQyxFQUExQztBQUNEOztBQUVELFVBQUksS0FBSzVELE9BQUwsQ0FBYU8sT0FBakIsRUFBMEI7QUFDeEJrRCxvQkFBWTFJLG1EQUFTQSxDQUFDc0IsU0FBdEIsSUFBbUMsRUFBbkM7QUFDQW9ILG9CQUFZMUksbURBQVNBLENBQUNzQixTQUF0QixFQUFpQ3NILEtBQWpDLEdBQXlDLGdCQUF6QztBQUNBRixvQkFBWTFJLG1EQUFTQSxDQUFDc0IsU0FBdEIsRUFBaUN1SCxPQUFqQyxHQUEyQyxFQUEzQztBQUNEOztBQUVEO0FBQ0EsVUFBTUMsU0FBUyxLQUFLQyxHQUFMLENBQVM5RyxNQUFULENBQWdCLEdBQWhCLEVBQ1pDLElBRFksQ0FDUCxPQURPLEVBQ0UsU0FERixDQUFmOztBQXhFMkIsaUNBMkVoQjdCLElBM0VnQjtBQTRFekIsWUFBTTJJLFdBQVcsT0FBS3ZFLFNBQUwsQ0FBZXdFLE1BQWYsQ0FBc0IsU0FBU1AsWUFBWXJJLElBQVosRUFBa0J1SSxLQUFqRCxFQUF3RDVFLFNBQXhELENBQWtFLE1BQWxFLENBQWpCO0FBQ0FnRixpQkFBU0UsSUFBVCxDQUFjLFVBQVUvRSxDQUFWLEVBQWE7QUFDekIsY0FBTWdGLFdBQVdGLDJEQUFNQSxDQUFDLElBQVAsRUFBYTVHLElBQWIsTUFBdUIsRUFBeEM7QUFDQSxjQUFJOEcsU0FBU2xHLE1BQVQsR0FBa0J5RixZQUFZckksSUFBWixFQUFrQndJLE9BQWxCLENBQTBCNUYsTUFBaEQsRUFBd0Q7QUFDdER5Rix3QkFBWXJJLElBQVosRUFBa0J3SSxPQUFsQixHQUE0Qk0sUUFBNUI7QUFDRDtBQUNGLFNBTEQ7O0FBT0FMLGVBQU85RSxTQUFQLENBQWlCLFlBQWpCLEVBQ0dvRixJQURILENBQ1EsQ0FBQ1YsWUFBWXJJLElBQVosRUFBa0J3SSxPQUFuQixDQURSLEVBRUdRLEtBRkgsR0FHR3BILE1BSEgsQ0FHVSxNQUhWLEVBSUdJLElBSkgsQ0FJUWlILE1BSlIsRUFLR0osSUFMSCxDQUtRLFVBQVVoRixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDcEI7QUFDQXdFLDBCQUFnQixLQUFLWSxxQkFBTCxFQUFoQjtBQUNELFNBUkg7O0FBVUE7QUFDQSxlQUFLMUcsTUFBTCxDQUFZeEMsSUFBWixJQUFvQnFDLEtBQUs4RyxLQUFMLENBQVdiLGFBQVgsSUFBNEIzSSxtREFBU0EsQ0FBQ3lKLFlBQTFEO0FBL0Z5Qjs7QUEyRTNCLFdBQUssSUFBTXBKLElBQVgsSUFBbUJxSSxXQUFuQixFQUFnQztBQUFBLGNBQXJCckksSUFBcUI7QUFzQi9CO0FBQ0R5SSxhQUFPeEUsTUFBUDs7QUFFQSxXQUFLOUMsVUFBTCxHQUFtQixLQUFLa0ksY0FBTCxDQUFvQkMsS0FBcEIsR0FBNEIsS0FBSzlHLE1BQUwsQ0FBWUMsSUFBeEMsR0FBK0MsS0FBS0QsTUFBTCxDQUFZRyxLQUE5RTtBQUNBLFdBQUtuQixNQUFMO0FBQ0Q7Ozs7RUF2UDBDK0gsc0Q7O0FBQXhCcEYsOEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZyQjtBQUNBOztJQUVxQkssYTs7O0FBQ25CLHlCQUFhN0YsSUFBYixFQUFtQjtBQUFBOztBQUFBLHlQQUNYQSxJQURXOztBQUVqQixVQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFGaUI7QUFHbEI7Ozs7bUNBRWU7QUFDZDtBQUNBLFVBQUk7O0FBRUYsYUFBSzZLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxhQUFLN0ssSUFBTCxDQUFVb0ssSUFBVixLQUFtQixLQUFLUyxXQUFMLENBQWlCVCxJQUFqQixHQUF3QixLQUFLcEssSUFBTCxDQUFVb0ssSUFBckQ7QUFDQSxhQUFLcEssSUFBTCxDQUFVaUksTUFBVixLQUFxQixLQUFLNEMsV0FBTCxDQUFpQjVDLE1BQWpCLEdBQTBCLEtBQUtqSSxJQUFMLENBQVVpSSxNQUF6RDtBQUNBLGFBQUtqSSxJQUFMLENBQVUyRyxLQUFWLEtBQW9CLEtBQUtrRSxXQUFMLENBQWlCbEUsS0FBakIsR0FBeUIsS0FBSzNHLElBQUwsQ0FBVTJHLEtBQXZEOztBQUVBLG1GQUFjLEtBQUtrRSxXQUFuQixFQUFnQyxLQUFLQyxrQkFBTCxFQUFoQztBQUNBLG1GQUFjLEtBQUtELFdBQW5CLEVBQWdDLEtBQUtFLGtCQUFMLEVBQWhDO0FBQ0EsbUZBQWMsS0FBS0YsV0FBbkIsRUFBZ0MsS0FBS0csaUJBQUwsRUFBaEM7QUFDQSxtRkFBYyxLQUFLSCxXQUFuQixFQUFnQyxLQUFLSSxrQkFBTCxFQUFoQzs7QUFFQSxlQUFPLEtBQUtKLFdBQVo7QUFFRCxPQWRELENBY0UsT0FBT0ssR0FBUCxFQUFZO0FBQ1p6QyxnQkFBUUMsR0FBUixDQUFZLG1EQUFaLEVBQWlFd0MsR0FBakU7QUFDQSxhQUFLbEwsSUFBTCxDQUFVbUwsT0FBVixDQUFrQkQsR0FBbEI7QUFDQSxjQUFNLElBQUluRixLQUFKLENBQVUsMERBQVYsQ0FBTjtBQUNEO0FBQ0Y7Ozt5Q0FFcUI7QUFDcEIsVUFBTThFLGNBQWMsS0FBS0EsV0FBekI7QUFDQSxVQUFNTyxVQUFVUCxZQUFZVCxJQUE1QjtBQUNBLFVBQU1pQixhQUFhRCxRQUFRRSxVQUEzQjtBQUNBLFVBQU1DLFVBQVVGLFdBQVdFLE9BQTNCO0FBQ0EsVUFBTW5CLE9BQU9pQixXQUFXRyxNQUF4QjtBQUNBLFVBQU1DLGdCQUFpQkYsUUFBUXRILE1BQVIsSUFBa0JtRyxLQUFLbkcsTUFBOUM7O0FBRUE7QUFDQSxVQUFNeUgsaUJBQWlCLENBQXZCO0FBQ0EsVUFBTUMsWUFBWXZCLEtBQUssQ0FBTCxFQUFRc0IsY0FBUixDQUFsQjtBQUNBLFVBQUksQ0FBQ0QsYUFBRCxJQUFrQixFQUFFbkgsdURBQVFBLENBQUNxSCxTQUFULEtBQXVCQyxxREFBTUEsQ0FBQ0QsU0FBUCxDQUF6QixDQUF0QixFQUFtRTtBQUNqRSxjQUFNLElBQUk1RixLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNEOztBQUVELFVBQUk4RixRQUFRLENBQVo7QUFDQXpCLFdBQUswQixPQUFMLENBQWEsVUFBVTVHLENBQVYsRUFBYTtBQUN4QixZQUFJMkcsUUFBUTNHLEVBQUV3RyxjQUFGLENBQVosRUFBK0I7QUFDN0IsZ0JBQU0sSUFBSTNGLEtBQUosQ0FBVSxnRkFBVixDQUFOO0FBQ0Q7QUFDRDhGLGdCQUFRM0csRUFBRXdHLGNBQUYsQ0FBUjtBQUNBeEcsVUFBRXdHLGNBQUYsSUFBb0JLLDhEQUFlQSxDQUFDN0csRUFBRXdHLGNBQUYsQ0FBaEIsRUFBbUMsSUFBbkMsQ0FBcEIsQ0FMd0IsQ0FLcUM7QUFDOUQsT0FORDs7QUFRQSxhQUFPO0FBQ0xNLG1CQUFXNUI7QUFETixPQUFQO0FBR0Q7Ozt5Q0FFcUI7QUFDcEIsVUFBTVMsY0FBYyxLQUFLQSxXQUF6QjtBQUNBLFVBQU1RLGFBQWFSLFlBQVltQixTQUEvQjtBQUNBLFVBQU1DLFlBQVksQ0FBbEI7QUFDQSxhQUFPO0FBQ0x4RixrQkFBVTtBQUNSd0YsOEJBRFE7QUFFUmxGLHFCQUFXLENBQUNzRSxXQUFXLENBQVgsRUFBY1ksU0FBZCxDQUFELEVBQTJCWixXQUFZQSxXQUFXcEgsTUFBWCxHQUFvQixDQUFoQyxFQUFvQ2dJLFNBQXBDLENBQTNCO0FBRkg7QUFETCxPQUFQO0FBTUQ7Ozt5Q0FFcUI7QUFDcEIsVUFBTXBCLGNBQWMsS0FBS0EsV0FBekI7QUFDQSxVQUFNcUIsY0FBY3JCLFlBQVlzQixPQUFoQztBQUNBLFVBQU1DLFdBQVd2QixZQUFZNUMsTUFBN0I7QUFDQSxVQUFNbUMsT0FBT1MsWUFBWW1CLFNBQXpCO0FBQ0EsVUFBTXJGLFFBQVFELHdEQUFTQSxDQUFDbUUsV0FBVixFQUF1QixZQUF2QixDQUFkO0FBQ0EsVUFBTS9ELFNBQVNKLHdEQUFTQSxDQUFDbUUsV0FBVixFQUF1QixhQUF2QixDQUFmO0FBQ0EsVUFBSXdCLG9CQUFvQixLQUF4QjtBQUNBLFVBQUlDLFlBQUo7QUFDQSxVQUFJL0YsU0FBUyxJQUFiO0FBQ0EsVUFBSUMsVUFBVSxJQUFkOztBQUdBLFVBQUlHLEtBQUosRUFBVztBQUNULFlBQUksOEVBQWdCQSxNQUFNNEYsR0FBdEIsS0FBOEIsOEVBQWdCNUYsTUFBTTZGLEdBQXRCLENBQWxDLEVBQThEO0FBQzVEakcsbUJBQVMsQ0FBQ0ksTUFBTTRGLEdBQVAsRUFBWTVGLE1BQU02RixHQUFsQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJMUYsTUFBSixFQUFZO0FBQ1YsWUFBSSw4RUFBZ0JBLE9BQU95RixHQUF2QixLQUErQiw4RUFBZ0J6RixPQUFPMEYsR0FBdkIsQ0FBbkMsRUFBZ0U7QUFDOURoRyxvQkFBVSxDQUFDTSxPQUFPeUYsR0FBUixFQUFhekYsT0FBTzBGLEdBQXBCLENBQVY7QUFDRDtBQUNGOztBQUVEO0FBQ0EsVUFBSzdGLFNBQVMsQ0FBQ0osTUFBWCxJQUF1Qk8sVUFBVSxDQUFDTixPQUF0QyxFQUFnRDtBQUFBOztBQUU5QyxlQUFLOEYsR0FBTCxJQUFZSixXQUFaLEVBQXlCO0FBQ3ZCLGdCQUFJLENBQUMsOEVBQWdCQSxZQUFZSSxHQUFaLEVBQWlCRyxNQUFqQyxDQUFELElBQTZDLENBQUMsOEVBQWdCUCxZQUFZSSxHQUFaLEVBQWlCSSxNQUFqQyxDQUFsRCxFQUE0RjtBQUMxRkwsa0NBQW9CLElBQXBCO0FBQ0E7QUFDRDtBQUNGOztBQUVELGNBQUtELFNBQVNPLEtBQVQsSUFBa0JQLFNBQVNPLEtBQVQsQ0FBZTFJLE1BQWxDLElBQTZDb0ksaUJBQWpELEVBQW9FOztBQUVsRSxnQkFBSUEsaUJBQUosRUFBdUI7QUFDckI7QUFDQSxtQkFBSyxJQUFNTyxJQUFYLElBQW1CVixXQUFuQixFQUFnQztBQUM5QixvQkFBTVcsV0FBV1gsWUFBWVUsSUFBWixDQUFqQjtBQUNBQyx5QkFBU0osTUFBVCxHQUFrQkssUUFBbEI7QUFDQUQseUJBQVNILE1BQVQsR0FBa0IsQ0FBQ0ksUUFBbkI7QUFDRDtBQUNGOztBQUVEO0FBQ0FWLHFCQUFTTyxLQUFULElBQWtCUCxTQUFTTyxLQUFULENBQWViLE9BQWYsQ0FBdUIsVUFBVWlCLFFBQVYsRUFBb0I7QUFDM0RBLHVCQUFTQyxVQUFULEdBQXNCLENBQUNGLFFBQUQsRUFBVyxDQUFDQSxRQUFaLENBQXRCO0FBQ0QsYUFGaUIsQ0FBbEI7O0FBSUE7QUFDQSxnQkFBSUcsVUFBVSxDQUFkO0FBQ0E3QyxpQkFBSzBCLE9BQUwsQ0FBYSxVQUFVNUcsQ0FBVixFQUFhO0FBQ3hCLGtCQUFJbUgsaUJBQUosRUFBdUI7QUFDckIscUJBQUssSUFBTU8sS0FBWCxJQUFtQlYsV0FBbkIsRUFBZ0M7QUFDOUIsc0JBQU1XLFlBQVdYLFlBQVlVLEtBQVosQ0FBakI7QUFDQUssNEJBQVUvSCxFQUFFMkgsVUFBU1osU0FBWCxDQUFWO0FBQ0Esc0JBQUlnQixVQUFVSixVQUFTSixNQUF2QixFQUErQjtBQUM3QkksOEJBQVNKLE1BQVQsR0FBa0JRLE9BQWxCO0FBQ0Q7QUFDRCxzQkFBSUEsVUFBVUosVUFBU0gsTUFBdkIsRUFBK0I7QUFDN0JHLDhCQUFTSCxNQUFULEdBQWtCTyxPQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRGIsdUJBQVNPLEtBQVQsSUFBa0JQLFNBQVNPLEtBQVQsQ0FBZWIsT0FBZixDQUF1QixVQUFVaUIsUUFBVixFQUFvQjtBQUMzRCxvQkFBTUcsWUFBWUgsU0FBU0ksaUJBQTNCO0FBQ0Esb0JBQUlDLE1BQU0sQ0FBVjtBQUNBRiwwQkFBVXBCLE9BQVYsQ0FBa0IsVUFBVXVCLE1BQVYsRUFBa0I7QUFDbENELHlCQUFRbEIsWUFBWW1CLE9BQU9DLElBQW5CLEVBQXlCbE0sT0FBekIsR0FBbUM4RCxFQUFFZ0gsWUFBWW1CLE9BQU9DLElBQW5CLEVBQXlCckIsU0FBM0IsQ0FBbkMsR0FBMkUsQ0FBbkY7QUFDRCxpQkFGRDs7QUFJQSxvQkFBSW1CLE1BQU1MLFNBQVNDLFVBQVQsQ0FBb0IsQ0FBcEIsQ0FBVixFQUFrQztBQUNoQ0QsMkJBQVNDLFVBQVQsQ0FBb0IsQ0FBcEIsSUFBeUJJLEdBQXpCO0FBQ0Q7QUFDRCxvQkFBSUEsTUFBTUwsU0FBU0MsVUFBVCxDQUFvQixDQUFwQixDQUFWLEVBQWtDO0FBQ2hDRCwyQkFBU0MsVUFBVCxDQUFvQixDQUFwQixJQUF5QkksR0FBekI7QUFDRDtBQUNGLGVBYmlCLENBQWxCO0FBY0QsYUE1QkQ7QUE2QkQ7O0FBRUQ7QUFDQSxjQUFJRyxTQUFTLENBQUNULFFBQWQ7QUFDQSxjQUFJVSxVQUFVLENBQUNWLFFBQWY7QUFDQSxlQUFLUixHQUFMLElBQVlGLFFBQVosRUFBc0I7QUFDcEIsZ0JBQUlFLFFBQVEsTUFBWixFQUFvQjtBQUNsQkYsdUJBQVNFLEdBQVQsRUFBY1IsT0FBZCxDQUFzQixVQUFVaUIsUUFBVixFQUFvQjtBQUN4QyxvQkFBSWIsWUFBWWEsU0FBU08sSUFBckIsRUFBMkJsTSxPQUEzQixJQUFzQzhLLFlBQVlhLFNBQVNPLElBQXJCLEVBQTJCRyxRQUEzQixDQUFvQyxDQUFwQyxNQUEyQyxNQUFqRixJQUEyRnZCLFlBQVlhLFNBQVNPLElBQXJCLEVBQTJCWixNQUEzQixHQUFvQ2EsTUFBbkksRUFBMkk7QUFDeklBLDJCQUFTckIsWUFBWWEsU0FBU08sSUFBckIsRUFBMkJaLE1BQXBDO0FBQ0Q7QUFDRCxvQkFBSVIsWUFBWWEsU0FBU08sSUFBckIsRUFBMkJsTSxPQUEzQixJQUFzQzhLLFlBQVlhLFNBQVNPLElBQXJCLEVBQTJCRyxRQUEzQixDQUFvQyxDQUFwQyxNQUEyQyxPQUFqRixJQUE0RnZCLFlBQVlhLFNBQVNPLElBQXJCLEVBQTJCWixNQUEzQixHQUFvQ2MsT0FBcEksRUFBNkk7QUFDM0lBLDRCQUFVdEIsWUFBWWEsU0FBU08sSUFBckIsRUFBMkJaLE1BQXJDO0FBQ0Q7QUFDRixlQVBEO0FBUUQsYUFURCxNQVNPLElBQUlKLFFBQVEsT0FBWixFQUFxQjtBQUMxQkYsdUJBQVNFLEdBQVQsRUFBY1IsT0FBZCxDQUFzQixVQUFVaUIsUUFBVixFQUFvQjtBQUN4QyxvQkFBSUEsU0FBU1UsUUFBVCxDQUFrQixDQUFsQixNQUF5QixNQUF6QixJQUFtQ1YsU0FBU0MsVUFBVCxDQUFvQixDQUFwQixJQUF5Qk8sTUFBaEUsRUFBd0U7QUFDdEVBLDJCQUFTUixTQUFTQyxVQUFULENBQW9CLENBQXBCLENBQVQ7QUFDRDtBQUNELG9CQUFJRCxTQUFTVSxRQUFULENBQWtCLENBQWxCLE1BQXlCLE9BQXpCLElBQW9DVixTQUFTQyxVQUFULENBQW9CLENBQXBCLElBQXlCUSxPQUFqRSxFQUEwRTtBQUN4RUEsNEJBQVVULFNBQVNDLFVBQVQsQ0FBb0IsQ0FBcEIsQ0FBVjtBQUNEO0FBQ0YsZUFQRDtBQVFEO0FBQ0Y7O0FBRUQ7QUFDQSxjQUFJVSxTQUFTWixRQUFiO0FBQ0EsY0FBSWEsVUFBVWIsUUFBZDtBQUNBLGVBQUtSLEdBQUwsSUFBWUosV0FBWixFQUF5QjtBQUN2QixnQkFBSUEsWUFBWUksR0FBWixFQUFpQm1CLFFBQWpCLENBQTBCLENBQTFCLE1BQWlDLE1BQWpDLElBQTJDdkIsWUFBWUksR0FBWixFQUFpQmxMLE9BQTVELElBQXVFOEssWUFBWUksR0FBWixFQUFpQkcsTUFBakIsR0FBMEJpQixNQUFyRyxFQUE2RztBQUMzR0EsdUJBQVN4QixZQUFZSSxHQUFaLEVBQWlCRyxNQUExQjtBQUNEO0FBQ0QsZ0JBQUlQLFlBQVlJLEdBQVosRUFBaUJtQixRQUFqQixDQUEwQixDQUExQixNQUFpQyxPQUFqQyxJQUE0Q3ZCLFlBQVlJLEdBQVosRUFBaUJsTCxPQUE3RCxJQUF3RThLLFlBQVlJLEdBQVosRUFBaUJHLE1BQWpCLEdBQTBCa0IsT0FBdEcsRUFBK0c7QUFDN0dBLHdCQUFVekIsWUFBWUksR0FBWixFQUFpQkcsTUFBM0I7QUFDRDtBQUNGOztBQUdELGNBQUltQixhQUFKO0FBQUEsY0FBVXRFLGFBQVY7QUFDQTtBQUNBLGNBQUksQ0FBQ29FLE1BQUQsRUFBU0gsTUFBVCxFQUFpQk0sTUFBakIsQ0FBd0IsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQzFDLG1CQUFPLDhFQUFnQkQsQ0FBaEIsS0FBc0IsOEVBQWdCQyxDQUFoQixDQUE3QjtBQUNELFdBRkcsQ0FBSixFQUVJO0FBQ0ZILG1CQUFPbEgsd0RBQVNBLENBQUNtRSxXQUFWLEVBQXVCLGdCQUF2QixDQUFQO0FBQ0ErQyxtQkFBTyw4RUFBZ0JBLElBQWhCLElBQXdCQSxJQUF4QixHQUErQkYsTUFBdEM7QUFDQXBFLG1CQUFPNUMsd0RBQVNBLENBQUNtRSxXQUFWLEVBQXVCLGdCQUF2QixDQUFQO0FBQ0F2QixtQkFBTyw4RUFBZ0JBLElBQWhCLElBQXdCQSxJQUF4QixHQUErQmlFLE1BQXRDO0FBQ0EsZ0JBQUksQ0FBQ2pFLElBQUwsRUFBVztBQUNUQSxxQkFBT3NFLE9BQU8sRUFBZCxDQURTLENBQ1E7QUFDbEI7QUFDRHJILHFCQUFTLENBQUNxSCxJQUFELEVBQU90RSxJQUFQLENBQVQ7QUFDRCxXQVhELE1BV087QUFDTCxnQkFBSTNDLEtBQUosRUFBVztBQUNUSix1QkFBUyxDQUFDLENBQUQsRUFBSSxFQUFKLENBQVQ7QUFDRCxhQUZELE1BRU87QUFDTEEsdUJBQVMsS0FBVDtBQUNEO0FBQ0Y7O0FBR0QsY0FBSSxDQUFDb0gsT0FBRCxFQUFVSCxPQUFWLEVBQW1CSyxNQUFuQixDQUEwQixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDNUMsbUJBQU8sOEVBQWdCRCxDQUFoQixLQUFzQiw4RUFBZ0JDLENBQWhCLENBQTdCO0FBQ0QsV0FGRyxDQUFKLEVBRUk7QUFDRkgsbUJBQU9sSCx3REFBU0EsQ0FBQ21FLFdBQVYsRUFBdUIsaUJBQXZCLENBQVA7QUFDQStDLG1CQUFPLDhFQUFnQkEsSUFBaEIsSUFBd0JBLElBQXhCLEdBQStCRCxPQUF0QztBQUNBckUsbUJBQU81Qyx3REFBU0EsQ0FBQ21FLFdBQVYsRUFBdUIsaUJBQXZCLENBQVA7QUFDQXZCLG1CQUFPLDhFQUFnQkEsSUFBaEIsSUFBd0JBLElBQXhCLEdBQStCa0UsT0FBdEM7QUFDQSxnQkFBSSxDQUFDbEUsSUFBTCxFQUFXO0FBQ1RBLHFCQUFPc0UsT0FBTyxFQUFkLENBRFMsQ0FDUTtBQUNsQjtBQUNEcEgsc0JBQVUsQ0FBQ29ILElBQUQsRUFBT3RFLElBQVAsQ0FBVjtBQUNELFdBWEQsTUFXTztBQUNMLGdCQUFJeEMsTUFBSixFQUFZO0FBQ1ZOLHdCQUFVLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBVjtBQUNELGFBRkQsTUFFTztBQUNMQSx3QkFBVSxLQUFWO0FBQ0Q7QUFDRjtBQXZJNkM7QUF5SS9DOztBQUVELGFBQU87QUFDTEQsZ0JBQVFBLE1BREg7QUFFTEMsaUJBQVNBO0FBRkosT0FBUDtBQUlEOzs7d0NBRW9CO0FBQ25CLFVBQU1xRSxjQUFjLEtBQUtBLFdBQXpCO0FBQ0EsVUFBTU8sVUFBVVAsWUFBWVQsSUFBNUI7QUFDQSxVQUFNaUIsYUFBYUQsUUFBUUUsVUFBM0I7QUFDQSxVQUFNQyxVQUFVRixXQUFXRSxPQUEzQjtBQUNBLFVBQUl5QyxNQUFNLENBQVY7QUFDQTtBQUNBLFVBQU05QixjQUFjLEVBQXBCO0FBQ0E7QUFDQSxVQUFNRSxXQUFXdkIsWUFBWTVDLE1BQTdCO0FBQ0EsVUFBSXFFLFlBQUo7O0FBRUEsVUFBTVosaUJBQWlCYixZQUFZcEUsUUFBWixDQUFxQndGLFNBQTVDO0FBQ0EsVUFBTWdDLGVBQWU1QyxXQUFXNkMsS0FBWCxJQUFvQixFQUF6QztBQUNBLFVBQU1DLFFBQVF6SCx3REFBU0EsQ0FBQ21FLFdBQVYsRUFBdUIsWUFBdkIsQ0FBZDtBQUNBLFVBQU11RCxTQUFTMUgsd0RBQVNBLENBQUNtRSxXQUFWLEVBQXVCLGFBQXZCLENBQWY7O0FBRUE7QUFDQVUsY0FBUU8sT0FBUixDQUFnQixVQUFVNUcsQ0FBVixFQUFhO0FBQzNCLFlBQUl3RyxtQkFBbUJzQyxHQUF2QixFQUE0QjtBQUMxQkE7QUFDQTtBQUNEO0FBQ0Q7QUFDQSxZQUFNSyxhQUFhQywyREFBWUEsQ0FBQ3BKLENBQWIsQ0FBbkI7QUFDQWdILG9CQUFZbUMsVUFBWixJQUEwQjtBQUN4QmYsZ0JBQU1wSSxDQURrQjtBQUV4QitHLHFCQUFXK0IsR0FGYTtBQUd4QnZCLGtCQUFRSyxRQUhnQjtBQUl4Qkosa0JBQVEsQ0FBQ0ksUUFKZTtBQUt4QjFMLG1CQUFTLElBTGU7QUFNeEI4TSxpQkFBT0QsYUFBYUQsR0FBYixLQUFxQjtBQU5KLFNBQTFCO0FBUUFBO0FBQ0QsT0FoQkQ7O0FBbUJBLFdBQUsxQixHQUFMLElBQVlGLFFBQVosRUFBc0I7QUFDcEIsWUFBSUUsUUFBUSxNQUFaLEVBQW9CO0FBQ2xCRixtQkFBU0UsR0FBVCxFQUFjUixPQUFkLENBQXNCLFVBQVVpQixRQUFWLEVBQW9CO0FBQ3hDQSxxQkFBU08sSUFBVCxHQUFnQmdCLDJEQUFZQSxDQUFDdkIsU0FBU08sSUFBdEIsQ0FBaEI7QUFDQSxnQkFBTVksUUFBUW5CLFNBQVNtQixLQUF2QixDQUZ3QyxDQUVYO0FBQzdCLGdCQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLHNEQUFzQ25CLFNBQVNPLElBQS9DO0FBQ0Q7QUFDRFksc0JBQVVoQyxZQUFZYSxTQUFTTyxJQUFyQixFQUEyQlksS0FBM0IsR0FBbUNBLEtBQTdDO0FBQ0EsZ0JBQU1ULFdBQVdWLFNBQVNVLFFBQVQsSUFBcUIsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUF0QztBQUNBdkIsd0JBQVlhLFNBQVNPLElBQXJCLEVBQTJCRyxRQUEzQixHQUFzQ0EsUUFBdEM7QUFDQSxnQkFBTXBOLE9BQU9vTixTQUFTLENBQVQsTUFBZ0IsTUFBaEIsR0FBeUJVLE1BQU05TixJQUEvQixHQUFzQytOLE9BQU8vTixJQUExRDtBQUNBNkwsd0JBQVlhLFNBQVNPLElBQXJCLEVBQTJCak4sSUFBM0IsR0FBa0NBLElBQWxDO0FBQ0FrTyxvRUFBU0EsQ0FBQ3hCLFNBQVMzTCxPQUFuQixNQUFnQzhLLFlBQVlhLFNBQVNPLElBQXJCLEVBQTJCbE0sT0FBM0IsR0FBcUMyTCxTQUFTM0wsT0FBOUU7QUFDRCxXQVpEO0FBYUQsU0FkRCxNQWNPLElBQUlrTCxRQUFRLE9BQVosRUFBcUI7QUFDMUJGLG1CQUFTRSxHQUFULEVBQWNSLE9BQWQsQ0FBc0IsVUFBVWlCLFFBQVYsRUFBb0I7QUFDeEMsZ0JBQU1HLFlBQVlILFNBQVNJLGlCQUEzQjtBQUNBSixxQkFBU0MsVUFBVCxHQUFzQixDQUFDRixRQUFELEVBQVcsQ0FBQ0EsUUFBWixDQUF0QjtBQUNBSSxzQkFBVXBCLE9BQVYsQ0FBa0IsVUFBVXVCLE1BQVYsRUFBa0I7QUFDbENBLHFCQUFPQyxJQUFQLEdBQWNnQiwyREFBWUEsQ0FBQ2pCLE9BQU9DLElBQXBCLENBQWQ7QUFDQSxrQkFBTVksUUFBUWIsT0FBT2EsS0FBckIsQ0FGa0MsQ0FFUDtBQUMzQixrQkFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVix3REFBc0NuQixTQUFTTyxJQUEvQztBQUNEO0FBQ0RZLHdCQUFVaEMsWUFBWW1CLE9BQU9DLElBQW5CLEVBQXlCWSxLQUF6QixHQUFpQ0EsS0FBM0M7QUFDQSxrQkFBTVQsV0FBV0osT0FBT0ksUUFBUCxJQUFtQixDQUFDLE1BQUQsRUFBUyxRQUFULENBQXBDO0FBQ0F2QiwwQkFBWW1CLE9BQU9DLElBQW5CLEVBQXlCRyxRQUF6QixHQUFvQ0EsUUFBcEM7QUFDQSxrQkFBTXBOLE9BQU9vTixTQUFTLENBQVQsTUFBZ0IsTUFBaEIsR0FBeUJVLE1BQU05TixJQUEvQixHQUFzQytOLE9BQU8vTixJQUExRDtBQUNBNkwsMEJBQVltQixPQUFPQyxJQUFuQixFQUF5QmpOLElBQXpCLEdBQWdDQSxJQUFoQztBQUNBa08sc0VBQVNBLENBQUNsQixPQUFPak0sT0FBakIsTUFBOEI4SyxZQUFZbUIsT0FBT0MsSUFBbkIsRUFBeUJsTSxPQUF6QixHQUFtQ2lNLE9BQU9qTSxPQUF4RTtBQUNELGFBWkQ7QUFhRCxXQWhCRDtBQWlCRCxTQWxCTSxNQWtCQSxJQUFJa0wsUUFBUSxLQUFaLEVBQW1CO0FBQ3hCRixtQkFBU0UsR0FBVCxFQUFjUixPQUFkLENBQXNCLFVBQVVpQixRQUFWLEVBQW9CO0FBQ3hDLGdCQUFNRyxZQUFZSCxTQUFTeUIsZUFBM0I7QUFDQXpCLHFCQUFTQyxVQUFULEdBQXNCLENBQUNGLFFBQUQsRUFBVyxDQUFDQSxRQUFaLENBQXRCO0FBQ0FJLHNCQUFVcEIsT0FBVixDQUFrQixVQUFVdUIsTUFBVixFQUFrQjtBQUNsQ0EscUJBQU9DLElBQVAsR0FBY2dCLDJEQUFZQSxDQUFDakIsT0FBT0MsSUFBcEIsQ0FBZDtBQUNBLGtCQUFNWSxRQUFRYixPQUFPYSxLQUFyQixDQUZrQyxDQUVQO0FBQzNCLGtCQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLHdEQUFzQ25CLFNBQVNPLElBQS9DO0FBQ0Q7QUFDRFksd0JBQVVoQyxZQUFZbUIsT0FBT0MsSUFBbkIsRUFBeUJZLEtBQXpCLEdBQWlDQSxLQUEzQztBQUNBLGtCQUFNVCxXQUFXSixPQUFPSSxRQUFQLElBQW1CLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBcEM7QUFDQXZCLDBCQUFZbUIsT0FBT0MsSUFBbkIsRUFBeUJHLFFBQXpCLEdBQW9DQSxRQUFwQztBQUNBLGtCQUFNcE4sT0FBT29OLFNBQVMsQ0FBVCxNQUFnQixNQUFoQixHQUF5QlUsTUFBTTlOLElBQS9CLEdBQXNDK04sT0FBTy9OLElBQTFEO0FBQ0E2TCwwQkFBWW1CLE9BQU9DLElBQW5CLEVBQXlCak4sSUFBekIsR0FBZ0NBLElBQWhDO0FBQ0FrTyxzRUFBU0EsQ0FBQ2xCLE9BQU9qTSxPQUFqQixNQUE4QjhLLFlBQVltQixPQUFPQyxJQUFuQixFQUF5QmxNLE9BQXpCLEdBQW1DaU0sT0FBT2pNLE9BQXhFO0FBQ0QsYUFaRDtBQWFELFdBaEJEO0FBaUJEO0FBQ0Y7O0FBRUQsYUFBTztBQUNMNkcsZ0JBQVFtRSxRQURILEVBQ2E7QUFDbEJELGlCQUFTRCxXQUZKLENBRWlCO0FBRmpCLE9BQVA7QUFJRDs7OztFQWhWd0NwRyxvRTs7QUFBdEJELDRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7SUFFcUJ5QixZOzs7QUFDbkIsd0JBQWF0SCxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtBLElBQUwsQ0FBVXlPLFVBQVYsR0FBdUIsRUFBdkI7QUFIaUI7QUFJbEI7Ozs7MkJBRU87QUFDTixXQUFLQyxVQUFMLEdBQWtCLEtBQUsxTyxJQUFMLENBQVVnQyxLQUFWLENBQWdCK0gsR0FBaEIsQ0FBb0I5RyxNQUFwQixDQUEyQixHQUEzQixFQUNmQyxJQURlLENBQ1YsT0FEVSxFQUNELFdBREMsRUFFZkEsSUFGZSxDQUVWLE9BRlUsRUFFRCxLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFGZixFQUdmVSxJQUhlLENBR1YsUUFIVSxFQUdBLEtBQUtsRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCQyxXQUhoQixFQUlmaUIsSUFKZSxDQUlWLE1BSlUsRUFJRixNQUpFLEVBS2ZBLElBTGUsQ0FLVixnQkFMVSxFQUtRLEtBTFIsRUFNZkEsSUFOZSxDQU1WLE9BTlUsRUFNRCwrQ0FOQyxFQU9mQSxJQVBlLENBT1YsV0FQVSxpQkFPZ0IsS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkMsSUFQdkMsU0FPK0MsS0FBSzlELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QjhLLEdBUHRFLE9BQWxCOztBQVNBLFVBQUksS0FBSzNPLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QmpFLEtBQXhCLENBQThCMEYsYUFBbEMsRUFBaUQ7QUFDL0MsYUFBS2dILFVBQUwsQ0FBZ0J4TCxJQUFoQixDQUFxQixRQUFyQixFQUErQixTQUEvQjtBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCc0IsSUFBeEIsQ0FBNkJuRyxPQUE5QixJQUF5QyxLQUFLcEIsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCakUsS0FBeEIsQ0FBOEIwRixhQUEzRSxFQUEwRjtBQUN4RjtBQUNBLGFBQUtnSCxVQUFMLENBQWdCekwsTUFBaEIsQ0FBdUIsTUFBdkIsRUFDR0MsSUFESCxDQUNRLE9BRFIsRUFDaUIsU0FEakIsRUFFR0EsSUFGSCxDQUVRLEdBRlIsRUFFYSxDQUZiLEVBR0dBLElBSEgsQ0FHUSxHQUhSLEVBR2EsQ0FIYixFQUlHQSxJQUpILENBSVEsT0FKUixFQUlpQixLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFKakMsRUFLR1UsSUFMSCxDQUtRLFFBTFIsRUFLa0IsS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBTGxDO0FBTUQ7QUFDRjs7OzZCQUVTO0FBQ1IsV0FBS3lNLFVBQUwsQ0FBZ0J4TCxJQUFoQixDQUFxQixPQUFyQixFQUE4QixLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFBOUMsRUFDR1UsSUFESCxDQUNRLFFBRFIsRUFDa0IsS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBRGxDLEVBRUdpQixJQUZILENBRVEsV0FGUixpQkFFa0MsS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkMsSUFGekQsU0FFaUUsS0FBSzlELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QjhLLEdBRnhGO0FBR0EsVUFBSSxDQUFDLEtBQUszTyxJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0JzQixJQUF4QixDQUE2Qm5HLE9BQTlCLElBQXlDLEtBQUtwQixJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0JqRSxLQUF4QixDQUE4QjBGLGFBQTNFLEVBQTBGO0FBQ3hGLGFBQUtnSCxVQUFMLENBQWdCekUsTUFBaEIsQ0FBdUIsY0FBdkIsRUFDRy9HLElBREgsQ0FDUSxPQURSLEVBQ2lCLEtBQUtsRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQURqQyxFQUVHVSxJQUZILENBRVEsUUFGUixFQUVrQixLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FGbEM7QUFHRDtBQUNGOzs7NkJBRVNvRCxRLEVBQVU7QUFDbEJBLGlCQUFXLENBQUMsQ0FBQ0EsUUFBYjtBQUNBLFdBQUtxSixVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JwTCxPQUFoQixDQUF3QixXQUF4QixFQUFxQyxDQUFDK0IsUUFBdEMsQ0FBbkI7QUFDRDs7OzZCQUVTdUosUSxFQUFVO0FBQ2xCLFdBQUs1TyxJQUFMLENBQVV5TyxVQUFWLENBQXFCNUgsSUFBckIsQ0FBMEIrSCxRQUExQjtBQUNEOzs7eUNBRXFCO0FBQUE7O0FBQ3BCLFdBQUs1TyxJQUFMLENBQVV5TyxVQUFWLENBQXFCM0MsT0FBckIsQ0FBNkIsVUFBQytDLEdBQUQsRUFBUztBQUNwQ0EsWUFBSWpLLElBQUosQ0FBUyxNQUFUO0FBQ0QsT0FGRDtBQUdEOzs7NkJBRVM7QUFDUixXQUFLOEosVUFBTCxJQUFtQixLQUFLQSxVQUFMLENBQWdCcEosTUFBaEIsRUFBbkI7QUFDQSxXQUFLdEYsSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQTdEdUN1Riw4RDs7QUFBckIrQiwyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCd0gsSTs7O0FBRW5CLGdCQUFhOU8sSUFBYixFQUFtQjtBQUFBOztBQUVqQjtBQUZpQjs7QUFHakIsVUFBS0EsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCQyxpQkFBVyxFQURhO0FBRXhCd04sZ0JBQVUsQ0FBQ3pNLGtEQUFTQSxDQUFDb0IsUUFBWCxFQUFxQnBCLGtEQUFTQSxDQUFDVyxVQUEvQixDQUZjO0FBR3hCb04sZ0JBQVUsSUFIYztBQUl4QkMsbUJBQWEsSUFKVztBQUt4QkMsbUJBQWEsSUFMVztBQU14QjdOLGVBQVMsSUFOZTtBQU94QjhOLFlBQU07QUFQa0IsS0FBZCxFQVFUbFAsSUFSUyxDQUFaOztBQVVBLFFBQU1tQyxZQUFOOztBQUVBO0FBQ0EsUUFBSWdOLElBQUl6SSx3REFBU0EsQ0FBQyxNQUFLMUcsSUFBZixFQUFxQixtQkFBckIsQ0FBUjtBQUNBLFFBQUksTUFBS0EsSUFBTCxDQUFVeU4sUUFBVixDQUFtQjJCLE9BQW5CLENBQTJCcE8sa0RBQVNBLENBQUNhLE9BQXJDLElBQWdELENBQUMsQ0FBckQsRUFBd0Q7QUFDdERzTixVQUFJekksd0RBQVNBLENBQUMsTUFBSzFHLElBQWYsRUFBcUIsb0JBQXJCLENBQUo7QUFDRDs7QUFFRCxRQUFJcVAsSUFBSTNJLHdEQUFTQSxDQUFDLE1BQUsxRyxJQUFmLEVBQXFCLG1CQUFyQixDQUFSO0FBQ0EsUUFBSSxNQUFLQSxJQUFMLENBQVV5TixRQUFWLENBQW1CMkIsT0FBbkIsQ0FBMkJwTyxrREFBU0EsQ0FBQ3NCLFNBQXJDLElBQWtELENBQUMsQ0FBdkQsRUFBMEQ7QUFDeEQrTSxVQUFJM0ksd0RBQVNBLENBQUMsTUFBSzFHLElBQWYsRUFBcUIsb0JBQXJCLENBQUo7QUFDRDs7QUFFRCxVQUFLc1AsSUFBTCxHQUFZQSx3REFBSUEsRUFBaEI7O0FBRUEsUUFBSSxNQUFLdFAsSUFBTCxDQUFVZ1AsV0FBZCxFQUEyQjtBQUN6QjtBQUNBLFlBQUtNLElBQUwsQ0FDR0MsT0FESCxDQUNXLFVBQVVySyxDQUFWLEVBQWE7QUFDcEIsZUFBT0EsRUFBRS9DLEtBQUtuQyxJQUFMLENBQVVnUCxXQUFaLEtBQTRCLElBQW5DO0FBQ0QsT0FISCxFQUlHRyxDQUpILENBSUssVUFBVWpLLENBQVYsRUFBYTtBQUNkO0FBQ0EsZUFBT2lLLEVBQUVqSyxFQUFFL0MsS0FBS25DLElBQUwsQ0FBVWlQLFdBQVosQ0FBRixDQUFQO0FBQ0QsT0FQSCxFQVFHSSxDQVJILENBUUssVUFBVW5LLENBQVYsRUFBYTtBQUNkLGVBQU9tSyxFQUFFbkssRUFBRS9DLEtBQUtuQyxJQUFMLENBQVVnUCxXQUFaLENBQUYsQ0FBUDtBQUNELE9BVkg7QUFXRDtBQXpDZ0I7QUEwQ2xCOzs7OzJCQUVPO0FBQ04sVUFBTTdNLE9BQU8sSUFBYjtBQUNBLFdBQUtxTixPQUFMLEdBQWUsS0FBS3hQLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JnQixTQUFoQixDQUEwQmdDLFNBQTFCLENBQW9DLGNBQWMsS0FBS2hGLElBQUwsQ0FBVUMsU0FBNUQsRUFDWm1LLElBRFksQ0FDUCxDQUFDLEtBQUtwSyxJQUFMLENBQVUrTyxRQUFYLENBRE8sRUFFWjFFLEtBRlksR0FHWnBILE1BSFksQ0FHTCxHQUhLLEVBSVpDLElBSlksQ0FJUCxPQUpPLEVBSUUsMEJBQTBCLEtBQUtsRCxJQUFMLENBQVVDLFNBSnRDLENBQWY7O0FBTUEsVUFBTXdQLGNBQWMsS0FBS3pQLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0J5RCxTQUFoQixDQUEwQndFLE1BQTFCLENBQWlDLGNBQWpDLENBQXBCO0FBQ0E7QUFDQSxXQUFLdUYsT0FBTCxDQUFhdk0sTUFBYixDQUFvQixNQUFwQixFQUNHQyxJQURILENBQ1EsV0FEUixFQUNxQixVQUFVdU0sWUFBWXZNLElBQVosQ0FBaUIsSUFBakIsQ0FBVixHQUFtQyxHQUR4RCxFQUM2RDtBQUQ3RCxPQUVHQSxJQUZILENBRVEsT0FGUixFQUVpQixTQUZqQixFQUdHK0IsS0FISCxDQUdTLFFBSFQsRUFHbUIsVUFBVUMsQ0FBVixFQUFhO0FBQzVCLGVBQU9BLEVBQUVnSixLQUFUO0FBQ0QsT0FMSCxFQU1HakosS0FOSCxDQU1TLE1BTlQsRUFNaUIsYUFOakIsRUFPR0EsS0FQSCxDQU9TLGNBUFQsRUFPeUIsVUFBVUMsQ0FBVixFQUFhO0FBQ2xDLGVBQU9BLEVBQUV3SyxTQUFGLElBQWUsS0FBdEI7QUFDRCxPQVRILEVBVUd4TSxJQVZILENBVVEsR0FWUixFQVVhLFVBQVVnQyxDQUFWLEVBQWE7QUFDdEIsZUFBTy9DLEtBQUttTixJQUFMLENBQVVwSyxFQUFFc0csTUFBWixDQUFQLENBRHNCLENBQ0s7QUFDNUIsT0FaSDs7QUFjQTtBQUNBLFVBQUksS0FBS3hMLElBQUwsQ0FBVWtQLElBQVYsSUFBa0IsS0FBS2xQLElBQUwsQ0FBVWtQLElBQVYsQ0FBZTlOLE9BQXJDLEVBQThDO0FBQzVDLFlBQU11TyxrQkFBa0IsS0FBSzNQLElBQUwsQ0FBVStPLFFBQVYsQ0FBbUJ2RCxNQUFuQixDQUEwQnZILE1BQWxEO0FBQ0EsYUFBSzJMLE9BQUwsR0FBZSxLQUFLSixPQUFMLENBQWF4SyxTQUFiLENBQXVCLGFBQXZCLEVBQ1pvRixJQURZLENBQ1AsS0FBS3BLLElBQUwsQ0FBVStPLFFBQVYsQ0FBbUJ2RCxNQURaLEVBRVpuQixLQUZZLEdBRUpwSCxNQUZJLENBRUcsUUFGSCxFQUdaQyxJQUhZLENBR1AsT0FITyxFQUdFLFVBQVVnQyxDQUFWLEVBQWEySyxLQUFiLEVBQW9CO0FBQ2pDLGNBQUk1UCxxQ0FBbUM0UCxLQUF2QztBQUNBLGNBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNmNVAseUJBQWEsZUFBYjtBQUNEO0FBQ0QsY0FBSTRQLFVBQVdGLGtCQUFrQixDQUFqQyxFQUFxQztBQUNuQzFQLHlCQUFhLGNBQWI7QUFDRDtBQUNELGlCQUFPQSxTQUFQO0FBQ0QsU0FaWSxFQWFaaUQsSUFiWSxDQWFQLEdBYk8sRUFhRixLQUFLbEQsSUFBTCxDQUFVa1AsSUFBVixDQUFlWSxNQWJiLENBQWY7QUFjRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQ1IsVUFBTTNOLE9BQU8sSUFBYjtBQUNBLFdBQUtxTixPQUFMLElBQWdCLEtBQUtBLE9BQUwsQ0FBYXZGLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEIvRyxJQUE1QixDQUFpQyxHQUFqQyxFQUFzQyxVQUFVZ0MsQ0FBVixFQUFhO0FBQ2pFLGVBQU8vQyxLQUFLbU4sSUFBTCxDQUFVcEssRUFBRXNHLE1BQVosQ0FBUDtBQUNELE9BRmUsQ0FBaEI7QUFHQTtBQUNBLFVBQUksS0FBS29FLE9BQVQsRUFBa0I7QUFDaEI7QUFDQSxZQUFJVCxJQUFJekksd0RBQVNBLENBQUMsS0FBSzFHLElBQWYsRUFBcUIsbUJBQXJCLENBQVI7QUFDQSxZQUFJLEtBQUtBLElBQUwsQ0FBVXlOLFFBQVYsQ0FBbUIyQixPQUFuQixDQUEyQnBPLGtEQUFTQSxDQUFDYSxPQUFyQyxJQUFnRCxDQUFDLENBQXJELEVBQXdEO0FBQ3REc04sY0FBSXpJLHdEQUFTQSxDQUFDLEtBQUsxRyxJQUFmLEVBQXFCLG9CQUFyQixDQUFKO0FBQ0Q7O0FBRUQsWUFBSXFQLElBQUkzSSx3REFBU0EsQ0FBQyxLQUFLMUcsSUFBZixFQUFxQixtQkFBckIsQ0FBUjtBQUNBLFlBQUksS0FBS0EsSUFBTCxDQUFVeU4sUUFBVixDQUFtQjJCLE9BQW5CLENBQTJCcE8sa0RBQVNBLENBQUNzQixTQUFyQyxJQUFrRCxDQUFDLENBQXZELEVBQTBEO0FBQ3hEK00sY0FBSTNJLHdEQUFTQSxDQUFDLEtBQUsxRyxJQUFmLEVBQXFCLG9CQUFyQixDQUFKO0FBQ0Q7QUFDRCxhQUFLNFAsT0FBTCxDQUFhMU0sSUFBYixDQUFrQixHQUFsQixFQUF1QixLQUFLbEQsSUFBTCxDQUFVa1AsSUFBVixDQUFlWSxNQUF0QyxFQUNHNU0sSUFESCxDQUNRLElBRFIsRUFDYyxVQUFVZ0MsQ0FBVixFQUFhO0FBQ3ZCO0FBQ0EsaUJBQU9pSyxFQUFFakssRUFBRS9DLEtBQUtuQyxJQUFMLENBQVVpUCxXQUFaLENBQUYsQ0FBUDtBQUNELFNBSkgsRUFLRy9MLElBTEgsQ0FLUSxJQUxSLEVBS2MsVUFBVWdDLENBQVYsRUFBYTtBQUN2QixpQkFBT21LLEVBQUVuSyxFQUFFL0MsS0FBS25DLElBQUwsQ0FBVWdQLFdBQVosQ0FBRixDQUFQO0FBQ0QsU0FQSDtBQVFEO0FBQ0Y7Ozs2QkFFUzNKLFEsRUFBVTtBQUNsQkEsaUJBQVcsQ0FBQyxDQUFDQSxRQUFiO0FBQ0EsV0FBS21LLE9BQUwsSUFBZ0IsS0FBS0EsT0FBTCxDQUFhbE0sT0FBYixDQUFxQixXQUFyQixFQUFrQyxDQUFDK0IsUUFBbkMsQ0FBaEI7QUFDQSxXQUFLckYsSUFBTCxDQUFVb0IsT0FBVixHQUFvQmlFLFFBQXBCO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixVQUFNNkcsY0FBYyxLQUFLbE0sSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCa0csT0FBNUM7QUFDQSxVQUFNNEQsYUFBYSxLQUFLL1AsSUFBTCxDQUFVK08sUUFBVixDQUFtQnpCLElBQXRDO0FBQ0E7QUFDQSxXQUFLa0MsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWFsSyxNQUFiLEVBQWhCOztBQUVBLFVBQUk0RyxlQUFlQSxZQUFZNkQsVUFBWixDQUFmLElBQTBDN0QsWUFBWTZELFVBQVosRUFBd0IzTyxPQUF0RSxFQUErRTtBQUM3RSxhQUFLaUYsSUFBTDtBQUNEO0FBRUY7Ozs2QkFFUztBQUNSLFdBQUttSixPQUFMLElBQWdCLEtBQUtBLE9BQUwsQ0FBYWxLLE1BQWIsRUFBaEI7QUFDQSxXQUFLZ0ssSUFBTCxHQUFZLElBQVo7QUFDQSxXQUFLdFAsSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQTlJK0J1Riw4RDs7QUFBYnVKLG1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJrQixTOzs7QUFDbkIscUJBQWFoUSxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWSwyRUFBYztBQUN4QkMsaUJBQVcsRUFEYTtBQUV4QndOLGdCQUFVLENBQUN6TSxrREFBU0EsQ0FBQ29CLFFBQVgsRUFBcUJwQixrREFBU0EsQ0FBQ1csVUFBL0IsQ0FGYztBQUd4QnNOLG1CQUFhLEVBSFc7QUFJeEJnQixpQkFBVyxJQUphO0FBS3hCOUMseUJBQW1CLEVBTEs7QUFNeEIvTCxlQUFTO0FBTmUsS0FBZCxFQU9UcEIsSUFQUyxDQUFaOztBQVNBLFFBQU1tQyxZQUFOO0FBQ0EsUUFBTStKLGNBQWMsTUFBS2xNLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QmtHLE9BQTVDO0FBQ0E7QUFDQSxVQUFLbk0sSUFBTCxDQUFVa1EsZUFBVixHQUE0QixNQUFLbFEsSUFBTCxDQUFVbU4saUJBQVYsQ0FBNEJnRCxNQUE1QixDQUFtQyxVQUFVQyxHQUFWLEVBQWU7QUFDNUUsYUFBT2xFLFlBQVlrRSxJQUFJOUMsSUFBaEIsRUFBc0JsTSxPQUF0QixJQUFpQyxLQUF4QztBQUNELEtBRjJCLEVBR3pCaVAsR0FIeUIsQ0FHckIsVUFBVUQsR0FBVixFQUFlO0FBQ2xCLGFBQU9sRSxZQUFZa0UsSUFBSTlDLElBQWhCLEVBQXNCckIsU0FBN0I7QUFDRCxLQUx5QixDQUE1Qjs7QUFRQTtBQUNBLFFBQUlrRCxJQUFJekksd0RBQVNBLENBQUMsTUFBSzFHLElBQWYsRUFBcUIsbUJBQXJCLENBQVI7QUFDQSxRQUFJLE1BQUtBLElBQUwsQ0FBVXlOLFFBQVYsQ0FBbUIyQixPQUFuQixDQUEyQnBPLGtEQUFTQSxDQUFDYSxPQUFyQyxJQUFnRCxDQUFDLENBQXJELEVBQXdEO0FBQ3REc04sVUFBSXpJLHdEQUFTQSxDQUFDLE1BQUsxRyxJQUFmLEVBQXFCLG9CQUFyQixDQUFKO0FBQ0Q7O0FBRUQsUUFBSXFQLElBQUkzSSx3REFBU0EsQ0FBQyxNQUFLMUcsSUFBZixFQUFxQixtQkFBckIsQ0FBUjtBQUNBLFFBQUksTUFBS0EsSUFBTCxDQUFVeU4sUUFBVixDQUFtQjJCLE9BQW5CLENBQTJCcE8sa0RBQVNBLENBQUNzQixTQUFyQyxJQUFrRCxDQUFDLENBQXZELEVBQTBEO0FBQ3hEK00sVUFBSTNJLHdEQUFTQSxDQUFDLE1BQUsxRyxJQUFmLEVBQXFCLG9CQUFyQixDQUFKO0FBQ0Q7O0FBRUQsVUFBS0EsSUFBTCxDQUFVc1EsT0FBVixHQUFvQjNELHlEQUFLQSxFQUF6Qjs7QUFFQSxVQUFLNEQsSUFBTCxHQUFZQSx3REFBSUEsR0FDYnBCLENBRFMsQ0FDUCxVQUFVakssQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2pCLGFBQU9nSyxFQUFFakssRUFBRWtGLElBQUYsQ0FBT2pJLEtBQUtuQyxJQUFMLENBQVVpUCxXQUFqQixDQUFGLENBQVA7QUFDRCxLQUhTLEVBSVR1QixFQUpTLENBSU4sVUFBVXRMLENBQVYsRUFBYTtBQUNmLGFBQU9tSyxFQUFFbkssRUFBRSxDQUFGLENBQUYsQ0FBUCxDQURlLENBQ0E7QUFDaEIsS0FOUyxFQU9UdUwsRUFQUyxDQU9OLFVBQVV2TCxDQUFWLEVBQWE7QUFDZixhQUFPbUssRUFBRW5LLEVBQUUsQ0FBRixDQUFGLENBQVAsQ0FEZSxDQUNBO0FBQ2hCLEtBVFMsQ0FBWjs7QUFuQ2lCO0FBOENsQjs7OzsyQkFFTztBQUNOLFVBQU0vQyxPQUFPLElBQWI7QUFDQSxVQUFNK0osY0FBYyxLQUFLbE0sSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCa0csT0FBNUM7O0FBRUEsV0FBS25NLElBQUwsQ0FBVXNRLE9BQVYsQ0FBa0JJLElBQWxCLENBQXVCLEtBQUsxUSxJQUFMLENBQVVrUSxlQUFqQyxFQUpNLENBSTRDO0FBQ2xELFdBQUtsUSxJQUFMLENBQVVzUSxPQUFWLENBQWtCSyxLQUFsQixDQUF3QkMsMERBQXhCLEVBTE0sQ0FLa0M7QUFDeEMsV0FBSzVRLElBQUwsQ0FBVXNRLE9BQVYsQ0FBa0JPLE1BQWxCLENBQXlCQywyREFBekIsRUFOTSxDQU1vQzs7QUFFMUM7QUFDQSxVQUFNQyxvQkFBb0IsS0FBSy9RLElBQUwsQ0FBVW1OLGlCQUFWLENBQTRCZ0QsTUFBNUIsQ0FBbUMsVUFBVUMsR0FBVixFQUFlO0FBQzFFLGVBQVFsRSxZQUFZa0UsSUFBSTlDLElBQWhCLEVBQXNCbE0sT0FBdEIsSUFBaUMsS0FBekM7QUFDRCxPQUZ5QixDQUExQjs7QUFJQSxXQUFLNFAsVUFBTCxHQUFrQixLQUFLaFIsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmdCLFNBQWhCLENBQTBCZ0MsU0FBMUIsQ0FBb0MsZUFBZSxLQUFLaEYsSUFBTCxDQUFVQyxTQUE3RCxFQUNmbUssSUFEZSxDQUNWLEtBQUtwSyxJQUFMLENBQVVzUSxPQUFWLENBQWtCLEtBQUt0USxJQUFMLENBQVVpUSxTQUE1QixDQURVLEVBRWY1RixLQUZlLEdBR2ZwSCxNQUhlLENBR1IsR0FIUSxFQUlmQyxJQUplLENBSVYsT0FKVSxFQUlELDRCQUE0QixLQUFLbEQsSUFBTCxDQUFVQyxTQUpyQyxDQUFsQjs7QUFNQSxVQUFNd1AsY0FBYyxLQUFLelAsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQnlELFNBQWhCLENBQTBCd0UsTUFBMUIsQ0FBaUMsY0FBakMsQ0FBcEI7O0FBRUE7QUFDQSxXQUFLK0csVUFBTCxDQUFnQi9OLE1BQWhCLENBQXVCLE1BQXZCLEVBQ0dDLElBREgsQ0FDUSxXQURSLEVBQ3FCLFVBQVV1TSxZQUFZdk0sSUFBWixDQUFpQixJQUFqQixDQUFWLEdBQW1DLEdBRHhELEVBQzZEO0FBRDdELE9BRUdBLElBRkgsQ0FFUSxPQUZSLEVBRWlCLFVBQVVnQyxDQUFWLEVBQWE7QUFDMUIsWUFBTStMLGNBQWNGLGtCQUFrQjVPLEtBQUtuQyxJQUFMLENBQVVrUSxlQUFWLENBQTBCZCxPQUExQixDQUFrQ2xLLEVBQUVvSCxHQUFwQyxDQUFsQixLQUErRDtBQUNqRmdCLGdCQUFNO0FBRDJFLFNBQW5GO0FBR0EsZUFBTyx1QkFBdUIyRCxZQUFZM0QsSUFBMUM7QUFDRCxPQVBILEVBUUdySSxLQVJILENBUVMsTUFSVCxFQVFpQixVQUFVQyxDQUFWLEVBQWE7QUFDMUIsWUFBTStMLGNBQWNGLGtCQUFrQjVPLEtBQUtuQyxJQUFMLENBQVVrUSxlQUFWLENBQTBCZCxPQUExQixDQUFrQ2xLLEVBQUVvSCxHQUFwQyxDQUFsQixLQUErRDtBQUNqRmdCLGdCQUFNO0FBRDJFLFNBQW5GO0FBR0EsZUFBT3BCLFlBQVkrRSxZQUFZM0QsSUFBeEIsRUFBOEJZLEtBQXJDO0FBQ0QsT0FiSCxFQWNHaEwsSUFkSCxDQWNRLEdBZFIsRUFjYSxLQUFLcU4sSUFkbEI7QUFnQkQ7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixXQUFLUyxVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0IvRyxNQUFoQixDQUF1QixNQUF2QixFQUErQi9HLElBQS9CLENBQW9DLEdBQXBDLEVBQXlDLEtBQUtxTixJQUE5QyxDQUFuQjtBQUNEOzs7NkJBRVM7QUFDUixVQUFNckUsY0FBYyxLQUFLbE0sSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCa0csT0FBNUM7QUFDQTtBQUNBLFdBQUtuTSxJQUFMLENBQVVrUSxlQUFWLEdBQTRCLEtBQUtsUSxJQUFMLENBQVVtTixpQkFBVixDQUE0QmdELE1BQTVCLENBQW1DLFVBQVVDLEdBQVYsRUFBZTtBQUM1RSxlQUFRbEUsWUFBWWtFLElBQUk5QyxJQUFoQixFQUFzQmxNLE9BQXRCLElBQWlDLEtBQXpDO0FBQ0QsT0FGMkIsRUFHekJpUCxHQUh5QixDQUdyQixVQUFVRCxHQUFWLEVBQWU7QUFDbEIsZUFBT2xFLFlBQVlrRSxJQUFJOUMsSUFBaEIsRUFBc0JyQixTQUE3QjtBQUNELE9BTHlCLENBQTVCOztBQU9BO0FBQ0EsV0FBSytFLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQjFMLE1BQWhCLEVBQW5CO0FBQ0E7QUFDQSxXQUFLZSxJQUFMO0FBQ0Q7Ozs2QkFFU2hCLFEsRUFBVTtBQUNsQkEsaUJBQVcsQ0FBQyxDQUFDQSxRQUFiO0FBQ0EsV0FBSzJMLFVBQUwsQ0FBZ0IxTixPQUFoQixDQUF3QixXQUF4QixFQUFxQyxDQUFDK0IsUUFBdEM7QUFDQSxXQUFLckYsSUFBTCxDQUFVb0IsT0FBVixHQUFvQmlFLFFBQXBCO0FBQ0Q7Ozs2QkFFUztBQUNSO0FBQ0EsV0FBSzJMLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQjFMLE1BQWhCLEVBQW5CO0FBQ0EsV0FBS3RGLElBQUwsQ0FBVXNRLE9BQVYsR0FBb0IsSUFBcEI7QUFDQSxXQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUt2USxJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBMUhvQ3VGLDhEOztBQUFsQnlLLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjtBQUNBO0FBQ0E7QUFDQTs7SUFFcUI5SCxVOzs7QUFDbkIsc0JBQWFsSSxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtrUixVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsUUFBTTlHLE9BQU8sTUFBS3BLLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QitGLFNBQXJDLENBSmlCLENBSThCO0FBQy9DLFFBQU1JLFdBQVcsTUFBS3BNLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QmdDLE1BQXpDO0FBQ0EsUUFBTWlFLGNBQWMsTUFBS2xNLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QmtHLE9BQTVDOztBQUVBO0FBQ0FnRiwwREFBT0EsQ0FBQy9FLFNBQVNPLEtBQWpCLEtBQTJCUCxTQUFTTyxLQUFULENBQWViLE9BQWYsQ0FBdUIsVUFBQ2lCLFFBQUQsRUFBYztBQUM5RCxZQUFLbUUsVUFBTCxDQUFnQnJLLElBQWhCLENBQXFCLElBQUltSix5REFBSixDQUFjO0FBQ2pDaE8sZUFBTyxNQUFLaEMsSUFBTCxDQUFVZ0MsS0FEZ0I7QUFFakMvQixtQkFBVzhNLFNBQVM5TSxTQUFULElBQXNCOE0sU0FBU08sSUFGVDtBQUdqQ0csa0JBQVVWLFNBQVNVLFFBSGM7QUFJakN3QixxQkFBYSxNQUFLalAsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCUSxRQUF4QixDQUFpQ3dGLFNBSmI7QUFLakNnRSxtQkFBVzdGLElBTHNCO0FBTWpDK0MsMkJBQW1CSixTQUFTSTtBQU5LLE9BQWQsQ0FBckI7QUFRRCxLQVQwQixDQUEzQjs7QUFXQWdFLDBEQUFPQSxDQUFDL0UsU0FBU2tELElBQWpCLEtBQTBCbEQsU0FBU2tELElBQVQsQ0FBY3hELE9BQWQsQ0FBc0IsVUFBQ2lCLFFBQUQsRUFBYztBQUM1RCxZQUFLbUUsVUFBTCxDQUFnQnJLLElBQWhCLENBQXFCLElBQUlpSSxvREFBSixDQUFTO0FBQzVCOU0sZUFBTyxNQUFLaEMsSUFBTCxDQUFVZ0MsS0FEVztBQUU1Qi9CLG1CQUFXOE0sU0FBUzlNLFNBQVQsSUFBc0I4TSxTQUFTTyxJQUZkO0FBRzVCRyxrQkFBVVYsU0FBU1UsUUFIUztBQUk1QnVCLHFCQUFhOUMsWUFBWWEsU0FBU08sSUFBckIsRUFBMkJyQixTQUpaO0FBSzVCZ0QscUJBQWEsTUFBS2pQLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QlEsUUFBeEIsQ0FBaUN3RixTQUxsQjtBQU01QjdLLGlCQUFTOEssWUFBWWEsU0FBU08sSUFBckIsRUFBMkJsTSxPQU5SO0FBTzVCMk4sa0JBQVU7QUFDUnpCLGdCQUFNUCxTQUFTTyxJQURQO0FBRVJZLGlCQUFPaEMsWUFBWWEsU0FBU08sSUFBckIsRUFBMkJZLEtBRjFCO0FBR1J3QixxQkFBV3hELFlBQVlhLFNBQVNPLElBQXJCLEVBQTJCb0MsU0FIOUI7QUFJUmxFLGtCQUFRcEI7QUFKQSxTQVBrQjtBQWE1QjhFLGNBQU1uQyxTQUFTbUM7QUFiYSxPQUFULENBQXJCO0FBZUQsS0FoQnlCLENBQTFCO0FBcEJpQjtBQXFDbEI7OztFQXRDcUNrQyxzRDs7QUFBbkJsSix5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCbUosaUI7OztBQUNuQiw2QkFBYXJSLElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0EsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCc1Isa0JBQVk7QUFDVkMsZ0JBQVE7QUFERSxPQURZO0FBSXhCblEsZUFBUztBQUplLEtBQWQsRUFLVHBCLElBTFMsQ0FBWjs7QUFPQTtBQUNBLFFBQUksQ0FBQ3lDLHlEQUFVQSxDQUFDLE1BQUt6QyxJQUFMLENBQVV3UixNQUFyQixDQUFMLEVBQW1DO0FBQ2pDLFlBQUt4UixJQUFMLENBQVV3UixNQUFWLEdBQW1CLFVBQVV0TSxDQUFWLEVBQWE7QUFDOUIsNERBQWtELDRFQUFlQSxDQUFmLENBQWxEO0FBQ0QsT0FGRDtBQUdEO0FBZGdCO0FBZWxCOzs7OzJCQUVPO0FBQUE7O0FBQ04sV0FBS29NLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxXQUFLRyxVQUFMLEdBQWtCLEtBQUt6UixJQUFMLENBQVVnQyxLQUFWLENBQWdCeUQsU0FBaEIsQ0FDZnhDLE1BRGUsQ0FDUixLQURRLEVBRWZDLElBRmUsQ0FFVixPQUZVLEVBRUQsd0JBQXdCLEtBQUtsRCxJQUFMLENBQVVDLFNBRmpDLENBQWxCOztBQUlBLFVBQUksS0FBS0QsSUFBTCxDQUFVc1IsVUFBVixDQUFxQkMsTUFBckIsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEMsYUFBS0QsVUFBTCxHQUFrQixLQUFLdFIsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQitILEdBQWhCLENBQ2Y5RyxNQURlLENBQ1IsR0FEUSxFQUVmQyxJQUZlLENBRVYsT0FGVSxFQUVELGlCQUZDLENBQWxCO0FBR0EsYUFBS29PLFVBQUwsQ0FBZ0JyTyxNQUFoQixDQUF1QixNQUF2QixFQUNHQyxJQURILENBQ1EsV0FEUixFQUNxQixzQkFEckIsRUFFR0EsSUFGSCxDQUVRLElBRlIsRUFFYyxLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUZyQyxFQUdHWixJQUhILENBR1EsSUFIUixFQUdjLEtBQUtsRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUI4SyxHQUF2QixHQUE2QjNOLG1EQUFTQSxDQUFDMFEsa0JBSHJELEVBSUd4TyxJQUpILENBSVEsSUFKUixFQUljLEtBQUtsRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUJDLElBSnJDLEVBS0daLElBTEgsQ0FLUSxJQUxSLEVBS2UsS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQWhCLEdBQThCLEtBQUtqQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUI4SyxHQUxwRTtBQU9EOztBQUVELFdBQUszTyxJQUFMLENBQVVnQyxLQUFWLENBQWdCcUYsWUFBaEIsQ0FBNkJzSyxRQUE3QixDQUFzQyxZQUFNO0FBQzFDO0FBQ0EsWUFBTXhQLE9BQU8sTUFBYjtBQUNBLFlBQU15UCxTQUFTbEwsd0RBQVNBLENBQUMsT0FBSzFHLElBQWYsRUFBcUIsbUJBQXJCLEtBQTZDLEtBQTVEO0FBQ0EsWUFBTXFILGVBQWUsT0FBS3JILElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JxRixZQUFyQztBQUNBLFlBQU13SyxZQUFZLE9BQUs3UixJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0JRLFFBQXhCLENBQWlDd0YsU0FBbkQ7QUFDQSxZQUFNNkYsVUFBVSxPQUFLOVIsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCK0YsU0FBeEM7QUFDQTtBQUNBLFlBQU0rRixhQUFhQyw0REFBUUEsQ0FBQyxVQUFVOU0sQ0FBVixFQUFhO0FBQ3ZDLGlCQUFPQSxFQUFFMk0sU0FBRixDQUFQO0FBQ0QsU0FGa0IsRUFFaEIvTixJQUZIOztBQUlBLFlBQU1tTyxXQUFXLFNBQVhBLFFBQVcsQ0FBVS9NLENBQVYsRUFBYTtBQUM1QjtBQUNBLGNBQU1nTixTQUFTQywyREFBT0EsQ0FBQyxJQUFSLEVBQWMsQ0FBZCxDQUFmO0FBQ0EsY0FBTUMsU0FBU0QsMkRBQU9BLENBQUMsSUFBUixFQUFjLENBQWQsQ0FBZjtBQUNBLGNBQU1FLE9BQU9ULE9BQU9VLE1BQVAsQ0FBY0osTUFBZCxDQUFiLENBSjRCLENBSU87O0FBRW5DO0FBQ0EsY0FBTUssUUFBUVIsV0FBV0QsT0FBWCxFQUFvQk8sSUFBcEIsRUFBMEIsQ0FBMUIsQ0FBZDs7QUFHQSxjQUFNRyxVQUFVVixRQUFRUyxRQUFRLENBQWhCLENBQWhCOztBQUdBLGNBQU1FLFFBQVFYLFFBQVFTLFFBQVEsQ0FBaEIsQ0FBZDtBQUNBOztBQUVBLGNBQU1HLFNBQVNaLFFBQVFTLEtBQVIsS0FBa0JFLEtBQWpDLENBaEI0QixDQWdCVzs7QUFFdkMsY0FBSUUsY0FBY0YsS0FBbEI7QUFDQSxjQUFJWCxRQUFRN04sTUFBUixHQUFpQjlCLEtBQUtuQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUFyQyxFQUFpRDtBQUFBO0FBQy9DO0FBQ0Esa0JBQU1vUSxlQUFlbFAsS0FBS0MsS0FBTCxDQUFXbU8sUUFBUTdOLE1BQVIsR0FBaUI5QixLQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFBNUMsSUFBMEQsQ0FBL0U7O0FBRUEsa0JBQU1xUSxtQkFBbUIsRUFBekI7O0FBRUEsbUJBQUssSUFBTUMsRUFBWCxJQUFpQjNRLEtBQUtuQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0JrRyxPQUF6QyxFQUFrRDtBQUNoRCxvQkFBTVMsT0FBT3pLLEtBQUtuQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0JrRyxPQUF4QixDQUFnQzJHLEVBQWhDLENBQWI7QUFDQSxvQkFBSWxHLEtBQUt4TCxPQUFULEVBQWtCO0FBQ2hCeVIsbUNBQWlCakcsS0FBS1gsU0FBdEIsSUFBbUMsSUFBbkM7QUFDRDtBQUNGOztBQUVELGtCQUFNOEcsY0FBYyxFQUFwQjtBQUNBO0FBQ0EsbUJBQUssSUFBSS9FLE1BQU91RSxRQUFRSyxZQUF4QixFQUF1QzVFLE1BQU91RSxRQUFRSyxZQUF0RCxFQUFxRTVFLEtBQXJFLEVBQTRFO0FBQzFFLG9CQUFJOEQsUUFBUTlELEdBQVIsQ0FBSixFQUFrQjtBQUNoQixzQkFBTWdGLE9BQU9sQixRQUFROUQsR0FBUixFQUFhbUMsTUFBYixDQUFvQixVQUFVeE4sR0FBVixFQUFla04sS0FBZixFQUFzQjtBQUNyRCwyQkFBT2dELGlCQUFpQmhELEtBQWpCLENBQVA7QUFDRCxtQkFGWSxFQUVWb0QsSUFGVSxDQUVMLFVBQVVuRixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDdEIsMkJBQU9BLElBQUlELENBQVg7QUFDRCxtQkFKWSxDQUFiO0FBS0Esc0JBQUlrRixLQUFLL08sTUFBVCxFQUFpQjtBQUNmOE8sZ0NBQVkvRSxHQUFaLElBQW1CZ0YsSUFBbkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxrQkFBSUUsZUFBSjtBQUNBLGtCQUFJeEcsU0FBUyxDQUFDSSxRQUFkO0FBQ0EsbUJBQUssSUFBTXFHLEVBQVgsSUFBaUJKLFdBQWpCLEVBQThCO0FBQzVCLG9CQUFNSyxTQUFTTCxZQUFZSSxFQUFaLENBQWY7QUFDQSxvQkFBSXpHLFNBQVMwRyxPQUFPLENBQVAsQ0FBYixFQUF3QjtBQUN0QjFHLDJCQUFTMEcsT0FBTyxDQUFQLENBQVQ7QUFDQUYsMkJBQVNDLEVBQVQ7QUFDRDtBQUNGOztBQUVEUiw0QkFBY2IsUUFBUW9CLE1BQVIsS0FBbUJSLE1BQWpDO0FBckMrQztBQXNDaEQsV0F0Q0QsTUFzQ087QUFDTDtBQUNBQywwQkFBZU4sT0FBT0ksTUFBTVosU0FBTixDQUFSLEdBQTZCYSxPQUFPYixTQUFQLElBQW9CUSxJQUFqRCxHQUF5REssTUFBekQsR0FBa0VELEtBQWhGO0FBQ0Q7O0FBRUQsY0FBSVksZUFBZVgsT0FBT2IsU0FBUCxJQUFvQlksTUFBTVosU0FBTixDQUF2Qzs7QUFFQSxjQUFJLENBQUN3QixZQUFELElBQWlCYixPQUFyQixFQUE4QjtBQUM1QmEsMkJBQWVaLE1BQU1aLFNBQU4sSUFBbUJXLFFBQVFYLFNBQVIsQ0FBbEM7QUFDRDs7QUFFRCxjQUFJd0IsZUFBZTNQLEtBQUs0UCxHQUFMLENBQVNaLE9BQU9iLFNBQVAsSUFBb0JRLElBQTdCLENBQW5CLEVBQXVEO0FBQ3JEO0FBQ0FNLDBCQUFjLEVBQWQ7QUFDQUEsd0JBQVlkLFNBQVosSUFBeUJRLElBQXpCO0FBQ0Q7O0FBRURsUSxlQUFLb1IsS0FBTCxDQUFXckIsTUFBWCxFQUFtQkUsTUFBbkIsRUFBMkJPLFdBQTNCO0FBQ0QsU0EzRUQ7O0FBNkVBLFlBQUlhLFlBQVksV0FBaEI7QUFDQSxZQUFJLE9BQUt4VCxJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0JqRSxLQUF4QixDQUE4QjBGLGFBQWxDLEVBQWlEO0FBQy9DOEwsc0JBQVksVUFBWjtBQUNEO0FBQ0RuTSxxQkFBYXFILFVBQWIsQ0FDRytFLEVBREgsQ0FDTUQsU0FETixFQUNpQnZCLFFBRGpCLEVBRUd3QixFQUZILENBRU0sVUFGTixFQUVrQixZQUFZO0FBQzFCdFIsZUFBS3VSLElBQUw7QUFDRCxTQUpILEVBS0dELEVBTEgsQ0FLTSxXQUxOLEVBS21CLFlBQVk7QUFDM0J0UixlQUFLdVIsSUFBTDtBQUNELFNBUEg7O0FBU0FyTSxxQkFBYXFILFVBQWIsQ0FBd0J6RSxNQUF4QixDQUErQixjQUEvQixFQUNHd0osRUFESCxDQUNNLFdBRE4sRUFDbUIsWUFBWTtBQUMzQnRSLGVBQUt1UixJQUFMO0FBQ0QsU0FISDs7QUFLQSxZQUFJLE9BQUsxVCxJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0JqRSxLQUF4QixDQUE4QjBGLGFBQWxDLEVBQWlEO0FBQy9DO0FBQ0EsaUJBQUs2TCxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUJ6QixRQUFRLENBQVIsQ0FBakI7QUFDQTZCLHFCQUFXLFlBQVk7QUFDckJ4UixpQkFBS3VSLElBQUw7QUFDRCxXQUZELEVBRUcsRUFGSDtBQUdEO0FBRUYsT0FuSEQ7QUFvSEQ7OzswQkFFTUUsSSxFQUFNQyxJLEVBQU1DLFcsRUFBYTtBQUM5QjtBQUNBLFdBQUt4QyxVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JySCxNQUFoQixDQUF1QixNQUF2QixFQUNoQi9HLElBRGdCLENBQ1gsV0FEVyxpQkFDZTBRLElBRGYsVUFFaEIxUSxJQUZnQixDQUVYLElBRlcsRUFFTCxLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUZsQixFQUdoQlosSUFIZ0IsQ0FHWCxJQUhXLEVBR0wsS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QjhLLEdBQXZCLEdBQTZCM04sbURBQVNBLENBQUMwUSxrQkFIbEMsRUFJaEJ4TyxJQUpnQixDQUlYLElBSlcsRUFJTCxLQUFLbEQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUpsQixFQUtoQlosSUFMZ0IsQ0FLWCxJQUxXLEVBS0osS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQWhCLEdBQThCLEtBQUtqQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUI4SyxHQUxqRCxDQUFuQjtBQU1BLFdBQUtvRixRQUFMLENBQWMsSUFBZDs7QUFFQSxVQUFJQyxpQkFBaUJKLE9BQU8sS0FBSzVULElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JRLFVBQTVDOztBQUVBLFVBQUl3UixpQkFBaUIsR0FBckIsRUFBMEI7QUFDeEJBLHlCQUFpQixHQUFqQjtBQUNEO0FBQ0QsVUFBSUEsaUJBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCQSx5QkFBaUIsSUFBakI7QUFDRDs7QUFFRCxVQUFNQyxNQUFNQyw0REFBYUEsQ0FBQyxLQUFLekMsVUFBbkIsQ0FBWjtBQUNBLFVBQU0wQyxVQUFVRCw0REFBYUEsQ0FBQyxLQUFLbFUsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQnlELFNBQTlCLENBQWhCO0FBQ0EsVUFBTTNCLE9BQU9KLEtBQUs4RyxLQUFMLENBQVcySixRQUFRclEsSUFBUixHQUFlLEtBQUs5RCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUJDLElBQXRDLEdBQTZDOFAsSUFBN0MsR0FBb0RLLElBQUl0SixLQUFKLEdBQVlxSixjQUEzRSxJQUE2RixJQUExRztBQUNBLFVBQU1yRixNQUFNakwsS0FBSzhHLEtBQUwsQ0FBVzJKLFFBQVF4RixHQUFSLEdBQWNzRixJQUFJRyxNQUFsQixHQUEyQixDQUEzQixHQUErQnBULG1EQUFTQSxDQUFDMFEsa0JBQVYsR0FBK0IsQ0FBekUsSUFBOEUsSUFBMUY7O0FBR0EsV0FBS0QsVUFBTCxDQUNHeE0sS0FESCxDQUNTLE1BRFQsRUFDaUJuQixJQURqQixFQUVHbUIsS0FGSCxDQUVTLEtBRlQsRUFFZ0IwSixHQUZoQixFQUdHMUosS0FISCxDQUdTLFNBSFQsRUFHb0IsY0FIcEIsRUFJR29QLElBSkgsQ0FJUSxLQUFLclUsSUFBTCxDQUFVd1IsTUFBVixDQUFpQjVNLElBQWpCLENBQXNCLEtBQUs1RSxJQUFMLENBQVVnQyxLQUFoQyxFQUF1QzhSLFdBQXZDLENBSlIsRUF6QjhCLENBNkIrQjtBQUM5RDs7OzZCQUVTek8sUSxFQUFVO0FBQ2xCQSxpQkFBVyxDQUFDLENBQUNBLFFBQWI7O0FBRUEsV0FBS2lNLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQmhPLE9BQWhCLENBQXdCLFdBQXhCLEVBQXFDLENBQUMrQixRQUF0QyxDQUFuQjtBQUNBLFdBQUtvTSxVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JuTyxPQUFoQixDQUF3QixXQUF4QixFQUFxQyxDQUFDK0IsUUFBdEMsQ0FBbkI7QUFDQSxXQUFLckYsSUFBTCxDQUFVb0IsT0FBVixHQUFvQmlFLFFBQXBCO0FBQ0Q7Ozs2QkFFUztBQUNSLFdBQUtvTSxVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JuTSxNQUFoQixFQUFuQjtBQUNBLFdBQUtnTSxVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JoTSxNQUFoQixFQUFuQjtBQUNBLFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBdk00Q3VGLDhEOztBQUExQjhMLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUIxSixXOzs7QUFDbkIsdUJBQWEzSCxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWSwyRUFBYztBQUN4QjZILGNBQVE5Qyw4Q0FEZ0I7QUFFeEJnRCxnQkFBVWhELDhDQUZjO0FBR3hCaUQsZ0JBQVVqRCw4Q0FBT0E7QUFITyxLQUFkLEVBSVQvRSxJQUpTLENBQVo7QUFGaUI7QUFPbEI7Ozs7d0NBRW9CcVMsSSxFQUFNUCxPLEVBQVM7QUFDbEMsVUFBTUQsWUFBWSxLQUFLN1IsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlFLE9BQWhCLENBQXdCUSxRQUF4QixDQUFpQ3dGLFNBQW5EO0FBQ0E7QUFDQSxVQUFNOEYsYUFBYUMsMERBQVFBLENBQUMsVUFBVTlNLENBQVYsRUFBYTtBQUN2QyxlQUFPQSxFQUFFMk0sU0FBRixDQUFQO0FBQ0QsT0FGa0IsRUFFaEIvTixJQUZIOztBQUlBO0FBQ0EsVUFBTXlPLFFBQVFSLFdBQVdELE9BQVgsRUFBb0JPLElBQXBCLEVBQTBCLENBQTFCLENBQWQ7O0FBR0EsVUFBTUksUUFBUVgsUUFBUVMsUUFBUSxDQUFoQixDQUFkO0FBQ0E7O0FBRUEsVUFBTUcsU0FBU1osUUFBUVMsS0FBUixLQUFrQkUsS0FBakMsQ0Fka0MsQ0FjSzs7QUFFdkMsYUFBT0MsTUFBUDtBQUNEOzs7MENBR3NCNEIsUSxFQUFVQyxNLEVBQVE7QUFDdkMsV0FBS0MsU0FBTCxDQUNHdFIsSUFESCxDQUNRLEdBRFIsRUFDYW9SLFFBRGIsRUFFR3BSLElBRkgsQ0FFUSxPQUZSLEVBRWtCcVIsU0FBU0QsUUFGM0I7QUFHRDs7OzJCQUVPO0FBQ04sVUFBTW5TLE9BQU8sSUFBYjtBQUNBLFVBQU15UCxTQUFTbEwsd0RBQVNBLENBQUMsS0FBSzFHLElBQWYsRUFBcUIsbUJBQXJCLEtBQTZDLEtBQTVEO0FBQ0EsVUFBTXlVLGFBQWEvTix3REFBU0EsQ0FBQyxLQUFLMUcsSUFBZixFQUFxQixtQkFBckIsS0FBNkMsS0FBaEU7QUFDQSxVQUFNMFUsY0FBY2hPLHdEQUFTQSxDQUFDLEtBQUsxRyxJQUFmLEVBQXFCLG9CQUFyQixLQUE4QyxLQUFsRTtBQUNBLFVBQU04UixVQUFVLEtBQUs5UixJQUFMLENBQVVnQyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0IrRixTQUF4QztBQUNBLFVBQUk0RixNQUFKLEVBQVk7O0FBRVY7QUFDQSxhQUFLK0MsS0FBTCxHQUFhcE4sd0RBQUlBLEdBQ2RxTixXQURVLENBQ0UsQ0FBQyxDQUFELEVBQUk5QyxRQUFRN04sTUFBWixDQURGLEVBRVY0USxlQUZVLENBRU0sQ0FDZixDQUFDLEtBQUs3VSxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUJDLElBQXhCLEVBQThCLEtBQUs5RCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUI4SyxHQUFyRCxDQURlLEVBRWYsQ0FBQyxLQUFLM08sSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFBakIsRUFBNkIsS0FBS3hDLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQTdDLENBRmUsQ0FGTixFQUtWNlMsTUFMVSxDQUtILENBQUMsQ0FBQyxLQUFLOVUsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUF4QixFQUE4QixLQUFLOUQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCOEssR0FBckQsQ0FBRCxFQUE0RCxDQUFDLEtBQUszTyxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUFqQixFQUE2QixLQUFLeEMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FBN0MsQ0FBNUQsQ0FMRyxFQU1WOFMsU0FOVSxDQU1BO0FBQUEsaUJBQU0sSUFBTjtBQUFBLFNBTkEsQ0FBYjs7QUFRQSxhQUFLQyxRQUFMLEdBQWdCLEtBQUtoVixJQUFMLENBQVVnQyxLQUFWLENBQWdCK0gsR0FBaEIsQ0FDYm5GLElBRGEsQ0FDUixLQUFLK1AsS0FERyxDQUFoQjs7QUFJQTtBQUNBLGFBQUtILFNBQUwsR0FBaUIsS0FBS3hVLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JxRixZQUFoQixDQUE2QnFILFVBQTdCLENBQ2R6TCxNQURjLENBQ1AsTUFETyxFQUVkQyxJQUZjLENBRVQsT0FGUyxFQUVBLFdBRkEsRUFHZEEsSUFIYyxDQUdULFFBSFMsRUFHQyxNQUhELEVBSWQrQixLQUpjLENBSVIsU0FKUSxFQUlHLEtBSkgsRUFLZC9CLElBTGMsQ0FLVCxHQUxTLEVBS0osQ0FMSSxFQU1kQSxJQU5jLENBTVQsR0FOUyxFQU1KLENBTkksRUFPZEEsSUFQYyxDQU9ULE9BUFMsRUFPQSxDQVBBLEVBUWRBLElBUmMsQ0FRVCxRQVJTLEVBUUMsS0FBS2xELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBUmpCLENBQWpCOztBQVVBLFlBQUlnVCxZQUFZLEtBQWhCO0FBQ0EsWUFBSVgsV0FBVyxDQUFmO0FBQ0EsWUFBSUMsU0FBUyxDQUFiO0FBQ0EsWUFBTXJOLFVBQVUvRSxLQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmtGLE9BQWhDO0FBQ0EsYUFBSzhOLFFBQUwsQ0FDRy9QLEtBREgsQ0FDUyxjQURULEVBQ3lCLE9BRHpCLEVBRUd3TyxFQUZILENBRU0saUJBRk4sRUFFeUIsWUFBWTtBQUNqQyxjQUFNeUIsVUFBVUMsNkRBQVNBLENBQUMsSUFBVixDQUFoQjtBQUNBRixzQkFBWUcsbURBQU9BLENBQUNGLE9BQVIsSUFBbUJFLG1EQUFPQSxDQUFDRixPQUFSLENBQWdCalIsTUFBaEIsS0FBMkIsQ0FBMUQ7QUFDQSxjQUFJZ1IsYUFBYUMsUUFBUWpSLE1BQXpCLEVBQWlDO0FBQy9CaUQsdUJBQVdBLFFBQVF3TSxJQUFSLEVBQVg7QUFDQSxnQkFBTUUsT0FBUXNCLFFBQVEsQ0FBUixFQUFXLENBQVgsSUFBZ0IvUyxLQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUFyRDtBQUNBd1EsdUJBQVdWLElBQVg7QUFDQVcscUJBQVNYLElBQVQ7QUFDQXpSLGlCQUFLa1QscUJBQUwsQ0FBMkJmLFFBQTNCLEVBQXFDQyxNQUFyQztBQUNEO0FBQ0YsU0FaSCxFQVlLLElBWkwsRUFhR2QsRUFiSCxDQWFNLGdCQWJOLEVBYXdCLFlBQVk7QUFDaEMsY0FBTXlCLFVBQVVDLDZEQUFTQSxDQUFDLElBQVYsQ0FBaEI7QUFDQSxjQUFJRixhQUFhQyxRQUFRalIsTUFBekIsRUFBaUM7QUFDL0IsZ0JBQU1xUixRQUFTSixRQUFRLENBQVIsRUFBVyxDQUFYLElBQWdCL1MsS0FBS25DLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkMsSUFBdEQ7QUFDQSxnQkFBTXlSLFFBQVNMLFFBQVEsQ0FBUixFQUFXLENBQVgsSUFBZ0IvUyxLQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUF0RDtBQUNBLGdCQUFJMFIsT0FBT0YsS0FBWDtBQUNBLGdCQUFJRyxPQUFPRixLQUFYO0FBQ0EsZ0JBQUlELFFBQVFDLEtBQVosRUFBbUI7QUFDakJDLHFCQUFPRCxLQUFQO0FBQ0FFLHFCQUFPSCxLQUFQO0FBQ0Q7QUFDRGhCLHVCQUFXa0IsSUFBWDtBQUNBakIscUJBQVNrQixJQUFUO0FBQ0F0VCxpQkFBS2tULHFCQUFMLENBQTJCZixRQUEzQixFQUFxQ0MsTUFBckM7QUFDRDtBQUNGLFNBNUJILEVBNEJLLElBNUJMLEVBNkJHZCxFQTdCSCxDQTZCTSxlQTdCTixFQTZCdUIsWUFBWTtBQUMvQixjQUFNeUIsVUFBVUMsNkRBQVNBLENBQUMsSUFBVixDQUFoQjtBQUNBLGNBQUlGLGFBQWFDLFFBQVFqUixNQUF6QixFQUFpQztBQUMvQixnQkFBTTJQLE9BQVFzQixRQUFRLENBQVIsRUFBVyxDQUFYLElBQWdCL1MsS0FBS25DLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkMsSUFBckQ7QUFDQSxnQkFBSXdRLFdBQVdWLElBQWYsRUFBcUI7QUFDbkJVLHlCQUFXVixJQUFYO0FBQ0Q7QUFDRCxnQkFBSVcsU0FBU1gsSUFBYixFQUFtQjtBQUNqQlcsdUJBQVNYLElBQVQ7QUFDRDs7QUFFRCxnQkFBTThCLFdBQVc5RCxPQUFPVSxNQUFQLENBQWNnQyxRQUFkLENBQWpCO0FBQ0EsZ0JBQU1xQixVQUFValMsS0FBSzhHLEtBQUwsQ0FBV2tMLFFBQVgsQ0FBaEI7O0FBRUEsZ0JBQU1FLFNBQVNoRSxPQUFPVSxNQUFQLENBQWNpQyxNQUFkLENBQWY7QUFDQSxnQkFBTXNCLFFBQVFuUyxLQUFLOEcsS0FBTCxDQUFXb0wsTUFBWCxDQUFkO0FBQ0F6VCxpQkFBS2tULHFCQUFMLENBQTJCZixRQUEzQixFQUFxQ0MsTUFBckM7O0FBRUE7QUFDQTlSLHFFQUFVQSxDQUFDTixLQUFLbkMsSUFBTCxDQUFVNkgsTUFBckIsS0FBZ0MxRixLQUFLbkMsSUFBTCxDQUFVNkgsTUFBVixDQUFpQmpELElBQWpCLENBQXNCekMsS0FBS25DLElBQUwsQ0FBVWdDLEtBQWhDLEVBQXVDMlQsT0FBdkMsRUFBZ0RFLEtBQWhELENBQWhDO0FBQ0Q7QUFDRDFULGVBQUtrVCxxQkFBTCxDQUEyQixDQUEzQixFQUE4QixDQUE5QjtBQUNBZixxQkFBVyxDQUFYO0FBQ0FDLG1CQUFTLENBQVQ7QUFDQVUsc0JBQVksS0FBWjtBQUNELFNBdERILEVBc0RLLElBdERMO0FBd0REOztBQUVEO0FBQ0EsVUFBSVIsVUFBSixFQUFnQjtBQUNkLGFBQUtxQixVQUFMLEdBQWtCQywwREFBTUEsRUFBeEI7O0FBRUEsYUFBS0MsYUFBTCxHQUFxQixLQUFLaFcsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQitILEdBQWhCLENBQW9COUcsTUFBcEIsQ0FBMkIsR0FBM0IsRUFDbEJDLElBRGtCLENBQ2IsT0FEYSxFQUNKLGdCQURJLENBQXJCOztBQUdBO0FBQ0EsYUFBSzRTLFVBQUwsQ0FBZ0JyQyxFQUFoQixDQUFtQixLQUFuQixFQUEwQixZQUFZO0FBQ3BDLGNBQUksQ0FBQzJCLG1EQUFPQSxDQUFDYSxTQUFiLEVBQXdCO0FBQ3RCO0FBQ0Q7QUFDRDlULGVBQUs2VCxhQUFMLENBQW1CcFIsSUFBbkIsQ0FBd0J6QyxLQUFLMlQsVUFBTCxDQUFnQkksSUFBeEMsRUFBOEMsSUFBOUM7O0FBRUEsY0FBTUMsS0FBS2YsbURBQU9BLENBQUNhLFNBQVIsQ0FBa0I1RixHQUFsQixDQUFzQm9FLFdBQVduQyxNQUFqQyxDQUFYOztBQUdBLGNBQU04RCxLQUFLRCxNQUFNQSxHQUFHOUYsR0FBSCxDQUFPM00sS0FBSzhHLEtBQVosRUFDZHlJLElBRGMsQ0FDVCxVQUFVbkYsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3BCLG1CQUFRRCxJQUFJQyxDQUFaO0FBQ0QsV0FIYyxDQUFqQjs7QUFLQTVMLGVBQUtuQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCMkUsS0FBaEIsQ0FBc0I4QyxlQUF0QixDQUFzQztBQUNwQ2xKLHlCQUFhNlYsRUFEdUIsQ0FDcEI7QUFEb0IsV0FBdEM7O0FBSUFqVSxlQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlHLE1BQWhCLENBQXVCcEYsTUFBdkIsR0FsQm9DLENBa0JKOztBQUVoQztBQUNBSixtRUFBVUEsQ0FBQ04sS0FBS25DLElBQUwsQ0FBVStILFFBQXJCLEtBQWtDNUYsS0FBS25DLElBQUwsQ0FBVStILFFBQVYsQ0FBbUJuRCxJQUFuQixDQUF3QnpDLEtBQUtuQyxJQUFMLENBQVVnQyxLQUFsQyxFQUF5Q29VLEdBQUcsQ0FBSCxDQUF6QyxFQUFnREEsR0FBRyxDQUFILENBQWhELENBQWxDO0FBRUQsU0F2QkQ7QUF3QkQ7O0FBRUQ7QUFDQSxVQUFJMUIsV0FBSixFQUFpQjtBQUNmLGFBQUsyQixXQUFMLEdBQW1CTiwwREFBTUEsRUFBekI7O0FBRUEsYUFBS08sY0FBTCxHQUFzQixLQUFLdFcsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQitILEdBQWhCLENBQW9COUcsTUFBcEIsQ0FBMkIsR0FBM0IsRUFDbkJDLElBRG1CLENBQ2QsT0FEYyxFQUNMLGlCQURLLENBQXRCOztBQUdBLGFBQUttVCxXQUFMLENBQWlCNUMsRUFBakIsQ0FBb0IsS0FBcEIsRUFBMkIsWUFBWTtBQUNyQyxjQUFJLENBQUMyQixtREFBT0EsQ0FBQ2EsU0FBYixFQUF3QjtBQUN0QjtBQUNEO0FBQ0Q5VCxlQUFLbVUsY0FBTCxDQUFvQjFSLElBQXBCLENBQXlCekMsS0FBS2tVLFdBQUwsQ0FBaUJILElBQTFDLEVBQWdELElBQWhEOztBQUVBLGNBQU1DLEtBQUtmLG1EQUFPQSxDQUFDYSxTQUFSLENBQWtCNUYsR0FBbEIsQ0FBc0JxRSxZQUFZcEMsTUFBbEMsQ0FBWDs7QUFHQSxjQUFNOEQsS0FBS0QsTUFBTUEsR0FBRzlGLEdBQUgsQ0FBTzNNLEtBQUs4RyxLQUFaLEVBQ2R5SSxJQURjLENBQ1QsVUFBVW5GLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNwQixtQkFBUUQsSUFBSUMsQ0FBWjtBQUNELFdBSGMsQ0FBakI7O0FBS0E1TCxlQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjhFLE1BQWhCLENBQXVCMkMsZUFBdkIsQ0FBdUM7QUFDckNsSix5QkFBYTZWLEVBRHdCLENBQ3JCO0FBRHFCLFdBQXZDOztBQUlBalUsZUFBS25DLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRyxNQUFoQixDQUF1QnBGLE1BQXZCLEdBbEJxQyxDQWtCTDs7QUFFaEM7QUFDQUosbUVBQVVBLENBQUNOLEtBQUtuQyxJQUFMLENBQVVnSSxRQUFyQixLQUFrQzdGLEtBQUtuQyxJQUFMLENBQVVnSSxRQUFWLENBQW1CcEQsSUFBbkIsQ0FBd0J6QyxLQUFLbkMsSUFBTCxDQUFVZ0MsS0FBbEMsRUFBeUNvVSxHQUFHLENBQUgsQ0FBekMsRUFBZ0RBLEdBQUcsQ0FBSCxDQUFoRCxDQUFsQztBQUVELFNBdkJEO0FBd0JEOztBQUVELFdBQUt2VCxNQUFMO0FBRUQ7Ozs2QkFFUztBQUNSLFVBQUksS0FBSzhSLEtBQVQsRUFBZ0I7QUFDZCxhQUFLQSxLQUFMLENBQ0dFLGVBREgsQ0FDbUIsQ0FDZixDQUFDLEtBQUs3VSxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUJDLElBQXhCLEVBQThCLEtBQUs5RCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUI4SyxHQUFyRCxDQURlLEVBRWYsQ0FBQyxLQUFLM08sSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFBakIsRUFBNkIsS0FBS3hDLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQTdDLENBRmUsQ0FEbkIsRUFLRzZTLE1BTEgsQ0FLVSxDQUNOLENBQUMsS0FBSzlVLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkMsSUFBeEIsRUFBOEIsS0FBSzlELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QjhLLEdBQXJELENBRE0sRUFFTixDQUFDLEtBQUszTyxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUFqQixFQUE2QixLQUFLeEMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FBN0MsQ0FGTSxDQUxWOztBQVVBLGFBQUt1UyxTQUFMLENBQ0d0UixJQURILENBQ1EsR0FEUixFQUNhLENBRGIsRUFFR0EsSUFGSCxDQUVRLEdBRlIsRUFFYSxDQUZiLEVBR0dBLElBSEgsQ0FHUSxPQUhSLEVBR2lCLENBSGpCLEVBSUdBLElBSkgsQ0FJUSxRQUpSLEVBSWtCLEtBQUtsRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCQyxXQUpsQztBQU1EOztBQUVELFVBQUksS0FBSzZULFVBQVQsRUFBcUI7QUFDbkIsYUFBS0EsVUFBTCxDQUNHaEIsTUFESCxDQUNVLENBQ04sQ0FBQyxDQUFELEVBQUksQ0FBSixDQURNLEVBRU4sQ0FBRSxLQUFLOVUsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUF2QixHQUE4QjlDLGtEQUFTQSxDQUFDK0MsYUFBMUMsRUFBMEQsS0FBSy9ELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQTFFLENBRk0sQ0FEVjs7QUFNQSxhQUFLK1QsYUFBTCxDQUNHOVMsSUFESCxDQUNRLFdBRFIsRUFDcUIsZUFBZWxDLGtEQUFTQSxDQUFDK0MsYUFBekIsR0FBeUMsR0FBekMsR0FBK0MsS0FBSy9ELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QjhLLEdBQXRFLEdBQTRFLEdBRGpHLEVBRUcvSixJQUZILENBRVEsS0FBS2tSLFVBRmI7QUFHRDs7QUFFRCxVQUFJLEtBQUtPLFdBQVQsRUFBc0I7QUFDcEIsYUFBS0EsV0FBTCxDQUNHdkIsTUFESCxDQUNVLENBQ04sQ0FBRSxLQUFLOVUsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUF2QixHQUE4QixLQUFLOUQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFBOUMsR0FBMkR4QixrREFBU0EsQ0FBQytDLGFBQXZFLEVBQXVGLENBQXZGLENBRE0sRUFFTixDQUFFLEtBQUsvRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUJDLElBQXZCLEdBQThCLEtBQUs5RCxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUE5QyxHQUEyRCxLQUFLeEMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCRyxLQUFsRixHQUEwRmhELGtEQUFTQSxDQUFDK0MsYUFBdEcsRUFBc0gsS0FBSy9ELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JDLFdBQXRJLENBRk0sQ0FEVjs7QUFNQSxhQUFLcVUsY0FBTCxDQUNHcFQsSUFESCxDQUNRLFdBRFIsRUFDcUIsZUFBZ0JsQyxrREFBU0EsQ0FBQytDLGFBQTFCLEdBQTJDLEdBQTNDLEdBQWlELEtBQUsvRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUI4SyxHQUF4RSxHQUE4RSxHQURuRyxFQUVHL0osSUFGSCxDQUVRLEtBQUt5UixXQUZiO0FBR0Q7QUFDRjs7OzZCQUVTaFIsUSxFQUFVO0FBQ2xCQSxpQkFBVyxDQUFDLENBQUNBLFFBQWI7QUFDQSxXQUFLbVAsU0FBTCxJQUFrQixLQUFLQSxTQUFMLENBQWVsUixPQUFmLENBQXVCLFdBQXZCLEVBQW9DLENBQUMrQixRQUFyQyxDQUFsQjtBQUNBLFdBQUsyUSxhQUFMLElBQXNCLEtBQUtBLGFBQUwsQ0FBbUIxUyxPQUFuQixDQUEyQixXQUEzQixFQUF3QyxDQUFDK0IsUUFBekMsQ0FBdEI7QUFDQSxXQUFLaVIsY0FBTCxJQUF1QixLQUFLQSxjQUFMLENBQW9CaFQsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUMsQ0FBQytCLFFBQTFDLENBQXZCO0FBQ0EsV0FBS3JGLElBQUwsQ0FBVW9CLE9BQVYsR0FBb0JpRSxRQUFwQjtBQUNEOzs7NkJBRVM7QUFDUixVQUFJLEtBQUttUCxTQUFULEVBQW9CO0FBQ2xCLGFBQUtBLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlbFAsTUFBZixFQUFsQjtBQUNEO0FBQ0QsVUFBSSxLQUFLMFEsYUFBVCxFQUF3QjtBQUN0QixhQUFLQSxhQUFMLENBQW1CcFIsSUFBbkIsQ0FBd0IsS0FBS2tSLFVBQUwsQ0FBZ0JJLElBQXhDLEVBQThDLElBQTlDO0FBQ0EsYUFBS0YsYUFBTCxDQUFtQjFRLE1BQW5CO0FBQ0Q7QUFDRCxVQUFJLEtBQUtnUixjQUFULEVBQXlCO0FBQ3ZCLGFBQUtBLGNBQUwsQ0FBb0IxUixJQUFwQixDQUF5QixLQUFLeVIsV0FBTCxDQUFpQkgsSUFBMUMsRUFBZ0QsSUFBaEQ7QUFDQSxhQUFLSSxjQUFMLENBQW9CaFIsTUFBcEI7QUFDRDtBQUNELFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBM1FzQ3VGLDhEOztBQUFwQm9DLDBFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJGLEk7OztBQUNuQixnQkFBYXpILElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0EsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCNkgsY0FBUTlDLDhDQURnQjtBQUV4QmdELGdCQUFVaEQsOENBRmM7QUFHeEJpRCxnQkFBVWpELDhDQUFPQTtBQUhPLEtBQWQsRUFJVC9FLElBSlMsQ0FBWjtBQUZpQjtBQU9sQjs7OzsyQkFFTztBQUNOLFVBQU1tQyxPQUFPLElBQWI7QUFDQSxVQUFNeVAsU0FBU2xMLHdEQUFTQSxDQUFDLEtBQUsxRyxJQUFmLEVBQXFCLG1CQUFyQixLQUE2QyxLQUE1RDtBQUNBLFVBQU15VSxhQUFhL04sd0RBQVNBLENBQUMsS0FBSzFHLElBQWYsRUFBcUIsbUJBQXJCLEtBQTZDLEtBQWhFO0FBQ0EsVUFBTTBVLGNBQWNoTyx3REFBU0EsQ0FBQyxLQUFLMUcsSUFBZixFQUFxQixvQkFBckIsS0FBOEMsS0FBbEU7QUFDQSxVQUFJdVcsZUFBZSxJQUFuQjtBQUNBLFVBQUkzRSxNQUFKLEVBQVk7QUFDVjtBQUNBLGFBQUs0RSxNQUFMLEdBQWNBLDBEQUFNQSxHQUNqQjFCLE1BRFcsQ0FDSixDQUNOLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FETSxFQUVOLENBQUMsS0FBSzlVLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JRLFVBQWpCLEVBQTZCLEtBQUt4QyxJQUFMLENBQVVnQyxLQUFWLENBQWdCQyxXQUE3QyxDQUZNLENBREksQ0FBZDs7QUFNQTtBQUNBLGFBQUt1UyxTQUFMLEdBQWlCLEtBQUt4VSxJQUFMLENBQVVnQyxLQUFWLENBQWdCcUYsWUFBaEIsQ0FBNkJxSCxVQUE3QixDQUNkOUosSUFEYyxDQUNULEtBQUs0UixNQURJLENBQWpCOztBQUdBRCx1QkFBZSxLQUFLL0IsU0FBTCxDQUFleFAsU0FBZixDQUF5QixjQUF6QixDQUFmOztBQUVBO0FBQ0EsYUFBS3dSLE1BQUwsQ0FBWS9DLEVBQVosQ0FBZSxLQUFmLEVBQXNCLFlBQVk7QUFDaEMsY0FBSSxDQUFDMkIsbURBQU9BLENBQUNhLFNBQWIsRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxjQUFNRSxLQUFLZixtREFBT0EsQ0FBQ2EsU0FBUixDQUFrQjVGLEdBQWxCLENBQXNCdUIsT0FBT1UsTUFBN0IsQ0FBWDtBQUNBOztBQUVBLGNBQU04RCxLQUFLRCxNQUFNQSxHQUFHOUYsR0FBSCxDQUFPM00sS0FBSzhHLEtBQVosQ0FBakIsQ0FSZ0MsQ0FRSTs7QUFFcEM7QUFDQXJJLGVBQUtxUyxTQUFMLENBQWU1UCxJQUFmLENBQW9CekMsS0FBS3FVLE1BQUwsQ0FBWU4sSUFBaEMsRUFBc0MsSUFBdEM7QUFDQUssdUJBQWF0UixLQUFiLENBQW1CLFFBQW5CLEVBQTZCLE1BQTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOUMsZUFBS25DLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JnRixLQUFoQixDQUFzQnlDLGVBQXRCLENBQXNDO0FBQ3BDbEoseUJBQWE2VixFQUR1QixDQUNwQjtBQURvQixXQUF0Qzs7QUFJQWpVLGVBQUtuQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCaUcsTUFBaEIsQ0FBdUJwRixNQUF2QixHQXZCZ0MsQ0F1QkE7OztBQUdoQztBQUNBSixtRUFBVUEsQ0FBQ04sS0FBS25DLElBQUwsQ0FBVTZILE1BQXJCLEtBQWdDMUYsS0FBS25DLElBQUwsQ0FBVTZILE1BQVYsQ0FBaUJqRCxJQUFqQixDQUFzQnpDLEtBQUtuQyxJQUFMLENBQVVnQyxLQUFoQyxFQUF1Q29VLEdBQUcsQ0FBSCxDQUF2QyxFQUE4Q0EsR0FBRyxDQUFILENBQTlDLENBQWhDO0FBRUQsU0E3QkQ7QUE4QkQ7O0FBRUQ7QUFDQSxVQUFJM0IsVUFBSixFQUFnQjtBQUNkLGFBQUtxQixVQUFMLEdBQWtCQywwREFBTUEsRUFBeEI7O0FBRUEsYUFBS0MsYUFBTCxHQUFxQixLQUFLaFcsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQitILEdBQWhCLENBQW9COUcsTUFBcEIsQ0FBMkIsR0FBM0IsRUFDbEJDLElBRGtCLENBQ2IsT0FEYSxFQUNKLGdCQURJLENBQXJCOztBQUdBO0FBQ0EsYUFBSzRTLFVBQUwsQ0FBZ0JyQyxFQUFoQixDQUFtQixLQUFuQixFQUEwQixZQUFZO0FBQ3BDLGNBQUksQ0FBQzJCLG1EQUFPQSxDQUFDYSxTQUFiLEVBQXdCO0FBQ3RCO0FBQ0Q7QUFDRDlULGVBQUs2VCxhQUFMLENBQW1CcFIsSUFBbkIsQ0FBd0J6QyxLQUFLMlQsVUFBTCxDQUFnQkksSUFBeEMsRUFBOEMsSUFBOUM7O0FBRUEsY0FBTUMsS0FBS2YsbURBQU9BLENBQUNhLFNBQVIsQ0FBa0I1RixHQUFsQixDQUFzQm9FLFdBQVduQyxNQUFqQyxDQUFYOztBQUdBLGNBQU04RCxLQUFLRCxNQUFNQSxHQUFHOUYsR0FBSCxDQUFPM00sS0FBSzhHLEtBQVosRUFDZHlJLElBRGMsQ0FDVCxVQUFVbkYsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3BCLG1CQUFRRCxJQUFJQyxDQUFaO0FBQ0QsV0FIYyxDQUFqQjs7QUFLQTVMLGVBQUtuQyxJQUFMLENBQVVnQyxLQUFWLENBQWdCMkUsS0FBaEIsQ0FBc0I4QyxlQUF0QixDQUFzQztBQUNwQ2xKLHlCQUFhNlYsRUFEdUIsQ0FDcEI7QUFEb0IsV0FBdEM7O0FBSUFqVSxlQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQmlHLE1BQWhCLENBQXVCcEYsTUFBdkIsR0FsQm9DLENBa0JKOztBQUVoQztBQUNBSixtRUFBVUEsQ0FBQ04sS0FBS25DLElBQUwsQ0FBVStILFFBQXJCLEtBQWtDNUYsS0FBS25DLElBQUwsQ0FBVStILFFBQVYsQ0FBbUJuRCxJQUFuQixDQUF3QnpDLEtBQUtuQyxJQUFMLENBQVVnQyxLQUFsQyxFQUF5Q29VLEdBQUcsQ0FBSCxDQUF6QyxFQUFnREEsR0FBRyxDQUFILENBQWhELENBQWxDO0FBRUQsU0F2QkQ7QUF3QkQ7O0FBRUQ7QUFDQSxVQUFJMUIsV0FBSixFQUFpQjtBQUNmLGFBQUsyQixXQUFMLEdBQW1CTiwwREFBTUEsRUFBekI7O0FBRUEsYUFBS08sY0FBTCxHQUFzQixLQUFLdFcsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQitILEdBQWhCLENBQW9COUcsTUFBcEIsQ0FBMkIsR0FBM0IsRUFDbkJDLElBRG1CLENBQ2QsT0FEYyxFQUNMLGlCQURLLENBQXRCOztBQUdBLGFBQUttVCxXQUFMLENBQWlCNUMsRUFBakIsQ0FBb0IsS0FBcEIsRUFBMkIsWUFBWTtBQUNyQyxjQUFJLENBQUMyQixtREFBT0EsQ0FBQ2EsU0FBYixFQUF3QjtBQUN0QjtBQUNEO0FBQ0Q5VCxlQUFLbVUsY0FBTCxDQUFvQjFSLElBQXBCLENBQXlCekMsS0FBS2tVLFdBQUwsQ0FBaUJILElBQTFDLEVBQWdELElBQWhEOztBQUVBLGNBQU1DLEtBQUtmLG1EQUFPQSxDQUFDYSxTQUFSLENBQWtCNUYsR0FBbEIsQ0FBc0JxRSxZQUFZcEMsTUFBbEMsQ0FBWDs7QUFHQSxjQUFNOEQsS0FBS0QsTUFBTUEsR0FBRzlGLEdBQUgsQ0FBTzNNLEtBQUs4RyxLQUFaLEVBQ2R5SSxJQURjLENBQ1QsVUFBVW5GLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNwQixtQkFBUUQsSUFBSUMsQ0FBWjtBQUNELFdBSGMsQ0FBakI7O0FBS0E1TCxlQUFLbkMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjhFLE1BQWhCLENBQXVCMkMsZUFBdkIsQ0FBdUM7QUFDckNsSix5QkFBYTZWLEVBRHdCLENBQ3JCO0FBRHFCLFdBQXZDOztBQUlBalUsZUFBS25DLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JpRyxNQUFoQixDQUF1QnBGLE1BQXZCLEdBbEJxQyxDQWtCTDs7QUFFaEM7QUFDQUosbUVBQVVBLENBQUNOLEtBQUtuQyxJQUFMLENBQVVnSSxRQUFyQixLQUFrQzdGLEtBQUtuQyxJQUFMLENBQVVnSSxRQUFWLENBQW1CcEQsSUFBbkIsQ0FBd0J6QyxLQUFLbkMsSUFBTCxDQUFVZ0MsS0FBbEMsRUFBeUNvVSxHQUFHLENBQUgsQ0FBekMsRUFBZ0RBLEdBQUcsQ0FBSCxDQUFoRCxDQUFsQztBQUVELFNBdkJEO0FBd0JEOztBQUVERyxzQkFBZ0IsS0FBS3ZXLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JxRixZQUFoQixDQUE2QnNLLFFBQTdCLENBQXNDLFlBQVk7QUFDaEU7QUFDQTRFLHFCQUNHOUMsRUFESCxDQUNNLFdBRE4sRUFDbUIsWUFBWTtBQUMzQjhDLHVCQUFhdFIsS0FBYixDQUFtQixRQUFuQixFQUE2QixZQUE3QjtBQUNELFNBSEgsRUFJR3dPLEVBSkgsQ0FJTSxPQUpOLEVBSWUsWUFBWTtBQUN2QjhDLHVCQUFhdFIsS0FBYixDQUFtQixRQUFuQixFQUE2QixNQUE3QjtBQUNELFNBTkg7QUFPRCxPQVRlLENBQWhCO0FBVUEsV0FBS3BDLE1BQUw7QUFFRDs7OzZCQUVTO0FBQ1IsVUFBSSxLQUFLMlQsTUFBVCxFQUFpQjtBQUNmLGFBQUtBLE1BQUwsQ0FBWTFCLE1BQVosQ0FBbUIsQ0FDakIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURpQixFQUVqQixDQUFDLEtBQUs5VSxJQUFMLENBQVVnQyxLQUFWLENBQWdCUSxVQUFqQixFQUE2QixLQUFLeEMsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQkMsV0FBN0MsQ0FGaUIsQ0FBbkI7O0FBS0EsYUFBS3VTLFNBQUwsQ0FBZTVQLElBQWYsQ0FBb0IsS0FBSzRSLE1BQXpCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLVixVQUFULEVBQXFCO0FBQ25CLGFBQUtBLFVBQUwsQ0FDR2hCLE1BREgsQ0FDVSxDQUNOLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FETSxFQUVOLENBQUUsS0FBSzlVLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkMsSUFBdkIsR0FBOEI5QyxrREFBU0EsQ0FBQytDLGFBQTFDLEVBQTBELEtBQUsvRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCQyxXQUExRSxDQUZNLENBRFY7O0FBTUEsYUFBSytULGFBQUwsQ0FDRzlTLElBREgsQ0FDUSxXQURSLEVBQ3FCLGVBQWVsQyxrREFBU0EsQ0FBQytDLGFBQXpCLEdBQXlDLEdBQXpDLEdBQStDLEtBQUsvRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCNkIsTUFBaEIsQ0FBdUI4SyxHQUF0RSxHQUE0RSxHQURqRyxFQUVHL0osSUFGSCxDQUVRLEtBQUtrUixVQUZiO0FBR0Q7O0FBRUQsVUFBSSxLQUFLTyxXQUFULEVBQXNCO0FBQ3BCLGFBQUtBLFdBQUwsQ0FDR3ZCLE1BREgsQ0FDVSxDQUNOLENBQUUsS0FBSzlVLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkMsSUFBdkIsR0FBOEIsS0FBSzlELElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0JRLFVBQTlDLEdBQTJEeEIsa0RBQVNBLENBQUMrQyxhQUF2RSxFQUF1RixDQUF2RixDQURNLEVBRU4sQ0FBRSxLQUFLL0QsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCQyxJQUF2QixHQUE4QixLQUFLOUQsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQlEsVUFBOUMsR0FBMkQsS0FBS3hDLElBQUwsQ0FBVWdDLEtBQVYsQ0FBZ0I2QixNQUFoQixDQUF1QkcsS0FBbEYsR0FBMEZoRCxrREFBU0EsQ0FBQytDLGFBQXRHLEVBQXNILEtBQUsvRCxJQUFMLENBQVVnQyxLQUFWLENBQWdCQyxXQUF0SSxDQUZNLENBRFY7O0FBTUEsYUFBS3FVLGNBQUwsQ0FDR3BULElBREgsQ0FDUSxXQURSLEVBQ3FCLGVBQWdCbEMsa0RBQVNBLENBQUMrQyxhQUExQixHQUEyQyxHQUEzQyxHQUFpRCxLQUFLL0QsSUFBTCxDQUFVZ0MsS0FBVixDQUFnQjZCLE1BQWhCLENBQXVCOEssR0FBeEUsR0FBOEUsR0FEbkcsRUFFRy9KLElBRkgsQ0FFUSxLQUFLeVIsV0FGYjtBQUdEO0FBQ0Y7Ozs2QkFFU2hSLFEsRUFBVTtBQUNsQkEsaUJBQVcsQ0FBQyxDQUFDQSxRQUFiO0FBQ0EsV0FBS21QLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlbFIsT0FBZixDQUF1QixXQUF2QixFQUFvQyxDQUFDK0IsUUFBckMsQ0FBbEI7QUFDQSxXQUFLMlEsYUFBTCxJQUFzQixLQUFLQSxhQUFMLENBQW1CMVMsT0FBbkIsQ0FBMkIsV0FBM0IsRUFBd0MsQ0FBQytCLFFBQXpDLENBQXRCO0FBQ0EsV0FBS2lSLGNBQUwsSUFBdUIsS0FBS0EsY0FBTCxDQUFvQmhULE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDLENBQUMrQixRQUExQyxDQUF2QjtBQUNBLFdBQUtyRixJQUFMLENBQVVvQixPQUFWLEdBQW9CaUUsUUFBcEI7QUFDRDs7OzZCQUVTO0FBQ1IsVUFBSSxLQUFLbVAsU0FBVCxFQUFvQjtBQUNsQixhQUFLQSxTQUFMLENBQWU1UCxJQUFmLENBQW9CLEtBQUs0UixNQUFMLENBQVlOLElBQWhDLEVBQXNDLElBQXRDO0FBQ0EsYUFBSzFCLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlbFAsTUFBZixFQUFsQjtBQUNEO0FBQ0QsVUFBSSxLQUFLMFEsYUFBVCxFQUF3QjtBQUN0QixhQUFLQSxhQUFMLENBQW1CcFIsSUFBbkIsQ0FBd0IsS0FBS2tSLFVBQUwsQ0FBZ0JJLElBQXhDLEVBQThDLElBQTlDO0FBQ0EsYUFBS0YsYUFBTCxDQUFtQjFRLE1BQW5CO0FBQ0Q7QUFDRCxVQUFJLEtBQUtnUixjQUFULEVBQXlCO0FBQ3ZCLGFBQUtBLGNBQUwsQ0FBb0IxUixJQUFwQixDQUF5QixLQUFLeVIsV0FBTCxDQUFpQkgsSUFBMUMsRUFBZ0QsSUFBaEQ7QUFDQSxhQUFLSSxjQUFMLENBQW9CaFIsTUFBcEI7QUFDRDtBQUNELFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBek0rQnVGLDhEOztBQUFia0MsbUUiLCJmaWxlIjoidGltZXNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7XG4gIGF4aXNCb3R0b20sIGF4aXNUb3AsIGF4aXNMZWZ0LCBheGlzUmlnaHQsXG4gIHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIHNjYWxlVGltZVxufSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtlbXB0eUZuLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgdHJ1bmNhdGVUZXh0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICBsYWJlbDogJycsXG4gICAgICB1bml0OiAnJyxcbiAgICAgIHJhbmdlU2NhbGU6IFswLCAxMDAwXSxcbiAgICAgIGRvbWFpblNjYWxlOiBbMCwgMTAwXSxcbiAgICAgIHNjYWxlVHlwZTogJycsXG4gICAgICBheGlzQ2xhbXA6IHRydWUsXG4gICAgICB0aWNrTnVtYmVyOiBudWxsLFxuICAgICAgcm90YXRlVGV4dDogZmFsc2UsXG4gICAgICB0ZXh0TGltaXQ6IDgsXG4gICAgICB0aWNrRm9ybWF0dGVyOiBmYWxzZSwgLy8gVXNlIGQzIHRpY2tGb3JtYXR0ZXJcbiAgICAgIHNob3dHcmlkTGluZXM6IGZhbHNlLFxuICAgICAgdGlja1BhZGRpbmc6IGNvbnN0YW50cy5USUNLX1BBRERJTkcsXG4gICAgICBzY2FsZVBhZGRpbmc6IGNvbnN0YW50cy5TQ0FMRV9QQURESU5HLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgLy8gQ3JlYXRlIEF4aXMgYW5kIFNjYWxlIGJhc2VkIG9uIGlucHV0IG9wdGlvbnNcbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUJhbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgaWYgKHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzQm90dG9tKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1RvcCgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpKVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gSG9sZHMgYWxsIHRpY2sgdmFsdWVzIHRoYXQgYXhpcyBzaG93c1xuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzTGVmdCgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1JpZ2h0KClcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoMClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpKSB7XG4gICAgICAgIC8vIElmIGV4dGVybmFsIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgbW9kaWZ5IGZvcm1hdHRlciB0byBwb3B1bGF0ZSB0aWNrVmFsdWVzXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRm9ybWF0dGVyID0gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXJcbiAgICAgICAgdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgc2VsZi50aWNrVmFsdWVzLnVuc2hpZnQodmFsKVxuICAgICAgICAgIHJldHVybiBleHRlcm5hbEZvcm1hdHRlcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnRpY2tQYWRkaW5nID4gMCkge1xuICAgICAgdGhpcy5heGlzLnRpY2tQYWRkaW5nKHRoaXMub3B0cy50aWNrUGFkZGluZylcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBeGlzUHJvcHMgKG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBvcHRzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgwLCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0fSlgXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGB2Yy1heGlzIHZjLWF4aXMtJHt0aGlzLm9wdHMub3JpZW50fSB2Yy1heGlzLSR7dGhpcy5vcHRzLmNsYXNzTmFtZX1gKVxuXG5cbiAgICAvLyBJZiBubyBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIGF4aXMgdXNlcyBkMyBkZWZhdWx0IGZvcm1hdHRlclxuICAgIGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpICYmIHRoaXMuYXhpcy50aWNrRm9ybWF0KHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKVxuXG4gICAgLy8gQWRkIExhYmVsIHRvIEF4aXNcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnID0gdGhpcy5heGlzVGFnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzLWxhYmVsJylcbiAgICAgICAgLnRleHQodGhpcy5vcHRzLmxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIC8vIElGIG5vdCB2aXNpYmxlLCBEb250IHNob3cgdGhlIGF4aXMsIGJ1dCBzdGlsbCBzY2FsZSBhbmQgcGxvdCBvbiBncmFwaFpvbmUsIHNvIHRoYXQgYWxsIHNlcmllcyBjYW4gYmUgcGxvdHRlZFxuICAgICF0aGlzLm9wdHMudmlzaWJsZSAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgZ3JhcGggQXhpcyBiYXNlZCBvbiBuZXcgd2lkdGggYW5kIG1vZGlmeSByYW5nZSwgZG9tYWluIGFuZCB0aWNrc1xuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy5vcHRzLnJhbmdlU2NhbGUgPSBbMCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhdXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG5cbiAgICAvLyBQb3NpdGlvbiBsYWJlbCwgc2NhbGUsIHRpY2tzLCBheGlzIGJhc2VkIG9uIGNoYXJ0IHdpZHRoXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgbGV0IHhUcmFucyA9IDBcbiAgICAgIGxldCB5VHJhbnMgPSAwXG4gICAgICBsZXQgcm90YXRlID0gMFxuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHhUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyAyKVxuICAgICAgICB5VHJhbnMgPSBjb25zdGFudHMuWF9BWElTX0xBQkVMX1lcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUIHx8IHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICAgIHhUcmFucyA9IC0odGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KSArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gMjcwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeFRyYW5zID0gdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gOTBcbiAgICAgICAgfVxuICAgICAgICB5VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt4VHJhbnN9LCR7eVRyYW5zfSkgcm90YXRlKCR7cm90YXRlfSlgKVxuICAgIH1cblxuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBsZXQgZG9tYWluU2NhbGUgPSBbdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdLCB0aGlzLm9wdHMuZG9tYWluU2NhbGVbdGhpcy5vcHRzLmRvbWFpblNjYWxlLmxlbmd0aCAtIDFdXVxuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgZG9tYWluU2NhbGUgPSB0aGlzLm9wdHMuZG9tYWluU2NhbGVcbiAgICAgIHRoaXMuc2NhbGVcbiAgICAgICAgLnBhZGRpbmcodGhpcy5vcHRzLnNjYWxlUGFkZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRzLmF4aXNDbGFtcCAmJiB0aGlzLnNjYWxlLmNsYW1wKCkgLy8gQ2xhbXBzIG91dHNpZGUgcmFuZ2UgdmFsdWUgd2l0aGluIHNwZWN0aWZlZCByYW5nZSBhbmQgZG9tYWluXG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZS5yYW5nZSh0aGlzLm9wdHMucmFuZ2VTY2FsZSlcbiAgICAgIC5kb21haW4oZG9tYWluU2NhbGUpXG5cbiAgICB0aGlzLmF4aXMuc2NhbGUodGhpcy5zY2FsZSlcblxuICAgIGlmIChpc051bWJlcih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIGxldCB0aWNrVmFsID0gdGhpcy5vcHRzLnRpY2tOdW1iZXJcbiAgICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4JyAmJiB0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgLy8gbW9kaWZ5IHh0aWNrIHRvIGRpc3BsYXkgbGVzcyB0aWNrcyBvbiBsb3dlciBjaGFydCB3aWR0aCBvciBoYXMgbGVzcyBkYXlzXG4gICAgICAgIGNvbnN0IG5ld1RpY2sgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gNjApXG4gICAgICAgIGNvbnN0IGRheUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpICsgMVxuICAgICAgICBpZiAoZGF5TGVuZ3RoID4gMiAmJiBkYXlMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IGRheUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWludXRlTGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDEwMDApKVxuICAgICAgICBpZiAobWludXRlTGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBtaW51dGVMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdUaWNrIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBuZXdUaWNrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5heGlzLnRpY2tzKHRpY2tWYWwpXG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgdGhpcy5heGlzLnRpY2tzKHRoaXMub3B0cy50aWNrTnVtYmVyKCkpXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyICYmIHRoaXMuYXhpc1RhZy5hdHRyKCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybUF0dHIpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgJiYgdGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZy5jYWxsKHRoaXMuYXhpcylcblxuXG4gICAgY29uc3QgbGltaXRUZXh0ID0gdGhpcy5vcHRzLnRleHRMaW1pdFxuICAgIGNvbnN0IHRpY2tGbXQgPSBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSA/IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyIDogZW1wdHlGblxuXG4gICAgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAnc2xhbnQnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ3knLCAnOCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctMS4wZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3gnLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MCknKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlbW92ZSBBeGlzIEluc3RhbmNlXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5yZW1vdmUoKVxuICAgIHRoaXMuc2NhbGUgPSBudWxsXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IEF4aXMgZnJvbSAnQC9heGlzJ1xuaW1wb3J0IHthZGREZWZhdWx0VFNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCBCYXNpY1RTUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9UaW1lU2VyaWVzVG9vbHRpcCdcbmltcG9ydCBNb3VzZUhhbmRsZXIgZnJvbSAnQC9tb3VzZS1oYW5kbGVyJ1xuaW1wb3J0IFpvb20gZnJvbSAnQC96b29tJ1xuaW1wb3J0IEdlc3R1cmVab29tIGZyb20gJ0Avem9vbS9HZXN0dXJlWm9vbSdcbmltcG9ydCBUaW1lU2VyaWVzTGVnZW5kIGZyb20gJ0AvbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQnXG5pbXBvcnQgVGltZVNlcmllcyBmcm9tICdAL3Nlcmllcy9UaW1lU2VyaWVzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc0NoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBvcHRzKSB7XG4gICAgb3B0cy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGFQYXJzZXIgaXMgbm90IHBhc3NlZFxuICAgIGlmICghb3B0cy5kYXRhUGFyc2VyKSB7XG4gICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNUU1BhcnNlcihvcHRzKVxuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgZGF0YVBhcnNlciBleGlzdHMgYW5kIGl0cyBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlclxuICAgIGlmICghKG9wdHMuZGF0YVBhcnNlciBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGFQYXJzZXIgaW4gb3B0aW9ucyBkb3Nlbid0IGhhdmUgaW1wbGVtZW50YXRpb24gb2YgQ2hhcnRBeGlzUGFyc2VyXCIpXG4gICAgfVxuXG4gICAgLy8gQ2FsbCBQYXJlbnQgSW1wbFxuICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0cylcblxuICAgIC8vIFJ1biB0aGUgZGF0YVBhcnNlciBmb3IgZ2l2ZW4gSlNPTiBkYXRhXG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuZGF0YVBhcnNlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRhdGFQYXJzZXIuZGF0YUV4ZWN1dG9yKCkpXG4gICAgfVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRUU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gSW5pdGlsaXplIGFsbCBjaGFydCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGltZVNlcmllc0NoYXJ0IG9uIGV4YWN0IG9yZGVyIGJhc2VkIG9uIGVhY2ggZGVwZW5kZW5jaWVzXG4gICAgdGhpcy5jaGFydEluaXRpbGl6ZSgpXG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5kcmF3KCkpXG4gIH1cblxuICBjaGFydEluaXRpbGl6ZSAoKSB7XG4gICAgbGV0IGF4aXNPcHRpb25zXG4gICAgY29uc3QgeVJhbmdlID0gdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgIGNvbnN0IHlSYW5nZTIgPSB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG5cbiAgICBpZiAoeVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5sZWZ0JylcbiAgICAgIHRoaXMueUF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpcylcbiAgICB9XG5cbiAgICBpZiAoeVJhbmdlMikge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMucmlnaHQnKVxuICAgICAgdGhpcy55QXhpczIgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdyaWdodCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZTIsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlIChjaGFydCBBUEkpXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMyKVxuICAgIH1cblxuICAgIGlmICh0aW1lSW5mby50aW1lUmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnhBeGlzLmJvdHRvbScpXG4gICAgICB0aGlzLnhBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd4JyxcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgcmFuZ2VTY2FsZTogWzAsIHRoaXMuY2hhcnRXaWR0aF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB0aW1lSW5mby50aW1lUmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnhBeGlzKVxuICAgIH1cblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGNvbnN0IHpvb21PcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnpvb20nLCB7fSlcbiAgICBpZiAoKHRvb2x0aXBPcHRzLnZpc2libGUgfHwgem9vbU9wdHMudmlzaWJsZSkpIHtcbiAgICAgIHRoaXMubW91c2VIYW5kbGVyID0gbmV3IE1vdXNlSGFuZGxlcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5tb3VzZUhhbmRsZXIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIGxldCB6b29tRm4gPSBab29tXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgem9vbUZuID0gR2VzdHVyZVpvb21cbiAgICAgIH1cbiAgICAgIHRoaXMuem9vbUJydXNoID0gbmV3IHpvb21Gbih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBvblpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWFpvb20sXG4gICAgICAgIG9uWTFab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblkxWm9vbSxcbiAgICAgICAgb25ZMlpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWTJab29tXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnpvb21CcnVzaClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNlcmllcykge1xuICAgICAgdGhpcy5zZXJpZXMgPSBuZXcgVGltZVNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGVnZW5kLnZpc2libGUpIHtcbiAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBUaW1lU2VyaWVzTGVnZW5kKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIGxlZ2VuZFByZWZpeDogdGhpcy5vcHRpb25zLmxlZ2VuZC5sZWdlbmRQcmVmaXgsXG4gICAgICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUCxcbiAgICAgICAgZGlzYWJsZVNlcmllc1RvZ2dsZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5kaXNhYmxlU2VyaWVzVG9nZ2xlLFxuICAgICAgICBvbkxlZ2VuZENoYW5nZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5vbkxlZ2VuZENoYW5nZVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdUaW1lU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy5jb250YWluZXIuc2VsZWN0KCdzdmcgJyArIHJlU2NhbGVBeGlzW2F4aXNdLmNsYXNzKS5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9IHNlbGVjdCh0aGlzKS50ZXh0KCkgfHwgJydcbiAgICAgICAgaWYgKHRpY2tIdG1sLmxlbmd0aCA+IHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dCA9IHRpY2tIdG1sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgICAuZGF0YShbcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dF0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChTdHJpbmcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gQ29tcHV0ZSByZXF1aXJlZFdpZHRoIGZvciB0aGUgTWF4IHRleHRcbiAgICAgICAgICByZXF1aXJlZFdpZHRoID0gdGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgcmVzcGVjdGl2ZSBtYXJnaW4gdG8gZml0IGluIHRpY2tzIHRleHRcbiAgICAgIHRoaXMubWFyZ2luW2F4aXNdID0gTWF0aC5yb3VuZChyZXF1aXJlZFdpZHRoKSArIGNvbnN0YW50cy5ZX0FYSVNfU1BBQ0VcblxuICAgIH1cbiAgICBkdW1teUcucmVtb3ZlKClcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9ICh0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IHtnZXREYXRlRnJvbUVwb2MsIGdldE9iamVjdCwgcmVmaW5lU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc0Jvb2xlYW59IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVFNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgdGltZXNlcmllcyBKU09OIHBhcnNpbmcgOicsIGVycilcbiAgICAgIHRoaXMub3B0cy5vbkVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKU09OIHJlY2VpdmVkIC0gRXJyb3Igb24gdGltZXNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi50aW1lc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICAvLyBGaW5kIHNlY29uZHMgaW4gdW5pdEFyciB0byBmaW5kIHRoZSB0aW1lU3RhbXBJbmRleFxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gMFxuICAgIGNvbnN0IGZpcnN0VGltZSA9IGRhdGFbMF1bdGltZVN0YW1wSW5kZXhdXG4gICAgaWYgKCF2YWxpZEpTT05UeXBlIHx8ICEoaXNOdW1iZXIoZmlyc3RUaW1lKSB8fCBpc0RhdGUoZmlyc3RUaW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkJylcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQgPSAwXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoc3RhcnQgPiBkW3RpbWVTdGFtcEluZGV4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVGltZSBzZXJpZXMgSlNPTiByZWNlaXZlZDogVGltZXN0YW1wIFZhbHVlcyBtdXN0IGJlIGluIGFzY2VuZGluZyBvcmRlcicpXG4gICAgICB9XG4gICAgICBzdGFydCA9IGRbdGltZVN0YW1wSW5kZXhdXG4gICAgICBkW3RpbWVTdGFtcEluZGV4XSA9IGdldERhdGVGcm9tRXBvYyhkW3RpbWVTdGFtcEluZGV4XSwgdHJ1ZSkgLy8gY29udmVydCBFUE9DIHRvIGRhdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IFtzZXJpZXNEYXRhWzBdW2RhdGFJbmRleF0sIHNlcmllc0RhdGFbKHNlcmllc0RhdGEubGVuZ3RoIC0gMSldW2RhdGFJbmRleF1dXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQgZmluZEVhY2hQbG90UmFuZ2UgPSBmYWxzZVxuICAgIGxldCBrZXlcbiAgICBsZXQgeVJhbmdlID0gbnVsbFxuICAgIGxldCB5UmFuZ2UyID0gbnVsbFxuXG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWF4KSkge1xuICAgICAgICB5UmFuZ2UgPSBbeUF4aXMubWluLCB5QXhpcy5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzMikge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1heCkpIHtcbiAgICAgICAgeVJhbmdlMiA9IFt5QXhpczIubWluLCB5QXhpczIubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHlSYW5nZSBpcyBub3Qgc2V0IGZyb20gZ3JhcGhPcHRpb25zLCB0aGVuIGdvIGluc2lkZVxuICAgIGlmICgoeUF4aXMgJiYgIXlSYW5nZSkgfHwgKHlBeGlzMiAmJiAheVJhbmdlMikpIHtcblxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5taW5WYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5tYXhWYWwpKSB7XG4gICAgICAgICAgZmluZEVhY2hQbG90UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmxlbmd0aCkgfHwgZmluZEVhY2hQbG90UmFuZ2UpIHtcblxuICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAvLyBSZXNldCByYW5nZSBmb3IgZWFjaCBwbG90IGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgY29uc3QgZWFjaFBsb3QgPSBlYWNoUGxvdFNldFtwbG90XVxuICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gSW5maW5pdHlcbiAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IHN0YWNrIHJhbmdlIGZvciBlYWNoIHN0YWNrIGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIGxldCB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgICBjb25zdCBlYWNoUGxvdCA9IGVhY2hQbG90U2V0W3Bsb3RdXG4gICAgICAgICAgICAgIHZhbERhdGEgPSBkW2VhY2hQbG90LmRhdGFJbmRleF1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPCBlYWNoUGxvdC5taW5WYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPiBlYWNoUGxvdC5tYXhWYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgIHN1bSArPSAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPyBkW2VhY2hQbG90U2V0W21lbWJlci5uYW1lXS5kYXRhSW5kZXhdIDogMClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChzdW0gPCBwbG90RGF0YS52YWx1ZVJhbmdlWzBdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW0gPiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0YWNrJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gcGxvdERhdGEudmFsdWVSYW5nZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4pIHtcbiAgICAgICAgICBhbGxNaW4gPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCB0aW1lU3RhbXBJbmRleCA9IGRhdGFPcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICh0aW1lU3RhbXBJbmRleCA9PT0gaW5kKSB7XG4gICAgICAgIGluZCsrXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS5uYW1lID0gcmVmaW5lU3RyaW5nKHBsb3REYXRhLm5hbWUpXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBwbG90RGF0YS5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IHBsb3REYXRhLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgaXNCb29sZWFuKHBsb3REYXRhLnZpc2libGUpICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlID0gcGxvdERhdGEudmlzaWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUhhbmRsZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbiA9IFtdXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hYJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy56b29tLnZpc2libGUgfHwgdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgLy8geC1ab29tIGZvciBjaGFydCBkb2VzdCBub3QgZXhpc3QsIEFkZCByZWN0IG92ZXJsYXkgZm9yIGJydXNoWERpdiBvciBhZGQgSW4gY2FzZSBvZiB6b29tIHdpdGggdG91Y2ggc2NyZWVuXG4gICAgICB0aGlzLm1vdXNlQnJ1c2guYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ292ZXJsYXknKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2guYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdH0sJHt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcH0pYClcbiAgICBpZiAoIXRoaXMub3B0cy5jaGFydC5vcHRpb25zLnpvb20udmlzaWJsZSB8fCB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICB0aGlzLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlZ2lzdGVyIChjYWxsYmFjaykge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICB0cmlnZ2VyTW91c2VBY3Rpb24gKCkge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLmZvckVhY2goKGZ1bikgPT4ge1xuICAgICAgZnVuLmNhbGwodGhpcylcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2xpbmV9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICAvLyBEbyBub3QgcmVnaXN0ZXIgdGhpcyBjb21wb25lbnQgaW4gY2hhcnRDb21wb25lbnRzQXJyLCAgQXMgdGhlIHNlcmllcyBjb21wb25lbnQgaXMgYWxyZWFkeSByZWdpc3RlcmVkIGFuZCB3aWxsIGNhbGwgdGhlIGxpbmUgQVBJc1xuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBsb3RBeGlzOiBbY29uc3RhbnRzLkRJUl9MRUZULCBjb25zdGFudHMuRElSX0JPVFRPTV0sXG4gICAgICBsaW5lRGF0YTogbnVsbCxcbiAgICAgIHlBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgeEF4aXNUYXJnZXQ6IG51bGwsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgZG90czogbnVsbFxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0gbGluZSgpXG5cbiAgICBpZiAodGhpcy5vcHRzLnlBeGlzVGFyZ2V0KSB7XG4gICAgICAvLyBGb3Igbm9ybWFsIHNlcmllcywgeUF4aXNUYXJnZXQgcmVmZXJzIHRvIHRoZSBpbmRleCBvZiB0aGlzIHNlcmllcyBpbiBkYXRhIEFyclxuICAgICAgdGhpcy5saW5lXG4gICAgICAgIC5kZWZpbmVkKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSAhPSBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgLy8geEF4aXNUYXJnZXQgcmVmZXJzIHRoZSBpbmRleCBvZiBkYXRlIGluIGRhdGEgQXJyXG4gICAgICAgICAgcmV0dXJuIHgoZFtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB5KGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtbGluZS0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKFt0aGlzLm9wdHMubGluZURhdGFdKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxpbmUtcGxvdCB2Yy1saW5lLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcbiAgICAvLyBBZGRpbmcgdGhlIGxpbmVzIHNlcmllcyBmb3IgZGF0YSB0byBiZSBzaG93blxuICAgIHRoaXMubGluZVRhZy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1saW5lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5saW5lV2lkdGggfHwgJzJweCdcbiAgICAgIH0pXG4gICAgICAuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmxpbmUoZC52YWx1ZXMpIC8vIFZhbHVlcyBhcmUgYXJyYXkgb2YgYXJyYXkgaGF2aW5nIGZvcm1hdCBsaWtlICBbW2RhdGUsIHNlcmllczEsIHNlcmllczIgLi4uLl0sLi4uXVxuICAgICAgfSlcblxuICAgIC8vIEFkZGluZyBkb3RzIG9uIGVhY2ggcG9pbnRzIG9uIGxpbmUgaWYgZW5hYmxlZFxuICAgIGlmICh0aGlzLm9wdHMuZG90cyAmJiB0aGlzLm9wdHMuZG90cy52aXNpYmxlKSB7XG4gICAgICBjb25zdCB0b3RhbExpbmVMZW5ndGggPSB0aGlzLm9wdHMubGluZURhdGEudmFsdWVzLmxlbmd0aFxuICAgICAgdGhpcy5kb3RzVGFnID0gdGhpcy5saW5lVGFnLnNlbGVjdEFsbCgndmMtbGluZS1kb3QnKVxuICAgICAgICAuZGF0YSh0aGlzLm9wdHMubGluZURhdGEudmFsdWVzKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uIChkLCBpbmRleCkge1xuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBgdmMtZG90IHZjLWRvdC1jb3VudC0ke2luZGV4fWBcbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHZjLWRvdC1maXJzdCdcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAodG90YWxMaW5lTGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIHZjLWRvdC1sYXN0J1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdyJywgdGhpcy5vcHRzLmRvdHMucmFkaXVzKVxuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBoYXBwZW5zIHdoZW4gdGhlIGNoYXJ0IGlzIHJlc2l6ZWRcbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gc2VsZi5saW5lKGQudmFsdWVzKVxuICAgIH0pXG4gICAgLy8gUmVmcmVzaCBkb3RzXG4gICAgaWYgKHRoaXMuZG90c1RhZykge1xuICAgICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICAgIGxldCB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJylcbiAgICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgICB9XG5cbiAgICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICAgIHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJylcbiAgICAgIH1cbiAgICAgIHRoaXMuZG90c1RhZy5hdHRyKCdyJywgdGhpcy5vcHRzLmRvdHMucmFkaXVzKVxuICAgICAgICAuYXR0cignY3gnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIC8vIHhBeGlzVGFyZ2V0IHJlZmVycyB0aGUgaW5kZXggb2YgZGF0ZSBpbiBkYXRhIEFyclxuICAgICAgICAgIHJldHVybiB4KGRbc2VsZi5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4geShkW3NlbGYub3B0cy55QXhpc1RhcmdldF0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IHNlcmllc05hbWUgPSB0aGlzLm9wdHMubGluZURhdGEubmFtZVxuICAgIC8vIFJlbW92ZSBsaW5lIHNlcmllc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcucmVtb3ZlKClcblxuICAgIGlmIChlYWNoUGxvdFNldCAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXSAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXS52aXNpYmxlKSB7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5saW5lID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHthcmVhLCBzdGFjaywgc3RhY2tPcmRlck5vbmUsIHN0YWNrT2Zmc2V0Tm9uZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrQXJlYSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIHhBeGlzVGFyZ2V0OiAnJyxcbiAgICAgIHN0YWNrRGF0YTogbnVsbCxcbiAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiB7fSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBEZWZpbmUgaW4gd2hhdCBvcmRlciwgU3RhY2sgc2VyaWVzIG5lZWRzIHRvIGJlIHBsb3RlZFxuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cblxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gc3RhY2soKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChkLmRhdGFbc2VsZi5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgIH0pXG4gICAgICAueTAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZFswXSkgLy8gSW5kaWNhdGVzIHdoZXJlIHRvIHN0YXJ0IGFsb25nIFlBeGlzXG4gICAgICB9KVxuICAgICAgLnkxKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGRbMV0pIC8vIEluZGljYXRlcyB3aGVyZSB0byBlbmQgYWxvbmcgWUF4aXNcbiAgICAgIH0pXG5cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICB0aGlzLm9wdHMuZDNTdGFjay5rZXlzKHRoaXMub3B0cy5zdGFja09yZGVySW5kZXgpIC8vIHNwZWNpZnkgdGhlIHN0YWNrIHNlcmllcyBuYW1lcyBpbiBhcnJheSBmb3JtYXRcbiAgICB0aGlzLm9wdHMuZDNTdGFjay5vcmRlcihzdGFja09yZGVyTm9uZSkgLy8gdXNlIHRoZSBnaXZlbiBzZXJpZXMgb3JkZXIuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sub2Zmc2V0KHN0YWNrT2Zmc2V0Tm9uZSkgLy8gYXBwbHkgYSB6ZXJvIGJhc2VsaW5lIG9uIHN0YXJ0XG5cbiAgICAvLyBTaG93IHN0YWNrIHBsb3QgZm9yIG9ubHkgc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgY29uc3Qgc3RhY2tWaXNpYmxlT3JkZXIgPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcblxuICAgIHRoaXMuc3RhY2tMYXllciA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtc3RhY2stJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuZGF0YSh0aGlzLm9wdHMuZDNTdGFjayh0aGlzLm9wdHMuc3RhY2tEYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1zdGFjay1wbG90IHZjLXN0YWNrLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcblxuICAgIC8vIFBMb3Qgc3RhY2tMYXllciBiYXNlZCBvbiBlYWNoIHNlcmllcyB2aXNpYmxpdHlcbiAgICB0aGlzLnN0YWNrTGF5ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAndmMtc3RhY2sgdmMtc3RhY2stJyArIHN0YWNrTWVtYmVyLm5hbWVcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtzdGFja01lbWJlci5uYW1lXS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgdGhpcy5hcmVhKVxuXG4gIH1cbiAgXG4gIC8vIFVwZGF0ZSBzdGFja0xheWVyIGJhc2VkIG9uIGNoYXJ0IHJlc2l6ZVxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIHRoaXMuYXJlYSlcbiAgfVxuICBcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgc3RhY2tPcmRlciBhcnIgYmFzZWQgb24gdmlzaWJsZVNlcmllc1xuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgc3RhY2sgc2VyaWVzXG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIC8vIGRyYXcgd2l0aCBuZXcgc3RhY2tPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG4gIFxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLnN0YWNrTGF5ZXIuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuICBcbiAgcmVtb3ZlICgpIHtcbiAgICAvLyAgdGhpcy5zdGFja0FyZWFQYXRoLnJlbW92ZSgpO1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMuZDNTdGFjayA9IG51bGxcbiAgICB0aGlzLmFyZWEgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IHtpc0FycmF5fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IExpbmUgZnJvbSAnQC9zZXJpZXMvTGluZSdcbmltcG9ydCBTdGFja0FyZWEgZnJvbSAnQC9zZXJpZXMvU3RhY2tBcmVhJ1xuaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXMgZXh0ZW5kcyBTZXJpZXMge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5wbG90U2VyaWVzID0gW11cbiAgICBjb25zdCBkYXRhID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhIC8vIEFjY2VwdCBlaXRoZXIgdGltZXNlcmllcyBvciBwaWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuXG4gICAgLy8gQ3JlYXRlIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiBpbnB1dCBvcHRpb25zIGFuZCBlYWNoIHBsb3QgaW5mb1xuICAgIGlzQXJyYXkocGxvdEluZm8uc3RhY2spICYmIHBsb3RJbmZvLnN0YWNrLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgU3RhY2tBcmVhKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMub3B0cy5jaGFydCxcbiAgICAgICAgY2xhc3NOYW1lOiBwbG90RGF0YS5jbGFzc05hbWUgfHwgcGxvdERhdGEubmFtZSxcbiAgICAgICAgcGxvdEF4aXM6IHBsb3REYXRhLnBsb3RBeGlzLFxuICAgICAgICB4QXhpc1RhcmdldDogdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4LFxuICAgICAgICBzdGFja0RhdGE6IGRhdGEsXG4gICAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgfSkpXG4gICAgfSlcblxuICAgIGlzQXJyYXkocGxvdEluZm8ubGluZSkgJiYgcGxvdEluZm8ubGluZS5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IExpbmUoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHlBeGlzVGFyZ2V0OiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5kYXRhSW5kZXgsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHZpc2libGU6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUsXG4gICAgICAgIGxpbmVEYXRhOiB7XG4gICAgICAgICAgbmFtZTogcGxvdERhdGEubmFtZSxcbiAgICAgICAgICBjb2xvcjogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IsXG4gICAgICAgICAgbGluZVdpZHRoOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5saW5lV2lkdGgsXG4gICAgICAgICAgdmFsdWVzOiBkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIGRvdHM6IHBsb3REYXRhLmRvdHNcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBnZXRPYmplY3QsIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2Jpc2VjdG9yLCBkM01vdXNlfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzVG9vbHRpcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjcm9zc0hhaXJzOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgLy8gUHJvdmlkZSBiYXNpYyBmb3JtYXR0ZXIgdG8gZGlzcGxheSBob3ZlciBkYXRhXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMub3B0cy5mb3JtYXQpKSB7XG4gICAgICB0aGlzLm9wdHMuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4gVG9vbFRpcCBUZXh0IDogPC9zcGFuPjxici8+PHNwYW4+JHtKU09OLnN0cmluZ2lmeShkKX08L3NwYW4+YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMuY3Jvc3NIYWlycyA9IGZhbHNlXG4gICAgdGhpcy50b29sVGlwRGl2ID0gdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lclxuICAgICAgLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy10b29sdGlwLWRpc3BsYXkgJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBpZiAodGhpcy5vcHRzLmNyb3NzSGFpcnMuZW5hYmxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNyb3NzSGFpcnMgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1saW5lJylcbiAgICAgIHRoaXMuY3Jvc3NIYWlycy5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5LC05OTkpJylcbiAgICAgICAgLmF0dHIoJ3gxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAuYXR0cigneTEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCAtIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIpXG4gICAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ3kyJywgKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wKSlcblxuICAgIH1cblxuICAgIHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIucmVnaXN0ZXIoKCkgPT4ge1xuICAgICAgLy8gUmVnaXN0ZXIgaG92ZXIgYW5kIGhpZGUvc2hvdyB0b29saXAgZXZlbnRzXG4gICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICAgIGNvbnN0IG1vdXNlSGFuZGxlciA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXJcbiAgICAgIGNvbnN0IGRhdGVJbmRleCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgICAgY29uc3QgZGF0YVNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YVxuICAgICAgLy8gRmluZCBuZWFyZXN0IGV4aXN0aW5nIGRhdGUgYW1vbmcgYXJyYXkgb2Ygc29ydGVkIGRhdGVcbiAgICAgIGNvbnN0IGJpc2VjdERhdGUgPSBiaXNlY3RvcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFtkYXRlSW5kZXhdXG4gICAgICB9KS5sZWZ0XG5cbiAgICAgIGNvbnN0IG1vdXNlRXZ0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gT24gbW91c2Vtb3ZlIG9mIHggb3ZlcmxheSwgZmluZCB4LHkgdmFsdWVzIGFuZCB1cGRhdGUgdG9vbHRpcFxuICAgICAgICBjb25zdCB4TW91c2UgPSBkM01vdXNlKHRoaXMpWzBdXG4gICAgICAgIGNvbnN0IHlNb3VzZSA9IGQzTW91c2UodGhpcylbMV1cbiAgICAgICAgY29uc3QgeFZhbCA9IHhTY2FsZS5pbnZlcnQoeE1vdXNlKSAvLyBmaW5kIHhBeGlzIGRhdGUgZm9yIG1vdXNlIHBvc2l0aW9uXG5cbiAgICAgICAgLy8gRG8gYmluYXJ5IHNlYXJjaCBvZiBkYXRhIHNldCBmcm9tIDJuZCBkYXRhIHNldCB0byBlbmRcbiAgICAgICAgY29uc3QgZm91bmQgPSBiaXNlY3REYXRlKGRhdGFTZXQsIHhWYWwsIDEpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZEJlZm9yZSA9IGRhdGFTZXRbZm91bmQgLSAyXVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRQcmV2ID0gZGF0YVNldFtmb3VuZCAtIDFdXG4gICAgICAgIC8vIGdldCBiZWZvcmUgZmluZCBkYXRhU2V0XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRGb3VuZCA9IGRhdGFTZXRbZm91bmRdIHx8IGRQcmV2IC8vIGdldCBmaW5kIGRhdGFTZXRcblxuICAgICAgICBsZXQgdG9vbFRpcERhdGEgPSBkUHJldlxuICAgICAgICBpZiAoZGF0YVNldC5sZW5ndGggPiBzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkge1xuICAgICAgICAgIC8vIE1vcmUgdGhhbiBvbmUgdGljayByZXNpZGUgb24gZWFjaCBwaXhlbC4gSGVuY2UgZmluZCB0aWNrIGhhdmluZyBtYXggdmFsdWUgYW1vbmcgdGhlIGRhdGFzZXRcbiAgICAgICAgICBjb25zdCBkYXRhUGFyc2VMZW4gPSBNYXRoLmZsb29yKGRhdGFTZXQubGVuZ3RoIC8gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpICsgMVxuXG4gICAgICAgICAgY29uc3QgdmlzaWJsZURhdGFJbmRleCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGNvbnN0IHBsIGluIHNlbGYub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsb3QgPSBzZWxmLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0W3BsXVxuICAgICAgICAgICAgaWYgKHBsb3QudmlzaWJsZSkge1xuICAgICAgICAgICAgICB2aXNpYmxlRGF0YUluZGV4W3Bsb3QuZGF0YUluZGV4XSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBtdWx0aUFyck1hcCA9IHt9XG4gICAgICAgICAgLy8gRG8gU2NhbiBmcm9tIHJhbmdlIC1kYXRhUGFyc2VMZW4gdG8gK2RhdGFQYXJzZUxlbiBiZXR3ZWVuIGZvdW5kIGRhdGEgaW5kZXhcbiAgICAgICAgICBmb3IgKGxldCBpbmQgPSAoZm91bmQgLSBkYXRhUGFyc2VMZW4pOyBpbmQgPCAoZm91bmQgKyBkYXRhUGFyc2VMZW4pOyBpbmQrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFTZXRbaW5kXSkge1xuICAgICAgICAgICAgICBjb25zdCBkU2V0ID0gZGF0YVNldFtpbmRdLmZpbHRlcihmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlRGF0YUluZGV4W2luZGV4XVxuICAgICAgICAgICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChkU2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG11bHRpQXJyTWFwW2luZF0gPSBkU2V0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IG1heEluZFxuICAgICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICAgICAgICBmb3IgKGNvbnN0IG1wIGluIG11bHRpQXJyTWFwKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJTZXQgPSBtdWx0aUFyck1hcFttcF1cbiAgICAgICAgICAgIGlmIChtYXhWYWwgPCBhcnJTZXRbMF0pIHtcbiAgICAgICAgICAgICAgbWF4VmFsID0gYXJyU2V0WzBdXG4gICAgICAgICAgICAgIG1heEluZCA9IG1wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSBkYXRhU2V0W21heEluZF0gfHwgZEZvdW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRmluZCBuZWFyZXN0IHJlYWNoaW5nIGRhdGUgYW1vbmcgYWJvdmUgdHdvIGRhdGVzXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSAoeFZhbCAtIGRQcmV2W2RhdGVJbmRleF0pID4gKGRGb3VuZFtkYXRlSW5kZXhdIC0geFZhbCkgPyBkRm91bmQgOiBkUHJldlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGVJbnRSYW5nZSA9IGRGb3VuZFtkYXRlSW5kZXhdIC0gZFByZXZbZGF0ZUluZGV4XVxuXG4gICAgICAgIGlmICghZGF0ZUludFJhbmdlICYmIGRCZWZvcmUpIHtcbiAgICAgICAgICBkYXRlSW50UmFuZ2UgPSBkUHJldltkYXRlSW5kZXhdIC0gZEJlZm9yZVtkYXRlSW5kZXhdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZUludFJhbmdlIDwgTWF0aC5hYnMoZEZvdW5kW2RhdGVJbmRleF0gLSB4VmFsKSkge1xuICAgICAgICAgIC8vIElmIGZvdW5kIGlzIG91dHNpZGUgZGF0YSBpbnRlcnZhbCByYW5nZSwgVGhlbiBkYXRhIGRvZXNudCBleGlzdCBmb3IgdGhhdCB0aWNrLlxuICAgICAgICAgIHRvb2xUaXBEYXRhID0gW11cbiAgICAgICAgICB0b29sVGlwRGF0YVtkYXRlSW5kZXhdID0geFZhbFxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5ob3Zlcih4TW91c2UsIHlNb3VzZSwgdG9vbFRpcERhdGEpXG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE5hbWUgPSAnbW91c2Vtb3ZlJ1xuICAgICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgZXZlbnROYW1lID0gJ2RibGNsaWNrJ1xuICAgICAgfVxuICAgICAgbW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLm9uKGV2ZW50TmFtZSwgbW91c2VFdnQpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgICAgbW91c2VIYW5kbGVyLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgICAvLyBJbiBjYXNlIG9mIHRvdWNoIHNjcmVlbiwgc2ltdWxhdGUgdG9vbHRpcCBob3ZlciBmb3IgZmlyc3QgdGltZSB0byBhdXRvIGNvbXB1dGUgZWxlbWVudE9mZnNldFxuICAgICAgICB0aGlzLmhvdmVyKDAsIDAsIGRhdGFTZXRbMF0pXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0sIDI1KVxuICAgICAgfVxuXG4gICAgfSlcbiAgfVxuXG4gIGhvdmVyICh4UG9zLCB5UG9zLCBkaXNwbGF5RGF0YSkge1xuICAgIC8vIFVwZGF0ZSBkaXNwbGF5UGFuZWwgYW5kIGxpbmUgYmFzZWQgb24geCBwb3NpdGlvblxuICAgIHRoaXMuY3Jvc3NIYWlycyAmJiB0aGlzLmNyb3NzSGFpcnMuc2VsZWN0KCdsaW5lJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7eFBvc30sMClgKVxuICAgICAgLmF0dHIoJ3gxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3kxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgLSBjb25zdGFudHMuVE9PTFRJUF9UT1BfQlVGRkVSKVxuICAgICAgLmF0dHIoJ3gyJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgLmF0dHIoJ3kyJywgKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wKSlcbiAgICB0aGlzLnNob3dIaWRlKHRydWUpXG5cbiAgICBsZXQgcGVyY2VudGFnZURpZmYgPSB4UG9zIC8gdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhcblxuICAgIGlmIChwZXJjZW50YWdlRGlmZiA8IDAuMykge1xuICAgICAgcGVyY2VudGFnZURpZmYgPSAwLjJcbiAgICB9XG4gICAgaWYgKHBlcmNlbnRhZ2VEaWZmID4gMC43KSB7XG4gICAgICBwZXJjZW50YWdlRGlmZiA9IDAuOTVcbiAgICB9XG5cbiAgICBjb25zdCBib3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMudG9vbFRpcERpdilcbiAgICBjb25zdCByb290UG9zID0gZWxlbWVudE9mZnNldCh0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLnJvdW5kKHJvb3RQb3MubGVmdCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHhQb3MgLSBib3gud2lkdGggKiBwZXJjZW50YWdlRGlmZikgKyAncHgnXG4gICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZChyb290UG9zLnRvcCAtIGJveC5oZWlnaHQgLSA1ICsgY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUiAqIDIpICsgJ3B4J1xuXG5cbiAgICB0aGlzLnRvb2xUaXBEaXZcbiAgICAgIC5zdHlsZSgnbGVmdCcsIGxlZnQpXG4gICAgICAuc3R5bGUoJ3RvcCcsIHRvcClcbiAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgLmh0bWwodGhpcy5vcHRzLmZvcm1hdC5jYWxsKHRoaXMub3B0cy5jaGFydCwgZGlzcGxheURhdGEpKSAvLyBVc2VkIGZvcm1hdC5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG5cbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMudG9vbFRpcERpdiAmJiB0aGlzLnRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2dldE9iamVjdCwgaXNGdW5jdGlvbiwgZW1wdHlGbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7YnJ1c2hZLCBkM0V2ZW50LCBkM1RvdWNoZXMsIHpvb219IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2Jpc2VjdG9yfSBmcm9tICdkMy1hcnJheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VzdHVyZVpvb20gZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgb25ab29tOiBlbXB0eUZuLFxuICAgICAgb25ZMVpvb206IGVtcHR5Rm4sXG4gICAgICBvblkyWm9vbTogZW1wdHlGbixcbiAgICB9LCBvcHRzKVxuICB9XG5cbiAgZ2V0Q2xvc2VzdFhBeGlzRGF0YSAoeFZhbCwgZGF0YVNldCkge1xuICAgIGNvbnN0IGRhdGVJbmRleCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIC8vIEZpbmQgbmVhcmVzdCBleGlzdGluZyBkYXRlIGFtb25nIGFycmF5IG9mIHNvcnRlZCBkYXRlXG4gICAgY29uc3QgYmlzZWN0RGF0ZSA9IGJpc2VjdG9yKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZFtkYXRlSW5kZXhdXG4gICAgfSkubGVmdFxuXG4gICAgLy8gRG8gYmluYXJ5IHNlYXJjaCBvZiBkYXRhIHNldCBmcm9tIDJuZCBkYXRhIHNldCB0byBlbmRcbiAgICBjb25zdCBmb3VuZCA9IGJpc2VjdERhdGUoZGF0YVNldCwgeFZhbCwgMSlcblxuXG4gICAgY29uc3QgZFByZXYgPSBkYXRhU2V0W2ZvdW5kIC0gMV1cbiAgICAvLyBnZXQgYmVmb3JlIGZpbmQgZGF0YVNldFxuXG4gICAgY29uc3QgZEZvdW5kID0gZGF0YVNldFtmb3VuZF0gfHwgZFByZXYgLy8gZ2V0IGZpbmQgZGF0YVNldFxuXG4gICAgcmV0dXJuIGRGb3VuZFxuICB9XG5cblxuICB1cGRhdGVicnVzaFhTZWxlY3Rpb24gKHN0YXJ0UG9zLCBlbmRQb3MpIHtcbiAgICB0aGlzLmJydXNoWERpdlxuICAgICAgLmF0dHIoJ3gnLCBzdGFydFBvcylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIChlbmRQb3MgLSBzdGFydFBvcykpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlTGVmdCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlUmlnaHQgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhXG4gICAgaWYgKHhTY2FsZSkge1xuXG4gICAgICAvLyBDcmVhdGUgeCBheGlzIGJydXNoIGZvciBab29tIG9wZXJhdGlvblxuICAgICAgdGhpcy56b29tWCA9IHpvb20oKVxuICAgICAgICAuc2NhbGVFeHRlbnQoWzAsIGRhdGFTZXQubGVuZ3RoXSlcbiAgICAgICAgLnRyYW5zbGF0ZUV4dGVudChbXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCwgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3BdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XV0pXG4gICAgICAgIC5leHRlbnQoW1t0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wXSwgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXSlcbiAgICAgICAgLnRvdWNoYWJsZSgoKSA9PiB0cnVlKVxuXG4gICAgICB0aGlzLnpvb21YRGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Z1xuICAgICAgICAuY2FsbCh0aGlzLnpvb21YKVxuXG5cbiAgICAgIC8vIFVzZSB0aGUgc2FtZSBtb3VzZUJydXNoIGZvciBib3RoIHhCcnVzaCBhbmQgdG9vbHRpcFxuICAgICAgdGhpcy5icnVzaFhEaXYgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzZWxlY3Rpb24nKVxuICAgICAgICAuYXR0cignY3Vyc29yJywgJ21vdmUnKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAnMC4zJylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG5cbiAgICAgIGxldCBpc0dlc3R1cmUgPSBmYWxzZVxuICAgICAgbGV0IHN0YXJ0UG9zID0gMFxuICAgICAgbGV0IGVuZFBvcyA9IDBcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcFxuICAgICAgdGhpcy56b29tWERpdlxuICAgICAgICAuc3R5bGUoJ3RvdWNoLWFjdGlvbicsICdwYW4teScpXG4gICAgICAgIC5vbigndG91Y2hzdGFydC56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBkM1RvdWNoZXModGhpcylcbiAgICAgICAgICBpc0dlc3R1cmUgPSBkM0V2ZW50LnRvdWNoZXMgJiYgZDNFdmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMlxuICAgICAgICAgIGlmIChpc0dlc3R1cmUgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvb2x0aXAgJiYgdG9vbHRpcC5oaWRlKClcbiAgICAgICAgICAgIGNvbnN0IHhQb3MgPSAodG91Y2hlc1swXVswXSAtIHNlbGYub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIHN0YXJ0UG9zID0geFBvc1xuICAgICAgICAgICAgZW5kUG9zID0geFBvc1xuICAgICAgICAgICAgc2VsZi51cGRhdGVicnVzaFhTZWxlY3Rpb24oc3RhcnRQb3MsIGVuZFBvcylcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpXG4gICAgICAgIC5vbigndG91Y2htb3ZlLnpvb20nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGQzVG91Y2hlcyh0aGlzKVxuICAgICAgICAgIGlmIChpc0dlc3R1cmUgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHhQb3MxID0gKHRvdWNoZXNbMF1bMF0gLSBzZWxmLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICBjb25zdCB4UG9zMiA9ICh0b3VjaGVzWzFdWzBdIC0gc2VsZi5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgbGV0IHhNaW4gPSB4UG9zMVxuICAgICAgICAgICAgbGV0IHhNYXggPSB4UG9zMlxuICAgICAgICAgICAgaWYgKHhQb3MxID4geFBvczIpIHtcbiAgICAgICAgICAgICAgeE1pbiA9IHhQb3MyXG4gICAgICAgICAgICAgIHhNYXggPSB4UG9zMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRQb3MgPSB4TWluXG4gICAgICAgICAgICBlbmRQb3MgPSB4TWF4XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWJydXNoWFNlbGVjdGlvbihzdGFydFBvcywgZW5kUG9zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgLm9uKCd0b3VjaGVuZC56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBkM1RvdWNoZXModGhpcylcbiAgICAgICAgICBpZiAoaXNHZXN0dXJlICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB4UG9zID0gKHRvdWNoZXNbMF1bMF0gLSBzZWxmLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICBpZiAoc3RhcnRQb3MgPiB4UG9zKSB7XG4gICAgICAgICAgICAgIHN0YXJ0UG9zID0geFBvc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZFBvcyA8IHhQb3MpIHtcbiAgICAgICAgICAgICAgZW5kUG9zID0geFBvc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydFZhbCA9IHhTY2FsZS5pbnZlcnQoc3RhcnRQb3MpXG4gICAgICAgICAgICBjb25zdCBzdGFydER0ID0gTWF0aC5yb3VuZChzdGFydFZhbClcblxuICAgICAgICAgICAgY29uc3QgZW5kVmFsID0geFNjYWxlLmludmVydChlbmRQb3MpXG4gICAgICAgICAgICBjb25zdCBlbmREdCA9IE1hdGgucm91bmQoZW5kVmFsKVxuICAgICAgICAgICAgc2VsZi51cGRhdGVicnVzaFhTZWxlY3Rpb24oc3RhcnRQb3MsIGVuZFBvcylcblxuICAgICAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ab29tKSAmJiBzZWxmLm9wdHMub25ab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBzdGFydER0LCBlbmREdClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi51cGRhdGVicnVzaFhTZWxlY3Rpb24oMCwgMClcbiAgICAgICAgICBzdGFydFBvcyA9IDBcbiAgICAgICAgICBlbmRQb3MgPSAwXG4gICAgICAgICAgaXNHZXN0dXJlID0gZmFsc2VcbiAgICAgICAgfSwgdHJ1ZSlcblxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIGxlZnQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1sZWZ0JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geUF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlMZWZ0RGl2LmNhbGwoc2VsZi5icnVzaFlMZWZ0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlTGVmdC5pbnZlcnQpXG5cblxuICAgICAgICBjb25zdCBkMSA9IGQwICYmIGQwLm1hcChNYXRoLnJvdW5kKVxuICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWSBheGlzIHVwb24gdmVydGljYWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ZMVpvb20pICYmIHNlbGYub3B0cy5vblkxWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIHJpZ2h0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktcmlnaHQnKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZDNFdmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmJydXNoWVJpZ2h0RGl2LmNhbGwoc2VsZi5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZVJpZ2h0LmludmVydClcblxuXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWTIgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTJab29tKSAmJiBzZWxmLm9wdHMub25ZMlpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuem9vbVgpIHtcbiAgICAgIHRoaXMuem9vbVhcbiAgICAgICAgLnRyYW5zbGF0ZUV4dGVudChbXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCwgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3BdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0LCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcF0sXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hYRGl2XG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZTGVmdClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAoY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQpXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZTGVmdERpdiAmJiB0aGlzLmJydXNoWUxlZnREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgJiYgdGhpcy5icnVzaFlSaWdodERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFhEaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWUxlZnREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5jYWxsKHRoaXMuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LmNhbGwodGhpcy5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7Z2V0T2JqZWN0LCBpc0Z1bmN0aW9uLCBlbXB0eUZufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHticnVzaFgsIGJydXNoWSwgZDNFdmVudH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBvblpvb206IGVtcHR5Rm4sXG4gICAgICBvblkxWm9vbTogZW1wdHlGbixcbiAgICAgIG9uWTJab29tOiBlbXB0eUZuXG4gICAgfSwgb3B0cylcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVMZWZ0ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVSaWdodCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGxldCBicnVzaE92ZXJsYXkgPSBudWxsXG4gICAgaWYgKHhTY2FsZSkge1xuICAgICAgLy8gQ3JlYXRlIHggYXhpcyBicnVzaCBmb3IgWm9vbSBvcGVyYXRpb25cbiAgICAgIHRoaXMuYnJ1c2hYID0gYnJ1c2hYKClcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICAvLyBVc2UgdGhlIHNhbWUgbW91c2VCcnVzaCBmb3IgYm90aCB4QnJ1c2ggYW5kIHRvb2x0aXBcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ID0gdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hYKVxuXG4gICAgICBicnVzaE92ZXJsYXkgPSB0aGlzLmJydXNoWERpdi5zZWxlY3RBbGwoJ3JlY3Qub3ZlcmxheScpXG5cbiAgICAgIC8vIENhbGwgdGhpcyBldmVudCB3aGVuIHhBeGlzIGJydXNoIGlzIGVuZGVkXG4gICAgICB0aGlzLmJydXNoWC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh4U2NhbGUuaW52ZXJ0KVxuICAgICAgICAvLyBmaW5kIHgxIGFuZCB4MlxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkMSA9IGQwICYmIGQwLm1hcChNYXRoLnJvdW5kKSAvLyByb3VuZCBib3RoIHZhbHVlc1xuXG4gICAgICAgIC8vIGNsZWFyIEJydXNoXG4gICAgICAgIHNlbGYuYnJ1c2hYRGl2LmNhbGwoc2VsZi5icnVzaFgubW92ZSwgbnVsbClcbiAgICAgICAgYnJ1c2hPdmVybGF5LnN0eWxlKCdjdXJzb3InLCAnYXV0bycpXG5cbiAgICAgICAgLy8gZDEgPSBkMVxuICAgICAgICAvLyAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAvLyAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnhBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWCBheGlzIHVwb24gaG9yaXpvbnRhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWm9vbSkgJiYgc2VsZi5vcHRzLm9uWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIGxlZnQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1sZWZ0JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geUF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlMZWZ0RGl2LmNhbGwoc2VsZi5icnVzaFlMZWZ0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlTGVmdC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFkgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTFab29tKSAmJiBzZWxmLm9wdHMub25ZMVpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCByaWdodCBzY2FsZSBvcGVyYXRpb25cbiAgICBpZiAoeVNjYWxlUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hZLXJpZ2h0JylcblxuICAgICAgdGhpcy5icnVzaFlSaWdodC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlSaWdodERpdi5jYWxsKHNlbGYuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh5U2NhbGVSaWdodC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZMiBheGlzIHVwb24gdmVydGljYWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ZMlpvb20pICYmIHNlbGYub3B0cy5vblkyWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIGJydXNoT3ZlcmxheSAmJiB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gbW91c2UgaXMgY2xpY2tlZCBvciBkb3duLCBlbmFibGUgem9vbSBicnVzaCBhbmQgaXRzIG1vdXNlIGN1cnNvclxuICAgICAgYnJ1c2hPdmVybGF5XG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2NvbC1yZXNpemUnKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2F1dG8nKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLmJydXNoWCkge1xuICAgICAgdGhpcy5icnVzaFguZXh0ZW50KFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZTGVmdClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAoY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQpXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZTGVmdERpdiAmJiB0aGlzLmJydXNoWUxlZnREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgJiYgdGhpcy5icnVzaFlSaWdodERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFhEaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWUxlZnREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5jYWxsKHRoaXMuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LmNhbGwodGhpcy5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9