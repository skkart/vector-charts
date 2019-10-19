(window["webpackJsonpvc"] = window["webpackJsonpvc"] || []).push([["pieseries~timeseries"],{

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
      var legendText = this.opts.chart.container.selectAll('svg .vc-legend-label');
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
          legendText.classed('vc-hidden', true);

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
            legendText.classed('vc-hidden', false);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Yy8uL2xlZ2VuZC9UaW1lU2VyaWVzTGVnZW5kLmpzIl0sIm5hbWVzIjpbIlRpbWVTZXJpZXNMZWdlbmQiLCJvcHRzIiwiZGlzYWJsZVNlcmllc1RvZ2dsZSIsInNlbGYiLCJtYXhXaWR0aExlZ2VuZCIsInNwYWNpbmdOYW1lcyIsImdyYXBoT3B0aW9ucyIsImNoYXJ0Iiwib3B0aW9ucyIsImVhY2hQbG90U2V0IiwicGxvdFNldCIsImVhY2hQbG90TmFtZXMiLCJsZW5nIiwidGV4dFdpZHRoIiwibWF4TGVuTGVnZW5kIiwiZHVtbXlHIiwic3ZnIiwiYXBwZW5kIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiYXR0ciIsInN0eWxlIiwidGV4dCIsImQiLCJsZWdlbmRQcmVmaXgiLCJuYW1lIiwiZWFjaCIsImkiLCJ0aGlzV2lkdGgiLCJNYXRoIiwicm91bmQiLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJwdXNoIiwiZm9yRWFjaCIsImVsZSIsIm1heFRleHRMZW5ndGgiLCJsZW5ndGgiLCJyZW1vdmUiLCJ0b2dnbGVTZXJpZXMiLCJlbXB0eUZuIiwibWF4WUxlbiIsImZsb29yIiwiY2hhcnRGdWxsU3BhY2UiLCJoZWlnaHQiLCJmdWxsWUxlbiIsImNvbnN0YW50cyIsIkxFR0VORF9ZX1NQQUNFIiwiZGl2V2lkdGgiLCJMRUdFTkRfU0hPV19XSURUSCIsImxlZ2VuZERpdiIsIndpZHRoIiwic2VyaWVzTmFtZSIsInZpc2libGVTZXJpZXMiLCJwbG90TmFtZSIsInZpc2libGUiLCJhcHBseVlBeGlzIiwiY3VycmVudFBsb3RJbmZvIiwicGxvdEF4aXMiLCJESVJfTEVGVCIsImRhdGFQYXJzZXIiLCJjb25zdHJ1Y3RZQXhpc0luZm8iLCJ5QXhpcyIsIm1vZGlmeUF4aXNQcm9wcyIsImRvbWFpblNjYWxlIiwieVJhbmdlIiwiRElSX1JJR0hUIiwieUF4aXMyIiwieVJhbmdlMiIsInJlU2NhbGVZQXhpcyIsInNlcmllcyIsInJlZHJhdyIsInNGbGFnIiwic2VsZWN0IiwiY2xhc3NlZCIsImlzRnVuY3Rpb24iLCJvbkxlZ2VuZENoYW5nZSIsImNhbGwiLCJsZWdlbmREaXNwbGF5IiwibGVnZW5kQmxvY2siLCJwb3NpdGlvbiIsIkRJUl9UT1AiLCJ4IiwiTEVHRU5EX1NQQUNFIiwieSIsIm9uIiwidGhyb3R0bGUiLCJ0cmFpbGluZyIsIkxFR0VORF9URVhUX1giLCJMRUdFTkRfVEVYVF9ZIiwibGVnTmFtZSIsImlzUGllTGVnZW5kIiwic3Vic3RyaW5nIiwiTEVHRU5EX1JFQ1RfU0laRSIsImNvbG9yIiwiaG9yaXpvbnRhbExlZ2VuZFdpZHRoIiwibm9kZSIsImdldEJCb3giLCJ1cGRhdGUiLCJsZWdlbmRUZXh0IiwiY29udGFpbmVyIiwiYmFzaWNXaWR0aCIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsImxlZ2VuZFBvcyIsIlZFUlRfUE9TX0xFR0VORCIsIkxFR0VORF9NQVhfV0lEVEgiLCJsZWdlbmRYUG9zIiwiY2hhcnRXaWR0aCIsInhCdWZmIiwibGVnZW5kWVBvcyIsImQzU3ZnIiwiREFUQV9JTlRFUlZBTF9CVUZGRVJfWCIsIkxFR0VORF9SSUdIVF9CVUZGRVIiLCJodG1sIiwic2hvd0ZsYWciLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxnQjs7O0FBQ25CLDRCQUFhQyxJQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtBLElBQUwsR0FBWSwyRUFBYztBQUN4QkMsMkJBQXFCO0FBREcsS0FBZCxFQUVURCxJQUZTLENBQVo7O0FBSUEsUUFBTUUsWUFBTjtBQUNBLFVBQUtGLElBQUwsQ0FBVUcsY0FBVixHQUEyQixDQUEzQjtBQUNBLFVBQUtILElBQUwsQ0FBVUksWUFBVixHQUF5QixFQUF6Qjs7QUFHQSxRQUFNQyxlQUFlLE1BQUtMLElBQUwsQ0FBVU0sS0FBVixDQUFnQkMsT0FBckM7QUFDQSxRQUFN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QnFCLGtCQUFNOUYsU0FBTixDQUFnQixZQUFoQixFQUNHUyxJQURILENBQ1EsWUFBWTtBQUNoQjhDLHlFQUFNQSxDQUFDLElBQVAsRUFBYUEsTUFBYixDQUFvQixNQUFwQixFQUNHMEMsSUFESCxDQUNRLEVBRFI7QUFFRCxhQUpIO0FBS0FoQix1QkFBV3pCLE9BQVgsQ0FBbUIsV0FBbkIsRUFBZ0MsS0FBaEM7QUFDRDtBQUNGO0FBQ0Y7QUFFRjs7OzZCQUVTMEMsUSxFQUFVO0FBQ2xCQSxpQkFBVyxDQUFDLENBQUNBLFFBQWI7QUFDQSxXQUFLbkgsSUFBTCxDQUFVc0QsT0FBVixHQUFvQjZELFFBQXBCO0FBQ0EsV0FBS3RDLGFBQUwsSUFBc0IsS0FBS0EsYUFBTCxDQUFtQkosT0FBbkIsQ0FBMkIsV0FBM0IsRUFBd0MsQ0FBQzBDLFFBQXpDLENBQXRCO0FBQ0Q7Ozs2QkFFUztBQUNSLFdBQUtyQyxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBaUJ6QyxNQUFqQixFQUFwQjtBQUNBLFdBQUt3QyxhQUFMLElBQXNCLEtBQUtBLGFBQUwsQ0FBbUJ4QyxNQUFuQixFQUF0QjtBQUNBLFdBQUtyQyxJQUFMLEdBQVksSUFBWjtBQUNEOzs7O0VBN1MyQ29ILDhEOztBQUF6QnJILCtFIiwiZmlsZSI6InBpZXNlcmllc350aW1lc2VyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJ0AvY2hhcnRzL0NoYXJ0Q29tcG9uZW50J1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICdAL2NvbnN0YW50cydcbmltcG9ydCB7ZW1wdHlGbiwgaXNGdW5jdGlvbiwgdGhyb3R0bGV9IGZyb20gJ0AvdXRpbHMnXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnQC9kM0ltcG9ydGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2VyaWVzTGVnZW5kIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGRpc2FibGVTZXJpZXNUb2dnbGU6IGZhbHNlXG4gICAgfSwgb3B0cylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5vcHRzLm1heFdpZHRoTGVnZW5kID0gMFxuICAgIHRoaXMub3B0cy5zcGFjaW5nTmFtZXMgPSBbXVxuXG5cbiAgICBjb25zdCBncmFwaE9wdGlvbnMgPSB0aGlzLm9wdHMuY2hhcnQub3B0aW9uc1xuICAgIGNvbnN0IGVhY2hQbG90U2V0ID0gZ3JhcGhPcHRpb25zLnBsb3RTZXRcbiAgICBjb25zdCBlYWNoUGxvdE5hbWVzID0gT2JqZWN0LmtleXMoZWFjaFBsb3RTZXQpXG4gICAgbGV0IGxlbmcgPSAwXG4gICAgY29uc3QgdGV4dFdpZHRoID0gW11cbiAgICBsZXQgbWF4TGVuTGVnZW5kXG5cbiAgICBjb25zdCBkdW1teUcgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgLy8gQWRkIGFsbCBuYW1lIG9uIERPTSB0byBjYWxjdWxhdGUgaG93IG11Y2ggc3BhY2UgaXMgbmVlZGVkIGZvciBldmVyeSBuYW1lc1xuICAgIGR1bW15Ry5zZWxlY3RBbGwoJy5kdW1teVRleHQnKVxuICAgICAgLmRhdGEoZWFjaFBsb3ROYW1lcylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtbGFiZWwnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTFweCcpXG4gICAgICAuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJzUwMCcpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gKHNlbGYub3B0cy5sZWdlbmRQcmVmaXggKyAoZWFjaFBsb3RTZXRbZF0gPyBlYWNoUGxvdFNldFtkXS5uYW1lIDogJycpKVxuICAgICAgfSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIC8vIEZpbmQgc2l6ZSByZXF1aXJlZCBmb3IgZWFjaCBsZWdlbmQgb24gc2NyZWVuXG4gICAgICAgIGNvbnN0IHRoaXNXaWR0aCA9IE1hdGgucm91bmQodGhpcy5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSlcbiAgICAgICAgaWYgKHRoaXNXaWR0aCA+IHNlbGYub3B0cy5tYXhXaWR0aExlZ2VuZCkge1xuICAgICAgICAgIHNlbGYub3B0cy5tYXhXaWR0aExlZ2VuZCA9IHRoaXNXaWR0aFxuICAgICAgICAgIG1heExlbkxlZ2VuZCA9IGRcbiAgICAgICAgfVxuICAgICAgICB0ZXh0V2lkdGgucHVzaCh0aGlzV2lkdGgpXG4gICAgICB9KVxuXG4gICAgLy8gRmlsbCB0aGUgc3BhY2luZyBBcnIgaGF2aW5nIHBvc2l0aW9uIGZvciBlYWNoIGxlZ2VuZHMgb24gaG9yaXpvbnRhbCBvcmRlclxuICAgIHRleHRXaWR0aC5mb3JFYWNoKGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgIGxlbmcgKz0gZWxlXG4gICAgICBzZWxmLm9wdHMuc3BhY2luZ05hbWVzLnB1c2gobGVuZylcbiAgICB9KVxuXG4gICAgLy8gTWFrZSBtYXhUZXh0TGVuZ3RoIEhpZ2hlciB0byBzaG93IGZ1bGwgdGV4dCBmb3IgcGllIGxlZ2VuZHNcbiAgICB0aGlzLm9wdHMubWF4VGV4dExlbmd0aCA9IG1heExlbkxlZ2VuZC5sZW5ndGggKyAxMDBcblxuICAgIGR1bW15Ry5yZW1vdmUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG5cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IGdyYXBoT3B0aW9ucyA9IHRoaXMub3B0cy5jaGFydC5vcHRpb25zXG4gICAgbGV0IHRvZ2dsZVNlcmllcyA9IGVtcHR5Rm5cbiAgICBjb25zdCBlYWNoUGxvdFNldCA9IGdyYXBoT3B0aW9ucy5wbG90U2V0XG4gICAgY29uc3QgZWFjaFBsb3ROYW1lcyA9IE9iamVjdC5rZXlzKGVhY2hQbG90U2V0KVxuICAgIGNvbnN0IG1heFlMZW4gPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydEZ1bGxTcGFjZS5oZWlnaHQgKiA5MCAvIDEwMClcbiAgICBsZXQgZnVsbFlMZW4gPSBlYWNoUGxvdE5hbWVzLmxlbmd0aCAqIGNvbnN0YW50cy5MRUdFTkRfWV9TUEFDRVxuICAgIGZ1bGxZTGVuID0gZnVsbFlMZW4gPiBtYXhZTGVuID8gbWF4WUxlbiA6IGZ1bGxZTGVuXG4gICAgY29uc3QgZGl2V2lkdGggPSB0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgKyBjb25zdGFudHMuTEVHRU5EX1NIT1dfV0lEVEhcblxuICAgIHRoaXMub3B0cy5sZWdlbmREaXYgPSB7XG4gICAgICB3aWR0aDogZGl2V2lkdGgsXG4gICAgICBoZWlnaHQ6IGZ1bGxZTGVuXG4gICAgfVxuXG5cbiAgICAvLyBQZXJmb20gU2VyaWVzIHNob3cgYW5kIGhpZGUgb24gY2xpY2sgb2YgZWFjaCBsZWdlbmRcbiAgICBpZiAoIXRoaXMub3B0cy5kaXNhYmxlU2VyaWVzVG9nZ2xlKSB7XG5cbiAgICAgIHRvZ2dsZVNlcmllcyA9IGZ1bmN0aW9uIChzZXJpZXNOYW1lKSB7XG4gICAgICAgIGxldCB2aXNpYmxlU2VyaWVzID0gMFxuICAgICAgICBsZXQgcGxvdE5hbWVcblxuICAgICAgICBpZiAoZWFjaFBsb3RTZXRbc2VyaWVzTmFtZV0gJiYgZWFjaFBsb3RTZXRbc2VyaWVzTmFtZV0udmlzaWJsZSkge1xuICAgICAgICAgIC8vIElmIHRoZSBzZXJpZXMgaXMgZ2V0dGluZyBkaXNhYmxlZCBhbmQgaXRzIG9ubHkgb25lIHNlcmllcyB2aXNpYmxlLCBEb250IGRpc2FibGUgaXQuXG4gICAgICAgICAgZm9yIChwbG90TmFtZSBpbiBlYWNoUGxvdFNldCkge1xuICAgICAgICAgICAgZWFjaFBsb3RTZXRbcGxvdE5hbWVdLnZpc2libGUgJiYgdmlzaWJsZVNlcmllcysrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZpc2libGVTZXJpZXMgPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFwcGx5WUF4aXNcblxuICAgICAgICAvLyBwbG90U2VyaWVzIHRoYXQgaXMgZ2V0dGluZyB0b2dnbGVkXG4gICAgICAgIGxldCBjdXJyZW50UGxvdEluZm9cblxuICAgICAgICBpZiAoZWFjaFBsb3RTZXQgJiYgZWFjaFBsb3RTZXRbc2VyaWVzTmFtZV0pIHtcbiAgICAgICAgICBjdXJyZW50UGxvdEluZm8gPSBlYWNoUGxvdFNldFxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoY3VycmVudFBsb3RJbmZvKSB7XG5cbiAgICAgICAgICBjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0udmlzaWJsZSA9ICFjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0udmlzaWJsZVxuXG4gICAgICAgICAgaWYgKGN1cnJlbnRQbG90SW5mb1tzZXJpZXNOYW1lXS5wbG90QXhpc1swXSA9PT0gY29uc3RhbnRzLkRJUl9MRUZUKSB7XG5cbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBjb21wdXRlIG1heCBhbmQgbWluIHZhbHVlIGZvciBZQXhpcyBiYXNlZCBvbiBzZXJpZXMgd2hpY2ggYXJlIHZpc2libGVcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5vcHRzLmNoYXJ0Lm9wdGlvbnMsIHNlbGYub3B0cy5jaGFydC5kYXRhUGFyc2VyLmNvbnN0cnVjdFlBeGlzSW5mbygpKVxuXG4gICAgICAgICAgICBhcHBseVlBeGlzID0gY29uc3RhbnRzLkRJUl9MRUZUXG4gICAgICAgICAgICAvLyBVcGRhdGUgWSBBeGlzIHdpdGggbmV3IGRvbWFpblNjYWxlXG4gICAgICAgICAgICBzZWxmLm9wdHMuY2hhcnQueUF4aXMubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICAgICAgZG9tYWluU2NhbGU6IGdyYXBoT3B0aW9ucy55UmFuZ2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbG90SW5mb1tzZXJpZXNOYW1lXS5wbG90QXhpc1swXSA9PT0gY29uc3RhbnRzLkRJUl9SSUdIVCkge1xuXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgY29tcHV0ZSBtYXggYW5kIG1pbiB2YWx1ZSBmb3IgWUF4aXMgYmFzZWQgb24gc2VyaWVzIHdoaWNoIGFyZSB2aXNpYmxlXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYub3B0cy5jaGFydC5vcHRpb25zLCBzZWxmLm9wdHMuY2hhcnQuZGF0YVBhcnNlci5jb25zdHJ1Y3RZQXhpc0luZm8oKSlcblxuICAgICAgICAgICAgYXBwbHlZQXhpcyA9IGNvbnN0YW50cy5ESVJfUklHSFRcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBZIEF4aXMgd2l0aCBuZXcgZG9tYWluU2NhbGVcbiAgICAgICAgICAgIHNlbGYub3B0cy5jaGFydC55QXhpczIubW9kaWZ5QXhpc1Byb3BzKHtcbiAgICAgICAgICAgICAgZG9tYWluU2NhbGU6IGdyYXBoT3B0aW9ucy55UmFuZ2UyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkanVzdCBZQXhpcyB0aWNrIHZhbHVlIGRpc3BsYXkgYmFzZWQgb24geUF4aXMgY2hhbmdlXG4gICAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnJlU2NhbGVZQXhpcyhhcHBseVlBeGlzKVxuXG4gICAgICAgICAgLy8gUmVkcmF3IGFsbCBwbG90IGNvbXBvbmVudHMgYmFzZWQgb24geUF4aXMgY2hhbmdlXG4gICAgICAgICAgc2VsZi5vcHRzLmNoYXJ0LnNlcmllcy5yZWRyYXcoKVxuXG4gICAgICAgICAgY29uc3Qgc0ZsYWcgPSBjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0udmlzaWJsZVxuXG4gICAgICAgICAgc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAuY2xhc3NlZCgndmMtZmlsbC1oaWRkZW4nLCAhc0ZsYWcpXG5cbiAgICAgICAgICBpc0Z1bmN0aW9uKHNlbGYub3B0cy5vbkxlZ2VuZENoYW5nZSkgJiYgc2VsZi5vcHRzLm9uTGVnZW5kQ2hhbmdlLmNhbGwoc2VsZi5vcHRzLmNoYXJ0LCBjdXJyZW50UGxvdEluZm9bc2VyaWVzTmFtZV0sIHNGbGFnKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxlZ2VuZERpc3BsYXkgPSB0aGlzLm9wdHMuY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWdyb3VwJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDE1LCA1KScpXG5cbiAgICB0aGlzLmxlZ2VuZEJsb2NrID0gdGhpcy5sZWdlbmREaXNwbGF5XG4gICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKGVhY2hQbG90TmFtZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgLy8gUHJvdmlkZSBob3Jpem9udGFsIHBvc2l0aW9uIGJhc2VkIG9uIG9yZGVyXG4gICAgICAgIGlmIChzZWxmLm9wdHMucG9zaXRpb24gPT09IGNvbnN0YW50cy5ESVJfVE9QKSB7XG4gICAgICAgICAgY29uc3QgeCA9IHNlbGYub3B0cy5zcGFjaW5nTmFtZXNbaSAtIDFdID8gKHNlbGYub3B0cy5zcGFjaW5nTmFtZXNbaSAtIDFdICsgY29uc3RhbnRzLkxFR0VORF9TUEFDRSAqIGkpIDogMFxuICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywgMCknXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAgICAgLy8gUHJvdmlkZSB2ZXJ0aWNhbCBwb3NpdGlvbiBiYXNlZCBvbiBvcmRlclxuICAgICAgICAgIGNvbnN0IHkgPSBpICogY29uc3RhbnRzLkxFR0VORF9ZX1NQQUNFXG4gICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoMCAsJyArIHkgKyAnKSdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiAndmMtbGVnZW5kIHZjLWxlZ2VuZC0nICsgZFxuICAgICAgfSlcbiAgICAgIC5jbGFzc2VkKCd2Yy1maWxsLWhpZGRlbicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiAoZWFjaFBsb3RTZXRbZF0gPyAhZWFjaFBsb3RTZXRbZF0udmlzaWJsZSA6IGZhbHNlKVxuICAgICAgfSlcblxuICAgIC8vIExpc3RlbiB0byBjbGljayBldmVudCBvbmx5IGZvciB0aW1lc2VyaWVzIGxlZ2VuZHNcbiAgICB0aGlzLmxlZ2VuZEJsb2NrXG4gICAgICAub24oJ2NsaWNrJywgdGhyb3R0bGUodG9nZ2xlU2VyaWVzLCAzMDAsIHsgLy8gU29tZXRpbWVzIHRvZ2dsZSBldmVudCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMsIGhlbmNlIGJsb2NrIGJ5IGFkZGluZyB0aHJvdHRsZVxuICAgICAgICB0cmFpbGluZzogZmFsc2VcbiAgICAgIH0pKVxuXG5cbiAgICB0aGlzLmxlZ2VuZEJsb2NrLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAndmMtbGVnZW5kLWxhYmVsJylcbiAgICAgIC5hdHRyKCd4JywgY29uc3RhbnRzLkxFR0VORF9URVhUX1gpXG4gICAgICAuYXR0cigneScsIGNvbnN0YW50cy5MRUdFTkRfVEVYVF9ZKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTFweCcpXG4gICAgICAuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJzUwMCcpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICBsZXQgbGVnTmFtZSA9IChzZWxmLm9wdHMubGVnZW5kUHJlZml4ICsgKGVhY2hQbG90U2V0W2RdID8gZWFjaFBsb3RTZXRbZF0ubmFtZSA6ICcnKSlcbiAgICAgICAgaWYgKHNlbGYub3B0cy5pc1BpZUxlZ2VuZCAmJiBzZWxmLm9wdHMubWF4VGV4dExlbmd0aCA8IGxlZ05hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgbGVnTmFtZSA9IGxlZ05hbWUuc3Vic3RyaW5nKDAsIHNlbGYub3B0cy5tYXhUZXh0TGVuZ3RoKSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZ05hbWVcbiAgICAgIH0pXG5cblxuICAgIHRoaXMubGVnZW5kQmxvY2suYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd2Yy1sZWdlbmQtYm94JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGNvbnN0YW50cy5MRUdFTkRfUkVDVF9TSVpFKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGNvbnN0YW50cy5MRUdFTkRfUkVDVF9TSVpFKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZWFjaFBsb3RTZXRbZF0gPyBlYWNoUGxvdFNldFtkXS5jb2xvciA6ICcnXG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMnB4JylcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBlYWNoUGxvdFNldFtkXSA/IGVhY2hQbG90U2V0W2RdLmNvbG9yIDogJydcbiAgICAgIH0pXG5cbiAgICB0aGlzLm9wdHMuaG9yaXpvbnRhbExlZ2VuZFdpZHRoID0gTWF0aC5yb3VuZCh0aGlzLmxlZ2VuZERpc3BsYXkubm9kZSgpXG4gICAgICAuZ2V0QkJveCgpXG4gICAgICAud2lkdGgpXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgLy8gRGlzcGxheSBpbiB2ZXJ0aWNhbCBvcmRlclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgbGVnZW5kVGV4dCA9IHRoaXMub3B0cy5jaGFydC5jb250YWluZXIuc2VsZWN0QWxsKCdzdmcgLnZjLWxlZ2VuZC1sYWJlbCcpXG4gICAgbGV0IGJhc2ljV2lkdGggPSB0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLmxlZnQgKyB0aGlzLm9wdHMuY2hhcnQubWFyZ2luLnJpZ2h0XG5cbiAgICBpZiAodGhpcy5vcHRzLnBvc2l0aW9uID09PSBjb25zdGFudHMuRElSX1JJR0hUKSB7XG4gICAgICAvLyBEaXNwbGF5IGxlZ2VuZHMgdmVydGljYWxseSBvbiByaWdodCBzaWRlXG4gICAgICBiYXNpY1dpZHRoICs9IGNvbnN0YW50cy5MRUdFTkRfU0hPV19XSURUSFxuICAgICAgbGV0IGxlZ2VuZFBvcyA9IGNvbnN0YW50cy5WRVJUX1BPU19MRUdFTkRcbiAgICAgIGlmICh0aGlzLm9wdHMubWF4V2lkdGhMZWdlbmQgPT09IGNvbnN0YW50cy5MRUdFTkRfTUFYX1dJRFRIKSB7XG4gICAgICAgIGxlZ2VuZFBvcyA9IGNvbnN0YW50cy5WRVJUX1BPU19MRUdFTkQgKyAxMFxuICAgICAgfVxuICAgICAgbGV0IGxlZ2VuZFhQb3MgPSBNYXRoLmZsb29yKHRoaXMub3B0cy5jaGFydC5jaGFydFdpZHRoICogbGVnZW5kUG9zIC8gMTAwKVxuICAgICAgbGV0IHhCdWZmID0gdGhpcy5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGggLSBsZWdlbmRYUG9zXG4gICAgICB4QnVmZiA9IE1hdGguZmxvb3IoKHhCdWZmIC0gdGhpcy5vcHRzLmxlZ2VuZERpdi53aWR0aCkgLyAyKVxuICAgICAgbGVnZW5kWFBvcyArPSB4QnVmZlxuXG4gICAgICBjb25zdCBsZWdlbmRZUG9zID0gTWF0aC5mbG9vcigodGhpcy5vcHRzLmNoYXJ0LmNoYXJ0RnVsbFNwYWNlLmhlaWdodCAtIHRoaXMub3B0cy5sZWdlbmREaXYuaGVpZ2h0KSAvIDIpXG5cbiAgICAgIHRoaXMubGVnZW5kRGlzcGxheVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgbGVnZW5kWFBvcyArICcsJyArIGxlZ2VuZFlQb3MgKyAnKScpXG5cbiAgICB9XG5cbiAgICBjb25zdCBkM1N2ZyA9IHRoaXMub3B0cy5jaGFydC5zdmdcblxuICAgIGlmICh0aGlzLm9wdHMucG9zaXRpb24gPT09IGNvbnN0YW50cy5ESVJfVE9QKSB7XG4gICAgICBiYXNpY1dpZHRoID0gY29uc3RhbnRzLkxFR0VORF9TUEFDRSAqIHNlbGYub3B0cy5zcGFjaW5nTmFtZXMubGVuZ3RoICsgY29uc3RhbnRzLkRBVEFfSU5URVJWQUxfQlVGRkVSX1hcblxuICAgICAgaWYgKCh0aGlzLm9wdHMuaG9yaXpvbnRhbExlZ2VuZFdpZHRoICsgY29uc3RhbnRzLkxFR0VORF9SSUdIVF9CVUZGRVIpID4gc2VsZi5vcHRzLmNoYXJ0LmNoYXJ0V2lkdGgpIHtcbiAgICAgICAgLy8gSGlkZSBvbmx5IHRleHQgYW5kIGRpc3BsYXkgQ29sb3IgYm94IHdpdGggdG9vbHRpcFxuICAgICAgICBkM1N2Zy5zZWxlY3RBbGwoJy52Yy1sZWdlbmQnKVxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcmllc05hbWUgPSBzZWxlY3QodGhpcykuc2VsZWN0KCd0ZXh0JykuaHRtbCgpXG4gICAgICAgICAgICBzZWxlY3QodGhpcykuc2VsZWN0KCdyZWN0JylcbiAgICAgICAgICAgICAgLmh0bWwoJycpXG4gICAgICAgICAgICAgIC5hcHBlbmQoJ3N2Zzp0aXRsZScpXG4gICAgICAgICAgICAgIC50ZXh0KHNlcmllc05hbWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgbGVnZW5kVGV4dC5jbGFzc2VkKCd2Yy1oaWRkZW4nLCB0cnVlKVxuXG4gICAgICAgIGlmIChzZWxmLm9wdHMuY2hhcnQuY2hhcnRXaWR0aCA8IGJhc2ljV2lkdGgpIHtcbiAgICAgICAgICAvLyBkaXNwbGF5IGJveCB2ZXJ0aWNhbGx5XG4gICAgICAgICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHkgPSBpICogY29uc3RhbnRzLkxFR0VORF9ZX1NQQUNFXG4gICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKDAsJyArIHkgKyAnKSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGlzcGxheSBvbmx5IGJveCBvbiB0b3BcbiAgICAgICAgICB0aGlzLmxlZ2VuZEJsb2NrXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IGNvbnN0YW50cy5MRUdFTkRfU1BBQ0UgKiBpXG4gICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywgMCknXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEaXNwbGF5IGxlZ2VuZCBvbiB0b3Agd2l0aCBib3RoIHRleHQsIGJveCBhbmQgcmVtb3ZlIHRvb2x0aXBcbiAgICAgICAgdGhpcy5sZWdlbmRCbG9ja1xuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IHNlbGYub3B0cy5zcGFjaW5nTmFtZXNbaSAtIDFdID8gKHNlbGYub3B0cy5zcGFjaW5nTmFtZXNbaSAtIDFdICsgY29uc3RhbnRzLkxFR0VORF9TUEFDRSAqIGkpIDogMFxuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHggKyAnLCAwKSdcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRzLmlzUGllTGVnZW5kKSB7XG4gICAgICAgICAgZDNTdmcuc2VsZWN0QWxsKCcudmMtbGVnZW5kJylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZWN0KHRoaXMpLnNlbGVjdCgncmVjdCcpXG4gICAgICAgICAgICAgICAgLmh0bWwoJycpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIGxlZ2VuZFRleHQuY2xhc3NlZCgndmMtaGlkZGVuJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHNob3dIaWRlIChzaG93RmxhZykge1xuICAgIHNob3dGbGFnID0gISFzaG93RmxhZ1xuICAgIHRoaXMub3B0cy52aXNpYmxlID0gc2hvd0ZsYWdcbiAgICB0aGlzLmxlZ2VuZERpc3BsYXkgJiYgdGhpcy5sZWdlbmREaXNwbGF5LmNsYXNzZWQoJ3ZjLWhpZGRlbicsICFzaG93RmxhZylcbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5sZWdlbmRCbG9jayAmJiB0aGlzLmxlZ2VuZEJsb2NrLnJlbW92ZSgpXG4gICAgdGhpcy5sZWdlbmREaXNwbGF5ICYmIHRoaXMubGVnZW5kRGlzcGxheS5yZW1vdmUoKVxuICAgIHRoaXMub3B0cyA9IG51bGxcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=