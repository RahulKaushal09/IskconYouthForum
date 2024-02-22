import Table from "../src/layouts/tables/devoteeTable";
import SignIn from "../src/layouts/authentication/sign-in";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icon from "@mui/material/Icon";

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
    route: "/devoteeTable",
    component: <Table />,
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
