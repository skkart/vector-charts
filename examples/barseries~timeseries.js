(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["barseries~timeseries"],{

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

/***/ "./charts/Chart.js":
/*!*************************!*\
  !*** ./charts/Chart.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/number/is-finite */ "../node_modules/babel-runtime/core-js/number/is-finite.js");
/* harmony import */ var babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/uniqueId */ "../node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");
/* harmony import */ var _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/charts/ChartComponent */ "./charts/ChartComponent.js");











var Chart = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Chart, _ChartComponent);

  function Chart(container, opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Chart);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Chart.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Chart)).call(this));

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isString"])(container) && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opts) && container.length && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opts.dataParser)) {
      _this.$container = $(container);
      if (!_this.$container.length) {
        throw new Error('The graph container spectifed in options doesnt exist inside in Document Body');
      }
      opts.containerName = container;
      var takeContainerWidth = false;
      if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(opts.chart.width)) {
        opts.chart.width = _this.$container.width();
        takeContainerWidth = true;
      }

      var takeContainerHeight = false;
      if (!babel_runtime_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_0___default()(opts.chart.height)) {
        opts.chart.height = _this.$container.height();
        takeContainerHeight = true;
      }

      if (opts.chart.width > opts.chart.maxWidth) {
        opts.chart.width = opts.chart.maxWidth;
      }

      if (opts.chart.width < opts.chart.minWidth) {
        opts.chart.width = opts.chart.minWidth;
      }

      _this.options = opts;

      _this.chartHeight = opts.chart.height;
      _this.chartWidth = opts.chart.width;
      _this.margin = opts.chart.margin;
      _this.chartType = opts.chart.chartType;

      if (takeContainerWidth) {
        _this.chartWidth = _this.chartWidth - (_this.margin.left + _this.margin.right);
      }

      if (takeContainerHeight) {
        _this.chartHeight = _this.chartHeight - (_this.margin.top + _this.margin.bottom);
      }

      // Attach dataProcess to chart, which generate chartData and plot Info based on JSON and options
      _this.dataParser = opts.dataParser;

      // Delete dataProcess from options
      delete _this.options.dataParser;

      _this.chartFullSpace = {
        width: _this.chartWidth + _this.margin.left + _this.margin.right,
        height: _this.chartHeight + _this.margin.top + _this.margin.bottom

        // Array which holds all the chartComponents required for the graph like axis, series, tooltip, legend etc
      };_this.chartComponentsArr = [];

      _this.svg = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["select"])(_this.$container.get(0)).select('svg');

      if (_this.svg.size() === 0) {
        // Create svg element if not exist inside chart container DIV
        _this.svg = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_8__["select"])(_this.$container.get(0)).select('.vc-div-svg').append('svg');
      }

      // Clear svg if it has needless content
      $(_this.svg.node()).empty();

      _this.svg.attr('width', _this.chartFullSpace.width).attr('height', _this.chartFullSpace.height).attr('class', 'vc-svg ' + opts.chart.className);

      // Add defs to show plot series within the def specified width and height
      _this.svg.append('defs').append('clipPath').attr('id', lodash_uniqueId__WEBPACK_IMPORTED_MODULE_7___default()('chart_clip')).append('rect').attr('width', _this.chartWidth).attr('height', _this.chartHeight);

      // Add graphZone tag, so that all series and axis are grouped together
      _this.graphZone = _this.svg.append('g').attr('transform', 'translate(' + _this.margin.left + ',' + _this.margin.top + ')').attr('class', 'vc-graphZone');
    }
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Chart, [{
    key: 'draw',
    value: function draw() {
      console.log('Chart draw', this);
      // Draw all the chartComponents in the same order of there initilization using chartComponentsArr
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          chartCmpt.draw();
        }
      });
    }
  }, {
    key: 'update',
    value: function update() {
      this.svg.attr('width', this.chartFullSpace.width);
      this.graphZone.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
      this.svg.select('clipPath').select('rect').attr('width', this.chartWidth);

      console.log('Chart update', this);
      // Update all chart component based on new width changes
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          chartCmpt.update();
        }
      });
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      console.log('Chart showHide', this);
      showFlag = !!showFlag; // Convert any type to boolean
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          chartCmpt.showHide(showFlag);
        }
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      console.log('ac.chart remove', this);
      this.chartComponentsArr.forEach(function (chartCmpt) {
        if (chartCmpt instanceof _charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          chartCmpt.remove();
        }
      });
    }

    // chartResponsive based on screen resize is handled

  }, {
    key: 'chartResponsive',
    value: function chartResponsive() {
      var _this2 = this;

      if (this.options.chart.chartResize) {
        this.throttedResize = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["throttle"])(function (width, height) {
          if (width === _this2.chartFullSpace.width) {
            return; // Dont resize if graph is already adjusted
          }
          _this2.chartFullSpace.width = Math.floor(width);
          _this2.chartFullSpace.height = Math.floor(height);
          _this2.chartWidth = _this2.chartFullSpace.width - (_this2.margin.left + _this2.margin.right);
          _this2.chartHeight = _this2.chartFullSpace.height - (_this2.margin.top + _this2.margin.bottom);
          setTimeout(function () {
            return _this2.update();
          }, 0);
        }, 450); // 'this' Will have reference of timeSeriesChart or pieSeriesChart

        // Add resize for each chart based on chart ID namespace
        var chartId = 'ac_' + this.options.chart.id;
        $(window).on('resize.' + chartId, function () {
          return _this2.autoSizeChart();
        });
      }
    }
  }, {
    key: 'autoSizeChart',
    value: function autoSizeChart() {
      var resizedGraphWidth = this.$container.width();

      if (resizedGraphWidth > this.options.chart.maxWidth) {
        resizedGraphWidth = this.options.chart.maxWidth;
      }

      if (resizedGraphWidth < this.options.chart.minWidth) {
        resizedGraphWidth = this.options.chart.minWidth;
      }

      this.throttedResize(resizedGraphWidth, this.$container.height());
    }

    // Destroy all chart properties and components

  }, {
    key: 'destroy',
    value: function destroy(destroyFull) {
      destroyFull = !!destroyFull;
      // Remove resize hander on window for vcChart namespace
      if (this.options.chart.chartResize) {
        var chartId = 'ac_' + this.options.chart.id;
        $(window).off('resize.' + chartId);
      }

      // Remove all chartComponents (timeSeriesChart or pieSeriesChart)
      this.remove();

      // Remove svg and container if destroyFull is true
      destroyFull && this.svg.remove();
      destroyFull && this.$container.remove();

      return null;
    }
  }]);

  return Chart;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./d3Importer.js":
/*!***********************!*\
  !*** ./d3Importer.js ***!
  \***********************/
/*! exports provided: scaleBand, scaleLinear, scaleTime, axisBottom, axisTop, axisLeft, axisRight, timeFormat, select, d3Mouse, d3Event, range, max, transpose, bisector, brushX, brushY, line, stack, area, stackOrderNone, stackOffsetNone, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "../node_modules/d3-scale/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]; });

/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-axis */ "../node_modules/d3-axis/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisRight"]; });

/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "../node_modules/d3-time-format/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]; });

/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "../node_modules/d3-selection/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Mouse", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_3__["mouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3Event", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"]; });

/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "../node_modules/d3-array/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return d3_array__WEBPACK_IMPORTED_MODULE_4__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return d3_array__WEBPACK_IMPORTED_MODULE_4__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return d3_array__WEBPACK_IMPORTED_MODULE_4__["transpose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return d3_array__WEBPACK_IMPORTED_MODULE_4__["bisector"]; });

/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-brush */ "../node_modules/d3-brush/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushX", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_5__["brushX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushY", function() { return d3_brush__WEBPACK_IMPORTED_MODULE_5__["brushY"]; });

/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-shape */ "../node_modules/d3-shape/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_6__["line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_6__["stack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_6__["area"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_6__["stackOrderNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_6__["stackOffsetNone"]; });















/* harmony default export */ __webpack_exports__["default"] = ({
  version: 'v5'
});

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: addDefaultChartOptions, defaultValueFormat, addDefaultTSOptions, addDefaultBSOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultChartOptions", function() { return addDefaultChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultValueFormat", function() { return defaultValueFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultTSOptions", function() { return addDefaultTSOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultBSOptions", function() { return addDefaultBSOptions; });
/* harmony import */ var babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/number/max-safe-integer */ "../node_modules/babel-runtime/core-js/number/max-safe-integer.js");
/* harmony import */ var babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "../node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ "./constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./utils.js");
/* harmony import */ var _d3Importer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/d3Importer */ "./d3Importer.js");






