import Header from "./header/header";
import HeroSection from "./hero/herosection";
import CardSection from "./cardsection/cardsection";
import ImageOne from "./image/imageone"
import CardHorizontal from "./cardsection/cardhorizontal";
import VgImage from "./image/vg";
import Carousel from "./cardsection/carousel";
import TeamSection from "../team/teamsection";
import Footer from "./footer/footer";
import LocationsPage from "../location/LocationsPage";
import ContactHome from "./contact/contacthome";
const Home =()=>{



    return(
<div className="bg-white">

<HeroSection/>
<CardSection/>
<ImageOne/>
<CardHorizontal/>
<VgImage/>
<Carousel/>
<TeamSection/>
<LocationsPage/>
<ContactHome/>


</div>
    );
}
export default Home;