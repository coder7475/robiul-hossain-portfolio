import Navbar from '../components/shared/Navbar';
import Banner from '../components/ui/Banner';
import Technology from '../components/ui/Technology';
import Footer from '../components/shared/Footer';
import Projects from '../components/ui/Projects';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Technology/>
      <Projects/>
      <Footer/>  
    </div>
  );
};

export default HomePage;