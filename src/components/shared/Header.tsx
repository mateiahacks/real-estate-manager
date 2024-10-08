import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="md:px-28 py-7 px-8 border-b border-gray-1">
      <Link to={"/"}>
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="object-center object-contain w-28 cursor-pointer"
        />
      </Link>
    </header>
  );
};

export default Header;
