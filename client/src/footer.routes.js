// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "../src/componentsKit/MKTypography";

// Images
import logoCT from "../src/kitAssests/images/logo-ct-dark2.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "IYF",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "help & support",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright &copy; {date} {""}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        IYF
      </MKTypography>
      .
    </MKTypography>
  ),
};
