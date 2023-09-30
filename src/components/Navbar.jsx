import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(function () {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <nav
      className={`${"h-[120px] font-['Blinker'] fixed top-0 right-0 left-0 shadow-navbar ease-linear duration-100 z-40"} ${
        isSticky && "navbar--sticky"
      }`}
    >
      <div className="container flex items-center justify-between h-full bg-white">
        <Logo />
        <NavigationMenu />
      </div>
    </nav>
  );
}

export default Navbar;
