import MKBox from "../../componentsKit/MKBox";
import DefaultNavbar from "../../kitEx/Navbars/DefaultNavbar";

import kitRoutes from "../../kitRoutes";

import bgImage from "../../assets/images/radhaMadhav_dark.jpg";
import { Card, Container, Grid } from "@mui/material";
import MKTypography from "../../componentsKit/MKTypography";
import Counters from "../../pages/Home/sections/Counters";
import Information from "../../pages/Home/sections/Information";
import Footer from "../../pages/Home/sections/Footer"
import Information3 from "./sections/information3";
function HomePresentation() {
  return (
    <>
      <DefaultNavbar routes={kitRoutes} isSignInPage={true} />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={15}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              ISKCON Youth Forum{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              fontWeight="bolder"
              fontSize="19px"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Your Hub for Spiritual Growth & Community. Engage in discussions,
              service projects, and events tailored for youth. Join us in a
              journey of self-discovery and service
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Information3 />
      </Card>
      <Footer />
    </>
  );
}
export default HomePresentation;
