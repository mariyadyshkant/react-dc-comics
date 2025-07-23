import buyItems from "../data/buy-items"

export default function Buy() {
    return (
        <div className="buy_section">
            <div className="container buy-container">
                {buyItems.map(({ id, image, title }) => {
                    return (
                        <div className="col" key={id}>
                            <img id={id} src={image} alt="" />
                            <h3>{title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

