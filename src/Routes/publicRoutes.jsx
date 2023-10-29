import Login from "../Pages/PublicPages/Auth/Login";
import SelectRolePage from "../Pages/PublicPages/Auth/SelectRolePage";
import SignUp from "../Pages/PublicPages/Auth/SignUp";


export const publicRoutes = [
  //---------------//Navbar Route//---------------//
  // { path: "/", Component: Home },
  { path: "/", Component: SelectRolePage },
  { path: "/login", Component: Login },
  { path: "/signup", Component: SignUp },

];
