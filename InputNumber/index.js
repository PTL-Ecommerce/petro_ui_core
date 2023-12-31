import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "type"];
import React from 'react';
import './styles.scss';
import { InputNumber as InputNumberAntd } from 'antd';
var InputNumber = function InputNumber(_ref) {
  var className = _ref.className,
    type = _ref.type,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(InputNumberAntd, Object.assign({
    className: "input-number-custom ".concat(className),
    type: type
  }, rest));
};
InputNumber.defaultProps = {
  className: 'primary',
  type: 'number'
};
export default InputNumber;