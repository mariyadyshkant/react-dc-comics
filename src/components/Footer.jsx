import footerLinks from "../data/footer-links";
import dcLogoBg from "/public/img/dc-logo-bg.png"

export default function Footer() {
    return (
        <footer>
            <img className="logo-bg" src={dcLogoBg} alt="" />
            <div className="container">
                <div className="footer-row">
                    {footerLinks.map(({ title, links, shop }) =>
                        <div className="col" key={title}>
                            <h3>{title}</h3>
                            <ul>
                                {links.map(({ name, url }) =>
                                    <li>
                                        <a href={url}>{name}</a>
                                    </li>
                                )}
                            </ul>
                            {shop &&
                                shop.map(({ title, links }) =>
                                    <><h3>{title}</h3>
                                        <ul>
                                            {links.map(({ name, url }) =>
                                                <li>
                                                    <a href={url}>{name}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </>
                                )}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    )
}
