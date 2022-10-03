import { DocumentScannerOutlined, HomeOutlined } from "@mui/icons-material";
import Home from "./screens/home";
import SignIn from "./screens/sign-in";

const routes = [
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <DocumentScannerOutlined/>,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <HomeOutlined/>,
    component: <Home />,
    noCollapse: true,
  },
];


export default routes