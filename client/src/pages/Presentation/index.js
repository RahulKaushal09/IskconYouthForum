import DefaultNavbar from "../../kitEx/Navbars/DefaultNavbar";

import kitRoutes from "../../kitRoutes";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={kitRoutes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Sign In",
          color: "info",
        }}
        sticky
      />
    </>
  );
}
export default Presentation;
