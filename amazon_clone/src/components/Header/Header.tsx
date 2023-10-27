const Header= () => {

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
        }
    ];

    const showOptions = navOptions.map((item) => {
        return (
            <div key={item.title} className="header_option">
                <h5 className="optionSubtitle">{item.subtitle}</h5>
                <h3 className="optionTitle">{item.title}</h3>
            </div>
        )
    })

  return (
    <div className="header">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        <div className="header_search">
            <input className="header_searchInput" type="text" />
        </div>
        <div className="header_nav">
            {showOptions}
        </div>
    </div>
  )
}

export default Header