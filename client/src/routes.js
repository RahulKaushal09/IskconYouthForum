import SignIn from "../src/layouts/pages/authentication/sign-in";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icon from "@mui/material/Icon";
import Devotees from "./layouts/tables/devoteeTable/devotees";
import HomePage from "./layouts/pages/home";

const routes = [
  {
    type: "collapse",
    name: "Devotees Table",
    key: "tables",
    icon: (
      <Icon fontSize="small">
        <AccountCircleIcon />
      </Icon>
    ),
    route: "/devotees",
    component: <Devotees />,
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/signIn",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Presentation",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/home",
    component: <HomePage />,
  },
];

export default routes;
