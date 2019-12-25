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
//# sourceMappingURL=helpers.js.map