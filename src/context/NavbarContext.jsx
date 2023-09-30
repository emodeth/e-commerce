import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

function NavbarProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const [overlay, setOverlay] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <NavbarContext.Provider
      value={{
        isActive,
        setIsActive,
        isCartActive,
        setIsCartActive,
        overlay,
        setOverlay,
        scrollToTop,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

function useNavbar() {
  const context = useContext(NavbarContext);
  return context;
}

export { NavbarProvider, useNavbar };
