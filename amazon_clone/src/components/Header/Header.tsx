import { useEffect, useState } from "react";
import Logo from "../Logo/logo";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingBasket } from "react-icons/md";
import HeaderOptions from "./HeaderOptions";

interface NavOptions {
  title?: string | number;
  subtitle?: React.ReactNode;
  item?: string | undefined;
}

interface HeaderOptions {
  navOptions: NavOptions[];
  onClick: () => void;
}

const Header: React.FC<HeaderOptions> = ({ navOptions, onClick }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimesions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimesions);
    return () => window.removeEventListener("resize", updateDimesions);
  }, []);

  const showNavOptions = navOptions.map((option) => {
    return (
      <HeaderOptions
        title={option.title}
        subtitle={option.subtitle}
        item={option.item}
      />
    );
  });

  const bag = navOptions.map((option) => {
    if (option.item) {
      return (
        <span className="header_movilBag">
          <MdOutlineShoppingBasket />
          <span className="header_itemsInBag">{option.title}</span>
        </span>
      );
    }
  });

  return (
    <section className="header_container">
      <Logo />
      {width <= 500 ? (
        <span className="header_menu" onClick={onClick}>
          <GiHamburgerMenu />
          {bag}
        </span>
      ) : (
        <>{showNavOptions}</>
      )}
    </section>
  );
};

export default Header;
