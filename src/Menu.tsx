/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { style, swipeOut } from "./styles";
import { MenuProps } from "./types";

export const Menu = ({
  menuRef,
  menuItemColumns,
  menuItemWidth,
  menuWidth,
  offsetX,
  offsetY,
  menuPosition,
  inputHeight,
  showTransition,
  menuClassName,
  menuStyle,
  menuComponent,
  children
}: MenuProps) => {
  const MenuContent = menuComponent;

  return (
    <div
      ref={menuRef}
      css={css`
        ${css`
          position: fixed;
          max-width: calc(${menuWidth}px + 110px);
          min-width: ${menuWidth}px;
          left: ${offsetX}px;
          ${menuPosition === "bottom"
            ? `top: calc(${offsetY}px + 5px)`
            : `bottom : calc(${window.innerHeight}px - ${offsetY}px + ${inputHeight}px + 5px)`};
        `}
      `}
    >
      {MenuContent ? (
        <MenuContent>{children}</MenuContent>
      ) : (
        <div
          css={css`
            ${style.menu}
            ${css`
              grid-template-columns: repeat(
                ${menuItemColumns},
                ${menuItemWidth}
              );
            `}
            ${showTransition &&
              css`
                animation: ${swipeOut} 0.3s ease forwards;
              `}
          `}
          className={menuClassName}
          style={menuStyle}
        >
          {children}
        </div>
      )}
    </div>
  );
};
