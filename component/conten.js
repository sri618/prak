export default ()=>{
    return(
        <div>
            <section className="blom">
                <div className="container">
                    <h1 className="boss">Selamat Datang Di Website Kami</h1>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/anu/3.jpg" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Film Yang Menarik</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/anu/4.jpg" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Pemesanan Terupdate</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/anu/5.jpg" alt=""/></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Pelayanan Maximal</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .boss{
                    text-align : center;
                }
                .blom{
                    margin-top:12px;
                    margin-bottom:4px;
                }
            `}</style>
        </div>
    );
}