/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        .body-lock {
          position: fixed;
          overflow: hidden;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      `}
    />
  );
};
