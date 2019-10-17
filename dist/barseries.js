(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["barseries"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9CYXJTZXJpZXNDaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2RhdGEtcGFyc2VyL0Jhc2ljQlNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvQmFyLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL0JhclNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvQmFzaWNUb29sdGlwLmpzIl0sIm5hbWVzIjpbIkJhclNlcmllc0NoYXJ0IiwiY29udGFpbmVyIiwib3B0cyIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNCU1BhcnNlciIsIkNoYXJ0QXhpc1BhcnNlciIsIkVycm9yIiwiYWRkRGVmYXVsdEJTT3B0aW9ucyIsIm9wdGlvbnMiLCJpc09iamVjdCIsImRhdGFFeGVjdXRvciIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsImF4aXNPcHRpb25zIiwieVJhbmdlIiwieVJhbmdlMiIsInRpbWVJbmZvIiwiZ2V0T2JqZWN0IiwieUF4aXMiLCJBeGlzIiwiY2hhcnQiLCJwb3NpdGlvbiIsIm9yaWVudCIsInJhbmdlU2NhbGUiLCJjaGFydEhlaWdodCIsImRvbWFpblNjYWxlIiwiY2hhcnRDb21wb25lbnRzQXJyIiwicHVzaCIsInlBeGlzMiIsInRpbWVSYW5nZSIsInhBeGlzIiwiY2hhcnRXaWR0aCIsInRvb2x0aXBPcHRzIiwidmlzaWJsZSIsInRvb2x0aXAiLCJUb29sdGlwIiwic2VyaWVzIiwiQmFyU2VyaWVzIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsImNhbGwiLCJyZVNjYWxlWUF4aXMiLCJjaGFydFJlc3BvbnNpdmUiLCJtb3VzZUhhbmRsZXIiLCJ0cmlnZ2VyTW91c2VBY3Rpb24iLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJvbkNvbXBsZXRlIiwiYXhpc1NwZWNpZmllciIsInRpY2tWYWxBcnIiLCJkaWZmVmFsIiwicmFuZ2VWYWwiLCJ5TWF4IiwiYXBwbHlZMUF4aXMiLCJhcHBseVkyQXhpcyIsImNvbnN0YW50cyIsIkRJUl9MRUZUIiwiRElSX1JJR0hUIiwidGlja1ZhbHVlcyIsImxlbmd0aCIsIm1vZGlmeUF4aXNQcm9wcyIsInJlU2NhbGVBeGlzIiwicmVxdWlyZWRXaWR0aCIsImNsYXNzIiwibWF4VGV4dCIsImR1bW15RyIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJheGlzIiwidGlja3NBcnIiLCIkY29udGFpbmVyIiwiZmluZCIsImVhY2giLCJpIiwidGlja0h0bWwiLCIkIiwidGV4dCIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsIlN0cmluZyIsImQiLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJyZW1vdmUiLCJtYXJnaW4iLCJNYXRoIiwicm91bmQiLCJZX0FYSVNfU1BBQ0UiLCJjaGFydEZ1bGxTcGFjZSIsIndpZHRoIiwibGVmdCIsInJpZ2h0IiwidXBkYXRlIiwiQ2hhcnQiLCJkYXRhT3B0aW9ucyIsImNvbnN0cnVjdENoYXJ0RGF0YSIsImNvbnN0cnVjdFhBeGlzSW5mbyIsImNvbnN0cnVjdFBsb3RJbmZvIiwiY29uc3RydWN0WUF4aXNJbmZvIiwiZXJyIiwib25FcnJvciIsInJlc0pzb24iLCJzZXJpZXNEYXRhIiwiYmFyc2VyaWVzIiwiY29sdW1ucyIsInZhbHVlcyIsInZhbGlkSlNPTlR5cGUiLCJjaGFydERhdGEiLCJkYXRhSW5kZXgiLCJtYXAiLCJlYWNoUGxvdFNldCIsInBsb3RTZXQiLCJwbG90SW5mbyIsImtleSIsIm1pbiIsIm1heCIsInZhbERhdGEiLCJmaW5kRWFjaFBsb3RSYW5nZSIsIm1pblZhbCIsIm1heFZhbCIsImVhY2hQbG90IiwiSW5maW5pdHkiLCJmb3JFYWNoIiwiYWxsTWF4IiwiYWxsTWF4MiIsInBsb3REYXRhIiwibWVtYmVyQXJyIiwiYmFyT3JkZXJNZW1iZXJzIiwibWVtYmVyIiwibmFtZSIsInBsb3RBeGlzIiwiYWxsTWluIiwiYWxsTWluMiIsInlNaW4iLCJyZWR1Y2UiLCJhIiwiYiIsImluZCIsImRhdGFDb2xvckFyciIsImNvbG9yIiwieUxlZnQiLCJ5UmlnaHQiLCJyZWZpbmVOYW1lIiwicmVmaW5lU3RyaW5nIiwidmFsdWVSYW5nZSIsInVuaXQiLCJpc0Jvb2xlYW4iLCJCYXIiLCJjbGFzc05hbWUiLCJESVJfQk9UVE9NIiwiYmFyRGF0YSIsInhBeGlzVGFyZ2V0IiwiYmFyVHlwZSIsIkdST1VQRURfQkFSIiwiZXZlbnRzIiwic2VsZiIsImJhck9yZGVySW5kZXgiLCJmaWx0ZXIiLCJlbGUiLCJzZXJpZXNMZW5ndGgiLCJ4IiwiaW5kZXhPZiIsIkRJUl9UT1AiLCJ5IiwieFNjYWxlIiwieVNjYWxlIiwic3JEYXRhIiwic2VyaWVzQXJyIiwieEF4aXNBcnIiLCJpbmRleFZhbCIsImJhclN0YWNrIiwic3RhY2siLCJrZXlzIiwicmFuZ2UiLCJ0cmFuc3Bvc2UiLCJ5TWF4R3JvdXBlZCIsInlNYXhTdGFja2VkIiwibmFtZUluZGV4TWFwIiwiYmFyVmlzaWJsZU9yZGVyIiwicGxvdCIsInB0IiwiY2xpcEVsZW1lbnQiLCJiYXJTZXJpZXMiLCJncmFwaFpvbmUiLCJiYXJzIiwic3JOYW1lIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsImNvbG9yQXJyIiwiYmFuZHdpZHRoIiwib24iLCJob3ZlciIsImQzRXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwidmFsIiwiaGlkZSIsImZuIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJTVEFDS0VEX0JBUiIsInhWYWwiLCJzaG93RmxhZyIsImNsYXNzZWQiLCJDaGFydENvbXBvbmVudCIsInBsb3RTZXJpZXMiLCJpc0FycmF5IiwiYmFyIiwiU2VyaWVzIiwiQmFzaWNUb29sdGlwIiwiaXNGdW5jdGlvbiIsImZvcm1hdCIsIiR0b29sVGlwRGl2IiwiYWRkQ2xhc3MiLCJkaXNwbGF5RGF0YSIsImV4Y2x1ZGVUb29sVGlwRGl2Iiwicm9vdFBvcyIsIm9mZnNldCIsInhwb3MiLCJ5cG9zIiwidG9wIiwiaGVpZ2h0IiwiY3NzIiwiZGlzcGxheSIsImh0bWwiLCJzaG93Il0sIm1hcHBp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MkMsQ0FrQnVCO0FBQ25FOzs7NkJBRVM0SCxRLEVBQVU7QUFDbEJBLGlCQUFXLENBQUMsQ0FBQ0EsUUFBYjs7QUFFQSxVQUFJQSxRQUFKLEVBQWM7QUFDWixhQUFLVSxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBaUJhLElBQWpCLEVBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2IsV0FBTCxJQUFvQixLQUFLQSxXQUFMLENBQWlCaEIsSUFBakIsRUFBcEI7QUFDRDtBQUNGOzs7NkJBRVM7QUFDUixXQUFLZ0IsV0FBTCxJQUFvQixLQUFLQSxXQUFMLENBQWlCakksTUFBakIsRUFBcEI7QUFDQSxXQUFLckYsSUFBTCxHQUFZLElBQVo7QUFDRDs7OztFQXZEdUM4TSw4RDs7QUFBckJLLDJFIiwiZmlsZSI6ImJhcnNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0T2JqZWN0LCBpc09iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydCBmcm9tICdAL2NoYXJ0cy9DaGFydCdcbmltcG9ydCBBeGlzIGZyb20gJ0AvYXhpcydcbmltcG9ydCB7YWRkRGVmYXVsdEJTT3B0aW9uc30gZnJvbSAnQC9oZWxwZXJzJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCBDaGFydEF4aXNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydEF4aXNQYXJzZXInXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAL3Rvb2x0aXAvQmFzaWNUb29sdGlwJ1xuaW1wb3J0IEJhc2ljQlNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9CYXNpY0JTUGFyc2VyJ1xuaW1wb3J0IEJhclNlcmllcyBmcm9tICdAL3Nlcmllcy9CYXJTZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhclNlcmllc0NoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBvcHRzKSB7XG4gICAgb3B0cy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGFQYXJzZXIgaXMgbm90IHBhc3NlZFxuICAgIGlmICghb3B0cy5kYXRhUGFyc2VyKSB7XG4gICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNCU1BhcnNlcihvcHRzKVxuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgZGF0YVBhcnNlciBleGlzdHMgYW5kIGl0cyBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlclxuICAgIGlmICghKG9wdHMuZGF0YVBhcnNlciBpbnN0YW5jZW9mIENoYXJ0QXhpc1BhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGFQYXJzZXIgaW4gb3B0aW9ucyBkb3Nlbid0IGhhdmUgaW1wbGVtZW50YXRpb24gb2YgQ2hhcnRBeGlzUGFyc2VyXCIpXG4gICAgfVxuXG4gICAgLy8gQ2FsbCBQYXJlbnQgSW1wbFxuICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0cylcblxuICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgdG8gY2hhcnRcbiAgICBhZGREZWZhdWx0QlNPcHRpb25zKHRoaXMub3B0aW9ucylcblxuICAgIC8vIFJ1biB0aGUgZGF0YVBhcnNlciBmb3IgZ2l2ZW4gSlNPTiBkYXRhXG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuZGF0YVBhcnNlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRhdGFQYXJzZXIuZGF0YUV4ZWN1dG9yKCkpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlsaXplIGFsbCBjaGFydCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGltZVNlcmllc0NoYXJ0IG9uIGV4YWN0IG9yZGVyIGJhc2VkIG9uIGVhY2ggZGVwZW5kZW5jaWVzXG4gICAgdGhpcy5jaGFydEluaXRpbGl6ZSgpXG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5kcmF3KCkpXG4gIH1cblxuICBjaGFydEluaXRpbGl6ZSAoKSB7XG4gICAgbGV0IGF4aXNPcHRpb25zXG4gICAgY29uc3QgeVJhbmdlID0gdGhpcy5vcHRpb25zLnlSYW5nZVxuICAgIGNvbnN0IHlSYW5nZTIgPSB0aGlzLm9wdGlvbnMueVJhbmdlMlxuICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG5cbiAgICBpZiAoeVJhbmdlKSB7XG4gICAgICBheGlzT3B0aW9ucyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy55QXhpcy5sZWZ0JylcbiAgICAgIHRoaXMueUF4aXMgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgcmFuZ2VTY2FsZTogW3RoaXMuY2hhcnRIZWlnaHQsIDBdLFxuICAgICAgICBkb21haW5TY2FsZTogeVJhbmdlLFxuICAgICAgICAuLi5heGlzT3B0aW9uc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy55QXhpcylcbiAgICB9XG5cbiAgICBpZiAoeVJhbmdlMikge1xuICAgICAgYXhpc09wdGlvbnMgPSBnZXRPYmplY3QodGhpcywgJ29wdGlvbnMueUF4aXMucmlnaHQnKVxuICAgICAgdGhpcy55QXhpczIgPSBuZXcgQXhpcyh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICBwb3NpdGlvbjogJ3knLFxuICAgICAgICBvcmllbnQ6ICdyaWdodCcsXG4gICAgICAgIHJhbmdlU2NhbGU6IFt0aGlzLmNoYXJ0SGVpZ2h0LCAwXSxcbiAgICAgICAgZG9tYWluU2NhbGU6IHlSYW5nZTIsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBmb3IgZHJhdywgdXBkYXRlLCBzaG93SGlkZSBhbmQgcmVtb3ZlIChjaGFydCBBUEkpXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMueUF4aXMyKVxuICAgIH1cblxuICAgIGlmICh0aW1lSW5mby50aW1lUmFuZ2UpIHtcbiAgICAgIGF4aXNPcHRpb25zID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnhBeGlzLmJvdHRvbScpXG4gICAgICB0aGlzLnhBeGlzID0gbmV3IEF4aXMoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgcG9zaXRpb246ICd4JyxcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgcmFuZ2VTY2FsZTogWzAsIHRoaXMuY2hhcnRXaWR0aF0sXG4gICAgICAgIGRvbWFpblNjYWxlOiB0aW1lSW5mby50aW1lUmFuZ2UsXG4gICAgICAgIC4uLmF4aXNPcHRpb25zXG4gICAgICB9KVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnhBeGlzKVxuICAgIH1cblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICB0aGlzLnNlcmllcyA9IG5ldyBCYXJTZXJpZXMoe1xuICAgICAgICBjaGFydDogdGhpc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnNlcmllcylcbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zb2xlLmxvZygnQmFyU2VyaWVzQ2hhcnQgZHJhdycsIHRoaXMpXG4gICAgc3VwZXIuZHJhdygpXG4gICAgdGhpcy5vcHRpb25zLmFmdGVyRHJhdy5jYWxsKHRoaXMpXG5cbiAgICAvLyBBZGQgRXh0cmEgQnVmZmVyIGZvciBtYXggWSB2YWx1ZSBhbmQgcHJvdmlkZSBzcGFjZSB0byBkaXNwbGF5IGFsbCB0aWNrcyBpbiBncmFwaFpvbmVcbiAgICB0aGlzLnJlU2NhbGVZQXhpcygpXG5cbiAgICB0aGlzLmNoYXJ0UmVzcG9uc2l2ZSgpXG5cbiAgICB0aGlzLm1vdXNlSGFuZGxlciAmJiB0aGlzLm1vdXNlSGFuZGxlci50cmlnZ2VyTW91c2VBY3Rpb24oKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbiAgLy8gRmluZCBuZXh0IHBvc3NpYmxlIHRpY2sgdG8gZGlzcGxheSBtYXggWSB2YWx1ZSBhbmQgYWRqdXN0IG1hcmdpbiB0byBzaG93IGFsbCB0aWNrIGxhYmVscyBjb21wbGV0ZWx5XG4gIHJlU2NhbGVZQXhpcyAoYXhpc1NwZWNpZmllcikge1xuXG4gICAgbGV0IHRpY2tWYWxBcnJcbiAgICBsZXQgZGlmZlZhbFxuICAgIGxldCByYW5nZVZhbFxuICAgIGxldCB5TWF4XG4gICAgbGV0IGFwcGx5WTFBeGlzID0gdHJ1ZVxuICAgIGxldCBhcHBseVkyQXhpcyA9IHRydWVcblxuICAgIGlmIChheGlzU3BlY2lmaWVyID09PSBjb25zdGFudHMuRElSX0xFRlQpIHtcbiAgICAgIGFwcGx5WTJBeGlzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoYXhpc1NwZWNpZmllciA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgYXBwbHlZMUF4aXMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIE1heCB2YWx1ZSBpcyBwcm92aWRlZCBpbiBvcHRpb25zLCBEb250IGNvbXB1dGUgbmV4dCBwb3NzaWJsZSB0aWNrLlxuICAgIHlNYXggPSBnZXRPYmplY3QodGhpcy5vcHRpb25zLCAneUF4aXMubGVmdC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlICYmIGFwcGx5WTFBeGlzICYmICFOdW1iZXIuaXNGaW5pdGUoeU1heCkpIHtcbiAgICAgIHRpY2tWYWxBcnIgPSB0aGlzLnlBeGlzLnRpY2tWYWx1ZXNcbiAgICAgIC8vIElmIHRpY2tWYWxBcnIgY29udGFpbnMgdmFsdWVzXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpbmQgZGlmZmVyZW5jZSBvZiBsYXN0IGFuZCBsYXN0IHByZXZpb3VzIHRpY2sgdmFsdWVzIG9mIFkgQXhpc1xuICAgICAgICBkaWZmVmFsID0gdGlja1ZhbEFyclswXSAtIHRpY2tWYWxBcnJbMV1cbiAgICAgICAgLy8gTmV3IHJhbmdlIGlzIGluY3JlYXNlZCBieSBhYm92ZSBkaWZmZXJlbmNlXG4gICAgICAgIHJhbmdlVmFsID0gdGlja1ZhbEFyclswXSArIGRpZmZWYWxcblxuICAgICAgICAvLyBNb2RpZnkgbmV3IG1heCByYW5nZSBmb3IgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMub3B0aW9ucy55UmFuZ2VbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpcy5tb2RpZnlBeGlzUHJvcHMoe1xuICAgICAgICAgIGRvbWFpblNjYWxlOiB0aGlzLm9wdGlvbnMueVJhbmdlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgeU1heCA9IGdldE9iamVjdCh0aGlzLm9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgIGlmICh0aGlzLm9wdGlvbnMueVJhbmdlMiAmJiBhcHBseVkyQXhpcyAmJiAhTnVtYmVyLmlzRmluaXRlKHlNYXgpKSB7XG4gICAgICB0aWNrVmFsQXJyID0gdGhpcy55QXhpczIudGlja1ZhbHVlc1xuXG4gICAgICBpZiAodGlja1ZhbEFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRpZmZWYWwgPSB0aWNrVmFsQXJyWzBdIC0gdGlja1ZhbEFyclsxXVxuICAgICAgICByYW5nZVZhbCA9IHRpY2tWYWxBcnJbMF0gKyBkaWZmVmFsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnlSYW5nZTJbMV0gPSByYW5nZVZhbFxuXG4gICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgdGhpcy55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICBkb21haW5TY2FsZTogdGhpcy5vcHRpb25zLnlSYW5nZTJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGp1c3RzIFkgYXhpcyB3aWR0aCBiYXNlZCBvbiBtYXggdGV4dCBsZW5ndGggZGlzcGxheWVkXG4gICAgY29uc3QgcmVTY2FsZUF4aXMgPSB7fVxuICAgIGxldCByZXF1aXJlZFdpZHRoID0gMFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy55UmFuZ2UpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfTEVGVF0gPSB7fVxuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5jbGFzcyA9ICcudmMtYXhpcy1sZWZ0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9MRUZUXS5tYXhUZXh0ID0gJydcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnlSYW5nZTIpIHtcbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdID0ge31cbiAgICAgIHJlU2NhbGVBeGlzW2NvbnN0YW50cy5ESVJfUklHSFRdLmNsYXNzID0gJy52Yy1heGlzLXJpZ2h0J1xuICAgICAgcmVTY2FsZUF4aXNbY29uc3RhbnRzLkRJUl9SSUdIVF0ubWF4VGV4dCA9ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBkdW1teSBzdmcgdG8gYWRkIE1heCBsZW5ndGggdGljayB2YWx1ZXMgYW5kIGNoZWNrIGl0cyByZXF1aXJlZCB3aWR0aCBpbiBjaGFydFxuICAgIGNvbnN0IGR1bW15RyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtYXhpcycpXG5cbiAgICBmb3IgKGNvbnN0IGF4aXMgaW4gcmVTY2FsZUF4aXMpIHtcbiAgICAgIGNvbnN0IHRpY2tzQXJyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ3N2ZyAnICsgcmVTY2FsZUF4aXNbYXhpc10uY2xhc3MpLmZpbmQoJ3RleHQnKVxuICAgICAgdGlja3NBcnIuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCB0aWNrSHRtbCA9ICQodGlja3NBcnJbaV0pXG4gICAgICAgICAgLnRleHQoKSB8fCAnJ1xuICAgICAgICBpZiAodGlja0h0bWwubGVuZ3RoID4gcmVTY2FsZUF4aXNbYXhpc10ubWF4VGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICByZVNjYWxlQXhpc1theGlzXS5tYXhUZXh0ID0gdGlja0h0bWxcbiAgICAgICAgfVxuICAgICAgfSlcblxuXG4gICAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgICAgLmRhdGEoW3JlU2NhbGVBeGlzW2F4aXNdLm1heFRleHRdKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLnRleHQoU3RyaW5nKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIC8vIENvbXB1dGUgcmVxdWlyZWRXaWR0aCBmb3IgdGhlIE1heCB0ZXh0XG4gICAgICAgICAgcmVxdWlyZWRXaWR0aCA9IHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKClcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpIC8vIHJlbW92ZSBpdCBqdXN0IGFmdGVyIGRpc3BsYXlpbmdcbiAgICAgICAgfSlcblxuICAgICAgLy8gVXBkYXRlIHJlc3BlY3RpdmUgbWFyZ2luIHRvIGZpdCBpbiB0aWNrcyB0ZXh0XG4gICAgICB0aGlzLm1hcmdpbltheGlzXSA9IE1hdGgucm91bmQocmVxdWlyZWRXaWR0aCkgKyBjb25zdGFudHMuWV9BWElTX1NQQUNFXG5cbiAgICB9XG4gICAgZHVtbXlHLnJlbW92ZSgpXG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSAodGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXJ0QXhpc1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0QXhpc1BhcnNlcidcbmltcG9ydCB7Z2V0T2JqZWN0LCByZWZpbmVTdHJpbmcsIGlzQm9vbGVhbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7bWFwLCBlYWNofSBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljQlNQYXJzZXIgZXh0ZW5kcyBDaGFydEF4aXNQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG4gICAgICB0aGlzLm9wdHMueUF4aXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMueUF4aXMgPSB0aGlzLm9wdHMueUF4aXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RDaGFydERhdGEoKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RYQXhpc0luZm8oKSlcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgYmFyc2VyaWVzIEpTT04gcGFyc2luZyA6JywgZXJyKVxuICAgICAgdGhpcy5vcHRzLm9uRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgLSBFcnJvciBvbiBiYXJzZXJpZXMgSlNPTiBwYXJzaW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RDaGFydERhdGEgKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHJlc0pzb24gPSBkYXRhT3B0aW9ucy5kYXRhXG4gICAgY29uc3Qgc2VyaWVzRGF0YSA9IHJlc0pzb24uYmFyc2VyaWVzXG4gICAgY29uc3QgY29sdW1ucyA9IHNlcmllc0RhdGEuY29sdW1uc1xuICAgIGNvbnN0IGRhdGEgPSBzZXJpZXNEYXRhLnZhbHVlc1xuICAgIGNvbnN0IHZhbGlkSlNPTlR5cGUgPSAoY29sdW1ucy5sZW5ndGggJiYgZGF0YS5sZW5ndGgpXG5cbiAgICBpZiAoIXZhbGlkSlNPTlR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBCYXIgc2VyaWVzIEpTT04gcmVjZWl2ZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjaGFydERhdGE6IGRhdGFcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RYQXhpc0luZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IHNlcmllc0RhdGEgPSBkYXRhT3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCBkYXRhSW5kZXggPSAwXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVJbmZvOiB7XG4gICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgdGltZVJhbmdlOiBtYXAoc2VyaWVzRGF0YSwgMClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RZQXhpc0luZm8gKCkge1xuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gdGhpcy5kYXRhT3B0aW9uc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gZGF0YU9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IHBsb3RJbmZvID0gZGF0YU9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZGF0YSA9IGRhdGFPcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IHlBeGlzID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMubGVmdCcpXG4gICAgY29uc3QgeUF4aXMyID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQnKVxuICAgIGxldCBrZXlcbiAgICBsZXQgeVJhbmdlID0gbnVsbFxuICAgIGxldCB5UmFuZ2UyID0gbnVsbFxuXG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMubWF4KSkge1xuICAgICAgICB5UmFuZ2UgPSBbeUF4aXMubWluLCB5QXhpcy5tYXhdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHlBeGlzMikge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh5QXhpczIubWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoeUF4aXMyLm1heCkpIHtcbiAgICAgICAgeVJhbmdlMiA9IFt5QXhpczIubWluLCB5QXhpczIubWF4XVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHlSYW5nZSBpcyBub3Qgc2V0IGZyb20gZ3JhcGhPcHRpb25zLCB0aGVuIGdvIGluc2lkZVxuICAgIGlmICgheVJhbmdlIHx8ICF5UmFuZ2UyKSB7XG4gICAgICBsZXQgZmluZEVhY2hQbG90UmFuZ2UgPSBmYWxzZVxuICAgICAgZm9yIChrZXkgaW4gZWFjaFBsb3RTZXQpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5taW5WYWwpIHx8ICFOdW1iZXIuaXNGaW5pdGUoZWFjaFBsb3RTZXRba2V5XS5tYXhWYWwpKSB7XG4gICAgICAgICAgZmluZEVhY2hQbG90UmFuZ2UgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluZEVhY2hQbG90UmFuZ2UpIHtcblxuICAgICAgICAvLyBSZXNldCByYW5nZSBmb3IgZWFjaCBwbG90IGZvciBmaW5kaW5nIG1pbiAsIG1heFxuICAgICAgICBlYWNoKGVhY2hQbG90U2V0LCBmdW5jdGlvbiAoZWFjaFBsb3QpIHtcbiAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSBJbmZpbml0eVxuICAgICAgICAgIGVhY2hQbG90Lm1heFZhbCA9IC1JbmZpbml0eVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIE1heCBhbmQgTWluIGZvciBlYWNoIHBsb3RzIHNlcmllc1xuICAgICAgICB2YXIgdmFsRGF0YSA9IDBcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgZWFjaChlYWNoUGxvdFNldCwgZnVuY3Rpb24gKGVhY2hQbG90KSB7XG4gICAgICAgICAgICB2YWxEYXRhID0gZFtlYWNoUGxvdC5kYXRhSW5kZXhdXG4gICAgICAgICAgICBpZiAodmFsRGF0YSA8IGVhY2hQbG90Lm1pblZhbCkge1xuICAgICAgICAgICAgICBlYWNoUGxvdC5taW5WYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsRGF0YSA+IGVhY2hQbG90Lm1heFZhbCkge1xuICAgICAgICAgICAgICBlYWNoUGxvdC5tYXhWYWwgPSB2YWxEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBNYXggdmFsdWUgcmVxdWlyZWQgdG8gcGxvdCBvbiBncmFwaCBiYXNlZCBvbiB2aXNpYmxlIHBsb3QgZnVuY3Rpb24gLiBpLmUgbGluZSBvciBzdGFja1xuICAgICAgbGV0IGFsbE1heCA9IC1JbmZpbml0eVxuICAgICAgbGV0IGFsbE1heDIgPSAtSW5maW5pdHlcbiAgICAgIGZvciAoa2V5IGluIHBsb3RJbmZvKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgICAgcGxvdEluZm9ba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwbG90RGF0YSkge1xuICAgICAgICAgICAgdmFyIG1lbWJlckFyciA9IHBsb3REYXRhLmJhck9yZGVyTWVtYmVyc1xuICAgICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLm1heFZhbCA+IGFsbE1heCkge1xuICAgICAgICAgICAgICAgIGFsbE1heCA9IGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnZpc2libGUgJiYgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWwgPiBhbGxNYXgyKSB7XG4gICAgICAgICAgICAgICAgYWxsTWF4MiA9IGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS5tYXhWYWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIC8vIEZpbmQgbWluIHZhbHVlIGp1c3QgYnkgY2hlY2tpbmcgbWluIHZhbHVlIGFtb25nIGFsbCBzZXJpZXMgZGF0YVxuICAgICAgbGV0IGFsbE1pbiA9IEluZmluaXR5XG4gICAgICBsZXQgYWxsTWluMiA9IEluZmluaXR5XG4gICAgICBmb3IgKGtleSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpcyAmJiBlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAnbGVmdCcgJiYgZWFjaFBsb3RTZXRba2V5XS52aXNpYmxlICYmIGVhY2hQbG90U2V0W2tleV0ubWluVmFsIDwgYWxsTWluKSB7XG4gICAgICAgICAgYWxsTWluID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWFjaFBsb3RTZXRba2V5XS5wbG90QXhpcyAmJiBlYWNoUGxvdFNldFtrZXldLnBsb3RBeGlzWzBdID09PSAncmlnaHQnICYmIGVhY2hQbG90U2V0W2tleV0udmlzaWJsZSAmJiBlYWNoUGxvdFNldFtrZXldLm1pblZhbCA8IGFsbE1pbjIpIHtcbiAgICAgICAgICBhbGxNaW4yID0gZWFjaFBsb3RTZXRba2V5XS5taW5WYWxcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGxldCB5TWluLCB5TWF4XG4gICAgICAvLyBJZiBZYXhpcyByYW5nZSBpcyBhbHJlYWR5IGRlZmluZWQgaW4gb3B0aW9ucywgT3ZlcnJpZGUgaXQuXG4gICAgICBpZiAoW2FsbE1pbiwgYWxsTWF4XS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShhKSAmJiBOdW1iZXIuaXNGaW5pdGUoYilcbiAgICAgIH0pKSB7XG4gICAgICAgIHlNaW4gPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1pbicpXG4gICAgICAgIHlNaW4gPSBOdW1iZXIuaXNGaW5pdGUoeU1pbikgPyB5TWluIDogYWxsTWluXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5sZWZ0Lm1heCcpXG4gICAgICAgIHlNYXggPSBOdW1iZXIuaXNGaW5pdGUoeU1heCkgPyB5TWF4IDogYWxsTWF4XG4gICAgICAgIGlmICgheU1heCkge1xuICAgICAgICAgIHlNYXggPSB5TWluICsgODAgLy8gU2V0IGFzIGRlZmF1bHQgMTAwIGlmIHJhbmdlIGlzIFswLDBdXG4gICAgICAgIH1cbiAgICAgICAgeVJhbmdlID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMpIHtcbiAgICAgICAgICB5UmFuZ2UgPSBbMCwgODBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeVJhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmIChbYWxsTWluMiwgYWxsTWF4Ml0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUoYSkgJiYgTnVtYmVyLmlzRmluaXRlKGIpXG4gICAgICB9KSkge1xuICAgICAgICB5TWluID0gZ2V0T2JqZWN0KGRhdGFPcHRpb25zLCAneUF4aXMucmlnaHQubWluJylcbiAgICAgICAgeU1pbiA9IE51bWJlci5pc0Zpbml0ZSh5TWluKSA/IHlNaW4gOiBhbGxNaW4yXG4gICAgICAgIHlNYXggPSBnZXRPYmplY3QoZGF0YU9wdGlvbnMsICd5QXhpcy5yaWdodC5tYXgnKVxuICAgICAgICB5TWF4ID0gTnVtYmVyLmlzRmluaXRlKHlNYXgpID8geU1heCA6IGFsbE1heDJcbiAgICAgICAgaWYgKCF5TWF4KSB7XG4gICAgICAgICAgeU1heCA9IHlNaW4gKyA4MCAvLyBTZXQgYXMgZGVmYXVsdCAxMDAgaWYgcmFuZ2UgaXMgWzAsMF1cbiAgICAgICAgfVxuICAgICAgICB5UmFuZ2UyID0gW3lNaW4sIHlNYXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeUF4aXMyKSB7XG4gICAgICAgICAgeVJhbmdlMiA9IFswLCA4MF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5UmFuZ2UyID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHlSYW5nZTogeVJhbmdlLFxuICAgICAgeVJhbmdlMjogeVJhbmdlMlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHNlcmllc0RhdGEgPSByZXNKc29uLmJhcnNlcmllc1xuICAgIGNvbnN0IGNvbHVtbnMgPSBzZXJpZXNEYXRhLmNvbHVtbnNcbiAgICBsZXQgaW5kID0gMFxuICAgIC8vIE9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCBwbG90IGZ1bmN0aW9ucyBuZWVkZWQgZm9yIHRoZSBjaGFydFxuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0ge31cbiAgICAvLyBTZXQgb2YgcnVsZXMgdGhhdCBjaGFydHMgbmVlZHMgdG8gYmUgZHJhdyBvbiB0aW1lU2VyaWVzQ2hhcnRcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGxldCBrZXlcblxuICAgIGNvbnN0IGRhdGFDb2xvckFyciA9IHNlcmllc0RhdGEuY29sb3IgfHwgW11cbiAgICBjb25zdCB5TGVmdCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLmxlZnQnKVxuICAgIGNvbnN0IHlSaWdodCA9IGdldE9iamVjdChkYXRhT3B0aW9ucywgJ3lBeGlzLnJpZ2h0JylcblxuICAgIC8vIEdlbmVyYXRlIGVhY2hQbG90U2V0IHVzaW5nIGNvbHVtbnNcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIC8vIENvbnZlcnQgdGhlIFNlcmllcyBOYW1lIHRvIEpTIHN1aXRhYmxlIG9iamVjdCBtYXBwZWQgbmFtZSBleDogYWJjKCUpIDEgLS0+IGFiYzFcbiAgICAgIGNvbnN0IHJlZmluZU5hbWUgPSByZWZpbmVTdHJpbmcoZClcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdID0ge1xuICAgICAgICBuYW1lOiBkLFxuICAgICAgICBkYXRhSW5kZXg6IGluZCxcbiAgICAgICAgbWluVmFsOiBJbmZpbml0eSxcbiAgICAgICAgbWF4VmFsOiAtSW5maW5pdHksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiBkYXRhQ29sb3JBcnJbaW5kXSB8fCAnIzAwMCdcbiAgICAgIH1cbiAgICAgIGluZCsrXG4gICAgfSlcblxuXG4gICAgZm9yIChrZXkgaW4gcGxvdEluZm8pIHtcbiAgICAgIGlmIChrZXkgPT09ICdiYXInKSB7XG4gICAgICAgIHBsb3RJbmZvW2tleV0uZm9yRWFjaChmdW5jdGlvbiAocGxvdERhdGEpIHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJBcnIgPSBwbG90RGF0YS5iYXJPcmRlck1lbWJlcnNcbiAgICAgICAgICBwbG90RGF0YS52YWx1ZVJhbmdlID0gW0luZmluaXR5LCAtSW5maW5pdHldXG4gICAgICAgICAgbWVtYmVyQXJyLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgbWVtYmVyLm5hbWUgPSByZWZpbmVTdHJpbmcobWVtYmVyLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG1lbWJlci5jb2xvciAvLyBBcHBseSBjb2xvciBmb3IgZWFjaCBQbG90IHNlcmllcyBvciBwaWNrIGZyb20gZGF0YSBjb2xvciBBcnJcbiAgICAgICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYENvbG9yIG5vdCBwcmVzZW50IGZvciBzZXJpZXMgJHtwbG90RGF0YS5uYW1lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yICYmIChlYWNoUGxvdFNldFttZW1iZXIubmFtZV0uY29sb3IgPSBjb2xvcilcbiAgICAgICAgICAgIGNvbnN0IHBsb3RBeGlzID0gbWVtYmVyLnBsb3RBeGlzIHx8IFsnbGVmdCcsICdib3R0b20nXVxuICAgICAgICAgICAgZWFjaFBsb3RTZXRbbWVtYmVyLm5hbWVdLnBsb3RBeGlzID0gcGxvdEF4aXNcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBwbG90QXhpc1swXSA9PT0gJ2xlZnQnID8geUxlZnQudW5pdCA6IHlSaWdodC51bml0XG4gICAgICAgICAgICBlYWNoUGxvdFNldFttZW1iZXIubmFtZV0udW5pdCA9IHVuaXRcbiAgICAgICAgICAgIGlzQm9vbGVhbihtZW1iZXIudmlzaWJsZSkgJiYgKGVhY2hQbG90U2V0W21lbWJlci5uYW1lXS52aXNpYmxlID0gbWVtYmVyLnZpc2libGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWVzOiBwbG90SW5mbywgLy8gbmV3bHkgdXBkYXRlZCBzZXJpZXMgZnJvbSB1c2VyIG9wdGlvbnMgaGF2aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBlYWNoIHNlcmllc1xuICAgICAgcGxvdFNldDogZWFjaFBsb3RTZXQsIC8vIEluZm8gb2YgZWFjaCBwbG90IGxpa2UgY29sb3IsIG1heCwgbWluIGV0Y1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IHtlYWNoLCBtYXB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7c3RhY2ssIHJhbmdlLCB0cmFuc3Bvc2UsIG1heCwgc2VsZWN0LCBkM0V2ZW50fSBmcm9tICdAL2QzSW1wb3J0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwbG90QXhpczogW2NvbnN0YW50cy5ESVJfTEVGVCwgY29uc3RhbnRzLkRJUl9CT1RUT01dLFxuICAgICAgYmFyRGF0YTogbnVsbCxcbiAgICAgIHhBeGlzVGFyZ2V0OiBudWxsLFxuICAgICAgYmFyVHlwZTogY29uc3RhbnRzLkdST1VQRURfQkFSLFxuICAgICAgYmFyT3JkZXJNZW1iZXJzOiB7fSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBldmVudHM6IHt9XG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnBsb3RTZXRcbiAgICB0aGlzLm9wdHMuYmFyT3JkZXJJbmRleCA9IHRoaXMub3B0cy5iYXJPcmRlck1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIHJldHVybiBlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cbiAgICB0aGlzLm9wdHMuc2VyaWVzTGVuZ3RoID0gdGhpcy5vcHRzLmJhck9yZGVySW5kZXgubGVuZ3RoXG4gICAgLy8gRmluZCB4IGFuZCB5IGF4aXMgYmFzZWQgb24gcGxvdEF4aXNcbiAgICBsZXQgeCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdjaGFydC54QXhpcy5zY2FsZScpXG4gICAgaWYgKHRoaXMub3B0cy5wbG90QXhpcy5pbmRleE9mKGNvbnN0YW50cy5ESVJfVE9QKSA+IC0xKSB7XG4gICAgICB4ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnhBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgbGV0IHkgPSBnZXRPYmplY3QodGhpcy5vcHRzLCAnY2hhcnQueUF4aXMuc2NhbGUnKVxuICAgIGlmICh0aGlzLm9wdHMucGxvdEF4aXMuaW5kZXhPZihjb25zdGFudHMuRElSX1JJR0hUKSA+IC0xKSB7XG4gICAgICB5ID0gZ2V0T2JqZWN0KHRoaXMub3B0cywgJ2NoYXJ0LnlBeGlzMi5zY2FsZScpXG4gICAgfVxuXG4gICAgdGhpcy54U2NhbGUgPSB4XG4gICAgdGhpcy55U2NhbGUgPSB5XG5cbiAgICBjb25zdCBzckRhdGEgPSB0aGlzLm9wdHMuYmFyRGF0YVxuICAgIHRoaXMub3B0cy5zZXJpZXNBcnIgPSBbXVxuICAgIHRoaXMub3B0cy54QXhpc0FyciA9IG1hcChzckRhdGEsIHRoaXMub3B0cy54QXhpc1RhcmdldClcbiAgICBlYWNoKHRoaXMub3B0cy5iYXJPcmRlckluZGV4LCBmdW5jdGlvbiAoaW5kZXhWYWwpIHtcbiAgICAgIHNlbGYub3B0cy5zZXJpZXNBcnIucHVzaChtYXAoc3JEYXRhLCBpbmRleFZhbCkpXG4gICAgfSlcblxuICAgIHRoaXMub3B0cy5iYXJTdGFjayA9IHN0YWNrKCkua2V5cyhyYW5nZSh0aGlzLm9wdHMuc2VyaWVzTGVuZ3RoKSkodHJhbnNwb3NlKHRoaXMub3B0cy5zZXJpZXNBcnIpKVxuXG4gICAgdGhpcy55TWF4R3JvdXBlZCA9IG1heCh0aGlzLm9wdHMuc2VyaWVzQXJyLCBmdW5jdGlvbiAoeSkge1xuICAgICAgcmV0dXJuIG1heCh5KVxuICAgIH0pXG4gICAgdGhpcy55TWF4U3RhY2tlZCA9IG1heCh0aGlzLm9wdHMuYmFyU3RhY2ssIGZ1bmN0aW9uICh5KSB7XG4gICAgICByZXR1cm4gbWF4KHksIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkWzFdXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IG5hbWVJbmRleE1hcCA9IHt9XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgYmFyVmlzaWJsZU9yZGVyID0gdGhpcy5vcHRzLmJhck9yZGVyTWVtYmVycy5maWx0ZXIoZnVuY3Rpb24gKGVsZSkge1xuICAgICAgcmV0dXJuIChlYWNoUGxvdFNldFtlbGUubmFtZV0udmlzaWJsZSB8fCBmYWxzZSlcbiAgICB9KVxuICAgIGVhY2goYmFyVmlzaWJsZU9yZGVyLCBmdW5jdGlvbiAocGxvdCwgbmFtZSkge1xuICAgICAgY29uc3QgcHQgPSBlYWNoUGxvdFNldFtwbG90Lm5hbWVdXG4gICAgICBuYW1lSW5kZXhNYXBbcHQuZGF0YUluZGV4IC0gMV0gPSBwbG90Lm5hbWVcbiAgICB9KVxuXG5cbiAgICBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyLmZpbmQoJ3N2ZyBjbGlwUGF0aCcpXG4gICAgdGhpcy5iYXJTZXJpZXMgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLnNlbGVjdEFsbCgnLnZjLWJhci1zZXJpZXMnKVxuICAgICAgLmRhdGEodGhpcy5vcHRzLmJhclN0YWNrKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoIycgKyBjbGlwRWxlbWVudC5hdHRyKCdpZCcpICsgJyknKSAvLyBkaXNwbGF5IGdyYXBoWm9uZSBvZiBzYW1lIHNpemUgYXMgY2xpcC1wYXRoIGRlZmluZWRcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1iYXItc2VyaWVzJylcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W25hbWVJbmRleE1hcFtpXV0uY29sb3JcbiAgICAgIH0pXG4gICAgICAuYXR0cignc2VyaWVzTmFtZScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBuYW1lSW5kZXhNYXBbaV1cbiAgICAgIH0pXG4gICAgICAuYXR0cignc2VyaWVzSW5kZXgnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gaVxuICAgICAgfSlcblxuXG4gICAgdGhpcy5iYXJzID0gdGhpcy5iYXJTZXJpZXMuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgIC5kYXRhKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkXG4gICAgICB9KVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYub3B0cy54QXhpc0FycltpXSlcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGNvbnN0IHNyTmFtZSA9IHNlbGVjdCh0aGlzLnBhcmVudE5vZGUpLmF0dHIoJ3Nlcmllc05hbWUnKVxuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbc3JOYW1lXS5jb2xvckFyciAmJiBlYWNoUGxvdFNldFtzck5hbWVdLmNvbG9yQXJyW2ldXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3knLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpXG4gICAgICAuYXR0cignd2lkdGgnLCB0aGlzLnhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5ob3ZlcihkM0V2ZW50LnBhZ2VYLCBkM0V2ZW50LnBhZ2VZIC0gNTAsIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2YWw6IHNlbGYub3B0cy5iYXJEYXRhW2ldLFxuICAgICAgICAgICAgaW5kOiBpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5oaWRlKClcbiAgICAgIH0pXG5cblxuICAgIGVhY2godGhpcy5vcHRzLmV2ZW50cywgZnVuY3Rpb24gKGZuLCBuYW1lKSB7XG4gICAgICBzZWxmLmJhcnMub24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbi5hcHBseShzZWxmLm9wdHMuY2hhcnQsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfSlcblxuICB9XG5cbiAgLy8gVXBkYXRlIGhhcHBlbnMgd2hlbiB0aGUgY2hhcnQgaXMgcmVzaXplZFxuICB1cGRhdGUgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgaWYgKHRoaXMub3B0cy5iYXJUeXBlID09PSBjb25zdGFudHMuU1RBQ0tFRF9CQVIpIHtcbiAgICAgIHRoaXMuYmFyc1xuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGRbMV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkWzBdKSAtIHNlbGYueVNjYWxlKGRbMV0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5vcHRzLnhBeGlzQXJyW2ldKVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iYXJzXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBjb25zdCB4VmFsID0gc2VsZi54U2NhbGUoc2VsZi5vcHRzLnhBeGlzQXJyW2ldKSArIHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5vcHRzLnNlcmllc0xlbmd0aCAqIHNlbGVjdCh0aGlzLnBhcmVudE5vZGUpLmF0dHIoJ3Nlcmllc0luZGV4JylcbiAgICAgICAgICByZXR1cm4geFZhbFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCBzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYub3B0cy5zZXJpZXNMZW5ndGgpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZFsxXSAtIGRbMF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZSgwKSAtIHNlbGYueVNjYWxlKGRbMV0gLSBkWzBdKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYmFyU2VyaWVzLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICAvLyBSZWRyYXcgaXMgY2FsbGVkIHdoZW4gc2VyaWVzIGlzIHRvZ2dsZWQgZnJvbSBMZWdlbmRzXG4gIHJlZHJhdyAoKSB7XG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5wbG90U2V0XG4gICAgLy8gTW9kaWZ5IGJhck9yZGVyIGFyciBiYXNlZCBvbiB2aXNpYmxlU2VyaWVzXG4gICAgdGhpcy5vcHRzLmJhck9yZGVySW5kZXggPSB0aGlzLm9wdHMuYmFyT3JkZXJNZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAoZWxlKSB7XG4gICAgICByZXR1cm4gKGVhY2hQbG90U2V0W2VsZS5uYW1lXS52aXNpYmxlIHx8IGZhbHNlKVxuICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2VsZS5uYW1lXS5kYXRhSW5kZXhcbiAgICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgYWxsIGJhciBzZXJpZXNcbiAgICB0aGlzLmJhclNlcmllcyAmJiB0aGlzLmJhclNlcmllcy5yZW1vdmUoKVxuICAgIC8vIGRyYXcgd2l0aCBuZXcgYmFyT3JkZXJNZW1iZXJzXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5iYXJTZXJpZXMgJiYgdGhpcy5iYXJTZXJpZXMucmVtb3ZlKClcbiAgICB0aGlzLmJhcnMgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG5cbn0iLCJpbXBvcnQge2lzQXJyYXl9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgQmFyIGZyb20gJ0Avc2VyaWVzL0JhcidcbmltcG9ydCBTZXJpZXMgZnJvbSAnQC9zZXJpZXMvU2VyaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJTZXJpZXMgZXh0ZW5kcyBTZXJpZXMge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5wbG90U2VyaWVzID0gW11cbiAgICBjb25zdCBkYXRhID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuY2hhcnREYXRhIC8vIEFjY2VwdCBlaXRoZXIgdGltZXNlcmllcyBvciBwaWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnNlcmllc1xuXG4gICAgLy8gQ3JlYXRlIHBsb3QgY29tcG9uZW50cyBiYXNlZCBvbiBpbnB1dCBvcHRpb25zIGFuZCBlYWNoIHBsb3QgaW5mb1xuICAgIGlzQXJyYXkocGxvdEluZm8uYmFyKSAmJiBwbG90SW5mby5iYXIuZm9yRWFjaCgocGxvdERhdGEpID0+IHtcbiAgICAgIHRoaXMucGxvdFNlcmllcy5wdXNoKG5ldyBCYXIoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHBsb3REYXRhLmNsYXNzTmFtZSB8fCBwbG90RGF0YS5uYW1lLFxuICAgICAgICBwbG90QXhpczogcGxvdERhdGEucGxvdEF4aXMsXG4gICAgICAgIHhBeGlzVGFyZ2V0OiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy50aW1lSW5mby5kYXRhSW5kZXgsXG4gICAgICAgIGJhck9yZGVyTWVtYmVyczogcGxvdERhdGEuYmFyT3JkZXJNZW1iZXJzLFxuICAgICAgICBiYXJEYXRhOiBkYXRhXG4gICAgICB9KSlcbiAgICB9KVxuICB9XG5cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2lzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVG9vbHRpcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIC8vIFByb3ZpZGUgYmFzaWMgZm9ybWF0dGVyIHRvIGRpc3BsYXkgaG92ZXIgZGF0YVxuICAgIGlmICghaXNGdW5jdGlvbih0aGlzLm9wdHMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5vcHRzLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+IFRvb2xUaXAgVGV4dCA6IDwvc3Bhbj48YnIvPjxzcGFuPiR7SlNPTi5zdHJpbmdpZnkoZCl9PC9zcGFuPmBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLiR0b29sVGlwRGl2ID0gJCgnPGRpdj48L2Rpdj4nKS5hZGRDbGFzcygndmMtdG9vbHRpcC1kaXNwbGF5ICcgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICAgIHRoaXMub3B0cy5jaGFydC4kY29udGFpbmVyXG4gICAgICAuYXBwZW5kKHRoaXMuJHRvb2xUaXBEaXYpXG4gIH1cblxuICBob3ZlciAoeCwgeSwgZGlzcGxheURhdGEsIGV4Y2x1ZGVUb29sVGlwRGl2KSB7XG4gICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBzZXJpZXMgLS0gYmFyIC8gcGllXG4gICAgdmFyIHJvb3RQb3MgPSB0aGlzLm9wdHMuY2hhcnQuJGNvbnRhaW5lci5vZmZzZXQoKVxuICAgIHZhciB4cG9zID0gTWF0aC5yb3VuZCh4IC0gcm9vdFBvcy5sZWZ0KVxuICAgIHZhciB5cG9zID0gTWF0aC5yb3VuZCh5IC0gcm9vdFBvcy50b3ApXG5cbiAgICBpZiAoIWV4Y2x1ZGVUb29sVGlwRGl2KSB7XG4gICAgICAvLyBDb25zaWRlciB0b29sVGlwIG9mZnNldCBmb3IgcG9zaXRpb25cbiAgICAgIHhwb3MgPSBNYXRoLnJvdW5kKHhwb3MgLSAodGhpcy4kdG9vbFRpcERpdi53aWR0aCgpIC8gMikpXG4gICAgICB5cG9zID0gTWF0aC5yb3VuZCh5cG9zIC0gKHRoaXMuJHRvb2xUaXBEaXYuaGVpZ2h0KCkgLyAyKSlcbiAgICB9XG5cbiAgICB0aGlzLiR0b29sVGlwRGl2XG4gICAgICAuY3NzKHtcbiAgICAgICAgbGVmdDogeHBvcyArICdweCcsXG4gICAgICAgIHRvcDogeXBvcyArICdweCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICB9KVxuICAgICAgLmh0bWwodGhpcy5vcHRzLmZvcm1hdC5jYWxsKHRoaXMub3B0cy5jaGFydCwgZGlzcGxheURhdGEuZGF0YSkpIC8vIFVzZWQgZm9ybWF0LmNhbGwoKSwgc28gdGhhdCBleHRlcm5hbCBmdW4gY2FuIGhhdmUgYWNjZXNzIG9mIGNoYXJ0IEluc3RhbmNlXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcblxuICAgIGlmIChzaG93RmxhZykge1xuICAgICAgdGhpcy4kdG9vbFRpcERpdiAmJiB0aGlzLiR0b29sVGlwRGl2LnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYuaGlkZSgpXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=