import dcLogo from '/img/dc-logo.png';
import navbar from '../data/navbar';
export default function Header() {
    return (
        <header>
            <div className="container">
                <img className="header-logo" src={dcLogo} alt="DC Comics Logo" />
                <ul className="navbar">
                    {navbar.map(({ title, link }) => (
                        <li className="nav-item" key={title}>
                            <a href={link}>{title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header >
    )
}