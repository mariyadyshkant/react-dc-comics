import buyItems from "../data/buy-items"
// import cardLogo from '/img/buy-comics-digital-comics.png'
// import merchLogo from '/img/buy-comics-merchandise.png'
// import shopLogo from '/img/buy-comics-shop-locator.png'
// import subsLogo from '/img/buy-comics-subscriptions.png'
export default function Buy() {
    return (
        <div className="buy_section">
            <div className="container buy-container">
                {buyItems.map(({ id, image, title }) => {
                    return (
                        <div className="col" key={title}>
                            <img id={id} src={image} alt="" />
                            <h3>{title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

