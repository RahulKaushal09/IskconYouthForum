import SignIn from "../src/layouts/pages/authentication/sign-in";
import Donate from "./pages/Donate";

import HomePage from "./layouts/pages/home";

const routes = [
  {
    key: "signIn",
    route: "/signIn",
    component: <SignIn />,
  },
  {
    key: "YOUTHPATRON",
    route: "/donate",
    component: <Donate />,
  },
  {
    key: "home",
    route: "/home",
    component: <HomePage />,
  },
];

export default routes;
