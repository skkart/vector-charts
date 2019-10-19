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
      }).style('opacity', _constants__WEBPACK_IMPORTED_MODULE_7__["default"].PIE_DARK_OPACITY).style('stroke-width', 0).on('mouseover', function (d) {
        // tooltip feature
        var textPos = $(this).parent().find('text').offset(); // Find position of Arc respective tooltipHelper
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
      this.arcZone.append('text').attr('transform', function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2NoYXJ0cy9QaWVTZXJpZXNDaGFydC5qcyIsIndlYnBhY2s6Ly92Yy8uL2RhdGEtcGFyc2VyL0Jhc2ljUFNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdmMvLi9zZXJpZXMvUGllLmpzIiwid2VicGFjazovL3ZjLy4vc2VyaWVzL1BpZVNlcmllcy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Rvb2x0aXAvQmFzaWNUb29sdGlwLmpzIl0sIm5hbWVzIjpbIlBpZVNlcmllc0NoYXJ0IiwiY29udGFpbmVyIiwib3B0cyIsInN0YXJ0VGltZSIsIkRhdGUiLCJkYXRhUGFyc2VyIiwiQmFzaWNQU1BhcnNlciIsIkNoYXJ0RGF0YVBhcnNlciIsIkVycm9yIiwiYWRkRGVmYXVsdFBTT3B0aW9ucyIsIm9wdGlvbnMiLCJpc09iamVjdCIsImRhdGFFeGVjdXRvciIsImNoYXJ0SW5pdGlsaXplIiwiZHJhdyIsInRvb2x0aXBPcHRzIiwiZ2V0T2JqZWN0IiwidmlzaWJsZSIsInRvb2x0aXAiLCJUb29sdGlwIiwiY2hhcnQiLCJjaGFydENvbXBvbmVudHNBcnIiLCJwdXNoIiwic2VyaWVzIiwiUGllU2VyaWVzIiwiY29uc29sZSIsImxvZyIsImFmdGVyRHJhdyIsImNhbGwiLCJjaGFydFJlc3BvbnNpdmUiLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJvbkNvbXBsZXRlIiwiQ2hhcnQiLCJkYXRhT3B0aW9ucyIsImRhdGEiLCJjb25zdHJ1Y3RQbG90SW5mbyIsImVyciIsIm9uRXJyb3IiLCJyZXNKc29uIiwicGllRGF0YSIsInBpZXNlcmllcyIsInBsb3RJbmZvIiwiZWFjaFBsb3RTZXQiLCJvdGhlcnNBcmMiLCJuYW1lIiwidmFsdWUiLCJjb2xvciIsInBpZU9iaiIsInBpZSIsInRvdGFsIiwiYXJjcyIsImFsbEFyY0FyciIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsImZvckVhY2giLCJhcmNJbmZvIiwiaW5kIiwicGllQXJjQ291bnQiLCJyZWZpbmVOYW1lIiwicmVmaW5lU3RyaW5nIiwidW5pdCIsInBsb3RTZXQiLCJjaGFydERhdGEiLCJQaWUiLCJjbGFzc05hbWUiLCJkb251dFBlcmNlbnQiLCJwb3NpdGlvblBlcmNlbnRhZ2UiLCJzZXJpZXNPcmRlciIsInBpZVBvc1BlcmNlbnRhZ2UiLCJjb25zdGFudHMiLCJQSUVfUE9TX0RFRkFVTFQiLCJyYWRpdXMiLCJNYXRoIiwiZmxvb3IiLCJtaW4iLCJjaGFydFdpZHRoIiwiY2hhcnRIZWlnaHQiLCJvcmRlciIsImQiLCJkb251dExlbmd0aCIsInRvb2x0aXBIZWxwZXIiLCJhcmMiLCJvdXRlclJhZGl1cyIsIlBJRV9UT09MVElQX0JVRkZFUiIsImlubmVyUmFkaXVzIiwic2VsZiIsInBpZVRhZyIsImdyYXBoWm9uZSIsImFwcGVuZCIsImF0dHIiLCJhcmNab25lIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJlYWNoIiwic3R5bGUiLCJQSUVfREFSS19PUEFDSVRZIiwib24iLCJ0ZXh0UG9zIiwiJCIsInBhcmVudCIsImZpbmQiLCJvZmZzZXQiLCJob3ZlciIsImxlZnQiLCJ0b3AiLCJQSUVfRFVMTF9PUEFDSVRZIiwic2VsZWN0IiwiUElFX0FSQ19TVFJPS0UiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJhdHRyVHdlZW4iLCJpIiwiaW50ZXJwb2xhdGUiLCJQSUVfSE9WRVJfQlVGRkVSIiwidCIsImhpZGUiLCJjZW50cm9pZCIsInRleHQiLCJzaG93RmxhZyIsImNsYXNzZWQiLCJyZW1vdmUiLCJDaGFydENvbXBvbmVudCIsInBsb3RTZXJpZXMiLCJwaWVJbmZvIiwiU2VyaWVzIiwiQmFzaWNUb29sdGlwIiwiaXNGdW5jdGlvbiIsImZvcm1hdCIsIiR0b29sVGlwRGl2IiwiYWRkQ2xhc3MiLCIkY29udGFpbmVyIiwieCIsInkiLCJkaXNwbGF5RGF0YSIsImV4Y2x1ZGVUb29sVGlwRGl2Iiwicm9vdFBvcyIsInhwb3MiLCJyb3VuZCIsInlwb3MiLCJ3aWR0aCIsImhlaWdodCIsImNzcyIsImRpc3BsYXkiLCJodG1sIiwi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QUFRLEtBQUtSLFdBQUwsQ0FBaUJXLEtBQWpCLEtBQTJCLENBQTlDLENBQVA7QUFDQUQsZUFBT2xFLEtBQUtpRSxLQUFMLENBQVdDLE9BQVEsS0FBS1YsV0FBTCxDQUFpQlksTUFBakIsS0FBNEIsQ0FBL0MsQ0FBUDtBQUNEOztBQUVELFdBQUtaLFdBQUwsQ0FDR2EsR0FESCxDQUNPO0FBQ0h0QyxjQUFNaUMsT0FBTyxJQURWO0FBRUhoQyxhQUFLa0MsT0FBTyxJQUZUO0FBR0hJLGlCQUFTO0FBSE4sT0FEUCxFQU1HQyxJQU5ILENBTVEsS0FBS2hKLElBQUwsQ0FBVWdJLE1BQVYsQ0FBaUJ0RyxJQUFqQixDQUFzQixLQUFLMUIsSUFBTCxDQUFVa0IsS0FBaEMsRUFBdUNvSCxZQUFZckcsSUFBbkQsQ0FOUixFQVoyQyxDQWtCdUI7QUFDbkU7Ozs2QkFFU3NGLFEsRUFBVTtBQUNsQkEsaUJBQVcsQ0FBQyxDQUFDQSxRQUFiOztBQUVBLFVBQUlBLFFBQUosRUFBYztBQUNaLGFBQUtVLFdBQUwsSUFBb0IsS0FBS0EsV0FBTCxDQUFpQmdCLElBQWpCLEVBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2hCLFdBQUwsSUFBb0IsS0FBS0EsV0FBTCxDQUFpQmIsSUFBakIsRUFBcEI7QUFDRDtBQUNGOzs7NkJBRVM7QUFDUixXQUFLYSxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBaUJSLE1BQWpCLEVBQXBCO0FBQ0EsV0FBS3pILElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7RUF2RHVDMEgsOEQ7O0FBQXJCSSwyRSIsImZpbGUiOiJwaWVzZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldE9iamVjdCwgaXNPYmplY3R9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgQ2hhcnQgZnJvbSAnQC9jaGFydHMvQ2hhcnQnXG5pbXBvcnQge2FkZERlZmF1bHRQU09wdGlvbnN9IGZyb20gJ0AvaGVscGVycydcbmltcG9ydCBUb29sdGlwIGZyb20gJ0AvdG9vbHRpcC9CYXNpY1Rvb2x0aXAnXG5pbXBvcnQgQmFzaWNQU1BhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0Jhc2ljUFNQYXJzZXInXG5pbXBvcnQgQ2hhcnREYXRhUGFyc2VyIGZyb20gJ0AvZGF0YS1wYXJzZXIvQ2hhcnREYXRhUGFyc2VyJ1xuaW1wb3J0IFBpZVNlcmllcyBmcm9tICdAL3Nlcmllcy9QaWVTZXJpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZVNlcmllc0NoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyLCBvcHRzKSB7XG4gICAgb3B0cy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGFQYXJzZXIgaXMgbm90IHBhc3NlZFxuICAgIGlmICghb3B0cy5kYXRhUGFyc2VyKSB7XG4gICAgICBvcHRzLmRhdGFQYXJzZXIgPSBuZXcgQmFzaWNQU1BhcnNlcihvcHRzKVxuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgZGF0YVBhcnNlciBleGlzdHMgYW5kIGl0cyBpbnN0YW5jZW9mIENoYXJ0RGF0YVBhcnNlclxuICAgIGlmICghKG9wdHMuZGF0YVBhcnNlciBpbnN0YW5jZW9mIENoYXJ0RGF0YVBhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRhdGFQYXJzZXIgaW4gb3B0aW9ucyBkb3Nlbid0IGhhdmUgaW1wbGVtZW50YXRpb24gb2YgQ2hhcnREYXRhUGFyc2VyXCIpXG4gICAgfVxuXG4gICAgLy8gQ2FsbCBQYXJlbnQgSW1wbFxuICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0cylcblxuICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgdG8gY2hhcnRcbiAgICBhZGREZWZhdWx0UFNPcHRpb25zKHRoaXMub3B0aW9ucylcblxuICAgIC8vIFJ1biB0aGUgZGF0YVBhcnNlciBmb3IgZ2l2ZW4gSlNPTiBkYXRhXG4gICAgaWYgKGlzT2JqZWN0KHRoaXMuZGF0YVBhcnNlcikpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLmRhdGFQYXJzZXIuZGF0YUV4ZWN1dG9yKCkpXG4gICAgfVxuXG4gICAgLy8gSW5pdGlsaXplIGFsbCBjaGFydCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGltZVNlcmllc0NoYXJ0IG9uIGV4YWN0IG9yZGVyIGJhc2VkIG9uIGVhY2ggZGVwZW5kZW5jaWVzXG4gICAgdGhpcy5jaGFydEluaXRpbGl6ZSgpXG5cbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5kcmF3KCkpXG4gIH1cblxuICBjaGFydEluaXRpbGl6ZSAoKSB7XG5cbiAgICBjb25zdCB0b29sdGlwT3B0cyA9IGdldE9iamVjdCh0aGlzLCAnb3B0aW9ucy50b29sdGlwJylcbiAgICBpZiAodG9vbHRpcE9wdHMudmlzaWJsZSkge1xuICAgICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAoe1xuICAgICAgICBjaGFydDogdGhpcyxcbiAgICAgICAgLi4udG9vbHRpcE9wdHNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5wdXNoKHRoaXMudG9vbHRpcClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnNlcmllcykge1xuICAgICAgdGhpcy5zZXJpZXMgPSBuZXcgUGllU2VyaWVzKHtcbiAgICAgICAgY2hhcnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICAvLyBSZWdpc3RlciB0aGUgY29tcG9uZW50IGZvciBkcmF3LCB1cGRhdGUsIHNob3dIaWRlIGFuZCByZW1vdmVcbiAgICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLnB1c2godGhpcy5zZXJpZXMpXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc29sZS5sb2coJ1BpZVNlcmllc0NoYXJ0IGRyYXcnLCB0aGlzKVxuICAgIHN1cGVyLmRyYXcoKVxuICAgIHRoaXMub3B0aW9ucy5hZnRlckRyYXcuY2FsbCh0aGlzKVxuXG4gICAgdGhpcy5jaGFydFJlc3BvbnNpdmUoKVxuXG4gICAgdGhpcy50aW1lRGlmZiA9IChuZXcgRGF0ZSgpXG4gICAgICAuZ2V0VGltZSgpIC0gdGhpcy5vcHRpb25zLnN0YXJ0VGltZS5nZXRUaW1lKCkpXG4gICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLnRpbWVEaWZmKVxuICB9XG5cbn1cbiIsImltcG9ydCB7cmVmaW5lU3RyaW5nfSBmcm9tICdAL3V0aWxzJ1xuaW1wb3J0IENoYXJ0RGF0YVBhcnNlciBmcm9tICdAL2RhdGEtcGFyc2VyL0NoYXJ0RGF0YVBhcnNlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNQU1BhcnNlciBleHRlbmRzIENoYXJ0RGF0YVBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cylcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gIH1cblxuICBkYXRhRXhlY3V0b3IgKCkge1xuICAgIC8vIE9yZGVyIGluIHdoaWNoIHRoZSBEYXRhUHJvY2Vzc29yIEFQSXMgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLmRhdGFPcHRpb25zID0ge31cbiAgICAgIHRoaXMub3B0cy5kYXRhICYmICh0aGlzLmRhdGFPcHRpb25zLmRhdGEgPSB0aGlzLm9wdHMuZGF0YSlcbiAgICAgIHRoaXMub3B0cy5zZXJpZXMgJiYgKHRoaXMuZGF0YU9wdGlvbnMuc2VyaWVzID0gdGhpcy5vcHRzLnNlcmllcylcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGFPcHRpb25zLCB0aGlzLmNvbnN0cnVjdFBsb3RJbmZvKCkpXG5cbiAgICAgIHJldHVybiB0aGlzLmRhdGFPcHRpb25zXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbmNvdW50ZXJlZCB3aGlsZSBwaWVzZXJpZXMgSlNPTiBwYXJzaW5nIDonLCBlcnIpXG4gICAgICB0aGlzLm9wdHMub25FcnJvcihlcnIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSlNPTiByZWNlaXZlZCAtIEVycm9yIG9uIHBpZXNlcmllcyBKU09OIHBhcnNpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdFBsb3RJbmZvICgpIHtcbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHRoaXMuZGF0YU9wdGlvbnNcbiAgICBjb25zdCByZXNKc29uID0gZGF0YU9wdGlvbnMuZGF0YVxuICAgIGNvbnN0IHBpZURhdGEgPSByZXNKc29uLnBpZXNlcmllc1xuICAgIGNvbnN0IHBsb3RJbmZvID0gZGF0YU9wdGlvbnMuc2VyaWVzXG4gICAgY29uc3QgZWFjaFBsb3RTZXQgPSB7fVxuICAgIGNvbnN0IG90aGVyc0FyYyA9IHtcbiAgICAgIG5hbWU6ICdPdGhlcnMnLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICBjb2xvcjogJyMzMjRmZmYnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHBpZVNldCBmb3IgZWFjaCBwaWUgY2hhcnRzIGFuZCBhcmNJbmZvIHdoaWNoIGNvbnRhaW5zIGVhY2ggcGllIGFyY3MgdG8gYmUgZHJhd25cbiAgICBjb25zdCBwaWVPYmogPSBwbG90SW5mby5waWVcbiAgICBwaWVPYmoudG90YWwgPSAwXG4gICAgY29uc3QgYXJjcyA9IFtdXG5cbiAgICAvLyBGaW5kIHRvdGFsIHZhbHVlIGZvciBlbnRpcmUgcGllIGNoYXJ0XG4gICAgY29uc3QgYWxsQXJjQXJyID0gcGllRGF0YS52YWx1ZXNcblxuICAgIGFsbEFyY0Fyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gKGIudmFsdWUgLSBhLnZhbHVlKVxuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGFyY0luZm8sIGluZCkge1xuICAgICAgaWYgKHBpZU9iai5waWVBcmNDb3VudCAmJiAoaW5kICsgMSkgPj0gcGllT2JqLnBpZUFyY0NvdW50KSB7XG4gICAgICAgIC8vIEFkZCB0byBvdGhlcnMgYXJjXG4gICAgICAgIG90aGVyc0FyYy52YWx1ZSArPSBhcmNJbmZvLnZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZpbmVOYW1lID0gcmVmaW5lU3RyaW5nKGFyY0luZm8ubmFtZSlcbiAgICAgICAgLy8gYXJjSW5mby5uYW1lID0gcmVmaW5lTmFtZVxuICAgICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXSA9IHt9XG4gICAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLm5hbWUgPSBhcmNJbmZvLm5hbWVcbiAgICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0uY29sb3IgPSBhcmNJbmZvLmNvbG9yXG4gICAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLnZhbHVlID0gYXJjSW5mby52YWx1ZVxuICAgICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS51bml0ID0gcGllT2JqLnVuaXRcbiAgICAgICAgYXJjcy5wdXNoKGFyY0luZm8pXG4gICAgICB9XG4gICAgICBwaWVPYmoudG90YWwgKz0gYXJjSW5mby52YWx1ZVxuICAgICBcbiAgICB9KVxuICAgIC8vIEFkZCBvdGhlcnMgdG8gYXJjXG4gICAgaWYgKG90aGVyc0FyYy52YWx1ZSkge1xuICAgICAgY29uc3QgcmVmaW5lTmFtZSA9IHJlZmluZVN0cmluZyhvdGhlcnNBcmMubmFtZSlcbiAgICAgIC8vIG90aGVyc0FyYy5uYW1lID0gcmVmaW5lTmFtZVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0gPSB7fVxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0ubmFtZSA9IG90aGVyc0FyYy5uYW1lXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS5jb2xvciA9IG90aGVyc0FyYy5jb2xvclxuICAgICAgZWFjaFBsb3RTZXRbcmVmaW5lTmFtZV0udmFsdWUgPSBvdGhlcnNBcmMudmFsdWVcbiAgICAgIGVhY2hQbG90U2V0W3JlZmluZU5hbWVdLnZpc2libGUgPSB0cnVlXG4gICAgICBlYWNoUGxvdFNldFtyZWZpbmVOYW1lXS51bml0ID0gcGllT2JqLnVuaXRcbiAgICAgIGFyY3MucHVzaChvdGhlcnNBcmMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsb3RTZXQ6IGVhY2hQbG90U2V0LFxuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHBpZTogcGllT2JqXG4gICAgICB9LFxuICAgICAgY2hhcnREYXRhOiB7XG4gICAgICAgIG5hbWU6IHBpZU9iai5uYW1lLFxuICAgICAgICBhcmNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtwaWUsIGFyYywgaW50ZXJwb2xhdGUsIHNlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHBpZURhdGE6IG51bGwsXG4gICAgICBkb251dFBlcmNlbnQ6IDEwMCxcbiAgICAgIHBvc2l0aW9uUGVyY2VudGFnZTogbnVsbCxcbiAgICAgIHNlcmllc09yZGVyOiB0cnVlLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICB0aGlzLm9wdHMucGllUG9zUGVyY2VudGFnZSA9IHRoaXMub3B0cy5wb3NpdGlvblBlcmNlbnRhZ2UgfHwgKGNvbnN0YW50cy5QSUVfUE9TX0RFRkFVTFQgLyAxMDApXG4gICAgdGhpcy5vcHRzLnJhZGl1cyA9IE1hdGguZmxvb3IoTWF0aC5taW4oKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICogdGhpcy5vcHRzLnBpZVBvc1BlcmNlbnRhZ2UpLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHQpIC8gMilcblxuICAgIC8vIFggUG9zaXRpb24gb2YgcGllIGdyYXBoIG9uIHRoZSBjaGFydFxuICAgIHRoaXMucGllID0gcGllKClcblxuICAgIGlmICh0aGlzLm9wdHMuc2VyaWVzT3JkZXIpIHtcbiAgICAgIHRoaXMucGllXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIChiLm9yZGVyIC0gYS5vcmRlcikgLy8gU29ydCBiYXNlZCBvbiBlYWNoIHNlcmllcyBvcmRlclxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucGllXG4gICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQudmFsdWUgLy8gcHJvdmlkZSBpbmRleCBvZiB0aGlzIHNlcmllcyBpbiBkYXRhIEFyclxuICAgICAgfSlcblxuXG4gICAgaWYgKHRoaXMub3B0cy5kb251dFBlcmNlbnQgPiAxMDAgfHwgdGhpcy5vcHRzLmRvbnV0UGVyY2VudCA8IDApIHtcbiAgICAgIHRoaXMub3B0cy5kb251dFBlcmNlbnQgPSAxMDBcbiAgICB9XG5cbiAgICB0aGlzLm9wdHMuZG9udXRMZW5ndGggPSBNYXRoLmZsb29yKHRoaXMub3B0cy5kb251dFBlcmNlbnQgKiB0aGlzLm9wdHMucmFkaXVzIC8gMTAwKVxuXG4gICAgdGhpcy5vcHRzLnRvb2x0aXBIZWxwZXIgPSBhcmMoKVxuICAgICAgLm91dGVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMgKyAyICogY29uc3RhbnRzLlBJRV9UT09MVElQX0JVRkZFUilcbiAgICAgIC5pbm5lclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzKVxuXG4gICAgdGhpcy5hcmMgPSBhcmMoKVxuICAgIC8vIC5vdXRlclJhZGl1cyh0aGlzLm9wdHMucmFkaXVzKVxuICAgICAgLmlubmVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMgLSB0aGlzLm9wdHMuZG9udXRMZW5ndGgpXG4gIH1cblxuICBkcmF3ICgpIHtcblxuICAgIGNvbnN0IG91dGVyUmFkaXVzID0gdGhpcy5vcHRzLnJhZGl1c1xuICAgIGNvbnN0IGFyYyA9IHRoaXMuYXJjXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0aGlzLnBpZVRhZyA9IHRoaXMub3B0cy5jaGFydC5ncmFwaFpvbmUuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1waWUtcGxvdCB2Yy1waWUtJyArIHRoaXMub3B0cy5jbGFzc05hbWUpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHRoaXMub3B0cy5waWVQb3NQZXJjZW50YWdlIC8gMikgKyAnLCcgKyBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpICsgJyknKVxuXG4gICAgdGhpcy5hcmNab25lID0gdGhpcy5waWVUYWcuc2VsZWN0QWxsKCcudmMtcGllLWFyYycpXG4gICAgICAuZGF0YSh0aGlzLnBpZSh0aGlzLm9wdHMucGllRGF0YS5hcmNzKSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtcGllLWFyYycpXG5cbiAgICB0aGlzLmFyY1pvbmUuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGQub3V0ZXJSYWRpdXMgPSBvdXRlclJhZGl1c1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdkJywgdGhpcy5hcmMpXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuY29sb3JcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCBjb25zdGFudHMuUElFX0RBUktfT1BBQ0lUWSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMClcbiAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gdG9vbHRpcCBmZWF0dXJlXG4gICAgICAgIGNvbnN0IHRleHRQb3MgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3RleHQnKS5vZmZzZXQoKSAvLyBGaW5kIHBvc2l0aW9uIG9mIEFyYyByZXNwZWN0aXZlIHRvb2x0aXBIZWxwZXJcbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAgJiYgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAuaG92ZXIodGV4dFBvcy5sZWZ0LCB0ZXh0UG9zLnRvcCwgZClcbiAgICAgICAgLy8gRHVsbCBhbGwgb3RoZXIgQXJjc1xuICAgICAgICBzZWxmLmFyY1pvbmUuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjb25zdGFudHMuUElFX0RVTExfT1BBQ0lUWSlcbiAgICAgICAgLy8gUHJvdmlkZSBuZXcgcmFkaXVzIGFuZCBzdHJva2Utd2lkdGhcbiAgICAgICAgc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgY29uc3RhbnRzLlBJRV9EQVJLX09QQUNJVFkpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBjb25zdGFudHMuUElFX0FSQ19TVFJPS0UpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKS5kZWxheSgxMCkuYXR0clR3ZWVuKCdkJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBpbnRlcnBvbGF0ZShkLm91dGVyUmFkaXVzLCBvdXRlclJhZGl1cyArIGNvbnN0YW50cy5QSUVfSE9WRVJfQlVGRkVSKVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIGQub3V0ZXJSYWRpdXMgPSBpKHQpXG4gICAgICAgICAgICAgIHJldHVybiBhcmMoZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCkgeyAvLyBIaWRlIHRvb2x0aXBcbiAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAgJiYgc2VsZi5vcHRzLmNoYXJ0LnRvb2x0aXAuaGlkZSgpXG4gICAgICAgIC8vIFByb3ZpZGUgZGFyayBvcGFjaXR5IHRvIGFsbCBhcmNzXG4gICAgICAgIHNlbGYuYXJjWm9uZS5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGNvbnN0YW50cy5QSUVfREFSS19PUEFDSVRZKVxuICAgICAgICAvLyBSZXZlcnQgYmFjayB0byBpdHMgbG9hZGVkIHJhZGl1c1xuICAgICAgICBzZWxlY3QodGhpcylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDApXG4gICAgICAgICAgLnRyYW5zaXRpb24oKS5kZWxheSgxNTApLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gaW50ZXJwb2xhdGUoZC5vdXRlclJhZGl1cywgb3V0ZXJSYWRpdXMpXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgZC5vdXRlclJhZGl1cyA9IGkodClcbiAgICAgICAgICAgICAgcmV0dXJuIGFyYyhkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgLy8gQWRkIHRvb2x0aXAtaGVscGVyIGZvciBlYWNoIGFyYyBvdXRzaWRlIHBpZSBhcmVhXG4gICAgdGhpcy5hcmNab25lLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHNlbGYub3B0cy50b29sdGlwSGVscGVyLmNlbnRyb2lkKGQpICsgJyknXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gJ1QnXG4gICAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHRoaXMub3B0cy5yYWRpdXMgPSBNYXRoLmZsb29yKE1hdGgubWluKCh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHRoaXMub3B0cy5waWVQb3NQZXJjZW50YWdlKSwgdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KSAvIDIpXG4gICAgdGhpcy5waWVUYWcuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAqIHRoaXMub3B0cy5waWVQb3NQZXJjZW50YWdlIC8gMikgKyAnLCcgKyBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEhlaWdodCAvIDIpICsgJyknKVxuICAgIHRoaXMub3B0cy5kb251dExlbmd0aCA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmRvbnV0UGVyY2VudCAqIHRoaXMub3B0cy5yYWRpdXMgLyAxMDApXG5cbiAgICB0aGlzLmFyY1xuICAgICAgLm91dGVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMpXG4gICAgICAuaW5uZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cyAtIHRoaXMub3B0cy5kb251dExlbmd0aClcblxuICAgIHRoaXMub3B0cy50b29sdGlwSGVscGVyXG4gICAgICAub3V0ZXJSYWRpdXModGhpcy5vcHRzLnJhZGl1cyArIDIgKiBjb25zdGFudHMuUElFX1RPT0xUSVBfQlVGRkVSKVxuICAgICAgLmlubmVyUmFkaXVzKHRoaXMub3B0cy5yYWRpdXMpXG5cbiAgICB0aGlzLmFyY1pvbmUuc2VsZWN0KCdwYXRoJykuYXR0cignZCcsIHRoaXMuYXJjKVxuICAgIHRoaXMuYXJjWm9uZS5zZWxlY3QoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBzZWxmLm9wdHMudG9vbHRpcEhlbHBlci5jZW50cm9pZChkKSArICcpJ1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuICdUJ1xuICAgICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMucGllVGFnLmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgICB0aGlzLm9wdHMudmlzaWJsZSA9IHNob3dGbGFnXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuYXJjWm9uZSAmJiB0aGlzLmFyY1pvbmUucmVtb3ZlKClcbiAgICB0aGlzLnBpZVRhZyAmJiB0aGlzLnBpZVRhZy5yZW1vdmUoKVxuICAgIHRoaXMub3B0cy50b29sdGlwSGVscGVyID0gbnVsbFxuICAgIHRoaXMuYXJjID0gbnVsbFxuICAgIHRoaXMucGllID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufSIsImltcG9ydCBTZXJpZXMgZnJvbSAnQC9zZXJpZXMvU2VyaWVzJ1xuaW1wb3J0IFBpZSBmcm9tICdAL3Nlcmllcy9QaWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZVNlcmllcyBleHRlbmRzIFNlcmllcyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IG9wdHNcbiAgICB0aGlzLnBsb3RTZXJpZXMgPSBbXVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9ucy5jaGFydERhdGFcbiAgICBjb25zdCBwaWVJbmZvID0gdGhpcy5vcHRzLmNoYXJ0Lm9wdGlvbnMuc2VyaWVzLnBpZVxuXG4gICAgdGhpcy5wbG90U2VyaWVzLnB1c2gobmV3IFBpZSh7XG4gICAgICBjaGFydDogdGhpcy5vcHRzLmNoYXJ0LFxuICAgICAgY2xhc3NOYW1lOiBwaWVJbmZvLmNsYXNzTmFtZSB8fCBwaWVJbmZvLm5hbWUsXG4gICAgICBwaWVEYXRhOiBkYXRhLFxuICAgICAgZG9udXRQZXJjZW50OiBwaWVJbmZvLmRvbnV0UGVyY2VudCB8fCAxMDAsXG4gICAgICB2aXNpYmxlOiBwaWVJbmZvLnZpc2libGVcbiAgICB9KSlcbiAgfVxuXG59IiwiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IHtpc0Z1bmN0aW9ufSBmcm9tICdAL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1Rvb2x0aXAgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0sIG9wdHMpXG5cbiAgICAvLyBQcm92aWRlIGJhc2ljIGZvcm1hdHRlciB0byBkaXNwbGF5IGhvdmVyIGRhdGFcbiAgICBpZiAoIWlzRnVuY3Rpb24odGhpcy5vcHRzLmZvcm1hdCkpIHtcbiAgICAgIHRoaXMub3B0cy5mb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gYDxzcGFuPiBUb29sVGlwIFRleHQgOiA8L3NwYW4+PGJyLz48c3Bhbj4ke0pTT04uc3RyaW5naWZ5KGQpfTwvc3Bhbj5gXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy4kdG9vbFRpcERpdiA9ICQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ3ZjLXRvb2x0aXAtZGlzcGxheSAnICsgdGhpcy5vcHRzLmNsYXNzTmFtZSlcbiAgICB0aGlzLm9wdHMuY2hhcnQuJGNvbnRhaW5lclxuICAgICAgLmFwcGVuZCh0aGlzLiR0b29sVGlwRGl2KVxuICB9XG5cbiAgaG92ZXIgKHgsIHksIGRpc3BsYXlEYXRhLCBleGNsdWRlVG9vbFRpcERpdikge1xuICAgIC8vIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgc2VyaWVzIC0tIGJhciAvIHBpZVxuICAgIHZhciByb290UG9zID0gdGhpcy5vcHRzLmNoYXJ0LiRjb250YWluZXIub2Zmc2V0KClcbiAgICB2YXIgeHBvcyA9IE1hdGgucm91bmQoeCAtIHJvb3RQb3MubGVmdClcbiAgICB2YXIgeXBvcyA9IE1hdGgucm91bmQoeSAtIHJvb3RQb3MudG9wKVxuXG4gICAgaWYgKCFleGNsdWRlVG9vbFRpcERpdikge1xuICAgICAgLy8gQ29uc2lkZXIgdG9vbFRpcCBvZmZzZXQgZm9yIHBvc2l0aW9uXG4gICAgICB4cG9zID0gTWF0aC5yb3VuZCh4cG9zIC0gKHRoaXMuJHRvb2xUaXBEaXYud2lkdGgoKSAvIDIpKVxuICAgICAgeXBvcyA9IE1hdGgucm91bmQoeXBvcyAtICh0aGlzLiR0b29sVGlwRGl2LmhlaWdodCgpIC8gMikpXG4gICAgfVxuXG4gICAgdGhpcy4kdG9vbFRpcERpdlxuICAgICAgLmNzcyh7XG4gICAgICAgIGxlZnQ6IHhwb3MgKyAncHgnLFxuICAgICAgICB0b3A6IHlwb3MgKyAncHgnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgfSlcbiAgICAgIC5odG1sKHRoaXMub3B0cy5mb3JtYXQuY2FsbCh0aGlzLm9wdHMuY2hhcnQsIGRpc3BsYXlEYXRhLmRhdGEpKSAvLyBVc2VkIGZvcm1hdC5jYWxsKCksIHNvIHRoYXQgZXh0ZXJuYWwgZnVuIGNhbiBoYXZlIGFjY2VzcyBvZiBjaGFydCBJbnN0YW5jZVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgc2hvd0ZsYWcgPSAhIXNob3dGbGFnXG5cbiAgICBpZiAoc2hvd0ZsYWcpIHtcbiAgICAgIHRoaXMuJHRvb2xUaXBEaXYgJiYgdGhpcy4kdG9vbFRpcERpdi5zaG93KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kdG9vbFRpcERpdiAmJiB0aGlzLiR0b29sVGlwRGl2LmhpZGUoKVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy4kdG9vbFRpcERpdiAmJiB0aGlzLiR0b29sVGlwRGl2LnJlbW92ZSgpXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9