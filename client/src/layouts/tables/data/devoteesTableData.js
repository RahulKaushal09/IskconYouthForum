import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDAvatar from "../../../components/MDAvatar";
import MDBadge from "../../../components/MDBadge";

// Images
import team2 from "../../../assets/images/team-2.jpg";
import team3 from "../../../assets/images/team-3.jpg";
import team4 from "../../../assets/images/team-4.jpg";
import { getAllDevotees } from "../../../services/apiService";
import axios from "axios";
import { useEffect, useState } from "react";

export default async function data() {
  try {
    const response = await axios.get(
      "http://localhost:8082/api/devotees/getAllDevotees"
    );
    const rows = response.data.map((devotee) => ({
      name: (
        <MDTypography
          component="p"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {devotee.name}
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
          {devotee.address}
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
          {(() => {
            const date = new Date(devotee.dob);
            const day = date.getUTCDate().toString().padStart(2, "0");
            const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // getUTCMonth() returns 0-11
            const year = date.getUTCFullYear();
            return `${day}/${month}/${year}`;
          })()}
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
          {devotee.phoneNumber}
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    }));
    return {
      columns: [
        { Header: "name", accessor: "name", width: "20%", align: "left" },
        { Header: "address", accessor: "address", align: "left" },
        { Header: "dob", accessor: "dob", align: "center" },
        { Header: "phoneNumber", accessor: "phoneNumber", align: "center" },
        { Header: "action", accessor: "action", align: "center" },
      ],

      rows: rows,
    };
  } catch (error) {
    console.error("Failed to fetch devotees:", error);
    return { columns: [], rows: [] };
  }
}
