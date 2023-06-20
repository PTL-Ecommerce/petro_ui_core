import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "options"];
import React from 'react';
import './styles.scss';
import { Radio } from 'antd';
var RadioGroup = function RadioGroup(_ref) {
  var className = _ref.className,
    options = _ref.options,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Radio.Group, Object.assign({
    className: "radio-group-custom ".concat(className),
    options: options
  }, rest));
};
RadioGroup.defaultProps = {
  className: 'primary',
  options: []
};
export default RadioGroup;