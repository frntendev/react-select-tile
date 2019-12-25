"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styles_1 = require("./styles");
exports.MenuItem = ({ onClick, menuItemClassName, menuItemStyle, children, menuItemComponent, value = "" }) => {
    const MenuItemContent = menuItemComponent;
    return MenuItemContent ? (core_1.jsx(MenuItemContent, null, children)) : (core_1.jsx("div", { onClick: () => onClick && onClick(value), css: styles_1.style.menuItem, className: menuItemClassName, style: menuItemStyle }, children));
};
//# sourceMappingURL=MenuItem.js.map