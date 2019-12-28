/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { style } from "./styles";
import { MenuItemProps } from "./types";

export const MenuItem = ({
  onClick,
  menuItemClassName,
  menuItemStyle,
  children,
  menuItemComponent,
  value = "",
  isActive,
  activeItemClassName,
  activeItemStyle
}: MenuItemProps) => {
  const MenuItemContent = menuItemComponent;
  const styles = {
    ...menuItemStyle,
    ...(isActive && activeItemStyle)
  };

  return MenuItemContent ? (
    <MenuItemContent>{children}</MenuItemContent>
  ) : (
    <div
      onClick={() => onClick && onClick(value)}
      css={css`
        ${style.menuItem};
        ${isActive && style.menuItemActive}
      `}
      className={`${menuItemClassName ? menuItemClassName : ""}${
        isActive ? ` ${activeItemClassName}` : ""
      }`}
      style={styles}
    >
      <div>{children}</div>
    </div>
  );
};
