import { GuestGard } from "../Guards/GuestGard";
import BaseLayout from "../layouts/BaseLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const GuestRoute = [
  {
    path: "/",
    element: (
      <GuestGard>
        <BaseLayout />
      </GuestGard>
    ),
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default GuestRoute;
