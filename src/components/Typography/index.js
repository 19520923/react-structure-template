import { forwardRef } from "react";
import PropTypes from "prop-types";

import TypographyRoot from "./TypographyRoot";

const Typography = forwardRef(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      opacity,
      children,
      ...rest
    },
    ref
  ) => (
    <TypographyRoot
      {...rest}
      ref={ref}
      ownerState={{ color, textTransform, verticalAlign, fontWeight, opacity }}
    >
      {children}
    </TypographyRoot>
  )
);

Typography.defaultProps = {
  color: "dark",
  fontWeight: false,
  textTransform: "none",
  verticalAlign: "unset",
  opacity: 1,
};

Typography.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
  ]),
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: PropTypes.oneOf([
    "none",
    "capitalize",
    "uppercase",
    "lowercase",
  ]),
  verticalAlign: PropTypes.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]),
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
};

export default Typography;
