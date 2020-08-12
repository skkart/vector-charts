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
/* harmony import */ var _data_parser_BasicSBParser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/data-parser/BasicSBParser */ "./data-parser/BasicSBParser.js");




















var PieSeriesChart = function (_Chart) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(PieSeriesChart, _Chart);

  function PieSeriesChart(container, opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, PieSeriesChart);

    opts.startTime = new Date();

    // Create the dataParser is not passed
    if (!opts.dataParser) {
      if (opts.series.sunburst) {
        opts.dataParser = new _data_parser_BasicSBParser__WEBPACK_IMPORTED_MODULE_18__["default"](opts);
      } else {
        opts.dataParser = new _data_parser_BasicPSParser__WEBPACK_IMPORTED_MODULE_13__["default"](opts);
      }
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

/***/ "./data-parser/BasicSBParser.js":
/*!**************************************!*\
  !*** ./data-parser/BasicSBParser.js ***!
  \**************************************/
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
/* harmony import */ var _data_parser_ChartDataParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data-parser/ChartDataParser */ "./data-parser/ChartDataParser.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/constants */ "./constants.js");












var BasicSBParser = function (_ChartDataParser) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BasicSBParser, _ChartDataParser);

  function BasicSBParser(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BasicSBParser);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (BasicSBParser.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(BasicSBParser)).call(this, opts));

    _this.opts = opts;
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BasicSBParser, [{
    key: 'dataExecutor',
    value: function dataExecutor() {
      // Order in which the DataProcessor APIs needs to be executed
      try {

        this.dataOptions = {};
        this.opts.data && (this.dataOptions.data = this.opts.data);
        this.opts.series && (this.dataOptions.series = this.opts.series);

        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(this.dataOptions, this.constructPlotInfo());

        return this.dataOptions;
      } catch (err) {
        console.log('Error encountered while sunburst JSON parsing :', err);
        this.opts.onError(err);
        throw new Error('Invalid JSON received - Error on sunburst JSON parsing');
      }
    }
  }, {
    key: 'constructPlotInfo',
    value: function constructPlotInfo() {

      // take the root hierarchy and form the sum based on size/value
      var jsonData = this.opts.data;
      if (babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(jsonData).length) {
        var root = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["hierarchy"])(jsonData);
        var partitionData = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["partition"])();

        var dataParserApproach = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getObject"])(this.opts, 'series.sunburst.dataApproach', _constants__WEBPACK_IMPORTED_MODULE_10__["default"].DATA_PARSE_DEFAULT_TYPE);
        var valueModel = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getObject"])(this.opts, 'series.sunburst.dataValueAttr', 'value');

        // Check if it is top to bottom or bottom to top approach
        if (dataParserApproach === _constants__WEBPACK_IMPORTED_MODULE_10__["default"].DATA_PARSE_DEFAULT_TYPE) {
          root.sum(function (d) {
            return parseFloat(d.data[valueModel]);
          });
        } else {
          root.each(function (d) {
            // for first depth attach the value to the main object after hirarchy
            // parse data
            var eachObjValue = parseFloat(d.data[valueModel]);
            if (d.depth === 0) {
              d.value = eachObjValue; // calculated based on parent value is  assigned to value key
            }
            var leafSum = 0;
            if (d.children) {
              d.children.forEach(function (chData) {
                leafSum += parseFloat(chData.data[valueModel]) || 0;
              });
            }
            d.leafSum = leafSum;
            // Calculate child nodes value by formula (parentValue/ sum of all leafs value attached on parent) * current value
            if (d.parent) {
              d.value = d.parent.leafSum ? d.parent.value / d.parent.leafSum * eachObjValue : 0; // EX: in ex data 10/7 * 3 for bangalur
            }
          });
        }
        partitionData(root);
        return {
          plotSet: [],
          chartData: root
        };
      } else {
        throw new Error('Invalid JSON received - Error on sunburst JSON parsing');
      }
    }
  }]);

  return BasicSBParser;
}(_data_parser_ChartDataParser__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicSBParser);

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
/* harmony import */ var _series_SunBurst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/series/SunBurst */ "./series/SunBurst.js");








var PieSeries = function (_Series) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PieSeries, _Series);

  function PieSeries(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PieSeries);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (PieSeries.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(PieSeries)).call(this));

    _this.opts = opts;
    _this.plotSeries = [];
    var data = _this.opts.chart.options.chartData;
    var pieInfo = _this.opts.chart.options.series.pie;
    var sunburstInfo = _this.opts.chart.options.series.sunburst;

    // change base don series given
    if (pieInfo) {
      _this.plotSeries.push(new _series_Pie__WEBPACK_IMPORTED_MODULE_5__["default"]({
        chart: _this.opts.chart,
        className: pieInfo.className || pieInfo.name,
        pieData: data,
        donutPercent: pieInfo.donutPercent || 100,
        visible: pieInfo.visible
      }));
    } else if (sunburstInfo) {
      _this.plotSeries.push(new _series_SunBurst__WEBPACK_IMPORTED_MODULE_6__["default"]({
        chart: _this.opts.chart,
        className: sunburstInfo.className || sunburstInfo.name,
        sunBurstData: data,
        events: _this.opts.chart.options.series.events || {},
        visible: sunburstInfo.visible
      }));
    }

    return _this;
  }

  return PieSeries;
}(_series_Series__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PieSeries);

/***/ }),

