
import CountUp from "react-countup";
export default function Count({ target, label }: { target?: number, label: string }) {
    return (
        <div className="text-center">
            <CountUp
                start={0}
                end={target || 1200}
                suffix="+"
                separator=","
                enableScrollSpy
                scrollSpyDelay={200}
                className="text-4xl font-bold text-teal-600 mb-2"
            />
            <p className="text-gray-700">{label}</p>
        </div>
    )
}
