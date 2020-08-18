import Header from '../component/header';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Layout from '../component/layout';
export default () =>{
  return(
    <div>
      <Header/>
      <Navbar/>
      <Layout>
            <div className="container">
                <img src="/bahan/1.png" className="big"/>
                <div className="alert alert-danger text-center" role="alert">
                    Mohon Maaf Halaman Masih Perlu Perbaikan Lebih Lanjut
                </div>
            </div>
      </Layout>
      <Footer/>
      <style jsx>{`
        .big{
            height:auto;
            width:700px;
            display:block;
            margin-left: auto;
            margin-right: auto;
        }
      `}</style>
    </div>
  );
}