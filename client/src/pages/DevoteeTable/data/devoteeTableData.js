import MDTypography from "../../../components/MDTypography";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
export default async function data() {
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const data = await axios.post(
    `${API_BASE_URL}/getAllDevotees`,
    {},
    { withCredentials: true }
  );
   debugger
  return {
    columns: [
      { Header: "name", accessor: "name", width: "20%", align: "left" },
      { Header: "dob", accessor: "dob", width: "20%", align: "left" },
      {
        Header: "phoneNumber",
        accessor: "phoneNumber",
        width: "20%",
        align: "center",
      },
      { Header: "address", accessor: "address", width: "20%", align: "center" },
      { Header: "action", accessor: "action", width: "20%", align: "center" },
    ],

    rows: [
      {
        name: (
          <MDTypography
            component="p"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Ritik
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
            23/04/10
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
            65839573959
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
            Dhanas#134,colony
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
      },
    ],
  };
}