function addDefaultChartOptions(opts) {

  opts.chart = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    chartResize: false,
    isTouchScreen: false,
    className: '',
    maxWidth: babel_runtime_core_js_number_max_safe_integer__WEBPACK_IMPORTED_MODULE_0___default.a,
    minWidth: 0
  }, opts.chart);

  opts.tooltip = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, opts.tooltip || {});

  opts.legend = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    legendPrefix: '',
    position: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].DIR_TOP
  }, opts.legend || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.afterDraw)) {
    opts.afterDraw = function (c) {
      return c;
    };
  }

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.onComplete)) {
    opts.onComplete = function (time) {
      console.log('Chart loading of ' + opts.containerName + ' is completed in ' + time + ' ms');
    };
  }

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.onError)) {
    opts.onError = function (error) {
      console.log('Chart has encountered error of ' + opts.containerName + ' ', error);
    };
  }

  return opts;
}

function defaultValueFormat(val) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  var denominator = 1000;
  if (val > denominator) {
    var kVal = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(val / denominator, decimals);
    if (kVal > denominator) {
      var mVal = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(kVal / denominator, decimals);
      return mVal + 'M ' + unit;
    }
    return kVal + 'K ' + unit;
  }
  return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getValueWithDecimals"])(val, decimals) + ' ' + unit;
}

function addDefaultTSOptions(opts) {
  // Add defaults to xAxis
  opts.xAxis = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    bottom: {
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_TIME,
      visible: true
    }
  }, opts.xAxis || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.xAxis.bottom.tickFormatter)) {
    var timeInfo = opts.timeInfo;
    // If the date range is less than 2 days, Show in hour format
    var timeLen = timeInfo.timeRange.length;
    var dateDiff = timeInfo.timeRange[timeLen - 1] - timeInfo.timeRange[0];

    var xAxisFn = dateDiff < _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TIME_FORMAT_BUFFER ? Object(_d3Importer__WEBPACK_IMPORTED_MODULE_4__["timeFormat"])('%H:%M') : Object(_d3Importer__WEBPACK_IMPORTED_MODULE_4__["timeFormat"])('%d %b %Y');
    opts.xAxis.bottom.tickFormatter = function (xDate) {
      return xAxisFn(xDate);
    };
  }

  // If yAxis is not specified, then default is left and its value axis with unit
  if (!opts.yAxis) {
    opts.yAxis = {
      left: {}
    };
  }

  if (opts.yAxis.left) {
    opts.yAxis.left = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.left);
  }

  if (opts.yAxis.right) {
    opts.yAxis.right = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.right);
  }

  opts.zoom = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: false
  }, opts.zoom || {});

  // General Options to both chartType
  opts.tooltip = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, opts.tooltip || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.tooltip.format)) {
    var formatTime = Object(_d3Importer__WEBPACK_IMPORTED_MODULE_4__["timeFormat"])('%d %b %Y  %H:%M:%S');
    opts.tooltip.format = function (d) {
      if (!d || !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(d)) {
        return '';
      }
      var plotSet = this.options.plotSet;
      var timeInfo = this.options.timeInfo;
      var zoneOffset = this.options.xAxis.zoneOffset || '';
      var yAxis = this.options.yAxis;

      var tableStr = '<table><tbody><tr>\n            <td class="value_full" colspan="2">\n            ' + formatTime(d[timeInfo.dataIndex]) + ' ' + zoneOffset + '\n            </td></tr>';

      for (var key in plotSet) {
        var val = d[plotSet[key].dataIndex];
        if (!plotSet[key].visible || isNaN(val)) {
          continue;
        }

        // Find Y Axis format is preset
        var yOrient = yAxis[plotSet[key].plotAxis[0]];
        var format = yOrient.format || defaultValueFormat;

        tableStr += '<tr>\n        <td class=\'name\'>\n            <span style=\'background-color:' + plotSet[key].color + '\'></span>' + plotSet[key].name + '\n        </td>\n        <td class=\'value\'>\n            ' + format(val, plotSet[key].unit) + '\n        </td>\n        </tr>';
      }

      tableStr += '</tbody></table>';

      return tableStr;
    };
  }

  addDefaultChartOptions(opts);

  return opts;
}

function addDefaultBSOptions(opts) {
  // Add defaults to xAxis
  opts.xAxis = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    bottom: {
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      visible: true
    }
  }, opts.xAxis || {});

  // If yAxis is not specified, then default is left and its value axis with unit
  if (!opts.yAxis) {
    opts.yAxis = {
      left: {}
    };
  }

  if (opts.yAxis.left) {
    opts.yAxis.left = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.left);
  }

  if (opts.yAxis.right) {
    opts.yAxis.right = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
      unit: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.right);
  }

  opts.zoom = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: false
  }, opts.zoom || {});

  // General Options to both chartType
  opts.tooltip = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, opts.tooltip || {});

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(opts.tooltip.format)) {
    opts.tooltip.format = function (d) {
      var dataArr = d;
      if (d && d.val) {
        dataArr = d.val;
      }
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(dataArr)) {
        return '';
      }
      var plotSet = this.options.plotSet;
      var timeInfo = this.options.timeInfo;
      var yAxis = this.options.yAxis;

      var tableStr = '<table><tbody><tr>\n            <td class="value_full" colspan="2">\n            ' + dataArr[timeInfo.dataIndex] + '\n            </td></tr>';

      for (var key in plotSet) {
        var val = dataArr[plotSet[key].dataIndex];
        if (!plotSet[key].visible || isNaN(val)) {
          continue;
        }

        // Find Y Axis format is preset
        var yOrient = yAxis[plotSet[key].plotAxis[0]];
        var format = yOrient.format || defaultValueFormat;

        tableStr += '<tr>\n        <td class=\'name\'>\n            <span style=\'background-color:' + plotSet[key].color + '\'></span>\n        </td>\n        <td class=\'value\'>\n            ' + format(val, plotSet[key].unit) + '\n        </td>\n        </tr>';
      }

      tableStr += '</tbody></table>';

      return tableStr;
    };
  }

  addDefaultChartOptions(opts);

  return opts;
}

/***/ }),

/***/ "./series/Series.js":
/*!**************************!*\
  !*** ./series/Series.js ***!
  \**************************/
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







