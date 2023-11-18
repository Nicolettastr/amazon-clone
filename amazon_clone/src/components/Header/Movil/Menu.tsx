import { useEffect, useState } from "react";

interface NavOptions {
  title?: string | number;
  subtitle?: React.ReactNode;
  item?: string | undefined;
}

interface HeaderOptions {
  navOptions: NavOptions[];
  showMenu: boolean;
}

const Menu: React.FC<HeaderOptions> = ({ navOptions, showMenu }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimesions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimesions);
    return () => window.removeEventListener("resize", updateDimesions);
  }, []);

  const menuItems = navOptions.map((option) => {
    if (!option.item) {
      return <li key={option.title}>{`${option.subtitle} ${option.title}`}</li>;
    }
  });

  return (
    <>
      {width <= 500 ? (
        <div className={showMenu ? "inactive" : "active"}>
          <ul className="movilMenu">{menuItems}</ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Menu;
