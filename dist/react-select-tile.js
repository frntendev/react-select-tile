(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.target = "browser";
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.jsx", function(exports, require, module, __filename, __dirname){

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
});
___scope___.file("styles.js", function(exports, require, module, __filename, __dirname){

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
//# sourceMappingURL=react-select-tile.js.map?tm=1577491553897
});
___scope___.file("GlobalStyles.jsx", function(exports, require, module, __filename, __dirname){

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
});
___scope___.file("helpers.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
            xPos += el.offsetLeft - xScroll + el.clientLeft;
            yPos += el.offsetTop - yScroll + el.clientTop;
        }
        else {
            // for all other non-BODY elements
            xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
            yPos += el.offsetTop - el.scrollTop + el.clientTop;
        }
        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}
exports.getPosition = getPosition;
function useOutsideAlerter(ref, fn) {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            fn();
        }
    }
    react_1.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}
exports.useOutsideAlerter = useOutsideAlerter;
exports.lockBody = () => {
    if (typeof document !== "undefined") {
        const body = document.body;
        exports.addClass(body, "body-lock");
    }
};
exports.unLockBody = () => {
    if (typeof document !== "undefined") {
        const body = document.body;
        exports.removeClass(body, "body-lock");
    }
};
exports.addClass = (el, className) => {
    if (el.classList)
        el.classList.add(className);
    else if (!exports.hasClass(el, className))
        el.className += " " + className;
};
exports.removeClass = (el, className) => {
    if (el.classList)
        el.classList.remove(className);
    else if (exports.hasClass(el, className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
    }
};
exports.hasClass = (el, className) => {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};
//# sourceMappingURL=react-select-tile.js.map?tm=1577266318304
});
___scope___.file("Menu.jsx", function(exports, require, module, __filename, __dirname){

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
});
___scope___.file("Input.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const styles_1 = require("./styles");
exports.Input = ({ inputClassName, inputStyle, value = "", inputRef, placeholder, onClick, onFocus, onChange, defaultValue }) => {
    return (core_1.jsx("input", { readOnly: true, css: styles_1.style.input, className: inputClassName, style: inputStyle, type: "text", onClick: onClick, onFocus: onFocus, onChange: onChange, value: value, ref: inputRef, placeholder: placeholder, defaultValue: defaultValue }));
};
//# sourceMappingURL=Input.js.map
});
___scope___.file("MenuItem.jsx", function(exports, require, module, __filename, __dirname){

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
});
___scope___.file("EmptyStatus.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.EmptyStatus = () => {
    return React.createElement("div", null, "List is empty");
};
//# sourceMappingURL=EmptyStatus.js.map
});
return ___scope___.entry = "index.jsx";
});

FuseBox.import("default/index.jsx");
FuseBox.main("default/index.jsx");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((m||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),f=e.substring(o+1);return[a,f]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(m){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function f(e){return{server:require(e)}}function u(e,n){var o=n.path||"./",a=n.pkg||"default",u=r(e);if(u&&(o="./",a=u[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=u[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!m&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return f(e);var s=x[a];if(!s){if(m&&"electron"!==_.target)throw"Package not found "+a;return f(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,d=t(o,e),c=i(d),p=s.f[c];return!p&&c.indexOf("*")>-1&&(l=c),p||l||(c=t(d,"/","index.js"),p=s.f[c],p||"."!==d||(c=s.s&&s.s.entry||"index.js",p=s.f[c]),p||(c=d+".js",p=s.f[c]),p||(p=s.f[d+".jsx"]),p||(c=d+"/index.jsx",p=s.f[c])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:d,validPath:c}}function s(e,r,n){if(void 0===n&&(n={}),!m)return r(/\.(js|json)$/.test(e)?h.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);_.dynamic(a,o),r(_.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=y[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function d(e){if(null!==e&&["function","object","array"].indexOf(typeof e)!==-1&&!e.hasOwnProperty("default"))return Object.isFrozen(e)?void(e.default=e):void Object.defineProperty(e,"default",{value:e,writable:!0,enumerable:!1})}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=u(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),f=x[t.pkgName];if(f){var p={};for(var v in f.f)a.test(v)&&(p[v]=c(t.pkgName+"/"+v));return p}}if(!i){var g="function"==typeof r,y=l("async",[e,r]);if(y===!1)return;return s(e,function(e){return g?r(e):null},r)}var w=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var b=i.locals={},j=n(t.validPath);b.exports={},b.module={exports:b.exports},b.require=function(e,r){var n=c(e,{pkg:w,path:j,v:t.versions});return _.sdep&&d(n),n},m||!h.require.main?b.require.main={filename:"./",paths:[]}:b.require.main=h.require.main;var k=[b.module.exports,b.require,b.module,t.validPath,j,w];return l("before-import",k),i.fn.apply(k[0],k),l("after-import",k),b.module.exports}if(e.FuseBox)return e.FuseBox;var p="undefined"!=typeof ServiceWorkerGlobalScope,v="undefined"!=typeof WorkerGlobalScope,m="undefined"!=typeof window&&"undefined"!=typeof window.navigator||v||p,h=m?v||p?{}:window:global;m&&(h.global=v||p?{}:window),e=m&&"undefined"==typeof __fbx__dnm__?e:module.exports;var g=m?v||p?{}:window.__fsbx__=window.__fsbx__||{}:h.$fsbx=h.$fsbx||{};m||(h.require=require);var x=g.p=g.p||{},y=g.e=g.e||{},_=function(){function r(){}return r.global=function(e,r){return void 0===r?h[e]:void(h[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){y[e]=y[e]||[],y[e].push(r)},r.exists=function(e){try{var r=u(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=u(e,{}),n=x[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var f=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);f(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=x.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(x[e])return n(x[e].s);var t=x[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=x,r.isBrowser=m,r.isServer=!m,r.plugins=[],r}();return m||(h.FuseBox=_),e.FuseBox=_}(this))
//# sourceMappingURL=react-select-tile.js.map?tm=1577491559559