import Text from "./Text";

const faqs = [
    {
        question: "What financing options are available for purchasing a car?",
        answer: "We offer multiple financing options, including bank loans, lease-to-own programs, and in-house financing. Our partnerships with leading financial institutions allow us to provide competitive interest rates and flexible repayment terms. You can apply online or visit our dealership to discuss the best financing option for your budget and needs."
    },
    {
        question: "How do I schedule a test drive?",
        answer: "Scheduling a test drive is simple! Visit our website, browse our available cars, and click the 'Schedule Test Drive' button. You can select your preferred date and time, and our team will confirm the appointment. On the day of your test drive, bring your driver's license and any required documentation."
    },
    {
        question: "What kind of warranty do you offer on cars?",
        answer: "We provide a **comprehensive warranty** on all our vehicles. New cars come with a manufacturer’s warranty covering defects and major components for up to 5 years. Certified pre-owned vehicles include an extended 1-year warranty covering essential repairs and roadside assistance. Additional coverage options are available, such as extended warranties for extra peace of mind."
    },
    {
        question: "Can I trade in my old car for a new one?",
        answer: "Yes, we offer trade-in services to help you upgrade to a new car seamlessly. Our appraisal process considers factors like your car’s make, model, year, mileage, and condition. You can get an estimated trade-in value online by entering your car details or visit our showroom for an in-person appraisal."
    },
    {
        question: "Do you offer home delivery for purchased cars?",
        answer: "Yes, we provide a convenient home delivery service! After purchasing your car online or in-store, you can choose to have it delivered to your home or workplace. Our delivery service includes a final vehicle inspection and a walkthrough of its features by a professional. Delivery availability depends on your location,"
    },
    {
        question: "How do I maintain my car for long-term performance?",
        answer: "Regular maintenance is crucial for keeping your car in top condition. We recommend following these steps:\n\n1. **Regular Oil Changes** – Change the oil and filter every 5,000-7,500 miles to ensure engine health.\n2. **Tire Maintenance** – Rotate your tires every 6,000 miles and keep them properly inflated for better mileage.\n3. **Brake Inspections**  "
    }
];


const Faq = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">


                <Text title="Frequently asked questions." desc="Have questions about buying, financing, or maintaining your car? We’ve got you covered! Explore our FAQs to find answers to common queries about test drives, warranties, trade-ins, and more." />
                <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {
                        faqs.map(faq => <div key={faq.question} className="shadow-md p-6">
                            <div className="inline-block bg-teal-500  p-3 text-white  rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">{faq?.question}</h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                    {faq?.answer}
                                </p>
                            </div>
                        </div>)
                    }


                </div>
            </div>
        </section>
    );
};

export default Faq;





