import AdminElderly from "../Pages/Admin/AdminElderly";
import AdminElderlySinglePage from "../Pages/Admin/AdminElderlySinglePage";
import AdminSupportAgents from "../Pages/Admin/AdminSupportAgents";
import SupportAgentProfile from "../Pages/Admin/SupportAgentProfile";


export const adminRoutesMain = [

    // manage users
    { path: "Support-Agents", Component: AdminSupportAgents },
    { path: "Support-Agents/:id", Component: SupportAgentProfile }, 
    { path: "elderly", Component: AdminElderly },
    { path: "elderly/:id", Component: AdminElderlySinglePage }, 
];
