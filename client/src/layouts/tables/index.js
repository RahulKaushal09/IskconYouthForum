// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import DataTable from "../../examples/Tables/DataTable";

// Data
import devoteesTableData from "./data/devoteesTableData";
import { useEffect, useState } from "react";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import { Loader, Placeholder } from "rsuite";
import axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MDButton from "../../components/MDButton";

import Icon from "@mui/material/Icon";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import { addDevotee, verifyLoggedInUser } from "../../services/apiService";
import { useNavigate, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Tables() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [verified, setVerified] = useState(true);
  const [position, setPosition] = useState("right"); // or 'left' depending on your requirement
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTableData() {
      const tableData = await devoteesTableData();
      setColumns(tableData.columns);
      setRows(tableData.rows);
    }

    async function verify(token) {
      const response = await verifyLoggedInUser(token);
      if (response) {
        fetchTableData();
        setVerified(true);
      } else {
        debugger;
        setVerified(false);
        removeCookie("token");
        navigate("/authentication/sign-in", { replace: true });
      }
    }

    async function getTokenCookie() {
      const token = cookies.token;

      if (token == "undefined") {
        setVerified(false);
        navigate("/authentication/sign-in", { replace: true });
      } else {
        verify(token);
      }
    }

    getTokenCookie();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleAddDevotee = async () => {
    debugger
    const devoteeData = {
      name: name,
      dob: dob,
      phoneNumber: phoneNumber,
      email: email,
    };
    const res = await addDevotee(devoteeData);
    debugger
    if (res._id) {
      debugger;
    }
  };

  const handleClose = () => setOpen(false);
  return (
    <>
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
                  <Grid
                    pr={4}
                    container
                    spacing={2}
                    justifyContent={
                      position === "right" ? "flex-end" : "flex-start"
                    }
                  >
                    <Grid item>
                      <MDButton
                        onClick={handleOpen}
                        variant="gradient"
                        color="info"
                      >
                        <Icon>add</Icon>&nbsp;Add Devotee
                      </MDButton>
                    </Grid>
                  </Grid>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={true}
                    showTotalEntries={true}
                    canSearch={true}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} style={{ borderRadius: "20px" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                marginLeft: "10px",
              }}
              style={{ color: "blue" }}
            >
              Add Devotee
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-disabled"
                  label="DOB"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-password-input"
                  label="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-read-only-input"
                  label="PhoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <Grid container justifyContent="flex-end" mt={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mr: 1 }}
                  style={{ color: "black", borderColor: "1px solid black" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 5 }}
                  style={{ color: "white" }}
                  onClick={handleAddDevotee}
                >
                  Add
                </Button>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Tables;
