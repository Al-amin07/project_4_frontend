
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../home/Faq";

// const faqs = [
//     {
//         question: "What documents are required to purchase a car?",
//         answer:
//             "You’ll need a valid driver’s license, proof of insurance, and proof of income or financing.",
//     },
//     {
//         question: "Can I trade in my old car?",
//         answer:
//             "Yes! We accept trade-ins. Bring your vehicle for an evaluation and get a quote instantly.",
//     },
//     {
//         question: "Do you offer financing options?",
//         answer:
//             "Absolutely. We partner with several banks and financing companies to get you the best possible rate.",
//     },
//     {
//         question: "Is there a warranty on purchased cars?",
//         answer:
//             "All our cars come with a standard limited warranty. Extended warranties are also available.",
//     },
// ];

const FAQPage = () => {
    return (
        <section className="max-w-4xl bg-white mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full space-y-2 ">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg  bg-white font-medium text-left text-gray-800 hover:text-blue-600 transition">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base px-6">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};

export default FAQPage;
