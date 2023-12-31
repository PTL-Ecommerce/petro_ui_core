import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import React from 'react';
import './styles.scss';
import { Radio as RadioAntd } from 'antd';
var Radio = function Radio(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(RadioAntd, Object.assign({
    className: "radio-group-custom ".concat(className)
  }, rest), children);
};
Radio.defaultProps = {
  className: 'primary'
};
export default Radio;