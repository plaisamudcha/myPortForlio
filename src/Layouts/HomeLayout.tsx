import Footer from "@/components/Footer";
import NavHeader from "@/components/NavHeader";
import { Outlet } from "react-router";

function HomeLayout() {
  return (
    <div className="mx-auto max-w-[1024px] flex flex-col justify-between min-h-screen">
      <div>
        <NavHeader />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
