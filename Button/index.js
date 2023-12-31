import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "children", "className"];
import React from 'react';
import './styles.scss';
import { Button as ButtonAntd } from 'antd';
var Button = function Button(_ref) {
  var type = _ref.type,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ButtonAntd, Object.assign({}, rest, {
    className: "button-custom ".concat(type, " ").concat(className),
    type: type
  }), children);
};
Button.defaultProps = {
  type: 'primary',
  className: ''
};
export default Button;