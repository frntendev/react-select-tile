"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styles_1 = require("./styles");
exports.Input = ({ inputClassName, inputStyle, value = "", inputRef, placeholder, onClick, onFocus, onChange, defaultValue }) => {
    return (core_1.jsx("input", { readOnly: true, css: styles_1.style.input, className: inputClassName, style: inputStyle, type: "text", onClick: onClick, onFocus: onFocus, onChange: onChange, value: value, ref: inputRef, placeholder: placeholder, defaultValue: defaultValue }));
};
//# sourceMappingURL=Input.js.map