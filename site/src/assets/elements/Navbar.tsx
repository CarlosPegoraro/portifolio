import "../css/style.css"

export function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg mx-auto px-5 pb-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <img className="menu" src="./image/icons/list.svg" alt=""/>
                    </button>
                    <a className="navbar-brand mx-sm-3" href="#"><img className="brand" src="./image/logo/logo.svg" alt=""/></a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item px-3 mx-sm-3">
                                <a className="nav-link text-secondary" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item px-3 mx-sm-3">
                                <a className="nav-link text-secondary" href="#">Sobre mim</a>
                            </li>
                            <li className="nav-item px-3 mx-sm-3">
                                <a className="nav-link text-secondary" href="#"
                                    aria-disabled="true">Trabalhos</a>
                            </li>
                            <li className="nav-item px-3 mx-sm-3">
                                <a className="nav-link text-secondary" href="#"
                                    aria-disabled="true">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}