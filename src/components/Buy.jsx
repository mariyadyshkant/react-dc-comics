const buyItems = [
    {
        id: 1,
        title: 'Digital Comics',
        image: '/img/buy-comics-digital-comics.png',
    },
    {
        id: 2,
        title: 'DC Merchandise',
        image: '/img/buy-comics-merchandise.png',
    },
    {
        id: 3,
        title: 'Subscription',
        image: '/img/buy-comics-subscriptions.png',
    },
    {
        id: 4,
        title: 'Comic Shop Locator',
        image: '/img/buy-comics-shop-locator.png',
    },
    {
        id: 5,
        title: 'DC Power Visa',
        image: '/img/buy-dc-power-visa.svg',
    },
];
// import cardLogo from '/img/buy-comics-digital-comics.png'
// import merchLogo from '/img/buy-comics-merchandise.png'
// import shopLogo from '/img/buy-comics-shop-locator.png'
// import subsLogo from '/img/buy-comics-subscriptions.png'
export default function Buy() {
    return (
        <div className="container mx-auto px-4 py-5 bg-info text-white">
            <div className="row d-flex flex-row">
                {buyItems.map(({ image, title }) => {
                    return (
                        <div className="col d-flex flex-row justify-content-center align-items-center" key={title}>
                            <img src={image} alt="" />
                            <h3>{title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
