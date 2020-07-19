(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["pieseries"],{

/***/ "./charts/PieSeriesChart.js":
/*!**********************************!*\
  !*** ./charts/PieSeriesChart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/set-immediate */ "../node_modules/babel-runtime/core-js/set-immediate.js");
/* harmony import */ var babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "../node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/get */ "../node_modules/babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _charts_Chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/charts/Chart */ "./charts/Chart.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/helpers */ "./helpers.js");
/* harmony import */ var _tooltip_BasicTooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/tooltip/BasicTooltip */ "./tooltip/BasicTooltip.js");
/* harmony import */ var _data_parser_BasicPSParser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/data-parser/BasicPSParser */ "./data-parser/BasicPSParser.js");
/* harmony import */ var _data_parser_ChartDataParser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/data-parser/ChartDataParser */ "./data-parser/ChartDataParser.js");
/* harmony import */ var _series_PieSeries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/series/PieSeries */ "./series/PieSeries.js");
/* harmony import */ var _legend_PieSeriesLegend__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/legend/PieSeriesLegend */ "./legend/PieSeriesLegend.js");
/* harmony import */ var _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/legend/TimeSeriesLegend */ "./legend/TimeSeriesLegend.js");



















var PieSeriesChart = function (_Chart) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(PieSeriesChart, _Chart);

  function PieSeriesChart(container, opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, PieSeriesChart);

    opts.startTime = new Date();

    // Create the dataParser is not passed
    if (!opts.dataParser) {
      opts.dataParser = new _data_parser_BasicPSParser__WEBPACK_IMPORTED_MODULE_13__["default"](opts);
    }
    // Check the dataParser exists and its instanceof ChartDataParser
    if (!(opts.dataParser instanceof _data_parser_ChartDataParser__WEBPACK_IMPORTED_MODULE_14__["default"])) {
      throw new Error("DataParser in options dosen't have implementation of ChartDataParser");
    }

    // Call Parent Impl

    // Add default options to chart
    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (PieSeriesChart.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(PieSeriesChart)).call(this, container, opts));

    Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["addDefaultPSOptions"])(_this.options);

    // Run the dataParser for given JSON data
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(_this.dataParser)) {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(_this.options, _this.dataParser.dataExecutor());
    }

    // Initilize all chart components needed for timeSeriesChart on exact order based on each dependencies
    _this.chartInitilize();

    babel_runtime_core_js_set_immediate__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      return _this.draw();
    });
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(PieSeriesChart, [{
    key: 'chartInitilize',
    value: function chartInitilize() {

      var tooltipOpts = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getObject"])(this, 'options.tooltip');
      if (tooltipOpts.visible) {
        this.tooltip = new _tooltip_BasicTooltip__WEBPACK_IMPORTED_MODULE_12__["default"](babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          chart: this
        }, tooltipOpts));
        this.chartComponentsArr.push(this.tooltip);
      }

      if (this.options.series) {
        this.series = new _series_PieSeries__WEBPACK_IMPORTED_MODULE_15__["default"]({
          chart: this
        });
        // Register the component for draw, update, showHide and remove
        this.chartComponentsArr.push(this.series);
      }

      if (this.options.legend.visible) {
        // IF browser supports foreignObject use pieLegends API
        if (document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Extensibility', '1.1')) {
          this.legends = new _legend_PieSeriesLegend__WEBPACK_IMPORTED_MODULE_16__["default"]({
            chart: this,
            legendPrefix: this.options.legend.legendPrefix,
            position: this.options.legend.position
          });
        } else {
          this.legends = new _legend_TimeSeriesLegend__WEBPACK_IMPORTED_MODULE_17__["default"]({
            chart: this,
            legendPrefix: this.options.legend.legendPrefix,
            position: this.options.legend.position
          });
        }

        this.chartComponentsArr.push(this.legends);
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      console.log('PieSeriesChart draw', this);
      babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(PieSeriesChart.prototype.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(PieSeriesChart.prototype), 'draw', this).call(this);
      this.options.afterDraw.call(this);

      this.chartResponsive();

      this.timeDiff = new Date().getTime() - this.options.startTime.getTime();
      this.options.onComplete.call(this, this.timeDiff);
    }
  }]);

  return PieSeriesChart;
}(_charts_Chart__WEBPACK_IMPORTED_MODULE_10__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PieSeriesChart);

/***/ }),

/***/ "./data-parser/BasicPSParser.js":
/*!**************************************!*\
  !*** ./data-parser/BasicPSParser.js ***!
  \**************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _data_parser_ChartDataParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data-parser/ChartDataParser */ "./data-parser/ChartDataParser.js");









var BasicPSParser = function (_ChartDataParser) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BasicPSParser, _ChartDataParser);

  function BasicPSParser(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BasicPSParser);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (BasicPSParser.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(BasicPSParser)).call(this, opts));

    _this.opts = opts;
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BasicPSParser, [{
    key: 'dataExecutor',
    value: function dataExecutor() {
      // Order in which the DataProcessor APIs needs to be executed
      try {

        this.dataOptions = {};
        this.opts.data && (this.dataOptions.data = this.opts.data);
        this.opts.series && (this.dataOptions.series = this.opts.series);

        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.dataOptions, this.constructPlotInfo());

        return this.dataOptions;
      } catch (err) {
        console.log('Error encountered while pieseries JSON parsing :', err);
        this.opts.onError(err);
        throw new Error('Invalid JSON received - Error on pieseries JSON parsing');
      }
    }
  }, {
    key: 'constructPlotInfo',
    value: function constructPlotInfo() {
      var dataOptions = this.dataOptions;
      var resJson = dataOptions.data;
      var pieData = resJson.pieseries;
      var plotInfo = dataOptions.series;
      var eachPlotSet = {};
      var othersArc = {
        name: 'Others',
        value: 0,
        color: '#324fff'

        // Create pieSet for each pie charts and arcInfo which contains each pie arcs to be drawn
      };var pieObj = plotInfo.pie;
      pieObj.total = 0;
      var arcs = [];

      // Find total value for entire pie chart
      var allArcArr = pieData.values;

      allArcArr.sort(function (a, b) {
        return b.value - a.value;
      }).forEach(function (arcInfo, ind) {
        if (pieObj.pieArcCount && ind + 1 >= pieObj.pieArcCount) {
          // Add to others arc
          othersArc.value += arcInfo.value;
        } else {
          var refineName = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["refineString"])(arcInfo.name);
          // arcInfo.name = refineName
          eachPlotSet[refineName] = {};
          eachPlotSet[refineName].name = arcInfo.name;
          eachPlotSet[refineName].color = arcInfo.color;
          eachPlotSet[refineName].value = arcInfo.value;
          eachPlotSet[refineName].visible = true;
          eachPlotSet[refineName].unit = pieObj.unit;
          arcs.push(arcInfo);
        }
        pieObj.total += arcInfo.value;
      });
      // Add others to arc
      if (othersArc.value) {
        var refineName = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["refineString"])(othersArc.name);
        // othersArc.name = refineName
        eachPlotSet[refineName] = {};
        eachPlotSet[refineName].name = othersArc.name;
        eachPlotSet[refineName].color = othersArc.color;
        eachPlotSet[refineName].value = othersArc.value;
        eachPlotSet[refineName].visible = true;
        eachPlotSet[refineName].unit = pieObj.unit;
        arcs.push(othersArc);
      }

      return {
        plotSet: eachPlotSet,
        series: {
          pie: pieObj
        },
        chartData: {
          name: pieObj.name,
          arcs: arcs
        }
      };
    }
  }]);

  return BasicPSParser;
}(_data_parser_ChartDataParser__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicPSParser);

