import { useEffect } from "react";

export function getPosition(el: HTMLElement | null) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent as HTMLElement;
  }
  return {
    x: xPos,
    y: yPos
  };
}
export function useOutsideAlerter(ref, fn) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      fn();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export const lockBody = () => {
  if (typeof document !== "undefined") {
    const body = document.body;
    addClass(body, "body-lock");
  }
};

export const unLockBody = () => {
  if (typeof document !== "undefined") {
    const body = document.body;
    removeClass(body, "body-lock");
  }
};

export const addClass = (el, className) => {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
};

export const removeClass = (el, className) => {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
};
export const hasClass = (el, className) => {
  if (el.classList) return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};
