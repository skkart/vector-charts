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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvVGltZVNlcmllc0NoYXJ0LmpzIiwid2VicGFjazovL3ZjLy4vZGF0YS1wYXJzZXIvQmFzaWNUU1BhcnNlci5qcyIsIndlYnBhY2s6Ly92Yy8uL21vdXNlLWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvTGluZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TdGFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvVGltZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vdmMvLi96b29tL0dlc3R1cmVab29tLmpzIiwid2VicGFjazovL3ZjLy4vem9vbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJBeGlzIiwib3B0cyIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwib3JpZW50IiwibGFiZWwiLCJ1bml0IiwicmFuZ2VTY2FsZSIsImRvbWFpblNjYWxlIiwic2NhbGVUeXBlIiwiYXhpc0NsYW1wIiwidGlja051bWJlciIsInJvdGF0ZVRleHQiLCJ0ZXh0TGltaXQiLCJ0aWNrRm9ybWF0dGVyIiwic2hvd0dyaWRMaW5lcyIsInRpY2tQYWRkaW5nIiwiY29uc3RhbnRzIiwiVElDS19QQURESU5HIiwic2NhbGVQYWRkaW5nIiwiU0NBTEVfUEFERElORyIsInZpc2libGUiLCJheGlzIiwic2NhbGUiLCJzY2FsZUJhbmQiLCJzY2FsZUxpbmVhciIsIlVOSVRTX1RJTUUiLCJzY2FsZVRpbWUiLCJESVJfQk9UVE9NIiwiYXhpc0JvdHRvbSIsIkRJUl9UT1AiLCJheGlzVG9wIiwidGlja1NpemVJbm5lciIsImNoYXJ0IiwiY2hhcnRIZWlnaHQiLCJ0aWNrVmFsdWVzIiwic2VsZiIsIkRJUl9MRUZUIiwiYXhpc0xlZnQiLCJESVJfUklHSFQiLCJheGlzUmlnaHQiLCJjaGFydFdpZHRoIiwiaXNGdW5jdGlvbiIsImV4dGVybmFsRm9ybWF0dGVyIiwidmFsIiwidW5zaGlmdCIsInVwZGF0ZSIsInRyYW5zZm9ybUF0dHIiLCJheGlzVGFnIiwiZ3JhcGhab25lIiwiYXBwZW5kIiwiYXR0ciIsInRpY2tGb3JtYXQiLCJheGlzTGFiZWxUYWciLCJ0ZXh0IiwiY2xhc3NlZCIsInhUcmFucyIsInlUcmFucyIsInJvdGF0ZSIsIk1hdGgiLCJmbG9vciIsIlhfQVhJU19MQUJFTF9ZIiwibWFyZ2luIiwibGVmdCIsIkJSVVNIWV9CVUZGRVIiLCJyaWdodCIsImxlbmd0aCIsInBhZGRpbmciLCJjbGFtcCIsInJhbmdlIiwiZG9tYWluIiwiaXNOdW1iZXIiLCJ0aWNrVmFsIiwibmV3VGljayIsImRheUxlbmd0aCIsIm1pbnV0ZUxlbmd0aCIsInRpY2tzIiwiY2FsbCIsImxpbWl0VGV4dCIsInRpY2tGbXQiLCJlbXB0eUZuIiwic2VsZWN0QWxsIiwic3R5bGUiLCJkIiwiaSIsInRydW5jYXRlVGV4dCIsInNob3dGbGFnIiwicmVtb3ZlIiwiQ2hhcnRDb21wb25lbnQiLCJUaW1lU2VyaWVzQ2hhcnQiLCJjb250YWluZXIiLCJzdGFydFRpbWUiLCJEYXRlIiwiZGF0YVBhcnNlciIsIkJhc2ljVFNQYXJzZXIiLCJDaGFydEF4aXNQYXJzZXIiLCJFcnJvciIsImlzT2JqZWN0Iiwib3B0aW9ucyIsImRhdGFFeGVjdXRvciIsImFkZERlZmF1bHRUU09wdGlvbnMiLCJjaGFydEluaXRpbGl6ZSIsImRyYXciLCJheGlzT3B0aW9ucyIsInlSYW5nZSIsInlSYW5nZTIiLCJ0aW1lSW5mbyIsImdldE9iamVjdCIsInlBeGlzIiwiY2hhcnRDb21wb25lbnRzQXJyIiwicHVzaCIsInlBeGlzMiIsInRpbWVSYW5nZSIsInhBeGlzIiwidG9vbHRpcE9wdHMiLCJ0b29sdGlwIiwiVG9vbHRpcCIsInpvb21PcHRzIiwibW91c2VIYW5kbGVyIiwiTW91c2VIYW5kbGVyIiwiem9vbSIsInpvb21GbiIsIlpvb20iLCJpc1RvdWNoU2NyZWVuIiwiR2VzdHVyZVpvb20iLCJ6b29tQnJ1c2giLCJvblpvb20iLCJvblhab29tIiwib25ZMVpvb20iLCJvblkyWm9vbSIsInNlcmllcyIsIlRpbWVTZXJpZXMiLCJsZWdlbmQiLCJsZWdlbmRzIiwiVGltZVNlcmllc0xlZ2VuZCIsImxlZ2VuZFByZWZpeCIsImRpc2FibGVTZXJpZXNUb2dnbGUiLCJvbkxlZ2VuZENoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhZnRlckRyYXciLCJyZVNjYWxlWUF4aXMiLCJjaGFydFJlc3BvbnNpdmUiLCJ0cmlnZ2VyTW91c2VBY3Rpb24iLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJvbkNvbXBsZXRlIiwiYXhpc1NwZWNpZmllciIsInRpY2tWYWxBcnIiLCJkaWZmVmFsIiwicmFuZ2VWYWwiLCJ5TWF4IiwiYXBwbHlZMUF4aXMiLCJhcHBseVkyQXhpcyIsIm1vZGlmeUF4aXNQcm9wcyIsInJlU2NhbGVBeGlzIiwicmVxdWlyZWRXaWR0aCIsImNsYXNzIiwibWF4VGV4dCIsImR1bW15RyIsInN2ZyIsInRpY2tzQXJyIiwic2VsZWN0IiwiZWFjaCIsInRpY2tIdG1sIiwiZGF0YSIsImVudGVyIiwiU3RyaW5nIiwiZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoIiwicm91bmQiLCJZX0FYSVNfU1BBQ0UiLCJjaGFydEZ1bGxTcGFjZSIsIndpZHRoIiwiQ2hhcnQiLCJkYXRhT3B0aW9ucyIsImNvbnN0cnVjdENoYXJ0RGF0YSIsImNvbnN0cnVjdFhBeGlzSW5mbyIsImNvbnN0cnVjdFBsb3RJbmZvIiwiY29uc3RydWN0WUF4aXNJbmZvIiwiZXJyIiwib25FcnJvciIsInJlc0pzb24iLCJzZXJpZXNEYXRhIiwidGltZXNlcmllcyIsImNvbHVtbnMiLCJ2YWx1ZXMiLCJ2YWxpZEpTT05UeXBlIiwidGltZVN0YW1wSW5kZXgiLCJmaXJzdFRpbWUiLCJpc0RhdGUiLCJzdGFydCIsImZvckVhY2giLCJnZXREYXRlRnJvbUVwb2MiLCJjaGFydERhdGEiLCJkYXRhSW5kZXgiLCJlYWNoUGxvdFNldCIsInBsb3RTZXQiLCJwbG90SW5mbyIsImZpbmRFYWNoUGxvdFJhbmdlIiwia2V5IiwibWluIiwibWF4IiwibWluVmFsIiwibWF4VmFsIiwic3RhY2siLCJwbG90IiwiZWFjaFBsb3QiLCJJbmZpbml0eSIsInBsb3REYXRhIiwidmFsdWVSYW5nZSIsInZhbERhdGEiLCJtZW1iZXJBcnIiLCJzdGFja09yZGVyTWVtYmVycyIsInN1bSIsIm1lbWJlciIsIm5hbWUiLCJhbGxNYXgiLCJhbGxNYXgyIiwicGxvdEF4aXMiLCJhbGxNaW4iLCJhbGxNaW4yIiwieU1pbiIsInJlZHVjZSIsImEiLCJiIiwiaW5kIiwiZGF0YUNvbG9yQXJyIiwiY29sb3IiLCJ5TGVmdCIsInlSaWdodCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJpc0Jvb2xlYW4iLCJiYXJPcmRlck1lbWJlcnMiLCJyZWdpc3RlckZuIiwibW91c2VCcnVzaCIsInRvcCIsImNhbGxiYWNrIiwiZnVuIiwiTGluZSIsImxpbmVEYXRhIiwieUF4aXNUYXJnZXQiLCJ4QXhpc1RhcmdldCIsIngiLCJpbmRleE9mIiwieSIsImxpbmUiLCJkZWZpbmVkIiwibGluZVRhZyIsImNsaXBFbGVtZW50IiwibGluZVdpZHRoIiwic2VyaWVzTmFtZSIsIlN0YWNrQXJlYSIsInN0YWNrRGF0YSIsInN0YWNrT3JkZXJJbmRleCIsImZpbHRlciIsImVsZSIsIm1hcCIsImQzU3RhY2siLCJhcmVhIiwieTAiLCJ5MSIsImtleXMiLCJvcmRlciIsInN0YWNrT3JkZXJOb25lIiwib2Zmc2V0Iiwic3RhY2tPZmZzZXROb25lIiwic3RhY2tWaXNpYmxlT3JkZXIiLCJzdGFja0xheWVyIiwic3RhY2tNZW1iZXIiLCJwbG90U2VyaWVzIiwiaXNBcnJheSIsIlNlcmllcyIsIlRpbWVTZXJpZXNUb29sdGlwIiwiY3Jvc3NIYWlycyIsImVuYWJsZSIsImZvcm1hdCIsInRvb2xUaXBEaXYiLCJUT09MVElQX1RPUF9CVUZGRVIiLCJyZWdpc3RlciIsInhTY2FsZSIsImRhdGVJbmRleCIsImRhdGFTZXQiLCJiaXNlY3REYXRlIiwiYmlzZWN0b3IiLCJtb3VzZUV2dCIsInhNb3VzZSIsImQzTW91c2UiLCJ5TW91c2UiLCJ4VmFsIiwiaW52ZXJ0IiwiZm91bmQiLCJkQmVmb3JlIiwiZFByZXYiLCJkRm91bmQiLCJ0b29sVGlwRGF0YSIsImRhdGFQYXJzZUxlbiIsInZpc2libGVEYXRhSW5kZXgiLCJwbCIsIm11bHRpQXJyTWFwIiwiZFNldCIsImluZGV4Iiwic29ydCIsIm1heEluZCIsIm1wIiwiYXJyU2V0IiwiZGF0ZUludFJhbmdlIiwiYWJzIiwiaG92ZXIiLCJldmVudE5hbWUiLCJvbiIsImhpZGUiLCJzZXRUaW1lb3V0IiwieFBvcyIsInlQb3MiLCJkaXNwbGF5RGF0YSIsInNob3dIaWRlIiwicGVyY2VudGFnZURpZmYiLCJib3giLCJlbGVtZW50T2Zmc2V0Iiwicm9vdFBvcyIsImhlaWdodCIsImh0bWwiLCJzdGFydFBvcyIsImVuZFBvcyIsImJydXNoWERpdiIsInlTY2FsZUxlZnQiLCJ5U2NhbGVSaWdodCIsInpvb21YIiwic2NhbGVFeHRlbnQiLCJ0cmFuc2xhdGVFeHRlbnQiLCJleHRlbnQiLCJ0b3VjaGFibGUiLCJ6b29tWERpdiIsImlzR2VzdHVyZSIsInRvdWNoZXMiLCJkM1RvdWNoZXMiLCJkM0V2ZW50IiwidXBkYXRlYnJ1c2hYU2VsZWN0aW9uIiwieFBvczEiLCJ4UG9zMiIsInhNaW4iLCJ4TWF4Iiwic3RhcnRWYWwiLCJzdGFydER0IiwiZW5kVmFsIiwiZW5kRHQiLCJicnVzaFlMZWZ0IiwiYnJ1c2hZIiwiYnJ1c2hZTGVmdERpdiIsInNlbGVjdGlvbiIsIm1vdmUiLCJkMCIsImQxIiwiYnJ1c2hZUmlnaHQiLCJicnVzaFlSaWdodERpdiIsImJydXNoT3ZlcmxheSIsImJydXNoWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsZ0JB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QUNBLFdBQUt1USxhQUFMLElBQXNCLEtBQUtBLGFBQUwsQ0FBbUJ0UyxPQUFuQixDQUEyQixXQUEzQixFQUF3QyxDQUFDK0IsUUFBekMsQ0FBdEI7QUFDQSxXQUFLNlEsY0FBTCxJQUF1QixLQUFLQSxjQUFMLENBQW9CNVMsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUMsQ0FBQytCLFFBQTFDLENBQXZCO0FBQ0EsV0FBS3JGLElBQUwsQ0FBVW9CLE9BQVYsR0FBb0JpRSxRQUFwQjtBQUNEOzs7NkJBRVM7QUFDUixVQUFJLEtBQUsrTyxTQUFULEVBQW9CO0FBQ2xCLGFBQUtBLFNBQUwsQ0FBZXhQLElBQWYsQ0FBb0IsS0FBS3dSLE1BQUwsQ0FBWU4sSUFBaEMsRUFBc0MsSUFBdEM7QUFDQSxhQUFLMUIsU0FBTCxJQUFrQixLQUFLQSxTQUFMLENBQWU5TyxNQUFmLEVBQWxCO0FBQ0Q7QUFDRCxVQUFJLEtBQUtzUSxhQUFULEVBQXdCO0FBQ3RCLGFBQUtBLGFBQUwsQ0FBbUJoUixJQUFuQixDQUF3QixLQUFLOFEsVUFBTCxDQUFnQkksSUFBeEMsRUFBOEMsSUFBOUM7QUFDQSxhQUFLRixhQUFMLENBQW1CdFEsTUFBbkI7QUFDRDtBQUNELFVBQUksS0FBSzRRLGNBQVQsRUFBeUI7QUFDdkIsYUFBS0EsY0FBTCxDQUFvQnRSLElBQXBCLENBQXlCLEtBQUtxUixXQUFMLENBQWlCSCxJQUExQyxFQUFnRCxJQUFoRDtBQUNBLGFBQUtJLGNBQUwsQ0FBb0I1USxNQUFwQjtBQUNEO0FBQ0QsV0FBS3RGLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUF6TStCdUYsOEQ7O0FBQWJrQyxtRSIsImZpbGUiOiJ0aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtcbiAgYXhpc0JvdHRvbSwgYXhpc1RvcCwgYXhpc0xlZnQsIGF4aXNSaWdodCxcbiAgc2NhbGVCYW5kLCBzY2FsZUxpbmVhciwgc2NhbGVUaW1lXG59IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2VtcHR5Rm4sIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCB0cnVuY2F0ZVRleHR9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aXMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHVuaXQ6ICcnLFxuICAgICAgcmFuZ2VTY2FsZTogWzAsIDEwMDBdLFxuICAgICAgZG9tYWluU2NhbGU6IFswLCAxMDBdLFxuICAgICAgc2NhbGVUeXBlOiAnJyxcbiAgICAgIGF4aXNDbGFtcDogdHJ1ZSxcbiAgICAgIHRpY2tOdW1iZXI6IG51bGwsXG4gICAgICByb3RhdGVUZXh0OiBmYWxzZSxcbiAgICAgIHRleHRMaW1pdDogOCxcbiAgICAgIHRpY2tGb3JtYXR0ZXI6IGZhbHNlLCAvLyBVc2UgZDMgdGlja0Zvcm1hdHRlclxuICAgICAgc2hvd0dyaWRMaW5lczogZmFsc2UsXG4gICAgICB0aWNrUGFkZGluZzogY29uc3RhbnRzLlRJQ0tfUEFERElORyxcbiAgICAgIHNjYWxlUGFkZGluZzogY29uc3RhbnRzLlNDQUxFX1BBRERJTkcsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIHRoaXMuYXhpcyA9IG51bGxcbiAgICAvLyBDcmVhdGUgQXhpcyBhbmQgU2NhbGUgYmFzZWQgb24gaW5wdXQgb3B0aW9uc1xuICAgIGlmICh0aGlzLm9wdHMuc2NhbGVUeXBlID09PSAnc2NhbGVCYW5kJykge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgICBpZiAodGhpcy5vcHRzLnVuaXQgPT09IGNvbnN0YW50cy5VTklUU19USU1FKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZVRpbWUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09ICd4Jykge1xuICAgICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNCb3R0b20oKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX1RPUCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzVG9wKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigtKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCkpXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBIb2xkcyBhbGwgdGljayB2YWx1ZXMgdGhhdCBheGlzIHNob3dzXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3knKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNMZWZ0KClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzUmlnaHQoKVxuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigwKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikpIHtcbiAgICAgICAgLy8gSWYgZXh0ZXJuYWwgZm9ybWF0dGVyIGlzIHByb3ZpZGVkLCBtb2RpZnkgZm9ybWF0dGVyIHRvIHBvcHVsYXRlIHRpY2tWYWx1ZXNcbiAgICAgICAgY29uc3QgZXh0ZXJuYWxGb3JtYXR0ZXIgPSB0aGlzLm9wdHMudGlja0Zvcm1hdHRlclxuICAgICAgICB0aGlzLm9wdHMudGlja0Zvcm1hdHRlciA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBzZWxmLnRpY2tWYWx1ZXMudW5zaGlmdCh2YWwpXG4gICAgICAgICAgcmV0dXJuIGV4dGVybmFsRm9ybWF0dGVyKHZhbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMudGlja1BhZGRpbmcgPiAwKSB7XG4gICAgICB0aGlzLmF4aXMudGlja1BhZGRpbmcodGhpcy5vcHRzLnRpY2tQYWRkaW5nKVxuICAgIH1cbiAgfVxuXG4gIG1vZGlmeUF4aXNQcm9wcyAob3B0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdHMsIG9wdHMpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gbnVsbFxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKDAsJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHR9KWBcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgYHZjLWF4aXMgdmMtYXhpcy0ke3RoaXMub3B0cy5vcmllbnR9IHZjLWF4aXMtJHt0aGlzLm9wdHMuY2xhc3NOYW1lfWApXG5cblxuICAgIC8vIElmIG5vIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgYXhpcyB1c2VzIGQzIGRlZmF1bHQgZm9ybWF0dGVyXG4gICAgaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikgJiYgdGhpcy5heGlzLnRpY2tGb3JtYXQodGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpXG5cbiAgICAvLyBBZGQgTGFiZWwgdG8gQXhpc1xuICAgIGlmICh0aGlzLm9wdHMubGFiZWwpIHtcbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgPSB0aGlzLmF4aXNUYWcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWF4aXMtbGFiZWwnKVxuICAgICAgICAudGV4dCh0aGlzLm9wdHMubGFiZWwpXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgLy8gSUYgbm90IHZpc2libGUsIERvbnQgc2hvdyB0aGUgYXhpcywgYnV0IHN0aWxsIHNjYWxlIGFuZCBwbG90IG9uIGdyYXBoWm9uZSwgc28gdGhhdCBhbGwgc2VyaWVzIGNhbiBiZSBwbG90dGVkXG4gICAgIXRoaXMub3B0cy52aXNpYmxlICYmIHRoaXMuYXhpc1RhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCB0cnVlKVxuICB9XG5cbiAgLy8gVXBkYXRlcyBncmFwaCBBeGlzIGJhc2VkIG9uIG5ldyB3aWR0aCBhbmQgbW9kaWZ5IHJhbmdlLCBkb21haW4gYW5kIHRpY2tzXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLm9wdHMucmFuZ2VTY2FsZSA9IFswLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aF1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSwwKWBcbiAgICB9XG5cblxuICAgIC8vIFBvc2l0aW9uIGxhYmVsLCBzY2FsZSwgdGlja3MsIGF4aXMgYmFzZWQgb24gY2hhcnQgd2lkdGhcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICBsZXQgeFRyYW5zID0gMFxuICAgICAgbGV0IHlUcmFucyA9IDBcbiAgICAgIGxldCByb3RhdGUgPSAwXG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgICAgeFRyYW5zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAvIDIpXG4gICAgICAgIHlUcmFucyA9IGNvbnN0YW50cy5YX0FYSVNfTEFCRUxfWVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQgfHwgdGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgICAgeFRyYW5zID0gLSh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpICsgY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSAyNzBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4VHJhbnMgPSB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnJpZ2h0IC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSA5MFxuICAgICAgICB9XG4gICAgICAgIHlUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWdcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsXG4gICAgICAgICAgYHRyYW5zbGF0ZSgke3hUcmFuc30sJHt5VHJhbnN9KSByb3RhdGUoJHtyb3RhdGV9KWApXG4gICAgfVxuXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cblxuICAgIGxldCBkb21haW5TY2FsZSA9IFt0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0sIHRoaXMub3B0cy5kb21haW5TY2FsZVt0aGlzLm9wdHMuZG9tYWluU2NhbGUubGVuZ3RoIC0gMV1dXG4gICAgaWYgKHRoaXMub3B0cy5zY2FsZVR5cGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICBkb21haW5TY2FsZSA9IHRoaXMub3B0cy5kb21haW5TY2FsZVxuICAgICAgdGhpcy5zY2FsZVxuICAgICAgICAucGFkZGluZyh0aGlzLm9wdHMuc2NhbGVQYWRkaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0NsYW1wICYmIHRoaXMuc2NhbGUuY2xhbXAoKSAvLyBDbGFtcHMgb3V0c2lkZSByYW5nZSB2YWx1ZSB3aXRoaW4gc3BlY3RpZmVkIHJhbmdlIGFuZCBkb21haW5cbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlLnJhbmdlKHRoaXMub3B0cy5yYW5nZVNjYWxlKVxuICAgICAgLmRvbWFpbihkb21haW5TY2FsZSlcblxuICAgIHRoaXMuYXhpcy5zY2FsZSh0aGlzLnNjYWxlKVxuXG4gICAgaWYgKGlzTnVtYmVyKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgbGV0IHRpY2tWYWwgPSB0aGlzLm9wdHMudGlja051bWJlclxuICAgICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3gnICYmIHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICAvLyBtb2RpZnkgeHRpY2sgdG8gZGlzcGxheSBsZXNzIHRpY2tzIG9uIGxvd2VyIGNoYXJ0IHdpZHRoIG9yIGhhcyBsZXNzIGRheXNcbiAgICAgICAgY29uc3QgbmV3VGljayA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyA2MClcbiAgICAgICAgY29uc3QgZGF5TGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDYwICogMjQgKiAxMDAwKSkgKyAxXG4gICAgICAgIGlmIChkYXlMZW5ndGggPiAyICYmIGRheUxlbmd0aCA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gZGF5TGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW51dGVMZW5ndGggPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuZG9tYWluU2NhbGVbMV0gLSB0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0pIC8gKDYwICogMTAwMCkpXG4gICAgICAgIGlmIChtaW51dGVMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG1pbnV0ZUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1RpY2sgPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG5ld1RpY2tcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmF4aXMudGlja3ModGlja1ZhbClcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tOdW1iZXIpKSB7XG4gICAgICB0aGlzLmF4aXMudGlja3ModGhpcy5vcHRzLnRpY2tOdW1iZXIoKSlcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybUF0dHIgJiYgdGhpcy5heGlzVGFnLmF0dHIoJ3RyYW5zZm9ybScsIHRoaXMudHJhbnNmb3JtQXR0cilcblxuICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyAmJiB0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkpXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnLmNhbGwodGhpcy5heGlzKVxuXG5cbiAgICBjb25zdCBsaW1pdFRleHQgPSB0aGlzLm9wdHMudGV4dExpbWl0XG4gICAgY29uc3QgdGlja0ZtdCA9IGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpID8gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgOiBlbXB0eUZuXG5cbiAgICBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICdzbGFudCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAuYXR0cigneScsICc4JylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0xLjBlbScpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMTVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC02NSknKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cigneCcsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKDkwKScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYXhpc1RhZyAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgJiYgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVtb3ZlIEF4aXMgSW5zdGFuY2VcbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcucmVtb3ZlKClcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5zY2FsZSA9IG51bGxcbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQge2dldE9iamVjdCwgaXNPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgQ2hhcnQgZnJvbSAnQC9jaGFydHMvQ2hhcnQnXG5pbXBvcnQgQXhpcyBmcm9tICdAL2F4aXMnXG5pbXBvcnQge2FkZERlZmF1bHRUU09wdGlvbnN9IGZyb20gJ0AvaGVscGVycydcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQgQ2hhcnRBeGlzUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnRBeGlzUGFyc2VyJ1xuaW1wb3J0IEJhc2ljVFNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9CYXNpY1RTUGFyc2VyJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQC90b29sdGlwL1RpbWVTZXJpZXNUb29sdGlwJ1xuaW1wb3J0IE1vdXNlSGFuZGxlciBmcm9tICdAL21vdXNlLWhhbmRsZXInXG5pbXBvcnQgWm9vbSBmcm9tICdAL3pvb20nXG5pbXBvcnQgR2VzdHVyZVpvb20gZnJvbSAnQC96b29tL0dlc3R1cmVab29tJ1xuaW1wb3J0IFRpbWVTZXJpZXNMZWdlbmQgZnJvbSAnQC9sZWdlbmQvVGltZVNlcmllc0xlZ2VuZCdcbmltcG9ydCBUaW1lU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1RpbWVTZXJpZXMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY1RTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydEF4aXNQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBBZGQgZGVmYXVsdCBvcHRpb25zIHRvIGNoYXJ0XG4gICAgYWRkRGVmYXVsdFRTT3B0aW9ucyh0aGlzLm9wdGlvbnMpXG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcbiAgICBsZXQgYXhpc09wdGlvbnNcbiAgICBjb25zdCB5UmFuZ2UgPSB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgY29uc3QgeVJhbmdlMiA9IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgY29uc3QgdGltZUluZm8gPSB0aGlzLm9wdGlvbnMudGltZUluZm9cblxuICAgIGlmICh5UmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLmxlZnQnKVxuICAgICAgdGhpcy55QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzKVxuICAgIH1cblxuICAgIGlmICh5UmFuZ2UyKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5yaWdodCcpXG4gICAgICB0aGlzLnlBeGlzMiA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ3JpZ2h0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlMixcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmUgKGNoYXJ0IEFQSSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpczIpXG4gICAgfVxuXG4gICAgaWYgKHRpbWVJbmZvLnRpbWVSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueEF4aXMuYm90dG9tJylcbiAgICAgIHRoaXMueEF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3gnLFxuICAgICAgICBvcmllbnQ6ICdib3R0b20nLFxuICAgICAgICByYW5nZVNjYWxlOiBbMCwgdGhpcy5jaGFydFdpZHRoXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHRpbWVJbmZvLnRpbWVSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueEF4aXMpXG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcE9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMudG9vbHRpcCcpXG4gICAgaWYgKHRvb2x0aXBPcHRzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIC4uLnRvb2x0aXBPcHRzXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnRvb2x0aXApXG4gICAgfVxuXG4gICAgY29uc3Qgem9vbU9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMuem9vbScsIHt9KVxuICAgIGlmICgodG9vbHRpcE9wdHMudmlzaWJsZSB8fCB6b29tT3B0cy52aXNpYmxlKSkge1xuICAgICAgdGhpcy5tb3VzZUhhbmRsZXIgPSBuZXcgTW91c2VIYW5kbGVyKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLm1vdXNlSGFuZGxlcilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnpvb20udmlzaWJsZSkge1xuICAgICAgbGV0IHpvb21GbiA9IFpvb21cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgICB6b29tRm4gPSBHZXN0dXJlWm9vbVxuICAgICAgfVxuICAgICAgdGhpcy56b29tQnJ1c2ggPSBuZXcgem9vbUZuKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIG9uWm9vbTogdGhpcy5vcHRpb25zLnpvb20ub25YWm9vbSxcbiAgICAgICAgb25ZMVpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWTFab29tLFxuICAgICAgICBvblkyWm9vbTogdGhpcy5vcHRpb25zLnpvb20ub25ZMlpvb21cbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuem9vbUJydXNoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICB0aGlzLnNlcmllcyA9IG5ldyBUaW1lU2VyaWVzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmVcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5zZXJpZXMpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5sZWdlbmQudmlzaWJsZSkge1xuICAgICAgdGhpcy5sZWdlbmRzID0gbmV3IFRpbWVTZXJpZXNMZWdlbmQoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgbGVnZW5kUHJlZml4OiB0aGlzLm9wdGlvbnMubGVnZW5kLmxlZ2VuZFByZWZpeCxcbiAgICAgICAgcG9zaXRpb246IGNvbnN0YW50cy5ESVJfVE9QLFxuICAgICAgICBkaXNhYmxlU2VyaWVzVG9nZ2xlOiB0aGlzLm9wdGlvbnMubGVnZW5kLmRpc2FibGVTZXJpZXNUb2dnbGUsXG4gICAgICAgIG9uTGVnZW5kQ2hhbmdlOiB0aGlzLm9wdGlvbnMubGVnZW5kLm9uTGVnZW5kQ2hhbmdlXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLmxlZ2VuZHMpXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc29sZS5sb2coJ1RpbWVTZXJpZXNDaGFydCBkcmF3JywgdGhpcylcbiAgICBzdXBlci5kcmF3KClcbiAgICB0aGlzLm9wdGlvbnMuYWZ0ZXJEcmF3LmNhbGwodGhpcylcblxuICAgIC8vIEFkZCBFeHRyYSBCdWZmZXIgZm9yIG1heCBZIHZhbHVlIGFuZCBwcm92aWRlIHNwYWNlIHRvIGRpc3BsYXkgYWxsIHRpY2tzIGluIGdyYXBoWm9uZVxuICAgIHRoaXMucmVTY2FsZVlBeGlzKClcblxuICAgIHRoaXMuY2hhcnRSZXNwb25zaXZlKClcblxuICAgIHRoaXMubW91c2VIYW5kbGVyICYmIHRoaXMubW91c2VIYW5kbGVyLnRyaWdnZXJNb3VzZUFjdGlvbigpXG5cbiAgICB0aGlzLnRpbWVEaWZmID0gKG5ldyBEYXRlKClcbiAgICAgIC5nZXRUaW1lKCkgLSB0aGlzLm9wdGlvbnMuc3RhcnRUaW1lLmdldFRpbWUoKSlcbiAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZS5jYWxsKHRoaXMsIHRoaXMudGltZURpZmYpXG4gIH1cblxuICAvLyBGaW5kIG5leHQgcG9zc2libGUgdGljayB0byBkaXNwbGF5IG1heCBZIHZhbHVlIGFuZCBhZGp1c3QgbWFyZ2luIHRvIHNob3cgYWxsIHRpY2sgbGFiZWxzIGNvbXBsZXRlbHlcbiAgcmVTY2FsZVlBeGlzIChheGlzU3BlY2lmaWVyKSB7XG5cbiAgICBsZXQgdGlja1ZhbEFyclxuICAgIGxldCBkaWZmVmFsXG4gICAgbGV0IHJhbmdlVmFsXG4gICAgbGV0IHlNYXhcbiAgICBsZXQgYXBwbHlZMUF4aXMgPSB0cnVlXG4gICAgbGV0IGFwcGx5WTJBeGlzID0gdHJ1ZVxuXG4gICAgaWYgKGF4aXNTcGVjaWZpZXIgPT09IGNvbnN0YW50cy5ESVJfTEVGVCkge1xuICAgICAgYXBwbHlZMkF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICBhcHBseVkxQXhpcyA9IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgTWF4IHZhbHVlIGlzIHByb3ZpZGVkIGluIG9wdGlvbnMsIERvbnQgY29tcHV0ZSBuZXh0IHBvc3NpYmxlIHRpY2suXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UgJiYgYXBwbHlZMUF4aXMgJiYgIU51bWJlci5pc0Zpbml0ZSh5TWF4KSkge1xuICAgICAgdGlja1ZhbEFyciA9IHRoaXMueUF4aXMudGlja1ZhbHVlc1xuICAgICAgLy8gSWYgdGlja1ZhbEFyciBjb250YWlucyB2YWx1ZXNcbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gRmluZCBkaWZmZXJlbmNlIG9mIGxhc3QgYW5kIGxhc3QgcHJldmlvdXMgdGljayB2YWx1ZXMgb2YgWSBBeGlzXG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICAvLyBOZXcgcmFuZ2UgaXMgaW5jcmVhc2VkIGJ5IGFib3ZlIGRpZmZlcmVuY2VcbiAgICAgICAgcmFuZ2VWYWwgPSB0aWNrVmFsQXJyWzBdICsgZGlmZlZhbFxuXG4gICAgICAgIC8vIE1vZGlmeSBuZXcgbWF4IHJhbmdlIGZvciB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZVsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IHRoaXMub3B0aW9ucy55UmFuZ2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB5TWF4ID0gZ2V0T2JqZWN0KHRoaXMub3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1heCcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UyICYmIGFwcGx5WTJBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzMi50aWNrVmFsdWVzXG5cbiAgICAgIGlmICh0aWNrVmFsQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZGlmZlZhbCA9IHRpY2tWYWxBcnJbMF0gLSB0aWNrVmFsQXJyWzFdXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICB0aGlzLm9wdGlvbnMueVJhbmdlMlsxXSA9IHJhbmdlVmFsXG5cbiAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICB0aGlzLnlBeGlzMi5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkanVzdHMgWSBheGlzIHdpZHRoIGJhc2VkIG9uIG1heCB0ZXh0IGxlbmd0aCBkaXNwbGF5ZWRcbiAgICBjb25zdCByZVNjYWxlQXhpcyA9IHt9XG4gICAgbGV0IHJlcXVpcmVkV2lkdGggPSAwXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZSkge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXSA9IHt9XG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLmNsYXNzID0gJy52Yy1heGlzLWxlZnQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX0xFRlRdLm1heFRleHQgPSAnJ1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMikge1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0uY2xhc3MgPSAnLnZjLWF4aXMtcmlnaHQnXG4gICAgICByZVNjYWxlQXhpc1tjb25zdGFudHMuRElSX1JJR0hUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGR1bW15IHN2ZyB0byBhZGQgTWF4IGxlbmd0aCB0aWNrIHZhbHVlcyBhbmQgY2hlY2sgaXRzIHJlcXVpcmVkIHdpZHRoIGluIGNoYXJ0XG4gICAgY29uc3QgZHVtbXlHID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1heGlzJylcblxuICAgIGZvciAoY29uc3QgYXhpcyBpbiByZVNjYWxlQXhpcykge1xuICAgICAgY29uc3QgdGlja3NBcnIgPSB0aGlzLmNvbnRhaW5lci5zZWxlY3QoJ3N2ZyAnICsgcmVTY2FsZUF4aXNbYXhpc10uY2xhc3MpLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICB0aWNrc0Fyci5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGNvbnN0IHRpY2tIdG1sID0gc2VsZWN0KHRoaXMpLnRleHQoKSB8fCAnJ1xuICAgICAgICBpZiAodGlja0h0bWwubGVuZ3RoID4gcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0ID0gdGlja0h0bWxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZHVtbXlHLnNlbGVjdEFsbCgnLmR1bW15VGV4dCcpXG4gICAgICAgIC5kYXRhKFtyZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0XSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC50ZXh0KFN0cmluZylcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAvLyBDb21wdXRlIHJlcXVpcmVkV2lkdGggZm9yIHRoZSBNYXggdGV4dFxuICAgICAgICAgIHJlcXVpcmVkV2lkdGggPSB0aGlzLmdldENvbXB1dGVkVGV4dExlbmd0aCgpXG4gICAgICAgIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSByZXNwZWN0aXZlIG1hcmdpbiB0byBmaXQgaW4gdGlja3MgdGV4dFxuICAgICAgdGhpcy5tYXJnaW5bYXhpc10gPSBNYXRoLnJvdW5kKHJlcXVpcmVkV2lkdGgpICsgY29uc3RhbnRzLllfQVhJU19TUEFDRVxuXG4gICAgfVxuICAgIGR1bW15Ry5yZW1vdmUoKVxuXG4gICAgdGhpcy5jaGFydFdpZHRoID0gKHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cbiIsImltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQge2dldERhdGVGcm9tRXBvYywgZ2V0T2JqZWN0LCByZWZpbmVTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzQm9vbGVhbn0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNUU1BhcnNlciBleHRlbmRzIENoYXJ0QXhpc1BhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cylcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gIH1cblxuICBkYXRhRXhlY3V0b3IgKCkge1xuICAgIC8vIE9yZGVyIGluIHdoaWNoIHRoZSBEYXRhUHJvY2Vzc29yIEFQSXMgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLmRhdGFPcHRpb25zID0ge31cbiAgICAgIHRoaXMub3B0cy5kYXRhICYmICh0aGlzLmRhdGFPcHRpb25zLmRhdGEgPSB0aGlzLm9wdHMuZGF0YSlcbiAgICAgIHRoaXMub3B0cy5zZXJpZXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMuc2VyaWVzID0gdGhpcy5vcHRzLnNlcmllcylcbiAgICAgIHRoaXMub3B0cy55QXhpcyAmJiAodGhpcy5kYXRhT3B0aW9ucy55QXhpcyA9IHRoaXMub3B0cy55QXhpcylcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdENoYXJ0RGF0YSgpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFhBeGlzSW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFBsb3RJbmZvKCkpXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgIHJldHVybiB0aGlzLmRhdGFPcHRpb25zXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbmNvdW50ZXJlZCB3aGlsZSB0aW1lc2VyaWVzIEpTT04gcGFyc2luZyA6JywgZXJyKVxuICAgICAgdGhpcy5vcHRzLm9uRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgLSBFcnJvciBvbiB0aW1lc2VyaWVzIEpTT04gcGFyc2luZycpXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0Q2hhcnREYXRhICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgY29uc3QgZGF0YSA9IHNlcmllc0RhdGEudmFsdWVzXG4gICAgY29uc3QgdmFsaWRKU09OVHlwZSA9IChjb2x1bW5zLmxlbmd0aCAmJiBkYXRhLmxlbmd0aClcblxuICAgIC8vIEZpbmQgc2Vjb25kcyBpbiB1bml0QXJyIHRvIGZpbmQgdGhlIHRpbWVTdGFtcEluZGV4XG4gICAgY29uc3QgdGltZVN0YW1wSW5kZXggPSAwXG4gICAgY29uc3QgZmlyc3RUaW1lID0gZGF0YVswXVt0aW1lU3RhbXBJbmRleF1cbiAgICBpZiAoIXZhbGlkSlNPTlR5cGUgfHwgIShpc051bWJlcihmaXJzdFRpbWUpIHx8IGlzRGF0ZShmaXJzdFRpbWUpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFRpbWUgc2VyaWVzIEpTT04gcmVjZWl2ZWQnKVxuICAgIH1cblxuICAgIGxldCBzdGFydCA9IDBcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmIChzdGFydCA+IGRbdGltZVN0YW1wSW5kZXhdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkOiBUaW1lc3RhbXAgVmFsdWVzIG11c3QgYmUgaW4gYXNjZW5kaW5nIG9yZGVyJylcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gZFt0aW1lU3RhbXBJbmRleF1cbiAgICAgIGRbdGltZVN0YW1wSW5kZXhdID0gZ2V0RGF0ZUZyb21FcG9jKGRbdGltZVN0YW1wSW5kZXhdLCB0cnVlKSAvLyBjb252ZXJ0IEVQT0MgdG8gZGF0ZVxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhcnREYXRhOiBkYXRhXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WEF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gZGF0YU9wdGlvbnMuY2hhcnREYXRhXG4gICAgY29uc3QgZGF0YUluZGV4ID0gMFxuICAgIHJldHVybiB7XG4gICAgICB0aW1lSW5mbzoge1xuICAgICAgICBkYXRhSW5kZXgsXG4gICAgICAgIHRpbWVSYW5nZTogW3Nlcmllc0RhdGFbMF1bZGF0YUluZGV4XSwgc2VyaWVzRGF0YVsoc2VyaWVzRGF0YS5sZW5ndGggLSAxKV1bZGF0YUluZGV4XV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RZQXhpc0luZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gZGF0YU9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IHBsb3RJbmZvID0gZGF0YU9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IHlBeGlzID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdCcpXG4gICAgY29uc3QgeUF4aXMyID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQnKVxuICAgIGxldCBmaW5kRWFjaFBsb3RSYW5nZSA9IGZhbHNlXG4gICAgbGV0IGtleVxuICAgIGxldCB5UmFuZ2UgPSBudWxsXG4gICAgbGV0IHlSYW5nZTIgPSBudWxsXG5cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpcy5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpcy5tYXgpKSB7XG4gICAgICAgIHlSYW5nZSA9IFt5QXhpcy5taW4sIHlBeGlzLm1heF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeUF4aXMyKSB7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHlBeGlzMi5taW4pICYmIE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWF4KSkge1xuICAgICAgICB5UmFuZ2UyID0gW3lBeGlzMi5taW4sIHlBeGlzMi5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgeVJhbmdlIGlzIG5vdCBzZXQgZnJvbSBncmFwaE9wdGlvbnMsIHRoZW4gZ28gaW5zaWRlXG4gICAgaWYgKCh5QXhpcyAmJiAheVJhbmdlKSB8fCAoeUF4aXMyICYmICF5UmFuZ2UyKSkge1xuXG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1pblZhbCkgfHwgIU51bWJlci5pc0Zpbml0ZShlYWNoUGxvdFNldFtrZXldLm1heFZhbCkpIHtcbiAgICAgICAgICBmaW5kRWFjaFBsb3RSYW5nZSA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgocGxvdEluZm8uc3RhY2sgJiYgcGxvdEluZm8uc3RhY2subGVuZ3RoKSB8fCBmaW5kRWFjaFBsb3RSYW5nZSkge1xuXG4gICAgICAgIGlmIChmaW5kRWFjaFBsb3RSYW5nZSkge1xuICAgICAgICAgIC8vIFJlc2V0IHJhbmdlIGZvciBlYWNoIHBsb3QgZm9yIGZpbmRpbmcgbWluICwgbWF4XG4gICAgICAgICAgZm9yIChjb25zdCBwbG90IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgICAgICBjb25zdCBlYWNoUGxvdCA9IGVhY2hQbG90U2V0W3Bsb3RdXG4gICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSBJbmZpbml0eVxuICAgICAgICAgICAgZWFjaFBsb3QubWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgc3RhY2sgcmFuZ2UgZm9yIGVhY2ggc3RhY2sgZm9yIGZpbmRpbmcgbWluICwgbWF4XG4gICAgICAgIHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZSA9IFtJbmZpbml0eSwgLUluZmluaXR5XVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBNYXggYW5kIE1pbiBmb3IgZWFjaCBwbG90cyBzZXJpZXNcbiAgICAgICAgbGV0IHZhbERhdGEgPSAwXG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGlmIChmaW5kRWFjaFBsb3RSYW5nZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwbG90IGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVhY2hQbG90ID0gZWFjaFBsb3RTZXRbcGxvdF1cbiAgICAgICAgICAgICAgdmFsRGF0YSA9IGRbZWFjaFBsb3QuZGF0YUluZGV4XVxuICAgICAgICAgICAgICBpZiAodmFsRGF0YSA8IGVhY2hQbG90Lm1pblZhbCkge1xuICAgICAgICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodmFsRGF0YSA+IGVhY2hQbG90Lm1heFZhbCkge1xuICAgICAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgICAgbGV0IHN1bSA9IDBcbiAgICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgc3VtICs9IChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSA/IGRbZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLmRhdGFJbmRleF0gOiAwKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHN1bSA8IHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0pIHtcbiAgICAgICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZVswXSA9IHN1bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bSA+IHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0pIHtcbiAgICAgICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZVsxXSA9IHN1bVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgTWF4IHZhbHVlIHJlcXVpcmVkIHRvIHBsb3Qgb24gZ3JhcGggYmFzZWQgb24gdmlzaWJsZSBwbG90IGZ1bmN0aW9uIC4gaS5lIGxpbmUgb3Igc3RhY2tcbiAgICAgIGxldCBhbGxNYXggPSAtSW5maW5pdHlcbiAgICAgIGxldCBhbGxNYXgyID0gLUluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgICBpZiAoa2V5ID09PSAnbGluZScpIHtcbiAgICAgICAgICBwbG90SW5mb1trZXldLmZvckVhY2goZnVuY3Rpb24gKHBsb3REYXRhKSB7XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLm1heFZhbCA+IGFsbE1heCkge1xuICAgICAgICAgICAgICBhbGxNYXggPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlICYmIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLm1heFZhbCA+IGFsbE1heDIpIHtcbiAgICAgICAgICAgICAgYWxsTWF4MiA9IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLm1heFZhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgcGxvdERhdGEudmFsdWVSYW5nZVsxXSA+IGFsbE1heCkge1xuICAgICAgICAgICAgICBhbGxNYXggPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxvdERhdGEucGxvdEF4aXNbMF0gPT09ICdyaWdodCcgJiYgcGxvdERhdGEudmFsdWVSYW5nZVsxXSA+IGFsbE1heDIpIHtcbiAgICAgICAgICAgICAgYWxsTWF4MiA9IHBsb3REYXRhLnZhbHVlUmFuZ2VbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgbWluIHZhbHVlIGp1c3QgYnkgY2hlY2tpbmcgbWluIHZhbHVlIGFtb25nIGFsbCBzZXJpZXMgZGF0YVxuICAgICAgbGV0IGFsbE1pbiA9IEluZmluaXR5XG4gICAgICBsZXQgYWxsTWluMiA9IEluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbikge1xuICAgICAgICAgIGFsbE1pbiA9IGVhY2hQbG90U2V0W2tleV0ubWluVmFsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdyaWdodCcgJiYgZWFjaFBsb3RTZXRba2V5XS52aXNpYmxlICYmIGVhY2hQbG90U2V0W2tleV0ubWluVmFsIDwgYWxsTWluMikge1xuICAgICAgICAgIGFsbE1pbjIgPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgbGV0IHlNaW4sIHlNYXhcbiAgICAgIC8vIElmIFlheGlzIHJhbmdlIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBvcHRpb25zLCBPdmVycmlkZSBpdC5cbiAgICAgIGlmIChbYWxsTWluLCBhbGxNYXhdLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKGEpICYmIE51bWJlci5pc0Zpbml0ZShiKVxuICAgICAgfSkpIHtcbiAgICAgICAgeU1pbiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW5cbiAgICAgICAgeU1heCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQubWF4JylcbiAgICAgICAgeU1heCA9IE51bWJlci5pc0Zpbml0ZSh5TWF4KSA/IHlNYXggOiBhbGxNYXhcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UgPSBbeU1pbiwgeU1heF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh5QXhpcykge1xuICAgICAgICAgIHlSYW5nZSA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgaWYgKFthbGxNaW4yLCBhbGxNYXgyXS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5taW4nKVxuICAgICAgICB5TWluID0gTnVtYmVyLmlzRmluaXRlKHlNaW4pID8geU1pbiA6IGFsbE1pbjJcbiAgICAgICAgeU1heCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4MlxuICAgICAgICBpZiAoIXlNYXgpIHtcbiAgICAgICAgICB5TWF4ID0geU1pbiArIDgwIC8vIFNldCBhcyBkZWZhdWx0IDEwMCBpZiByYW5nZSBpcyBbMCwwXVxuICAgICAgICB9XG4gICAgICAgIHlSYW5nZTIgPSBbeU1pbiwgeU1heF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh5QXhpczIpIHtcbiAgICAgICAgICB5UmFuZ2UyID0gWzAsIDgwXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlSYW5nZTIgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeVJhbmdlOiB5UmFuZ2UsXG4gICAgICB5UmFuZ2UyOiB5UmFuZ2UyXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0UGxvdEluZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHJlc0pzb24gPSBkYXRhT3B0aW9ucy5kYXRhXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IHJlc0pzb24udGltZXNlcmllc1xuICAgIGNvbnN0IGNvbHVtbnMgPSBzZXJpZXNEYXRhLmNvbHVtbnNcbiAgICBsZXQgaW5kID0gMFxuICAgIC8vIE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBwbG90IGZ1bmN0aW9ucyBuZWVkZWQgZm9yIHRoZSBjaGFydFxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0ge31cbiAgICAvLyBTZXQgb2YgcnVsZXMgdGhhdCBjaGFydHMgbmVlZHMgdG8gYmUgZHJhdyBvbiB0aW1lU2VyaWVzQ2hhcnRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGxldCBrZXlcblxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gZGF0YU9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4XG4gICAgY29uc3QgZGF0YUNvbG9yQXJyID0gc2VyaWVzRGF0YS5jb2xvciB8fCBbXVxuICAgIGNvbnN0IHlMZWZ0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdCcpXG4gICAgY29uc3QgeVJpZ2h0ID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQnKVxuXG4gICAgLy8gR2VuZXJhdGUgZWFjaFBsb3RTZXQgdXNpbmcgY29sdW1uc1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgaWYgKHRpbWVTdGFtcEluZGV4ID09PSBpbmQpIHtcbiAgICAgICAgaW5kKytcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyBDb252ZXJ0IHRoZSBTZXJpZXMgTmFtZSB0byBKUyBzdWl0YWJsZSBvYmplY3QgbWFwcGVkIG5hbWUgZXg6IGFiYyglKSAxIC0tPiBhYmMxXG4gICAgICBjb25zdCByZWZpbmVOYW1lID0gcmVmaW5lU3RyaW5nKGQpXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXSA9IHtcbiAgICAgICAgbmFtZTogZCxcbiAgICAgICAgZGF0YUluZGV4OiBpbmQsXG4gICAgICAgIG1pblZhbDogSW5maW5pdHksXG4gICAgICAgIG1heFZhbDogLUluZmluaXR5LFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjogZGF0YUNvbG9yQXJyW2luZF0gfHwgJyMwMDAnXG4gICAgICB9XG4gICAgICBpbmQrK1xuICAgIH0pXG5cblxuICAgIGZvciAoa2V5IGluIHBsb3RJbmZvKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbGluZScpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIHBsb3REYXRhLm5hbWUgPSByZWZpbmVTdHJpbmcocGxvdERhdGEubmFtZSlcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHBsb3REYXRhLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgIHRocm93IGBDb2xvciBub3QgcHJlc2VudCBmb3Igc2VyaWVzICR7cGxvdERhdGEubmFtZX1gXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gcGxvdERhdGEucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICBpc0Jvb2xlYW4ocGxvdERhdGEudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgPSBwbG90RGF0YS52aXNpYmxlKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdGFjaycpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLnN0YWNrT3JkZXJNZW1iZXJzXG4gICAgICAgICAgcGxvdERhdGEudmFsdWVSYW5nZSA9IFtJbmZpbml0eSwgLUluZmluaXR5XVxuICAgICAgICAgIG1lbWJlckFyci5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgIG1lbWJlci5uYW1lID0gcmVmaW5lU3RyaW5nKG1lbWJlci5uYW1lKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBtZW1iZXIuY29sb3IgLy8gQXBwbHkgY29sb3IgZm9yIGVhY2ggUGxvdCBzZXJpZXMgb3IgcGljayBmcm9tIGRhdGEgY29sb3IgQXJyXG4gICAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICAgIHRocm93IGBDb2xvciBub3QgcHJlc2VudCBmb3Igc2VyaWVzICR7cGxvdERhdGEubmFtZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLmNvbG9yID0gY29sb3IpXG4gICAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IG1lbWJlci5wbG90QXhpcyB8fCBbJ2xlZnQnLCAnYm90dG9tJ11cbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5wbG90QXhpcyA9IHBsb3RBeGlzXG4gICAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgICBpc0Jvb2xlYW4obWVtYmVyLnZpc2libGUpICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udmlzaWJsZSA9IG1lbWJlci52aXNpYmxlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2JhcicpIHtcbiAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgIGNvbnN0IG1lbWJlckFyciA9IHBsb3REYXRhLmJhck9yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXJpZXM6IHBsb3RJbmZvLCAvLyBuZXdseSB1cGRhdGVkIHNlcmllcyBmcm9tIHVzZXIgb3B0aW9ucyBoYXZpbmcgYWRkaXRpb25hbCBpbmZvIG9mIGVhY2ggc2VyaWVzXG4gICAgICBwbG90U2V0OiBlYWNoUGxvdFNldCwgLy8gSW5mbyBvZiBlYWNoIHBsb3QgbGlrZSBjb2xvciwgbWF4LCBtaW4gZXRjXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlSGFuZGxlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuID0gW11cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaCA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFgnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuYXR0cigncG9pbnRlci1ldmVudHMnLCAnYWxsJylcbiAgICAgIC5hdHRyKCdzdHlsZScsICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCknKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnR9LCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3B9KWApXG5cbiAgICBpZiAodGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuaXNUb3VjaFNjcmVlbikge1xuICAgICAgdGhpcy5tb3VzZUJydXNoLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0cy5jaGFydC5vcHRpb25zLnpvb20udmlzaWJsZSB8fCB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICAvLyB4LVpvb20gZm9yIGNoYXJ0IGRvZXN0IG5vdCBleGlzdCwgQWRkIHJlY3Qgb3ZlcmxheSBmb3IgYnJ1c2hYRGl2IG9yIGFkZCBJbiBjYXNlIG9mIHpvb20gd2l0aCB0b3VjaCBzY3JlZW5cbiAgICAgIHRoaXMubW91c2VCcnVzaC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnb3ZlcmxheScpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuICAgIGlmICghdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuem9vbS52aXNpYmxlIHx8IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5zZWxlY3QoJ3JlY3Qub3ZlcmxheScpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMubW91c2VCcnVzaCAmJiB0aGlzLm1vdXNlQnJ1c2guY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICB9XG5cbiAgcmVnaXN0ZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vcHRzLnJlZ2lzdGVyRm4ucHVzaChjYWxsYmFjaylcbiAgfVxuXG4gIHRyaWdnZXJNb3VzZUFjdGlvbiAoKSB7XG4gICAgdGhpcy5vcHRzLnJlZ2lzdGVyRm4uZm9yRWFjaCgoZnVuKSA9PiB7XG4gICAgICBmdW4uY2FsbCh0aGlzKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaCAmJiB0aGlzLm1vdXNlQnJ1c2gucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQge2dldE9iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7bGluZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIERvIG5vdCByZWdpc3RlciB0aGlzIGNvbXBvbmVudCBpbiBjaGFydENvbXBvbmVudHNBcnIsICBBcyB0aGUgc2VyaWVzIGNvbXBvbmVudCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgYW5kIHdpbGwgY2FsbCB0aGUgbGluZSBBUElzXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIGxpbmVEYXRhOiBudWxsLFxuICAgICAgeUF4aXNUYXJnZXQ6IG51bGwsXG4gICAgICB4QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMubGluZSA9IGxpbmUoKVxuXG4gICAgaWYgKHRoaXMub3B0cy55QXhpc1RhcmdldCkge1xuICAgICAgLy8gRm9yIG5vcm1hbCBzZXJpZXMsIHlBeGlzVGFyZ2V0IHJlZmVycyB0byB0aGUgaW5kZXggb2YgdGhpcyBzZXJpZXMgaW4gZGF0YSBBcnJcbiAgICAgIHRoaXMubGluZVxuICAgICAgICAuZGVmaW5lZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkW3NlbGYub3B0cy55QXhpc1RhcmdldF0gIT0gbnVsbFxuICAgICAgICB9KVxuICAgICAgICAueChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIC8vIHhBeGlzVGFyZ2V0IHJlZmVycyB0aGUgaW5kZXggb2YgZGF0ZSBpbiBkYXRhIEFyclxuICAgICAgICAgIHJldHVybiB4KGRbc2VsZi5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4geShkW3NlbGYub3B0cy55QXhpc1RhcmdldF0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLmxpbmVUYWcgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLnNlbGVjdEFsbCgnLnZjLWxpbmUtJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuZGF0YShbdGhpcy5vcHRzLmxpbmVEYXRhXSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1saW5lLXBsb3QgdmMtbGluZS0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNsaXBFbGVtZW50ID0gdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lci5zZWxlY3QoJ3N2ZyBjbGlwUGF0aCcpXG4gICAgLy8gQWRkaW5nIHRoZSBsaW5lcyBzZXJpZXMgZm9yIGRhdGEgdG8gYmUgc2hvd25cbiAgICB0aGlzLmxpbmVUYWcuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGluZScpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ3RyYW5zcGFyZW50JylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQubGluZVdpZHRoIHx8ICcycHgnXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gc2VsZi5saW5lKGQudmFsdWVzKSAvLyBWYWx1ZXMgYXJlIGFycmF5IG9mIGFycmF5IGhhdmluZyBmb3JtYXQgbGlrZSAgW1tkYXRlLCBzZXJpZXMxLCBzZXJpZXMyIC4uLi5dLC4uLl1cbiAgICAgIH0pXG4gIH1cblxuICAvLyBVcGRhdGUgaGFwcGVucyB3aGVuIHRoZSBjaGFydCBpcyByZXNpemVkXG4gIHVwZGF0ZSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnNlbGVjdCgncGF0aCcpLmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIHNlbGYubGluZShkLnZhbHVlcylcbiAgICB9KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IHNlcmllc05hbWUgPSB0aGlzLm9wdHMubGluZURhdGEubmFtZVxuICAgIC8vIFJlbW92ZSBsaW5lIHNlcmllc1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcucmVtb3ZlKClcblxuICAgIGlmIChlYWNoUGxvdFNldCAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXSAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXS52aXNpYmxlKSB7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuICB9XG4gIFxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcucmVtb3ZlKClcbiAgICB0aGlzLmxpbmUgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG5cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHthcmVhLCBzdGFjaywgc3RhY2tPcmRlck5vbmUsIHN0YWNrT2Zmc2V0Tm9uZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrQXJlYSBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcGxvdEF4aXM6IFtjb25zdGFudHMuRElSX0xFRlQsIGNvbnN0YW50cy5ESVJfQk9UVE9NXSxcbiAgICAgIHhBeGlzVGFyZ2V0OiAnJyxcbiAgICAgIHN0YWNrRGF0YTogbnVsbCxcbiAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiB7fSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBEZWZpbmUgaW4gd2hhdCBvcmRlciwgU3RhY2sgc2VyaWVzIG5lZWRzIHRvIGJlIHBsb3RlZFxuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cblxuICAgIC8vIEZpbmQgeCBhbmQgeSBheGlzIGJhc2VkIG9uIHBsb3RBeGlzXG4gICAgbGV0IHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1RPUCkgPiAtMSkge1xuICAgICAgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIGxldCB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9SSUdIVCkgPiAtMSkge1xuICAgICAgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpczIuc2NhbGUnKVxuICAgIH1cblxuICAgIHRoaXMub3B0cy5kM1N0YWNrID0gc3RhY2soKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChkLmRhdGFbc2VsZi5vcHRzLnhBeGlzVGFyZ2V0XSlcbiAgICAgIH0pXG4gICAgICAueTAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZFswXSkgLy8gSW5kaWNhdGVzIHdoZXJlIHRvIHN0YXJ0IGFsb25nIFlBeGlzXG4gICAgICB9KVxuICAgICAgLnkxKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGRbMV0pIC8vIEluZGljYXRlcyB3aGVyZSB0byBlbmQgYWxvbmcgWUF4aXNcbiAgICAgIH0pXG5cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG5cbiAgICB0aGlzLm9wdHMuZDNTdGFjay5rZXlzKHRoaXMub3B0cy5zdGFja09yZGVySW5kZXgpIC8vIHNwZWNpZnkgdGhlIHN0YWNrIHNlcmllcyBuYW1lcyBpbiBhcnJheSBmb3JtYXRcbiAgICB0aGlzLm9wdHMuZDNTdGFjay5vcmRlcihzdGFja09yZGVyTm9uZSkgLy8gdXNlIHRoZSBnaXZlbiBzZXJpZXMgb3JkZXIuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sub2Zmc2V0KHN0YWNrT2Zmc2V0Tm9uZSkgLy8gYXBwbHkgYSB6ZXJvIGJhc2VsaW5lIG9uIHN0YXJ0XG5cbiAgICAvLyBTaG93IHN0YWNrIHBsb3QgZm9yIG9ubHkgc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgY29uc3Qgc3RhY2tWaXNpYmxlT3JkZXIgPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcblxuICAgIHRoaXMuc3RhY2tMYXllciA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtc3RhY2stJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuZGF0YSh0aGlzLm9wdHMuZDNTdGFjayh0aGlzLm9wdHMuc3RhY2tEYXRhKSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1zdGFjay1wbG90IHZjLXN0YWNrLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyLnNlbGVjdCgnc3ZnIGNsaXBQYXRoJylcblxuICAgIC8vIFBMb3Qgc3RhY2tMYXllciBiYXNlZCBvbiBlYWNoIHNlcmllcyB2aXNpYmxpdHlcbiAgICB0aGlzLnN0YWNrTGF5ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAndmMtc3RhY2sgdmMtc3RhY2stJyArIHN0YWNrTWVtYmVyLm5hbWVcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtzdGFja01lbWJlci5uYW1lXS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgdGhpcy5hcmVhKVxuXG4gIH1cbiAgXG4gIC8vIFVwZGF0ZSBzdGFja0xheWVyIGJhc2VkIG9uIGNoYXJ0IHJlc2l6ZVxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIHRoaXMuYXJlYSlcbiAgfVxuICBcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgc3RhY2tPcmRlciBhcnIgYmFzZWQgb24gdmlzaWJsZVNlcmllc1xuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgc3RhY2sgc2VyaWVzXG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIC8vIGRyYXcgd2l0aCBuZXcgc3RhY2tPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG4gIFxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLnN0YWNrTGF5ZXIuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuICBcbiAgcmVtb3ZlICgpIHtcbiAgICAvLyAgdGhpcy5zdGFja0FyZWFQYXRoLnJlbW92ZSgpO1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMuZDNTdGFjayA9IG51bGxcbiAgICB0aGlzLmFyZWEgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IHtpc0FycmF5fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IExpbmUgZnJvbSAnQC9zZXJpZXMvTGluZSdcbmltcG9ydCBTdGFja0FyZWEgZnJvbSAnQC9zZXJpZXMvU3RhY2tBcmVhJ1xuaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXMgZXh0ZW5kcyBTZXJpZXMge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5wbG90U2VyaWVzID0gW11cbiAgICBjb25zdCBkYXRhID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhIC8vIEFjY2VwdCBlaXRoZXIgdGltZXNlcmllcyBvciBwaWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuXG4gICAgLy8gQ3JlYXRlIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiBpbnB1dCBvcHRpb25zIGFuZCBlYWNoIHBsb3QgaW5mb1xuICAgIGlzQXJyYXkocGxvdEluZm8uc3RhY2spICYmIHBsb3RJbmZvLnN0YWNrLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgU3RhY2tBcmVhKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMub3B0cy5jaGFydCxcbiAgICAgICAgY2xhc3NOYW1lOiBwbG90RGF0YS5jbGFzc05hbWUgfHwgcGxvdERhdGEubmFtZSxcbiAgICAgICAgcGxvdEF4aXM6IHBsb3REYXRhLnBsb3RBeGlzLFxuICAgICAgICB4QXhpc1RhcmdldDogdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4LFxuICAgICAgICBzdGFja0RhdGE6IGRhdGEsXG4gICAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgfSkpXG4gICAgfSlcblxuICAgIGlzQXJyYXkocGxvdEluZm8ubGluZSkgJiYgcGxvdEluZm8ubGluZS5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IExpbmUoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHlBeGlzVGFyZ2V0OiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5kYXRhSW5kZXgsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHZpc2libGU6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUsXG4gICAgICAgIGxpbmVEYXRhOiB7XG4gICAgICAgICAgbmFtZTogcGxvdERhdGEubmFtZSxcbiAgICAgICAgICBjb2xvcjogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IsXG4gICAgICAgICAgbGluZVdpZHRoOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5saW5lV2lkdGgsXG4gICAgICAgICAgdmFsdWVzOiBkYXRhXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7ZWxlbWVudE9mZnNldCwgZ2V0T2JqZWN0LCBpc0Z1bmN0aW9ufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtiaXNlY3RvciwgZDNNb3VzZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNlcmllc1Rvb2x0aXAgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY3Jvc3NIYWlyczoge1xuICAgICAgICBlbmFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIC8vIFByb3ZpZGUgYmFzaWMgZm9ybWF0dGVyIHRvIGRpc3BsYXkgaG92ZXIgZGF0YVxuICAgIGlmICghaXNGdW5jdGlvbih0aGlzLm9wdHMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5vcHRzLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+IFRvb2xUaXAgVGV4dCA6IDwvc3Bhbj48YnIvPjxzcGFuPiR7SlNPTi5zdHJpbmdpZnkoZCl9PC9zcGFuPmBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLmNyb3NzSGFpcnMgPSBmYWxzZVxuICAgIHRoaXMudG9vbFRpcERpdiA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXJcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1kaXNwbGF5ICcgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jcm9zc0hhaXJzLmVuYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jcm9zc0hhaXJzID0gdGhpcy5vcHRzLmNoYXJ0LnN2Z1xuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXRvb2x0aXAtbGluZScpXG4gICAgICB0aGlzLmNyb3NzSGFpcnMuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoLTk5OSwtOTk5KScpXG4gICAgICAgIC5hdHRyKCd4MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ3kxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgLSBjb25zdGFudHMuVE9PTFRJUF9UT1BfQlVGRkVSKVxuICAgICAgICAuYXR0cigneDInLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgIC5hdHRyKCd5MicsICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCkpXG5cbiAgICB9XG5cbiAgICB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKCgpID0+IHtcbiAgICAgIC8vIFJlZ2lzdGVyIGhvdmVyIGFuZCBoaWRlL3Nob3cgdG9vbGlwIGV2ZW50c1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgICBjb25zdCBtb3VzZUhhbmRsZXIgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyXG4gICAgICBjb25zdCBkYXRlSW5kZXggPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXhcbiAgICAgIGNvbnN0IGRhdGFTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGFcbiAgICAgIC8vIEZpbmQgbmVhcmVzdCBleGlzdGluZyBkYXRlIGFtb25nIGFycmF5IG9mIHNvcnRlZCBkYXRlXG4gICAgICBjb25zdCBiaXNlY3REYXRlID0gYmlzZWN0b3IoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRbZGF0ZUluZGV4XVxuICAgICAgfSkubGVmdFxuXG4gICAgICBjb25zdCBtb3VzZUV2dCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vIE9uIG1vdXNlbW92ZSBvZiB4IG92ZXJsYXksIGZpbmQgeCx5IHZhbHVlcyBhbmQgdXBkYXRlIHRvb2x0aXBcbiAgICAgICAgY29uc3QgeE1vdXNlID0gZDNNb3VzZSh0aGlzKVswXVxuICAgICAgICBjb25zdCB5TW91c2UgPSBkM01vdXNlKHRoaXMpWzFdXG4gICAgICAgIGNvbnN0IHhWYWwgPSB4U2NhbGUuaW52ZXJ0KHhNb3VzZSkgLy8gZmluZCB4QXhpcyBkYXRlIGZvciBtb3VzZSBwb3NpdGlvblxuXG4gICAgICAgIC8vIERvIGJpbmFyeSBzZWFyY2ggb2YgZGF0YSBzZXQgZnJvbSAybmQgZGF0YSBzZXQgdG8gZW5kXG4gICAgICAgIGNvbnN0IGZvdW5kID0gYmlzZWN0RGF0ZShkYXRhU2V0LCB4VmFsLCAxKVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRCZWZvcmUgPSBkYXRhU2V0W2ZvdW5kIC0gMl1cblxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkUHJldiA9IGRhdGFTZXRbZm91bmQgLSAxXVxuICAgICAgICAvLyBnZXQgYmVmb3JlIGZpbmQgZGF0YVNldFxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkRm91bmQgPSBkYXRhU2V0W2ZvdW5kXSB8fCBkUHJldiAvLyBnZXQgZmluZCBkYXRhU2V0XG5cbiAgICAgICAgbGV0IHRvb2xUaXBEYXRhID0gZFByZXZcbiAgICAgICAgaWYgKGRhdGFTZXQubGVuZ3RoID4gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpIHtcbiAgICAgICAgICAvLyBNb3JlIHRoYW4gb25lIHRpY2sgcmVzaWRlIG9uIGVhY2ggcGl4ZWwuIEhlbmNlIGZpbmQgdGljayBoYXZpbmcgbWF4IHZhbHVlIGFtb25nIHRoZSBkYXRhc2V0XG4gICAgICAgICAgY29uc3QgZGF0YVBhcnNlTGVuID0gTWF0aC5mbG9vcihkYXRhU2V0Lmxlbmd0aCAvIHNlbGYub3B0cy5jaGFydC5jaGFydFdpZHRoKSArIDFcblxuICAgICAgICAgIGNvbnN0IHZpc2libGVEYXRhSW5kZXggPSB7fVxuXG4gICAgICAgICAgZm9yIChjb25zdCBwbCBpbiBzZWxmLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwbG90ID0gc2VsZi5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFtwbF1cbiAgICAgICAgICAgIGlmIChwbG90LnZpc2libGUpIHtcbiAgICAgICAgICAgICAgdmlzaWJsZURhdGFJbmRleFtwbG90LmRhdGFJbmRleF0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbXVsdGlBcnJNYXAgPSB7fVxuICAgICAgICAgIC8vIERvIFNjYW4gZnJvbSByYW5nZSAtZGF0YVBhcnNlTGVuIHRvICtkYXRhUGFyc2VMZW4gYmV0d2VlbiBmb3VuZCBkYXRhIGluZGV4XG4gICAgICAgICAgZm9yIChsZXQgaW5kID0gKGZvdW5kIC0gZGF0YVBhcnNlTGVuKTsgaW5kIDwgKGZvdW5kICsgZGF0YVBhcnNlTGVuKTsgaW5kKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhU2V0W2luZF0pIHtcbiAgICAgICAgICAgICAgY29uc3QgZFNldCA9IGRhdGFTZXRbaW5kXS5maWx0ZXIoZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlzaWJsZURhdGFJbmRleFtpbmRleF1cbiAgICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiIC0gYVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBpZiAoZFNldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtdWx0aUFyck1hcFtpbmRdID0gZFNldFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBtYXhJbmRcbiAgICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgICAgZm9yIChjb25zdCBtcCBpbiBtdWx0aUFyck1hcCkge1xuICAgICAgICAgICAgY29uc3QgYXJyU2V0ID0gbXVsdGlBcnJNYXBbbXBdXG4gICAgICAgICAgICBpZiAobWF4VmFsIDwgYXJyU2V0WzBdKSB7XG4gICAgICAgICAgICAgIG1heFZhbCA9IGFyclNldFswXVxuICAgICAgICAgICAgICBtYXhJbmQgPSBtcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvb2xUaXBEYXRhID0gZGF0YVNldFttYXhJbmRdIHx8IGRGb3VuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEZpbmQgbmVhcmVzdCByZWFjaGluZyBkYXRlIGFtb25nIGFib3ZlIHR3byBkYXRlc1xuICAgICAgICAgIHRvb2xUaXBEYXRhID0gKHhWYWwgLSBkUHJldltkYXRlSW5kZXhdKSA+IChkRm91bmRbZGF0ZUluZGV4XSAtIHhWYWwpID8gZEZvdW5kIDogZFByZXZcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRlSW50UmFuZ2UgPSBkRm91bmRbZGF0ZUluZGV4XSAtIGRQcmV2W2RhdGVJbmRleF1cblxuICAgICAgICBpZiAoIWRhdGVJbnRSYW5nZSAmJiBkQmVmb3JlKSB7XG4gICAgICAgICAgZGF0ZUludFJhbmdlID0gZFByZXZbZGF0ZUluZGV4XSAtIGRCZWZvcmVbZGF0ZUluZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGVJbnRSYW5nZSA8IE1hdGguYWJzKGRGb3VuZFtkYXRlSW5kZXhdIC0geFZhbCkpIHtcbiAgICAgICAgICAvLyBJZiBmb3VuZCBpcyBvdXRzaWRlIGRhdGEgaW50ZXJ2YWwgcmFuZ2UsIFRoZW4gZGF0YSBkb2VzbnQgZXhpc3QgZm9yIHRoYXQgdGljay5cbiAgICAgICAgICB0b29sVGlwRGF0YSA9IFtdXG4gICAgICAgICAgdG9vbFRpcERhdGFbZGF0ZUluZGV4XSA9IHhWYWxcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaG92ZXIoeE1vdXNlLCB5TW91c2UsIHRvb2xUaXBEYXRhKVxuICAgICAgfVxuXG4gICAgICBsZXQgZXZlbnROYW1lID0gJ21vdXNlbW92ZSdcbiAgICAgIGlmICh0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydC5pc1RvdWNoU2NyZWVuKSB7XG4gICAgICAgIGV2ZW50TmFtZSA9ICdkYmxjbGljaydcbiAgICAgIH1cbiAgICAgIG1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5vbihldmVudE5hbWUsIG1vdXNlRXZ0KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG5cbiAgICAgIG1vdXNlSGFuZGxlci5tb3VzZUJydXNoLnNlbGVjdCgncmVjdC5vdmVybGF5JylcbiAgICAgICAgLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiB0b3VjaCBzY3JlZW4sIHNpbXVsYXRlIHRvb2x0aXAgaG92ZXIgZm9yIGZpcnN0IHRpbWUgdG8gYXV0byBjb21wdXRlIGVsZW1lbnRPZmZzZXRcbiAgICAgICAgdGhpcy5ob3ZlcigwLCAwLCBkYXRhU2V0WzBdKVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmhpZGUoKVxuICAgICAgICB9LCAyNSlcbiAgICAgIH1cblxuICAgIH0pXG4gIH1cblxuICBob3ZlciAoeFBvcywgeVBvcywgZGlzcGxheURhdGEpIHtcbiAgICAvLyBVcGRhdGUgZGlzcGxheVBhbmVsIGFuZCBsaW5lIGJhc2VkIG9uIHggcG9zaXRpb25cbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnNlbGVjdCgnbGluZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3hQb3N9LDApYClcbiAgICAgIC5hdHRyKCd4MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MScsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wIC0gY29uc3RhbnRzLlRPT0xUSVBfVE9QX0JVRkZFUilcbiAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgIC5hdHRyKCd5MicsICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCkpXG4gICAgdGhpcy5zaG93SGlkZSh0cnVlKVxuXG4gICAgbGV0IHBlcmNlbnRhZ2VEaWZmID0geFBvcyAvIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoXG5cbiAgICBpZiAocGVyY2VudGFnZURpZmYgPCAwLjMpIHtcbiAgICAgIHBlcmNlbnRhZ2VEaWZmID0gMC4yXG4gICAgfVxuICAgIGlmIChwZXJjZW50YWdlRGlmZiA+IDAuNykge1xuICAgICAgcGVyY2VudGFnZURpZmYgPSAwLjk1XG4gICAgfVxuXG4gICAgY29uc3QgYm94ID0gZWxlbWVudE9mZnNldCh0aGlzLnRvb2xUaXBEaXYpXG4gICAgY29uc3Qgcm9vdFBvcyA9IGVsZW1lbnRPZmZzZXQodGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lcilcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZChyb290UG9zLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB4UG9zIC0gYm94LndpZHRoICogcGVyY2VudGFnZURpZmYpICsgJ3B4J1xuICAgIGNvbnN0IHRvcCA9IE1hdGgucm91bmQocm9vdFBvcy50b3AgLSBib3guaGVpZ2h0IC0gNSArIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIgKiAyKSArICdweCdcblxuXG4gICAgdGhpcy50b29sVGlwRGl2XG4gICAgICAuc3R5bGUoJ2xlZnQnLCBsZWZ0KVxuICAgICAgLnN0eWxlKCd0b3AnLCB0b3ApXG4gICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgIC5odG1sKHRoaXMub3B0cy5mb3JtYXQuY2FsbCh0aGlzLm9wdHMuY2hhcnQsIGRpc3BsYXlEYXRhKSkgLy8gVXNlZCBmb3JtYXQuY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1biBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy50b29sVGlwRGl2ICYmIHRoaXMudG9vbFRpcERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLnRvb2xUaXBEaXYgJiYgdGhpcy50b29sVGlwRGl2LnJlbW92ZSgpXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5yZW1vdmUoKVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtnZXRPYmplY3QsIGlzRnVuY3Rpb24sIGVtcHR5Rm59IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2JydXNoWSwgZDNFdmVudCwgZDNUb3VjaGVzLCB6b29tfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtiaXNlY3Rvcn0gZnJvbSAnZDMtYXJyYXknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlc3R1cmVab29tIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG9uWm9vbTogZW1wdHlGbixcbiAgICAgIG9uWTFab29tOiBlbXB0eUZuLFxuICAgICAgb25ZMlpvb206IGVtcHR5Rm4sXG4gICAgfSwgb3B0cylcbiAgfVxuXG4gIGdldENsb3Nlc3RYQXhpc0RhdGEgKHhWYWwsIGRhdGFTZXQpIHtcbiAgICBjb25zdCBkYXRlSW5kZXggPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXhcbiAgICAvLyBGaW5kIG5lYXJlc3QgZXhpc3RpbmcgZGF0ZSBhbW9uZyBhcnJheSBvZiBzb3J0ZWQgZGF0ZVxuICAgIGNvbnN0IGJpc2VjdERhdGUgPSBiaXNlY3RvcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGRbZGF0ZUluZGV4XVxuICAgIH0pLmxlZnRcblxuICAgIC8vIERvIGJpbmFyeSBzZWFyY2ggb2YgZGF0YSBzZXQgZnJvbSAybmQgZGF0YSBzZXQgdG8gZW5kXG4gICAgY29uc3QgZm91bmQgPSBiaXNlY3REYXRlKGRhdGFTZXQsIHhWYWwsIDEpXG5cblxuICAgIGNvbnN0IGRQcmV2ID0gZGF0YVNldFtmb3VuZCAtIDFdXG4gICAgLy8gZ2V0IGJlZm9yZSBmaW5kIGRhdGFTZXRcblxuICAgIGNvbnN0IGRGb3VuZCA9IGRhdGFTZXRbZm91bmRdIHx8IGRQcmV2IC8vIGdldCBmaW5kIGRhdGFTZXRcblxuICAgIHJldHVybiBkRm91bmRcbiAgfVxuXG5cbiAgdXBkYXRlYnJ1c2hYU2VsZWN0aW9uIChzdGFydFBvcywgZW5kUG9zKSB7XG4gICAgdGhpcy5icnVzaFhEaXZcbiAgICAgIC5hdHRyKCd4Jywgc3RhcnRQb3MpXG4gICAgICAuYXR0cignd2lkdGgnLCAoZW5kUG9zIC0gc3RhcnRQb3MpKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB4U2NhbGUgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGNvbnN0IHlTY2FsZUxlZnQgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKSB8fCBmYWxzZVxuICAgIGNvbnN0IHlTY2FsZVJpZ2h0ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgZGF0YVNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YVxuICAgIGlmICh4U2NhbGUpIHtcblxuICAgICAgLy8gQ3JlYXRlIHggYXhpcyBicnVzaCBmb3IgWm9vbSBvcGVyYXRpb25cbiAgICAgIHRoaXMuem9vbVggPSB6b29tKClcbiAgICAgICAgLnNjYWxlRXh0ZW50KFswLCBkYXRhU2V0Lmxlbmd0aF0pXG4gICAgICAgIC50cmFuc2xhdGVFeHRlbnQoW1xuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wXSxcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1dKVxuICAgICAgICAuZXh0ZW50KFtbdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0LCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcF0sIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XV0pXG4gICAgICAgIC50b3VjaGFibGUoKCkgPT4gdHJ1ZSlcblxuICAgICAgdGhpcy56b29tWERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmdcbiAgICAgICAgLmNhbGwodGhpcy56b29tWClcblxuXG4gICAgICAvLyBVc2UgdGhlIHNhbWUgbW91c2VCcnVzaCBmb3IgYm90aCB4QnJ1c2ggYW5kIHRvb2x0aXBcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ID0gdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5tb3VzZUJydXNoXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnc2VsZWN0aW9uJylcbiAgICAgICAgLmF0dHIoJ2N1cnNvcicsICdtb3ZlJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgJzAuMycpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KVxuXG4gICAgICBsZXQgaXNHZXN0dXJlID0gZmFsc2VcbiAgICAgIGxldCBzdGFydFBvcyA9IDBcbiAgICAgIGxldCBlbmRQb3MgPSAwXG4gICAgICBjb25zdCB0b29sdGlwID0gc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXBcbiAgICAgIHRoaXMuem9vbVhEaXZcbiAgICAgICAgLnN0eWxlKCd0b3VjaC1hY3Rpb24nLCAncGFuLXknKVxuICAgICAgICAub24oJ3RvdWNoc3RhcnQuem9vbScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZDNUb3VjaGVzKHRoaXMpXG4gICAgICAgICAgaXNHZXN0dXJlID0gZDNFdmVudC50b3VjaGVzICYmIGQzRXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDJcbiAgICAgICAgICBpZiAoaXNHZXN0dXJlICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b29sdGlwICYmIHRvb2x0aXAuaGlkZSgpXG4gICAgICAgICAgICBjb25zdCB4UG9zID0gKHRvdWNoZXNbMF1bMF0gLSBzZWxmLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAgICAgICBzdGFydFBvcyA9IHhQb3NcbiAgICAgICAgICAgIGVuZFBvcyA9IHhQb3NcbiAgICAgICAgICAgIHNlbGYudXBkYXRlYnJ1c2hYU2VsZWN0aW9uKHN0YXJ0UG9zLCBlbmRQb3MpXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKVxuICAgICAgICAub24oJ3RvdWNobW92ZS56b29tJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBkM1RvdWNoZXModGhpcylcbiAgICAgICAgICBpZiAoaXNHZXN0dXJlICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB4UG9zMSA9ICh0b3VjaGVzWzBdWzBdIC0gc2VsZi5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgY29uc3QgeFBvczIgPSAodG91Y2hlc1sxXVswXSAtIHNlbGYub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgICAgIGxldCB4TWluID0geFBvczFcbiAgICAgICAgICAgIGxldCB4TWF4ID0geFBvczJcbiAgICAgICAgICAgIGlmICh4UG9zMSA+IHhQb3MyKSB7XG4gICAgICAgICAgICAgIHhNaW4gPSB4UG9zMlxuICAgICAgICAgICAgICB4TWF4ID0geFBvczFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0UG9zID0geE1pblxuICAgICAgICAgICAgZW5kUG9zID0geE1heFxuICAgICAgICAgICAgc2VsZi51cGRhdGVicnVzaFhTZWxlY3Rpb24oc3RhcnRQb3MsIGVuZFBvcylcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpXG4gICAgICAgIC5vbigndG91Y2hlbmQuem9vbScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZDNUb3VjaGVzKHRoaXMpXG4gICAgICAgICAgaWYgKGlzR2VzdHVyZSAmJiB0b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgeFBvcyA9ICh0b3VjaGVzWzBdWzBdIC0gc2VsZi5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9zID4geFBvcykge1xuICAgICAgICAgICAgICBzdGFydFBvcyA9IHhQb3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmRQb3MgPCB4UG9zKSB7XG4gICAgICAgICAgICAgIGVuZFBvcyA9IHhQb3NcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRWYWwgPSB4U2NhbGUuaW52ZXJ0KHN0YXJ0UG9zKVxuICAgICAgICAgICAgY29uc3Qgc3RhcnREdCA9IE1hdGgucm91bmQoc3RhcnRWYWwpXG5cbiAgICAgICAgICAgIGNvbnN0IGVuZFZhbCA9IHhTY2FsZS5pbnZlcnQoZW5kUG9zKVxuICAgICAgICAgICAgY29uc3QgZW5kRHQgPSBNYXRoLnJvdW5kKGVuZFZhbClcbiAgICAgICAgICAgIHNlbGYudXBkYXRlYnJ1c2hYU2VsZWN0aW9uKHN0YXJ0UG9zLCBlbmRQb3MpXG5cbiAgICAgICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWm9vbSkgJiYgc2VsZi5vcHRzLm9uWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgc3RhcnREdCwgZW5kRHQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYudXBkYXRlYnJ1c2hYU2VsZWN0aW9uKDAsIDApXG4gICAgICAgICAgc3RhcnRQb3MgPSAwXG4gICAgICAgICAgZW5kUG9zID0gMFxuICAgICAgICAgIGlzR2VzdHVyZSA9IGZhbHNlXG4gICAgICAgIH0sIHRydWUpXG5cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCBsZWZ0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVMZWZ0KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktbGVmdCcpXG5cbiAgICAgIC8vIENhbGwgdGhpcyBldmVudCB3aGVuIHlBeGlzIGJydXNoIGlzIGVuZGVkXG4gICAgICB0aGlzLmJydXNoWUxlZnQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZTGVmdERpdi5jYWxsKHNlbGYuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZUxlZnQuaW52ZXJ0KVxuXG5cbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZClcbiAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFkgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTFab29tKSAmJiBzZWxmLm9wdHMub25ZMVpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCByaWdodCBzY2FsZSBvcGVyYXRpb25cbiAgICBpZiAoeVNjYWxlUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hZLXJpZ2h0JylcblxuICAgICAgdGhpcy5icnVzaFlSaWdodC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQzRXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5icnVzaFlSaWdodERpdi5jYWxsKHNlbGYuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh5U2NhbGVSaWdodC5pbnZlcnQpXG5cblxuICAgICAgICBjb25zdCBkMSA9IGQwICYmIGQwLm1hcChNYXRoLnJvdW5kKVxuICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzMi5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFkyIGF4aXMgdXBvbiB2ZXJ0aWNhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vblkyWm9vbSkgJiYgc2VsZi5vcHRzLm9uWTJab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBkMVswXSwgZDFbMV0pXG5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLnpvb21YKSB7XG4gICAgICB0aGlzLnpvb21YXG4gICAgICAgIC50cmFuc2xhdGVFeHRlbnQoW1xuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wXSxcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCwgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3BdLFxuICAgICAgICAgIFt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWERpdlxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmJydXNoWUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWUxlZnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHRcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdlxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWVJpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWUxlZnREaXYgJiYgdGhpcy5icnVzaFlMZWZ0RGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ICYmIHRoaXMuYnJ1c2hZUmlnaHREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgaWYgKHRoaXMuYnJ1c2hYRGl2KSB7XG4gICAgICB0aGlzLmJydXNoWERpdiAmJiB0aGlzLmJydXNoWERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlMZWZ0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYuY2FsbCh0aGlzLmJydXNoWUxlZnQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodERpdikge1xuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2dldE9iamVjdCwgaXNGdW5jdGlvbiwgZW1wdHlGbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7YnJ1c2hYLCBicnVzaFksIGQzRXZlbnR9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20gZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgb25ab29tOiBlbXB0eUZuLFxuICAgICAgb25ZMVpvb206IGVtcHR5Rm4sXG4gICAgICBvblkyWm9vbTogZW1wdHlGblxuICAgIH0sIG9wdHMpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlTGVmdCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlUmlnaHQgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJykgfHwgZmFsc2VcbiAgICBsZXQgYnJ1c2hPdmVybGF5ID0gbnVsbFxuICAgIGlmICh4U2NhbGUpIHtcbiAgICAgIC8vIENyZWF0ZSB4IGF4aXMgYnJ1c2ggZm9yIFpvb20gb3BlcmF0aW9uXG4gICAgICB0aGlzLmJydXNoWCA9IGJydXNoWCgpXG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgLy8gVXNlIHRoZSBzYW1lIG1vdXNlQnJ1c2ggZm9yIGJvdGggeEJydXNoIGFuZCB0b29sdGlwXG4gICAgICB0aGlzLmJydXNoWERpdiA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIubW91c2VCcnVzaFxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWClcblxuICAgICAgYnJ1c2hPdmVybGF5ID0gdGhpcy5icnVzaFhEaXYuc2VsZWN0QWxsKCdyZWN0Lm92ZXJsYXknKVxuXG4gICAgICAvLyBDYWxsIHRoaXMgZXZlbnQgd2hlbiB4QXhpcyBicnVzaCBpcyBlbmRlZFxuICAgICAgdGhpcy5icnVzaFgub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeFNjYWxlLmludmVydClcbiAgICAgICAgLy8gZmluZCB4MSBhbmQgeDJcbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZDEgPSBkMCAmJiBkMC5tYXAoTWF0aC5yb3VuZCkgLy8gcm91bmQgYm90aCB2YWx1ZXNcblxuICAgICAgICAvLyBjbGVhciBCcnVzaFxuICAgICAgICBzZWxmLmJydXNoWERpdi5jYWxsKHNlbGYuYnJ1c2hYLm1vdmUsIG51bGwpXG4gICAgICAgIGJydXNoT3ZlcmxheS5zdHlsZSgnY3Vyc29yJywgJ2F1dG8nKVxuXG4gICAgICAgIC8vIGQxID0gZDFcbiAgICAgICAgLy8gICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyAgICAgcmV0dXJuIChhIC0gYilcbiAgICAgICAgLy8gICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC54QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFggYXhpcyB1cG9uIGhvcml6b250YWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vblpvb20pICYmIHNlbGYub3B0cy5vblpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgeSBheGlzIGJydXNoIGZvciB2ZXJ0aWNhbCBsZWZ0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVMZWZ0KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnQgPSBicnVzaFkoKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktbGVmdCcpXG5cbiAgICAgIC8vIENhbGwgdGhpcyBldmVudCB3aGVuIHlBeGlzIGJydXNoIGlzIGVuZGVkXG4gICAgICB0aGlzLmJydXNoWUxlZnQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZTGVmdERpdi5jYWxsKHNlbGYuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZUxlZnQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogZDEgLy8gQ2hhbmdlIGRvbWFpbiBvZiBZIGF4aXMgdXBvbiB2ZXJ0aWNhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vblkxWm9vbSkgJiYgc2VsZi5vcHRzLm9uWTFab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBkMVswXSwgZDFbMV0pXG5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHkgYXhpcyBicnVzaCBmb3IgdmVydGljYWwgcmlnaHQgc2NhbGUgb3BlcmF0aW9uXG4gICAgaWYgKHlTY2FsZVJpZ2h0KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0ID0gYnJ1c2hZKClcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdiA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWJydXNoWS1yaWdodCcpXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkM0V2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYnJ1c2hZUmlnaHREaXYuY2FsbChzZWxmLmJydXNoWVJpZ2h0Lm1vdmUsIG51bGwpXG5cbiAgICAgICAgY29uc3QgZDAgPSBkM0V2ZW50LnNlbGVjdGlvbi5tYXAoeVNjYWxlUmlnaHQuaW52ZXJ0KVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpXG4gICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMyLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWTIgYXhpcyB1cG9uIHZlcnRpY2FsIHpvb21cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnVwZGF0ZSgpIC8vIFVwZGF0ZSBhbGwgcGxvdFNlcmllcyBmb3IgbmV3IFlBeGlzIGRvbWFpbiBjaGFuZ2VcblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uWTJab29tKSAmJiBzZWxmLm9wdHMub25ZMlpvb20uY2FsbChzZWxmLm9wdHMuY2hhcnQsIGQxWzBdLCBkMVsxXSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICBicnVzaE92ZXJsYXkgJiYgdGhpcy5vcHRzLmNoYXJ0Lm1vdXNlSGFuZGxlci5yZWdpc3RlcihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIG1vdXNlIGlzIGNsaWNrZWQgb3IgZG93biwgZW5hYmxlIHpvb20gYnJ1c2ggYW5kIGl0cyBtb3VzZSBjdXJzb3JcbiAgICAgIGJydXNoT3ZlcmxheVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBicnVzaE92ZXJsYXkuc3R5bGUoJ2N1cnNvcicsICdjb2wtcmVzaXplJylcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBicnVzaE92ZXJsYXkuc3R5bGUoJ2N1cnNvcicsICdhdXRvJylcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMudXBkYXRlKClcblxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFgpIHtcbiAgICAgIHRoaXMuYnJ1c2hYLmV4dGVudChbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWERpdi5jYWxsKHRoaXMuYnJ1c2hYKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJydXNoWUxlZnQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWUxlZnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZUmlnaHQpIHtcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHRcbiAgICAgICAgLmV4dGVudChbXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgMF0sXG4gICAgICAgICAgWyh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgLSBjb25zdGFudHMuQlJVU0hZX0JVRkZFUiksIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgICAgXSlcblxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdlxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSArICcsJyArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wICsgJyknKVxuICAgICAgICAuY2FsbCh0aGlzLmJydXNoWVJpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWUxlZnREaXYgJiYgdGhpcy5icnVzaFlMZWZ0RGl2LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLmJydXNoWVJpZ2h0RGl2ICYmIHRoaXMuYnJ1c2hZUmlnaHREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgaWYgKHRoaXMuYnJ1c2hYRGl2KSB7XG4gICAgICB0aGlzLmJydXNoWERpdi5jYWxsKHRoaXMuYnJ1c2hYLm1vdmUsIG51bGwpXG4gICAgICB0aGlzLmJydXNoWERpdiAmJiB0aGlzLmJydXNoWERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlMZWZ0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWUxlZnREaXYuY2FsbCh0aGlzLmJydXNoWUxlZnQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodERpdikge1xuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==