import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type"];
import React from 'react';
import './styles.scss';
import { Input as InputAntd } from 'antd';
var Input = function Input(_ref) {
  var type = _ref.type,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(InputAntd, Object.assign({
    className: "input-custom ".concat(type)
  }, rest));
};
Input.defaultProps = {
  type: 'primary'
};
export default Input;