/***/ "./series/SunBurst.js":
/*!****************************!*\
  !*** ./series/SunBurst.js ***!
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











var SunBurst = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SunBurst, _ChartComponent);

  function SunBurst(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SunBurst);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (SunBurst.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(SunBurst)).call(this));

    _this.opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: '',
      sunBurstData: null,
      visible: true,
      events: {}
    }, opts);
    _this.maxRadius = Math.floor(Math.min(_this.opts.chart.chartWidth, _this.opts.chart.chartHeight) / 2);
    _this.x = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["scaleLinear"])().range([0, 2 * Math.PI]).clamp(true); // scale the data upto 360 degree from 0 and clamp true means not exceed the range

    _this.y = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["scaleSqrt"])().range([_this.maxRadius * 0.1, _this.maxRadius]); // circle is scaled as area in sqrt and range is max radius * .1 to max Radius

    var colorArray = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(_this.opts.chart.options, 'series.sunburst.color') || [];
    var colorSchema = colorArray.length ? colorArray : _d3Importer__WEBPACK_IMPORTED_MODULE_8__["schemeCategory10"];

    _this.color = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["scaleOrdinal"])(colorSchema); // Give different color for each data d3 inbuilt schema

    /*
        create the arc for each data object
        X(d.x0) start angle calculated by d3 after partition  and also scaled in that range
        X(d.x1) end point angle calculated
        this is same for d.y0 and d.y1 calculated based on data
    */
    _this.arcs = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["arc"])().startAngle(function (d) {
      return _this.x(d.x0);
    }).endAngle(function (d) {
      return _this.x(d.x1);
    }).innerRadius(function (d) {
      return Math.max(0, _this.y(d.y0));
    }).outerRadius(function (d) {
      return Math.max(0, _this.y(d.y1));
    });

    /*
        To  Format the text and show the text based on arc position
      */
    _this.middleArcLine = function (d) {
      var halfPi = Math.PI / 2;
      var angles = [_this.x(d.x0) - halfPi, _this.x(d.x1) - halfPi];
      var r = Math.max(0, (_this.y(d.y0) + _this.y(d.y1)) / 2);

      var middleAngle = (angles[1] + angles[0]) / 2;
      var invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text
      if (invertDirection) {
        angles.reverse();
      }

      var paths = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["path"])();

      paths.arc(0, 0, r, angles[0], angles[1], invertDirection);

      return paths.toString();
    };

    // To find if the text is fits inside the arc
    _this.textFits = function (d) {
      var CHAR_SPACE = 8; // each character space

      var deltaAngle = _this.x(d.x1) - _this.x(d.x0); // angle of arc that can be treated as theta
      var r = Math.max(0, (_this.y(d.y0) + _this.y(d.y1)) / 2); // radius from center of circle to arc drown
      var perimeter = r * deltaAngle; // perimeter of arc is r* theta
      // If name exceeds the arc perimeter dont show the name
      return d.data.name.length * CHAR_SPACE < perimeter;
    };

    /*
    Append the svg  with view box attribute and on click focus for zoom control and to scale
     */
    // const clipElement = this.opts.chart.container.select('svg clipPath')
    _this.opts.chart.svg.attr('viewBox', -_this.opts.chart.chartWidth / 2 + ' ' + -_this.opts.chart.chartHeight / 2 + ' \n      ' + _this.opts.chart.chartWidth + ' ' + _this.opts.chart.chartHeight) // Adding view box for zoom control
    .on('click', function () {
      _this.focusOn();
      var fn = _this.opts.events.click;
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(fn)) {
        fn.call(_this.opts.chart, null, null);
      }
    }); // Reset zoom on canvas click

    _this.sunTag = _this.opts.chart.graphZone.append('g').attr('class', 'vc-sunburst-plot');
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SunBurst, [{
    key: 'draw',
    value: function draw() {
      var _this2 = this;

      var self = this;
      console.log('sunburst draw has been called');
      // take the root hierarchy and form the sum based on size
      var root = this.opts.sunBurstData;
      var defaultDataParserApproach = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts.chart.options, 'series.sunburst.dataApproach');
      var valueModel = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(this.opts.chart.options, 'series.sunburst.dataValueAttr');

      // Calculate the x and y for the data
      var slice = this.sunTag.selectAll('g.vc-slice').data(root.descendants());

      // Data need to be removed same as enter this is used to exit the data
      slice.exit().remove();

      /* After click and removed the adding new data with <g> container
      stop all other event on click
      */
      var newSlice = slice.enter().append('g').attr('class', 'vc-slice').style('cursor', 'pointer').on('click', function (d, i, nodes) {
        _d3Importer__WEBPACK_IMPORTED_MODULE_8__["d3Event"].stopPropagation();
        _this2.focusOn(d);
        var fn = _this2.opts.events.click;
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(fn)) {
          fn.call(_this2.opts.chart, d.data[valueModel], d);
        }
      });
      // Attach the unique class names for any other operation if found in the data
      newSlice.each(function (d, i, elementArray) {
        var elm = elementArray[i];
        elm.classList.add(d.data && d.data.uniqueId ? d.data.uniqueId : '');
      });
      /*
        For Tool tip to show
       */
      newSlice.on('mouseover', function (d, ind, nodes) {

        var textElem = newSlice.select('text.vc-sunburst-text' + ind); // Actual container <g> element whole area
        // If the text is not visible take the path element to show the tooltip
        if (textElem.attr('display') === 'none') {
          textElem = newSlice.select('path.vc-sunburst-text' + ind);
        }
        var textPos = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["elementOffset"])(textElem); // taking the area of hidden-arc to get position
        var pathElement = nodes[ind].childNodes[0]; // To get the color of path element main-arc get the color of path element main-arc
        var color = pathElement && pathElement.style.fill;
        var toolTipValue = defaultDataParserApproach === _constants__WEBPACK_IMPORTED_MODULE_9__["default"].DATA_PARSE_DEFAULT_TYPE ? d.value : d.data[valueModel];
        var dataObj = {
          data: {
            name: d.data && d.data.name,
            value: toolTipValue,
            color: color
          }
        };
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(textPos.left, textPos.top, dataObj);
      }).on('mouseout', function (d) {
        // Hide tooltip
        self.opts.chart.tooltip && self.opts.chart.tooltip.hide();
      });

      // Append <path> tag under container and fill different colors
      newSlice.append('path').attr('class', 'vc-main-arc').style('stroke', '#fff').style('stroke-width', '1px').style('fill', function (d) {
        var parentObj = null;
        var depthSize = d.depth - 1; // for first depth
        var dataName = d.data.name;
        // Go up to depth and get the parent data
        for (var k = 0; k < depthSize; k++) {
          parentObj = parentObj ? parentObj.parent : d.parent;
          dataName = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getObject"])(parentObj, 'data.name');
        }
        // console.log(dataName)
        return _this2.color(dataName);
      }).attr('d', this.arcs);

      // //creating the hidden arc line
      newSlice.append('path').attr('class', function (d, i) {
        return 'vc-hidden-arc vc-sunburst-text' + i;
      }) // Used for tooltip when text is hidden
      .style('fill', 'none').attr('id', function (_, i) {
        return 'vc-hiddenArc' + i;
      }).attr('d', this.middleArcLine);

      // append the text
      var text = newSlice.append('text').attr('class', function (d, i) {
        return 'vc-sunburst-text' + i;
      }) // used for tooltip
      .style('pointer-events', 'none').style('dominant-baseline', 'middle').style('text-anchor', 'middle').style('font-size', '.8rem').attr('display', function (d) {
        return _this2.textFits(d) ? null : 'none';
      });

      // Add white contour
      text.append('textPath').text(function (d) {
        return d.data.name;
      });

      // Append the textPath and show the formatted Text according with position of arc
      text.append('textPath').attr('startOffset', '50%').attr('xlink:href', function (_, i) {
        return '#vc-hiddenArc' + i;
      }).text(function (d) {
        return d.data.name;
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      showFlag = !!showFlag;
      this.sunTag.classed('vc-hidden', !showFlag);
      this.opts.visible = showFlag;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.sunTag && this.sunTag.remove();
      this.arcs = null;
      this.opts = null;
      this.color = null;
      this.maxRadius = null;
      this.x = null;
      this.y = null;
      this.middleArcLine = null;
      this.textFits = null;
    }
  }, {
    key: 'focusOn',
    value: function focusOn() {
      var _this3 = this;

      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x0: 0, x1: 1, y0: 0, y1: 1 };

      // Reset to top-level if no data point specified
      var self = this;
      var transition = this.sunTag.transition().duration(_constants__WEBPACK_IMPORTED_MODULE_9__["default"].SUN_BURST_TRANSITION_TIME).tween('scale', function () {
        var xd = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["interpolate"])(_this3.x.domain(), [d.x0, d.x1]);
        var yd = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["interpolate"])(_this3.y.domain(), [d.y0, 1]);
        return function (t) {
          _this3.x.domain(xd(t));_this3.y.domain(yd(t));
        };
      });

      transition.selectAll('path.vc-main-arc').attrTween('d', function (d) {
        return function () {
          return self.arcs(d);
        };
      });

      transition.selectAll('path.vc-hidden-arc').attrTween('d', function (d) {
        return function () {
          return self.middleArcLine(d);
        };
      });

      transition.selectAll('text').attrTween('display', function (d) {
        return function () {
          return self.textFits(d) ? null : 'none';
        };
      });
      // On click the parent or child needs to be focus

      var moveStackToFront = function moveStackToFront(elD) {
        self.sunTag.selectAll('.vc-slice').filter(function (d) {
          return d === elD;
        }).each(function (d, index, elemArray) {
          var elem = elemArray[0];
          elem.parentNode.appendChild(elem);
          if (d.parent) {
            moveStackToFront(d.parent);
          }
        });
      };

      moveStackToFront(d);
    }
  }]);

  return SunBurst;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SunBurst);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9QaWVTZXJpZXNDaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2RhdGEtcGFyc2VyL0Jhc2ljUFNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kYXRhLXBhcnNlci9CYXNpY1NCUGFyc2VyLmpzIiwid2VicGFjazovL3ZjLy4vbGVnZW5kL1BpZVNlcmllc0xlZ2VuZC5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9QaWUuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvUGllU2VyaWVzLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1N1bkJ1cnN0LmpzIiwid2VicGFjazovL3ZjLy4vdG9vbHRpcC9CYXNpY1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiUGllU2VyaWVzQ2hhcnQiLCJjb250YWluZXIiLCJvcHRzIiwic3RhcnRUaW1lIiwiRGF0ZSIsImRhdGFQYXJzZXIiLCJzZXJpZXMiLCJzdW5idXJzdCIsIkJhc2ljU0JQYXJzZXIiLCJCYXNpY1BTUGFyc2VyIiwiQ2hhcnREYXRhUGFyc2VyIiwiRXJyb3IiLCJhZGREZWZhdWx0UFNPcHRpb25zIiwib3B0aW9ucyIsImlzT2JqZWN0IiwiZGF0YUV4ZWN1dG9yIiwiY2hhcnRJbml0aWxpemUiLCJkcmF3IiwidG9vbHRpcE9wdHMiLCJnZXRPYmplY3QiLCJ2aXNpYmxlIiwidG9vbHRpcCIsIlRvb2x0aXAiLCJjaGFydCIsImNoYXJ0Q29tcG9uZW50c0FyciIsInB1c2giLCJQaWVTZXJpZXMiLCJsZWdlbmQiLCJkb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwiaGFzRmVhdHVyZSIsImxlZ2VuZHMiLCJQaWVTZXJpZXNMZWdlbmQiLCJsZWdlbmRQcmVmaXgiLCJwb3NpdGlvbiIsIlRpbWVTZXJpZXNMZWdlbmQiLCJjb25zb2xlIiwibG9nIiwiYWZ0ZXJEcmF3IiwiY2FsbCIsImNoYXJ0UmVzcG9uc2l2ZSIsInRpbWVEaWZmIiwiZ2V0VGltZSIsIm9uQ29tcGxldGUiLCJDaGFydCIsImRhdGFPcHRpb25zIiwiZGF0YSIsImNvbnN0cnVjdFBsb3RJbmZvIiwiZXJyIiwib25FcnJvciIsInJlc0pzb24iLCJwaWVEYXRhIiwicGllc2VyaWVzIiwicGxvdEluZm8iLCJlYWNoUGxvdFNldCIsIm90aGVyc0FyYyIsIm5hbWUiLCJ2YWx1ZSIsImNvbG9yIiwicGllT2JqIiwicGllIiwidG90YWwiLCJhcmNzIiwiYWxsQXJjQXJyIiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiZm9yRWFjaCIsImFyY0luZm8iLCJpbmQiLCJwaWVBcmNDb3VudCIsInJlZmluZU5hbWUiLCJyZWZpbmVTdHJpbmciLCJ1bml0IiwicGxvdFNldCIsImNoYXJ0RGF0YSIsImpzb25EYXRhIiwibGVuZ3RoIiwicm9vdCIsImhpZXJhcmNoeSIsInBhcnRpdGlvbkRhdGEiLCJwYXJ0aXRpb24iLCJkYXRhUGFyc2VyQXBwcm9hY2giLCJjb25zdGFudHMiLCJEQVRBX1BBUlNFX0RFRkFVTFRfVFlQRSIsInZhbHVlTW9kZWwiLCJzdW0iLCJwYXJzZUZsb2F0IiwiZCIsImVhY2giLCJlYWNoT2JqVmFsdWUiLCJkZXB0aCIsImxlYWZTdW0iLCJjaGlsZHJlbiIsImNoRGF0YSIsInBhcmVudCIsInNlbGYiLCJtYXhXaWR0aExlZ2VuZCIsImhhc092ZXJmbG93IiwiZ3JhcGhPcHRpb25zIiwiZWFjaFBsb3ROYW1lcyIsInRleHRXaWR0aCIsImR1bW15RyIsInN2ZyIsImFwcGVuZCIsInNlbGVjdEFsbCIsImVudGVyIiwiYXR0ciIsInRleHQiLCJpIiwidGhpc1dpZHRoIiwiTWF0aCIsInJvdW5kIiwiZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoIiwicmVtb3ZlIiwiTEVHRU5EX01BWF9XSURUSCIsIm1heFlMZW4iLCJmbG9vciIsImNoYXJ0RnVsbFNwYWNlIiwiaGVpZ2h0IiwiZnVsbFlMZW4iLCJMRUdFTkRfWV9TUEFDRSIsImRpdldpZHRoIiwiTEVHRU5EX1NIT1dfV0lEVEgiLCJsZWdlbmREaXYiLCJ3aWR0aCIsImxlZ2VuZERpc3BsYXkiLCJwaWVmb3JlaWduRGl2Iiwic3R5bGUiLCJsZWdlbmRCbG9jayIsImxlZ2VuZFhEaXYiLCJ1cGRhdGUiLCJjaGFydFpvbmVXaWR0aCIsImdyYXBoWm9uZSIsIm5vZGUiLCJnZXRCQm94IiwiYmFzaWNXaWR0aCIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsIkxFR0VORF9SSUdIVF9CVUZGRVIiLCJwaWVMZWdlbmRQb3MiLCJQSUVfUE9TX0xFR0VORCIsImxlZ2VuZFhQb3MiLCJjaGFydFdpZHRoIiwieEJ1ZmYiLCJsZWdlbmRZUG9zIiwiaGlkZSIsInNob3ciLCJzaG93RmxhZyIsImNsYXNzZWQiLCJDaGFydENvbXBvbmVudCIsIlBpZSIsImNsYXNzTmFtZSIsImRvbnV0UGVyY2VudCIsInBvc2l0aW9uUGVyY2VudGFnZSIsInNlcmllc09yZGVyIiwicGllUG9zUGVyY2VudGFnZSIsIlBJRV9QT1NfREVGQVVMVCIsInJhZGl1cyIsIm1pbiIsImNoYXJ0SGVpZ2h0Iiwib3JkZXIiLCJkb251dExlbmd0aCIsInRvb2x0aXBIZWxwZXIiLCJhcmMiLCJvdXRlclJhZGl1cyIsIlBJRV9UT09MVElQX0JVRkZFUiIsImlubmVyUmFkaXVzIiwicGllVGFnIiwiYXJjWm9uZSIsIlBJRV9EQVJLX09QQUNJVFkiLCJvbiIsInR4dEVsZSIsInNlbGVjdCIsInRleHRQb3MiLCJlbGVtZW50T2Zmc2V0IiwiaG92ZXIiLCJ0b3AiLCJQSUVfRFVMTF9PUEFDSVRZIiwiUElFX0FSQ19TVFJPS0UiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJhdHRyVHdlZW4iLCJpbnRlcnBvbGF0ZSIsIlBJRV9IT1ZFUl9CVUZGRVIiLCJ0IiwiY2VudHJvaWQiLCJwbG90U2VyaWVzIiwicGllSW5mbyIsInN1bmJ1cnN0SW5mbyIsIlN1bkJ1cnN0Iiwic3VuQnVyc3REYXRhIiwiZXZlbnRzIiwiU2VyaWVzIiwibWF4UmFkaXVzIiwieCIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJQSSIsImNsYW1wIiwieSIsInNjYWxlU3FydCIsImNvbG9yQXJyYXkiLCJjb2xvclNjaGVtYSIsInNjaGVtZUNhdGVnb3J5MTAiLCJzY2FsZU9yZGluYWwiLCJzdGFydEFuZ2xlIiwieDAiLCJlbmRBbmdsZSIsIngxIiwibWF4IiwieTAiLCJ5MSIsIm1pZGRsZUFyY0xpbmUiLCJoYWxmUGkiLCJhbmdsZXMiLCJyIiwibWlkZGxlQW5nbGUiLCJpbnZlcnREaXJlY3Rpb24iLCJyZXZlcnNlIiwicGF0aHMiLCJwYXRoIiwidG9TdHJpbmciLCJ0ZXh0Rml0cyIsIkNIQVJfU1BBQ0UiLCJkZWx0YUFuZ2xlIiwicGVyaW1ldGVyIiwiZm9jdXNPbiIsImZuIiwiY2xpY2siLCJpc0Z1bmN0aW9uIiwic3VuVGFnIiwiZGVmYXVsdERhdGFQYXJzZXJBcHByb2FjaCIsInNsaWNlIiwiZGVzY2VuZGFudHMiLCJleGl0IiwibmV3U2xpY2UiLCJub2RlcyIsImQzRXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbGVtZW50QXJyYXkiLCJlbG0iLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bmlxdWVJZCIsInRleHRFbGVtIiwicGF0aEVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZmlsbCIsInRvb2xUaXBWYWx1ZSIsImRhdGFPYmoiLCJwYXJlbnRPYmoiLCJkZXB0aFNpemUiLCJkYXRhTmFtZSIsImsiLCJfIiwiZHVyYXRpb24iLCJTVU5fQlVSU1RfVFJBTlNJVElPTl9USU1FIiwidHdlZW4iLCJ4ZCIsImRvbWFpbiIsInlkIiwibW92ZVN0YWNrVG9Gcm9udCIsImVsRCIsImZpbHRlciIsImluZGV4IiwiZWxlbUFycmF5IiwiZWxlbSIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsIkJhc2ljVG9vbHRpcCIsImZvcm1hdCIsInRvb2xUaXBEaXYiLCJkaXNwbGF5RGF0YSIsImV4Y2x1ZGVUb29sVGlwRGl2Iiwic2hvd0hpZGUiLCJib3giLCJyb290UG9zIiwieHBvcyIsInlwb3MiLCJodG1sIiwiJHRvb2xUaXBEaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFBSWtGLFFBQVE1SSxJQUF2QixDQUFYO0FBQ0EsVUFBSThJLE9BQU96SyxLQUFLQyxLQUFMLENBQVd5RixJQUFJNkUsUUFBUXBHLEdBQXZCLENBQVg7O0FBRUEsVUFBSSxDQUFDaUcsaUJBQUwsRUFBd0I7QUFDdEI7QUFDQUksZUFBT3hLLEtBQUtDLEtBQUwsQ0FBV3VLLE9BQVFGLElBQUl4SixLQUFKLEdBQVksQ0FBL0IsQ0FBUDtBQUNBMkosZUFBT3pLLEtBQUtDLEtBQUwsQ0FBV3dLLE9BQVFILElBQUk5SixNQUFKLEdBQWEsQ0FBaEMsQ0FBUDtBQUNEOztBQUdELFdBQUswSixVQUFMLENBQ0dqSixLQURILENBQ1MsTUFEVCxFQUNpQnVKLE9BQU8sSUFEeEIsRUFFR3ZKLEtBRkgsQ0FFUyxLQUZULEVBRWdCd0osT0FBTyxJQUZ2QixFQUdHeEosS0FISCxDQUdTLFNBSFQsRUFHb0IsY0FIcEIsRUFJR3lKLElBSkgsQ0FJUSxLQUFLeFIsSUFBTCxDQUFVK1EsTUFBVixDQUFpQjFPLElBQWpCLENBQXNCLEtBQUtyQyxJQUFMLENBQVVxQixLQUFoQyxFQUF1QzRQLFlBQVlyTyxJQUFuRCxDQUpSLEVBZjJDLENBbUJ1QjtBQUNuRTs7OzZCQUVTd0csUSxFQUFVO0FBQ2xCQSxpQkFBVyxDQUFDLENBQUNBLFFBQWI7QUFDQSxXQUFLNEgsVUFBTCxJQUFtQixLQUFLQSxVQUFMLENBQWdCM0gsT0FBaEIsQ0FBd0IsV0FBeEIsRUFBcUMsQ0FBQ0QsUUFBdEMsQ0FBbkI7QUFDRDs7OzZCQUVTO0FBQ1IsV0FBS3FJLFdBQUwsSUFBb0IsS0FBS0EsV0FBTCxDQUFpQnhLLE1BQWpCLEVBQXBCO0FBQ0EsV0FBS2pILElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUFuRHVDc0osOEQ7O0FBQXJCd0gsMkUiLCJmaWxlIjoicGllc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRPYmplY3QsIGlzT2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY2hhcnRzL0NoYXJ0J1xuaW1wb3J0IHthZGREZWZhdWx0UFNPcHRpb25zfSBmcm9tICdAL2hlbHBlcnMnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAL3Rvb2x0aXAvQmFzaWNUb29sdGlwJ1xuaW1wb3J0IEJhc2ljUFNQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9CYXNpY1BTUGFyc2VyJ1xuaW1wb3J0IENoYXJ0RGF0YVBhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0RGF0YVBhcnNlcidcbmltcG9ydCBQaWVTZXJpZXMgZnJvbSAnQC9zZXJpZXMvUGllU2VyaWVzJ1xuaW1wb3J0IFBpZVNlcmllc0xlZ2VuZCBmcm9tICdAL2xlZ2VuZC9QaWVTZXJpZXNMZWdlbmQnXG5pbXBvcnQgVGltZVNlcmllc0xlZ2VuZCBmcm9tICdAL2xlZ2VuZC9UaW1lU2VyaWVzTGVnZW5kJ1xuaW1wb3J0IEJhc2ljU0JQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9CYXNpY1NCUGFyc2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVTZXJpZXNDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lciwgb3B0cykge1xuICAgIG9wdHMuc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBkYXRhUGFyc2VyIGlzIG5vdCBwYXNzZWRcbiAgICBpZiAoIW9wdHMuZGF0YVBhcnNlcikge1xuICAgICAgaWYgKG9wdHMuc2VyaWVzLnN1bmJ1cnN0KSB7XG4gICAgICAgIG9wdHMuZGF0YVBhcnNlciA9IG5ldyBCYXNpY1NCUGFyc2VyKG9wdHMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNQU1BhcnNlcihvcHRzKVxuICAgICAgfVxuXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBkYXRhUGFyc2VyIGV4aXN0cyBhbmQgaXRzIGluc3RhbmNlb2YgQ2hhcnREYXRhUGFyc2VyXG4gICAgaWYgKCEob3B0cy5kYXRhUGFyc2VyIGluc3RhbmNlb2YgQ2hhcnREYXRhUGFyc2VyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0YVBhcnNlciBpbiBvcHRpb25zIGRvc2VuJ3QgaGF2ZSBpbXBsZW1lbnRhdGlvbiBvZiBDaGFydERhdGFQYXJzZXJcIilcbiAgICB9XG5cbiAgICAvLyBDYWxsIFBhcmVudCBJbXBsXG4gICAgc3VwZXIoY29udGFpbmVyLCBvcHRzKVxuXG4gICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyB0byBjaGFydFxuICAgIGFkZERlZmF1bHRQU09wdGlvbnModGhpcy5vcHRpb25zKVxuXG4gICAgLy8gUnVuIHRoZSBkYXRhUGFyc2VyIGZvciBnaXZlbiBKU09OIGRhdGFcbiAgICBpZiAoaXNPYmplY3QodGhpcy5kYXRhUGFyc2VyKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YVBhcnNlci5kYXRhRXhlY3V0b3IoKSlcbiAgICB9XG5cbiAgICAvLyBJbml0aWxpemUgYWxsIGNoYXJ0IGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aW1lU2VyaWVzQ2hhcnQgb24gZXhhY3Qgb3JkZXIgYmFzZWQgb24gZWFjaCBkZXBlbmRlbmNpZXNcbiAgICB0aGlzLmNoYXJ0SW5pdGlsaXplKClcblxuICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgfVxuXG4gIGNoYXJ0SW5pdGlsaXplICgpIHtcblxuICAgIGNvbnN0IHRvb2x0aXBPcHRzID0gZ2V0T2JqZWN0KHRoaXMsICdvcHRpb25zLnRvb2x0aXAnKVxuICAgIGlmICh0b29sdGlwT3B0cy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAuLi50b29sdGlwT3B0c1xuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy50b29sdGlwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWVzKSB7XG4gICAgICB0aGlzLnNlcmllcyA9IG5ldyBQaWVTZXJpZXMoe1xuICAgICAgICBjaGFydDogdGhpc1xuICAgICAgfSlcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgZm9yIGRyYXcsIHVwZGF0ZSwgc2hvd0hpZGUgYW5kIHJlbW92ZVxuICAgICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIucHVzaCh0aGlzLnNlcmllcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxlZ2VuZC52aXNpYmxlKSB7XG4gICAgICAvLyBJRiBicm93c2VyIHN1cHBvcnRzIGZvcmVpZ25PYmplY3QgdXNlIHBpZUxlZ2VuZHMgQVBJXG4gICAgICBpZiAoZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5JywgJzEuMScpKSB7XG4gICAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBQaWVTZXJpZXNMZWdlbmQoe1xuICAgICAgICAgIGNoYXJ0OiB0aGlzLFxuICAgICAgICAgIGxlZ2VuZFByZWZpeDogdGhpcy5vcHRpb25zLmxlZ2VuZC5sZWdlbmRQcmVmaXgsXG4gICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0aW9ucy5sZWdlbmQucG9zaXRpb25cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVnZW5kcyA9IG5ldyBUaW1lU2VyaWVzTGVnZW5kKHtcbiAgICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgICBsZWdlbmRQcmVmaXg6IHRoaXMub3B0aW9ucy5sZWdlbmQubGVnZW5kUHJlZml4LFxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMubGVnZW5kLnBvc2l0aW9uXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5sZWdlbmRzKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnNvbGUubG9nKCdQaWVTZXJpZXNDaGFydCBkcmF3JywgdGhpcylcbiAgICBzdXBlci5kcmF3KClcbiAgICB0aGlzLm9wdGlvbnMuYWZ0ZXJEcmF3LmNhbGwodGhpcylcblxuICAgIHRoaXMuY2hhcnRSZXNwb25zaXZlKClcblxuICAgIHRoaXMudGltZURpZmYgPSAobmV3IERhdGUoKVxuICAgICAgLmdldFRpbWUoKSAtIHRoaXMub3B0aW9ucy5zdGFydFRpbWUuZ2V0VGltZSgpKVxuICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlLmNhbGwodGhpcywgdGhpcy50aW1lRGlmZilcbiAgfVxuXG59XG4iLCJpbXBvcnQge3JlZmluZVN0cmluZ30gZnJvbSAnQC91dGlscydcbmltcG9ydCBDaGFydERhdGFQYXJzZXIgZnJvbSAnQC9kYXRhLXBhcnNlci9DaGFydERhdGFQYXJzZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljUFNQYXJzZXIgZXh0ZW5kcyBDaGFydERhdGFQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICB9XG5cbiAgZGF0YUV4ZWN1dG9yICgpIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGUgRGF0YVByb2Nlc3NvciBBUElzIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXG4gICAgdHJ5IHtcblxuICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9XG4gICAgICB0aGlzLm9wdHMuZGF0YSAmJiAodGhpcy5kYXRhT3B0aW9ucy5kYXRhID0gdGhpcy5vcHRzLmRhdGEpXG4gICAgICB0aGlzLm9wdHMuc2VyaWVzICYmICh0aGlzLmRhdGFPcHRpb25zLnNlcmllcyA9IHRoaXMub3B0cy5zZXJpZXMpXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhT3B0aW9ucywgdGhpcy5jb25zdHJ1Y3RQbG90SW5mbygpKVxuXG4gICAgICByZXR1cm4gdGhpcy5kYXRhT3B0aW9uc1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW5jb3VudGVyZWQgd2hpbGUgcGllc2VyaWVzIEpTT04gcGFyc2luZyA6JywgZXJyKVxuICAgICAgdGhpcy5vcHRzLm9uRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgLSBFcnJvciBvbiBwaWVzZXJpZXMgSlNPTiBwYXJzaW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RQbG90SW5mbyAoKSB7XG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSB0aGlzLmRhdGFPcHRpb25zXG4gICAgY29uc3QgcmVzSnNvbiA9IGRhdGFPcHRpb25zLmRhdGFcbiAgICBjb25zdCBwaWVEYXRhID0gcmVzSnNvbi5waWVzZXJpZXNcbiAgICBjb25zdCBwbG90SW5mbyA9IGRhdGFPcHRpb25zLnNlcmllc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0ge31cbiAgICBjb25zdCBvdGhlcnNBcmMgPSB7XG4gICAgICBuYW1lOiAnT3RoZXJzJyxcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgY29sb3I6ICcjMzI0ZmZmJ1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBwaWVTZXQgZm9yIGVhY2ggcGllIGNoYXJ0cyBhbmQgYXJjSW5mbyB3aGljaCBjb250YWlucyBlYWNoIHBpZSBhcmNzIHRvIGJlIGRyYXduXG4gICAgY29uc3QgcGllT2JqID0gcGxvdEluZm8ucGllXG4gICAgcGllT2JqLnRvdGFsID0gMFxuICAgIGNvbnN0IGFyY3MgPSBbXVxuXG4gICAgLy8gRmluZCB0b3RhbCB2YWx1ZSBmb3IgZW50aXJlIHBpZSBjaGFydFxuICAgIGNvbnN0IGFsbEFyY0FyciA9IHBpZURhdGEudmFsdWVzXG5cbiAgICBhbGxBcmNBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIChiLnZhbHVlIC0gYS52YWx1ZSlcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChhcmNJbmZvLCBpbmQpIHtcbiAgICAgIGlmIChwaWVPYmoucGllQXJjQ291bnQgJiYgKGluZCArIDEpID49IHBpZU9iai5waWVBcmNDb3VudCkge1xuICAgICAgICAvLyBBZGQgdG8gb3RoZXJzIGFyY1xuICAgICAgICBvdGhlcnNBcmMudmFsdWUgKz0gYXJjSW5mby52YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhhcmNJbmZvLm5hbWUpXG4gICAgICAgIC8vIGFyY0luZm8ubmFtZSA9IHJlZmluZU5hbWVcbiAgICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7fVxuICAgICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS5uYW1lID0gYXJjSW5mby5uYW1lXG4gICAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLmNvbG9yID0gYXJjSW5mby5jb2xvclxuICAgICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS52YWx1ZSA9IGFyY0luZm8udmFsdWVcbiAgICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0udmlzaWJsZSA9IHRydWVcbiAgICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0udW5pdCA9IHBpZU9iai51bml0XG4gICAgICAgIGFyY3MucHVzaChhcmNJbmZvKVxuICAgICAgfVxuICAgICAgcGllT2JqLnRvdGFsICs9IGFyY0luZm8udmFsdWVcbiAgICAgXG4gICAgfSlcbiAgICAvLyBBZGQgb3RoZXJzIHRvIGFyY1xuICAgIGlmIChvdGhlcnNBcmMudmFsdWUpIHtcbiAgICAgIGNvbnN0IHJlZmluZU5hbWUgPSByZWZpbmVTdHJpbmcob3RoZXJzQXJjLm5hbWUpXG4gICAgICAvLyBvdGhlcnNBcmMubmFtZSA9IHJlZmluZU5hbWVcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdID0ge31cbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLm5hbWUgPSBvdGhlcnNBcmMubmFtZVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0uY29sb3IgPSBvdGhlcnNBcmMuY29sb3JcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLnZhbHVlID0gb3RoZXJzQXJjLnZhbHVlXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS52aXNpYmxlID0gdHJ1ZVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0udW5pdCA9IHBpZU9iai51bml0XG4gICAgICBhcmNzLnB1c2gob3RoZXJzQXJjKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwbG90U2V0OiBlYWNoUGxvdFNldCxcbiAgICAgIHNlcmllczoge1xuICAgICAgICBwaWU6IHBpZU9ialxuICAgICAgfSxcbiAgICAgIGNoYXJ0RGF0YToge1xuICAgICAgICBuYW1lOiBwaWVPYmoubmFtZSxcbiAgICAgICAgYXJjc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0RGF0YVBhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0RGF0YVBhcnNlcidcbmltcG9ydCB7aGllcmFyY2h5LCBwYXJ0aXRpb259IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1NCUGFyc2VyIGV4dGVuZHMgQ2hhcnREYXRhUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgfVxuXG4gIGRhdGFFeGVjdXRvciAoKSB7XG4gICAgLy8gT3JkZXIgaW4gd2hpY2ggdGhlIERhdGFQcm9jZXNzb3IgQVBJcyBuZWVkcyB0byBiZSBleGVjdXRlZFxuICAgIHRyeSB7XG5cbiAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB7fVxuICAgICAgdGhpcy5vcHRzLmRhdGEgJiYgKHRoaXMuZGF0YU9wdGlvbnMuZGF0YSA9IHRoaXMub3B0cy5kYXRhKVxuICAgICAgdGhpcy5vcHRzLnNlcmllcyAmJiAodGhpcy5kYXRhT3B0aW9ucy5zZXJpZXMgPSB0aGlzLm9wdHMuc2VyaWVzKVxuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMuY29uc3RydWN0UGxvdEluZm8oKSlcblxuICAgICAgcmV0dXJuIHRoaXMuZGF0YU9wdGlvbnNcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGVuY291bnRlcmVkIHdoaWxlIHN1bmJ1cnN0IEpTT04gcGFyc2luZyA6JywgZXJyKVxuICAgICAgdGhpcy5vcHRzLm9uRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEpTT04gcmVjZWl2ZWQgLSBFcnJvciBvbiBzdW5idXJzdCBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0UGxvdEluZm8gKCkge1xuXG4gICAgLy8gdGFrZSB0aGUgcm9vdCBoaWVyYXJjaHkgYW5kIGZvcm0gdGhlIHN1bSBiYXNlZCBvbiBzaXplL3ZhbHVlXG4gICAgY29uc3QganNvbkRhdGEgPSB0aGlzLm9wdHMuZGF0YVxuICAgIGlmIChPYmplY3Qua2V5cyhqc29uRGF0YSkubGVuZ3RoKSB7XG4gICAgICBjb25zdCByb290ID0gaGllcmFyY2h5KGpzb25EYXRhKVxuICAgICAgY29uc3QgcGFydGl0aW9uRGF0YSA9IHBhcnRpdGlvbigpXG5cbiAgICAgIGNvbnN0IGRhdGFQYXJzZXJBcHByb2FjaCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdzZXJpZXMuc3VuYnVyc3QuZGF0YUFwcHJvYWNoJywgY29uc3RhbnRzLkRBVEFfUEFSU0VfREVGQVVMVF9UWVBFKVxuICAgICAgY29uc3QgdmFsdWVNb2RlbCA9IGdldE9iamVjdCh0aGlzLm9wdHMsICdzZXJpZXMuc3VuYnVyc3QuZGF0YVZhbHVlQXR0cicsICd2YWx1ZScpXG5cbiAgICAgIC8vIENoZWNrIGlmIGl0IGlzIHRvcCB0byBib3R0b20gb3IgYm90dG9tIHRvIHRvcCBhcHByb2FjaFxuICAgICAgaWYgKGRhdGFQYXJzZXJBcHByb2FjaCA9PT0gY29uc3RhbnRzLkRBVEFfUEFSU0VfREVGQVVMVF9UWVBFKSB7XG4gICAgICAgIHJvb3Quc3VtKGQgPT4ge1xuICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGQuZGF0YVt2YWx1ZU1vZGVsXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuZWFjaChkID0+IHtcbiAgICAgICAgICAvLyBmb3IgZmlyc3QgZGVwdGggYXR0YWNoIHRoZSB2YWx1ZSB0byB0aGUgbWFpbiBvYmplY3QgYWZ0ZXIgaGlyYXJjaHlcbiAgICAgICAgICAvLyBwYXJzZSBkYXRhXG4gICAgICAgICAgY29uc3QgZWFjaE9ialZhbHVlID0gcGFyc2VGbG9hdChkLmRhdGFbdmFsdWVNb2RlbF0pXG4gICAgICAgICAgaWYgKGQuZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGQudmFsdWUgPSBlYWNoT2JqVmFsdWUgLy8gY2FsY3VsYXRlZCBiYXNlZCBvbiBwYXJlbnQgdmFsdWUgaXMgIGFzc2lnbmVkIHRvIHZhbHVlIGtleVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbGVhZlN1bSA9IDBcbiAgICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKGNoRGF0YSA9PiB7XG4gICAgICAgICAgICAgIGxlYWZTdW0gKz0gcGFyc2VGbG9hdChjaERhdGEuZGF0YVt2YWx1ZU1vZGVsXSkgfHwgMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZC5sZWFmU3VtID0gbGVhZlN1bVxuICAgICAgICAgIC8vIENhbGN1bGF0ZSBjaGlsZCBub2RlcyB2YWx1ZSBieSBmb3JtdWxhIChwYXJlbnRWYWx1ZS8gc3VtIG9mIGFsbCBsZWFmcyB2YWx1ZSBhdHRhY2hlZCBvbiBwYXJlbnQpICogY3VycmVudCB2YWx1ZVxuICAgICAgICAgIGlmIChkLnBhcmVudCkge1xuICAgICAgICAgICAgZC52YWx1ZSA9IGQucGFyZW50LmxlYWZTdW0gPyAoZC5wYXJlbnQudmFsdWUgLyBkLnBhcmVudC5sZWFmU3VtKSAqIGVhY2hPYmpWYWx1ZSA6IDAvLyBFWDogaW4gZXggZGF0YSAxMC83ICogMyBmb3IgYmFuZ2FsdXJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBwYXJ0aXRpb25EYXRhKHJvb3QpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwbG90U2V0OiBbXSxcbiAgICAgICAgY2hhcnREYXRhOiByb290LFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiByZWNlaXZlZCAtIEVycm9yIG9uIHN1bmJ1cnN0IEpTT04gcGFyc2luZycpXG4gICAgfVxuXG4gIH1cbn1cbiIsImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnQC9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZVNlcmllc0xlZ2VuZCBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID0gMFxuICAgIHRoaXMub3B0cy5oYXNPdmVyZmxvdyA9IGZhbHNlXG4gICAgY29uc3QgZ3JhcGhPcHRpb25zID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnNcbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGdyYXBoT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgZWFjaFBsb3ROYW1lcyA9IE9iamVjdC5rZXlzKGVhY2hQbG90U2V0KVxuICAgIGNvbnN0IHRleHRXaWR0aCA9IFtdXG4gICAgY29uc3QgZHVtbXlHID0gdGhpcy5vcHRzLmNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgIC8vIEFkZCBhbGwgbmFtZSBvbiBET00gdG8gY2FsY3VsYXRlIGhvdyBtdWNoIHNwYWNlIGlzIG5lZWRlZCBmb3IgZXZlcnkgbmFtZXNcbiAgICBkdW1teUcuc2VsZWN0QWxsKCcuZHVtbXlUZXh0JylcbiAgICAgIC5kYXRhKGVhY2hQbG90TmFtZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWxhYmVsJylcbiAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAoc2VsZi5vcHRzLmxlZ2VuZFByZWZpeCArIChlYWNoUGxvdFNldFtkXSA/IGVhY2hQbG90U2V0W2RdLm5hbWUgOiAnJykpXG4gICAgICB9KVxuICAgICAgLmVhY2goZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgLy8gRmluZCBzaXplIHJlcXVpcmVkIGZvciBlYWNoIGxlZ2VuZCBvbiBzY3JlZW5cbiAgICAgICAgY29uc3QgdGhpc1dpZHRoID0gTWF0aC5yb3VuZCh0aGlzLmdldENvbXB1dGVkVGV4dExlbmd0aCgpKVxuICAgICAgICBpZiAodGhpc1dpZHRoID4gc2VsZi5vcHRzLm1heFdpZHRoTGVnZW5kKSB7XG4gICAgICAgICAgc2VsZi5vcHRzLm1heFdpZHRoTGVnZW5kID0gdGhpc1dpZHRoXG4gICAgICAgIH1cbiAgICAgICAgdGV4dFdpZHRoLnB1c2godGhpc1dpZHRoKVxuICAgICAgfSlcblxuICAgIGR1bW15Ry5yZW1vdmUoKVxuXG4gICAgaWYgKHRoaXMub3B0cy5tYXhXaWR0aExlZ2VuZCA+IGNvbnN0YW50cy5MRUdFTkRfTUFYX1dJRFRIKSB7XG4gICAgICB0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgPSBjb25zdGFudHMuTEVHRU5EX01BWF9XSURUSFxuICAgIH1cblxuICB9XG5cbiAgZHJhdyAoKSB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGdyYXBoT3B0aW9ucyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSBncmFwaE9wdGlvbnMucGxvdFNldFxuICAgIGNvbnN0IGVhY2hQbG90TmFtZXMgPSBPYmplY3Qua2V5cyhlYWNoUGxvdFNldClcbiAgICBjb25zdCBtYXhZTGVuID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0ICogOTAgLyAxMDApXG4gICAgbGV0IGZ1bGxZTGVuID0gZWFjaFBsb3ROYW1lcy5sZW5ndGggKiBjb25zdGFudHMuTEVHRU5EX1lfU1BBQ0VcbiAgICBmdWxsWUxlbiA9IGZ1bGxZTGVuID4gbWF4WUxlbiA/IG1heFlMZW4gOiBmdWxsWUxlblxuICAgIGNvbnN0IGRpdldpZHRoID0gdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kICsgY29uc3RhbnRzLkxFR0VORF9TSE9XX1dJRFRIXG5cbiAgICB0aGlzLm9wdHMubGVnZW5kRGl2ID0ge1xuICAgICAgd2lkdGg6IGRpdldpZHRoLFxuICAgICAgaGVpZ2h0OiBmdWxsWUxlblxuICAgIH1cblxuICAgIHRoaXMubGVnZW5kRGlzcGxheSA9IHRoaXMub3B0cy5jaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtZ3JvdXAnKVxuXG4gICAgY29uc3QgcGllZm9yZWlnbkRpdiA9IHRoaXMubGVnZW5kRGlzcGxheVxuICAgICAgLmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCBkaXZXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdWxsWUxlbilcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtcmlnaHQnKVxuICAgICAgLmFwcGVuZCgneGh0bWw6ZGl2JylcbiAgICAgIC5hdHRyKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJylcbiAgICAgIC5zdHlsZSgnaGVpZ2h0JywgJzEwMCUnKVxuICAgICAgLnN0eWxlKCdwYWRkaW5nJywgJzVweCAwcHgnKVxuXG4gICAgaWYgKGZ1bGxZTGVuID09PSBtYXhZTGVuKSB7XG4gICAgICAvLyBBZGQgb3ZlcmZsb3cgdG8gY2hhcnRcbiAgICAgIHBpZWZvcmVpZ25EaXZcbiAgICAgICAgLnN0eWxlKCdvdmVyZmxvdycsICdhdXRvJylcbiAgICAgIHRoaXMub3B0cy5oYXNPdmVyZmxvdyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLmxlZ2VuZEJsb2NrID0gcGllZm9yZWlnbkRpdlxuICAgICAgLnNlbGVjdEFsbCgnZGl2JylcbiAgICAgIC5kYXRhKGVhY2hQbG90TmFtZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtbmFtZScpXG5cblxuICAgIHRoaXMubGVnZW5kQmxvY2suYXBwZW5kKCdzcGFuJylcbiAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtkXS5jb2xvclxuICAgICAgfSlcblxuICAgIHRoaXMubGVnZW5kQmxvY2suYXBwZW5kKCdsYWJlbCcpXG4gICAgICAuc3R5bGUoJ3dpZHRoJywgKGRpdldpZHRoIC0gNDApICsgJ3B4JylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzExcHgnKVxuICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc2MDAnKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIChzZWxmLm9wdHMubGVnZW5kUHJlZml4ICsgZWFjaFBsb3RTZXRbZF0ubmFtZSlcbiAgICAgIH0pXG5cbiAgICB0aGlzLmxlZ2VuZFhEaXYgPSBwaWVmb3JlaWduRGl2XG4gICAgdGhpcy51cGRhdGUoKVxuXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIC8vIERpc3BsYXkgaW4gdmVydGljYWwgb3JkZXJcbiAgICBjb25zdCBjaGFydFpvbmVXaWR0aCA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUubm9kZSgpLmdldEJCb3goKS53aWR0aFxuICAgIGNvbnN0IGJhc2ljV2lkdGggPSB0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnJpZ2h0ICsgY29uc3RhbnRzLkxFR0VORF9SSUdIVF9CVUZGRVJcblxuICAgIGxldCBwaWVMZWdlbmRQb3MgPSBjb25zdGFudHMuUElFX1BPU19MRUdFTkRcbiAgICBpZiAodGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID09PSBjb25zdGFudHMuTEVHRU5EX01BWF9XSURUSCkge1xuICAgICAgcGllTGVnZW5kUG9zID0gY29uc3RhbnRzLlBJRV9QT1NfTEVHRU5EIC0gNVxuICAgIH1cblxuICAgIGxldCBsZWdlbmRYUG9zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHBpZUxlZ2VuZFBvcyAvIDEwMClcbiAgICBsZXQgeEJ1ZmYgPSB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAtIGxlZ2VuZFhQb3NcbiAgICB4QnVmZiA9IE1hdGguZmxvb3IoKHhCdWZmIC0gdGhpcy5vcHRzLmxlZ2VuZERpdi53aWR0aCkgLyAyKVxuICAgIGxlZ2VuZFhQb3MgKz0geEJ1ZmZcblxuICAgIGNvbnN0IGxlZ2VuZFlQb3MgPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuY2hhcnQuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0IC0gdGhpcy5vcHRzLmxlZ2VuZERpdi5oZWlnaHQpIC8gMilcblxuICAgIGlmICghdGhpcy5vcHRzLmhhc092ZXJmbG93KSB7XG4gICAgICB0aGlzLmxlZ2VuZERpc3BsYXlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIGxlZ2VuZFhQb3MgKyAnLCcgKyBsZWdlbmRZUG9zICsgJyknKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlZ2VuZFhEaXZcbiAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpXG4gICAgICAgIC5zdHlsZSgndG9wJywgbGVnZW5kWVBvcyArICdweCcpXG4gICAgICAgIC5zdHlsZSgnbGVmdCcsIGxlZ2VuZFhQb3MgKyAncHgnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCA8IChiYXNpY1dpZHRoICsgY2hhcnRab25lV2lkdGgpKSB7XG4gICAgICAvLyBIaWRlIGxlZ2VuZCBkaXNwbGF5IGZvciBwaWVsZWdlbmRzXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cblxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICAgIHRoaXMubGVnZW5kRGlzcGxheSAmJiB0aGlzLmxlZ2VuZERpc3BsYXkuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLmxlZ2VuZEJsb2NrICYmIHRoaXMubGVnZW5kQmxvY2sucmVtb3ZlKClcbiAgICB0aGlzLmxlZ2VuZERpc3BsYXkgJiYgdGhpcy5sZWdlbmREaXNwbGF5LnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7cGllLCBhcmMsIGludGVycG9sYXRlLCBzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCB7ZWxlbWVudE9mZnNldH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBwaWVEYXRhOiBudWxsLFxuICAgICAgZG9udXRQZXJjZW50OiAxMDAsXG4gICAgICBwb3NpdGlvblBlcmNlbnRhZ2U6IG51bGwsXG4gICAgICBzZXJpZXNPcmRlcjogdHJ1ZSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgdGhpcy5vcHRzLnBpZVBvc1BlcmNlbnRhZ2UgPSB0aGlzLm9wdHMucG9zaXRpb25QZXJjZW50YWdlIHx8IChjb25zdGFudHMuUElFX1BPU19ERUZBVUxUIC8gMTAwKVxuICAgIHRoaXMub3B0cy5yYWRpdXMgPSBNYXRoLmZsb29yKE1hdGgubWluKCh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHRoaXMub3B0cy5waWVQb3NQZXJjZW50YWdlKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KSAvIDIpXG5cbiAgICAvLyBYIFBvc2l0aW9uIG9mIHBpZSBncmFwaCBvbiB0aGUgY2hhcnRcbiAgICB0aGlzLnBpZSA9IHBpZSgpXG5cbiAgICBpZiAodGhpcy5vcHRzLnNlcmllc09yZGVyKSB7XG4gICAgICB0aGlzLnBpZVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiAoYi5vcmRlciAtIGEub3JkZXIpIC8vIFNvcnQgYmFzZWQgb24gZWFjaCBzZXJpZXMgb3JkZXJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnBpZVxuICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLnZhbHVlIC8vIHByb3ZpZGUgaW5kZXggb2YgdGhpcyBzZXJpZXMgaW4gZGF0YSBBcnJcbiAgICAgIH0pXG5cblxuICAgIGlmICh0aGlzLm9wdHMuZG9udXRQZXJjZW50ID4gMTAwIHx8IHRoaXMub3B0cy5kb251dFBlcmNlbnQgPCAwKSB7XG4gICAgICB0aGlzLm9wdHMuZG9udXRQZXJjZW50ID0gMTAwXG4gICAgfVxuXG4gICAgdGhpcy5vcHRzLmRvbnV0TGVuZ3RoID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuZG9udXRQZXJjZW50ICogdGhpcy5vcHRzLnJhZGl1cyAvIDEwMClcblxuICAgIHRoaXMub3B0cy50b29sdGlwSGVscGVyID0gYXJjKClcbiAgICAgIC5vdXRlclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzICsgMiAqIGNvbnN0YW50cy5QSUVfVE9PTFRJUF9CVUZGRVIpXG4gICAgICAuaW5uZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cylcblxuICAgIHRoaXMuYXJjID0gYXJjKClcbiAgICAvLyAub3V0ZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cylcbiAgICAgIC5pbm5lclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzIC0gdGhpcy5vcHRzLmRvbnV0TGVuZ3RoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG5cbiAgICBjb25zdCBvdXRlclJhZGl1cyA9IHRoaXMub3B0cy5yYWRpdXNcbiAgICBjb25zdCBhcmMgPSB0aGlzLmFyY1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5waWVUYWcgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtcGllLXBsb3QgdmMtcGllLScgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggKiB0aGlzLm9wdHMucGllUG9zUGVyY2VudGFnZSAvIDIpICsgJywnICsgTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQgLyAyKSArICcpJylcblxuICAgIHRoaXMuYXJjWm9uZSA9IHRoaXMucGllVGFnLnNlbGVjdEFsbCgnLnZjLXBpZS1hcmMnKVxuICAgICAgLmRhdGEodGhpcy5waWUodGhpcy5vcHRzLnBpZURhdGEuYXJjcykpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLXBpZS1hcmMnKVxuXG4gICAgdGhpcy5hcmNab25lLmFwcGVuZCgncGF0aCcpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBkLm91dGVyUmFkaXVzID0gb3V0ZXJSYWRpdXNcbiAgICAgIH0pXG4gICAgICAuYXR0cignZCcsIHRoaXMuYXJjKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5kYXRhLmNvbG9yXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdvcGFjaXR5JywgY29uc3RhbnRzLlBJRV9EQVJLX09QQUNJVFkpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDApXG4gICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpbmQpIHtcbiAgICAgICAgLy8gdG9vbHRpcCBmZWF0dXJlXG4gICAgICAgIGNvbnN0IHR4dEVsZSA9IHNlbGYuYXJjWm9uZS5zZWxlY3QoYC52Yy10b29sLXRleHRfJHtpbmR9YClcbiAgICAgICAgY29uc3QgdGV4dFBvcyA9IGVsZW1lbnRPZmZzZXQodHh0RWxlKSAvLyBGaW5kIHBvc2l0aW9uIG9mIEFyYyByZXNwZWN0aXZlIHRvb2x0aXBIZWxwZXJcbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAgJiYgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAuaG92ZXIodGV4dFBvcy5sZWZ0LCB0ZXh0UG9zLnRvcCwgZClcbiAgICAgICAgLy8gRHVsbCBhbGwgb3RoZXIgQXJjc1xuICAgICAgICBzZWxmLmFyY1pvbmUuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjb25zdGFudHMuUElFX0RVTExfT1BBQ0lUWSlcbiAgICAgICAgLy8gUHJvdmlkZSBuZXcgcmFkaXVzIGFuZCBzdHJva2Utd2lkdGhcbiAgICAgICAgc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgY29uc3RhbnRzLlBJRV9EQVJLX09QQUNJVFkpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBjb25zdGFudHMuUElFX0FSQ19TVFJPS0UpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKS5kZWxheSgxMCkuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBpbnRlcnBvbGF0ZShkLm91dGVyUmFkaXVzLCBvdXRlclJhZGl1cyArIGNvbnN0YW50cy5QSUVfSE9WRVJfQlVGRkVSKVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIGQub3V0ZXJSYWRpdXMgPSBpKHQpXG4gICAgICAgICAgICAgIHJldHVybiBhcmMoZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCkgeyAvLyBIaWRlIHRvb2x0aXBcbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAgJiYgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAuaGlkZSgpXG4gICAgICAgIC8vIFByb3ZpZGUgZGFyayBvcGFjaXR5IHRvIGFsbCBhcmNzXG4gICAgICAgIHNlbGYuYXJjWm9uZS5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGNvbnN0YW50cy5QSUVfREFSS19PUEFDSVRZKVxuICAgICAgICAvLyBSZXZlcnQgYmFjayB0byBpdHMgbG9hZGVkIHJhZGl1c1xuICAgICAgICBzZWxlY3QodGhpcylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDApXG4gICAgICAgICAgLnRyYW5zaXRpb24oKS5kZWxheSgxNTApLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gaW50ZXJwb2xhdGUoZC5vdXRlclJhZGl1cywgb3V0ZXJSYWRpdXMpXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgZC5vdXRlclJhZGl1cyA9IGkodClcbiAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgLy8gQWRkIHRvb2x0aXAtaGVscGVyIGZvciBlYWNoIGFyYyBvdXRzaWRlIHBpZSBhcmVhXG4gICAgdGhpcy5hcmNab25lLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCwgaW5kKSB7XG4gICAgICAgIHJldHVybiBgdmMtdG9vbC10ZXh0XyR7aW5kfWBcbiAgICAgIH0pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHNlbGYub3B0cy50b29sdGlwSGVscGVyLmNlbnRyb2lkKGQpICsgJyknXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gJ1QnXG4gICAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMub3B0cy5yYWRpdXMgPSBNYXRoLmZsb29yKE1hdGgubWluKCh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHRoaXMub3B0cy5waWVQb3NQZXJjZW50YWdlKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KSAvIDIpXG4gICAgdGhpcy5waWVUYWcuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHRoaXMub3B0cy5waWVQb3NQZXJjZW50YWdlIC8gMikgKyAnLCcgKyBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpICsgJyknKVxuICAgIHRoaXMub3B0cy5kb251dExlbmd0aCA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmRvbnV0UGVyY2VudCAqIHRoaXMub3B0cy5yYWRpdXMgLyAxMDApXG5cbiAgICB0aGlzLmFyY1xuICAgICAgLm91dGVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMpXG4gICAgICAuaW5uZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cyAtIHRoaXMub3B0cy5kb251dExlbmd0aClcblxuICAgIHRoaXMub3B0cy50b29sdGlwSGVscGVyXG4gICAgICAub3V0ZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cyArIDIgKiBjb25zdGFudHMuUElFX1RPT0xUSVBfQlVGRkVSKVxuICAgICAgLmlubmVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMpXG5cbiAgICB0aGlzLmFyY1pvbmUuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIHRoaXMuYXJjKVxuICAgIHRoaXMuYXJjWm9uZS5zZWxlY3QoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBzZWxmLm9wdHMudG9vbHRpcEhlbHBlci5jZW50cm9pZChkKSArICcpJ1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICdUJ1xuICAgICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMucGllVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuYXJjWm9uZSAmJiB0aGlzLmFyY1pvbmUucmVtb3ZlKClcbiAgICB0aGlzLnBpZVRhZyAmJiB0aGlzLnBpZVRhZy5yZW1vdmUoKVxuICAgIHRoaXMub3B0cy50b29sdGlwSGVscGVyID0gbnVsbFxuICAgIHRoaXMuYXJjID0gbnVsbFxuICAgIHRoaXMucGllID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufSIsImltcG9ydCBTZXJpZXMgZnJvbSAnQC9zZXJpZXMvU2VyaWVzJ1xuaW1wb3J0IFBpZSBmcm9tICdAL3Nlcmllcy9QaWUnXG5pbXBvcnQgU3VuQnVyc3QgZnJvbSAnQC9zZXJpZXMvU3VuQnVyc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZVNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCBwaWVJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzLnBpZVxuICAgIGNvbnN0IHN1bmJ1cnN0SW5mbyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zLnNlcmllcy5zdW5idXJzdFxuXG4gICAgLy8gY2hhbmdlIGJhc2UgZG9uIHNlcmllcyBnaXZlblxuICAgIGlmIChwaWVJbmZvKSB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgUGllKHtcbiAgICAgICAgY2hhcnQ6IHRoaXMub3B0cy5jaGFydCxcbiAgICAgICAgY2xhc3NOYW1lOiBwaWVJbmZvLmNsYXNzTmFtZSB8fCBwaWVJbmZvLm5hbWUsXG4gICAgICAgIHBpZURhdGE6IGRhdGEsXG4gICAgICAgIGRvbnV0UGVyY2VudDogcGllSW5mby5kb251dFBlcmNlbnQgfHwgMTAwLFxuICAgICAgICB2aXNpYmxlOiBwaWVJbmZvLnZpc2libGVcbiAgICAgIH0pKVxuICAgIH0gZWxzZSBpZiAoc3VuYnVyc3RJbmZvKSB7XG4gICAgICB0aGlzLnBsb3RTZXJpZXMucHVzaChuZXcgU3VuQnVyc3Qoe1xuICAgICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgICBjbGFzc05hbWU6IHN1bmJ1cnN0SW5mby5jbGFzc05hbWUgfHwgc3VuYnVyc3RJbmZvLm5hbWUsXG4gICAgICAgIHN1bkJ1cnN0RGF0YTogZGF0YSxcbiAgICAgICAgZXZlbnRzOiB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5zZXJpZXMuZXZlbnRzIHx8IHt9LFxuICAgICAgICB2aXNpYmxlOiBzdW5idXJzdEluZm8udmlzaWJsZVxuICAgICAgfSkpXG4gICAgfVxuXG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtnZXRPYmplY3QsIGlzRnVuY3Rpb24sIGVsZW1lbnRPZmZzZXR9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge2FyYywgc2NhbGVMaW5lYXIsIGQzRXZlbnQsIHNjYWxlU3FydCwgc2NhbGVPcmRpbmFsLCBwYXRoLCBzY2hlbWVDYXRlZ29yeTEwLCBpbnRlcnBvbGF0ZX0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VuQnVyc3QgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHN1bkJ1cnN0RGF0YTogbnVsbCxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBldmVudHM6IHt9LFxuICAgIH0sIG9wdHMpXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpIC8gMilcbiAgICB0aGlzLnggPSBzY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoWzAsIDIgKiBNYXRoLlBJXSlcbiAgICAgIC5jbGFtcCh0cnVlKSAvLyBzY2FsZSB0aGUgZGF0YSB1cHRvIDM2MCBkZWdyZWUgZnJvbSAwIGFuZCBjbGFtcCB0cnVlIG1lYW5zIG5vdCBleGNlZWQgdGhlIHJhbmdlXG5cbiAgICB0aGlzLnkgPSBzY2FsZVNxcnQoKVxuICAgICAgLnJhbmdlKFt0aGlzLm1heFJhZGl1cyAqIDAuMSwgdGhpcy5tYXhSYWRpdXNdKSAvLyBjaXJjbGUgaXMgc2NhbGVkIGFzIGFyZWEgaW4gc3FydCBhbmQgcmFuZ2UgaXMgbWF4IHJhZGl1cyAqIC4xIHRvIG1heCBSYWRpdXNcblxuICAgIGNvbnN0IGNvbG9yQXJyYXkgPSBnZXRPYmplY3QodGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMsICdzZXJpZXMuc3VuYnVyc3QuY29sb3InKSB8fCBbXVxuICAgIGNvbnN0IGNvbG9yU2NoZW1hID0gY29sb3JBcnJheS5sZW5ndGggPyBjb2xvckFycmF5IDogc2NoZW1lQ2F0ZWdvcnkxMFxuXG4gICAgdGhpcy5jb2xvciA9IHNjYWxlT3JkaW5hbChjb2xvclNjaGVtYSkgLy8gR2l2ZSBkaWZmZXJlbnQgY29sb3IgZm9yIGVhY2ggZGF0YSBkMyBpbmJ1aWx0IHNjaGVtYVxuXG4gICAgLypcbiAgICAgICAgY3JlYXRlIHRoZSBhcmMgZm9yIGVhY2ggZGF0YSBvYmplY3RcbiAgICAgICAgWChkLngwKSBzdGFydCBhbmdsZSBjYWxjdWxhdGVkIGJ5IGQzIGFmdGVyIHBhcnRpdGlvbiAgYW5kIGFsc28gc2NhbGVkIGluIHRoYXQgcmFuZ2VcbiAgICAgICAgWChkLngxKSBlbmQgcG9pbnQgYW5nbGUgY2FsY3VsYXRlZFxuICAgICAgICB0aGlzIGlzIHNhbWUgZm9yIGQueTAgYW5kIGQueTEgY2FsY3VsYXRlZCBiYXNlZCBvbiBkYXRhXG4gICAgKi9cbiAgICB0aGlzLmFyY3MgPSBhcmMoKVxuICAgICAgLnN0YXJ0QW5nbGUoZCA9PiB0aGlzLngoZC54MCkpXG4gICAgICAuZW5kQW5nbGUoZCA9PiB0aGlzLngoZC54MSkpXG4gICAgICAuaW5uZXJSYWRpdXMoZCA9PiBNYXRoLm1heCgwLCB0aGlzLnkoZC55MCkpKVxuICAgICAgLm91dGVyUmFkaXVzKGQgPT4gTWF0aC5tYXgoMCwgdGhpcy55KGQueTEpKSlcblxuICAgIC8qXG4gICAgICAgIFRvICBGb3JtYXQgdGhlIHRleHQgYW5kIHNob3cgdGhlIHRleHQgYmFzZWQgb24gYXJjIHBvc2l0aW9uXG4gICAgICAqL1xuICAgIHRoaXMubWlkZGxlQXJjTGluZSA9IGQgPT4ge1xuICAgICAgY29uc3QgaGFsZlBpID0gTWF0aC5QSSAvIDJcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IFt0aGlzLngoZC54MCkgLSBoYWxmUGksIHRoaXMueChkLngxKSAtIGhhbGZQaV1cbiAgICAgIGNvbnN0IHIgPSBNYXRoLm1heCgwLCAodGhpcy55KGQueTApICsgdGhpcy55KGQueTEpKSAvIDIpXG5cbiAgICAgIGNvbnN0IG1pZGRsZUFuZ2xlID0gKGFuZ2xlc1sxXSArIGFuZ2xlc1swXSkgLyAyXG4gICAgICBjb25zdCBpbnZlcnREaXJlY3Rpb24gPSBtaWRkbGVBbmdsZSA+IDAgJiYgbWlkZGxlQW5nbGUgPCBNYXRoLlBJIC8vIE9uIGxvd2VyIHF1YWRyYW50cyB3cml0ZSB0ZXh0XG4gICAgICBpZiAoaW52ZXJ0RGlyZWN0aW9uKSB7IGFuZ2xlcy5yZXZlcnNlKCkgfVxuXG4gICAgICBjb25zdCBwYXRocyA9IHBhdGgoKVxuXG4gICAgICBwYXRocy5hcmMoMCwgMCwgciwgYW5nbGVzWzBdLCBhbmdsZXNbMV0sIGludmVydERpcmVjdGlvbilcblxuICAgICAgcmV0dXJuIHBhdGhzLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICAvLyBUbyBmaW5kIGlmIHRoZSB0ZXh0IGlzIGZpdHMgaW5zaWRlIHRoZSBhcmNcbiAgICB0aGlzLnRleHRGaXRzID0gZCA9PiB7XG4gICAgICBjb25zdCBDSEFSX1NQQUNFID0gOCAvLyBlYWNoIGNoYXJhY3RlciBzcGFjZVxuXG4gICAgICBjb25zdCBkZWx0YUFuZ2xlID0gdGhpcy54KGQueDEpIC0gdGhpcy54KGQueDApIC8vIGFuZ2xlIG9mIGFyYyB0aGF0IGNhbiBiZSB0cmVhdGVkIGFzIHRoZXRhXG4gICAgICBjb25zdCByID0gTWF0aC5tYXgoMCwgKHRoaXMueShkLnkwKSArIHRoaXMueShkLnkxKSkgLyAyKSAvLyByYWRpdXMgZnJvbSBjZW50ZXIgb2YgY2lyY2xlIHRvIGFyYyBkcm93blxuICAgICAgY29uc3QgcGVyaW1ldGVyID0gciAqIGRlbHRhQW5nbGUgLy8gcGVyaW1ldGVyIG9mIGFyYyBpcyByKiB0aGV0YVxuICAgICAgLy8gSWYgbmFtZSBleGNlZWRzIHRoZSBhcmMgcGVyaW1ldGVyIGRvbnQgc2hvdyB0aGUgbmFtZVxuICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLmxlbmd0aCAqIENIQVJfU1BBQ0UgPCBwZXJpbWV0ZXJcbiAgICB9XG5cbiAgICAvKlxuICAgIEFwcGVuZCB0aGUgc3ZnICB3aXRoIHZpZXcgYm94IGF0dHJpYnV0ZSBhbmQgb24gY2xpY2sgZm9jdXMgZm9yIHpvb20gY29udHJvbCBhbmQgdG8gc2NhbGVcbiAgICAgKi9cbiAgICAvLyBjb25zdCBjbGlwRWxlbWVudCA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXIuc2VsZWN0KCdzdmcgY2xpcFBhdGgnKVxuICAgIHRoaXMub3B0cy5jaGFydC5zdmdcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgYCR7LXRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoIC8gMn0gJHstdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0IC8gMn0gXG4gICAgICAke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSAke3RoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodH1gKSAvLyBBZGRpbmcgdmlldyBib3ggZm9yIHpvb20gY29udHJvbFxuICAgICAgLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5mb2N1c09uKClcbiAgICAgICAgY29uc3QgZm4gPSB0aGlzLm9wdHMuZXZlbnRzLmNsaWNrXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgIGZuLmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBudWxsLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9KSAvLyBSZXNldCB6b29tIG9uIGNhbnZhcyBjbGlja1xuXG4gICAgdGhpcy5zdW5UYWcgPSB0aGlzLm9wdHMuY2hhcnQuZ3JhcGhab25lLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtc3VuYnVyc3QtcGxvdCcpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdzdW5idXJzdCBkcmF3IGhhcyBiZWVuIGNhbGxlZCcpXG4gICAgLy8gdGFrZSB0aGUgcm9vdCBoaWVyYXJjaHkgYW5kIGZvcm0gdGhlIHN1bSBiYXNlZCBvbiBzaXplXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMub3B0cy5zdW5CdXJzdERhdGFcbiAgICBjb25zdCBkZWZhdWx0RGF0YVBhcnNlckFwcHJvYWNoID1cbiAgICAgIGdldE9iamVjdCh0aGlzLm9wdHMuY2hhcnQub3B0aW9ucywgJ3Nlcmllcy5zdW5idXJzdC5kYXRhQXBwcm9hY2gnKVxuICAgIGNvbnN0IHZhbHVlTW9kZWwgPSBnZXRPYmplY3QodGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMsICdzZXJpZXMuc3VuYnVyc3QuZGF0YVZhbHVlQXR0cicpXG5cblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgeCBhbmQgeSBmb3IgdGhlIGRhdGFcbiAgICBjb25zdCBzbGljZSA9IHRoaXMuc3VuVGFnLnNlbGVjdEFsbCgnZy52Yy1zbGljZScpXG4gICAgICAuZGF0YShyb290LmRlc2NlbmRhbnRzKCkpXG5cbiAgICAvLyBEYXRhIG5lZWQgdG8gYmUgcmVtb3ZlZCBzYW1lIGFzIGVudGVyIHRoaXMgaXMgdXNlZCB0byBleGl0IHRoZSBkYXRhXG4gICAgc2xpY2UuZXhpdCgpLnJlbW92ZSgpXG5cbiAgICAvKiBBZnRlciBjbGljayBhbmQgcmVtb3ZlZCB0aGUgYWRkaW5nIG5ldyBkYXRhIHdpdGggPGc+IGNvbnRhaW5lclxuICAgIHN0b3AgYWxsIG90aGVyIGV2ZW50IG9uIGNsaWNrXG4gICAgKi9cbiAgICBjb25zdCBuZXdTbGljZSA9IHNsaWNlLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICd2Yy1zbGljZScpXG4gICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5vbignY2xpY2snLCAoZCwgaSwgbm9kZXMpID0+IHtcbiAgICAgICAgZDNFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLmZvY3VzT24oZClcbiAgICAgICAgY29uc3QgZm4gPSB0aGlzLm9wdHMuZXZlbnRzLmNsaWNrXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgIGZuLmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBkLmRhdGFbdmFsdWVNb2RlbF0sIGQpXG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICAvLyBBdHRhY2ggdGhlIHVuaXF1ZSBjbGFzcyBuYW1lcyBmb3IgYW55IG90aGVyIG9wZXJhdGlvbiBpZiBmb3VuZCBpbiB0aGUgZGF0YVxuICAgIG5ld1NsaWNlLmVhY2goKGQsIGksIGVsZW1lbnRBcnJheSkgPT4ge1xuICAgICAgY29uc3QgZWxtID0gZWxlbWVudEFycmF5W2ldXG4gICAgICBlbG0uY2xhc3NMaXN0LmFkZChkLmRhdGEgJiYgZC5kYXRhLnVuaXF1ZUlkID8gZC5kYXRhLnVuaXF1ZUlkIDogJycpXG4gICAgfSlcbiAgICAvKlxuICAgICAgRm9yIFRvb2wgdGlwIHRvIHNob3dcbiAgICAgKi9cbiAgICBuZXdTbGljZS5vbignbW91c2VvdmVyJywgKGQsIGluZCwgbm9kZXMpID0+IHtcblxuICAgICAgbGV0IHRleHRFbGVtID0gbmV3U2xpY2Uuc2VsZWN0KGB0ZXh0LnZjLXN1bmJ1cnN0LXRleHQke2luZH1gKSAvLyBBY3R1YWwgY29udGFpbmVyIDxnPiBlbGVtZW50IHdob2xlIGFyZWFcbiAgICAgIC8vIElmIHRoZSB0ZXh0IGlzIG5vdCB2aXNpYmxlIHRha2UgdGhlIHBhdGggZWxlbWVudCB0byBzaG93IHRoZSB0b29sdGlwXG4gICAgICBpZiAodGV4dEVsZW0uYXR0cignZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgdGV4dEVsZW0gPSBuZXdTbGljZS5zZWxlY3QoYHBhdGgudmMtc3VuYnVyc3QtdGV4dCR7aW5kfWApXG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0UG9zID0gZWxlbWVudE9mZnNldCh0ZXh0RWxlbSkgLy8gdGFraW5nIHRoZSBhcmVhIG9mIGhpZGRlbi1hcmMgdG8gZ2V0IHBvc2l0aW9uXG4gICAgICBjb25zdCBwYXRoRWxlbWVudCA9IG5vZGVzW2luZF0uY2hpbGROb2Rlc1swXSAvLyBUbyBnZXQgdGhlIGNvbG9yIG9mIHBhdGggZWxlbWVudCBtYWluLWFyYyBnZXQgdGhlIGNvbG9yIG9mIHBhdGggZWxlbWVudCBtYWluLWFyY1xuICAgICAgY29uc3QgY29sb3IgPSBwYXRoRWxlbWVudCAmJiBwYXRoRWxlbWVudC5zdHlsZS5maWxsXG4gICAgICBjb25zdCB0b29sVGlwVmFsdWUgPSBkZWZhdWx0RGF0YVBhcnNlckFwcHJvYWNoID09PSBjb25zdGFudHMuREFUQV9QQVJTRV9ERUZBVUxUX1RZUEUgPyBkLnZhbHVlIDogZC5kYXRhW3ZhbHVlTW9kZWxdXG4gICAgICBjb25zdCBkYXRhT2JqID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogZC5kYXRhICYmIGQuZGF0YS5uYW1lLFxuICAgICAgICAgIHZhbHVlOiB0b29sVGlwVmFsdWUsXG4gICAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGYub3B0cy5jaGFydC50b29sdGlwICYmIHNlbGYub3B0cy5jaGFydC50b29sdGlwLmhvdmVyKHRleHRQb3MubGVmdCwgdGV4dFBvcy50b3AsIGRhdGFPYmopXG4gICAgfSkub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQpIHsgLy8gSGlkZSB0b29sdGlwXG4gICAgICBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcCAmJiBzZWxmLm9wdHMuY2hhcnQudG9vbHRpcC5oaWRlKClcbiAgICB9KVxuXG4gICAgLy8gQXBwZW5kIDxwYXRoPiB0YWcgdW5kZXIgY29udGFpbmVyIGFuZCBmaWxsIGRpZmZlcmVudCBjb2xvcnNcbiAgICBuZXdTbGljZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLW1haW4tYXJjJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNmZmYnKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4JylcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4ge1xuICAgICAgICBsZXQgcGFyZW50T2JqID0gbnVsbFxuICAgICAgICBjb25zdCBkZXB0aFNpemUgPSBkLmRlcHRoIC0gMSAvLyBmb3IgZmlyc3QgZGVwdGhcbiAgICAgICAgbGV0IGRhdGFOYW1lID0gZC5kYXRhLm5hbWVcbiAgICAgICAgLy8gR28gdXAgdG8gZGVwdGggYW5kIGdldCB0aGUgcGFyZW50IGRhdGFcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZXB0aFNpemU7IGsrKykge1xuICAgICAgICAgIHBhcmVudE9iaiA9IHBhcmVudE9iaiA/IHBhcmVudE9iai5wYXJlbnQgOiBkLnBhcmVudFxuICAgICAgICAgIGRhdGFOYW1lID0gZ2V0T2JqZWN0KHBhcmVudE9iaiwgJ2RhdGEubmFtZScpXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5hbWUpXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yKGRhdGFOYW1lKVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgdGhpcy5hcmNzKVxuXG5cbiAgICAvLyAvL2NyZWF0aW5nIHRoZSBoaWRkZW4gYXJjIGxpbmVcbiAgICBuZXdTbGljZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgKGQsIGkpID0+IGB2Yy1oaWRkZW4tYXJjIHZjLXN1bmJ1cnN0LXRleHQke2l9YCkgLy8gVXNlZCBmb3IgdG9vbHRpcCB3aGVuIHRleHQgaXMgaGlkZGVuXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAuYXR0cignaWQnLCAoXywgaSkgPT4gYHZjLWhpZGRlbkFyYyR7aX1gKVxuICAgICAgLmF0dHIoJ2QnLCB0aGlzLm1pZGRsZUFyY0xpbmUpXG5cbiAgICAvLyBhcHBlbmQgdGhlIHRleHRcbiAgICBjb25zdCB0ZXh0ID0gbmV3U2xpY2UuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsIChkLCBpKSA9PiBgdmMtc3VuYnVyc3QtdGV4dCR7aX1gKSAvLyB1c2VkIGZvciB0b29sdGlwXG4gICAgICAuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKVxuICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnLjhyZW0nKVxuICAgICAgLmF0dHIoJ2Rpc3BsYXknLCBkID0+IHRoaXMudGV4dEZpdHMoZCkgPyBudWxsIDogJ25vbmUnKVxuXG4gICAgLy8gQWRkIHdoaXRlIGNvbnRvdXJcbiAgICB0ZXh0LmFwcGVuZCgndGV4dFBhdGgnKVxuICAgICAgLnRleHQoZCA9PiBkLmRhdGEubmFtZSlcblxuICAgIC8vIEFwcGVuZCB0aGUgdGV4dFBhdGggYW5kIHNob3cgdGhlIGZvcm1hdHRlZCBUZXh0IGFjY29yZGluZyB3aXRoIHBvc2l0aW9uIG9mIGFyY1xuICAgIHRleHQuYXBwZW5kKCd0ZXh0UGF0aCcpXG4gICAgICAuYXR0cignc3RhcnRPZmZzZXQnLCAnNTAlJylcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgKF8sIGkpID0+IGAjdmMtaGlkZGVuQXJjJHtpfWApXG4gICAgICAudGV4dChkID0+IGQuZGF0YS5uYW1lKVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuc3VuVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuc3VuVGFnICYmIHRoaXMuc3VuVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5hcmNzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgICB0aGlzLmNvbG9yID0gbnVsbFxuICAgIHRoaXMubWF4UmFkaXVzID0gbnVsbFxuICAgIHRoaXMueCA9IG51bGxcbiAgICB0aGlzLnkgPSBudWxsXG4gICAgdGhpcy5taWRkbGVBcmNMaW5lID0gbnVsbFxuICAgIHRoaXMudGV4dEZpdHMgPSBudWxsXG4gIH1cblxuICBmb2N1c09uIChkID0geyB4MDogMCwgeDE6IDEsIHkwOiAwLCB5MTogMSB9KSB7XG4gICAgLy8gUmVzZXQgdG8gdG9wLWxldmVsIGlmIG5vIGRhdGEgcG9pbnQgc3BlY2lmaWVkXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gdGhpcy5zdW5UYWcudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oY29uc3RhbnRzLlNVTl9CVVJTVF9UUkFOU0lUSU9OX1RJTUUpXG4gICAgICAudHdlZW4oJ3NjYWxlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB4ZCA9IGludGVycG9sYXRlKHRoaXMueC5kb21haW4oKSwgW2QueDAsIGQueDFdKVxuICAgICAgICBjb25zdCB5ZCA9IGludGVycG9sYXRlKHRoaXMueS5kb21haW4oKSwgW2QueTAsIDFdKVxuICAgICAgICByZXR1cm4gdCA9PiB7IHRoaXMueC5kb21haW4oeGQodCkpOyB0aGlzLnkuZG9tYWluKHlkKHQpKSB9XG4gICAgICB9KVxuXG4gICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ3BhdGgudmMtbWFpbi1hcmMnKVxuICAgICAgLmF0dHJUd2VlbignZCcsIGQgPT4gKCkgPT4gc2VsZi5hcmNzKGQpKVxuXG4gICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ3BhdGgudmMtaGlkZGVuLWFyYycpXG4gICAgICAuYXR0clR3ZWVuKCdkJywgZCA9PiAoKSA9PiBzZWxmLm1pZGRsZUFyY0xpbmUoZCkpXG5cbiAgICB0cmFuc2l0aW9uLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuYXR0clR3ZWVuKCdkaXNwbGF5JywgZCA9PiAoKSA9PiBzZWxmLnRleHRGaXRzKGQpID8gbnVsbCA6ICdub25lJylcbiAgICAvLyBPbiBjbGljayB0aGUgcGFyZW50IG9yIGNoaWxkIG5lZWRzIHRvIGJlIGZvY3VzXG5cbiAgICBjb25zdCBtb3ZlU3RhY2tUb0Zyb250ID0gKGVsRCkgPT4ge1xuICAgICAgc2VsZi5zdW5UYWcuc2VsZWN0QWxsKCcudmMtc2xpY2UnKS5maWx0ZXIoZCA9PiBkID09PSBlbEQpXG4gICAgICAgIC5lYWNoKChkLCBpbmRleCwgZWxlbUFycmF5KSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbSA9IGVsZW1BcnJheVswXVxuICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlbGVtKVxuICAgICAgICAgIGlmIChkLnBhcmVudCkgeyBtb3ZlU3RhY2tUb0Zyb250KGQucGFyZW50KSB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbW92ZVN0YWNrVG9Gcm9udChkKVxuXG5cbiAgfVxufVxuIiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtlbGVtZW50T2Zmc2V0LCBpc0Z1bmN0aW9ufSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1Rvb2x0aXAgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICAvLyBQcm92aWRlIGJhc2ljIGZvcm1hdHRlciB0byBkaXNwbGF5IGhvdmVyIGRhdGFcbiAgICBpZiAoIWlzRnVuY3Rpb24odGhpcy5vcHRzLmZvcm1hdCkpIHtcbiAgICAgIHRoaXMub3B0cy5mb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYDxzcGFuPiBUb29sVGlwIFRleHQgOiA8L3NwYW4+PGJyLz48c3Bhbj4ke0pTT04uc3RyaW5naWZ5KGQpfTwvc3Bhbj5gXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy50b29sVGlwRGl2ID0gdGhpcy5vcHRzICYmIHRoaXMub3B0cy5jaGFydC5jb250YWluZXJcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtdG9vbHRpcC1kaXNwbGF5ICcgKyB0aGlzLm9wdHMuY2xhc3NOYW1lKVxuICB9XG5cbiAgaG92ZXIgKHgsIHksIGRpc3BsYXlEYXRhLCBleGNsdWRlVG9vbFRpcERpdikge1xuICAgIHRoaXMuc2hvd0hpZGUodHJ1ZSlcbiAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IHNlcmllcyAtLSBiYXIgLyBwaWVcbiAgICBjb25zdCBib3ggPSBlbGVtZW50T2Zmc2V0KHRoaXMudG9vbFRpcERpdilcbiAgICBjb25zdCByb290UG9zID0gZWxlbWVudE9mZnNldCh0aGlzLm9wdHMuY2hhcnQuY29udGFpbmVyKVxuICAgIGxldCB4cG9zID0gTWF0aC5yb3VuZCh4IC0gcm9vdFBvcy5sZWZ0KVxuICAgIGxldCB5cG9zID0gTWF0aC5yb3VuZCh5IC0gcm9vdFBvcy50b3ApXG5cbiAgICBpZiAoIWV4Y2x1ZGVUb29sVGlwRGl2KSB7XG4gICAgICAvLyBDb25zaWRlciB0b29sVGlwIG9mZnNldCBmb3IgcG9zaXRpb25cbiAgICAgIHhwb3MgPSBNYXRoLnJvdW5kKHhwb3MgLSAoYm94LndpZHRoIC8gMikpXG4gICAgICB5cG9zID0gTWF0aC5yb3VuZCh5cG9zIC0gKGJveC5oZWlnaHQgLyAyKSlcbiAgICB9XG5cblxuICAgIHRoaXMudG9vbFRpcERpdlxuICAgICAgLnN0eWxlKCdsZWZ0JywgeHBvcyArICdweCcpXG4gICAgICAuc3R5bGUoJ3RvcCcsIHlwb3MgKyAncHgnKVxuICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG4gICAgICAuaHRtbCh0aGlzLm9wdHMuZm9ybWF0LmNhbGwodGhpcy5vcHRzLmNoYXJ0LCBkaXNwbGF5RGF0YS5kYXRhKSkgLy8gVXNlZCBmb3JtYXQuY2FsbCgpLCBzbyB0aGF0IGV4dGVybmFsIGZ1biBjYW4gaGF2ZSBhY2Nlc3Mgb2YgY2hhcnQgSW5zdGFuY2VcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMudG9vbFRpcERpdiAmJiB0aGlzLnRvb2xUaXBEaXYuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLiR0b29sVGlwRGl2ICYmIHRoaXMuJHRvb2xUaXBEaXYucmVtb3ZlKClcbiAgICB0aGlzLm9wdHMgPSBudWxsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=