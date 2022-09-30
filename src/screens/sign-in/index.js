import { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";

import Box from "../../components/Box";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Button from "../../components/Button";

import CoverLayout from "../components/CoverLayout";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      top = {8}
      bottom = {8}
      title="Welcome back"
      description="Enter your email and password to sign in with Foodtalk"
    >
      <Box component="form" role="form">
        <Box mb={2}>
          <Box mb={1} ml={0.5}>
            <Typography component="label" variant="caption" fontWeight="bold">
              Email
            </Typography>
          </Box>
          <Input type="email" placeholder="Email" />
        </Box>
        <Box mb={2}>
          <Box mb={1} ml={0.5}>
            <Typography component="label" variant="caption" fontWeight="bold">
              Password
            </Typography>
          </Box>
          <Input type="password" placeholder="Password" />
        </Box>
        <Box display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <Typography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Show password
          </Typography>
        </Box>
        <Box mt={4} mb={1}>
          <Button variant="gradient" color="primary" fullWidth>
            sign in
          </Button>
        </Box>
        {/* <Box mt={3} textAlign="center">
          <Typography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <Typography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="primary"
              fontWeight="medium"
            >
              Sign up
            </Typography>
          </Typography>
        </Box> */}
      </Box>
    </CoverLayout>
  );
}

export default SignIn;
