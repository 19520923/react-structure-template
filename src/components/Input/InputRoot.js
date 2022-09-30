import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export default styled(InputBase)(({ theme, ownerState }) => {
  const { palette, boxShadows, functions, typography, borders } = theme;
  const { size, error, success, iconDirection, disabled } =
    ownerState;

  const { inputColors, grey, white, transparent } = palette;
  const { inputBoxShadow } = boxShadows;
  const { pxToRem, boxShadow } = functions;
  const { size: fontSize } = typography;
  const { borderRadius } = borders;

  const smallStyles = () => ({
    fontSize: fontSize.xs,
    padding: `${pxToRem(4)} ${pxToRem(12)}`,
  });

  const largeStyles = () => ({
    padding: pxToRem(12),
  });

  let focusedBorderColorValue = inputColors.borderColor.focus;

  if (error) {
    focusedBorderColorValue = inputColors.error;
  } else if (success) {
    focusedBorderColorValue = inputColors.success;
  }

  let focusedBoxShadowValue = boxShadow(
    [0, 0],
    [0, 2],
    inputColors.boxShadow,
    1
  );

  if (error) {
    focusedBoxShadowValue = inputBoxShadow.error;
  } else if (success) {
    focusedBoxShadowValue = inputBoxShadow.success;
  }

  const errorStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
    borderColor: inputColors.error,
  });

  const successStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
    borderColor: inputColors.success,
  });

  const withIconStyles = () => {
    let withIconPaddingLeftValue;
    if (iconDirection === "right") {
      withIconPaddingLeftValue = pxToRem(12);
    } else if (iconDirection === "left") {
      withIconPaddingLeftValue = 0;
    }

    let withIconPaddingRightValue;

    if ( iconDirection === "right") {
      withIconPaddingRightValue = 0;
    } else if (iconDirection === "left") {
      withIconPaddingRightValue = pxToRem(12);
    }

    return {
      borderColor: transparent.main,
      borderRadius: `0 ${borderRadius.md} ${borderRadius.md} 0`,
      paddingLeft: withIconPaddingLeftValue,
      paddingRight: withIconPaddingRightValue,
    };
  };

  return {
    backgroundColor: disabled ? `${grey[200]} !important` : white.main,
    pointerEvents: disabled ? "none" : "auto",
    ...(size === "small" && smallStyles()),
    ...(size === "large" && largeStyles()),
    ...(error && errorStyles()),
    ...(success && successStyles()),
    ...((iconDirection === "left" || iconDirection === "right") &&
      withIconStyles()),

    "&.Mui-focused": {
      borderColor: focusedBorderColorValue,
      paddingLeft: pxToRem(12),
      paddingRight: pxToRem(12),
      boxShadow: focusedBoxShadowValue,
      outline: 0,
    },

    "&.MuiInputBase-multiline": {
      padding: `${pxToRem(10)} ${pxToRem(12)}`,
    },
  };
});
