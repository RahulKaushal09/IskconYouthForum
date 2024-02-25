// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

const kitRoutes = [
  {
    name: "Explore",
    icon: <Icon>explore</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
          },
        ],
      },
    ],
  },
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "page sections",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "page headers",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "features",
            route: "/sections/page-sections/features",
          },
        ],
      },
      {
        name: "navigation",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
          },
        ],
      },
      {
        name: "input areas",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
          },
        ],
      },
      {
        name: "attention catchers",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
          },
        ],
      },
      {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
];

export default kitRoutes;
