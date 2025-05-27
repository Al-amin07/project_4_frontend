
import Header from "@/components/Header";
import Cars from "./Cars";
import Faq from "./Faq";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import HowItWorks from "./HowItWorks";
import NewsLetter from "./NewsLetter";
import Discover from "./Discover";
import Community from "./Community";






const Home = () => {
    return (
        <div className="space-y-24 ">

            <Header />
            <Cars />

            <Blog />
            <HowItWorks />
            <Testimonial />
            <Faq />
            <Discover />
            <Community />
            <NewsLetter />

        </div>
    );
};

export default Home;