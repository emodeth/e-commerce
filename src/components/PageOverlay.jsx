import { useNavbar } from "../context/NavbarContext";

function PageOverlay() {
  const { overlay } = useNavbar();

  return (
    <div
      className={`${"bg-[#00000075] h-full w-full fixed left-0 top-0 z-[888] transition-all duration-300 ease-in hidden"} ${
        overlay ? "overlay--active" : null
      }`}
    ></div>
  );
}

export default PageOverlay;
