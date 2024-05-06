import CardSection from "../home/cardsection/cardsection";
import CardComponent from "./cards";
import HeadlineCards from "./headlinecard";
import Main from "./main";

const AboutUs = () => {
    return (
        <div className="py-10">
            <Main/>
            <CardSection/>
            <HeadlineCards/>
        </div>
    );
};

export default AboutUs;