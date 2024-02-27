import SignIn from "../src/layouts/pages/authentication/sign-in";
import HomePage from "./layouts/pages/home";

const routes = [
  {
    key: "signIn",
    route: "/signIn",
    component: <SignIn />,
  },
  {
    key: "home",
    route: "/home",
    component: <HomePage />,
  },
];

export default routes;
