import { forwardRef } from "react";
import InputIconRoot from "./InputIconRoot";
import InputIconBoxRoot from "./InputIconBoxRoot";
import InputWithIconRoot from "./InputWithIconRoot";
import InputRoot from "./InputRoot";

import PropTypes from "prop-types";


const Input = forwardRef(({ size, icon, error, success, disabled, ...rest }, ref) => {
  let template
  const iconDirection = icon.direction
  if (icon.component && icon.direction === "left") {
    template = (
      <InputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <InputIconBoxRoot ownerState={{ size }}>
          <InputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </InputIconRoot>
        </InputIconBoxRoot>
        <InputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, disabled }}
        />
      </InputWithIconRoot>
    );
  } else if (icon.component && icon.direction === "right") {
    template = (
      <InputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <InputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, disabled }}
        />
        <InputIconBoxRoot ownerState={{ size }}>
          <InputIconRoot fontSize="small" ownerState={{ size }}>
            {icon.component}
          </InputIconRoot>
        </InputIconBoxRoot>
      </InputWithIconRoot>
    );
  } else {
    template = (
      <InputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />
    );
  }

  return template;
})

Input.defaultProps = {
  size: "medium",
  icon: {
    component: false,
    direction: "none",
  },
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the SoftInput
Input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(["none", "left", "right"]),
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input