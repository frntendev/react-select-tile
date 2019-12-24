/** @jsx jsx */
import { jsx } from "@emotion/core";
import { style } from "./styles";
import { MenuItemProps } from "./types";

export const MenuItem = ({
  onClick,
  menuItemClassName,
  menuItemStyle,
  children,
  menuItemComponent,
  value = ""
}: MenuItemProps) => {
  const MenuItemContent = menuItemComponent;

  return MenuItemContent ? (
    <MenuItemContent>{children}</MenuItemContent>
  ) : (
    <div
      onClick={() => onClick && onClick(value)}
      css={style.menuItem}
      className={menuItemClassName}
      style={menuItemStyle}
    >
      {children}
    </div>
  );
};
