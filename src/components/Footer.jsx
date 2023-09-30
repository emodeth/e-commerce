function Footer() {
  return (
    <footer className="bg-black h-[150px] py-5">
      <ul className="container text-white flex items-center justify-center h-full text-[18px] flex-wrap gap-5">
        <li className="cursor-pointer hover:underline">About</li>
        <li className="cursor-pointer hover:underline">Store locator</li>
        <li className="cursor-pointer hover:underline">FAQs</li>
        <li className="cursor-pointer hover:underline">News</li>
        <li className="cursor-pointer hover:underline">Careers</li>
        <li className="cursor-pointer hover:underline">Contact us</li>
      </ul>
    </footer>
  );
}

export default Footer;
