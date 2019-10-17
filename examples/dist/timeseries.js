(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["timeseries"],{

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
/* harmony import */ var _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/legend/TimeSeriesLegend */ "./legend/TimeSeriesLegend.js");
/* harmony import */ var _series_TimeSeries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/series/TimeSeries */ "./series/TimeSeries.js");























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
        this.zoomBrush = new _zoom__WEBPACK_IMPORTED_MODULE_19__["default"]({
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
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/each */ "../node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_9__);











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
              lodash_each__WEBPACK_IMPORTED_MODULE_9___default()(eachPlotSet, function (eachPlot) {
                eachPlot.minVal = Infinity;
                eachPlot.maxVal = -Infinity;
              });
            }

            // Reset stack range for each stack for finding min , max
            plotInfo.stack && plotInfo.stack.forEach(function (plotData) {
              plotData.valueRange = [Infinity, -Infinity];
            });

            // Calculate Max and Min for each plots series
            var valData = 0;
            data.forEach(function (d) {
              if (findEachPlotRange) {
                lodash_each__WEBPACK_IMPORTED_MODULE_9___default()(eachPlotSet, function (eachPlot) {
                  valData = d[eachPlot.dataIndex];
                  if (valData < eachPlot.minVal) {
                    eachPlot.minVal = valData;
                  }
                  if (valData > eachPlot.maxVal) {
                    eachPlot.maxVal = valData;
                  }
                });
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

/***/ "./legend/TimeSeriesLegend.js":
/*!************************************!*\
  !*** ./legend/TimeSeriesLegend.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "../node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");












var TimeSeriesLegend = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TimeSeriesLegend, _ChartComponent);

  function TimeSeriesLegend(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TimeSeriesLegend);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TimeSeriesLegend.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(TimeSeriesLegend)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      disableSeriesToggle: false
    }, opts);

    var self = _this;
    _this.opts.maxWidthLegend = 0;
    _this.opts.spacingNames = [];

    var graphOptions = _this.opts.chart.options;
    var eachPlotSet = graphOptions.plotSet;
    var eachPlotNames = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet);
    var leng = 0;
    var textWidth = [];
    var maxLenLegend = void 0;

    var dummyG = _this.opts.chart.svg.append('g');
    // Add all name on DOM to calculate how much space is needed for every names
    dummyG.selectAll('.dummyText').data(eachPlotNames).enter().append('text').attr('class', 'vc-legend-label').style('font-size', '11px').style('font-weight', '500').text(function (d) {
      return self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : '');
    }).each(function (d, i) {
      // Find size required for each legend on screen
      var thisWidth = Math.round(this.getComputedTextLength());
      if (thisWidth > self.opts.maxWidthLegend) {
        self.opts.maxWidthLegend = thisWidth;
        maxLenLegend = d;
      }
      textWidth.push(thisWidth);
      $(this).remove(); // remove them just after displaying them
    });

    // Fill the spacing Arr having position for each legends on horizontal order
    textWidth.forEach(function (ele) {
      leng += ele;
      self.opts.spacingNames.push(leng);
    });

    // Make maxTextLength Higher to show full text for pie legends
    _this.opts.maxTextLength = maxLenLegend.length + 100;

    dummyG.remove();
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TimeSeriesLegend, [{
    key: 'draw',
    value: function draw() {

      var self = this;
      var graphOptions = this.opts.chart.options;
      var toggleSeries = _utils__WEBPACK_IMPORTED_MODULE_9__["emptyFn"];
      var eachPlotSet = graphOptions.plotSet;
      var eachPlotNames = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet);
      var maxYLen = Math.floor(this.opts.chart.chartFullSpace.height * 90 / 100);
      var fullYLen = eachPlotNames.length * _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_Y_SPACE;
      fullYLen = fullYLen > maxYLen ? maxYLen : fullYLen;
      var divWidth = this.opts.maxWidthLegend + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SHOW_WIDTH;

      this.opts.legendDiv = {
        width: divWidth,
        height: fullYLen

        // Perfom Series show and hide on click of each legend
      };if (!this.opts.disableSeriesToggle) {

        toggleSeries = function toggleSeries(seriesName) {
          var visibleSeries = 0;
          var plotName = void 0;

          if (eachPlotSet[seriesName] && eachPlotSet[seriesName].visible) {
            // If the series is getting disabled and its only one series visible, Dont disable it.
            for (plotName in eachPlotSet) {
              eachPlotSet[plotName].visible && visibleSeries++;
            }

            if (visibleSeries <= 1) {
              return;
            }
          }

          var applyYAxis = void 0;

          // plotSeries that is getting toggled
          var currentPlotInfo = void 0;

          if (eachPlotSet && eachPlotSet[seriesName]) {
            currentPlotInfo = eachPlotSet;
          }

          if (currentPlotInfo) {

            currentPlotInfo[seriesName].visible = !currentPlotInfo[seriesName].visible;

            if (currentPlotInfo[seriesName].plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_LEFT) {

              // This will compute max and min value for YAxis based on series which are visible
              babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(self.opts.chart.options, self.opts.chart.dataParser.constructYAxisInfo());

              applyYAxis = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_LEFT;
              // Update Y Axis with new domainScale
              self.opts.chart.yAxis.modifyAxisProps({
                domainScale: graphOptions.yRange
              });
            } else if (currentPlotInfo[seriesName].plotAxis[0] === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {

              // This will compute max and min value for YAxis based on series which are visible
              babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(self.opts.chart.options, self.opts.chart.dataParser.constructYAxisInfo());

              applyYAxis = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT;
              // Update Y Axis with new domainScale
              self.opts.chart.yAxis2.modifyAxisProps({
                domainScale: graphOptions.yRange2
              });
            }

            // Adjust YAxis tick value display based on yAxis change
            self.opts.chart.reScaleYAxis(applyYAxis);

            // Redraw all plot components based on yAxis change
            self.opts.chart.series.redraw();

            var sFlag = currentPlotInfo[seriesName].visible;

            Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).classed('vc-fill-hidden', !sFlag);

            Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(self.opts.onLegendChange) && self.opts.onLegendChange.call(self.opts.chart, currentPlotInfo[seriesName], sFlag);
          }
        };
      }

      this.legendDisplay = this.opts.chart.svg.append('g').attr('class', 'vc-legend-group').attr('transform', 'translate(15, 5)');

      this.legendBlock = this.legendDisplay.selectAll('g').data(eachPlotNames).enter().append('g').attr('transform', function (d, i) {
        // Provide horizontal position based on order
        if (self.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_TOP) {
          var x = self.opts.spacingNames[i - 1] ? self.opts.spacingNames[i - 1] + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * i : 0;
          return 'translate(' + x + ', 0)';
        } else if (self.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
          // Provide vertical position based on order
          var y = i * _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_Y_SPACE;
          return 'translate(0 ,' + y + ')';
        }
      }).attr('class', function (d) {
        return 'vc-legend vc-legend-' + d;
      }).classed('vc-fill-hidden', function (d, i) {
        return eachPlotSet[d] ? !eachPlotSet[d].visible : false;
      });

      // Listen to click event only for timeseries legends
      this.legendBlock.on('click', Object(_utils__WEBPACK_IMPORTED_MODULE_9__["throttle"])(toggleSeries, 300, { // Sometimes toggle event is called multiple times, hence block by adding throttle
        trailing: false
      }));

      this.legendBlock.append('text').attr('class', 'vc-legend-label').attr('x', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_TEXT_X).attr('y', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_TEXT_Y).style('font-size', '11px').style('font-weight', '500').text(function (d) {
        var legName = self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : '');
        if (self.opts.isPieLegend && self.opts.maxTextLength < legName.length) {
          legName = legName.substring(0, self.opts.maxTextLength) + '...';
        }
        return legName;
      });

      this.legendBlock.append('rect').attr('class', 'vc-legend-box').attr('x', 0).attr('width', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_RECT_SIZE).attr('height', _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_RECT_SIZE).style('stroke', function (d) {
        return eachPlotSet[d] ? eachPlotSet[d].color : '';
      }).style('stroke-width', '2px').style('fill', function (d) {
        return eachPlotSet[d] ? eachPlotSet[d].color : '';
      });

      this.opts.horizontalLegendWidth = Math.round(this.legendDisplay.node().getBBox().width);

      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      // Display in vertical order
      var self = this;
      var $legendText = this.opts.chart.$container.find('svg .vc-legend-label');
      var basicWidth = this.opts.maxWidthLegend + this.opts.chart.margin.left + this.opts.chart.margin.right;

      if (this.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_RIGHT) {
        // Display legends vertically on right side
        basicWidth += _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SHOW_WIDTH;
        var legendPos = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].VERT_POS_LEGEND;
        if (this.opts.maxWidthLegend === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_MAX_WIDTH) {
          legendPos = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].VERT_POS_LEGEND + 10;
        }
        var legendXPos = Math.floor(this.opts.chart.chartWidth * legendPos / 100);
        var xBuff = this.opts.chart.chartWidth - legendXPos;
        xBuff = Math.floor((xBuff - this.opts.legendDiv.width) / 2);
        legendXPos += xBuff;

        var legendYPos = Math.floor((this.opts.chart.chartFullSpace.height - this.opts.legendDiv.height) / 2);

        this.legendDisplay.attr('transform', 'translate(' + legendXPos + ',' + legendYPos + ')');
      }

      var d3Svg = this.opts.chart.svg;

      if (this.opts.position === _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DIR_TOP) {
        basicWidth = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * self.opts.spacingNames.length + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].DATA_INTERVAL_BUFFER_X;

        if (this.opts.horizontalLegendWidth + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_RIGHT_BUFFER > self.opts.chart.chartWidth) {
          // Hide only text and display Color box with tooltip
          d3Svg.selectAll('.vc-legend').each(function () {
            var seriesName = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).select('text').html();
            Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).select('rect').html('').append('svg:title').text(seriesName);
          });
          $legendText.hide();

          if (self.opts.chart.chartWidth < basicWidth) {
            // display box vertically
            this.legendBlock.attr('transform', function (d, i) {
              var y = i * _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_Y_SPACE;
              return 'translate(0,' + y + ')';
            });
          } else {
            // Display only box on top
            this.legendBlock.attr('transform', function (d, i) {
              var x = _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * i;
              return 'translate(' + x + ', 0)';
            });
          }
        } else {
          // Display legend on top with both text, box and remove tooltip
          this.legendBlock.attr('transform', function (d, i) {
            var x = self.opts.spacingNames[i - 1] ? self.opts.spacingNames[i - 1] + _constants__WEBPACK_IMPORTED_MODULE_8__["default"].LEGEND_SPACE * i : 0;
            return 'translate(' + x + ', 0)';
          });

          if (!this.opts.isPieLegend) {
            d3Svg.selectAll('.vc-legend').each(function () {
              Object(_d3Importer__WEBPACK_IMPORTED_MODULE_10__["select"])(this).select('rect').html('');
            });
            $legendText.show();
          }
        }
      }
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.opts.visible = showFlag;
      this.legendDisplay && this.legendDisplay.classed('vc-hidden', !showFlag);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.legendBlock && this.legendBlock.remove();
      this.legendDisplay && this.legendDisplay.remove();
      this.opts = null;
    }
  }]);

  return TimeSeriesLegend;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TimeSeriesLegend);

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

      if (!this.opts.chart.options.zoom.visible) {
        // x-Zoom for chart doest not exist, Add rect overlay for brushXDiv
        this.mouseBrush.append('rect').attr('class', 'overlay').attr('x', 0).attr('y', 0).attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      this.mouseBrush.attr('width', this.opts.chart.chartWidth).attr('height', this.opts.chart.chartHeight).attr('transform', 'translate(' + this.opts.chart.margin.left + ',' + this.opts.chart.margin.top + ')');
      if (!this.opts.chart.options.zoom.visible) {
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

      var clipElement = this.opts.chart.$container.find('svg clipPath');
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

      var clipElement = this.opts.chart.$container.find('svg clipPath');

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/constants */ "./constants.js");













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
      this.$toolTipDiv = $('<div></div>').addClass('vc-tooltip-display');
      this.opts.chart.$container.append(this.$toolTipDiv);

      if (this.opts.crossHairs.enable === true) {
        this.crossHairs = this.opts.chart.svg.append('g').attr('class', 'vc-tooltip-line');
        this.crossHairs.append('line').attr('transform', 'translate(-999,-999)').attr('x1', this.opts.chart.margin.left).attr('y1', this.opts.chart.margin.top - _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER).attr('x2', this.opts.chart.margin.left).attr('y2', this.opts.chart.chartHeight + this.opts.chart.margin.top);
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

              Object(lodash__WEBPACK_IMPORTED_MODULE_10__["each"])(self.opts.chart.options.plotSet, function (plot) {
                if (plot.visible) {
                  visibleDataIndex[plot.dataIndex] = true;
                }
              });

              var multiArrMap = {};
              // Do Scan from range -dataParseLen to +dataParseLen between found data index
              for (var ind = found - dataParseLen; ind < found + dataParseLen; ind++) {
                if (dataSet[ind]) {
                  var dSet = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["filter"])(dataSet[ind], function (val, index) {
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
              Object(lodash__WEBPACK_IMPORTED_MODULE_10__["each"])(multiArrMap, function (arrSet, key) {
                if (maxVal < arrSet[0]) {
                  maxVal = arrSet[0];
                  maxInd = key;
                }
              });

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
          eventName = 'click';
        }
        mouseHandler.mouseBrush.on(eventName, mouseEvt).on('mouseout', function () {
          self.hide();
        });

        $(mouseHandler.mouseBrush.node()).find('rect.overlay').on('mousedown', function () {
          self.hide();
        });
      });
    }
  }, {
    key: 'hover',
    value: function hover(xPos, yPos, displayData) {
      // Update displayPanel and line based on x position
      this.crossHairs && this.crossHairs.select('line').attr('transform', 'translate(' + xPos + ',0)').attr('x1', this.opts.chart.margin.left).attr('y1', this.opts.chart.margin.top - _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER).attr('x2', this.opts.chart.margin.left).attr('y2', this.opts.chart.chartHeight + this.opts.chart.margin.top);
      this.crossHairs.classed('vc-hidden', false);

      var percentageDiff = xPos / this.opts.chart.chartWidth;

      if (percentageDiff < 0.3) {
        percentageDiff = 0.2;
      }
      if (percentageDiff > 0.7) {
        percentageDiff = 0.95;
      }
      this.$toolTipDiv.css({
        left: Math.round(this.opts.chart.$container.position() // left position of chart on screen
        .left + this.opts.chart.margin.left + xPos - this.$toolTipDiv.width() * percentageDiff) + 'px',
        top: Math.round(this.opts.chart.$container.position() // top position of chart on screen
        .top - this.$toolTipDiv.height() - 5 + _constants__WEBPACK_IMPORTED_MODULE_11__["default"].TOOLTIP_TOP_BUFFER * 2) + 'px',
        display: 'inline-block'
      }).html(this.opts.format.call(this.opts.chart, displayData)); // Used format.call(), so that external fun can have access of chart Instance
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

      this.crossHairs && this.crossHairs.classed('vc-hidden', !showFlag);

      this.opts.visible = showFlag;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.$toolTipDiv && this.$toolTipDiv.remove();
      this.crossHairs && this.crossHairs.remove();
      this.opts = null;
    }
  }]);

  return TimeSeriesTooltip;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TimeSeriesTooltip);

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
      var $brushOverlay = null;
      if (xScale) {
        // Create x axis brush for Zoom operation
        this.brushX = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["brushX"])().extent([[0, 0], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]]);

        // Use the same mouseBrush for both xBrush and tooltip
        this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush.call(this.brushX);

        $brushOverlay = $(this.brushXDiv.node()).find('rect.overlay');

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
          $brushOverlay.css({
            cursor: 'auto'
          });

          // d1 = d1
          //   .sort(function (a, b) {
          //     return (a - b)
          //   })

          self.opts.chart.xAxis.modifyAxisProps({
            domainScale: d1 // Change domain of X axis upon horizontal zoom
          });

          self.opts.chart.series.update(); // Update all plotSeries for new YAxis domain change


          // Used onZoom.call(), so that external function can have access of chart Instance
          self.opts && self.opts.onZoom.call(self.opts.chart, d1[0], d1[1]);
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

      $brushOverlay && this.opts.chart.mouseHandler.register(function () {
        // When mouse is clicked or down, enable zoom brush and its mouse cursor
        $brushOverlay.on('mousedown', function () {
          $(this).css({
            cursor: 'col-resize'
          });
        }).on('click', function () {
          $(this).css({
            cursor: 'auto'
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9UaW1lU2VyaWVzQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kYXRhLXBhcnNlci9CYXNpY1RTUGFyc2VyLmpzIiwid2VicGFjazovL3ZjLy4vbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9tb3VzZS1oYW5kbGVyL2luZGV4LmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL0xpbmUuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvU3RhY2tBcmVhLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1RpbWVTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdmMvLi90b29sdGlwL1RpbWVTZXJpZXNUb29sdGlwLmpzIiwid2VicGFjazovL3ZjLy4vem9vbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUaW1lU2VyaWVzQ2hhcnQiLCJjb250YWluZXIiLCJvcHRzIiwic3RhcnRUaW1lIiwiRGF0ZSIsImRhdGFQYXJzZXIiLCJCYXNpY1RTUGFyc2VyIiwiQ2hhcnRBeGlzUGFyc2VyIiwiRXJyb3IiLCJpc09iamVjdCIsIm9wdGlvbnMiLCJkYXRhRXhlY3V0b3IiLCJhZGREZWZhdWx0VFNPcHRpb25zIiwiY2hhcnRJbml0aWxpemUiLCJkcmF3IiwiYXhpc09wdGlvbnMiLCJ5UmFuZ2UiLCJ5UmFuZ2UyIiwidGltZUluZm8iLCJnZXRPYmplY3QiLCJ5QXhpcyIsIkF4aXMiLCJjaGFydCIsInBvc2l0aW9uIiwib3JpZW50IiwicmFuZ2VTY2FsZSIsImNoYXJ0SGVpZ2h0IiwiZG9tYWluU2NhbGUiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwieUF4aXMyIiwidGltZVJhbmdlIiwieEF4aXMiLCJjaGFydFdpZHRoIiwidG9vbHRpcE9wdHMiLCJ2aXNpYmxlIiwidG9vbHRpcCIsIlRvb2x0aXAiLCJ6b29tT3B0cyIsIm1vdXNlSGFuZGxlciIsIk1vdXNlSGFuZGxlciIsInpvb20iLCJ6b29tQnJ1c2giLCJab29tIiwib25ab29tIiwib25YWm9vbSIsIm9uWTFab29tIiwib25ZMlpvb20iLCJzZXJpZXMiLCJUaW1lU2VyaWVzIiwibGVnZW5kIiwibGVnZW5kcyIsIlRpbWVTZXJpZXNMZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJjb25zdGFudHMiLCJESVJfVE9QIiwiZGlzYWJsZVNlcmllc1RvZ2dsZSIsIm9uTGVnZW5kQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsImNhbGwiLCJyZVNjYWxlWUF4aXMiLCJjaGFydFJlc3BvbnNpdmUiLCJ0cmlnZ2VyTW91c2VBY3Rpb24iLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJvbkNvbXBsZXRlIiwiYXhpc1NwZWNpZmllciIsInRpY2tWYWxBcnIiLCJkaWZmVmFsIiwicmFuZ2VWYWwiLCJ5TWF4IiwiYXBwbHlZMUF4aXMiLCJhcHBseVkyQXhpcyIsIkRJUl9MRUZUIiwiRElSX1JJR0hUIiwidGlja1ZhbHVlcyIsImxlbmd0aCIsIm1vZGlmeUF4aXNQcm9wcyIsInJlU2NhbGVBeGlzIiwicmVxdWlyZWRXaWR0aCIsImNsYXNzIiwibWF4VGV4dCIsImR1bW15RyIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJheGlzIiwidGlja3NBcnIiLCIkY29udGFpbmVyIiwiZmluZCIsImVhY2giLCJpIiwidGlja0h0bWwiLCIkIiwidGV4dCIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsIlN0cmluZyIsImQiLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyZW1vdmUiLCJtYXJnaW4iLCJNYXRoIiwicm91bmQiLCJZX0FYSVNfU1BBQ0UiLCJjaGFydEZ1bGxTcGFjZSIsIndpZHRoIiwibGVmdCIsInJpZ2h0IiwidXBkYXRlIiwiQ2hhcnQiLCJkYXRhT3B0aW9ucyIsImNvbnN0cnVjdENoYXJ0RGF0YSIsImNvbnN0cnVjdFhBeGlzSW5mbyIsImNvbnN0cnVjdFBsb3RJbmZvIiwiY29uc3RydWN0WUF4aXNJbmZvIiwiZXJyIiwib25FcnJvciIsInJlc0pzb24iLCJzZXJpZXNEYXRhIiwidGltZXNlcmllcyIsImNvbHVtbnMiLCJ2YWx1ZXMiLCJ2YWxpZEpTT05UeXBlIiwidGltZVN0YW1wSW5kZXgiLCJmaXJzdFRpbWUiLCJpc051bWJlciIsImlzRGF0ZSIsInN0YXJ0IiwiZm9yRWFjaCIsImdldERhdGVGcm9tRXBvYyIsImNoYXJ0RGF0YSIsImRhdGFJbmRleCIsImVhY2hQbG90U2V0IiwicGxvdFNldCIsInBsb3RJbmZvIiwiZmluZEVhY2hQbG90UmFuZ2UiLCJrZXkiLCJtaW4iLCJtYXgiLCJtaW5WYWwiLCJtYXhWYWwiLCJzdGFjayIsImVhY2hQbG90IiwiSW5maW5pdHkiLCJwbG90RGF0YSIsInZhbHVlUmFuZ2UiLCJ2YWxEYXRhIiwibWVtYmVyQXJyIiwic3RhY2tPcmRlck1lbWJlcnMiLCJzdW0iLCJtZW1iZXIiLCJuYW1lIiwiYWxsTWF4IiwiYWxsTWF4MiIsInBsb3RBeGlzIiwiYWxsTWluIiwiYWxsTWluMiIsInlNaW4iLCJyZWR1Y2UiLCJhIiwiYiIsImluZCIsImRhdGFDb2xvckFyciIsImNvbG9yIiwieUxlZnQiLCJ5UmlnaHQiLCJyZWZpbmVOYW1lIiwicmVmaW5lU3RyaW5nIiwidW5pdCIsImlzQm9vbGVhbiIsImJhck9yZGVyTWVtYmVycyIsInNlbGYiLCJtYXhXaWR0aExlZ2VuZCIsInNwYWNpbmdOYW1lcyIsImdyYXBoT3B0aW9ucyIsImVhY2hQbG90TmFtZXMiLCJsZW5nIiwidGV4dFdpZHRoIiwibWF4TGVuTGVnZW5kIiwic3R5bGUiLCJ0aGlzV2lkdGgiLCJlbGUiLCJtYXhUZXh0TGVuZ3RoIiwidG9nZ2xlU2VyaWVzIiwiZW1wdHlGbiIsIm1heFlMZW4iLCJmbG9vciIsImhlaWdodCIsImZ1bGxZTGVuIiwiTEVHRU5EX1lfU1BBQ0UiLCJkaXZXaWR0aCIsIkxFR0VORF9TSE9XX1dJRFRIIiwibGVnZW5kRGl2Iiwic2VyaWVzTmFtZSIsInZpc2libGVTZXJpZXMiLCJwbG90TmFtZSIsImFwcGx5WUF4aXMiLCJjdXJyZW50UGxvdEluZm8iLCJyZWRyYXciLCJzRmxhZyIsInNlbGVjdCIsImNsYXNzZWQiLCJpc0Z1bmN0aW9uIiwibGVnZW5kRGlzcGxheSIsImxlZ2VuZEJsb2NrIiwieCIsIkxFR0VORF9TUEFDRSIsInkiLCJvbiIsInRocm90dGxlIiwidHJhaWxpbmciLCJMRUdFTkRfVEVYVF9YIiwiTEVHRU5EX1RFWFRfWSIsImxlZ05hbWUiLCJpc1BpZUxlZ2VuZCIsInN1YnN0cmluZyIsIkxFR0VORF9SRUNUX1NJWkUiLCJob3Jpem9udGFsTGVnZW5kV2lkdGgiLCJub2RlIiwiZ2V0QkJveCIsIiRsZWdlbmRUZXh0IiwiYmFzaWNXaWR0aCIsImxlZ2VuZFBvcyIsIlZFUlRfUE9TX0xFR0VORCIsIkxFR0VORF9NQVhfV0lEVEgiLCJsZWdlbmRYUG9zIiwieEJ1ZmYiLCJsZWdlbmRZUG9zIiwiZDNTdmciLCJEQVRBX0lOVEVSVkFMX0JVRkZFUl9YIiwiTEVHRU5EX1JJR0hUX0JVRkZFUiIsImh0bWwiLCJoaWRlIiwic2hvdyIsInNob3dGbGFnIiwiQ2hhcnRDb21wb25lbnQiLCJyZWdpc3RlckZuIiwibW91c2VCcnVzaCIsInRvcCIsImlzVG91Y2hTY3JlZW4iLCJjYWxsYmFjayIsImZ1biIsIkxpbmUiLCJjbGFzc05hbWUiLCJESVJfQk9UVE9NIiwibGluZURhdGEiLCJ5QXhpc1RhcmdldCIsInhBeGlzVGFyZ2V0IiwiaW5kZXhPZiIsImxpbmUiLCJkZWZpbmVkIiwibGluZVRhZyIsImdyYXBoWm9uZSIsImNsaXBFbGVtZW50IiwibGluZVdpZHRoIiwiU3RhY2tBcmVhIiwic3RhY2tEYXRhIiwic3RhY2tPcmRlckluZGV4IiwiZmlsdGVyIiwibWFwIiwiZDNTdGFjayIsImFyZWEiLCJ5MCIsInkxIiwia2V5cyIsIm9yZGVyIiwic3RhY2tPcmRlck5vbmUiLCJvZmZzZXQiLCJzdGFja09mZnNldE5vbmUiLCJzdGFja1Zpc2libGVPcmRlciIsInN0YWNrTGF5ZXIiLCJzdGFja01lbWJlciIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiU2VyaWVzIiwiVGltZVNlcmllc1Rvb2x0aXAiLCJjcm9zc0hhaXJzIiwiZW5hYmxlIiwiZm9ybWF0IiwiJHRvb2xUaXBEaXYiLCJhZGRDbGFzcyIsIlRPT0xUSVBfVE9QX0JVRkZFUiIsInJlZ2lzdGVyIiwieFNjYWxlIiwiZGF0ZUluZGV4IiwiZGF0YVNldCIsImJpc2VjdERhdGUiLCJiaXNlY3RvciIsIm1vdXNlRXZ0IiwieE1vdXNlIiwiZDNNb3VzZSIsInlNb3VzZSIsInhWYWwiLCJpbnZlcnQiLCJmb3VuZCIsImRCZWZvcmUiLCJkUHJldiIsImRGb3VuZCIsInRvb2xUaXBEYXRhIiwiZGF0YVBhcnNlTGVuIiwidmlzaWJsZURhdGFJbmRleCIsInBsb3QiLCJtdWx0aUFyck1hcCIsImRTZXQiLCJ2YWwiLCJpbmRleCIsInNvcnQiLCJtYXhJbmQiLCJhcnJTZXQiLCJkYXRlSW50UmFuZ2UiLCJhYnMiLCJob3ZlciIsImV2ZW50TmFtZSIsInhQb3MiLCJ5UG9zIiwiZGlzcGxheURhdGEiLCJwZXJjZW50YWdlRGlmZiIsImNzcyIsImRpc3BsYXkiLCJ5U2NhbGVMZWZ0IiwieVNjYWxlUmlnaHQiLCIkYnJ1c2hPdmVybGF5IiwiYnJ1c2hYIiwiZXh0ZW50IiwiYnJ1c2hYRGl2IiwiZDNFdmVudCIsInNlbGVjdGlvbiIsImQwIiwiZDEiLCJtb3ZlIiwiY3Vyc29yIiwiYnJ1c2hZTGVmdCIsImJydXNoWSIsImJydXNoWUxlZnREaXYiLCJicnVzaFlSaWdodCIsImJydXNoWVJpZ2h0RGl2IiwiQlJVU0hZX0JVRkZFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxlOzs7QUFDbkIsMkJBQWFDLFNBQWIsRUFBd0JDLElBQXhCLEVBQThCO0FBQUE7O0FBQzVCQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLElBQUosRUFBakI7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dH0gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydCBmcm9tICdAL2NoYXJ0cy9DaGFydCdcbmltcG9ydCBBeGlzIGZyb20gJ0AvYXhpcydcbmltcG9ydCB7YWRkRGVmYXVsdFRTT3B0aW9uc30gZnJvbSAnQC9oZWxwZXJzJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQgQmFzaWNUU1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0Jhc2ljVFNQYXJzZXInXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAL3Rvb2x0aXAvVGltZVNlcmllc1Rvb2x0aXAnXG5pbXBvcnQgTW91c2VIYW5kbGVyIGZyb20gJ0AvbW91c2UtaGFuZGxlcidcbmltcG9ydCBab29tIGZyb20gJ0Avem9vbSdcbmltcG9ydCBUaW1lU2VyaWVzTGVnZW5kIGZyb20gJ0AvbGVnZW5kL1RpbWVTZXJpZXNMZWdlbmQnXG5pbXBvcnQgVGltZVNlcmllcyBmcm9tICdAL3Nlcmllcy9UaW1lU2VyaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY1RTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnRBeGlzUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydEF4aXNQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBBZGQgZGVmYXVsdCBvcHRpb25zIHRvIGNoYXJ0XG4gICAgYWRkRGVmYXVsdFRTT3B0aW9ucyh0aGlzLm9wdGlvbnMpXG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcbiAgICBsZXQgYXhpc09wdGlvbnNcbiAgICBjb25zdCB5UmFuZ2UgPSB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgY29uc3QgeVJhbmdlMiA9IHRoaXMub3B0aW9ucy55UmFuZ2UyXG4gICAgY29uc3QgdGltZUluZm8gPSB0aGlzLm9wdGlvbnMudGltZUluZm9cblxuICAgIGlmICh5UmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnlBeGlzLmxlZnQnKVxuICAgICAgdGhpcy55QXhpcyA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgICByYW5nZVNjYWxlOiBbdGhpcy5jaGFydEhlaWdodCwgMF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB5UmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnlBeGlzKVxuICAgIH1cblxuICAgIGlmICh5UmFuZ2UyKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5yaWdodCcpXG4gICAgICB0aGlzLnlBeGlzMiA9IG5ldyBBeGlzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIHBvc2l0aW9uOiAneScsXG4gICAgICAgIG9yaWVudDogJ3JpZ2h0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlMixcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmUgKGNoYXJ0IEFQSSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpczIpXG4gICAgfVxuXG4gICAgaWYgKHRpbWVJbmZvLnRpbWVSYW5nZSkge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueEF4aXMuYm90dG9tJylcbiAgICAgIHRoaXMueEF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3gnLFxuICAgICAgICBvcmllbnQ6ICdib3R0b20nLFxuICAgICAgICByYW5nZVNjYWxlOiBbMCwgdGhpcy5jaGFydFdpZHRoXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHRpbWVJbmZvLnRpbWVSYW5nZSxcbiAgICAgICAgLi4uYXhpc09wdGlvbnNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueEF4aXMpXG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcE9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMudG9vbHRpcCcpXG4gICAgaWYgKHRvb2x0aXBPcHRzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIC4uLnRvb2x0aXBPcHRzXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnRvb2x0aXApXG4gICAgfVxuXG4gICAgY29uc3Qgem9vbU9wdHMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMuem9vbScsIHt9KVxuICAgIGlmICgodG9vbHRpcE9wdHMudmlzaWJsZSB8fCB6b29tT3B0cy52aXNpYmxlKSkge1xuICAgICAgdGhpcy5tb3VzZUhhbmRsZXIgPSBuZXcgTW91c2VIYW5kbGVyKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLm1vdXNlSGFuZGxlcilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnpvb20udmlzaWJsZSkge1xuICAgICAgdGhpcy56b29tQnJ1c2ggPSBuZXcgWm9vbSh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBvblpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWFpvb20sXG4gICAgICAgIG9uWTFab29tOiB0aGlzLm9wdGlvbnMuem9vbS5vblkxWm9vbSxcbiAgICAgICAgb25ZMlpvb206IHRoaXMub3B0aW9ucy56b29tLm9uWTJab29tXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnpvb21CcnVzaClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNlcmllcykge1xuICAgICAgdGhpcy5zZXJpZXMgPSBuZXcgVGltZVNlcmllcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMuc2VyaWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGVnZW5kLnZpc2libGUpIHtcbiAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBUaW1lU2VyaWVzTGVnZW5kKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMsXG4gICAgICAgIGxlZ2VuZFByZWZpeDogdGhpcy5vcHRpb25zLmxlZ2VuZC5sZWdlbmRQcmVmaXgsXG4gICAgICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUCxcbiAgICAgICAgZGlzYWJsZVNlcmllc1RvZ2dsZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5kaXNhYmxlU2VyaWVzVG9nZ2xlLFxuICAgICAgICBvbkxlZ2VuZENoYW5nZTogdGhpcy5vcHRpb25zLmxlZ2VuZC5vbkxlZ2VuZENoYW5nZVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdUaW1lU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ3N2ZyAnICsgcmVTY2FsZUF4aXNbYXhpc10uY2xhc3MpLmZpbmQoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9ICQodGlja3NBcnJbaV0pXG4gICAgICAgICAgLnRleHQoKSB8fCAnJ1xuICAgICAgICBpZiAodGlja0h0bWwubGVuZ3RoID4gcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0ID0gdGlja0h0bWxcbiAgICAgICAgfVxuICAgICAgfSlcblxuXG4gICAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgICAgLmRhdGEoW3JlU2NhbGVBeGlzW2F4aXNdLm1heFRleHRdKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLnRleHQoU3RyaW5nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIC8vIENvbXB1dGUgcmVxdWlyZWRXaWR0aCBmb3IgdGhlIE1heCB0ZXh0XG4gICAgICAgICAgcmVxdWlyZWRXaWR0aCA9IHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKClcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpIC8vIHJlbW92ZSBpdCBqdXN0IGFmdGVyIGRpc3BsYXlpbmdcbiAgICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIHJlc3BlY3RpdmUgbWFyZ2luIHRvIGZpdCBpbiB0aWNrcyB0ZXh0XG4gICAgICB0aGlzLm1hcmdpbltheGlzXSA9IE1hdGgucm91bmQocmVxdWlyZWRXaWR0aCkgKyBjb25zdGFudHMuWV9BWElTX1NQQUNFXG5cbiAgICB9XG4gICAgZHVtbXlHLnJlbW92ZSgpXG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSAodGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCB7Z2V0RGF0ZUZyb21FcG9jLCBnZXRPYmplY3QsIHJlZmluZVN0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNCb29sZWFufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVFNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgdGltZXNlcmllcyBKU09OIHBhcnNpbmcgOicsIGVycilcbiAgICAgIHRoaXMub3B0cy5vbkVycm9yKGVycilcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKU09OIHJlY2VpdmVkIC0gRXJyb3Igb24gdGltZXNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdENoYXJ0RGF0YSAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gcmVzSnNvbi50aW1lc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICAvLyBGaW5kIHNlY29uZHMgaW4gdW5pdEFyciB0byBmaW5kIHRoZSB0aW1lU3RhbXBJbmRleFxuICAgIGNvbnN0IHRpbWVTdGFtcEluZGV4ID0gMFxuICAgIGNvbnN0IGZpcnN0VGltZSA9IGRhdGFbMF1bdGltZVN0YW1wSW5kZXhdXG4gICAgaWYgKCF2YWxpZEpTT05UeXBlIHx8ICEoaXNOdW1iZXIoZmlyc3RUaW1lKSB8fCBpc0RhdGUoZmlyc3RUaW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBUaW1lIHNlcmllcyBKU09OIHJlY2VpdmVkJylcbiAgICB9XG5cbiAgICBsZXQgc3RhcnQgPSAwXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoc3RhcnQgPiBkW3RpbWVTdGFtcEluZGV4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVGltZSBzZXJpZXMgSlNPTiByZWNlaXZlZDogVGltZXN0YW1wIFZhbHVlcyBtdXN0IGJlIGluIGFzY2VuZGluZyBvcmRlcicpXG4gICAgICB9XG4gICAgICBzdGFydCA9IGRbdGltZVN0YW1wSW5kZXhdXG4gICAgICBkW3RpbWVTdGFtcEluZGV4XSA9IGdldERhdGVGcm9tRXBvYyhkW3RpbWVTdGFtcEluZGV4XSwgdHJ1ZSkgLy8gY29udmVydCBFUE9DIHRvIGRhdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0RGF0YTogZGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFhBeGlzSW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IGRhdGFJbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUluZm86IHtcbiAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICB0aW1lUmFuZ2U6IFtzZXJpZXNEYXRhWzBdW2RhdGFJbmRleF0sIHNlcmllc0RhdGFbKHNlcmllc0RhdGEubGVuZ3RoIC0gMSldW2RhdGFJbmRleF1dXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0WUF4aXNJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGRhdGFPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCB5QXhpcyA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlBeGlzMiA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcbiAgICBsZXQgZmluZEVhY2hQbG90UmFuZ2UgPSBmYWxzZVxuICAgIGxldCBrZXlcbiAgICBsZXQgeVJhbmdlID0gbnVsbFxuICAgIGxldCB5UmFuZ2UyID0gbnVsbFxuXG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWF4KSkge1xuICAgICAgICB5UmFuZ2UgPSBbeUF4aXMubWluLCB5QXhpcy5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzMikge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1heCkpIHtcbiAgICAgICAgeVJhbmdlMiA9IFt5QXhpczIubWluLCB5QXhpczIubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHlSYW5nZSBpcyBub3Qgc2V0IGZyb20gZ3JhcGhPcHRpb25zLCB0aGVuIGdvIGluc2lkZVxuICAgIGlmICgoeUF4aXMgJiYgIXlSYW5nZSkgfHwgKHlBeGlzMiAmJiAheVJhbmdlMikpIHtcblxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5taW5WYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5tYXhWYWwpKSB7XG4gICAgICAgICAgZmluZEVhY2hQbG90UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHBsb3RJbmZvLnN0YWNrICYmIHBsb3RJbmZvLnN0YWNrLmxlbmd0aCkgfHwgZmluZEVhY2hQbG90UmFuZ2UpIHtcblxuICAgICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcbiAgICAgICAgICAvLyBSZXNldCByYW5nZSBmb3IgZWFjaCBwbG90IGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICAgIGVhY2goZWFjaFBsb3RTZXQsIGZ1bmN0aW9uIChlYWNoUGxvdCkge1xuICAgICAgICAgICAgZWFjaFBsb3QubWluVmFsID0gSW5maW5pdHlcbiAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBzdGFjayByYW5nZSBmb3IgZWFjaCBzdGFjayBmb3IgZmluZGluZyBtaW4gLCBtYXhcbiAgICAgICAgcGxvdEluZm8uc3RhY2sgJiYgcGxvdEluZm8uc3RhY2suZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIE1heCBhbmQgTWluIGZvciBlYWNoIHBsb3RzIHNlcmllc1xuICAgICAgICBsZXQgdmFsRGF0YSA9IDBcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgaWYgKGZpbmRFYWNoUGxvdFJhbmdlKSB7XG4gICAgICAgICAgICBlYWNoKGVhY2hQbG90U2V0LCBmdW5jdGlvbiAoZWFjaFBsb3QpIHtcbiAgICAgICAgICAgICAgdmFsRGF0YSA9IGRbZWFjaFBsb3QuZGF0YUluZGV4XVxuICAgICAgICAgICAgICBpZiAodmFsRGF0YSA8IGVhY2hQbG90Lm1pblZhbCkge1xuICAgICAgICAgICAgICAgIGVhY2hQbG90Lm1pblZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodmFsRGF0YSA+IGVhY2hQbG90Lm1heFZhbCkge1xuICAgICAgICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IHZhbERhdGFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbG90SW5mby5zdGFjayAmJiBwbG90SW5mby5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyQXJyID0gcGxvdERhdGEuc3RhY2tPcmRlck1lbWJlcnNcbiAgICAgICAgICAgIGxldCBzdW0gPSAwXG4gICAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgIHN1bSArPSAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPyBkW2VhY2hQbG90U2V0W21lbWJlci5uYW1lXS5kYXRhSW5kZXhdIDogMClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChzdW0gPCBwbG90RGF0YS52YWx1ZVJhbmdlWzBdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMF0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW0gPiBwbG90RGF0YS52YWx1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIE1heCB2YWx1ZSByZXF1aXJlZCB0byBwbG90IG9uIGdyYXBoIGJhc2VkIG9uIHZpc2libGUgcGxvdCBmdW5jdGlvbiAuIGkuZSBsaW5lIG9yIHN0YWNrXG4gICAgICBsZXQgYWxsTWF4ID0gLUluZmluaXR5XG4gICAgICBsZXQgYWxsTWF4MiA9IC1JbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgaWYgKGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0ubWF4VmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5wbG90QXhpc1swXSA9PT0gJ3JpZ2h0JyAmJiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0YWNrJykge1xuICAgICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICAgIGlmIChwbG90RGF0YS5wbG90QXhpc1swXSA9PT0gJ2xlZnQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgpIHtcbiAgICAgICAgICAgICAgYWxsTWF4ID0gcGxvdERhdGEudmFsdWVSYW5nZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsb3REYXRhLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIHBsb3REYXRhLnZhbHVlUmFuZ2VbMV0gPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgIGFsbE1heDIgPSBwbG90RGF0YS52YWx1ZVJhbmdlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5kIG1pbiB2YWx1ZSBqdXN0IGJ5IGNoZWNraW5nIG1pbiB2YWx1ZSBhbW9uZyBhbGwgc2VyaWVzIGRhdGFcbiAgICAgIGxldCBhbGxNaW4gPSBJbmZpbml0eVxuICAgICAgbGV0IGFsbE1pbjIgPSBJbmZpbml0eVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKGVhY2hQbG90U2V0W2tleV0ucGxvdEF4aXNbMF0gPT09ICdsZWZ0JyAmJiBlYWNoUGxvdFNldFtrZXldLnZpc2libGUgJiYgZWFjaFBsb3RTZXRba2V5XS5taW5WYWwgPCBhbGxNaW4pIHtcbiAgICAgICAgICBhbGxNaW4gPSBlYWNoUGxvdFNldFtrZXldLm1pblZhbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLnRpbWVzZXJpZXNcbiAgICBjb25zdCBjb2x1bW5zID0gc2VyaWVzRGF0YS5jb2x1bW5zXG4gICAgbGV0IGluZCA9IDBcbiAgICAvLyBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgcGxvdCBmdW5jdGlvbnMgbmVlZGVkIGZvciB0aGUgY2hhcnRcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHt9XG4gICAgLy8gU2V0IG9mIHJ1bGVzIHRoYXQgY2hhcnRzIG5lZWRzIHRvIGJlIGRyYXcgb24gdGltZVNlcmllc0NoYXJ0XG4gICAgY29uc3QgcGxvdEluZm8gPSBkYXRhT3B0aW9ucy5zZXJpZXNcbiAgICBsZXQga2V5XG5cbiAgICBjb25zdCB0aW1lU3RhbXBJbmRleCA9IGRhdGFPcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGlmICh0aW1lU3RhbXBJbmRleCA9PT0gaW5kKSB7XG4gICAgICAgIGluZCsrXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gQ29udmVydCB0aGUgU2VyaWVzIE5hbWUgdG8gSlMgc3VpdGFibGUgb2JqZWN0IG1hcHBlZCBuYW1lIGV4OiBhYmMoJSkgMSAtLT4gYWJjMVxuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhkKVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7XG4gICAgICAgIG5hbWU6IGQsXG4gICAgICAgIGRhdGFJbmRleDogaW5kLFxuICAgICAgICBtaW5WYWw6IEluZmluaXR5LFxuICAgICAgICBtYXhWYWw6IC1JbmZpbml0eSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IGRhdGFDb2xvckFycltpbmRdIHx8ICcjMDAwJ1xuICAgICAgfVxuICAgICAgaW5kKytcbiAgICB9KVxuXG5cbiAgICBmb3IgKGtleSBpbiBwbG90SW5mbykge1xuICAgICAgaWYgKGtleSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBwbG90RGF0YS5uYW1lID0gcmVmaW5lU3RyaW5nKHBsb3REYXRhLm5hbWUpXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBwbG90RGF0YS5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2xvciAmJiAoZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICBjb25zdCBwbG90QXhpcyA9IHBsb3REYXRhLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICBjb25zdCB1bml0ID0gcGxvdEF4aXNbMF0gPT09ICdsZWZ0JyA/IHlMZWZ0LnVuaXQgOiB5UmlnaHQudW5pdFxuICAgICAgICAgIGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnVuaXQgPSB1bml0XG4gICAgICAgICAgaXNCb29sZWFuKHBsb3REYXRhLnZpc2libGUpICYmIChlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS52aXNpYmxlID0gcGxvdERhdGEudmlzaWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3RhY2snKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgICAgIHBsb3REYXRhLnZhbHVlUmFuZ2UgPSBbSW5maW5pdHksIC1JbmZpbml0eV1cbiAgICAgICAgICBtZW1iZXJBcnIuZm9yRWFjaChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICBtZW1iZXIubmFtZSA9IHJlZmluZVN0cmluZyhtZW1iZXIubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbWVtYmVyLmNvbG9yIC8vIEFwcGx5IGNvbG9yIGZvciBlYWNoIFBsb3Qgc2VyaWVzIG9yIHBpY2sgZnJvbSBkYXRhIGNvbG9yIEFyclxuICAgICAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgICB0aHJvdyBgQ29sb3Igbm90IHByZXNlbnQgZm9yIHNlcmllcyAke3Bsb3REYXRhLm5hbWV9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5jb2xvciA9IGNvbG9yKVxuICAgICAgICAgICAgY29uc3QgcGxvdEF4aXMgPSBtZW1iZXIucGxvdEF4aXMgfHwgWydsZWZ0JywgJ2JvdHRvbSddXG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0ucGxvdEF4aXMgPSBwbG90QXhpc1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IHBsb3RBeGlzWzBdID09PSAnbGVmdCcgPyB5TGVmdC51bml0IDogeVJpZ2h0LnVuaXRcbiAgICAgICAgICAgIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS51bml0ID0gdW5pdFxuICAgICAgICAgICAgaXNCb29sZWFuKG1lbWJlci52aXNpYmxlKSAmJiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgPSBtZW1iZXIudmlzaWJsZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7ZW1wdHlGbiwgaXNGdW5jdGlvbiwgdGhyb3R0bGV9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzTGVnZW5kIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGRpc2FibGVTZXJpZXNUb2dnbGU6IGZhbHNlXG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID0gMFxuICAgIHRoaXMub3B0cy5zcGFjaW5nTmFtZXMgPSBbXVxuXG5cbiAgICBjb25zdCBncmFwaE9wdGlvbnMgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9uc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gZ3JhcGhPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBlYWNoUGxvdE5hbWVzID0gT2JqZWN0LmtleXMoZWFjaFBsb3RTZXQpXG4gICAgbGV0IGxlbmcgPSAwXG4gICAgY29uc3QgdGV4dFdpZHRoID0gW11cbiAgICBsZXQgbWF4TGVuTGVnZW5kXG5cbiAgICBjb25zdCBkdW1teUcgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgLy8gQWRkIGFsbCBuYW1lIG9uIERPTSB0byBjYWxjdWxhdGUgaG93IG11Y2ggc3BhY2UgaXMgbmVlZGVkIGZvciBldmVyeSBuYW1lc1xuICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgLmRhdGEoZWFjaFBsb3ROYW1lcylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtbGFiZWwnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTFweCcpXG4gICAgICAuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJzUwMCcpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gKHNlbGYub3B0cy5sZWdlbmRQcmVmaXggKyAoZWFjaFBsb3RTZXRbZF0gPyBlYWNoUGxvdFNldFtkXS5uYW1lIDogJycpKVxuICAgICAgfSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIC8vIEZpbmQgc2l6ZSByZXF1aXJlZCBmb3IgZWFjaCBsZWdlbmQgb24gc2NyZWVuXG4gICAgICAgIGNvbnN0IHRoaXNXaWR0aCA9IE1hdGgucm91bmQodGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSlcbiAgICAgICAgaWYgKHRoaXNXaWR0aCA+IHNlbGYub3B0cy5tYXhXaWR0aExlZ2VuZCkge1xuICAgICAgICAgIHNlbGYub3B0cy5tYXhXaWR0aExlZ2VuZCA9IHRoaXNXaWR0aFxuICAgICAgICAgIG1heExlbkxlZ2VuZCA9IGRcbiAgICAgICAgfVxuICAgICAgICB0ZXh0V2lkdGgucHVzaCh0aGlzV2lkdGgpXG4gICAgICAgICQodGhpcykucmVtb3ZlKCkgLy8gcmVtb3ZlIHRoZW0ganVzdCBhZnRlciBkaXNwbGF5aW5nIHRoZW1cbiAgICAgIH0pXG5cbiAgICAvLyBGaWxsIHRoZSBzcGFjaW5nIEFyciBoYXZpbmcgcG9zaXRpb24gZm9yIGVhY2ggbGVnZW5kcyBvbiBob3Jpem9udGFsIG9yZGVyXG4gICAgdGV4dFdpZHRoLmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xuICAgICAgbGVuZyArPSBlbGVcbiAgICAgIHNlbGYub3B0cy5zcGFjaW5nTmFtZXMucHVzaChsZW5nKVxuICAgIH0pXG5cbiAgICAvLyBNYWtlIG1heFRleHRMZW5ndGggSGlnaGVyIHRvIHNob3cgZnVsbCB0ZXh0IGZvciBwaWUgbGVnZW5kc1xuICAgIHRoaXMub3B0cy5tYXhUZXh0TGVuZ3RoID0gbWF4TGVuTGVnZW5kLmxlbmd0aCArIDEwMFxuXG4gICAgZHVtbXlHLnJlbW92ZSgpXG4gIH1cblxuICBkcmF3ICgpIHtcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZ3JhcGhPcHRpb25zID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnNcbiAgICBsZXQgdG9nZ2xlU2VyaWVzID0gZW1wdHlGblxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gZ3JhcGhPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBlYWNoUGxvdE5hbWVzID0gT2JqZWN0LmtleXMoZWFjaFBsb3RTZXQpXG4gICAgY29uc3QgbWF4WUxlbiA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0RnVsbFNwYWNlLmhlaWdodCAqIDkwIC8gMTAwKVxuICAgIGxldCBmdWxsWUxlbiA9IGVhY2hQbG90TmFtZXMubGVuZ3RoICogY29uc3RhbnRzLkxFR0VORF9ZX1NQQUNFXG4gICAgZnVsbFlMZW4gPSBmdWxsWUxlbiA+IG1heFlMZW4gPyBtYXhZTGVuIDogZnVsbFlMZW5cbiAgICBjb25zdCBkaXZXaWR0aCA9IHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCArIGNvbnN0YW50cy5MRUdFTkRfU0hPV19XSURUSFxuXG4gICAgdGhpcy5vcHRzLmxlZ2VuZERpdiA9IHtcbiAgICAgIHdpZHRoOiBkaXZXaWR0aCxcbiAgICAgIGhlaWdodDogZnVsbFlMZW5cbiAgICB9XG5cblxuICAgIC8vIFBlcmZvbSBTZXJpZXMgc2hvdyBhbmQgaGlkZSBvbiBjbGljayBvZiBlYWNoIGxlZ2VuZFxuICAgIGlmICghdGhpcy5vcHRzLmRpc2FibGVTZXJpZXNUb2dnbGUpIHtcblxuICAgICAgdG9nZ2xlU2VyaWVzID0gZnVuY3Rpb24gKHNlcmllc05hbWUpIHtcbiAgICAgICAgbGV0IHZpc2libGVTZXJpZXMgPSAwXG4gICAgICAgIGxldCBwbG90TmFtZVxuXG4gICAgICAgIGlmIChlYWNoUGxvdFNldFtzZXJpZXNOYW1lXSAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXS52aXNpYmxlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHNlcmllcyBpcyBnZXR0aW5nIGRpc2FibGVkIGFuZCBpdHMgb25seSBvbmUgc2VyaWVzIHZpc2libGUsIERvbnQgZGlzYWJsZSBpdC5cbiAgICAgICAgICBmb3IgKHBsb3ROYW1lIGluIGVhY2hQbG90U2V0KSB7XG4gICAgICAgICAgICBlYWNoUGxvdFNldFtwbG90TmFtZV0udmlzaWJsZSAmJiB2aXNpYmxlU2VyaWVzKytcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmlzaWJsZVNlcmllcyA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXBwbHlZQXhpc1xuXG4gICAgICAgIC8vIHBsb3RTZXJpZXMgdGhhdCBpcyBnZXR0aW5nIHRvZ2dsZWRcbiAgICAgICAgbGV0IGN1cnJlbnRQbG90SW5mb1xuXG4gICAgICAgIGlmIChlYWNoUGxvdFNldCAmJiBlYWNoUGxvdFNldFtzZXJpZXNOYW1lXSkge1xuICAgICAgICAgIGN1cnJlbnRQbG90SW5mbyA9IGVhY2hQbG90U2V0XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChjdXJyZW50UGxvdEluZm8pIHtcblxuICAgICAgICAgIGN1cnJlbnRQbG90SW5mb1tzZXJpZXNOYW1lXS52aXNpYmxlID0gIWN1cnJlbnRQbG90SW5mb1tzZXJpZXNOYW1lXS52aXNpYmxlXG5cbiAgICAgICAgICBpZiAoY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnBsb3RBeGlzWzBdID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcblxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGNvbXB1dGUgbWF4IGFuZCBtaW4gdmFsdWUgZm9yIFlBeGlzIGJhc2VkIG9uIHNlcmllcyB3aGljaCBhcmUgdmlzaWJsZVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLm9wdHMuY2hhcnQub3B0aW9ucywgc2VsZi5vcHRzLmNoYXJ0LmRhdGFQYXJzZXIuY29uc3RydWN0WUF4aXNJbmZvKCkpXG5cbiAgICAgICAgICAgIGFwcGx5WUF4aXMgPSBjb25zdGFudHMuRElSX0xFRlRcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgICAgICBkb21haW5TY2FsZTogZ3JhcGhPcHRpb25zLnlSYW5nZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBsb3RJbmZvW3Nlcmllc05hbWVdLnBsb3RBeGlzWzBdID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG5cbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBjb21wdXRlIG1heCBhbmQgbWluIHZhbHVlIGZvciBZQXhpcyBiYXNlZCBvbiBzZXJpZXMgd2hpY2ggYXJlIHZpc2libGVcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5vcHRzLmNoYXJ0Lm9wdGlvbnMsIHNlbGYub3B0cy5jaGFydC5kYXRhUGFyc2VyLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICAgICAgICBhcHBseVlBeGlzID0gY29uc3RhbnRzLkRJUl9SSUdIVFxuICAgICAgICAgICAgLy8gVXBkYXRlIFkgQXhpcyB3aXRoIG5ldyBkb21haW5TY2FsZVxuICAgICAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzMi5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgICAgICBkb21haW5TY2FsZTogZ3JhcGhPcHRpb25zLnlSYW5nZTJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRqdXN0IFlBeGlzIHRpY2sgdmFsdWUgZGlzcGxheSBiYXNlZCBvbiB5QXhpcyBjaGFuZ2VcbiAgICAgICAgICBzZWxmLm9wdHMuY2hhcnQucmVTY2FsZVlBeGlzKGFwcGx5WUF4aXMpXG5cbiAgICAgICAgICAvLyBSZWRyYXcgYWxsIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiB5QXhpcyBjaGFuZ2VcbiAgICAgICAgICBzZWxmLm9wdHMuY2hhcnQuc2VyaWVzLnJlZHJhdygpXG5cbiAgICAgICAgICBjb25zdCBzRmxhZyA9IGN1cnJlbnRQbG90SW5mb1tzZXJpZXNOYW1lXS52aXNpYmxlXG5cbiAgICAgICAgICBzZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5jbGFzc2VkKCd2Yy1maWxsLWhpZGRlbicsICFzRmxhZylcblxuICAgICAgICAgIGlzRnVuY3Rpb24oc2VsZi5vcHRzLm9uTGVnZW5kQ2hhbmdlKSAmJiBzZWxmLm9wdHMub25MZWdlbmRDaGFuZ2UuY2FsbChzZWxmLm9wdHMuY2hhcnQsIGN1cnJlbnRQbG90SW5mb1tzZXJpZXNOYW1lXSwgc0ZsYWcpXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGVnZW5kRGlzcGxheSA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtZ3JvdXAnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTUsIDUpJylcblxuICAgIHRoaXMubGVnZW5kQmxvY2sgPSB0aGlzLmxlZ2VuZERpc3BsYXlcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZWFjaFBsb3ROYW1lcylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAvLyBQcm92aWRlIGhvcml6b250YWwgcG9zaXRpb24gYmFzZWQgb24gb3JkZXJcbiAgICAgICAgaWYgKHNlbGYub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgICAgICBjb25zdCB4ID0gc2VsZi5vcHRzLnNwYWNpbmdOYW1lc1tpIC0gMV0gPyAoc2VsZi5vcHRzLnNwYWNpbmdOYW1lc1tpIC0gMV0gKyBjb25zdGFudHMuTEVHRU5EX1NQQUNFICogaSkgOiAwXG4gICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHggKyAnLCAwKSdcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLm9wdHMucG9zaXRpb24gPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgICAgICAvLyBQcm92aWRlIHZlcnRpY2FsIHBvc2l0aW9uIGJhc2VkIG9uIG9yZGVyXG4gICAgICAgICAgY29uc3QgeSA9IGkgKiBjb25zdGFudHMuTEVHRU5EX1lfU1BBQ0VcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgwICwnICsgeSArICcpJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICd2Yy1sZWdlbmQgdmMtbGVnZW5kLScgKyBkXG4gICAgICB9KVxuICAgICAgLmNsYXNzZWQoJ3ZjLWZpbGwtaGlkZGVuJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtkXSA/ICFlYWNoUGxvdFNldFtkXS52aXNpYmxlIDogZmFsc2UpXG4gICAgICB9KVxuXG4gICAgLy8gTGlzdGVuIHRvIGNsaWNrIGV2ZW50IG9ubHkgZm9yIHRpbWVzZXJpZXMgbGVnZW5kc1xuICAgIHRoaXMubGVnZW5kQmxvY2tcbiAgICAgIC5vbignY2xpY2snLCB0aHJvdHRsZSh0b2dnbGVTZXJpZXMsIDMwMCwgeyAvLyBTb21ldGltZXMgdG9nZ2xlIGV2ZW50IGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcywgaGVuY2UgYmxvY2sgYnkgYWRkaW5nIHRocm90dGxlXG4gICAgICAgIHRyYWlsaW5nOiBmYWxzZVxuICAgICAgfSkpXG5cblxuICAgIHRoaXMubGVnZW5kQmxvY2suYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtbGFiZWwnKVxuICAgICAgLmF0dHIoJ3gnLCBjb25zdGFudHMuTEVHRU5EX1RFWFRfWClcbiAgICAgIC5hdHRyKCd5JywgY29uc3RhbnRzLkxFR0VORF9URVhUX1kpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMXB4JylcbiAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnNTAwJylcbiAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGxldCBsZWdOYW1lID0gKHNlbGYub3B0cy5sZWdlbmRQcmVmaXggKyAoZWFjaFBsb3RTZXRbZF0gPyBlYWNoUGxvdFNldFtkXS5uYW1lIDogJycpKVxuICAgICAgICBpZiAoc2VsZi5vcHRzLmlzUGllTGVnZW5kICYmIHNlbGYub3B0cy5tYXhUZXh0TGVuZ3RoIDwgbGVnTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICBsZWdOYW1lID0gbGVnTmFtZS5zdWJzdHJpbmcoMCwgc2VsZi5vcHRzLm1heFRleHRMZW5ndGgpICsgJy4uLidcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVnTmFtZVxuICAgICAgfSlcblxuXG4gICAgdGhpcy5sZWdlbmRCbG9jay5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1ib3gnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgY29uc3RhbnRzLkxFR0VORF9SRUNUX1NJWkUpXG4gICAgICAuYXR0cignaGVpZ2h0JywgY29uc3RhbnRzLkxFR0VORF9SRUNUX1NJWkUpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtkXSA/IGVhY2hQbG90U2V0W2RdLmNvbG9yIDogJydcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcycHgnKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0uY29sb3IgOiAnJ1xuICAgICAgfSlcblxuICAgIHRoaXMub3B0cy5ob3Jpem9udGFsTGVnZW5kV2lkdGggPSBNYXRoLnJvdW5kKHRoaXMubGVnZW5kRGlzcGxheS5ub2RlKClcbiAgICAgIC5nZXRCQm94KClcbiAgICAgIC53aWR0aClcblxuICAgIHRoaXMudXBkYXRlKClcblxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICAvLyBEaXNwbGF5IGluIHZlcnRpY2FsIG9yZGVyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCAkbGVnZW5kVGV4dCA9IHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyLmZpbmQoJ3N2ZyAudmMtbGVnZW5kLWxhYmVsJylcbiAgICBsZXQgYmFzaWNXaWR0aCA9IHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHRcblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIC8vIERpc3BsYXkgbGVnZW5kcyB2ZXJ0aWNhbGx5IG9uIHJpZ2h0IHNpZGVcbiAgICAgIGJhc2ljV2lkdGggKz0gY29uc3RhbnRzLkxFR0VORF9TSE9XX1dJRFRIXG4gICAgICBsZXQgbGVnZW5kUG9zID0gY29uc3RhbnRzLlZFUlRfUE9TX0xFR0VORFxuICAgICAgaWYgKHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCA9PT0gY29uc3RhbnRzLkxFR0VORF9NQVhfV0lEVEgpIHtcbiAgICAgICAgbGVnZW5kUG9zID0gY29uc3RhbnRzLlZFUlRfUE9TX0xFR0VORCArIDEwXG4gICAgICB9XG4gICAgICBsZXQgbGVnZW5kWFBvcyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggKiBsZWdlbmRQb3MgLyAxMDApXG4gICAgICBsZXQgeEJ1ZmYgPSB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAtIGxlZ2VuZFhQb3NcbiAgICAgIHhCdWZmID0gTWF0aC5mbG9vcigoeEJ1ZmYgLSB0aGlzLm9wdHMubGVnZW5kRGl2LndpZHRoKSAvIDIpXG4gICAgICBsZWdlbmRYUG9zICs9IHhCdWZmXG5cbiAgICAgIGNvbnN0IGxlZ2VuZFlQb3MgPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuY2hhcnQuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0IC0gdGhpcy5vcHRzLmxlZ2VuZERpdi5oZWlnaHQpIC8gMilcblxuICAgICAgdGhpcy5sZWdlbmREaXNwbGF5XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBsZWdlbmRYUG9zICsgJywnICsgbGVnZW5kWVBvcyArICcpJylcblxuICAgIH1cblxuICAgIGNvbnN0IGQzU3ZnID0gdGhpcy5vcHRzLmNoYXJ0LnN2Z1xuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gY29uc3RhbnRzLkRJUl9UT1ApIHtcbiAgICAgIGJhc2ljV2lkdGggPSBjb25zdGFudHMuTEVHRU5EX1NQQUNFICogc2VsZi5vcHRzLnNwYWNpbmdOYW1lcy5sZW5ndGggKyBjb25zdGFudHMuREFUQV9JTlRFUlZBTF9CVUZGRVJfWFxuXG4gICAgICBpZiAoKHRoaXMub3B0cy5ob3Jpem9udGFsTGVnZW5kV2lkdGggKyBjb25zdGFudHMuTEVHRU5EX1JJR0hUX0JVRkZFUikgPiBzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkge1xuICAgICAgICAvLyBIaWRlIG9ubHkgdGV4dCBhbmQgZGlzcGxheSBDb2xvciBib3ggd2l0aCB0b29sdGlwXG4gICAgICAgIGQzU3ZnLnNlbGVjdEFsbCgnLnZjLWxlZ2VuZCcpXG4gICAgICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VyaWVzTmFtZSA9IHNlbGVjdCh0aGlzKS5zZWxlY3QoJ3RleHQnKS5odG1sKClcbiAgICAgICAgICAgIHNlbGVjdCh0aGlzKS5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAgICAgICAuaHRtbCgnJylcbiAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnOnRpdGxlJylcbiAgICAgICAgICAgICAgLnRleHQoc2VyaWVzTmFtZSlcbiAgICAgICAgICB9KVxuICAgICAgICAkbGVnZW5kVGV4dC5oaWRlKClcblxuICAgICAgICBpZiAoc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggPCBiYXNpY1dpZHRoKSB7XG4gICAgICAgICAgLy8gZGlzcGxheSBib3ggdmVydGljYWxseVxuICAgICAgICAgIHRoaXMubGVnZW5kQmxvY2tcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICBjb25zdCB5ID0gaSAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgwLCcgKyB5ICsgJyknXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERpc3BsYXkgb25seSBib3ggb24gdG9wXG4gICAgICAgICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHggPSBjb25zdGFudHMuTEVHRU5EX1NQQUNFICogaVxuICAgICAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsIDApJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGlzcGxheSBsZWdlbmQgb24gdG9wIHdpdGggYm90aCB0ZXh0LCBib3ggYW5kIHJlbW92ZSB0b29sdGlwXG4gICAgICAgIHRoaXMubGVnZW5kQmxvY2tcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSA/IChzZWxmLm9wdHMuc3BhY2luZ05hbWVzW2kgLSAxXSArIGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpKSA6IDBcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywgMCknXG4gICAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRoaXMub3B0cy5pc1BpZUxlZ2VuZCkge1xuICAgICAgICAgIGQzU3ZnLnNlbGVjdEFsbCgnLnZjLWxlZ2VuZCcpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGVjdCh0aGlzKS5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAgICAgICAgIC5odG1sKCcnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAkbGVnZW5kVGV4dC5zaG93KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICAgIHRoaXMubGVnZW5kRGlzcGxheSAmJiB0aGlzLmxlZ2VuZERpc3BsYXkuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmxlZ2VuZEJsb2NrICYmIHRoaXMubGVnZW5kQmxvY2sucmVtb3ZlKClcbiAgICB0aGlzLmxlZ2VuZERpc3BsYXkgJiYgdGhpcy5sZWdlbmREaXNwbGF5LnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUhhbmRsZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLm9wdHMucmVnaXN0ZXJGbiA9IFtdXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hYJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuXG4gICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy56b29tLnZpc2libGUpIHtcbiAgICAgIC8vIHgtWm9vbSBmb3IgY2hhcnQgZG9lc3Qgbm90IGV4aXN0LCBBZGQgcmVjdCBvdmVybGF5IGZvciBicnVzaFhEaXZcbiAgICAgIHRoaXMubW91c2VCcnVzaC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnb3ZlcmxheScpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMubW91c2VCcnVzaC5hdHRyKCd3aWR0aCcsIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0fSwke3RoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wfSlgKVxuICAgIGlmICghdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuem9vbS52aXNpYmxlKSB7XG4gICAgICB0aGlzLm1vdXNlQnJ1c2guc2VsZWN0KCdyZWN0Lm92ZXJsYXknKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodClcbiAgICB9XG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlZ2lzdGVyIChjYWxsYmFjaykge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICB0cmlnZ2VyTW91c2VBY3Rpb24gKCkge1xuICAgIHRoaXMub3B0cy5yZWdpc3RlckZuLmZvckVhY2goKGZ1bikgPT4ge1xuICAgICAgZnVuLmNhbGwodGhpcylcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm1vdXNlQnJ1c2ggJiYgdGhpcy5tb3VzZUJydXNoLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtsaW5lfSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgLy8gRG8gbm90IHJlZ2lzdGVyIHRoaXMgY29tcG9uZW50IGluIGNoYXJ0Q29tcG9uZW50c0FyciwgIEFzIHRoZSBzZXJpZXMgY29tcG9uZW50IGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBhbmQgd2lsbCBjYWxsIHRoZSBsaW5lIEFQSXNcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgbGluZURhdGE6IG51bGwsXG4gICAgICB5QXhpc1RhcmdldDogbnVsbCxcbiAgICAgIHhBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0gbGluZSgpXG5cbiAgICBpZiAodGhpcy5vcHRzLnlBeGlzVGFyZ2V0KSB7XG4gICAgICAvLyBGb3Igbm9ybWFsIHNlcmllcywgeUF4aXNUYXJnZXQgcmVmZXJzIHRvIHRoZSBpbmRleCBvZiB0aGlzIHNlcmllcyBpbiBkYXRhIEFyclxuICAgICAgdGhpcy5saW5lXG4gICAgICAgIC5kZWZpbmVkKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSAhPSBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgLy8geEF4aXNUYXJnZXQgcmVmZXJzIHRoZSBpbmRleCBvZiBkYXRlIGluIGRhdGEgQXJyXG4gICAgICAgICAgcmV0dXJuIHgoZFtzZWxmLm9wdHMueEF4aXNUYXJnZXRdKVxuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB5KGRbc2VsZi5vcHRzLnlBeGlzVGFyZ2V0XSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMubGluZVRhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuc2VsZWN0QWxsKCcudmMtbGluZS0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICAgIC5kYXRhKFt0aGlzLm9wdHMubGluZURhdGFdKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxpbmUtcGxvdCB2Yy1saW5lLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY2xpcEVsZW1lbnQgPSB0aGlzLm9wdHMuY2hhcnQuJGNvbnRhaW5lci5maW5kKCdzdmcgY2xpcFBhdGgnKVxuICAgIC8vIEFkZGluZyB0aGUgbGluZXMgc2VyaWVzIGZvciBkYXRhIHRvIGJlIHNob3duXG4gICAgdGhpcy5saW5lVGFnLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjJyArIGNsaXBFbGVtZW50LmF0dHIoJ2lkJykgKyAnKScpIC8vIGRpc3BsYXkgZ3JhcGhab25lIG9mIHNhbWUgc2l6ZSBhcyBjbGlwLXBhdGggZGVmaW5lZFxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxpbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsICd0cmFuc3BhcmVudCcpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmxpbmVXaWR0aCB8fCAnMnB4J1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYubGluZShkLnZhbHVlcykgLy8gVmFsdWVzIGFyZSBhcnJheSBvZiBhcnJheSBoYXZpbmcgZm9ybWF0IGxpa2UgIFtbZGF0ZSwgc2VyaWVzMSwgc2VyaWVzMiAuLi4uXSwuLi5dXG4gICAgICB9KVxuICB9XG5cbiAgLy8gVXBkYXRlIGhhcHBlbnMgd2hlbiB0aGUgY2hhcnQgaXMgcmVzaXplZFxuICB1cGRhdGUgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5saW5lVGFnICYmIHRoaXMubGluZVRhZy5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBzZWxmLmxpbmUoZC52YWx1ZXMpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMubGluZVRhZyAmJiB0aGlzLmxpbmVUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIC8vIFJlZHJhdyBpcyBjYWxsZWQgd2hlbiBzZXJpZXMgaXMgdG9nZ2xlZCBmcm9tIExlZ2VuZHNcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBzZXJpZXNOYW1lID0gdGhpcy5vcHRzLmxpbmVEYXRhLm5hbWVcbiAgICAvLyBSZW1vdmUgbGluZSBzZXJpZXNcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnJlbW92ZSgpXG5cbiAgICBpZiAoZWFjaFBsb3RTZXQgJiYgZWFjaFBsb3RTZXRbc2VyaWVzTmFtZV0gJiYgZWFjaFBsb3RTZXRbc2VyaWVzTmFtZV0udmlzaWJsZSkge1xuICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG5cbiAgfVxuICBcbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmxpbmVUYWcgJiYgdGhpcy5saW5lVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5saW5lID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxuXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7YXJlYSwgc3RhY2ssIHN0YWNrT3JkZXJOb25lLCBzdGFja09mZnNldE5vbmV9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFja0FyZWEgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBsb3RBeGlzOiBbY29uc3RhbnRzLkRJUl9MRUZULCBjb25zdGFudHMuRElSX0JPVFRPTV0sXG4gICAgICB4QXhpc1RhcmdldDogJycsXG4gICAgICBzdGFja0RhdGE6IG51bGwsXG4gICAgICBzdGFja09yZGVyTWVtYmVyczoge30sXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgLy8gRGVmaW5lIGluIHdoYXQgb3JkZXIsIFN0YWNrIHNlcmllcyBuZWVkcyB0byBiZSBwbG90ZWRcbiAgICB0aGlzLm9wdHMuc3RhY2tPcmRlckluZGV4ID0gdGhpcy5vcHRzLnN0YWNrT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2VcbiAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0uZGF0YUluZGV4XG4gICAgICB9KVxuXG5cbiAgICAvLyBGaW5kIHggYW5kIHkgYXhpcyBiYXNlZCBvbiBwbG90QXhpc1xuICAgIGxldCB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJylcbiAgICBpZiAodGhpcy5vcHRzLnBsb3RBeGlzLmluZGV4T2YoY29uc3RhbnRzLkRJUl9UT1ApID4gLTEpIHtcbiAgICAgIHggPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueEF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICBsZXQgeSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfUklHSFQpID4gLTEpIHtcbiAgICAgIHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJylcbiAgICB9XG5cbiAgICB0aGlzLm9wdHMuZDNTdGFjayA9IHN0YWNrKClcblxuICAgIHRoaXMuYXJlYSA9IGFyZWEoKVxuICAgICAgLngoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHgoZC5kYXRhW3NlbGYub3B0cy54QXhpc1RhcmdldF0pXG4gICAgICB9KVxuICAgICAgLnkwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGRbMF0pIC8vIEluZGljYXRlcyB3aGVyZSB0byBzdGFydCBhbG9uZyBZQXhpc1xuICAgICAgfSlcbiAgICAgIC55MShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkWzFdKSAvLyBJbmRpY2F0ZXMgd2hlcmUgdG8gZW5kIGFsb25nIFlBeGlzXG4gICAgICB9KVxuXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuXG4gICAgdGhpcy5vcHRzLmQzU3RhY2sua2V5cyh0aGlzLm9wdHMuc3RhY2tPcmRlckluZGV4KSAvLyBzcGVjaWZ5IHRoZSBzdGFjayBzZXJpZXMgbmFtZXMgaW4gYXJyYXkgZm9ybWF0XG4gICAgdGhpcy5vcHRzLmQzU3RhY2sub3JkZXIoc3RhY2tPcmRlck5vbmUpIC8vIHVzZSB0aGUgZ2l2ZW4gc2VyaWVzIG9yZGVyLlxuICAgIHRoaXMub3B0cy5kM1N0YWNrLm9mZnNldChzdGFja09mZnNldE5vbmUpIC8vIGFwcGx5IGEgemVybyBiYXNlbGluZSBvbiBzdGFydFxuXG4gICAgLy8gU2hvdyBzdGFjayBwbG90IGZvciBvbmx5IHNlcmllcyB3aGljaCBhcmUgdmlzaWJsZVxuICAgIGNvbnN0IHN0YWNrVmlzaWJsZU9yZGVyID0gdGhpcy5vcHRzLnN0YWNrT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlKVxuICAgIH0pXG5cbiAgICB0aGlzLnN0YWNrTGF5ZXIgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLnNlbGVjdEFsbCgnLnZjLXN0YWNrLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICAgICAgLmRhdGEodGhpcy5vcHRzLmQzU3RhY2sodGhpcy5vcHRzLnN0YWNrRGF0YSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtc3RhY2stcGxvdCB2Yy1zdGFjay0nICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNsaXBFbGVtZW50ID0gdGhpcy5vcHRzLmNoYXJ0LiRjb250YWluZXIuZmluZCgnc3ZnIGNsaXBQYXRoJylcblxuICAgIC8vIFBMb3Qgc3RhY2tMYXllciBiYXNlZCBvbiBlYWNoIHNlcmllcyB2aXNpYmxpdHlcbiAgICB0aGlzLnN0YWNrTGF5ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCMnICsgY2xpcEVsZW1lbnQuYXR0cignaWQnKSArICcpJykgLy8gZGlzcGxheSBncmFwaFpvbmUgb2Ygc2FtZSBzaXplIGFzIGNsaXAtcGF0aCBkZWZpbmVkXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAndmMtc3RhY2sgdmMtc3RhY2stJyArIHN0YWNrTWVtYmVyLm5hbWVcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBjb25zdCBzdGFja01lbWJlciA9IHN0YWNrVmlzaWJsZU9yZGVyW3NlbGYub3B0cy5zdGFja09yZGVySW5kZXguaW5kZXhPZihkLmtleSldIHx8IHtcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtzdGFja01lbWJlci5uYW1lXS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgdGhpcy5hcmVhKVxuXG4gIH1cbiAgXG4gIC8vIFVwZGF0ZSBzdGFja0xheWVyIGJhc2VkIG9uIGNoYXJ0IHJlc2l6ZVxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIHRoaXMuYXJlYSlcbiAgfVxuICBcbiAgcmVkcmF3ICgpIHtcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICAvLyBNb2RpZnkgc3RhY2tPcmRlciBhcnIgYmFzZWQgb24gdmlzaWJsZVNlcmllc1xuICAgIHRoaXMub3B0cy5zdGFja09yZGVySW5kZXggPSB0aGlzLm9wdHMuc3RhY2tPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZWxlLm5hbWVdLnZpc2libGUgfHwgZmFsc2UpXG4gICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZWxlLm5hbWVdLmRhdGFJbmRleFxuICAgICAgfSlcblxuICAgIC8vIFJlbW92ZSBhbGwgc3RhY2sgc2VyaWVzXG4gICAgdGhpcy5zdGFja0xheWVyICYmIHRoaXMuc3RhY2tMYXllci5yZW1vdmUoKVxuICAgIC8vIGRyYXcgd2l0aCBuZXcgc3RhY2tPcmRlck1lbWJlcnNcbiAgICB0aGlzLmRyYXcoKVxuICB9XG4gIFxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLnN0YWNrTGF5ZXIuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuICBcbiAgcmVtb3ZlICgpIHtcbiAgICAvLyAgdGhpcy5zdGFja0FyZWFQYXRoLnJlbW92ZSgpO1xuICAgIHRoaXMuc3RhY2tMYXllciAmJiB0aGlzLnN0YWNrTGF5ZXIucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMuZDNTdGFjayA9IG51bGxcbiAgICB0aGlzLmFyZWEgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IHtpc0FycmF5fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IExpbmUgZnJvbSAnQC9zZXJpZXMvTGluZSdcbmltcG9ydCBTdGFja0FyZWEgZnJvbSAnQC9zZXJpZXMvU3RhY2tBcmVhJ1xuaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXMgZXh0ZW5kcyBTZXJpZXMge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5wbG90U2VyaWVzID0gW11cbiAgICBjb25zdCBkYXRhID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhIC8vIEFjY2VwdCBlaXRoZXIgdGltZXNlcmllcyBvciBwaWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMucGxvdFNldFxuXG4gICAgLy8gQ3JlYXRlIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiBpbnB1dCBvcHRpb25zIGFuZCBlYWNoIHBsb3QgaW5mb1xuICAgIGlzQXJyYXkocGxvdEluZm8uc3RhY2spICYmIHBsb3RJbmZvLnN0YWNrLmZvckVhY2goKHBsb3REYXRhKSA9PiB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgU3RhY2tBcmVhKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMub3B0cy5jaGFydCxcbiAgICAgICAgY2xhc3NOYW1lOiBwbG90RGF0YS5jbGFzc05hbWUgfHwgcGxvdERhdGEubmFtZSxcbiAgICAgICAgcGxvdEF4aXM6IHBsb3REYXRhLnBsb3RBeGlzLFxuICAgICAgICB4QXhpc1RhcmdldDogdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMudGltZUluZm8uZGF0YUluZGV4LFxuICAgICAgICBzdGFja0RhdGE6IGRhdGEsXG4gICAgICAgIHN0YWNrT3JkZXJNZW1iZXJzOiBwbG90RGF0YS5zdGFja09yZGVyTWVtYmVyc1xuICAgICAgfSkpXG4gICAgfSlcblxuICAgIGlzQXJyYXkocGxvdEluZm8ubGluZSkgJiYgcGxvdEluZm8ubGluZS5mb3JFYWNoKChwbG90RGF0YSkgPT4ge1xuICAgICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IExpbmUoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHlBeGlzVGFyZ2V0OiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5kYXRhSW5kZXgsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIHZpc2libGU6IGVhY2hQbG90U2V0W3Bsb3REYXRhLm5hbWVdLnZpc2libGUsXG4gICAgICAgIGxpbmVEYXRhOiB7XG4gICAgICAgICAgbmFtZTogcGxvdERhdGEubmFtZSxcbiAgICAgICAgICBjb2xvcjogZWFjaFBsb3RTZXRbcGxvdERhdGEubmFtZV0uY29sb3IsXG4gICAgICAgICAgbGluZVdpZHRoOiBlYWNoUGxvdFNldFtwbG90RGF0YS5uYW1lXS5saW5lV2lkdGgsXG4gICAgICAgICAgdmFsdWVzOiBkYXRhXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cblxufSIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCB7Z2V0T2JqZWN0LCBpc0Z1bmN0aW9ufSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtiaXNlY3RvciwgZDNNb3VzZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IHtlYWNoLCBmaWx0ZXJ9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTZXJpZXNUb29sdGlwIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNyb3NzSGFpcnM6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICAvLyBQcm92aWRlIGJhc2ljIGZvcm1hdHRlciB0byBkaXNwbGF5IGhvdmVyIGRhdGFcbiAgICBpZiAoIWlzRnVuY3Rpb24odGhpcy5vcHRzLmZvcm1hdCkpIHtcbiAgICAgIHRoaXMub3B0cy5mb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYDxzcGFuPiBUb29sVGlwIFRleHQgOiA8L3NwYW4+PGJyLz48c3Bhbj4ke0pTT04uc3RyaW5naWZ5KGQpfTwvc3Bhbj5gXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy5jcm9zc0hhaXJzID0gZmFsc2VcbiAgICB0aGlzLiR0b29sVGlwRGl2ID0gJCgnPGRpdj48L2Rpdj4nKS5hZGRDbGFzcygndmMtdG9vbHRpcC1kaXNwbGF5JylcbiAgICB0aGlzLm9wdHMuY2hhcnQuJGNvbnRhaW5lclxuICAgICAgLmFwcGVuZCh0aGlzLiR0b29sVGlwRGl2KVxuXG5cbiAgICBpZiAodGhpcy5vcHRzLmNyb3NzSGFpcnMuZW5hYmxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNyb3NzSGFpcnMgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1saW5lJylcbiAgICAgIHRoaXMuY3Jvc3NIYWlycy5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5LC05OTkpJylcbiAgICAgICAgLmF0dHIoJ3gxJywgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5sZWZ0KVxuICAgICAgICAuYXR0cigneTEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCAtIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIpXG4gICAgICAgIC5hdHRyKCd4MicsIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdClcbiAgICAgICAgLmF0dHIoJ3kyJywgKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4udG9wKSlcblxuICAgIH1cblxuICAgIHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXIucmVnaXN0ZXIoKCkgPT4ge1xuICAgICAgLy8gUmVnaXN0ZXIgaG92ZXIgYW5kIGhpZGUvc2hvdyB0b29saXAgZXZlbnRzXG4gICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzLnNjYWxlJykgfHwgZmFsc2VcbiAgICAgIGNvbnN0IG1vdXNlSGFuZGxlciA9IHRoaXMub3B0cy5jaGFydC5tb3VzZUhhbmRsZXJcbiAgICAgIGNvbnN0IGRhdGVJbmRleCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnRpbWVJbmZvLmRhdGFJbmRleFxuICAgICAgY29uc3QgZGF0YVNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YVxuICAgICAgLy8gRmluZCBuZWFyZXN0IGV4aXN0aW5nIGRhdGUgYW1vbmcgYXJyYXkgb2Ygc29ydGVkIGRhdGVcbiAgICAgIGNvbnN0IGJpc2VjdERhdGUgPSBiaXNlY3RvcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFtkYXRlSW5kZXhdXG4gICAgICB9KS5sZWZ0XG5cbiAgICAgIGNvbnN0IG1vdXNlRXZ0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gT24gbW91c2Vtb3ZlIG9mIHggb3ZlcmxheSwgZmluZCB4LHkgdmFsdWVzIGFuZCB1cGRhdGUgdG9vbHRpcFxuICAgICAgICBjb25zdCB4TW91c2UgPSBkM01vdXNlKHRoaXMpWzBdXG4gICAgICAgIGNvbnN0IHlNb3VzZSA9IGQzTW91c2UodGhpcylbMV1cbiAgICAgICAgY29uc3QgeFZhbCA9IHhTY2FsZS5pbnZlcnQoeE1vdXNlKSAvLyBmaW5kIHhBeGlzIGRhdGUgZm9yIG1vdXNlIHBvc2l0aW9uXG5cbiAgICAgICAgLy8gRG8gYmluYXJ5IHNlYXJjaCBvZiBkYXRhIHNldCBmcm9tIDJuZCBkYXRhIHNldCB0byBlbmRcbiAgICAgICAgY29uc3QgZm91bmQgPSBiaXNlY3REYXRlKGRhdGFTZXQsIHhWYWwsIDEpXG5cbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgZEJlZm9yZSA9IGRhdGFTZXRbZm91bmQgLSAyXVxuXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRQcmV2ID0gZGF0YVNldFtmb3VuZCAtIDFdXG4gICAgICAgIC8vIGdldCBiZWZvcmUgZmluZCBkYXRhU2V0XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGRGb3VuZCA9IGRhdGFTZXRbZm91bmRdIHx8IGRQcmV2IC8vIGdldCBmaW5kIGRhdGFTZXRcblxuICAgICAgICBsZXQgdG9vbFRpcERhdGEgPSBkUHJldlxuICAgICAgICBpZiAoZGF0YVNldC5sZW5ndGggPiBzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkge1xuICAgICAgICAgIC8vIE1vcmUgdGhhbiBvbmUgdGljayByZXNpZGUgb24gZWFjaCBwaXhlbC4gSGVuY2UgZmluZCB0aWNrIGhhdmluZyBtYXggdmFsdWUgYW1vbmcgdGhlIGRhdGFzZXRcbiAgICAgICAgICBjb25zdCBkYXRhUGFyc2VMZW4gPSBNYXRoLmZsb29yKGRhdGFTZXQubGVuZ3RoIC8gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpICsgMVxuXG4gICAgICAgICAgY29uc3QgdmlzaWJsZURhdGFJbmRleCA9IHt9XG5cbiAgICAgICAgICBlYWNoKHNlbGYub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXQsIGZ1bmN0aW9uIChwbG90KSB7XG4gICAgICAgICAgICBpZiAocGxvdC52aXNpYmxlKSB7XG4gICAgICAgICAgICAgIHZpc2libGVEYXRhSW5kZXhbcGxvdC5kYXRhSW5kZXhdID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBtdWx0aUFyck1hcCA9IHt9XG4gICAgICAgICAgLy8gRG8gU2NhbiBmcm9tIHJhbmdlIC1kYXRhUGFyc2VMZW4gdG8gK2RhdGFQYXJzZUxlbiBiZXR3ZWVuIGZvdW5kIGRhdGEgaW5kZXhcbiAgICAgICAgICBmb3IgKGxldCBpbmQgPSAoZm91bmQgLSBkYXRhUGFyc2VMZW4pOyBpbmQgPCAoZm91bmQgKyBkYXRhUGFyc2VMZW4pOyBpbmQrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFTZXRbaW5kXSkge1xuICAgICAgICAgICAgICBjb25zdCBkU2V0ID0gZmlsdGVyKGRhdGFTZXRbaW5kXSwgZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlzaWJsZURhdGFJbmRleFtpbmRleF1cbiAgICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBiIC0gYVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBpZiAoZFNldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtdWx0aUFyck1hcFtpbmRdID0gZFNldFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBtYXhJbmRcbiAgICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgICAgICAgZWFjaChtdWx0aUFyck1hcCwgZnVuY3Rpb24gKGFyclNldCwga2V5KSB7XG4gICAgICAgICAgICBpZiAobWF4VmFsIDwgYXJyU2V0WzBdKSB7XG4gICAgICAgICAgICAgIG1heFZhbCA9IGFyclNldFswXVxuICAgICAgICAgICAgICBtYXhJbmQgPSBrZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSBkYXRhU2V0W21heEluZF0gfHwgZEZvdW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRmluZCBuZWFyZXN0IHJlYWNoaW5nIGRhdGUgYW1vbmcgYWJvdmUgdHdvIGRhdGVzXG4gICAgICAgICAgdG9vbFRpcERhdGEgPSAoeFZhbCAtIGRQcmV2W2RhdGVJbmRleF0pID4gKGRGb3VuZFtkYXRlSW5kZXhdIC0geFZhbCkgPyBkRm91bmQgOiBkUHJldlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGVJbnRSYW5nZSA9IGRGb3VuZFtkYXRlSW5kZXhdIC0gZFByZXZbZGF0ZUluZGV4XVxuXG4gICAgICAgIGlmICghZGF0ZUludFJhbmdlICYmIGRCZWZvcmUpIHtcbiAgICAgICAgICBkYXRlSW50UmFuZ2UgPSBkUHJldltkYXRlSW5kZXhdIC0gZEJlZm9yZVtkYXRlSW5kZXhdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZUludFJhbmdlIDwgTWF0aC5hYnMoZEZvdW5kW2RhdGVJbmRleF0gLSB4VmFsKSkge1xuICAgICAgICAgIC8vIElmIGZvdW5kIGlzIG91dHNpZGUgZGF0YSBpbnRlcnZhbCByYW5nZSwgVGhlbiBkYXRhIGRvZXNudCBleGlzdCBmb3IgdGhhdCB0aWNrLlxuICAgICAgICAgIHRvb2xUaXBEYXRhID0gW11cbiAgICAgICAgICB0b29sVGlwRGF0YVtkYXRlSW5kZXhdID0geFZhbFxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5ob3Zlcih4TW91c2UsIHlNb3VzZSwgdG9vbFRpcERhdGEpXG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE5hbWUgPSAnbW91c2Vtb3ZlJ1xuICAgICAgaWYgKHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0LmlzVG91Y2hTY3JlZW4pIHtcbiAgICAgICAgZXZlbnROYW1lID0gJ2NsaWNrJ1xuICAgICAgfVxuICAgICAgbW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLm9uKGV2ZW50TmFtZSwgbW91c2VFdnQpXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5oaWRlKClcbiAgICAgICAgfSlcblxuICAgICAgJChtb3VzZUhhbmRsZXIubW91c2VCcnVzaC5ub2RlKCkpLmZpbmQoJ3JlY3Qub3ZlcmxheScpXG4gICAgICAgIC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaGlkZSgpXG4gICAgICAgIH0pXG5cbiAgICB9KVxuICB9XG5cbiAgaG92ZXIgKHhQb3MsIHlQb3MsIGRpc3BsYXlEYXRhKSB7XG4gICAgLy8gVXBkYXRlIGRpc3BsYXlQYW5lbCBhbmQgbGluZSBiYXNlZCBvbiB4IHBvc2l0aW9uXG4gICAgdGhpcy5jcm9zc0hhaXJzICYmIHRoaXMuY3Jvc3NIYWlycy5zZWxlY3QoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt4UG9zfSwwKWApXG4gICAgICAuYXR0cigneDEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneTEnLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnRvcCAtIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIpXG4gICAgICAuYXR0cigneDInLCB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpXG4gICAgICAuYXR0cigneTInLCAodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0ICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3ApKVxuICAgIHRoaXMuY3Jvc3NIYWlycy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCBmYWxzZSlcblxuICAgIGxldCBwZXJjZW50YWdlRGlmZiA9IHhQb3MgLyB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aFxuXG4gICAgaWYgKHBlcmNlbnRhZ2VEaWZmIDwgMC4zKSB7XG4gICAgICBwZXJjZW50YWdlRGlmZiA9IDAuMlxuICAgIH1cbiAgICBpZiAocGVyY2VudGFnZURpZmYgPiAwLjcpIHtcbiAgICAgIHBlcmNlbnRhZ2VEaWZmID0gMC45NVxuICAgIH1cbiAgICB0aGlzLiR0b29sVGlwRGl2XG4gICAgICAuY3NzKHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCh0aGlzLm9wdHMuY2hhcnQuJGNvbnRhaW5lci5wb3NpdGlvbigpIC8vIGxlZnQgcG9zaXRpb24gb2YgY2hhcnQgb24gc2NyZWVuXG4gICAgICAgICAgLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB4UG9zIC0gdGhpcy4kdG9vbFRpcERpdi53aWR0aCgpICogcGVyY2VudGFnZURpZmYpICsgJ3B4JyxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyLnBvc2l0aW9uKCkgLy8gdG9wIHBvc2l0aW9uIG9mIGNoYXJ0IG9uIHNjcmVlblxuICAgICAgICAgIC50b3AgLSB0aGlzLiR0b29sVGlwRGl2LmhlaWdodCgpIC0gNSArIGNvbnN0YW50cy5UT09MVElQX1RPUF9CVUZGRVIgKiAyKSArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICB9KVxuICAgICAgLmh0bWwodGhpcy5vcHRzLmZvcm1hdC5jYWxsKHRoaXMub3B0cy5jaGFydCwgZGlzcGxheURhdGEpKSAvLyBVc2VkIGZvcm1hdC5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG5cbiAgICBpZiAoc2hvd0ZsYWcpIHtcbiAgICAgIHRoaXMuJHRvb2xUaXBEaXYgJiYgdGhpcy4kdG9vbFRpcERpdi5zaG93KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kdG9vbFRpcERpdiAmJiB0aGlzLiR0b29sVGlwRGl2LmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuY3Jvc3NIYWlycyAmJiB0aGlzLmNyb3NzSGFpcnMuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLmNyb3NzSGFpcnMgJiYgdGhpcy5jcm9zc0hhaXJzLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2dldE9iamVjdCwgaXNGdW5jdGlvbiwgZW1wdHlGbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7YnJ1c2hYLCBicnVzaFksIGQzRXZlbnR9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20gZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgb25ab29tOiBlbXB0eUZuLFxuICAgICAgb25ZMVpvb206IGVtcHR5Rm4sXG4gICAgICBvblkyWm9vbTogZW1wdHlGblxuICAgIH0sIG9wdHMpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHhTY2FsZSA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlTGVmdCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC55QXhpcy5zY2FsZScpIHx8IGZhbHNlXG4gICAgY29uc3QgeVNjYWxlUmlnaHQgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMyLnNjYWxlJykgfHwgZmFsc2VcbiAgICBsZXQgJGJydXNoT3ZlcmxheSA9IG51bGxcbiAgICBpZiAoeFNjYWxlKSB7XG4gICAgICAvLyBDcmVhdGUgeCBheGlzIGJydXNoIGZvciBab29tIG9wZXJhdGlvblxuICAgICAgdGhpcy5icnVzaFggPSBicnVzaFgoKVxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgW3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHRdXG4gICAgICAgIF0pXG5cbiAgICAgIC8vIFVzZSB0aGUgc2FtZSBtb3VzZUJydXNoIGZvciBib3RoIHhCcnVzaCBhbmQgdG9vbHRpcFxuICAgICAgdGhpcy5icnVzaFhEaXYgPSB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLm1vdXNlQnJ1c2hcbiAgICAgICAgLmNhbGwodGhpcy5icnVzaFgpXG5cbiAgICAgICRicnVzaE92ZXJsYXkgPSAkKHRoaXMuYnJ1c2hYRGl2Lm5vZGUoKSkuZmluZCgncmVjdC5vdmVybGF5JylcblxuICAgICAgLy8gQ2FsbCB0aGlzIGV2ZW50IHdoZW4geEF4aXMgYnJ1c2ggaXMgZW5kZWRcbiAgICAgIHRoaXMuYnJ1c2hYLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZDNFdmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHhTY2FsZS5pbnZlcnQpXG4gICAgICAgIC8vIGZpbmQgeDEgYW5kIHgyXG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IGQxID0gZDAgJiYgZDAubWFwKE1hdGgucm91bmQpIC8vIHJvdW5kIGJvdGggdmFsdWVzXG5cbiAgICAgICAgLy8gY2xlYXIgQnJ1c2hcbiAgICAgICAgc2VsZi5icnVzaFhEaXYuY2FsbChzZWxmLmJydXNoWC5tb3ZlLCBudWxsKVxuICAgICAgICAkYnJ1c2hPdmVybGF5XG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICBjdXJzb3I6ICdhdXRvJ1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgLy8gZDEgPSBkMVxuICAgICAgICAvLyAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAvLyAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnhBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWCBheGlzIHVwb24gaG9yaXpvbnRhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cblxuICAgICAgICAvLyBVc2VkIG9uWm9vbS5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuY3Rpb24gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gICAgICAgIHNlbGYub3B0cyAmJiBzZWxmLm9wdHMub25ab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBkMVswXSwgZDFbMV0pXG5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHkgYXhpcyBicnVzaCBmb3IgdmVydGljYWwgbGVmdCBzY2FsZSBvcGVyYXRpb25cbiAgICBpZiAoeVNjYWxlTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0ID0gYnJ1c2hZKClcblxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtYnJ1c2hZLWxlZnQnKVxuXG4gICAgICAvLyBDYWxsIHRoaXMgZXZlbnQgd2hlbiB5QXhpcyBicnVzaCBpcyBlbmRlZFxuICAgICAgdGhpcy5icnVzaFlMZWZ0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZDNFdmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmJydXNoWUxlZnREaXYuY2FsbChzZWxmLmJydXNoWUxlZnQubW92ZSwgbnVsbClcblxuICAgICAgICBjb25zdCBkMCA9IGQzRXZlbnQuc2VsZWN0aW9uLm1hcCh5U2NhbGVMZWZ0LmludmVydClcblxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkMSA9IGQwICYmIGQwLm1hcChNYXRoLnJvdW5kKVxuICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzLm1vZGlmeUF4aXNQcm9wcyh7XG4gICAgICAgICAgZG9tYWluU2NhbGU6IGQxIC8vIENoYW5nZSBkb21haW4gb2YgWSBheGlzIHVwb24gdmVydGljYWwgem9vbVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYub3B0cy5jaGFydC5zZXJpZXMudXBkYXRlKCkgLy8gVXBkYXRlIGFsbCBwbG90U2VyaWVzIGZvciBuZXcgWUF4aXMgZG9tYWluIGNoYW5nZVxuXG4gICAgICAgIC8vIFVzZWQgb25ab29tLmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW5jdGlvbiBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgICAgICAgaXNGdW5jdGlvbihzZWxmLm9wdHMub25ZMVpvb20pICYmIHNlbGYub3B0cy5vblkxWm9vbS5jYWxsKHNlbGYub3B0cy5jaGFydCwgZDFbMF0sIGQxWzFdKVxuXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB5IGF4aXMgYnJ1c2ggZm9yIHZlcnRpY2FsIHJpZ2h0IHNjYWxlIG9wZXJhdGlvblxuICAgIGlmICh5U2NhbGVSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodCA9IGJydXNoWSgpXG5cbiAgICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1icnVzaFktcmlnaHQnKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZDNFdmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmJydXNoWVJpZ2h0RGl2LmNhbGwoc2VsZi5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuXG4gICAgICAgIGNvbnN0IGQwID0gZDNFdmVudC5zZWxlY3Rpb24ubWFwKHlTY2FsZVJpZ2h0LmludmVydClcblxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBkMSA9IGQwICYmIGQwLm1hcChNYXRoLnJvdW5kKVxuICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEgLSBiKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnlBeGlzMi5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiBkMSAvLyBDaGFuZ2UgZG9tYWluIG9mIFkyIGF4aXMgdXBvbiB2ZXJ0aWNhbCB6b29tXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy51cGRhdGUoKSAvLyBVcGRhdGUgYWxsIHBsb3RTZXJpZXMgZm9yIG5ldyBZQXhpcyBkb21haW4gY2hhbmdlXG5cbiAgICAgICAgLy8gVXNlZCBvblpvb20uY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1bmN0aW9uIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vblkyWm9vbSkgJiYgc2VsZi5vcHRzLm9uWTJab29tLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBkMVswXSwgZDFbMV0pXG5cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgJGJydXNoT3ZlcmxheSAmJiB0aGlzLm9wdHMuY2hhcnQubW91c2VIYW5kbGVyLnJlZ2lzdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gbW91c2UgaXMgY2xpY2tlZCBvciBkb3duLCBlbmFibGUgem9vbSBicnVzaCBhbmQgaXRzIG1vdXNlIGN1cnNvclxuICAgICAgJGJydXNoT3ZlcmxheVxuICAgICAgICAub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgIGN1cnNvcjogJ2F1dG8nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLmJydXNoWCkge1xuICAgICAgdGhpcy5icnVzaFguZXh0ZW50KFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgsIHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodF1cbiAgICAgIF0pXG5cbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJ1c2hZTGVmdCkge1xuICAgICAgdGhpcy5icnVzaFlMZWZ0XG4gICAgICAgIC5leHRlbnQoW1xuICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWUxlZnREaXZcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZTGVmdClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icnVzaFlSaWdodCkge1xuICAgICAgdGhpcy5icnVzaFlSaWdodFxuICAgICAgICAuZXh0ZW50KFtcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpLCAwXSxcbiAgICAgICAgICBbKHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi5yaWdodCAtIGNvbnN0YW50cy5CUlVTSFlfQlVGRkVSKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0XVxuICAgICAgICBdKVxuXG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2XG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAoY29uc3RhbnRzLkJSVVNIWV9CVUZGRVIpICsgJywnICsgdGhpcy5vcHRzLmNoYXJ0Lm1hcmdpbi50b3AgKyAnKScpXG4gICAgICAgIC5jYWxsKHRoaXMuYnJ1c2hZUmlnaHQpXG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5icnVzaFhEaXYgJiYgdGhpcy5icnVzaFhEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZTGVmdERpdiAmJiB0aGlzLmJydXNoWUxlZnREaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMuYnJ1c2hZUmlnaHREaXYgJiYgdGhpcy5icnVzaFlSaWdodERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICBpZiAodGhpcy5icnVzaFhEaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hYRGl2LmNhbGwodGhpcy5icnVzaFgubW92ZSwgbnVsbClcbiAgICAgIHRoaXMuYnJ1c2hYRGl2ICYmIHRoaXMuYnJ1c2hYRGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWUxlZnREaXYpIHtcbiAgICAgIHRoaXMuYnJ1c2hZTGVmdERpdi5jYWxsKHRoaXMuYnJ1c2hZTGVmdC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlMZWZ0RGl2LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmJydXNoWVJpZ2h0RGl2KSB7XG4gICAgICB0aGlzLmJydXNoWVJpZ2h0RGl2LmNhbGwodGhpcy5icnVzaFlSaWdodC5tb3ZlLCBudWxsKVxuICAgICAgdGhpcy5icnVzaFlSaWdodERpdi5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9