var Series = function (_ChartComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Series, _ChartComponent);

  function Series(opts) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Series);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Series.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Series)).call(this));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Series, [{
    key: 'draw',
    value: function draw() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.draw();
      });
    }
  }, {
    key: 'update',
    value: function update() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.update();
      });
    }
  }, {
    key: 'showHide',
    value: function showHide(showFlag) {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.showHide(showFlag);
      });
    }

    // Redraw is called when series is toggled from Legends

  }, {
    key: 'redraw',
    value: function redraw() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.redraw();
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.plotSeries.forEach(function (plotFn) {
        plotFn.remove();
      });
      this.plotSeries = null;
      this.opts = null;
    }
  }]);

  return Series;
}(_charts_ChartComponent__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Series);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2F4aXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdmMvLi9jaGFydHMvQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vdmMvLi9kM0ltcG9ydGVyLmpzIiwid2VicGFjazovL3ZjLy4vaGVscGVycy5qcyIsIndlYnBhY2s6Ly92Yy8uL3Nlcmllcy9TZXJpZXMuanMiXSwibmFtZXMiOlsiQXhpcyIsIm9wdHMiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsIm9yaWVudCIsImxhYmVsIiwidW5pdCIsInJhbmdlU2NhbGUiLCJkb21haW5TY2FsZSIsInNjYWxlVHlwZSIsImF4aXNDbGFtcCIsInRpY2tOdW1iZXIiLCJyb3RhdGVUZXh0IiwidGV4dExpbWl0IiwidGlja0Zvcm1hdHRlciIsInNob3dHcmlkTGluZXMiLCJ0aWNrUGFkZGluZyIsImNvbnN0YW50cyIsIlRJQ0tfUEFERElORyIsInNjYWxlUGFkZGluZyIsIlNDQUxFX1BBRERJTkciLCJ2aXNpYmxlIiwiYXhpcyIsInNjYWxlIiwic2NhbGVCYW5kIiwic2NhbGVMaW5lYXIiLCJVTklUU19USU1FIiwic2NhbGVUaW1lIiwiRElSX0JPVFRPTSIsImF4aXNCb3R0b20iLCJESVJfVE9QIiwiYXhpc1RvcCIsInRpY2tTaXplSW5uZXIiLCJjaGFydCIsImNoYXJ0SGVpZ2h0IiwidGlja1ZhbHVlcyIsIkRJUl9MRUZUIiwiYXhpc0xlZnQiLCJESVJfUklHSFQiLCJheGlzUmlnaHQiLCJjaGFydFdpZHRoIiwiaXNGdW5jdGlvbiIsImV4dGVybmFsRm9ybWF0dGVyIiwidmFsIiwic2VsZiIsInVuc2hpZnQiLCJ1cGRhdGUiLCJ0cmFuc2Zvcm1BdHRyIiwiYXhpc1RhZyIsImdyYXBoWm9uZSIsImFwcGVuZCIsImF0dHIiLCJ0aWNrRm9ybWF0IiwiYXhpc0xhYmVsVGFnIiwidGV4dCIsImNsYXNzZWQiLCJ4VHJhbnMiLCJ5VHJhbnMiLCJyb3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJYX0FYSVNfTEFCRUxfWSIsIm1hcmdpbiIsImxlZnQiLCJCUlVTSFlfQlVGRkVSIiwicmlnaHQiLCJsZW5ndGgiLCJwYWRkaW5nIiwiY2xhbXAiLCJyYW5nZSIsImRvbWFpbiIsImlzTnVtYmVyIiwidGlja1ZhbCIsIm5ld1RpY2siLCJkYXlMZW5ndGgiLCJtaW51dGVMZW5ndGgiLCJ0aWNrcyIsImNhbGwiLCJsaW1pdFRleHQiLCJ0aWNrRm10IiwiZW1wdHlGbiIsInNlbGVjdEFsbCIsInN0eWxlIiwiZCIsImkiLCJ0cnVuY2F0ZVRleHQiLCJzaG93RmxhZyIsInJlbW92ZSIsIkNoYXJ0Q29tcG9uZW50IiwiQ2hhcnQiLCJjb250YWluZXIiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwiZGF0YVBhcnNlciIsIiRjb250YWluZXIiLCIkIiwiRXJyb3IiLCJjb250YWluZXJOYW1lIiwidGFrZUNvbnRhaW5lcldpZHRoIiwid2lkdGgiLCJ0YWtlQ29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsIm9wdGlvbnMiLCJjaGFydFR5cGUiLCJ0b3AiLCJib3R0b20iLCJjaGFydEZ1bGxTcGFjZSIsImNoYXJ0Q29tcG9uZW50c0FyciIsInN2ZyIsInNlbGVjdCIsImdldCIsInNpemUiLCJub2RlIiwiZW1wdHkiLCJ1bmlxdWVJZCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiY2hhcnRDbXB0IiwiZHJhdyIsInNob3dIaWRlIiwiY2hhcnRSZXNpemUiLCJ0aHJvdHRlZFJlc2l6ZSIsInRocm90dGxlIiwic2V0VGltZW91dCIsImNoYXJ0SWQiLCJpZCIsIndpbmRvdyIsIm9uIiwiYXV0b1NpemVDaGFydCIsInJlc2l6ZWRHcmFwaFdpZHRoIiwiZGVzdHJveUZ1bGwiLCJvZmYiLCJ2ZXJzaW9uIiwiYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyIsImlzVG91Y2hTY3JlZW4iLCJ0b29sdGlwIiwiZm9ybWF0IiwibGVnZW5kIiwibGVnZW5kUHJlZml4IiwiYWZ0ZXJEcmF3IiwiYyIsIm9uQ29tcGxldGUiLCJ0aW1lIiwib25FcnJvciIsImVycm9yIiwiZGVmYXVsdFZhbHVlRm9ybWF0IiwiZGVjaW1hbHMiLCJkZW5vbWluYXRvciIsImtWYWwiLCJnZXRWYWx1ZVdpdGhEZWNpbWFscyIsIm1WYWwiLCJhZGREZWZhdWx0VFNPcHRpb25zIiwieEF4aXMiLCJ0aW1lSW5mbyIsInRpbWVMZW4iLCJ0aW1lUmFuZ2UiLCJkYXRlRGlmZiIsInhBeGlzRm4iLCJUSU1FX0ZPUk1BVF9CVUZGRVIiLCJ0aW1lRm9ybWF0IiwieERhdGUiLCJ5QXhpcyIsIlVOSVRTX0RFRiIsIm1pbiIsInpvb20iLCJmb3JtYXRUaW1lIiwiaXNBcnJheSIsInBsb3RTZXQiLCJ6b25lT2Zmc2V0IiwidGFibGVTdHIiLCJkYXRhSW5kZXgiLCJrZXkiLCJpc05hTiIsInlPcmllbnQiLCJwbG90QXhpcyIsImNvbG9yIiwibmFtZSIsImFkZERlZmF1bHRCU09wdGlvbnMiLCJkYXRhQXJyIiwiU2VyaWVzIiwicGxvdFNlcmllcyIsInBsb3RGbiIsInJlZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQWFDLElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0EsSUFBTCxHQUFZLDJFQUFjO0FBQ3hCQyxpQkFBVyxFQURhO0FBRXhCQyxnQkFBVSxHQUZjO0FBR3hCQyxjQUFRLE1BSGdCO0FBSXhCQyxhQUFPLEVBSmlCO0FBS3hCQyxZQUFNLEVBTGtCO0FBTXhCQyxrQkFBWSxDQUFDLENBQUQsRUFBSSxJQUFKLENBTlk7QUFPeEJDLG1CQUFhLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FQVztBQVF4QkMsaUJBQVcsRUFSYTtBQVN4QkMsaUJBQVcsSUFUYTtBQVV4QkMsa0JBQVksSUFWWTtBQVd4QkMsa0JBQVksS0FYWTtBQVl4QkMsaUJBQVcsQ0FaYTtBQWF4QkMscUJBQWUsS0FiUyxFQWFGO0FBQ3RCQyxxQkFBZSxLQWRTO0FBZXhCQyxt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QSxlQUFPL0QsSUFBUDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVTO0FBQ1IsV0FBSzhELFVBQUwsQ0FBZ0JoRSxPQUFoQixDQUF3QixVQUFVaUUsTUFBVixFQUFrQjtBQUN4Q0EsZUFBTzFJLE1BQVA7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFU3dDLFEsRUFBVTtBQUNsQixXQUFLaUcsVUFBTCxDQUFnQmhFLE9BQWhCLENBQXdCLFVBQVVpRSxNQUFWLEVBQWtCO0FBQ3hDQSxlQUFPOUQsUUFBUCxDQUFnQnBDLFFBQWhCO0FBQ0QsT0FGRDtBQUdEOztBQUVEOzs7OzZCQUNVO0FBQ1IsV0FBS2lHLFVBQUwsQ0FBZ0JoRSxPQUFoQixDQUF3QixVQUFVaUUsTUFBVixFQUFrQjtBQUN4Q0EsZUFBT0MsTUFBUDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVTO0FBQ1IsV0FBS0YsVUFBTCxDQUFnQmhFLE9BQWhCLENBQXdCLFVBQVVpRSxNQUFWLEVBQWtCO0FBQ3hDQSxlQUFPakcsTUFBUDtBQUNELE9BRkQ7QUFHQSxXQUFLZ0csVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUt0TCxJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBcENpQ3VGLDhEOztBQUFmOEYscUUiLCJmaWxlIjoiYmFyc2VyaWVzfnRpbWVzZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5pbXBvcnQge1xuICBheGlzQm90dG9tLCBheGlzVG9wLCBheGlzTGVmdCwgYXhpc1JpZ2h0LFxuICBzY2FsZUJhbmQsIHNjYWxlTGluZWFyLCBzY2FsZVRpbWVcbn0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7ZW1wdHlGbiwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIHRydW5jYXRlVGV4dH0gZnJvbSAnQC91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgcG9zaXRpb246ICd5JyxcbiAgICAgIG9yaWVudDogJ2xlZnQnLFxuICAgICAgbGFiZWw6ICcnLFxuICAgICAgdW5pdDogJycsXG4gICAgICByYW5nZVNjYWxlOiBbMCwgMTAwMF0sXG4gICAgICBkb21haW5TY2FsZTogWzAsIDEwMF0sXG4gICAgICBzY2FsZVR5cGU6ICcnLFxuICAgICAgYXhpc0NsYW1wOiB0cnVlLFxuICAgICAgdGlja051bWJlcjogbnVsbCxcbiAgICAgIHJvdGF0ZVRleHQ6IGZhbHNlLFxuICAgICAgdGV4dExpbWl0OiA4LFxuICAgICAgdGlja0Zvcm1hdHRlcjogZmFsc2UsIC8vIFVzZSBkMyB0aWNrRm9ybWF0dGVyXG4gICAgICBzaG93R3JpZExpbmVzOiBmYWxzZSxcbiAgICAgIHRpY2tQYWRkaW5nOiBjb25zdGFudHMuVElDS19QQURESU5HLFxuICAgICAgc2NhbGVQYWRkaW5nOiBjb25zdGFudHMuU0NBTEVfUEFERElORyxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzKVxuXG4gICAgdGhpcy5heGlzID0gbnVsbFxuICAgIC8vIENyZWF0ZSBBeGlzIGFuZCBTY2FsZSBiYXNlZCBvbiBpbnB1dCBvcHRpb25zXG4gICAgaWYgKHRoaXMub3B0cy5zY2FsZVR5cGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVCYW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAgIGlmICh0aGlzLm9wdHMudW5pdCA9PT0gY29uc3RhbnRzLlVOSVRTX1RJTUUpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlVGltZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3gnKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgICAgdGhpcy5heGlzID0gYXhpc0JvdHRvbSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfVE9QKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNUb3AoKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0KSlcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIEhvbGRzIGFsbCB0aWNrIHZhbHVlcyB0aGF0IGF4aXMgc2hvd3NcbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSBbXVxuXG4gICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3knKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXNMZWZ0KClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICB0aGlzLmF4aXMgPSBheGlzUmlnaHQoKVxuICAgICAgICB0aGlzLmF4aXMudGlja1NpemVJbm5lcigwKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0cy5zaG93R3JpZExpbmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYXhpcy50aWNrU2l6ZUlubmVyKC0odGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikpIHtcbiAgICAgICAgLy8gSWYgZXh0ZXJuYWwgZm9ybWF0dGVyIGlzIHByb3ZpZGVkLCBtb2RpZnkgZm9ybWF0dGVyIHRvIHBvcHVsYXRlIHRpY2tWYWx1ZXNcbiAgICAgICAgY29uc3QgZXh0ZXJuYWxGb3JtYXR0ZXIgPSB0aGlzLm9wdHMudGlja0Zvcm1hdHRlclxuICAgICAgICB0aGlzLm9wdHMudGlja0Zvcm1hdHRlciA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBzZWxmLnRpY2tWYWx1ZXMudW5zaGlmdCh2YWwpXG4gICAgICAgICAgcmV0dXJuIGV4dGVybmFsRm9ybWF0dGVyKHZhbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdHMudGlja1BhZGRpbmcgPiAwKSB7XG4gICAgICB0aGlzLmF4aXMudGlja1BhZGRpbmcodGhpcy5vcHRzLnRpY2tQYWRkaW5nKVxuICAgIH1cbiAgfVxuXG4gIG1vZGlmeUF4aXNQcm9wcyAob3B0cyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdHMsIG9wdHMpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gbnVsbFxuXG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybUF0dHIgPSBgdHJhbnNsYXRlKDAsJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRIZWlnaHR9KWBcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfUklHSFQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtQXR0ciA9IGB0cmFuc2xhdGUoJHt0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aH0sMClgXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnID0gdGhpcy5vcHRzLmNoYXJ0LmdyYXBoWm9uZS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgYHZjLWF4aXMgdmMtYXhpcy0ke3RoaXMub3B0cy5vcmllbnR9IHZjLWF4aXMtJHt0aGlzLm9wdHMuY2xhc3NOYW1lfWApXG5cblxuICAgIC8vIElmIG5vIGZvcm1hdHRlciBpcyBwcm92aWRlZCwgYXhpcyB1c2VzIGQzIGRlZmF1bHQgZm9ybWF0dGVyXG4gICAgaXNGdW5jdGlvbih0aGlzLm9wdHMudGlja0Zvcm1hdHRlcikgJiYgdGhpcy5heGlzLnRpY2tGb3JtYXQodGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpXG5cbiAgICAvLyBBZGQgTGFiZWwgdG8gQXhpc1xuICAgIGlmICh0aGlzLm9wdHMubGFiZWwpIHtcbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgPSB0aGlzLmF4aXNUYWcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWF4aXMtbGFiZWwnKVxuICAgICAgICAudGV4dCh0aGlzLm9wdHMubGFiZWwpXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgLy8gSUYgbm90IHZpc2libGUsIERvbnQgc2hvdyB0aGUgYXhpcywgYnV0IHN0aWxsIHNjYWxlIGFuZCBwbG90IG9uIGdyYXBoWm9uZSwgc28gdGhhdCBhbGwgc2VyaWVzIGNhbiBiZSBwbG90dGVkXG4gICAgIXRoaXMub3B0cy52aXNpYmxlICYmIHRoaXMuYXhpc1RhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCB0cnVlKVxuICB9XG5cbiAgLy8gVXBkYXRlcyBncmFwaCBBeGlzIGJhc2VkIG9uIG5ldyB3aWR0aCBhbmQgbW9kaWZ5IHJhbmdlLCBkb21haW4gYW5kIHRpY2tzXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMub3B0cy5vcmllbnQgPT09IGNvbnN0YW50cy5ESVJfQk9UVE9NKSB7XG4gICAgICB0aGlzLm9wdHMucmFuZ2VTY2FsZSA9IFswLCB0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aF1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1BdHRyID0gYHRyYW5zbGF0ZSgke3RoaXMub3B0cy5jaGFydC5jaGFydFdpZHRofSwwKWBcbiAgICB9XG5cblxuICAgIC8vIFBvc2l0aW9uIGxhYmVsLCBzY2FsZSwgdGlja3MsIGF4aXMgYmFzZWQgb24gY2hhcnQgd2lkdGhcbiAgICBpZiAodGhpcy5vcHRzLmxhYmVsKSB7XG4gICAgICBsZXQgeFRyYW5zID0gMFxuICAgICAgbGV0IHlUcmFucyA9IDBcbiAgICAgIGxldCByb3RhdGUgPSAwXG4gICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9CT1RUT00pIHtcbiAgICAgICAgeFRyYW5zID0gTWF0aC5mbG9vcih0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCAvIDIpXG4gICAgICAgIHlUcmFucyA9IGNvbnN0YW50cy5YX0FYSVNfTEFCRUxfWVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdHMub3JpZW50ID09PSBjb25zdGFudHMuRElSX0xFRlQgfHwgdGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuICAgICAgICBpZiAodGhpcy5vcHRzLm9yaWVudCA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG4gICAgICAgICAgeFRyYW5zID0gLSh0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQpICsgY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSAyNzBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4VHJhbnMgPSB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnJpZ2h0IC0gY29uc3RhbnRzLkJSVVNIWV9CVUZGRVJcbiAgICAgICAgICByb3RhdGUgPSA5MFxuICAgICAgICB9XG4gICAgICAgIHlUcmFucyA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0SGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWdcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsXG4gICAgICAgICAgYHRyYW5zbGF0ZSgke3hUcmFuc30sJHt5VHJhbnN9KSByb3RhdGUoJHtyb3RhdGV9KWApXG4gICAgfVxuXG4gICAgdGhpcy50aWNrVmFsdWVzID0gW11cblxuICAgIGxldCBkb21haW5TY2FsZSA9IFt0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0sIHRoaXMub3B0cy5kb21haW5TY2FsZVt0aGlzLm9wdHMuZG9tYWluU2NhbGUubGVuZ3RoIC0gMV1dXG4gICAgaWYgKHRoaXMub3B0cy5zY2FsZVR5cGUgPT09ICdzY2FsZUJhbmQnKSB7XG4gICAgICBkb21haW5TY2FsZSA9IHRoaXMub3B0cy5kb21haW5TY2FsZVxuICAgICAgdGhpcy5zY2FsZVxuICAgICAgICAucGFkZGluZyh0aGlzLm9wdHMuc2NhbGVQYWRkaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdHMuYXhpc0NsYW1wICYmIHRoaXMuc2NhbGUuY2xhbXAoKSAvLyBDbGFtcHMgb3V0c2lkZSByYW5nZSB2YWx1ZSB3aXRoaW4gc3BlY3RpZmVkIHJhbmdlIGFuZCBkb21haW5cbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlLnJhbmdlKHRoaXMub3B0cy5yYW5nZVNjYWxlKVxuICAgICAgLmRvbWFpbihkb21haW5TY2FsZSlcblxuICAgIHRoaXMuYXhpcy5zY2FsZSh0aGlzLnNjYWxlKVxuXG4gICAgaWYgKGlzTnVtYmVyKHRoaXMub3B0cy50aWNrTnVtYmVyKSkge1xuICAgICAgbGV0IHRpY2tWYWwgPSB0aGlzLm9wdHMudGlja051bWJlclxuICAgICAgaWYgKHRoaXMub3B0cy5wb3NpdGlvbiA9PT0gJ3gnICYmIHRoaXMub3B0cy51bml0ID09PSBjb25zdGFudHMuVU5JVFNfVElNRSkge1xuICAgICAgICAvLyBtb2RpZnkgeHRpY2sgdG8gZGlzcGxheSBsZXNzIHRpY2tzIG9uIGxvd2VyIGNoYXJ0IHdpZHRoIG9yIGhhcyBsZXNzIGRheXNcbiAgICAgICAgY29uc3QgbmV3VGljayA9IE1hdGguZmxvb3IodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLyA2MClcbiAgICAgICAgY29uc3QgZGF5TGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmRvbWFpblNjYWxlWzFdIC0gdGhpcy5vcHRzLmRvbWFpblNjYWxlWzBdKSAvICg2MCAqIDYwICogMjQgKiAxMDAwKSkgKyAxXG4gICAgICAgIGlmIChkYXlMZW5ndGggPiAyICYmIGRheUxlbmd0aCA8IHRpY2tWYWwpIHtcbiAgICAgICAgICB0aWNrVmFsID0gZGF5TGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW51dGVMZW5ndGggPSBNYXRoLmZsb29yKCh0aGlzLm9wdHMuZG9tYWluU2NhbGVbMV0gLSB0aGlzLm9wdHMuZG9tYWluU2NhbGVbMF0pIC8gKDYwICogMTAwMCkpXG4gICAgICAgIGlmIChtaW51dGVMZW5ndGggPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG1pbnV0ZUxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1RpY2sgPCB0aWNrVmFsKSB7XG4gICAgICAgICAgdGlja1ZhbCA9IG5ld1RpY2tcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmF4aXMudGlja3ModGlja1ZhbClcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tOdW1iZXIpKSB7XG4gICAgICB0aGlzLmF4aXMudGlja3ModGhpcy5vcHRzLnRpY2tOdW1iZXIoKSlcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybUF0dHIgJiYgdGhpcy5heGlzVGFnLmF0dHIoJ3RyYW5zZm9ybScsIHRoaXMudHJhbnNmb3JtQXR0cilcblxuICAgIGlmICh0aGlzLm9wdHMuc2hvd0dyaWRMaW5lcyAmJiB0aGlzLm9wdHMucG9zaXRpb24gPT09ICd5Jykge1xuICAgICAgdGhpcy5heGlzLnRpY2tTaXplSW5uZXIoLSh0aGlzLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCkpXG4gICAgfVxuXG4gICAgdGhpcy5heGlzVGFnLmNhbGwodGhpcy5heGlzKVxuXG5cbiAgICBjb25zdCBsaW1pdFRleHQgPSB0aGlzLm9wdHMudGV4dExpbWl0XG4gICAgY29uc3QgdGlja0ZtdCA9IGlzRnVuY3Rpb24odGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIpID8gdGhpcy5vcHRzLnRpY2tGb3JtYXR0ZXIgOiBlbXB0eUZuXG5cbiAgICBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICdzbGFudCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAuYXR0cigneScsICc4JylcbiAgICAgICAgLmF0dHIoJ2R4JywgJy0xLjBlbScpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMTVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC02NSknKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLnJvdGF0ZVRleHQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuYXhpc1RhZ1xuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cigneCcsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKDkwKScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiB0cnVuY2F0ZVRleHQodGlja0ZtdChkKSwgbGltaXRUZXh0KVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMuYXhpc1RhZyAmJiB0aGlzLmF4aXNUYWcuY2xhc3NlZCgndmMtaGlkZGVuJywgIXNob3dGbGFnKVxuICAgIHRoaXMub3B0cy5heGlzTGFiZWxUYWcgJiYgdGhpcy5vcHRzLmF4aXNMYWJlbFRhZy5jbGFzc2VkKCd2Yy1oaWRkZW4nLCAhc2hvd0ZsYWcpXG4gICAgdGhpcy5vcHRzLnZpc2libGUgPSBzaG93RmxhZ1xuICB9XG5cbiAgLy8gUmVtb3ZlIEF4aXMgSW5zdGFuY2VcbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLm9wdHMuYXhpc0xhYmVsVGFnICYmIHRoaXMub3B0cy5heGlzTGFiZWxUYWcucmVtb3ZlKClcbiAgICB0aGlzLmF4aXNUYWcgJiYgdGhpcy5heGlzVGFnLnJlbW92ZSgpXG4gICAgdGhpcy5zY2FsZSA9IG51bGxcbiAgICB0aGlzLmF4aXMgPSBudWxsXG4gICAgdGhpcy5vcHRzID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQge2lzT2JqZWN0LCBpc1N0cmluZywgdGhyb3R0bGV9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnbG9kYXNoL3VuaXF1ZUlkJ1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ0AvZDNJbXBvcnRlcidcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICdAL2NoYXJ0cy9DaGFydENvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIsIG9wdHMpIHtcbiAgICBzdXBlcigpXG4gICAgaWYgKGlzU3RyaW5nKGNvbnRhaW5lcikgJiYgaXNPYmplY3Qob3B0cykgJiYgY29udGFpbmVyLmxlbmd0aCAmJiBpc09iamVjdChvcHRzLmRhdGFQYXJzZXIpKSB7XG4gICAgICB0aGlzLiRjb250YWluZXIgPSAkKGNvbnRhaW5lcilcbiAgICAgIGlmICghdGhpcy4kY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBncmFwaCBjb250YWluZXIgc3BlY3RpZmVkIGluIG9wdGlvbnMgZG9lc250IGV4aXN0IGluc2lkZSBpbiBEb2N1bWVudCBCb2R5JylcbiAgICAgIH1cbiAgICAgIG9wdHMuY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lclxuICAgICAgbGV0IHRha2VDb250YWluZXJXaWR0aCA9IGZhbHNlXG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShvcHRzLmNoYXJ0LndpZHRoKSkge1xuICAgICAgICBvcHRzLmNoYXJ0LndpZHRoID0gdGhpcy4kY29udGFpbmVyLndpZHRoKClcbiAgICAgICAgdGFrZUNvbnRhaW5lcldpZHRoID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFrZUNvbnRhaW5lckhlaWdodCA9IGZhbHNlXG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShvcHRzLmNoYXJ0LmhlaWdodCkpIHtcbiAgICAgICAgb3B0cy5jaGFydC5oZWlnaHQgPSB0aGlzLiRjb250YWluZXIuaGVpZ2h0KClcbiAgICAgICAgdGFrZUNvbnRhaW5lckhlaWdodCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuY2hhcnQud2lkdGggPiBvcHRzLmNoYXJ0Lm1heFdpZHRoKSB7XG4gICAgICAgIG9wdHMuY2hhcnQud2lkdGggPSBvcHRzLmNoYXJ0Lm1heFdpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmNoYXJ0LndpZHRoIDwgb3B0cy5jaGFydC5taW5XaWR0aCkge1xuICAgICAgICBvcHRzLmNoYXJ0LndpZHRoID0gb3B0cy5jaGFydC5taW5XaWR0aFxuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRzXG5cbiAgICAgIHRoaXMuY2hhcnRIZWlnaHQgPSBvcHRzLmNoYXJ0LmhlaWdodFxuICAgICAgdGhpcy5jaGFydFdpZHRoID0gb3B0cy5jaGFydC53aWR0aFxuICAgICAgdGhpcy5tYXJnaW4gPSBvcHRzLmNoYXJ0Lm1hcmdpblxuICAgICAgdGhpcy5jaGFydFR5cGUgPSBvcHRzLmNoYXJ0LmNoYXJ0VHlwZVxuXG4gICAgICBpZiAodGFrZUNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgIHRoaXMuY2hhcnRXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAtICh0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICB9XG5cbiAgICAgIGlmICh0YWtlQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNoYXJ0SGVpZ2h0IC0gKHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgIH1cblxuICAgICAgLy8gQXR0YWNoIGRhdGFQcm9jZXNzIHRvIGNoYXJ0LCB3aGljaCBnZW5lcmF0ZSBjaGFydERhdGEgYW5kIHBsb3QgSW5mbyBiYXNlZCBvbiBKU09OIGFuZCBvcHRpb25zXG4gICAgICB0aGlzLmRhdGFQYXJzZXIgPSBvcHRzLmRhdGFQYXJzZXJcblxuICAgICAgLy8gRGVsZXRlIGRhdGFQcm9jZXNzIGZyb20gb3B0aW9uc1xuICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5kYXRhUGFyc2VyXG5cbiAgICAgIHRoaXMuY2hhcnRGdWxsU3BhY2UgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNoYXJ0V2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQsXG4gICAgICAgIGhlaWdodDogdGhpcy5jaGFydEhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSxcbiAgICAgIH1cblxuXG4gICAgICAvLyBBcnJheSB3aGljaCBob2xkcyBhbGwgdGhlIGNoYXJ0Q29tcG9uZW50cyByZXF1aXJlZCBmb3IgdGhlIGdyYXBoIGxpa2UgYXhpcywgc2VyaWVzLCB0b29sdGlwLCBsZWdlbmQgZXRjXG4gICAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0FyciA9IFtdXG5cbiAgICAgIHRoaXMuc3ZnID0gc2VsZWN0KHRoaXMuJGNvbnRhaW5lci5nZXQoMCkpLnNlbGVjdCgnc3ZnJylcblxuICAgICAgaWYgKHRoaXMuc3ZnLnNpemUoKSA9PT0gMCkge1xuICAgICAgICAvLyBDcmVhdGUgc3ZnIGVsZW1lbnQgaWYgbm90IGV4aXN0IGluc2lkZSBjaGFydCBjb250YWluZXIgRElWXG4gICAgICAgIHRoaXMuc3ZnID0gc2VsZWN0KHRoaXMuJGNvbnRhaW5lci5nZXQoMCkpLnNlbGVjdCgnLnZjLWRpdi1zdmcnKS5hcHBlbmQoJ3N2ZycpXG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHN2ZyBpZiBpdCBoYXMgbmVlZGxlc3MgY29udGVudFxuICAgICAgJCh0aGlzLnN2Zy5ub2RlKCkpLmVtcHR5KClcblxuICAgICAgdGhpcy5zdmdcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0KVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndmMtc3ZnICcgKyBvcHRzLmNoYXJ0LmNsYXNzTmFtZSlcblxuICAgICAgLy8gQWRkIGRlZnMgdG8gc2hvdyBwbG90IHNlcmllcyB3aXRoaW4gdGhlIGRlZiBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodFxuICAgICAgdGhpcy5zdmcuYXBwZW5kKCdkZWZzJylcbiAgICAgICAgLmFwcGVuZCgnY2xpcFBhdGgnKVxuICAgICAgICAuYXR0cignaWQnLCB1bmlxdWVJZCgnY2hhcnRfY2xpcCcpKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydFdpZHRoKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5jaGFydEhlaWdodClcblxuICAgICAgLy8gQWRkIGdyYXBoWm9uZSB0YWcsIHNvIHRoYXQgYWxsIHNlcmllcyBhbmQgYXhpcyBhcmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgdGhpcy5ncmFwaFpvbmUgPSB0aGlzLnN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ZjLWdyYXBoWm9uZScpXG4gICAgfVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IGRyYXcnLCB0aGlzKVxuICAgIC8vIERyYXcgYWxsIHRoZSBjaGFydENvbXBvbmVudHMgaW4gdGhlIHNhbWUgb3JkZXIgb2YgdGhlcmUgaW5pdGlsaXphdGlvbiB1c2luZyBjaGFydENvbXBvbmVudHNBcnJcbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQuZHJhdygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zdmcuYXR0cignd2lkdGgnLCB0aGlzLmNoYXJ0RnVsbFNwYWNlLndpZHRoKVxuICAgIHRoaXMuZ3JhcGhab25lLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKScpXG4gICAgdGhpcy5zdmcuc2VsZWN0KCdjbGlwUGF0aCcpLnNlbGVjdCgncmVjdCcpLmF0dHIoJ3dpZHRoJywgdGhpcy5jaGFydFdpZHRoKVxuXG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHVwZGF0ZScsIHRoaXMpXG4gICAgLy8gVXBkYXRlIGFsbCBjaGFydCBjb21wb25lbnQgYmFzZWQgb24gbmV3IHdpZHRoIGNoYW5nZXNcbiAgICB0aGlzLmNoYXJ0Q29tcG9uZW50c0Fyci5mb3JFYWNoKGZ1bmN0aW9uIChjaGFydENtcHQpIHtcbiAgICAgIGlmIChjaGFydENtcHQgaW5zdGFuY2VvZiBDaGFydENvbXBvbmVudCkge1xuICAgICAgICBjaGFydENtcHQudXBkYXRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvd0hpZGUgKHNob3dGbGFnKSB7XG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHNob3dIaWRlJywgdGhpcylcbiAgICBzaG93RmxhZyA9ICEhc2hvd0ZsYWcgLy8gQ29udmVydCBhbnkgdHlwZSB0byBib29sZWFuXG4gICAgdGhpcy5jaGFydENvbXBvbmVudHNBcnIuZm9yRWFjaChmdW5jdGlvbiAoY2hhcnRDbXB0KSB7XG4gICAgICBpZiAoY2hhcnRDbXB0IGluc3RhbmNlb2YgQ2hhcnRDb21wb25lbnQpIHtcbiAgICAgICAgY2hhcnRDbXB0LnNob3dIaWRlKHNob3dGbGFnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIGNvbnNvbGUubG9nKCdhYy5jaGFydCByZW1vdmUnLCB0aGlzKVxuICAgIHRoaXMuY2hhcnRDb21wb25lbnRzQXJyLmZvckVhY2goZnVuY3Rpb24gKGNoYXJ0Q21wdCkge1xuICAgICAgaWYgKGNoYXJ0Q21wdCBpbnN0YW5jZW9mIENoYXJ0Q29tcG9uZW50KSB7XG4gICAgICAgIGNoYXJ0Q21wdC5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBjaGFydFJlc3BvbnNpdmUgYmFzZWQgb24gc2NyZWVuIHJlc2l6ZSBpcyBoYW5kbGVkXG4gIGNoYXJ0UmVzcG9uc2l2ZSAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jaGFydC5jaGFydFJlc2l6ZSkge1xuICAgICAgdGhpcy50aHJvdHRlZFJlc2l6ZSA9IHRocm90dGxlKCh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICAgIGlmICh3aWR0aCA9PT0gdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCkge1xuICAgICAgICAgIHJldHVybiAvLyBEb250IHJlc2l6ZSBpZiBncmFwaCBpcyBhbHJlYWR5IGFkanVzdGVkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFydEZ1bGxTcGFjZS53aWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpXG4gICAgICAgIHRoaXMuY2hhcnRGdWxsU3BhY2UuaGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpXG4gICAgICAgIHRoaXMuY2hhcnRXaWR0aCA9IHRoaXMuY2hhcnRGdWxsU3BhY2Uud2lkdGggLSAodGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgLSAodGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlKCksIDApXG4gICAgICB9LCA0NTApIC8vICd0aGlzJyBXaWxsIGhhdmUgcmVmZXJlbmNlIG9mIHRpbWVTZXJpZXNDaGFydCBvciBwaWVTZXJpZXNDaGFydFxuXG4gICAgICAvLyBBZGQgcmVzaXplIGZvciBlYWNoIGNoYXJ0IGJhc2VkIG9uIGNoYXJ0IElEIG5hbWVzcGFjZVxuICAgICAgY29uc3QgY2hhcnRJZCA9ICdhY18nICsgdGhpcy5vcHRpb25zLmNoYXJ0LmlkXG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS4nICsgY2hhcnRJZCwgKCkgPT4gdGhpcy5hdXRvU2l6ZUNoYXJ0KCkpXG5cbiAgICB9XG4gIH1cblxuICBhdXRvU2l6ZUNoYXJ0ICgpIHtcbiAgICBsZXQgcmVzaXplZEdyYXBoV2lkdGggPSB0aGlzLiRjb250YWluZXIud2lkdGgoKVxuXG4gICAgaWYgKHJlc2l6ZWRHcmFwaFdpZHRoID4gdGhpcy5vcHRpb25zLmNoYXJ0Lm1heFdpZHRoKSB7XG4gICAgICByZXNpemVkR3JhcGhXaWR0aCA9IHRoaXMub3B0aW9ucy5jaGFydC5tYXhXaWR0aFxuICAgIH1cblxuICAgIGlmIChyZXNpemVkR3JhcGhXaWR0aCA8IHRoaXMub3B0aW9ucy5jaGFydC5taW5XaWR0aCkge1xuICAgICAgcmVzaXplZEdyYXBoV2lkdGggPSB0aGlzLm9wdGlvbnMuY2hhcnQubWluV2lkdGhcbiAgICB9XG5cbiAgICB0aGlzLnRocm90dGVkUmVzaXplKHJlc2l6ZWRHcmFwaFdpZHRoLCB0aGlzLiRjb250YWluZXIuaGVpZ2h0KCkpXG4gIH1cblxuICAvLyBEZXN0cm95IGFsbCBjaGFydCBwcm9wZXJ0aWVzIGFuZCBjb21wb25lbnRzXG4gIGRlc3Ryb3kgKGRlc3Ryb3lGdWxsKSB7XG4gICAgZGVzdHJveUZ1bGwgPSAhIWRlc3Ryb3lGdWxsXG4gICAgLy8gUmVtb3ZlIHJlc2l6ZSBoYW5kZXIgb24gd2luZG93IGZvciB2Y0NoYXJ0IG5hbWVzcGFjZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhcnQuY2hhcnRSZXNpemUpIHtcbiAgICAgIGNvbnN0IGNoYXJ0SWQgPSAnYWNfJyArIHRoaXMub3B0aW9ucy5jaGFydC5pZFxuICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLicgKyBjaGFydElkKVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgY2hhcnRDb21wb25lbnRzICh0aW1lU2VyaWVzQ2hhcnQgb3IgcGllU2VyaWVzQ2hhcnQpXG4gICAgdGhpcy5yZW1vdmUoKVxuXG4gICAgLy8gUmVtb3ZlIHN2ZyBhbmQgY29udGFpbmVyIGlmIGRlc3Ryb3lGdWxsIGlzIHRydWVcbiAgICBkZXN0cm95RnVsbCAmJiB0aGlzLnN2Zy5yZW1vdmUoKVxuICAgIGRlc3Ryb3lGdWxsICYmIHRoaXMuJGNvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiZXhwb3J0IHtcbiAgc2NhbGVCYW5kLFxuICBzY2FsZUxpbmVhcixcbiAgc2NhbGVUaW1lXG59IGZyb20gJ2QzLXNjYWxlJ1xuXG5leHBvcnQge1xuICBheGlzQm90dG9tLFxuICBheGlzVG9wLFxuICBheGlzTGVmdCxcbiAgYXhpc1JpZ2h0XG59IGZyb20gJ2QzLWF4aXMnXG5cbmV4cG9ydCB7dGltZUZvcm1hdH0gZnJvbSAnZDMtdGltZS1mb3JtYXQnXG5cbmV4cG9ydCB7XG4gIHNlbGVjdCxcbiAgbW91c2UgYXMgZDNNb3VzZSxcbiAgZXZlbnQgYXMgZDNFdmVudFxufSBmcm9tICdkMy1zZWxlY3Rpb24nXG5cbmV4cG9ydCB7XG4gIHJhbmdlLFxuICBtYXgsXG4gIHRyYW5zcG9zZSxcbiAgYmlzZWN0b3Jcbn0gZnJvbSAnZDMtYXJyYXknXG5cbmV4cG9ydCB7YnJ1c2hYLCBicnVzaFl9IGZyb20gJ2QzLWJydXNoJ1xuXG5leHBvcnQge1xuICBsaW5lLCBzdGFjaywgYXJlYSxcbiAgc3RhY2tPcmRlck5vbmUsIHN0YWNrT2Zmc2V0Tm9uZVxufSBmcm9tICdkMy1zaGFwZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2ZXJzaW9uOiAndjUnXG59XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJ0AvY29uc3RhbnRzJ1xuaW1wb3J0IHtnZXRWYWx1ZVdpdGhEZWNpbWFscywgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7dGltZUZvcm1hdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdENoYXJ0T3B0aW9ucyAob3B0cykge1xuXG4gIG9wdHMuY2hhcnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjaGFydFJlc2l6ZTogZmFsc2UsXG4gICAgaXNUb3VjaFNjcmVlbjogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBtYXhXaWR0aDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgbWluV2lkdGg6IDBcbiAgfSwgb3B0cy5jaGFydClcblxuICBvcHRzLnRvb2x0aXAgPSBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZvcm1hdDogZmFsc2UgLy8gVXNlIGFyeWFrYUNoYXJ0cyBpbnRlcm5hbCB0b29sdGlwIGZvcm1hdHRlciB0byBzaG93IHJhdyBkYXRhXG4gIH0sIChvcHRzLnRvb2x0aXAgfHwge30pKVxuXG4gIG9wdHMubGVnZW5kID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBsZWdlbmRQcmVmaXg6ICcnLFxuICAgIHBvc2l0aW9uOiBjb25zdGFudHMuRElSX1RPUFxuICB9LCAob3B0cy5sZWdlbmQgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLmFmdGVyRHJhdykpIHtcbiAgICBvcHRzLmFmdGVyRHJhdyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gY1xuICAgIH1cbiAgfVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLm9uQ29tcGxldGUpKSB7XG4gICAgb3B0cy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDaGFydCBsb2FkaW5nIG9mICR7b3B0cy5jb250YWluZXJOYW1lfSBpcyBjb21wbGV0ZWQgaW4gJHt0aW1lfSBtc2ApXG4gICAgfVxuICB9XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMub25FcnJvcikpIHtcbiAgICBvcHRzLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDaGFydCBoYXMgZW5jb3VudGVyZWQgZXJyb3Igb2YgJHtvcHRzLmNvbnRhaW5lck5hbWV9IGAsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWVGb3JtYXQgKHZhbCwgdW5pdCA9ICcnLCBkZWNpbWFscyA9IDMpIHtcbiAgY29uc3QgZGVub21pbmF0b3IgPSAxMDAwXG4gIGlmICh2YWwgPiBkZW5vbWluYXRvcikge1xuICAgIGNvbnN0IGtWYWwgPSBnZXRWYWx1ZVdpdGhEZWNpbWFscyh2YWwgLyBkZW5vbWluYXRvciwgZGVjaW1hbHMpXG4gICAgaWYgKGtWYWwgPiBkZW5vbWluYXRvcikge1xuICAgICAgY29uc3QgbVZhbCA9IGdldFZhbHVlV2l0aERlY2ltYWxzKGtWYWwgLyBkZW5vbWluYXRvciwgZGVjaW1hbHMpXG4gICAgICByZXR1cm4gYCR7bVZhbH1NICR7dW5pdH1gXG4gICAgfVxuICAgIHJldHVybiBgJHtrVmFsfUsgJHt1bml0fWBcbiAgfVxuICByZXR1cm4gYCR7Z2V0VmFsdWVXaXRoRGVjaW1hbHModmFsLCBkZWNpbWFscyl9ICR7dW5pdH1gXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRUU09wdGlvbnMgKG9wdHMpIHtcbiAgLy8gQWRkIGRlZmF1bHRzIHRvIHhBeGlzXG4gIG9wdHMueEF4aXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBib3R0b206IHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19USU1FLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfSwgKG9wdHMueEF4aXMgfHwge30pKVxuXG4gIGlmICghaXNGdW5jdGlvbihvcHRzLnhBeGlzLmJvdHRvbS50aWNrRm9ybWF0dGVyKSkge1xuICAgIGNvbnN0IHRpbWVJbmZvID0gb3B0cy50aW1lSW5mb1xuICAgIC8vIElmIHRoZSBkYXRlIHJhbmdlIGlzIGxlc3MgdGhhbiAyIGRheXMsIFNob3cgaW4gaG91ciBmb3JtYXRcbiAgICBjb25zdCB0aW1lTGVuID0gdGltZUluZm8udGltZVJhbmdlLmxlbmd0aFxuICAgIGNvbnN0IGRhdGVEaWZmID0gdGltZUluZm8udGltZVJhbmdlW3RpbWVMZW4gLSAxXSAtIHRpbWVJbmZvLnRpbWVSYW5nZVswXVxuXG4gICAgY29uc3QgeEF4aXNGbiA9IChkYXRlRGlmZiA8IGNvbnN0YW50cy5USU1FX0ZPUk1BVF9CVUZGRVIpID8gdGltZUZvcm1hdCgnJUg6JU0nKSA6IHRpbWVGb3JtYXQoJyVkICViICVZJylcbiAgICBvcHRzLnhBeGlzLmJvdHRvbS50aWNrRm9ybWF0dGVyID0gKHhEYXRlKSA9PiB7XG4gICAgICByZXR1cm4geEF4aXNGbih4RGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiB5QXhpcyBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGRlZmF1bHQgaXMgbGVmdCBhbmQgaXRzIHZhbHVlIGF4aXMgd2l0aCB1bml0XG4gIGlmICghb3B0cy55QXhpcykge1xuICAgIG9wdHMueUF4aXMgPSB7XG4gICAgICBsZWZ0OiB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLnlBeGlzLmxlZnQpIHtcbiAgICBvcHRzLnlBeGlzLmxlZnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLmxlZnQpXG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5yaWdodCkge1xuICAgIG9wdHMueUF4aXMucmlnaHQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLnJpZ2h0KVxuICB9XG5cbiAgb3B0cy56b29tID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogZmFsc2VcbiAgfSwgKG9wdHMuem9vbSB8fCB7fSkpXG5cbiAgLy8gR2VuZXJhbCBPcHRpb25zIHRvIGJvdGggY2hhcnRUeXBlXG4gIG9wdHMudG9vbHRpcCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2libGU6IHRydWUsXG4gICAgZm9ybWF0OiBmYWxzZSAvLyBVc2UgYXJ5YWthQ2hhcnRzIGludGVybmFsIHRvb2x0aXAgZm9ybWF0dGVyIHRvIHNob3cgcmF3IGRhdGFcbiAgfSwgKG9wdHMudG9vbHRpcCB8fCB7fSkpXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKG9wdHMudG9vbHRpcC5mb3JtYXQpKSB7XG4gICAgY29uc3QgZm9ybWF0VGltZSA9IHRpbWVGb3JtYXQoJyVkICViICVZICAlSDolTTolUycpXG4gICAgb3B0cy50b29sdGlwLmZvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICBpZiAoIWQgfHwgIWlzQXJyYXkoZCkpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwbG90U2V0ID0gdGhpcy5vcHRpb25zLnBsb3RTZXRcbiAgICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG4gICAgICBjb25zdCB6b25lT2Zmc2V0ID0gdGhpcy5vcHRpb25zLnhBeGlzLnpvbmVPZmZzZXQgfHwgJydcbiAgICAgIGNvbnN0IHlBeGlzID0gdGhpcy5vcHRpb25zLnlBeGlzXG5cbiAgICAgIGxldCB0YWJsZVN0ciA9IGA8dGFibGU+PHRib2R5Pjx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInZhbHVlX2Z1bGxcIiBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgJHtmb3JtYXRUaW1lKGRbdGltZUluZm8uZGF0YUluZGV4XSl9ICR7em9uZU9mZnNldH1cbiAgICAgICAgICAgIDwvdGQ+PC90cj5gXG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHBsb3RTZXQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZFtwbG90U2V0W2tleV0uZGF0YUluZGV4XVxuICAgICAgICBpZiAoIXBsb3RTZXRba2V5XS52aXNpYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBZIEF4aXMgZm9ybWF0IGlzIHByZXNldFxuICAgICAgICBjb25zdCB5T3JpZW50ID0geUF4aXNbcGxvdFNldFtrZXldLnBsb3RBeGlzWzBdXVxuICAgICAgICBjb25zdCBmb3JtYXQgPSB5T3JpZW50LmZvcm1hdCB8fCBkZWZhdWx0VmFsdWVGb3JtYXRcblxuICAgICAgICB0YWJsZVN0ciArPSBgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9J25hbWUnPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtwbG90U2V0W2tleV0uY29sb3J9Jz48L3NwYW4+JHtwbG90U2V0W2tleV0ubmFtZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZSc+XG4gICAgICAgICAgICAke2Zvcm1hdCh2YWwsIHBsb3RTZXRba2V5XS51bml0KX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5gXG4gICAgICB9XG5cbiAgICAgIHRhYmxlU3RyICs9ICc8L3Rib2R5PjwvdGFibGU+J1xuXG4gICAgICByZXR1cm4gdGFibGVTdHJcbiAgICB9XG4gIH1cblxuICBhZGREZWZhdWx0Q2hhcnRPcHRpb25zKG9wdHMpXG5cbiAgcmV0dXJuIG9wdHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRCU09wdGlvbnMgKG9wdHMpIHtcbiAgLy8gQWRkIGRlZmF1bHRzIHRvIHhBeGlzXG4gIG9wdHMueEF4aXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBib3R0b206IHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfVxuICB9LCAob3B0cy54QXhpcyB8fCB7fSkpXG5cblxuICAvLyBJZiB5QXhpcyBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGRlZmF1bHQgaXMgbGVmdCBhbmQgaXRzIHZhbHVlIGF4aXMgd2l0aCB1bml0XG4gIGlmICghb3B0cy55QXhpcykge1xuICAgIG9wdHMueUF4aXMgPSB7XG4gICAgICBsZWZ0OiB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLnlBeGlzLmxlZnQpIHtcbiAgICBvcHRzLnlBeGlzLmxlZnQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLmxlZnQpXG4gIH1cblxuICBpZiAob3B0cy55QXhpcy5yaWdodCkge1xuICAgIG9wdHMueUF4aXMucmlnaHQgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVuaXQ6IGNvbnN0YW50cy5VTklUU19ERUYsXG4gICAgICBtaW46IDAsIC8vIFN0YXJ0IHBsb3R0aW5nIFkgQXhpcyBmcm9tIDBcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9LCBvcHRzLnlBeGlzLnJpZ2h0KVxuICB9XG5cbiAgb3B0cy56b29tID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogZmFsc2VcbiAgfSwgKG9wdHMuem9vbSB8fCB7fSkpXG5cblxuICAvLyBHZW5lcmFsIE9wdGlvbnMgdG8gYm90aCBjaGFydFR5cGVcbiAgb3B0cy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IGZhbHNlIC8vIFVzZSBhcnlha2FDaGFydHMgaW50ZXJuYWwgdG9vbHRpcCBmb3JtYXR0ZXIgdG8gc2hvdyByYXcgZGF0YVxuICB9LCAob3B0cy50b29sdGlwIHx8IHt9KSlcblxuICBpZiAoIWlzRnVuY3Rpb24ob3B0cy50b29sdGlwLmZvcm1hdCkpIHtcbiAgICBvcHRzLnRvb2x0aXAuZm9ybWF0ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIGxldCBkYXRhQXJyID0gZFxuICAgICAgaWYgKGQgJiYgZC52YWwpIHtcbiAgICAgICAgZGF0YUFyciA9IGQudmFsXG4gICAgICB9XG4gICAgICBpZiAoIWlzQXJyYXkoZGF0YUFycikpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBjb25zdCBwbG90U2V0ID0gdGhpcy5vcHRpb25zLnBsb3RTZXRcbiAgICAgIGNvbnN0IHRpbWVJbmZvID0gdGhpcy5vcHRpb25zLnRpbWVJbmZvXG4gICAgICBjb25zdCB5QXhpcyA9IHRoaXMub3B0aW9ucy55QXhpc1xuXG4gICAgICBsZXQgdGFibGVTdHIgPSBgPHRhYmxlPjx0Ym9keT48dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ2YWx1ZV9mdWxsXCIgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICR7ZGF0YUFyclt0aW1lSW5mby5kYXRhSW5kZXhdfVxuICAgICAgICAgICAgPC90ZD48L3RyPmBcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGxvdFNldCkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhQXJyW3Bsb3RTZXRba2V5XS5kYXRhSW5kZXhdXG4gICAgICAgIGlmICghcGxvdFNldFtrZXldLnZpc2libGUgfHwgaXNOYU4odmFsKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIFkgQXhpcyBmb3JtYXQgaXMgcHJlc2V0XG4gICAgICAgIGNvbnN0IHlPcmllbnQgPSB5QXhpc1twbG90U2V0W2tleV0ucGxvdEF4aXNbMF1dXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHlPcmllbnQuZm9ybWF0IHx8IGRlZmF1bHRWYWx1ZUZvcm1hdFxuXG4gICAgICAgIHRhYmxlU3RyICs9IGA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz0nbmFtZSc+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjoke3Bsb3RTZXRba2V5XS5jb2xvcn0nPjwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPSd2YWx1ZSc+XG4gICAgICAgICAgICAke2Zvcm1hdCh2YWwsIHBsb3RTZXRba2V5XS51bml0KX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5gXG4gICAgICB9XG5cbiAgICAgIHRhYmxlU3RyICs9ICc8L3Rib2R5PjwvdGFibGU+J1xuXG4gICAgICByZXR1cm4gdGFibGVTdHJcbiAgICB9XG4gIH1cblxuICBhZGREZWZhdWx0Q2hhcnRPcHRpb25zKG9wdHMpXG5cbiAgcmV0dXJuIG9wdHNcbn1cblxuXG4iLCJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnQC9jaGFydHMvQ2hhcnRDb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcmllcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnBsb3RTZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGxvdEZuKSB7XG4gICAgICBwbG90Rm4uZHJhdygpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5wbG90U2VyaWVzLmZvckVhY2goZnVuY3Rpb24gKHBsb3RGbikge1xuICAgICAgcGxvdEZuLnVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5zaG93SGlkZShzaG93RmxhZylcbiAgICB9KVxuICB9XG5cbiAgLy8gUmVkcmF3IGlzIGNhbGxlZCB3aGVuIHNlcmllcyBpcyB0b2dnbGVkIGZyb20gTGVnZW5kc1xuICByZWRyYXcgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZWRyYXcoKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMucGxvdFNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwbG90Rm4pIHtcbiAgICAgIHBsb3RGbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgdGhpcy5wbG90U2VyaWVzID0gbnVsbFxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==