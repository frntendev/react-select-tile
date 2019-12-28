"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styles_1 = require("./styles");
exports.Menu = ({ menuRef, menuItemColumns, menuItemWidth, menuWidth, offsetX, offsetY, menuPosition, inputHeight, showTransition, menuClassName, menuStyle, menuComponent, children }) => {
    const MenuContent = menuComponent;
    return (core_1.jsx("div", { ref: menuRef, css: core_1.css `
        ${core_1.css `
          position: fixed;
          max-width: calc(${menuWidth}px + 110px);
          min-width: ${menuWidth}px;
          left: ${offsetX}px;
          ${menuPosition === "bottom"
            ? `top: calc(${offsetY}px + 5px)`
            : `bottom : calc(${window.innerHeight}px - ${offsetY}px + ${inputHeight}px + 5px)`};
        `}
      ` }, MenuContent ? (core_1.jsx(MenuContent, null, children)) : (core_1.jsx("div", { css: core_1.css `
            ${styles_1.style.menu}
            ${core_1.css `
              grid-template-columns: repeat(
                ${menuItemColumns},
                ${menuItemWidth}
              );
            `}
            ${showTransition &&
            core_1.css `
                animation: ${styles_1.swipeOut} 0.3s ease forwards;
              `}
          `, className: menuClassName, style: menuStyle }, children))));
};
//# sourceMappingURL=Menu.js.map