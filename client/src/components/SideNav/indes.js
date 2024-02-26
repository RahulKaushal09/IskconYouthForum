/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import PropTypes from "prop-types";

import { Divider } from "@mui/material";

import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

import SidenavRoot from "../../examples/Sidenav/SidenavRoot";
import HomePage from "../../layouts/pages/home";

function SideNav() {
  return (
    <SidenavRoot variant="permanent" ownerState={false}>
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          sx={{ cursor: "pointer" }}
        ></MDBox>
        <MDBox display="flex" alignItems="center">
          <MDBox width={"100%"}>
            <a href={<HomePage />}>
              <MDTypography
                component="h6"
                variant="button"
                fontWeight="medium"
                color={"white"}
              >
                Iskcon Youth Forum
              </MDTypography>
            </a>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider />
    </SidenavRoot>
  );
}

export default SideNav;
