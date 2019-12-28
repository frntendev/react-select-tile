"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const react_1 = require("react");
const core_1 = require("@emotion/core");
const styles_1 = require("./styles");
const GlobalStyles_1 = require("./GlobalStyles");
const helpers_1 = require("./helpers");
const Menu_1 = require("./Menu");
const Input_1 = require("./Input");
const MenuItem_1 = require("./MenuItem");
const EmptyStatus_1 = require("./EmptyStatus");
exports.Select = ({ value, onItemClick, onInputChange, onMenuClose, onMenuOpen, menuIsOpen = false, containerClassName, containerStyle, inputClassName, inputStyle, menuClassName, menuStyle, menuItemClassName, menuItemStyle, activeItemClassName, activeItemStyle, menuComponent, emptyComponent, menuItemComponent, openAnimationDelay = 300, menuItemColumns = 4, menuItemWidth = "1fr", menuPosition = "bottom", placeholder = "", options, iconClassName, iconStyle }) => {
    var _a;
    const [showMenu, setShowMenu] = react_1.useState(menuIsOpen);
    const [showTransition, setShowTransition] = react_1.useState(false);
    const [offsetX, setOffsetX] = react_1.useState(0);
    const [offsetY, setOffsetY] = react_1.useState(0);
    const [menuWidth, setMenuWidth] = react_1.useState(0);
    const [inputHeight, setInputHeight] = react_1.useState(0);
    const menuRef = react_1.useRef(null);
    const inputRef = react_1.useRef(null);
    const delayedExpiration = () => {
        setShowTransition(true);
        setTimeout(() => {
            setShowMenu(false);
            if (onMenuClose)
                onMenuClose();
            setShowTransition(false);
        }, openAnimationDelay);
    };
    helpers_1.useOutsideAlerter(menuRef, delayedExpiration);
    react_1.useEffect(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (showMenu) {
            helpers_1.lockBody();
            const position = helpers_1.getPosition((_a = inputRef) === null || _a === void 0 ? void 0 : _a.current);
            setInputHeight(((_c = (_b = inputRef) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.offsetHeight) || 0);
            setOffsetX(position.x);
            setOffsetY(position.y + (((_e = (_d = inputRef) === null || _d === void 0 ? void 0 : _d.current) === null || _e === void 0 ? void 0 : _e.offsetHeight) || 0));
            setMenuWidth(((_g = (_f = inputRef) === null || _f === void 0 ? void 0 : _f.current) === null || _g === void 0 ? void 0 : _g.offsetWidth) || 0);
            if (onMenuOpen)
                onMenuOpen();
        }
        else {
            helpers_1.unLockBody();
        }
    }, [showMenu]);
    const EmptyContent = emptyComponent;
    const selectedItem = options.find(s => s.value === value);
    return (core_1.jsx("div", { css: styles_1.style.container, className: containerClassName, style: containerStyle },
        core_1.jsx("span", { css: styles_1.style.icon, className: iconClassName, style: iconStyle }),
        core_1.jsx(GlobalStyles_1.GlobalStyles, null),
        core_1.jsx(Input_1.Input, { inputStyle: inputStyle, onClick: () => setShowMenu(true), onFocus: () => setShowMenu(true), onChange: onInputChange, value: ((_a = selectedItem) === null || _a === void 0 ? void 0 : _a.label) || "", inputRef: inputRef, inputClassName: inputClassName, placeholder: placeholder }),
        showMenu && (core_1.jsx(Menu_1.Menu, { menuRef: menuRef, menuItemColumns: menuItemColumns, menuItemWidth: menuItemWidth, menuWidth: menuWidth, offsetX: offsetX, offsetY: offsetY, menuPosition: menuPosition, inputHeight: inputHeight, showTransition: showTransition, menuComponent: menuComponent, menuClassName: menuClassName, menuStyle: menuStyle },
            (!options || options.length === 0) &&
                (EmptyContent ? core_1.jsx(EmptyContent, null) : core_1.jsx(EmptyStatus_1.EmptyStatus, null)),
            options &&
                options.map(({ label, value }) => {
                    var _a;
                    return (core_1.jsx(MenuItem_1.MenuItem, { key: value, value: value, isActive: value === ((_a = selectedItem) === null || _a === void 0 ? void 0 : _a.value), onClick: val => {
                            delayedExpiration();
                            if (onItemClick) {
                                return onItemClick(val);
                            }
                        }, menuItemClassName: menuItemClassName, menuItemStyle: menuItemStyle, menuItemComponent: menuItemComponent, activeItemClassName: activeItemClassName, activeItemStyle: activeItemStyle }, label));
                })))));
};
//# sourceMappingURL=index.js.map