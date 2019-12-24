/** @jsx jsx */
import { useRef, useEffect, useState } from "react";
import { jsx } from "@emotion/core";
import { style } from "./styles";
import { GlobalStyles } from "./GlobalStyles";
import {
  getPosition,
  useOutsideAlerter,
  lockBody,
  unLockBody
} from "./helpers";
import { SelectProps, Option } from "./types";
import { Menu } from "./Menu";
import { Input } from "./Input";
import { MenuItem } from "./MenuItem";
import { EmptyStatus } from "./EmptyStatus";

export const Select = ({
  value,
  onItemClick,
  onInputChange,
  onMenuClose,
  onMenuOpen,
  menuIsOpen = false,
  containerClassName,
  containerStyle,
  inputClassName,
  inputStyle,
  menuClassName,
  menuStyle,
  menuItemClassName,
  menuItemStyle,
  menuComponent,
  emptyComponent,
  menuItemComponent,
  openAnimationDelay = 300,
  menuItemColumns = 4,
  menuItemWidth = 120,
  menuPosition = "bottom",
  placeholder = "",
  options
}: SelectProps) => {
  const [showMenu, setShowMenu] = useState<Boolean>(menuIsOpen);
  const [showTransition, setShowTransition] = useState<Boolean>(false);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [menuWidth, setMenuWidth] = useState<number>(0);
  const [inputHeight, setInputHeight] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const delayedExpiration = (): void => {
    setShowTransition(true);
    setTimeout(() => {
      setShowMenu(false);
      if (onMenuClose) onMenuClose();
      setShowTransition(false);
    }, openAnimationDelay);
  };

  useOutsideAlerter(menuRef, delayedExpiration);

  useEffect(() => {
    if (showMenu) {
      lockBody();
      const position = getPosition(inputRef?.current);
      setInputHeight(inputRef?.current?.offsetHeight || 0);
      setOffsetX(position.x);
      setOffsetY(position.y + (inputRef?.current?.offsetHeight || 0));
      setMenuWidth(inputRef?.current?.offsetWidth || 0);
      if (onMenuOpen) onMenuOpen();
    } else {
      unLockBody();
    }
  }, [showMenu]);

  const EmptyContent = emptyComponent;

  return (
    <div
      css={style.container}
      className={containerClassName}
      style={containerStyle}
    >
      <GlobalStyles />

      <Input
        inputStyle={inputStyle}
        onClick={() => setShowMenu(true)}
        onFocus={() => setShowMenu(true)}
        onChange={onInputChange}
        value={value}
        inputRef={inputRef}
        inputClassName={inputClassName}
        placeholder={placeholder}
      />
      {showMenu && (
        <Menu
          menuRef={menuRef}
          menuItemColumns={menuItemColumns}
          menuItemWidth={menuItemWidth}
          menuWidth={menuWidth}
          offsetX={offsetX}
          offsetY={offsetY}
          menuPosition={menuPosition}
          inputHeight={inputHeight}
          showTransition={showTransition}
          menuComponent={menuComponent}
          menuClassName={menuClassName}
          menuStyle={menuStyle}
        >
          {(!options || options.length === 0) &&
            (EmptyContent ? <EmptyContent /> : <EmptyStatus />)}
          {options &&
            options.map(({ label, value }: Option) => (
              <MenuItem
                key={value}
                value={value}
                onClick={onItemClick}
                menuItemClassName={menuItemClassName}
                menuItemStyle={menuItemStyle}
                menuItemComponent={menuItemComponent}
              >
                {label}
              </MenuItem>
            ))}
        </Menu>
      )}
    </div>
  );
};
