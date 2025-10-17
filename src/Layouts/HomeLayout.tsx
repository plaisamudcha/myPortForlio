import NavHeader from "@/components/NavHeader";
import { Outlet } from "react-router";

function HomeLayout() {
  return (
    <div className="mx-auto max-w-[1024px]">
      <NavHeader />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