/***/ }),

/***/ "./legend/PieSeriesLegend.js":
/*!***********************************!*\
  !*** ./legend/PieSeriesLegend.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "../node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
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









var PieSeriesLegend = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PieSeriesLegend, _ChartComponent);

  function PieSeriesLegend(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PieSeriesLegend);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (PieSeriesLegend.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(PieSeriesLegend)).call(this));

    _this.opts = opts;
    var self = _this;
    _this.opts.maxWidthLegend = 0;
    _this.opts.hasOverflow = false;
    var graphOptions = _this.opts.chart.options;
    var eachPlotSet = graphOptions.plotSet;
    var eachPlotNames = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet);
    var textWidth = [];
    var dummyG = _this.opts.chart.svg.append('g');
    // Add all name on DOM to calculate how much space is needed for every names
    dummyG.selectAll('.dummyText').data(eachPlotNames).enter().append('text').attr('class', 'vc-legend-label').text(function (d) {
      return self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : '');
    }).each(function (d, i) {
      // Find size required for each legend on screen
      var thisWidth = Math.round(this.getComputedTextLength());
      if (thisWidth > self.opts.maxWidthLegend) {
        self.opts.maxWidthLegend = thisWidth;
      }
      textWidth.push(thisWidth);
    });

    dummyG.remove();

    if (_this.opts.maxWidthLegend > _constants__WEBPACK_IMPORTED_MODULE_7__["default"].LEGEND_MAX_WIDTH) {
      _this.opts.maxWidthLegend = _constants__WEBPACK_IMPORTED_MODULE_7__["default"].LEGEND_MAX_WIDTH;
    }

    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PieSeriesLegend, [{
    key: 'draw',
    value: function draw() {

      var self = this;
      var graphOptions = this.opts.chart.options;
      var eachPlotSet = graphOptions.plotSet;
      var eachPlotNames = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(eachPlotSet);
      var maxYLen = Math.floor(this.opts.chart.chartFullSpace.height * 90 / 100);
      var fullYLen = eachPlotNames.length * _constants__WEBPACK_IMPORTED_MODULE_7__["default"].LEGEND_Y_SPACE;
      fullYLen = fullYLen > maxYLen ? maxYLen : fullYLen;
      var divWidth = this.opts.maxWidthLegend + _constants__WEBPACK_IMPORTED_MODULE_7__["default"].LEGEND_SHOW_WIDTH;

      this.opts.legendDiv = {
        width: divWidth,
        height: fullYLen
      };

      this.legendDisplay = this.opts.chart.svg.append('g').attr('class', 'vc-legend-group');

      var pieforeignDiv = this.legendDisplay.append('foreignObject').attr('width', divWidth).attr('height', fullYLen).attr('class', 'vc-legend-right').append('xhtml:div').attr('xmlns', 'http://www.w3.org/1999/xhtml').style('height', '100%').style('padding', '5px 0px');

      if (fullYLen === maxYLen) {
        // Add overflow to chart
        pieforeignDiv.style('overflow', 'auto');
        this.opts.hasOverflow = true;
      }

      this.legendBlock = pieforeignDiv.selectAll('div').data(eachPlotNames).enter().append('div').attr('class', 'vc-legend-name');

      this.legendBlock.append('span').style('background-color', function (d) {
        return eachPlotSet[d].color;
      });

      this.legendBlock.append('label').style('width', divWidth - 40 + 'px').style('font-size', '11px').style('font-weight', '600').text(function (d) {
        return self.opts.legendPrefix + eachPlotSet[d].name;
      });

      this.legendXDiv = pieforeignDiv;
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      // Display in vertical order
      var chartZoneWidth = this.opts.chart.graphZone.node().getBBox().width;
      var basicWidth = this.opts.maxWidthLegend + this.opts.chart.margin.left + this.opts.chart.margin.right + _constants__WEBPACK_IMPORTED_MODULE_7__["default"].LEGEND_RIGHT_BUFFER;

      var pieLegendPos = _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_POS_LEGEND;
      if (this.opts.maxWidthLegend === _constants__WEBPACK_IMPORTED_MODULE_7__["default"].LEGEND_MAX_WIDTH) {
        pieLegendPos = _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_POS_LEGEND - 5;
      }

      var legendXPos = Math.floor(this.opts.chart.chartWidth * pieLegendPos / 100);
      var xBuff = this.opts.chart.chartWidth - legendXPos;
      xBuff = Math.floor((xBuff - this.opts.legendDiv.width) / 2);
      legendXPos += xBuff;

      var legendYPos = Math.floor((this.opts.chart.chartFullSpace.height - this.opts.legendDiv.height) / 2);

      if (!this.opts.hasOverflow) {
        this.legendDisplay.attr('transform', 'translate(' + legendXPos + ',' + legendYPos + ')');
      } else {
        this.legendXDiv.style('position', 'relative').style('top', legendYPos + 'px').style('left', legendXPos + 'px');
      }

      if (this.opts.chart.chartWidth < basicWidth + chartZoneWidth) {
        // Hide legend display for pielegends
        this.hide();
      } else {
        this.show();
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

  return PieSeriesLegend;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PieSeriesLegend);

/***/ }),

