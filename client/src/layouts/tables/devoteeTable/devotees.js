import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

import axios from "axios";
import { toast } from "react-toastify";
import DevoteeTable from "../../../pages/DevoteeTable";
import MDTypography from "../../../components/MDTypography";

import { Grid } from "@mui/material";
import { Card } from "@mui/material";

import MDBox from "../../../components/MDBox";

import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import DataTable from "../../../examples/Tables/DataTable";
export default function Devotees() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const verfiyCookie = async () => {
      if (!cookies.token) {
        navigate("/signIn");
      }
      const API_BASE_URL = process.env.REACT_APP_API_URL;

      const { data } = await axios.post(
        `${API_BASE_URL}`,
        {},
        { withCredentials: true }
      );

      const { success } = data;
      if (success) {
        const devotees = await axios.post(
          `${API_BASE_URL}/getAllDevotees`,
          {},
          { withCredentials: true }
        );

        const rowsData = [];

        devotees.data.forEach((data) => {
          const row = {
            name: (
              <MDTypography
                component="p"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {data.name}
              </MDTypography>
            ),
            dob: (
              <MDTypography
                component="p"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {data.dob}
              </MDTypography>
            ),
            phoneNumber: (
              <MDTypography
                component="p"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {data.phoneNumber}
              </MDTypography>
            ),
            address: (
              <MDTypography
                component="p"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {data.address}
              </MDTypography>
            ),
            action: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                style={{ fontSize: "18px" }}
              >
                <EditIcon />
              </MDTypography>
            ),
          };

          rowsData.push(row);
        });

        const columnsData = [
          { Header: "name", accessor: "name", width: "20%", align: "left" },
          { Header: "dob", accessor: "dob", width: "20%", align: "left" },
          {
            Header: "phoneNumber",
            accessor: "phoneNumber",
            width: "20%",
            align: "center",
          },
          {
            Header: "address",
            accessor: "address",
            width: "20%",
            align: "center",
          },
          {
            Header: "action",
            accessor: "action",
            width: "20%",
            align: "center",
          },
        ];

        setRows(rowsData);
        setColumns(columnsData);
      }

      return success ? null : (removeCookie("token"), navigate("/signIn"));
    };

    verfiyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Devotees
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
