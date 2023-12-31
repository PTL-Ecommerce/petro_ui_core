import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"];
import React from 'react';
import './styles.scss';
import { Input } from 'antd';
var TextAreaAntd = Input.TextArea;
var TextArea = function TextArea(_ref) {
  var className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(TextAreaAntd, Object.assign({
    className: ['textarea-custom', className].join(' ')
  }, rest));
};
TextArea.defaultProps = {
  className: ''
};
export default TextArea;