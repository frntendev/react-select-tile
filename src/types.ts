import { CSSProperties, ReactNode, RefObject } from "react";

type ReactComponent<P = {}> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  value?: string;
  menuIsOpen?: boolean;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  inputClassName?: string;
  inputStyle?: CSSProperties;
  menuClassName?: string;
  menuStyle?: CSSProperties;
  menuItemClassName?: string;
  menuItemStyle?: CSSProperties;
  activeItemClassName?: string;
  activeItemStyle?: CSSProperties;
  menuComponent?: ReactComponent;
  emptyComponent?: ReactComponent;
  menuItemComponent?: ReactComponent;
  openAnimationDelay?: number;
  menuItemColumns?: number;
  menuItemWidth?: number | string;
  menuPosition?: "bottom" | "top";
  placeholder?: string;
  options: Option[];
  onItemClick?(el: string): void;
  onInputChange?(el: React.ChangeEvent<HTMLInputElement>): void;
  onMenuClose?: () => void;
  onMenuOpen?: () => void;
  iconClassName?: string;
  iconStyle?: CSSProperties;
}

export interface MenuProps {
  menuRef:
    | string
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
  menuItemColumns?: number;
  menuItemWidth?: number | string;
  menuWidth: number;
  offsetX: number;
  offsetY: number;
  menuPosition?: string;
  inputHeight: number;
  showTransition?: Boolean;
  menuClassName?: string;
  menuStyle?: CSSProperties;
  menuComponent?: ReactComponent;
  children: ReactNode;
}

export interface InputProps {
  inputRef:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;
  inputClassName?: string;
  inputStyle?: CSSProperties;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onClick?(el: React.MouseEvent<HTMLInputElement>): void;
  onFocus?(el: React.FocusEvent<HTMLInputElement>): void;
  onChange?(el: React.ChangeEvent<HTMLInputElement>): void;
}

export interface MenuItemProps {
  onClick?(el: string): void;
  menuItemClassName?: string;
  menuItemStyle?: CSSProperties;
  children: ReactNode;
  menuItemComponent?: ReactComponent;
  value?: string;
  isActive?: Boolean;
  activeItemClassName?: string;
  activeItemStyle?: CSSProperties;
}
