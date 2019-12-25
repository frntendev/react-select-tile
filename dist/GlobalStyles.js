"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
exports.GlobalStyles = () => {
    return (core_1.jsx(core_1.Global, { styles: core_1.css `
        .body-lock {
          position: fixed;
          overflow: hidden;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      ` }));
};
//# sourceMappingURL=GlobalStyles.js.map