/***/ "./series/Pie.js":
/*!***********************!*\
  !*** ./series/Pie.js ***!
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
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "./utils.js");











var Pie = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Pie, _ChartComponent);

  function Pie(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Pie);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Pie.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Pie)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: '',
      pieData: null,
      donutPercent: 100,
      positionPercentage: null,
      seriesOrder: true,
      visible: true
    }, opts);

    _this.opts.piePosPercentage = _this.opts.positionPercentage || _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_POS_DEFAULT / 100;
    _this.opts.radius = Math.floor(Math.min(_this.opts.chart.chartWidth * _this.opts.piePosPercentage, _this.opts.chart.chartHeight) / 2);

    // X Position of pie graph on the chart
    _this.pie = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["pie"])();

    if (_this.opts.seriesOrder) {
      _this.pie.sort(function (a, b) {
        return b.order - a.order; // Sort based on each series order
      });
    }

    _this.pie.value(function (d) {
      return d.value; // provide index of this series in data Arr
    });

    if (_this.opts.donutPercent > 100 || _this.opts.donutPercent < 0) {
      _this.opts.donutPercent = 100;
    }

    _this.opts.donutLength = Math.floor(_this.opts.donutPercent * _this.opts.radius / 100);

    _this.opts.tooltipHelper = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["arc"])().outerRadius(_this.opts.radius + 2 * _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_TOOLTIP_BUFFER).innerRadius(_this.opts.radius);

    _this.arc = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["arc"])()
    // .outerRadius(this.opts.radius)
    .innerRadius(_this.opts.radius - _this.opts.donutLength);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Pie, [{
    key: 'draw',
    value: function draw() {

      var outerRadius = this.opts.radius;
      var arc = this.arc;
      var self = this;
      this.pieTag = this.opts.chart.graphZone.append('g').attr('class', 'vc-pie-plot vc-pie-' + this.opts.className).attr('transform', 'translate(' + Math.floor(this.opts.chart.chartWidth * this.opts.piePosPercentage / 2) + ',' + Math.floor(this.opts.chart.chartHeight / 2) + ')');

      this.arcZone = this.pieTag.selectAll('.vc-pie-arc').data(this.pie(this.opts.pieData.arcs)).enter().append('g').attr('class', 'vc-pie-arc');

      this.arcZone.append('path').each(function (d) {
        d.outerRadius = outerRadius;
      }).attr('d', this.arc).attr('fill', function (d) {
        return d.data.color;
      }).style('opacity', _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_DARK_OPACITY).style('stroke-width', 0).on('mouseover', function (d, ind) {
        // tooltip feature
        var txtEle = self.arcZone.select('.vc-tool-text_' + ind);
        var textPos = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["elementOffset"])(txtEle); // Find position of Arc respective tooltipHelper
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(textPos.left, textPos.top, d);
        // Dull all other Arcs
        self.arcZone.selectAll('path').style('opacity', _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_DULL_OPACITY);
        // Provide new radius and stroke-width
        Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["select"])(this).style('opacity', _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_DARK_OPACITY).style('stroke-width', _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_ARC_STROKE).transition().delay(10).attrTween('d', function (d) {
          var i = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["interpolate"])(d.outerRadius, outerRadius + _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_HOVER_BUFFER);
          return function (t) {
            d.outerRadius = i(t);
            return arc(d);
          };
        });
      }).on('mouseout', function (d) {
        // Hide tooltip
        self.opts.chart.tooltip && self.opts.chart.tooltip.hide();
        // Provide dark opacity to all arcs
        self.arcZone.selectAll('path').style('opacity', _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_DARK_OPACITY);
        // Revert back to its loaded radius
        Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["select"])(this).style('stroke-width', 0).transition().delay(150).attrTween('d', function (d) {
          var i = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["interpolate"])(d.outerRadius, outerRadius);
          return function (t) {
            d.outerRadius = i(t);
            return arc(d);
          };
        });
      });

      // Add tooltip-helper for each arc outside pie area
      this.arcZone.append('text').attr('class', function (d, ind) {
        return 'vc-tool-text_' + ind;
      }).attr('transform', function (d) {
        return 'translate(' + self.opts.tooltipHelper.centroid(d) + ')';
      }).style('visibility', 'hidden').text(function (d) {
        return 'T';
      });
    }
  }, {
    key: 'update',
    value: function update() {
      var self = this;
      this.opts.radius = Math.floor(Math.min(this.opts.chart.chartWidth * this.opts.piePosPercentage, this.opts.chart.chartHeight) / 2);
      this.pieTag.attr('transform', 'translate(' + Math.floor(this.opts.chart.chartWidth * this.opts.piePosPercentage / 2) + ',' + Math.floor(this.opts.chart.chartHeight / 2) + ')');
      this.opts.donutLength = Math.floor(this.opts.donutPercent * this.opts.radius / 100);

      this.arc.outerRadius(this.opts.radius).innerRadius(this.opts.radius - this.opts.donutLength);

      this.opts.tooltipHelper.outerRadius(this.opts.radius + 2 * _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_TOOLTIP_BUFFER).innerRadius(this.opts.radius);

      this.arcZone.select('path').attr('d', this.arc);
      this.arcZone.select('text').attr('transform', function (d) {
        return 'translate(' + self.opts.tooltipHelper.centroid(d) + ')';
      }).style('visibility', 'hidden').text(function (d) {
        return 'T';
      });
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.pieTag.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.arcZone && this.arcZone.remove();
      this.pieTag && this.pieTag.remove();
      this.opts.tooltipHelper = null;
      this.arc = null;
      this.pie = null;
      this.opts = null;
    }
  }]);

  return Pie;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Pie);

/***/ }),

/***/ "./series/PieSeries.js":
/*!*****************************!*\
  !*** ./series/PieSeries.js ***!
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
/* harmony import */ var _series_Series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/series/Series */ "./series/Series.js");
/* harmony import */ var _series_Pie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/series/Pie */ "./series/Pie.js");







