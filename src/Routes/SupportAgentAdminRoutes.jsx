import AlertPage from "../Pages/SupportAgentAdminDashboard/AlertPage/AlertPage";
import Person from "../Pages/SupportAgentAdminDashboard/Dashboard/Alerts/Person/Person";
import SupportAgentElderliesSinglePage from "../Pages/SupportAgentAdminDashboard/SupportAgentElderliesSinglePage/SupportAgentElderliesSinglePage";
import SupportAgentElderliespage from "../Pages/SupportAgentAdminDashboard/SupportAgentElderliespage/SupportAgentElderliespage";
export const adminRoutes = [

    // manage users
    // { path: "allusers", Component: AllUsers },
    // { path: 'alerts', Component: AlertPage },
    { path: 'user/:id', Component:Person},
    { path:"elderly",Component:SupportAgentElderliespage},
    // { path:"elderly/:id",Component:SupportAgentElderliesSinglePage}
];
