/** @jsx jsx */
import { jsx } from "@emotion/core";
import { style } from "./styles";
import { InputProps } from "./types";

export const Input = ({
  inputClassName,
  inputStyle,
  value = "",
  inputRef,
  placeholder,
  onClick,
  onFocus,
  onChange,
  defaultValue
}: InputProps) => {
  return (
    <input
      readOnly
      css={style.input}
      className={inputClassName}
      style={inputStyle}
      type="text"
      onClick={onClick}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
      ref={inputRef}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};
