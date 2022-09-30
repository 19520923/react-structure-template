import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export default styled(Typography)(({ theme, ownerState }) => {
  const { palette, typography } = theme;
  const { color, textTransform, verticalAlign, fontWeight, opacity } = ownerState;
  
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;

  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  };

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: color === "inherit" || !palette[color] ? "inherit" : palette[color].main,
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
  };
});
