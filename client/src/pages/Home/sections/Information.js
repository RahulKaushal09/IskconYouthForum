/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../componentsKit/MKBox";

// Material Kit 2 React examples
import RotatingCard from "../../../kitEx/Cards/RotatingCard";
import RotatingCardFront from "../../../kitEx/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../kitEx/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../kitEx/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../kitAssests/images/rotating-card-bg-front1.jpg";
import bgBack from "../../../kitAssests/images/rotating-card-bg-back2.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Our Mission
                    <br />
                    Empowering the Future Generation
                  </>
                }
                description="Guiding youth towards spiritual growth, meaningful connections, and impactful service, fostering a vibrant community rooted in ISKCON values."
              />
              <RotatingCardBack
                image={bgBack}
                title="Our Vision"
                description="We envision a community where young minds are nurtured in the teachings of Lord Krishna, cultivating leadership qualities to serve humanity with compassion and wisdom."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Join Us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="trending_up"
                  title="Spiritual Growth"
                  description="Nurture your spiritual journey through enlightening discussions, mentorship programs, and immersive retreats focused on deepening your connection with Lord Krishna."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="group"
                  title="Community Engagement"
                  description="Join a vibrant community of like-minded youth dedicated to spreading love, compassion, and the teachings of ISKCON through outreach programs, social events, and collaborative projects."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="star"
                  title="Leadership Development"
                  description="Unlock your leadership potential through training workshops, skill-building sessions, and hands-on experiences that empower you to become effective leaders within your local community and beyond."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="volunteer_activism"
                  title="Service Opportunities"
                  description="Discover meaningful ways to serve humanity and contribute to positive change through volunteering initiatives, charity drives, and seva projects that embody the spirit of selfless service taught by ISKCON."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}


export default Information;
