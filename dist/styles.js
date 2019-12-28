"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
exports.swipeIn = core_1.keyframes `
  from {
      opacity: 0;
      transform: translateY(-10px);
  }

  to {
      opacity: 1;
      transform: translateY(0);
  }
`;
exports.swipeOut = core_1.keyframes `
  from {
    opacity: 1;
      transform: translateY(0);

  }

  to {
    opacity: 0;
      transform: translateY(-10px);
  }
`;
exports.style = {
    container: core_1.css `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    min-height: 32px;
    pointer-events: auto;
    background: #fff;
    cursor: default;
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;
    z-index: 0;
    box-sizing: border-box;
    max-width: 100%;
    box-shadow: none;
    position: relative;
    z-index: 99;
    label: container;
  `,
    icon: core_1.css `
    border-style: solid;
    border-width: 0.15em 0.15em 0 0;
    content: "";
    display: inline-block;
    height: 0.45em;
    position: absolute;
    vertical-align: top;
    width: 0.45em;
    right: 0.7rem;
    top: 50%;
    border-color: #cccccc;
    transform: translateY(-50%) rotate(135deg);
    label: icon;
  `,
    input: core_1.css `
    outline: none;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    border: 0;
    cursor: pointer;
    color: transparent;
    text-shadow: 0 0 0 #000;
    font-size: 1rem;
    label: input;
  `,
    menu: core_1.css `
    max-height: 200px;
    overflow-y: scroll;
    background: #f5f5f5;
    z-index: 999;
    padding: 1.25rem;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.25rem;
    animation: ${exports.swipeIn} 0.3s ease forwards;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid #e4e4e4;
    label: menu;
  `,
    menuItem: core_1.css `
    padding: 0.5rem;
    background: #e6e6e6;
    cursor: pointer;
    transition: 0.2s all ease;
    label: menuItem;

    &:hover {
      background: #9575cd;
    }
  `,
    menuItemActive: core_1.css `
    background: #9575cd;
    label: menuItemActive;
  `
};
//# sourceMappingURL=styles.js.map