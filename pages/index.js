import Header from '../component/header';
import Navbar from '../component/navbar';
import Slider from '../component/corousel';
import Isi from '../component/conten';
import Footer from '../component/footer';

export default () =>{
  return(
    <div>
      <Header/>
      <Navbar/>
      <Slider/>
      <Isi/>
      <Footer/>
    </div>
  );
}