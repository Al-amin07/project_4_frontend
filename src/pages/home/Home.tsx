
import Header from "@/components/Header";
import Cars from "./Cars";
import Faq from "./Faq";
import Testimonial from "./Testimonial";
import Blog from "./Blog";






const Home = () => {
    return (
        <div className="space-y-20 ">

            <Header />
            <Cars />

            <Faq />
            <Blog />
            <Testimonial />

        </div>
    );
};

export default Home;