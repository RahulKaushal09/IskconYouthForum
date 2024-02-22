import { useState } from "react";
import { Navigate } from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDInput from "../../../components/MDInput";
import MDButton from "../../../components/MDButton";
import BasicLayout from "../../../layouts/authentication/components/BasicLayout";
import { signIn } from "../../../services/apiService";
import Cookies from "js-cookie";

const axios = require("axios");

function Basic() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = async () => {
    const res = await signIn(email, password);
    if (res.success) {
      Cookies.set("token", res.token, { expires: 30 });
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/devotees" replace={true} />
      ) : (
        <BasicLayout>
          <Card>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={1}
              textAlign="center"
            >
              <MDTypography
                variant="h4"
                fontWeight="medium"
                color="white"
                mt={1}
              >
                Sign in
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput
                    type="email"
                    label="Email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="password"
                    label="Password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    onClick={handleSignIn}
                    variant="gradient"
                    color="info"
                    fullWidth
                  >
                    sign in
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </BasicLayout>
      )}
    </>
  );
}

export default Basic;
