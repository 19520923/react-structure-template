import { createTheme } from "@mui/material/styles";
import borders from "./base/borders";
import boxShadows from "./base/boxShadows";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import globals from "./base/globals";
import typography from "./base/typography";
import container from "./components/container";
import controlLabel from "./components/form/controlLabel";
import input from "./components/form/input";
import inputBase from "./components/form/inputBase";
import label from "./components/form/label";

import boxShadow from "./functions/boxShadow";
import hexToRgb from "./functions/hexToRgb";
import pxToRem from "./functions/pxToRem";
import rgba from "./functions/rgba";

export default createTheme({
  palette: { ...colors },
  breakpoints: {...breakpoints},
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
        styleOverrides: {
            ...globals,
            ...container,
        }
    },

    MuiInput: {...input},
    MuiInputBase: {...inputBase},
    MuiFormControlLabel: {...controlLabel},
    MuiFormLabel: {...label}
  }
});
