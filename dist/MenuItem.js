"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styles_1 = require("./styles");
exports.MenuItem = ({ onClick, menuItemClassName, menuItemStyle, children, menuItemComponent, value = "", isActive, activeItemClassName, activeItemStyle }) => {
    const MenuItemContent = menuItemComponent;
    const styles = Object.assign(Object.assign({}, menuItemStyle), (isActive && activeItemStyle));
    return MenuItemContent ? (core_1.jsx(MenuItemContent, null, children)) : (core_1.jsx("div", { onClick: () => onClick && onClick(value), css: core_1.css `
        ${styles_1.style.menuItem};
        ${isActive && styles_1.style.menuItemActive}
      `, className: `${menuItemClassName ? menuItemClassName : ""}${isActive ? ` ${activeItemClassName}` : ""}`, style: styles },
        core_1.jsx("div", null, children)));
};
//# sourceMappingURL=MenuItem.js.map