var PieSeries = function (_Series) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PieSeries, _Series);

  function PieSeries(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PieSeries);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (PieSeries.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(PieSeries)).call(this));

    _this.opts = opts;
    _this.plotSeries = [];
    var data = _this.opts.chart.options.chartData;
    var pieInfo = _this.opts.chart.options.series.pie;

    _this.plotSeries.push(new _series_Pie__WEBPACK_IMPORTED_MODULE_5__["default"]({
      chart: _this.opts.chart,
      className: pieInfo.className || pieInfo.name,
      pieData: data,
      donutPercent: pieInfo.donutPercent || 100,
      visible: pieInfo.visible
    }));
    return _this;
  }

  return PieSeries;
}(_series_Series__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PieSeries);

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
      this.toolTipDiv = this.opts && this.opts.chart.container.append('div').attr('class', 'vc-tooltip-display ' + this.opts.className);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9QaWVTZXJpZXNDaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2RhdGEtcGFyc2VyL0Jhc2ljUFNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9sZWdlbmQvUGllU2VyaWVzTGVnZW5kLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1BpZS5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9QaWVTZXJpZXMuanMiLCJ3ZWJwYWNrOi8vdmMvLi90b29sdGlwL0Jhc2ljVG9vbHRpcC5qcyJdLCJuYW1lcyI6WyJQaWVTZXJpZXNDaGFydCIsImNvbnRhaW5lciIsIm9wdHMiLCJzdGFydFRpbWUiLCJEYXRlIiwiZGF0YVBhcnNlciIsIkJhc2ljUFNQYXJzZXIiLCJDaGFydERhdGFQYXJzZXIiLCJFcnJvciIsImFkZERlZmF1bHRQU09wdGlvbnMiLCJvcHRpb25zIiwiaXNPYmplY3QiLCJkYXRhRXhlY3V0b3IiLCJjaGFydEluaXRpbGl6ZSIsImRyYXciLCJ0b29sdGlwT3B0cyIsImdldE9iamVjdCIsInZpc2libGUiLCJ0b29sdGlwIiwiVG9vbHRpcCIsImNoYXJ0IiwiY2hhcnRDb21wb25lbnRzQXJyIiwicHVzaCIsInNlcmllcyIsIlBpZVNlcmllcyIsImxlZ2VuZCIsImRvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJoYXNGZWF0dXJlIiwibGVnZW5kcyIsIlBpZVNlcmllc0xlZ2VuZCIsImxlZ2VuZFByZWZpeCIsInBvc2l0aW9uIiwiVGltZVNlcmllc0xlZ2VuZCIsImNvbnNvbGUiLCJsb2ciLCJhZnRlckRyYXciLCJjYWxsIiwiY2hhcnRSZXNwb25zaXZlIiwidGltZURpZmYiLCJnZXRUaW1lIiwib25Db21wbGV0ZSIsIkNoYXJ0IiwiZGF0YU9wdGlvbnMiLCJkYXRhIiwiY29uc3RydWN0UGxvdEluZm8iLCJlcnIiLCJvbkVycm9yIiwicmVzSnNvbiIsInBpZURhdGEiLCJwaWVzZXJpZXMiLCJwbG90SW5mbyIsImVhY2hQbG90U2V0Iiwib3RoZXJzQXJjIiwibmFtZSIsInZhbHVlIiwiY29sb3IiLCJwaWVPYmoiLCJwaWUiLCJ0b3RhbCIsImFyY3MiLCJhbGxBcmNBcnIiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJmb3JFYWNoIiwiYXJjSW5mbyIsImluZCIsInBpZUFyY0NvdW50IiwicmVmaW5lTmFtZSIsInJlZmluZVN0cmluZyIsInVuaXQiLCJwbG90U2V0IiwiY2hhcnREYXRhIiwic2VsZiIsIm1heFdpZHRoTGVnZW5kIiwiaGFzT3ZlcmZsb3ciLCJncmFwaE9wdGlvbnMiLCJlYWNoUGxvdE5hbWVzIiwidGV4dFdpZHRoIiwiZHVtbXlHIiwic3ZnIiwiYXBwZW5kIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJhdHRyIiwidGV4dCIsImQiLCJlYWNoIiwiaSIsInRoaXNXaWR0aCIsIk1hdGgiLCJyb3VuZCIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsInJlbW92ZSIsImNvbnN0YW50cyIsIkxFR0VORF9NQVhfV0lEVEgiLCJtYXhZTGVuIiwiZmxvb3IiLCJjaGFydEZ1bGxTcGFjZSIsImhlaWdodCIsImZ1bGxZTGVuIiwibGVuZ3RoIiwiTEVHRU5EX1lfU1BBQ0UiLCJkaXZXaWR0aCIsIkxFR0VORF9TSE9XX1dJRFRIIiwibGVnZW5kRGl2Iiwid2lkdGgiLCJsZWdlbmREaXNwbGF5IiwicGllZm9yZWlnbkRpdiIsInN0eWxlIiwibGVnZW5kQmxvY2siLCJsZWdlbmRYRGl2IiwidXBkYXRlIiwiY2hhcnRab25lV2lkdGgiLCJncmFwaFpvbmUiLCJub2RlIiwiZ2V0QkJveCIsImJhc2ljV2lkdGgiLCJtYXJnaW4iLCJsZWZ0IiwicmlnaHQiLCJMRUdFTkRfUklHSFRfQlVGRkVSIiwicGllTGVnZW5kUG9zIiwiUElFX1BPU19MRUdFTkQiLCJsZWdlbmRYUG9zIiwiY2hhcnRXaWR0aCIsInhCdWZmIiwibGVnZW5kWVBvcyIsImhpZGUiLCJzaG93Iiwic2hvd0ZsYWciLCJjbGFzc2VkIiwiQ2hhcnRDb21wb25lbnQiLCJQaWUiLCJjbGFzc05hbWUiLCJkb251dFBlcmNlbnQiLCJwb3NpdGlvblBlcmNlbnRhZ2UiLCJzZXJpZXNPcmRlciIsInBpZVBvc1BlcmNlbnRhZ2UiLCJQSUVfUE9TX0RFRkFVTFQiLCJyYWRpdXMiLCJtaW4iLCJjaGFydEhlaWdodCIsIm9yZGVyIiwiZG9udXRMZW5ndGgiLCJ0b29sdGlwSGVscGVyIiwiYXJjIiwib3V0ZXJSYWRpdXMiLCJQSUVfVE9PTFRJUF9CVUZGRVIiLCJpbm5lclJhZGl1cyIsInBpZVRhZyIsImFyY1pvbmUiLCJQSUVfREFSS19PUEFDSVRZIiwib24iLCJ0eHRFbGUiLCJzZWxlY3QiLCJ0ZXh0UG9zIiwiZWxlbWVudE9mZnNldCIsImhvdmVyIiwidG9wIiwiUElFX0RVTExfT1BBQ0lUWSIsIlBJRV9BUkNfU1RST0tFIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJQSUVfSE9WRVJfQlVGRkVSIiwidCIsImNlbnRyb2lkIiwicGxvdFNlcmllcyIsInBpZUluZm8iLCJTZXJpZXMiLCJCYXNpY1Rvb2x0aXAiLCJpc0Z1bmN0aW9uIiwiZm9ybWF0IiwidG9vbFRpcERpdiIsIngiLCJ5IiwiZGlzcGxheURhdGEiLCJleGNsdWRlVG9vbFRpcERpdiIsInNob3dIaWRlIiwiYm94Iiwicm9vdFBvcyIsInhwb3MiLCJ5cG9zIiwiaHRtbCIsIiR0b29sVGlwRGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGM7OztBQUNuQiwwQkFBYUMsU0FBYixFQUF3QkMsSUFBeEIsRUFBOEI7QUFBQTs7QUFDNUJBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMsSUFBSixFQUFqQjs7QUFFQTtBQUNBLFFBQUksQ0FBQ0YsS0FBS0csVUFBVixFQUFzQjtBQUNwQkgsV0FBS0csVUFBTCxHQUFrQixJQUFJQyxt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QUFiO0FBQ0EsV0FBSzZDLFVBQUwsSUFBbUIsS0FBS0EsVUFBTCxDQUFnQjVDLE9BQWhCLENBQXdCLFdBQXhCLEVBQXFDLENBQUNELFFBQXRDLENBQW5CO0FBQ0Q7Ozs2QkFFUztBQUNSLFdBQUt3RCxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBaUI3RixNQUFqQixFQUFwQjtBQUNBLFdBQUs3RixJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBbkR1Q29JLDhEOztBQUFyQndDLDJFIiwiZmlsZSI6InBpZXNlcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0T2JqZWN0LCBpc09iamVjdH0gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydCBmcm9tICdAL2NoYXJ0cy9DaGFydCdcbmltcG9ydCB7YWRkRGVmYXVsdFBTT3B0aW9uc30gZnJvbSAnQC9oZWxwZXJzJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQC90b29sdGlwL0Jhc2ljVG9vbHRpcCdcbmltcG9ydCBCYXNpY1BTUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQmFzaWNQU1BhcnNlcidcbmltcG9ydCBDaGFydERhdGFQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydERhdGFQYXJzZXInXG5pbXBvcnQgUGllU2VyaWVzIGZyb20gJ0Avc2VyaWVzL1BpZVNlcmllcydcbmltcG9ydCBQaWVTZXJpZXNMZWdlbmQgZnJvbSAnQC9sZWdlbmQvUGllU2VyaWVzTGVnZW5kJ1xuaW1wb3J0IFRpbWVTZXJpZXNMZWdlbmQgZnJvbSAnQC9sZWdlbmQvVGltZVNlcmllc0xlZ2VuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllU2VyaWVzQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBvcHRzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKClcblxuICAgIC8vIENyZWF0ZSB0aGUgZGF0YVBhcnNlciBpcyBub3QgcGFzc2VkXG4gICAgaWYgKCFvcHRzLmRhdGFQYXJzZXIpIHtcbiAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY1BTUGFyc2VyKG9wdHMpXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnREYXRhUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnREYXRhUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydERhdGFQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRQU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICB0aGlzLnNlcmllcyA9IG5ldyBQaWVTZXJpZXMoe1xuICAgICAgICBjaGFydDogdGhpc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnNlcmllcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxlZ2VuZC52aXNpYmxlKSB7XG4gICAgICAvLyBJRiBicm93c2VyIHN1cHBvcnRzIGZvcmVpZ25PYmplY3QgdXNlIHBpZUxlZ2VuZHMgQVBJXG4gICAgICBpZiAoZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5JywgJzEuMScpKSB7XG4gICAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBQaWVTZXJpZXNMZWdlbmQoe1xuICAgICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAgIGxlZ2VuZFByZWZpeDogdGhpcy5vcHRpb25zLmxlZ2VuZC5sZWdlbmRQcmVmaXgsXG4gICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0aW9ucy5sZWdlbmQucG9zaXRpb25cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBUaW1lU2VyaWVzTGVnZW5kKHtcbiAgICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgICBsZWdlbmRQcmVmaXg6IHRoaXMub3B0aW9ucy5sZWdlbmQubGVnZW5kUHJlZml4LFxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMubGVnZW5kLnBvc2l0aW9uXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdQaWVTZXJpZXNDaGFydCBkcmF3JywgdGhpcylcbiAgICBzdXBlci5kcmF3KClcbiAgICB0aGlzLm9wdGlvbnMuYWZ0ZXJEcmF3LmNhbGwodGhpcylcblxuICAgIHRoaXMuY2hhcnRSZXNwb25zaXZlKClcblxuICAgIHRoaXMudGltZURpZmYgPSAobmV3IERhdGUoKVxuICAgICAgLmdldFRpbWUoKSAtIHRoaXMub3B0aW9ucy5zdGFydFRpbWUuZ2V0VGltZSgpKVxuICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlLmNhbGwodGhpcywgdGhpcy50aW1lRGlmZilcbiAgfVxuXG59XG4iLCJpbXBvcnQge3JlZmluZVN0cmluZ30gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydERhdGFQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydERhdGFQYXJzZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljUFNQYXJzZXIgZXh0ZW5kcyBDaGFydERhdGFQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgcGllc2VyaWVzIEpTT04gcGFyc2luZyA6JywgZXJyKVxuICAgICAgdGhpcy5vcHRzLm9uRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgLSBFcnJvciBvbiBwaWVzZXJpZXMgSlNPTiBwYXJzaW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RQbG90SW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBwaWVEYXRhID0gcmVzSnNvbi5waWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0ge31cbiAgICBjb25zdCBvdGhlcnNBcmMgPSB7XG4gICAgICBuYW1lOiAnT3RoZXJzJyxcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgY29sb3I6ICcjMzI0ZmZmJ1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBwaWVTZXQgZm9yIGVhY2ggcGllIGNoYXJ0cyBhbmQgYXJjSW5mbyB3aGljaCBjb250YWlucyBlYWNoIHBpZSBhcmNzIHRvIGJlIGRyYXduXG4gICAgY29uc3QgcGllT2JqID0gcGxvdEluZm8ucGllXG4gICAgcGllT2JqLnRvdGFsID0gMFxuICAgIGNvbnN0IGFyY3MgPSBbXVxuXG4gICAgLy8gRmluZCB0b3RhbCB2YWx1ZSBmb3IgZW50aXJlIHBpZSBjaGFydFxuICAgIGNvbnN0IGFsbEFyY0FyciA9IHBpZURhdGEudmFsdWVzXG5cbiAgICBhbGxBcmNBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIChiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChhcmNJbmZvLCBpbmQpIHtcbiAgICAgIGlmIChwaWVPYmoucGllQXJjQ291bnQgJiYgKGluZCArIDEpID49IHBpZU9iai5waWVBcmNDb3VudCkge1xuICAgICAgICAvLyBBZGQgdG8gb3RoZXJzIGFyY1xuICAgICAgICBvdGhlcnNBcmMudmFsdWUgKz0gYXJjSW5mby52YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhhcmNJbmZvLm5hbWUpXG4gICAgICAgIC8vIGFyY0luZm8ubmFtZSA9IHJlZmluZU5hbWVcbiAgICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7fVxuICAgICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS5uYW1lID0gYXJjSW5mby5uYW1lXG4gICAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLmNvbG9yID0gYXJjSW5mby5jb2xvclxuICAgICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS52YWx1ZSA9IGFyY0luZm8udmFsdWVcbiAgICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0udmlzaWJsZSA9IHRydWVcbiAgICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0udW5pdCA9IHBpZU9iai51bml0XG4gICAgICAgIGFyY3MucHVzaChhcmNJbmZvKVxuICAgICAgfVxuICAgICAgcGllT2JqLnRvdGFsICs9IGFyY0luZm8udmFsdWVcbiAgICAgXG4gICAgfSlcbiAgICAvLyBBZGQgb3RoZXJzIHRvIGFyY1xuICAgIGlmIChvdGhlcnNBcmMudmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlZmluZU5hbWUgPSByZWZpbmVTdHJpbmcob3RoZXJzQXJjLm5hbWUpXG4gICAgICAvLyBvdGhlcnNBcmMubmFtZSA9IHJlZmluZU5hbWVcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdID0ge31cbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLm5hbWUgPSBvdGhlcnNBcmMubmFtZVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0uY29sb3IgPSBvdGhlcnNBcmMuY29sb3JcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLnZhbHVlID0gb3RoZXJzQXJjLnZhbHVlXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS52aXNpYmxlID0gdHJ1ZVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0udW5pdCA9IHBpZU9iai51bml0XG4gICAgICBhcmNzLnB1c2gob3RoZXJzQXJjKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwbG90U2V0OiBlYWNoUGxvdFNldCxcbiAgICAgIHNlcmllczoge1xuICAgICAgICBwaWU6IHBpZU9ialxuICAgICAgfSxcbiAgICAgIGNoYXJ0RGF0YToge1xuICAgICAgICBuYW1lOiBwaWVPYmoubmFtZSxcbiAgICAgICAgYXJjc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllU2VyaWVzTGVnZW5kIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgPSAwXG4gICAgdGhpcy5vcHRzLmhhc092ZXJmbG93ID0gZmFsc2VcbiAgICBjb25zdCBncmFwaE9wdGlvbnMgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9uc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gZ3JhcGhPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBlYWNoUGxvdE5hbWVzID0gT2JqZWN0LmtleXMoZWFjaFBsb3RTZXQpXG4gICAgY29uc3QgdGV4dFdpZHRoID0gW11cbiAgICBjb25zdCBkdW1teUcgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgLy8gQWRkIGFsbCBuYW1lIG9uIERPTSB0byBjYWxjdWxhdGUgaG93IG11Y2ggc3BhY2UgaXMgbmVlZGVkIGZvciBldmVyeSBuYW1lc1xuICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgLmRhdGEoZWFjaFBsb3ROYW1lcylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtbGFiZWwnKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIChzZWxmLm9wdHMubGVnZW5kUHJlZml4ICsgKGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0ubmFtZSA6ICcnKSlcbiAgICAgIH0pXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAvLyBGaW5kIHNpemUgcmVxdWlyZWQgZm9yIGVhY2ggbGVnZW5kIG9uIHNjcmVlblxuICAgICAgICBjb25zdCB0aGlzV2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkpXG4gICAgICAgIGlmICh0aGlzV2lkdGggPiBzZWxmLm9wdHMubWF4V2lkdGhMZWdlbmQpIHtcbiAgICAgICAgICBzZWxmLm9wdHMubWF4V2lkdGhMZWdlbmQgPSB0aGlzV2lkdGhcbiAgICAgICAgfVxuICAgICAgICB0ZXh0V2lkdGgucHVzaCh0aGlzV2lkdGgpXG4gICAgICB9KVxuXG4gICAgZHVtbXlHLnJlbW92ZSgpXG5cbiAgICBpZiAodGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID4gY29uc3RhbnRzLkxFR0VORF9NQVhfV0lEVEgpIHtcbiAgICAgIHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCA9IGNvbnN0YW50cy5MRUdFTkRfTUFYX1dJRFRIXG4gICAgfVxuXG4gIH1cblxuICBkcmF3ICgpIHtcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZ3JhcGhPcHRpb25zID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGdyYXBoT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgZWFjaFBsb3ROYW1lcyA9IE9iamVjdC5rZXlzKGVhY2hQbG90U2V0KVxuICAgIGNvbnN0IG1heFlMZW4gPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgKiA5MCAvIDEwMClcbiAgICBsZXQgZnVsbFlMZW4gPSBlYWNoUGxvdE5hbWVzLmxlbmd0aCAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgIGZ1bGxZTGVuID0gZnVsbFlMZW4gPiBtYXhZTGVuID8gbWF4WUxlbiA6IGZ1bGxZTGVuXG4gICAgY29uc3QgZGl2V2lkdGggPSB0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgKyBjb25zdGFudHMuTEVHRU5EX1NIT1dfV0lEVEhcblxuICAgIHRoaXMub3B0cy5sZWdlbmREaXYgPSB7XG4gICAgICB3aWR0aDogZGl2V2lkdGgsXG4gICAgICBoZWlnaHQ6IGZ1bGxZTGVuXG4gICAgfVxuXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1ncm91cCcpXG5cbiAgICBjb25zdCBwaWVmb3JlaWduRGl2ID0gdGhpcy5sZWdlbmREaXNwbGF5XG4gICAgICAuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGRpdldpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bGxZTGVuKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1yaWdodCcpXG4gICAgICAuYXBwZW5kKCd4aHRtbDpkaXYnKVxuICAgICAgLmF0dHIoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKVxuICAgICAgLnN0eWxlKCdoZWlnaHQnLCAnMTAwJScpXG4gICAgICAuc3R5bGUoJ3BhZGRpbmcnLCAnNXB4IDBweCcpXG5cbiAgICBpZiAoZnVsbFlMZW4gPT09IG1heFlMZW4pIHtcbiAgICAgIC8vIEFkZCBvdmVyZmxvdyB0byBjaGFydFxuICAgICAgcGllZm9yZWlnbkRpdlxuICAgICAgICAuc3R5bGUoJ292ZXJmbG93JywgJ2F1dG8nKVxuICAgICAgdGhpcy5vcHRzLmhhc092ZXJmbG93ID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMubGVnZW5kQmxvY2sgPSBwaWVmb3JlaWduRGl2XG4gICAgICAuc2VsZWN0QWxsKCdkaXYnKVxuICAgICAgLmRhdGEoZWFjaFBsb3ROYW1lcylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWxlZ2VuZC1uYW1lJylcblxuXG4gICAgdGhpcy5sZWdlbmRCbG9jay5hcHBlbmQoJ3NwYW4nKVxuICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGVhY2hQbG90U2V0W2RdLmNvbG9yXG4gICAgICB9KVxuXG4gICAgdGhpcy5sZWdlbmRCbG9jay5hcHBlbmQoJ2xhYmVsJylcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCAoZGl2V2lkdGggLSA0MCkgKyAncHgnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTFweCcpXG4gICAgICAuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJzYwMCcpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gKHNlbGYub3B0cy5sZWdlbmRQcmVmaXggKyBlYWNoUGxvdFNldFtkXS5uYW1lKVxuICAgICAgfSlcblxuICAgIHRoaXMubGVnZW5kWERpdiA9IHBpZWZvcmVpZ25EaXZcbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgLy8gRGlzcGxheSBpbiB2ZXJ0aWNhbCBvcmRlclxuICAgIGNvbnN0IGNoYXJ0Wm9uZVdpZHRoID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5ub2RlKCkuZ2V0QkJveCgpLndpZHRoXG4gICAgY29uc3QgYmFzaWNXaWR0aCA9IHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ubGVmdCArIHRoaXMub3B0cy5jaGFydC5tYXJnaW4ucmlnaHQgKyBjb25zdGFudHMuTEVHRU5EX1JJR0hUX0JVRkZFUlxuXG4gICAgbGV0IHBpZUxlZ2VuZFBvcyA9IGNvbnN0YW50cy5QSUVfUE9TX0xFR0VORFxuICAgIGlmICh0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgPT09IGNvbnN0YW50cy5MRUdFTkRfTUFYX1dJRFRIKSB7XG4gICAgICBwaWVMZWdlbmRQb3MgPSBjb25zdGFudHMuUElFX1BPU19MRUdFTkQgLSA1XG4gICAgfVxuXG4gICAgbGV0IGxlZ2VuZFhQb3MgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICogcGllTGVnZW5kUG9zIC8gMTAwKVxuICAgIGxldCB4QnVmZiA9IHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC0gbGVnZW5kWFBvc1xuICAgIHhCdWZmID0gTWF0aC5mbG9vcigoeEJ1ZmYgLSB0aGlzLm9wdHMubGVnZW5kRGl2LndpZHRoKSAvIDIpXG4gICAgbGVnZW5kWFBvcyArPSB4QnVmZlxuXG4gICAgY29uc3QgbGVnZW5kWVBvcyA9IE1hdGguZmxvb3IoKHRoaXMub3B0cy5jaGFydC5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgLSB0aGlzLm9wdHMubGVnZW5kRGl2LmhlaWdodCkgLyAyKVxuXG4gICAgaWYgKCF0aGlzLm9wdHMuaGFzT3ZlcmZsb3cpIHtcbiAgICAgIHRoaXMubGVnZW5kRGlzcGxheVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgbGVnZW5kWFBvcyArICcsJyArIGxlZ2VuZFlQb3MgKyAnKScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVnZW5kWERpdlxuICAgICAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJylcbiAgICAgICAgLnN0eWxlKCd0b3AnLCBsZWdlbmRZUG9zICsgJ3B4JylcbiAgICAgICAgLnN0eWxlKCdsZWZ0JywgbGVnZW5kWFBvcyArICdweCcpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIDwgKGJhc2ljV2lkdGggKyBjaGFydFpvbmVXaWR0aCkpIHtcbiAgICAgIC8vIEhpZGUgbGVnZW5kIGRpc3BsYXkgZm9yIHBpZWxlZ2VuZHNcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuXG4gIH1cblxuICBzaG93SGlkZSAoc2hvd0ZsYWcpIHtcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWdcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ICYmIHRoaXMubGVnZW5kRGlzcGxheS5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMubGVnZW5kQmxvY2sgJiYgdGhpcy5sZWdlbmRCbG9jay5yZW1vdmUoKVxuICAgIHRoaXMubGVnZW5kRGlzcGxheSAmJiB0aGlzLmxlZ2VuZERpc3BsYXkucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtwaWUsIGFyYywgaW50ZXJwb2xhdGUsIHNlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IHtlbGVtZW50T2Zmc2V0fSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBpZURhdGE6IG51bGwsXG4gICAgICBkb251dFBlcmNlbnQ6IDEwMCxcbiAgICAgIHBvc2l0aW9uUGVyY2VudGFnZTogbnVsbCxcbiAgICAgIHNlcmllc09yZGVyOiB0cnVlLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLm9wdHMucGllUG9zUGVyY2VudGFnZSA9IHRoaXMub3B0cy5wb3NpdGlvblBlcmNlbnRhZ2UgfHwgKGNvbnN0YW50cy5QSUVfUE9TX0RFRkFVTFQgLyAxMDApXG4gICAgdGhpcy5vcHRzLnJhZGl1cyA9IE1hdGguZmxvb3IoTWF0aC5taW4oKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICogdGhpcy5vcHRzLnBpZVBvc1BlcmNlbnRhZ2UpLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpIC8gMilcblxuICAgIC8vIFggUG9zaXRpb24gb2YgcGllIGdyYXBoIG9uIHRoZSBjaGFydFxuICAgIHRoaXMucGllID0gcGllKClcblxuICAgIGlmICh0aGlzLm9wdHMuc2VyaWVzT3JkZXIpIHtcbiAgICAgIHRoaXMucGllXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIChiLm9yZGVyIC0gYS5vcmRlcikgLy8gU29ydCBiYXNlZCBvbiBlYWNoIHNlcmllcyBvcmRlclxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucGllXG4gICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQudmFsdWUgLy8gcHJvdmlkZSBpbmRleCBvZiB0aGlzIHNlcmllcyBpbiBkYXRhIEFyclxuICAgICAgfSlcblxuXG4gICAgaWYgKHRoaXMub3B0cy5kb251dFBlcmNlbnQgPiAxMDAgfHwgdGhpcy5vcHRzLmRvbnV0UGVyY2VudCA8IDApIHtcbiAgICAgIHRoaXMub3B0cy5kb251dFBlcmNlbnQgPSAxMDBcbiAgICB9XG5cbiAgICB0aGlzLm9wdHMuZG9udXRMZW5ndGggPSBNYXRoLmZsb29yKHRoaXMub3B0cy5kb251dFBlcmNlbnQgKiB0aGlzLm9wdHMucmFkaXVzIC8gMTAwKVxuXG4gICAgdGhpcy5vcHRzLnRvb2x0aXBIZWxwZXIgPSBhcmMoKVxuICAgICAgLm91dGVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMgKyAyICogY29uc3RhbnRzLlBJRV9UT09MVElQX0JVRkZFUilcbiAgICAgIC5pbm5lclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzKVxuXG4gICAgdGhpcy5hcmMgPSBhcmMoKVxuICAgIC8vIC5vdXRlclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzKVxuICAgICAgLmlubmVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMgLSB0aGlzLm9wdHMuZG9udXRMZW5ndGgpXG4gIH1cblxuICBkcmF3ICgpIHtcblxuICAgIGNvbnN0IG91dGVyUmFkaXVzID0gdGhpcy5vcHRzLnJhZGl1c1xuICAgIGNvbnN0IGFyYyA9IHRoaXMuYXJjXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLnBpZVRhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1waWUtcGxvdCB2Yy1waWUtJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHRoaXMub3B0cy5waWVQb3NQZXJjZW50YWdlIC8gMikgKyAnLCcgKyBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpICsgJyknKVxuXG4gICAgdGhpcy5hcmNab25lID0gdGhpcy5waWVUYWcuc2VsZWN0QWxsKCcudmMtcGllLWFyYycpXG4gICAgICAuZGF0YSh0aGlzLnBpZSh0aGlzLm9wdHMucGllRGF0YS5hcmNzKSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtcGllLWFyYycpXG5cbiAgICB0aGlzLmFyY1pvbmUuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGQub3V0ZXJSYWRpdXMgPSBvdXRlclJhZGl1c1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgdGhpcy5hcmMpXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuY29sb3JcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCBjb25zdGFudHMuUElFX0RBUktfT1BBQ0lUWSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMClcbiAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGluZCkge1xuICAgICAgICAvLyB0b29sdGlwIGZlYXR1cmVcbiAgICAgICAgY29uc3QgdHh0RWxlID0gc2VsZi5hcmNab25lLnNlbGVjdChgLnZjLXRvb2wtdGV4dF8ke2luZH1gKVxuICAgICAgICBjb25zdCB0ZXh0UG9zID0gZWxlbWVudE9mZnNldCh0eHRFbGUpIC8vIEZpbmQgcG9zaXRpb24gb2YgQXJjIHJlc3BlY3RpdmUgdG9vbHRpcEhlbHBlclxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5ob3Zlcih0ZXh0UG9zLmxlZnQsIHRleHRQb3MudG9wLCBkKVxuICAgICAgICAvLyBEdWxsIGFsbCBvdGhlciBBcmNzXG4gICAgICAgIHNlbGYuYXJjWm9uZS5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGNvbnN0YW50cy5QSUVfRFVMTF9PUEFDSVRZKVxuICAgICAgICAvLyBQcm92aWRlIG5ldyByYWRpdXMgYW5kIHN0cm9rZS13aWR0aFxuICAgICAgICBzZWxlY3QodGhpcylcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjb25zdGFudHMuUElFX0RBUktfT1BBQ0lUWSlcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGNvbnN0YW50cy5QSUVfQVJDX1NUUk9LRSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpLmRlbGF5KDEwKS5hdHRyVHdlZW4oJ2QnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IGludGVycG9sYXRlKGQub3V0ZXJSYWRpdXMsIG91dGVyUmFkaXVzICsgY29uc3RhbnRzLlBJRV9IT1ZFUl9CVUZGRVIpXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgZC5vdXRlclJhZGl1cyA9IGkodClcbiAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkKSB7IC8vIEhpZGUgdG9vbHRpcFxuICAgICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5oaWRlKClcbiAgICAgICAgLy8gUHJvdmlkZSBkYXJrIG9wYWNpdHkgdG8gYWxsIGFyY3NcbiAgICAgICAgc2VsZi5hcmNab25lLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgY29uc3RhbnRzLlBJRV9EQVJLX09QQUNJVFkpXG4gICAgICAgIC8vIFJldmVydCBiYWNrIHRvIGl0cyBsb2FkZWQgcmFkaXVzXG4gICAgICAgIHNlbGVjdCh0aGlzKVxuICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMClcbiAgICAgICAgICAudHJhbnNpdGlvbigpLmRlbGF5KDE1MCkuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBpbnRlcnBvbGF0ZShkLm91dGVyUmFkaXVzLCBvdXRlclJhZGl1cylcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICBkLm91dGVyUmFkaXVzID0gaSh0KVxuICAgICAgICAgICAgICByZXR1cm4gYXJjKGQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAvLyBBZGQgdG9vbHRpcC1oZWxwZXIgZm9yIGVhY2ggYXJjIG91dHNpZGUgcGllIGFyZWFcbiAgICB0aGlzLmFyY1pvbmUuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uIChkLCBpbmQpIHtcbiAgICAgICAgcmV0dXJuIGB2Yy10b29sLXRleHRfJHtpbmR9YFxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgc2VsZi5vcHRzLnRvb2x0aXBIZWxwZXIuY2VudHJvaWQoZCkgKyAnKSdcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAnVCdcbiAgICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5vcHRzLnJhZGl1cyA9IE1hdGguZmxvb3IoTWF0aC5taW4oKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICogdGhpcy5vcHRzLnBpZVBvc1BlcmNlbnRhZ2UpLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpIC8gMilcbiAgICB0aGlzLnBpZVRhZy5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICogdGhpcy5vcHRzLnBpZVBvc1BlcmNlbnRhZ2UgLyAyKSArICcsJyArIE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0IC8gMikgKyAnKScpXG4gICAgdGhpcy5vcHRzLmRvbnV0TGVuZ3RoID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuZG9udXRQZXJjZW50ICogdGhpcy5vcHRzLnJhZGl1cyAvIDEwMClcblxuICAgIHRoaXMuYXJjXG4gICAgICAub3V0ZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cylcbiAgICAgIC5pbm5lclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzIC0gdGhpcy5vcHRzLmRvbnV0TGVuZ3RoKVxuXG4gICAgdGhpcy5vcHRzLnRvb2x0aXBIZWxwZXJcbiAgICAgIC5vdXRlclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzICsgMiAqIGNvbnN0YW50cy5QSUVfVE9PTFRJUF9CVUZGRVIpXG4gICAgICAuaW5uZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cylcblxuICAgIHRoaXMuYXJjWm9uZS5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdkJywgdGhpcy5hcmMpXG4gICAgdGhpcy5hcmNab25lLnNlbGVjdCgndGV4dCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHNlbGYub3B0cy50b29sdGlwSGVscGVyLmNlbnRyb2lkKGQpICsgJyknXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gJ1QnXG4gICAgICB9KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5waWVUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5hcmNab25lICYmIHRoaXMuYXJjWm9uZS5yZW1vdmUoKVxuICAgIHRoaXMucGllVGFnICYmIHRoaXMucGllVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzLnRvb2x0aXBIZWxwZXIgPSBudWxsXG4gICAgdGhpcy5hcmMgPSBudWxsXG4gICAgdGhpcy5waWUgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IFNlcmllcyBmcm9tICdAL3Nlcmllcy9TZXJpZXMnXG5pbXBvcnQgUGllIGZyb20gJ0Avc2VyaWVzL1BpZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllU2VyaWVzIGV4dGVuZHMgU2VyaWVzIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMucGxvdFNlcmllcyA9IFtdXG4gICAgY29uc3QgZGF0YSA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLmNoYXJ0RGF0YVxuICAgIGNvbnN0IHBpZUluZm8gPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5zZXJpZXMucGllXG5cbiAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgUGllKHtcbiAgICAgIGNoYXJ0OiB0aGlzLm9wdHMuY2hhcnQsXG4gICAgICBjbGFzc05hbWU6IHBpZUluZm8uY2xhc3NOYW1lIHx8IHBpZUluZm8ubmFtZSxcbiAgICAgIHBpZURhdGE6IGRhdGEsXG4gICAgICBkb251dFBlcmNlbnQ6IHBpZUluZm8uZG9udXRQZXJjZW50IHx8IDEwMCxcbiAgICAgIHZpc2libGU6IHBpZUluZm8udmlzaWJsZVxuICAgIH0pKVxuICB9XG5cbn0iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge2VsZW1lbnRPZmZzZXQsIGlzRnVuY3Rpb259IGZyb20gJ0AvdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljVG9vbHRpcCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSwgb3B0cylcblxuICAgIC8vIFByb3ZpZGUgYmFzaWMgZm9ybWF0dGVyIHRvIGRpc3BsYXkgaG92ZXIgZGF0YVxuICAgIGlmICghaXNGdW5jdGlvbih0aGlzLm9wdHMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5vcHRzLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBgPHNwYW4+IFRvb2xUaXAgVGV4dCA6IDwvc3Bhbj48YnIvPjxzcGFuPiR7SlNPTi5zdHJpbmdpZnkoZCl9PC9zcGFuPmBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnRvb2xUaXBEaXYgPSB0aGlzLm9wdHMgJiYgdGhpcy5vcHRzLmNoYXJ0LmNvbnRhaW5lclxuICAgICAgLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy10b29sdGlwLWRpc3BsYXkgJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gIH1cblxuICBob3ZlciAoeCwgeSwgZGlzcGxheURhdGEsIGV4Y2x1ZGVUb29sVGlwRGl2KSB7XG4gICAgdGhpcy5zaG93SGlkZSh0cnVlKVxuICAgIC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgc2VyaWVzIC0tIGJhciAvIHBpZVxuICAgIGNvbnN0IGJveCA9IGVsZW1lbnRPZmZzZXQodGhpcy50b29sVGlwRGl2KVxuICAgIGNvbnN0IHJvb3RQb3MgPSBlbGVtZW50T2Zmc2V0KHRoaXMub3B0cy5jaGFydC5jb250YWluZXIpXG4gICAgbGV0IHhwb3MgPSBNYXRoLnJvdW5kKHggLSByb290UG9zLmxlZnQpXG4gICAgbGV0IHlwb3MgPSBNYXRoLnJvdW5kKHkgLSByb290UG9zLnRvcClcblxuICAgIGlmICghZXhjbHVkZVRvb2xUaXBEaXYpIHtcbiAgICAgIC8vIENvbnNpZGVyIHRvb2xUaXAgb2Zmc2V0IGZvciBwb3NpdGlvblxuICAgICAgeHBvcyA9IE1hdGgucm91bmQoeHBvcyAtIChib3gud2lkdGggLyAyKSlcbiAgICAgIHlwb3MgPSBNYXRoLnJvdW5kKHlwb3MgLSAoYm94LmhlaWdodCAvIDIpKVxuICAgIH1cblxuXG4gICAgdGhpcy50b29sVGlwRGl2XG4gICAgICAuc3R5bGUoJ2xlZnQnLCB4cG9zICsgJ3B4JylcbiAgICAgIC5zdHlsZSgndG9wJywgeXBvcyArICdweCcpXG4gICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgIC5odG1sKHRoaXMub3B0cy5mb3JtYXQuY2FsbCh0aGlzLm9wdHMuY2hhcnQsIGRpc3BsYXlEYXRhLmRhdGEpKSAvLyBVc2VkIGZvcm1hdC5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy50b29sVGlwRGl2ICYmIHRoaXMudG9vbFRpcERpdi5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuJHRvb2xUaXBEaXYgJiYgdGhpcy4kdG9vbFRpcERpdi5yZW1vdmUoKVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==