import dcLogo from '/img/dc-logo.png';
export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={dcLogo} alt="DC Comics Logo" />
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Characters</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Comics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Movies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">TV</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Games</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Collectibles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Videos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Fans</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}