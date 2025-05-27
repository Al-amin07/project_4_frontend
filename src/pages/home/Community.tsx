
import { Car, MapPin, Star, Users } from 'lucide-react'
import Count from './Count'
import Text from './Text'
// import Count from './Count'
const stats = [
    {
        label: "Cars Listed",
        value: 120000,
        icon: <Car className="h-8 w-8 mx-auto mb-2 text-teal-600" />,
    },
    {
        label: "Active Users",
        value: 50000,
        icon: <Users className="h-8 w-8 mx-auto mb-2 text-teal-600" />,
    },
    { label: "Reviews", value: 85000, icon: <Star className="h-8 w-8 mx-auto mb-2 text-teal-600" /> },
    { label: "Cities", value: 120, icon: <MapPin className="h-8 w-8 mx-auto mb-2 text-teal-600" /> },
]
export default function Community() {

    return (
        <section className=" bg-white">
            <div className="container px-4 mx-auto">
                <Text title='Join Our Community' desc='Join our community of car lovers — discover top deals, share honest reviews, and help others make smarter buying decisions.' />


                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats?.map((stat, index) => (
                        <div key={index} className="p-6">
                            {stat.icon}

                            <Count label={stat.label} target={Number(stat.value)} />


                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
