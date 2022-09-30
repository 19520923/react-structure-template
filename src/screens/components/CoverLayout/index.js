import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "../../../components/Box";
import Typography from "../../../components/Typography";

import PageLayout from "../../../layouts/LayoutContainers/PageLayout";

function CoverLayout({ color, header, title, description, image, top, children, bottom }) {
  return (
    <PageLayout background="white">
      <Grid
        container
        justifyContent="center"
        sx={{
          minHeight: "75vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <Box mt={top} mb={bottom}>
            <Box pt={3} px={3}>
              {!header ? (
                <>
                  <Box mb={1}>
                    <Typography variant="h3" fontWeight="bold" color={color}>
                      {title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </Typography>
                </>
              ) : (
                header
              )}
            </Box>
            <Box p={3}>{children}</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            height="100%"
            display={{ xs: "none", md: "block" }}
            position="relative"
            right={{ md: "-12rem", xl: "-16rem" }}
            mr={-16}
            sx={{
              transform: "skewX(-10deg)",
              overflow: "hidden",
              borderBottomLeftRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
            }}
          >
            <Box
              ml={-8}
              height="100%"
              bgColor={color}
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                transform: "skewX(10deg)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "primary",
  top: 20,
  bottom: 0,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  bottom: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
