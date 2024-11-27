import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../features/Footer/components/Footer";
import NavBar from "../features/Header/components/NavBar";
import Spinner from "../components/Spinner/Spinner";

export default function AppLayOut() {
  const navigate = useNavigation();

  const location = useLocation();

  const noHeaderFooterRoutes = ["/cart/address"];

  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  if (navigate.state === "loading") return <Spinner />;

  return (
    <div>
      {!hideHeaderFooter && <NavBar />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
