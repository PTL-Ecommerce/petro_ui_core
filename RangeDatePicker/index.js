import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import { Col, DatePicker, Row } from 'antd';
import React, { memo } from 'react';
import './style.scss';
var RangePicker = DatePicker.RangePicker;
var RangeDatePicker = function RangeDatePicker(_ref) {
  var rest = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React.createElement(RangePicker, Object.assign({}, rest, {
    className: "range-date-picker"
  }));
};
export default memo(RangeDatePicker);