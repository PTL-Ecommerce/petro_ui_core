import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type"];
import React from 'react';
import './styles.scss';
import { Input as InputAntd } from 'antd';
var Password = function Password(_ref) {
  var type = _ref.type,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(InputAntd.Password, Object.assign({
    className: "password-custom ".concat(type)
  }, rest));
};
Password.defaultProps = {
  type: 'primary'
};
export default Password;