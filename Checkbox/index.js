import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "className"];
import React from 'react';
import './styles.scss';
import { Checkbox as CheckboxAntd } from 'antd';
var Checkbox = function Checkbox(_ref) {
  var type = _ref.type,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(CheckboxAntd, Object.assign({
    className: "checkbox-custom ".concat(type, " ").concat(className)
  }, rest));
};
Checkbox.defaultProps = {
  type: 'primary',
  className: ''
};
export default Checkbox;