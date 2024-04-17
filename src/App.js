
import Footer from './footer/footer';
import Header from './header/header';
import CardHorizontal from './hero/cardsection/cardhorizontal';
import CardSection from './hero/cardsection/cardsection';
import Carousel from './hero/cardsection/carousel';
import HeroSection from './hero/herosection';
import ImageOne from './image/imageone';
import VgImage from './image/vg';
import TeamSection from './team/teamsection';

function App() {
  return (
    <div class="bg-gray-100">
<Header/>
<HeroSection/>
<CardSection/>
<ImageOne/>
<CardHorizontal/>
<VgImage/>
<Carousel/>
<TeamSection/>
<Footer/>
</div>
  );
}

export default App;
