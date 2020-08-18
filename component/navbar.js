import Link from 'next/link';
export default ()=>{
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link href="/index">
                        <a class="navbar-brand">Ninja Ticket</a>
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto mr-6">
                            <li className="nav-item">
                                <Link href="/index">
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kategori
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                                    <Link href="/anak">
                                        <a className="dropdown-item">Anak - Anak</a>
                                    </Link>
                                    <Link href="/dewasa">
                                        <a className="dropdown-item">Dewasa</a>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link href="/daftar">
                                    <a className="nav-link">Daftar Pemesan</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/tentang">
                                    <a className="nav-link">About Us</a>
                                </Link>  
                            </li>
                            <li className="nav-item">
                                <Link href="/hubungi">
                                    <a className="nav-link">Contact Us</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/news">
                                    <a className="nav-link">Hot News</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                .navbar{
                    background-color:#E6E6FA;
                    font-family: Impact;
                    color : #000000;
                }
            `}</style>
        </div>
    );
}