import ProductsPage from "../Products/ProductsPage";
import CardComponent from "./cards";
import HeadlineCards from "./headlinecard";
import Main from "./main";

const AboutUs = () => {
    return (
        <div className="py-10">
            <Main/>
            <ProductsPage/>
            <HeadlineCards/>
        </div>
    );
};

export default AboutUs;