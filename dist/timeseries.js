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
      if (xScale && _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Touches"]) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL21vdXNlLWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvTGluZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TdGFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvVGltZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vdmMvLi96b29tL0dlc3R1cmVab29tLmpzIiwid2VicGFjazovL3ZjLy4vem9vbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwic2VsZiIsIkRJUl9MRUZUIiwiYXhpc0xlZnQiLCJESVJfUklHSFQiLCJheGlzUmlnaHQiLCJjaGFydFdpZHRoIiwiaXNGdW5jdGlvbiIsImV4dGVybmFsRm9ybWF0dGVyIiwidmFsIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJUaW1lU2VyaWVzQ2hhcnQiLCJjb250YWluZXIiLCJzdGFydFRpbWUiLCJEYXRlIiwiZGF0YVBhcnNlciIsIkJhc2ljVFNQYXJzZXIiLCJDaGFydEF4aXNQYXJzZXIiLCJFcnJvciIsImlzT2JqZWN0Iiwib3B0aW9ucyIsImRhdGFFeGVjdXRvciIsImFkZERlZmF1bHRUU09wdGlvbnMiLCJjaGFydEluaXRpbGl6ZSIsImRyYXciLCJheGlzT3B0aW9ucyIsInlSYW5nZSIsInlSYW5nZTIiLCJ0aW1lSW5mbyIsImdldE9iamVjdCIsInlBeGlzIiwiY2hhcnRDb21wb25lbnRzQXJyIiwicHVzaCIsInlBeGlzMiIsInRpbWVSYW5nZSIsInhBeGlzIiwidG9vbHRpcE9wdHMiLCJ0b29sdGlwIiwiVG9vbHRpcCIsInpvb21PcHRzIiwibW91c2VIYW5kbGVyIiwiTW91c2VIYW5kbGVyIiwiem9vbSIsInpvb21GbiIsIlpvb20iLCJpc1RvdWNoU2NyZWVuIiwiR2VzdHVyZVpvb20iLCJ6b29tQnJ1c2giLCJvblpvb20iLCJvblhab29tIiwib25ZMVpvb20iLCJvblkyWm9vbSIsInNlcmllcyIsIlRpbWVTZXJpZXMiLCJsZWdlbmQiLCJsZWdlbmRzIiwiVGltZVNlcmllc0xlZ2VuZCIsImxlZ2VuZFByZWZpeCIsImRpc2FibGVTZXJpZXNUb2dnbGUiLCJvbkxlZ2VuZENoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhZnRlckRyYXciLCJyZVNjYWxlWUF4aXMiLCJjaGFydFJlc3BvbnNpdmUiLCJ0cmlnZ2VyTW91c2VBY3Rpb24iLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJvbkNvbXBsZXRlIiwiYXhpc1NwZWNpZmllciIsInRpY2tWYWxBcnIiLCJkaWZmVmFsIiwicmFuZ2VWYWwiLCJ5TWF4IiwiYXBwbHlZMUF4aXMiLCJhcHBseVkyQXhpcyIsIm1vZGlmeUF4aXNQcm9wcyIsInJlU2NhbGVBeGlzIiwicmVxdWlyZWRXaWR0aCIsImNsYXNzIiwibWF4VGV4dCIsImR1bW15RyIsInN2ZyIsInRpY2tzQXJyIiwic2VsZWN0IiwiZWFjaCIsInRpY2tIdG1sIiwiZGF0YSIsImVudGVyIiwiU3RyaW5nIiwiZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoIiwicm91bmQiLCJZX0FYSVNfU1BBQ0UiLCJjaGFydEZ1bGxTcGFjZSIsIndpZHRoIiwiQ2hhcnQiLCJkYXRhT3B0aW9ucyIsImNvbnN0cnVjdENoYXJ0RGF0YSIsImNvbnN0cnVjdFhBeGlzSW5mbyIsImNvbnN0cnVjdFBsb3RJbmZvIiwiY29uc3RydWN0WUF4aXNJbmZvIiwiZXJyIiwib25FcnJvciIsInJlc0pzb24iLCJzZXJpZXNEYXRhIiwidGltZXNlcmllcyIsImNvbHVtbnMiLCJ2YWx1ZXMiLCJ2YWxpZEpTT05UeXBlIiwidGltZVN0YW1wSW5kZXgiLCJmaXJzdFRpbWUiLCJpc0RhdGUiLCJzdGFydCIsImZvckVhY2giLCJnZXREYXRlRnJvbUVwb2MiLCJjaGFydERhdGEiLCJkYXRhSW5kZXgiLCJlYWNoUGxvdFNldCIsInBsb3RTZXQiLCJwbG90SW5mbyIsImZpbmRFYWNoUGxvdFJhbmdlIiwia2V5IiwibWluIiwibWF4IiwibWluVmFsIiwibWF4VmFsIiwic3RhY2siLCJwbG90IiwiZWFjaFBsb3QiLCJJbmZpbml0eSIsInBsb3REYXRhIiwidmFsdWVSYW5nZSIsInZhbERhdGEiLCJtZW1iZXJBcnIiLCJzdGFja09yZGVyTWVtYmVycyIsInN1bSIsIm1lbWJlciIsIm5hbWUiLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJpc0Jvb2xlYW4iLCJiYXJPcmRlck1lbWJlcnMiLCJyZWdpc3RlckZuIiwibW91c2VCcnVzaCIsInRvcCIsImNhbGxiYWNrIiwiZnVuIiwiTGluZSIsImxpbmVEYXRhIiwieUF4aXNUYXJnZXQiLCJ4QXhpc1RhcmdldCIsIngiLCJpbmRleE9mIiwieSIsImxpbmUiLCJkZWZpbmVkIiwibGluZVRhZyIsImNsaXBFbGVtZW50IiwibGluZVdpZHRoIiwic2VyaWVzTmFtZSIsIlN0YWNrQXJlYSIsInN0YWNrRGF0YSIsInN0YWNrT3JkZXJJbmRleCIsImZpbHRlciIsImVsZSIsIm1hcCIsImQzU3RhY2siLCJhcmVhIiwieTAiLCJ5MSIsImtleXMiLCJvcmRlciIsInN0YWNrT3JkZXJOb25lIiwib2Zmc2V0Iiwic3RhY2tPZmZzZXROb25lIiwic3RhY2tWaXNpYmxlT3JkZXIiLCJzdGFja0xheWVyIiwic3RhY2tNZW1iZXIiLCJwbG90U2VyaWVzIiwiaXNBcnJheSIsIlNlcmllcyIsIlRpbWVTZXJpZXNUb29sdGlwIiwiY3Jvc3NIYWlycyIsImVuYWJsZSIsImZvcm1hdCIsInRvb2xUaXBEaXYiLCJUT09MVElQX1RPUF9CVUZGRVIiLCJyZWdpc3RlciIsInhTY2FsZSIsImRhdGVJbmRleCIsImRhdGFTZXQiLCJiaXNlY3REYXRlIiwiYmlzZWN0b3IiLCJtb3VzZUV2dCIsInhNb3VzZSIsImQzTW91c2UiLCJ5TW91c2UiLCJ4VmFsIiwiaW52ZXJ0IiwiZm91bmQiLCJkQmVmb3JlIiwiZFByZXYiLCJkRm91bmQiLCJ0b29sVGlwRGF0YSIsImRhdGFQYXJzZUxlbiIsInZpc2libGVEYXRhSW5kZXgiLCJwbCIsIm11bHRpQXJyTWFwIiwiZFNldCIsImluZGV4Iiwic29ydCIsIm1heEluZCIsIm1wIiwiYXJyU2V0IiwiZGF0ZUludFJhbmdlIiwiYWJzIiwiaG92ZXIiLCJldmVudE5hbWUiLCJvbiIsImhpZGUiLCJzZXRUaW1lb3V0IiwieFBvcyIsInlQb3MiLCJkaXNwbGF5RGF0YSIsInNob3dIaWRlIiwicGVyY2VudGFnZURpZmYiLCJib3giLCJlbGVtZW50T2Zmc2V0Iiwicm9vdFBvcyIsImhlaWdodCIsImh0bWwiLCJzdGFydFBvcyIsImVuZFBvcyIsImJydXNoWERpdiIsInlTY2FsZUxlZnQiLCJ5U2NhbGVSaWdodCIsImQzVG91Y2hlcyIsInpvb21YIiwic2NhbGVFeHRlbnQiLCJ0cmFuc2xhdGVFeHRlbnQiLCJleHRlbnQiLCJ0b3VjaGFibGUiLCJ6b29tWERpdiIsImlzR2VzdHVyZSIsInRvdWNoZXMiLCJkM0V2ZW50IiwidXBkYXRlYnJ1c2hYU2VsZWN0aW9uIiwieFBvczEiLCJ4UG9zMiIsInhNaW4iLCJ4TWF4Iiwic3RhcnRWYWwiLCJzdGFydER0IiwiZW5kVmFsIiwiZW5kRHQiLCJicnVzaFlMZWZ0IiwiYnJ1c2hZIiwiYnJ1c2hZTGVmdERpdiIsInNlbGVjdGlvbiIsIm1vdmUiLCJkMCIsImQxIiwiYnJ1c2hZUmlnaHQiLCJicnVzaFlSaWdodERpdiIsImJydXNoT3ZlcmxheSIsImJydXNoWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsZ0JB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Q0FBbEI7QUFDQSxXQUFLdVEsYUFBTCxJQUFzQixLQUFLQSxhQUFMLENBQW1CdFMsT0FBbkIsQ0FBMkIsV0FBM0IsRUFBd0MsQ0FBQytCLFFBQXpDLENBQXRCO0FBQ0EsV0FBSzZRLGNBQUwsSUFBdUIsS0FBS0EsY0FBTCxDQUFvQjVTLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDLENBQUMrQixRQUExQyxDQUF2QjtBQUNBLFdBQUtyRixJQUFMLENBQVVvQixPQUFWLEdBQW9CaUUsUUFBcEI7QUFDRDs7OzZCQUVTO0FBQ1IsVUFBSSxLQUFLK08sU0FBVCxFQUFvQjtBQUNsQixhQUFLQSxTQUFMLENBQWV4UCxJQUFmLENBQW9CLEtBQUt3UixNQUFMLENBQVlOLElBQWhDLEVBQXNDLElBQXRDO0FBQ0EsYUFBSzFCLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlOU8sTUFBZixFQUFsQjtBQUNEO0FBQ0QsVUFBSSxLQUFLc1EsYUFBVCxFQUF3QjtBQUN0QixhQUFLQSxhQUFMLENBQW1CaFIsSUFBbkIsQ0FBd0IsS0FBSzhRLFVBQUwsQ0FBZ0JJLElBQXhDLEVBQThDLElBQTlDO0FBQ0EsYUFBS0YsYUFBTCxDQUFtQnRRLE1BQW5CO0FBQ0Q7QUFDRCxVQUFJLEtBQUs0USxjQUFULEVBQXlCO0FBQ3ZCLGFBQUtBLGNBQUwsQ0FBb0J0UixJQUFwQixDQUF5QixLQUFLcVIsV0FBTCxDQUFpQkgsSUFBMUMsRUFBZ0QsSUFBaEQ7QUFDQSxhQUFLSSxjQUFMLENBQW9CNVEsTUFBcEI7QUFDRDtBQUNELFdBQUt0RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBek0rQnVGLDhEOztBQUFia0MsbUUiLCJmaWxlIjoidGltZXNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7XG4gIGF4aXNCb3R0b20sIGF4aXNUb3AsIGF4aXNMZWZ0LCBheGlzUmlnaHQsXG4gIHNjYWxlQmFuZCwgc2NhbGVMaW5lYXIsIHNjYWxlVGltZVxufSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtlbXB0eUZuLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgdHJ1bmNhdGVUZXh0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgb3JpZW50OiAnbGVmdCcsXG4gICAgICBsYWJlbDogJycsXG4gICAgICB1bml0OiAnJyxcbiAgICAgIHJhbmdlU2NhbGU6IFswLCAxMDAwXSxcbiAgICAgIGRvbWFpblNjYWxlOiBbMCwgMTAwXSxcbiAgICAgIHNjYWxlVHlwZTogJycsXG4gICAgICBheGlzQ2xhbXA6IHRydWUsXG4gICAgICB0aWNrTnVtYmVyOiBudWxsLFxuICAgICAgcm90YXRlVGV4dDogZmFsc2UsXG4gICAgICB0ZXh0TGltaXQ6IDgsXG4gICAgICB0aWNrRm9ybWF0dGVyOiBmYWxzZSwgLy8gVXNlIGQzIHRpY2tGb3JtYXR0ZXJcbiAgICAgIHNob3dHcmlkTGluZXM6IGZhbHNlLFxuICAgICAgdGlja1BhZGRpbmc6IGNvbnN0YW50cy5USUNLX1BBRERJTkcsXG4gICAgICBzY2FsZVBhZGRpbmc6IGNvbnN0YW50cy5TQ0FMRV9QQURESU5HLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgLy8gQ3JlYXRlIEF4aXMgYW5kIFNjYWxlIGJhc2VkIG9uIGlucHV0IG9wdGlvbnNcbiAgICBpZiAodGhpcy5vcHRzLnNjYWxlVHlwZSA9PT0gJ3NjYWxlQmFuZCcpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUJhbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgaWYgKHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVUaW1lKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSAneCcpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzQm90dG9tKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1RvcCgpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpKVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gSG9sZHMgYWxsIHRpY2sgdmFsdWVzIHRoYXQgYXhpcyBzaG93c1xuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzTGVmdCgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc1JpZ2h0KClcbiAgICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoMClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpKSB7XG4gICAgICAgIC8vIElmIGV4dGVybmFsIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgbW9kaWZ5IGZvcm1hdHRlciB0byBwb3B1bGF0ZSB0aWNrVmFsdWVzXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRm9ybWF0dGVyID0gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXJcbiAgICAgICAgdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgc2VsZi50aWNrVmFsdWVzLnVuc2hpZnQodmFsKVxuICAgICAgICAgIHJldHVybiBleHRlcm5hbEZvcm1hdHRlcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLnRpY2tQYWRkaW5nID4gMCkge1xuICAgICAgdGhpcy5heGlzLnRpY2tQYWRkaW5nKHRoaXMub3B0cy50aWNrUGFkZGluZylcbiAgICB9XG4gIH1cblxuICBtb2RpZnlBeGlzUHJvcHMgKG9wdHMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBvcHRzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgwLCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0fSlgXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGh9LDApYFxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGB2Yy1heGlzIHZjLWF4aXMtJHt0aGlzLm9wdHMub3JpZW50fSB2Yy1heGlzLSR7dGhpcy5vcHRzLmNsYXNzTmFtZX1gKVxuXG5cbiAgICAvLyBJZiBubyBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQsIGF4aXMgdXNlcyBkMyBkZWZhdWx0IGZvcm1hdHRlclxuICAgIGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpICYmIHRoaXMuYXhpcy50aWNrRm9ybWF0KHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKVxuXG4gICAgLy8gQWRkIExhYmVsIHRvIEF4aXNcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnID0gdGhpcy5heGlzVGFnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzLWxhYmVsJylcbiAgICAgICAgLnRleHQodGhpcy5vcHRzLmxhYmVsKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIC8vIElGIG5vdCB2aXNpYmxlLCBEb250IHNob3cgdGhlIGF4aXMsIGJ1dCBzdGlsbCBzY2FsZSBhbmQgcGxvdCBvbiBncmFwaFpvbmUsIHNvIHRoYXQgYWxsIHNlcmllcyBjYW4gYmUgcGxvdHRlZFxuICAgICF0aGlzLm9wdHMudmlzaWJsZSAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgdHJ1ZSlcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgZ3JhcGggQXhpcyBiYXNlZCBvbiBuZXcgd2lkdGggYW5kIG1vZGlmeSByYW5nZSwgZG9tYWluIGFuZCB0aWNrc1xuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0JPVFRPTSkge1xuICAgICAgdGhpcy5vcHRzLnJhbmdlU2NhbGUgPSBbMCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGhdXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG5cbiAgICAvLyBQb3NpdGlvbiBsYWJlbCwgc2NhbGUsIHRpY2tzLCBheGlzIGJhc2VkIG9uIGNoYXJ0IHdpZHRoXG4gICAgaWYgKHRoaXMub3B0cy5sYWJlbCkge1xuICAgICAgbGV0IHhUcmFucyA9IDBcbiAgICAgIGxldCB5VHJhbnMgPSAwXG4gICAgICBsZXQgcm90YXRlID0gMFxuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHhUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyAyKVxuICAgICAgICB5VHJhbnMgPSBjb25zdGFudHMuWF9BWElTX0xBQkVMX1lcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUIHx8IHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgICAgIHhUcmFucyA9IC0odGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KSArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gMjcwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeFRyYW5zID0gdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSXG4gICAgICAgICAgcm90YXRlID0gOTBcbiAgICAgICAgfVxuICAgICAgICB5VHJhbnMgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt4VHJhbnN9LCR7eVRyYW5zfSkgcm90YXRlKCR7cm90YXRlfSlgKVxuICAgIH1cblxuICAgIHRoaXMudGlja1ZhbHVlcyA9IFtdXG5cbiAgICBsZXQgZG9tYWluU2NhbGUgPSBbdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdLCB0aGlzLm9wdHMuZG9tYWluU2NhbGVbdGhpcy5vcHRzLmRvbWFpblNjYWxlLmxlbmd0aCAtIDFdXVxuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgZG9tYWluU2NhbGUgPSB0aGlzLm9wdHMuZG9tYWluU2NhbGVcbiAgICAgIHRoaXMuc2NhbGVcbiAgICAgICAgLnBhZGRpbmcodGhpcy5vcHRzLnNjYWxlUGFkZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRzLmF4aXNDbGFtcCAmJiB0aGlzLnNjYWxlLmNsYW1wKCkgLy8gQ2xhbXBzIG91dHNpZGUgcmFuZ2UgdmFsdWUgd2l0aGluIHNwZWN0aWZlZCByYW5nZSBhbmQgZG9tYWluXG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZS5yYW5nZSh0aGlzLm9wdHMucmFuZ2VTY2FsZSlcbiAgICAgIC5kb21haW4oZG9tYWluU2NhbGUpXG5cbiAgICB0aGlzLmF4aXMuc2NhbGUodGhpcy5zY2FsZSlcblxuICAgIGlmIChpc051bWJlcih0aGlzLm9wdHMudGlja051bWJlcikpIHtcbiAgICAgIGxldCB0aWNrVmFsID0gdGhpcy5vcHRzLnRpY2tOdW1iZXJcbiAgICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4JyAmJiB0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgLy8gbW9kaWZ5IHh0aWNrIHRvIGRpc3BsYXkgbGVzcyB0aWNrcyBvbiBsb3dlciBjaGFydCB3aWR0aCBvciBoYXMgbGVzcyBkYXlzXG4gICAgICAgIGNvbnN0IG5ld1RpY2sgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gNjApXG4gICAgICAgIGNvbnN0IGRheUxlbmd0aCA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5kb21haW5TY2FsZVsxXSAtIHRoaXMub3B0cy5kb21haW5TY2FsZVswXSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpICsgMVxuICAgICAgICBpZiAoZGF5TGVuZ3RoID4gMiAmJiBkYXlMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IGRheUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWludXRlTGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDEwMDApKVxuICAgICAgICBpZiAobWludXRlTGVuZ3RoIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBtaW51dGVMZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdUaWNrIDwgdGlja1ZhbCkge1xuICAgICAgICAgIHRpY2tWYWwgPSBuZXdUaWNrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5heGlzLnRpY2tzKHRpY2tWYWwpXG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgdGhpcy5heGlzLnRpY2tzKHRoaXMub3B0cy50aWNrTnVtYmVyKCkpXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyICYmIHRoaXMuYXhpc1RhZy5hdHRyKCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybUF0dHIpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNob3dHcmlkTGluZXMgJiYgdGhpcy5vcHRzLnBvc2l0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgIH1cblxuICAgIHRoaXMuYXhpc1RhZy5jYWxsKHRoaXMuYXhpcylcblxuXG4gICAgY29uc3QgbGltaXRUZXh0ID0gdGhpcy5vcHRzLnRleHRMaW1pdFxuICAgIGNvbnN0IHRpY2tGbXQgPSBpc0Z1bmN0aW9uKHRoaXMub3B0cy50aWNrRm9ybWF0dGVyKSA/IHRoaXMub3B0cy50aWNrRm9ybWF0dGVyIDogZW1wdHlGblxuXG4gICAgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAnc2xhbnQnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLmF0dHIoJ3knLCAnOCcpXG4gICAgICAgIC5hdHRyKCdkeCcsICctMS4wZW0nKVxuICAgICAgICAuYXR0cignZHknLCAnLjE1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtNjUpJylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5yb3RhdGVUZXh0ID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLmF4aXNUYWdcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3gnLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MCknKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1bmNhdGVUZXh0KHRpY2tGbXQoZCksIGxpbWl0VGV4dClcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlbW92ZSBBeGlzIEluc3RhbmNlXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZyAmJiB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5heGlzVGFnICYmIHRoaXMuYXhpc1RhZy5yZW1vdmUoKVxuICAgIHRoaXMuc2NhbGUgPSBudWxsXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IEF4aXMgZnJvbSAnQC9heGlzJ1xuaW1wb3J0IHthZGREZWZhdWx0VFNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCBCYXNpY1RTUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlcidcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9UaW1lU2VyaWVzVG9vbHRpcCdcbmltcG9ydCBNb3VzZUhhbmRsZXIgZnJvbSAnQC9tb3VzZS1oYW5kbGVyJ1xuaW1wb3J0IFpvb20gZnJvbSAnQC96b29tJ1xuaW1wb3J0IEdlc3R1cmVab29tIGZyb20gJ0Avem9vbS9HZXN0dXJlWm9vbSdcbmltcG9ydCBUaW1lU2VyaWVzTGVnZW5kIGZyb20gJ0AvbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQnXG5pbXBvcnQgVGltZVNlcmllcyBmcm9tICdAL3Nlcmllcy9UaW1lU2VyaWVzJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc0NoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBvcHRzKSB7XG4gICAgb3B0cy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGFQYXJzZXIgaXMgbm90IHBhc3NlZFxuICAgIGlmICghb3B0cy5kYXRhUGFyc2VyKSB7XG4gICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNUU1BhcnNlcihvcHRzKVxuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgZGF0YVBhcnNlciBleGlzdHMgYW5kIGl0cyBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlclxuICAgIGlmICghKG9wdHMuZGF0YVBhcnNlciBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGFQYXJzZXIgaW4gb3B0aW9ucyBkb3Nlbid0IGhhdmUgaW1wbGVtZW50YXRpb24gb2YgQ2hhcnRBeGlzUGFyc2VyXCIpXG4gICAgfVxuXG4gICAgLy8gQ2FsbCBQYXJlbnQgSW1wbFxuICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0cylcblxuICAgIC8vIFJ1biB0aGUgZGF0YVBhcnNlciBmb3IgZ2l2ZW4gSlNPTiBkYXRhXG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuZGF0YVBhcnNlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRhdGFQYXJzZXIuZGF0YUV4ZWN1dG9yKCkpXG4gICAgfVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRUU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gSW5pdGlsaXplIGFsbCBjaGFydCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGltZVNlcmllc0NoYXJ0IG9uIGV4YWN0IG9yZGVyIGJhc2VkIG9uIGVhY2ggZGVwZW5kZW5jaWVzXG4gICAgdGhpcy5jaGFydEluaXRpbGl6ZSgpXG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5kcmF3KCkpXG4gIH1cblxuICBjaGFydEluaXRpbGl6ZSAoKSB7XG4gICAgbGV0IGF4aXNPcHRpb25zXG4gICAgY29uc3QgeVJhbmdlID0gdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgIGNvbnN0IHlSYW5nZTIgPSB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG5cbiAgICBpZiAoeVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5sZWZ0JylcbiAgICAgIHRoaXMueUF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpcylcbiAgICB9XG5cbiAgICBpZiAoeVJhbmdlMikge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMucmlnaHQnKVxuICAgICAgdGhpcy55QXhpczIgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdyaWdodCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZTIsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlIChjaGFydCBBUEkpXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMyKVxuICAgIH1cblxuICAgIGlmICh0aW1lSW5mby50aW1lUmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnhBeGlzLmJvdHRvbScpXG4gICAgICB0aGlzLnhBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd4JyxcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgcmFuZ2VTY2FsZTogWzAsIHRoaXMuY2hhcnRXaWR0aF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB0aW1lSW5mby50aW1lUmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnhBeGlzKVxuICAgIH1cblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGNvbnN0IHpvb21PcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnpvb20nLCB7fSlcbiAgICBpZiAoKHRvb2x0aXBPcHRzLnZpc2libGUgfHwgem9vbU9wdHMudmlzaWJsZSkpIHtcbiAgICAgIHRoaXMubW91c2VIYW5kbGVyID0gbmV3IE1vdXNlSGFuZGxlcih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5tb3VzZUhhbmRsZXIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIGxldCB6b29tRm4gPSBab29tXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgem9vbUZuID0gR2VzdHVyZVpvb21cbiAgICAgIH1cbiAgICAgIHRoaXMuem9vbUJydXNoID0gbmV3IHpvb21Gbih7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBvblpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWFpvb20sXG4gICAgICAgIG9uWTFab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblkxWm9vbSxcbiAgICAgICAgb25ZMlpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWTJab29tXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnpvb21CcnVzaClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNlcmllcykge1xuICAgICAgdGhpcy5zZXJpZXMgPSBuZXcgVGltZVNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGVnZW5kLnZpc2libGUpIHtcbiAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBUaW1lU2VyaWVzTGVnZW5kKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIGxlZ2VuZFByZWZpeDogdGhpcy5vcHRpb25zLmxlZ2VuZC5sZWdlbmRQcmVmaXgsXG4gICAgICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUCxcbiAgICAgICAgZGlzYWJsZVNlcmllc1RvZ2dsZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5kaXNhYmxlU2VyaWVzVG9nZ2xlLFxuICAgICAgICBvbkxlZ2VuZENoYW5nZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5vbkxlZ2VuZENoYW5nZVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdUaW1lU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy5jb250YWluZXIuc2VsZWN0KCdzdmcgJyArIHJlU2NhbGVBeGlzW2F4aXNdLmNsYXNzKS5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9IHNlbGVjdCh0aGlzKS50ZXh0KCkgfHwgJydcbiAgICAgICAgaWYgKHRpY2tIdG1sLmxlbmd0aCA+IHJlU2NhbGVBeGlzW2F4aXNdLm1heFRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dCA9IHRpY2tIdG1sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgICAuZGF0YShbcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dF0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChTdHJpbmcpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgLy8gQ29tcHV0ZSByZXF1aXJlZFdpZHRoIGZvciB0aGUgTWF4IHRleHRcbiAgICAgICAgICByZXF1aXJlZFdpZHRoID0gdGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxuICAgICAgICB9KVxuXG4gICAgICAvLyBVcGRhdGUgcmVzcGVjdGl2ZSBtYXJnaW4gdG8gZml0IGluIHRpY2tzIHRleHRcbiAgICAgIHRoaXMubWFyZ2luW2F4aXNdID0gTWF0aC5yb3VuZChyZXF1aXJlZFdpZHRoKSArIGNvbnN0YW50cy5ZX0FYSVNfU1BBQ0VcblxuICAgIH1cbiAgICBkdW1teUcucmVtb3ZlKClcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9ICh0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IHtnZXREYXRlRnJvbUVwb2MsIGdldE9iamVjdCwgcmVmaW5lU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc0Jvb2xlYW59IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVFNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgdGltZXNlcmllcyBKU09OIHBhcnNpbmcgOicsIGVycilcbiAgICAgIHRoaXMub3B0cy5vbkVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKU09OIHJlY2VpdmVkIC0gRXJyb3Igb24gdGltZXNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi50aW1lc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICAvLyBGaW5kIHNlY29uZHMgaW4gdW5pdEFyciB0byBmaW5kIHRoZSB0aW1lU3RhbXBJbmRleFxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gMFxuICAgIGNvbnN0IGZpcnN0VGltZSA9IGRhdGFbMF1bdGltZVN0YW1wSW5kZXhdXG4gICAgaWYgKCF2YWxpZEpTT05UeXBlIHx8ICEoaXNOdW1iZXIoZmlyc3RUaW1lKSB8fCBpc0RhdGUoZmlyc3RUaW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkJylcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQgPSAwXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoc3RhcnQgPiBkW3RpbWVTdGFtcEluZGV4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVGltZSBzZXJpZXMgSlNPTiByZWNlaXZlZDogVGltZXN0YW1wIFZhbHVlcyBtdXN0IGJlIGluIGFzY2VuZGluZyBvcmRlcicpXG4gICAgICB9XG4gICAgICBzdGFydCA9IGRbdGltZVN0YW1wSW5kZXhdXG4gICAgICBkW3RpbWVTdGFtcEluZGV4XSA9IGdldERhdGVGcm9tRXBvYyhkW3RpbWVTdGFtcEluZGV4XSwgdHJ1ZSkgLy8gY29udmVydCBFUE9DIHRvIGRhdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IFtzZXJpZXNEYXRhWzBdW2RhdGFJbmRleF0sIHNlcmllc0RhdGFbKHNlcmllc0RhdGEubGVuZ3RoIC0gMSldW2RhdGFJbmRleF1dXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQgZmluZEVhY2hQbG90UmFuZ2UgPSBmYWxzZVxuICAgIGxldCBrZXlcbiAgICBsZXQgeVJhbmdlID0gbnVsbFxuICAgIGxldCB5UmFuZ2UyID0gbnVsbFxuXG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWF4KSkge1xuICAgICAgICB5UmFuZ2UgPSBbeUF4aXMubWluLCB5QXhpcy5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzMikge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1heCkpIHtcbiAgICAgICAgeVJhbmdlMiA9IFt5QXhpczIubWluLCB5QXhpczIubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHlSYW5nZSBpcyBub3Qgc2V0IGZyb20gZ3JhcGhPcHRpb25zLCB0aGVuIGdvIGluc2lkZVxuICAgIGlmICgoeUF4aXMgJiYgIXlSYW5nZSkgfHwgKHlBeGlzMiAmJiAheVJhbmdlMikpIHtcblxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5taW5WYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5tYXhWYWwpKSB7XG4gICAgICAgICAgZmluZEVhY2hQbG90UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmxlbmd0aCkgfHwgZmluZEVhY2hQbG90UmFuZ2UpIHtcblxuICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAvLyBSZXNldCByYW5nZSBmb3IgZWFjaCBwbG90IGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgY29uc3QgZWFjaFBsb3QgPSBlYWNoUGxvdFNldFtwbG90XVxuICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gSW5maW5pdHlcbiAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IHN0YWNrIHJhbmdlIGZvciBlYWNoIHN0YWNrIGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBDYWxjdWxhdGUgTWF4IGFuZCBNaW4gZm9yIGVhY2ggcGxvdHMgc2VyaWVzXG4gICAgICAgIGxldCB2YWxEYXRhID0gMFxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGxvdCBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgICBjb25zdCBlYWNoUGxvdCA9IGVhY2hQbG90U2V0W3Bsb3RdXG4gICAgICAgICAgICAgIHZhbERhdGEgPSBkW2VhY2hQbG90LmRhdGFJbmRleF1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPCBlYWNoUGxvdC5taW5WYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHZhbERhdGEgPiBlYWNoUGxvdC5tYXhWYWwpIHtcbiAgICAgICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgIHN1bSArPSAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPyBkW2VhY2hQbG90U2V0W21lbWJlci5uYW1lXS5kYXRhSW5kZXhdIDogMClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChzdW0gPCBwbG90RGF0YS52YWx1ZVJhbmdlWzBdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW0gPiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0YWNrJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gcGxvdERhdGEudmFsdWVSYW5nZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4pIHtcbiAgICAgICAgICBhbGxNaW4gPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCB0aW1lU3RhbXBJbmRleCA9IGRhdGFPcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICh0aW1lU3RhbXBJbmRleCA9PT0gaW5kKSB7XG4gICAgICAgIGluZCsrXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS5uYW1lID0gcmVmaW5lU3RyaW5nKHBsb3REYXRhLm5hbWUpXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBwbG90RGF0YS5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IHBsb3REYXRhLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgaXNCb29sZWFuKHBsb3REYXRhLnZpc2libGUpICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlID0gcGxvdERhdGEudmlzaWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUhhbmRsZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbiA9IFtdXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hYJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy56b29tLnZpc2libGUgfHwgdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgLy8geC1ab29tIGZvciBjaGFydCBkb2VzdCBub3QgZXhpc3QsIEFkZCByZWN0IG92ZXJsYXkgZm9yIGJydXNoWERpdiBvciBhZGQgSW4gY2FzZSBvZiB6b29tIHdpdGggdG91Y2ggc2NyZWVuXG4gICAgICB0aGlzLm1vdXNlQnJ1c2guYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ292ZXJsYXknKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2guYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdH0sJHt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcH0pYClcbiAgICBpZiAoIXRoaXMub3B0cy5jaGFydC5vcHRpb25zLnpvb20udmlzaWJsZSB8fCB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICB0aGlzLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlZ2lzdGVyIChjYWxsYmFjaykge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICB0cmlnZ2VyTW91c2VBY3Rpb24gKCkge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLmZvckVhY2goKGZ1bikgPT4ge1xuICAgICAgZnVuLmNhbGwodGhpcylcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2xpbmV9IGZyb20gJ0AvZDNJbXBvcnRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICAvLyBEbyBub3QgcmVnaXN0ZXIgdGhpcyBjb21wb25lbnQgaW4gY2hhcnRDb21wb25lbnRzQXJyLCAgQXMgdGhlIHNlcmllcyBjb21wb25lbnQgaXMgYWxyZWFkeSByZWdpc3RlcmVkIGFuZCB3aWxsIGNhbGwgdGhlIGxpbmUgQVBJc1xuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBsb3RBeGlzOiBbY29uc3RhbnRzLkRJUl9MRUZULCBjb25zdGFudHMuRElSX0JPVFRPTV0sXG4gICAgICBsaW5lRGF0YTogbnVsbCxcbiAgICAgIHlBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgeEF4aXNUYXJnZXQ6IG51bGwsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAvLyBGaW5kIHggYW5kIHkgYXhpcyBiYXNlZCBvbiBwbG90QXhpc1xuICAgIGxldCB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9UT1ApID4gLTEpIHtcbiAgICAgIHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICBsZXQgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfUklHSFQpID4gLTEpIHtcbiAgICAgIHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSBsaW5lKClcblxuICAgIGlmICh0aGlzLm9wdHMueUF4aXNUYXJnZXQpIHtcbiAgICAgIC8vIEZvciBub3JtYWwgc2VyaWVzLCB5QXhpc1RhcmdldCByZWZlcnMgdG8gdGhlIGluZGV4IG9mIHRoaXMgc2VyaWVzIGluIGRhdGEgQXJyXG4gICAgICB0aGlzLmxpbmVcbiAgICAgICAgLmRlZmluZWQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZFtzZWxmLm9wdHMueUF4aXNUYXJnZXRdICE9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgLngoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAvLyB4QXhpc1RhcmdldCByZWZlcnMgdGhlIGluZGV4IG9mIGRhdGUgaW4gZGF0YSBBcnJcbiAgICAgICAgICByZXR1cm4geChkW3NlbGYub3B0cy54QXhpc1RhcmdldF0pXG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHkoZFtzZWxmLm9wdHMueUF4aXNUYXJnZXRdKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5saW5lVGFnID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5zZWxlY3RBbGwoJy52Yy1saW5lLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICAgICAgLmRhdGEoW3RoaXMub3B0cy5saW5lRGF0YV0pXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGluZS1wbG90IHZjLWxpbmUtJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG5cbiAgICBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXIuc2VsZWN0KCdzdmcgY2xpcFBhdGgnKVxuICAgIC8vIEFkZGluZyB0aGUgbGluZXMgc2VyaWVzIGZvciBkYXRhIHRvIGJlIHNob3duXG4gICAgdGhpcy5saW5lVGFnLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBFbGVtZW50LmF0dHIoJ2lkJykgKyAnKScpIC8vIGRpc3BsYXkgZ3JhcGhab25lIG9mIHNhbWUgc2l6ZSBhcyBjbGlwLXBhdGggZGVmaW5lZFxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxpbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsICd0cmFuc3BhcmVudCcpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmxpbmVXaWR0aCB8fCAnMnB4J1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYubGluZShkLnZhbHVlcykgLy8gVmFsdWVzIGFyZSBhcnJheSBvZiBhcnJheSBoYXZpbmcgZm9ybWF0IGxpa2UgIFtbZGF0ZSwgc2VyaWVzMSwgc2VyaWVzMiAuLi4uXSwuLi5dXG4gICAgICB9KVxuICB9XG5cbiAgLy8gVXBkYXRlIGhhcHBlbnMgd2hlbiB0aGUgY2hhcnQgaXMgcmVzaXplZFxuICB1cGRhdGUgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBzZWxmLmxpbmUoZC52YWx1ZXMpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlZHJhdyBpcyBjYWxsZWQgd2hlbiBzZXJpZXMgaXMgdG9nZ2xlZCBmcm9tIExlZ2VuZHNcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBzZXJpZXNOYW1lID0gdGhpcy5vcHRzLmxpbmVEYXRhLm5hbWVcbiAgICAvLyBSZW1vdmUgbGluZSBzZXJpZXNcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnJlbW92ZSgpXG5cbiAgICBpZiAoZWFjaFBsb3RTZXQgJiYgZWFjaFBsb3RTZXRbc2VyaWVzTmFtZV0gJiYgZWFjaFBsb3RTZXRbc2VyaWVzTmFtZV0udmlzaWJsZSkge1xuICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG5cbiAgfVxuICBcbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5saW5lID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxuXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7YXJlYSwgc3RhY2ssIHN0YWNrT3JkZXJOb25lLCBzdGFja09mZnNldE5vbmV9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFja0FyZWEgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBsb3RBeGlzOiBbY29uc3RhbnRzLkRJUl9MRUZULCBjb25zdGFudHMuRElSX0JPVFRPTV0sXG4gICAgICB4QXhpc1RhcmdldDogJycsXG4gICAgICBzdGFja0RhdGE6IG51bGwsXG4gICAgICBzdGFja09yZGVyTWVtYmVyczoge30sXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgLy8gRGVmaW5lIGluIHdoYXQgb3JkZXIsIFN0YWNrIHNlcmllcyBuZWVkcyB0byBiZSBwbG90ZWRcbiAgICB0aGlzLm9wdHMuc3RhY2tPcmRlckluZGV4ID0gdGhpcy5vcHRzLnN0YWNrT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2VcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG5cbiAgICAvLyBGaW5kIHggYW5kIHkgYXhpcyBiYXNlZCBvbiBwbG90QXhpc1xuICAgIGxldCB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9UT1ApID4gLTEpIHtcbiAgICAgIHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICBsZXQgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfUklHSFQpID4gLTEpIHtcbiAgICAgIHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICB0aGlzLm9wdHMuZDNTdGFjayA9IHN0YWNrKClcblxuICAgIHRoaXMuYXJlYSA9IGFyZWEoKVxuICAgICAgLngoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHgoZC5kYXRhW3NlbGYub3B0cy54QXhpc1RhcmdldF0pXG4gICAgICB9KVxuICAgICAgLnkwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGRbMF0pIC8vIEluZGljYXRlcyB3aGVyZSB0byBzdGFydCBhbG9uZyBZQXhpc1xuICAgICAgfSlcbiAgICAgIC55MShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkWzFdKSAvLyBJbmRpY2F0ZXMgd2hlcmUgdG8gZW5kIGFsb25nIFlBeGlzXG4gICAgICB9KVxuXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sua2V5cyh0aGlzLm9wdHMuc3RhY2tPcmRlckluZGV4KSAvLyBzcGVjaWZ5IHRoZSBzdGFjayBzZXJpZXMgbmFtZXMgaW4gYXJyYXkgZm9ybWF0XG4gICAgdGhpcy5vcHRzLmQzU3RhY2sub3JkZXIoc3RhY2tPcmRlck5vbmUpIC8vIHVzZSB0aGUgZ2l2ZW4gc2VyaWVzIG9yZGVyLlxuICAgIHRoaXMub3B0cy5kM1N0YWNrLm9mZnNldChzdGFja09mZnNldE5vbmUpIC8vIGFwcGx5IGEgemVybyBiYXNlbGluZSBvbiBzdGFydFxuXG4gICAgLy8gU2hvdyBzdGFjayBwbG90IGZvciBvbmx5IHNlcmllcyB3aGljaCBhcmUgdmlzaWJsZVxuICAgIGNvbnN0IHN0YWNrVmlzaWJsZU9yZGVyID0gdGhpcy5vcHRzLnN0YWNrT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlKVxuICAgIH0pXG5cbiAgICB0aGlzLnN0YWNrTGF5ZXIgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLnNlbGVjdEFsbCgnLnZjLXN0YWNrLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICAgICAgLmRhdGEodGhpcy5vcHRzLmQzU3RhY2sodGhpcy5vcHRzLnN0YWNrRGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtc3RhY2stcGxvdCB2Yy1zdGFjay0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNsaXBFbGVtZW50ID0gdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lci5zZWxlY3QoJ3N2ZyBjbGlwUGF0aCcpXG5cbiAgICAvLyBQTG90IHN0YWNrTGF5ZXIgYmFzZWQgb24gZWFjaCBzZXJpZXMgdmlzaWJsaXR5XG4gICAgdGhpcy5zdGFja0xheWVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBFbGVtZW50LmF0dHIoJ2lkJykgKyAnKScpIC8vIGRpc3BsYXkgZ3JhcGhab25lIG9mIHNhbWUgc2l6ZSBhcyBjbGlwLXBhdGggZGVmaW5lZFxuICAgICAgLmF0dHIoJ2NsYXNzJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgY29uc3Qgc3RhY2tNZW1iZXIgPSBzdGFja1Zpc2libGVPcmRlcltzZWxmLm9wdHMuc3RhY2tPcmRlckluZGV4LmluZGV4T2YoZC5rZXkpXSB8fCB7XG4gICAgICAgICAgbmFtZTogJydcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3ZjLXN0YWNrIHZjLXN0YWNrLScgKyBzdGFja01lbWJlci5uYW1lXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgY29uc3Qgc3RhY2tNZW1iZXIgPSBzdGFja1Zpc2libGVPcmRlcltzZWxmLm9wdHMuc3RhY2tPcmRlckluZGV4LmluZGV4T2YoZC5rZXkpXSB8fCB7XG4gICAgICAgICAgbmFtZTogJydcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbc3RhY2tNZW1iZXIubmFtZV0uY29sb3JcbiAgICAgIH0pXG4gICAgICAuYXR0cignZCcsIHRoaXMuYXJlYSlcblxuICB9XG4gIFxuICAvLyBVcGRhdGUgc3RhY2tMYXllciBiYXNlZCBvbiBjaGFydCByZXNpemVcbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnN0YWNrTGF5ZXIgJiYgdGhpcy5zdGFja0xheWVyLnNlbGVjdCgncGF0aCcpLmF0dHIoJ2QnLCB0aGlzLmFyZWEpXG4gIH1cbiAgXG4gIHJlZHJhdyAoKSB7XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgLy8gTW9kaWZ5IHN0YWNrT3JkZXIgYXJyIGJhc2VkIG9uIHZpc2libGVTZXJpZXNcbiAgICB0aGlzLm9wdHMuc3RhY2tPcmRlckluZGV4ID0gdGhpcy5vcHRzLnN0YWNrT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlKVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgYWxsIHN0YWNrIHNlcmllc1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIucmVtb3ZlKClcbiAgICAvLyBkcmF3IHdpdGggbmV3IHN0YWNrT3JkZXJNZW1iZXJzXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuICBcbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5zdGFja0xheWVyLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cbiAgXG4gIHJlbW92ZSAoKSB7XG4gICAgLy8gIHRoaXMuc3RhY2tBcmVhUGF0aC5yZW1vdmUoKTtcbiAgICB0aGlzLnN0YWNrTGF5ZXIgJiYgdGhpcy5zdGFja0xheWVyLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sgPSBudWxsXG4gICAgdGhpcy5hcmVhID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufSIsImltcG9ydCB7aXNBcnJheX0gZnJvbSAnQC91dGlscydcbmltcG9ydCBMaW5lIGZyb20gJ0Avc2VyaWVzL0xpbmUnXG5pbXBvcnQgU3RhY2tBcmVhIGZyb20gJ0Avc2VyaWVzL1N0YWNrQXJlYSdcbmltcG9ydCBTZXJpZXMgZnJvbSAnQC9zZXJpZXMvU2VyaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzIGV4dGVuZHMgU2VyaWVzIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMucGxvdFNlcmllcyA9IFtdXG4gICAgY29uc3QgZGF0YSA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YSAvLyBBY2NlcHQgZWl0aGVyIHRpbWVzZXJpZXMgb3IgcGllc2VyaWVzXG4gICAgY29uc3QgcGxvdEluZm8gPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5zZXJpZXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcblxuICAgIC8vIENyZWF0ZSBwbG90IGNvbXBvbmVudHMgYmFzZWQgb24gaW5wdXQgb3B0aW9ucyBhbmQgZWFjaCBwbG90IGluZm9cbiAgICBpc0FycmF5KHBsb3RJbmZvLnN0YWNrKSAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IFN0YWNrQXJlYSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICAgIGNsYXNzTmFtZTogcGxvdERhdGEuY2xhc3NOYW1lIHx8IHBsb3REYXRhLm5hbWUsXG4gICAgICAgIHBsb3RBeGlzOiBwbG90RGF0YS5wbG90QXhpcyxcbiAgICAgICAgeEF4aXNUYXJnZXQ6IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleCxcbiAgICAgICAgc3RhY2tEYXRhOiBkYXRhLFxuICAgICAgICBzdGFja09yZGVyTWVtYmVyczogcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgIH0pKVxuICAgIH0pXG5cbiAgICBpc0FycmF5KHBsb3RJbmZvLmxpbmUpICYmIHBsb3RJbmZvLmxpbmUuZm9yRWFjaCgocGxvdERhdGEpID0+IHtcbiAgICAgIHRoaXMucGxvdFNlcmllcy5wdXNoKG5ldyBMaW5lKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMub3B0cy5jaGFydCxcbiAgICAgICAgY2xhc3NOYW1lOiBwbG90RGF0YS5jbGFzc05hbWUgfHwgcGxvdERhdGEubmFtZSxcbiAgICAgICAgcGxvdEF4aXM6IHBsb3REYXRhLnBsb3RBeGlzLFxuICAgICAgICB5QXhpc1RhcmdldDogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uZGF0YUluZGV4LFxuICAgICAgICB4QXhpc1RhcmdldDogdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4LFxuICAgICAgICB2aXNpYmxlOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlLFxuICAgICAgICBsaW5lRGF0YToge1xuICAgICAgICAgIG5hbWU6IHBsb3REYXRhLm5hbWUsXG4gICAgICAgICAgY29sb3I6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLmNvbG9yLFxuICAgICAgICAgIGxpbmVXaWR0aDogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubGluZVdpZHRoLFxuICAgICAgICAgIHZhbHVlczogZGF0YVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9KVxuICB9XG5cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2VsZW1lbnRPZmZzZXQsIGdldE9iamVjdCwgaXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7YmlzZWN0b3IsIGQzTW91c2V9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXNUb29sdGlwIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNyb3NzSGFpcnM6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICAvLyBQcm92aWRlIGJhc2ljIGZvcm1hdHRlciB0byBkaXNwbGF5IGhvdmVyIGRhdGFcbiAgICBpZiAoIWlzRnVuY3Rpb24odGhpcy5vcHRzLmZvcm1hdCkpIHtcbiAgICAgIHRoaXMub3B0cy5mb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYDxzcGFuPiBUb29sVGlwIFRleHQgOiA8L3NwYW4+PGJyLz48c3Bhbj4ke0pTT04uc3RyaW5naWZ5KGQpfTwvc3Bhbj5gXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy5jcm9zc0hhaXJzID0gZmFsc2VcbiAgICB0aGlzLnRvb2xUaXBEaXYgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXRvb2x0aXAtZGlzcGxheSAnICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcblxuICAgIGlmICh0aGlzLm9wdHMuY3Jvc3NIYWlycy5lbmFibGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3Jvc3NIYWlycyA9IHRoaXMub3B0cy5jaGFydC5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy10b29sdGlwLWxpbmUnKVxuICAgICAgdGhpcy5jcm9zc0hhaXJzLmFwcGVuZCgnbGluZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC05OTksLTk5OSknKVxuICAgICAgICAuYXR0cigneDEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgIC5hdHRyKCd5MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wIC0gY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUilcbiAgICAgICAgLmF0dHIoJ3gyJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAuYXR0cigneTInLCAodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3ApKVxuXG4gICAgfVxuXG4gICAgdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5yZWdpc3RlcigoKSA9PiB7XG4gICAgICAvLyBSZWdpc3RlciBob3ZlciBhbmQgaGlkZS9zaG93IHRvb2xpcCBldmVudHNcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCB4U2NhbGUgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKSB8fCBmYWxzZVxuICAgICAgY29uc3QgbW91c2VIYW5kbGVyID0gdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlclxuICAgICAgY29uc3QgZGF0ZUluZGV4ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4XG4gICAgICBjb25zdCBkYXRhU2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhXG4gICAgICAvLyBGaW5kIG5lYXJlc3QgZXhpc3RpbmcgZGF0ZSBhbW9uZyBhcnJheSBvZiBzb3J0ZWQgZGF0ZVxuICAgICAgY29uc3QgYmlzZWN0RGF0ZSA9IGJpc2VjdG9yKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkW2RhdGVJbmRleF1cbiAgICAgIH0pLmxlZnRcblxuICAgICAgY29uc3QgbW91c2VFdnQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyBPbiBtb3VzZW1vdmUgb2YgeCBvdmVybGF5LCBmaW5kIHgseSB2YWx1ZXMgYW5kIHVwZGF0ZSB0b29sdGlwXG4gICAgICAgIGNvbnN0IHhNb3VzZSA9IGQzTW91c2UodGhpcylbMF1cbiAgICAgICAgY29uc3QgeU1vdXNlID0gZDNNb3VzZSh0aGlzKVsxXVxuICAgICAgICBjb25zdCB4VmFsID0geFNjYWxlLmludmVydCh4TW91c2UpIC8vIGZpbmQgeEF4aXMgZGF0ZSBmb3IgbW91c2UgcG9zaXRpb25cblxuICAgICAgICAvLyBEbyBiaW5hcnkgc2VhcmNoIG9mIGRhdGEgc2V0IGZyb20gMm5kIGRhdGEgc2V0IHRvIGVuZFxuICAgICAgICBjb25zdCBmb3VuZCA9IGJpc2VjdERhdGUoZGF0YVNldCwgeFZhbCwgMSlcblxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkQmVmb3JlID0gZGF0YVNldFtmb3VuZCAtIDJdXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZFByZXYgPSBkYXRhU2V0W2ZvdW5kIC0gMV1cbiAgICAgICAgLy8gZ2V0IGJlZm9yZSBmaW5kIGRhdGFTZXRcbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZEZvdW5kID0gZGF0YVNldFtmb3VuZF0gfHwgZFByZXYgLy8gZ2V0IGZpbmQgZGF0YVNldFxuXG4gICAgICAgIGxldCB0b29sVGlwRGF0YSA9IGRQcmV2XG4gICAgICAgIGlmIChkYXRhU2V0Lmxlbmd0aCA+IHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSB7XG4gICAgICAgICAgLy8gTW9yZSB0aGFuIG9uZSB0aWNrIHJlc2lkZSBvbiBlYWNoIHBpeGVsLiBIZW5jZSBmaW5kIHRpY2sgaGF2aW5nIG1heCB2YWx1ZSBhbW9uZyB0aGUgZGF0YXNldFxuICAgICAgICAgIGNvbnN0IGRhdGFQYXJzZUxlbiA9IE1hdGguZmxvb3IoZGF0YVNldC5sZW5ndGggLyBzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkgKyAxXG5cbiAgICAgICAgICBjb25zdCB2aXNpYmxlRGF0YUluZGV4ID0ge31cblxuICAgICAgICAgIGZvciAoY29uc3QgcGwgaW4gc2VsZi5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldCkge1xuICAgICAgICAgICAgY29uc3QgcGxvdCA9IHNlbGYub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRbcGxdXG4gICAgICAgICAgICBpZiAocGxvdC52aXNpYmxlKSB7XG4gICAgICAgICAgICAgIHZpc2libGVEYXRhSW5kZXhbcGxvdC5kYXRhSW5kZXhdID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG11bHRpQXJyTWFwID0ge31cbiAgICAgICAgICAvLyBEbyBTY2FuIGZyb20gcmFuZ2UgLWRhdGFQYXJzZUxlbiB0byArZGF0YVBhcnNlTGVuIGJldHdlZW4gZm91bmQgZGF0YSBpbmRleFxuICAgICAgICAgIGZvciAobGV0IGluZCA9IChmb3VuZCAtIGRhdGFQYXJzZUxlbik7IGluZCA8IChmb3VuZCArIGRhdGFQYXJzZUxlbik7IGluZCsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVNldFtpbmRdKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRTZXQgPSBkYXRhU2V0W2luZF0uZmlsdGVyKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpc2libGVEYXRhSW5kZXhbaW5kZXhdXG4gICAgICAgICAgICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYiAtIGFcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgaWYgKGRTZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbXVsdGlBcnJNYXBbaW5kXSA9IGRTZXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbWF4SW5kXG4gICAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIGZvciAoY29uc3QgbXAgaW4gbXVsdGlBcnJNYXApIHtcbiAgICAgICAgICAgIGNvbnN0IGFyclNldCA9IG11bHRpQXJyTWFwW21wXVxuICAgICAgICAgICAgaWYgKG1heFZhbCA8IGFyclNldFswXSkge1xuICAgICAgICAgICAgICBtYXhWYWwgPSBhcnJTZXRbMF1cbiAgICAgICAgICAgICAgbWF4SW5kID0gbXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b29sVGlwRGF0YSA9IGRhdGFTZXRbbWF4SW5kXSB8fCBkRm91bmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGaW5kIG5lYXJlc3QgcmVhY2hpbmcgZGF0ZSBhbW9uZyBhYm92ZSB0d28gZGF0ZXNcbiAgICAgICAgICB0b29sVGlwRGF0YSA9ICh4VmFsIC0gZFByZXZbZGF0ZUluZGV4XSkgPiAoZEZvdW5kW2RhdGVJbmRleF0gLSB4VmFsKSA/IGRGb3VuZCA6IGRQcmV2XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0ZUludFJhbmdlID0gZEZvdW5kW2RhdGVJbmRleF0gLSBkUHJldltkYXRlSW5kZXhdXG5cbiAgICAgICAgaWYgKCFkYXRlSW50UmFuZ2UgJiYgZEJlZm9yZSkge1xuICAgICAgICAgIGRhdGVJbnRSYW5nZSA9IGRQcmV2W2RhdGVJbmRleF0gLSBkQmVmb3JlW2RhdGVJbmRleF1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRlSW50UmFuZ2UgPCBNYXRoLmFicyhkRm91bmRbZGF0ZUluZGV4XSAtIHhWYWwpKSB7XG4gICAgICAgICAgLy8gSWYgZm91bmQgaXMgb3V0c2lkZSBkYXRhIGludGVydmFsIHJhbmdlLCBUaGVuIGRhdGEgZG9lc250IGV4aXN0IGZvciB0aGF0IHRpY2suXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSBbXVxuICAgICAgICAgIHRvb2xUaXBEYXRhW2RhdGVJbmRleF0gPSB4VmFsXG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmhvdmVyKHhNb3VzZSwgeU1vdXNlLCB0b29sVGlwRGF0YSlcbiAgICAgIH1cblxuICAgICAgbGV0IGV2ZW50TmFtZSA9ICdtb3VzZW1vdmUnXG4gICAgICBpZiAodGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgICBldmVudE5hbWUgPSAnZGJsY2xpY2snXG4gICAgICB9XG4gICAgICBtb3VzZUhhbmRsZXIubW91c2VCcnVzaFxuICAgICAgICAub24oZXZlbnROYW1lLCBtb3VzZUV2dClcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9KVxuXG4gICAgICBtb3VzZUhhbmRsZXIubW91c2VCcnVzaC5zZWxlY3QoJ3JlY3Qub3ZlcmxheScpXG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICAgIC8vIEluIGNhc2Ugb2YgdG91Y2ggc2NyZWVuLCBzaW11bGF0ZSB0b29sdGlwIGhvdmVyIGZvciBmaXJzdCB0aW1lIHRvIGF1dG8gY29tcHV0ZSBlbGVtZW50T2Zmc2V0XG4gICAgICAgIHRoaXMuaG92ZXIoMCwgMCwgZGF0YVNldFswXSlcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSwgMjUpXG4gICAgICB9XG5cbiAgICB9KVxuICB9XG5cbiAgaG92ZXIgKHhQb3MsIHlQb3MsIGRpc3BsYXlEYXRhKSB7XG4gICAgLy8gVXBkYXRlIGRpc3BsYXlQYW5lbCBhbmQgbGluZSBiYXNlZCBvbiB4IHBvc2l0aW9uXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5zZWxlY3QoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4UG9zfSwwKWApXG4gICAgICAuYXR0cigneDEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneTEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCAtIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIpXG4gICAgICAuYXR0cigneDInLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneTInLCAodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3ApKVxuICAgIHRoaXMuc2hvd0hpZGUodHJ1ZSlcblxuICAgIGxldCBwZXJjZW50YWdlRGlmZiA9IHhQb3MgLyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aFxuXG4gICAgaWYgKHBlcmNlbnRhZ2VEaWZmIDwgMC4zKSB7XG4gICAgICBwZXJjZW50YWdlRGlmZiA9IDAuMlxuICAgIH1cbiAgICBpZiAocGVyY2VudGFnZURpZmYgPiAwLjcpIHtcbiAgICAgIHBlcmNlbnRhZ2VEaWZmID0gMC45NVxuICAgIH1cblxuICAgIGNvbnN0IGJveCA9IGVsZW1lbnRPZmZzZXQodGhpcy50b29sVGlwRGl2KVxuICAgIGNvbnN0IHJvb3RQb3MgPSBlbGVtZW50T2Zmc2V0KHRoaXMub3B0cy5jaGFydC5jb250YWluZXIpXG4gICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQocm9vdFBvcy5sZWZ0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0ICsgeFBvcyAtIGJveC53aWR0aCAqIHBlcmNlbnRhZ2VEaWZmKSArICdweCdcbiAgICBjb25zdCB0b3AgPSBNYXRoLnJvdW5kKHJvb3RQb3MudG9wIC0gYm94LmhlaWdodCAtIDUgKyBjb25zdGFudHMuVE9PTFRJUF9UT1BfQlVGRkVSICogMikgKyAncHgnXG5cblxuICAgIHRoaXMudG9vbFRpcERpdlxuICAgICAgLnN0eWxlKCdsZWZ0JywgbGVmdClcbiAgICAgIC5zdHlsZSgndG9wJywgdG9wKVxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG4gICAgICAuaHRtbCh0aGlzLm9wdHMuZm9ybWF0LmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBkaXNwbGF5RGF0YSkpIC8vIFVzZWQgZm9ybWF0LmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW4gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcblxuICAgIHRoaXMuY3Jvc3NIYWlycyAmJiB0aGlzLmNyb3NzSGFpcnMuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMudG9vbFRpcERpdiAmJiB0aGlzLnRvb2xUaXBEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy50b29sVGlwRGl2ICYmIHRoaXMudG9vbFRpcERpdi5yZW1vdmUoKVxuICAgIHRoaXMuY3Jvc3NIYWlycyAmJiB0aGlzLmNyb3NzSGFpcnMucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7Z2V0T2JqZWN0LCBpc0Z1bmN0aW9uLCBlbXB0eUZufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHticnVzaFksIGQzRXZlbnQsIGQzVG91Y2hlcywgem9vbX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7YmlzZWN0b3J9IGZyb20gJ2QzLWFycmF5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXN0dXJlWm9vbSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBvblpvb206IGVtcHR5Rm4sXG4gICAgICBvblkxWm9vbTogZW1wdHlGbixcbiAgICAgIG9uWTJab29tOiBlbXB0eUZuLFxuICAgIH0sIG9wdHMpXG4gIH1cblxuICBnZXRDbG9zZXN0WEF4aXNEYXRhICh4VmFsLCBkYXRhU2V0KSB7XG4gICAgY29uc3QgZGF0ZUluZGV4ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4XG4gICAgLy8gRmluZCBuZWFyZXN0IGV4aXN0aW5nIGRhdGUgYW1vbmcgYXJyYXkgb2Ygc29ydGVkIGRhdGVcbiAgICBjb25zdCBiaXNlY3REYXRlID0gYmlzZWN0b3IoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkW2RhdGVJbmRleF1cbiAgICB9KS5sZWZ0XG5cbiAgICAvLyBEbyBiaW5hcnkgc2VhcmNoIG9mIGRhdGEgc2V0IGZyb20gMm5kIGRhdGEgc2V0IHRvIGVuZFxuICAgIGNvbnN0IGZvdW5kID0gYmlzZWN0RGF0ZShkYXRhU2V0LCB4VmFsLCAxKVxuXG5cbiAgICBjb25zdCBkUHJldiA9IGRhdGFTZXRbZm91bmQgLSAxXVxuICAgIC8vIGdldCBiZWZvcmUgZmluZCBkYXRhU2V0XG5cbiAgICBjb25zdCBkRm91bmQgPSBkYXRhU2V0W2ZvdW5kXSB8fCBkUHJldiAvLyBnZXQgZmluZCBkYXRhU2V0XG5cbiAgICByZXR1cm4gZEZvdW5kXG4gIH1cblxuXG4gIHVwZGF0ZWJydXNoWFNlbGVjdGlvbiAoc3RhcnRQb3MsIGVuZFBvcykge1xuICAgIHRoaXMuYnJ1c2hYRGl2XG4gICAgICAuYXR0cigneCcsIHN0YXJ0UG9zKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgKGVuZFBvcyAtIHN0YXJ0UG9zKSlcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVMZWZ0ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVSaWdodCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGFcbiAgICBpZiAoeFNjYWxlICYmIGQzVG91Y2hlcykge1xuXG4gICAgICAvLyBDcmVhdGUgeCBheGlzIGJydXNoIGZvciBab29tIG9wZXJhdGlvblxuICAgICAgdGhpcy56b29tWCA9IHpvb20oKVxuICAgICAgICAuc2NhbGVFeHRlbnQoWzAsIGRhdGFTZXQubGVuZ3RoXSlcbiAgICAgICAgLnRyYW5zbGF0ZUV4dGVudChbXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCwgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3BdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XV0pXG4gICAgICAgIC5leHRlbnQoW1t0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wXSwgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXSlcbiAgICAgICAgLnRvdWNoYWJsZSgoKSA9PiB0cnVlKVxuXG4gICAgICB0aGlzLnpvb21YRGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Z1xuICAgICAgICAuY2FsbCh0aGlzLnpvb21YKVxuXG5cbiAgICAgIC8vIFVzZSB0aGUgc2FtZSBtb3VzZUJydXNoIGZvciBib3RoIHhCcnVzaCBhbmQgdG9vbHRpcFxuICAgICAgdGhpcy5icnVzaFhEaXYgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzZWxlY3Rpb24nKVxuICAgICAgICAuYXR0cignY3Vyc29yJywgJ21vdmUnKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAnMC4zJylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG5cbiAgICAgIGxldCBpc0dlc3R1cmUgPSBmYWxzZVxuICAgICAgbGV0IHN0YXJ0UG9zID0gMFxuICAgICAgbGV0IGVuZFBvcyA9IDBcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcFxuICAgICAgdGhpcy56b29tWERpdlxuICAgICAgICAuc3R5bGUoJ3RvdWNoLWFjdGlvbicsICdwYW4teScpXG4gICAgICAgIC5vbigndG91Y2hzdGFydC56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBkM1RvdWNoZXModGhpcylcbiAgICAgICAgICBpc0dlc3R1cmUgPSBkM0V2ZW50LnRvdWNoZXMgJiYgZDNFdmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMlxuICAgICAgICAgIGlmIChpc0dlc3R1cmUgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvb2x0aXAgJiYgdG9vbHRpcC5oaWRlKClcbiAgICAgICAgICAgIGNvbnN0IHhQb3MgPSAodG91Y2hlc1swXVswXSAtIHNlbGYub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIHN0YXJ0UG9zID0geFBvc1xuICAgICAgICAgICAgZW5kUG9zID0geFBvc1xuICAgICAgICAgICAgc2VsZi51cGRhdGVicnVzaFhTZWxlY3Rpb24oc3RhcnRQb3MsIGVuZFBvcylcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpXG4gICAgICAgIC5vbigndG91Y2htb3ZlLnpvb20nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGQzVG91Y2hlcyh0aGlzKVxuICAgICAgICAgIGlmIChpc0dlc3R1cmUgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHhQb3MxID0gKHRvdWNoZXNbMF1bMF0gLSBzZWxmLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICBjb25zdCB4UG9zMiA9ICh0b3VjaGVzWzFdWzBdIC0gc2VsZi5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgbGV0IHhNaW4gPSB4UG9zMVxuICAgICAgICAgICAgbGV0IHhNYXggPSB4UG9zMlxuICAgICAgICAgICAgaWYgKHhQb3MxID4geFBvczIpIHtcbiAgICAgICAgICAgICAgeE1pbiA9IHhQb3MyXG4gICAgICAgICAgICAgIHhNYXggPSB4UG9zMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRQb3MgPSB4TWluXG4gICAgICAgICAgICBlbmRQb3MgPSB4TWF4XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWJydXNoWFNlbGVjdGlvbihzdGFydFBvcywgZW5kUG9zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgLm9uKCd0b3VjaGVuZC56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBkM1RvdWNoZXModGhpcylcbiAgICAgICAgICBpZiAoaXNHZXN0dXJlICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB4UG9zID0gKHRvdWNoZXNbMF1bMF0gLSBzZWxmLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICBpZiAoc3RhcnRQb3MgPiB4UG9zKSB7XG4gICAgICAgICAgICAgIHN0YXJ0UG9zID0geFBvc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZFBvcyA8IHhQb3MpIHtcbiAgICAgICAgICAgICAgZW5kUG9zID0geFBvc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydFZhbCA9IHhTY2FsZS5pbnZlcnQoc3RhcnRQb3MpXG4gICAgICAgICAgICBjb25zdCBzdGFydER0ID0gTWF0aC5yb3VuZChzdGFydFZhbClcblxuICAgICAgICAgICAgY29uc3QgZW5kVmFsID0geFNjYWxlLmludmVydChlbmRQb3MpXG4gICAgICAgICAgICBjb25zdCBlbmREdCA9IE1hdGgucm91bmQoZW5kVmFsKVxuICAgICAgICAgICAgc2VsZi51cGRhdGVicnVzaFhTZWxlY3Rpb24oc3RhcnRQb3MsIGVuZFBvcylcblxuICAgICAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ab29tKSAmJiBzZWxmLm9wdHMub25ab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBzdGFydER0LCBlbmREdClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi51cGRhdGVicnVzaFhTZWxlY3Rpb24oMCwgMClcbiAgICAgICAgICBzdGFydFBvcyA9IDBcbiAgICAgICAgICBlbmRQb3MgPSAwXG4gICAgICAgICAgaXNHZXN0dXJlID0gZmFsc2VcbiAgICAgICAgfSwgdHJ1ZSlcblxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIGxlZnQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1sZWZ0JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geUF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlMZWZ0RGl2LmNhbGwoc2VsZi5icnVzaFlMZWZ0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlTGVmdC5pbnZlcnQpXG5cblxuICAgICAgICBjb25zdCBkMSA9IGQwICYmIGQwLm1hcChNYXRoLnJvdW5kKVxuICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWSBheGlzIHVwb24gdmVydGljYWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ZMVpvb20pICYmIHNlbGYub3B0cy5vblkxWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIHJpZ2h0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktcmlnaHQnKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZDNFdmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmJydXNoWVJpZ2h0RGl2LmNhbGwoc2VsZi5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZVJpZ2h0LmludmVydClcblxuXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWTIgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTJab29tKSAmJiBzZWxmLm9wdHMub25ZMlpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuem9vbVgpIHtcbiAgICAgIHRoaXMuem9vbVhcbiAgICAgICAgLnRyYW5zbGF0ZUV4dGVudChbXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCwgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3BdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0LCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcF0sXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hYRGl2XG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZTGVmdClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAoY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQpXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZTGVmdERpdiAmJiB0aGlzLmJydXNoWUxlZnREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgJiYgdGhpcy5icnVzaFlSaWdodERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFhEaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWUxlZnREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5jYWxsKHRoaXMuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LmNhbGwodGhpcy5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7Z2V0T2JqZWN0LCBpc0Z1bmN0aW9uLCBlbXB0eUZufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHticnVzaFgsIGJydXNoWSwgZDNFdmVudH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBvblpvb206IGVtcHR5Rm4sXG4gICAgICBvblkxWm9vbTogZW1wdHlGbixcbiAgICAgIG9uWTJab29tOiBlbXB0eUZuXG4gICAgfSwgb3B0cylcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVMZWZ0ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICBjb25zdCB5U2NhbGVSaWdodCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGxldCBicnVzaE92ZXJsYXkgPSBudWxsXG4gICAgaWYgKHhTY2FsZSkge1xuICAgICAgLy8gQ3JlYXRlIHggYXhpcyBicnVzaCBmb3IgWm9vbSBvcGVyYXRpb25cbiAgICAgIHRoaXMuYnJ1c2hYID0gYnJ1c2hYKClcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICAvLyBVc2UgdGhlIHNhbWUgbW91c2VCcnVzaCBmb3IgYm90aCB4QnJ1c2ggYW5kIHRvb2x0aXBcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ID0gdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hYKVxuXG4gICAgICBicnVzaE92ZXJsYXkgPSB0aGlzLmJydXNoWERpdi5zZWxlY3RBbGwoJ3JlY3Qub3ZlcmxheScpXG5cbiAgICAgIC8vIENhbGwgdGhpcyBldmVudCB3aGVuIHhBeGlzIGJydXNoIGlzIGVuZGVkXG4gICAgICB0aGlzLmJydXNoWC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh4U2NhbGUuaW52ZXJ0KVxuICAgICAgICAvLyBmaW5kIHgxIGFuZCB4MlxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkMSA9IGQwICYmIGQwLm1hcChNYXRoLnJvdW5kKSAvLyByb3VuZCBib3RoIHZhbHVlc1xuXG4gICAgICAgIC8vIGNsZWFyIEJydXNoXG4gICAgICAgIHNlbGYuYnJ1c2hYRGl2LmNhbGwoc2VsZi5icnVzaFgubW92ZSwgbnVsbClcbiAgICAgICAgYnJ1c2hPdmVybGF5LnN0eWxlKCdjdXJzb3InLCAnYXV0bycpXG5cbiAgICAgICAgLy8gZDEgPSBkMVxuICAgICAgICAvLyAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAvLyAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnhBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWCBheGlzIHVwb24gaG9yaXpvbnRhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWm9vbSkgJiYgc2VsZi5vcHRzLm9uWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIGxlZnQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1sZWZ0JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geUF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlMZWZ0RGl2LmNhbGwoc2VsZi5icnVzaFlMZWZ0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlTGVmdC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFkgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTFab29tKSAmJiBzZWxmLm9wdHMub25ZMVpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCByaWdodCBzY2FsZSBvcGVyYXRpb25cbiAgICBpZiAoeVNjYWxlUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hZLXJpZ2h0JylcblxuICAgICAgdGhpcy5icnVzaFlSaWdodC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlSaWdodERpdi5jYWxsKHNlbGYuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh5U2NhbGVSaWdodC5pbnZlcnQpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZMiBheGlzIHVwb24gdmVydGljYWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ZMlpvb20pICYmIHNlbGYub3B0cy5vblkyWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIGJydXNoT3ZlcmxheSAmJiB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gbW91c2UgaXMgY2xpY2tlZCBvciBkb3duLCBlbmFibGUgem9vbSBicnVzaCBhbmQgaXRzIG1vdXNlIGN1cnNvclxuICAgICAgYnJ1c2hPdmVybGF5XG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2NvbC1yZXNpemUnKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2F1dG8nKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLmJydXNoWCkge1xuICAgICAgdGhpcy5icnVzaFguZXh0ZW50KFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZTGVmdClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAoY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQpXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZTGVmdERpdiAmJiB0aGlzLmJydXNoWUxlZnREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgJiYgdGhpcy5icnVzaFlSaWdodERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFhEaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWUxlZnREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5jYWxsKHRoaXMuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LmNhbGwodGhpcy5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9