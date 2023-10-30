import { useEffect, useState } from 'react';
import './header.css'
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai'

const Header= () => {

    const [itemsInBag] = useState(0);
    const [windowWidth, setWindowWIdth] = useState(window.innerWidth);
    const [showOptionsInMovil, setShowOptionsInMovil] = useState(false)

    const handleResize = () => {
        setWindowWIdth(window.innerWidth)
    }

    const navOptions = [
        {
            title: 'Sign in',
            subtitle: 'Hello'
        },
        {
            title: '& Orders',
            subtitle: 'Returns'
        },
        {
            title: 'Prime',
            subtitle: 'Your'
        },
        {
            title: itemsInBag,
            subtitle: <MdOutlineShoppingBasket/>,
            item: 'shoppingBag'
        }
    ];

    const handleShowOptions = () => {
        setShowOptionsInMovil(!showOptionsInMovil)
    }

    useEffect(() => {
        handleResize(),
        window.addEventListener('resize', handleResize);
        return () => {
            window.addEventListener('resize', handleResize);
        }
    }, [windowWidth])

    const showOptions = navOptions.map((item) => {
        return (
            <div key={Math.floor(Math.random() * 1000000)} className={item.item ? 'header_shoppingBag header_option' : 'header_option'}>
                <h5 className="optionSubtitle">{item.subtitle}</h5>
                <h3 className="optionTitle">{item.title}</h3>
            </div>
        )
    })

    const showOptionsInMovilList = navOptions.map((item) => {
        if(!item.item) {
            return (
                <li key={Math.floor(Math.random() * 215423)}>
                    {`${item.subtitle} ${item.title}`}
                </li>
            )
        }
    })

  return (
    <div className="header d_flex">
        <figure className='header_imgContainer'>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </figure>
        <div className={windowWidth <= 450 ? 'd_none' : 'header_search'}>
            <input className="header_searchInput" type="text" />
        </div>
        <div className="header_nav">
            {windowWidth <= 450 ? 
               <div className='d_flex shoppingBagMovilOptions'>
                    <button onClick={handleShowOptions}>
                        <AiOutlineMenu/>
                        {showOptionsInMovil ? 
                            <ul>
                                {showOptionsInMovilList}
                            </ul>
                            : ''
                            }
                    </button> 
                    {showOptions[showOptions.length -1]}
               </div>
               : showOptions }
        </div>
    </div>
  )
}

export default Header