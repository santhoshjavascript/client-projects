import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../features/Footer/components/Footer";
import NavBar from "../features/Header/components/NavBar";
import Spinner from "../components/Spinner/Spinner";

export default function AppLayOut() {
  const navigate = useNavigation();

  if (navigate.state === "loading") return <Spinner />;

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
