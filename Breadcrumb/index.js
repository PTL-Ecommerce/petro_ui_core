import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "className", "breadcrumbs", "breadcrumbItemProps"],
  _excluded2 = ["name"];
import React from 'react';
import './styles.scss';
import { Breadcrumb as BreadcrumbAntd } from 'antd';
var Breadcrumb = function Breadcrumb(_ref) {
  var type = _ref.type,
    className = _ref.className,
    breadcrumbs = _ref.breadcrumbs,
    breadcrumbItemProps = _ref.breadcrumbItemProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(BreadcrumbAntd, Object.assign({
    className: "breadcrumb-custom ".concat(className, " ").concat(type),
    type: type
  }, rest), breadcrumbs.map(function (_ref2, idx) {
    var name = _ref2.name,
      itemRest = _objectWithoutProperties(_ref2, _excluded2);
    return /*#__PURE__*/React.createElement(BreadcrumbAntd.Item, Object.assign({
      key: idx
    }, itemRest, breadcrumbItemProps), name);
  }));
};
Breadcrumb.defaultProps = {
  type: 'primary',
  className: '',
  breadcrumbs: []
};
export default Breadcrumb;