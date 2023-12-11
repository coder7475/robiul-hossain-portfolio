import Navbar from '../components/shared/Navbar';
import Banner from '../components/ui/Banner';
import Technology from '../components/ui/Technology';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Technology/>
      <p>Body</p>   
    </div>
  );
};

export default HomePage;