import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { MdOutlineShoppingBasket } from "react-icons/md";
import Menu from "./components/Header/Movil/Menu";

function App() {
  const [itemsInBag] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const navOptions = [
    {
      title: "Sign in",
      subtitle: "Hello",
    },
    {
      title: "& Orders",
      subtitle: "Returns",
    },
    {
      title: "Prime",
      subtitle: "Your",
    },
    {
      title: itemsInBag,
      subtitle: <MdOutlineShoppingBasket />,
      item: "shoppingBag",
    },
  ];

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(showMenu);

  return (
    <div className="App">
      <Header navOptions={navOptions} onClick={handleShowMenu} />
      <Menu navOptions={navOptions} showMenu={showMenu} />
    </div>
  );
}

export default App;
