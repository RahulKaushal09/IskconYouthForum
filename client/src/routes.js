import Table from "../src/layouts/tables/devoteeTable";
import SignIn from "../src/layouts/pages/authentication/sign-in";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icon from "@mui/material/Icon";
import Presentation from "../src/layouts/pages/presentation";

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
    component: <Table />,
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/pages/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Presentation",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/presentation",
    component: <Presentation />,
  },
];

export default routes;
