import Chater from '../component/chat';
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
        <Chater/>
        </Layout>
        <Footer/>
    </div>
    );

}