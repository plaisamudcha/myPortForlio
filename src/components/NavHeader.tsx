import { NavLink } from "react-router";
import HeaderLink from "./HeaderLink";

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/works", label: "Works" },
  { id: 4, path: "/contact", label: "Contact" },
];

function NavHeader() {
  return (
    <div className="flex justify-between h-15 items-end pb-2">
      <div>Logo</div>
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            <HeaderLink name={link.label} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavHeader;
